!(function () {
	'use strict';
	var t;
	!(function (t) {
		class e {
			constructor() {}
		}
		(e.stageSize = [1080, 1920]),
			(e.grpType = [1, 2, 3, 4, 5, 6, 7]),
			(e.minWight = 66),
			(e.radius = 500),
			(e.endScale = 1),
			(t.GameConfig = e);
	})(t || (t = {}));
	var e,
		a,
		s = t.GameConfig,
		i = Laya.ClassUtils.regClass;
	!(function (t) {
		!(function (t) {
			class e extends Laya.Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren(), this.loadScene('view/GameResust');
				}
			}
			(t.GameResustUI = e), i('ui.view.GameResustUI', e);
			class a extends Laya.Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren(), this.loadScene('view/Home');
				}
			}
			(t.HomeUI = a), i('ui.view.HomeUI', a);
			class s extends Laya.Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren(), this.loadScene('view/MGame');
				}
			}
			(t.MGameUI = s), i('ui.view.MGameUI', s);
			class h extends Laya.Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren(), this.loadScene('view/SelectLevel');
				}
			}
			(t.SelectLevelUI = h), i('ui.view.SelectLevelUI', h);
			class o extends Laya.Scene {
				constructor() {
					super();
				}
				createChildren() {
					super.createChildren(), this.loadScene('view/TopBtn');
				}
			}
			(t.TopBtnUI = o), i('ui.view.TopBtnUI', o);
		})(t.view || (t.view = {}));
	})(e || (e = {})),
		(function (t) {
			class s extends e.view.TopBtnUI {
				constructor() {
					super(),
						(this.viewCreated = !1),
						this.once('onViewCreated', this, this.onViewCreated),
						this.on(Laya.Event.ADDED, this, this.onViewCreated);
				}
				static get inst() {
					return s._inst || (s._inst = new s()), s._inst;
				}
				onViewCreated() {
					!this.viewCreated && this.btn_home;
				}
				hideView() {
					(this.visible = !1),
						(this.btn_home.visible = this.btn_skip.visible = !0),
						this.btn_home.offAll(Laya.Event.CLICK),
						this.btn_skip.offAll(Laya.Event.CLICK);
				}
			}
			(a || (a = {})).TopBtn = s;
		})();
	var h,
		o = a.TopBtn;
	!(function (t) {
		class e extends Laya.Box {
			constructor() {
				super(),
					e._inst || (e._inst = this),
					(this.bgImg = new Laya.Image()),
					(this.bgImg.skin = ''),
					this.addChild(this.bgImg),
					(this.gameLayer = new Laya.Box()),
					this.addChild(this.gameLayer),
					(this.panelLayer = new Laya.Box()),
					this.addChild(this.panelLayer),
					(this.dialogLayer = new Laya.Box()),
					this.addChild(this.dialogLayer),
					(this.popLayer = new Laya.Box()),
					this.addChild(this.popLayer),
					(this.maskLayer = new Laya.Sprite()),
					this.maskLayer.graphics.drawRect(
						0,
						0,
						s.stageSize[0],
						s.stageSize[1],
						'#000000'
					),
					(this.maskLayer.alpha = 0.5),
					(this.disabledLayer = new Laya.Sprite()),
					this.disabledLayer.on(
						Laya.Event.CLICK,
						this,
						this.nullEvent
					),
					(this.gameLayer.mouseThrough =
						this.panelLayer.mouseThrough =
						this.dialogLayer.mouseThrough =
						this.popLayer.mouseThrough =
							!0),
					(this.disabledLayer.width =
						this.bgImg.width =
						this.gameLayer.width =
						this.panelLayer.width =
						this.dialogLayer.width =
						this.popLayer.width =
						this.maskLayer.width =
						this.width =
							s.stageSize[0]),
					(this.disabledLayer.height =
						this.bgImg.height =
						this.gameLayer.height =
						this.panelLayer.height =
						this.dialogLayer.height =
						this.popLayer.height =
						this.maskLayer.height =
						this.height =
							s.stageSize[1]),
					(this.yad = new Laya.Image()),
					(this.yad.skin = 'common/bot_logo.png'),
					this.addChild(this.yad),
					(this.yad.centerX = 0),
					(this.yad.bottom = 100),
					(this.yad.zOrder = 1e3),
					this.addChild(o.inst),
					o.inst.pos(0, 20),
					(o.inst.visible = !1);
			}
			static get inst() {
				return e._inst || (e._inst = new e()), e._inst;
			}
			nullEvent(t) {
				t.stopPropagation();
			}
			maskClick(t = null, e = null) {
				t && t.runWith(e);
			}
		}
		(h || (h = {})).GameUI = e;
	})();
	var n,
		l = h.GameUI;
	!(function (t) {
		class e {
			constructor() {}
			static get pData() {
				if (!e._pData) {
					var t = Laya.LocalStorage.getItem(
						'Layer-Match-zs-20200709'
					);
					t || (t = JSON.stringify({ Level: 0, Music: !1 })),
						(e._pData = JSON.parse(t));
				}
				return e._pData;
			}
			static savePData() {
				var t = JSON.stringify(e.pData);
				Laya.LocalStorage.setItem('Layer-Match-zs-20200709', t);
			}
			static get pLevel() {
				return e.pData.Level;
			}
			static set pLevel(t) {
				(e.pData.Level = t), e.savePData();
			}
			static get pMusic() {
				return e.pData.Music;
			}
			static set pMusic(t) {
				(e.pData.Music = t), e.savePData();
			}
			static judeNumArrInArr(t, e) {
				if (!t || !e) return -1;
				for (let a = 0, s = t.length; a < s; a++)
					if (t[a][0] == e[0] && t[a][1] == e[1]) return a;
				return -1;
			}
			static get tableData() {
				if (!e._tableData) {
					e._tableData = [];
					for (let t = 1; t < 101; t++) {
						let a = Laya.loader.getRes(
							'res/level/level' + t + '.json'
						);
						e._tableData.push(a),
							Laya.loader.clearRes(
								'res/level/level' + t + '.json'
							);
					}
				}
				return e._tableData;
			}
		}
		(e.gameData = {}), (t.GameLogic = e);
	})(n || (n = {}));
	var r,
		c = n.GameLogic;
	class d extends Laya.Script {
		constructor() {
			super();
		}
		onMouseDown() {
			(this.ownerStatic = 1), this.owner.scale(0.95, 0.95);
		}
		onMouseOut() {
			(this.ownerStatic = 0), this.owner.scale(1, 1);
		}
		onMouseUp() {
			1 == this.ownerStatic && cc.AudioEngine.play('audio/btn_scond.mp3'),
				(this.ownerStatic = 0),
				this.owner.scale(1, 1);
		}
	}
	class p {
		constructor() {}
		static init() {
			(0, Laya.ClassUtils.regClass)('script/Btn_Slace.ts', d);
		}
	}
	(p.width = 1080),
		(p.height = 1920),
		(p.scaleMode = 'showall'),
		(p.screenMode = 'none'),
		(p.alignV = 'middle'),
		(p.alignH = 'center'),
		(p.startScene = 'view/GameResust.scene'),
		(p.sceneRoot = ''),
		(p.debug = !1),
		(p.stat = !1),
		(p.physicsDebug = !1),
		(p.exportSceneToJson = !0),
		p.init();
	class w extends Laya.Sprite {
		constructor() {
			super(...arguments), (this.slotData = {}), (this._cmds = []);
		}
		_onLoop(t) {
			this._cmds.forEach((e) => {
				switch (e.cmdID) {
					case Laya.DrawPathCmd.ID: {
						const n = e.paths;
						(t.globalCompositeOperation = 'xor'),
							(t.fillStyle = '#00000');
						var a = this.x,
							s = this.y;
						t.beginPath();
						for (var i = 0, h = n.length; i < h; i++) {
							var o = n[i];
							switch (o[0]) {
								case 'moveTo':
									t.moveTo(a + o[1], s + o[2]);
									break;
								case 'lineTo':
									t.lineTo(a + o[1], s + o[2]);
									break;
								case 'arcTo':
									t.arcTo(
										a + o[1],
										s + o[2],
										a + o[3],
										s + o[4],
										o[5]
									);
									break;
								case 'arc':
									t.arc(
										a + o[1],
										s + o[2],
										o[3],
										o[4],
										o[5],
										!0
									);
									break;
								case 'closePath':
									t.closePath();
							}
						}
						t.fill();
					}
				}
			});
		}
		render() {}
		drawPath(t) {
			const e = Laya.DrawPathCmd.create(0, 0, t, null, null);
			this._cmds.push(e);
		}
		drawPathOne(t) {
			const e = Laya.DrawPathCmd.create(0, 0, t, null, null);
			(this._cmds = [e]),
				this.grap || (this.grap = new Laya.Graphics()),
				this.grap.clear();
			var a = 0,
				s = 0,
				i = e.paths;
			if ('arc' == i[0][0]) {
				var h = i[0];
				this.grap.drawCircle(h[1], h[2], h[3], '#ffffff'),
					(s = a = 2 * h[3]);
			} else {
				for (var o = [], n = 0, l = i.length; n < l; n++) {
					switch ((h = i[n])[0]) {
						case 'moveTo':
							a < h[1] && (a = h[1]),
								s < h[2] && (s = h[2]),
								o.push(h[1]),
								o.push(h[2]);
							break;
						case 'lineTo':
							o.push(h[1]),
								o.push(h[2]),
								a < h[1] && (a = h[1]),
								s < h[2] && (s = h[2]);
					}
				}
				console.log(o), this.grap.drawPoly(0, 0, o, '#ffffff');
			}
			(this.width = a), (this.height = s);
			var r = new Laya.HitArea();
			(r.hit = this.grap), (this.hitArea = r);
		}
	}
	class g extends Laya.UIComponent {
		constructor() {
			super(),
				(this.canvas = Laya.Browser.createElement('canvas')),
				(this.ctx = this.canvas.getContext('2d')),
				Laya.Browser.onMobile
					? (this.ratio = window.devicePixelRatio)
					: (this.ratio = 8 * window.devicePixelRatio),
				(this._width = this._height = 200),
				(this.texture = new Laya.Texture()),
				(this.texture.bitmap = new Laya.Texture2D());
		}
		onEnable() {
			Laya.timer.frameLoop(1, this, this._onLoop);
		}
		onDisable() {
			Laya.timer.clear(this, this._onLoop);
		}
		_onLoop() {
			this.ctx.clearRect(0, 0, this.width, this.height);
			for (let t = 0; t < this.numChildren; t++) {
				const e = this.getChildAt(t);
				e && e instanceof w && e._onLoop(this.ctx);
			}
			this.texture.bitmap.loadImageSource(this.canvas);
		}
		set width(t) {
			(super.width = t), (this.canvas.width = t * this.ratio);
		}
		get width() {
			return super.width;
		}
		set height(t) {
			(super.height = t),
				(this.canvas.height = t * this.ratio),
				this.ctx.scale(this.ratio, this.ratio);
		}
		get height() {
			return super.height;
		}
		set x(t) {
			super.x = t;
		}
		get x() {
			return super.x;
		}
		set y(t) {
			super.y = t;
		}
		get y() {
			return super.y;
		}
	}
	!(function (t) {
		class a extends e.view.GameResustUI {
			constructor() {
				super(),
					(this.viewCreated = !1),
					(this.visible = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				!this.viewCreated &&
					this.btn_home &&
					(this.btn_home.on(Laya.Event.CLICK, this, this.showHome),
					this.btn_next.on(Laya.Event.CLICK, this, this.nextLevel),
					(this.viewCreated = !0));
			}
			nextLevel() {
				cc.Application.showInterstitial(() => {
					c.gameData.level++, this.hideView(), L.inst.setMap();
				});
			}
			showHome() {
				cc.Application.showInterstitial(() => {
					l.inst.panelLayer.addChild(_.inst),
						_.inst.showView(),
						L.inst.hideView(),
						this.hideView();
				});
			}
			showView() {
				this.viewCreated &&
					this.btn_home &&
					!this.visible &&
					((this.visible = !0), this.refershUI());
			}
			refershUI() {
				c.tableData[c.pLevel]
					? ((this.btn_home.x = 271), (this.btn_next.visible = !0))
					: ((this.btn_home.x = 456), (this.btn_next.visible = !1));
			}
			hideView() {
				(this.visible = !1),
					this.removeSelf(),
					o.inst.hideView(),
					l.inst.maskLayer.removeSelf();
			}
		}
		(r || (r = {})).GameResust = a;
	})();
	var v,
		y = r.GameResust;
	!(function (t) {
		class a extends e.view.MGameUI {
			constructor() {
				super(),
					(this.viewCreated = !1),
					(this._gameData = {}),
					(this.visible = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				!this.viewCreated &&
					this.spr_playRect &&
					((this.setEndRect = new g()),
					(this.setEndRect.width = this.spr_endShow.width),
					(this.setEndRect.height = this.spr_endShow.height),
					this.setEndRect.pos(0, 0),
					this.spr_endShow.addChild(this.setEndRect),
					(this.lab_level.text = ''),
					(this.palyRect = new g()),
					(this.palyRect.width = this.spr_playRect.width),
					(this.palyRect.height = this.spr_playRect.height),
					this.palyRect.pos(0, 0),
					this.spr_playRect.addChild(this.palyRect),
					(this.viewCreated = !0),
					this.showView());
			}
			skipLevel() {
				cc.Application.showReward(() => {
					c.gameData.level == c.pLevel + 1 && c.pLevel++,
						this.showGameResust();
				});
			}
			showHome() {
				cc.Application.showInterstitial(() => {
					l.inst.panelLayer.addChild(_.inst),
						_.inst.showView(),
						this.hideView();
				});
			}
			showView() {
				this.viewCreated &&
					this.spr_playRect &&
					!this.visible &&
					((this.visible = !0),
					(this.lab_level.text = '1'),
					this.setMap());
			}
			setMap() {
				o.inst.hideView(),
					(o.inst.visible = !0),
					o.inst.btn_home.on(Laya.Event.CLICK, this, this.showHome),
					o.inst.btn_skip.on(Laya.Event.CLICK, this, this.skipLevel),
					(this.lab_level.text = 'LEVEL ' + c.gameData.level),
					this.recoverEndedSlot(),
					this.recoverStartSlot();
				let t = c.tableData[c.gameData.level - 1];
				(this._gameData.startSlot = t.startSlot),
					(this._gameData.endSlot = t.endSlot),
					this.createStartAndEndSlot(0),
					this.createStartAndEndSlot(1);
			}
			setDrag(t) {
				(t.target.slotData.startPos = [t.target.x, t.target.y]),
					(t.target.zOrder = this._gameData.startedSlot.length + 2),
					this._gameData.startedSlot.sort(
						(t, e) => t.zOrder - e.zOrder
					);
				for (
					var e = 0, a = this._gameData.startedSlot.length;
					e < a;
					e++
				)
					this._gameData.startedSlot[e].zOrder = e + 1;
				t.target.startDrag(
					new Laya.Rectangle(
						0,
						0,
						this.spr_playRect.width - t.target.slotData.wh[0],
						this.spr_playRect.height - t.target.slotData.wh[1]
					)
				);
				let s = { target: t.target };
				this.spr_playRect.once(
					Laya.Event.MOUSE_OUT,
					this,
					this.stoDrag,
					[s]
				);
			}
			stoDrag(t) {
				t.target.off(Laya.Event.MOUSE_OUT, this, this.stoDrag),
					l.inst.addChild(l.inst.disabledLayer),
					t.target.stopDrag(),
					this.stopMove(t.target);
			}
			stopMove(t) {
				let e,
					a = [],
					i = [
						parseInt(t.x / s.minWight + '') * s.minWight,
						parseInt(t.y / s.minWight + '') * s.minWight,
					],
					h = [
						i,
						[i[0] + s.minWight, i[1]],
						[i[0], i[1] + s.minWight],
						[i[0] + s.minWight, i[1] + s.minWight],
					],
					o = this.spr_playRect.width / 2;
				for (let i = 0; i < 4; i++)
					if (
						Math.pow(
							Math.pow(o - h[i][0], 2) + Math.pow(o - h[i][1], 2),
							0.5
						) < s.radius
					) {
						let s = Math.pow(
							Math.pow(t.x - h[i][0], 2) +
								Math.pow(t.y - h[i][1], 2),
							0.5
						);
						((!e && 0 != e) || e > s) &&
							this.canMove(t, h[i]) &&
							((e = s), (a = h[i]));
					}
				a.length || (a = t.slotData.startPos),
					console.log(a[0], a[1]),
					(t.slotData.pos = [a[0], a[1]]),
					Laya.Tween.to(
						t,
						{ x: a[0], y: a[1] },
						200,
						null,
						Laya.Handler.create(this, this.gameEnd),
						0,
						!0
					);
			}
			gameEnd() {
				let t = [],
					e = [];
				for (
					let e = 0, a = this._gameData.endedSlot.length;
					e < a;
					e++
				) {
					t.push([]);
					let a = this._gameData.endedSlot[e],
						i = a.slotData;
					for (
						let h = 0, o = i.points.length;
						h < o && 'closePath' != i.points[h][0];
						h++
					)
						'arc' == i.points[h][0]
							? (t[e] = [
									Math.floor(a.x / s.endScale),
									Math.floor(a.y / s.endScale),
									Math.floor(
										(a.x + 2 * i.points[h][3]) / s.endScale
									),
									Math.floor(a.y / s.endScale),
									Math.floor(
										(a.x + 2 * i.points[h][3]) / s.endScale
									),
									Math.floor(
										(a.y + 2 * i.points[h][3]) / s.endScale
									),
									Math.floor(a.x / s.endScale),
									Math.floor(
										(a.y + 2 * i.points[h][3]) / s.endScale
									),
							  ])
							: (t[e].push(
									Math.floor(
										(a.x + i.points[h][1]) / s.endScale
									)
							  ),
							  t[e].push(
									Math.floor(
										(a.y + i.points[h][2]) / s.endScale
									)
							  ));
				}
				for (
					let t = 0, a = this._gameData.startedSlot.length;
					t < a;
					t++
				) {
					e.push([]);
					let a = this._gameData.startedSlot[t],
						s = a.slotData;
					for (
						let i = 0, h = s.points.length;
						i < h && 'closePath' != s.points[i][0];
						i++
					)
						'arc' == s.points[i][0]
							? (e[t] = [
									a.x,
									a.y,
									a.x + 2 * s.points[i][3],
									a.y,
									a.x + 2 * s.points[i][3],
									a.y + 2 * s.points[i][3],
									a.x,
									a.y + 2 * s.points[i][3],
							  ])
							: (e[t].push(a.x + s.points[i][1]),
							  e[t].push(a.y + s.points[i][2]));
				}
				let a = cc.helper.xor(t),
					i = cc.helper.xor(e);
				JSON.stringify(a) === JSON.stringify(i) &&
					(c.gameData.level == c.pLevel + 1 && c.pLevel++,
					this.showGameResust()),
					l.inst.disabledLayer.removeSelf();
			}
			showGameResust() {
				o.inst.hideView(),
					l.inst.dialogLayer.addChild(l.inst.maskLayer),
					l.inst.dialogLayer.addChild(y.inst),
					y.inst.showView();
			}
			canMove(t, e) {
				let a = this.spr_playRect.width / 2;
				if ('arc' == t.slotData.points[0][0]) {
					if (
						(t.x,
						t.slotData.points[0][3],
						t.y,
						t.slotData.points[0][3],
						Math.pow(
							Math.pow(e[0] + t.slotData.points[0][3] - a, 2) +
								Math.pow(e[1] + t.slotData.points[0][3] - a, 2),
							0.5
						) >
							s.radius - t.slotData.points[0][3])
					)
						return !1;
				} else
					for (let i = 0, h = t.slotData.points.length; i < h; i++)
						if (
							Math.pow(
								Math.pow(
									e[0] + t.slotData.points[i][1] - a,
									2
								) +
									Math.pow(
										e[1] + t.slotData.points[i][2] - a,
										2
									),
								0.5
							) > s.radius
						)
							return !1;
				return !0;
			}
			createStartAndEndSlot(t = 0) {
				let e, a, i, h, o;
				t
					? (this.recoverEndedSlot(),
					  (e = this.setEndRect),
					  (a = this._gameData.endSlot),
					  (i = this._gameData.endedSlot),
					  (h = s.endScale),
					  (o = !1))
					: (this.recoverStartSlot(),
					  (e = this.palyRect),
					  (a = this._gameData.startSlot),
					  (i = this._gameData.startedSlot),
					  (h = 1),
					  (o = !0));
				for (let t in a) {
					let r = a[t],
						c = Laya.Pool.getItemByClass('MathShape', w);
					var n = (c.slotData.grpType = r.grpType);
					(c.slotData.rotate = r.rotate),
						(c.slotData.scale = r.scale),
						(c.slotData.pos = r.pos),
						c.pos(r.pos[0] * h, r.pos[1] * h);
					var l = s.minWight * r.scale * h;
					if (
						(1 == n
							? (c.slotData.points = [
									['moveTo', 0, 0],
									['lineTo', l, 0],
									['lineTo', l, l],
									['lineTo', 0, l],
									['closePath'],
							  ])
							: 2 == n
							? (c.slotData.points = [
									['moveTo', l, 0],
									['lineTo', 2 * l, l],
									['lineTo', l, 2 * l],
									['lineTo', 0, l],
									['closePath'],
							  ])
							: 3 == n
							? (c.slotData.points = [
									['moveTo', 0, 0],
									['lineTo', l, 0],
									['lineTo', 0, l],
									['closePath'],
							  ])
							: 4 == n
							? (c.slotData.points = [
									['moveTo', l, 0],
									['lineTo', 2 * l, l],
									['lineTo', 0, l],
									['closePath'],
							  ])
							: 5 == n
							? (c.slotData.points = [
									['moveTo', 0, 0],
									['lineTo', l, 0],
									['lineTo', 2 * l, l],
									['lineTo', 0, l],
									['closePath'],
							  ])
							: 6 == n
							? (c.slotData.points = [
									['moveTo', 0, 0],
									['lineTo', 2 * l, 2 * l],
									['lineTo', l, 3 * l],
									['lineTo', 0, 2 * l],
									['closePath'],
							  ])
							: 7 == n &&
							  ((c.slotData.points = [
									['arc', l, l, l, 0, 2 * Math.PI],
									['closePath'],
							  ]),
							  (r.wh = [2 * l, 2 * l])),
						3 == n || 4 == n || 5 == n || 6 == n)
					) {
						let t = 0,
							e = 0,
							a = 1,
							s = 1;
						for (let i = 0; i < c.slotData.rotate / 90; i++) {
							(t = 0), (e = 0), (a = -1), (s = 1);
							for (
								let i = 0, h = c.slotData.points.length;
								i < h;
								i++
							) {
								let h = c.slotData.points[i];
								if ('closePath' == h[0]) break;
								let o = h[1];
								(h[1] = h[2] * a),
									h[1] < t && (t = h[1]),
									(h[2] = o * s),
									h[2] < e && (e = h[2]);
							}
						}
						for (
							let a = 0, s = c.slotData.points.length;
							a < s;
							a++
						) {
							let s = c.slotData.points[a];
							(s[1] += Math.abs(t)), (s[2] += Math.abs(e));
						}
					}
					i.push(c),
						(c.slotData.wh = r.wh),
						(c.slotData.judeSign = r.judeSign),
						c.drawPathOne(c.slotData.points),
						(c.mouseEnabled = o),
						o
							? ((c.zOrder = i.length + 1),
							  c.on(Laya.Event.MOUSE_DOWN, this, this.setDrag),
							  c.on(Laya.Event.MOUSE_UP, this, this.stoDrag))
							: (c.off(Laya.Event.MOUSE_DOWN, this, this.setDrag),
							  c.off(Laya.Event.MOUSE_UP, this, this.stoDrag)),
						e.addChild(c);
				}
			}
			recoverEndedSlot() {
				this._gameData.endedSlot || (this._gameData.endedSlot = []);
				for (
					var t = 0, e = this._gameData.endedSlot.length;
					t < e;
					t++
				) {
					let t = this._gameData.endedSlot.shift();
					t.removeSelf(), Laya.Pool.recover('MathShape', t);
				}
				this._gameData.endedSlot = [];
			}
			recoverStartSlot() {
				this._gameData.startedSlot || (this._gameData.startedSlot = []);
				for (
					var t = 0, e = this._gameData.startedSlot.length;
					t < e;
					t++
				) {
					let t = this._gameData.startedSlot.shift();
					t.removeSelf(), Laya.Pool.recover('MathShape', t);
				}
				this._gameData.startedSlot = [];
			}
			hideView() {
				this.recoverEndedSlot(),
					this.recoverStartSlot(),
					o.inst.hideView(),
					(this.visible = !1),
					(this._gameData = {}),
					this.removeSelf();
			}
		}
		(v || (v = {})).MGame = a;
	})();
	var m,
		L = v.MGame;
	!(function (t) {
		class a extends e.view.SelectLevelUI {
			constructor() {
				super(),
					(this.viewCreated = !1),
					(this.visible = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				!this.viewCreated &&
					this.list_level &&
					((this.list_level.renderHandler = Laya.Handler.create(
						this,
						this.listHandler,
						null,
						!1
					)),
					(this.list_level.vScrollBarSkin = ''),
					(this.viewCreated = !0),
					this.showView());
			}
			showMGame() {
				console.log('app', cc.Application.canAds),
					cc.Application.showInterstitial(() => {
						this.hideView(),
							l.inst.panelLayer.addChild(L.inst),
							L.inst.showView();
					});
			}
			showHome() {
				cc.Application.showInterstitial(() => {
					l.inst.panelLayer.addChild(_.inst),
						_.inst.showView(),
						this.hideView();
				});
			}
			showView() {
				this.viewCreated &&
					this.list_level &&
					!this.visible &&
					((this.visible = !0),
					(o.inst.visible = !0),
					(o.inst.btn_skip.visible = !1),
					o.inst.btn_home.on(Laya.Event.CLICK, this, this.showHome),
					this.refreshUI());
			}
			refreshUI() {
				(this.list_level.array = c.tableData),
					c.tableData[c.pLevel]
						? this.list_level.scrollTo(c.pLevel + 1)
						: this.list_level.scrollTo(c.tableData.length - 1);
			}
			listHandler(t, e) {
				t.dataSource;
				let a = t.getChildByName('imp_lvbg'),
					s = t.getChildByName('lab_unlock'),
					i = t.getChildByName('lab_lock');
				t.offAll(Laya.Event.CLICK),
					e <= c.pLevel
						? ((a.skin = 'common/unlock.png'),
						  (s.text = '' + (e + 1)),
						  (i.text = ''),
						  t.on(Laya.Event.CLICK, this, this.goLevel, [e]))
						: (e == c.pLevel &&
								t.on(Laya.Event.CLICK, this, this.goLevel, [e]),
						  (a.skin = 'common/lock.png'),
						  (i.text = '' + (e + 1)),
						  (s.text = ''));
			}
			goLevel(t) {
				(c.gameData.level = t + 1), this.showMGame();
			}
			hideView() {
				(this.visible = !1), o.inst.hideView(), this.removeSelf();
			}
		}
		(m || (m = {})).SelectLevel = a;
	})();
	var u,
		D = m.SelectLevel;
	!(function (t) {
		class a extends e.view.HomeUI {
			constructor() {
				super(),
					(this.viewCreated = !1),
					(this.visible = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				!this.viewCreated &&
					this.btn_play &&
					(this.btn_play.on(
						Laya.Event.CLICK,
						this,
						this.showSelectLevel
					),
					(this.viewCreated = !0),
					this.showView());
			}
			showSelectLevel() {
				cc.Application.showInterstitial(() => {
					this.hideView(),
						l.inst.panelLayer.addChild(D.inst),
						D.inst.showView();
				});
			}
			showView() {
				this.viewCreated &&
					this.btn_play &&
					!this.visible &&
					((this.visible = !0), this.refreshUI());
			}
			refreshUI() {}
			hideView() {
				(this.visible = !1), o.inst.hideView(), this.removeSelf();
			}
		}
		(u || (u = {})).Home = a;
	})();
	var S,
		_ = u.Home;
	!(function (t) {
		(S || (S = {})).Main = class extends cc.ApplicationDelegate {
			constructor(t, e) {
				super(t, e);
			}
			onStartup() {
				(Laya.stage.bgColor = '#ffffff'),
					(Laya.MouseManager.multiTouchEnabled = !1),
					(cc.AudioEngine.muted = c.pMusic),
					Laya.stage.addChild(l.inst),
					l.inst.yad.on(Laya.Event.MOUSE_DOWN, l.inst.yad, () => {
						cc.Application.navigate('GAME', 'LOGO');
					}),
					l.inst.panelLayer.addChild(_.inst),
					_.inst.showView();
			}
		};
	})(),
		(cc.Application.canAds = !0),
		(p.width = s.stageSize[0]),
		(p.height = s.stageSize[1]),
		(p.scaleMode = 'showall'),
		(p.screenMode = 'none'),
		(p.alignV = 'middle'),
		(p.alignH = 'center'),
		new S.Main('Layer-Match', p);
})();
