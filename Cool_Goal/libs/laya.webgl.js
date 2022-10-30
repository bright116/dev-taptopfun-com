! function(d, a, T) {
    T.un, T.uns;
    var s = T.static,
        l = T.class,
        h = T.getset,
        o = (T.__newvec, laya.maths.Bezier),
        r = laya.resource.Bitmap,
        u = laya.utils.Browser,
        p = (laya.filters.ColorFilter,
            laya.utils.ColorUtils),
        c = T.Config,
        w = laya.resource.Context,
        t = (laya.display.cmd.DrawImageCmd,
            laya.events.Event, laya.display.cmd.FillTextCmd, laya.filters.Filter),
        f = laya.utils.FontInfo,
        m = laya.resource.HTMLCanvas,
        e = (laya.utils.HTMLChar,
            laya.resource.HTMLImage),
        R = (laya.utils.Handler, laya.net.Loader, laya.maths.Matrix),
        S = laya.maths.Point,
        M = laya.maths.Rectangle,
        C = laya.renders.Render,
        x = laya.renders.RenderSprite,
        i = laya.resource.Resource,
        n = (laya.display.cmd.RestoreCmd,
            laya.display.cmd.RotateCmd, laya.utils.RunDriver),
        _ = (laya.display.cmd.SaveCmd,
            laya.display.cmd.ScaleCmd, laya.display.Sprite),
        v = (laya.display.SpriteConst,
            laya.display.css.SpriteStyle, laya.display.Stage),
        g = laya.utils.Stat,
        b = laya.utils.StringKey,
        y = laya.system.System,
        A = (laya.display.Text,
            laya.resource.Texture),
        E = (laya.display.cmd.TransformCmd, laya.display.cmd.TranslateCmd,
            laya.utils.VectorGraphManager);
    laya.utils.WordText;
    T.interface("laya.webgl.submit.ISubmit"), T.interface("laya.webgl.canvas.save.ISaveData");
    var I = function() {
            function h() {}
            l(h, "laya.webgl.canvas.save.SaveBase");
            var t = h.prototype;
            return T.imps(t, {
                    "laya.webgl.canvas.save.ISaveData": !0
                }), t.isSaveMark = function() {
                    return !1;
                }, t.restore = function(t) {
                    this._dataObj[this._valueName] = this._value, (h.POOL[h.POOL._length++] = this)._newSubmit && (t._curSubmit = W.RENDERBASE);
                }, h._createArray = function() {
                    var t = [];
                    return t._length = 0, t;
                }, h._init = function() {
                    var t = h._namemap = {};
                    return t[1] = "ALPHA", t[2] = "fillStyle", t[8] = "font", t[256] = "lineWidth",
                        t[512] = "strokeStyle", t[8192] = "_mergeID", t[1024] = t[2048] = t[4096] = [],
                        t[16384] = "textBaseline", t[32768] = "textAlign", t[65536] = "_nBlendType", t[1048576] = "shader",
                        t[2097152] = "filters", t[8388608] = "_colorFiler", t;
                }, h.save = function(t, e, i, r) {
                    if ((t._saveMark._saveuse & e) !== e) {
                        t._saveMark._saveuse |= e;
                        var n = h.POOL,
                            a = 0 < n._length ? n[--n._length] : new h();
                        a._value = i[a._valueName = h._namemap[e]], a._dataObj = i, a._newSubmit = r;
                        var s = t._save;
                        s[s._length++] = a;
                    }
                }, h.POOL = laya.webgl.canvas.save.SaveBase._createArray(), h._namemap = h._init(),
                h;
        }(),
        P = function() {
            function r(t, e) {
                this.size = [0, 0], this.alpha = 1, this.ALPHA = 1, this.subID = 0, this.ref = 1,
                    this._cacheID = 0, this.clipMatDir = [99999999, 0, 0, 99999999], this.clipMatPos = [0, 0],
                    this.clipOff = [0, 0], this.defines = new Ct(), this.mainID = t, this.subID = e,
                    this.textureHost = null, this.texture = null, this.color = null, this.colorAdd = null,
                    this.u_mmat2 = null, this._cacheID = t | e, this._inClassCache = r._cache[this._cacheID],
                    0 < t && !this._inClassCache && (this._inClassCache = r._cache[this._cacheID] = [],
                        this._inClassCache._length = 0), this.clear();
            }
            l(r, "laya.webgl.shader.d2.value.Value2D");
            var t = r.prototype;
            return t.setValue = function(t) {}, t._ShaderWithCompile = function() {
                    return Lt.withCompile2D(0, this.mainID, this.defines.toNameDic(), this.mainID | this.defines._value, Ut.create, this._attribLocation);
                }, t.upload = function() {
                    var t = L;
                    L.worldMatrix4 === L.TEMPMAT4_ARRAY || this.defines.addInt(128), this.mmat = t.worldMatrix4,
                        L.matWVP && (this.defines.addInt(2048), this.u_MvpMatrix = L.matWVP.elements);
                    var e = Lt.sharders[this.mainID | this.defines._value] || this._ShaderWithCompile();
                    e._shaderValueWidth !== t.width || e._shaderValueHeight !== t.height ? (this.size[0] = t.width,
                        this.size[1] = t.height, e._shaderValueWidth = t.width, e._shaderValueHeight = t.height,
                        e.upload(this, null)) : e.upload(this, e._params2dQuick2 || e._make2dQuick2());
                }, t.setFilters = function(t) {
                    if (this.filters = t)
                        for (var e, i = t.length, r = 0; r < i; r++)(e = t[r]) && (this.defines.add(e.type),
                            e.action.setValue(this));
                }, t.clear = function() {
                    this.defines._value = this.subID + ($.shaderHighPrecision ? 1024 : 0), this.clipOff[0] = 0;
                }, t.release = function() {
                    --this.ref < 1 && (this._inClassCache && (this._inClassCache[this._inClassCache._length++] = this),
                        this.clear(), this.filters = null, this.ref = 1, this.clipOff[0] = 0);
                }, r._initone = function(t, e) {
                    r._typeClass[t] = e, r._cache[t] = [], r._cache[t]._length = 0;
                }, r.__init__ = function() {
                    r._initone(4, xt), r._initone(512, vt), r._initone(1, Tt), r._initone(9, Tt);
                }, r.create = function(t, e) {
                    var i = r._cache[t | e];
                    return i._length ? i[--i._length] : new r._typeClass[t | e](e);
                }, r._cache = [], r._typeClass = [], r.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                r;
        }(),
        B = function() {
            function n() {
                this._mat = new R();
            }
            l(n, "laya.webgl.canvas.save.SaveTranslate");
            var t = n.prototype;
            return T.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1;
            }, t.restore = function(t) {
                this._mat.copyTo(t._curMat), n.POOL[n.POOL._length++] = this;
            }, n.save = function(t) {
                var e = n.POOL,
                    i = 0 < e._length ? e[--e._length] : new n();
                t._curMat.copyTo(i._mat);
                var r = t._save;
                r[r._length++] = i;
            }, n.POOL = I._createArray(), n;
        }(),
        D = function() {
            function a() {}
            return l(a, "laya.webgl.resource.WebGLRTMgr"), a.getRT = function(t, e) {
                e |= 0, 1e4 <= (t |= 0) && console.error("getRT error! w too big");
                var i, r = 1e4 * e + t,
                    n = a.dict[r];
                return n && 0 < n.length ? (i = n.pop())._mgrKey = r : (i = new Nt(t, e, 1, -1))._mgrKey = r,
                    i;
            }, a.releaseRT = function(t) {
                if (!(t._mgrKey <= 0)) {
                    var e = a.dict[t._mgrKey];
                    !e && (e = [], a.dict[t._mgrKey] = e), t._mgrKey = 0, e.push(t);
                }
            }, a.dict = {}, a;
        }(),
        O = function() {
            function e(t, e, i) {
                this._stride = 0, this.vertNum = 0, this.indexNum = 0, this._applied = !1, this._vb = null,
                    this._ib = null, this._vao = null, this._attribInfo = null, this._quadNum = 0, this.canReuse = !1,
                    this._stride = t, this._vb = new Bt(t, 35048), e ? this._vb._resizeBuffer(e, !1) : c.webGL2D_MeshAllocMaxMem && this._vb._resizeBuffer(65536 * t, !1),
                    this._ib = new Dt(), i && this._ib._resizeBuffer(i, !1);
            }
            l(e, "laya.webgl.utils.Mesh2D");
            var t = e.prototype;
            return t.cloneWithNewVB = function() {
                var t = new e(this._stride, 0, 0);
                return t._ib = this._ib, t._quadNum = this._quadNum, t._attribInfo = this._attribInfo,
                    t;
            }, t.cloneWithNewVBIB = function() {
                var t = new e(this._stride, 0, 0);
                return t._attribInfo = this._attribInfo, t;
            }, t.getVBW = function() {
                return this._vb.setNeedUpload(), this._vb;
            }, t.getVBR = function() {
                return this._vb;
            }, t.getIBR = function() {
                return this._ib;
            }, t.getIBW = function() {
                return this._ib.setNeedUpload(), this._ib;
            }, t.createQuadIB = function(t) {
                this._quadNum = t, this._ib._resizeBuffer(6 * t * 2, !1), this._ib.byteLength = this._ib.bufferLength;
                for (var e = this._ib.getUint16Array(), i = 0, r = 0, n = 0; n < t; n++) e[i++] = r,
                    e[i++] = r + 2, e[i++] = r + 1, e[i++] = r, e[i++] = r + 3, e[i++] = r + 2, r += 4;
                this._ib.setNeedUpload();
            }, t.setAttributes = function(t) {
                if (this._attribInfo = t, this._attribInfo.length % 3 != 0) throw "Mesh2D setAttributes error!";
            }, t.configVAO = function(t) {
                if (!this._applied) {
                    this._applied = !0, this._vao || (this._vao = new St()), this._vao.bind(), this._vb._bindForVAO(),
                        this._ib.setNeedUpload(), this._ib._bind_uploadForVAO();
                    for (var e = this._attribInfo.length / 3, i = 0, r = 0; r < e; r++) {
                        var n = this._attribInfo[i + 1],
                            a = this._attribInfo[i],
                            s = this._attribInfo[i + 2];
                        t.enableVertexAttribArray(r), t.vertexAttribPointer(r, n, a, !1, this._stride, s),
                            i += 3;
                    }
                    this._vao.unBind();
                }
            }, t.useMesh = function(t) {
                this._applied || this.configVAO(t), this._vao.bind(), this._vb.bind(), this._ib._bind_upload() || this._ib.bind(),
                    this._vb._bind_upload() || this._vb.bind();
            }, t.getEleNum = function() {
                return this._ib.getBuffer().byteLength / 2;
            }, t.releaseMesh = function() {}, t.destroy = function() {}, t.clearVB = function() {
                this._vb.clear();
            }, e._gvaoid = 0, e;
        }(),
        L = function() {
            function n() {}
            return l(n, "laya.webgl.utils.RenderState2D"), n.mat2MatArray = function(t, e) {
                    var i = t,
                        r = e;
                    return r[0] = i.a, r[1] = i.b, r[2] = n.EMPTYMAT4_ARRAY[2], r[3] = n.EMPTYMAT4_ARRAY[3],
                        r[4] = i.c, r[5] = i.d, r[6] = n.EMPTYMAT4_ARRAY[6], r[7] = n.EMPTYMAT4_ARRAY[7],
                        r[8] = n.EMPTYMAT4_ARRAY[8], r[9] = n.EMPTYMAT4_ARRAY[9], r[10] = n.EMPTYMAT4_ARRAY[10],
                        r[11] = n.EMPTYMAT4_ARRAY[11], r[12] = i.tx, r[13] = i.ty, r[14] = n.EMPTYMAT4_ARRAY[14],
                        r[15] = n.EMPTYMAT4_ARRAY[15], e;
                }, n.restoreTempArray = function() {
                    n.TEMPMAT4_ARRAY[0] = 1, n.TEMPMAT4_ARRAY[1] = 0, n.TEMPMAT4_ARRAY[4] = 0, n.TEMPMAT4_ARRAY[5] = 1,
                        n.TEMPMAT4_ARRAY[12] = 0, n.TEMPMAT4_ARRAY[13] = 0;
                }, n.clear = function() {
                    n.worldScissorTest = !1, n.worldAlpha = 1;
                }, n._MAXSIZE = 99999999, n.EMPTYMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                n.worldMatrix4 = n.TEMPMAT4_ARRAY = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                n.matWVP = null, n.worldAlpha = 1, n.worldScissorTest = !1, n.worldShaderDefines = null,
                n.worldFilters = null, n.width = 0, n.height = 0, s(n, ["worldMatrix", function() {
                    return this.worldMatrix = new R();
                }]), n;
        }(),
        F = function() {
            function i(t) {
                this._color = null, this.setValue(t);
            }
            l(i, "laya.webgl.canvas.DrawStyle");
            var t = i.prototype;
            return t.setValue = function(t) {
                this._color = t ? t instanceof laya.utils.ColorUtils ? t : p.create(t) : p.create("#000000");
            }, t.reset = function() {
                this._color = p.create("#000000");
            }, t.toInt = function() {
                return this._color.numColor;
            }, t.equal = function(t) {
                return "string" == typeof t ? this._color.strColor === t : t instanceof laya.utils.ColorUtils && this._color.numColor === t.numColor;
            }, t.toColorStr = function() {
                return this._color.strColor;
            }, i.create = function(t) {
                if (t) {
                    var e = t instanceof laya.utils.ColorUtils ? t : p.create(t);
                    return e._drawStyle || (e._drawStyle = new i(t));
                }
                return i.DEFAULT;
            }, s(i, ["DEFAULT", function() {
                return this.DEFAULT = new i("#000000");
            }]), i;
        }(),
        N = function() {
            function t() {
                this.ALPHA = 1, this.shaderType = 0, this.defines = new Ct(), this.fillStyle = F.DEFAULT,
                    this.strokeStyle = F.DEFAULT;
            }
            return l(t, "laya.webgl.shader.d2.Shader2D"), t.prototype.destroy = function() {
                this.defines = null, this.filters = null;
            }, t.__init__ = function() {
                var t, e;
                t = "/*\n\ttexture和fillrect使用的。\n*/\nattribute vec4 posuv;\nattribute vec4 attribColor;\nattribute vec4 attribFlags;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\t\t// 这个是全局的，不用再应用矩阵了。\nvarying vec2 cliped;\nuniform vec2 size;\nuniform vec2 clipOff;\t\t\t// 使用要把clip偏移。cacheas normal用. 只用了[0]\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\n#ifdef MVP3D\n\tuniform mat4 u_MvpMatrix;\n#endif\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\n\nvoid main() {\n\n\tvec4 pos = vec4(posuv.xy,0.,1.);\n#ifdef WORLDMAT\n\tpos=mmat*pos;\n#endif\n\tvec4 pos1  =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,0.,1.0);\n#ifdef MVP3D\n\tgl_Position=u_MvpMatrix*pos1;\n#else\n\tgl_Position=pos1;\n#endif\n\tv_texcoordAlpha.xy = posuv.zw;\n\t//v_texcoordAlpha.z = attribColor.a/255.0;\n\tv_color = attribColor/255.0;\n\tv_color.xyz*=v_color.w;//反正后面也要预乘\n\t\n\tv_useTex = attribFlags.r/255.0;\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\t\n\tvec2 clpos = clipMatPos.xy;\n\t#ifdef WORLDMAT\n\t\t// 如果有mmat，需要修改clipMatPos,因为 这是cacheas normal （如果不是就错了）， clipMatPos被去掉了偏移\n\t\tif(clipOff[0]>0.0){\n\t\t\tclpos.x+=mmat[3].x;\t//tx\t最简单处理\n\t\t\tclpos.y+=mmat[3].y;\t//ty\n\t\t}\n\t#endif\n\tvec2 clippos = pos.xy - clpos;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//转成0到1之间。/clipw/clipw 表示clippos与normalize之后的clip朝向点积之后，再除以clipw\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n\n}",
                    e = "/*\n\ttexture和fillrect使用的。\n*/\n\nprecision mediump float;\n//precision highp float;\nvarying vec4 v_texcoordAlpha;\nvarying vec4 v_color;\nvarying float v_useTex;\nuniform sampler2D texture;\nvarying vec2 cliped;\n\n#ifdef BLUR_FILTER\nuniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoordAlpha.xy-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}\n#endif\n\n#ifdef COLOR_FILTER\nuniform vec4 colorAlpha;\nuniform mat4 colorMat;\n#endif\n\n#ifdef GLOW_FILTER\nuniform vec4 u_color;\nuniform vec4 u_blurInfo1;\nuniform vec4 u_blurInfo2;\n#endif\n\n#ifdef COLOR_ADD\nuniform vec4 colorAdd;\n#endif\n\n#ifdef FILLTEXTURE\t\nuniform vec4 u_TexRange;//startu,startv,urange, vrange\n#endif\nvoid main() {\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n\t\n#ifdef FILLTEXTURE\t\n   vec4 color= texture2D(texture, fract(v_texcoordAlpha.xy)*u_TexRange.zw + u_TexRange.xy);\n#else\n   vec4 color= texture2D(texture, v_texcoordAlpha.xy);\n#endif\n\n   if(v_useTex<=0.)color = vec4(1.,1.,1.,1.);\n   color.a*=v_color.w;\n   //color.rgb*=v_color.w;\n   color.rgb*=v_color.rgb;\n   gl_FragColor=color;\n   \n   #ifdef COLOR_ADD\n\tgl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\n\tgl_FragColor.xyz *= colorAdd.a;\n   #endif\n   \n   #ifdef BLUR_FILTER\n\tgl_FragColor =   blur();\n\tgl_FragColor.w*=v_color.w;   \n   #endif\n   \n   #ifdef COLOR_FILTER\n\tmat4 alphaMat =colorMat;\n\n\talphaMat[0][3] *= gl_FragColor.a;\n\talphaMat[1][3] *= gl_FragColor.a;\n\talphaMat[2][3] *= gl_FragColor.a;\n\n\tgl_FragColor = gl_FragColor * alphaMat;\n\tgl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n   #endif\n   \n   #ifdef GLOW_FILTER\n\tconst float c_IterationTime = 10.0;\n\tfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\n\tvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n\tvec2 vec2FilterDir = vec2(-(u_blurInfo1.z)/u_blurInfo2.x,-(u_blurInfo1.w)/u_blurInfo2.y);\n\tvec2 vec2FilterOff = vec2(u_blurInfo1.x/u_blurInfo2.x/c_IterationTime * 2.0,u_blurInfo1.y/u_blurInfo2.y/c_IterationTime * 2.0);\n\tfloat maxNum = u_blurInfo1.x * u_blurInfo1.y;\n\tvec2 vec2Off = vec2(0.0,0.0);\n\tfloat floatOff = c_IterationTime/2.0;\n\tfor(float i = 0.0;i<=c_IterationTime; ++i){\n\t\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\t\tvec4Color += texture2D(texture, v_texcoordAlpha.xy + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t\t}\n\t}\n\tgl_FragColor = vec4(u_color.rgb,vec4Color.a * u_blurInfo2.z);\n\tgl_FragColor.rgb *= gl_FragColor.a;   \n   #endif\n   \n}",
                    Lt.preCompile2D(0, 1, t, e, null), t = "attribute vec4 position;\nattribute vec4 attribColor;\n//attribute vec4 clipDir;\n//attribute vec2 clipRect;\nuniform vec4 clipMatDir;\nuniform vec2 clipMatPos;\n#ifdef WORLDMAT\n\tuniform mat4 mmat;\n#endif\nuniform mat4 u_mmat2;\n//uniform vec2 u_pos;\nuniform vec2 size;\nvarying vec4 color;\n//vec4 dirxy=vec4(0.9,0.1, -0.1,0.9);\n//vec4 clip=vec4(100.,30.,300.,600.);\nvarying vec2 cliped;\nvoid main(){\n\t\n#ifdef WORLDMAT\n\tvec4 pos=mmat*vec4(position.xy,0.,1.);\n\tgl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n#else\n\tgl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n#endif\t\n\tfloat clipw = length(clipMatDir.xy);\n\tfloat cliph = length(clipMatDir.zw);\n\tvec2 clippos = position.xy - clipMatPos.xy;\t//pos已经应用矩阵了，为了减的有意义，clip的位置也要缩放\n\tif(clipw>20000. && cliph>20000.)\n\t\tcliped = vec2(0.5,0.5);\n\telse {\n\t\t//clipdir是带缩放的方向，由于上面clippos是在缩放后的空间计算的，所以需要把方向先normalize一下\n\t\tcliped=vec2( dot(clippos,clipMatDir.xy)/clipw/clipw, dot(clippos,clipMatDir.zw)/cliph/cliph);\n\t}\n  //pos2d.x = dot(clippos,dirx);\n  color=attribColor/255.;\n}",
                    e = "precision mediump float;\n//precision mediump float;\nvarying vec4 color;\n//uniform float alpha;\nvarying vec2 cliped;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor= color;// vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=color.a;\n\tif(cliped.x<0.) discard;\n\tif(cliped.x>1.) discard;\n\tif(cliped.y<0.) discard;\n\tif(cliped.y>1.) discard;\n}",
                    Lt.preCompile2D(0, 4, t, e, null), t = "attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",
                    e = "precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",
                    Lt.preCompile2D(0, 512, t, e, null);
            }, t;
        }(),
        U = function() {
            function t(t, e, i, r) {
                this._idata = [];
            }
            l(t, "laya.layagl.CommandEncoder");
            var e = t.prototype;
            return e.getArrayData = function() {
                return this._idata;
            }, e.getPtrID = function() {
                return 0;
            }, e.beginEncoding = function() {}, e.endEncoding = function() {}, e.clearEncoding = function() {
                this._idata.length = 0;
            }, e.getCount = function() {
                return this._idata.length;
            }, e.add_ShaderValue = function(t) {
                this._idata.push(t);
            }, e.addShaderUniform = function(t) {
                this.add_ShaderValue(t);
            }, t;
        }(),
        V = function() {
            function t() {
                this.ib = null, this.vb = null;
                $.mainContext;
                this.ib = Dt.create(35048), this.vb = Bt.create(8);
            }
            l(t, "laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");
            var e = t.prototype;
            return e.addSkinMesh = function(t) {
                t.getData2(this.vb, this.ib, this.vb._byteLength / 32);
            }, e.reset = function() {
                this.vb.clear(), this.ib.clear();
            }, t.getInstance = function() {
                return t.instance = t.instance || new t();
            }, t.instance = null, t;
        }(),
        k = function() {
            function i(t) {
                this.childs = [], this.text = "", this.parent = null, this.name = null, this.noCompile = !1,
                    this.includefiles = null, this.condition = null, this.conditionType = 0, this.useFuns = "",
                    this.z = 0, this.src = null, this.includefiles = t;
            }
            l(i, "laya.webgl.utils.ShaderNode");
            var t = i.prototype;
            return t.setParent = function(t) {
                t.childs.push(this), this.z = t.z + 1, this.parent = t;
            }, t.setCondition = function(t, e) {
                t && (this.conditionType = e, t = t.replace(/(\s*$)/g, ""), this.condition = function() {
                    return this[t];
                }, this.condition.__condition = t);
            }, t.toscript = function(t, e) {
                return this._toscript(t, e, ++i.__id);
            }, t._toscript = function(r, n, a) {
                if (this.childs.length < 1 && !this.text) return n;
                n.length;
                if (this.condition) {
                    var t = !!this.condition.call(r);
                    if (2 === this.conditionType && (t = !t), !t) return n;
                }
                if (this.text && n.push(this.text), 0 < this.childs.length && this.childs.forEach(function(t, e, i) {
                        t._toscript(r, n, a);
                    }), 0 < this.includefiles.length && 0 < this.useFuns.length)
                    for (var e, i = 0, s = this.includefiles.length; i < s; i++) this.includefiles[i].curUseID != a && 0 < (e = this.includefiles[i].file.getFunsScript(this.useFuns)).length && (this.includefiles[i].curUseID = a,
                        n[0] = e + n[0]);
                return n;
            }, i.__id = 1, i;
        }(),
        W = function() {
            function s(t) {
                this.clipInfoID = -1, this._mesh = null, this._blendFn = null, this._id = 0, this._renderType = 0,
                    this._parent = null, this._startIdx = 0, this._numEle = 0, this._ref = 1, this.shaderValue = null,
                    this._key = new ot(), void 0 === t && (t = 1e4), this._renderType = t, this._id = ++s.ID;
            }
            l(s, "laya.webgl.submit.Submit");
            var t = s.prototype;
            return T.imps(t, {
                    "laya.webgl.submit.ISubmit": !0
                }), t.getID = function() {
                    return this._id;
                }, t.releaseRender = function() {
                    s.RENDERBASE != this && --this._ref < 1 && ((s.POOL[s._poolSize++] = this).shaderValue.release(),
                        this.shaderValue = null, this._mesh = null, this._parent && (this._parent.releaseRender(),
                            this._parent = null));
                }, t.getRenderType = function() {
                    return this._renderType;
                }, t.renderSubmit = function() {
                    if (0 === this._numEle || !this._mesh || 0 == this._numEle) return 1;
                    var t = this.shaderValue.textureHost;
                    if (t) {
                        var e = t._getSource();
                        if (!e) return 1;
                        this.shaderValue.texture = e;
                    }
                    var i = $.mainContext;
                    return this._mesh.useMesh(i), this.shaderValue.upload(), q.activeBlendFunction !== this._blendFn && (K.setBlend(i, !0),
                            this._blendFn(i), q.activeBlendFunction = this._blendFn), i.drawElements(4, this._numEle, 5123, this._startIdx),
                        g.renderBatches++, g.trianglesFaces += this._numEle / 3, 1;
                }, t._cloneInit = function(t, e, i, r) {
                    t._ref = 1, t._mesh = i, t._id = this._id, t._key.copyFrom(this._key), t._parent = this,
                        t._blendFn = this._blendFn, t._renderType = this._renderType, t._startIdx = r * dt.BYTES_PIDX,
                        t._numEle = this._numEle, t.shaderValue = this.shaderValue, this.shaderValue.ref++,
                        this._ref++;
                }, t.clone = function(t, e, i) {
                    return null;
                }, t.reUse = function(t, e) {
                    return 0;
                }, t.toString = function() {
                    return "ibindex:" + this._startIdx + " num:" + this._numEle + " key=" + this._key;
                }, s.__init__ = function() {
                    var t = s.RENDERBASE = new s(-1);
                    t.shaderValue = new P(0, 0), t.shaderValue.ALPHA = 1, t._ref = 4294967295;
                }, s.create = function(t, e, i) {
                    var r = s._poolSize ? s.POOL[--s._poolSize] : new s();
                    r._ref = 1, r._mesh = e, r._key.clear(), r._startIdx = e.indexNum * dt.BYTES_PIDX,
                        r._numEle = 0;
                    var n = t._nBlendType;
                    r._blendFn = t._targets ? q.targetFns[n] : q.fns[n], r.shaderValue = i, r.shaderValue.setValue(t._shader2D);
                    var a = t._shader2D.filters;
                    return a && r.shaderValue.setFilters(a), r;
                }, s.createShape = function(t, e, i, r) {
                    var n = s._poolSize ? s.POOL[--s._poolSize] : new s();
                    n._mesh = e, n._numEle = i, n._startIdx = 2 * e.indexNum, n._ref = 1, n.shaderValue = r,
                        n.shaderValue.setValue(t._shader2D);
                    var a = t._nBlendType;
                    return n._key.blendShader = a, n._blendFn = t._targets ? q.targetFns[a] : q.fns[a],
                        n;
                }, s.TYPE_2D = 1e4, s.TYPE_CANVAS = 10003, s.TYPE_CMDSETRT = 10004, s.TYPE_CUSTOM = 10005,
                s.TYPE_BLURRT = 10006, s.TYPE_CMDDESTORYPRERT = 10007, s.TYPE_DISABLESTENCIL = 10008,
                s.TYPE_OTHERIBVB = 10009, s.TYPE_PRIMITIVE = 10010, s.TYPE_RT = 10011, s.TYPE_BLUR_RT = 10012,
                s.TYPE_TARGET = 10013, s.TYPE_CHANGE_VALUE = 10014, s.TYPE_SHAPE = 10015, s.TYPE_TEXTURE = 10016,
                s.TYPE_FILLTEXTURE = 10017, s.KEY_ONCE = -1, s.KEY_FILLRECT = 1, s.KEY_DRAWTEXTURE = 2,
                s.KEY_VG = 3, s.KEY_TRIANGLES = 4, s.RENDERBASE = null, s.ID = 1, s.preRender = null,
                s._poolSize = 0, s.POOL = [], s;
        }(),
        G = function() {
            function a() {
                this._matrix = new R();
            }
            l(a, "laya.webgl.canvas.save.SaveTransform");
            var t = a.prototype;
            return T.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1;
            }, t.restore = function(t) {
                t._curMat = this._savematrix, a.POOL[a.POOL._length++] = this;
            }, a.save = function(t) {
                var e = t._saveMark;
                if (2048 != (2048 & e._saveuse)) {
                    e._saveuse |= 2048;
                    var i = a.POOL,
                        r = 0 < i._length ? i[--i._length] : new a();
                    r._savematrix = t._curMat, t._curMat = t._curMat.copyTo(r._matrix);
                    var n = t._save;
                    n[n._length++] = r;
                }
            }, a.POOL = I._createArray(), a;
        }(),
        H = function() {
            function B() {}
            return l(B, "laya.webgl.shapes.BasePoly"), B.createLine2 = function(t, e, i, r, n, a) {
                if (t.length < 4) return null;
                var s = B.tempData.length > t.length + 2 ? B.tempData : new Array(t.length + 2);
                s[0] = t[0], s[1] = t[1];
                var h = 2,
                    o = 0,
                    l = t.length;
                for (o = 2; o < l; o += 2) .01 < Math.abs(t[o] - t[o - 2]) + Math.abs(t[o + 1] - t[o - 1]) && (s[h++] = t[o],
                    s[h++] = t[o + 1]);
                a && .01 < Math.abs(t[0] - s[h - 2]) + Math.abs(t[1] - s[h - 1]) && (s[h++] = t[0],
                    s[h++] = t[1]);
                var u = n;
                l = h / 2;
                var c, _, f, d, p, m, x, v, T, g, b, y, A, E, R, S, M, w, C, I, P = i / 2;
                f = s[0], d = s[1], g = f - (p = s[2]);
                T = (T = -(d - (m = s[3]))) / (I = Math.sqrt(T * T + g * g)) * P, g = g / I * P;
                for (u.push(f - T, d - g, f + T, d + g), o = 1; o < l - 1; o++) f = s[2 * (o - 1)],
                    d = s[2 * (o - 1) + 1], p = s[2 * o], m = s[2 * o + 1], x = s[2 * (o + 1)], v = s[2 * (o + 1) + 1],
                    g = f - p, y = p - x, R = (-(T = (T = -(d - m)) / (I = Math.sqrt(T * T + g * g)) * P) + f) * (-(g = g / I * P) + m) - (-T + p) * (-g + d),
                    w = (-(b = (b = -(m - v)) / (I = Math.sqrt(b * b + y * y)) * P) + x) * (-(y = y / I * P) + m) - (-b + p) * (-y + v),
                    C = (A = -g + d - (-g + m)) * (M = -b + p - (-b + x)) - (S = -y + v - (-y + m)) * (E = -T + p - (-T + f)),
                    Math.abs(C) < .1 ? (C += 10.1, u.push(p - T, m - g, p + T, m + g)) : (((c = (E * w - M * R) / C) - p) * (c - p) + ((_ = (S * R - A * w) / C) - m) + (_ - m),
                        u.push(c, _, p - (c - p), m - (_ - m)));
                for (f = s[h - 4], d = s[h - 3], g = f - (p = s[h - 2]), T = (T = -(d - (m = s[h - 1]))) / (I = Math.sqrt(T * T + g * g)) * P,
                    g = g / I * P, u.push(p - T, m - g, p + T, m + g), o = 1; o < l; o++) e.push(r + 2 * (o - 1), r + 2 * (o - 1) + 1, r + 2 * o + 1, r + 2 * o + 1, r + 2 * o, r + 2 * (o - 1));
                return u;
            }, B.createLineTriangle = function(t, e, i, r, n, a, s) {
                var h = t.slice(),
                    o = h.length,
                    l = h[0],
                    u = h[1],
                    c = h[2],
                    _ = (h[2], 0),
                    f = 0,
                    d = 0,
                    p = 0,
                    m = o / 2;
                if (!(m <= 1) && 2 != m) {
                    for (var x = new Array(4 * m), v = 0, T = 0, g = 0; g < m - 1; g++) l = h[T++],
                        u = h[T++], c = h[T++], p = h[T++] - u, 0 != (d = c - l) && 0 != p && .001 < (_ = Math.sqrt(d * d + p * p)) && (x[f = 4 * v] = l,
                            x[f + 1] = u, x[f + 2] = d / _, x[f + 3] = p / _, v++);
                    for (r ? (l = h[o - 2], u = h[o - 1], c = h[0], p = h[1] - u, 0 != (d = c - l) && 0 != p && .001 < (_ = Math.sqrt(d * d + p * p)) && (x[f = 4 * v] = l,
                            x[f + 1] = u, x[f + 2] = d / _, x[f + 3] = p / _, v++)) : (x[f = 4 * v] = l, x[f + 1] = u,
                            x[f + 2] = d / _, x[f + 3] = p / _, v++), g = T = 0; g < m; g++) {
                        l = h[T], u = h[T + 1], c = h[T + 2], h[T + 3];
                        h[T + 4], h[T + 5];
                    }
                }
            }, s(B, ["tempData", function() {
                return this.tempData = new Array(256);
            }]), B;
        }(),
        z = function() {
            function n() {
                this._clipInfoID = -1, this._globalClipMatrix = new R(), this._clipRect = new M();
            }
            l(n, "laya.webgl.canvas.save.SaveClipRect");
            var t = n.prototype;
            return T.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !1;
            }, t.restore = function(t) {
                this._globalClipMatrix.copyTo(t._globalClipMatrix), this._clipRect.clone(t._clipRect),
                    t._clipInfoID = this._clipInfoID, n.POOL[n.POOL._length++] = this;
            }, n.save = function(t) {
                if (131072 != (131072 & t._saveMark._saveuse)) {
                    t._saveMark._saveuse |= 131072;
                    var e = n.POOL,
                        i = 0 < e._length ? e[--e._length] : new n();
                    t._globalClipMatrix.copyTo(i._globalClipMatrix), t._clipRect.clone(i._clipRect),
                        i._clipInfoID = t._clipInfoID;
                    var r = t._save;
                    r[r._length++] = i;
                }
            }, n.POOL = I._createArray(), n;
        }(),
        X = function() {
            function t() {}
            l(t, "laya.webgl.resource.ICharRender");
            var e = t.prototype;
            return e.getWidth = function(t, e) {
                return 0;
            }, e.scale = function(t, e) {}, e.getCharBmp = function(t, e, i, r, n, a, s, h, o, l, u) {
                return null;
            }, h(0, e, "canvasWidth", function() {
                return 0;
            }, function(t) {}), t;
        }(),
        Y = function() {
            function s() {
                this._data = [], this._ndata = 0, this._tex = null, this._imgId = 0, this._clipid = -1,
                    this._enbale = !1, this._colorFiler = null, this._clipMatrix = new R();
            }
            l(s, "laya.webgl.text.CharSubmitCache");
            var t = s.prototype;
            return t.clear = function() {
                this._tex = null, this._imgId = -1, this._ndata = 0, this._enbale = !1, this._colorFiler = null;
            }, t.destroy = function() {
                this.clear(), this._data.length = 0, this._data = null;
            }, t.add = function(t, e, i, r, n, a) {
                0 < this._ndata && (this._tex != e || this._imgId != i || 0 <= this._clipid && this._clipid != t._clipInfoID) && this.submit(t),
                    this._clipid = t._clipInfoID, t._globalClipMatrix.copyTo(this._clipMatrix), this._tex = e,
                    this._imgId = i, this._colorFiler = t._colorFiler, this._data[this._ndata] = r,
                    this._data[this._ndata + 1] = n, this._data[this._ndata + 2] = a, this._ndata += 3;
            }, t.getPos = function() {
                return 0 == s.__nPosPool ? new Array(8) : s.__posPool[--s.__nPosPool];
            }, t.enable = function(t, e) {
                t !== this._enbale && (this._enbale = t, this._enbale || this.submit(e));
            }, t.submit = function(t) {
                var e = this._ndata;
                if (e) {
                    var i = t._mesh,
                        r = t._colorFiler;
                    t._colorFiler = this._colorFiler;
                    var n = yt.create(t, i, P.create(1, 0));
                    t._submits[t._submits._length++] = t._curSubmit = n, n.shaderValue.textureHost = this._tex,
                        n._key.other = this._imgId, t._colorFiler = r, t._copyClipInfo(n, this._clipMatrix),
                        n.clipInfoID = this._clipid;
                    for (var a = 0; a < e; a += 3) i.addQuad(this._data[a], this._data[a + 1], this._data[a + 2], !0),
                        s.__posPool[s.__nPosPool++] = this._data[a];
                    e /= 3, n._numEle += 6 * e, i.indexNum += 6 * e, i.vertNum += 4 * e, t._drawCount += e,
                        this._ndata = 0, g.loopCount % 100 == 0 && (this._data.length = 0);
                }
            }, s.__posPool = [], s.__nPosPool = 0, s;
        }(),
        j = function() {
            function t() {
                this._nativeVertexArrayObject = null, this._bindedIndexBuffer = null, this._nativeVertexArrayObject = ut.instance.createVertexArray();
            }
            l(t, "laya.webgl.BufferStateBase");
            var e = t.prototype;
            return e.bind = function() {
                t._curBindedBufferState !== this && (ut.instance.bindVertexArray(this._nativeVertexArrayObject),
                    t._curBindedBufferState = this);
            }, e.unBind = function() {
                if (t._curBindedBufferState !== this) throw "BufferState: must call bind() function first.";
                ut.instance.bindVertexArray(null), t._curBindedBufferState = null;
            }, e.bindForNative = function() {
                ut.instance.bindVertexArray(this._nativeVertexArrayObject), t._curBindedBufferState = this;
            }, e.unBindForNative = function() {
                ut.instance.bindVertexArray(null), t._curBindedBufferState = null;
            }, e.destroy = function() {
                ut.instance.deleteVertexArray(this._nativeVertexArrayObject);
            }, t._curBindedBufferState = null, t;
        }(),
        K = (function() {
            function n() {
                this._renderType = 0, this._repaint = 0, this._x = NaN, this._y = NaN;
            }
            l(n, "laya.layagl.QuickTestTool");
            var t = n.prototype;
            t.render = function(t, e, i) {
                    n._addType(this._renderType), n.showRenderTypeInfo(this._renderType), x.renders[this._renderType]._fun(this, t, e + this._x, i + this._y),
                        this._repaint = 0;
                }, t._stageRender = function(t, e, i) {
                    n._countStart(), n._PreStageRender.call(T.stage, t, e, i), n._countEnd();
                }, n.getMCDName = function(t) {
                    return n._typeToNameDic[t];
                }, n.showRenderTypeInfo = function(t, e) {
                    if (void 0 === e && (e = !1), e || !n.showedDic[t]) {
                        if (n.showedDic[t] = !0, !n._rendertypeToStrDic[t]) {
                            var i = [],
                                r = 0;
                            for (r = 1; r <= t;) r & t && i.push(n.getMCDName(r & t)), r <<= 1;
                            n._rendertypeToStrDic[t] = i.join(",");
                        }
                        console.log("cmd:", n._rendertypeToStrDic[t]);
                    }
                }, n.__init__ = function() {
                    n._typeToNameDic[1] = "ALPHA", n._typeToNameDic[2] = "TRANSFORM", n._typeToNameDic[256] = "TEXTURE",
                        n._typeToNameDic[512] = "GRAPHICS", n._typeToNameDic[4096] = "ONECHILD", n._typeToNameDic[8192] = "CHILDS",
                        n._typeToNameDic[3] = "TRANSFORM|ALPHA", n._typeToNameDic[8] = "CANVAS", n._typeToNameDic[4] = "BLEND",
                        n._typeToNameDic[16] = "FILTERS", n._typeToNameDic[32] = "MASK", n._typeToNameDic[64] = "CLIP",
                        n._typeToNameDic[1024] = "LAYAGL3D";
                }, n._countStart = function() {
                    var t;
                    for (t in n._countDic) n._countDic[t] = 0;
                }, n._countEnd = function() {
                    60 < ++n._i && (n.showCountInfo(), n._i = 0);
                }, n._addType = function(t) {
                    n._countDic[t] ? n._countDic[t] += 1 : n._countDic[t] = 1;
                }, n.showCountInfo = function() {
                    var t;
                    for (t in console.log("==================="), n._countDic) console.log("count:" + n._countDic[t]),
                        n.showRenderTypeInfo(t, !0);
                }, n.enableQuickTest = function() {
                    n.__init__(), _.prototype.render = n.prototype.render, n._PreStageRender = v.prototype.render,
                        v.prototype.render = n.prototype._stageRender;
                }, n.showedDic = {}, n._rendertypeToStrDic = {}, n._typeToNameDic = {}, n._PreStageRender = null,
                n._countDic = {}, n._i = 0;
        }(), function() {
            function r() {}
            l(r, "laya.webgl.text.ArabicReshaper");
            var t = r.prototype;
            t.characterMapContains = function(t) {
                for (var e = 0; e < r.charsMap.length; ++e)
                    if (r.charsMap[e][0] === t) return !0;
                return !1;
            }, t.getCharRep = function(t) {
                for (var e = 0; e < r.charsMap.length; ++e)
                    if (r.charsMap[e][0] === t) return r.charsMap[e];
                return !1;
            }, t.getCombCharRep = function(t, e) {
                for (var i = 0; i < r.combCharsMap.length; ++i)
                    if (r.combCharsMap[i][0][0] === t && r.combCharsMap[i][0][1] === e) return r.combCharsMap[i];
                return !1;
            }, t.isTransparent = function(t) {
                for (var e = 0; e < r.transChars.length; ++e)
                    if (r.transChars[e] === t) return !0;
                return !1;
            }, t.getOriginalCharsFromCode = function(t) {
                var e = 0;
                for (e = 0; e < r.charsMap.length; ++e)
                    if (-1 < r.charsMap[e].indexOf(t)) return String.fromCharCode(r.charsMap[e][0]);
                for (e = 0; e < r.combCharsMap.length; ++e)
                    if (-1 < r.combCharsMap[e].indexOf(t)) return String.fromCharCode(r.combCharsMap[e][0][0]) + String.fromCharCode(r.combCharsMap[e][0][1]);
                return String.fromCharCode(t);
            }, t.convertArabic = function(t) {
                for (var e, i, r = "", n = 0; n < t.length; ++n) {
                    var a = t.charCodeAt(n);
                    if (this.characterMapContains(a)) {
                        for (var s = null, h = null, o = n - 1, l = n + 1; 0 <= o && this.isTransparent(t.charCodeAt(o)); --o);
                        for ((!(e = !!(s = 0 <= o ? t.charCodeAt(o) : null) && this.getCharRep(s)) || null == e[2] && null == e[3]) && (s = null); l < t.length && this.isTransparent(t.charCodeAt(l)); ++l);
                        if ((!(e = !!(h = l < t.length ? t.charCodeAt(l) : null) && this.getCharRep(h)) || null == e[3] && null == e[4]) && (h = null),
                            1604 === a && null != h && (1570 === h || 1571 === h || 1573 === h || 1575 === h)) {
                            i = this.getCombCharRep(a, h), r += null != s ? String.fromCharCode(i[4]) : String.fromCharCode(i[1]),
                                ++n;
                            continue;
                        }
                        if (e = this.getCharRep(a), null != s && null != h && null != e[3]) {
                            r += String.fromCharCode(e[3]);
                            continue;
                        }
                        if (null != s && null != e[4]) {
                            r += String.fromCharCode(e[4]);
                            continue;
                        }
                        if (null != h && null != e[2]) {
                            r += String.fromCharCode(e[2]);
                            continue;
                        }
                        r += String.fromCharCode(e[1]);
                    } else r += String.fromCharCode(a);
                }
                return r;
            }, t.convertArabicBack = function(t) {
                var e = "",
                    i = 0,
                    r = 0;
                for (r = 0; r < t.length; ++r) i = t.charCodeAt(r), e += this.getOriginalCharsFromCode(i);
                return e;
            }, s(r, ["charsMap", function() {
                return this.charsMap = [
                    [1569, 65152, null, null, null],
                    [1570, 65153, null, null, 65154],
                    [1571, 65155, null, null, 65156],
                    [1572, 65157, null, null, 65158],
                    [1573, 65159, null, null, 65160],
                    [1574, 65161, 65163, 65164, 65162],
                    [1575, 65165, null, null, 65166],
                    [1576, 65167, 65169, 65170, 65168],
                    [1577, 65171, null, null, 65172],
                    [1578, 65173, 65175, 65176, 65174],
                    [1579, 65177, 65179, 65180, 65178],
                    [1580, 65181, 65183, 65184, 65182],
                    [1581, 65185, 65187, 65188, 65186],
                    [1582, 65189, 65191, 65192, 65190],
                    [1583, 65193, null, null, 65194],
                    [1584, 65195, null, null, 65196],
                    [1585, 65197, null, null, 65198],
                    [1586, 65199, null, null, 65200],
                    [1587, 65201, 65203, 65204, 65202],
                    [1588, 65205, 65207, 65208, 65206],
                    [1589, 65209, 65211, 65212, 65210],
                    [1590, 65213, 65215, 65216, 65214],
                    [1591, 65217, 65219, 65220, 65218],
                    [1592, 65221, 65223, 65224, 65222],
                    [1593, 65225, 65227, 65228, 65226],
                    [1594, 65229, 65231, 65232, 65230],
                    [1600, 1600, 1600, 1600, 1600],
                    [1601, 65233, 65235, 65236, 65234],
                    [1602, 65237, 65239, 65240, 65238],
                    [1603, 65241, 65243, 65244, 65242],
                    [1604, 65245, 65247, 65248, 65246],
                    [1605, 65249, 65251, 65252, 65250],
                    [1606, 65253, 65255, 65256, 65254],
                    [1607, 65257, 65259, 65260, 65258],
                    [1608, 65261, null, null, 65262],
                    [1609, 65263, null, null, 65264],
                    [1610, 65265, 65267, 65268, 65266],
                    [1662, 64342, 64344, 64345, 64343],
                    [1740, 64508, 64510, 64511, 64509],
                    [1670, 64378, 64380, 64381, 64379],
                    [1705, 64398, 64400, 64401, 64399],
                    [1711, 64402, 64404, 64405, 64403],
                    [1688, 64394, null, null, 64395]
                ];
            }, "combCharsMap", function() {
                return this.combCharsMap = [
                    [
                        [1604, 1570], 65269, null, null, 65270
                    ],
                    [
                        [1604, 1571], 65271, null, null, 65272
                    ],
                    [
                        [1604, 1573], 65273, null, null, 65274
                    ],
                    [
                        [1604, 1575], 65275, null, null, 65276
                    ]
                ];
            }, "transChars", function() {
                return this.transChars = [1552, 1554, 1555, 1556, 1557, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1648, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1759, 1760, 1761, 1762, 1763, 1764, 1767, 1768, 1770, 1771, 1772, 1773];
            }]);
        }(), function() {
            function a() {}
            l(a, "laya.webgl.WebGLContext");
            var t = a.prototype;
            return t.getContextAttributes = function() {
                    return null;
                }, t.isContextLost = function() {}, t.getSupportedExtensions = function() {
                    return null;
                }, t.getExtension = function(t) {
                    return null;
                }, t.activeTexture = function(t) {}, t.attachShader = function(t, e) {}, t.bindAttribLocation = function(t, e, i) {},
                t.bindBuffer = function(t, e) {}, t.bindFramebuffer = function(t, e) {}, t.bindRenderbuffer = function(t, e) {},
                t.bindTexture = function(t, e) {}, t.useTexture = function(t) {}, t.blendColor = function(t, e, i, r) {},
                t.blendEquation = function(t) {}, t.blendEquationSeparate = function(t, e) {}, t.blendFunc = function(t, e) {},
                t.blendFuncSeparate = function(t, e, i, r) {}, t.bufferData = function(t, e, i) {},
                t.bufferSubData = function(t, e, i) {}, t.checkFramebufferStatus = function(t) {
                    return null;
                }, t.clear = function(t) {}, t.clearColor = function(t, e, i, r) {}, t.clearDepth = function(t) {},
                t.clearStencil = function(t) {}, t.colorMask = function(t, e, i, r) {}, t.compileShader = function(t) {},
                t.copyTexImage2D = function(t, e, i, r, n, a, s, h) {}, t.copyTexSubImage2D = function(t, e, i, r, n, a, s, h) {},
                t.createBuffer = function() {}, t.createFramebuffer = function() {}, t.createProgram = function() {},
                t.createRenderbuffer = function() {}, t.createShader = function(t) {}, t.createTexture = function() {
                    return null;
                }, t.cullFace = function(t) {}, t.deleteBuffer = function(t) {}, t.deleteFramebuffer = function(t) {},
                t.deleteProgram = function(t) {}, t.deleteRenderbuffer = function(t) {}, t.deleteShader = function(t) {},
                t.deleteTexture = function(t) {}, t.depthFunc = function(t) {}, t.depthMask = function(t) {},
                t.depthRange = function(t, e) {}, t.detachShader = function(t, e) {}, t.disable = function(t) {},
                t.disableVertexAttribArray = function(t) {}, t.drawArrays = function(t, e, i) {},
                t.drawElements = function(t, e, i, r) {}, t.enable = function(t) {}, t.enableVertexAttribArray = function(t) {},
                t.finish = function() {}, t.flush = function() {}, t.framebufferRenderbuffer = function(t, e, i, r) {},
                t.framebufferTexture2D = function(t, e, i, r, n) {}, t.frontFace = function(t) {
                    return null;
                }, t.generateMipmap = function(t) {
                    return null;
                }, t.getActiveAttrib = function(t, e) {
                    return null;
                }, t.getActiveUniform = function(t, e) {
                    return null;
                }, t.getAttribLocation = function(t, e) {
                    return 0;
                }, t.getParameter = function(t) {
                    return null;
                }, t.getBufferParameter = function(t, e) {
                    return null;
                }, t.getError = function() {
                    return null;
                }, t.getFramebufferAttachmentParameter = function(t, e, i) {}, t.getProgramParameter = function(t, e) {
                    return 0;
                }, t.getProgramInfoLog = function(t) {
                    return null;
                }, t.getRenderbufferParameter = function(t, e) {
                    return null;
                }, t.getShaderPrecisionFormat = function(t) {
                    return null;
                }, t.getShaderParameter = function(t, e) {}, t.getShaderInfoLog = function(t) {
                    return null;
                }, t.getShaderSource = function(t) {
                    return null;
                }, t.getTexParameter = function(t, e) {}, t.getUniform = function(t, e) {}, t.getUniformLocation = function(t, e) {
                    return null;
                }, t.getVertexAttrib = function(t, e) {
                    return null;
                }, t.getVertexAttribOffset = function(t, e) {
                    return null;
                }, t.hint = function(t, e) {}, t.isBuffer = function(t) {}, t.isEnabled = function(t) {},
                t.isFramebuffer = function(t) {}, t.isProgram = function(t) {}, t.isRenderbuffer = function(t) {},
                t.isShader = function(t) {}, t.isTexture = function(t) {}, t.lineWidth = function(t) {},
                t.linkProgram = function(t) {}, t.pixelStorei = function(t, e) {}, t.polygonOffset = function(t, e) {},
                t.readPixels = function(t, e, i, r, n, a, s) {}, t.renderbufferStorage = function(t, e, i, r) {},
                t.sampleCoverage = function(t, e) {}, t.scissor = function(t, e, i, r) {}, t.shaderSource = function(t, e) {},
                t.stencilFunc = function(t, e, i) {}, t.stencilFuncSeparate = function(t, e, i, r) {},
                t.stencilMask = function(t) {}, t.stencilMaskSeparate = function(t, e) {}, t.stencilOp = function(t, e, i) {},
                t.stencilOpSeparate = function(t, e, i, r) {}, t.texImage2D = function(t) {}, t.texParameterf = function(t, e, i) {},
                t.texParameteri = function(t, e, i) {}, t.texSubImage2D = function(t) {}, t.uniform1f = function(t, e) {},
                t.uniform1fv = function(t, e) {}, t.uniform1i = function(t, e) {}, t.uniform1iv = function(t, e) {},
                t.uniform2f = function(t, e, i) {}, t.uniform2fv = function(t, e) {}, t.uniform2i = function(t, e, i) {},
                t.uniform2iv = function(t, e) {}, t.uniform3f = function(t, e, i, r) {}, t.uniform3fv = function(t, e) {},
                t.uniform3i = function(t, e, i, r) {}, t.uniform3iv = function(t, e) {}, t.uniform4f = function(t, e, i, r, n) {},
                t.uniform4fv = function(t, e) {}, t.uniform4i = function(t, e, i, r, n) {}, t.uniform4iv = function(t, e) {},
                t.uniformMatrix2fv = function(t, e, i) {}, t.uniformMatrix3fv = function(t, e, i) {},
                t.uniformMatrix4fv = function(t, e, i) {}, t.useProgram = function(t) {}, t.validateProgram = function(t) {},
                t.vertexAttrib1f = function(t, e) {}, t.vertexAttrib1fv = function(t, e) {}, t.vertexAttrib2f = function(t, e, i) {},
                t.vertexAttrib2fv = function(t, e) {}, t.vertexAttrib3f = function(t, e, i, r) {},
                t.vertexAttrib3fv = function(t, e) {}, t.vertexAttrib4f = function(t, e, i, r, n) {},
                t.vertexAttrib4fv = function(t, e) {}, t.vertexAttribPointer = function(t, e, i, r, n, a) {},
                t.viewport = function(t, e, i, r) {}, t.configureBackBuffer = function(t, e, i, r, n) {
                    void 0 === r && (r = !0), void 0 === n && (n = !1);
                }, t.compressedTexImage2D = function(t) {}, t.createVertexArray = function() {
                    throw "not implemented";
                }, t.bindVertexArray = function(t) {
                    throw "not implemented";
                }, t.deleteVertexArray = function(t) {
                    throw "not implemented";
                }, t.isVertexArray = function(t) {
                    throw "not implemented";
                }, a.__init__ = function(t) {
                    if (laya.webgl.WebGLContext._checkExtensions(t), !$._isWebGL2 && !C.isConchApp) {
                        d._setupVertexArrayObject && (u.onMiniGame && u.onIOS || u.onBDMiniGame || u.onLimixiu ? d._forceSetupVertexArrayObject(t) : d._setupVertexArrayObject(t));
                        var e = (t.rawgl || t).getExtension("OES_vertex_array_object");
                        if (e) {
                            console.log("EXT:webgl support OES_vertex_array_object！");
                            var i = t;
                            i.createVertexArray = function() {
                                return e.createVertexArrayOES();
                            }, i.bindVertexArray = function(t) {
                                e.bindVertexArrayOES(t);
                            }, i.deleteVertexArray = function(t) {
                                e.deleteVertexArrayOES(t);
                            }, i.isVertexArray = function(t) {
                                e.isVertexArrayOES(t);
                            };
                        }
                    }
                }, a._getExtension = function(t, e) {
                    var i = a._extentionVendorPrefixes;
                    for (var r in i) {
                        var n = t.getExtension(i[r] + e);
                        if (n) return n;
                    }
                    return null;
                }, a._checkExtensions = function(t) {
                    a._extTextureFilterAnisotropic = a._getExtension(t, "EXT_texture_filter_anisotropic"),
                        a._compressedTextureS3tc = a._getExtension(t, "WEBGL_compressed_texture_s3tc"),
                        a._compressedTexturePvrtc = a._getExtension(t, "WEBGL_compressed_texture_pvrtc"),
                        a._compressedTextureEtc1 = a._getExtension(t, "WEBGL_compressed_texture_etc1"),
                        a._angleInstancedArrays = a._getExtension(t, "ANGLE_instanced_arrays");
                }, a.__init_native = function() {
                    if (C.supportWebGLPlusRendering) {
                        var t = a;
                        t.activeTexture = t.activeTextureForNative, t.bindTexture = t.bindTextureForNative;
                    }
                }, a.useProgram = function(t, e) {
                    return a._useProgram !== e && (t.useProgram(e), a._useProgram = e, !0);
                }, a.setDepthTest = function(t, e) {
                    e !== a._depthTest && ((a._depthTest = e) ? t.enable(2929) : t.disable(2929));
                }, a.setDepthMask = function(t, e) {
                    e !== a._depthMask && (a._depthMask = e, t.depthMask(e));
                }, a.setDepthFunc = function(t, e) {
                    e !== a._depthFunc && (a._depthFunc = e, t.depthFunc(e));
                }, a.setBlend = function(t, e) {
                    e !== a._blend && ((a._blend = e) ? t.enable(3042) : t.disable(3042));
                }, a.setBlendFunc = function(t, e, i) {
                    (e !== a._sFactor || i !== a._dFactor) && (a._sFactor = a._srcAlpha = e, a._dFactor = a._dstAlpha = i,
                        t.blendFunc(e, i));
                }, a.setBlendFuncSeperate = function(t, e, i, r, n) {
                    e === a._sFactor && i === a._dFactor && r === a._srcAlpha && n === a._dstAlpha || (a._sFactor = e,
                        a._dFactor = i, a._srcAlpha = r, a._dstAlpha = n, t.blendFuncSeparate(e, i, r, n));
                }, a.setCullFace = function(t, e) {
                    e !== a._cullFace && ((a._cullFace = e) ? t.enable(2884) : t.disable(2884));
                }, a.setFrontFace = function(t, e) {
                    e !== a._frontFace && (a._frontFace = e, t.frontFace(e));
                }, a.activeTexture = function(t, e) {
                    a._activedTextureID !== e && (t.activeTexture(e), a._activedTextureID = e);
                }, a.bindTexture = function(t, e, i) {
                    a._activeTextures[a._activedTextureID - 33984] !== i && (t.bindTexture(e, i), a._activeTextures[a._activedTextureID - 33984] = i);
                }, a.useProgramForNative = function(t, e) {
                    return t.useProgram(e), !0;
                }, a.setDepthTestForNative = function(t, e) {
                    e ? t.enable(2929) : t.disable(2929);
                }, a.setDepthMaskForNative = function(t, e) {
                    t.depthMask(e);
                }, a.setDepthFuncForNative = function(t, e) {
                    t.depthFunc(e);
                }, a.setBlendForNative = function(t, e) {
                    e ? t.enable(3042) : t.disable(3042);
                }, a.setBlendFuncForNative = function(t, e, i) {
                    t.blendFunc(e, i);
                }, a.setCullFaceForNative = function(t, e) {
                    e ? t.enable(2884) : t.disable(2884);
                }, a.setFrontFaceForNative = function(t, e) {
                    t.frontFace(e);
                }, a.activeTextureForNative = function(t, e) {
                    t.activeTexture(e);
                }, a.bindTextureForNative = function(t, e, i) {
                    t.bindTexture(e, i);
                }, a.bindVertexArrayForNative = function(t, e) {
                    t.bindVertexArray(e);
                }, a.DEPTH_BUFFER_BIT = 256, a.STENCIL_BUFFER_BIT = 1024, a.COLOR_BUFFER_BIT = 16384,
                a.POINTS = 0, a.LINES = 1, a.LINE_LOOP = 2, a.LINE_STRIP = 3, a.TRIANGLES = 4, a.TRIANGLE_STRIP = 5,
                a.TRIANGLE_FAN = 6, a.ZERO = 0, a.ONE = 1, a.SRC_COLOR = 768, a.ONE_MINUS_SRC_COLOR = 769,
                a.SRC_ALPHA = 770, a.ONE_MINUS_SRC_ALPHA = 771, a.DST_ALPHA = 772, a.ONE_MINUS_DST_ALPHA = 773,
                a.DST_COLOR = 774, a.ONE_MINUS_DST_COLOR = 775, a.SRC_ALPHA_SATURATE = 776, a.FUNC_ADD = 32774,
                a.BLEND_EQUATION = 32777, a.BLEND_EQUATION_RGB = 32777, a.BLEND_EQUATION_ALPHA = 34877,
                a.FUNC_SUBTRACT = 32778, a.FUNC_REVERSE_SUBTRACT = 32779, a.BLEND_DST_RGB = 32968,
                a.BLEND_SRC_RGB = 32969, a.BLEND_DST_ALPHA = 32970, a.BLEND_SRC_ALPHA = 32971, a.CONSTANT_COLOR = 32769,
                a.ONE_MINUS_CONSTANT_COLOR = 32770, a.CONSTANT_ALPHA = 32771, a.ONE_MINUS_CONSTANT_ALPHA = 32772,
                a.BLEND_COLOR = 32773, a.ARRAY_BUFFER = 34962, a.ELEMENT_ARRAY_BUFFER = 34963, a.ARRAY_BUFFER_BINDING = 34964,
                a.ELEMENT_ARRAY_BUFFER_BINDING = 34965, a.STREAM_DRAW = 35040, a.STATIC_DRAW = 35044,
                a.DYNAMIC_DRAW = 35048, a.BUFFER_SIZE = 34660, a.BUFFER_USAGE = 34661, a.CURRENT_VERTEX_ATTRIB = 34342,
                a.FRONT = 1028, a.BACK = 1029, a.CULL_FACE = 2884, a.FRONT_AND_BACK = 1032, a.BLEND = 3042,
                a.DITHER = 3024, a.STENCIL_TEST = 2960, a.DEPTH_TEST = 2929, a.SCISSOR_TEST = 3089,
                a.POLYGON_OFFSET_FILL = 32823, a.SAMPLE_ALPHA_TO_COVERAGE = 32926, a.SAMPLE_COVERAGE = 32928,
                a.NO_ERROR = 0, a.INVALID_ENUM = 1280, a.INVALID_VALUE = 1281, a.INVALID_OPERATION = 1282,
                a.OUT_OF_MEMORY = 1285, a.CW = 2304, a.CCW = 2305, a.LINE_WIDTH = 2849, a.ALIASED_POINT_SIZE_RANGE = 33901,
                a.ALIASED_LINE_WIDTH_RANGE = 33902, a.CULL_FACE_MODE = 2885, a.FRONT_FACE = 2886,
                a.DEPTH_RANGE = 2928, a.DEPTH_WRITEMASK = 2930, a.DEPTH_CLEAR_VALUE = 2931, a.DEPTH_FUNC = 2932,
                a.STENCIL_CLEAR_VALUE = 2961, a.STENCIL_FUNC = 2962, a.STENCIL_FAIL = 2964, a.STENCIL_PASS_DEPTH_FAIL = 2965,
                a.STENCIL_PASS_DEPTH_PASS = 2966, a.STENCIL_REF = 2967, a.STENCIL_VALUE_MASK = 2963,
                a.STENCIL_WRITEMASK = 2968, a.STENCIL_BACK_FUNC = 34816, a.STENCIL_BACK_FAIL = 34817,
                a.STENCIL_BACK_PASS_DEPTH_FAIL = 34818, a.STENCIL_BACK_PASS_DEPTH_PASS = 34819,
                a.STENCIL_BACK_REF = 36003, a.STENCIL_BACK_VALUE_MASK = 36004, a.STENCIL_BACK_WRITEMASK = 36005,
                a.VIEWPORT = 2978, a.SCISSOR_BOX = 3088, a.COLOR_CLEAR_VALUE = 3106, a.COLOR_WRITEMASK = 3107,
                a.UNPACK_ALIGNMENT = 3317, a.PACK_ALIGNMENT = 3333, a.MAX_TEXTURE_SIZE = 3379, a.MAX_VIEWPORT_DIMS = 3386,
                a.SUBPIXEL_BITS = 3408, a.RED_BITS = 3410, a.GREEN_BITS = 3411, a.BLUE_BITS = 3412,
                a.ALPHA_BITS = 3413, a.DEPTH_BITS = 3414, a.STENCIL_BITS = 3415, a.POLYGON_OFFSET_UNITS = 10752,
                a.POLYGON_OFFSET_FACTOR = 32824, a.TEXTURE_BINDING_2D = 32873, a.SAMPLE_BUFFERS = 32936,
                a.SAMPLES = 32937, a.SAMPLE_COVERAGE_VALUE = 32938, a.SAMPLE_COVERAGE_INVERT = 32939,
                a.NUM_COMPRESSED_TEXTURE_FORMATS = 34466, a.COMPRESSED_TEXTURE_FORMATS = 34467,
                a.DONT_CARE = 4352, a.FASTEST = 4353, a.NICEST = 4354, a.GENERATE_MIPMAP_HINT = 33170,
                a.BYTE = 5120, a.UNSIGNED_BYTE = 5121, a.SHORT = 5122, a.UNSIGNED_SHORT = 5123,
                a.INT = 5124, a.UNSIGNED_INT = 5125, a.FLOAT = 5126, a.DEPTH_COMPONENT = 6402, a.ALPHA = 6406,
                a.RGB = 6407, a.RGBA = 6408, a.LUMINANCE = 6409, a.LUMINANCE_ALPHA = 6410, a.UNSIGNED_SHORT_4_4_4_4 = 32819,
                a.UNSIGNED_SHORT_5_5_5_1 = 32820, a.UNSIGNED_SHORT_5_6_5 = 33635, a.FRAGMENT_SHADER = 35632,
                a.VERTEX_SHADER = 35633, a.MAX_VERTEX_ATTRIBS = 34921, a.MAX_VERTEX_UNIFORM_VECTORS = 36347,
                a.MAX_VARYING_VECTORS = 36348, a.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661, a.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660,
                a.MAX_TEXTURE_IMAGE_UNITS = 34930, a.MAX_FRAGMENT_UNIFORM_VECTORS = 36349, a.SHADER_TYPE = 35663,
                a.DELETE_STATUS = 35712, a.LINK_STATUS = 35714, a.VALIDATE_STATUS = 35715, a.ATTACHED_SHADERS = 35717,
                a.ACTIVE_UNIFORMS = 35718, a.ACTIVE_ATTRIBUTES = 35721, a.SHADING_LANGUAGE_VERSION = 35724,
                a.CURRENT_PROGRAM = 35725, a.NEVER = 512, a.LESS = 513, a.EQUAL = 514, a.LEQUAL = 515,
                a.GREATER = 516, a.NOTEQUAL = 517, a.GEQUAL = 518, a.ALWAYS = 519, a.KEEP = 7680,
                a.REPLACE = 7681, a.INCR = 7682, a.DECR = 7683, a.INVERT = 5386, a.INCR_WRAP = 34055,
                a.DECR_WRAP = 34056, a.VENDOR = 7936, a.RENDERER = 7937, a.VERSION = 7938, a.NEAREST = 9728,
                a.LINEAR = 9729, a.NEAREST_MIPMAP_NEAREST = 9984, a.LINEAR_MIPMAP_NEAREST = 9985,
                a.NEAREST_MIPMAP_LINEAR = 9986, a.LINEAR_MIPMAP_LINEAR = 9987, a.TEXTURE_MAG_FILTER = 10240,
                a.TEXTURE_MIN_FILTER = 10241, a.TEXTURE_WRAP_S = 10242, a.TEXTURE_WRAP_T = 10243,
                a.TEXTURE_2D = 3553, a.TEXTURE_3D = 32879, a.TEXTURE = 5890, a.TEXTURE_CUBE_MAP = 34067,
                a.TEXTURE_BINDING_CUBE_MAP = 34068, a.TEXTURE_CUBE_MAP_POSITIVE_X = 34069, a.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070,
                a.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071, a.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072, a.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073,
                a.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074, a.MAX_CUBE_MAP_TEXTURE_SIZE = 34076, a.TEXTURE0 = 33984,
                a.TEXTURE1 = 33985, a.TEXTURE2 = 33986, a.TEXTURE3 = 33987, a.TEXTURE4 = 33988,
                a.TEXTURE5 = 33989, a.TEXTURE6 = 33990, a.TEXTURE7 = 33991, a.TEXTURE8 = 33992,
                a.TEXTURE9 = 33993, a.TEXTURE10 = 33994, a.TEXTURE11 = 33995, a.TEXTURE12 = 33996,
                a.TEXTURE13 = 33997, a.TEXTURE14 = 33998, a.TEXTURE15 = 33999, a.TEXTURE16 = 34e3,
                a.TEXTURE17 = 34001, a.TEXTURE18 = 34002, a.TEXTURE19 = 34003, a.TEXTURE20 = 34004,
                a.TEXTURE21 = 34005, a.TEXTURE22 = 34006, a.TEXTURE23 = 34007, a.TEXTURE24 = 34008,
                a.TEXTURE25 = 34009, a.TEXTURE26 = 34010, a.TEXTURE27 = 34011, a.TEXTURE28 = 34012,
                a.TEXTURE29 = 34013, a.TEXTURE30 = 34014, a.TEXTURE31 = 34015, a.ACTIVE_TEXTURE = 34016,
                a.REPEAT = 10497, a.CLAMP_TO_EDGE = 33071, a.MIRRORED_REPEAT = 33648, a.FLOAT_VEC2 = 35664,
                a.FLOAT_VEC3 = 35665, a.FLOAT_VEC4 = 35666, a.INT_VEC2 = 35667, a.INT_VEC3 = 35668,
                a.INT_VEC4 = 35669, a.BOOL = 35670, a.BOOL_VEC2 = 35671, a.BOOL_VEC3 = 35672, a.BOOL_VEC4 = 35673,
                a.FLOAT_MAT2 = 35674, a.FLOAT_MAT3 = 35675, a.FLOAT_MAT4 = 35676, a.SAMPLER_2D = 35678,
                a.SAMPLER_CUBE = 35680, a.VERTEX_ATTRIB_ARRAY_ENABLED = 34338, a.VERTEX_ATTRIB_ARRAY_SIZE = 34339,
                a.VERTEX_ATTRIB_ARRAY_STRIDE = 34340, a.VERTEX_ATTRIB_ARRAY_TYPE = 34341, a.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922,
                a.VERTEX_ATTRIB_ARRAY_POINTER = 34373, a.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975,
                a.COMPILE_STATUS = 35713, a.LOW_FLOAT = 36336, a.MEDIUM_FLOAT = 36337, a.HIGH_FLOAT = 36338,
                a.LOW_INT = 36339, a.MEDIUM_INT = 36340, a.HIGH_INT = 36341, a.FRAMEBUFFER = 36160,
                a.RENDERBUFFER = 36161, a.RGBA4 = 32854, a.RGB5_A1 = 32855, a.RGB565 = 36194, a.DEPTH_COMPONENT16 = 33189,
                a.STENCIL_INDEX = 6401, a.STENCIL_INDEX8 = 36168, a.DEPTH_STENCIL = 34041, a.RENDERBUFFER_WIDTH = 36162,
                a.RENDERBUFFER_HEIGHT = 36163, a.RENDERBUFFER_INTERNAL_FORMAT = 36164, a.RENDERBUFFER_RED_SIZE = 36176,
                a.RENDERBUFFER_GREEN_SIZE = 36177, a.RENDERBUFFER_BLUE_SIZE = 36178, a.RENDERBUFFER_ALPHA_SIZE = 36179,
                a.RENDERBUFFER_DEPTH_SIZE = 36180, a.RENDERBUFFER_STENCIL_SIZE = 36181, a.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048,
                a.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049, a.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050,
                a.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051, a.COLOR_ATTACHMENT0 = 36064,
                a.DEPTH_ATTACHMENT = 36096, a.STENCIL_ATTACHMENT = 36128, a.DEPTH_STENCIL_ATTACHMENT = 33306,
                a.NONE = 0, a.FRAMEBUFFER_COMPLETE = 36053, a.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054,
                a.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055, a.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057,
                a.FRAMEBUFFER_UNSUPPORTED = 36061, a.FRAMEBUFFER_BINDING = 36006, a.RENDERBUFFER_BINDING = 36007,
                a.MAX_RENDERBUFFER_SIZE = 34024, a.INVALID_FRAMEBUFFER_OPERATION = 1286, a.UNPACK_FLIP_Y_WEBGL = 37440,
                a.UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441, a.CONTEXT_LOST_WEBGL = 37442, a.UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443,
                a.BROWSER_DEFAULT_WEBGL = 37444, a._extTextureFilterAnisotropic = null, a._compressedTextureS3tc = null,
                a._compressedTexturePvrtc = null, a._compressedTextureEtc1 = null, a._angleInstancedArrays = null,
                a._glTextureIDs = [33984, 33985, 33986, 33987, 33988, 33989, 33990, 33991], a._useProgram = null,
                a._depthTest = !0, a._depthMask = !0, a._blend = !1, a._cullFace = !1, a._activedTextureID = 33984,
                s(a, ["_extentionVendorPrefixes", function() {
                    return this._extentionVendorPrefixes = ["", "WEBKIT_", "MOZ_"];
                }, "_activeTextures", function() {
                    return this._activeTextures = new Array(8);
                }, "_depthFunc", function() {
                    return this._depthFunc = 513;
                }, "_sFactor", function() {
                    return this._sFactor = 1;
                }, "_dFactor", function() {
                    return this._dFactor = 0;
                }, "_srcAlpha", function() {
                    return this._srcAlpha = 1;
                }, "_dstAlpha", function() {
                    return this._dstAlpha = 0;
                }, "_frontFace", function() {
                    return this._frontFace = 2305;
                }]), a;
        }()),
        Z = function() {
            function t() {
                this._glBuffer = null, this._buffer = null, this._bufferType = 0, this._bufferUsage = 0,
                    this._byteLength = 0, this._glBuffer = ut.instance.createBuffer();
            }
            l(t, "laya.webgl.utils.Buffer");
            var e = t.prototype;
            return e._bindForVAO = function() {}, e.bind = function() {
                return !1;
            }, e.destroy = function() {
                this._glBuffer && (ut.instance.deleteBuffer(this._glBuffer), this._glBuffer = null);
            }, h(0, e, "bufferUsage", function() {
                return this._bufferUsage;
            }), t._bindedVertexBuffer = null, t._bindedIndexBuffer = null, t;
        }(),
        Q = function() {
            function t(t) {
                this.script = null, this.codes = {}, this.funs = {}, this.curUseID = -1, this.funnames = "",
                    this.script = t;
                for (var e = 0, i = 0, r = 0; !((e = t.indexOf("#begin", e)) < 0);) {
                    for (r = e + 5; !((r = t.indexOf("#end", r)) < 0) && "i" === t.charAt(r + 4);) r += 5;
                    if (r < 0) throw "add include err,no #end:" + t;
                    i = t.indexOf("\n", e);
                    var n = et.splitToWords(t.substr(e, i - e), null);
                    "code" == n[1] ? this.codes[n[2]] = t.substr(i + 1, r - i - 1) : "function" == n[1] && (i = t.indexOf("function", e),
                            i += "function".length, this.funs[n[3]] = t.substr(i + 1, r - i - 1), this.funnames += n[3] + ";"),
                        e = r + 1;
                }
            }
            l(t, "laya.webgl.utils.InlcudeFile");
            var e = t.prototype;
            return e.getWith = function(t) {
                var e = t ? this.codes[t] : this.script;
                if (!e) throw "get with error:" + t;
                return e;
            }, e.getFunsScript = function(t) {
                var e = "";
                for (var i in this.funs) 0 <= t.indexOf(i + ";") && (e += this.funs[i]);
                return e;
            }, t;
        }(),
        q = function() {
            function e() {}
            return l(e, "laya.webgl.canvas.BlendMode"), e._init_ = function(t) {
                    e.fns = [e.BlendNormal, e.BlendAdd, e.BlendMultiply, e.BlendScreen, e.BlendOverlay, e.BlendLight, e.BlendMask, e.BlendDestinationOut],
                        e.targetFns = [e.BlendNormalTarget, e.BlendAddTarget, e.BlendMultiplyTarget, e.BlendScreenTarget, e.BlendOverlayTarget, e.BlendLightTarget, e.BlendMask, e.BlendDestinationOut];
                }, e.BlendNormal = function(t) {
                    K.setBlendFunc(t, 1, 771);
                }, e.BlendAdd = function(t) {
                    K.setBlendFunc(t, 1, 772);
                }, e.BlendMultiply = function(t) {
                    K.setBlendFunc(t, 774, 771);
                }, e.BlendScreen = function(t) {
                    K.setBlendFunc(t, 1, 1);
                }, e.BlendOverlay = function(t) {
                    K.setBlendFunc(t, 1, 769);
                }, e.BlendLight = function(t) {
                    K.setBlendFunc(t, 1, 1);
                }, e.BlendNormalTarget = function(t) {
                    K.setBlendFunc(t, 1, 771);
                }, e.BlendAddTarget = function(t) {
                    K.setBlendFunc(t, 1, 772);
                }, e.BlendMultiplyTarget = function(t) {
                    K.setBlendFunc(t, 774, 771);
                }, e.BlendScreenTarget = function(t) {
                    K.setBlendFunc(t, 1, 1);
                }, e.BlendOverlayTarget = function(t) {
                    K.setBlendFunc(t, 1, 769);
                }, e.BlendLightTarget = function(t) {
                    K.setBlendFunc(t, 1, 1);
                }, e.BlendMask = function(t) {
                    K.setBlendFunc(t, 0, 770);
                }, e.BlendDestinationOut = function(t) {
                    K.setBlendFunc(t, 0, 0);
                }, e.activeBlendFunction = null, e.NAMES = ["normal", "add", "multiply", "screen", "overlay", "light", "mask", "destination-out"],
                e.TOINT = {
                    normal: 0,
                    add: 1,
                    multiply: 2,
                    screen: 3,
                    overlay: 4,
                    light: 5,
                    mask: 6,
                    "destination-out": 7,
                    lighter: 1
                }, e.NORMAL = "normal", e.ADD = "add", e.MULTIPLY = "multiply", e.SCREEN = "screen",
                e.OVERLAY = "overlay", e.LIGHT = "light", e.MASK = "mask", e.DESTINATIONOUT = "destination-out",
                e.LIGHTER = "lighter", e.fns = [], e.targetFns = [], e;
        }(),
        $ = function() {
            function s() {}
            return l(s, "laya.webgl.WebGL"), s._uint8ArraySlice = function() {
                    for (var t = this.length, e = new Uint8Array(this.length), i = 0; i < t; i++) e[i] = this[i];
                    return e;
                }, s._float32ArraySlice = function() {
                    for (var t = this.length, e = new Float32Array(this.length), i = 0; i < t; i++) e[i] = this[i];
                    return e;
                }, s._uint16ArraySlice = function(t) {
                    var e, i = arguments,
                        r = 0,
                        n = 0;
                    if (0 === i.length)
                        for (r = this.length, e = new Uint16Array(r), n = 0; n < r; n++) e[n] = this[n];
                    else if (2 === i.length) {
                        var a = i[0],
                            s = i[1];
                        if (a < s)
                            for (r = s - a, e = new Uint16Array(r), n = a; n < s; n++) e[n - a] = this[n];
                        else e = new Uint16Array(0);
                    }
                    return e;
                }, s._nativeRender_enable = function() {
                    s.isNativeRender_enable || (s.isNativeRender_enable = !0, e.create = function(t, e) {
                        var i = new Ft(t, e, 1, !1, !1);
                        return i.wrapModeU = 1, i.wrapModeV = 1, i;
                    }, K.__init_native(), Lt.prototype.uploadTexture2D = function(t) {
                        var e = K;
                        e.bindTexture(laya.webgl.WebGL.mainContext, e.TEXTURE_2D, t);
                    }, L.width = u.window.innerWidth, L.height = u.window.innerHeight, n.measureText = function(t, e) {
                        return d.conchTextCanvas.font = e, d.conchTextCanvas.measureText(t);
                    }, n.enableNative = function() {
                        C.supportWebGLPlusRendering && (st.uploadShaderUniforms = st.uploadShaderUniformsForNative,
                            U = d.GLCommandEncoder, ut = d.LayaGLContext);
                        var t = v;
                        t.prototype.render = t.prototype.renderToNative;
                    }, n.clear = function(t) {
                        mt.set2DRenderConfig();
                        var e = p.create(t).arrColor,
                            i = ut.instance;
                        e && i.clearColor(e[0], e[1], e[2], e[3]), i.clear(17664), L.clear();
                    }, n.drawToCanvas = function(t, e, i, r, n, a) {
                        n -= t.x, a -= t.y, n |= 0, a |= 0, i |= 0, r |= 0;
                        var s = new m(!1),
                            h = s.getContext("2d");
                        return s.size(i, r), h.asBitmap = !0, h._targets.start(), x.renders[e]._fun(t, h, n, a),
                            h.flush(), h._targets.end(), h._targets.restore(), s;
                    }, Nt.prototype._uv = Nt.flipyuv, Object.defineProperty(Nt.prototype, "uv", {
                        get: function() {
                            return this._uv;
                        },
                        set: function(t) {
                            this._uv = t;
                        }
                    }), m.prototype.getTexture = function() {
                        return this._texture || (this._texture = this.context._targets, this._texture.uv = Nt.flipyuv,
                            this._texture.bitmap = this._texture), this._texture;
                    });
                }, s._webglRender_enable = function() {
                    C.isWebGL || (C.isWebGL = !0, n.initRender = function(t, e, i) {
                            var r = ut.instance = laya.webgl.WebGL.mainContext = function(t) {
                                var e, i = ["webgl2", "webgl", "experimental-webgl", "webkit-3d", "moz-webgl"];
                                c.useWebGL2 || i.shift();
                                for (var r = 0; r < i.length; r++) {
                                    try {
                                        e = t.getContext(i[r], {
                                            stencil: c.isStencil,
                                            alpha: c.isAlpha,
                                            antialias: c.isAntialias,
                                            premultipliedAlpha: c.premultipliedAlpha,
                                            preserveDrawingBuffer: c.preserveDrawingBuffer
                                        });
                                    } catch (t) {}
                                    if (e) return "webgl2" === i[r] && (laya.webgl.WebGL._isWebGL2 = !0), new ut(),
                                        e;
                                }
                                return null;
                            }(C._mainCanvas.source);
                            if (!r) return !1;
                            t.size(e, i), K.__init__(r), mt.__init__(), W.__init__();
                            var n = new mt();
                            C._context = n, t._setContext(n), laya.webgl.WebGL.shaderHighPrecision = !1;
                            try {
                                var a = r.getShaderPrecisionFormat(35632, 36338);
                                s.shaderHighPrecision = !!a.precision;
                            } catch (t) {}
                            return ut.instance = r, y.__init__(), Ct.__init__(), P.__init__(), N.__init__(),
                                Et.__int__(r), q._init_(r), !0;
                        }, e.create = function(t, e, i) {
                            var r = new Ft(t, e, i, !1, !1);
                            return r.wrapModeU = 1, r.wrapModeV = 1, r;
                        }, n.createRenderSprite = function(t, e) {
                            return new pt(t, e);
                        }, n.changeWebGLSize = function(t, e) {
                            laya.webgl.WebGL.onStageResize(t, e);
                        }, n.clear = function(t) {
                            mt.set2DRenderConfig(), L.worldScissorTest && laya.webgl.WebGL.mainContext.disable(3089);
                            var e = C.context,
                                i = 0 == e._submits._length || c.preserveDrawingBuffer ? p.create(t).arrColor : T.stage._wgColor;
                            i ? e.clearBG(i[0], i[1], i[2], i[3]) : e.clearBG(0, 0, 0, 0), L.clear();
                        }, n.drawToCanvas = function(t, e, i, r, n, a) {
                            n -= t.x, a -= t.y, n |= 0, a |= 0, i |= 0, r |= 0;
                            var s = new mt();
                            s.size(i, r), s.asBitmap = !0, s._targets.start(), x.renders[e]._fun(t, s, n, a),
                                s.flush(), s._targets.end(), s._targets.restore();
                            var h = s._targets.getData(0, 0, i, r);
                            s.destroy();
                            for (var o = new ImageData(i, r), l = 4 * i, u = (new Uint8Array(l), o.data), c = r - 1, _ = c * l, f = 0; 0 <= c; c--) u.set(h.subarray(f, f + l), _),
                                _ -= l, f += l;
                            var d = new m(!0);
                            return d.size(i, r), d.getContext("2d").putImageData(o, 0, 0), d;
                        }, n.getTexturePixels = function(t, e, i, r, n) {
                            var a = 0,
                                s = 0,
                                h = 0,
                                o = t.bitmap,
                                l = o.width,
                                u = o.height;
                            if (l < e + r && (r -= e + r - l), u < i + n && (n -= i + n - u), r <= 0 || n <= 0) return null;
                            var c = 4 * r,
                                _ = null;
                            try {
                                _ = o.getPixels();
                            } catch (t) {}
                            if (_) {
                                if (0 == e && 0 == i && r == l && n == u) return _;
                                var f = new Uint8Array(r * n * 4);
                                for (s = (i + n - 1) * (c = 4 * l) + (a = 4 * e), h = n - 1; 0 <= h; h--) f.set(g.slice(s, s + 4 * r), a),
                                    a += c, s -= c;
                                return f;
                            }
                            var d = new mt();
                            d.size(r, n), d.asBitmap = !0;
                            var p = null;
                            if (0 != e || 0 != i || r != l || n != u) {
                                var m = (p = t.uv.concat())[0],
                                    x = p[1],
                                    v = (p[2] - m) / l,
                                    T = (p[7] - x) / u;
                                p = [m + e * v, x + i * T, m + (e + r) * v, x + i * T, m + (e + r) * v, x + (i + n) * T, m + e * v, x + (i + n) * T];
                            }
                            d._drawTextureM(t, 0, 0, r, n, null, 1, p), d._targets.start(), d.flush(), d._targets.end(),
                                d._targets.restore();
                            var g = d._targets.getData(0, 0, r, n);
                            for (d.destroy(), f = new Uint8Array(r * n * 4), a = 0, s = (n - 1) * c, h = n - 1; 0 <= h; h--) f.set(g.slice(s, s + c), a),
                                a += c, s -= c;
                            return f;
                        }, t._filter = function(t, e, i, r) {
                            var n = e,
                                a = this._next;
                            if (a) {
                                var s = t.filters,
                                    h = s.length;
                                if (1 == h && 32 == s[0].type) return e.save(), e.setColorFilter(s[0]), a._fun.call(a, t, e, i, r),
                                    void e.restore();
                                var o, l = P.create(1, 0),
                                    u = S.TEMP,
                                    c = n._curMat,
                                    _ = R.create();
                                c.copyTo(_);
                                var f = 0,
                                    d = 0,
                                    p = null,
                                    m = t._cacheStyle.filterCache || null;
                                if (m && 0 == t.getRepaint()) {
                                    if ((t._cacheStyle.hasGlowFilter || !1) && (f = 50, d = 25), (o = t.getBounds()).width <= 0 || o.height <= 0) return;
                                    o.width += f, o.height += f, u.x = o.x * _.a + o.y * _.c, u.y = o.y * _.d + o.x * _.b,
                                        o.x = u.x, o.y = u.y, u.x = o.width * _.a + o.height * _.c, u.y = o.height * _.d + o.width * _.b,
                                        o.width = u.x, o.height = u.y;
                                } else {
                                    t._isHaveGlowFilter() && (f = 50, d = 25), (o = new M()).copyFrom(t.getSelfBounds()),
                                        o.x += t.x, o.y += t.y, o.x -= t.pivotX + 4, o.y -= t.pivotY + 4;
                                    var x = o.x,
                                        v = o.y;
                                    if (o.width += f + 8, o.height += f + 8, u.x = o.x * _.a + o.y * _.c, u.y = o.y * _.d + o.x * _.b,
                                        o.x = u.x, o.y = u.y, u.x = o.width * _.a + o.height * _.c, u.y = o.height * _.d + o.width * _.b,
                                        o.width = u.x, o.height = u.y, o.width <= 0 || o.height <= 0) return;
                                    m && D.releaseRT(m), p = D.getRT(o.width, o.height);
                                    var T = m = D.getRT(o.width, o.height);
                                    t._getCacheStyle().filterCache = m, n.pushRT(), n.useRT(p);
                                    var g = t.x - x + d,
                                        b = t.y - v + d;
                                    a._fun.call(a, t, e, g, b), n.useRT(T);
                                    for (var y = 0; y < h; y++) {
                                        0 != y && (n.useRT(p), n.drawTarget(T, 0, 0, o.width, o.height, R.TEMP.identity(), l, null, q.TOINT.overlay),
                                            n.useRT(T));
                                        var A = s[y];
                                        switch (A.type) {
                                            case 16:
                                            case 8:
                                                A._glRender && A._glRender.render(p, e, o.width, o.height, A);
                                                break;

                                            case 32:
                                                n.setColorFilter(A), n.drawTarget(p, 0, 0, o.width, o.height, R.EMPTY.identity(), P.create(1, 0)),
                                                    n.setColorFilter(null);
                                        }
                                    }
                                    n.popRT();
                                }
                                if (i = i - d - t.x, r = r - d - t.y, u.setTo(i, r), _.transformPoint(u), i = u.x + o.x,
                                    r = u.y + o.y, n._drawRenderTexture(m, i, r, o.width, o.height, R.TEMP.identity(), 1, Nt.defuv),
                                    p) {
                                    var E = ft.create([p], function(t) {
                                        t.destroy();
                                    }, this);
                                    p = null, e.addRenderObject(E);
                                }
                                _.destroy();
                            }
                        }, m.prototype.getTexture = function() {
                            if (!this._texture) {
                                var t = new Ft();
                                t.loadImageSource(this.source), this._texture = new A(t);
                            }
                            return this._texture;
                        }, Float32Array.prototype.slice || (Float32Array.prototype.slice = s._float32ArraySlice),
                        Uint16Array.prototype.slice || (Uint16Array.prototype.slice = s._uint16ArraySlice),
                        Uint8Array.prototype.slice || (Uint8Array.prototype.slice = s._uint8ArraySlice));
                }, s.enable = function() {
                    return u.__init__(), !!u._supportWebGL && (s._webglRender_enable(), C.isConchApp && s._nativeRender_enable(), !0);
                }, s.onStageResize = function(t, e) {
                    null != s.mainContext && (s.mainContext.viewport(0, 0, t, e), L.width = t, L.height = e);
                }, s.mainContext = null, s.shaderHighPrecision = !1, s._isWebGL2 = !1, s.isNativeRender_enable = !1,
                s;
        }(),
        J = function() {
            function t(t, e, i) {
                this.i = null, this.x = null, this.y = null, this.prev = null, this.next = null,
                    this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = null, this.i = t,
                    this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null,
                    this.nextZ = null, this.steiner = !1;
            }
            return l(t, "laya.webgl.shapes.EarcutNode"), t;
        }(),
        tt = (function() {
            function t(t, e) {
                this.submitStartPos = 0, this.submitEndPos = 0, this.context = null, this.touches = [],
                    this.submits = [], this.sprite = null, this._mesh = null, this._pathMesh = null,
                    this._triangleMesh = null, this.meshlist = [], this._oldMesh = null, this._oldPathMesh = null,
                    this._oldTriMesh = null, this._oldMeshList = null, this.oldTx = 0, this.oldTy = 0,
                    this.cachedClipInfo = new R(), this.invMat = new R(), this.context = t, this.sprite = e,
                    t._globalClipMatrix.copyTo(this.cachedClipInfo);
            }
            l(t, "laya.webgl.canvas.WebGLCacheAsNormalCanvas");
            var e = t.prototype;
            e.startRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context),
                        this.context._charSubmitCache.enable(!0, this.context)), this.context._incache = !0,
                    this.touches.length = 0, this.context.touches = this.touches, this.context._globalClipMatrix.copyTo(this.cachedClipInfo),
                    this.submits.length = 0, this.submitStartPos = this.context._submits._length;
                for (var t = 0, e = this.meshlist.length; t < e; t++) {
                    var i = this.meshlist[t];
                    i.canReuse ? i.releaseMesh() : i.destroy();
                }
                this.meshlist.length = 0, this._mesh = At.getAMesh(), this._pathMesh = bt.getAMesh(),
                    this._triangleMesh = gt.getAMesh(), this.meshlist.push(this._mesh), this.meshlist.push(this._pathMesh),
                    this.meshlist.push(this._triangleMesh), this.context._curSubmit = W.RENDERBASE,
                    this._oldMesh = this.context._mesh, this._oldPathMesh = this.context._pathMesh,
                    this._oldTriMesh = this.context._triangleMesh, this._oldMeshList = this.context.meshlist,
                    this.context._mesh = this._mesh, this.context._pathMesh = this._pathMesh, this.context._triangleMesh = this._triangleMesh,
                    this.context.meshlist = this.meshlist, this.oldTx = this.context._curMat.tx, this.oldTy = this.context._curMat.ty,
                    this.context._curMat.tx = 0, this.context._curMat.ty = 0, this.context._curMat.copyTo(this.invMat),
                    this.invMat.invert();
            }, e.endRec = function() {
                this.context._charSubmitCache._enbale && (this.context._charSubmitCache.enable(!1, this.context),
                    this.context._charSubmitCache.enable(!0, this.context));
                var t = this.context._submits;
                this.submitEndPos = t._length;
                for (var e = this.submitEndPos - this.submitStartPos, i = 0; i < e; i++) this.submits.push(t[this.submitStartPos + i]);
                t._length -= e, this.context._mesh = this._oldMesh, this.context._pathMesh = this._oldPathMesh,
                    this.context._triangleMesh = this._oldTriMesh, this.context.meshlist = this._oldMeshList,
                    this.context._curSubmit = W.RENDERBASE, this.context._curMat.tx = this.oldTx, this.context._curMat.ty = this.oldTy,
                    this.context.touches = null, this.context._incache = !1;
            }, e.isCacheValid = function() {
                var t = this.context._globalClipMatrix;
                return t.a == this.cachedClipInfo.a && t.b == this.cachedClipInfo.b && t.c == this.cachedClipInfo.c && t.d == this.cachedClipInfo.d && t.tx == this.cachedClipInfo.tx && t.ty == this.cachedClipInfo.ty;
            }, e.flushsubmit = function() {
                var e = W.RENDERBASE;
                this.submits.forEach(function(t) {
                    t != W.RENDERBASE && (W.preRender = e, (e = t).renderSubmit());
                });
            }, e.releaseMem = function() {}, s(t, ["matI", function() {
                return this.matI = new R();
            }]);
        }(), function() {
            function t() {
                this.char = "", this.tex = null, this.deleted = !1, this.pos = 0, this.width = 0,
                    this.height = 0, this.bmpWidth = 0, this.bmpHeight = 0, this.orix = 0, this.oriy = 0,
                    this.touchTick = 0, this.isSpace = !1, this.uv = new Array(8);
            }
            return l(t, "laya.webgl.resource.CharRenderInfo"), t.prototype.touch = function() {
                var t = g.loopCount;
                this.touchTick != t && this.tex.touchRect(this, t), this.touchTick = t;
            }, t;
        }()),
        et = function() {
            function v(t, e, i, r) {
                this._clearCR = new RegExp("\r", "g");
                var n = this;

                function a(t) {
                    t = t.replace(n._clearCR, "");
                    var e = [],
                        i = new k(e);
                    return n._compileToTree(i, t.split("\n"), 0, e, r), i;
                }
                var s = u.now();
                this._VS = a(t), this._PS = a(e), this._nameMap = i, 2 < u.now() - s && console.log("ShaderCompile use time:" + (u.now() - s) + "  size:" + t.length + "/" + e.length);
            }
            l(v, "laya.webgl.utils.ShaderCompile");
            var t = v.prototype;
            return t._compileToTree = function(t, e, i, r, n) {
                    var a, s, h, o, l, u, c, _ = 0,
                        f = 0,
                        d = 0,
                        p = 0;
                    for (f = i; f < e.length; f++)
                        if (!((h = e[f]).length < 1) && 0 !== (_ = h.indexOf("//"))) {
                            if (0 <= _ && (h = h.substr(0, _)), a = c || new k(r), c = null, a.text = h, a.noCompile = !0,
                                0 <= (_ = h.indexOf("#"))) {
                                for (o = "#", p = _ + 1, d = h.length; p < d; p++) {
                                    var m = h.charAt(p);
                                    if (" " === m || "\t" === m || "?" === m) break;
                                    o += m;
                                }
                                switch (a.name = o) {
                                    case "#ifdef":
                                    case "#ifndef":
                                        if (a.src = h, a.noCompile = null != h.match(/[!&|()=<>]/), a.noCompile ? console.log("function():Boolean{return " + h.substr(_ + a.name.length) + "}") : (u = h.replace(/^\s*/, "").split(/\s+/),
                                                a.setCondition(u[1], "#ifdef" === o ? 1 : 2), a.text = "//" + a.text), a.setParent(t),
                                            t = a, n)
                                            for (u = h.substr(p).split(v._splitToWordExps3), p = 0; p < u.length; p++)(h = u[p]).length && (n[h] = !0);
                                        continue;

                                    case "#if":
                                        if (a.src = h, a.noCompile = !0, a.setParent(t), t = a, n)
                                            for (u = h.substr(p).split(v._splitToWordExps3),
                                                p = 0; p < u.length; p++)(h = u[p]).length && "defined" != h && (n[h] = !0);
                                        continue;

                                    case "#else":
                                        a.src = h, s = (t = t.parent).childs[t.childs.length - 1], a.noCompile = s.noCompile,
                                            a.noCompile || (a.condition = s.condition, a.conditionType = 1 == s.conditionType ? 2 : 1,
                                                a.text = "//" + a.text + " " + s.text + " " + a.conditionType), a.setParent(t),
                                            t = a;
                                        continue;

                                    case "#endif":
                                        s = (t = t.parent).childs[t.childs.length - 1], a.noCompile = s.noCompile, a.noCompile || (a.text = "//" + a.text),
                                            a.setParent(t);
                                        continue;

                                    case "#include":
                                        u = v.splitToWords(h, null);
                                        var x = v.includes[u[1]];
                                        if (!x) throw "ShaderCompile error no this include file:" + u[1];
                                        if ((_ = u[0].indexOf("?")) < 0) {
                                            a.setParent(t), h = x.getWith("with" == u[2] ? u[3] : null), this._compileToTree(a, h.split("\n"), 0, r, n),
                                                a.text = "";
                                            continue;
                                        }
                                        a.setCondition(u[0].substr(_ + 1), 1), a.text = x.getWith("with" == u[2] ? u[3] : null);
                                        break;

                                    case "#import":
                                        l = (u = v.splitToWords(h, null))[1], r.push({
                                            node: a,
                                            file: v.includes[l],
                                            ofs: a.text.length
                                        });
                                        continue;
                                }
                            } else {
                                if ((s = t.childs[t.childs.length - 1]) && !s.name) {
                                    0 < r.length && v.splitToWords(h, s), c = a, s.text += "\n" + h;
                                    continue;
                                }
                                0 < r.length && v.splitToWords(h, a);
                            }
                            a.setParent(t);
                        }
                }, t.createShader = function(t, e, i, r) {
                    var n = {},
                        a = "";
                    if (t)
                        for (var s in t) a += "#define " + s + "\n", n[s] = !0;
                    var h = this._VS.toscript(n, []),
                        o = this._PS.toscript(n, []);
                    return (i || Lt.create)(a + h.join("\n"), a + o.join("\n"), e, this._nameMap, r);
                }, v._parseOne = function(t, e, i, r, n, a) {
                    var s = {
                        type: v.shaderParamsMap[i[r + 1]],
                        name: i[r + 2],
                        size: isNaN(parseInt(i[r + 3])) ? 1 : parseInt(i[r + 3])
                    };
                    return a && ("attribute" == n ? t.push(s) : e.push(s)), ":" == i[r + 3] && (s.type = i[r + 4],
                        r += 2), r += 2;
                }, v.addInclude = function(t, e) {
                    if (!e || 0 === e.length) throw new Error("add shader include file err:" + t);
                    if (v.includes[t]) throw new Error("add shader include file err, has add:" + t);
                    v.includes[t] = new Q(e);
                }, v.preGetParams = function(t, e) {
                    var i = [t, e],
                        r = {},
                        n = [],
                        a = [],
                        s = {},
                        h = [];
                    r.attributes = n, r.uniforms = a, r.defines = s;
                    for (var o = 0, l = 0, u = 0; u < 2; u++) {
                        i[u] = i[u].replace(v._removeAnnotation, "");
                        var c, _ = i[u].match(v._reg);
                        for (o = 0, l = _.length; o < l; o++) {
                            var f = _[o];
                            if ("attribute" == f || "uniform" == f) o = v._parseOne(n, a, _, o, f, !0);
                            else {
                                if ("#define" == f) {
                                    h[f = _[++o]] = 1;
                                    continue;
                                }
                                if ("#ifdef" == f) {
                                    s[c = _[++o]] = s[c] || [];
                                    for (o++; o < l; o++)
                                        if ("attribute" == (f = _[o]) || "uniform" == f) o = v._parseOne(n, a, _, o, f, h[c]);
                                        else if ("#else" == f)
                                        for (o++; o < l; o++)
                                            if ("attribute" == (f = _[o]) || "uniform" == f) o = v._parseOne(n, a, _, o, f, !h[c]);
                                            else if ("#endif" == f) break;
                                }
                            }
                        }
                    }
                    return r;
                }, v.splitToWords = function(t, e) {
                    for (var i, r, n = [], a = -1, s = 0, h = t.length; s < h; s++)
                        if (i = t.charAt(s),
                            0 <= " \t=+-*/&%!<>()'\",;".indexOf(i)) {
                            if (0 <= a && 1 < s - a && (r = t.substr(a, s - a), n.push(r)), '"' == i || "'" == i) {
                                var o = t.indexOf(i, s + 1);
                                if (o < 0) throw "Sharder err:" + t;
                                n.push(t.substr(s + 1, o - s - 1)), s = o, a = -1;
                                continue;
                            }
                            "(" == i && e && 0 < n.length && (r = n[n.length - 1] + ";", "vec4;main;".indexOf(r) < 0 && (e.useFuns += r)),
                                a = -1;
                        } else a < 0 && (a = s);
                    return a < h && 1 < h - a && (r = t.substr(a, h - a), n.push(r)), n;
                }, v.IFDEF_NO = 0, v.IFDEF_YES = 1, v.IFDEF_ELSE = 2, v.IFDEF_PARENT = 3, v._removeAnnotation = new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)", "g"),
                v._reg = new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])", "g"),
                v._splitToWordExps = new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])", "g"),
                v.includes = {}, s(v, ["shaderParamsMap", function() {
                    return this.shaderParamsMap = {
                        float: 5126,
                        int: 5124,
                        bool: 35670,
                        vec2: 35664,
                        vec3: 35665,
                        vec4: 35666,
                        ivec2: 35667,
                        ivec3: 35668,
                        ivec4: 35669,
                        bvec2: 35671,
                        bvec3: 35672,
                        bvec4: 35673,
                        mat2: 35674,
                        mat3: 35675,
                        mat4: 35676,
                        sampler2D: 35678,
                        samplerCube: 35680
                    };
                }, "_splitToWordExps3", function() {
                    return this._splitToWordExps3 = new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]", "g");
                }]), v;
        }(),
        it = function() {
            function e(t, e, i) {
                this._value = 0, this._name2int = t, this._int2name = e, this._int2nameMap = i;
            }
            l(e, "laya.webgl.shader.ShaderDefinesBase");
            var t = e.prototype;
            return t.add = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value |= t, this._value;
            }, t.addInt = function(t) {
                return this._value |= t, this._value;
            }, t.remove = function(t) {
                return "string" == typeof t && (t = this._name2int[t]), this._value &= ~t, this._value;
            }, t.isDefine = function(t) {
                return (this._value & t) === t;
            }, t.getValue = function() {
                return this._value;
            }, t.setValue = function(t) {
                this._value = t;
            }, t.toNameDic = function() {
                var t = this._int2nameMap[this._value];
                return t || e._toText(this._value, this._int2name, this._int2nameMap);
            }, e._reg = function(t, e, i, r) {
                r[i[t] = e] = t;
            }, e._toText = function(t, e, i) {
                var r = i[t];
                if (r) return r;
                for (var n = {}, a = 1, s = 0; s < 32 && !(t < (a = 1 << s)); s++)
                    if (t & a) {
                        var h = e[a];
                        h && (n[h] = "");
                    }
                return i[t] = n;
            }, e._toInt = function(t, e) {
                for (var i = t.split("."), r = 0, n = 0, a = i.length; n < a; n++) {
                    var s = e[i[n]];
                    if (!s) throw new Error("Defines to int err:" + t + "/" + i[n]);
                    r |= s;
                }
                return r;
            }, e;
        }(),
        rt = function() {
            function n() {
                this.texWidth = 1024, this.texHeight = 1024, this.atlasgrid = null, this.protectDist = 1,
                    this.texture = null, this.charMaps = {}, this.texHeight = this.texWidth = at.atlasWidth,
                    this.texture = Pt.getTextTexture(this.texWidth, this.texHeight), 256 < this.texWidth / n.atlasGridW && (n.atlasGridW = Math.ceil(this.texWidth / 256)),
                    this.atlasgrid = new ht(this.texWidth / n.atlasGridW, this.texHeight / n.atlasGridW, this.texture.id);
            }
            l(n, "laya.webgl.text.TextAtlas");
            var t = n.prototype;
            return t.setProtecteDist = function(t) {
                this.protectDist = t;
            }, t.getAEmpty = function(t, e, i) {
                var r = this.atlasgrid.addRect(1, Math.ceil(t / n.atlasGridW), Math.ceil(e / n.atlasGridW), i);
                return r && (i.x *= n.atlasGridW, i.y *= n.atlasGridW), r;
            }, t.destroy = function() {
                for (var t in this.charMaps) {
                    this.charMaps[t].deleted = !0;
                }
                this.texture.discard();
            }, t.printDebugInfo = function() {}, h(0, t, "usedRate", function() {
                return this.atlasgrid._used;
            }), n.atlasGridW = 16, n;
        }(),
        nt = function() {
            function s() {
                this._mesh = null, this._startIdx = 0, this._numEle = 0, this.shaderValue = null,
                    this.blendType = 0, this._ref = 1, this.srcRT = null, this._key = new ot();
            }
            l(s, "laya.webgl.submit.SubmitTarget");
            var t = s.prototype;
            return T.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.renderSubmit = function() {
                var t = $.mainContext;
                this._mesh.useMesh(t);
                var e = this.srcRT;
                return e && (this.shaderValue.texture = e._getSource(), this.shaderValue.upload(),
                        this.blend(), g.renderBatches++, g.trianglesFaces += this._numEle / 3, $.mainContext.drawElements(4, this._numEle, 5123, this._startIdx)),
                    1;
            }, t.blend = function() {
                if (q.activeBlendFunction !== q.fns[this.blendType]) {
                    var t = $.mainContext;
                    t.enable(3042), q.fns[this.blendType](t), q.activeBlendFunction = q.fns[this.blendType];
                }
            }, t.getRenderType = function() {
                return 0;
            }, t.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = s.POOL;
                    t[t._length++] = this;
                }
            }, t.reUse = function(t, e) {
                return this._startIdx = e, this._ref++, e;
            }, s.create = function(t, e, i, r) {
                var n = s.POOL._length ? s.POOL[--s.POOL._length] : new s();
                if (n._mesh = e, n.srcRT = r, n._startIdx = e.indexNum * dt.BYTES_PIDX, n._ref = 1,
                    n._key.clear(), n._numEle = 0, n.blendType = t._nBlendType, n._key.blendShader = n.blendType,
                    n.shaderValue = i, n.shaderValue.setValue(t._shader2D), t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return n;
            }, s.POOL = ((s.POOL = [])._length = 0, s.POOL), s;
        }(),
        at = function() {
            function M() {
                this.fontSizeInfo = {}, this.charRender = null, this.mapFont = {}, this.fontID = 0,
                    this.mapColor = [], this.colorID = 0, this.fontScaleX = 1, this.fontScaleY = 1,
                    this._curStrPos = 0, this.bmpData32 = null, this.lastFont = null, this.fontSizeW = 0,
                    this.fontSizeH = 0, this.fontSizeOffX = 0, this.fontSizeOffY = 0, this.renderPerChar = !0,
                    this.textureMem = 0, this.fontStr = null, this.textAtlases = [], this.isoTextures = [],
                    this.tmpAtlasPos = new S();
                var t = !1,
                    e = T.MiniAdpter;
                e && e.systemInfo && e.systemInfo.system && (t = "ios 10.1.1" === e.systemInfo.system.toLowerCase()),
                    u.onMiniGame && !t && (M.isWan1Wan = !0), u.onLimixiu && (M.isWan1Wan = !0), this.charRender = C.isConchApp ? new wt() : new Mt(M.atlasWidth, M.atlasWidth, M.scaleFontWithCtx, !M.isWan1Wan, !1),
                    M.textRenderInst = this, T.textRender = this, M.atlasWidth2 = M.atlasWidth * M.atlasWidth;
            }
            l(M, "laya.webgl.text.TextRender");
            var t = M.prototype;
            return t.setFont = function(t) {
                    if (this.lastFont != t) {
                        this.lastFont = t;
                        var e = this.getFontSizeInfo(t._family),
                            i = e >> 24,
                            r = e >> 16 & 255,
                            n = e >> 8 & 255,
                            a = 255 & e,
                            s = t._size / M.standardFontSize;
                        this.fontSizeOffX = Math.ceil(i * s), this.fontSizeOffY = Math.ceil(r * s), this.fontSizeW = Math.ceil(n * s),
                            this.fontSizeH = Math.ceil(a * s), this.fontStr = t._font.replace("italic", "");
                    }
                }, t.getNextChar = function(t) {
                    var e = t.length,
                        i = this._curStrPos;
                    if (e <= i) return null;
                    for (var r = i, n = 0; r < e; r++) {
                        var a = t.charCodeAt(r);
                        if (a >>> 11 == 27) {
                            if (1 == n) break;
                            n = 1, r++;
                        } else if (65038 === a || 65039 === a);
                        else if (8205 == a) n = 2;
                        else if (0 == n) n = 1;
                        else if (1 == n) break;
                    }
                    return this._curStrPos = r, t.substring(i, r);
                }, t.filltext = function(t, e, i, r, n, a, s, h, o, l) {
                    if (void 0 === l && (l = 0), !(e.length <= 0)) {
                        var u = f.Parse(n),
                            c = 0;
                        switch (o) {
                            case "center":
                                c = w.ENUM_TEXTALIGN_CENTER;
                                break;

                            case "right":
                                c = w.ENUM_TEXTALIGN_RIGHT;
                        }
                        this._fast_filltext(t, e, null, i, r, u, a, s, h, c, l);
                    }
                }, t.fillWords = function(t, e, i, r, n, a, s, h) {
                    if (e && !(e.length <= 0)) {
                        var o = f.Parse(n);
                        this._fast_filltext(t, null, e, i, r, o, a, s, h, 0, 0);
                    }
                }, t._fast_filltext = function(t, e, i, r, n, a, s, h, o, l, u) {
                    if (void 0 === u && (u = 0), !(e && e.length < 1 || i && i.length < 1)) {
                        if (o < 0 && (o = 0), this.setFont(a), this.fontScaleX = this.fontScaleY = 1, !C.isConchApp && M.scaleFontWithCtx) {
                            var c = 1,
                                _ = 1;
                            if (_ = C.isConchApp ? (c = t._curMat.getScaleX(), t._curMat.getScaleY()) : (c = t.getMatScaleX(),
                                    t.getMatScaleY()), c < 1e-4 || _ < .1) return;
                            1 < c && (this.fontScaleX = c), 1 < _ && (this.fontScaleY = _);
                        }
                        a._italic && (t._italicDeg = 13);
                        var f = e,
                            d = !i && e instanceof laya.utils.WordText,
                            p = e,
                            m = !!i,
                            x = d ? f.pageChars : [],
                            v = 0;
                        switch (d ? (p = f._text, (v = f.width) < 0 && (v = f.width = this.charRender.getWidth(this.fontStr, p))) : v = p ? this.charRender.getWidth(this.fontStr, p) : 0,
                            l) {
                            case w.ENUM_TEXTALIGN_CENTER:
                                r -= v / 2;
                                break;

                            case w.ENUM_TEXTALIGN_RIGHT:
                                r -= v;
                        }
                        f && x && this.hasFreedText(x) && (x = f.pageChars = []);
                        var T = null,
                            g = this.renderPerChar = !d || M.forceSplitRender || m || d && f.splitRender;
                        if (!x || x.length < 1)
                            if (g) {
                                var b, y = 0,
                                    A = 0;
                                for (this._curStrPos = 0;;) {
                                    if (m) {
                                        var E = i[this._curStrPos++];
                                        E ? (b = E.char, y = E.x, A = E.y) : b = null;
                                    } else b = this.getNextChar(p);
                                    if (!b) break;
                                    if (!(T = this.getCharRenderInfo(b, a, s, h, o, !1))) break;
                                    if (T.isSpace);
                                    else {
                                        var R = x[T.tex.id];
                                        R || (x[T.tex.id] = R = []), C.isConchApp ? R.push({
                                            ri: T,
                                            x: y,
                                            y: A,
                                            w: T.bmpWidth / this.fontScaleX,
                                            h: T.bmpHeight / this.fontScaleY
                                        }) : R.push({
                                            ri: T,
                                            x: y + 1 / this.fontScaleX,
                                            y: A,
                                            w: (T.bmpWidth - 2) / this.fontScaleX,
                                            h: (T.bmpHeight - 1) / this.fontScaleY
                                        }), y += T.width;
                                    }
                                }
                            } else {
                                var S = M.noAtlas || v * this.fontScaleX > M.atlasWidth;
                                T = this.getCharRenderInfo(p, a, s, h, o, S), C.isConchApp ? x[0] = [{
                                    ri: T,
                                    x: 0,
                                    y: 0,
                                    w: T.bmpWidth / this.fontScaleX,
                                    h: T.bmpHeight / this.fontScaleY
                                }] : x[0] = [{
                                    ri: T,
                                    x: 1 / this.fontScaleX,
                                    y: 0 / this.fontScaleY,
                                    w: (T.bmpWidth - 2) / this.fontScaleX,
                                    h: (T.bmpHeight - 1) / this.fontScaleY
                                }];
                            }
                        this._drawResortedWords(t, r, n, x), t._italicDeg = 0;
                    }
                }, t._drawResortedWords = function(t, e, i, r) {
                    var n = t._charSubmitCache && t._charSubmitCache._enbale,
                        a = t._curMat;
                    for (var s in r) {
                        var h = r[s],
                            o = h.length;
                        if (!(o <= 0))
                            for (var l = 0; l < o; l++) {
                                var u = h[l],
                                    c = u.ri;
                                c.isSpace || (c.touch(), t.drawTexAlign = !0, C.isConchApp ? t._drawTextureM(c.tex.texture, e + u.x - c.orix, i + u.y - c.oriy, u.w, u.h, null, 1, c.uv) : t._inner_drawTexture(c.tex.texture, c.tex.texture.bitmap.id, e + u.x - c.orix, i + u.y - c.oriy, u.w, u.h, a, c.uv, 1, n),
                                    t.touches && t.touches.push(c));
                            }
                    }
                }, t.hasFreedText = function(t) {
                    for (var e in t)
                        for (var i = t[e], r = 0, n = i.length; r < n; r++) {
                            var a = i[r].ri;
                            if (a.deleted || a.tex.__destroyed) return !0;
                        }
                    return !1;
                }, t.getCharRenderInfo = function(t, e, i, r, n, a) {
                    void 0 === a && (a = !1);
                    var s = this.mapFont[e._family];
                    null == s && (this.mapFont[e._family] = s = this.fontID++);
                    var h = t + "_" + s + "_" + e._size + "_" + i;
                    0 < n && (h += "_" + r + n), e._bold && (h += "P"), 1 == this.fontScaleX && 1 == this.fontScaleY || (h += (20 * this.fontScaleX | 0) + "_" + (20 * this.fontScaleY | 0));
                    var o = 0,
                        l = this.textAtlases.length,
                        u = null,
                        c = null;
                    if (!a)
                        for (o = 0; o < l; o++)
                            if (u = (c = this.textAtlases[o]).charMaps[h]) return u.touch(),
                                u;
                    u = new tt(), this.charRender.scale(this.fontScaleX, this.fontScaleY), u.char = t,
                        u.height = e._size;
                    var _ = e._size / 3 | 0,
                        f = null,
                        d = Math.ceil(this.charRender.getWidth(this.fontStr, t) * this.fontScaleX);
                    if (d > this.charRender.canvasWidth && (this.charRender.canvasWidth = Math.min(2048, d + 2 * _)),
                        a) {
                        f = this.charRender.getCharBmp(t, this.fontStr, n, i, r, u, _, _, _, _, null);
                        var p = Pt.getTextTexture(f.width, f.height);
                        p.addChar(f, 0, 0, u.uv), u.tex = p, u.orix = _, u.oriy = _, p.ri = u, this.isoTextures.push(p);
                    } else {
                        var m = t.length,
                            x = 1 * n,
                            v = Math.ceil((this.fontSizeW + 2 * x) * this.fontScaleX),
                            T = Math.ceil((this.fontSizeH + 2 * x) * this.fontScaleY);
                        M.imgdtRect[0] = (_ - this.fontSizeOffX - x) * this.fontScaleX | 0, M.imgdtRect[1] = (_ - this.fontSizeOffY - x) * this.fontScaleY | 0,
                            this.renderPerChar || 1 == m ? (M.imgdtRect[2] = Math.max(d, v), M.imgdtRect[3] = Math.max(d, T)) : (M.imgdtRect[2] = -1,
                                M.imgdtRect[3] = T), f = this.charRender.getCharBmp(t, this.fontStr, n, i, r, u, _, _, _, _, M.imgdtRect),
                            c = this.addBmpData(f, u), u.oriy = M.isWan1Wan ? u.orix = _ : (u.orix = this.fontSizeOffX + x,
                                this.fontSizeOffY + x), c.charMaps[h] = u;
                    }
                    return u;
                }, t.addBmpData = function(t, e) {
                    for (var i = t.width, r = t.height, n = this.textAtlases.length, a = null, s = !1, h = 0; h < n && !(s = (a = this.textAtlases[h]).getAEmpty(i, r, this.tmpAtlasPos)); h++);
                    if (!s) {
                        if (a = new rt(), this.textAtlases.push(a), !(s = a.getAEmpty(i, r, this.tmpAtlasPos))) throw "err1";
                        this.cleanAtlases();
                    }
                    return s && (a.texture.addChar(t, this.tmpAtlasPos.x, this.tmpAtlasPos.y, e.uv),
                        e.tex = a.texture), a;
                }, t.GC = function(t) {
                    for (var e = 0, i = this.textAtlases.length, r = 0, n = M.destroyAtlasDt, a = 0, s = -1, h = 0, o = null, l = null; e < i; e++) {
                        if (o = (l = this.textAtlases[e]).texture) {
                            o.curUsedCovRate, a += o.curUsedCovRateAtlas;
                            var u = l.usedRate - o.curUsedCovRateAtlas;
                            h < u && (h = u, s = e);
                        }
                        n < (r = g.loopCount - l.texture.lastTouchTm) && (M.showLog && console.log(l.texture.id),
                            l.destroy(), this.textAtlases[e] = this.textAtlases[i - 1], i--, e--);
                    }
                    for (this.textAtlases.length = i, i = this.isoTextures.length, e = 0; e < i; e++) o = this.isoTextures[e],
                        r = g.loopCount - o.lastTouchTm, M.destroyUnusedTextureDt < r && (o.ri.deleted = !0,
                            o.ri.tex = null, o.destroy(), this.isoTextures[e] = this.isoTextures[i - 1], i--,
                            e--);
                    var c = 1 < this.textAtlases.length && 2 <= this.textAtlases.length - a;
                    (M.atlasWidth * M.atlasWidth * 4 * this.textAtlases.length > M.cleanMem || c || M.simClean) && (M.simClean = !1,
                        M.showLog && console.log("清理使用率低的贴图。总使用率:", a, ":", this.textAtlases.length, "最差贴图:" + s),
                        0 <= s && ((l = this.textAtlases[s]).destroy(), this.textAtlases[s] = this.textAtlases[this.textAtlases.length - 1],
                            this.textAtlases.length = this.textAtlases.length - 1)), Pt.clean();
                }, t.cleanAtlases = function() {}, t.getCharBmp = function(t) {}, t.checkBmpLine = function(t, e, i, r) {
                    this.bmpData32.buffer != t.data.buffer && (this.bmpData32 = new Uint32Array(t.data.buffer));
                    for (var n = t.width * e + i, a = i; a < r; a++)
                        if (0 != this.bmpData32[n++]) return !0;
                    return !1;
                }, t.updateBbx = function(t, e, i) {
                    void 0 === i && (i = !1);
                    var r = t.width,
                        n = t.height,
                        a = 0,
                        s = e[1],
                        h = 0,
                        o = s;
                    if (this.checkBmpLine(t, s, 0, r))
                        for (;;) {
                            if (s <= (o = (s + h) / 2 | 0) + 1) {
                                e[1] = o;
                                break;
                            }
                            this.checkBmpLine(t, o, 0, r) ? s = o : h = o;
                        }
                    if (e[3] > n) e[3] = n;
                    else if (o = s = e[3], h = n, this.checkBmpLine(t, s, 0, r))
                        for (;;) {
                            if ((o = (s + h) / 2 | 0) - 1 <= s) {
                                e[3] = o;
                                break;
                            }
                            this.checkBmpLine(t, o, 0, r) ? s = o : h = o;
                        }
                    if (!i) {
                        var l = e[0],
                            u = r * e[1];
                        for (o = e[1]; o < e[3]; o++) {
                            for (a = 0; a < l; a++)
                                if (0 != this.bmpData32[u + a]) {
                                    l = a;
                                    break;
                                }
                            u += r;
                        }
                        e[0] = l;
                        var c = e[2];
                        for (u = r * e[1], o = e[1]; o < e[3]; o++) {
                            for (a = c; a < r; a++)
                                if (0 != this.bmpData32[u + a]) {
                                    c = a;
                                    break;
                                }
                            u += r;
                        }
                        e[2] = c;
                    }
                }, t.getFontSizeInfo = function(t) {
                    var e = this.fontSizeInfo[t];
                    if (null != e) return e;
                    var i = "bold " + M.standardFontSize + "px " + t;
                    if (M.isWan1Wan) {
                        this.fontSizeW = 1.5 * this.charRender.getWidth(i, "有"), this.fontSizeH = 1.5 * M.standardFontSize;
                        var r = this.fontSizeW << 8 | this.fontSizeH;
                        return this.fontSizeInfo[t] = r;
                    }
                    M.pixelBBX[0] = M.standardFontSize / 2, M.pixelBBX[1] = M.standardFontSize / 2,
                        M.pixelBBX[2] = M.standardFontSize, M.pixelBBX[3] = M.standardFontSize;
                    var n = 16,
                        a = 16;
                    this.charRender.scale(1, 1), M.tmpRI.height = M.standardFontSize;
                    var s = this.charRender.getCharBmp("g", i, 0, "red", null, M.tmpRI, n, a, 16, 16);
                    C.isConchApp && (s.data = new Uint8ClampedArray(s.data)), this.bmpData32 = new Uint32Array(s.data.buffer),
                        this.updateBbx(s, M.pixelBBX, !1), s = this.charRender.getCharBmp("有", i, 0, "red", null, M.tmpRI, a, a, 16, 16),
                        C.isConchApp && (s.data = new Uint8ClampedArray(s.data)), this.bmpData32 = new Uint32Array(s.data.buffer),
                        M.pixelBBX[2] < n + M.tmpRI.width && (M.pixelBBX[2] = n + M.tmpRI.width), this.updateBbx(s, M.pixelBBX, !1),
                        C.isConchApp && (a = n = 0);
                    var h = Math.max(n - M.pixelBBX[0], 0) << 24 | Math.max(a - M.pixelBBX[1], 0) << 16 | M.pixelBBX[2] - M.pixelBBX[0] << 8 | M.pixelBBX[3] - M.pixelBBX[1];
                    return this.fontSizeInfo[t] = h;
                }, t.printDbgInfo = function() {
                    for (var t in console.log("图集个数:" + this.textAtlases.length + ",每个图集大小:" + M.atlasWidth + "x" + M.atlasWidth, " 用canvas:", M.isWan1Wan),
                            console.log("图集占用空间:" + M.atlasWidth * M.atlasWidth * 4 / 1024 / 1024 * this.textAtlases.length + "M"),
                            console.log("缓存用到的字体:"), this.mapFont) {
                        var e = this.getFontSizeInfo(t),
                            i = e >> 24,
                            r = e >> 16 & 255,
                            n = e >> 8 & 255,
                            a = 255 & e;
                        console.log("    " + t, " off:", i, r, " size:", n, a);
                    }
                    var s = 0;
                    console.log("缓存数据:");
                    var h = 0,
                        o = 0;
                    this.textAtlases.forEach(function(t) {
                        var e = t.texture.id,
                            i = g.loopCount - t.texture.lastTouchTm,
                            r = 0 < i ? i + "帧以前" : "当前帧";
                        for (var n in h += t.texture.curUsedCovRate, o += t.texture.curUsedCovRateAtlas,
                                console.log("--图集(id:" + e + ",当前使用率:" + (1e3 * t.texture.curUsedCovRate | 0) + "‰", "当前图集使用率:", (100 * t.texture.curUsedCovRateAtlas | 0) + "%", "图集使用率:", 100 * t.usedRate | 0, "%, 使用于:" + r + ")--:"),
                                t.charMaps) {
                            var a = t.charMaps[n];
                            console.log("     off:", a.orix, a.oriy, " bmp宽高:", a.bmpWidth, a.bmpHeight, "无效:", a.deleted, "touchdt:", g.loopCount - a.touchTick, "位置:", a.uv[0] * M.atlasWidth | 0, a.uv[1] * M.atlasWidth | 0, "字符:", a.char, "key:", n),
                                s++;
                        }
                    }), console.log("独立贴图文字(" + this.isoTextures.length + "个):"), this.isoTextures.forEach(function(t) {
                        console.log("    size:", t._texW, t._texH, "touch间隔:", g.loopCount - t.lastTouchTm, "char:", t.ri.char);
                    }), console.log("总缓存:", s, "总使用率:", h, "总当前图集使用率:", o);
                }, t.showAtlas = function(t, i, e, r, n, a) {
                    if (!this.textAtlases[t]) return console.log("没有这个图集"), null;
                    var s = new _(),
                        h = this.textAtlases[t].texture,
                        o = {
                            width: M.atlasWidth,
                            height: M.atlasWidth,
                            sourceWidth: M.atlasWidth,
                            sourceHeight: M.atlasWidth,
                            offsetX: 0,
                            offsetY: 0,
                            getIsReady: function() {
                                return !0;
                            },
                            _addReference: function() {},
                            _removeReference: function() {},
                            _getSource: function() {
                                return h._getSource();
                            },
                            bitmap: {
                                id: h.id
                            },
                            _uv: A.DEF_UV
                        };
                    return s.size = function(t, e) {
                            return this.width = t, this.height = e, s.graphics.clear(), s.graphics.drawRect(0, 0, s.width, s.height, i),
                                s.graphics.drawTexture(o, 0, 0, s.width, s.height), this;
                        }, s.graphics.drawRect(0, 0, n, a, i), s.graphics.drawTexture(o, 0, 0, n, a), s.pos(e, r),
                        T.stage.addChild(s), s;
                }, t.filltext_native = function(t, e, i, r, n, a, s, h, o, l, u) {
                    if (void 0 === u && (u = 0), !(e && e.length <= 0 || i && i.length < 1)) {
                        var c = f.Parse(a),
                            _ = 0;
                        switch (l) {
                            case "center":
                                _ = w.ENUM_TEXTALIGN_CENTER;
                                break;

                            case "right":
                                _ = w.ENUM_TEXTALIGN_RIGHT;
                        }
                        return this._fast_filltext(t, e, i, r, n, c, s, h, o, _, u);
                    }
                }, M.useOldCharBook = !1, M.atlasWidth = 2048, M.noAtlas = !1, M.forceSplitRender = !1,
                M.forceWholeRender = !1, M.scaleFontWithCtx = !0, M.standardFontSize = 32, M.destroyAtlasDt = 10,
                M.checkCleanTextureDt = 2e3, M.destroyUnusedTextureDt = 3e3, M.cleanMem = 104857600,
                M.isWan1Wan = !1, M.showLog = !1, M.debugUV = !1, M.atlasWidth2 = 4194304, M.textRenderInst = null,
                M.simClean = !1, s(M, ["tmpRI", function() {
                    return this.tmpRI = new tt();
                }, "pixelBBX", function() {
                    return this.pixelBBX = [0, 0, 0, 0];
                }, "imgdtRect", function() {
                    return this.imgdtRect = [0, 0, 0, 0];
                }]), M;
        }(),
        st = function() {
            function t() {}
            return l(t, "laya.layagl.LayaGLRunner"), t.uploadShaderUniforms = function(t, e, i, r) {
                for (var n = i._data, a = e.getArrayData(), s = 0, h = 0, o = a.length; h < o; h++) {
                    var l = a[h];
                    if (r || -1 !== l.textureID) {
                        var u = n[l.dataOffset];
                        null != u && (s += l.fun.call(l.caller, l, u));
                    }
                }
                return s;
            }, t.uploadCustomUniform = function(t, e, i, r) {
                var n = 0,
                    a = e[i];
                return a && null != r && (n += a.fun.call(a.caller, a, r)), n;
            }, t.uploadShaderUniformsForNative = function(t, e, i) {
                var r = 0;
                0 < i._runtimeCopyValues.length && (r = 1);
                var n = i._data;
                return t.uploadShaderUniforms(e, n, r);
            }, t;
        }(),
        ht = function() {
            function t(t, e, i) {
                this.atlasID = 0, this._width = 0, this._height = 0, this._texCount = 0, this._rowInfo = null,
                    this._cells = null, void(this._used = 0) === t && (t = 0), void 0 === e && (e = 0),
                    void 0 === i && (i = 0), this._cells = null, this._rowInfo = null, this.atlasID = i,
                    this._init(t, e);
            }
            l(t, "laya.webgl.text.AtlasGrid");
            var e = t.prototype;
            return e.addRect = function(t, e, i, r) {
                return !!this._get(e, i, r) && (this._fill(r.x, r.y, e, i, t), this._texCount++, !0);
            }, e._release = function() {
                this._cells = null, this._rowInfo = null;
            }, e._init = function(t, e) {
                return this._width = t, this._height = e, this._release(), 0 != this._width && (this._cells = new Uint8Array(this._width * this._height * 3),
                    this._rowInfo = new Uint8Array(this._height), this._used = 0, this._clear(), !0);
            }, e._get = function(t, e, i) {
                if (t > this._width || e > this._height) return !1;
                for (var r = -1, n = -1, a = this._width, s = this._height, h = this._cells, o = 0; o < s; o++)
                    if (!(this._rowInfo[o] < t))
                        for (var l = 0; l < a;) {
                            var u = 3 * (o * a + l);
                            if (0 != h[u] || h[u + 1] < t || h[u + 2] < e) l += h[u + 1];
                            else {
                                r = l, n = o;
                                for (var c = 0; c < t; c++)
                                    if (h[3 * c + u + 2] < e) {
                                        r = -1;
                                        break;
                                    }
                                if (!(r < 0)) return i.x = r, i.y = n, !0;
                                l += h[u + 1];
                            }
                        }
                return !1;
            }, e._fill = function(t, e, i, r, n) {
                var a = this._width,
                    s = this._height;
                this._check(t + i <= a && e + r <= s);
                for (var h = e; h < r + e; ++h) {
                    this._check(this._rowInfo[h] >= i), this._rowInfo[h] -= i;
                    for (var o = 0; o < i; o++) {
                        var l = 3 * (t + h * a + o);
                        this._check(0 == this._cells[l]), this._cells[l] = n, this._cells[l + 1] = i, this._cells[l + 2] = r;
                    }
                }
                if (0 < t)
                    for (h = 0; h < r; ++h) {
                        var u = 0;
                        for (o = t - 1; 0 <= o && 0 == this._cells[3 * ((e + h) * a + o)]; --o, ++u);
                        for (o = u; 0 < o; --o) this._cells[3 * ((e + h) * a + t - o) + 1] = o, this._check(0 < o);
                    }
                if (0 < e)
                    for (o = t; o < t + i; ++o) {
                        for (u = 0, h = e - 1; 0 <= h && 0 == this._cells[3 * (o + h * a)]; --h, u++);
                        for (h = u; 0 < h; --h) this._cells[3 * (o + (e - h) * a) + 2] = h, this._check(0 < h);
                    }
                this._used += i * r / (this._width * this._height);
            }, e._check = function(t) {
                0 == t && console.log("xtexMerger 错误啦");
            }, e._clear = function() {
                for (var t = this._texCount = 0; t < this._height; t++) this._rowInfo[t] = this._width;
                for (var e = 0; e < this._height; e++)
                    for (var i = 0; i < this._width; i++) {
                        var r = 3 * (e * this._width + i);
                        this._cells[r] = 0, this._cells[r + 1] = this._width - i, this._cells[r + 2] = this._width - e;
                    }
            }, t;
        }(),
        ot = (function() {
            function t() {}
            l(t, "laya.webgl.shader.ShaderValue");
        }(), function() {
            function t(t) {
                this._par = null, this._loaded = !0, this.bitmap = {}, this.bitmap.id = t.id, this._par = t;
            }
            l(t, "laya.webgl.resource.CharInternalTexture"), t.prototype._getSource = function() {
                return this._par._source;
            };
        }(), function() {
            function t() {
                this.blendShader = 0, this.submitType = 0, this.other = 0, this.clear();
            }
            l(t, "laya.webgl.submit.SubmitKey");
            var e = t.prototype;
            return e.clear = function() {
                this.submitType = -1, this.blendShader = this.other = 0;
            }, e.copyFrom = function(t) {
                this.other = t.other, this.blendShader = t.blendShader, this.submitType = t.submitType;
            }, e.copyFrom2 = function(t, e, i) {
                this.other = i, this.submitType = e;
            }, e.equal3_2 = function(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }, e.equal4_2 = function(t, e, i) {
                return this.submitType === e && this.other === i && this.blendShader === t.blendShader;
            }, e.equal_3 = function(t) {
                return this.submitType === t.submitType && this.blendShader === t.blendShader;
            }, e.equal = function(t) {
                return this.other === t.other && this.submitType === t.submitType && this.blendShader === t.blendShader;
            }, t;
        }()),
        lt = function() {
            function r() {
                this._saveuse = 0;
            }
            l(r, "laya.webgl.canvas.save.SaveMark");
            var t = r.prototype;
            return T.imps(t, {
                "laya.webgl.canvas.save.ISaveData": !0
            }), t.isSaveMark = function() {
                return !0;
            }, t.restore = function(t) {
                t._saveMark = this._preSaveMark, r.POOL[r.POOL._length++] = this;
            }, r.Create = function(t) {
                var e = r.POOL,
                    i = 0 < e._length ? e[--e._length] : new r();
                return i._saveuse = 0, i._preSaveMark = t._saveMark, t._saveMark = i;
            }, r.POOL = I._createArray(), r;
        }(),
        ut = function() {
            function t() {}
            l(t, "laya.layagl.LayaGL");
            var e = t.prototype;
            return e.createCommandEncoder = function(t, e, i) {
                    return void 0 === t && (t = 128), void 0 === e && (e = 64), void 0 === i && (i = !1),
                        new U(this, t, e, i);
                }, e.beginCommandEncoding = function(t) {}, e.endCommandEncoding = function() {},
                e.matrix4x4Multiply = function(t, e, i) {}, e.evaluateClipDatasRealTime = function(t, e, i, r) {},
                t.getFrameCount = function() {
                    return 0;
                }, t.syncBufferToRenderThread = function(t, e) {
                    void 0 === e && (e = 0);
                }, t.createArrayBufferRef = function(t, e, i) {}, t.createArrayBufferRefs = function(t, e, i, r) {},
                t.EXECUTE_JS_THREAD_BUFFER = 0, t.EXECUTE_RENDER_THREAD_BUFFER = 1, t.EXECUTE_COPY_TO_RENDER = 2,
                t.EXECUTE_COPY_TO_RENDER3D = 3, t.ARRAY_BUFFER_TYPE_DATA = 0, t.ARRAY_BUFFER_TYPE_CMD = 1,
                t.ARRAY_BUFFER_REF_REFERENCE = 0, t.ARRAY_BUFFER_REF_COPY = 1, t.UPLOAD_SHADER_UNIFORM_TYPE_ID = 0,
                t.UPLOAD_SHADER_UNIFORM_TYPE_DATA = 1, t.instance = null, t;
        }(),
        ct = function() {
            function p() {}
            return l(p, "laya.webgl.shapes.Earcut"), p.earcut = function(t, e, i) {
                i = i || 2;
                var r, n, a, s, h, o, l, u = e && e.length,
                    c = u ? e[0] * i : t.length,
                    _ = p.linkedList(t, 0, c, i, !0),
                    f = [];
                if (!_) return f;
                if (u && (_ = p.eliminateHoles(t, e, _, i)), t.length > 80 * i) {
                    r = a = t[0], n = s = t[1];
                    for (var d = i; d < c; d += i)(h = t[d]) < r && (r = h), (o = t[d + 1]) < n && (n = o),
                        a < h && (a = h), s < o && (s = o);
                    l = 0 !== (l = Math.max(a - r, s - n)) ? 1 / l : 0;
                }
                return p.earcutLinked(_, f, i, r, n, l), f;
            }, p.linkedList = function(t, e, i, r, n) {
                var a, s;
                if (n === 0 < p.signedArea(t, e, i, r))
                    for (a = e; a < i; a += r) s = p.insertNode(a, t[a], t[a + 1], s);
                else
                    for (a = i - r; e <= a; a -= r) s = p.insertNode(a, t[a], t[a + 1], s);
                return s && p.equals(s, s.next) && (p.removeNode(s), s = s.next), s;
            }, p.filterPoints = function(t, e) {
                if (!t) return t;
                e || (e = t);
                var i, r = t;
                do {
                    if (i = !1, r.steiner || !p.equals(r, r.next) && 0 !== p.area(r.prev, r, r.next)) r = r.next;
                    else {
                        if (p.removeNode(r), (r = e = r.prev) === r.next) break;
                        i = !0;
                    }
                } while (i || r !== e);
                return e;
            }, p.earcutLinked = function(t, e, i, r, n, a, s) {
                if (t) {
                    !s && a && p.indexCurve(t, r, n, a);
                    for (var h, o, l = t; t.prev !== t.next;)
                        if (h = t.prev, o = t.next, a ? p.isEarHashed(t, r, n, a) : p.isEar(t)) e.push(h.i / i),
                            e.push(t.i / i), e.push(o.i / i), p.removeNode(t), t = o.next, l = o.next;
                        else if ((t = o) === l) {
                        s ? 1 === s ? (t = p.cureLocalIntersections(t, e, i), p.earcutLinked(t, e, i, r, n, a, 2)) : 2 === s && p.splitEarcut(t, e, i, r, n, a) : p.earcutLinked(p.filterPoints(t, null), e, i, r, n, a, 1);
                        break;
                    }
                }
            }, p.isEar = function(t) {
                var e = t.prev,
                    i = t,
                    r = t.next;
                if (0 <= p.area(e, i, r)) return !1;
                for (var n = t.next.next; n !== t.prev;) {
                    if (p.pointInTriangle(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && 0 <= p.area(n.prev, n, n.next)) return !1;
                    n = n.next;
                }
                return !0;
            }, p.isEarHashed = function(t, e, i, r) {
                var n = t.prev,
                    a = t,
                    s = t.next;
                if (0 <= p.area(n, a, s)) return !1;
                for (var h = n.x < a.x ? n.x < s.x ? n.x : s.x : a.x < s.x ? a.x : s.x, o = n.y < a.y ? n.y < s.y ? n.y : s.y : a.y < s.y ? a.y : s.y, l = n.x > a.x ? n.x > s.x ? n.x : s.x : a.x > s.x ? a.x : s.x, u = n.y > a.y ? n.y > s.y ? n.y : s.y : a.y > s.y ? a.y : s.y, c = p.zOrder(h, o, e, i, r), _ = p.zOrder(l, u, e, i, r), f = t.nextZ; f && f.z <= _;) {
                    if (f !== t.prev && f !== t.next && p.pointInTriangle(n.x, n.y, a.x, a.y, s.x, s.y, f.x, f.y) && 0 <= p.area(f.prev, f, f.next)) return !1;
                    f = f.nextZ;
                }
                for (f = t.prevZ; f && f.z >= c;) {
                    if (f !== t.prev && f !== t.next && p.pointInTriangle(n.x, n.y, a.x, a.y, s.x, s.y, f.x, f.y) && 0 <= p.area(f.prev, f, f.next)) return !1;
                    f = f.prevZ;
                }
                return !0;
            }, p.cureLocalIntersections = function(t, e, i) {
                var r = t;
                do {
                    var n = r.prev,
                        a = r.next.next;
                    !p.equals(n, a) && p.intersects(n, r, r.next, a) && p.locallyInside(n, a) && p.locallyInside(a, n) && (e.push(n.i / i),
                            e.push(r.i / i), e.push(a.i / i), p.removeNode(r), p.removeNode(r.next), r = t = a),
                        r = r.next;
                } while (r !== t);
                return r;
            }, p.splitEarcut = function(t, e, i, r, n, a) {
                var s = t;
                do {
                    for (var h = s.next.next; h !== s.prev;) {
                        if (s.i !== h.i && p.isValidDiagonal(s, h)) {
                            var o = p.splitPolygon(s, h);
                            return s = p.filterPoints(s, s.next), o = p.filterPoints(o, o.next), p.earcutLinked(s, e, i, r, n, a),
                                void p.earcutLinked(o, e, i, r, n, a);
                        }
                        h = h.next;
                    }
                    s = s.next;
                } while (s !== t);
            }, p.eliminateHoles = function(t, e, i, r) {
                var n, a, s, h, o, l = [];
                for (n = 0, a = e.length; n < a; n++) s = e[n] * r, h = n < a - 1 ? e[n + 1] * r : t.length,
                    (o = p.linkedList(t, s, h, r, !1)) === o.next && (o.steiner = !0), l.push(p.getLeftmost(o));
                for (l.sort(p.compareX), n = 0; n < l.length; n++) p.eliminateHole(l[n], i), i = p.filterPoints(i, i.next);
                return i;
            }, p.compareX = function(t, e) {
                return t.x - e.x;
            }, p.eliminateHole = function(t, e) {
                if (e = p.findHoleBridge(t, e)) {
                    var i = p.splitPolygon(e, t);
                    p.filterPoints(i, i.next);
                }
            }, p.findHoleBridge = function(t, e) {
                var i, r = e,
                    n = t.x,
                    a = t.y,
                    s = -1 / 0;
                do {
                    if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
                        var h = r.x + (a - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                        if (h <= n && s < h) {
                            if ((s = h) === n) {
                                if (a === r.y) return r;
                                if (a === r.next.y) return r.next;
                            }
                            i = r.x < r.next.x ? r : r.next;
                        }
                    }
                    r = r.next;
                } while (r !== e);
                if (!i) return null;
                if (n === s) return i.prev;
                var o, l = i,
                    u = i.x,
                    c = i.y,
                    _ = 1 / 0;
                for (r = i.next; r !== l;) n >= r.x && r.x >= u && n !== r.x && p.pointInTriangle(a < c ? n : s, a, u, c, a < c ? s : n, a, r.x, r.y) && ((o = Math.abs(a - r.y) / (n - r.x)) < _ || o === _ && r.x > i.x) && p.locallyInside(r, t) && (i = r,
                    _ = o), r = r.next;
                return i;
            }, p.indexCurve = function(t, e, i, r) {
                for (var n = t; null === n.z && (n.z = p.zOrder(n.x, n.y, e, i, r)), n.prevZ = n.prev,
                    n.nextZ = n.next, (n = n.next) !== t;);
                n.prevZ.nextZ = null, n.prevZ = null, p.sortLinked(n);
            }, p.sortLinked = function(t) {
                var e, i, r, n, a, s, h, o, l = 1;
                do {
                    for (i = t, a = t = null, s = 0; i;) {
                        for (s++, r = i, e = h = 0; e < l && (h++, r = r.nextZ); e++);
                        for (o = l; 0 < h || 0 < o && r;) 0 !== h && (0 === o || !r || i.z <= r.z) ? (i = (n = i).nextZ,
                            h--) : (r = (n = r).nextZ, o--), a ? a.nextZ = n : t = n, n.prevZ = a, a = n;
                        i = r;
                    }
                    a.nextZ = null, l *= 2;
                } while (1 < s);
                return t;
            }, p.zOrder = function(t, e, i, r, n) {
                return (t = 1431655765 & ((t = 858993459 & ((t = 252645135 & ((t = 16711935 & ((t = 32767 * (t - i) * n) | t << 8)) | t << 4)) | t << 2)) | t << 1)) | (e = 1431655765 & ((e = 858993459 & ((e = 252645135 & ((e = 16711935 & ((e = 32767 * (e - r) * n) | e << 8)) | e << 4)) | e << 2)) | e << 1)) << 1;
            }, p.getLeftmost = function(t) {
                for (var e = t, i = t; e.x < i.x && (i = e), (e = e.next) !== t;);
                return i;
            }, p.pointInTriangle = function(t, e, i, r, n, a, s, h) {
                return 0 <= (n - s) * (e - h) - (t - s) * (a - h) && 0 <= (t - s) * (r - h) - (i - s) * (e - h) && 0 <= (i - s) * (a - h) - (n - s) * (r - h);
            }, p.isValidDiagonal = function(t, e) {
                return t.next.i !== e.i && t.prev.i !== e.i && !p.intersectsPolygon(t, e) && p.locallyInside(t, e) && p.locallyInside(e, t) && p.middleInside(t, e);
            }, p.area = function(t, e, i) {
                return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y);
            }, p.equals = function(t, e) {
                return t.x === e.x && t.y === e.y;
            }, p.intersects = function(t, e, i, r) {
                return !!(p.equals(t, e) && p.equals(i, r) || p.equals(t, r) && p.equals(i, e)) || 0 < p.area(t, e, i) != 0 < p.area(t, e, r) && 0 < p.area(i, r, t) != 0 < p.area(i, r, e);
            }, p.intersectsPolygon = function(t, e) {
                var i = t;
                do {
                    if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && p.intersects(i, i.next, t, e)) return !0;
                    i = i.next;
                } while (i !== t);
                return !1;
            }, p.locallyInside = function(t, e) {
                return p.area(t.prev, t, t.next) < 0 ? 0 <= p.area(t, e, t.next) && 0 <= p.area(t, t.prev, e) : p.area(t, e, t.prev) < 0 || p.area(t, t.next, e) < 0;
            }, p.middleInside = function(t, e) {
                for (var i = t, r = !1, n = (t.x + e.x) / 2, a = (t.y + e.y) / 2; i.y > a != i.next.y > a && i.next.y !== i.y && n < (i.next.x - i.x) * (a - i.y) / (i.next.y - i.y) + i.x && (r = !r),
                    (i = i.next) !== t;);
                return r;
            }, p.splitPolygon = function(t, e) {
                var i = new J(t.i, t.x, t.y),
                    r = new J(e.i, e.x, e.y),
                    n = t.next,
                    a = e.prev;
                return (t.next = e).prev = t, (i.next = n).prev = i, (r.next = i).prev = r, (a.next = r).prev = a,
                    r;
            }, p.insertNode = function(t, e, i, r) {
                var n = new J(t, e, i);
                return r ? (n.next = r.next, (n.prev = r).next.prev = n, r.next = n) : (n.prev = n).next = n,
                    n;
            }, p.removeNode = function(t) {
                t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ),
                    t.nextZ && (t.nextZ.prevZ = t.prevZ);
            }, p.signedArea = function(t, e, i, r) {
                for (var n = 0, a = e, s = i - r; a < i; a += r) n += (t[s] - t[a]) * (t[a + 1] + t[s + 1]),
                    s = a;
                return n;
            }, p;
        }(),
        _t = function() {
            var r;

            function t() {
                this._lastOriX = 0, this._lastOriY = 0, this.paths = [], this._curPath = null;
            }
            l(t, "laya.webgl.canvas.Path");
            var e = t.prototype;
            return e.beginPath = function(t) {
                this.paths.length = 1, this._curPath = this.paths[0] = new r(), this._curPath.convex = t;
            }, e.closePath = function() {
                this._curPath.loop = !0;
            }, e.newPath = function() {
                this._curPath = new r(), this.paths.push(this._curPath);
            }, e.addPoint = function(t, e) {
                this._curPath.path.push(t, e);
            }, e.push = function(t, e) {
                this._curPath ? 0 < this._curPath.path.length && (this._curPath = new r(), this.paths.push(this._curPath)) : (this._curPath = new r(),
                    this.paths.push(this._curPath));
                var i = this._curPath;
                i.path = t.slice(), i.convex = e;
            }, e.reset = function() {
                this.paths.length = 0;
            }, t.__init$ = function() {
                r = function() {
                    function t() {
                        this.path = [], this.loop = !1, this.convex = !1;
                    }
                    return l(t, ""), t;
                }();
            }, t;
        }(),
        ft = function() {
            function n() {
                this.fun = null, this._this = null, this.args = null, this._ref = 1, this._key = new ot();
            }
            l(n, "laya.webgl.submit.SubmitCMD");
            var t = n.prototype;
            return T.imps(t, {
                "laya.webgl.submit.ISubmit": !0
            }), t.renderSubmit = function() {
                return this.fun.apply(this._this, this.args), 1;
            }, t.getRenderType = function() {
                return 0;
            }, t.reUse = function(t, e) {
                return this._ref++, e;
            }, t.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = n.POOL;
                    t[t._length++] = this;
                }
            }, t.clone = function(t, e, i) {
                return null;
            }, n.create = function(t, e, i) {
                var r = n.POOL._length ? n.POOL[--n.POOL._length] : new n();
                return r.fun = e, r.args = t, r._this = i, r._ref = 1, r._key.clear(), r;
            }, n.POOL = ((n.POOL = [])._length = 0, n.POOL), n;
        }(),
        dt = (function() {
            function o() {}
            l(o, "laya.webgl.utils.MatirxArray"), o.ArrayMul = function(t, e, i) {
                if (t)
                    if (e)
                        for (var r = NaN, n = NaN, a = NaN, s = NaN, h = 0; h < 4; h++) r = t[h],
                            n = t[h + 4], a = t[h + 8], s = t[h + 12], i[h] = r * e[0] + n * e[1] + a * e[2] + s * e[3],
                            i[h + 4] = r * e[4] + n * e[5] + a * e[6] + s * e[7], i[h + 8] = r * e[8] + n * e[9] + a * e[10] + s * e[11],
                            i[h + 12] = r * e[12] + n * e[13] + a * e[14] + s * e[15];
                    else o.copyArray(t, i);
                else o.copyArray(e, i);
            }, o.copyArray = function(t, e) {
                if (t && e)
                    for (var i = 0; i < t.length; i++) e[i] = t[i];
            };
        }(), function() {
            function t() {}
            return l(t, "laya.webgl.VertexArrayObject"), t;
        }()(function() {
            var n = {};

            function c(t, e) {
                var i;
                n[t] = !0, void 0 !== e && (i = e, d.console && d.console.error && d.console.error(i));
            }
            var i = function t(e) {
                var i = e.gl;
                this.ext = e, this.isAlive = !0, this.hasBeenBound = !1, this.elementArrayBuffer = null,
                    this.attribs = new Array(e.maxVertexAttribs);
                for (var r = 0; r < this.attribs.length; r++) {
                    var n = new t.VertexAttrib(i);
                    this.attribs[r] = n;
                }
                this.maxAttrib = 0;
            };
            (i.VertexAttrib = function(t) {
                this.enabled = !1, this.buffer = null, this.size = 4, this.type = t.FLOAT, this.normalized = !1,
                    this.stride = 16, this.offset = 0, this.cached = "", this.recache();
            }).prototype.recache = function() {
                this.cached = [this.size, this.type, this.normalized, this.stride, this.offset].join(":");
            };
            var r = function(r) {
                var e, i, o = this;
                this.gl = r, i = (e = r).getError, e.getError = function() {
                    for (;
                        (t = i.apply(e)) != e.NO_ERROR && (n[t] = !0), t != e.NO_ERROR;);
                    for (var t in n)
                        if (n[t]) return delete n[t], parseInt(t);
                    return e.NO_ERROR;
                };
                var l = this.original = {
                    getParameter: r.getParameter,
                    enableVertexAttribArray: r.enableVertexAttribArray,
                    disableVertexAttribArray: r.disableVertexAttribArray,
                    bindBuffer: r.bindBuffer,
                    getVertexAttrib: r.getVertexAttrib,
                    vertexAttribPointer: r.vertexAttribPointer
                };
                r.getParameter = function(t) {
                        return t == o.VERTEX_ARRAY_BINDING_OES ? o.currentVertexArrayObject == o.defaultVertexArrayObject ? null : o.currentVertexArrayObject : l.getParameter.apply(this, arguments);
                    }, r.enableVertexAttribArray = function(t) {
                        var e = o.currentVertexArrayObject;
                        return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !0, l.enableVertexAttribArray.apply(this, arguments);
                    }, r.disableVertexAttribArray = function(t) {
                        var e = o.currentVertexArrayObject;
                        return e.maxAttrib = Math.max(e.maxAttrib, t), e.attribs[t].enabled = !1, l.disableVertexAttribArray.apply(this, arguments);
                    }, r.bindBuffer = function(t, e) {
                        switch (t) {
                            case r.ARRAY_BUFFER:
                                o.currentArrayBuffer = e;
                                break;

                            case r.ELEMENT_ARRAY_BUFFER:
                                o.currentVertexArrayObject.elementArrayBuffer = e;
                        }
                        return l.bindBuffer.apply(this, arguments);
                    }, r.getVertexAttrib = function(t, e) {
                        var i = o.currentVertexArrayObject.attribs[t];
                        switch (e) {
                            case r.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:
                                return i.buffer;

                            case r.VERTEX_ATTRIB_ARRAY_ENABLED:
                                return i.enabled;

                            case r.VERTEX_ATTRIB_ARRAY_SIZE:
                                return i.size;

                            case r.VERTEX_ATTRIB_ARRAY_STRIDE:
                                return i.stride;

                            case r.VERTEX_ATTRIB_ARRAY_TYPE:
                                return i.type;

                            case r.VERTEX_ATTRIB_ARRAY_NORMALIZED:
                                return i.normalized;

                            default:
                                return l.getVertexAttrib.apply(this, arguments);
                        }
                    }, r.vertexAttribPointer = function(t, e, i, r, n, a) {
                        var s = o.currentVertexArrayObject;
                        s.maxAttrib = Math.max(s.maxAttrib, t);
                        var h = s.attribs[t];
                        return h.buffer = o.currentArrayBuffer, h.size = e, h.type = i, h.normalized = r,
                            h.stride = n, h.offset = a, h.recache(), l.vertexAttribPointer.apply(this, arguments);
                    }, r.instrumentExtension && r.instrumentExtension(this, "OES_vertex_array_object"),
                    r.canvas && r.canvas.addEventListener && r.canvas.addEventListener("webglcontextrestored", function() {
                        var t;
                        t = "OESVertexArrayObject emulation library context restored", d.console && d.console.log && d.console.log(t),
                            o.reset_();
                    }, !0), this.reset_();
            };
            r.prototype.VERTEX_ARRAY_BINDING_OES = 34229, r.prototype.reset_ = function() {
                if (void 0 !== this.vertexArrayObjects)
                    for (var t = 0; t < this.vertexArrayObjects.length; ++t) this.vertexArrayObjects.isAlive = !1;
                var e = this.gl;
                this.maxVertexAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.defaultVertexArrayObject = new i(this),
                    this.currentVertexArrayObject = null, this.currentArrayBuffer = null, this.vertexArrayObjects = [this.defaultVertexArrayObject],
                    this.bindVertexArrayOES(null);
            }, r.prototype.createVertexArrayOES = function() {
                var t = new i(this);
                return this.vertexArrayObjects.push(t), t;
            }, r.prototype.deleteVertexArrayOES = function(t) {
                t.isAlive = !1, this.vertexArrayObjects.splice(this.vertexArrayObjects.indexOf(t), 1),
                    this.currentVertexArrayObject == t && this.bindVertexArrayOES(null);
            }, r.prototype.isVertexArrayOES = function(t) {
                return !!(t && t instanceof i && t.hasBeenBound && t.ext == this);
            }, r.prototype.bindVertexArrayOES = function(t) {
                var e = this.gl;
                if (!t || t.isAlive) {
                    var i = this.original,
                        r = this.currentVertexArrayObject;
                    this.currentVertexArrayObject = t || this.defaultVertexArrayObject, this.currentVertexArrayObject.hasBeenBound = !0;
                    var n = this.currentVertexArrayObject;
                    if (r != n) {
                        r && n.elementArrayBuffer == r.elementArrayBuffer || i.bindBuffer.call(e, e.ELEMENT_ARRAY_BUFFER, n.elementArrayBuffer);
                        for (var a = this.currentArrayBuffer, s = Math.max(r ? r.maxAttrib : 0, n.maxAttrib), h = 0; h <= s; h++) {
                            var o = n.attribs[h],
                                l = r ? r.attribs[h] : null;
                            if (r && o.enabled == l.enabled || (o.enabled ? i.enableVertexAttribArray.call(e, h) : i.disableVertexAttribArray.call(e, h)),
                                o.enabled) {
                                var u = !1;
                                r && o.buffer == l.buffer || (a != o.buffer && (i.bindBuffer.call(e, e.ARRAY_BUFFER, o.buffer),
                                    a = o.buffer), u = !0), (u || o.cached != l.cached) && i.vertexAttribPointer.call(e, h, o.size, o.type, o.normalized, o.stride, o.offset);
                            }
                        }
                        this.currentArrayBuffer != a && i.bindBuffer.call(e, e.ARRAY_BUFFER, this.currentArrayBuffer);
                    }
                } else c(e.INVALID_OPERATION, "bindVertexArrayOES: attempt to bind deleted arrayObject");
            }, d._setupVertexArrayObject = function(t) {
                var e = t.getSupportedExtensions;
                t.getSupportedExtensions = function() {
                    var t = e.call(this) || [];
                    return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"),
                        t;
                };
                var i = t.getExtension;
                t.getExtension = function(t) {
                    var e = i.call(this, t);
                    return e || ("OES_vertex_array_object" !== t ? null : (this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"),
                        this.__OESVertexArrayObject = new r(this)), this.__OESVertexArrayObject));
                };
            }, d._forceSetupVertexArrayObject = function(t) {
                var e = t.getSupportedExtensions;
                t.getSupportedExtensions = function() {
                    var t = e.call(this) || [];
                    return t.indexOf("OES_vertex_array_object") < 0 && t.push("OES_vertex_array_object"),
                        t;
                };
                var i = t.getExtension;
                t.getExtension = function(t) {
                    if ("OES_vertex_array_object" === t) return this.__OESVertexArrayObject || (console.log("Setup OES_vertex_array_object polyfill"),
                        this.__OESVertexArrayObject = new r(this)), this.__OESVertexArrayObject;
                    var e = i.call(this, t);
                    return e || null;
                };
            };
        }()), function() {
            function t() {}
            return l(t, "laya.webgl.utils.CONST3D2D"), t.BYTES_PE = 4, t.BYTES_PIDX = 2, t.defaultMatrix4 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                t.defaultMinusYMatrix4 = [1, 0, 0, 0, 0, -1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], t.uniformMatrix3 = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
                t._TMPARRAY = [], t._OFFSETX = 0, t._OFFSETY = 0, t;
        }()),
        pt = function(t) {
            function i(t, e) {
                i.__super.call(this, t, e);
            }
            l(i, "laya.webgl.utils.RenderSprite3D", x);
            var e = i.prototype;
            return e.onCreate = function(t) {
                switch (t) {
                    case 4:
                        return void(this._fun = this._blend);
                }
            }, e._mask = function(t, e, i, r) {
                var n = this._next,
                    a = t.mask,
                    s = e;
                if (a) {
                    s.save();
                    var h = s.globalCompositeOperation,
                        o = new M();
                    if (o.copyFrom(a.getBounds()), o.width = Math.round(o.width), o.height = Math.round(o.height),
                        o.x = Math.round(o.x), o.y = Math.round(o.y), 0 < o.width && 0 < o.height) {
                        var l = o.width,
                            u = o.height,
                            c = D.getRT(l, u);
                        s.breakNextMerge(), s.pushRT(), s.addRenderObject(ft.create([s, c, l, u], laya.webgl.utils.RenderSprite3D.tmpTarget, this)),
                            a.render(s, -o.x, -o.y), s.breakNextMerge(), s.popRT(), s.save(), s.clipRect(i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, l, u),
                            n._fun.call(n, t, s, i, r), s.restore(), h = s.globalCompositeOperation, s.addRenderObject(ft.create(["mask"], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                        var _ = P.create(1, 0),
                            f = A.INV_UV;
                        s.drawTarget(c, i + o.x - t.getStyle().pivotX, r + o.y - t.getStyle().pivotY, l, u, R.TEMP.identity(), _, f, 6),
                            s.addRenderObject(ft.create([c], laya.webgl.utils.RenderSprite3D.recycleTarget, this)),
                            s.addRenderObject(ft.create([h], laya.webgl.utils.RenderSprite3D.setBlendMode, this));
                    }
                    s.restore();
                } else n._fun.call(n, t, e, i, r);
            }, e._blend = function(t, e, i, r) {
                var n = t._style,
                    a = this._next;
                n.blendMode ? (e.save(), e.globalCompositeOperation = n.blendMode, a._fun.call(a, t, e, i, r),
                    e.restore()) : a._fun.call(a, t, e, i, r);
            }, i.tmpTarget = function(t, e, i, r) {
                e.start(), e.clear(0, 0, 0, 0);
            }, i.recycleTarget = function(t) {
                D.releaseRT(t);
            }, i.setBlendMode = function(t) {
                var e = $.mainContext;
                q.targetFns[q.TOINT[t]](e);
            }, s(i, ["tempUV", function() {
                return this.tempUV = new Array(8);
            }]), i;
        }(),
        mt = function(t) {
            var i;

            function X() {
                if (this._drawTriUseAbsMatrix = !1, this._id = ++X._COUNT, this._other = null, this._renderNextSubmitIndex = 0,
                    this._path = null, this._drawCount = 1, this._renderCount = 0, this._isConvexCmd = !0,
                    this._submits = null, this._curSubmit = null, this._mesh = null, this._pathMesh = null,
                    this._triangleMesh = null, this.meshlist = [], this._clipInCache = !1, this._clipInfoID = 0,
                    this._curMat = null, this._lastMatScaleX = 1, this._lastMatScaleY = 1, this._lastMat_a = 1,
                    this._lastMat_b = 0, this._lastMat_c = 0, this._lastMat_d = 1, this._nBlendType = 0,
                    this._save = null, this._targets = null, this._charSubmitCache = null, this._saveMark = null,
                    this.sprite = null, this._drawTextureUseColor = !1, this._italicDeg = 0, this._lastTex = null,
                    this._fillColor = 0, this._flushCnt = 0, this._colorFiler = null, this.drawTexAlign = !1,
                    this._incache = !1, this.mId = -1, this.mHaveKey = !1, this.mHaveLineKey = !1, X.__super.call(this),
                    this._tmpMatrix = new R(), this._drawTexToDrawTri_Vert = new Float32Array(8), this._drawTexToDrawTri_Index = new Uint16Array([0, 1, 2, 0, 2, 3]),
                    this._tempUV = new Float32Array(8), this._width = 99999999, this._height = 99999999,
                    this._submitKey = new ot(), this._transedPoints = new Array(8), this._temp4Points = new Array(8),
                    this._clipRect = X.MAXCLIPRECT, this._globalClipMatrix = new R(99999999, 0, 0, 99999999, 0, 0),
                    this._shader2D = new N(), this.mOutPoint, X._contextcount++, !X.defTexture) {
                    var t = new Ft(2, 2);
                    t.setPixels(new Uint8Array(16)), t.lock = !0, X.defTexture = new A(t);
                }
                this._lastTex = X.defTexture, this.clear();
            }
            l(X, "laya.webgl.canvas.WebGLContext2D", w);
            var e = X.prototype;
            return e.clearBG = function(t, e, i, r) {
                    var n = $.mainContext;
                    n.clearColor(t, e, i, r), n.clear(16384);
                }, e._getSubmits = function() {
                    return this._submits;
                }, e._releaseMem = function() {
                    if (this._submits) {
                        this._curMat.destroy(), this._curMat = null, this._shader2D.destroy(), this._shader2D = null,
                            this._charSubmitCache.clear();
                        for (var t = 0, e = this._submits._length; t < e; t++) this._submits[t].releaseRender();
                        this._submits.length = 0, this._submits._length = 0, this._submits = null, this._curSubmit = null,
                            this._path = null, this._save = null;
                        var i;
                        for (t = 0, i = this.meshlist.length; t < i; t++) {
                            this.meshlist[t].destroy();
                        }
                        this.meshlist.length = 0, this.sprite = null, this._targets && this._targets.destroy(),
                            this._targets = null;
                    }
                }, e.destroy = function() {
                    --X._contextcount, this.sprite = null, this._releaseMem(), this._charSubmitCache.destroy(),
                        this._targets && this._targets.destroy(), this._targets = null, this._mesh.destroy();
                }, e.clear = function() {
                    this._submits || (this._other = i.DEFAULT, this._curMat = R.create(), this._charSubmitCache = new Y(),
                            this._mesh = At.getAMesh(), this.meshlist.push(this._mesh), this._pathMesh = bt.getAMesh(),
                            this.meshlist.push(this._pathMesh), this._triangleMesh = gt.getAMesh(), this.meshlist.push(this._triangleMesh),
                            this._submits = [], this._save = [lt.Create(this)], this._save.length = 10, this._shader2D = new N()),
                        this._submitKey.clear(), this._mesh.clearVB(), this._renderCount++, this._drawCount = 1,
                        this._other = i.DEFAULT, this._other.lineWidth = this._shader2D.ALPHA = 1, this._nBlendType = 0,
                        this._clipRect = X.MAXCLIPRECT, this._curSubmit = W.RENDERBASE, W.RENDERBASE._ref = 16777215,
                        W.RENDERBASE._numEle = 0, this._shader2D.fillStyle = this._shader2D.strokeStyle = F.DEFAULT;
                    for (var t = 0, e = this._submits._length; t < e; t++) this._submits[t].releaseRender();
                    this._submits._length = 0, this._curMat.identity(), this._other.clear(), this._saveMark = this._save[0],
                        this._save._length = 1;
                }, e.size = function(t, e) {
                    this._width == t && this._height == e || (this._width = t, this._height = e, this._targets && (this._targets.destroy(),
                        this._targets = new Nt(t, e, 1, -1)), C._context == this && ($.mainContext.viewport(0, 0, t, e),
                        L.width = t, L.height = e)), 0 === t && 0 === e && this._releaseMem();
                }, e.getMatScaleX = function() {
                    return this._lastMat_a == this._curMat.a && this._lastMat_b == this._curMat.b || (this._lastMatScaleX = this._curMat.getScaleX(),
                        this._lastMat_a = this._curMat.a, this._lastMat_b = this._curMat.b), this._lastMatScaleX;
                }, e.getMatScaleY = function() {
                    return this._lastMat_c == this._curMat.c && this._lastMat_d == this._curMat.d || (this._lastMatScaleY = this._curMat.getScaleY(),
                        this._lastMat_c = this._curMat.c, this._lastMat_d = this._curMat.d), this._lastMatScaleY;
                }, e.setFillColor = function(t) {
                    this._fillColor = t;
                }, e.getFillColor = function() {
                    return this._fillColor;
                }, e.translate = function(t, e) {
                    0 === t && 0 === e || (B.save(this), this._curMat._bTransform ? (G.save(this), this._curMat.tx += t * this._curMat.a + e * this._curMat.c,
                        this._curMat.ty += t * this._curMat.b + e * this._curMat.d) : (this._curMat.tx = t,
                        this._curMat.ty = e));
                }, e.save = function() {
                    this._save[this._save._length++] = lt.Create(this);
                }, e.restore = function() {
                    var t = this._save._length,
                        e = this._nBlendType;
                    if (!(t < 1)) {
                        for (var i = t - 1; 0 <= i; i--) {
                            var r = this._save[i];
                            if (r.restore(this), r.isSaveMark()) return void(this._save._length = i);
                        }
                        e != this._nBlendType && (this._curSubmit = W.RENDERBASE);
                    }
                }, e.fillText = function(t, e, i, r, n, a) {
                    this._fillText(t, null, e, i, r, n, null, 0, null);
                }, e._fillText = function(t, e, i, r, n, a, s, h, o, l) {
                    void 0 === l && (l = 0), t ? X._textRender.filltext(this, t, i, r, n, a, s, h, o, l) : e && X._textRender.fillWords(this, e, i, r, n, a, s, h);
                }, e._fast_filltext = function(t, e, i, r, n, a, s, h, o) {
                    void 0 === o && (o = 0), X._textRender._fast_filltext(this, t, null, e, i, r, n, a, s, h, o);
                }, e.fillWords = function(t, e, i, r, n) {
                    this._fillText(null, t, e, i, r, n, null, -1, null, 0);
                }, e.fillBorderWords = function(t, e, i, r, n, a, s) {
                    this._fillBorderText(null, t, e, i, r, n, a, s, null);
                }, e.drawText = function(t, e, i, r, n, a) {
                    this._fillText(t, null, e, i, r, p.create(n).strColor, null, -1, a);
                }, e.strokeWord = function(t, e, i, r, n, a, s) {
                    this._fillText(t, null, e, i, r, null, p.create(n).strColor, a || 1, s);
                }, e.fillBorderText = function(t, e, i, r, n, a, s, h) {
                    this._fillBorderText(t, null, e, i, r, p.create(n).strColor, p.create(a).strColor, s, h);
                }, e._fillBorderText = function(t, e, i, r, n, a, s, h, o) {
                    this._fillText(t, e, i, r, n, a, s, h || 1, o);
                }, e._fillRect = function(t, e, i, r, n) {
                    var a = this._curSubmit,
                        s = a && 2 === a._key.submitType && a._key.blendShader === this._nBlendType;
                    65535 < this._mesh.vertNum + 4 && (this._mesh = At.getAMesh(), this.meshlist.push(this._mesh),
                            s = !1), s && (s = s && this.isSameClipInfo(a)), this.transformQuad(t, e, i, r, 0, this._curMat, this._transedPoints),
                        this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, A.NO_UV, n, !1),
                            s || (a = this._curSubmit = yt.create(this, this._mesh, P.create(1, 0)), this._submits[this._submits._length++] = a,
                                this._copyClipInfo(a, this._globalClipMatrix), a.shaderValue.textureHost = this._lastTex,
                                a._key.other = this._lastTex && this._lastTex.bitmap ? this._lastTex.bitmap.id : -1,
                                a._renderType = 10016), this._curSubmit._numEle += 6, this._mesh.indexNum += 6,
                            this._mesh.vertNum += 4);
                }, e.fillRect = function(t, e, i, r, n) {
                    var a = n ? F.create(n) : this._shader2D.fillStyle,
                        s = this.mixRGBandAlpha(a.toInt());
                    this._fillRect(t, e, i, r, s);
                }, e.fillTexture = function(t, e, i, r, n, a, s, h) {
                    t._getSource() ? this._fillTexture(t, t.width, t.height, t.uvrect, e, i, r, n, a, s.x, s.y) : this.sprite && T.systemTimer.callLater(this, this._repaintSprite);
                }, e._fillTexture = function(t, e, i, r, n, a, s, h, o, l, u) {
                    var c = this._curSubmit;
                    65535 < this._mesh.vertNum + 4 && (this._mesh = At.getAMesh(), this.meshlist.push(this._mesh));
                    var _ = !0,
                        f = !0;
                    switch (o) {
                        case "repeat":
                            break;

                        case "repeat-x":
                            f = !1;
                            break;

                        case "repeat-y":
                            _ = !1;
                            break;

                        case "no-repeat":
                            _ = f = !1;
                    }
                    var d = this._temp4Points,
                        p = 0,
                        m = 0,
                        x = 0,
                        v = 0,
                        T = 0,
                        g = 0;
                    if (l < 0 ? (x = n, p = -l % e / e) : x = n + l, u < 0 ? (v = a, m = -u % i / i) : v = a + u,
                        T = n + s, g = a + h, !_ && (T = Math.min(T, n + l + e)), !f && (g = Math.min(g, a + u + i)), !(T < n || g < a || T < x || g < v)) {
                        var b = (T - n - l) / e,
                            y = (g - a - u) / i;
                        if (this.transformQuad(x, v, T - x, g - v, 0, this._curMat, this._transedPoints),
                            d[0] = p, d[1] = m, d[2] = b, d[3] = m, d[4] = b, d[5] = y, d[6] = p, d[7] = y, !this.clipedOff(this._transedPoints)) {
                            var A = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA);
                            this._mesh.addQuad(this._transedPoints, d, A, !0);
                            var E = P.create(1, 0);
                            E.defines.add(256), E.u_TexRange = r, c = this._curSubmit = yt.create(this, this._mesh, E),
                                this._submits[this._submits._length++] = c, this._copyClipInfo(c, this._globalClipMatrix),
                                c.shaderValue.textureHost = t, c._renderType = 10016, this._curSubmit._numEle += 6,
                                this._mesh.indexNum += 6, this._mesh.vertNum += 4;
                        }
                        this.breakNextMerge();
                    }
                }, e.setColorFilter = function(t) {
                    I.save(this, 8388608, this, !0), this._colorFiler = t, this._curSubmit = W.RENDERBASE;
                }, e.drawTexture = function(t, e, i, r, n) {
                    this._drawTextureM(t, e, i, r, n, null, 1, null);
                }, e.drawTextures = function(t, e, i, r) {
                    if (t._getSource())
                        for (var n = e.length / 2, a = 0, s = t.bitmap.id, h = 0; h < n; h++) this._inner_drawTexture(t, s, e[a++] + i, e[a++] + r, 0, 0, null, null, 1, !1);
                    else this.sprite && T.systemTimer.callLater(this, this._repaintSprite);
                }, e._drawTextureAddSubmit = function(t, e) {
                    var i = null;
                    i = yt.create(this, this._mesh, P.create(1, 0)), (this._submits[this._submits._length++] = i).shaderValue.textureHost = e,
                        i._key.other = t, i._renderType = 10016, this._curSubmit = i;
                }, e._drawTextureM = function(t, e, i, r, n, a, s, h) {
                    return t._getSource() ? this._inner_drawTexture(t, t.bitmap.id, e, i, r, n, a, h, s, !1) : (this.sprite && T.systemTimer.callLater(this, this._repaintSprite), !1);
                }, e._drawRenderTexture = function(t, e, i, r, n, a, s, h) {
                    return this._inner_drawTexture(t, -1, e, i, r, n, a, h, 1, !1);
                }, e.submitDebugger = function() {
                    this._submits[this._submits._length++] = ft.create([], function() {}, this);
                }, e._copyClipInfo = function(t, e) {
                    var i = t.shaderValue.clipMatDir;
                    i[0] = e.a, i[1] = e.b, i[2] = e.c, i[3] = e.d;
                    var r = t.shaderValue.clipMatPos;
                    r[0] = e.tx, r[1] = e.ty, t.clipInfoID = this._clipInfoID, this._clipInCache && (t.shaderValue.clipOff[0] = 1);
                }, e.isSameClipInfo = function(t) {
                    return t.clipInfoID === this._clipInfoID;
                }, e._useNewTex2DSubmit = function(t, e) {
                    65535 < this._mesh.vertNum + e && (this._mesh = At.getAMesh(), this.meshlist.push(this._mesh));
                    var i = yt.create(this, this._mesh, P.create(1, 0));
                    this._submits[this._submits._length++] = this._curSubmit = i, i.shaderValue.textureHost = t,
                        this._copyClipInfo(i, this._globalClipMatrix);
                }, e._drawTexRect = function(t, e, i, r, n) {
                    this.transformQuad(t, e, i, r, this._italicDeg, this._curMat, this._transedPoints);
                    var a = this._transedPoints;
                    a[0] = a[0] + .5 | 0, a[1] = a[1] + .5 | 0, a[2] = a[2] + .5 | 0, a[3] = a[3] + .5 | 0,
                        a[4] = a[4] + .5 | 0, a[5] = a[5] + .5 | 0, a[6] = a[6] + .5 | 0, a[7] = a[7] + .5 | 0,
                        this.clipedOff(this._transedPoints) || (this._mesh.addQuad(this._transedPoints, n, this._fillColor, !0),
                            this._curSubmit._numEle += 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4);
                }, e.drawCallOptimize = function(t) {
                    return this._charSubmitCache.enable(t, this), t;
                }, e._inner_drawTexture = function(t, e, i, r, n, a, s, h, o, l) {
                    var u = this._curSubmit._key;
                    if (h = h || t._uv, 4 === u.submitType && u.other === e) {
                        var c = this._drawTexToDrawTri_Vert;
                        c[0] = i, c[1] = r, c[2] = i + n, c[3] = r, c[4] = i + n, c[5] = r + a, c[6] = i,
                            c[7] = r + a, this._drawTriUseAbsMatrix = !0;
                        var _ = this._tempUV;
                        return _[0] = h[0], _[1] = h[1], _[2] = h[2], _[3] = h[3], _[4] = h[4], _[5] = h[5],
                            _[6] = h[6], _[7] = h[7], this.drawTriangles(t, 0, 0, c, _, this._drawTexToDrawTri_Index, s, o, null, null), !(this._drawTriUseAbsMatrix = !1);
                    }
                    var f = this._mesh,
                        d = this._curSubmit,
                        p = l ? this._charSubmitCache.getPos() : this._transedPoints;
                    if (this.transformQuad(i, r, n || t.width, a || t.height, this._italicDeg, s || this._curMat, p),
                        this.drawTexAlign) {
                        var m = Math.round;
                        p[0] = m(p[0]), p[1] = m(p[1]), p[2] = m(p[2]), p[3] = m(p[3]), p[4] = m(p[4]),
                            p[5] = m(p[5]), p[6] = m(p[6]), p[7] = m(p[7]), this.drawTexAlign = !1;
                    }
                    var x = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * o);
                    if (l) return this._charSubmitCache.add(this, t, e, p, h, x), !0;
                    this._drawCount++;
                    var v = 0 <= e && 2 === u.submitType && u.other === e;
                    return v && (v = v && this.isSameClipInfo(d)), this._lastTex = t, 65535 < f.vertNum + 4 && (f = this._mesh = At.getAMesh(),
                            this.meshlist.push(f), v = !1), f.addQuad(p, h, x, !0), v || (this._submits[this._submits._length++] = this._curSubmit = d = yt.create(this, f, P.create(1, 0)),
                            d.shaderValue.textureHost = t, d._key.other = e, this._copyClipInfo(d, this._globalClipMatrix)),
                        d._numEle += 6, f.indexNum += 6, f.vertNum += 4, !0;
                }, e.transform4Points = function(t, e, i) {
                    var r = e.tx,
                        n = e.ty,
                        a = e.a,
                        s = e.b,
                        h = e.c,
                        o = e.d,
                        l = t[0],
                        u = t[1],
                        c = t[2],
                        _ = t[3],
                        f = t[4],
                        d = t[5],
                        p = t[6],
                        m = t[7];
                    e._bTransform ? (i[0] = l * a + u * h + r, i[1] = l * s + u * o + n, i[2] = c * a + _ * h + r,
                        i[3] = c * s + _ * o + n, i[4] = f * a + d * h + r, i[5] = f * s + d * o + n, i[6] = p * a + m * h + r,
                        i[7] = p * s + m * o + n) : (i[0] = l + r, i[1] = u + n, i[2] = c + r, i[3] = _ + n,
                        i[4] = f + r, i[5] = d + n, i[6] = p + r, i[7] = m + n);
                }, e.clipedOff = function(t) {
                    return this._clipRect.width <= 0 || this._clipRect.height <= 0;
                }, e.transformQuad = function(t, e, i, r, n, a, s) {
                    var h = 0;
                    0 != n && (h = Math.tan(n * Math.PI / 180) * r);
                    var o = t + i,
                        l = e + r,
                        u = a.tx,
                        c = a.ty,
                        _ = a.a,
                        f = a.b,
                        d = a.c,
                        p = a.d,
                        m = t + h,
                        x = e,
                        v = o + h,
                        T = e,
                        g = o,
                        b = l,
                        y = t,
                        A = l;
                    a._bTransform ? (s[0] = m * _ + x * d + u, s[1] = m * f + x * p + c, s[2] = v * _ + T * d + u,
                        s[3] = v * f + T * p + c, s[4] = g * _ + b * d + u, s[5] = g * f + b * p + c, s[6] = y * _ + A * d + u,
                        s[7] = y * f + A * p + c) : (s[0] = m + u, s[1] = x + c, s[2] = v + u, s[3] = T + c,
                        s[4] = g + u, s[5] = b + c, s[6] = y + u, s[7] = A + c);
                }, e.pushRT = function() {
                    this.addRenderObject(ft.create(null, Nt.pushRT, this));
                }, e.popRT = function() {
                    this.addRenderObject(ft.create(null, Nt.popRT, this)), this.breakNextMerge();
                }, e.useRT = function(t) {
                    this.addRenderObject(ft.create([t], function(t) {
                        if (!t) throw "error useRT";
                        t.start(), t.clear(0, 0, 0, 0);
                    }, this)), this.breakNextMerge();
                }, e.RTRestore = function(t) {
                    this.addRenderObject(ft.create([t], function(t) {
                        t.restore();
                    }, this)), this.breakNextMerge();
                }, e.breakNextMerge = function() {
                    this._curSubmit = W.RENDERBASE;
                }, e._repaintSprite = function() {
                    this.sprite && this.sprite.repaint();
                }, e.drawTextureWithTransform = function(t, e, i, r, n, a, s, h, o, l, u) {
                    var c = null,
                        _ = this._curMat;
                    l && (c = this.globalCompositeOperation, this.globalCompositeOperation = l);
                    var f = this._colorFiler;
                    if (u && this.setColorFilter(u), !a) return this._drawTextureM(t, e + s, i + h, r, n, _, o, null),
                        l && (this.globalCompositeOperation = c), void(u && this.setColorFilter(f));
                    var d = this._tmpMatrix;
                    d.a = a.a, d.b = a.b, d.c = a.c, d.d = a.d, d.tx = a.tx + s, d.ty = a.ty + h, d._bTransform = a._bTransform,
                        a && _._bTransform ? (R.mul(d, _, d), (a = d)._bTransform = !0) : a = d, this._drawTextureM(t, e, i, r, n, a, o, null),
                        l && (this.globalCompositeOperation = c), u && this.setColorFilter(f);
                }, e._flushToTarget = function(t, e) {
                    L.worldScissorTest = !1, $.mainContext.disable(3089);
                    var i = L.worldAlpha,
                        r = L.worldMatrix4,
                        n = L.worldMatrix;
                    L.worldShaderDefines;
                    L.worldMatrix = R.EMPTY, L.restoreTempArray(), L.worldMatrix4 = L.TEMPMAT4_ARRAY,
                        L.worldAlpha = 1, It.activeShader = null, e.start(), 0 < t._submits._length && e.clear(0, 0, 0, 0),
                        t._curSubmit = W.RENDERBASE, t.flush(), t.clear(), e.restore(), t._curSubmit = W.RENDERBASE,
                        It.activeShader = null, L.worldAlpha = i, L.worldMatrix4 = r, L.worldMatrix = n;
                }, e.drawCanvas = function(t, e, i, r, n) {
                    if (t) {
                        var a, s = t.context;
                        if (s._targets) 0 < s._submits._length && (a = ft.create([s, s._targets], this._flushToTarget, this),
                                this._submits[this._submits._length++] = a), this._drawRenderTexture(s._targets, e, i, r, n, null, 1, Nt.flipyuv),
                            this._curSubmit = W.RENDERBASE;
                        else {
                            var h = t;
                            h.touches && h.touches.forEach(function(t) {
                                t.touch();
                            }), a = Rt.create(t, this._shader2D.ALPHA, this._shader2D.filters), (this._submits[this._submits._length++] = a)._key.clear();
                            var o = a._matrix;
                            this._curMat.copyTo(o);
                            var l = o.tx,
                                u = o.ty;
                            o.tx = o.ty = 0, o.transformPoint(S.TEMP.setTo(e, i)), o.translate(S.TEMP.x + l, S.TEMP.y + u),
                                R.mul(h.invMat, o, o), this._curSubmit = W.RENDERBASE;
                        }
                    }
                }, e.drawTarget = function(t, e, i, r, n, a, s, h, o) {
                    void 0 === o && (o = -1), this._drawCount++;
                    this.mixRGBandAlpha(this._drawTextureUseColor ? this.fillStyle ? this.fillStyle.toInt() : 0 : 4294967295);
                    if (65535 < this._mesh.vertNum + 4 && (this._mesh = At.getAMesh(), this.meshlist.push(this._mesh)),
                        this.transformQuad(e, i, r, n, 0, a || this._curMat, this._transedPoints), this.clipedOff(this._transedPoints)) return this._curSubmit = W.RENDERBASE, !1;
                    this._mesh.addQuad(this._transedPoints, h || A.DEF_UV, 4294967295, !0);
                    var l = this._curSubmit = nt.create(this, this._mesh, s, t);
                    return l.blendType = -1 == o ? this._nBlendType : o, this._copyClipInfo(l, this._globalClipMatrix),
                        l._numEle = 6, this._mesh.indexNum += 6, this._mesh.vertNum += 4, this._submits[this._submits._length++] = l,
                        this._curSubmit = W.RENDERBASE, !0;
                }, e.drawTriangles = function(t, e, i, r, n, a, s, h, o, l) {
                    if (t._getSource()) {
                        this._drawCount++;
                        var u = this._tmpMatrix,
                            c = this._triangleMesh,
                            _ = null,
                            f = !1;
                        o && (_ = this._colorFiler, this._colorFiler = o, this._curSubmit = W.RENDERBASE,
                            f = _ != o);
                        var d = t.bitmap,
                            p = this._curSubmit._key,
                            m = 4 === p.submitType && p.other === d.id && p.blendShader == this._nBlendType;
                        if (65535 < c.vertNum + r.length / 2 && (c = this._triangleMesh = gt.getAMesh(),
                                this.meshlist.push(c), m = !1), !m) {
                            var x = this._curSubmit = yt.create(this, c, P.create(1, 0));
                            x.shaderValue.textureHost = t, x._renderType = 10016, x._key.submitType = 4, x._key.other = d.id,
                                this._copyClipInfo(x, this._globalClipMatrix), this._submits[this._submits._length++] = x;
                        }
                        var v = this._mixRGBandAlpha(4294967295, this._shader2D.ALPHA * h);
                        this._drawTriUseAbsMatrix ? c.addData(r, n, a, s, v) : (u.ty = s ? (u.a = s.a, u.b = s.b,
                                u.c = s.c, u.d = s.d, u.tx = s.tx + e, s.ty + i) : (u.a = 1, u.b = 0, u.c = 0, u.d = 1,
                                u.tx = e, i), R.mul(u, this._curMat, u), c.addData(r, n, a, u, v)), this._curSubmit._numEle += a.length,
                            f && (this._colorFiler = _, this._curSubmit = W.RENDERBASE);
                    } else this.sprite && T.systemTimer.callLater(this, this._repaintSprite);
                }, e.transform = function(t, e, i, r, n, a) {
                    G.save(this), R.mul(R.TEMP.setTo(t, e, i, r, n, a), this._curMat, this._curMat),
                        this._curMat._checkTransform();
                }, e._transformByMatrix = function(t, e, i) {
                    t.setTranslate(e, i), R.mul(t, this._curMat, this._curMat), t.setTranslate(0, 0),
                        this._curMat._bTransform = !0;
                }, e.setTransformByMatrix = function(t) {
                    t.copyTo(this._curMat);
                }, e.rotate = function(t) {
                    G.save(this), this._curMat.rotateEx(t);
                }, e.scale = function(t, e) {
                    G.save(this), this._curMat.scaleEx(t, e);
                }, e.clipRect = function(t, e, i, r) {
                    z.save(this), this._clipRect == X.MAXCLIPRECT ? this._clipRect = new M(t, e, i, r) : (this._clipRect.width = i,
                            this._clipRect.height = r, this._clipRect.x = t, this._clipRect.y = e), X._clipID_Gen++,
                        X._clipID_Gen %= 1e4, this._clipInfoID = X._clipID_Gen;
                    var n = this._globalClipMatrix,
                        a = n.tx,
                        s = n.ty,
                        h = a + n.a,
                        o = s + n.d;
                    if (99999999 <= this._clipRect.width ? (n.a = n.d = 99999999, n.b = n.c = n.tx = n.ty = 0) : (this._curMat._bTransform ? (n.tx = this._clipRect.x * this._curMat.a + this._clipRect.y * this._curMat.c + this._curMat.tx,
                            n.ty = this._clipRect.x * this._curMat.b + this._clipRect.y * this._curMat.d + this._curMat.ty,
                            n.a = this._clipRect.width * this._curMat.a, n.b = this._clipRect.width * this._curMat.b,
                            n.c = this._clipRect.height * this._curMat.c, n.d = this._clipRect.height * this._curMat.d) : (n.tx = this._clipRect.x + this._curMat.tx,
                            n.ty = this._clipRect.y + this._curMat.ty, n.a = this._clipRect.width, n.b = n.c = 0,
                            n.d = this._clipRect.height), this._incache && (this._clipInCache = !0)), 0 < n.a && 0 < n.d) {
                        var l = n.tx + n.a,
                            u = n.ty + n.d;
                        l <= a || u <= s || n.tx >= h || n.ty >= o ? (n.a = -.1, n.d = -.1) : (n.tx < a && (n.a -= a - n.tx,
                                n.tx = a), h < l && (n.a -= l - h), n.ty < s && (n.d -= s - n.ty, n.ty = s), o < u && (n.d -= u - o),
                            n.a <= 0 && (n.a = -.1), n.d <= 0 && (n.d = -.1));
                    }
                }, e.drawMesh = function(t, e, i, r, n, a, s, h, o) {
                    void 0 === o && (o = 0);
                }, e.addRenderObject = function(t) {
                    this._submits[this._submits._length++] = t;
                }, e.submitElement = function(t, e) {
                    C._context;
                    var i = this._submits,
                        r = i._length;
                    e < 0 && (e = i._length);
                    for (var n = W.RENDERBASE; t < e;) this._renderNextSubmitIndex = t + 1, i[t] !== W.RENDERBASE ? (W.preRender = n,
                        t += (n = i[t]).renderSubmit()) : t++;
                    return r;
                }, e.flush = function() {
                    var t = this.submitElement(0, this._submits._length);
                    this._path && this._path.reset(), V.instance && V.getInstance().reset(), this._curSubmit = W.RENDERBASE;
                    for (var e = 0, i = this.meshlist.length; e < i; e++) {
                        var r = this.meshlist[e];
                        r.canReuse ? r.releaseMesh() : r.destroy();
                    }
                    if (this.meshlist.length = 0, this._mesh = At.getAMesh(), this._pathMesh = bt.getAMesh(),
                        this._triangleMesh = gt.getAMesh(), this.meshlist.push(this._mesh, this._pathMesh, this._triangleMesh),
                        this._flushCnt++, this._flushCnt % 60 == 0 && C._context == this) {
                        var n = T.textRender;
                        n && n.GC(!1);
                    }
                    return t;
                }, e.setPathId = function(t) {
                    if (this.mId = t, -1 != this.mId) {
                        this.mHaveKey = !1;
                        var e = E.getInstance();
                        e.shapeDic[this.mId] && (this.mHaveKey = !0), this.mHaveLineKey = !1, e.shapeLineDic[this.mId] && (this.mHaveLineKey = !0);
                    }
                }, e.beginPath = function(t) {
                    void 0 === t && (t = !1), this._getPath().beginPath(t);
                }, e.closePath = function() {
                    this._path.closePath();
                }, e.addPath = function(t, e, i, r, n) {
                    for (var a = 0, s = 0, h = t.length / 2; s < h; s++) {
                        var o = t[a] + r,
                            l = t[a + 1] + n;
                        t[a] = o, t[a + 1] = l, a += 2;
                    }
                    this._getPath().push(t, i);
                }, e.fill = function() {
                    var t = this._curMat,
                        e = this._getPath(),
                        i = this._curSubmit,
                        r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                    r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                    for (var n, a = this.mixRGBandAlpha(this.fillStyle.toInt()), s = 0, h = 0, o = e.paths.length; h < o; h++) {
                        var l = e.paths[h],
                            u = l.path.length / 2;
                        if (!(u < 3 || 3 == u && !l.convex)) {
                            var c = l.path.concat(),
                                _ = 0,
                                f = 0,
                                d = 0,
                                p = NaN,
                                m = NaN;
                            if (t._bTransform)
                                for (_ = 0; _ < u; _++) d = (f = _ << 1) + 1, p = c[f], m = c[d],
                                    c[f] = t.a * p + t.c * m + t.tx, c[d] = t.b * p + t.d * m + t.ty;
                            else
                                for (_ = 0; _ < u; _++) d = (f = _ << 1) + 1,
                                    p = c[f], m = c[d], c[f] = p + t.tx, c[d] = m + t.ty;
                            65535 < this._pathMesh.vertNum + u && (this._curSubmit._numEle += s, s = 0, this._pathMesh = bt.getAMesh(),
                                this._curSubmit = this.addVGSubmit(this._pathMesh));
                            var x = this._pathMesh.vertNum;
                            if (l.convex) {
                                var v = u - 2;
                                n = new Array(3 * v);
                                for (var T = 0, g = 0; g < v; g++) n[T++] = x, n[T++] = g + 1 + x, n[T++] = g + 2 + x;
                            } else if (n = ct.earcut(c, null, 2), 0 < x)
                                for (var b = 0; b < n.length; b++) n[b] += x;
                            this._pathMesh.addVertAndIBToMesh(this, c, a, n), s += n.length;
                        }
                    }
                    this._curSubmit._numEle += s;
                }, e.addVGSubmit = function(t) {
                    var e = W.createShape(this, t, 0, P.create(4, 0));
                    return e._key.submitType = 3, this._submits[this._submits._length++] = e, this._copyClipInfo(e, this._globalClipMatrix),
                        e;
                }, e.stroke = function() {
                    if (0 < this.lineWidth) {
                        var t = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                            e = this._getPath(),
                            i = this._curSubmit,
                            r = 3 === i._key.submitType && i._key.blendShader === this._nBlendType;
                        r && (r = r && this.isSameClipInfo(i)), r || (this._curSubmit = this.addVGSubmit(this._pathMesh));
                        for (var n = 0, a = 0, s = e.paths.length; a < s; a++) {
                            var h = e.paths[a];
                            if (!(h.path.length <= 0)) {
                                var o = [],
                                    l = [],
                                    u = 2 * h.path.length;
                                if (!(u < 2)) {
                                    65535 < this._pathMesh.vertNum + u && (this._curSubmit._numEle += n, n = 0, this._pathMesh = bt.getAMesh(),
                                            this.meshlist.push(this._pathMesh), this._curSubmit = this.addVGSubmit(this._pathMesh)),
                                        H.createLine2(h.path, o, this.lineWidth, this._pathMesh.vertNum, l, h.loop);
                                    var c = l.length / 2,
                                        _ = this._curMat,
                                        f = 0,
                                        d = 0,
                                        p = 0,
                                        m = NaN,
                                        x = NaN;
                                    if (_._bTransform)
                                        for (f = 0; f < c; f++) p = (d = f << 1) + 1, m = l[d], x = l[p],
                                            l[d] = _.a * m + _.c * x + _.tx, l[p] = _.b * m + _.d * x + _.ty;
                                    else
                                        for (f = 0; f < c; f++) p = (d = f << 1) + 1,
                                            m = l[d], x = l[p], l[d] = m + _.tx, l[p] = x + _.ty;
                                    this._pathMesh.addVertAndIBToMesh(this, l, t, o), n += o.length;
                                }
                            }
                        }
                        this._curSubmit._numEle += n;
                    }
                }, e.moveTo = function(t, e) {
                    var i = this._getPath();
                    i.newPath(), i._lastOriX = t, i._lastOriY = e, i.addPoint(t, e);
                }, e.lineTo = function(t, e) {
                    var i = this._getPath();
                    Math.abs(t - i._lastOriX) < .001 && Math.abs(e - i._lastOriY) < .001 || (i._lastOriX = t,
                        i._lastOriY = e, i.addPoint(t, e));
                }, e.arcTo = function(t, e, i, r, n) {
                    var a = 0,
                        s = 0,
                        h = 0,
                        o = this._path._lastOriX - t,
                        l = this._path._lastOriY - e,
                        u = Math.sqrt(o * o + l * l);
                    if (!(u <= 1e-6)) {
                        var c = o / u,
                            _ = l / u,
                            f = i - t,
                            d = r - e,
                            p = f * f + d * d,
                            m = Math.sqrt(p);
                        if (!(m <= 1e-6)) {
                            var x = f / m,
                                v = d / m,
                                T = c + x,
                                g = _ + v,
                                b = Math.sqrt(T * T + g * g);
                            if (!(b <= 1e-6)) {
                                var y = T / b,
                                    A = g / b,
                                    E = Math.acos(y * c + A * _),
                                    R = Math.PI / 2 - E,
                                    S = (u = n / Math.tan(R)) * c + t,
                                    M = u * _ + e,
                                    w = Math.sqrt(u * u + n * n),
                                    C = t + y * w,
                                    I = e + A * w,
                                    P = 0,
                                    B = 0;
                                if (0 <= c * v - _ * x) {
                                    var D = 2 * R / X.SEGNUM;
                                    P = Math.sin(D), B = Math.cos(D);
                                } else D = 2 * -R / X.SEGNUM, P = Math.sin(D), B = Math.cos(D);
                                var O = this._path._lastOriX,
                                    L = this._path._lastOriY,
                                    F = S,
                                    N = M;
                                (.1 < Math.abs(F - this._path._lastOriX) || .1 < Math.abs(N - this._path._lastOriY)) && (O = s = F,
                                    L = h = N, this._path.addPoint(s, h));
                                var U = S - C,
                                    V = M - I;
                                for (a = 0; a < X.SEGNUM; a++) {
                                    var k = U * B + V * P,
                                        W = -U * P + V * B;
                                    s = k + C, h = W + I, (.1 < Math.abs(O - s) || .1 < Math.abs(L - h)) && (this._path.addPoint(s, h),
                                        O = s, L = h), U = k, V = W;
                                }
                            }
                        }
                    }
                }, e.arc = function(t, e, i, r, n, a, s) {
                    void 0 === a && (a = !1), void 0 === s && (s = !0);
                    var h, o, l = 0,
                        u = 0,
                        c = 0,
                        _ = 0,
                        f = 0,
                        d = 0,
                        p = 0;
                    if (u = n - r, a)
                        if (Math.abs(u) >= 2 * Math.PI) u = 2 * -Math.PI;
                        else
                            for (; 0 < u;) u -= 2 * Math.PI;
                    else if (Math.abs(u) >= 2 * Math.PI) u = 2 * Math.PI;
                    else
                        for (; u < 0;) u += 2 * Math.PI;
                    var m = this.getMatScaleX(),
                        x = this.getMatScaleY(),
                        v = i * (x < m ? m : x),
                        T = 2 * Math.PI * v;
                    h = u / (o = 0 | Math.max(T / 10, 10)) / 2, c = Math.abs(4 / 3 * (1 - Math.cos(h)) / Math.sin(h)),
                        a && (c = -c);
                    var g = this._getPath();
                    for (p = 0; p <= o; p++) l = r + u * (p / o), _ = Math.cos(l), d = e + Math.sin(l) * i,
                        (f = t + _ * i) == this._path._lastOriX && d == this._path._lastOriY || g.addPoint(f, d);
                    _ = Math.cos(n), d = e + Math.sin(n) * i, (f = t + _ * i) == this._path._lastOriX && d == this._path._lastOriY || g.addPoint(f, d);
                }, e.quadraticCurveTo = function(t, e, i, r) {
                    for (var n = o.I.getBezierPoints([this._path._lastOriX, this._path._lastOriY, t, e, i, r], 30, 2), a = 0, s = n.length / 2; a < s; a++) this.lineTo(n[2 * a], n[2 * a + 1]);
                    this.lineTo(i, r);
                }, e.rect = function(t, e, i, r) {
                    this._other = this._other.make(), this._other.path || (this._other.path = new _t()),
                        this._other.path.rect(t, e, i, r);
                }, e.mixRGBandAlpha = function(t) {
                    return this._mixRGBandAlpha(t, this._shader2D.ALPHA);
                }, e._mixRGBandAlpha = function(t, e) {
                    if (1 <= e) return t;
                    var i = (4278190080 & t) >>> 24;
                    return 0 != i ? i *= e : i = 255 * e, 16777215 & t | i << 24;
                }, e.strokeRect = function(t, e, i, r, n) {
                    if (0 < this.lineWidth) {
                        var a = this.mixRGBandAlpha(this.strokeStyle._color.numColor),
                            s = this.lineWidth / 2;
                        this._fillRect(t - s, e - s, i + this.lineWidth, this.lineWidth, a), this._fillRect(t - s, e - s + r, i + this.lineWidth, this.lineWidth, a),
                            this._fillRect(t - s, e + s, this.lineWidth, r - this.lineWidth, a), this._fillRect(t - s + i, e + s, this.lineWidth, r - this.lineWidth, a);
                    }
                }, e.clip = function() {}, e.drawParticle = function(t, e, i) {
                    i.x = t, i.y = e, this._submits[this._submits._length++] = i;
                }, e._getPath = function() {
                    return this._path || (this._path = new _t());
                }, e._fillTexture_h = function(t, e, i, r, n, a, s, h) {
                    for (var o = a, l = Math.floor(h / r), u = h % r, c = 0; c < l; c++) this._inner_drawTexture(t, e, o, s, r, n, this._curMat, i, 1, !1),
                        o += r;
                    if (0 < u) {
                        var _ = i[2] - i[0],
                            f = i[0] + _ * (u / r),
                            d = X.tmpuv1;
                        d[0] = i[0], d[1] = i[1], d[2] = f, d[3] = i[3], d[4] = f, d[5] = i[5], d[6] = i[6],
                            d[7] = i[7], this._inner_drawTexture(t, e, o, s, u, n, this._curMat, d, 1, !1);
                    }
                }, e._fillTexture_v = function(t, e, i, r, n, a, s, h) {
                    for (var o = s, l = Math.floor(h / n), u = h % n, c = 0; c < l; c++) this._inner_drawTexture(t, e, a, o, r, n, this._curMat, i, 1, !1),
                        o += n;
                    if (0 < u) {
                        var _ = i[7] - i[1],
                            f = i[1] + _ * (u / n),
                            d = X.tmpuv1;
                        d[0] = i[0], d[1] = i[1], d[2] = i[2], d[3] = i[3], d[4] = i[4], d[5] = f, d[6] = i[6],
                            d[7] = f, this._inner_drawTexture(t, e, a, o, r, u, this._curMat, d, 1, !1);
                    }
                }, e.drawTextureWithSizeGrid = function(t, e, i, r, n, a, s, h) {
                    if (t._getSource()) {
                        e += s, i += h;
                        var o = t.uv,
                            l = t.bitmap._width,
                            u = t.bitmap._height,
                            c = a[0],
                            _ = a[3],
                            f = c / u,
                            d = _ / l,
                            p = a[1],
                            m = a[2],
                            x = p / l,
                            v = m / u,
                            T = a[4],
                            g = !1;
                        if (r == l && (_ = p = 0), n == u && (c = m = 0), r < _ + p) {
                            var b = r;
                            g = !0, r = _ + p, this.save(), this.clipRect(0 + e, 0 + i, b, n);
                        }
                        var y = t.bitmap.id,
                            A = this._curMat,
                            E = this._tempUV,
                            R = o[0],
                            S = o[1],
                            M = o[4],
                            w = o[5],
                            C = R,
                            I = S,
                            P = M,
                            B = w;
                        if (_ && c && (P = R + d, B = S + f, E[0] = R, E[1] = S, E[2] = P, E[3] = S, E[4] = P,
                                E[5] = B, E[6] = R, E[7] = B, this._inner_drawTexture(t, y, e, i, _, c, A, E, 1, !1)),
                            p && c && (C = M - x, P = M, B = (I = S) + f, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, this._inner_drawTexture(t, y, r - p + e, 0 + i, p, c, A, E, 1, !1)),
                            _ && m && (I = w - v, P = (C = R) + d, B = w, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, this._inner_drawTexture(t, y, 0 + e, n - m + i, _, m, A, E, 1, !1)),
                            p && m && (C = M - x, I = w - v, P = M, B = w, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, this._inner_drawTexture(t, y, r - p + e, n - m + i, p, m, A, E, 1, !1)),
                            c && (C = R + d, P = M - x, B = (I = S) + f, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, T ? this._fillTexture_h(t, y, E, t.width - _ - p, c, _ + e, i, r - _ - p) : this._inner_drawTexture(t, y, _ + e, i, r - _ - p, c, A, E, 1, !1)),
                            m && (C = R + d, I = w - v, P = M - x, B = w, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, T ? this._fillTexture_h(t, y, E, t.width - _ - p, m, _ + e, n - m + i, r - _ - p) : this._inner_drawTexture(t, y, _ + e, n - m + i, r - _ - p, m, A, E, 1, !1)),
                            _ && (I = S + f, P = (C = R) + d, B = w - v, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, T ? this._fillTexture_v(t, y, E, _, t.height - c - m, e, c + i, n - c - m) : this._inner_drawTexture(t, y, e, c + i, _, n - c - m, A, E, 1, !1)),
                            p && (C = M - x, I = S + f, P = M, B = w - v, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                                E[4] = P, E[5] = B, E[6] = C, E[7] = B, T ? this._fillTexture_v(t, y, E, p, t.height - c - m, r - p + e, c + i, n - c - m) : this._inner_drawTexture(t, y, r - p + e, c + i, p, n - c - m, A, E, 1, !1)),
                            C = R + d, I = S + f, P = M - x, B = w - v, E[0] = C, E[1] = I, E[2] = P, E[3] = I,
                            E[4] = P, E[5] = B, E[6] = C, E[7] = B, T) {
                            var D = X.tmpUVRect;
                            D[0] = C, D[1] = I, D[2] = P - C, D[3] = B - I, this._fillTexture(t, t.width - _ - p, t.height - c - m, D, _ + e, c + i, r - _ - p, n - c - m, "repeat", 0, 0);
                        } else this._inner_drawTexture(t, y, _ + e, c + i, r - _ - p, n - c - m, A, E, 1, !1);
                        g && this.restore();
                    }
                }, h(0, e, "globalCompositeOperation", function() {
                    return q.NAMES[this._nBlendType];
                }, function(t) {
                    var e = q.TOINT[t];
                    null == e || this._nBlendType === e || (I.save(this, 65536, this, !0), this._curSubmit = W.RENDERBASE,
                        this._nBlendType = e);
                }), h(0, e, "strokeStyle", function() {
                    return this._shader2D.strokeStyle;
                }, function(t) {
                    this._shader2D.strokeStyle.equal(t) || (I.save(this, 512, this._shader2D, !1), this._shader2D.strokeStyle = F.create(t),
                        this._submitKey.other = -this._shader2D.strokeStyle.toInt());
                }), h(0, e, "globalAlpha", function() {
                    return this._shader2D.ALPHA;
                }, function(t) {
                    (t = Math.floor(1e3 * t) / 1e3) != this._shader2D.ALPHA && (I.save(this, 1, this._shader2D, !1),
                        this._shader2D.ALPHA = t);
                }), h(0, e, "asBitmap", null, function(t) {
                    if (t) {
                        if (this._targets || (this._targets = new Nt(this._width, this._height, 1, -1)), !this._width || !this._height) throw Error("asBitmap no size!");
                    } else this._targets && this._targets.destroy(), this._targets = null;
                }), h(0, e, "fillStyle", function() {
                    return this._shader2D.fillStyle;
                }, function(t) {
                    this._shader2D.fillStyle.equal(t) || (I.save(this, 2, this._shader2D, !1), this._shader2D.fillStyle = F.create(t),
                        this._submitKey.other = -this._shader2D.fillStyle.toInt());
                }), h(0, e, "textAlign", function() {
                    return this._other.textAlign;
                }, function(t) {
                    this._other.textAlign === t || (this._other = this._other.make(), I.save(this, 32768, this._other, !1),
                        this._other.textAlign = t);
                }), h(0, e, "lineWidth", function() {
                    return this._other.lineWidth;
                }, function(t) {
                    this._other.lineWidth === t || (this._other = this._other.make(), I.save(this, 256, this._other, !1),
                        this._other.lineWidth = t);
                }), h(0, e, "textBaseline", function() {
                    return this._other.textBaseline;
                }, function(t) {
                    this._other.textBaseline === t || (this._other = this._other.make(), I.save(this, 16384, this._other, !1),
                        this._other.textBaseline = t);
                }), h(0, e, "font", null, function(t) {
                    this._other = this._other.make(), I.save(this, 8, this._other, !1);
                }), h(0, e, "canvas", function() {
                    return this._canvas;
                }), X.__init__ = function() {
                    i.DEFAULT = new i();
                }, X.set2DRenderConfig = function() {
                    var t = ut.instance;
                    K.setBlend(t, !0), K.setBlendFunc(t, 1, 771), K.setDepthTest(t, !1), K.setCullFace(t, !1),
                        K.setDepthMask(t, !0), K.setFrontFace(t, 2305), C.isConchApp || t.viewport(0, 0, L.width, L.height);
                }, X._SUBMITVBSIZE = 32e3, X._MAXSIZE = 99999999, X._MAXVERTNUM = 65535, X.MAXCLIPRECT = new M(0, 0, 99999999, 99999999),
                X._COUNT = 0, X.SEGNUM = 32, X._contextcount = 0, X._clipID_Gen = 0, X.defTexture = null,
                s(X, ["_textRender", function() {
                    return this._textRender = new at();
                }, "tmpuv1", function() {
                    return this.tmpuv1 = [0, 0, 0, 0, 0, 0, 0, 0];
                }, "tmpUV", function() {
                    return this.tmpUV = [0, 0, 0, 0, 0, 0, 0, 0];
                }, "tmpUVRect", function() {
                    return this.tmpUVRect = [0, 0, 0, 0];
                }]), X.__init$ = function() {
                    i = function() {
                        function t() {
                            this.lineWidth = 1, this.path = null, this.textAlign = null, this.textBaseline = null;
                        }
                        l(t, "");
                        var e = t.prototype;
                        return e.clear = function() {
                            this.lineWidth = 1, this.path && this.path.clear(), this.textAlign = this.textBaseline = null;
                        }, e.make = function() {
                            return this === t.DEFAULT ? new t() : this;
                        }, t.DEFAULT = null, t;
                    }();
                }, X;
        }(),
        xt = function(t) {
            function e(t) {
                e.__super.call(this, 4, 0), this._attribLocation = ["position", 0, "attribColor", 1];
            }
            return l(e, "laya.webgl.shader.d2.value.PrimitiveSV", P), e;
        }(),
        vt = function(t) {
            function i(t) {
                this.texcoord = null, this.position = null, this.offsetX = 300, this.offsetY = 0,
                    i.__super.call(this, 512, 0);
                var e = 8 * dt.BYTES_PE;
                this.position = [2, 5126, !1, e, 0], this.texcoord = [2, 5126, !1, e, 2 * dt.BYTES_PE],
                    this.color = [4, 5126, !1, e, 4 * dt.BYTES_PE];
            }
            return l(i, "laya.webgl.shader.d2.skinAnishader.SkinSV", P), i;
        }(),
        Tt = function(t) {
            function e(t) {
                this.u_colorMatrix = null, this.strength = 0, this.blurInfo = null, this.colorMat = null,
                    this.colorAlpha = null, void 0 === t && (t = 0), e.__super.call(this, 1, t), this._attribLocation = ["posuv", 0, "attribColor", 1, "attribFlags", 2];
            }
            return l(e, "laya.webgl.shader.d2.value.TextureSV", P), e.prototype.clear = function() {
                this.texture = null, this.shader = null, this.defines._value = this.subID + ($.shaderHighPrecision ? 1024 : 0);
            }, e;
        }(),
        gt = function(t) {
            function e() {
                e.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo);
            }
            l(e, "laya.webgl.utils.MeshTexture", O);
            var i = e.prototype;
            return i.addData = function(t, e, i, r, n) {
                var a = this._vb,
                    s = this._ib,
                    h = t.length >> 1,
                    o = a.needSize(24 * h) >> 2,
                    l = a._floatArray32 || a.getFloat32Array(),
                    u = a._uint32Array,
                    c = 0,
                    _ = r.a,
                    f = r.b,
                    d = r.c,
                    p = r.d,
                    m = r.tx,
                    x = r.ty,
                    v = 0;
                for (v = 0; v < h; v++) {
                    var T = t[c],
                        g = t[c + 1];
                    l[o] = T * _ + g * d + m, l[o + 1] = T * f + g * p + x, l[o + 2] = e[c], l[o + 3] = e[c + 1],
                        u[o + 4] = n, u[o + 5] = 255, o += 6, c += 2;
                }
                a.setNeedUpload();
                var b = this.vertNum,
                    y = i.length,
                    A = s.needSize(i.byteLength),
                    E = s.getUint16Array(),
                    R = A >> 1;
                if (0 < b) {
                    var S = R + y,
                        M = 0;
                    for (v = R; v < S; v++, M++) E[v] = i[M] + b;
                } else E.set(i, R);
                s.setNeedUpload(), this.vertNum += h, this.indexNum += i.length;
            }, i.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0,
                    laya.webgl.utils.MeshTexture._POOL.push(this);
            }, i.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }, e.getAMesh = function() {
                var t;
                return (t = laya.webgl.utils.MeshTexture._POOL.length ? laya.webgl.utils.MeshTexture._POOL.pop() : new e())._vb._resizeBuffer(1572864, !1),
                    t;
            }, e.const_stride = 24, e._POOL = [], s(e, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
            }]), e;
        }(),
        bt = function(t) {
            function e() {
                e.__super.call(this, 12, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshVG._fixattriInfo);
            }
            l(e, "laya.webgl.utils.MeshVG", O);
            var i = e.prototype;
            return i.addVertAndIBToMesh = function(t, e, i, r) {
                for (var n = this._vb.needSize(e.length / 2 * 12) >> 2, a = this._vb._floatArray32 || this._vb.getFloat32Array(), s = this._vb._uint32Array, h = 0, o = e.length / 2, l = 0; l < o; l++) a[n++] = e[h],
                    a[n++] = e[h + 1], h += 2, s[n++] = i;
                this._vb.setNeedUpload(), this._ib.append(new Uint16Array(r)), this._ib.setNeedUpload(),
                    this.vertNum += o, this.indexNum += r.length;
            }, i.releaseMesh = function() {
                this._vb.setByteLength(0), this._ib.setByteLength(0), this.vertNum = 0, this.indexNum = 0,
                    laya.webgl.utils.MeshVG._POOL.push(this);
            }, i.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._ib.disposeResource(), this._vb.deleteBuffer();
            }, e.getAMesh = function() {
                var t;
                return (t = laya.webgl.utils.MeshVG._POOL.length ? laya.webgl.utils.MeshVG._POOL.pop() : new e())._vb._resizeBuffer(786432, !1),
                    t;
            }, e.const_stride = 12, e._POOL = [], s(e, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 2, 0, 5121, 4, 8];
            }]), e;
        }(),
        yt = (function(t) {
            function i(t) {
                i.__super.call(this, 116, 4 * t * 116, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshParticle2D._fixattriInfo),
                    this.createQuadIB(t), this._quadNum = t;
            }
            l(i, "laya.webgl.utils.MeshParticle2D", O);
            var e = i.prototype;
            e.setMaxParticleNum = function(t) {
                this._vb._resizeBuffer(4 * t * 116, !1), this.createQuadIB(t);
            }, e.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshParticle2D._POOL.push(this);
            }, e.destroy = function() {
                this._ib.destroy(), this._vb.destroy(), this._vb.deleteBuffer();
            }, i.getAMesh = function(t) {
                if (laya.webgl.utils.MeshParticle2D._POOL.length) {
                    var e = laya.webgl.utils.MeshParticle2D._POOL.pop();
                    return e.setMaxParticleNum(t), e;
                }
                return new i(t);
            }, i.const_stride = 116, i._POOL = [], s(i, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5126, 3, 16, 5126, 3, 28, 5126, 4, 40, 5126, 4, 56, 5126, 3, 72, 5126, 2, 84, 5126, 4, 92, 5126, 1, 108, 5126, 1, 112];
            }]);
        }(), function(t) {
            function s(t) {
                void 0 === t && (t = 1e4), s.__super.call(this, t);
            }
            l(s, "laya.webgl.submit.SubmitTexture", W);
            var e = s.prototype;
            return e.clone = function(t, e, i) {
                var r = s._poolSize ? s.POOL[--s._poolSize] : new s();
                return this._cloneInit(r, t, e, i), r;
            }, e.releaseRender = function() {
                --this._ref < 1 && ((s.POOL[s._poolSize++] = this).shaderValue.release(), this._mesh = null,
                    this._parent && (this._parent.releaseRender(), this._parent = null));
            }, e.renderSubmit = function() {
                if (0 === this._numEle) return 1;
                var t = this.shaderValue.textureHost;
                if (t) {
                    var e = t ? t._getSource() : null;
                    if (!e) return 1;
                }
                var i = $.mainContext;
                this._mesh.useMesh(i);
                var r = W.preRender,
                    n = W.preRender._key;
                return 0 === this._key.blendShader && this._key.submitType === n.submitType && this._key.blendShader === n.blendShader && It.activeShader && W.preRender.clipInfoID == this.clipInfoID && r.shaderValue.defines._value === this.shaderValue.defines._value && 0 == (this.shaderValue.defines._value & Ct.NOOPTMASK) ? It.activeShader.uploadTexture2D(e) : (q.activeBlendFunction !== this._blendFn && (K.setBlend(i, !0),
                            this._blendFn(i), q.activeBlendFunction = this._blendFn), this.shaderValue.texture = e,
                        this.shaderValue.upload()), i.drawElements(4, this._numEle, 5123, this._startIdx),
                    g.renderBatches++, g.trianglesFaces += this._numEle / 3, 1;
            }, s.create = function(t, e, i) {
                var r = s._poolSize ? s.POOL[--s._poolSize] : new s(10016);
                r._mesh = e, r._key.clear(), r._key.submitType = 2, r._ref = 1, r._startIdx = e.indexNum * dt.BYTES_PIDX,
                    r._numEle = 0;
                var n = t._nBlendType;
                if (r._key.blendShader = n, r._blendFn = t._targets ? q.targetFns[n] : q.fns[n],
                    r.shaderValue = i, t._colorFiler) {
                    var a = t._colorFiler;
                    i.defines.add(a.type), i.colorMat = a._mat, i.colorAlpha = a._alpha;
                }
                return r;
            }, s._poolSize = 0, s.POOL = [], s;
        }()),
        At = function(t) {
            function e() {
                e.__super.call(this, 24, 4, 4), this.canReuse = !0, this.setAttributes(laya.webgl.utils.MeshQuadTexture._fixattriInfo),
                    laya.webgl.utils.MeshQuadTexture._fixib ? (this._ib = laya.webgl.utils.MeshQuadTexture._fixib,
                        this._quadNum = e._maxIB) : (this.createQuadIB(e._maxIB), laya.webgl.utils.MeshQuadTexture._fixib = this._ib);
            }
            l(e, "laya.webgl.utils.MeshQuadTexture", O);
            var i = e.prototype;
            return i.releaseMesh = function() {
                this._vb.setByteLength(0), this.vertNum = 0, this.indexNum = 0, laya.webgl.utils.MeshQuadTexture._POOL.push(this);
            }, i.destroy = function() {
                this._vb.destroy(), this._vb.deleteBuffer();
            }, i.addQuad = function(t, e, i, r) {
                var n = this._vb,
                    a = n._byteLength >> 2;
                n.setByteLength(a + 24 << 2);
                var s = n._floatArray32 || n.getFloat32Array(),
                    h = n._uint32Array,
                    o = a,
                    l = r ? 255 : 0;
                s[o++] = t[0], s[o++] = t[1], s[o++] = e[0], s[o++] = e[1], h[o++] = i, h[o++] = l,
                    s[o++] = t[2], s[o++] = t[3], s[o++] = e[2], s[o++] = e[3], h[o++] = i, h[o++] = l,
                    s[o++] = t[4], s[o++] = t[5], s[o++] = e[4], s[o++] = e[5], h[o++] = i, h[o++] = l,
                    s[o++] = t[6], s[o++] = t[7], s[o++] = e[6], s[o++] = e[7], h[o++] = i, h[o++] = l,
                    n._upload = !0;
            }, e.getAMesh = function() {
                var t = null;
                return (t = laya.webgl.utils.MeshQuadTexture._POOL.length ? laya.webgl.utils.MeshQuadTexture._POOL.pop() : new e())._vb._resizeBuffer(1572864, !1),
                    t;
            }, e.const_stride = 24, e._fixib = null, e._maxIB = 16384, e._POOL = [], s(e, ["_fixattriInfo", function() {
                return this._fixattriInfo = [5126, 4, 0, 5121, 4, 16, 5121, 4, 20];
            }]), e;
        }(),
        Et = function(t) {
            function e() {
                this._maxsize = 0, this._upload = !0, this._uploadSize = 0, this._bufferSize = 0,
                    this._u8Array = null, e.__super.call(this);
            }
            l(e, "laya.webgl.utils.Buffer2D", Z);
            var i = e.prototype;
            return i.setByteLength = function(t) {
                this._byteLength !== t && (t <= this._bufferSize || this._resizeBuffer(2 * t + 256, !0),
                    this._byteLength = t);
            }, i.needSize = function(t) {
                var e = this._byteLength;
                if (t) {
                    var i = this._byteLength + t;
                    i <= this._bufferSize || this._resizeBuffer(i << 1, !0), this._byteLength = i;
                }
                return e;
            }, i._bufferData = function() {
                this._maxsize = Math.max(this._maxsize, this._byteLength), g.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64),
                        this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength),
                    this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
                        ut.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)),
                    ut.instance.bufferSubData(this._bufferType, 0, this._buffer);
            }, i._bufferSubData = function(t, e, i) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), this._maxsize = Math.max(this._maxsize, this._byteLength),
                    g.loopCount % 30 == 0 && (this._buffer.byteLength > this._maxsize + 64 && (this._buffer = this._buffer.slice(0, this._maxsize + 64),
                        this._bufferSize = this._buffer.byteLength, this._checkArrayUse()), this._maxsize = this._byteLength),
                    this._uploadSize < this._buffer.byteLength && (this._uploadSize = this._buffer.byteLength,
                        ut.instance.bufferData(this._bufferType, this._uploadSize, this._bufferUsage)),
                    e || i) {
                    var r = this._buffer.slice(e, i);
                    ut.instance.bufferSubData(this._bufferType, t, r);
                } else ut.instance.bufferSubData(this._bufferType, t, this._buffer);
            }, i._checkArrayUse = function() {}, i._bind_uploadForVAO = function() {
                return !!this._upload && (this._upload = !1, this._bindForVAO(), this._bufferData(), !0);
            }, i._bind_upload = function() {
                return !!this._upload && (this._upload = !1, this.bind(), this._bufferData(), !0);
            }, i._bind_subUpload = function(t, e, i) {
                return void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), !!this._upload && (this._upload = !1, this.bind(), this._bufferSubData(t, e, i), !0);
            }, i._resizeBuffer = function(t, e) {
                var i = this._buffer;
                if (t <= i.byteLength) return this;
                var r = this._u8Array;
                if (e && i && 0 < i.byteLength) {
                    var n = new ArrayBuffer(t),
                        a = r && r.buffer == i ? r : new Uint8Array(i);
                    (r = this._u8Array = new Uint8Array(n)).set(a, 0), i = this._buffer = n;
                } else i = this._buffer = new ArrayBuffer(t), this._u8Array = null;
                return this._checkArrayUse(), this._upload = !0, this._bufferSize = i.byteLength,
                    this;
            }, i.append = function(t) {
                this._upload = !0;
                var e, i;
                e = t.byteLength, t instanceof Uint8Array ? (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Uint8Array(this._buffer, this._byteLength)) : t instanceof Uint16Array ? (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Uint16Array(this._buffer, this._byteLength)) : t instanceof Float32Array && (this._resizeBuffer(this._byteLength + e, !0),
                        i = new Float32Array(this._buffer, this._byteLength)), i.set(t, 0), this._byteLength += e,
                    this._checkArrayUse();
            }, i.appendU16Array = function(t, e) {
                this._resizeBuffer(this._byteLength + 2 * e, !0);
                var i = new Uint16Array(this._buffer, this._byteLength, e);
                if (6 == e) i[0] = t[0], i[1] = t[1], i[2] = t[2], i[3] = t[3], i[4] = t[4], i[5] = t[5];
                else if (100 <= e) i.set(new Uint16Array(t.buffer, 0, e));
                else
                    for (var r = 0; r < e; r++) i[r] = t[r];
                this._byteLength += 2 * e, this._checkArrayUse();
            }, i.appendEx = function(t, e) {
                this._upload = !0;
                var i;
                i = t.byteLength, this._resizeBuffer(this._byteLength + i, !0), new e(this._buffer, this._byteLength).set(t, 0),
                    this._byteLength += i, this._checkArrayUse();
            }, i.appendEx2 = function(t, e, i, r) {
                void 0 === r && (r = 1), this._upload = !0;
                var n, a;
                n = i * r, this._resizeBuffer(this._byteLength + n, !0), a = new e(this._buffer, this._byteLength);
                var s = 0;
                for (s = 0; s < i; s++) a[s] = t[s];
                this._byteLength += n, this._checkArrayUse();
            }, i.getBuffer = function() {
                return this._buffer;
            }, i.setNeedUpload = function() {
                this._upload = !0;
            }, i.getNeedUpload = function() {
                return this._upload;
            }, i.upload = function() {
                var t = this._bind_upload();
                return ut.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Z._bindedVertexBuffer = null),
                    34963 == this._bufferType && (Z._bindedIndexBuffer = null), It.activeShader = null,
                    t;
            }, i.subUpload = function(t, e, i) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0);
                var r = this._bind_subUpload();
                return ut.instance.bindBuffer(this._bufferType, null), 34962 == this._bufferType && (Z._bindedVertexBuffer = null),
                    34963 == this._bufferType && (Z._bindedIndexBuffer = null), It.activeShader = null,
                    r;
            }, i._disposeResource = function() {
                this._upload = !0, this._uploadSize = 0;
            }, i.clear = function() {
                this._byteLength = 0, this._upload = !0;
            }, h(0, i, "bufferLength", function() {
                return this._buffer.byteLength;
            }), h(0, i, "byteLength", null, function(t) {
                this.setByteLength(t);
            }), e.__int__ = function(t) {}, e.FLOAT32 = 4, e.SHORT = 2, e;
        }(),
        Rt = function(t) {
            function a() {
                this._matrix = new R(), this._matrix4 = dt.defaultMatrix4.concat(), a.__super.call(this, 1e4),
                    this.shaderValue = new P(0, 0);
            }
            l(a, "laya.webgl.submit.SubmitCanvas", W);
            var e = a.prototype;
            return e.renderSubmit = function() {
                var t = L.worldAlpha,
                    e = L.worldMatrix4,
                    i = L.worldMatrix,
                    r = L.worldFilters,
                    n = L.worldShaderDefines,
                    a = this.shaderValue,
                    s = this._matrix,
                    h = this._matrix4,
                    o = R.TEMP;
                return R.mul(s, i, o), h[0] = o.a, h[1] = o.b, h[4] = o.c, h[5] = o.d, h[12] = o.tx,
                    h[13] = o.ty, L.worldMatrix = o.clone(), L.worldMatrix4 = h, L.worldAlpha = L.worldAlpha * a.alpha,
                    a.filters && a.filters.length && (L.worldFilters = a.filters, L.worldShaderDefines = a.defines),
                    this.canv.flushsubmit(), L.worldAlpha = t, L.worldMatrix4 = e, L.worldMatrix.destroy(),
                    L.worldMatrix = i, L.worldFilters = r, L.worldShaderDefines = n, 1;
            }, e.releaseRender = function() {
                if (--this._ref < 1) {
                    var t = a.POOL;
                    this._mesh = null, t[t._length++] = this;
                }
            }, e.clone = function(t, e, i) {
                return null;
            }, e.getRenderType = function() {
                return 10003;
            }, a.create = function(t, e, i) {
                var r = a.POOL._length ? a.POOL[--a.POOL._length] : new a();
                r.canv = t, r._ref = 1, r._numEle = 0;
                var n = r.shaderValue;
                return n.alpha = e, n.defines.setValue(0), i && i.length && n.setFilters(i), r;
            }, a.POOL = ((a.POOL = [])._length = 0, a.POOL), a;
        }(),
        St = function(t) {
            function e() {
                e.__super.call(this);
            }
            return l(e, "laya.webgl.BufferState2D", j), e;
        }(),
        Mt = function(t) {
            function f(t, e, i, r, n) {
                this.ctx = null, this.lastScaleX = 1, this.lastScaleY = 1, this.needResetScale = !1,
                    this.maxTexW = 0, this.maxTexH = 0, this.scaleFontSize = !0, this.showDbgInfo = !1,
                    this.supportImageData = !0, f.__super.call(this), void 0 === i && (i = !0), void 0 === r && (r = !0),
                    void 0 === n && (n = !1), this.maxTexW = t, this.maxTexH = e, this.scaleFontSize = i,
                    this.supportImageData = r, this.showDbgInfo = n, f.canvas || ((f.canvas = d.document.createElement("canvas")).width = 1024,
                        f.canvas.height = 512, f.canvas.style.left = "-10000px", f.canvas.style.position = "absolute",
                        a.body.appendChild(f.canvas), this.ctx = f.canvas.getContext("2d"));
            }
            l(f, "laya.webgl.resource.CharRender_Canvas", X);
            var e = f.prototype;
            return e.getWidth = function(t, e) {
                return this.ctx ? (this.ctx._lastFont != t && (this.ctx.font = t, this.ctx._lastFont = t),
                    this.ctx.measureText(e).width) : 0;
            }, e.scale = function(t, e) {
                if (!this.supportImageData) return this.lastScaleX = t, void(this.lastScaleY = e);
                this.lastScaleX == t && this.lastScaleY == e || (this.ctx.setTransform(t, 0, 0, e, 0, 0),
                    this.lastScaleX = t, this.lastScaleY = e);
            }, e.getCharBmp = function(t, e, i, r, n, a, s, h, o, l, u) {
                if (!this.supportImageData) return this.getCharCanvas(t, e, i, r, n, a, s, h, o, l);
                var c = this.ctx;
                c.font != e && (c.font = e, c._lastFont = e), a.width = c.measureText(t).width;
                var _ = a.width * this.lastScaleX,
                    f = a.height * this.lastScaleY;
                _ += (s + o) * this.lastScaleX, f += (h + l) * this.lastScaleY, _ = Math.ceil(_),
                    f = Math.ceil(f);
                var d = (_ = Math.min(_, laya.webgl.resource.CharRender_Canvas.canvas.width)) + 2 * i + 1,
                    p = (f = Math.min(f, laya.webgl.resource.CharRender_Canvas.canvas.height)) + 2 * i + 1;
                u && (d = Math.max(d, u[0] + u[2] + 1), p = Math.max(p, u[1] + u[3] + 1)), c.clearRect(0, 0, d, p),
                    c.save(), c.textBaseline = "top", 0 < i && (c.strokeStyle = n, c.lineWidth = i,
                        c.strokeText(t, s, h)), c.fillStyle = r, c.fillText(t, s, h), this.showDbgInfo && (c.strokeStyle = "#ff0000",
                        c.strokeRect(0, 0, _, f), c.strokeStyle = "#00ff00", c.strokeRect(s, h, a.width, a.height)),
                    u && -1 == u[2] && (u[2] = Math.ceil((a.width + 2 * i) * this.lastScaleX));
                var m = u ? c.getImageData(u[0], u[1], u[2], u[3]) : c.getImageData(0, 0, _, f);
                return c.restore(), a.bmpWidth = m.width, a.bmpHeight = m.height, m;
            }, e.getCharCanvas = function(t, e, i, r, n, a, s, h, o, l) {
                var u = this.ctx;
                u.font != e && (u.font = e, u._lastFont = e), a.width = u.measureText(t).width;
                var c = a.width * this.lastScaleX,
                    _ = a.height * this.lastScaleY;
                return c += (s + o) * this.lastScaleX, _ += (h + l) * this.lastScaleY + 1, c = Math.min(c, this.maxTexW),
                    _ = Math.min(_, this.maxTexH), f.canvas.width = Math.min(c + 1, this.maxTexW), f.canvas.height = Math.min(_ + 1, this.maxTexH),
                    u.font = e, u.clearRect(0, 0, c + 1 + i, _ + 1 + i), u.setTransform(1, 0, 0, 1, 0, 0),
                    u.save(), this.scaleFontSize && u.scale(this.lastScaleX, this.lastScaleY), u.translate(s, h),
                    u.textAlign = "left", u.textBaseline = "top", 0 < i ? (u.strokeStyle = n, u.fillStyle = r,
                        u.lineWidth = i, u.fillAndStrokeText ? u.fillAndStrokeText(t, 0, 0) : (u.strokeText(t, 0, 0),
                            u.fillText(t, 0, 0))) : (u.fillStyle = r, u.fillText(t, 0, 0)), this.showDbgInfo && (u.strokeStyle = "#ff0000",
                        u.strokeRect(0, 0, c, _), u.strokeStyle = "#00ff00", u.strokeRect(0, 0, a.width, a.height)),
                    u.restore(), a.bmpWidth = f.canvas.width, a.bmpHeight = f.canvas.height, f.canvas;
            }, h(0, e, "canvasWidth", function() {
                return f.canvas.width;
            }, function(t) {
                f.canvas.width != t && (2048 < (f.canvas.width = t) && console.warn("画文字设置的宽度太大，超过2048了"),
                    this.ctx.setTransform(1, 0, 0, 1, 0, 0), this.ctx.scale(this.lastScaleX, this.lastScaleY));
            }), f.canvas = null, f;
        }(),
        wt = function(t) {
            function e() {
                this.lastFont = "", e.__super.call(this);
            }
            l(e, "laya.webgl.resource.CharRender_Native", X);
            var i = e.prototype;
            return i.getWidth = function(t, e) {
                return d.conchTextCanvas ? (d.conchTextCanvas.font = t, this.lastFont = t, d.conchTextCanvas.measureText(e).width) : 0;
            }, i.scale = function(t, e) {}, i.getCharBmp = function(t, e, i, r, n, a, s, h, o, l, u) {
                if (!d.conchTextCanvas) return null;
                d.conchTextCanvas.font = e, this.lastFont = e;
                a.width = d.conchTextCanvas.measureText(t).width, a.height;
                var c = p.create(n).numColor,
                    _ = p.create(r).numColor,
                    f = d.conchTextCanvas.getTextBitmapData(t, _, 2 < i ? 2 : i, c);
                return a.bmpWidth = f.width, a.bmpHeight = f.height, f;
            }, e;
        }(),
        Ct = function(t) {
            function i() {
                i.__super.call(this, i.__name2int, i.__int2name, i.__int2nameMap);
            }
            return l(i, "laya.webgl.shader.d2.ShaderDefines2D", it), i.__init__ = function() {
                    i.reg("TEXTURE2D", 1), i.reg("PRIMITIVE", 4), i.reg("GLOW_FILTER", 8), i.reg("BLUR_FILTER", 16),
                        i.reg("COLOR_FILTER", 32), i.reg("COLOR_ADD", 64), i.reg("WORLDMAT", 128), i.reg("FILLTEXTURE", 256),
                        i.reg("FSHIGHPRECISION", 1024), i.reg("MVP3D", 2048);
                }, i.reg = function(t, e) {
                    it._reg(t, e, i.__name2int, i.__int2name);
                }, i.toText = function(t, e, i) {
                    return it._toText(t, e, i);
                }, i.toInt = function(t) {
                    return it._toInt(t, i.__name2int);
                }, i.TEXTURE2D = 1, i.PRIMITIVE = 4, i.FILTERGLOW = 8, i.FILTERBLUR = 16, i.FILTERCOLOR = 32,
                i.COLORADD = 64, i.WORLDMAT = 128, i.FILLTEXTURE = 256, i.SKINMESH = 512, i.SHADERDEFINE_FSHIGHPRECISION = 1024,
                i.MVP3D = 2048, i.NOOPTMASK = 312, i.__name2int = {}, i.__int2name = [], i.__int2nameMap = [],
                i;
        }(),
        It = function(t) {
            function e() {
                e.__super.call(this);
            }
            return l(e, "laya.webgl.shader.BaseShader", i), e.activeShader = null, e.bindShader = null,
                e;
        }(),
        Pt = function(t) {
            function r(t, e) {
                this._source = null, this._texW = 0, this._texH = 0, this.__destroyed = !1, this._discardTm = 0,
                    this.genID = 0, this.bitmap = {
                        id: 0,
                        _glTexture: null
                    }, this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0, this.lastTouchTm = 0,
                    this.ri = null, r.__super.call(this), this._texW = t || at.atlasWidth, this._texH = e || at.atlasWidth,
                    this.bitmap.id = this.id, this.lock = !0;
            }
            l(r, "laya.webgl.text.TextTexture", i);
            var e = r.prototype;
            return e.recreateResource = function() {
                if (!this._source) {
                    var t = C.isConchApp ? ut.instance.getDefaultCommandEncoder() : $.mainContext,
                        e = this._source = t.createTexture();
                    this.bitmap._glTexture = e, K.bindTexture(t, 3553, e), t.texImage2D(3553, 0, 6408, this._texW, this._texH, 0, 6408, 5121, null),
                        t.texParameteri(3553, 10241, 9729), t.texParameteri(3553, 10240, 9729), t.texParameteri(3553, 10242, 33071),
                        t.texParameteri(3553, 10243, 33071), at.debugUV && this.fillWhite();
                }
            }, e.addChar = function(t, e, i, r) {
                if (at.isWan1Wan) return this.addCharCanvas(t, e, i, r);
                !this._source && this.recreateResource();
                var n = C.isConchApp ? ut.instance.getDefaultCommandEncoder() : $.mainContext;
                K.bindTexture(n, 3553, this._source), !C.isConchApp && n.pixelStorei(37441, !0);
                var a = t.data;
                t.data instanceof Uint8ClampedArray && (a = new Uint8Array(a.buffer)), n.texSubImage2D(3553, 0, e, i, t.width, t.height, 6408, 5121, a), !C.isConchApp && n.pixelStorei(37441, !1);
                var s = NaN,
                    h = NaN,
                    o = NaN,
                    l = NaN;
                return l = C.isConchApp ? (s = e / this._texW, h = i / this._texH, o = (e + t.width) / this._texW,
                        (i + t.height) / this._texH) : (s = (e + 1) / this._texW, h = i / this._texH, o = (e + t.width - 1) / this._texW,
                        (i + t.height - 1) / this._texH), (r = r || new Array(8))[0] = s, r[1] = h, r[2] = o,
                    r[3] = h, r[4] = o, r[5] = l, r[6] = s, r[7] = l, r;
            }, e.addCharCanvas = function(t, e, i, r) {
                !this._source && this.recreateResource();
                var n = C.isConchApp ? ut.instance.getDefaultCommandEncoder() : $.mainContext;
                K.bindTexture(n, 3553, this._source), !C.isConchApp && n.pixelStorei(37441, !0),
                    n.texSubImage2D(3553, 0, e, i, 6408, 5121, t), !C.isConchApp && n.pixelStorei(37441, !1);
                var a = NaN,
                    s = NaN,
                    h = NaN,
                    o = NaN;
                return o = C.isConchApp ? (a = e / this._texW, s = i / this._texH, h = (e + t.width) / this._texW,
                        (i + t.height) / this._texH) : (a = (e + 1) / this._texW, s = (i + 1) / this._texH,
                        h = (e + t.width - 1) / this._texW, (i + t.height - 1) / this._texH), (r = r || new Array(8))[0] = a,
                    r[1] = s, r[2] = h, r[3] = s, r[4] = h, r[5] = o, r[6] = a, r[7] = o, r;
            }, e.fillWhite = function() {
                !this._source && this.recreateResource();
                var t = C.isConchApp ? ut.instance.getDefaultCommandEncoder() : $.mainContext,
                    e = new Uint8Array(this._texW * this._texH * 4);
                e.fill(255), t.texSubImage2D(3553, 0, 0, 0, this._texW, this._texH, 6408, 5121, e);
            }, e.discard = function() {
                this._texW == at.atlasWidth && this._texH == at.atlasWidth ? (this.genID++, r.poolLen >= r.pool.length && (r.pool = r.pool.concat(new Array(10))),
                    this._discardTm = T.stage.getFrameTm(), r.pool[r.poolLen++] = this) : this.destroy();
            }, e.destroy = function() {
                console.log("destroy TextTexture"), this.__destroyed = !0;
                var t = C.isConchApp ? ut.instance.getDefaultCommandEncoder() : $.mainContext;
                this._source && t.deleteTexture(this._source), this._source = null;
            }, e.touchRect = function(t, e) {
                this.lastTouchTm != e && (this.curUsedCovRate = 0, this.curUsedCovRateAtlas = 0,
                    this.lastTouchTm = e);
                var i = at.atlasWidth * at.atlasWidth,
                    r = rt.atlasGridW * rt.atlasGridW;
                this.curUsedCovRate += t.bmpWidth * t.bmpHeight / i, this.curUsedCovRateAtlas += Math.ceil(t.bmpWidth / rt.atlasGridW) * Math.ceil(t.bmpHeight / rt.atlasGridW) / (i / r);
            }, e._getSource = function() {
                return this._source;
            }, e.drawOnScreen = function(t, e) {}, h(0, e, "texture", function() {
                return this;
            }), r.getTextTexture = function(t, e) {
                if (t != at.atlasWidth || t != at.atlasWidth) return new r(t, e);
                if (0 < r.poolLen) {
                    var i = r.pool[--r.poolLen];
                    return 0 < r.poolLen && r.clean(), i;
                }
                return new r(t, e);
            }, r.clean = function() {
                var t = T.stage.getFrameTm();
                if (0 === r.cleanTm && (r.cleanTm = t), t - r.cleanTm >= at.checkCleanTextureDt) {
                    for (var e = 0; e < r.poolLen; e++) {
                        var i = r.pool[e];
                        t - i._discardTm >= at.destroyUnusedTextureDt && (i.destroy(), r.pool[e] = r.pool[r.poolLen - 1],
                            r.poolLen--, e--);
                    }
                    r.cleanTm = t;
                }
            }, r.poolLen = 0, r.cleanTm = 0, s(r, ["pool", function() {
                return this.pool = new Array(10);
            }]), r;
        }(),
        Bt = function(t) {
            function i(t, e) {
                this._floatArray32 = null, this._uint32Array = null, this._vertexStride = 0, i.__super.call(this),
                    this._vertexStride = t, this._bufferUsage = e, this._bufferType = 34962, this._buffer = new ArrayBuffer(8),
                    this._floatArray32 = new Float32Array(this._buffer), this._uint32Array = new Uint32Array(this._buffer);
            }
            l(i, "laya.webgl.utils.VertexBuffer2D", Et);
            var e = i.prototype;
            return e.getFloat32Array = function() {
                return this._floatArray32;
            }, e.appendArray = function(t) {
                var e = this._byteLength >> 2;
                this.setByteLength(this._byteLength + 4 * t.length), this.getFloat32Array().set(t, e),
                    this._upload = !0;
            }, e._checkArrayUse = function() {
                this._floatArray32 && (this._floatArray32 = new Float32Array(this._buffer)), this._uint32Array && (this._uint32Array = new Uint32Array(this._buffer));
            }, e.deleteBuffer = function() {
                this._disposeResource();
            }, e._bindForVAO = function() {
                ut.instance.bindBuffer(34962, this._glBuffer);
            }, e.bind = function() {
                return Z._bindedVertexBuffer !== this._glBuffer && (ut.instance.bindBuffer(34962, this._glBuffer),
                    Z._bindedVertexBuffer = this._glBuffer, !0);
            }, e.destroy = function() {
                laya.webgl.utils.Buffer.prototype.destroy.call(this), this._byteLength = 0, this._upload = !0,
                    this._buffer = null, this._floatArray32 = null;
            }, h(0, e, "vertexStride", function() {
                return this._vertexStride;
            }), i.create = function(t, e) {
                return void 0 === e && (e = 35048), new i(t, e);
            }, i;
        }(),
        Dt = function(t) {
            function e(t) {
                this._uint16Array = null, void 0 === t && (t = 35044), e.__super.call(this), this._bufferUsage = t,
                    this._bufferType = 34963, this._buffer = new ArrayBuffer(8);
            }
            l(e, "laya.webgl.utils.IndexBuffer2D", Et);
            var i = e.prototype;
            return i._checkArrayUse = function() {
                this._uint16Array && (this._uint16Array = new Uint16Array(this._buffer));
            }, i.getUint16Array = function() {
                return this._uint16Array || (this._uint16Array = new Uint16Array(this._buffer));
            }, i._bindForVAO = function() {
                ut.instance.bindBuffer(34963, this._glBuffer);
            }, i.bind = function() {
                return Z._bindedIndexBuffer !== this._glBuffer && (ut.instance.bindBuffer(34963, this._glBuffer),
                    Z._bindedIndexBuffer = this._glBuffer, !0);
            }, i.destory = function() {
                this._uint16Array = null, this._buffer = null;
            }, i.disposeResource = function() {
                this._disposeResource();
            }, e.create = function(t) {
                return void 0 === t && (t = 35044), new e(t);
            }, e;
        }(),
        Ot = function(t) {
            function i(t, e) {
                i.__super.call(this), this._wrapModeU = 0, this._wrapModeV = 0, this._filterMode = 1,
                    this._readyed = !1, this._width = -1, this._height = -1, this._format = t, this._mipmap = e,
                    this._anisoLevel = 1, this._glTexture = ut.instance.createTexture();
            }
            l(i, "laya.webgl.resource.BaseTexture", r);
            var e = i.prototype;
            return e._isPot = function(t) {
                    return 0 == (t & t - 1);
                }, e._getGLFormat = function() {
                    var t = 0;
                    switch (this._format) {
                        case 0:
                            t = 6407;
                            break;

                        case 1:
                            t = 6408;
                            break;

                        case 2:
                            t = 6406;
                            break;

                        case 3:
                            if (!K._compressedTextureS3tc) throw "BaseTexture: not support DXT1 format.";
                            t = K._compressedTextureS3tc.COMPRESSED_RGB_S3TC_DXT1_EXT;
                            break;

                        case 4:
                            if (!K._compressedTextureS3tc) throw "BaseTexture: not support DXT5 format.";
                            t = K._compressedTextureS3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT;
                            break;

                        case 5:
                            if (!K._compressedTextureEtc1) throw "BaseTexture: not support ETC1RGB format.";
                            t = K._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL;
                            break;

                        case 9:
                            if (!K._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_2BPPV format.";
                            t = K._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                            break;

                        case 10:
                            if (!K._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_2BPPV format.";
                            t = K._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
                            break;

                        case 11:
                            if (!K._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGB_4BPPV format.";
                            t = K._compressedTexturePvrtc.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                            break;

                        case 12:
                            if (!K._compressedTexturePvrtc) throw "BaseTexture: not support PVRTCRGBA_4BPPV format.";
                            t = K._compressedTexturePvrtc.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                            break;

                        default:
                            throw "BaseTexture: unknown texture format.";
                    }
                    return t;
                }, e._setFilterMode = function(t) {
                    var e = ut.instance;
                    switch (K.bindTexture(e, this._glTextureType, this._glTexture), t) {
                        case 0:
                            this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9984) : e.texParameteri(this._glTextureType, 10241, 9728),
                                e.texParameteri(this._glTextureType, 10240, 9728);
                            break;

                        case 1:
                            this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9985) : e.texParameteri(this._glTextureType, 10241, 9729),
                                e.texParameteri(this._glTextureType, 10240, 9729);
                            break;

                        case 2:
                            this._mipmap ? e.texParameteri(this._glTextureType, 10241, 9987) : e.texParameteri(this._glTextureType, 10241, 9729),
                                e.texParameteri(this._glTextureType, 10240, 9729);
                            break;

                        default:
                            throw new Error("BaseTexture:unknown filterMode value.");
                    }
                }, e._setWarpMode = function(t, e) {
                    var i = ut.instance;
                    if (K.bindTexture(i, this._glTextureType, this._glTexture), this._isPot(this._width) && this._isPot(this._height)) switch (e) {
                        case 0:
                            i.texParameteri(this._glTextureType, t, 10497);
                            break;

                        case 1:
                            i.texParameteri(this._glTextureType, t, 33071);
                    } else i.texParameteri(this._glTextureType, t, 33071);
                }, e._setAnisotropy = function(t) {
                    var e = K._extTextureFilterAnisotropic;
                    if (e && !u.onLimixiu) {
                        t = Math.max(t, 1);
                        var i = ut.instance;
                        K.bindTexture(i, this._glTextureType, this._glTexture), t = Math.min(i.getParameter(e.MAX_TEXTURE_MAX_ANISOTROPY_EXT), t),
                            i.texParameterf(this._glTextureType, e.TEXTURE_MAX_ANISOTROPY_EXT, t);
                    }
                }, e._disposeResource = function() {
                    this._glTexture && (ut.instance.deleteTexture(this._glTexture), this._glTexture = null,
                        this._setGPUMemory(0));
                }, e._getSource = function() {
                    return this._readyed ? this._glTexture : null;
                }, e.generateMipmap = function() {
                    this._isPot(this.width) && this._isPot(this.height) && ut.instance.generateMipmap(this._glTextureType);
                }, h(0, e, "wrapModeU", function() {
                    return this._wrapModeU;
                }, function(t) {
                    this._wrapModeU !== t && (this._wrapModeU = t, -1 !== this._width && this._setWarpMode(10242, t));
                }), h(0, e, "mipmap", function() {
                    return this._mipmap;
                }), h(0, e, "format", function() {
                    return this._format;
                }), h(0, e, "wrapModeV", function() {
                    return this._wrapModeV;
                }, function(t) {
                    this._wrapModeV !== t && (this._wrapModeV = t, -1 !== this._height && this._setWarpMode(10243, t));
                }), h(0, e, "defaulteTexture", function() {
                    throw "BaseTexture:must override it.";
                }), h(0, e, "filterMode", function() {
                    return this._filterMode;
                }, function(t) {
                    t !== this._filterMode && (this._filterMode = t, -1 !== this._width && -1 !== this._height && this._setFilterMode(t));
                }), h(0, e, "anisoLevel", function() {
                    return this._anisoLevel;
                }, function(t) {
                    t !== this._anisoLevel && (this._anisoLevel = Math.max(1, Math.min(16, t)), -1 !== this._width && -1 !== this._height && this._setAnisotropy(t));
                }), i.WARPMODE_REPEAT = 0, i.WARPMODE_CLAMP = 1, i.FILTERMODE_POINT = 0, i.FILTERMODE_BILINEAR = 1,
                i.FILTERMODE_TRILINEAR = 2, i.FORMAT_R8G8B8 = 0, i.FORMAT_R8G8B8A8 = 1, i.FORMAT_ALPHA8 = 2,
                i.FORMAT_DXT1 = 3, i.FORMAT_DXT5 = 4, i.FORMAT_ETC1RGB = 5, i.FORMAT_PVRTCRGB_2BPPV = 9,
                i.FORMAT_PVRTCRGBA_2BPPV = 10, i.FORMAT_PVRTCRGB_4BPPV = 11, i.FORMAT_PVRTCRGBA_4BPPV = 12,
                i.FORMAT_DEPTH_16 = 0, i.FORMAT_STENCIL_8 = 1, i.FORMAT_DEPTHSTENCIL_16_8 = 2, i.FORMAT_DEPTHSTENCIL_NONE = 3,
                i;
        }(),
        Lt = function(t) {
            function o(t, e, i, r, n) {
                if (this._attribInfo = null, this.customCompile = !1, this._curActTexIndex = 0,
                    this.tag = {}, this._program = null, this._params = null, this._paramsMap = {},
                    o.__super.call(this), !t || !e) throw "Shader Error";
                this._attribInfo = n, this._id = ++o._count, this._vs = t, this._ps = e, this._nameMap = r || {},
                    null != i && (o.sharders[i] = this), this.recreateResource(), this.lock = !0;
            }
            l(o, "laya.webgl.shader.Shader", It);
            var e = o.prototype;
            return e.recreateResource = function() {
                    this._compile(), this._setGPUMemory(0);
                }, e._disposeResource = function() {
                    $.mainContext.deleteShader(this._vshader), $.mainContext.deleteShader(this._pshader),
                        $.mainContext.deleteProgram(this._program), this._vshader = this._pshader = this._program = null,
                        this._params = null, this._paramsMap = {}, this._setGPUMemory(0), this._curActTexIndex = 0;
                }, e._compile = function() {
                    if (this._vs && this._ps && !this._params) {
                        var t;
                        this._reCompile = !0, this._params = [], this.customCompile && (t = et.preGetParams(this._vs, this._ps));
                        var e = $.mainContext;
                        this._program = e.createProgram(), this._vshader = o._createShader(e, this._vs, 35633),
                            this._pshader = o._createShader(e, this._ps, 35632), e.attachShader(this._program, this._vshader),
                            e.attachShader(this._program, this._pshader);
                        var i, r, n = 0,
                            a = this._attribInfo ? this._attribInfo.length : 0;
                        for (n = 0; n < a; n += 2) e.bindAttribLocation(this._program, this._attribInfo[n + 1], this._attribInfo[n]);
                        if (e.linkProgram(this._program), !this.customCompile && !e.getProgramParameter(this._program, 35714)) throw e.getProgramInfoLog(this._program);
                        var s = this.customCompile ? t.uniforms.length : e.getProgramParameter(this._program, 35718);
                        for (n = 0; n < s; n++) {
                            var h = this.customCompile ? t.uniforms[n] : e.getActiveUniform(this._program, n);
                            0 < (i = {
                                vartype: "uniform",
                                glfun: null,
                                ivartype: 1,
                                location: e.getUniformLocation(this._program, h.name),
                                name: h.name,
                                type: h.type,
                                isArray: !1,
                                isSame: !1,
                                preValue: null,
                                indexOfParams: 0
                            }).name.indexOf("[0]") && (i.name = i.name.substr(0, i.name.length - 3), i.isArray = !0,
                                i.location = e.getUniformLocation(this._program, i.name)), this._params.push(i);
                        }
                        for (n = 0, r = this._params.length; n < r; n++) switch ((i = this._params[n]).indexOfParams = n,
                            i.index = 1, i.value = [i.location, null], i.codename = i.name, i.name = this._nameMap[i.codename] ? this._nameMap[i.codename] : i.codename,
                            (this._paramsMap[i.name] = i)._this = this, i.uploadedValue = [], i.type) {
                            case 5124:
                                i.fun = i.isArray ? this._uniform1iv : this._uniform1i;
                                break;

                            case 5126:
                                i.fun = i.isArray ? this._uniform1fv : this._uniform1f;
                                break;

                            case 35664:
                                i.fun = i.isArray ? this._uniform_vec2v : this._uniform_vec2;
                                break;

                            case 35665:
                                i.fun = i.isArray ? this._uniform_vec3v : this._uniform_vec3;
                                break;

                            case 35666:
                                i.fun = i.isArray ? this._uniform_vec4v : this._uniform_vec4;
                                break;

                            case 35678:
                                i.fun = this._uniform_sampler2D;
                                break;

                            case 35680:
                                i.fun = this._uniform_samplerCube;
                                break;

                            case 35676:
                                i.glfun = e.uniformMatrix4fv, i.fun = this._uniformMatrix4fv;
                                break;

                            case 35670:
                                i.fun = this._uniform1i;
                                break;

                            case 35674:
                            case 35675:
                            default:
                                throw new Error("compile shader err!");
                        }
                    }
                }, e.getUniform = function(t) {
                    return this._paramsMap[t];
                }, e._uniform1f = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e ? ($.mainContext.uniform1f(t.location, i[0] = e), 1) : 0;
                }, e._uniform1fv = function(t, e) {
                    if (e.length < 4) {
                        var i = t.uploadedValue;
                        return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? ($.mainContext.uniform1fv(t.location, e),
                            i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                    }
                    return $.mainContext.uniform1fv(t.location, e), 1;
                }, e._uniform_vec2 = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] ? ($.mainContext.uniform2f(t.location, i[0] = e[0], i[1] = e[1]),
                        1) : 0;
                }, e._uniform_vec2v = function(t, e) {
                    if (e.length < 2) {
                        var i = t.uploadedValue;
                        return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? ($.mainContext.uniform2fv(t.location, e),
                            i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3], 1) : 0;
                    }
                    return $.mainContext.uniform2fv(t.location, e), 1;
                }, e._uniform_vec3 = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? ($.mainContext.uniform3f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
                        1) : 0;
                }, e._uniform_vec3v = function(t, e) {
                    return $.mainContext.uniform3fv(t.location, e), 1;
                }, e._uniform_vec4 = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? ($.mainContext.uniform4f(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
                        1) : 0;
                }, e._uniform_vec4v = function(t, e) {
                    return $.mainContext.uniform4fv(t.location, e), 1;
                }, e._uniformMatrix2fv = function(t, e) {
                    return $.mainContext.uniformMatrix2fv(t.location, !1, e), 1;
                }, e._uniformMatrix3fv = function(t, e) {
                    return $.mainContext.uniformMatrix3fv(t.location, !1, e), 1;
                }, e._uniformMatrix4fv = function(t, e) {
                    return $.mainContext.uniformMatrix4fv(t.location, !1, e), 1;
                }, e._uniform1i = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e ? ($.mainContext.uniform1i(t.location, i[0] = e), 1) : 0;
                }, e._uniform1iv = function(t, e) {
                    return $.mainContext.uniform1iv(t.location, e), 1;
                }, e._uniform_ivec2 = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] ? ($.mainContext.uniform2i(t.location, i[0] = e[0], i[1] = e[1]),
                        1) : 0;
                }, e._uniform_ivec2v = function(t, e) {
                    return $.mainContext.uniform2iv(t.location, e), 1;
                }, e._uniform_vec3i = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] ? ($.mainContext.uniform3i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2]),
                        1) : 0;
                }, e._uniform_vec3vi = function(t, e) {
                    return $.mainContext.uniform3iv(t.location, e), 1;
                }, e._uniform_vec4i = function(t, e) {
                    var i = t.uploadedValue;
                    return i[0] !== e[0] || i[1] !== e[1] || i[2] !== e[2] || i[3] !== e[3] ? ($.mainContext.uniform4i(t.location, i[0] = e[0], i[1] = e[1], i[2] = e[2], i[3] = e[3]),
                        1) : 0;
                }, e._uniform_vec4vi = function(t, e) {
                    return $.mainContext.uniform4iv(t.location, e), 1;
                }, e._uniform_sampler2D = function(t, e) {
                    var i = $.mainContext,
                        r = t.uploadedValue;
                    return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex),
                        K.activeTexture(i, 33984 + this._curActTexIndex), K.bindTexture(i, 3553, e), this._curActTexIndex++,
                        1) : (K.activeTexture(i, 33984 + r[0]), K.bindTexture(i, 3553, e), 0);
                }, e._uniform_samplerCube = function(t, e) {
                    var i = $.mainContext,
                        r = t.uploadedValue;
                    return null == r[0] ? (r[0] = this._curActTexIndex, i.uniform1i(t.location, this._curActTexIndex),
                        K.activeTexture(i, 33984 + this._curActTexIndex), K.bindTexture(i, 34067, e), this._curActTexIndex++,
                        1) : (K.activeTexture(i, 33984 + r[0]), K.bindTexture(i, 34067, e), 0);
                }, e._noSetValue = function(t) {
                    console.log("no....:" + t.name);
                }, e.uploadOne = function(t, e) {
                    K.useProgram($.mainContext, this._program);
                    var i = this._paramsMap[t];
                    i.fun.call(this, i, e);
                }, e.uploadTexture2D = function(t) {
                    var e = K;
                    e._activeTextures[0] !== t && (e.bindTexture($.mainContext, e.TEXTURE_2D, t), e._activeTextures[0] = t);
                }, e.upload = function(t, e) {
                    It.activeShader = It.bindShader = this;
                    var i = $.mainContext;
                    K.useProgram(i, this._program), this._reCompile ? (e = this._params, this._reCompile = !1) : e = e || this._params;
                    for (var r, n, a = e.length, s = 0, h = 0; h < a; h++) null !== (n = t[(r = e[h]).name]) && (s += r.fun.call(this, r, n));
                    g.shaderCall += s;
                }, e.uploadArray = function(t, e, i) {
                    It.activeShader = this, It.bindShader = this, K.useProgram($.mainContext, this._program);
                    this._params;
                    for (var r, n, a = 0, s = e - 2; 0 <= s; s -= 2)(n = this._paramsMap[t[s]]) && null != (r = t[s + 1]) && (i && i[n.name] && i[n.name].bind(),
                        a += n.fun.call(this, n, r));
                    g.shaderCall += a;
                }, e.getParams = function() {
                    return this._params;
                }, e.setAttributesLocation = function(t) {
                    this._attribInfo = t;
                }, o.getShader = function(t) {
                    return o.sharders[t];
                }, o.create = function(t, e, i, r, n) {
                    return new o(t, e, i, r, n);
                }, o.withCompile = function(t, e, i, r) {
                    if (i && o.sharders[i]) return o.sharders[i];
                    var n = o._preCompileShader[2e-4 * t];
                    if (!n) throw new Error("withCompile shader err!" + t);
                    return n.createShader(e, i, r, null);
                }, o.withCompile2D = function(t, e, i, r, n, a) {
                    if (r && o.sharders[r]) return o.sharders[r];
                    var s = o._preCompileShader[2e-4 * t + e];
                    if (!s) throw new Error("withCompile shader err!" + t + " " + e);
                    return s.createShader(i, r, n, a);
                }, o.addInclude = function(t, e) {
                    et.addInclude(t, e);
                }, o.preCompile = function(t, e, i, r) {
                    o._preCompileShader[2e-4 * t] = new et(e, i, r);
                }, o.preCompile2D = function(t, e, i, r, n) {
                    o._preCompileShader[2e-4 * t + e] = new et(i, r, n);
                }, o._createShader = function(t, e, i) {
                    var r = t.createShader(i);
                    return t.shaderSource(r, e), t.compileShader(r), t.getShaderParameter(r, 35713) ? r : (console.log(t.getShaderInfoLog(r)),
                        null);
                }, o._count = 0, o._preCompileShader = {}, o.SHADERNAME2ID = 2e-4, o.sharders = new Array(32),
                s(o, ["nameKey", function() {
                    return this.nameKey = new b();
                }]), o;
        }(),
        Ft = function(t) {
            function s(t, e, i, r, n) {
                if (void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 1), void 0 === r && (r = !0),
                    void 0 === n && (n = !1), s.__super.call(this, i, r), this._glTextureType = 3553,
                    this._width = t, this._height = e, this._canRead = n, this._setWarpMode(10242, this._wrapModeU),
                    this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode),
                    this._setAnisotropy(this._anisoLevel), this._mipmap) {
                    this._mipmapCount = Math.max(Math.ceil(Math.log2(t)) + 1, Math.ceil(Math.log2(2)) + 1);
                    for (var a = 0; a < this._mipmapCount; a++) this._setPixels(null, a, Math.max(t >> a, 1), Math.max(e >> a, 1));
                    this._setGPUMemory(t * e * 4 * (1 + 1 / 3));
                } else this._mipmapCount = 1, this._setGPUMemory(t * e * 4);
            }
            l(s, "laya.webgl.resource.Texture2D", Ot);
            var e = s.prototype;
            return e._getFormatByteCount = function() {
                switch (this._format) {
                    case 0:
                        return 3;

                    case 1:
                        return 4;

                    case 2:
                        return 1;

                    default:
                        throw "Texture2D: unknown format.";
                }
            }, e._setPixels = function(t, e, i, r) {
                var n = ut.instance,
                    a = this._glTextureType,
                    s = this._getGLFormat();
                K.bindTexture(n, a, this._glTexture), 0 === this.format ? (n.pixelStorei(3317, 1),
                    n.texImage2D(a, e, s, i, r, 0, s, 5121, t), n.pixelStorei(3317, 4)) : n.texImage2D(a, e, s, i, r, 0, s, 5121, t);
            }, e._calcualatesCompressedDataSize = function(t, e, i) {
                switch (t) {
                    case 3:
                    case 5:
                        return (e + 3 >> 2) * (i + 3 >> 2) * 8;

                    case 4:
                        return (e + 3 >> 2) * (i + 3 >> 2) * 16;

                    case 11:
                    case 12:
                        return Math.floor((Math.max(e, 8) * Math.max(i, 8) * 4 + 7) / 8);

                    case 9:
                    case 10:
                        return Math.floor((Math.max(e, 16) * Math.max(i, 8) * 2 + 7) / 8);

                    default:
                        return 0;
                }
            }, e._pharseDDS = function(t) {
                var e = new Int32Array(t, 0, 31);
                if (542327876 != e[0]) throw "Invalid magic number in DDS header";
                if (!(4 & e[20])) throw "Unsupported format, must contain a FourCC code";
                var i = e[21];
                switch (this._format) {
                    case 3:
                        if (827611204 !== i) throw "the FourCC code is not same with texture format.";
                        break;

                    case 4:
                        if (894720068 !== i) throw "the FourCC code is not same with texture format.";
                        break;

                    default:
                        throw "unknown texture format.";
                }
                var r = 1;
                if (131072 & e[2]) {
                    if (r = Math.max(1, e[7]), !this._mipmap) throw "the mipmap is not same with Texture2D.";
                } else if (this._mipmap) throw "the mipmap is not same with Texture2D.";
                var n = e[4],
                    a = e[3];
                this._width = n, this._height = a;
                var s = e[1] + 4;
                this._upLoadCompressedTexImage2D(t, n, a, r, s, 0);
            }, e._pharseKTX = function(t) {
                var e = new Uint8Array(t, 0, 12);
                if (171 != e[0] || 75 != e[1] || 84 != e[2] || 88 != e[3] || 32 != e[4] || 49 != e[5] || 49 != e[6] || 187 != e[7] || 13 != e[8] || 10 != e[9] || 26 != e[10] || 10 != e[11]) throw "Invalid fileIdentifier in KTX header";
                var i = new Int32Array(e.buffer, e.length, 13);
                switch (i[4]) {
                    case K._compressedTextureEtc1.COMPRESSED_RGB_ETC1_WEBGL:
                        this._format = 5;
                        break;

                    default:
                        throw "unknown texture format.";
                }
                var r = i[11],
                    n = i[6],
                    a = i[7];
                this._width = n, this._height = a;
                var s = 64 + i[12];
                this._upLoadCompressedTexImage2D(t, n, a, r, s, 4);
            }, e._pharsePVR = function(t) {
                var e = new Int32Array(t, 0, 13);
                if (55727696 != e[0]) throw "Invalid magic number in PVR header";
                switch (e[2]) {
                    case 0:
                        this._format = 9;
                        break;

                    case 2:
                        this._format = 11;
                        break;

                    case 1:
                        this._format = 10;
                        break;

                    case 3:
                        this._format = 12;
                        break;

                    default:
                        throw "Texture2D:unknown PVR format.";
                }
                var i = e[11],
                    r = e[7],
                    n = e[6];
                this._width = r, this._height = n;
                var a = e[12] + 52;
                this._upLoadCompressedTexImage2D(t, r, n, i, a, 0);
            }, e._upLoadCompressedTexImage2D = function(t, e, i, r, n, a) {
                var s = ut.instance,
                    h = this._glTextureType;
                K.bindTexture(s, h, this._glTexture);
                for (var o = this._getGLFormat(), l = n, u = 0; u < r; u++) {
                    l += a;
                    var c = this._calcualatesCompressedDataSize(this._format, e, i),
                        _ = new Uint8Array(t, l, c);
                    s.compressedTexImage2D(h, u, o, e, i, 0, _), e = Math.max(e >> 1, 1), i = Math.max(i >> 1, 1),
                        l += c;
                }
                var f = l;
                this._setGPUMemory(f), this._readyed = !0, this._activeResource();
            }, e.loadImageSource = function(t, e) {
                void 0 === e && (e = !1);
                var i = t.width,
                    r = t.height;
                this._width = i, this._height = r, this._isPot(i) && this._isPot(r) || (this._mipmap = !1),
                    this._setWarpMode(10242, this._wrapModeU), this._setWarpMode(10243, this._wrapModeV),
                    this._setFilterMode(this._filterMode);
                var n = ut.instance;
                K.bindTexture(n, this._glTextureType, this._glTexture);
                var a = this._getGLFormat();
                C.isConchApp ? (t instanceof laya.resource.HTMLCanvas || t.setPremultiplyAlpha(e),
                        n.texImage2D(this._glTextureType, 0, 6408, 6408, 5121, t)) : (e && n.pixelStorei(37441, !0),
                        n.texImage2D(this._glTextureType, 0, a, a, 5121, t), e && n.pixelStorei(37441, !1)),
                    this._mipmap ? (n.generateMipmap(this._glTextureType), this._setGPUMemory(i * r * 4 * (1 + 1 / 3))) : this._setGPUMemory(i * r * 4),
                    this._canRead && (C.isConchApp ? this._pixels = new Uint8Array(t._nativeObj.getImageData(0, 0, i, r)) : (u.canvas.size(i, r),
                        u.canvas.clear(), u.context.drawImage(t, 0, 0, i, r), this._pixels = new Uint8Array(u.context.getImageData(0, 0, i, r).data.buffer))),
                    this._readyed = !0, this._activeResource();
            }, e.setPixels = function(t, e) {
                if (void 0 === e && (e = 0), !t) throw "Texture2D:pixels can't be null.";
                var i = Math.max(this._width >> e, 1),
                    r = Math.max(this._height >> e, 1),
                    n = i * r * this._getFormatByteCount();
                if (t.length < n) throw "Texture2D:pixels length should at least " + n + ".";
                this._setPixels(t, e, i, r), this._canRead && (this._pixels = t), this._readyed = !0,
                    this._activeResource();
            }, e.setSubPixels = function(t, e, i, r, n, a) {
                if (void 0 === a && (a = 0), !n) throw "Texture2D:pixels can't be null.";
                var s = ut.instance,
                    h = this._glTextureType;
                K.bindTexture(s, h, this._glTexture);
                var o = this._getGLFormat();
                0 === this._format ? (s.pixelStorei(3317, 1), s.texSubImage2D(h, a, t, e, i, r, o, 5121, n),
                        s.pixelStorei(3317, 4)) : s.texSubImage2D(h, a, t, e, i, r, o, 5121, n), this._readyed = !0,
                    this._activeResource();
            }, e.setCompressData = function(t) {
                switch (this._format) {
                    case 3:
                    case 4:
                        this._pharseDDS(t);
                        break;

                    case 5:
                        this._pharseKTX(t);
                        break;

                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        this._pharsePVR(t);
                        break;

                    default:
                        throw "Texture2D:unkonwn format.";
                }
            }, e._recoverResource = function() {}, e.getPixels = function() {
                if (this._canRead) return this._pixels;
                throw new Error("Texture2D: must set texture canRead is true.");
            }, h(0, e, "mipmapCount", function() {
                return this._mipmapCount;
            }), h(0, e, "defaulteTexture", function() {
                return laya.webgl.resource.Texture2D.grayTexture;
            }), s.__init__ = function() {
                var t = new Uint8Array(3);
                t[0] = 128, t[1] = 128, t[2] = 128, (s.grayTexture = new s(1, 1, 0, !1, !1)).setPixels(t),
                    s.grayTexture.lock = !0;
            }, s._parse = function(t, e, i) {
                var r = i ? new s(i[0], i[1], i[2], i[3], i[4]) : new s(0, 0);
                switch (e && (r.wrapModeU = e.wrapModeU, r.wrapModeV = e.wrapModeV, r.filterMode = e.filterMode,
                    r.anisoLevel = e.anisoLevel), r._format) {
                    case 0:
                    case 1:
                        r.loadImageSource(t);
                        break;

                    case 3:
                    case 4:
                    case 5:
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        r.setCompressData(t);
                        break;

                    default:
                        throw "Texture2D:unkonwn format.";
                }
                return r;
            }, s.load = function(t, e) {
                T.loader.create(t, e, null, "TEXTURE2D");
            }, s.grayTexture = null, s;
        }(),
        Nt = function(t) {
            function n(t, e, i, r) {
                void(this._mgrKey = 0) === i && (i = 0), void 0 === r && (r = 0), n.__super.call(this, i, !1),
                    this._glTextureType = 3553, this._width = t, this._height = e, this._depthStencilFormat = r,
                    this._create(t, e), this.lock = !0;
            }
            l(n, "laya.webgl.resource.RenderTexture2D", Ot);
            var e = n.prototype;
            return e.getIsReady = function() {
                return !0;
            }, e._create = function(t, e) {
                var i = ut.instance;
                this._frameBuffer = i.createFramebuffer(), K.bindTexture(i, this._glTextureType, this._glTexture);
                var r = this._getGLFormat();
                if (i.texImage2D(this._glTextureType, 0, r, t, e, 0, r, 5121, null), this._setGPUMemory(t * e * 4),
                    i.bindFramebuffer(36160, this._frameBuffer), i.framebufferTexture2D(36160, 36064, 3553, this._glTexture, 0),
                    3 !== this._depthStencilFormat) switch (this._depthStencilBuffer = i.createRenderbuffer(),
                    i.bindRenderbuffer(36161, this._depthStencilBuffer), this._depthStencilFormat) {
                    case 0:
                        i.renderbufferStorage(36161, 33189, t, e), i.framebufferRenderbuffer(36160, 36096, 36161, this._depthStencilBuffer);
                        break;

                    case 1:
                        i.renderbufferStorage(36161, 36168, t, e), i.framebufferRenderbuffer(36160, 36128, 36161, this._depthStencilBuffer);
                        break;

                    case 2:
                        i.renderbufferStorage(36161, 34041, t, e), i.framebufferRenderbuffer(36160, 33306, 36161, this._depthStencilBuffer);
                        break;

                    default:
                        console.log("RenderTexture: unkonw depth format.");
                }
                i.bindFramebuffer(36160, null), i.bindRenderbuffer(36161, null), this._setWarpMode(10242, this._wrapModeU),
                    this._setWarpMode(10243, this._wrapModeV), this._setFilterMode(this._filterMode),
                    this._setAnisotropy(this._anisoLevel), this._readyed = !0, this._activeResource();
            }, e.generateMipmap = function() {
                this._isPot(this.width) && this._isPot(this.height) ? (this._mipmap = !0, ut.instance.generateMipmap(this._glTextureType),
                    this._setFilterMode(this._filterMode), this._setGPUMemory(this.width * this.height * 4 * (1 + 1 / 3))) : (this._mipmap = !1,
                    this._setGPUMemory(this.width * this.height * 4));
            }, e.start = function() {
                var t = ut.instance;
                ut.instance.bindFramebuffer(36160, this._frameBuffer), this._lastRT = n._currentActive,
                    (n._currentActive = this)._readyed = !0, t.viewport(0, 0, this._width, this._height),
                    this._lastWidth = L.width, this._lastHeight = L.height, L.width = this._width, L.height = this._height,
                    It.activeShader = null;
            }, e.end = function() {
                ut.instance.bindFramebuffer(36160, null), n._currentActive = null, this._readyed = !0;
            }, e.restore = function() {
                var t = ut.instance;
                this._lastRT != n._currentActive && (ut.instance.bindFramebuffer(36160, this._lastRT ? this._lastRT._frameBuffer : null),
                        n._currentActive = this._lastRT), this._readyed = !0, t.viewport(0, 0, this._lastWidth, this._lastHeight),
                    L.width = this._lastWidth, L.height = this._lastHeight, It.activeShader = null;
            }, e.clear = function(t, e, i, r) {
                void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === r && (r = 1);
                var n = ut.instance;
                n.clearColor(t, e, i, r);
                var a = 16384;
                switch (this._depthStencilFormat) {
                    case 33189:
                        a |= 256;
                        break;

                    case 36168:
                        a |= 1024;
                        break;

                    case 34041:
                        a |= 256, a |= 1024;
                }
                n.clear(a);
            }, e.getData = function(t, e, i, r) {
                if (C.isConchApp && 2 == conchConfig.threadMode) throw "native 2 thread mode use getDataAsync";
                var n = ut.instance;
                if (n.bindFramebuffer(36160, this._frameBuffer), !(36053 === n.checkFramebufferStatus(36160))) return n.bindFramebuffer(36160, null),
                    null;
                var a = new Uint8Array(this._width * this._height * 4),
                    s = this._getGLFormat();
                return n.readPixels(t, e, i, r, s, 5121, a), n.bindFramebuffer(36160, null), a;
            }, e.getDataAsync = function(t, e, i, r, n) {
                var a = ut.instance;
                a.bindFramebuffer(36160, this._frameBuffer), a.readPixelsAsync(t, e, i, r, 6408, 5121, function(t) {
                    n(new Uint8Array(t));
                }), a.bindFramebuffer(36160, null);
            }, e.recycle = function() {}, e._disposeResource = function() {
                if (this._frameBuffer) {
                    var t = ut.instance;
                    t.deleteTexture(this._glTexture), t.deleteFramebuffer(this._frameBuffer), t.deleteRenderbuffer(this._depthStencilBuffer),
                        this._glTexture = null, this._frameBuffer = null, this._depthStencilBuffer = null,
                        this._setGPUMemory(0);
                }
            }, h(0, e, "depthStencilFormat", function() {
                return this._depthStencilFormat;
            }), h(0, e, "defaulteTexture", function() {
                return Ft.grayTexture;
            }), h(0, e, "sourceWidth", function() {
                return this._width;
            }), h(0, e, "sourceHeight", function() {
                return this._height;
            }), h(0, e, "offsetX", function() {
                return 0;
            }), h(0, e, "offsetY", function() {
                return 0;
            }), h(1, n, "currentActive", function() {
                return n._currentActive;
            }, laya.webgl.resource.BaseTexture._$SET_currentActive), n.pushRT = function() {
                n.rtStack.push({
                    rt: n._currentActive,
                    w: L.width,
                    h: L.height
                });
            }, n.popRT = function() {
                var t = ut.instance,
                    e = n.rtStack.pop();
                e && (n._currentActive != e.rt && (ut.instance.bindFramebuffer(36160, e.rt ? e.rt._frameBuffer : null),
                    n._currentActive = e.rt), t.viewport(0, 0, e.w, e.h), L.width = e.w, L.height = e.h);
            }, n._currentActive = null, n.rtStack = [], s(n, ["defuv", function() {
                return this.defuv = [0, 0, 1, 0, 1, 1, 0, 1];
            }, "flipyuv", function() {
                return this.flipyuv = [0, 1, 1, 1, 1, 0, 0, 0];
            }]), n;
        }(),
        Ut = function(t) {
            function a(t, e, i, r, n) {
                this._params2dQuick2 = null, this._shaderValueWidth = 0, this._shaderValueHeight = 0,
                    a.__super.call(this, t, e, i, r, n);
            }
            l(a, "laya.webgl.shader.d2.Shader2X", t);
            var e = a.prototype;
            return e._disposeResource = function() {
                t.prototype._disposeResource.call(this), this._params2dQuick2 = null;
            }, e.upload2dQuick2 = function(t) {
                this.upload(t, this._params2dQuick2 || this._make2dQuick2());
            }, e._make2dQuick2 = function() {
                if (!this._params2dQuick2) {
                    this._params2dQuick2 = [];
                    for (var t, e = this._params, i = 0, r = e.length; i < r; i++) "size" !== (t = e[i]).name && this._params2dQuick2.push(t);
                }
                return this._params2dQuick2;
            }, a.create = function(t, e, i, r, n) {
                return new a(t, e, i, r, n);
            }, a;
        }(Lt);
    T.__init([_t, mt]);
}(window, document, Laya);