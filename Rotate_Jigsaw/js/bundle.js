!(function () {
	'use strict';
	class t extends Laya.Script {
		constructor() {
			super();
		}
		onMouseDown() {
			this.owner.scale(0.8, 0.8);
		}
		onMouseOut() {
			this.owner.scale(1, 1);
		}
		onMouseUp() {
			this.owner.scale(1, 1);
		}
	}
	var e,
		i,
		a = Laya.ClassUtils.regClass;
	!(function (t) {
		!(function (t) {
			!(function (t) {
				class e extends Laya.Scene {
					constructor() {
						super();
					}
					createChildren() {
						super.createChildren(),
							this.loadScene('gameView/Item/Btn_Rotation');
					}
				}
				(t.Btn_RotationUI = e), a('ui.gameView.Item.Btn_RotationUI', e);
				class i extends Laya.Scene {
					constructor() {
						super();
					}
					createChildren() {
						super.createChildren(),
							this.loadScene('gameView/Item/Slot');
					}
				}
				(t.SlotUI = i), a('ui.gameView.Item.SlotUI', i);
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
					(t.GameLevelUI = e), a('ui.gameView.Panel.GameLevelUI', e);
					class i extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Panel/GameMain');
						}
					}
					(t.GameMainUI = i), a('ui.gameView.Panel.GameMainUI', i);
					class s extends Laya.Scene {
						constructor() {
							super();
						}
						createChildren() {
							super.createChildren(),
								this.loadScene('gameView/Panel/Loading');
						}
					}
					(t.LoadingUI = s), a('ui.gameView.Panel.LoadingUI', s);
				})(t.Panel || (t.Panel = {}));
			})(t.gameView || (t.gameView = {}));
		})(e || (e = {})),
		(function (t) {
			class e {
				constructor() {}
			}
			(e.stageSize = [1080, 1920]),
				(e.colors = ['#40FD1A', '#0D34FE', '#FD0001', '#FEFE16']),
				(e.mapObj = [
					[4, 4],
					[6, 6],
					[8, 8],
				]),
				(t.GameConfig = e);
		})(i || (i = {}));
	var s,
		o = i.GameConfig;
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
					(this.yad.bottom = 50),
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
	var n,
		h = s.GameUI;
	!(function (t) {
		(n || (n = {})).Slot = class extends e.gameView.Item.SlotUI {
			constructor() {
				super(),
					(this._obj = {}),
					(this.onViewCreatedBool = !1),
					(this.playAniBool = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.addedEvent);
			}
			onViewCreated() {
				if (!this.onViewCreatedBool) {
					(this.onViewCreatedBool = !0), this.setTransform();
					for (let t = 0; t < 4; t++)
						this['ani' + t].on(
							Laya.Event.COMPLETE,
							this,
							this.playEnd
						);
				}
			}
			addedEvent() {
				if (!this.onViewCreatedBool && this.spr_ug) {
					this.onViewCreatedBool = !0;
					for (let t = 0; t < 4; t++)
						this['ani' + t].on(
							Laya.Event.COMPLETE,
							this,
							this.playEnd
						);
				}
				this.setTransform();
			}
			playEnd() {
				for (let t = 0; t < 4; t++) this['ani' + t].stop();
				this.spr_ug.pos(65.5, 65.5),
					(this.playAniBool = !1),
					this._obj.moveNum,
					this.setTransform(),
					v.inst.checkAniEnd();
			}
			setTransform() {
				this._obj.w &&
					this.spr_ug &&
					(this.pos(
						this._obj.j * this._obj.w,
						this._obj.i * this._obj.w
					),
					(this.spr_ug.skin = ''),
					(this.spr_ug.skin = 'MGame/' + this._obj.color + '.png'));
			}
			get obj() {
				return this._obj;
			}
			playAni() {
				(!this._obj.moveNum && 0 != this._obj.moveNum) ||
					100 == this._obj.moveNum ||
					((this.playAniBool = !0),
					this['ani' + this._obj.moveNum].play(0, !1));
			}
			recoverBefor() {
				this._obj = {};
			}
		};
	})();
	var r,
		l = n.Slot;
	!(function (t) {
		(r || (r = {})).Btn_Rotation = class extends (
			e.gameView.Item.Btn_RotationUI
		) {
			constructor() {
				super(),
					(this._obj = {}),
					(this.onViewCreatedBool = !1),
					(this.playAniBool = !1),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.addedEvent);
			}
			onViewCreated() {
				this.onViewCreatedBool ||
					((this.onViewCreatedBool = !0), this.setTransform());
			}
			addedEvent() {
				!this.onViewCreatedBool &&
					this.spr_btn &&
					(this.onViewCreatedBool = !0),
					this.setTransform();
			}
			setTransform() {
				this._obj.w &&
					this.spr_btn &&
					(this.pos(
						this._obj.j * this._obj.w,
						this._obj.i * this._obj.w
					),
					this.scale(this._obj.w / 100, this._obj.w / 100));
			}
			get obj() {
				return this._obj;
			}
			recoverBefor() {
				this._obj = {};
			}
		};
	})();
	var d,
		c = r.Btn_Rotation;
	!(function (t) {
		class e {
			constructor() {}
			static getTimeStr(t) {
				var e = 1e3 * t,
					i = parseInt(e / 864e5 + ''),
					a = parseInt((e % 864e5) / 36e5 + ''),
					s = parseInt((e % 36e5) / 6e4 + ''),
					o = parseInt((e % 6e4) / 1e3 + ''),
					n = '';
				return (
					i && (n += i < 10 ? '0' + i + ':' : i + ':'),
					(a || (n.length && !a)) &&
						(n += a < 10 ? '0' + a + ':' : a + ':'),
					s || (n.length && !s)
						? (n += s < 10 ? '0' + s + ':' : s + ':')
						: (n += '00:'),
					(o || (n.length && !o)) && (n += o < 10 ? '0' + o : o),
					n
				);
			}
			static get pData() {
				return (
					e._pData ||
						((e._pData = JSON.parse(
							Laya.LocalStorage.getItem('RotateJigsaw_zs_pData')
						)),
						e._pData ||
							((e._pData = { time: [0, 0, 0] }), e.saveData())),
					e._pData
				);
			}
			static saveTime(t, i) {
				(e._pData.time[t] = i), e.saveData();
			}
			static saveData() {
				Laya.LocalStorage.setItem(
					'RotateJigsaw_zs_pData',
					JSON.stringify(e._pData)
				);
			}
		}
		(d || (d = {})).GameLogic = e;
	})();
	var m,
		w = d.GameLogic;
	class p {
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
			return this._instance || (this._instance = new p()), this._instance;
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
		navigate(t, e, i) {
			!1 === this.canNavigateActive_ &&
				((this.screen_ = t),
				(this.action_ = e),
				(this.to_ = i),
				(this.canNavigateActive_ = !0));
		}
		showInterstitial(t) {
      console.log("请求插屏广告");
      HUHU_showInterstitialAd();
      t && t();
      return;
			// topmathgames.showInterstitial(t);
		}
		showReward(t, e, i) {
      console.log('showReward ...');

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
			// 	topmathgames.showReward(t, e, i);
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
		startup(t, e = '', i) {
			if (this.initialized_) return;
			let a = this,
				s = {};
      i && i(), (a.initialized_ = !0);
			// (s.appName = t),
			// 	(s.gd = e),
			// 	(s.onComplete = function () {
			// 		i && i(), (a.initialized_ = !0);
			// 	}),
			// 	topmathgames.startup(s);
		}
	}
	(p._instance = null),
		(function (t) {
			class i extends e.gameView.Panel.GameMainUI {
				constructor() {
					super(),
						this.once('onViewCreated', this, this.onViewCreated),
						this.on(Laya.Event.ADDED, this, this.onViewCreated),
						i._inst || (i._inst = this);
				}
				static get inst() {
					return i._inst || (i._inst = new i()), i._inst;
				}
				onViewCreated() {
					!this.viewCreated &&
						this.btn_refresh0 &&
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
					p.getInstance().showInterstitial(() => {
						_.inst.showView(), this.closeView();
					});
				}
				refreshMap() {
					p.getInstance().showInterstitial(() => {
						this.setMap(this.viewData.level);
					});
				}
				showView(t = null) {
					t && (this.viewData = t),
						this.btn_home &&
							((this.visible = !0),
							h.inst.panelLayer.addChild(this),
							this.setMap(this.viewData.level));
				}
				setMap(t = null) {
					(this.img_levelImg.skin = 'MGame/level' + t + '.png'),
						(this.box_EGame.visible = !1),
						(this.timeNum = 0),
						(this.time.value = '00:00'),
						this.recoverSlot();
					var e = !0;
					null == t && this.viewData.startColor
						? ((e = !1), (t = this.viewData.level))
						: ((this.viewData = []),
						  (this.viewData.level = t),
						  (this.viewData.startColor = []),
						  (this.viewData.startMap = []),
						  (this.viewData.colors = [0, 0, 0, 0]),
						  (this.viewData.colorMax =
								(o.mapObj[t][0] * o.mapObj[t][1]) /
								o.colors.length),
						  (this.viewData.width = Math.min(
								1080 / o.mapObj[t][0],
								1080 / o.mapObj[t][1],
								131
						  )));
					for (let i = 0; i < o.mapObj[t][0]; i++) {
						this.viewData.startMap.push([]),
							e && this.viewData.startColor.push([]);
						for (let e = 0; e < o.mapObj[t][1]; e++) {
							let t = Laya.Pool.getItemByClass('Slot', l);
							if (
								((t.obj.color =
									this.viewData.startColor[i][e] ||
									0 == this.viewData.startColor[i][e]
										? this.viewData.startColor[i][e]
										: this.setRandomColor()),
								(this.viewData.startMap[i][e] = t),
								(this.viewData.startColor[i][e] = t.obj.color),
								(t.obj.i = i),
								(t.obj.j = e),
								(t.obj.w = this.viewData.width),
								this.box_chlidBox.addChild(t),
								t.setTransform(),
								0 != i && 0 != e)
							) {
								let t = Laya.Pool.getItemByClass(
									'Btn_Rotation',
									c
								);
								(t.obj.i = i),
									(t.obj.j = e),
									(t.obj.w = this.viewData.width),
									(t.obj.conSlot = this.getConSlot(i, e)),
									this.box_btnBox.addChild(t),
									t.on(
										Laya.Event.CLICK,
										this,
										this.showMove,
										[t.obj.conSlot]
									);
							}
						}
					}
					this.box_chlidBox.width =
						this.box_btnBox.width =
						this.box_chlidBox.height =
						this.box_btnBox.height =
							this.viewData.width * o.mapObj[t][0];
					var i = 1;
					0 == this.viewData.level && (i = 1.5),
						(this.box_chlidBox.scaleX =
							this.box_btnBox.scaleX =
							this.box_chlidBox.scaleY =
							this.box_btnBox.scaleY =
								i),
						this.img_slotBg.scale(
							(this.box_chlidBox.width / this.img_slotBg.width) *
								i,
							(this.box_chlidBox.height /
								this.img_slotBg.height) *
								i
						),
						Laya.timer.loop(1e3, this, this.loopFun);
				}
				loopFun() {
					(this.timeNum += 1),
						(this.time.value = w.getTimeStr(this.timeNum));
				}
				showMove(t) {
					h.inst.addChild(h.inst.disabledLayer);
					let e = 0;
					for (let a = 0, s = t.length; a < s; a++) {
						var i = this.viewData.startMap[t[a][0]][t[a][1]];
						if (((i.obj.moveNum = a), 0 == a))
							(e = i.obj.color),
								(i.obj.color =
									this.viewData.startMap[t[s - 1][0]][
										t[s - 1][1]
									].obj.color);
						else {
							let t = 0;
							(t = i.obj.color), (i.obj.color = e), (e = t);
						}
						i.playAni();
					}
				}
				getConSlot(t, e) {
					return [
						[t, e],
						[t, e - 1],
						[t - 1, e - 1],
						[t - 1, e],
					];
				}
				setRandomColor() {
					var t,
						e = Math.floor(4 * Math.random());
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
					this.viewData.startMap = [];
				}
				checkAniEnd() {
					for (
						let t = this.box_chlidBox.numChildren - 1;
						t >= 0;
						t--
					) {
						let e = this.box_chlidBox.getChildAt(t);
						if (e instanceof l && e.playAniBool) return;
					}
					this.checkGameEnd();
				}
				checkGameEnd() {
					h.inst.removeChild(h.inst.disabledLayer);
					for (
						let e = 0, i = this.viewData.startMap.length;
						e < i;
						e++
					)
						for (
							let a = 0, s = this.viewData.startMap[0].length;
							a < s;
							a++
						) {
							var t = this.viewData.startMap[e][a];
							if (e < i / 2 && a < s / 2) {
								if (2 == t.obj.color) continue;
							} else if (e < i / 2 && a >= s / 2) {
								if (3 == t.obj.color) continue;
							} else if (e >= i / 2 && a < s / 2) {
								if (1 == t.obj.color) continue;
							} else if (
								e >= i / 2 &&
								a >= s / 2 &&
								0 == t.obj.color
							)
								continue;
							return;
						}
					this.playWin();
				}
				playWin() {
					Laya.timer.clear(this, this.loopFun),
						(this.box_EGame.visible = !0);
					var t = w.pData.time[this.viewData.level];
					(this.fc_minTime.value = w.getTimeStr(t)),
						(this.lab_record.visible = !1),
						(this.timeNum < t || 0 == t) &&
							(w.saveTime(this.viewData.level, this.timeNum),
							(this.fc_minTime.value =
								w.getTimeStr(this.timeNum) + ''),
							(this.lab_record.visible = !0)),
						(this.fc_time.value = w.getTimeStr(this.timeNum) + ''),
						(this.box_thisTime.width =
							105 + 23 * this.fc_time.value.length),
						(this.box_minTime.width =
							145 + 23 * this.fc_minTime.value.length);
				}
				closeView() {
					this.removeSelf(), this.clearData();
				}
				clearData() {
					Laya.timer.clearAll(this),
						(this.timeNum = 0),
						(this.time.value = '0'),
						(this.visible = !1),
						(this.viewData = null);
				}
			}
			(m || (m = {})).GameMain = i;
		})();
	var g,
		v = m.GameMain;
	!(function (t) {
		class i extends e.gameView.Panel.GameLevelUI {
			constructor() {
				super(),
					this.once('onViewCreated', this, this.onViewCreated),
					this.on(Laya.Event.ADDED, this, this.onViewCreated),
					i._inst || (i._inst = this);
			}
			static get inst() {
				return i._inst || (i._inst = new i()), i._inst;
			}
			onViewCreated() {
				if (!this.viewCreated && this.btn_level0) {
					this.viewCreated = !0;
					for (let t = 0; t < 3; t++)
						this['btn_level' + t].on(
							Laya.Event.CLICK,
							this,
							this.showGameMain,
							[t]
						);
					(this.parent && this.visible) ||
						this.showView(this.viewData);
				}
			}
			showView(t = null) {
				if ((t && (this.viewData = t), this.btn_level0)) {
					this.visible = !0;
					for (let t = 0; t < 3; t++)
						this['lab_level' + t].text = w.getTimeStr(
							w.pData.time[t]
						);
					h.inst.panelLayer.addChild(this);
				}
			}
			showGameMain(t) {
				p.getInstance().showInterstitial(() => {
					v.inst.showView({ level: t }), this.closeView();
				});
			}
			closeView() {
				this.removeSelf(), this.clearData();
			}
			clearData() {
				(this.visible = !1), (this.viewData = null);
			}
		}
		(g || (g = {})).GameLevel = i;
	})();
	var u,
		_ = g.GameLevel;
	!(function (t) {
		class i extends e.gameView.Panel.LoadingUI {
			constructor() {
				super(),
					(this.resLoad = [
						'res/atlas/Common.atlas',
						'res/atlas/MGame.atlas',
						'res/atlas/SelectLevel.atlas',
						'gameView/Item/Btn_Rotation.json',
						'gameView/Item/Slot.json',
						'gameView/Panel/GameLevel.json',
						'gameView/Panel/GameMain.json',
						'MGame/bg.png',
						'MGame/num2.png',
					]),
					this.once('onViewCreated', this, this.onViewCreated),
					i._inst || (i._inst = this);
			}
			static get inst() {
				return i._inst || (i._inst = new i()), i._inst;
			}
			showView(t = null) {
				t && (this.viewData = t),
					this.prb_load &&
						((this.prb_load.value = 0),
						(this.visible = !0),
						h.inst.panelLayer.addChild(this),
						Laya.loader.load(
							this.resLoad,
							Laya.Handler.create(this, this.startup),
							Laya.Handler.create(this, this.setprb, null, !1)
						));
			}
			setprb(t) {
				this.prb_load.value = 1 == t ? 0.99 : t;
			}
			startup() {
				Laya.loader.load(
					'cnf.json',
					Laya.Handler.create(this, (t) => {
						p.getInstance().startup('Rotate-Jigsaw', t.id, () => {
							this.loadEnd(),
								h.inst.yad.on(
									Laya.Event.MOUSE_DOWN,
									h.inst.yad,
									() => {
										p.getInstance().navigate(
											'GAME',
											'LOGO'
										);
									}
								);
						});
					})
				);
			}
			loadEnd() {
				(this.prb_load.value = 1), _.inst.showView(), this.closeView();
			}
			onViewCreated() {
				(this.prb_load.value = 1),
					(this.parent && this.visible) ||
						this.showView(this.viewData);
			}
			closeView() {
				this.removeSelf(), this.clearData();
			}
			clearData() {
				(this.visible = !1), (this.viewData = null);
			}
		}
		(u || (u = {})).Loading = i;
	})();
	var b,
		y = u.Loading;
	!(function (e) {
		(b || (b = {})).Main = class {
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
				Laya.stage.addChild(h.inst), y.inst.showView();
			}
		};
	})(),
		new b.Main();
})();
