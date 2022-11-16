!(function () {
	'use strict';
	class t {
		constructor() {
			(this.LANGUAGE_ENGLISH = 'en'),
				(this.LANGUAGE_CHINESE = 'zh'),
				(this.isCocosCreatorGame = !1),
				(this.isLayaGame = !1),
				(this.isBrowser = !1),
				(this.isMobile = !1),
				(this.isBrowser =
					'object' == typeof window && 'object' == typeof document),
				this.isBrowser &&
					(window.isConchApp
						? ((this.isMobile = !0), (this.isBrowser = !1))
						: (this.isMobile =
								window.navigator.userAgent.indexOf('Mobile') >
								-1),
					'object' == typeof Laya && (this.isLayaGame = !0),
					'object' == typeof cc &&
						cc.Director &&
						(this.isCocosCreatorGame = !0));
		}
	}
	class e {}
	class s {
		constructor() {
			(this._audioInstances = new Map()),
				(this._audioContext = null),
				(this._audioWebEnabled = !1),
				(this._muted = !1),
				(this._paused = !1),
				(this._musicVolume = 100),
				this.initialize();
		}
		initialize() {
			try {
				(window.AudioContext =
					window.AudioContext || window.webkitAudioContext),
					(this._audioContext = new AudioContext());
				const t = this;
				let e = -1;
				function tryToResumeAudioContext() {
					if (!t._muted)
						return t._paused
							? (window.document.removeEventListener(
									'mousedown',
									tryToResumeAudioContext,
									!0
							  ),
							  window.document.removeEventListener(
									'touchstart',
									tryToResumeAudioContext,
									!0
							  ),
							  clearInterval(e),
							  void (e = -1))
							: void ('suspended' === t._audioContext.state
									? t._audioContext.resume()
									: (window.document.removeEventListener(
											'mousedown',
											tryToResumeAudioContext,
											!0
									  ),
									  window.document.removeEventListener(
											'touchstart',
											tryToResumeAudioContext,
											!0
									  ),
									  clearInterval(e),
									  (e = -1)));
				}
				window.document.addEventListener(
					'mousedown',
					tryToResumeAudioContext,
					!0
				),
					window.document.addEventListener(
						'touchstart',
						tryToResumeAudioContext,
						!0
					),
					(e = setInterval(tryToResumeAudioContext, 200)),
					(this._audioContext.onstatechange = function () {
						'suspended' === t._audioContext.state &&
							!1 === t._muted &&
							!1 === t._paused &&
							-1 === e &&
							(window.document.addEventListener(
								'mousedown',
								tryToResumeAudioContext,
								!0
							),
							window.document.addEventListener(
								'touchstart',
								tryToResumeAudioContext,
								!0
							),
							(e = setInterval(tryToResumeAudioContext, 200)));
					}),
					(this._audioWebEnabled = !0);
			} catch (t) {
				alert('Web Audio API is not supported in this browser');
			}
		}
		set muted(t) {
			(this._muted = t),
				this._muted
					? this._audioContext.suspend()
					: this._paused || this._resume();
		}
		get muted() {
			return this._muted;
		}
		set pause(t) {
			if (((this._paused = t), this._paused))
				this._audioContext.suspend();
			else {
				if (this._muted) return;
				this._resume();
			}
		}
		get pause() {
			return this._paused;
		}
		_resume() {
			this._muted || this._audioContext.resume();
		}
		stopAll() {
			const t = this._audioInstances.values();
			for (const e of t) {
				const t = e.instance;
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
		stop(t) {
			if (this._audioInstances.has(t)) {
				const e = this._audioInstances.get(t);
				this._stopSound(e);
			}
		}
		_stopSound(t) {
			const e = t.instance;
			if (e.source.buffer) {
				try {
					e.source.stop(this._audioContext.currentTime);
				} catch (t) {
					e.source.disconnect();
				}
				(e.source.onended = function () {}), e.setup();
			}
		}
		playMusic(t) {
			this._music && this._stopSound(this._music),
				this._audioInstances.has(t)
					? ((this._music = this._audioInstances.get(t)),
					  (this.musicVolume = this._musicVolume),
					  this.play(t, !0))
					: this.downloadArrayBuffer(t, () => {
							this.playMusic(t);
					  });
		}
		stopMusic() {
			this._music && this._stopSound(this._music);
		}
		set musicVolume(t) {
			(this._musicVolume = t),
				this._music &&
					(this._music.instance.gain.gain.value =
						this._musicVolume / 100);
		}
		get musicVolume() {
			return this._musicVolume;
		}
		play(t, e = !1, s = !1) {
			if (this._audioWebEnabled)
				if (this._audioInstances.has(t)) {
					const i = this._audioInstances.get(t),
						o = i.instance;
					if (s && !o.ended) return;
					if ((this.stop(t), i.buffer))
						try {
							o.playBuffer(
								this._audioContext.currentTime,
								i.buffer
							),
								(o.source.loop = e);
						} catch (t) {
							console.error('playBuffer error. Exception: ' + t);
						}
				} else
					this.downloadArrayBuffer(t, () => {
						this.play(t, e);
					});
		}
		load(t, e) {
			let s = t.length,
				i = 0;
			for (let o = 0; o < t.length; o++) {
				const n = t[o];
				this.downloadArrayBuffer(n, () => {
					++i >= s && e && e();
				});
			}
		}
		setThreeD(t) {
			if (this._audioInstances.has(t)) {
				this._audioInstances.get(t).instance.threeD = !0;
			}
		}
		createSoundInstance() {
			let t = this._audioContext;
			const e = {
				gain: t.createGain(),
				panner: t.createPanner(),
				threeD: !1,
				ended: !1,
				playBuffer: function (t, e, s) {
					this.source.buffer = e;
					var i = this;
					(this.ended = !1),
						(this.source.onended = function () {
							i.setup(), (i.ended = !0);
						}),
						this.source.start(t, s);
				},
				setup: function () {
					(this.source = t.createBufferSource()), this.setupPanning();
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
				(e.panner.rolloffFactor = 0),
				e.gain.connect(this._audioContext.destination),
				e.setup(),
				e
			);
		}
		parse(t, s, i) {
			const o = new e();
			(o.url = t),
				(o.instance = this.createSoundInstance()),
				this._audioInstances.set(t, o),
				this._audioContext.decodeAudioData(
					s,
					function (t) {
						(o.buffer = t), i && i();
					},
					function () {
						(o.error = !0),
							i && i(),
							console.log('Decode error.' + o.url);
					}
				);
		}
		downloadArrayBuffer(t, e) {
			if (this._audioInstances.has(t)) return void (e && e());
			const s = this;
			var i = new XMLHttpRequest();
			i.open('GET', t, !0),
				(i.responseType = 'arraybuffer'),
				(i.onload = function () {
					if (200 !== i.status && 0 !== i.status) throw 'no response';
					s.parse(t, i.response, e);
				}),
				(i.onerror = function () {
					throw (e && e(), 'no response');
				}),
				(i.ontimeout = function () {
					e && e();
				}),
				(i.onabort = function () {
					e && e();
				}),
				i.send(null);
		}
	}
	class i {
		constructor() {
			this.canAds = !0;
		}
		showInterstitial(t) {
			return new Promise((e, s) => {
				function onCompleted_() {
					t && t(), e();
				}
				this.canAds && 'undefined' != typeof topmathgames
					? topmathgames.showInterstitial(onCompleted_)
					: onCompleted_ && onCompleted_();
			});
		}
		showReward(t, e, s) {
      console.log("请求激励广告");
			return new Promise((i, o) => {
				function onCompleted_() {
					t && t(), i(!0);
				}
        HUHU_showRewardedVideoAd(
            () => {
                // 用户观看广告完成，继续游戏
                t && t();
            },
            () => {
              // 广告请求失败或者用户跳过广告
              onCompleted_,
							function () {
								e && e(), i(!1);
							},
              promptMessage("Failed to get the reward, please watch the ads to the end.");
            }
        );
        return;
				// function onCompleted_() {
				// 	t && t(), i(!0);
				// }
				// this.canAds && 'undefined' != typeof topmathgames
				// 	? topmathgames.showReward(
				// 			onCompleted_,
				// 			function () {
				// 				e && e(), i(!1);
				// 			},
				// 			s
				// 	  )
				// 	: onCompleted_();
			});
		}
		startup(t) {
			return new Promise((e, s) => {
        e();
        (s.type = 'text/javascript'),
        (s.async = !0),
        (s.src =
          '/public/newafg/huhuSDK.js'),
        (s.id = 'SKD_topmathgames'),
        document.head.appendChild(s);
				// if (document.getElementById('SKD_topmathgames'))
				// 	topmathgames.event('INITIALIZED'),
				// 		topmathgames.startup({
				// 			appName: t,
				// 			gd: '',
				// 			onComplete: () => {
				// 				e();
				// 			},
				// 		});
				// else {
				// 	const s = document.createElement('script');
				// 	(s.onload = function () {
				// 		topmathgames.event('INITIALIZED'),
				// 			topmathgames.startup({
				// 				appName: t,
				// 				gd: '',
				// 				onComplete: () => {
				// 					e();
				// 				},
				// 			});
				// 	}.bind(this)),
				// 		(s.onerror = function () {
				// 			topmathgames.showModal(
				// 				'Please Disable Adblock',
				// 				'Without ads, we will not survive. Please disable adblock and then click refresh button, thank you!',
				// 				function () {
				// 					location.reload();
				// 				},
				// 				null,
				// 				'Refresh'
				// 			),
				// 				e();
				// 		}.bind(this)),
				// 		(s.type = 'text/javascript'),
				// 		(s.async = !0),
				// 		(s.src =
				// 			'/public/newafg/huhuSDK.js'),
				// 		(s.id = 'SKD_topmathgames'),
				// 		document.head.appendChild(s);
				// }
			});
		}
	}
	const o = /(\.[^\.\/\?\\]*)(\?.*)?$/;
	class n {
		static basename(t, e) {
			var s = t.indexOf('?');
			s > 0 && (t = t.substring(0, s));
			var i = /(\/|\\)([^\/\\]+)$/g.exec(t.replace(/(\/|\\)$/, ''));
			if (!i) return t;
			var o = i[2];
			return e &&
				t.substring(t.length - e.length).toLowerCase() ===
					e.toLowerCase()
				? o.substring(0, o.length - e.length)
				: o;
		}
		static extname(t) {
			var e = o.exec(t);
			return e ? e[1] : '';
		}
	}
	class a {
		constructor() {
			(this._totalurlsAsyncCnt = 0),
				(this.urls = []),
				(this.completeurls = []),
				(this.errorurls = []),
				(this.bitmapfnts = []),
				(this.dragonBones = []);
		}
		perload(t, e) {
			return new Promise((s, i) => {
				function _complete() {
					t && t(), s();
				}
				Laya.loader.create(
					'resources.json',
					Laya.Handler.create(this, () => {
						const t = Laya.loader.getRes('resources.json');
						t
							? (this.onProgress(e),
							  this.onComplete(_complete),
							  this.push(t.sounds),
							  this.push(t.fonts),
							  this.push(t.images),
							  this.push(t.atlas),
							  this.push(t.bitmapfnts),
							  this.push(t.dragonBones),
							  this.push(t.jsons),
							  this.push(t.scenes),
							  this.loadAssetAsync())
							: _complete();
					})
				);
			});
		}
		push(t) {
			return (
				t instanceof Array
					? this.urls.push(...t)
					: this.urls.indexOf(t) < 0 && this.urls.push(t),
				this
			);
		}
		remove(t) {
			let e = this.urls.indexOf(t);
			return e >= 0 && this.urls.splice(e, 1), this;
		}
		loadAssetAsync() {
			this._totalurlsAsyncCnt = this.urls.length;
			const t = this.urls.shift();
			t
				? this.doLoader(t)
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(this),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		doLoader(t) {
			const e = n.extname(t),
				s = Laya.Handler.create(this, this._onUrlCompleteAsync, [t]);
			switch (e) {
				case '.png':
					Laya.loader.load(t, s);
					break;
				case '.bitmapfnt':
					Laya.loader.create(t, s, null, Laya.Loader.XML);
					break;
				case '.scene':
					Laya.Scene.load(t, s);
					break;
				case '.mp3':
				case '.wav':
					Laya.loader.create(t, s, null, Laya.Loader.BUFFER);
					break;
				case '.sk':
				default:
					Laya.loader.load(t, s);
			}
		}
		decode(t, e) {
			const s = n.extname(t);
			switch (s) {
				case '.bitmapfnt':
					const i = new Laya.BitmapFont();
					i.parseFont(
						Laya.loader.getRes(t),
						Laya.loader.getRes(t.replace('.bitmapfnt', '.png'))
					),
						Laya.Text.registerBitmapFont(n.basename(t, s), i),
						console.log('注册字体:', n.basename(t, s));
					break;
				case '.scene':
					break;
				case '.mp3':
				case '.wav':
					YYGGames.audio.parse(t, e);
					break;
				case '.sk':
					YYGGames.dragonBones.load(t);
			}
		}
		_onUrlCompleteAsync(t, e) {
			this.completeurls.push(t),
				this._onProgressCallback &&
					this._onProgressCallback(
						this.completeurls.length / this._totalurlsAsyncCnt
					),
				e ? this.decode(t, e) : this.errorurls.push(t);
			const s = this.urls.shift();
			s
				? this.doLoader(s)
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		onProgress(t, e) {
			t instanceof Function
				? (this._onProgressCallback = t)
				: e && (this._onProgressCallback = e.bind(t));
		}
		onComplete(t, e) {
			t instanceof Function
				? (this._onCompleteCallback = t)
				: e && (this._onCompleteCallback = e.bind(t));
		}
	}
	class r {
		static async init(t) {
			window.Laya3D
				? Laya3D.init(t.width, t.height)
				: Laya.init(t.width, t.height, Laya.WebGL),
				Laya.Physics && Laya.Physics.enable(),
				Laya.DebugPanel && Laya.DebugPanel.enable(),
				(Laya.stage.scaleMode = t.scaleMode),
				(Laya.stage.screenMode = t.screenMode),
				(Laya.stage.alignV = t.alignV),
				(Laya.stage.alignH = t.alignH),
				(Laya.URL.exportSceneToJson = t.exportSceneToJson),
				await new Promise((t, e) => {
					Laya.ResourceVersion.enable(
						'version.json',
						Laya.Handler.create(this, this.onVersionLoaded, [t]),
						Laya.ResourceVersion.FILENAME_VERSION
					);
				});
		}
		static onVersionLoaded(t) {
			Laya.AtlasInfoManager.enable(
				'fileconfig.json',
				Laya.Handler.create(this, this.onConfigLoaded, [t])
			);
		}
		static onConfigLoaded(t) {
			t();
		}
	}
	class h {
		constructor() {
			(this._totalurlsAsyncCnt = 0),
				(this.urls = []),
				(this.completeurls = []),
				(this.errorurls = []),
				(this.typeReg = /\.(\w+)\??/g);
		}
		perload(t, e) {
			return new Promise((s, i) => {
				function _complete() {
					t && t(), s();
				}
				cc.resources.load('resources', cc.JsonAsset, (t, s) => {
					if (t) _complete();
					else {
						const t = s.json;
						this.onProgress(e),
							this.onComplete(_complete),
							this.push(t.sounds),
							this.push(t.fonts),
							this.push(t.images),
							this.push(t.atlas),
							this.push(t.prefabs),
							this.push(t.dragonBones),
							this.push(t.jsons),
							this.push(t.scenes),
							this.loadAssetAsync();
					}
				});
			});
		}
		push(t) {
			return (
				t instanceof Array
					? this.urls.push(...t)
					: this.urls.indexOf(t) < 0 && this.urls.push(t),
				this
			);
		}
		remove(t) {
			let e = this.urls.indexOf(t);
			return e >= 0 && this.urls.splice(e, 1), this;
		}
		loadAssetAsync() {
			this._totalurlsAsyncCnt = this.urls.length;
			const t = this.urls.shift();
			t
				? this.toLoader(t)
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(this),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		getTypeFromUrl(t) {
			this.typeReg.lastIndex = t.lastIndexOf('.');
			let e = this.typeReg.exec(t);
			return e && e.length > 1 ? e[1].toLowerCase() : null;
		}
		toLoader(t) {
			this.getTypeFromUrl(t);
			const e = this;
			cc.resources.load(t.slice(0, t.lastIndexOf('.')), function (t, s) {
				t || e._onUrlCompleteAsync(s.url, s);
			});
		}
		decodeLoaderData(t, e) {
			this.getTypeFromUrl(t);
		}
		_onUrlCompleteAsync(t, e) {
			this.completeurls.push(t),
				this._onProgressCallback &&
					this._onProgressCallback(
						this.completeurls.length / this._totalurlsAsyncCnt
					),
				e ? this.decodeLoaderData(t, e) : this.errorurls.push(t);
			const s = this.urls.shift();
			s
				? this.toLoader(s)
				: this._onCompleteCallback &&
				  (this._onCompleteCallback(),
				  (this._onCompleteCallback = null),
				  (this._onProgressCallback = null));
		}
		onProgress(t, e) {
			t instanceof Function
				? (this._onProgressCallback = t)
				: e && (this._onProgressCallback = e.bind(t));
		}
		onComplete(t, e) {
			t instanceof Function
				? (this._onCompleteCallback = t)
				: e && (this._onCompleteCallback = e.bind(t));
		}
	}
	class c {
		constructor() {
			this.skeletons = {};
		}
		create(t, e = 0) {
			if (this.skeletons[t]) {
				return this.skeletons[t].buildArmature(e);
			}
			throw 'error LayaDragonBones' + t;
		}
		load(t) {
			const e = new Laya.Templet();
			e.loadAni(t), (this.skeletons[t] = e);
		}
	}
	class u {
		constructor() {
			(this.canNavigateActive_ = !1),
				window.document.addEventListener(
					'mouseup',
					this.onNavigate_.bind(this),
					!0
				),
				window.document.addEventListener(
					'touchend',
					this.onNavigate_.bind(this),
					!0
				);
		}
		onNavigate_() {
			// this.canNavigateActive_ &&
			// 	topmathgames.navigate(this.screen_, this.action_, this.to_),
				(this.canNavigateActive_ = !1);
		}
		navigate(t, e, s) {
			!1 === this.canNavigateActive_ &&
				((this.screen_ = t),
				(this.action_ = e),
				(this.to_ = s),
				(this.canNavigateActive_ = !0));
		}
	}
	function Find(t, e) {
		if (null == t) return null;
		if (!e) return null;
		for (
			var s = e, i = '/' !== t[0] ? 0 : 1, o = t.split('/'), n = i;
			n < o.length;
			n++
		) {
			var a = o[n],
				r = s._children;
			s = null;
			for (var h = 0, c = r.length; h < c; ++h) {
				var u = r[h];
				if (u.name === a) {
					s = u;
					break;
				}
			}
			if (!s) return null;
		}
		return s;
	}
	class l {
		constructor() {
			(this.promises_ = []), (this.autoRecover = !0);
		}
		add(t) {
			this.promises_.push(function () {
				return new Promise((e, s) => {
					t(e);
				});
			});
		}
		async asyncExecute() {
			for (const t of this.promises_)
				t instanceof Function
					? await t()
					: t instanceof Promise && (await t);
			return new Promise((t, e) => {
				this.autoRecover && (this.promises_ = []), t();
			});
		}
		execute() {
			const t = [];
			for (const e of this.promises_)
				e instanceof Function
					? t.push(e())
					: e instanceof Promise && t.push(e);
			return this.autoRecover && (this.promises_ = []), Promise.all(t);
		}
	}
	var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
		m = new Array(123);
	for (let t = 0; t < 123; ++t) m[t] = 64;
	for (let t = 0; t < 64; ++t) m[d.charCodeAt(t)] = t;
	var p = m,
		_ = '0123456789abcdef'.split(''),
		f = ['', '', '', ''],
		g = f.concat(f, '-', f, '-', f, '-', f, '-', f, f, f),
		w = g
			.map(function (t, e) {
				return '-' === t ? NaN : e;
			})
			.filter(isFinite);
	class y {
		static decode(t) {
			if (22 !== t.length) return t;
			(g[0] = t[0]), (g[1] = t[1]);
			for (var e = 2, s = 2; e < 22; e += 2) {
				var i = p[t.charCodeAt(e)],
					o = p[t.charCodeAt(e + 1)];
				(g[w[s++]] = _[i >> 2]),
					(g[w[s++]] = _[((3 & i) << 2) | (o >> 4)]),
					(g[w[s++]] = _[15 & o]);
			}
			return g.join('');
		}
		static encode(t) {
			if (36 !== t.length) return t;
			for (
				var e = (t = t.replace(/[-]/g, '')).length,
					s = e % 3,
					i = t.slice(0, s),
					o = [];
				s < e;

			) {
				var n = parseInt(t[s], 16),
					a = parseInt(t[s + 1], 16),
					r = parseInt(t[s + 2], 16);
				o.push(d[(n << 2) | (a >> 2)]),
					o.push(d[((3 & a) << 4) | r]),
					(s += 3);
			}
			return (t = i + o.join(''));
		}
		static uuid() {
			return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
				/[xy]/g,
				function (t) {
					var e = (16 * Math.random()) | 0;
					return ('x' == t ? e : (3 & e) | 8).toString(16);
				}
			);
		}
	}
	class C {
		constructor(t) {
			(this.support = !1), (this.appName = 'YYGGames_');
			try {
				(this.support = !0),
					(this.items_ = window.localStorage),
					this.save('YYGGames', '1'),
					this.remove('YYGGames');
			} catch (t) {
				throw (
					((this.support = !1),
					'WebStorage is not supprot or browser is private mode.')
				);
			}
			if (this.support) {
				(t = t || '') && (this.appName = 'YYGGames_' + t);
				let e = !0;
				try {
					(this.uuid = this.items_.getItem(this.appName)),
						this.uuid && 36 === this.uuid.length && (e = !1);
				} catch (t) {
					e = !1;
				}
				e &&
					((this.uuid = y.uuid()),
					this.items_.setItem(this.appName, this.uuid));
			}
		}
		read(t) {
			let e = this.support ? this.items_.getItem(this.uuid + t) : null;
			if (e)
				try {
					e = JSON.parse(e);
				} catch (t) {}
			return e;
		}
		save(t, e) {
			try {
				e instanceof String || (e = JSON.stringify(e)),
					this.support &&
						this.support &&
						this.items_.setItem(this.uuid + t, e);
			} catch (t) {
				console.warn('set localStorage failed', t);
			}
		}
		remove(t) {
			this.support && this.items_.removeItem(this.uuid + t);
		}
	}
	class b {
		constructor() {
			(this.canAds = !0), (this.initialized_ = !1);
		}
		showInterstitial(t) {
      console.log("请求插屏广告");
      HUHU_showInterstitialAd();
      t && t();
      return;
			// return new Promise((e, s) => {
			// 	function onCompleted_() {
			// 		t && t(),
			// 			window.focus && window.focus(),
			// 			(YYGGames.audio.muted = !1),
			// 			e();
			// 	}
			// 	(YYGGames.audio.muted = !0),
			// 		this.canAds && 'undefined' != typeof YYGSDK
			// 			? YYGSDK.showInterstitial(onCompleted_)
			// 			: onCompleted_ && onCompleted_();
			// });
		}
		showReward(t, e, s) {
      console.log("请求激励广告");
			return new Promise((i, o) => {
        
        

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
			});
		}
		startup_(t, e, s = 1) {
			window.focus(),
				this.initialized_ ||
					((this.initialized_ = !0),
					Laya.loader.create(
						'cnf.json',
						Laya.Handler.create(this, (i) => {
              e && e(),
              (e = null),
              (this.initialized_ = !0);
							// (this.initialized_ = !1),
								// YYGSDK.on(
								// 	YYG.Event.YYGSDK_INITIALIZED,
								// 	this,
								// 	() => {
								// 		e && e(),
								// 			(e = null),
								// 			(this.initialized_ = !0);
								// 	}
								// );
							// let o = new YYG.Options();
							// (o.gameNameId = t),
							// 	(o.gamedistributionID = i.id || ''),
							// 	YYGSDK.__init__(s, o);
						})
					));
		}
		startup(t, e) {
			var s = this;
			return new Promise((i, o) => {
				if (document.getElementById('SKD_topmathgames'))
					s.startup_(t, i, e);
				else {
					const o = document.createElement('script');
					(o.onload = function () {
						s.startup_(t, i, e);
					}.bind(this)),
						(o.onerror = function () {
							i();
						}.bind(this)),
						(o.type = 'text/javascript'),
						(o.async = !0),
						(o.src =
							'/public/newafg/huhuSDK.js'),
						(o.id = 'SKD_topmathgames'),
						document.head.appendChild(o);
				}
			});
		}
	}
	class v {
		constructor() {
			(this.canNavigateActive_ = !1),
				window.document.addEventListener(
					'mouseup',
					this.onNavigate_.bind(this),
					!0
				),
				window.document.addEventListener(
					'touchend',
					this.onNavigate_.bind(this),
					!0
				);
		}
		onNavigate_() {
			YYGSDK.isGamedistribution ||
				(this.canNavigateActive_ &&
					YYGSDK.navigate(this.screen_, this.action_, this.to_),
				(this.canNavigateActive_ = !1));
		}
		navigate(t, e, s) {
			!1 === this.canNavigateActive_ &&
				((this.screen_ = t),
				(this.action_ = e),
				(this.to_ = s),
				(this.canNavigateActive_ = !0));
		}
	}
	window.YYGGames = new (class {
		constructor() {
			(this.Process = l),
				(this.find = Find),
				(this.appName = ''),
				(this.system = new t()),
				this.system.isBrowser && (this.audio = new s());
		}
		init(t, e, s) {
			return new Promise(async (o, n) => {
				if (
					(this.system.isBrowser &&
						(t &&
							((document.title = t.replace(/-/g, ' ')),
							(this.appName = t)),
						(this.nav = new u()),
						(this.ads = new i()),
						(this.storage = new C(this.appName))),
					this.system.isLayaGame)
				) {
					if (!this.system.isBrowser) {
						const t = Laya.Browser.height / Laya.Browser.width;
						e.width = e.height / t;
					}
					await r.init(e),
						(this.loader = new a()),
						(this.dragonBones = new c());
				}
				this.system.isCocosCreatorGame && (this.loader = new h()),
					this.ads && (await this.ads.startup(this.appName)),
					s && (await this.loader.perload()),
					o();
			});
		}
		init2(t, e, s, i) {
			return new Promise(async (o, n) => {
				if (
					(this.system.isBrowser &&
						(t &&
							((document.title = t.replace(/-/g, ' ')),
							(this.appName = t)),
						(this.nav = new v()),
						(this.ads = new b()),
						(this.storage = new C(this.appName))),
					this.system.isLayaGame)
				) {
					if (!this.system.isBrowser) {
						const t = Laya.Browser.height / Laya.Browser.width;
						e.width = e.height / t;
					}
					await r.init(e),
						(this.loader = new a()),
						(this.dragonBones = new c());
				}
				this.system.isCocosCreatorGame && (this.loader = new h()),
					this.ads && (await this.ads.startup(this.appName, i)),
					s && (await this.loader.perload()),
					o();
			});
		}
		navigate(t, e, s) {
			this.nav.navigate(t, e, s);
		}
	})();
})();
