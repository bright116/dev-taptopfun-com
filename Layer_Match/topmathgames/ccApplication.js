!(function () {
	'use strict';
	class e {
		static create(e) {
			const a = new t();
			return (a.name = e || ''), this.bundles.push(a), a;
		}
	}
	(e.BUNDLEID = 0), (e.bundles = []);
	class t {
		constructor() {
			(this.bundleId = 0),
				(this.name = ''),
				(this.urls = []),
				(this.completeurls = []),
				(this.errorurls = []),
				(this.bitmapfnts = []),
				(this.ret = {}),
				(this.bundleId = e.BUNDLEID++);
		}
		push(e) {
			return (
				e instanceof Array
					? this.urls.push(...e)
					: this.urls.indexOf(e) < 0 && this.urls.push(e),
				this
			);
		}
		remove(e) {
			let t = this.urls.indexOf(e);
			return t >= 0 && this.urls.splice(t, 1), this;
		}
		loadAssetAsync() {
			const e = this.urls.shift();
			e
				? Laya.loader.create(
						e,
						Laya.Handler.create(this, this.onUrlCompleteAsync, [e])
				  )
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(this),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		loadAsset() {
			for (let e = 0; e < this.urls.length; e++) {
				const t = this.urls[e];
				t.indexOf('.bitmapfnt') > -1
					? (this.bitmapfnts.push(t),
					  Laya.loader.create(
							t,
							Laya.Handler.create(this, this.onUrlComplete, [t]),
							null,
							Laya.Loader.XML
					  ))
					: t.indexOf('.scene') > -1
					? Laya.Scene.load(
							t,
							Laya.Handler.create(this, this.onUrlComplete, [t])
					  )
					: Laya.loader.create(
							t,
							Laya.Handler.create(this, this.onUrlComplete, [t])
					  );
			}
		}
		onUrlComplete(e, t) {
			if (
				(this.completeurls.push(e),
				this._onProgressCallback &&
					this._onProgressCallback(
						this.completeurls.length / this.urls.length
					),
				t || this.errorurls.push(e),
				(this.ret[e] = t),
				this.completeurls.length === this.urls.length)
			) {
				for (let e = 0; e < this.bitmapfnts.length; e++) {
					const t = this.bitmapfnts[e],
						a = new Laya.BitmapFont();
					a.parseFont(
						Laya.loader.getRes(t),
						Laya.loader.getRes(t.replace('.bitmapfnt', '.png'))
					),
						Laya.Text.registerBitmapFont(
							t.replace('.bitmapfnt', ''),
							a
						),
						console.log('注册字体:', t.replace('.bitmapfnt', ''));
				}
				this._onCompleteCallback &&
					(this._onCompleteCallback(this),
					(this._onCompleteCallback = null),
					(this._onProgressCallback = null));
			}
		}
		onUrlCompleteAsync(e, t) {
			this.completeurls.push(e),
				this._onProgressCallback &&
					this._onProgressCallback(
						this.completeurls.length / this.urls.length
					),
				t || this.errorurls.push(e);
			const a = this.urls.shift();
			a
				? Laya.loader.create(
						a,
						Laya.Handler.create(this, this.onUrlCompleteAsync, [a])
				  )
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		onProgress(e, t) {
			e instanceof Function
				? (this._onProgressCallback = e)
				: t && (this._onProgressCallback = t.bind(e));
		}
		onComplete(e, t) {
			e instanceof Function
				? (this._onCompleteCallback = e)
				: t && (this._onCompleteCallback = t.bind(e));
		}
	}
	class a {
		constructor(e, t) {
			(this.canAds = !0),
				e &&
					document &&
					((document.title = e.replace(/-/g, ' ')),
					(this.appName = e)),
				cc.onLayaEngine
					? (window.Laya3D
							? Laya3D.init(t.width, t.height)
							: Laya.init(t.width, t.height, Laya.WebGL),
					  Laya.Physics && Laya.Physics.enable(),
					  Laya.DebugPanel && Laya.DebugPanel.enable(),
					  (Laya.stage.scaleMode = t.scaleMode),
					  (Laya.stage.screenMode = t.screenMode),
					  (Laya.stage.alignV = t.alignV),
					  (Laya.stage.alignH = t.alignH),
					  (Laya.URL.exportSceneToJson = t.exportSceneToJson),
					  t.physicsDebug &&
							Laya.PhysicsDebugDraw &&
							Laya.PhysicsDebugDraw.enable(),
					  t.stat && Laya.Stat.show(),
					  Laya.ResourceVersion.enable(
							'version.json',
							Laya.Handler.create(this, this.onVersionLoaded),
							Laya.ResourceVersion.FILENAME_VERSION
					  ))
					: this.onLoadAssetComplete_(),
				cc.Application.startup(this);
		}
		onVersionLoaded() {
			Laya.AtlasInfoManager.enable(
				'fileconfig.json',
				Laya.Handler.create(this, this.onConfigLoaded)
			);
		}
		onConfigLoaded() {
			cc.Application.isConchApp
				? Laya.Scene.load(
						'topmathgames/perload.json',
						Laya.Handler.create(this, this.onPerLoaded)
				  )
				: this.loadAsset();
		}
		onPerLoaded(e) {
			if (e && e instanceof Laya.Scene) {
				(this.perLoadScene = e),
					(this.perLoadScene.alpha = 0),
					(this.perLoadScene.width = Laya.stage.width),
					(this.perLoadScene.height = Laya.stage.height);
				const t = { opacity: 1 };
				e.open(!1, null),
					Laya.Tween.to(
						t,
						{
							opacity: 0,
							update: new Laya.Handler(this, () => {
								window.loadingView.loadingAlpha(t.opacity),
									(this.perLoadScene.alpha = 1 - t.opacity);
							}),
						},
						500,
						null,
						Laya.Handler.create(this, () => {
							window.loadingView.hideSplash(), this.loadAsset();
						}),
						500
					);
			} else this.loadAsset();
		}
		loadAsset() {
			let t = e.create();
			t.push('resources.json');
			var a = this;
			t.onComplete(null, function () {
				let t = Laya.loader.getRes('resources.json');
				if (t) {
					let s = e.create();
					s.onProgress(a, a.onLoadAssetProgress_),
						s.onComplete(a, a.onLoadAssetComplete_),
						s.push(t.scenes),
						s.push(t.fonts),
						s.push(t.fonts),
						s.push(t.jsons),
						s.push(t.images),
						s.push(t.atlas),
						s.push(t.bitmapfnts),
						cc.AudioEngine.load(t.sounds);
					const n = cc.Application.asset;
					n && n.length > 0 && s.push(n), s.loadAsset();
				} else a.onLoadAssetComplete_();
			}),
				t.loadAsset();
		}
		onLoadAssetProgress_(e) {
			if (cc.Application.isConchApp)
				this.perLoadScene
					? (this.perLoadScene.progress.value = e)
					: window.loadingView && window.loadingView.loading(100 * e);
			else {
				var t = document.getElementById('progress');
				t && (t.value = 100 * e);
			}
			this.onLoadAssetProgress(e);
		}
		onLoadAssetComplete_() {
			if ((this.onLoadAssetComplete(), void 0 !== window.topmathgames))
				if (cc.onLayaEngine) {
					const e = Laya.loader.getRes('topmathgames/cnf.json') || {};
					topmathgames.startup({
						appName: this.appName,
						gd: e.id,
						onComplete: () => {
							this.startup();
						},
					});
				} else
					topmathgames.startup({
						appName: this.appName,
						onComplete: () => {
							this.startup();
						},
					});
			else this.startup();
		}
		startup() {
			if (cc.Application.isConchApp) {
				cc.Applicationbridge.call("startup");
				const t = {
						opacity: 1
				};
				Laya.Tween.to(t, {
						opacity: 0,
						update: new Laya.Handler(this, () => {
								window.loadingView.loadingAlpha(t.opacity)
						})
				}, 1e3, null, Laya.Handler.create(this, () => {
						window.loadingView.hideSplash()
				}), 1e3)
		} else {
				const t = document.getElementById("splash");
				if (t) {
						const e = {
								opacity: 1
						};
						Laya.Tween.to(e, {
								opacity: 0,
								update: new Laya.Handler(this, () => {
										t.style.opacity = e.opacity + ""
								})
						}, 500, null, Laya.Handler.create(this, () => {
								t.style.display = "none"
						}))
				}
		}
		this.onStartup()
		}
		onStartup() {}
		onLoadAssetProgress(e) {}
		onLoadAssetComplete() {}
	}
	a.assest = [];
	class s {
		constructor() {
			if (
				((this.EVENT_REWARD_STATUS_CHANGE =
					'cc.admob.reward_status_change'),
				(this.EVENT_INTERSTITIAL_STATUS_CHANGE =
					'cc.admob.interstitial_status_change'),
				(this._isLoading = !1),
				(this._isRewarded = !1),
				(this.canRewarded = !1),
				(this.canInterstitial = !1),
				(this._onRewardeds = []),
				(this._onInterstitials = []),
				(this.onInterstitialPresent = function () {
					this._isLoading = !1;
				}),
				window.conchConfig)
			) {
				const e = window.conchConfig.getOS();
				'Conch-ios' == e
					? (this._bridge = window.PlatformClass.createClass('admob'))
					: 'Conch-android' == e &&
					  (this._bridge =
							window.PlatformClass.createClass('ads.admob'));
			}
		}
		showReward(e, t, a) {
			(this._onRewardeds[0] = e),
				(this._onRewardeds[1] = t),
				(this._onRewardeds[2] = a),
				this.canRewarded
					? this._isLoading ||
					  ((this._isLoading = !0),
					  this._bridge && this._bridge.call('showReward'))
					: this.onRewardedCompleted();
		}
		onRewardedStatusChanged(e) {
			(this.canRewarded = e),
				cc.Application.event(this.EVENT_REWARD_STATUS_CHANGE, [e]);
		}
		onRewarded() {
			this._isRewarded = !0;
		}
		onRewardedPresent() {
			this._isLoading = !1;
		}
		onRewardedCompleted() {
			this._isRewarded
				? this._onRewardeds[0] && this._onRewardeds[0]()
				: (this._onRewardeds[1] && this._onRewardeds[1](),
				  this._onRewardeds[2] && this._onRewardeds[2]()),
				this._clearReward();
		}
		_clearReward() {
			(this._isRewarded = !1),
				(this._isLoading = !1),
				(this._onRewardeds.length = 0);
		}
		showInterstitial(e) {
			this.canInterstitial
				? this._isLoading ||
				  ((this._isLoading = !0),
				  this._bridge &&
						((this._onInterstitials[0] = e),
						this._bridge.call('showInterstitial')))
				: e && e();
		}
		onInterstitialStatusChanged(e) {
			(this.canInterstitial = e),
				cc.Application.event(this.EVENT_INTERSTITIAL_STATUS_CHANGE, [
					e,
				]);
		}
		onInterstitialCompleted() {
			this._onInterstitials[0] && this._onInterstitials[0](),
				(this._onInterstitials.length = 0);
		}
	}
	class n {}
	class i {
		constructor() {
			(this._audioInstances = new Map()),
				(this._audioContext = null),
				(this._audioWebEnabled = !1),
				(this._muted = !1),
				(this._paused = !1),
				this.initialize();
		}
		static Instance() {
			return this._instance || (this._instance = new i()), this._instance;
		}
		initialize() {
			if (cc.Application.isConchApp);
			else
				try {
					(window.AudioContext =
						window.AudioContext || window.webkitAudioContext),
						(this._audioContext = new AudioContext());
					let e = this;
					let t = setInterval(function () {
						'suspended' === e._audioContext.state
							? e._audioContext.resume()
							: clearInterval(t);
					}, 400);
					this._audioWebEnabled = !0;
				} catch (e) {
					alert('Web Audio API is not supported in this browser');
				}
		}
		set muted(e) {
			(this._muted = e),
				this._muted
					? this._audioContext.suspend()
					: this._paused || this.resume();
		}
		get muted() {
			return this._muted;
		}
		pause() {
			(this._paused = !0),
				cc.Application.isConchApp
					? Laya.SoundManager.stopAll()
					: this._audioContext.suspend();
		}
		resume() {
			(this._paused = !1),
				cc.Application.isConchApp ||
					this._muted ||
					this._audioContext.resume();
		}
		stop(e) {
			if (cc.Application.isConchApp) Laya.SoundManager.stopSound(e);
			else if (this._audioInstances.has(e)) {
				const t = this._audioInstances.get(e).channel;
				if (t.source.buffer) {
					try {
						t.source.stop(this._audioContext.currentTime);
					} catch (e) {
						t.source.disconnect();
					}
					(t.source.onended = function () {}), t.setup();
				}
			}
		}
		playMusic(e) {
			cc.Application.isConchApp && Laya.SoundManager.playMusic(e);
		}
		play(e, t = !1) {
			if (cc.Application.isConchApp);
			else {
				if (!this._audioWebEnabled) return;
				if (this._audioInstances.has(e)) {
					this.stop(e);
					const a = this._audioInstances.get(e),
						s = a.channel;
					if (a.buffer)
						try {
							s.playBuffer(
								this._audioContext.currentTime,
								a.buffer
							),
								(s.source.loop = t);
						} catch (e) {
							console.error('playBuffer error. Exception: ' + e);
						}
				} else
					this.downloadArrayBuffer(e, () => {
						this.play(e, t);
					});
			}
		}
		load(e, t) {
			let a = e.length,
				s = 0;
			for (let n = 0; n < e.length; n++) {
				const i = e[n];
				this.downloadArrayBuffer(i, () => {
					++s >= a && t && t();
				});
			}
		}
		setThreeD(e) {
			if (this._audioInstances.has(e)) {
				this._audioInstances.get(e).channel.threeD = !0;
			}
		}
		createChannel() {
			let e = this._audioContext,
				t = {
					gain: e.createGain(),
					panner: e.createPanner(),
					threeD: !1,
					playBuffer: function (e, t, a) {
						this.source.buffer = t;
						var s = this;
						(this.source.onended = function () {
							s.setup();
						}),
							this.source.start(e, a);
					},
					setup: function () {
						(this.source = e.createBufferSource()),
							this.setupPanning();
					},
					setupPanning: function () {
						this.threeD
							? (this.source.disconnect(),
							  this.source.connect(this.panner),
							  this.panner.connect(this.gain))
							: (this.panner.disconnect(),
							  this.source.connect(this.gain));
					},
				};
			return (
				(t.panner.rolloffFactor = 0),
				t.gain.connect(this._audioContext.destination),
				t.setup(),
				t
			);
		}
		downloadArrayBuffer(e, t) {
			if (this._audioInstances.has(e)) t && t();
			else {
				var a = new XMLHttpRequest();
				a.open('GET', e, !0),
					(a.responseType = 'arraybuffer'),
					(a.onload = () => {
						if (200 !== a.status && 0 !== a.status)
							throw 'no response';
						{
							const s = new n();
							(s.url = e),
								(s.channel = this.createChannel()),
								this._audioInstances.set(e, s),
								this._audioContext.decodeAudioData(
									a.response,
									function (e) {
										(s.buffer = e), t && t();
									},
									function () {
										(s.error = !0),
											t && t(),
											console.log('Decode error.');
									}
								);
						}
					}),
					(a.onerror = function () {
						throw (t && t(), 'no response');
					}),
					(a.ontimeout = function () {
						t && t();
					}),
					(a.onabort = function () {
						t && t();
					}),
					a.send(null);
			}
		}
	}
	class o {
		static log(e, ...t) {
			this.LOG_(
				'%c %c Framework: %c',
				'background: #646b69',
				'color: #ffffff; background: #073d2e',
				'background: #646b69',
				e,
				...t
			);
		}
		static error(e, ...t) {
			this.ERROR_(
				'%c %c Framework: %c',
				'background: #646b69',
				'color: #ffffff; background: #073d2e',
				'background: #646b69',
				e,
				...t
			);
		}
	}
	(o.ERROR_ = console.error || function (e, ...t) {}),
		(o.LOG_ = console.log || function (e, ...t) {});
	var r = null;
	if ('undefined' != typeof Laya) {
		class e extends Laya.Scene {
			static open(t, a, s, n, i) {
				if (s instanceof Laya.Handler) {
					var o = n;
					(n = s), (s = o);
				}
				e.load(
					t,
					Laya.Handler.create(null, this.onSceneLoaded_, [a, n, s]),
					i
				);
			}
			static onSceneLoaded_(e, t, a, s) {
				(s.param = a), s.open(e, a), t && t.runWith(s);
			}
			static load(t, a = null, s = null) {
				Laya.loader.resetProgress();
				var n = new Laya.SceneLoader();
				function onProgress(t) {
					e._loadPage && e._loadPage.event('progress', t),
						s && s.runWith(t);
				}
				n.on(Laya.Event.PROGRESS, null, onProgress),
					n.once(Laya.Event.COMPLETE, null, function () {
						n.off(Laya.Event.PROGRESS, null, onProgress);
						var e = Laya.Loader.getRes(t);
						if (!e) throw 'Can not find scene:' + t;
						if (!e.props) throw 'Scene data is error:' + t;
						var s = e.props.runtime ? e.props.runtime : e.type,
							i = Laya.ClassUtils.getClass(s);
						if ('instance' == e.props.renderType)
							var o = i.instance || (i.instance = new i());
						else o = new i();
						if (!(o && o instanceof Laya.Node))
							throw 'Can not find scene:' + s;
						((o = o).url = t),
							o._getBit(Laya.Const.NOT_READY)
								? (o.on('onViewCreated', null, function () {
										a && a.runWith(o);
								  }),
								  o.createView(e))
								: a && a.runWith(o);
					}),
					n.load(t);
			}
			open(t = !0, a = null) {
				t && e.closeAll(), e.root.addChild(this), this.onOpened(a);
			}
			onOpened(e) {}
			getChildByName(e) {
				return super.getChildByName(e);
			}
		}
		r = e;
	} else r = class {};
	var c = r;
	const l = window.cc || {};
	if (
		((window.cc = l),
		'undefined' == typeof Laya
			? (l.onLayaEngine = !1)
			: (l.onLayaEngine = !0),
		(l.Admob = {}),
		(l.Tween = class {
			static to(e, t, a, s, n, i, o, r) {
				return new Promise(function (c, l) {
					Laya.Tween.to(
						e,
						t,
						a,
						s,
						Laya.Handler.create(null, () => {
							n && n.run(), c();
						}),
						i,
						o,
						r
					);
				});
			}
			static all(e) {
				return Promise.all(e);
			}
		}),
		(l.Application = new (class {
			constructor() {
				(this.appDelegate = null),
					(this.canNavigateActive_ = !1),
					(this.screen_ = ''),
					(this.action_ = ''),
					(this.to_ = ''),
					(this.canAds = !0),
					(this.assest = []),
					window.conch
						? (this.isConchApp = !0)
						: (this.isConchApp = !1);
			}
			startup(e) {
				(this.appDelegate = e),
					cc.onLayaEngine &&
						(this.init(),
						Laya.stage.on(
							Laya.Event.RESIZE,
							this,
							this.onOrientationOrResizeChange
						));
			}
			onOrientationOrResizeChange() {
				this.isBangsScreen = Laya.stage.height / Laya.stage.width > 1.8;
			}
			on(e, t, a, s) {
				Laya.stage.on(e, t, a, s);
			}
			off(e, t, a) {
				Laya.stage.off(e, t, a, !1);
			}
			event(e, t) {
				return Laya.stage.event(e, t);
			}
			onApplicationEnterForeground() {}
			onApplicationEnterBackground() {}
			open(e, t, a, s, n) {
				c.open(e, t, a, s, n);
			}
			getSceneByUri(e) {
				var t = Laya.Scene.root._children;
				if (t)
					for (var a = 0, s = t.length; a < s; a++) {
						var n = t[a];
						if (n.url === e) return n;
					}
				return null;
			}
			init() {
				window &&
					((window.onerror = this.onApplicationTracback.bind(this)),
					document &&
						((this._canvas = document.getElementById('layaCanvas')),
						this._canvas &&
							(this._canvas.addEventListener(
								'mouseup',
								this.onNavigate_.bind(this)
							),
							this._canvas.addEventListener(
								'touchend',
								this.onNavigate_.bind(this)
							)),
						document.body &&
							((document.body.onfocus =
								this.onFocusEvent.bind(this)),
							(document.body.onblur =
								this.onFocusEvent.bind(this)),
							window.conch || document.body.focus())));
			}
			onFocusEvent(e) {
				'blur' === e.type
					? this.onApplicationEnterBackground()
					: 'focus' === e.type && this.onApplicationEnterForeground();
			}
			onApplicationTracback(e, t, a, s, n) {
				let i = 0;
				i++ < 5 && n && o.error('\n' + e + '\n' + n.stack);
			}
			onNavigate_() {
				// this.canNavigateActive_ &&
				// 	this.navigate_(this.screen_, this.action_, this.to_),
					(this.canNavigateActive_ = !1);
			}
			navigate_(e, t, a) {
				this.appDelegate &&
					'undefined' != typeof topmathgames &&
					topmathgames.navigateTo(this.appDelegate.appName, e, t, a);
			}
			navigate(e, t, a) {
				!1 === this.canNavigateActive_ &&
					((this.screen_ = e),
					(this.action_ = t),
					(this.to_ = a),
					(this.canNavigateActive_ = !0));
			}
			showInterstitial(e) {
        console.log("请求插屏广告");
        HUHU_showInterstitialAd();
        e && e();
        return;
				// this.canAds
				// 	? cc.Application.isConchApp
				// 		? cc.Admob.showInterstitial(e)
				// 		: 'undefined' != typeof topmathgames &&
				// 		  (cc.AudioEngine.pause(),
				// 		  topmathgames.showInterstitial(() => {
				// 				cc.AudioEngine.resume(), e && e();
				// 		  }))
				// 	: e && e();
			}
			showReward(e, t, a) {
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
				// return this.canAds
				// 	? cc.Application.isConchApp && !cc.Admob.canRewarded
				// 		? (null == t
				// 				? this.prompt(
				// 						'Failed to get the reward, ad is not ready.'
				// 				  )
				// 				: t && t(),
				// 		  void (a && a()))
				// 		: (null == t &&
				// 				(t = () => {
				// 					this.prompt(
				// 						'Failed to get the reward, please watch the ads to the end.'
				// 					);
				// 				}),
				// 		  void (cc.Application.isConchApp
				// 				? cc.Admob.showReward(e, t, a)
				// 				: 'undefined' != typeof topmathgames &&
				// 				  (cc.AudioEngine.pause(),
				// 				  topmathgames.showReward(e, t, () => {
				// 						cc.AudioEngine.resume(), a && a();
				// 				  }))))
				// 	: (e && e(), void (a && a()));
			}
			prompt(e, t) {
				if (!this._prompt) {
					var a = new Laya.Dialog();
					a.closeEffect = null;
					const e = new Laya.Image();
					(e.sizeGrid = '10,10,10,10'),
						(e.centerX = 0),
						(e.centerY = -200),
						(e.height = 160),
						(e.skin = 'topmathgames/prompt.png');
					const t = new Laya.Label();
					(t.left = t.right = t.top = t.bottom = 10),
						(t.wordWrap = !0),
						(t.valign = 'middle'),
						(t.fontSize = 52),
						(t.color = '#f8f3f3'),
						(t.bold = !0),
						(t.align = 'center'),
						e.addChild(t),
						a.addChild(e),
						(a.setParam = function (s, n) {
							(a.width = Laya.stage.width),
								(a.height = Laya.stage.height),
								(e.width = Laya.stage.width - 120),
								(n = isNaN(n) ? 4e3 : n),
								(t.text = s),
								t.height > 100 && (e.height = t.height + 20),
								(e.alpha = 1),
								a.show(),
								Laya.Tween.to(
									e,
									{ alpha: 0 },
									n / 2,
									null,
									Laya.Handler.create(this, () => {
										a.close();
									}),
									n / 2
								);
						}),
						(this._prompt = a);
				}
				this._prompt && this._prompt.setParam(e, t);
			}
		})()),
		(l.ApplicationDelegate = a),
		(l.AudioEngine = i.Instance()),
		l.Application.isConchApp)
	) {
		l.Admob = new s();
		const e = window.conchConfig.getOS();
		'Conch-ios' == e
			? (l.Applicationbridge = window.PlatformClass.createClass(
					'ccApplicationbridge'
			  ))
			: 'Conch-android' == e &&
			  (l.Applicationbridge = window.PlatformClass.createClass(
					'cc.ccApplicationbridge'
			  ));
	}
})();
