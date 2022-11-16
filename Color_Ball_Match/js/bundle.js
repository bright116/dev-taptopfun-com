!(function () {
	'use strict';
	class t extends Laya.Script {
		constructor() {
			super();
		}
		onMouseDown() {
			this.owner.scale(0.95, 0.95);
		}
		onMouseOut() {
			this.owner.scale(1, 1);
		}
		onMouseUp() {
			this.owner.scale(1, 1);
		}
	}
	var e,
		a,
		i = Laya.ClassUtils.regClass;
	!(function (t) {
		!(function (t) {
			!(function (t) {
				class e extends Laya.Scene {
					constructor() {
						super();
					}
					createChildren() {
						super.createChildren(),
							this.loadScene('gameView/Dialog/HowPlay');
					}
				}
				(t.HowPlayUI = e), i('ui.gameView.Dialog.HowPlayUI', e);
			})(t.Dialog || (t.Dialog = {}));
		})(t.gameView || (t.gameView = {}));
	})(e || (e = {})),
		(function (t) {
			!(function (t) {
				!(function (t) {
					class e extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Item/Slot');
						}
					}
					(t.SlotUI = e), i('ui.gameView.Item.SlotUI', e);
				})(t.Item || (t.Item = {}));
			})(t.gameView || (t.gameView = {}));
		})(e || (e = {})),
		(function (t) {
			!(function (t) {
				!(function (t) {
					class e extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Panel/GameLevel');
						}
					}
					(t.GameLevelUI = e), i('ui.gameView.Panel.GameLevelUI', e);
					class a extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Panel/GameMain');
						}
					}
					(t.GameMainUI = a), i('ui.gameView.Panel.GameMainUI', a);
					class s extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Panel/Loading');
						}
					}
					(t.LoadingUI = s), i('ui.gameView.Panel.LoadingUI', s);
				})(t.Panel || (t.Panel = {}));
			})(t.gameView || (t.gameView = {}));
		})(e || (e = {})),
		(function (t) {
			class e {
				constructor() {}
			}
			(e.stageSize = [1080, 1920]),
				(e.colors = [
					'#40FD1A',
					'#0D34FE',
					'#FD0001',
					'#FEFE16',
					'#0000CC',
					'#663300',
				]),
				(e.mapObj = [
					[4, 4],
					[5, 5],
					[6, 6],
				]),
				(t.GameConfig = e);
		})(a || (a = {}));
	var s,
		o = a.GameConfig;
	!(function (t) {
		class e extends Laya.Box {
			constructor() {
				super(),
					e._inst || (e._inst = this),
					(this.bgImg = new Laya.Image()),
					(this.bgImg.skin = 'Common/img_bg.png'),
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
							o.stageSize[0]),
					(this.disabledLayer.height =
						this.bgImg.height =
						this.gameLayer.height =
						this.panelLayer.height =
						this.dialogLayer.height =
						this.popLayer.height =
						this.maskLayer.height =
						this.height =
							o.stageSize[1]),
					(this.yad = new Laya.Image()),
					(this.yad.skin = 'Common/bot_logo.png'),
					this.addChild(this.yad),
					(this.yad.centerX = 0),
					(this.yad.bottom = 100),
					(this.yad.zOrder = 1e3);
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
		(s || (s = {})).GameUI = e;
	})();
	var h,
		l = s.GameUI;
	!(function (t) {
		(h || (h = {})).Slot = class extends e.gameView.Item.SlotUI {
			constructor() {
				super(),
					(this._obj = {}),
					(this.onViewCreatedBool = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.addedEvent);
			}
			onViewCreated() {
				this.onViewCreatedBool ||
					((this.onViewCreatedBool = !0), this.setTransform());
			}
			addedEvent() {
				!this.onViewCreatedBool &&
					this.spr_ug &&
					(this.onViewCreatedBool = !0),
					this.setTransform();
			}
			setTransform() {
				this._obj.w &&
					this.spr_ug &&
					(this.pos(
						this._obj.j * this._obj.w,
						this._obj.i * this._obj.w
					),
					(this.spr_ug.skin = 'Common/' + this._obj.color + '.png'));
			}
			get obj() {
				return this._obj;
			}
			recoverBefor() {
				this._obj = {};
			}
		};
	})();
	var n,
		r = h.Slot;
	!(function (t) {
		class e {
			constructor() {}
			static getTimeStr(t) {
				var e = 1e3 * t,
					a = parseInt(e / 864e5 + ''),
					i = parseInt((e % 864e5) / 36e5 + ''),
					s = parseInt((e % 36e5) / 6e4 + ''),
					o = parseInt((e % 6e4) / 1e3 + ''),
					h = '';
				return (
					a && (h += a < 10 ? '0' + a + ':' : a + ':'),
					(i || (h.length && !i)) &&
						(h += i < 10 ? '0' + i + ':' : i + ':'),
					s || (h.length && !s)
						? (h += s < 10 ? '0' + s + ':' : s + ':')
						: (h += '00:'),
					(o || (h.length && !o)) && (h += o < 10 ? '0' + o : o),
					h
				);
			}
			static get pData() {
				return (
					e._pData ||
						((e._pData = JSON.parse(
							Laya.LocalStorage.getItem('ColorBallMatch_zs_pData')
						)),
						e._pData ||
							((e._pData = { time: [0, 0, 0], firstGame: !0 }),
							e.saveData())),
					e._pData
				);
			}
			static saveTime(t, a) {
				(e._pData.time[t] = a), e.saveData();
			}
			static saveData() {
				Laya.LocalStorage.setItem(
					'ColorBallMatch_zs_pData',
					JSON.stringify(e._pData)
				);
			}
			static saveFirstGame(t) {
				Laya.LocalStorage.setItem(
					'ColorBallMatch_zs_pData',
					JSON.stringify(e._pData)
				),
					(e._pData.firstGame = t),
					e.saveData();
			}
		}
		(n || (n = {})).GameLogic = e;
	})();
	var v,
		m = n.GameLogic;
	!(function (t) {
		class a extends e.gameView.Dialog.HowPlayUI {
			constructor() {
				super(),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated),
					a._inst || (a._inst = this);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				!this.viewCreated &&
					this.btn_back &&
					((this.viewCreated = !0),
					this.btn_back.on(Laya.Event.CLICK, this, this.closeView),
					this.btn_back0.on(Laya.Event.CLICK, this, this.closeView),
					(this.parent && this.visible) ||
						this.showView(this.viewData));
			}
			showView(t = null) {
				t && (this.viewData = t),
					this.btn_back &&
						((this.visible = !0),
						l.inst.dialogLayer.addChild(this));
			}
			closeView() {
				this.viewData &&
					this.viewData.closeFun &&
					this.viewData.closeFun.runWith(this.viewData.closeFunArg),
					this.removeSelf(),
					this.clearData();
			}
			clearData() {
				(this.visible = !1), (this.viewData = null);
			}
		}
		(v || (v = {})).HowPlay = a;
	})();
	var c,
		d = v.HowPlay;
	class w {
		constructor() {
			(this.canNavigateActive_ = !1),
				(this.screen_ = ''),
				(this.action_ = ''),
				(this.to_ = ''),
				(this.prompt_ = null),
				(this.initialized_ = !1),
				this.initData();
		}
		static getInstance() {
			return this._instance || (this._instance = new w()), this._instance;
		}
		initData() {
			let t = document.getElementById('layaCanvas');
			t &&
				(t.addEventListener('mouseup', this.onNavigate_.bind(this)),
				t.addEventListener('touchend', this.onNavigate_.bind(this)));
		}
		onNavigate_() {
			// this.canNavigateActive_ &&
			// 	topmathgames.navigate(this.screen_, this.action_, this.to_),
				(this.canNavigateActive_ = !1);
		}
		navigate(t, e, a) {
			!1 === this.canNavigateActive_ &&
				((this.screen_ = t),
				(this.action_ = e),
				(this.to_ = a),
				(this.canNavigateActive_ = !0));
		}
		showInterstitial(t) {
      console.log("请求插屏广告");
      HUHU_showInterstitialAd();
      t && t();
      return;
			// topmathgames.showInterstitial(t);
		}
		showReward(t, e, a) {
      console.log("请求激励广告");

      HUHU_showRewardedVideoAd(
          () => {
              // 用户观看广告完成，继续游戏
              t && t();
          },
          () => {
            // 广告请求失败或者用户跳过广告
            e && e();
            promptMessage("Failed to get the reward, please watch the ads to the end.");
          }
      );
      return;
			// null == e &&
			// 	(e = function () {
			// 		this.prompt(
			// 			'Failed to get the reward, please watch the ads to the end.',
			// 			2
			// 		);
			// 	}),
			// 	topmathgames.showReward(t, e, a);
		}
		prompt(t, e) {
			this.prompt_ ||
				((this.prompt_ = document.createElement('div')),
				(this.prompt_.style.cssText =
					'font-family:siyuan;max-width:80%;min-width:320px;padding:10px 10px 10px 10px;min-height:40px;color: rgb(255, 255, 255);line-height: 20px;text-align:center;border-radius: 4px;position: fixed;top: 40%;left: 50%;transform: translate(-50%, -50%);z-index: 999999;background: rgba(0, 0, 0,.7);font-size: 16px;'),
				document.body.appendChild(this.prompt_)),
				(this.prompt_.innerHTML = t),
				(e = isNaN(e) ? 2e3 : e),
				(this.prompt_.style.display = 'inline'),
				(this.prompt_.style.opacity = '1'),
				setTimeout(
					function () {
						(this.prompt_.style.webkitTransition =
							'-webkit-transform 0.5s ease-in, opacity 0.5s ease-in'),
							(this.prompt_.style.opacity = '0'),
							(this.prompt_.style.display = 'none');
					}.bind(this),
					e
				);
		}
		startup(t, e = '', a) {
			if (this.initialized_) return;
			let i = this,
				s = {};
      a && a(), (i.initialized_ = !0);  
			// (s.appName = t),
			// 	(s.gd = e),
			// 	(s.onComplete = function () {
			// 		a && a(), (i.initialized_ = !0);
			// 	}),
			// 	topmathgames.startup(s);
		}
	}
	(w._instance = null),
		(function (t) {
			class a extends e.gameView.Panel.GameMainUI {
				constructor() {
					super(),
						this.once('onViewCreated', this, this.onViewCreated),
						this.on(Laya.Event.ADDED, this, this.onViewCreated),
						a._inst || (a._inst = this);
				}
				static get inst() {
					return a._inst || (a._inst = new a()), a._inst;
				}
				onViewCreated() {
					!this.viewCreated &&
						this.btn_refresh &&
						((this.viewCreated = !0),
						(this.parent && this.visible) ||
							this.showView(this.viewData),
						this.btn_refresh0.on(
							Laya.Event.CLICK,
							this,
							this.refreshMap
						),
						this.btn_refresh.on(
							Laya.Event.CLICK,
							this,
							this.refreshMap
						),
						this.btn_home0.on(Laya.Event.CLICK, this, this.goHome),
						this.btn_home.on(Laya.Event.CLICK, this, this.goHome));
				}
				goHome() {
					w.getInstance().showInterstitial(() => {
						b.inst.showView(), this.closeView();
					});
				}
				refreshMap() {
					w.getInstance().showInterstitial(() => {
						this.setMap(this.viewData.level);
					});
				}
				showView(t = null) {
					t && (this.viewData = t),
						this.btn_home &&
							((this.visible = !0),
							(this.box_EGame.visible = !1),
							(this.time.text = 'TIME: 00:00'),
							m.pData.firstGame
								? (m.saveFirstGame(!1),
								  d.inst.showView({
										closeFun: Laya.Handler.create(
											this,
											this.setMap
										),
										closeFunArg: this.viewData.level,
								  }))
								: this.setMap(this.viewData.level),
							l.inst.panelLayer.addChild(this));
				}
				setMap(t = null) {
					(this.box_EGame.visible = !1),
						(this.timeNum = 0),
						(this.time.text = 'TIME: 00:00'),
						this.recoverSlot();
					var e = !0;
					if (null == t && this.viewData.startColor)
						(e = !1), (t = this.viewData.level);
					else {
						(this.viewData = []),
							(this.viewData.level = t),
							(this.viewData.startColor = []),
							(this.viewData.startMap = []),
							(this.viewData.colorMax = o.mapObj[t][0]),
							(this.viewData.colors = []),
							(this.viewData.selectColor = []),
							(this.viewData.copySlot = []);
						for (let e = 0; e < o.mapObj[t][1]; e++) {
							var a = Math.floor(Math.random() * o.colors.length);
							-1 == this.viewData.selectColor.indexOf(a)
								? (this.viewData.selectColor.push(a),
								  this.viewData.colors.push(0))
								: e--;
						}
						this.viewData.width = Math.min(
							1080 / o.mapObj[t][0],
							1080 / o.mapObj[t][1],
							100
						);
					}
					for (let a = 0; a < o.mapObj[t][0]; a++) {
						this.viewData.startMap.push([]),
							e && this.viewData.startColor.push([]);
						for (let e = 0; e < o.mapObj[t][1]; e++) {
							let t = Laya.Pool.getItemByClass('Slot', r);
							(t.obj.color = this.setRandomColor()),
								t.off(
									Laya.Event.MOUSE_DOWN,
									this,
									this.drowSlotStart
								),
								(this.viewData.startMap[a][e] = t),
								(this.viewData.startColor[a][e] = t.obj.color),
								(t.obj.i = a),
								(t.obj.j = e),
								(t.obj.w = this.viewData.width),
								this.box_chlidBox.addChild(t),
								t.setTransform(),
								t.on(
									Laya.Event.MOUSE_DOWN,
									this,
									this.drowSlotStart
								);
						}
					}
					for (let t = 0; t < 2; t++) {
						let e = Laya.Pool.getItemByClass('Slot', r);
						(e.obj.color = 0),
							(this.viewData.copySlot[t] = e),
							(e.obj.i = -2),
							(e.obj.j = -2),
							(e.obj.w = this.viewData.width),
							e.setTransform();
					}
					(this.box_chlidBox.width =
						this.box_btnBox.width =
						this.box_chlidBox.height =
						this.box_btnBox.height =
							this.viewData.width * o.mapObj[t][0]),
						(this.img_slotBg.width = this.img_slotBg.height =
							this.box_chlidBox.width + 16);
					var i = 2;
					2 == this.viewData.level && (i = 1.8),
						(this.box_chlidBox.scaleX =
							this.box_btnBox.scaleX =
							this.box_chlidBox.scaleY =
							this.box_btnBox.scaleY =
							this.img_slotBg.scaleX =
							this.img_slotBg.scaleY =
								i),
						Laya.timer.loop(1e3, this, this.loopFun);
				}
				drowSlotStart(t) {
					(this.moveData = {}),
						this.stopDrow(),
						(this.moveData.startXY = [
							Laya.stage.mouseX,
							Laya.stage.mouseY,
						]),
						(this.moveData.selectXY = [
							t.target.obj.i,
							t.target.obj.j,
						]),
						Laya.stage.on(
							Laya.Event.MOUSE_MOVE,
							this,
							this.drowSlotMove
						),
						Laya.stage.on(Laya.Event.MOUSE_UP, this, this.stopDrow),
						Laya.stage.on(
							Laya.Event.MOUSE_OUT,
							this,
							this.stopDrow
						);
				}
				drowSlotMove() {
					this.moveData.moveSlot || (this.moveData.moveSlot = []);
					var t = 1;
					0 == this.viewData.level && (t = 1.5);
					var e = this.viewData.copySlot[0],
						a = this.viewData.copySlot[1],
						i = this.moveData.moveSlot.length;
					if (i) {
						for (let e = 0, a = i; e < a; e++)
							this.moveData.moveX
								? (this.moveData.moveSlot[e].x +=
										(Laya.stage.mouseX -
											this.moveData.startXY[0]) /
										t)
								: (this.moveData.moveSlot[e].y +=
										(Laya.stage.mouseY -
											this.moveData.startXY[1]) /
										t);
						(this.moveData.startXY[0] = Laya.stage.mouseX),
							(this.moveData.startXY[1] = Laya.stage.mouseY),
							this.moveData.moveX
								? (this.moveData.moveSlot[0].x <
								  -this.moveData.moveSlot[0].width
										? this.setColor(!0)
										: this.moveData.moveSlot[i - 1].x >
												this.box_chlidBox.width &&
										  this.setColor(!1),
								  (e.x = this.moveData.moveSlot[0].x - e.obj.w),
								  (a.x =
										this.moveData.moveSlot[i - 1].x +
										a.obj.w))
								: (this.moveData.moveSlot[0].y <
								  -this.moveData.moveSlot[0].height
										? this.setColor(!0)
										: this.moveData.moveSlot[i - 1].y >
												this.box_chlidBox.height &&
										  this.setColor(!1),
								  (e.y = this.moveData.moveSlot[0].y - e.obj.w),
								  (a.y =
										this.moveData.moveSlot[i - 1].y +
										a.obj.w));
					} else {
						if (
							Math.abs(
								Laya.stage.mouseX - this.moveData.startXY[0]
							) >= 5 &&
							!this.moveData.moveY
						) {
							this.moveData.moveX = !0;
							for (
								let t = 0;
								t < o.mapObj[this.viewData.level][1];
								t++
							)
								this.moveData.moveSlot.push(
									this.viewData.startMap[
										this.moveData.selectXY[0]
									][t]
								);
							(e.obj.color =
								this.moveData.moveSlot[
									this.moveData.moveSlot.length - 1
								].obj.color),
								(e.obj.i = this.moveData.moveSlot[0].obj.i),
								(e.obj.j = -1),
								e.setTransform(),
								(a.obj.color =
									this.moveData.moveSlot[0].obj.color),
								(a.obj.i = this.moveData.moveSlot[0].obj.i),
								(a.obj.j = this.moveData.moveSlot.length),
								a.setTransform();
						}
						if (
							Math.abs(
								Laya.stage.mouseY - this.moveData.startXY[1]
							) >= 5 &&
							!this.moveData.moveX
						) {
							this.moveData.moveY = !0;
							for (
								let t = 0;
								t < o.mapObj[this.viewData.level][0];
								t++
							)
								this.moveData.moveSlot.push(
									this.viewData.startMap[t][
										this.moveData.selectXY[1]
									]
								);
							(e.obj.color =
								this.moveData.moveSlot[
									this.moveData.moveSlot.length - 1
								].obj.color),
								(e.obj.i = -1),
								(e.obj.j = this.moveData.moveSlot[0].obj.j),
								e.setTransform(),
								(a.obj.color =
									this.moveData.moveSlot[0].obj.color),
								(a.obj.i = this.moveData.moveSlot.length),
								(a.obj.j = this.moveData.moveSlot[0].obj.j),
								a.setTransform();
						}
						this.box_chlidBox.addChild(e),
							this.box_chlidBox.addChild(a);
					}
				}
				setColor(t = !0, e = !0) {
					var a = 0;
					if (t)
						for (
							let t = 0, i = this.moveData.moveSlot.length;
							t < i;
							t++
						)
							0 == t && (a = this.moveData.moveSlot[t].obj.color),
								(this.moveData.moveSlot[t].obj.color =
									t + 1 == i
										? a
										: this.moveData.moveSlot[t + 1].obj
												.color),
								e &&
									(console.log(
										this.moveData.moveSlot[t].obj.i,
										this.moveData.moveSlot[t].obj.j,
										this.moveData.moveSlot[t].obj.color,
										t
									),
									this.moveData.moveSlot[t].setTransform());
					else
						for (
							let t = this.moveData.moveSlot.length - 1;
							t >= 0;
							t--
						)
							t == this.moveData.moveSlot.length - 1 &&
								(a = this.moveData.moveSlot[t].obj.color),
								(this.moveData.moveSlot[t].obj.color =
									t <= 0
										? a
										: this.moveData.moveSlot[t - 1].obj
												.color),
								e &&
									(console.log(
										this.moveData.moveSlot[t].obj.i,
										this.moveData.moveSlot[t].obj.j,
										this.moveData.moveSlot[t].obj.color,
										t
									),
									this.moveData.moveSlot[t].setTransform());
					if ((console.log('END'), e)) {
						var i = this.viewData.copySlot[0],
							s = this.viewData.copySlot[1];
						(i.obj.color =
							this.moveData.moveSlot[
								this.moveData.moveSlot.length - 1
							].obj.color),
							i.setTransform(),
							(s.obj.color = this.moveData.moveSlot[0].obj.color),
							s.setTransform();
					}
				}
				stopDrow() {
					if (
						(l.inst.addChild(l.inst.disabledLayer),
						Laya.stage.off(
							Laya.Event.MOUSE_MOVE,
							this,
							this.drowSlotMove
						),
						Laya.stage.off(
							Laya.Event.MOUSE_UP,
							this,
							this.stopDrow
						),
						Laya.stage.off(
							Laya.Event.MOUSE_OUT,
							this,
							this.stopDrow
						),
						this.moveData.moveSlot && this.moveData.moveSlot.length)
					) {
						var t =
								this.moveData.moveSlot[0].obj.j *
								this.moveData.moveSlot[0].obj.w,
							e =
								this.moveData.moveSlot[0].obj.i *
								this.moveData.moveSlot[0].obj.w,
							a = this.moveData.moveSlot[0].x,
							i = this.moveData.moveSlot[0].y,
							s = 0,
							o = 0,
							h = !0,
							n = this.viewData.startMap[0][0].width;
						a < t || i < e
							? Math.abs(t - a) >
							  this.moveData.moveSlot[0].width / 2
								? (s = -n)
								: Math.abs(e - i) >
										this.moveData.moveSlot[0].height / 2 &&
								  (o = -n)
							: (a > t || i > e) &&
							  ((h = !1),
							  Math.abs(t - a) >
							  this.moveData.moveSlot[0].width / 2
									? (s = n)
									: Math.abs(e - i) >
											this.moveData.moveSlot[0].height /
												2 && (o = n)),
							null == s && (s = 0),
							null == o && (o = 0);
						var r = !0;
						s || o || (r = !1),
							Laya.timer.frameLoop(1, this, this.setCopySlotXY);
						for (
							let t = 0, e = this.moveData.moveSlot.length;
							t < e;
							t++
						) {
							var v = this.moveData.moveSlot[t];
							t + 1 == e
								? Laya.Tween.to(
										v,
										{
											x: v.obj.j * v.obj.w + s,
											y: v.obj.i * v.obj.w + o,
										},
										100,
										null,
										Laya.Handler.create(
											this,
											this.moveEnd,
											[h, r]
										)
								  )
								: Laya.Tween.to(
										v,
										{
											x: v.obj.j * v.obj.w + s,
											y: v.obj.i * v.obj.w + o,
										},
										100
								  );
						}
					} else l.inst.removeChild(l.inst.disabledLayer);
				}
				moveEnd(t, e) {
					Laya.timer.clear(this, this.setCopySlotXY),
						e && this.setColor(t),
						this.checkGameEnd();
				}
				setCopySlotXY() {
					this.moveData.moveSlot &&
						this.moveData.moveSlot.length &&
						(this.moveData.moveX
							? ((this.viewData.copySlot[0].x =
									this.moveData.moveSlot[0].x -
									this.viewData.copySlot[0].obj.w),
							  (this.viewData.copySlot[1].x =
									this.moveData.moveSlot[
										this.moveData.moveSlot.length - 1
									].x + this.viewData.copySlot[1].obj.w))
							: ((this.viewData.copySlot[0].y =
									this.moveData.moveSlot[0].y -
									this.viewData.copySlot[0].obj.w),
							  (this.viewData.copySlot[1].y =
									this.moveData.moveSlot[
										this.moveData.moveSlot.length - 1
									].y + this.viewData.copySlot[1].obj.w)));
				}
				checkGameEnd() {
					Laya.timer.clear(this, this.setCopySlotXY),
						this.box_chlidBox.removeChild(
							this.viewData.copySlot[0]
						),
						this.box_chlidBox.removeChild(
							this.viewData.copySlot[1]
						),
						this.box_chlidBox.refresh(),
						(this.moveData = {});
					var t = !0,
						e = !0;
					for (let e = 0; e < o.mapObj[this.viewData.level][0]; e++) {
						var a = this.viewData.startMap[e][0].obj.color;
						for (
							let i = 1;
							i < o.mapObj[this.viewData.level][1];
							i++
						)
							if (this.viewData.startMap[e][i].obj.color != a) {
								t = !1;
								break;
							}
					}
					for (let t = 0; t < o.mapObj[this.viewData.level][1]; t++) {
						a = this.viewData.startMap[0][t].obj.color;
						for (
							let i = 1;
							i < o.mapObj[this.viewData.level][0];
							i++
						)
							if (this.viewData.startMap[i][t].obj.color != a) {
								e = !1;
								break;
							}
					}
					(t || e) && this.playWin(),
						l.inst.removeChild(l.inst.disabledLayer);
				}
				loopFun() {
					(this.timeNum += 1),
						(this.time.text =
							'TIME: ' + m.getTimeStr(this.timeNum));
				}
				setRandomColor() {
					var t,
						e = Math.floor(
							Math.random() * this.viewData.selectColor.length
						);
					return (
						this.viewData.colors[e] < this.viewData.colorMax
							? (this.viewData.colors[e]++, (t = e))
							: (t = this.setRandomColor()),
						t
					);
				}
				recoverSlot() {
					for (
						let t = this.box_chlidBox.numChildren - 1;
						t >= 0;
						t--
					) {
						let e = this.box_chlidBox.getChildAt(t);
						e.removeSelf(),
							e.recoverBefor(),
							Laya.Pool.recover('Slot', e);
					}
					for (let t = this.box_btnBox.numChildren - 1; t >= 0; t--) {
						let e = this.box_btnBox.getChildAt(t);
						e.removeSelf(),
							e.recoverBefor(),
							Laya.Pool.recover('Btn_Rotation', e);
					}
					for (let t = 0, e = this.viewData.copySlot; t < e; t++) {
						let e = this.viewData.copySlot[t];
						e.removeSelf(),
							e.recoverBefor(),
							Laya.Pool.recover('Btn_Rotation', e);
					}
					(this.viewData.startMap = []),
						(this.viewData.copySlot = []);
				}
				playWin() {
					Laya.timer.clear(this, this.loopFun),
						(this.box_EGame.visible = !0);
					var t = m.pData.time[this.viewData.level];
					(this.fc_minTime.text = m.getTimeStr(t)),
						(this.lab_record.visible = !1),
						(this.timeNum < t || 0 == t) &&
							(m.saveTime(this.viewData.level, this.timeNum),
							(this.fc_minTime.text =
								m.getTimeStr(this.timeNum) + ''),
							(this.lab_record.visible = !0)),
						(this.fc_time.text = m.getTimeStr(this.timeNum) + '');
				}
				closeView() {
					this.removeSelf(), this.clearData();
				}
				clearData() {
					(this.moveData = {}),
						Laya.stage.off(
							Laya.Event.MOUSE_MOVE,
							this,
							this.drowSlotMove
						),
						Laya.stage.off(
							Laya.Event.MOUSE_MOVE,
							this,
							this.drowSlotMove
						),
						Laya.stage.off(
							Laya.Event.MOUSE_UP,
							this,
							this.stopDrow
						),
						Laya.stage.off(
							Laya.Event.MOUSE_OUT,
							this,
							this.stopDrow
						),
						Laya.timer.clearAll(this),
						(this.timeNum = 0),
						(this.time.text = 'TIME: 00:00'),
						(this.visible = !1),
						(this.viewData = null);
				}
			}
			(c || (c = {})).GameMain = a;
		})();
	var D,
		g = c.GameMain;
	!(function (t) {
		class a extends e.gameView.Panel.GameLevelUI {
			constructor() {
				super(),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated),
					a._inst || (a._inst = this);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			onViewCreated() {
				if (!this.viewCreated && this.btn_howPlay) {
					this.viewCreated = !0;
					for (let t = 0; t < 3; t++)
						this['btn_level' + t].on(
							Laya.Event.CLICK,
							this,
							this.showGameMain,
							[t]
						);
					this.btn_howPlay.on(
						Laya.Event.CLICK,
						this,
						this.showHowPlay
					),
						(this.parent && this.visible) ||
							this.showView(this.viewData);
				}
			}
			showHowPlay() {
				m.pData.firstGame && m.saveFirstGame(!1), d.inst.showView();
			}
			showView(t = null) {
				if ((t && (this.viewData = t), this.btn_level0)) {
					this.visible = !0;
					for (let t = 0; t < 3; t++)
						this['lab_level' + t].text = m.getTimeStr(
							m.pData.time[t]
						);
					l.inst.panelLayer.addChild(this);
				}
			}
			showGameMain(t) {
				w.getInstance().showInterstitial(() => {
					g.inst.showView({ level: t }), this.closeView();
				});
			}
			closeView() {
				this.removeSelf(), this.clearData();
			}
			clearData() {
				(this.visible = !1), (this.viewData = null);
			}
		}
		(D || (D = {})).GameLevel = a;
	})();
	var p,
		b = D.GameLevel;
	!(function (t) {
		class a extends e.gameView.Panel.LoadingUI {
			constructor() {
				super(),
					(this.resLoad = [
						'res/atlas/Common.atlas',
						'fonts/enWenYi.ttf',
						'fonts/enXiaoWei.ttf',
						'res/atlas/MGame.atlas',
						'res/atlas/SelectLevel.atlas',
						'gameView/Dialog/HowPlay.json',
						'gameView/Item/Btn_Rotation.json',
						'gameView/Item/Slot.json',
						'gameView/Panel/GameLevel.json',
						'gameView/Panel/GameMain.json',
						'Common/showImg.jpg',
					]),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated),
					a._inst || (a._inst = this);
			}
			static get inst() {
				return a._inst || (a._inst = new a()), a._inst;
			}
			showView(t = null) {
				t && (this.viewData = t),
					this.pal_load &&
						((this.pal_load.width = 0),
						(this.spr_loadBg.visible =
							this.lab_load.visible =
							this.pal_load.visible =
								!0),
						(this.visible = !0),
						l.inst.panelLayer.addChild(this),
						Laya.loader.load(
							this.resLoad,
							Laya.Handler.create(this, this.startup),
							Laya.Handler.create(this, this.setprb, null, !1)
						));
			}
			setprb(t) {
				this.pal_load.width =
					1 == t
						? 0.99 * this.spr_loadBg.width
						: t * this.spr_loadBg.width;
			}
			startup() {
				Laya.loader.load(
					'cnf.json',
					Laya.Handler.create(this, (t) => {
						w.getInstance().startup(
							'Color-Ball-Match',
							t.id,
							() => {
								this.loadEnd(),
									l.inst.yad.on(
										Laya.Event.MOUSE_DOWN,
										l.inst.yad,
										() => {
											w.getInstance().navigate(
												'GAME',
												'LOGO'
											);
										}
									);
							}
						);
					})
				);
			}
			loadEnd() {
				(this.pal_load.width = this.spr_loadBg.width),
					(this.btn_start.visible = !0),
					(this.spr_loadBg.visible =
						this.lab_load.visible =
						this.pal_load.visible =
							!1);
			}
			startClick() {
				w.getInstance().showInterstitial(() => {
					b.inst.showView(), this.closeView();
				});
			}
			onViewCreated() {
				!this.viewCreated &&
					this.btn_start &&
					((this.viewCreated = !0),
					(this.pal_load.width = 0),
					(this.btn_start.visible = !1),
					(this.spr_loadBg.visible =
						this.lab_load.visible =
						this.pal_load.visible =
							!0),
					this.btn_start.on(Laya.Event.CLICK, this, this.startClick),
					(this.parent && this.visible) ||
						this.showView(this.viewData));
			}
			closeView() {
				this.removeSelf(), this.clearData();
			}
			clearData() {
				(this.visible = !1), (this.viewData = null);
			}
		}
		(p || (p = {})).Loading = a;
	})();
	var y,
		L = p.Loading;
	!(function (e) {
		(y || (y = {})).Main = class {
			constructor() {
				window.Laya3D
					? Laya3D.init(o.stageSize[0], o.stageSize[1])
					: Laya.init(o.stageSize[0], o.stageSize[1], Laya.WebGL),
					(Laya.stage.scaleMode = 'exactfit'),
					(Laya.stage.screenMode = 'none'),
					(Laya.stage.alignV = 'middle'),
					(Laya.stage.alignH = 'center'),
					(Laya.URL.exportSceneToJson = !0),
					Laya.ClassUtils.regClass('script/Btn_Slace.ts', t),
					Laya.alertGlobalError(!0),
					(Laya.MouseManager.multiTouchEnabled = !1),
					Laya.ResourceVersion.enable(
						'version.json',
						Laya.Handler.create(this, this.onVersionLoaded),
						Laya.ResourceVersion.FILENAME_VERSION
					);
			}
			onVersionLoaded() {
				Laya.AtlasInfoManager.enable(
					'fileconfig.json',
					Laya.Handler.create(this, this.onConfigLoaded)
				);
			}
			onConfigLoaded() {
				Laya.stage.addChild(l.inst), L.inst.showView();
			}
		};
	})(),
		new y.Main();
})();
