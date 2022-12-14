var _SETTINGS = {
	API: {
		Enabled: !1,
		Log: {
			Events: {
				InitializeGame: !0,
				EndGame: !0,
				Level: { Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0 },
			},
		},
	},
	Ad: {
		Mobile: {
			Preroll: {
				Enabled: !1,
				Duration: 5,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGamePreroll: 40,
						MobileAdInGamePreroll2: 40,
						MobileAdInGamePreroll3: 20,
					},
				},
			},
			Header: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameHeader: 40,
						MobileAdInGameHeader2: 40,
						MobileAdInGameHeader3: 20,
					},
				},
			},
			Footer: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameFooter: 40,
						MobileAdInGameFooter2: 40,
						MobileAdInGameFooter3: 20,
					},
				},
			},
			End: {
				Enabled: !1,
				Duration: 1,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGameEnd: 40,
						MobileAdInGameEnd2: 40,
						MobileAdInGameEnd3: 20,
					},
				},
			},
		},
	},
	Language: { Default: 'en' },
	DeveloperBranding: {
		Splash: { Enabled: !1 },
		Logo: {
			Enabled: !1,
			Link: 'http://google.com',
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61,
		},
	},
	Branding: {
		Splash: { Enabled: !1 },
		Logo: {
			Enabled: !0,
			Link: 'http://google.com',
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61,
		},
	},
	MoreGames: {
		Enabled: !1,
		Link: 'http://www.marketjs.com/game/links/mobile',
		NewWindow: !0,
	},
};
var _STRINGS = {
	Ad: {
		Mobile: {
			Preroll: {
				ReadyIn: 'The game is ready in ',
				Loading: 'Your game is loading...',
				Close: 'Close',
			},
			Header: {
				ReadyIn: 'The game is ready in ',
				Loading: 'Your game is loading...',
				Close: 'Close',
			},
			End: {
				ReadyIn: 'Advertisement ends in ',
				Loading: 'Please wait ...',
				Close: 'Close',
			},
		},
	},
	Splash: {
		Loading: 'LOADING',
		LogoLine1: 'Some text here',
		LogoLine2: 'powered by MarketJS',
		LogoLine3: 'none',
		TapToStart: 'TAP TO START',
	},
	Game: {
		SelectPlayer: 'Select Player',
		Win: 'You win!',
		Lose: 'You lose!',
		Score: 'Score',
		Time: 'Time',
		SelectSkin: 'SELECT SKIN',
		NewSKin: 'NEW SKIN',
		LevelCleared: 'LEVEL CLEARED',
		LevelSkipped: 'LEVEL SKIPPED',
		Tutorial1: 'TAP AND HOLD',
		Tutorial2: 'TO START SWING',
		Tutorial3: 'NEAREST',
		Tutorial4: 'HANGER',
		Go: 'GO',
		Level: 'LEVEL',
		Skins: 'SKINS',
		UnlockAtLevel: 'UNLOCK AT LEVEL',
		CurrentSkin: 'CURRENT SKIN',
		Settings: 'SETTINGS',
		Paused: 'PAUSED',
	},
	Results: { Title: 'High score' },
};
var MobileAdInGamePreroll = {
	ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
	ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
	ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
	loading: _STRINGS.Ad.Mobile.Preroll.Loading,
	close:
		_STRINGS.Ad.Mobile.Preroll.Close +
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
				c = b.MobileAdInGamePreroll,
				d = c + b.MobileAdInGamePreroll2,
				b = d + b.MobileAdInGamePreroll3,
				f = Math.floor(100 * Math.random());
			console.log('seed: ', f);
			f <= c
				? (this.selectedOverlayName = 'MobileAdInGamePreroll')
				: f <= d
				? (this.selectedOverlayName = 'MobileAdInGamePreroll2')
				: f <= b &&
				  (this.selectedOverlayName = 'MobileAdInGamePreroll3');
			console.log('Ad rotating preroll enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGamePreroll'),
				console.log('Ad rotating preroll disabled');
		console.log('selected:', this.selectedOverlayName);
		this.overlay = $('#' + this.selectedOverlayName);
		this.box = $('#' + this.selectedOverlayName + '-Box');
		this.game = $('#game');
		this.boxContents = {
			footer: $('#' + this.selectedOverlayName + '-Box-Footer'),
			header: $('#' + this.selectedOverlayName + '-Box-Header'),
			close: $('#' + this.selectedOverlayName + '-Box-Close'),
			body: $('#' + this.selectedOverlayName + '-Box-Body'),
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css('left', (this.overlay.width() - this.box.width()) / 2);
		this.box.css(
			'top',
			(this.overlay.height() -
				this.box.height() -
				this.boxContents.header.height() -
				this.boxContents.footer.height()) /
				2
		);
		this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = b,
			d = setInterval(function () {
				MobileAdInGamePreroll.boxContents.header.text(
					MobileAdInGamePreroll.ready_in + c + '...'
				);
				MobileAdInGamePreroll.boxContents.footer.text(
					MobileAdInGamePreroll.loading
				);
				c--;
				0 > c &&
					(clearInterval(d),
					MobileAdInGamePreroll.boxContents.close.css(
						'left',
						MobileAdInGamePreroll.boxContents.body.width() - 23
					),
					MobileAdInGamePreroll.boxContents.close.show(),
					MobileAdInGamePreroll.boxContents.header.html(
						MobileAdInGamePreroll.close
					),
					MobileAdInGamePreroll.boxContents.footer.text(''));
			}, 1e3);
	},
	Close: function () {
		this.boxContents.close.hide();
		this.overlay.hide();
	},
};
var MobileAdInGameHeader = {
	ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Header.Width,
	ad_height: _SETTINGS.Ad.Mobile.Header.Height,
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
				c = b.MobileAdInGameHeader,
				d = c + b.MobileAdInGameHeader2,
				b = d + b.MobileAdInGameHeader3,
				f = Math.floor(100 * Math.random());
			console.log('seed: ', f);
			f <= c
				? (this.selectedOverlayName = 'MobileAdInGameHeader')
				: f <= d
				? (this.selectedOverlayName = 'MobileAdInGameHeader2')
				: f <= b &&
				  (this.selectedOverlayName = 'MobileAdInGameHeader3');
			console.log('Ad rotating header enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameHeader'),
				console.log('Ad rotating header disabled');
		this.div = $('#' + this.selectedOverlayName);
		this.game = $('#game');
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css(
			'left',
			this.game.position().left +
				(this.game.width() - this.div.width()) / 2
		);
		this.div.css('top', 0);
		this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = setInterval(function () {
			b--;
			0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c));
		}, 1e3);
	},
};
var MobileAdInGameFooter = {
	ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
	ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
				c = b.MobileAdInGameFooter,
				d = c + b.MobileAdInGameFooter2,
				b = d + b.MobileAdInGameFooter3,
				f = Math.floor(100 * Math.random());
			console.log('seed: ', f);
			f <= c
				? (this.selectedOverlayName = 'MobileAdInGameFooter')
				: f <= d
				? (this.selectedOverlayName = 'MobileAdInGameFooter2')
				: f <= b &&
				  (this.selectedOverlayName = 'MobileAdInGameFooter3');
			console.log('Ad rotating footer enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameFooter'),
				console.log('Ad rotating footer disabled');
		this.div = $('#' + this.selectedOverlayName);
		this.game = $('#game');
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css(
			'left',
			this.game.position().left +
				(this.game.width() - this.div.width()) / 2
		);
		this.div.css('top', this.game.height() - this.div.height() - 5);
		this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = setInterval(function () {
			b--;
			0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c));
		}, 1e3);
	},
};
var MobileAdInGameEnd = {
	ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
	ad_width: _SETTINGS.Ad.Mobile.End.Width,
	ad_height: _SETTINGS.Ad.Mobile.End.Height,
	ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
	loading: _STRINGS.Ad.Mobile.End.Loading,
	close:
		_STRINGS.Ad.Mobile.End.Close +
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
				c = b.MobileAdInGameEnd,
				d = c + b.MobileAdInGameEnd2,
				b = d + b.MobileAdInGameEnd3,
				f = Math.floor(100 * Math.random());
			console.log('seed: ', f);
			f <= c
				? (this.selectedOverlayName = 'MobileAdInGameEnd')
				: f <= d
				? (this.selectedOverlayName = 'MobileAdInGameEnd2')
				: f <= b && (this.selectedOverlayName = 'MobileAdInGameEnd3');
			console.log('Ad rotating end enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameEnd'),
				console.log('Ad rotating end disabled');
		console.log('selected:', this.selectedOverlayName);
		this.overlay = $('#' + this.selectedOverlayName);
		this.box = $('#' + this.selectedOverlayName + '-Box');
		this.game = $('#game');
		this.boxContents = {
			footer: $('#' + this.selectedOverlayName + '-Box-Footer'),
			header: $('#' + this.selectedOverlayName + '-Box-Header'),
			close: $('#' + this.selectedOverlayName + '-Box-Close'),
			body: $('#' + this.selectedOverlayName + '-Box-Body'),
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css('left', (this.overlay.width() - this.box.width()) / 2);
		this.box.css(
			'top',
			(this.overlay.height() -
				this.box.height() -
				this.boxContents.header.height() -
				this.boxContents.footer.height()) /
				2
		);
		this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = b,
			d = setInterval(function () {
				MobileAdInGameEnd.boxContents.header.text(
					MobileAdInGameEnd.ready_in + c + '...'
				);
				MobileAdInGameEnd.boxContents.footer.text(
					MobileAdInGameEnd.loading
				);
				c--;
				0 > c &&
					(clearInterval(d),
					MobileAdInGameEnd.boxContents.close.css(
						'left',
						MobileAdInGameEnd.boxContents.body.width() - 23
					),
					MobileAdInGameEnd.boxContents.close.show(),
					MobileAdInGameEnd.boxContents.header.html(
						MobileAdInGameEnd.close
					),
					MobileAdInGameEnd.boxContents.footer.text(''));
			}, 1e3);
	},
	Close: function () {
		this.boxContents.close.hide();
		this.overlay.hide();
	},
};
!(function (b, c) {
	'object' == typeof module && 'object' == typeof module.exports
		? (module.exports = b.document
				? c(b, !0)
				: function (b) {
						if (!b.document)
							throw Error(
								'jQuery requires a window with a document'
							);
						return c(b);
				  })
		: c(b);
})('undefined' != typeof window ? window : this, function (b, c) {
	function d(b, c) {
		c = c || X;
		var d = c.createElement('script');
		d.text = b;
		c.head.appendChild(d).parentNode.removeChild(d);
	}
	function f(b) {
		var c = !!b && 'length' in b && b.length,
			d = p.type(b);
		return (
			'function' !== d &&
			!p.isWindow(b) &&
			('array' === d ||
				0 === c ||
				('number' == typeof c && 0 < c && c - 1 in b))
		);
	}
	function e(b, c) {
		return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase();
	}
	function j(b, c, d) {
		return p.isFunction(c)
			? p.grep(b, function (b, ka) {
					return !!c.call(b, ka, b) !== d;
			  })
			: c.nodeType
			? p.grep(b, function (b) {
					return (b === c) !== d;
			  })
			: 'string' != typeof c
			? p.grep(b, function (b) {
					return -1 < Ka.call(c, b) !== d;
			  })
			: Hc.test(c)
			? p.filter(c, b, d)
			: ((c = p.filter(c, b)),
			  p.grep(b, function (b) {
					return -1 < Ka.call(c, b) !== d && 1 === b.nodeType;
			  }));
	}
	function n(b, c) {
		for (; (b = b[c]) && 1 !== b.nodeType; );
		return b;
	}
	function m(b) {
		return b;
	}
	function g(b) {
		throw b;
	}
	function r(b, c, d, g) {
		var l;
		try {
			b && p.isFunction((l = b.promise))
				? l.call(b).done(c).fail(d)
				: b && p.isFunction((l = b.then))
				? l.call(b, c, d)
				: c.apply(void 0, [b].slice(g));
		} catch (e) {
			d.apply(void 0, [e]);
		}
	}
	function z() {
		X.removeEventListener('DOMContentLoaded', z);
		b.removeEventListener('load', z);
		p.ready();
	}
	function y() {
		this.expando = p.expando + y.uid++;
	}
	function A(b, c, d) {
		var g;
		if (void 0 === d && 1 === b.nodeType)
			if (
				((g = 'data-' + c.replace(Ic, '-$&').toLowerCase()),
				(d = b.getAttribute(g)),
				'string' == typeof d)
			) {
				try {
					d =
						'true' === d ||
						('false' !== d &&
							('null' === d
								? null
								: d === +d + ''
								? +d
								: Jc.test(d)
								? JSON.parse(d)
								: d));
				} catch (l) {}
				ra.set(b, c, d);
			} else d = void 0;
		return d;
	}
	function B(b, c, d, g) {
		var l,
			e = 1,
			f = 20,
			x = g
				? function () {
						return g.cur();
				  }
				: function () {
						return p.css(b, c, '');
				  },
			j = x(),
			s = (d && d[3]) || (p.cssNumber[c] ? '' : 'px'),
			q = (p.cssNumber[c] || ('px' !== s && +j)) && nb.exec(p.css(b, c));
		if (q && q[3] !== s) {
			s = s || q[3];
			d = d || [];
			q = +j || 1;
			do (e = e || '.5'), (q /= e), p.style(b, c, q + s);
			while (e !== (e = x() / j) && 1 !== e && --f);
		}
		return (
			d &&
				((q = +q || +j || 0),
				(l = d[1] ? q + (d[1] + 1) * d[2] : +d[2]),
				g && ((g.unit = s), (g.start = q), (g.end = l))),
			l
		);
	}
	function I(b, c) {
		for (var d, g, l = [], e = 0, f = b.length; e < f; e++)
			if (((g = b[e]), g.style))
				if (((d = g.style.display), c)) {
					if (
						('none' === d &&
							((l[e] = S.get(g, 'display') || null),
							l[e] || (g.style.display = '')),
						'' === g.style.display && Bb(g))
					) {
						d = l;
						var x = e,
							j,
							q = void 0;
						j = g.ownerDocument;
						var s = g.nodeName;
						j = (g = Zb[s])
							? g
							: ((q = j.body.appendChild(j.createElement(s))),
							  (g = p.css(q, 'display')),
							  q.parentNode.removeChild(q),
							  'none' === g && (g = 'block'),
							  (Zb[s] = g),
							  g);
						d[x] = j;
					}
				} else
					'none' !== d && ((l[e] = 'none'), S.set(g, 'display', d));
		for (e = 0; e < f; e++) null != l[e] && (b[e].style.display = l[e]);
		return b;
	}
	function D(b, c) {
		var d;
		return (
			(d =
				'undefined' != typeof b.getElementsByTagName
					? b.getElementsByTagName(c || '*')
					: 'undefined' != typeof b.querySelectorAll
					? b.querySelectorAll(c || '*')
					: []),
			void 0 === c || (c && e(b, c)) ? p.merge([b], d) : d
		);
	}
	function t(b, c) {
		for (var d = 0, g = b.length; d < g; d++)
			S.set(b[d], 'globalEval', !c || S.get(c[d], 'globalEval'));
	}
	function G(b, c, d, g, e) {
		for (
			var l,
				f,
				x,
				j,
				q = c.createDocumentFragment(),
				s = [],
				m = 0,
				N = b.length;
			m < N;
			m++
		)
			if (((l = b[m]), l || 0 === l))
				if ('object' === p.type(l)) p.merge(s, l.nodeType ? [l] : l);
				else if (Kc.test(l)) {
					f = f || q.appendChild(c.createElement('div'));
					x = ($b.exec(l) || ['', ''])[1].toLowerCase();
					x = ta[x] || ta._default;
					f.innerHTML = x[1] + p.htmlPrefilter(l) + x[2];
					for (x = x[0]; x--; ) f = f.lastChild;
					p.merge(s, f.childNodes);
					f = q.firstChild;
					f.textContent = '';
				} else s.push(c.createTextNode(l));
		q.textContent = '';
		for (m = 0; (l = s[m++]); )
			if (g && -1 < p.inArray(l, g)) e && e.push(l);
			else if (
				((j = p.contains(l.ownerDocument, l)),
				(f = D(q.appendChild(l), 'script')),
				j && t(f),
				d)
			)
				for (x = 0; (l = f[x++]); ) ac.test(l.type || '') && d.push(l);
		return q;
	}
	function E() {
		return !0;
	}
	function L() {
		return !1;
	}
	function M() {
		try {
			return X.activeElement;
		} catch (b) {}
	}
	function Q(b, c, d, g, l, e) {
		var f, x;
		if ('object' == typeof c) {
			'string' != typeof d && ((g = g || d), (d = void 0));
			for (x in c) Q(b, x, d, g, c[x], e);
			return b;
		}
		if (
			(null == g && null == l
				? ((l = d), (g = d = void 0))
				: null == l &&
				  ('string' == typeof d
						? ((l = g), (g = void 0))
						: ((l = g), (g = d), (d = void 0))),
			!1 === l)
		)
			l = L;
		else if (!l) return b;
		return (
			1 === e &&
				((f = l),
				(l = function (b) {
					return p().off(b), f.apply(this, arguments);
				}),
				(l.guid = f.guid || (f.guid = p.guid++))),
			b.each(function () {
				p.event.add(this, c, l, g, d);
			})
		);
	}
	function J(b, c) {
		return e(b, 'table') && e(11 !== c.nodeType ? c : c.firstChild, 'tr')
			? p('>tbody', b)[0] || b
			: b;
	}
	function ea(b) {
		return (b.type = (null !== b.getAttribute('type')) + '/' + b.type), b;
	}
	function O(b) {
		var c = Lc.exec(b.type);
		return c ? (b.type = c[1]) : b.removeAttribute('type'), b;
	}
	function P(b, c) {
		var d, g, l, e, f, x;
		if (1 === c.nodeType) {
			if (
				S.hasData(b) &&
				((d = S.access(b)), (g = S.set(c, d)), (x = d.events))
			)
				for (l in (delete g.handle, (g.events = {}), x)) {
					d = 0;
					for (g = x[l].length; d < g; d++)
						p.event.add(c, l, x[l][d]);
				}
			ra.hasData(b) &&
				((e = ra.access(b)), (f = p.extend({}, e)), ra.set(c, f));
		}
	}
	function aa(b, c, g, l) {
		c = bb.apply([], c);
		var e,
			f,
			x,
			j,
			q = 0,
			s = b.length,
			m = s - 1,
			N = c[0],
			r = p.isFunction(N);
		if (
			r ||
			(1 < s && 'string' == typeof N && !ca.checkClone && Mc.test(N))
		)
			return b.each(function (d) {
				var e = b.eq(d);
				r && (c[0] = N.call(this, d, e.html()));
				aa(e, c, g, l);
			});
		if (
			s &&
			((e = G(c, b[0].ownerDocument, !1, b, l)),
			(f = e.firstChild),
			1 === e.childNodes.length && (e = f),
			f || l)
		) {
			f = p.map(D(e, 'script'), ea);
			for (x = f.length; q < s; q++)
				(j = e),
					q !== m &&
						((j = p.clone(j, !0, !0)),
						x && p.merge(f, D(j, 'script'))),
					g.call(b[q], j, q);
			if (x) {
				e = f[f.length - 1].ownerDocument;
				p.map(f, O);
				for (q = 0; q < x; q++)
					(j = f[q]),
						ac.test(j.type || '') &&
							!S.access(j, 'globalEval') &&
							p.contains(e, j) &&
							(j.src
								? p._evalUrl && p._evalUrl(j.src)
								: d(j.textContent.replace(Oc, ''), e));
			}
		}
		return b;
	}
	function U(b, c, d) {
		for (var g = c ? p.filter(c, b) : b, l = 0; null != (c = g[l]); l++)
			d || 1 !== c.nodeType || p.cleanData(D(c)),
				c.parentNode &&
					(d && p.contains(c.ownerDocument, c) && t(D(c, 'script')),
					c.parentNode.removeChild(c));
		return b;
	}
	function q(b, c, d) {
		var g,
			l,
			e,
			f,
			x = b.style;
		return (
			(d = d || Cb(b)),
			d &&
				((f = d.getPropertyValue(c) || d[c]),
				'' !== f ||
					p.contains(b.ownerDocument, b) ||
					(f = p.style(b, c)),
				!ca.pixelMarginRight() &&
					Rb.test(f) &&
					bc.test(c) &&
					((g = x.width),
					(l = x.minWidth),
					(e = x.maxWidth),
					(x.minWidth = x.maxWidth = x.width = f),
					(f = d.width),
					(x.width = g),
					(x.minWidth = l),
					(x.maxWidth = e))),
			void 0 !== f ? f + '' : f
		);
	}
	function u(b, c) {
		return {
			get: function () {
				return b()
					? void delete this.get
					: (this.get = c).apply(this, arguments);
			},
		};
	}
	function F(b) {
		var c = p.cssProps[b];
		if (!c) {
			var c = p.cssProps,
				d;
			a: if (((d = b), !(d in cc))) {
				for (
					var g = d[0].toUpperCase() + d.slice(1), l = dc.length;
					l--;

				)
					if (((d = dc[l] + g), d in cc)) break a;
				d = void 0;
			}
			c = c[b] = d || b;
		}
		return c;
	}
	function C(b, c, d) {
		return (b = nb.exec(c))
			? Math.max(0, b[2] - (d || 0)) + (b[3] || 'px')
			: c;
	}
	function H(b, c, d, g, l) {
		var e = 0;
		for (
			c = d === (g ? 'border' : 'content') ? 4 : 'width' === c ? 1 : 0;
			4 > c;
			c += 2
		)
			'margin' === d && (e += p.css(b, d + Ta[c], !0, l)),
				g
					? ('content' === d &&
							(e -= p.css(b, 'padding' + Ta[c], !0, l)),
					  'margin' !== d &&
							(e -= p.css(b, 'border' + Ta[c] + 'Width', !0, l)))
					: ((e += p.css(b, 'padding' + Ta[c], !0, l)),
					  'padding' !== d &&
							(e += p.css(b, 'border' + Ta[c] + 'Width', !0, l)));
		return e;
	}
	function Z(b, c, d) {
		var g,
			l = Cb(b),
			e = q(b, c, l),
			f = 'border-box' === p.css(b, 'boxSizing', !1, l);
		return Rb.test(e)
			? e
			: ((g = f && (ca.boxSizingReliable() || e === b.style[c])),
			  'auto' === e &&
					(e = b['offset' + c[0].toUpperCase() + c.slice(1)]),
			  (e = parseFloat(e) || 0),
			  e + H(b, c, d || (f ? 'border' : 'content'), g, l) + 'px');
	}
	function R(b, c, d, g, l) {
		return new R.prototype.init(b, c, d, g, l);
	}
	function l() {
		Db &&
			(!1 === X.hidden && b.requestAnimationFrame
				? b.requestAnimationFrame(l)
				: b.setTimeout(l, p.fx.interval),
			p.fx.tick());
	}
	function s() {
		return (
			b.setTimeout(function () {
				cb = void 0;
			}),
			(cb = p.now())
		);
	}
	function K(b, c) {
		var d,
			g = 0,
			l = { height: b };
		for (c = c ? 1 : 0; 4 > g; g += 2 - c)
			(d = Ta[g]), (l['margin' + d] = l['padding' + d] = b);
		return c && (l.opacity = l.width = b), l;
	}
	function x(b, c, d) {
		for (
			var g,
				l = (N.tweeners[c] || []).concat(N.tweeners['*']),
				e = 0,
				f = l.length;
			e < f;
			e++
		)
			if ((g = l[e].call(d, c, b))) return g;
	}
	function N(b, c, d) {
		var g,
			l,
			e = 0,
			f = N.prefilters.length,
			j = p.Deferred().always(function () {
				delete q.elem;
			}),
			q = function () {
				if (l) return !1;
				for (
					var c = cb || s(),
						c = Math.max(0, m.startTime + m.duration - c),
						d = 1 - (c / m.duration || 0),
						g = 0,
						e = m.tweens.length;
					g < e;
					g++
				)
					m.tweens[g].run(d);
				return (
					j.notifyWith(b, [m, d, c]),
					1 > d && e
						? c
						: (e || j.notifyWith(b, [m, 1, 0]),
						  j.resolveWith(b, [m]),
						  !1)
				);
			},
			m = j.promise({
				elem: b,
				props: p.extend({}, c),
				opts: p.extend(
					!0,
					{ specialEasing: {}, easing: p.easing._default },
					d
				),
				originalProperties: c,
				originalOptions: d,
				startTime: cb || s(),
				duration: d.duration,
				tweens: [],
				createTween: function (c, d) {
					var g = p.Tween(
						b,
						m.opts,
						c,
						d,
						m.opts.specialEasing[c] || m.opts.easing
					);
					return m.tweens.push(g), g;
				},
				stop: function (c) {
					var d = 0,
						g = c ? m.tweens.length : 0;
					if (l) return this;
					for (l = !0; d < g; d++) m.tweens[d].run(1);
					return (
						c
							? (j.notifyWith(b, [m, 1, 0]),
							  j.resolveWith(b, [m, c]))
							: j.rejectWith(b, [m, c]),
						this
					);
				},
			});
		c = m.props;
		d = m.opts.specialEasing;
		var r, u, C, V;
		for (g in c)
			if (
				((r = p.camelCase(g)),
				(u = d[r]),
				(C = c[g]),
				Array.isArray(C) && ((u = C[1]), (C = c[g] = C[0])),
				g !== r && ((c[r] = C), delete c[g]),
				(V = p.cssHooks[r]),
				V && 'expand' in V)
			)
				for (g in ((C = V.expand(C)), delete c[r], C))
					g in c || ((c[g] = C[g]), (d[g] = u));
			else d[r] = u;
		for (; e < f; e++)
			if ((g = N.prefilters[e].call(m, b, c, m.opts)))
				return (
					p.isFunction(g.stop) &&
						(p._queueHooks(m.elem, m.opts.queue).stop = p.proxy(
							g.stop,
							g
						)),
					g
				);
		return (
			p.map(c, x, m),
			p.isFunction(m.opts.start) && m.opts.start.call(b, m),
			m
				.progress(m.opts.progress)
				.done(m.opts.done, m.opts.complete)
				.fail(m.opts.fail)
				.always(m.opts.always),
			p.fx.timer(p.extend(q, { elem: b, anim: m, queue: m.opts.queue })),
			m
		);
	}
	function V(b) {
		return (b.match(ua) || []).join(' ');
	}
	function fa(b) {
		return (b.getAttribute && b.getAttribute('class')) || '';
	}
	function ha(b, c, d, g) {
		var l;
		if (Array.isArray(c))
			p.each(c, function (c, l) {
				d || Pc.test(b)
					? g(b, l)
					: ha(
							b +
								'[' +
								('object' == typeof l && null != l ? c : '') +
								']',
							l,
							d,
							g
					  );
			});
		else if (d || 'object' !== p.type(c)) g(b, c);
		else for (l in c) ha(b + '[' + l + ']', c[l], d, g);
	}
	function la(b) {
		return function (c, d) {
			'string' != typeof c && ((d = c), (c = '*'));
			var g,
				l = 0,
				e = c.toLowerCase().match(ua) || [];
			if (p.isFunction(d))
				for (; (g = e[l++]); )
					'+' === g[0]
						? ((g = g.slice(1) || '*'),
						  (b[g] = b[g] || []).unshift(d))
						: (b[g] = b[g] || []).push(d);
		};
	}
	function oa(b, c, d, g) {
		function l(x) {
			var j;
			return (
				(e[x] = !0),
				p.each(b[x] || [], function (b, ka) {
					var x = ka(c, d, g);
					return 'string' != typeof x || f || e[x]
						? f
							? !(j = x)
							: void 0
						: (c.dataTypes.unshift(x), l(x), !1);
				}),
				j
			);
		}
		var e = {},
			f = b === Sb;
		return l(c.dataTypes[0]) || (!e['*'] && l('*'));
	}
	function pa(b, c) {
		var d,
			g,
			l = p.ajaxSettings.flatOptions || {};
		for (d in c) void 0 !== c[d] && ((l[d] ? b : g || (g = {}))[d] = c[d]);
		return g && p.extend(!0, b, g), b;
	}
	var va = [],
		X = b.document,
		Eb = Object.getPrototypeOf,
		za = va.slice,
		bb = va.concat,
		db = va.push,
		Ka = va.indexOf,
		La = {},
		eb = La.toString,
		Ma = La.hasOwnProperty,
		ob = Ma.toString,
		pb = ob.call(Object),
		ca = {},
		p = function (b, c) {
			return new p.fn.init(b, c);
		},
		qb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		Fb = /^-ms-/,
		Gb = /-([a-z])/g,
		rb = function (b, c) {
			return c.toUpperCase();
		};
	p.fn = p.prototype = {
		jquery: '3.2.1',
		constructor: p,
		length: 0,
		toArray: function () {
			return za.call(this);
		},
		get: function (b) {
			return null == b
				? za.call(this)
				: 0 > b
				? this[b + this.length]
				: this[b];
		},
		pushStack: function (b) {
			b = p.merge(this.constructor(), b);
			return (b.prevObject = this), b;
		},
		each: function (b) {
			return p.each(this, b);
		},
		map: function (b) {
			return this.pushStack(
				p.map(this, function (c, d) {
					return b.call(c, d, c);
				})
			);
		},
		slice: function () {
			return this.pushStack(za.apply(this, arguments));
		},
		first: function () {
			return this.eq(0);
		},
		last: function () {
			return this.eq(-1);
		},
		eq: function (b) {
			var c = this.length;
			b = +b + (0 > b ? c : 0);
			return this.pushStack(0 <= b && b < c ? [this[b]] : []);
		},
		end: function () {
			return this.prevObject || this.constructor();
		},
		push: db,
		sort: va.sort,
		splice: va.splice,
	};
	p.extend = p.fn.extend = function () {
		var b,
			c,
			d,
			g,
			l,
			e,
			f = arguments[0] || {},
			x = 1,
			j = arguments.length,
			q = !1;
		'boolean' == typeof f && ((q = f), (f = arguments[x] || {}), x++);
		'object' == typeof f || p.isFunction(f) || (f = {});
		for (x === j && ((f = this), x--); x < j; x++)
			if (null != (b = arguments[x]))
				for (c in b)
					(d = f[c]),
						(g = b[c]),
						f !== g &&
							(q &&
							g &&
							(p.isPlainObject(g) || (l = Array.isArray(g)))
								? (l
										? ((l = !1),
										  (e = d && Array.isArray(d) ? d : []))
										: (e =
												d && p.isPlainObject(d)
													? d
													: {}),
								  (f[c] = p.extend(q, e, g)))
								: void 0 !== g && (f[c] = g));
		return f;
	};
	p.extend({
		expando: 'jQuery' + ('3.2.1' + Math.random()).replace(/\D/g, ''),
		isReady: !0,
		error: function (b) {
			throw Error(b);
		},
		noop: function () {},
		isFunction: function (b) {
			return 'function' === p.type(b);
		},
		isWindow: function (b) {
			return null != b && b === b.window;
		},
		isNumeric: function (b) {
			var c = p.type(b);
			return (
				('number' === c || 'string' === c) && !isNaN(b - parseFloat(b))
			);
		},
		isPlainObject: function (b) {
			var c, d;
			return (
				!(!b || '[object Object]' !== eb.call(b)) &&
				(!(c = Eb(b)) ||
					((d = Ma.call(c, 'constructor') && c.constructor),
					'function' == typeof d && ob.call(d) === pb))
			);
		},
		isEmptyObject: function (b) {
			for (var c in b) return !1;
			return !0;
		},
		type: function (b) {
			return null == b
				? b + ''
				: 'object' == typeof b || 'function' == typeof b
				? La[eb.call(b)] || 'object'
				: typeof b;
		},
		globalEval: function (b) {
			d(b);
		},
		camelCase: function (b) {
			return b.replace(Fb, 'ms-').replace(Gb, rb);
		},
		each: function (b, c) {
			var d,
				g = 0;
			if (f(b))
				for (d = b.length; g < d && !1 !== c.call(b[g], g, b[g]); g++);
			else for (g in b) if (!1 === c.call(b[g], g, b[g])) break;
			return b;
		},
		trim: function (b) {
			return null == b ? '' : (b + '').replace(qb, '');
		},
		makeArray: function (b, c) {
			var d = c || [];
			return (
				null != b &&
					(f(Object(b))
						? p.merge(d, 'string' == typeof b ? [b] : b)
						: db.call(d, b)),
				d
			);
		},
		inArray: function (b, c, d) {
			return null == c ? -1 : Ka.call(c, b, d);
		},
		merge: function (b, c) {
			for (var d = +c.length, g = 0, l = b.length; g < d; g++)
				b[l++] = c[g];
			return (b.length = l), b;
		},
		grep: function (b, c, d) {
			for (var g = [], l = 0, e = b.length, f = !d; l < e; l++)
				(d = !c(b[l], l)), d !== f && g.push(b[l]);
			return g;
		},
		map: function (b, c, d) {
			var g,
				l,
				e = 0,
				x = [];
			if (f(b))
				for (g = b.length; e < g; e++)
					(l = c(b[e], e, d)), null != l && x.push(l);
			else for (e in b) (l = c(b[e], e, d)), null != l && x.push(l);
			return bb.apply([], x);
		},
		guid: 1,
		proxy: function (b, c) {
			var d, g, l;
			if (
				('string' == typeof c && ((d = b[c]), (c = b), (b = d)),
				p.isFunction(b))
			)
				return (
					(g = za.call(arguments, 2)),
					(l = function () {
						return b.apply(c || this, g.concat(za.call(arguments)));
					}),
					(l.guid = b.guid = b.guid || p.guid++),
					l
				);
		},
		now: Date.now,
		support: ca,
	});
	'function' == typeof Symbol &&
		(p.fn[Symbol.iterator] = va[Symbol.iterator]);
	p.each(
		'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
			' '
		),
		function (b, c) {
			La['[object ' + c + ']'] = c.toLowerCase();
		}
	);
	var Aa,
		fb = b,
		ba = function (b, c, d, g) {
			var l,
				e,
				f,
				x,
				j,
				q = c && c.ownerDocument,
				s = c ? c.nodeType : 9;
			if (
				((d = d || []),
				'string' != typeof b || !b || (1 !== s && 9 !== s && 11 !== s))
			)
				return d;
			if (
				!g &&
				((c ? c.ownerDocument || c : wa) !== Y && xa(c),
				(c = c || Y),
				ma)
			) {
				if (11 !== s && (x = Qc.exec(b)))
					if ((l = x[1]))
						if (9 === s) {
							if (!(e = c.getElementById(l))) return d;
							if (e.id === l) return d.push(e), d;
						} else {
							if (
								q &&
								(e = q.getElementById(l)) &&
								sb(c, e) &&
								e.id === l
							)
								return d.push(e), d;
						}
					else {
						if (x[2])
							return Na.apply(d, c.getElementsByTagName(b)), d;
						if (
							(l = x[3]) &&
							da.getElementsByClassName &&
							c.getElementsByClassName
						)
							return Na.apply(d, c.getElementsByClassName(l)), d;
					}
				if (da.qsa && !Hb[b + ' '] && (!ja || !ja.test(b))) {
					if (1 !== s) (q = c), (j = b);
					else if ('object' !== c.nodeName.toLowerCase()) {
						(f = c.getAttribute('id'))
							? (f = f.replace(ec, fc))
							: c.setAttribute('id', (f = ia));
						e = Oa(b);
						for (l = e.length; l--; )
							e[l] = '#' + f + ' ' + Ua(e[l]);
						j = e.join(',');
						q = (Tb.test(b) && gb(c.parentNode)) || c;
					}
					if (j)
						try {
							return Na.apply(d, q.querySelectorAll(j)), d;
						} catch (m) {
						} finally {
							f === ia && c.removeAttribute('id');
						}
				}
			}
			return hb(b.replace(Ib, '$1'), c, d, g);
		},
		ib = function () {
			function b(d, g) {
				return (
					c.push(d + ' ') > W.cacheLength && delete b[c.shift()],
					(b[d + ' '] = g)
				);
			}
			var c = [];
			return b;
		},
		qa = function (b) {
			return (b[ia] = !0), b;
		},
		sa = function (b) {
			var c = Y.createElement('fieldset');
			try {
				return !!b(c);
			} catch (d) {
				return !1;
			} finally {
				c.parentNode && c.parentNode.removeChild(c);
			}
		},
		jb = function (b, c) {
			for (var d = b.split('|'), g = d.length; g--; )
				W.attrHandle[d[g]] = c;
		},
		tb = function (b, c) {
			var d = c && b,
				g =
					d &&
					1 === b.nodeType &&
					1 === c.nodeType &&
					b.sourceIndex - c.sourceIndex;
			if (g) return g;
			if (d) for (; (d = d.nextSibling); ) if (d === c) return -1;
			return b ? 1 : -1;
		},
		ub = function (b) {
			return function (c) {
				return 'input' === c.nodeName.toLowerCase() && c.type === b;
			};
		},
		Jb = function (b) {
			return function (c) {
				var d = c.nodeName.toLowerCase();
				return ('input' === d || 'button' === d) && c.type === b;
			};
		},
		vb = function (b) {
			return function (c) {
				return 'form' in c
					? c.parentNode && !1 === c.disabled
						? 'label' in c
							? 'label' in c.parentNode
								? c.parentNode.disabled === b
								: c.disabled === b
							: c.isDisabled === b ||
							  (c.isDisabled !== !b && Rc(c) === b)
						: c.disabled === b
					: 'label' in c && c.disabled === b;
			};
		},
		Da = function (b) {
			return qa(function (c) {
				return (
					(c = +c),
					qa(function (d, g) {
						for (var l, e = b([], d.length, c), f = e.length; f--; )
							d[(l = e[f])] && (d[l] = !(g[l] = d[l]));
					})
				);
			});
		},
		gb = function (b) {
			return b && 'undefined' != typeof b.getElementsByTagName && b;
		},
		wb = function () {},
		Ua = function (b) {
			for (var c = 0, d = b.length, g = ''; c < d; c++) g += b[c].value;
			return g;
		},
		Va = function (b, c, d) {
			var g = c.dir,
				l = c.next,
				e = l || g,
				f = d && 'parentNode' === e,
				x = Sc++;
			return c.first
				? function (c, d, l) {
						for (; (c = c[g]); )
							if (1 === c.nodeType || f) return b(c, d, l);
						return !1;
				  }
				: function (c, d, j) {
						var q,
							s,
							m,
							T = [Ea, x];
						if (j)
							for (; (c = c[g]); ) {
								if ((1 === c.nodeType || f) && b(c, d, j))
									return !0;
							}
						else
							for (; (c = c[g]); )
								if (1 === c.nodeType || f)
									if (
										((m = c[ia] || (c[ia] = {})),
										(s =
											m[c.uniqueID] ||
											(m[c.uniqueID] = {})),
										l && l === c.nodeName.toLowerCase())
									)
										c = c[g] || c;
									else {
										if (
											(q = s[e]) &&
											q[0] === Ea &&
											q[1] === x
										)
											return (T[2] = q[2]);
										if (((s[e] = T), (T[2] = b(c, d, j))))
											return !0;
									}
						return !1;
				  };
		},
		Wa = function (b) {
			return 1 < b.length
				? function (c, d, g) {
						for (var l = b.length; l--; )
							if (!b[l](c, d, g)) return !1;
						return !0;
				  }
				: b[0];
		},
		Pa = function (b, c, d, g, l) {
			for (var e, f = [], x = 0, j = b.length, q = null != c; x < j; x++)
				(e = b[x]) &&
					((d && !d(e, g, l)) || (f.push(e), q && c.push(x)));
			return f;
		},
		Xa = function (b, c, d, g, l, e) {
			return (
				g && !g[ia] && (g = Xa(g)),
				l && !l[ia] && (l = Xa(l, e)),
				qa(function (e, f, x, j) {
					var q,
						s,
						m = [],
						N = [],
						r = f.length,
						p;
					if (!(p = e)) {
						p = c || '*';
						for (
							var u = x.nodeType ? [x] : x,
								C = [],
								V = 0,
								K = u.length;
							V < K;
							V++
						)
							ba(p, u[V], C);
						p = C;
					}
					p = !b || (!e && c) ? p : Pa(p, m, b, x, j);
					u = d ? (l || (e ? b : r || g) ? [] : f) : p;
					if ((d && d(p, u, x, j), g)) {
						q = Pa(u, N);
						g(q, [], x, j);
						for (x = q.length; x--; )
							(s = q[x]) && (u[N[x]] = !(p[N[x]] = s));
					}
					if (e) {
						if (l || b) {
							if (l) {
								q = [];
								for (x = u.length; x--; )
									(s = u[x]) && q.push((p[x] = s));
								l(null, (u = []), q, j);
							}
							for (x = u.length; x--; )
								(s = u[x]) &&
									-1 < (q = l ? Ya(e, s) : m[x]) &&
									(e[q] = !(f[q] = s));
						}
					} else (u = Pa(u === f ? u.splice(r, u.length) : u)), l ? l(null, f, u, j) : Na.apply(f, u);
				})
			);
		},
		Za = function (b) {
			var c,
				d,
				g,
				l = b.length,
				e = W.relative[b[0].type];
			d = e || W.relative[' '];
			for (
				var f = e ? 1 : 0,
					x = Va(
						function (b) {
							return b === c;
						},
						d,
						!0
					),
					j = Va(
						function (b) {
							return -1 < Ya(c, b);
						},
						d,
						!0
					),
					q = [
						function (b, d, g) {
							b =
								(!e && (g || d !== Qa)) ||
								((c = d).nodeType ? x(b, d, g) : j(b, d, g));
							return (c = null), b;
						},
					];
				f < l;
				f++
			)
				if ((d = W.relative[b[f].type])) q = [Va(Wa(q), d)];
				else {
					if (
						((d = W.filter[b[f].type].apply(null, b[f].matches)),
						d[ia])
					) {
						for (g = ++f; g < l && !W.relative[b[g].type]; g++);
						return Xa(
							1 < f && Wa(q),
							1 < f &&
								Ua(
									b
										.slice(0, f - 1)
										.concat({
											value:
												' ' === b[f - 2].type
													? '*'
													: '',
										})
								).replace(Ib, '$1'),
							d,
							f < g && Za(b.slice(f, g)),
							g < l && Za((b = b.slice(g))),
							g < l && Ua(b)
						);
					}
					q.push(d);
				}
			return Wa(q);
		},
		Fa,
		da,
		W,
		Ra,
		kb,
		Oa,
		$a,
		hb,
		Qa,
		ya,
		Ga,
		xa,
		Y,
		na,
		ma,
		ja,
		Ba,
		Sa,
		sb,
		ia = 'sizzle' + 1 * new Date(),
		wa = fb.document,
		Ea = 0,
		Sc = 0,
		gc = ib(),
		hc = ib(),
		Hb = ib(),
		Ub = function (b, c) {
			return b === c && (Ga = !0), 0;
		},
		Tc = {}.hasOwnProperty,
		ab = [],
		Uc = ab.pop,
		Vc = ab.push,
		Na = ab.push,
		ic = ab.slice,
		Ya = function (b, c) {
			for (var d = 0, g = b.length; d < g; d++) if (b[d] === c) return d;
			return -1;
		},
		Wc = /[\x20\t\r\n\f]+/g,
		Ib = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		Xc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		Yc = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
		Zc = /=[\x20\t\r\n\f]*([^\]'"]*?)[\x20\t\r\n\f]*\]/g,
		$c = RegExp(
			':((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)'
		),
		ad = /^(?:\\.|[\w-]|[^\x00-\xa0])+$/,
		Kb = {
			ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
			TAG: /^((?:\\.|[\w-]|[^\x00-\xa0])+|[*])/,
			ATTR: RegExp(
				'^\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\]'
			),
			PSEUDO: RegExp(
				'^:((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)'
			),
			CHILD: RegExp(
				'^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
				'i'
			),
			bool: RegExp(
				'^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$',
				'i'
			),
			needsContext: RegExp(
				'^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
				'i'
			),
		},
		bd = /^(?:input|select|textarea|button)$/i,
		cd = /^h\d$/i,
		xb = /^[^{]+\{\s*\[native \w/,
		Qc = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		Tb = /[+~]/,
		Ha = /\\([\da-f]{1,6}[\x20\t\r\n\f]?|([\x20\t\r\n\f])|.)/gi,
		Ia = function (b, c, d) {
			b = '0x' + c - 65536;
			return b !== b || d
				? c
				: 0 > b
				? String.fromCharCode(b + 65536)
				: String.fromCharCode((b >> 10) | 55296, (1023 & b) | 56320);
		},
		ec = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fc = function (b, c) {
			return c
				? '\x00' === b
					? '\ufffd'
					: b.slice(0, -1) +
					  '\\' +
					  b.charCodeAt(b.length - 1).toString(16) +
					  ' '
				: '\\' + b;
		},
		jc = function () {
			xa();
		},
		Rc = Va(
			function (b) {
				return !0 === b.disabled && ('form' in b || 'label' in b);
			},
			{ dir: 'parentNode', next: 'legend' }
		);
	try {
		Na.apply((ab = ic.call(wa.childNodes)), wa.childNodes),
			ab[wa.childNodes.length].nodeType;
	} catch (Fd) {
		Na = {
			apply: ab.length
				? function (b, c) {
						Vc.apply(b, ic.call(c));
				  }
				: function (b, c) {
						for (var d = b.length, g = 0; (b[d++] = c[g++]); );
						b.length = d - 1;
				  },
		};
	}
	da = ba.support = {};
	kb = ba.isXML = function (b) {
		b = b && (b.ownerDocument || b).documentElement;
		return !!b && 'HTML' !== b.nodeName;
	};
	xa = ba.setDocument = function (b) {
		var c, d;
		b = b ? b.ownerDocument || b : wa;
		return b !== Y && 9 === b.nodeType && b.documentElement
			? ((Y = b),
			  (na = Y.documentElement),
			  (ma = !kb(Y)),
			  wa !== Y &&
					(d = Y.defaultView) &&
					d.top !== d &&
					(d.addEventListener
						? d.addEventListener('unload', jc, !1)
						: d.attachEvent && d.attachEvent('onunload', jc)),
			  (da.attributes = sa(function (b) {
					return (b.className = 'i'), !b.getAttribute('className');
			  })),
			  (da.getElementsByTagName = sa(function (b) {
					return (
						b.appendChild(Y.createComment('')),
						!b.getElementsByTagName('*').length
					);
			  })),
			  (da.getElementsByClassName = xb.test(Y.getElementsByClassName)),
			  (da.getById = sa(function (b) {
					return (
						(na.appendChild(b).id = ia),
						!Y.getElementsByName || !Y.getElementsByName(ia).length
					);
			  })),
			  da.getById
					? ((W.filter.ID = function (b) {
							var c = b.replace(Ha, Ia);
							return function (b) {
								return b.getAttribute('id') === c;
							};
					  }),
					  (W.find.ID = function (b, c) {
							if ('undefined' != typeof c.getElementById && ma) {
								var d = c.getElementById(b);
								return d ? [d] : [];
							}
					  }))
					: ((W.filter.ID = function (b) {
							var c = b.replace(Ha, Ia);
							return function (b) {
								return (
									(b =
										'undefined' !=
											typeof b.getAttributeNode &&
										b.getAttributeNode('id')) &&
									b.value === c
								);
							};
					  }),
					  (W.find.ID = function (b, c) {
							if ('undefined' != typeof c.getElementById && ma) {
								var d,
									g,
									l,
									e = c.getElementById(b);
								if (e) {
									if (
										((d = e.getAttributeNode('id')),
										d && d.value === b)
									)
										return [e];
									l = c.getElementsByName(b);
									for (g = 0; (e = l[g++]); )
										if (
											((d = e.getAttributeNode('id')),
											d && d.value === b)
										)
											return [e];
								}
								return [];
							}
					  })),
			  (W.find.TAG = da.getElementsByTagName
					? function (b, c) {
							return 'undefined' != typeof c.getElementsByTagName
								? c.getElementsByTagName(b)
								: da.qsa
								? c.querySelectorAll(b)
								: void 0;
					  }
					: function (b, c) {
							var d,
								g = [],
								l = 0,
								e = c.getElementsByTagName(b);
							if ('*' === b) {
								for (; (d = e[l++]); )
									1 === d.nodeType && g.push(d);
								return g;
							}
							return e;
					  }),
			  (W.find.CLASS =
					da.getElementsByClassName &&
					function (b, c) {
						if (
							'undefined' != typeof c.getElementsByClassName &&
							ma
						)
							return c.getElementsByClassName(b);
					}),
			  (Ba = []),
			  (ja = []),
			  (da.qsa = xb.test(Y.querySelectorAll)) &&
					(sa(function (b) {
						na.appendChild(b).innerHTML =
							"<a id='" +
							ia +
							"'></a><select id='" +
							ia +
							"-\r\\' msallowcapture=''><option selected=''></option></select>";
						b.querySelectorAll("[msallowcapture^='']").length &&
							ja.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:\'\'|"")');
						b.querySelectorAll('[selected]').length ||
							ja.push(
								'\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)'
							);
						b.querySelectorAll('[id~=' + ia + '-]').length ||
							ja.push('~=');
						b.querySelectorAll(':checked').length ||
							ja.push(':checked');
						b.querySelectorAll('a#' + ia + '+*').length ||
							ja.push('.#.+[+~]');
					}),
					sa(function (b) {
						b.innerHTML =
							"<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
						var c = Y.createElement('input');
						c.setAttribute('type', 'hidden');
						b.appendChild(c).setAttribute('name', 'D');
						b.querySelectorAll('[name=d]').length &&
							ja.push('name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=');
						2 !== b.querySelectorAll(':enabled').length &&
							ja.push(':enabled', ':disabled');
						na.appendChild(b).disabled = !0;
						2 !== b.querySelectorAll(':disabled').length &&
							ja.push(':enabled', ':disabled');
						b.querySelectorAll('*,:x');
						ja.push(',.*:');
					})),
			  (da.matchesSelector = xb.test(
					(Sa =
						na.matches ||
						na.webkitMatchesSelector ||
						na.mozMatchesSelector ||
						na.oMatchesSelector ||
						na.msMatchesSelector)
			  )) &&
					sa(function (b) {
						da.disconnectedMatch = Sa.call(b, '*');
						Sa.call(b, "[s!='']:x");
						Ba.push(
							'!=',
							':((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\x00-\\xa0])+)(?:[\\x20\\t\\r\\n\\f]*([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|((?:\\\\.|[\\w-]|[^\x00-\\xa0])+))|)[\\x20\\t\\r\\n\\f]*\\])*)|.*)\\)|)'
						);
					}),
			  (ja = ja.length && RegExp(ja.join('|'))),
			  (Ba = Ba.length && RegExp(Ba.join('|'))),
			  (c = xb.test(na.compareDocumentPosition)),
			  (sb =
					c || xb.test(na.contains)
						? function (b, c) {
								var d =
										9 === b.nodeType
											? b.documentElement
											: b,
									g = c && c.parentNode;
								return (
									b === g ||
									!(
										!g ||
										1 !== g.nodeType ||
										!(d.contains
											? d.contains(g)
											: b.compareDocumentPosition &&
											  16 & b.compareDocumentPosition(g))
									)
								);
						  }
						: function (b, c) {
								if (c)
									for (; (c = c.parentNode); )
										if (c === b) return !0;
								return !1;
						  }),
			  (Ub = c
					? function (b, c) {
							if (b === c) return (Ga = !0), 0;
							var d =
								!b.compareDocumentPosition -
								!c.compareDocumentPosition;
							return d
								? d
								: ((d =
										(b.ownerDocument || b) ===
										(c.ownerDocument || c)
											? b.compareDocumentPosition(c)
											: 1),
								  1 & d ||
								  (!da.sortDetached &&
										c.compareDocumentPosition(b) === d)
										? b === Y ||
										  (b.ownerDocument === wa && sb(wa, b))
											? -1
											: c === Y ||
											  (c.ownerDocument === wa &&
													sb(wa, c))
											? 1
											: ya
											? Ya(ya, b) - Ya(ya, c)
											: 0
										: 4 & d
										? -1
										: 1);
					  }
					: function (b, c) {
							if (b === c) return (Ga = !0), 0;
							var d,
								g = 0;
							d = b.parentNode;
							var l = c.parentNode,
								e = [b],
								ka = [c];
							if (!d || !l)
								return b === Y
									? -1
									: c === Y
									? 1
									: d
									? -1
									: l
									? 1
									: ya
									? Ya(ya, b) - Ya(ya, c)
									: 0;
							if (d === l) return tb(b, c);
							for (d = b; (d = d.parentNode); ) e.unshift(d);
							for (d = c; (d = d.parentNode); ) ka.unshift(d);
							for (; e[g] === ka[g]; ) g++;
							return g
								? tb(e[g], ka[g])
								: e[g] === wa
								? -1
								: ka[g] === wa
								? 1
								: 0;
					  }),
			  Y)
			: Y;
	};
	ba.matches = function (b, c) {
		return ba(b, null, null, c);
	};
	ba.matchesSelector = function (b, c) {
		if (
			((b.ownerDocument || b) !== Y && xa(b),
			(c = c.replace(Zc, "='$1']")),
			da.matchesSelector &&
				ma &&
				!Hb[c + ' '] &&
				(!Ba || !Ba.test(c)) &&
				(!ja || !ja.test(c)))
		)
			try {
				var d = Sa.call(b, c);
				if (
					d ||
					da.disconnectedMatch ||
					(b.document && 11 !== b.document.nodeType)
				)
					return d;
			} catch (g) {}
		return 0 < ba(c, Y, null, [b]).length;
	};
	ba.contains = function (b, c) {
		return (b.ownerDocument || b) !== Y && xa(b), sb(b, c);
	};
	ba.attr = function (b, c) {
		(b.ownerDocument || b) !== Y && xa(b);
		var d = W.attrHandle[c.toLowerCase()],
			d =
				d && Tc.call(W.attrHandle, c.toLowerCase())
					? d(b, c, !ma)
					: void 0;
		return void 0 !== d
			? d
			: da.attributes || !ma
			? b.getAttribute(c)
			: (d = b.getAttributeNode(c)) && d.specified
			? d.value
			: null;
	};
	ba.escape = function (b) {
		return (b + '').replace(ec, fc);
	};
	ba.error = function (b) {
		throw Error('Syntax error, unrecognized expression: ' + b);
	};
	ba.uniqueSort = function (b) {
		var c,
			d = [],
			g = 0,
			l = 0;
		if (
			((Ga = !da.detectDuplicates),
			(ya = !da.sortStable && b.slice(0)),
			b.sort(Ub),
			Ga)
		) {
			for (; (c = b[l++]); ) c === b[l] && (g = d.push(l));
			for (; g--; ) b.splice(d[g], 1);
		}
		return (ya = null), b;
	};
	Ra = ba.getText = function (b) {
		var c,
			d = '',
			g = 0;
		if ((c = b.nodeType))
			if (1 === c || 9 === c || 11 === c) {
				if ('string' == typeof b.textContent) return b.textContent;
				for (b = b.firstChild; b; b = b.nextSibling) d += Ra(b);
			} else {
				if (3 === c || 4 === c) return b.nodeValue;
			}
		else for (; (c = b[g++]); ) d += Ra(c);
		return d;
	};
	W = ba.selectors = {
		cacheLength: 50,
		createPseudo: qa,
		match: Kb,
		attrHandle: {},
		find: {},
		relative: {
			'>': { dir: 'parentNode', first: !0 },
			' ': { dir: 'parentNode' },
			'+': { dir: 'previousSibling', first: !0 },
			'~': { dir: 'previousSibling' },
		},
		preFilter: {
			ATTR: function (b) {
				return (
					(b[1] = b[1].replace(Ha, Ia)),
					(b[3] = (b[3] || b[4] || b[5] || '').replace(Ha, Ia)),
					'~=' === b[2] && (b[3] = ' ' + b[3] + ' '),
					b.slice(0, 4)
				);
			},
			CHILD: function (b) {
				return (
					(b[1] = b[1].toLowerCase()),
					'nth' === b[1].slice(0, 3)
						? (b[3] || ba.error(b[0]),
						  (b[4] = +(b[4]
								? b[5] + (b[6] || 1)
								: 2 * ('even' === b[3] || 'odd' === b[3]))),
						  (b[5] = +(b[7] + b[8] || 'odd' === b[3])))
						: b[3] && ba.error(b[0]),
					b
				);
			},
			PSEUDO: function (b) {
				var c,
					d = !b[6] && b[2];
				return Kb.CHILD.test(b[0])
					? null
					: (b[3]
							? (b[2] = b[4] || b[5] || '')
							: d &&
							  $c.test(d) &&
							  (c = Oa(d, !0)) &&
							  (c = d.indexOf(')', d.length - c) - d.length) &&
							  ((b[0] = b[0].slice(0, c)),
							  (b[2] = d.slice(0, c))),
					  b.slice(0, 3));
			},
		},
		filter: {
			TAG: function (b) {
				var c = b.replace(Ha, Ia).toLowerCase();
				return '*' === b
					? function () {
							return !0;
					  }
					: function (b) {
							return b.nodeName && b.nodeName.toLowerCase() === c;
					  };
			},
			CLASS: function (b) {
				var c = gc[b + ' '];
				return (
					c ||
					((c = RegExp(
						'(^|[\\x20\\t\\r\\n\\f])' +
							b +
							'([\\x20\\t\\r\\n\\f]|$)'
					)) &&
						gc(b, function (b) {
							return c.test(
								('string' == typeof b.className &&
									b.className) ||
									('undefined' != typeof b.getAttribute &&
										b.getAttribute('class')) ||
									''
							);
						}))
				);
			},
			ATTR: function (b, c, d) {
				return function (g) {
					g = ba.attr(g, b);
					return null == g
						? '!=' === c
						: !c ||
								((g += ''),
								'=' === c
									? g === d
									: '!=' === c
									? g !== d
									: '^=' === c
									? d && 0 === g.indexOf(d)
									: '*=' === c
									? d && -1 < g.indexOf(d)
									: '$=' === c
									? d && g.slice(-d.length) === d
									: '~=' === c
									? -1 <
									  (' ' + g.replace(Wc, ' ') + ' ').indexOf(
											d
									  )
									: '|=' === c &&
									  (g === d ||
											g.slice(0, d.length + 1) ===
												d + '-'));
				};
			},
			CHILD: function (b, c, d, g, l) {
				var e = 'nth' !== b.slice(0, 3),
					f = 'last' !== b.slice(-4),
					x = 'of-type' === c;
				return 1 === g && 0 === l
					? function (b) {
							return !!b.parentNode;
					  }
					: function (c, d, j) {
							var q, s, m, T, N, r;
							d = e !== f ? 'nextSibling' : 'previousSibling';
							var u = c.parentNode,
								p = x && c.nodeName.toLowerCase();
							j = !j && !x;
							var C = !1;
							if (u) {
								if (e) {
									for (; d; ) {
										for (T = c; (T = T[d]); )
											if (
												x
													? T.nodeName.toLowerCase() ===
													  p
													: 1 === T.nodeType
											)
												return !1;
										r = d =
											'only' === b && !r && 'nextSibling';
									}
									return !0;
								}
								if (
									((r = [f ? u.firstChild : u.lastChild]),
									f && j)
								) {
									T = u;
									m = T[ia] || (T[ia] = {});
									s = m[T.uniqueID] || (m[T.uniqueID] = {});
									q = s[b] || [];
									C = (N = q[0] === Ea && q[1]) && q[2];
									for (
										T = N && u.childNodes[N];
										(T =
											(++N && T && T[d]) ||
											(C = N = 0) ||
											r.pop());

									)
										if (
											1 === T.nodeType &&
											++C &&
											T === c
										) {
											s[b] = [Ea, N, C];
											break;
										}
								} else if (
									(j &&
										((T = c),
										(m = T[ia] || (T[ia] = {})),
										(s =
											m[T.uniqueID] ||
											(m[T.uniqueID] = {})),
										(q = s[b] || []),
										(N = q[0] === Ea && q[1]),
										(C = N)),
									!1 === C)
								)
									for (
										;
										(T =
											(++N && T && T[d]) ||
											(C = N = 0) ||
											r.pop()) &&
										(!(x
											? T.nodeName.toLowerCase() === p
											: 1 === T.nodeType) ||
											!++C ||
											!(j &&
												((m = T[ia] || (T[ia] = {})),
												(s =
													m[T.uniqueID] ||
													(m[T.uniqueID] = {})),
												(s[b] = [Ea, C])),
											T === c));

									);
								return (
									(C -= l),
									C === g || (0 === C % g && 0 <= C / g)
								);
							}
					  };
			},
			PSEUDO: function (b, c) {
				var d,
					g =
						W.pseudos[b] ||
						W.setFilters[b.toLowerCase()] ||
						ba.error('unsupported pseudo: ' + b);
				return g[ia]
					? g(c)
					: 1 < g.length
					? ((d = [b, b, '', c]),
					  W.setFilters.hasOwnProperty(b.toLowerCase())
							? qa(function (b, d) {
									for (
										var l, e = g(b, c), f = e.length;
										f--;

									)
										(l = Ya(b, e[f])),
											(b[l] = !(d[l] = e[f]));
							  })
							: function (b) {
									return g(b, 0, d);
							  })
					: g;
			},
		},
		pseudos: {
			not: qa(function (b) {
				var c = [],
					d = [],
					g = $a(b.replace(Ib, '$1'));
				return g[ia]
					? qa(function (b, c, d, l) {
							var e;
							d = g(b, null, l, []);
							for (l = b.length; l--; )
								(e = d[l]) && (b[l] = !(c[l] = e));
					  })
					: function (b, l, e) {
							return (
								(c[0] = b),
								g(c, null, e, d),
								(c[0] = null),
								!d.pop()
							);
					  };
			}),
			has: qa(function (b) {
				return function (c) {
					return 0 < ba(b, c).length;
				};
			}),
			contains: qa(function (b) {
				return (
					(b = b.replace(Ha, Ia)),
					function (c) {
						return (
							-1 <
							(c.textContent || c.innerText || Ra(c)).indexOf(b)
						);
					}
				);
			}),
			lang: qa(function (b) {
				return (
					ad.test(b || '') || ba.error('unsupported lang: ' + b),
					(b = b.replace(Ha, Ia).toLowerCase()),
					function (c) {
						var d;
						do
							if (
								(d = ma
									? c.lang
									: c.getAttribute('xml:lang') ||
									  c.getAttribute('lang'))
							)
								return (
									(d = d.toLowerCase()),
									d === b || 0 === d.indexOf(b + '-')
								);
						while ((c = c.parentNode) && 1 === c.nodeType);
						return !1;
					}
				);
			}),
			target: function (b) {
				var c = fb.location && fb.location.hash;
				return c && c.slice(1) === b.id;
			},
			root: function (b) {
				return b === na;
			},
			focus: function (b) {
				return (
					b === Y.activeElement &&
					(!Y.hasFocus || Y.hasFocus()) &&
					!(!b.type && !b.href && !~b.tabIndex)
				);
			},
			enabled: vb(!1),
			disabled: vb(!0),
			checked: function (b) {
				var c = b.nodeName.toLowerCase();
				return (
					('input' === c && !!b.checked) ||
					('option' === c && !!b.selected)
				);
			},
			selected: function (b) {
				return (
					b.parentNode && b.parentNode.selectedIndex,
					!0 === b.selected
				);
			},
			empty: function (b) {
				for (b = b.firstChild; b; b = b.nextSibling)
					if (6 > b.nodeType) return !1;
				return !0;
			},
			parent: function (b) {
				return !W.pseudos.empty(b);
			},
			header: function (b) {
				return cd.test(b.nodeName);
			},
			input: function (b) {
				return bd.test(b.nodeName);
			},
			button: function (b) {
				var c = b.nodeName.toLowerCase();
				return ('input' === c && 'button' === b.type) || 'button' === c;
			},
			text: function (b) {
				var c;
				return (
					'input' === b.nodeName.toLowerCase() &&
					'text' === b.type &&
					(null == (c = b.getAttribute('type')) ||
						'text' === c.toLowerCase())
				);
			},
			first: Da(function () {
				return [0];
			}),
			last: Da(function (b, c) {
				return [c - 1];
			}),
			eq: Da(function (b, c, d) {
				return [0 > d ? d + c : d];
			}),
			even: Da(function (b, c) {
				for (var d = 0; d < c; d += 2) b.push(d);
				return b;
			}),
			odd: Da(function (b, c) {
				for (var d = 1; d < c; d += 2) b.push(d);
				return b;
			}),
			lt: Da(function (b, c, d) {
				for (c = 0 > d ? d + c : d; 0 <= --c; ) b.push(c);
				return b;
			}),
			gt: Da(function (b, c, d) {
				for (d = 0 > d ? d + c : d; ++d < c; ) b.push(d);
				return b;
			}),
		},
	};
	W.pseudos.nth = W.pseudos.eq;
	for (Fa in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
		W.pseudos[Fa] = ub(Fa);
	for (Fa in { submit: !0, reset: !0 }) W.pseudos[Fa] = Jb(Fa);
	wb.prototype = W.filters = W.pseudos;
	W.setFilters = new wb();
	Oa = ba.tokenize = function (b, c) {
		var d, g, l, e, f, x, j;
		if ((f = hc[b + ' '])) return c ? 0 : f.slice(0);
		f = b;
		x = [];
		for (j = W.preFilter; f; ) {
			(d && !(g = Xc.exec(f))) ||
				(g && (f = f.slice(g[0].length) || f), x.push((l = [])));
			d = !1;
			(g = Yc.exec(f)) &&
				((d = g.shift()),
				l.push({ value: d, type: g[0].replace(Ib, ' ') }),
				(f = f.slice(d.length)));
			for (e in W.filter)
				!(g = Kb[e].exec(f)) ||
					(j[e] && !(g = j[e](g))) ||
					((d = g.shift()),
					l.push({ value: d, type: e, matches: g }),
					(f = f.slice(d.length)));
			if (!d) break;
		}
		return c ? f.length : f ? ba.error(b) : hc(b, x).slice(0);
	};
	Aa =
		(($a = ba.compile =
			function (b, c) {
				var d,
					g = [],
					l = [],
					e = Hb[b + ' '];
				if (!e) {
					c || (c = Oa(b));
					for (d = c.length; d--; )
						(e = Za(c[d])), e[ia] ? g.push(e) : l.push(e);
					d = Hb;
					var f = 0 < g.length,
						x = 0 < l.length,
						e = function (b, c, d, e, ka) {
							var j,
								q,
								s,
								m = 0,
								N = '0',
								T = b && [],
								r = [],
								u = Qa,
								p = b || (x && W.find.TAG('*', ka)),
								C = (Ea +=
									null == u ? 1 : Math.random() || 0.1),
								V = p.length;
							for (
								ka && (Qa = c === Y || c || ka);
								N !== V && null != (j = p[N]);
								N++
							) {
								if (x && j) {
									q = 0;
									for (
										c ||
										j.ownerDocument === Y ||
										(xa(j), (d = !ma));
										(s = l[q++]);

									)
										if (s(j, c || Y, d)) {
											e.push(j);
											break;
										}
									ka && (Ea = C);
								}
								f && ((j = !s && j) && m--, b && T.push(j));
							}
							if (((m += N), f && N !== m)) {
								for (q = 0; (s = g[q++]); ) s(T, r, c, d);
								if (b) {
									if (0 < m)
										for (; N--; )
											T[N] || r[N] || (r[N] = Uc.call(e));
									r = Pa(r);
								}
								Na.apply(e, r);
								ka &&
									!b &&
									0 < r.length &&
									1 < m + g.length &&
									ba.uniqueSort(e);
							}
							return ka && ((Ea = C), (Qa = u)), T;
						},
						e = f ? qa(e) : e,
						e = d(b, e);
					e.selector = b;
				}
				return e;
			}),
		(hb = ba.select =
			function (b, c, d, g) {
				var l,
					e,
					f,
					x,
					j,
					q = 'function' == typeof b && b,
					s = !g && Oa((b = q.selector || b));
				if (((d = d || []), 1 === s.length)) {
					if (
						((e = s[0] = s[0].slice(0)),
						2 < e.length &&
							'ID' === (f = e[0]).type &&
							9 === c.nodeType &&
							ma &&
							W.relative[e[1].type])
					) {
						if (
							((c = (W.find.ID(f.matches[0].replace(Ha, Ia), c) ||
								[])[0]),
							!c)
						)
							return d;
						q && (c = c.parentNode);
						b = b.slice(e.shift().value.length);
					}
					for (
						l = Kb.needsContext.test(b) ? 0 : e.length;
						l-- && !((f = e[l]), W.relative[(x = f.type)]);

					)
						if (
							(j = W.find[x]) &&
							(g = j(
								f.matches[0].replace(Ha, Ia),
								(Tb.test(e[0].type) && gb(c.parentNode)) || c
							))
						) {
							if ((e.splice(l, 1), (b = g.length && Ua(e)), !b))
								return Na.apply(d, g), d;
							break;
						}
				}
				return (
					(q || $a(b, s))(
						g,
						c,
						!ma,
						d,
						!c || (Tb.test(b) && gb(c.parentNode)) || c
					),
					d
				);
			}),
		(da.sortStable = ia.split('').sort(Ub).join('') === ia),
		(da.detectDuplicates = !!Ga),
		xa(),
		(da.sortDetached = sa(function (b) {
			return 1 & b.compareDocumentPosition(Y.createElement('fieldset'));
		})),
		sa(function (b) {
			return (
				(b.innerHTML = "<a href='#'></a>"),
				'#' === b.firstChild.getAttribute('href')
			);
		}) ||
			jb('type|href|height|width', function (b, c, d) {
				if (!d)
					return b.getAttribute(
						c,
						'type' === c.toLowerCase() ? 1 : 2
					);
			}),
		(da.attributes &&
			sa(function (b) {
				return (
					(b.innerHTML = '<input/>'),
					b.firstChild.setAttribute('value', ''),
					'' === b.firstChild.getAttribute('value')
				);
			})) ||
			jb('value', function (b, c, d) {
				if (!d && 'input' === b.nodeName.toLowerCase())
					return b.defaultValue;
			}),
		sa(function (b) {
			return null == b.getAttribute('disabled');
		}) ||
			jb(
				'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
				function (b, c, d) {
					var g;
					if (!d)
						return !0 === b[c]
							? c.toLowerCase()
							: (g = b.getAttributeNode(c)) && g.specified
							? g.value
							: null;
				}
			),
		ba);
	p.find = Aa;
	p.expr = Aa.selectors;
	p.expr[':'] = p.expr.pseudos;
	p.uniqueSort = p.unique = Aa.uniqueSort;
	p.text = Aa.getText;
	p.isXMLDoc = Aa.isXML;
	p.contains = Aa.contains;
	p.escapeSelector = Aa.escape;
	var lb = function (b, c, d) {
			for (var g = [], l = void 0 !== d; (b = b[c]) && 9 !== b.nodeType; )
				if (1 === b.nodeType) {
					if (l && p(b).is(d)) break;
					g.push(b);
				}
			return g;
		},
		kc = function (b, c) {
			for (var d = []; b; b = b.nextSibling)
				1 === b.nodeType && b !== c && d.push(b);
			return d;
		},
		lc = p.expr.match.needsContext,
		mc = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
		Hc = /^.[^:#\[\.,]*$/;
	p.filter = function (b, c, d) {
		var g = c[0];
		return (
			d && (b = ':not(' + b + ')'),
			1 === c.length && 1 === g.nodeType
				? p.find.matchesSelector(g, b)
					? [g]
					: []
				: p.find.matches(
						b,
						p.grep(c, function (b) {
							return 1 === b.nodeType;
						})
				  )
		);
	};
	p.fn.extend({
		find: function (b) {
			var c,
				d,
				g = this.length,
				l = this;
			if ('string' != typeof b)
				return this.pushStack(
					p(b).filter(function () {
						for (c = 0; c < g; c++)
							if (p.contains(l[c], this)) return !0;
					})
				);
			d = this.pushStack([]);
			for (c = 0; c < g; c++) p.find(b, l[c], d);
			return 1 < g ? p.uniqueSort(d) : d;
		},
		filter: function (b) {
			return this.pushStack(j(this, b || [], !1));
		},
		not: function (b) {
			return this.pushStack(j(this, b || [], !0));
		},
		is: function (b) {
			return !!j(
				this,
				'string' == typeof b && lc.test(b) ? p(b) : b || [],
				!1
			).length;
		},
	});
	var nc,
		dd = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(p.fn.init = function (b, c, d) {
		var g, l;
		if (!b) return this;
		if (((d = d || nc), 'string' == typeof b)) {
			if (
				((g =
					'<' === b[0] && '>' === b[b.length - 1] && 3 <= b.length
						? [null, b, null]
						: dd.exec(b)),
				!g || (!g[1] && c))
			)
				return !c || c.jquery
					? (c || d).find(b)
					: this.constructor(c).find(b);
			if (g[1]) {
				if (
					((c = c instanceof p ? c[0] : c),
					p.merge(
						this,
						p.parseHTML(
							g[1],
							c && c.nodeType ? c.ownerDocument || c : X,
							!0
						)
					),
					mc.test(g[1]) && p.isPlainObject(c))
				)
					for (g in c)
						p.isFunction(this[g])
							? this[g](c[g])
							: this.attr(g, c[g]);
				return this;
			}
			return (
				(l = X.getElementById(g[2])),
				l && ((this[0] = l), (this.length = 1)),
				this
			);
		}
		return b.nodeType
			? ((this[0] = b), (this.length = 1), this)
			: p.isFunction(b)
			? void 0 !== d.ready
				? d.ready(b)
				: b(p)
			: p.makeArray(b, this);
	}).prototype = p.fn;
	nc = p(X);
	var ed = /^(?:parents|prev(?:Until|All))/,
		fd = { children: !0, contents: !0, next: !0, prev: !0 };
	p.fn.extend({
		has: function (b) {
			var c = p(b, this),
				d = c.length;
			return this.filter(function () {
				for (var b = 0; b < d; b++)
					if (p.contains(this, c[b])) return !0;
			});
		},
		closest: function (b, c) {
			var d,
				g = 0,
				l = this.length,
				e = [],
				f = 'string' != typeof b && p(b);
			if (!lc.test(b))
				for (; g < l; g++)
					for (d = this[g]; d && d !== c; d = d.parentNode)
						if (
							11 > d.nodeType &&
							(f
								? -1 < f.index(d)
								: 1 === d.nodeType &&
								  p.find.matchesSelector(d, b))
						) {
							e.push(d);
							break;
						}
			return this.pushStack(1 < e.length ? p.uniqueSort(e) : e);
		},
		index: function (b) {
			return b
				? 'string' == typeof b
					? Ka.call(p(b), this[0])
					: Ka.call(this, b.jquery ? b[0] : b)
				: this[0] && this[0].parentNode
				? this.first().prevAll().length
				: -1;
		},
		add: function (b, c) {
			return this.pushStack(p.uniqueSort(p.merge(this.get(), p(b, c))));
		},
		addBack: function (b) {
			return this.add(
				null == b ? this.prevObject : this.prevObject.filter(b)
			);
		},
	});
	p.each(
		{
			parent: function (b) {
				return (b = b.parentNode) && 11 !== b.nodeType ? b : null;
			},
			parents: function (b) {
				return lb(b, 'parentNode');
			},
			parentsUntil: function (b, c, d) {
				return lb(b, 'parentNode', d);
			},
			next: function (b) {
				return n(b, 'nextSibling');
			},
			prev: function (b) {
				return n(b, 'previousSibling');
			},
			nextAll: function (b) {
				return lb(b, 'nextSibling');
			},
			prevAll: function (b) {
				return lb(b, 'previousSibling');
			},
			nextUntil: function (b, c, d) {
				return lb(b, 'nextSibling', d);
			},
			prevUntil: function (b, c, d) {
				return lb(b, 'previousSibling', d);
			},
			siblings: function (b) {
				return kc((b.parentNode || {}).firstChild, b);
			},
			children: function (b) {
				return kc(b.firstChild);
			},
			contents: function (b) {
				return e(b, 'iframe')
					? b.contentDocument
					: (e(b, 'template') && (b = b.content || b),
					  p.merge([], b.childNodes));
			},
		},
		function (b, c) {
			p.fn[b] = function (d, g) {
				var l = p.map(this, c, d);
				return (
					'Until' !== b.slice(-5) && (g = d),
					g && 'string' == typeof g && (l = p.filter(g, l)),
					1 < this.length &&
						(fd[b] || p.uniqueSort(l), ed.test(b) && l.reverse()),
					this.pushStack(l)
				);
			};
		}
	);
	var ua = /[^\x20\t\r\n\f]+/g;
	p.Callbacks = function (b) {
		var c;
		if ('string' == typeof b) {
			var d = {};
			c =
				(p.each(b.match(ua) || [], function (b, c) {
					d[c] = !0;
				}),
				d);
		} else c = p.extend({}, b);
		b = c;
		var g,
			l,
			e,
			f,
			x = [],
			j = [],
			q = -1,
			s = function () {
				f = f || b.once;
				for (e = g = !0; j.length; q = -1)
					for (l = j.shift(); ++q < x.length; )
						!1 === x[q].apply(l[0], l[1]) &&
							b.stopOnFalse &&
							((q = x.length), (l = !1));
				b.memory || (l = !1);
				g = !1;
				f && (x = l ? [] : '');
			},
			m = {
				add: function () {
					return (
						x &&
							(l && !g && ((q = x.length - 1), j.push(l)),
							(function Nc(c) {
								p.each(c, function (c, d) {
									p.isFunction(d)
										? (b.unique && m.has(d)) || x.push(d)
										: d &&
										  d.length &&
										  'string' !== p.type(d) &&
										  Nc(d);
								});
							})(arguments),
							l && !g && s()),
						this
					);
				},
				remove: function () {
					return (
						p.each(arguments, function (b, c) {
							for (var d; -1 < (d = p.inArray(c, x, d)); )
								x.splice(d, 1), d <= q && q--;
						}),
						this
					);
				},
				has: function (b) {
					return b ? -1 < p.inArray(b, x) : 0 < x.length;
				},
				empty: function () {
					return x && (x = []), this;
				},
				disable: function () {
					return (f = j = []), (x = l = ''), this;
				},
				disabled: function () {
					return !x;
				},
				lock: function () {
					return (f = j = []), l || g || (x = l = ''), this;
				},
				locked: function () {
					return !!f;
				},
				fireWith: function (b, c) {
					return (
						f ||
							((c = c || []),
							(c = [b, c.slice ? c.slice() : c]),
							j.push(c),
							g || s()),
						this
					);
				},
				fire: function () {
					return m.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!e;
				},
			};
		return m;
	};
	p.extend({
		Deferred: function (c) {
			var d = [
					[
						'notify',
						'progress',
						p.Callbacks('memory'),
						p.Callbacks('memory'),
						2,
					],
					[
						'resolve',
						'done',
						p.Callbacks('once memory'),
						p.Callbacks('once memory'),
						0,
						'resolved',
					],
					[
						'reject',
						'fail',
						p.Callbacks('once memory'),
						p.Callbacks('once memory'),
						1,
						'rejected',
					],
				],
				l = 'pending',
				e = {
					state: function () {
						return l;
					},
					always: function () {
						return f.done(arguments).fail(arguments), this;
					},
					catch: function (b) {
						return e.then(null, b);
					},
					pipe: function () {
						var b = arguments;
						return p
							.Deferred(function (c) {
								p.each(d, function (d, g) {
									var l = p.isFunction(b[g[4]]) && b[g[4]];
									f[g[1]](function () {
										var b = l && l.apply(this, arguments);
										b && p.isFunction(b.promise)
											? b
													.promise()
													.progress(c.notify)
													.done(c.resolve)
													.fail(c.reject)
											: c[g[0] + 'With'](
													this,
													l ? [b] : arguments
											  );
									});
								});
								b = null;
							})
							.promise();
					},
					then: function (c, l, e) {
						function f(c, d, l, e) {
							return function () {
								var j = this,
									q = arguments,
									s = function () {
										var b, s;
										if (!(c < x)) {
											if (
												((b = l.apply(j, q)),
												b === d.promise())
											)
												throw new TypeError(
													'Thenable self-resolution'
												);
											s =
												b &&
												('object' == typeof b ||
													'function' == typeof b) &&
												b.then;
											p.isFunction(s)
												? e
													? s.call(
															b,
															f(x, d, m, e),
															f(x, d, g, e)
													  )
													: (x++,
													  s.call(
															b,
															f(x, d, m, e),
															f(x, d, g, e),
															f(
																x,
																d,
																m,
																d.notifyWith
															)
													  ))
												: (l !== m &&
														((j = void 0),
														(q = [b])),
												  (e || d.resolveWith)(j, q));
										}
									},
									ka = e
										? s
										: function () {
												try {
													s();
												} catch (b) {
													p.Deferred.exceptionHook &&
														p.Deferred.exceptionHook(
															b,
															ka.stackTrace
														),
														c + 1 >= x &&
															(l !== g &&
																((j = void 0),
																(q = [b])),
															d.rejectWith(j, q));
												}
										  };
								c
									? ka()
									: (p.Deferred.getStackHook &&
											(ka.stackTrace =
												p.Deferred.getStackHook()),
									  b.setTimeout(ka));
							};
						}
						var x = 0;
						return p
							.Deferred(function (b) {
								d[0][3].add(
									f(
										0,
										b,
										p.isFunction(e) ? e : m,
										b.notifyWith
									)
								);
								d[1][3].add(f(0, b, p.isFunction(c) ? c : m));
								d[2][3].add(f(0, b, p.isFunction(l) ? l : g));
							})
							.promise();
					},
					promise: function (b) {
						return null != b ? p.extend(b, e) : e;
					},
				},
				f = {};
			return (
				p.each(d, function (b, c) {
					var g = c[2],
						x = c[5];
					e[c[1]] = g.add;
					x &&
						g.add(
							function () {
								l = x;
							},
							d[3 - b][2].disable,
							d[0][2].lock
						);
					g.add(c[3].fire);
					f[c[0]] = function () {
						return (
							f[c[0] + 'With'](
								this === f ? void 0 : this,
								arguments
							),
							this
						);
					};
					f[c[0] + 'With'] = g.fireWith;
				}),
				e.promise(f),
				c && c.call(f, f),
				f
			);
		},
		when: function (b) {
			var c = arguments.length,
				d = c,
				g = Array(d),
				l = za.call(arguments),
				e = p.Deferred(),
				f = function (b) {
					return function (d) {
						g[b] = this;
						l[b] = 1 < arguments.length ? za.call(arguments) : d;
						--c || e.resolveWith(g, l);
					};
				};
			if (
				1 >= c &&
				(r(b, e.done(f(d)).resolve, e.reject, !c),
				'pending' === e.state() || p.isFunction(l[d] && l[d].then))
			)
				return e.then();
			for (; d--; ) r(l[d], f(d), e.reject);
			return e.promise();
		},
	});
	var gd = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	p.Deferred.exceptionHook = function (c, d) {
		b.console &&
			b.console.warn &&
			c &&
			gd.test(c.name) &&
			b.console.warn(
				'jQuery.Deferred exception: ' + c.message,
				c.stack,
				d
			);
	};
	p.readyException = function (c) {
		b.setTimeout(function () {
			throw c;
		});
	};
	var Vb = p.Deferred();
	p.fn.ready = function (b) {
		return (
			Vb.then(b)['catch'](function (b) {
				p.readyException(b);
			}),
			this
		);
	};
	p.extend({
		isReady: !1,
		readyWait: 1,
		ready: function (b) {
			(!0 === b ? --p.readyWait : p.isReady) ||
				((p.isReady = !0),
				(!0 !== b && 0 < --p.readyWait) || Vb.resolveWith(X, [p]));
		},
	});
	p.ready.then = Vb.then;
	'complete' === X.readyState ||
	('loading' !== X.readyState && !X.documentElement.doScroll)
		? b.setTimeout(p.ready)
		: (X.addEventListener('DOMContentLoaded', z),
		  b.addEventListener('load', z));
	var Ja = function (b, c, d, g, l, e, f) {
			var x = 0,
				j = b.length,
				q = null == d;
			if ('object' === p.type(d))
				for (x in ((l = !0), d)) Ja(b, c, x, d[x], !0, e, f);
			else if (
				void 0 !== g &&
				((l = !0),
				p.isFunction(g) || (f = !0),
				q &&
					(f
						? (c.call(b, g), (c = null))
						: ((q = c),
						  (c = function (b, c, d) {
								return q.call(p(b), d);
						  }))),
				c)
			)
				for (; x < j; x++)
					c(b[x], d, f ? g : g.call(b[x], x, c(b[x], d)));
			return l ? b : q ? c.call(b) : j ? c(b[0], d) : e;
		},
		Lb = function (b) {
			return 1 === b.nodeType || 9 === b.nodeType || !+b.nodeType;
		};
	y.uid = 1;
	y.prototype = {
		cache: function (b) {
			var c = b[this.expando];
			return (
				c ||
					((c = {}),
					Lb(b) &&
						(b.nodeType
							? (b[this.expando] = c)
							: Object.defineProperty(b, this.expando, {
									value: c,
									configurable: !0,
							  }))),
				c
			);
		},
		set: function (b, c, d) {
			var g;
			b = this.cache(b);
			if ('string' == typeof c) b[p.camelCase(c)] = d;
			else for (g in c) b[p.camelCase(g)] = c[g];
			return b;
		},
		get: function (b, c) {
			return void 0 === c
				? this.cache(b)
				: b[this.expando] && b[this.expando][p.camelCase(c)];
		},
		access: function (b, c, d) {
			return void 0 === c || (c && 'string' == typeof c && void 0 === d)
				? this.get(b, c)
				: (this.set(b, c, d), void 0 !== d ? d : c);
		},
		remove: function (b, c) {
			var d,
				g = b[this.expando];
			if (void 0 !== g) {
				if (void 0 !== c) {
					Array.isArray(c)
						? (c = c.map(p.camelCase))
						: ((c = p.camelCase(c)),
						  (c = c in g ? [c] : c.match(ua) || []));
					for (d = c.length; d--; ) delete g[c[d]];
				}
				(void 0 === c || p.isEmptyObject(g)) &&
					(b.nodeType
						? (b[this.expando] = void 0)
						: delete b[this.expando]);
			}
		},
		hasData: function (b) {
			b = b[this.expando];
			return void 0 !== b && !p.isEmptyObject(b);
		},
	};
	var S = new y(),
		ra = new y(),
		Jc = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		Ic = /[A-Z]/g;
	p.extend({
		hasData: function (b) {
			return ra.hasData(b) || S.hasData(b);
		},
		data: function (b, c, d) {
			return ra.access(b, c, d);
		},
		removeData: function (b, c) {
			ra.remove(b, c);
		},
		_data: function (b, c, d) {
			return S.access(b, c, d);
		},
		_removeData: function (b, c) {
			S.remove(b, c);
		},
	});
	p.fn.extend({
		data: function (b, c) {
			var d,
				g,
				l,
				e = this[0],
				f = e && e.attributes;
			if (void 0 === b) {
				if (
					this.length &&
					((l = ra.get(e)),
					1 === e.nodeType && !S.get(e, 'hasDataAttrs'))
				) {
					for (d = f.length; d--; )
						f[d] &&
							((g = f[d].name),
							0 === g.indexOf('data-') &&
								((g = p.camelCase(g.slice(5))), A(e, g, l[g])));
					S.set(e, 'hasDataAttrs', !0);
				}
				return l;
			}
			return 'object' == typeof b
				? this.each(function () {
						ra.set(this, b);
				  })
				: Ja(
						this,
						function (c) {
							var d;
							if (e && void 0 === c) {
								if (
									((d = ra.get(e, b)), void 0 !== d) ||
									((d = A(e, b)), void 0 !== d)
								)
									return d;
							} else
								this.each(function () {
									ra.set(this, b, c);
								});
						},
						null,
						c,
						1 < arguments.length,
						null,
						!0
				  );
		},
		removeData: function (b) {
			return this.each(function () {
				ra.remove(this, b);
			});
		},
	});
	p.extend({
		queue: function (b, c, d) {
			var g;
			if (b)
				return (
					(c = (c || 'fx') + 'queue'),
					(g = S.get(b, c)),
					d &&
						(!g || Array.isArray(d)
							? (g = S.access(b, c, p.makeArray(d)))
							: g.push(d)),
					g || []
				);
		},
		dequeue: function (b, c) {
			c = c || 'fx';
			var d = p.queue(b, c),
				g = d.length,
				l = d.shift(),
				e = p._queueHooks(b, c),
				f = function () {
					p.dequeue(b, c);
				};
			'inprogress' === l && ((l = d.shift()), g--);
			l &&
				('fx' === c && d.unshift('inprogress'),
				delete e.stop,
				l.call(b, f, e));
			!g && e && e.empty.fire();
		},
		_queueHooks: function (b, c) {
			var d = c + 'queueHooks';
			return (
				S.get(b, d) ||
				S.access(b, d, {
					empty: p.Callbacks('once memory').add(function () {
						S.remove(b, [c + 'queue', d]);
					}),
				})
			);
		},
	});
	p.fn.extend({
		queue: function (b, c) {
			var d = 2;
			return (
				'string' != typeof b && ((c = b), (b = 'fx'), d--),
				arguments.length < d
					? p.queue(this[0], b)
					: void 0 === c
					? this
					: this.each(function () {
							var d = p.queue(this, b, c);
							p._queueHooks(this, b);
							'fx' === b &&
								'inprogress' !== d[0] &&
								p.dequeue(this, b);
					  })
			);
		},
		dequeue: function (b) {
			return this.each(function () {
				p.dequeue(this, b);
			});
		},
		clearQueue: function (b) {
			return this.queue(b || 'fx', []);
		},
		promise: function (b, c) {
			var d,
				g = 1,
				l = p.Deferred(),
				e = this,
				f = this.length,
				x = function () {
					--g || l.resolveWith(e, [e]);
				};
			'string' != typeof b && ((c = b), (b = void 0));
			for (b = b || 'fx'; f--; )
				(d = S.get(e[f], b + 'queueHooks')) &&
					d.empty &&
					(g++, d.empty.add(x));
			return x(), l.promise(c);
		},
	});
	var oc = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		nb = RegExp('^(?:([+-])=|)(' + oc + ')([a-z%]*)$', 'i'),
		Ta = ['Top', 'Right', 'Bottom', 'Left'],
		Bb = function (b, c) {
			return (
				(b = c || b),
				'none' === b.style.display ||
					('' === b.style.display &&
						p.contains(b.ownerDocument, b) &&
						'none' === p.css(b, 'display'))
			);
		},
		pc = function (b, c, d, g) {
			var l,
				e = {};
			for (l in c) (e[l] = b.style[l]), (b.style[l] = c[l]);
			d = d.apply(b, g || []);
			for (l in c) b.style[l] = e[l];
			return d;
		},
		Zb = {};
	p.fn.extend({
		show: function () {
			return I(this, !0);
		},
		hide: function () {
			return I(this);
		},
		toggle: function (b) {
			return 'boolean' == typeof b
				? b
					? this.show()
					: this.hide()
				: this.each(function () {
						Bb(this) ? p(this).show() : p(this).hide();
				  });
		},
	});
	var qc = /^(?:checkbox|radio)$/i,
		$b = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		ac = /^$|\/(?:java|ecma)script/i,
		ta = {
			option: [1, "<select multiple='multiple'>", '</select>'],
			thead: [1, '<table>', '</table>'],
			col: [2, '<table><colgroup>', '</colgroup></table>'],
			tr: [2, '<table><tbody>', '</tbody></table>'],
			td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
			_default: [0, '', ''],
		};
	ta.optgroup = ta.option;
	ta.tbody = ta.tfoot = ta.colgroup = ta.caption = ta.thead;
	ta.th = ta.td;
	var Kc = /<|&#?\w+;/,
		Mb = X.createDocumentFragment().appendChild(X.createElement('div')),
		Nb = X.createElement('input');
	Nb.setAttribute('type', 'radio');
	Nb.setAttribute('checked', 'checked');
	Nb.setAttribute('name', 't');
	Mb.appendChild(Nb);
	ca.checkClone = Mb.cloneNode(!0).cloneNode(!0).lastChild.checked;
	Mb.innerHTML = '<textarea>x</textarea>';
	ca.noCloneChecked = !!Mb.cloneNode(!0).lastChild.defaultValue;
	!0;
	var Ob = X.documentElement,
		hd = /^key/,
		id = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rc = /^([^.]*)(?:\.(.+)|)/;
	p.event = {
		global: {},
		add: function (b, c, d, g, l) {
			var e, f, x, j, q, s, m, N, r, u;
			if ((q = S.get(b))) {
				d.handler && ((e = d), (d = e.handler), (l = e.selector));
				l && p.find.matchesSelector(Ob, l);
				d.guid || (d.guid = p.guid++);
				(j = q.events) || (j = q.events = {});
				(f = q.handle) ||
					(f = q.handle =
						function (c) {
							return 'undefined' != typeof p &&
								p.event.triggered !== c.type
								? p.event.dispatch.apply(b, arguments)
								: void 0;
						});
				c = (c || '').match(ua) || [''];
				for (q = c.length; q--; )
					(x = rc.exec(c[q]) || []),
						(r = u = x[1]),
						(x = (x[2] || '').split('.').sort()),
						r &&
							((m = p.event.special[r] || {}),
							(r = (l ? m.delegateType : m.bindType) || r),
							(m = p.event.special[r] || {}),
							(s = p.extend(
								{
									type: r,
									origType: u,
									data: g,
									handler: d,
									guid: d.guid,
									selector: l,
									needsContext:
										l && p.expr.match.needsContext.test(l),
									namespace: x.join('.'),
								},
								e
							)),
							(N = j[r]) ||
								((N = j[r] = []),
								(N.delegateCount = 0),
								(m.setup && !1 !== m.setup.call(b, g, x, f)) ||
									(b.addEventListener &&
										b.addEventListener(r, f))),
							m.add &&
								(m.add.call(b, s),
								s.handler.guid || (s.handler.guid = d.guid)),
							l ? N.splice(N.delegateCount++, 0, s) : N.push(s),
							(p.event.global[r] = !0));
			}
		},
		remove: function (b, c, d, g, l) {
			var e,
				f,
				x,
				j,
				q,
				s,
				m,
				N,
				r,
				u,
				C,
				V = S.hasData(b) && S.get(b);
			if (V && (j = V.events)) {
				c = (c || '').match(ua) || [''];
				for (q = c.length; q--; )
					if (
						((x = rc.exec(c[q]) || []),
						(r = C = x[1]),
						(u = (x[2] || '').split('.').sort()),
						r)
					) {
						m = p.event.special[r] || {};
						r = (g ? m.delegateType : m.bindType) || r;
						N = j[r] || [];
						x =
							x[2] &&
							RegExp(
								'(^|\\.)' + u.join('\\.(?:.*\\.|)') + '(\\.|$)'
							);
						for (f = e = N.length; e--; )
							(s = N[e]),
								(!l && C !== s.origType) ||
									(d && d.guid !== s.guid) ||
									(x && !x.test(s.namespace)) ||
									(g &&
										g !== s.selector &&
										('**' !== g || !s.selector)) ||
									(N.splice(e, 1),
									s.selector && N.delegateCount--,
									m.remove && m.remove.call(b, s));
						f &&
							!N.length &&
							((m.teardown &&
								!1 !== m.teardown.call(b, u, V.handle)) ||
								p.removeEvent(b, r, V.handle),
							delete j[r]);
					} else for (r in j) p.event.remove(b, r + c[q], d, g, !0);
				p.isEmptyObject(j) && S.remove(b, 'handle events');
			}
		},
		dispatch: function (b) {
			var c = p.event.fix(b),
				d,
				g,
				l,
				e,
				f,
				x,
				j = Array(arguments.length);
			g = (S.get(this, 'events') || {})[c.type] || [];
			var q = p.event.special[c.type] || {};
			j[0] = c;
			for (d = 1; d < arguments.length; d++) j[d] = arguments[d];
			if (
				((c.delegateTarget = this),
				!q.preDispatch || !1 !== q.preDispatch.call(this, c))
			) {
				x = p.event.handlers.call(this, c, g);
				for (d = 0; (e = x[d++]) && !c.isPropagationStopped(); ) {
					c.currentTarget = e.elem;
					for (
						g = 0;
						(f = e.handlers[g++]) &&
						!c.isImmediatePropagationStopped();

					)
						(c.rnamespace && !c.rnamespace.test(f.namespace)) ||
							((c.handleObj = f),
							(c.data = f.data),
							(l = (
								(p.event.special[f.origType] || {}).handle ||
								f.handler
							).apply(e.elem, j)),
							void 0 !== l &&
								!1 === (c.result = l) &&
								(c.preventDefault(), c.stopPropagation()));
				}
				return q.postDispatch && q.postDispatch.call(this, c), c.result;
			}
		},
		handlers: function (b, c) {
			var d,
				g,
				l,
				e,
				f,
				x = [],
				j = c.delegateCount,
				q = b.target;
			if (j && q.nodeType && !('click' === b.type && 1 <= b.button))
				for (; q !== this; q = q.parentNode || this)
					if (
						1 === q.nodeType &&
						('click' !== b.type || !0 !== q.disabled)
					) {
						e = [];
						f = {};
						for (d = 0; d < j; d++)
							(g = c[d]),
								(l = g.selector + ' '),
								void 0 === f[l] &&
									(f[l] = g.needsContext
										? -1 < p(l, this).index(q)
										: p.find(l, this, null, [q]).length),
								f[l] && e.push(g);
						e.length && x.push({ elem: q, handlers: e });
					}
			return (
				(q = this),
				j < c.length && x.push({ elem: q, handlers: c.slice(j) }),
				x
			);
		},
		addProp: function (b, c) {
			Object.defineProperty(p.Event.prototype, b, {
				enumerable: !0,
				configurable: !0,
				get: p.isFunction(c)
					? function () {
							if (this.originalEvent)
								return c(this.originalEvent);
					  }
					: function () {
							if (this.originalEvent)
								return this.originalEvent[b];
					  },
				set: function (c) {
					Object.defineProperty(this, b, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: c,
					});
				},
			});
		},
		fix: function (b) {
			return b[p.expando] ? b : new p.Event(b);
		},
		special: {
			load: { noBubble: !0 },
			focus: {
				trigger: function () {
					if (this !== M() && this.focus) return this.focus(), !1;
				},
				delegateType: 'focusin',
			},
			blur: {
				trigger: function () {
					if (this === M() && this.blur) return this.blur(), !1;
				},
				delegateType: 'focusout',
			},
			click: {
				trigger: function () {
					if (
						'checkbox' === this.type &&
						this.click &&
						e(this, 'input')
					)
						return this.click(), !1;
				},
				_default: function (b) {
					return e(b.target, 'a');
				},
			},
			beforeunload: {
				postDispatch: function (b) {
					void 0 !== b.result &&
						b.originalEvent &&
						(b.originalEvent.returnValue = b.result);
				},
			},
		},
	};
	p.removeEvent = function (b, c, d) {
		b.removeEventListener && b.removeEventListener(c, d);
	};
	p.Event = function (b, c) {
		return this instanceof p.Event
			? (b && b.type
					? ((this.originalEvent = b),
					  (this.type = b.type),
					  (this.isDefaultPrevented =
							b.defaultPrevented ||
							(void 0 === b.defaultPrevented &&
								!1 === b.returnValue)
								? E
								: L),
					  (this.target =
							b.target && 3 === b.target.nodeType
								? b.target.parentNode
								: b.target),
					  (this.currentTarget = b.currentTarget),
					  (this.relatedTarget = b.relatedTarget))
					: (this.type = b),
			  c && p.extend(this, c),
			  (this.timeStamp = (b && b.timeStamp) || p.now()),
			  void (this[p.expando] = !0))
			: new p.Event(b, c);
	};
	p.Event.prototype = {
		constructor: p.Event,
		isDefaultPrevented: L,
		isPropagationStopped: L,
		isImmediatePropagationStopped: L,
		isSimulated: !1,
		preventDefault: function () {
			var b = this.originalEvent;
			this.isDefaultPrevented = E;
			b && !this.isSimulated && b.preventDefault();
		},
		stopPropagation: function () {
			var b = this.originalEvent;
			this.isPropagationStopped = E;
			b && !this.isSimulated && b.stopPropagation();
		},
		stopImmediatePropagation: function () {
			var b = this.originalEvent;
			this.isImmediatePropagationStopped = E;
			b && !this.isSimulated && b.stopImmediatePropagation();
			this.stopPropagation();
		},
	};
	p.each(
		{
			altKey: !0,
			bubbles: !0,
			cancelable: !0,
			changedTouches: !0,
			ctrlKey: !0,
			detail: !0,
			eventPhase: !0,
			metaKey: !0,
			pageX: !0,
			pageY: !0,
			shiftKey: !0,
			view: !0,
			char: !0,
			charCode: !0,
			key: !0,
			keyCode: !0,
			button: !0,
			buttons: !0,
			clientX: !0,
			clientY: !0,
			offsetX: !0,
			offsetY: !0,
			pointerId: !0,
			pointerType: !0,
			screenX: !0,
			screenY: !0,
			targetTouches: !0,
			toElement: !0,
			touches: !0,
			which: function (b) {
				var c = b.button;
				return null == b.which && hd.test(b.type)
					? null != b.charCode
						? b.charCode
						: b.keyCode
					: !b.which && void 0 !== c && id.test(b.type)
					? 1 & c
						? 1
						: 2 & c
						? 3
						: 4 & c
						? 2
						: 0
					: b.which;
			},
		},
		p.event.addProp
	);
	p.each(
		{
			mouseenter: 'mouseover',
			mouseleave: 'mouseout',
			pointerenter: 'pointerover',
			pointerleave: 'pointerout',
		},
		function (b, c) {
			p.event.special[b] = {
				delegateType: c,
				bindType: c,
				handle: function (b) {
					var d,
						g = b.relatedTarget,
						l = b.handleObj;
					return (
						(g && (g === this || p.contains(this, g))) ||
							((b.type = l.origType),
							(d = l.handler.apply(this, arguments)),
							(b.type = c)),
						d
					);
				},
			};
		}
	);
	p.fn.extend({
		on: function (b, c, d, g) {
			return Q(this, b, c, d, g);
		},
		one: function (b, c, d, g) {
			return Q(this, b, c, d, g, 1);
		},
		off: function (b, c, d) {
			var g, l;
			if (b && b.preventDefault && b.handleObj)
				return (
					(g = b.handleObj),
					p(b.delegateTarget).off(
						g.namespace
							? g.origType + '.' + g.namespace
							: g.origType,
						g.selector,
						g.handler
					),
					this
				);
			if ('object' == typeof b) {
				for (l in b) this.off(l, c, b[l]);
				return this;
			}
			return (
				(!1 !== c && 'function' != typeof c) || ((d = c), (c = void 0)),
				!1 === d && (d = L),
				this.each(function () {
					p.event.remove(this, b, d, c);
				})
			);
		},
	});
	var jd =
			/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		kd = /<script|<style|<link/i,
		Mc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Lc = /^true\/(.*)/,
		Oc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	p.extend({
		htmlPrefilter: function (b) {
			return b.replace(jd, '<$1></$2>');
		},
		clone: function (b, c, d) {
			var g,
				l,
				e,
				f,
				x = b.cloneNode(!0),
				q = p.contains(b.ownerDocument, b);
			if (
				!ca.noCloneChecked &&
				!((1 !== b.nodeType && 11 !== b.nodeType) || p.isXMLDoc(b))
			) {
				f = D(x);
				e = D(b);
				g = 0;
				for (l = e.length; g < l; g++) {
					var j = e[g],
						s = f[g],
						m = s.nodeName.toLowerCase();
					'input' === m && qc.test(j.type)
						? (s.checked = j.checked)
						: ('input' !== m && 'textarea' !== m) ||
						  (s.defaultValue = j.defaultValue);
				}
			}
			if (c)
				if (d) {
					e = e || D(b);
					f = f || D(x);
					g = 0;
					for (l = e.length; g < l; g++) P(e[g], f[g]);
				} else P(b, x);
			return (
				(f = D(x, 'script')),
				0 < f.length && t(f, !q && D(b, 'script')),
				x
			);
		},
		cleanData: function (b) {
			for (
				var c, d, g, l = p.event.special, e = 0;
				void 0 !== (d = b[e]);
				e++
			)
				if (Lb(d)) {
					if ((c = d[S.expando])) {
						if (c.events)
							for (g in c.events)
								l[g]
									? p.event.remove(d, g)
									: p.removeEvent(d, g, c.handle);
						d[S.expando] = void 0;
					}
					d[ra.expando] && (d[ra.expando] = void 0);
				}
		},
	});
	p.fn.extend({
		detach: function (b) {
			return U(this, b, !0);
		},
		remove: function (b) {
			return U(this, b);
		},
		text: function (b) {
			return Ja(
				this,
				function (b) {
					return void 0 === b
						? p.text(this)
						: this.empty().each(function () {
								(1 !== this.nodeType &&
									11 !== this.nodeType &&
									9 !== this.nodeType) ||
									(this.textContent = b);
						  });
				},
				null,
				b,
				arguments.length
			);
		},
		append: function () {
			return aa(this, arguments, function (b) {
				(1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType) &&
					J(this, b).appendChild(b);
			});
		},
		prepend: function () {
			return aa(this, arguments, function (b) {
				if (
					1 === this.nodeType ||
					11 === this.nodeType ||
					9 === this.nodeType
				) {
					var c = J(this, b);
					c.insertBefore(b, c.firstChild);
				}
			});
		},
		before: function () {
			return aa(this, arguments, function (b) {
				this.parentNode && this.parentNode.insertBefore(b, this);
			});
		},
		after: function () {
			return aa(this, arguments, function (b) {
				this.parentNode &&
					this.parentNode.insertBefore(b, this.nextSibling);
			});
		},
		empty: function () {
			for (var b, c = 0; null != (b = this[c]); c++)
				1 === b.nodeType &&
					(p.cleanData(D(b, !1)), (b.textContent = ''));
			return this;
		},
		clone: function (b, c) {
			return (
				(b = null != b && b),
				(c = null == c ? b : c),
				this.map(function () {
					return p.clone(this, b, c);
				})
			);
		},
		html: function (b) {
			return Ja(
				this,
				function (b) {
					var c = this[0] || {},
						d = 0,
						g = this.length;
					if (void 0 === b && 1 === c.nodeType) return c.innerHTML;
					if (
						'string' == typeof b &&
						!kd.test(b) &&
						!ta[($b.exec(b) || ['', ''])[1].toLowerCase()]
					) {
						b = p.htmlPrefilter(b);
						try {
							for (; d < g; d++)
								(c = this[d] || {}),
									1 === c.nodeType &&
										(p.cleanData(D(c, !1)),
										(c.innerHTML = b));
							c = 0;
						} catch (l) {}
					}
					c && this.empty().append(b);
				},
				null,
				b,
				arguments.length
			);
		},
		replaceWith: function () {
			var b = [];
			return aa(
				this,
				arguments,
				function (c) {
					var d = this.parentNode;
					0 > p.inArray(this, b) &&
						(p.cleanData(D(this)), d && d.replaceChild(c, this));
				},
				b
			);
		},
	});
	p.each(
		{
			appendTo: 'append',
			prependTo: 'prepend',
			insertBefore: 'before',
			insertAfter: 'after',
			replaceAll: 'replaceWith',
		},
		function (b, c) {
			p.fn[b] = function (b) {
				for (var d = [], g = p(b), l = g.length - 1, e = 0; e <= l; e++)
					(b = e === l ? this : this.clone(!0)),
						p(g[e])[c](b),
						db.apply(d, b.get());
				return this.pushStack(d);
			};
		}
	);
	var bc = /^margin/,
		Rb = RegExp('^(' + oc + ')(?!px)[a-z%]+$', 'i'),
		Cb = function (c) {
			var d = c.ownerDocument.defaultView;
			return (d && d.opener) || (d = b), d.getComputedStyle(c);
		},
		Qb = function () {
			if (Ca) {
				Ca.style.cssText =
					'box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%';
				Ca.innerHTML = '';
				Ob.appendChild(Pb);
				var c = b.getComputedStyle(Ca);
				sc = '1%' !== c.top;
				tc = '2px' === c.marginLeft;
				uc = '4px' === c.width;
				Ca.style.marginRight = '50%';
				vc = '4px' === c.marginRight;
				Ob.removeChild(Pb);
				Ca = null;
			}
		},
		sc,
		uc,
		vc,
		tc,
		Pb = X.createElement('div'),
		Ca = X.createElement('div');
	Ca.style &&
		((Ca.style.backgroundClip = 'content-box'),
		(Ca.cloneNode(!0).style.backgroundClip = ''),
		(ca.clearCloneStyle = 'content-box' === Ca.style.backgroundClip),
		(Pb.style.cssText =
			'border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute'),
		Pb.appendChild(Ca),
		p.extend(ca, {
			pixelPosition: function () {
				return Qb(), sc;
			},
			boxSizingReliable: function () {
				return Qb(), uc;
			},
			pixelMarginRight: function () {
				return Qb(), vc;
			},
			reliableMarginLeft: function () {
				return Qb(), tc;
			},
		}));
	!0;
	var ld = /^(none|table(?!-c[ea]).+)/,
		wc = /^--/,
		md = { position: 'absolute', visibility: 'hidden', display: 'block' },
		xc = { letterSpacing: '0', fontWeight: '400' },
		dc = ['Webkit', 'Moz', 'ms'],
		cc = X.createElement('div').style;
	p.extend({
		cssHooks: {
			opacity: {
				get: function (b, c) {
					if (c) {
						var d = q(b, 'opacity');
						return '' === d ? '1' : d;
					}
				},
			},
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
		},
		cssProps: { float: 'cssFloat' },
		style: function (b, c, d, g) {
			if (b && 3 !== b.nodeType && 8 !== b.nodeType && b.style) {
				var l,
					e,
					f,
					x = p.camelCase(c),
					j = wc.test(c),
					q = b.style;
				return (
					j || (c = F(x)),
					(f = p.cssHooks[c] || p.cssHooks[x]),
					void 0 === d
						? f && 'get' in f && void 0 !== (l = f.get(b, !1, g))
							? l
							: q[c]
						: ((e = typeof d),
						  'string' === e &&
								(l = nb.exec(d)) &&
								l[1] &&
								((d = B(b, c, l)), (e = 'number')),
						  null != d &&
								d === d &&
								('number' === e &&
									(d +=
										(l && l[3]) ||
										(p.cssNumber[x] ? '' : 'px')),
								ca.clearCloneStyle ||
									'' !== d ||
									0 !== c.indexOf('background') ||
									(q[c] = 'inherit'),
								(f &&
									'set' in f &&
									void 0 === (d = f.set(b, d, g))) ||
									(j ? q.setProperty(c, d) : (q[c] = d))),
						  void 0)
				);
			}
		},
		css: function (b, c, d, g) {
			var l,
				e,
				f,
				x = p.camelCase(c);
			return (
				wc.test(c) || (c = F(x)),
				(f = p.cssHooks[c] || p.cssHooks[x]),
				f && 'get' in f && (l = f.get(b, !0, d)),
				void 0 === l && (l = q(b, c, g)),
				'normal' === l && c in xc && (l = xc[c]),
				'' === d || d
					? ((e = parseFloat(l)),
					  !0 === d || isFinite(e) ? e || 0 : l)
					: l
			);
		},
	});
	p.each(['height', 'width'], function (b, c) {
		p.cssHooks[c] = {
			get: function (b, d, g) {
				if (d)
					return !ld.test(p.css(b, 'display')) ||
						(b.getClientRects().length &&
							b.getBoundingClientRect().width)
						? Z(b, c, g)
						: pc(b, md, function () {
								return Z(b, c, g);
						  });
			},
			set: function (b, d, g) {
				var l,
					e = g && Cb(b);
				g =
					g &&
					H(
						b,
						c,
						g,
						'border-box' === p.css(b, 'boxSizing', !1, e),
						e
					);
				return (
					g &&
						(l = nb.exec(d)) &&
						'px' !== (l[3] || 'px') &&
						((b.style[c] = d), (d = p.css(b, c))),
					C(b, d, g)
				);
			},
		};
	});
	p.cssHooks.marginLeft = u(ca.reliableMarginLeft, function (b, c) {
		if (c)
			return (
				(parseFloat(q(b, 'marginLeft')) ||
					b.getBoundingClientRect().left -
						pc(b, { marginLeft: 0 }, function () {
							return b.getBoundingClientRect().left;
						})) + 'px'
			);
	});
	p.each({ margin: '', padding: '', border: 'Width' }, function (b, c) {
		p.cssHooks[b + c] = {
			expand: function (d) {
				var g = 0,
					l = {};
				for (d = 'string' == typeof d ? d.split(' ') : [d]; 4 > g; g++)
					l[b + Ta[g] + c] = d[g] || d[g - 2] || d[0];
				return l;
			},
		};
		bc.test(b) || (p.cssHooks[b + c].set = C);
	});
	p.fn.extend({
		css: function (b, c) {
			return Ja(
				this,
				function (b, c, d) {
					var g,
						l = {},
						e = 0;
					if (Array.isArray(c)) {
						d = Cb(b);
						for (g = c.length; e < g; e++)
							l[c[e]] = p.css(b, c[e], !1, d);
						return l;
					}
					return void 0 !== d ? p.style(b, c, d) : p.css(b, c);
				},
				b,
				c,
				1 < arguments.length
			);
		},
	});
	p.Tween = R;
	R.prototype = {
		constructor: R,
		init: function (b, c, d, g, l, e) {
			this.elem = b;
			this.prop = d;
			this.easing = l || p.easing._default;
			this.options = c;
			this.start = this.now = this.cur();
			this.end = g;
			this.unit = e || (p.cssNumber[d] ? '' : 'px');
		},
		cur: function () {
			var b = R.propHooks[this.prop];
			return b && b.get ? b.get(this) : R.propHooks._default.get(this);
		},
		run: function (b) {
			var c,
				d = R.propHooks[this.prop];
			return (
				this.options.duration
					? (this.pos = c =
							p.easing[this.easing](
								b,
								this.options.duration * b,
								0,
								1,
								this.options.duration
							))
					: (this.pos = c = b),
				(this.now = (this.end - this.start) * c + this.start),
				this.options.step &&
					this.options.step.call(this.elem, this.now, this),
				d && d.set ? d.set(this) : R.propHooks._default.set(this),
				this
			);
		},
	};
	R.prototype.init.prototype = R.prototype;
	R.propHooks = {
		_default: {
			get: function (b) {
				var c;
				return 1 !== b.elem.nodeType ||
					(null != b.elem[b.prop] && null == b.elem.style[b.prop])
					? b.elem[b.prop]
					: ((c = p.css(b.elem, b.prop, '')),
					  c && 'auto' !== c ? c : 0);
			},
			set: function (b) {
				p.fx.step[b.prop]
					? p.fx.step[b.prop](b)
					: 1 !== b.elem.nodeType ||
					  (null == b.elem.style[p.cssProps[b.prop]] &&
							!p.cssHooks[b.prop])
					? (b.elem[b.prop] = b.now)
					: p.style(b.elem, b.prop, b.now + b.unit);
			},
		},
	};
	R.propHooks.scrollTop = R.propHooks.scrollLeft = {
		set: function (b) {
			b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now);
		},
	};
	p.easing = {
		linear: function (b) {
			return b;
		},
		swing: function (b) {
			return 0.5 - Math.cos(b * Math.PI) / 2;
		},
		_default: 'swing',
	};
	p.fx = R.prototype.init;
	p.fx.step = {};
	var cb,
		Db,
		nd = /^(?:toggle|show|hide)$/,
		od = /queueHooks$/;
	p.Animation = p.extend(N, {
		tweeners: {
			'*': [
				function (b, c) {
					var d = this.createTween(b, c);
					return B(d.elem, b, nb.exec(c), d), d;
				},
			],
		},
		tweener: function (b, c) {
			p.isFunction(b) ? ((c = b), (b = ['*'])) : (b = b.match(ua));
			for (var d, g = 0, l = b.length; g < l; g++)
				(d = b[g]),
					(N.tweeners[d] = N.tweeners[d] || []),
					N.tweeners[d].unshift(c);
		},
		prefilters: [
			function (b, c, d) {
				var g,
					l,
					e,
					f,
					q,
					j,
					s,
					m,
					N = 'width' in c || 'height' in c,
					r = this,
					u = {},
					C = b.style,
					V = b.nodeType && Bb(b),
					K = S.get(b, 'fxshow');
				d.queue ||
					((f = p._queueHooks(b, 'fx')),
					null == f.unqueued &&
						((f.unqueued = 0),
						(q = f.empty.fire),
						(f.empty.fire = function () {
							f.unqueued || q();
						})),
					f.unqueued++,
					r.always(function () {
						r.always(function () {
							f.unqueued--;
							p.queue(b, 'fx').length || f.empty.fire();
						});
					}));
				for (g in c)
					if (((l = c[g]), nd.test(l))) {
						if (
							(delete c[g],
							(e = e || 'toggle' === l),
							l === (V ? 'hide' : 'show'))
						) {
							if ('show' !== l || !K || void 0 === K[g]) continue;
							V = !0;
						}
						u[g] = (K && K[g]) || p.style(b, g);
					}
				if (((j = !p.isEmptyObject(c)), j || !p.isEmptyObject(u)))
					for (g in (N &&
						1 === b.nodeType &&
						((d.overflow = [C.overflow, C.overflowX, C.overflowY]),
						(s = K && K.display),
						null == s && (s = S.get(b, 'display')),
						(m = p.css(b, 'display')),
						'none' === m &&
							(s
								? (m = s)
								: (I([b], !0),
								  (s = b.style.display || s),
								  (m = p.css(b, 'display')),
								  I([b]))),
						('inline' === m ||
							('inline-block' === m && null != s)) &&
							'none' === p.css(b, 'float') &&
							(j ||
								(r.done(function () {
									C.display = s;
								}),
								null == s &&
									((m = C.display),
									(s = 'none' === m ? '' : m))),
							(C.display = 'inline-block'))),
					d.overflow &&
						((C.overflow = 'hidden'),
						r.always(function () {
							C.overflow = d.overflow[0];
							C.overflowX = d.overflow[1];
							C.overflowY = d.overflow[2];
						})),
					(j = !1),
					u))
						j ||
							(K
								? 'hidden' in K && (V = K.hidden)
								: (K = S.access(b, 'fxshow', { display: s })),
							e && (K.hidden = !V),
							V && I([b], !0),
							r.done(function () {
								V || I([b]);
								S.remove(b, 'fxshow');
								for (g in u) p.style(b, g, u[g]);
							})),
							(j = x(V ? K[g] : 0, g, r)),
							g in K ||
								((K[g] = j.start),
								V && ((j.end = j.start), (j.start = 0)));
			},
		],
		prefilter: function (b, c) {
			c ? N.prefilters.unshift(b) : N.prefilters.push(b);
		},
	});
	p.speed = function (b, c, d) {
		var g =
			b && 'object' == typeof b
				? p.extend({}, b)
				: {
						complete: d || (!d && c) || (p.isFunction(b) && b),
						duration: b,
						easing: (d && c) || (c && !p.isFunction(c) && c),
				  };
		return (
			p.fx.off
				? (g.duration = 0)
				: 'number' != typeof g.duration &&
				  (g.duration in p.fx.speeds
						? (g.duration = p.fx.speeds[g.duration])
						: (g.duration = p.fx.speeds._default)),
			(null != g.queue && !0 !== g.queue) || (g.queue = 'fx'),
			(g.old = g.complete),
			(g.complete = function () {
				p.isFunction(g.old) && g.old.call(this);
				g.queue && p.dequeue(this, g.queue);
			}),
			g
		);
	};
	p.fn.extend({
		fadeTo: function (b, c, d, g) {
			return this.filter(Bb)
				.css('opacity', 0)
				.show()
				.end()
				.animate({ opacity: c }, b, d, g);
		},
		animate: function (b, c, d, g) {
			var l = p.isEmptyObject(b),
				e = p.speed(c, d, g);
			c = function () {
				var c = N(this, p.extend({}, b), e);
				(l || S.get(this, 'finish')) && c.stop(!0);
			};
			return (
				(c.finish = c),
				l || !1 === e.queue ? this.each(c) : this.queue(e.queue, c)
			);
		},
		stop: function (b, c, d) {
			var g = function (b) {
				var c = b.stop;
				delete b.stop;
				c(d);
			};
			return (
				'string' != typeof b && ((d = c), (c = b), (b = void 0)),
				c && !1 !== b && this.queue(b || 'fx', []),
				this.each(function () {
					var c = !0,
						l = null != b && b + 'queueHooks',
						e = p.timers,
						f = S.get(this);
					if (l) f[l] && f[l].stop && g(f[l]);
					else
						for (l in f) f[l] && f[l].stop && od.test(l) && g(f[l]);
					for (l = e.length; l--; )
						e[l].elem !== this ||
							(null != b && e[l].queue !== b) ||
							(e[l].anim.stop(d), (c = !1), e.splice(l, 1));
					(!c && d) || p.dequeue(this, b);
				})
			);
		},
		finish: function (b) {
			return (
				!1 !== b && (b = b || 'fx'),
				this.each(function () {
					var c,
						d = S.get(this),
						g = d[b + 'queue'];
					c = d[b + 'queueHooks'];
					var l = p.timers,
						e = g ? g.length : 0;
					d.finish = !0;
					p.queue(this, b, []);
					c && c.stop && c.stop.call(this, !0);
					for (c = l.length; c--; )
						l[c].elem === this &&
							l[c].queue === b &&
							(l[c].anim.stop(!0), l.splice(c, 1));
					for (c = 0; c < e; c++)
						g[c] && g[c].finish && g[c].finish.call(this);
					delete d.finish;
				})
			);
		},
	});
	p.each(['toggle', 'show', 'hide'], function (b, c) {
		var d = p.fn[c];
		p.fn[c] = function (b, g, l) {
			return null == b || 'boolean' == typeof b
				? d.apply(this, arguments)
				: this.animate(K(c, !0), b, g, l);
		};
	});
	p.each(
		{
			slideDown: K('show'),
			slideUp: K('hide'),
			slideToggle: K('toggle'),
			fadeIn: { opacity: 'show' },
			fadeOut: { opacity: 'hide' },
			fadeToggle: { opacity: 'toggle' },
		},
		function (b, c) {
			p.fn[b] = function (b, d, g) {
				return this.animate(c, b, d, g);
			};
		}
	);
	p.timers = [];
	p.fx.tick = function () {
		var b,
			c = 0,
			d = p.timers;
		for (cb = p.now(); c < d.length; c++)
			(b = d[c]), b() || d[c] !== b || d.splice(c--, 1);
		d.length || p.fx.stop();
		cb = void 0;
	};
	p.fx.timer = function (b) {
		p.timers.push(b);
		p.fx.start();
	};
	p.fx.interval = 13;
	p.fx.start = function () {
		Db || ((Db = !0), l());
	};
	p.fx.stop = function () {
		Db = null;
	};
	p.fx.speeds = { slow: 600, fast: 200, _default: 400 };
	p.fn.delay = function (c, d) {
		return (
			(c = p.fx ? p.fx.speeds[c] || c : c),
			(d = d || 'fx'),
			this.queue(d, function (d, g) {
				var l = b.setTimeout(d, c);
				g.stop = function () {
					b.clearTimeout(l);
				};
			})
		);
	};
	var mb = X.createElement('input'),
		pd = X.createElement('select').appendChild(X.createElement('option'));
	mb.type = 'checkbox';
	ca.checkOn = '' !== mb.value;
	ca.optSelected = pd.selected;
	mb = X.createElement('input');
	mb.value = 't';
	mb.type = 'radio';
	ca.radioValue = 't' === mb.value;
	var yc,
		yb = p.expr.attrHandle;
	p.fn.extend({
		attr: function (b, c) {
			return Ja(this, p.attr, b, c, 1 < arguments.length);
		},
		removeAttr: function (b) {
			return this.each(function () {
				p.removeAttr(this, b);
			});
		},
	});
	p.extend({
		attr: function (b, c, d) {
			var g,
				l,
				e = b.nodeType;
			if (3 !== e && 8 !== e && 2 !== e)
				return 'undefined' == typeof b.getAttribute
					? p.prop(b, c, d)
					: ((1 === e && p.isXMLDoc(b)) ||
							(l =
								p.attrHooks[c.toLowerCase()] ||
								(p.expr.match.bool.test(c) ? yc : void 0)),
					  void 0 !== d
							? null === d
								? void p.removeAttr(b, c)
								: l &&
								  'set' in l &&
								  void 0 !== (g = l.set(b, d, c))
								? g
								: (b.setAttribute(c, d + ''), d)
							: l && 'get' in l && null !== (g = l.get(b, c))
							? g
							: ((g = p.find.attr(b, c)),
							  null == g ? void 0 : g));
		},
		attrHooks: {
			type: {
				set: function (b, c) {
					if (!ca.radioValue && 'radio' === c && e(b, 'input')) {
						var d = b.value;
						return b.setAttribute('type', c), d && (b.value = d), c;
					}
				},
			},
		},
		removeAttr: function (b, c) {
			var d,
				g = 0,
				l = c && c.match(ua);
			if (l && 1 === b.nodeType)
				for (; (d = l[g++]); ) b.removeAttribute(d);
		},
	});
	yc = {
		set: function (b, c, d) {
			return !1 === c ? p.removeAttr(b, d) : b.setAttribute(d, d), d;
		},
	};
	p.each(p.expr.match.bool.source.match(/\w+/g), function (b, c) {
		var d = yb[c] || p.find.attr;
		yb[c] = function (b, c, g) {
			var l,
				e,
				f = c.toLowerCase();
			return (
				g ||
					((e = yb[f]),
					(yb[f] = l),
					(l = null != d(b, c, g) ? f : null),
					(yb[f] = e)),
				l
			);
		};
	});
	var qd = /^(?:input|select|textarea|button)$/i,
		rd = /^(?:a|area)$/i;
	p.fn.extend({
		prop: function (b, c) {
			return Ja(this, p.prop, b, c, 1 < arguments.length);
		},
		removeProp: function (b) {
			return this.each(function () {
				delete this[p.propFix[b] || b];
			});
		},
	});
	p.extend({
		prop: function (b, c, d) {
			var g,
				l,
				e = b.nodeType;
			if (3 !== e && 8 !== e && 2 !== e)
				return (
					(1 === e && p.isXMLDoc(b)) ||
						((c = p.propFix[c] || c), (l = p.propHooks[c])),
					void 0 !== d
						? l && 'set' in l && void 0 !== (g = l.set(b, d, c))
							? g
							: (b[c] = d)
						: l && 'get' in l && null !== (g = l.get(b, c))
						? g
						: b[c]
				);
		},
		propHooks: {
			tabIndex: {
				get: function (b) {
					var c = p.find.attr(b, 'tabindex');
					return c
						? parseInt(c, 10)
						: qd.test(b.nodeName) || (rd.test(b.nodeName) && b.href)
						? 0
						: -1;
				},
			},
		},
		propFix: { for: 'htmlFor', class: 'className' },
	});
	ca.optSelected ||
		(p.propHooks.selected = {
			get: function (b) {
				b = b.parentNode;
				return b && b.parentNode && b.parentNode.selectedIndex, null;
			},
			set: function (b) {
				b = b.parentNode;
				b &&
					(b.selectedIndex,
					b.parentNode && b.parentNode.selectedIndex);
			},
		});
	p.each(
		'tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable'.split(
			' '
		),
		function () {
			p.propFix[this.toLowerCase()] = this;
		}
	);
	p.fn.extend({
		addClass: function (b) {
			var c,
				d,
				g,
				l,
				e,
				f,
				x = 0;
			if (p.isFunction(b))
				return this.each(function (c) {
					p(this).addClass(b.call(this, c, fa(this)));
				});
			if ('string' == typeof b && b)
				for (c = b.match(ua) || []; (d = this[x++]); )
					if (
						((l = fa(d)),
						(g = 1 === d.nodeType && ' ' + V(l) + ' '))
					) {
						for (f = 0; (e = c[f++]); )
							0 > g.indexOf(' ' + e + ' ') && (g += e + ' ');
						g = V(g);
						l !== g && d.setAttribute('class', g);
					}
			return this;
		},
		removeClass: function (b) {
			var c,
				d,
				g,
				l,
				e,
				f,
				x = 0;
			if (p.isFunction(b))
				return this.each(function (c) {
					p(this).removeClass(b.call(this, c, fa(this)));
				});
			if (!arguments.length) return this.attr('class', '');
			if ('string' == typeof b && b)
				for (c = b.match(ua) || []; (d = this[x++]); )
					if (
						((l = fa(d)),
						(g = 1 === d.nodeType && ' ' + V(l) + ' '))
					) {
						for (f = 0; (e = c[f++]); )
							for (; -1 < g.indexOf(' ' + e + ' '); )
								g = g.replace(' ' + e + ' ', ' ');
						g = V(g);
						l !== g && d.setAttribute('class', g);
					}
			return this;
		},
		toggleClass: function (b, c) {
			var d = typeof b;
			return 'boolean' == typeof c && 'string' === d
				? c
					? this.addClass(b)
					: this.removeClass(b)
				: p.isFunction(b)
				? this.each(function (d) {
						p(this).toggleClass(b.call(this, d, fa(this), c), c);
				  })
				: this.each(function () {
						var c, g, l, e;
						if ('string' === d) {
							g = 0;
							l = p(this);
							for (e = b.match(ua) || []; (c = e[g++]); )
								l.hasClass(c)
									? l.removeClass(c)
									: l.addClass(c);
						} else (void 0 !== b && 'boolean' !== d) || ((c = fa(this)), c && S.set(this, '__className__', c), this.setAttribute && this.setAttribute('class', c || !1 === b ? '' : S.get(this, '__className__') || ''));
				  });
		},
		hasClass: function (b) {
			var c,
				d = 0;
			for (b = ' ' + b + ' '; (c = this[d++]); )
				if (1 === c.nodeType && -1 < (' ' + V(fa(c)) + ' ').indexOf(b))
					return !0;
			return !1;
		},
	});
	var sd = /\r/g;
	p.fn.extend({
		val: function (b) {
			var c,
				d,
				g,
				l = this[0];
			if (arguments.length)
				return (
					(g = p.isFunction(b)),
					this.each(function (d) {
						var l;
						1 === this.nodeType &&
							((l = g ? b.call(this, d, p(this).val()) : b),
							null == l
								? (l = '')
								: 'number' == typeof l
								? (l += '')
								: Array.isArray(l) &&
								  (l = p.map(l, function (b) {
										return null == b ? '' : b + '';
								  })),
							(c =
								p.valHooks[this.type] ||
								p.valHooks[this.nodeName.toLowerCase()]),
							(c &&
								'set' in c &&
								void 0 !== c.set(this, l, 'value')) ||
								(this.value = l));
					})
				);
			if (l)
				return (
					(c =
						p.valHooks[l.type] ||
						p.valHooks[l.nodeName.toLowerCase()]),
					c && 'get' in c && void 0 !== (d = c.get(l, 'value'))
						? d
						: ((d = l.value),
						  'string' == typeof d
								? d.replace(sd, '')
								: null == d
								? ''
								: d)
				);
		},
	});
	p.extend({
		valHooks: {
			option: {
				get: function (b) {
					var c = p.find.attr(b, 'value');
					return null != c ? c : V(p.text(b));
				},
			},
			select: {
				get: function (b) {
					var c,
						d,
						g = b.options,
						l = b.selectedIndex,
						f = 'select-one' === b.type,
						x = f ? null : [],
						j = f ? l + 1 : g.length;
					for (d = 0 > l ? j : f ? l : 0; d < j; d++)
						if (
							((c = g[d]),
							(c.selected || d === l) &&
								!c.disabled &&
								(!c.parentNode.disabled ||
									!e(c.parentNode, 'optgroup')))
						) {
							if (((b = p(c).val()), f)) return b;
							x.push(b);
						}
					return x;
				},
				set: function (b, c) {
					for (
						var d,
							g,
							l = b.options,
							e = p.makeArray(c),
							f = l.length;
						f--;

					)
						(g = l[f]),
							(g.selected =
								-1 < p.inArray(p.valHooks.option.get(g), e)) &&
								(d = !0);
					return d || (b.selectedIndex = -1), e;
				},
			},
		},
	});
	p.each(['radio', 'checkbox'], function () {
		p.valHooks[this] = {
			set: function (b, c) {
				if (Array.isArray(c))
					return (b.checked = -1 < p.inArray(p(b).val(), c));
			},
		};
		ca.checkOn ||
			(p.valHooks[this].get = function (b) {
				return null === b.getAttribute('value') ? 'on' : b.value;
			});
	});
	var zc = /^(?:focusinfocus|focusoutblur)$/;
	p.extend(p.event, {
		trigger: function (c, d, g, l) {
			var e,
				f,
				x,
				j,
				q,
				s,
				m,
				N = [g || X],
				r = Ma.call(c, 'type') ? c.type : c;
			e = Ma.call(c, 'namespace') ? c.namespace.split('.') : [];
			if (
				((f = x = g = g || X),
				3 !== g.nodeType &&
					8 !== g.nodeType &&
					!zc.test(r + p.event.triggered) &&
					(-1 < r.indexOf('.') &&
						((e = r.split('.')), (r = e.shift()), e.sort()),
					(q = 0 > r.indexOf(':') && 'on' + r),
					(c = c[p.expando]
						? c
						: new p.Event(r, 'object' == typeof c && c)),
					(c.isTrigger = l ? 2 : 3),
					(c.namespace = e.join('.')),
					(c.rnamespace = c.namespace
						? RegExp(
								'(^|\\.)' + e.join('\\.(?:.*\\.|)') + '(\\.|$)'
						  )
						: null),
					(c.result = void 0),
					c.target || (c.target = g),
					(d = null == d ? [c] : p.makeArray(d, [c])),
					(m = p.event.special[r] || {}),
					l || !m.trigger || !1 !== m.trigger.apply(g, d)))
			) {
				if (!l && !m.noBubble && !p.isWindow(g)) {
					j = m.delegateType || r;
					for (
						zc.test(j + r) || (f = f.parentNode);
						f;
						f = f.parentNode
					)
						N.push(f), (x = f);
					x === (g.ownerDocument || X) &&
						N.push(x.defaultView || x.parentWindow || b);
				}
				for (e = 0; (f = N[e++]) && !c.isPropagationStopped(); )
					(c.type = 1 < e ? j : m.bindType || r),
						(s =
							(S.get(f, 'events') || {})[c.type] &&
							S.get(f, 'handle')) && s.apply(f, d),
						(s = q && f[q]) &&
							s.apply &&
							Lb(f) &&
							((c.result = s.apply(f, d)),
							!1 === c.result && c.preventDefault());
				return (
					(c.type = r),
					l ||
						c.isDefaultPrevented() ||
						(m._default && !1 !== m._default.apply(N.pop(), d)) ||
						!Lb(g) ||
						(q &&
							p.isFunction(g[r]) &&
							!p.isWindow(g) &&
							((x = g[q]),
							x && (g[q] = null),
							(p.event.triggered = r),
							g[r](),
							(p.event.triggered = void 0),
							x && (g[q] = x))),
					c.result
				);
			}
		},
		simulate: function (b, c, d) {
			b = p.extend(new p.Event(), d, { type: b, isSimulated: !0 });
			p.event.trigger(b, null, c);
		},
	});
	p.fn.extend({
		trigger: function (b, c) {
			return this.each(function () {
				p.event.trigger(b, c, this);
			});
		},
		triggerHandler: function (b, c) {
			var d = this[0];
			if (d) return p.event.trigger(b, c, d, !0);
		},
	});
	p.each(
		'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
			' '
		),
		function (b, c) {
			p.fn[c] = function (b, d) {
				return 0 < arguments.length
					? this.on(c, null, b, d)
					: this.trigger(c);
			};
		}
	);
	p.fn.extend({
		hover: function (b, c) {
			return this.mouseenter(b).mouseleave(c || b);
		},
	});
	ca.focusin = 'onfocusin' in b;
	ca.focusin ||
		p.each({ focus: 'focusin', blur: 'focusout' }, function (b, c) {
			var d = function (b) {
				p.event.simulate(c, b.target, p.event.fix(b));
			};
			p.event.special[c] = {
				setup: function () {
					var g = this.ownerDocument || this,
						l = S.access(g, c);
					l || g.addEventListener(b, d, !0);
					S.access(g, c, (l || 0) + 1);
				},
				teardown: function () {
					var g = this.ownerDocument || this,
						l = S.access(g, c) - 1;
					l
						? S.access(g, c, l)
						: (g.removeEventListener(b, d, !0), S.remove(g, c));
				},
			};
		});
	var zb = b.location,
		Ac = p.now(),
		Wb = /\?/;
	p.parseXML = function (c) {
		var d;
		if (!c || 'string' != typeof c) return null;
		try {
			d = new b.DOMParser().parseFromString(c, 'text/xml');
		} catch (g) {
			d = void 0;
		}
		return (
			(d && !d.getElementsByTagName('parsererror').length) ||
				p.error('Invalid XML: ' + c),
			d
		);
	};
	var Pc = /\[\]$/,
		Bc = /\r?\n/g,
		td = /^(?:submit|button|image|reset|file)$/i,
		ud = /^(?:input|select|textarea|keygen)/i;
	p.param = function (b, c) {
		var d,
			g = [],
			l = function (b, c) {
				var d = p.isFunction(c) ? c() : c;
				g[g.length] =
					encodeURIComponent(b) +
					'=' +
					encodeURIComponent(null == d ? '' : d);
			};
		if (Array.isArray(b) || (b.jquery && !p.isPlainObject(b)))
			p.each(b, function () {
				l(this.name, this.value);
			});
		else for (d in b) ha(d, b[d], c, l);
		return g.join('&');
	};
	p.fn.extend({
		serialize: function () {
			return p.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {
				var b = p.prop(this, 'elements');
				return b ? p.makeArray(b) : this;
			})
				.filter(function () {
					var b = this.type;
					return (
						this.name &&
						!p(this).is(':disabled') &&
						ud.test(this.nodeName) &&
						!td.test(b) &&
						(this.checked || !qc.test(b))
					);
				})
				.map(function (b, c) {
					var d = p(this).val();
					return null == d
						? null
						: Array.isArray(d)
						? p.map(d, function (b) {
								return {
									name: c.name,
									value: b.replace(Bc, '\r\n'),
								};
						  })
						: { name: c.name, value: d.replace(Bc, '\r\n') };
				})
				.get();
		},
	});
	var vd = /%20/g,
		wd = /#.*$/,
		xd = /([?&])_=[^&]*/,
		yd = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		zd = /^(?:GET|HEAD)$/,
		Ad = /^\/\//,
		Cc = {},
		Sb = {},
		Dc = '*/'.concat('*'),
		Xb = X.createElement('a');
	Xb.href = zb.href;
	p.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: zb.href,
			type: 'GET',
			isLocal:
				/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
					zb.protocol
				),
			global: !0,
			processData: !0,
			async: !0,
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			accepts: {
				'*': Dc,
				text: 'text/plain',
				html: 'text/html',
				xml: 'application/xml, text/xml',
				json: 'application/json, text/javascript',
			},
			contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
			responseFields: {
				xml: 'responseXML',
				text: 'responseText',
				json: 'responseJSON',
			},
			converters: {
				'* text': String,
				'text html': !0,
				'text json': JSON.parse,
				'text xml': p.parseXML,
			},
			flatOptions: { url: !0, context: !0 },
		},
		ajaxSetup: function (b, c) {
			return c ? pa(pa(b, p.ajaxSettings), c) : pa(p.ajaxSettings, b);
		},
		ajaxPrefilter: la(Cc),
		ajaxTransport: la(Sb),
		ajax: function (c, d) {
			function g(c, d, x, q) {
				var N,
					r,
					F,
					R,
					fa = d;
				if (!s) {
					s = !0;
					j && b.clearTimeout(j);
					l = void 0;
					f = q || '';
					H.readyState = 0 < c ? 4 : 0;
					q = (200 <= c && 300 > c) || 304 === c;
					if (x) {
						F = u;
						for (
							var y = H,
								n,
								A,
								Z,
								ha,
								B = F.contents,
								E = F.dataTypes;
							'*' === E[0];

						)
							E.shift(),
								void 0 === n &&
									(n =
										F.mimeType ||
										y.getResponseHeader('Content-Type'));
						if (n)
							for (A in B)
								if (B[A] && B[A].test(n)) {
									E.unshift(A);
									break;
								}
						if (E[0] in x) Z = E[0];
						else {
							for (A in x) {
								if (!E[0] || F.converters[A + ' ' + E[0]]) {
									Z = A;
									break;
								}
								ha || (ha = A);
							}
							Z = Z || ha;
						}
						x = Z ? (Z !== E[0] && E.unshift(Z), x[Z]) : void 0;
						F = x;
					}
					var pa;
					a: {
						x = u;
						n = F;
						A = H;
						Z = q;
						var la, G, oa;
						F = {};
						y = x.dataTypes.slice();
						if (y[1])
							for (la in x.converters)
								F[la.toLowerCase()] = x.converters[la];
						for (ha = y.shift(); ha; )
							if (
								(x.responseFields[ha] &&
									(A[x.responseFields[ha]] = n),
								!oa &&
									Z &&
									x.dataFilter &&
									(n = x.dataFilter(n, x.dataType)),
								(oa = ha),
								(ha = y.shift()))
							)
								if ('*' === ha) ha = oa;
								else if ('*' !== oa && oa !== ha) {
									if (
										((la =
											F[oa + ' ' + ha] || F['* ' + ha]),
										!la)
									)
										for (pa in F)
											if (
												((G = pa.split(' ')),
												G[1] === ha &&
													(la =
														F[oa + ' ' + G[0]] ||
														F['* ' + G[0]]))
											) {
												!0 === la
													? (la = F[pa])
													: !0 !== F[pa] &&
													  ((ha = G[0]),
													  y.unshift(G[1]));
												break;
											}
									if (!0 !== la)
										if (la && x['throws']) n = la(n);
										else
											try {
												n = la(n);
											} catch (va) {
												pa = {
													state: 'parsererror',
													error: la
														? va
														: 'No conversion from ' +
														  oa +
														  ' to ' +
														  ha,
												};
												break a;
											}
								}
						pa = { state: 'success', data: n };
					}
					F = pa;
					q
						? (u.ifModified &&
								((R = H.getResponseHeader('Last-Modified')),
								R && (p.lastModified[e] = R),
								(R = H.getResponseHeader('etag')),
								R && (p.etag[e] = R)),
						  204 === c || 'HEAD' === u.type
								? (fa = 'nocontent')
								: 304 === c
								? (fa = 'notmodified')
								: ((fa = F.state),
								  (N = F.data),
								  (r = F.error),
								  (q = !r)))
						: ((r = fa),
						  (!c && fa) || ((fa = 'error'), 0 > c && (c = 0)));
					H.status = c;
					H.statusText = (d || fa) + '';
					q
						? K.resolveWith(C, [N, fa, H])
						: K.rejectWith(C, [H, fa, r]);
					H.statusCode(z);
					z = void 0;
					m &&
						V.trigger(q ? 'ajaxSuccess' : 'ajaxError', [
							H,
							u,
							q ? N : r,
						]);
					t.fireWith(C, [H, fa]);
					m &&
						(V.trigger('ajaxComplete', [H, u]),
						--p.active || p.event.trigger('ajaxStop'));
				}
			}
			'object' == typeof c && ((d = c), (c = void 0));
			d = d || {};
			var l,
				e,
				f,
				x,
				j,
				q,
				s,
				m,
				N,
				r,
				u = p.ajaxSetup({}, d),
				C = u.context || u,
				V = u.context && (C.nodeType || C.jquery) ? p(C) : p.event,
				K = p.Deferred(),
				t = p.Callbacks('once memory'),
				z = u.statusCode || {},
				F = {},
				R = {},
				fa = 'canceled',
				H = {
					readyState: 0,
					getResponseHeader: function (b) {
						var c;
						if (s) {
							if (!x)
								for (x = {}; (c = yd.exec(f)); )
									x[c[1].toLowerCase()] = c[2];
							c = x[b.toLowerCase()];
						}
						return null == c ? null : c;
					},
					getAllResponseHeaders: function () {
						return s ? f : null;
					},
					setRequestHeader: function (b, c) {
						return (
							null == s &&
								((b = R[b.toLowerCase()] =
									R[b.toLowerCase()] || b),
								(F[b] = c)),
							this
						);
					},
					overrideMimeType: function (b) {
						return null == s && (u.mimeType = b), this;
					},
					statusCode: function (b) {
						var c;
						if (b)
							if (s) H.always(b[H.status]);
							else for (c in b) z[c] = [z[c], b[c]];
						return this;
					},
					abort: function (b) {
						b = b || fa;
						return l && l.abort(b), g(0, b), this;
					},
				};
			if (
				(K.promise(H),
				(u.url = ((c || u.url || zb.href) + '').replace(
					Ad,
					zb.protocol + '//'
				)),
				(u.type = d.method || d.type || u.method || u.type),
				(u.dataTypes = (u.dataType || '*').toLowerCase().match(ua) || [
					'',
				]),
				null == u.crossDomain)
			) {
				q = X.createElement('a');
				try {
					(q.href = u.url),
						(q.href = q.href),
						(u.crossDomain =
							Xb.protocol + '//' + Xb.host !=
							q.protocol + '//' + q.host);
				} catch (y) {
					u.crossDomain = !0;
				}
			}
			if (
				(u.data &&
					u.processData &&
					'string' != typeof u.data &&
					(u.data = p.param(u.data, u.traditional)),
				oa(Cc, u, d, H),
				s)
			)
				return H;
			(m = p.event && u.global) &&
				0 === p.active++ &&
				p.event.trigger('ajaxStart');
			u.type = u.type.toUpperCase();
			u.hasContent = !zd.test(u.type);
			e = u.url.replace(wd, '');
			u.hasContent
				? u.data &&
				  u.processData &&
				  0 ===
						(u.contentType || '').indexOf(
							'application/x-www-form-urlencoded'
						) &&
				  (u.data = u.data.replace(vd, '+'))
				: ((r = u.url.slice(e.length)),
				  u.data &&
						((e += (Wb.test(e) ? '&' : '?') + u.data),
						delete u.data),
				  !1 === u.cache &&
						((e = e.replace(xd, '$1')),
						(r = (Wb.test(e) ? '&' : '?') + '_=' + Ac++ + r)),
				  (u.url = e + r));
			u.ifModified &&
				(p.lastModified[e] &&
					H.setRequestHeader('If-Modified-Since', p.lastModified[e]),
				p.etag[e] && H.setRequestHeader('If-None-Match', p.etag[e]));
			((u.data && u.hasContent && !1 !== u.contentType) ||
				d.contentType) &&
				H.setRequestHeader('Content-Type', u.contentType);
			H.setRequestHeader(
				'Accept',
				u.dataTypes[0] && u.accepts[u.dataTypes[0]]
					? u.accepts[u.dataTypes[0]] +
							('*' !== u.dataTypes[0]
								? ', ' + Dc + '; q=0.01'
								: '')
					: u.accepts['*']
			);
			for (N in u.headers) H.setRequestHeader(N, u.headers[N]);
			if (u.beforeSend && (!1 === u.beforeSend.call(C, H, u) || s))
				return H.abort();
			if (
				((fa = 'abort'),
				t.add(u.complete),
				H.done(u.success),
				H.fail(u.error),
				(l = oa(Sb, u, d, H)))
			) {
				if (((H.readyState = 1), m && V.trigger('ajaxSend', [H, u]), s))
					return H;
				u.async &&
					0 < u.timeout &&
					(j = b.setTimeout(function () {
						H.abort('timeout');
					}, u.timeout));
				try {
					(s = !1), l.send(F, g);
				} catch (n) {
					if (s) throw n;
					g(-1, n);
				}
			} else g(-1, 'No Transport');
			return H;
		},
		getJSON: function (b, c, d) {
			return p.get(b, c, d, 'json');
		},
		getScript: function (b, c) {
			return p.get(b, void 0, c, 'script');
		},
	});
	p.each(['get', 'post'], function (b, c) {
		p[c] = function (b, d, g, l) {
			return (
				p.isFunction(d) && ((l = l || g), (g = d), (d = void 0)),
				p.ajax(
					p.extend(
						{ url: b, type: c, dataType: l, data: d, success: g },
						p.isPlainObject(b) && b
					)
				)
			);
		};
	});
	p._evalUrl = function (b) {
		return p.ajax({
			url: b,
			type: 'GET',
			dataType: 'script',
			cache: !0,
			async: !1,
			global: !1,
			throws: !0,
		});
	};
	p.fn.extend({
		wrapAll: function (b) {
			var c;
			return (
				this[0] &&
					(p.isFunction(b) && (b = b.call(this[0])),
					(c = p(b, this[0].ownerDocument).eq(0).clone(!0)),
					this[0].parentNode && c.insertBefore(this[0]),
					c
						.map(function () {
							for (var b = this; b.firstElementChild; )
								b = b.firstElementChild;
							return b;
						})
						.append(this)),
				this
			);
		},
		wrapInner: function (b) {
			return p.isFunction(b)
				? this.each(function (c) {
						p(this).wrapInner(b.call(this, c));
				  })
				: this.each(function () {
						var c = p(this),
							d = c.contents();
						d.length ? d.wrapAll(b) : c.append(b);
				  });
		},
		wrap: function (b) {
			var c = p.isFunction(b);
			return this.each(function (d) {
				p(this).wrapAll(c ? b.call(this, d) : b);
			});
		},
		unwrap: function (b) {
			return (
				this.parent(b)
					.not('body')
					.each(function () {
						p(this).replaceWith(this.childNodes);
					}),
				this
			);
		},
	});
	p.expr.pseudos.hidden = function (b) {
		return !p.expr.pseudos.visible(b);
	};
	p.expr.pseudos.visible = function (b) {
		return !(
			!b.offsetWidth &&
			!b.offsetHeight &&
			!b.getClientRects().length
		);
	};
	p.ajaxSettings.xhr = function () {
		try {
			return new b.XMLHttpRequest();
		} catch (c) {}
	};
	var Bd = { 0: 200, 1223: 204 },
		Ab = p.ajaxSettings.xhr();
	ca.cors = !!Ab && 'withCredentials' in Ab;
	ca.ajax = Ab = !!Ab;
	p.ajaxTransport(function (c) {
		var d, g;
		if (ca.cors || (Ab && !c.crossDomain))
			return {
				send: function (l, e) {
					var f,
						x = c.xhr();
					if (
						(x.open(c.type, c.url, c.async, c.username, c.password),
						c.xhrFields)
					)
						for (f in c.xhrFields) x[f] = c.xhrFields[f];
					c.mimeType &&
						x.overrideMimeType &&
						x.overrideMimeType(c.mimeType);
					c.crossDomain ||
						l['X-Requested-With'] ||
						(l['X-Requested-With'] = 'XMLHttpRequest');
					for (f in l) x.setRequestHeader(f, l[f]);
					d = function (b) {
						return function () {
							d &&
								((d =
									g =
									x.onload =
									x.onerror =
									x.onabort =
									x.onreadystatechange =
										null),
								'abort' === b
									? x.abort()
									: 'error' === b
									? 'number' != typeof x.status
										? e(0, 'error')
										: e(x.status, x.statusText)
									: e(
											Bd[x.status] || x.status,
											x.statusText,
											'text' !==
												(x.responseType || 'text') ||
												'string' !=
													typeof x.responseText
												? { binary: x.response }
												: { text: x.responseText },
											x.getAllResponseHeaders()
									  ));
						};
					};
					x.onload = d();
					g = x.onerror = d('error');
					void 0 !== x.onabort
						? (x.onabort = g)
						: (x.onreadystatechange = function () {
								4 === x.readyState &&
									b.setTimeout(function () {
										d && g();
									});
						  });
					d = d('abort');
					try {
						x.send((c.hasContent && c.data) || null);
					} catch (q) {
						if (d) throw q;
					}
				},
				abort: function () {
					d && d();
				},
			};
	});
	p.ajaxPrefilter(function (b) {
		b.crossDomain && (b.contents.script = !1);
	});
	p.ajaxSetup({
		accepts: {
			script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
		},
		contents: { script: /\b(?:java|ecma)script\b/ },
		converters: {
			'text script': function (b) {
				return p.globalEval(b), b;
			},
		},
	});
	p.ajaxPrefilter('script', function (b) {
		void 0 === b.cache && (b.cache = !1);
		b.crossDomain && (b.type = 'GET');
	});
	p.ajaxTransport('script', function (b) {
		if (b.crossDomain) {
			var c, d;
			return {
				send: function (g, l) {
					c = p('<script>')
						.prop({ charset: b.scriptCharset, src: b.url })
						.on(
							'load error',
							(d = function (b) {
								c.remove();
								d = null;
								b && l('error' === b.type ? 404 : 200, b.type);
							})
						);
					X.head.appendChild(c[0]);
				},
				abort: function () {
					d && d();
				},
			};
		}
	});
	var Ec = [],
		Yb = /(=)\?(?=&|$)|\?\?/;
	p.ajaxSetup({
		jsonp: 'callback',
		jsonpCallback: function () {
			var b = Ec.pop() || p.expando + '_' + Ac++;
			return (this[b] = !0), b;
		},
	});
	p.ajaxPrefilter('json jsonp', function (c, d, g) {
		var l,
			e,
			f,
			x =
				!1 !== c.jsonp &&
				(Yb.test(c.url)
					? 'url'
					: 'string' == typeof c.data &&
					  0 ===
							(c.contentType || '').indexOf(
								'application/x-www-form-urlencoded'
							) &&
					  Yb.test(c.data) &&
					  'data');
		if (x || 'jsonp' === c.dataTypes[0])
			return (
				(l = c.jsonpCallback =
					p.isFunction(c.jsonpCallback)
						? c.jsonpCallback()
						: c.jsonpCallback),
				x
					? (c[x] = c[x].replace(Yb, '$1' + l))
					: !1 !== c.jsonp &&
					  (c.url +=
							(Wb.test(c.url) ? '&' : '?') + c.jsonp + '=' + l),
				(c.converters['script json'] = function () {
					return f || p.error(l + ' was not called'), f[0];
				}),
				(c.dataTypes[0] = 'json'),
				(e = b[l]),
				(b[l] = function () {
					f = arguments;
				}),
				g.always(function () {
					void 0 === e ? p(b).removeProp(l) : (b[l] = e);
					c[l] && ((c.jsonpCallback = d.jsonpCallback), Ec.push(l));
					f && p.isFunction(e) && e(f[0]);
					f = e = void 0;
				}),
				'script'
			);
	});
	var Cd = ca,
		Fc,
		Gc = X.implementation.createHTMLDocument('').body;
	Fc =
		((Gc.innerHTML = '<form></form><form></form>'),
		2 === Gc.childNodes.length);
	Cd.createHTMLDocument = Fc;
	p.parseHTML = function (b, c, d) {
		if ('string' != typeof b) return [];
		'boolean' == typeof c && ((d = c), (c = !1));
		var g, l, e;
		return (
			c ||
				(ca.createHTMLDocument
					? ((c = X.implementation.createHTMLDocument('')),
					  (g = c.createElement('base')),
					  (g.href = X.location.href),
					  c.head.appendChild(g))
					: (c = X)),
			(l = mc.exec(b)),
			(e = !d && []),
			l
				? [c.createElement(l[1])]
				: ((l = G([b], c, e)),
				  e && e.length && p(e).remove(),
				  p.merge([], l.childNodes))
		);
	};
	p.fn.load = function (b, c, d) {
		var g,
			l,
			e,
			f = this,
			x = b.indexOf(' ');
		return (
			-1 < x && ((g = V(b.slice(x))), (b = b.slice(0, x))),
			p.isFunction(c)
				? ((d = c), (c = void 0))
				: c && 'object' == typeof c && (l = 'POST'),
			0 < f.length &&
				p
					.ajax({
						url: b,
						type: l || 'GET',
						dataType: 'html',
						data: c,
					})
					.done(function (b) {
						e = arguments;
						f.html(
							g ? p('<div>').append(p.parseHTML(b)).find(g) : b
						);
					})
					.always(
						d &&
							function (b, c) {
								f.each(function () {
									d.apply(this, e || [b.responseText, c, b]);
								});
							}
					),
			this
		);
	};
	p.each(
		'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(
			' '
		),
		function (b, c) {
			p.fn[c] = function (b) {
				return this.on(c, b);
			};
		}
	);
	p.expr.pseudos.animated = function (b) {
		return p.grep(p.timers, function (c) {
			return b === c.elem;
		}).length;
	};
	p.offset = {
		setOffset: function (b, c, d) {
			var g,
				l,
				e,
				f,
				x,
				q,
				j = p.css(b, 'position'),
				s = p(b),
				m = {};
			'static' === j && (b.style.position = 'relative');
			x = s.offset();
			e = p.css(b, 'top');
			q = p.css(b, 'left');
			('absolute' === j || 'fixed' === j) && -1 < (e + q).indexOf('auto')
				? ((g = s.position()), (f = g.top), (l = g.left))
				: ((f = parseFloat(e) || 0), (l = parseFloat(q) || 0));
			p.isFunction(c) && (c = c.call(b, d, p.extend({}, x)));
			null != c.top && (m.top = c.top - x.top + f);
			null != c.left && (m.left = c.left - x.left + l);
			'using' in c ? c.using.call(b, m) : s.css(m);
		},
	};
	p.fn.extend({
		offset: function (b) {
			if (arguments.length)
				return void 0 === b
					? this
					: this.each(function (c) {
							p.offset.setOffset(this, b, c);
					  });
			var c,
				d,
				g,
				l,
				e = this[0];
			if (e)
				return e.getClientRects().length
					? ((g = e.getBoundingClientRect()),
					  (c = e.ownerDocument),
					  (d = c.documentElement),
					  (l = c.defaultView),
					  {
							top: g.top + l.pageYOffset - d.clientTop,
							left: g.left + l.pageXOffset - d.clientLeft,
					  })
					: { top: 0, left: 0 };
		},
		position: function () {
			if (this[0]) {
				var b,
					c,
					d = this[0],
					g = { top: 0, left: 0 };
				return (
					'fixed' === p.css(d, 'position')
						? (c = d.getBoundingClientRect())
						: ((b = this.offsetParent()),
						  (c = this.offset()),
						  e(b[0], 'html') || (g = b.offset()),
						  (g = {
								top: g.top + p.css(b[0], 'borderTopWidth', !0),
								left:
									g.left + p.css(b[0], 'borderLeftWidth', !0),
						  })),
					{
						top: c.top - g.top - p.css(d, 'marginTop', !0),
						left: c.left - g.left - p.css(d, 'marginLeft', !0),
					}
				);
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (
					var b = this.offsetParent;
					b && 'static' === p.css(b, 'position');

				)
					b = b.offsetParent;
				return b || Ob;
			});
		},
	});
	p.each(
		{ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
		function (b, c) {
			var d = 'pageYOffset' === c;
			p.fn[b] = function (g) {
				return Ja(
					this,
					function (b, g, l) {
						var e;
						return (
							p.isWindow(b)
								? (e = b)
								: 9 === b.nodeType && (e = b.defaultView),
							void 0 === l
								? e
									? e[c]
									: b[g]
								: void (e
										? e.scrollTo(
												d ? e.pageXOffset : l,
												d ? l : e.pageYOffset
										  )
										: (b[g] = l))
						);
					},
					b,
					g,
					arguments.length
				);
			};
		}
	);
	p.each(['top', 'left'], function (b, c) {
		p.cssHooks[c] = u(ca.pixelPosition, function (b, d) {
			if (d)
				return (
					(d = q(b, c)), Rb.test(d) ? p(b).position()[c] + 'px' : d
				);
		});
	});
	p.each({ Height: 'height', Width: 'width' }, function (b, c) {
		p.each(
			{ padding: 'inner' + b, content: c, '': 'outer' + b },
			function (d, g) {
				p.fn[g] = function (l, e) {
					var f = arguments.length && (d || 'boolean' != typeof l),
						x = d || (!0 === l || !0 === e ? 'margin' : 'border');
					return Ja(
						this,
						function (c, d, l) {
							var e;
							return p.isWindow(c)
								? 0 === g.indexOf('outer')
									? c['inner' + b]
									: c.document.documentElement['client' + b]
								: 9 === c.nodeType
								? ((e = c.documentElement),
								  Math.max(
										c.body['scroll' + b],
										e['scroll' + b],
										c.body['offset' + b],
										e['offset' + b],
										e['client' + b]
								  ))
								: void 0 === l
								? p.css(c, d, x)
								: p.style(c, d, l, x);
						},
						c,
						f ? l : void 0,
						f
					);
				};
			}
		);
	});
	p.fn.extend({
		bind: function (b, c, d) {
			return this.on(b, null, c, d);
		},
		unbind: function (b, c) {
			return this.off(b, null, c);
		},
		delegate: function (b, c, d, g) {
			return this.on(c, b, d, g);
		},
		undelegate: function (b, c, d) {
			return 1 === arguments.length
				? this.off(b, '**')
				: this.off(c, b || '**', d);
		},
	});
	p.holdReady = function (b) {
		b ? p.readyWait++ : p.ready(!0);
	};
	p.isArray = Array.isArray;
	p.parseJSON = JSON.parse;
	p.nodeName = e;
	'function' == typeof define &&
		define.amd &&
		define('jquery', [], function () {
			return p;
		});
	var Dd = b.jQuery,
		Ed = b.$;
	return (
		(p.noConflict = function (c) {
			return (
				b.$ === p && (b.$ = Ed),
				c && b.jQuery === p && (b.jQuery = Dd),
				p
			);
		}),
		c || (b.jQuery = b.$ = p),
		p
	);
});
function getInternetExplorerVersion() {
	var b = -1;
	'Microsoft Internet Explorer' == navigator.appName &&
		null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) &&
		(b = parseFloat(RegExp.$1));
	return b;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
	for (
		var c = window.location.search.substring(1).split('&'), d = 0;
		d < c.length;
		d++
	) {
		var f = c[d].split('=');
		if (decodeURIComponent(f[0]) == b) return decodeURIComponent(f[1]);
	}
}
this.jukebox = {};
jukebox.Player = function (b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ('[object Object]' === Object.prototype.toString.call(b))
		for (var f in b) this.settings[f] = b[f];
	'[object Function]' === Object.prototype.toString.call(jukebox.Manager) &&
		(jukebox.Manager = new jukebox.Manager());
	this.resource = this.isPlaying = null;
	this.resource =
		'[object Object]' === Object.prototype.toString.call(jukebox.Manager)
			? jukebox.Manager.getPlayableResource(this.settings.resources)
			: this.settings.resources[0] || null;
	if (null === this.resource)
		throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this;
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
	defaults: {
		resources: [],
		autoplay: !1,
		spritemap: {},
		flashMediaElement: './swf/FlashMediaElement.swf',
		timeout: 1e3,
	},
	__addToManager: function () {
		!0 !== this.__wasAddedToManager &&
			(jukebox.Manager.add(this), (this.__wasAddedToManager = !0));
	},
	__init: function () {
		var b = this,
			c = this.settings,
			d = {},
			f;
		jukebox.Manager &&
			void 0 !== jukebox.Manager.features &&
			(d = jukebox.Manager.features);
		if (!0 === d.html5audio) {
			this.context = new Audio();
			this.context.src = this.resource;
			if (null === this.origin) {
				var e = function (c) {
					b.__addToManager(c);
				};
				this.context.addEventListener('canplaythrough', e, !0);
				window.setTimeout(function () {
					b.context.removeEventListener('canplaythrough', e, !0);
					e('timeout');
				}, c.timeout);
			}
			this.context.autobuffer = !0;
			this.context.preload = !0;
			for (f in this.HTML5API) this[f] = this.HTML5API[f];
			1 < d.channels
				? !0 === c.autoplay
					? (this.context.autoplay = !0)
					: void 0 !== c.spritemap[c.autoplay] &&
					  this.play(c.autoplay)
				: 1 === d.channels &&
				  void 0 !== c.spritemap[c.autoplay] &&
				  ((this.backgroundMusic = c.spritemap[c.autoplay]),
				  (this.backgroundMusic.started = Date.now
						? Date.now()
						: +new Date()),
				  this.play(c.autoplay));
			1 == d.channels &&
				!0 !== c.canPlayBackground &&
				(window.addEventListener('pagehide', function () {
					null !== b.isPlaying &&
						(b.pause(), (b.__wasAutoPaused = !0));
				}),
				window.addEventListener('pageshow', function () {
					b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused);
				}));
		} else if (!0 === d.flashaudio) {
			for (f in this.FLASHAPI) this[f] = this.FLASHAPI[f];
			d = [
				'id=jukebox-flashstream-' + this.id,
				'autoplay=' + c.autoplay,
				'file=' + window.encodeURIComponent(this.resource),
			];
			this.__initFlashContext(d);
			!0 === c.autoplay
				? this.play(0)
				: c.spritemap[c.autoplay] && this.play(c.autoplay);
		} else
			throw 'Your Browser does not support Flash Audio or HTML5 Audio.';
	},
	__initFlashContext: function (b) {
		var c,
			d = this.settings.flashMediaElement,
			f,
			e = {
				flashvars: b.join('&'),
				quality: 'high',
				bgcolor: '#000000',
				wmode: 'transparent',
				allowscriptaccess: 'always',
				allowfullscreen: 'true',
			};
		if (navigator.userAgent.match(/MSIE/)) {
			c = document.createElement('div');
			document.getElementsByTagName('body')[0].appendChild(c);
			var j = document.createElement('object');
			j.id = 'jukebox-flashstream-' + this.id;
			j.setAttribute('type', 'application/x-shockwave-flash');
			j.setAttribute(
				'classid',
				'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000'
			);
			j.setAttribute('width', '0');
			j.setAttribute('height', '0');
			e.movie = d + '?x=' + (Date.now ? Date.now() : +new Date());
			e.flashvars = b.join('&amp;');
			for (f in e)
				(b = document.createElement('param')),
					b.setAttribute('name', f),
					b.setAttribute('value', e[f]),
					j.appendChild(b);
			c.outerHTML = j.outerHTML;
			this.context = document.getElementById(
				'jukebox-flashstream-' + this.id
			);
		} else {
			c = document.createElement('embed');
			c.id = 'jukebox-flashstream-' + this.id;
			c.setAttribute('type', 'application/x-shockwave-flash');
			c.setAttribute('width', '100');
			c.setAttribute('height', '100');
			e.play = !1;
			e.loop = !1;
			e.src = d + '?x=' + (Date.now ? Date.now() : +new Date());
			for (f in e) c.setAttribute(f, e[f]);
			document.getElementsByTagName('body')[0].appendChild(c);
			this.context = c;
		}
	},
	backgroundHackForiOS: function () {
		if (void 0 !== this.backgroundMusic) {
			var b = Date.now ? Date.now() : +new Date();
			void 0 === this.backgroundMusic.started
				? ((this.backgroundMusic.started = b),
				  this.setCurrentTime(this.backgroundMusic.start))
				: ((this.backgroundMusic.lastPointer =
						(((b - this.backgroundMusic.started) / 1e3) %
							(this.backgroundMusic.end -
								this.backgroundMusic.start)) +
						this.backgroundMusic.start),
				  this.play(this.backgroundMusic.lastPointer));
		}
	},
	play: function (b, c) {
		if (null !== this.isPlaying && !0 !== c)
			void 0 !== jukebox.Manager &&
				jukebox.Manager.addToQueue(b, this.id);
		else {
			var d = this.settings.spritemap,
				f;
			if (void 0 !== d[b]) f = d[b].start;
			else if ('number' === typeof b) {
				f = b;
				for (var e in d)
					if (f >= d[e].start && f <= d[e].end) {
						b = e;
						break;
					}
			}
			void 0 !== f &&
				'[object Object]' === Object.prototype.toString.call(d[b]) &&
				((this.isPlaying = this.settings.spritemap[b]),
				this.context.play && this.context.play(),
				(this.wasReady = this.setCurrentTime(f)));
		}
	},
	stop: function () {
		this.__lastPosition = 0;
		this.isPlaying = null;
		this.backgroundMusic
			? this.backgroundHackForiOS()
			: this.context.pause();
		return !0;
	},
	pause: function () {
		this.isPlaying = null;
		this.__lastPosition = this.getCurrentTime();
		this.context.pause();
		return this.__lastPosition;
	},
	resume: function (b) {
		b = 'number' === typeof b ? b : this.__lastPosition;
		if (null !== b) return this.play(b), (this.__lastPosition = null), !0;
		this.context.play();
		return !1;
	},
	HTML5API: {
		getVolume: function () {
			return this.context.volume || 1;
		},
		setVolume: function (b) {
			this.context.volume = b;
			return 1e-4 > Math.abs(this.context.volume - b) ? !0 : !1;
		},
		getCurrentTime: function () {
			return this.context.currentTime || 0;
		},
		setCurrentTime: function (b) {
			try {
				return (this.context.currentTime = b), !0;
			} catch (c) {
				return !1;
			}
		},
	},
	FLASHAPI: {
		getVolume: function () {
			return this.context && 'function' === typeof this.context.getVolume
				? this.context.getVolume()
				: 1;
		},
		setVolume: function (b) {
			return this.context && 'function' === typeof this.context.setVolume
				? (this.context.setVolume(b), !0)
				: !1;
		},
		getCurrentTime: function () {
			return this.context &&
				'function' === typeof this.context.getCurrentTime
				? this.context.getCurrentTime()
				: 0;
		},
		setCurrentTime: function (b) {
			return this.context &&
				'function' === typeof this.context.setCurrentTime
				? this.context.setCurrentTime(b)
				: !1;
		},
	},
};
if (void 0 === this.jukebox)
	throw 'jukebox.Manager requires jukebox.Player (Player.js) to run properly.';
jukebox.Manager = function (b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ('[object Object]' === Object.prototype.toString.call(b))
		for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized =
		!1 === this.settings.useGameLoop
			? window.setInterval(function () {
					jukebox.Manager.loop();
			  }, 20)
			: !0;
};
jukebox.Manager.prototype = {
	defaults: { useFlash: !1, useGameLoop: !1 },
	__detectFeatures: function () {
		var b = window.Audio && new Audio();
		if (b && b.canPlayType && !1 === this.settings.useFlash) {
			for (
				var c = [
						{ e: '3gp', m: ['audio/3gpp', 'audio/amr'] },
						{ e: 'aac', m: ['audio/aac', 'audio/aacp'] },
						{ e: 'amr', m: ['audio/amr', 'audio/3gpp'] },
						{
							e: 'caf',
							m: [
								'audio/IMA-ADPCM',
								'audio/x-adpcm',
								'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"',
							],
						},
						{
							e: 'm4a',
							m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split(
								'{'
							),
						},
						{
							e: 'mp3',
							m: [
								'audio/mp3',
								'audio/mpeg',
								'audio/mpeg; codecs="mp3"',
								'audio/MPA',
								'audio/mpa-robust',
							],
						},
						{
							e: 'mpga',
							m: [
								'audio/MPA',
								'audio/mpa-robust',
								'audio/mpeg',
								'video/mpeg',
							],
						},
						{ e: 'mp4', m: ['audio/mp4', 'video/mp4'] },
						{
							e: 'ogg',
							m: [
								'application/ogg',
								'audio/ogg',
								'audio/ogg; codecs="theora, vorbis"',
								'video/ogg',
								'video/ogg; codecs="theora, vorbis"',
							],
						},
						{
							e: 'wav',
							m: [
								'audio/wave',
								'audio/wav',
								'audio/wav; codecs="1"',
								'audio/x-wav',
								'audio/x-pn-wav',
							],
						},
						{
							e: 'webm',
							m: [
								'audio/webm',
								'audio/webm; codecs="vorbis"',
								'video/webm',
							],
						},
					],
					d,
					f,
					e = 0,
					j = c.length;
				e < j;
				e++
			)
				if (((f = c[e].e), c[e].m.length && 'object' === typeof c[e].m))
					for (var n = 0, m = c[e].m.length; n < m; n++)
						if (((d = c[e].m[n]), '' !== b.canPlayType(d))) {
							this.codecs[f] = d;
							break;
						} else this.codecs[f] || (this.codecs[f] = !1);
			this.features.html5audio = !(
				!this.codecs.mp3 &&
				!this.codecs.ogg &&
				!this.codecs.webm &&
				!this.codecs.wav
			);
			this.features.channels = 8;
			b.volume = 0.1337;
			this.features.volume = !!(1e-4 > Math.abs(b.volume - 0.1337));
			navigator.userAgent.match(/iPhone|iPod|iPad/i) &&
				(this.features.channels = 1);
		}
		this.features.flashaudio =
			!!navigator.mimeTypes['application/x-shockwave-flash'] ||
			!!navigator.plugins['Shockwave Flash'] ||
			!1;
		if (window.ActiveXObject)
			try {
				new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'),
					(this.features.flashaudio = !0);
			} catch (g) {}
		!0 === this.settings.useFlash && (this.features.flashaudio = !0);
		!0 === this.features.flashaudio &&
			!this.features.html5audio &&
			((this.codecs.mp3 = 'audio/mp3'),
			(this.codecs.mpga = 'audio/mpeg'),
			(this.codecs.mp4 = 'audio/mp4'),
			(this.codecs.m4a = 'audio/mp4'),
			(this.codecs['3gp'] = 'audio/3gpp'),
			(this.codecs.amr = 'audio/amr'),
			(this.features.volume = !0),
			(this.features.channels = 1));
	},
	__getPlayerById: function (b) {
		return this.__players && void 0 !== this.__players[b]
			? this.__players[b]
			: null;
	},
	__getClone: function (b, c) {
		for (var d in this.__clones) {
			var f = this.__clones[d];
			if (null === f.isPlaying && f.origin === b) return f;
		}
		if ('[object Object]' === Object.prototype.toString.call(c)) {
			d = {};
			for (var e in c) d[e] = c[e];
			d.autoplay = !1;
			e = new jukebox.Player(d, b);
			e.isClone = !0;
			e.wasReady = !1;
			return (this.__clones[e.id] = e);
		}
		return null;
	},
	loop: function () {
		if (0 !== this.__playersLength)
			if (
				this.__queue.length &&
				this.__playersLength < this.features.channels
			) {
				var b = this.__queue[0],
					c = this.__getPlayerById(b.origin);
				if (null !== c) {
					var d = this.__getClone(b.origin, c.settings);
					null !== d &&
						(!0 === this.features.volume &&
							(c = this.__players[b.origin]) &&
							d.setVolume(c.getVolume()),
						this.add(d),
						d.play(b.pointer, !0));
				}
				this.__queue.splice(0, 1);
			} else
				for (d in (this.__queue.length &&
					1 === this.features.channels &&
					((b = this.__queue[0]),
					(c = this.__getPlayerById(b.origin)),
					null !== c && c.play(b.pointer, !0),
					this.__queue.splice(0, 1)),
				this.__players))
					(b = this.__players[d]),
						(c = b.getCurrentTime() || 0),
						b.isPlaying && !1 === b.wasReady
							? (b.wasReady = b.setCurrentTime(b.isPlaying.start))
							: b.isPlaying && !0 === b.wasReady
							? c > b.isPlaying.end &&
							  (!0 === b.isPlaying.loop
									? b.play(b.isPlaying.start, !0)
									: b.stop())
							: b.isClone && null === b.isPlaying
							? this.remove(b)
							: void 0 !== b.backgroundMusic &&
							  null === b.isPlaying &&
							  c > b.backgroundMusic.end &&
							  b.backgroundHackForiOS();
	},
	getPlayableResource: function (b) {
		'[object Array]' !== Object.prototype.toString.call(b) && (b = [b]);
		for (var c = 0, d = b.length; c < d; c++) {
			var f = b[c],
				e = f.match(/\.([^\.]*)$/)[1];
			if (e && this.codecs[e]) return f;
		}
		return null;
	},
	add: function (b) {
		return b instanceof jukebox.Player && void 0 === this.__players[b.id]
			? (this.__playersLength++, (this.__players[b.id] = b), !0)
			: !1;
	},
	remove: function (b) {
		return b instanceof jukebox.Player && void 0 !== this.__players[b.id]
			? (this.__playersLength--, delete this.__players[b.id], !0)
			: !1;
	},
	addToQueue: function (b, c) {
		return ('string' === typeof b || 'number' === typeof b) &&
			void 0 !== this.__players[c]
			? (this.__queue.push({ pointer: b, origin: c }), !0)
			: !1;
	},
};
(function () {
	var b = function () {
		this.init();
	};
	b.prototype = {
		init: function () {
			var b = this || c;
			b._counter = 1e3;
			b._codecs = {};
			b._howls = [];
			b._muted = !1;
			b._volume = 1;
			b._canPlayEvent = 'canplaythrough';
			b._navigator =
				'undefined' !== typeof window && window.navigator
					? window.navigator
					: null;
			b.masterGain = null;
			b.noAudio = !1;
			b.usingWebAudio = !0;
			b.autoSuspend = !0;
			b.ctx = null;
			b.mobileAutoEnable = !0;
			b._setup();
			return b;
		},
		volume: function (b) {
			var d = this || c;
			b = parseFloat(b);
			d.ctx || m();
			if ('undefined' !== typeof b && 0 <= b && 1 >= b) {
				d._volume = b;
				if (d._muted) return d;
				d.usingWebAudio &&
					d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
				for (var e = 0; e < d._howls.length; e++)
					if (!d._howls[e]._webAudio)
						for (
							var f = d._howls[e]._getSoundIds(), j = 0;
							j < f.length;
							j++
						) {
							var n = d._howls[e]._soundById(f[j]);
							n && n._node && (n._node.volume = n._volume * b);
						}
				return d;
			}
			return d._volume;
		},
		mute: function (b) {
			var d = this || c;
			d.ctx || m();
			d._muted = b;
			d.usingWebAudio &&
				d.masterGain.gain.setValueAtTime(
					b ? 0 : d._volume,
					c.ctx.currentTime
				);
			for (var e = 0; e < d._howls.length; e++)
				if (!d._howls[e]._webAudio)
					for (
						var f = d._howls[e]._getSoundIds(), j = 0;
						j < f.length;
						j++
					) {
						var n = d._howls[e]._soundById(f[j]);
						n && n._node && (n._node.muted = b ? !0 : n._muted);
					}
			return d;
		},
		unload: function () {
			for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--)
				b._howls[d].unload();
			b.usingWebAudio &&
				b.ctx &&
				'undefined' !== typeof b.ctx.close &&
				(b.ctx.close(), (b.ctx = null), m());
			return b;
		},
		codecs: function (b) {
			return (this || c)._codecs[b.replace(/^x-/, '')];
		},
		_setup: function () {
			var b = this || c;
			b.state = b.ctx ? b.ctx.state || 'running' : 'running';
			b._autoSuspend();
			if (!b.usingWebAudio)
				if ('undefined' !== typeof Audio)
					try {
						var d = new Audio();
						'undefined' === typeof d.oncanplaythrough &&
							(b._canPlayEvent = 'canplay');
					} catch (e) {
						b.noAudio = !0;
					}
				else b.noAudio = !0;
			try {
				(d = new Audio()), d.muted && (b.noAudio = !0);
			} catch (f) {}
			b.noAudio || b._setupCodecs();
			return b;
		},
		_setupCodecs: function () {
			var b = this || c,
				d = null;
			try {
				d = 'undefined' !== typeof Audio ? new Audio() : null;
			} catch (e) {
				return b;
			}
			if (!d || 'function' !== typeof d.canPlayType) return b;
			var f = d.canPlayType('audio/mpeg;').replace(/^no$/, ''),
				j =
					b._navigator &&
					b._navigator.userAgent.match(/OPR\/([0-6].)/g),
				j = j && 33 > parseInt(j[0].split('/')[1], 10);
			b._codecs = {
				mp3: !(
					j ||
					(!f && !d.canPlayType('audio/mp3;').replace(/^no$/, ''))
				),
				mpeg: !!f,
				opus: !!d
					.canPlayType('audio/ogg; codecs="opus"')
					.replace(/^no$/, ''),
				ogg: !!d
					.canPlayType('audio/ogg; codecs="vorbis"')
					.replace(/^no$/, ''),
				oga: !!d
					.canPlayType('audio/ogg; codecs="vorbis"')
					.replace(/^no$/, ''),
				wav: !!d
					.canPlayType('audio/wav; codecs="1"')
					.replace(/^no$/, ''),
				aac: !!d.canPlayType('audio/aac;').replace(/^no$/, ''),
				caf: !!d.canPlayType('audio/x-caf;').replace(/^no$/, ''),
				m4a: !!(
					d.canPlayType('audio/x-m4a;') ||
					d.canPlayType('audio/m4a;') ||
					d.canPlayType('audio/aac;')
				).replace(/^no$/, ''),
				mp4: !!(
					d.canPlayType('audio/x-mp4;') ||
					d.canPlayType('audio/mp4;') ||
					d.canPlayType('audio/aac;')
				).replace(/^no$/, ''),
				weba: !!d
					.canPlayType('audio/webm; codecs="vorbis"')
					.replace(/^no$/, ''),
				webm: !!d
					.canPlayType('audio/webm; codecs="vorbis"')
					.replace(/^no$/, ''),
				dolby: !!d
					.canPlayType('audio/mp4; codecs="ec-3"')
					.replace(/^no$/, ''),
				flac: !!(
					d.canPlayType('audio/x-flac;') ||
					d.canPlayType('audio/flac;')
				).replace(/^no$/, ''),
			};
			return b;
		},
		_enableMobileAudio: function () {
			var b = this || c,
				d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(
					b._navigator && b._navigator.userAgent
				),
				e = !!(
					'ontouchend' in window ||
					(b._navigator && 0 < b._navigator.maxTouchPoints) ||
					(b._navigator && 0 < b._navigator.msMaxTouchPoints)
				);
			if (!b._mobileEnabled && b.ctx && (d || e)) {
				b._mobileEnabled = !1;
				!b._mobileUnloaded &&
					44100 !== b.ctx.sampleRate &&
					((b._mobileUnloaded = !0), b.unload());
				b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
				var f = function () {
					c._autoResume();
					var d = b.ctx.createBufferSource();
					d.buffer = b._scratchBuffer;
					d.connect(b.ctx.destination);
					'undefined' === typeof d.start ? d.noteOn(0) : d.start(0);
					'function' === typeof b.ctx.resume && b.ctx.resume();
					d.onended = function () {
						d.disconnect(0);
						b._mobileEnabled = !0;
						b.mobileAutoEnable = !1;
						document.removeEventListener('touchstart', f, !0);
						document.removeEventListener('touchend', f, !0);
					};
				};
				document.addEventListener('touchstart', f, !0);
				document.addEventListener('touchend', f, !0);
				return b;
			}
		},
		_autoSuspend: function () {
			var b = this;
			if (
				b.autoSuspend &&
				b.ctx &&
				'undefined' !== typeof b.ctx.suspend &&
				c.usingWebAudio
			) {
				for (var d = 0; d < b._howls.length; d++)
					if (b._howls[d]._webAudio)
						for (var e = 0; e < b._howls[d]._sounds.length; e++)
							if (!b._howls[d]._sounds[e]._paused) return b;
				b._suspendTimer && clearTimeout(b._suspendTimer);
				b._suspendTimer = setTimeout(function () {
					b.autoSuspend &&
						((b._suspendTimer = null),
						(b.state = 'suspending'),
						b.ctx.suspend().then(function () {
							b.state = 'suspended';
							b._resumeAfterSuspend &&
								(delete b._resumeAfterSuspend, b._autoResume());
						}));
				}, 3e4);
				return b;
			}
		},
		_autoResume: function () {
			var b = this;
			if (b.ctx && 'undefined' !== typeof b.ctx.resume && c.usingWebAudio)
				return (
					'running' === b.state && b._suspendTimer
						? (clearTimeout(b._suspendTimer),
						  (b._suspendTimer = null))
						: 'suspended' === b.state
						? (b.ctx.resume().then(function () {
								b.state = 'running';
								for (var c = 0; c < b._howls.length; c++)
									b._howls[c]._emit('resume');
						  }),
						  b._suspendTimer &&
								(clearTimeout(b._suspendTimer),
								(b._suspendTimer = null)))
						: 'suspending' === b.state &&
						  (b._resumeAfterSuspend = !0),
					b
				);
		},
	};
	var c = new b(),
		d = function (b) {
			!b.src || 0 === b.src.length
				? console.error(
						'An array of source files must be passed with any new Howl.'
				  )
				: this.init(b);
		};
	d.prototype = {
		init: function (b) {
			var d = this;
			c.ctx || m();
			d._autoplay = b.autoplay || !1;
			d._format = 'string' !== typeof b.format ? b.format : [b.format];
			d._html5 = b.html5 || !1;
			d._muted = b.mute || !1;
			d._loop = b.loop || !1;
			d._pool = b.pool || 5;
			d._preload = 'boolean' === typeof b.preload ? b.preload : !0;
			d._rate = b.rate || 1;
			d._sprite = b.sprite || {};
			d._src = 'string' !== typeof b.src ? b.src : [b.src];
			d._volume = void 0 !== b.volume ? b.volume : 1;
			d._xhrWithCredentials = b.xhrWithCredentials || !1;
			d._duration = 0;
			d._state = 'unloaded';
			d._sounds = [];
			d._endTimers = {};
			d._queue = [];
			d._playLock = !1;
			d._onend = b.onend ? [{ fn: b.onend }] : [];
			d._onfade = b.onfade ? [{ fn: b.onfade }] : [];
			d._onload = b.onload ? [{ fn: b.onload }] : [];
			d._onloaderror = b.onloaderror ? [{ fn: b.onloaderror }] : [];
			d._onplayerror = b.onplayerror ? [{ fn: b.onplayerror }] : [];
			d._onpause = b.onpause ? [{ fn: b.onpause }] : [];
			d._onplay = b.onplay ? [{ fn: b.onplay }] : [];
			d._onstop = b.onstop ? [{ fn: b.onstop }] : [];
			d._onmute = b.onmute ? [{ fn: b.onmute }] : [];
			d._onvolume = b.onvolume ? [{ fn: b.onvolume }] : [];
			d._onrate = b.onrate ? [{ fn: b.onrate }] : [];
			d._onseek = b.onseek ? [{ fn: b.onseek }] : [];
			d._onresume = [];
			d._webAudio = c.usingWebAudio && !d._html5;
			'undefined' !== typeof c.ctx &&
				c.ctx &&
				c.mobileAutoEnable &&
				c._enableMobileAudio();
			c._howls.push(d);
			d._autoplay &&
				d._queue.push({
					event: 'play',
					action: function () {
						d.play();
					},
				});
			d._preload && d.load();
			return d;
		},
		load: function () {
			var b = null;
			if (c.noAudio) this._emit('loaderror', null, 'No audio support.');
			else {
				'string' === typeof this._src && (this._src = [this._src]);
				for (var d = 0; d < this._src.length; d++) {
					var m, y;
					if (this._format && this._format[d]) m = this._format[d];
					else {
						y = this._src[d];
						if ('string' !== typeof y) {
							this._emit(
								'loaderror',
								null,
								'Non-string found in selected audio sources - ignoring.'
							);
							continue;
						}
						(m = /^data:audio\/([^;,]+);/i.exec(y)) ||
							(m = /\.([^.]+)$/.exec(y.split('?', 1)[0]));
						m && (m = m[1].toLowerCase());
					}
					m ||
						console.warn(
							'No file extension was found. Consider using the "format" property or specify an extension.'
						);
					if (m && c.codecs(m)) {
						b = this._src[d];
						break;
					}
				}
				if (b) {
					this._src = b;
					this._state = 'loading';
					'https:' === window.location.protocol &&
						'http:' === b.slice(0, 5) &&
						((this._html5 = !0), (this._webAudio = !1));
					new f(this);
					if (this._webAudio) {
						var A = this,
							B = A._src;
						if (e[B]) (A._duration = e[B].duration), n(A);
						else if (/^data:[^;]+;base64,/.test(B)) {
							b = atob(B.split(',')[1]);
							d = new Uint8Array(b.length);
							for (m = 0; m < b.length; ++m)
								d[m] = b.charCodeAt(m);
							j(d.buffer, A);
						} else {
							var I = new XMLHttpRequest();
							I.open('GET', B, !0);
							I.withCredentials = A._xhrWithCredentials;
							I.responseType = 'arraybuffer';
							I.onload = function () {
								var b = (I.status + '')[0];
								'0' !== b && '2' !== b && '3' !== b
									? A._emit(
											'loaderror',
											null,
											'Failed loading audio file with status: ' +
												I.status +
												'.'
									  )
									: j(I.response, A);
							};
							I.onerror = function () {
								A._webAudio &&
									((A._html5 = !0),
									(A._webAudio = !1),
									(A._sounds = []),
									delete e[B],
									A.load());
							};
							try {
								I.send();
							} catch (D) {
								I.onerror();
							}
						}
					}
					return this;
				}
				this._emit(
					'loaderror',
					null,
					'No codec support for selected audio sources.'
				);
			}
		},
		play: function (b, d) {
			var e = this,
				f = null;
			if ('number' === typeof b) (f = b), (b = null);
			else {
				if (
					'string' === typeof b &&
					'loaded' === e._state &&
					!e._sprite[b]
				)
					return null;
				if ('undefined' === typeof b) {
					b = '__default';
					for (var j = 0, m = 0; m < e._sounds.length; m++)
						e._sounds[m]._paused &&
							!e._sounds[m]._ended &&
							(j++, (f = e._sounds[m]._id));
					1 === j ? (b = null) : (f = null);
				}
			}
			var n = f ? e._soundById(f) : e._inactiveSound();
			if (!n) return null;
			f && !b && (b = n._sprite || '__default');
			if ('loaded' !== e._state) {
				n._sprite = b;
				n._ended = !1;
				var D = n._id;
				e._queue.push({
					event: 'play',
					action: function () {
						e.play(D);
					},
				});
				return D;
			}
			if (f && !n._paused) return d || e._loadQueue('play'), n._id;
			e._webAudio && c._autoResume();
			var t = Math.max(0, 0 < n._seek ? n._seek : e._sprite[b][0] / 1e3),
				G = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1e3 - t),
				E = (1e3 * G) / Math.abs(n._rate);
			n._paused = !1;
			n._ended = !1;
			n._sprite = b;
			n._seek = t;
			n._start = e._sprite[b][0] / 1e3;
			n._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1e3;
			n._loop = !(!n._loop && !e._sprite[b][2]);
			var L = n._node;
			if (e._webAudio)
				(f = function () {
					e._refreshBuffer(n);
					L.gain.setValueAtTime(
						n._muted || e._muted ? 0 : n._volume,
						c.ctx.currentTime
					);
					n._playStart = c.ctx.currentTime;
					'undefined' === typeof L.bufferSource.start
						? n._loop
							? L.bufferSource.noteGrainOn(0, t, 86400)
							: L.bufferSource.noteGrainOn(0, t, G)
						: n._loop
						? L.bufferSource.start(0, t, 86400)
						: L.bufferSource.start(0, t, G);
					Infinity !== E &&
						(e._endTimers[n._id] = setTimeout(
							e._ended.bind(e, n),
							E
						));
					d ||
						setTimeout(function () {
							e._emit('play', n._id);
						}, 0);
				}),
					'running' === c.state
						? f()
						: (e.once('resume', f), e._clearTimer(n._id));
			else {
				var M = function () {
						L.currentTime = t;
						L.muted = n._muted || e._muted || c._muted || L.muted;
						L.volume = n._volume * c.volume();
						L.playbackRate = n._rate;
						try {
							var f = L.play();
							if (
								'undefined' !== typeof Promise &&
								f instanceof Promise
							) {
								e._playLock = !0;
								var j = function () {
									e._playLock = !1;
									d || e._emit('play', n._id);
								};
								f.then(j, j);
							} else d || e._emit('play', n._id);
							L.playbackRate = n._rate;
							L.paused
								? e._emit(
										'playerror',
										n._id,
										'Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.'
								  )
								: '__default' !== b || n._loop
								? (e._endTimers[n._id] = setTimeout(
										e._ended.bind(e, n),
										E
								  ))
								: ((e._endTimers[n._id] = function () {
										e._ended(n);
										L.removeEventListener(
											'ended',
											e._endTimers[n._id],
											!1
										);
								  }),
								  L.addEventListener(
										'ended',
										e._endTimers[n._id],
										!1
								  ));
						} catch (m) {
							e._emit('playerror', n._id, m);
						}
					},
					f =
						(window && window.ejecta) ||
						(!L.readyState && c._navigator.isCocoonJS);
				if (3 <= L.readyState || f) M();
				else {
					var Q = function () {
						M();
						L.removeEventListener(c._canPlayEvent, Q, !1);
					};
					L.addEventListener(c._canPlayEvent, Q, !1);
					e._clearTimer(n._id);
				}
			}
			return n._id;
		},
		pause: function (b, c) {
			var d = this;
			if ('loaded' !== d._state || d._playLock)
				return (
					d._queue.push({
						event: 'pause',
						action: function () {
							d.pause(b);
						},
					}),
					d
				);
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var j = d._soundById(e[f]);
				if (
					j &&
					!j._paused &&
					((j._seek = d.seek(e[f])),
					(j._rateSeek = 0),
					(j._paused = !0),
					d._stopFade(e[f]),
					j._node)
				)
					if (d._webAudio) {
						if (!j._node.bufferSource) continue;
						'undefined' === typeof j._node.bufferSource.stop
							? j._node.bufferSource.noteOff(0)
							: j._node.bufferSource.stop(0);
						d._cleanBuffer(j._node);
					} else
						(!isNaN(j._node.duration) ||
							Infinity === j._node.duration) &&
							j._node.pause();
				c || d._emit('pause', j ? j._id : null);
			}
			return d;
		},
		stop: function (b, c) {
			var d = this;
			if ('loaded' !== d._state)
				return (
					d._queue.push({
						event: 'stop',
						action: function () {
							d.stop(b);
						},
					}),
					d
				);
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var j = d._soundById(e[f]);
				if (j) {
					j._seek = j._start || 0;
					j._rateSeek = 0;
					j._paused = !0;
					j._ended = !0;
					d._stopFade(e[f]);
					if (j._node)
						if (d._webAudio)
							j._node.bufferSource &&
								('undefined' ===
								typeof j._node.bufferSource.stop
									? j._node.bufferSource.noteOff(0)
									: j._node.bufferSource.stop(0),
								d._cleanBuffer(j._node));
						else if (
							!isNaN(j._node.duration) ||
							Infinity === j._node.duration
						)
							(j._node.currentTime = j._start || 0),
								j._node.pause();
					c || d._emit('stop', j._id);
				}
			}
			return d;
		},
		mute: function (b, d) {
			var e = this;
			if ('loaded' !== e._state)
				return (
					e._queue.push({
						event: 'mute',
						action: function () {
							e.mute(b, d);
						},
					}),
					e
				);
			if ('undefined' === typeof d)
				if ('boolean' === typeof b) e._muted = b;
				else return e._muted;
			for (var f = e._getSoundIds(d), j = 0; j < f.length; j++) {
				var m = e._soundById(f[j]);
				m &&
					((m._muted = b),
					m._interval && e._stopFade(m._id),
					e._webAudio && m._node
						? m._node.gain.setValueAtTime(
								b ? 0 : m._volume,
								c.ctx.currentTime
						  )
						: m._node && (m._node.muted = c._muted ? !0 : b),
					e._emit('mute', m._id));
			}
			return e;
		},
		volume: function () {
			var b = this,
				d = arguments,
				e,
				f;
			if (0 === d.length) return b._volume;
			1 === d.length || (2 === d.length && 'undefined' === typeof d[1])
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: (e = parseFloat(d[0]))
				: 2 <= d.length &&
				  ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			var j;
			if ('undefined' !== typeof e && 0 <= e && 1 >= e) {
				if ('loaded' !== b._state)
					return (
						b._queue.push({
							event: 'volume',
							action: function () {
								b.volume.apply(b, d);
							},
						}),
						b
					);
				'undefined' === typeof f && (b._volume = e);
				f = b._getSoundIds(f);
				for (var m = 0; m < f.length; m++)
					if ((j = b._soundById(f[m])))
						(j._volume = e),
							d[2] || b._stopFade(f[m]),
							b._webAudio && j._node && !j._muted
								? j._node.gain.setValueAtTime(
										e,
										c.ctx.currentTime
								  )
								: j._node &&
								  !j._muted &&
								  (j._node.volume = e * c.volume()),
							b._emit('volume', j._id);
			} else
				return (j = f ? b._soundById(f) : b._sounds[0]) ? j._volume : 0;
			return b;
		},
		fade: function (b, d, e, f) {
			var j = this;
			if ('loaded' !== j._state)
				return (
					j._queue.push({
						event: 'fade',
						action: function () {
							j.fade(b, d, e, f);
						},
					}),
					j
				);
			j.volume(b, f);
			for (var m = j._getSoundIds(f), n = 0; n < m.length; n++) {
				var D = j._soundById(m[n]);
				if (D) {
					f || j._stopFade(m[n]);
					if (j._webAudio && !D._muted) {
						var t = c.ctx.currentTime,
							G = t + e / 1e3;
						D._volume = b;
						D._node.gain.setValueAtTime(b, t);
						D._node.gain.linearRampToValueAtTime(d, G);
					}
					j._startFadeInterval(
						D,
						b,
						d,
						e,
						m[n],
						'undefined' === typeof f
					);
				}
			}
			return j;
		},
		_startFadeInterval: function (b, c, d, e, f, j) {
			var m = this,
				n = c,
				t = d - c;
			f = Math.abs(t / 0.01);
			f = Math.max(4, 0 < f ? e / f : e);
			var G = Date.now();
			b._fadeTo = d;
			b._interval = setInterval(function () {
				var f = (Date.now() - G) / e;
				G = Date.now();
				n += t * f;
				n = Math.max(0, n);
				n = Math.min(1, n);
				n = Math.round(100 * n) / 100;
				m._webAudio ? (b._volume = n) : m.volume(n, b._id, !0);
				j && (m._volume = n);
				if ((d < c && n <= d) || (d > c && n >= d))
					clearInterval(b._interval),
						(b._interval = null),
						(b._fadeTo = null),
						m.volume(d, b._id),
						m._emit('fade', b._id);
			}, f);
		},
		_stopFade: function (b) {
			var d = this._soundById(b);
			d &&
				d._interval &&
				(this._webAudio &&
					d._node.gain.cancelScheduledValues(c.ctx.currentTime),
				clearInterval(d._interval),
				(d._interval = null),
				this.volume(d._fadeTo, b),
				(d._fadeTo = null),
				this._emit('fade', b));
			return this;
		},
		loop: function () {
			var b = arguments,
				c,
				d;
			if (0 === b.length) return this._loop;
			if (1 === b.length)
				if ('boolean' === typeof b[0]) this._loop = c = b[0];
				else
					return (b = this._soundById(parseInt(b[0], 10)))
						? b._loop
						: !1;
			else 2 === b.length && ((c = b[0]), (d = parseInt(b[1], 10)));
			d = this._getSoundIds(d);
			for (var e = 0; e < d.length; e++)
				if ((b = this._soundById(d[e])))
					if (
						((b._loop = c),
						this._webAudio &&
							b._node &&
							b._node.bufferSource &&
							(b._node.bufferSource.loop = c))
					)
						(b._node.bufferSource.loopStart = b._start || 0),
							(b._node.bufferSource.loopEnd = b._stop);
			return this;
		},
		rate: function () {
			var b = this,
				d = arguments,
				e,
				f;
			0 === d.length
				? (f = b._sounds[0]._id)
				: 1 === d.length
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: (e = parseFloat(d[0]))
				: 2 === d.length &&
				  ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			var j;
			if ('number' === typeof e) {
				if ('loaded' !== b._state)
					return (
						b._queue.push({
							event: 'rate',
							action: function () {
								b.rate.apply(b, d);
							},
						}),
						b
					);
				'undefined' === typeof f && (b._rate = e);
				f = b._getSoundIds(f);
				for (var m = 0; m < f.length; m++)
					if ((j = b._soundById(f[m]))) {
						j._rateSeek = b.seek(f[m]);
						j._playStart = b._webAudio
							? c.ctx.currentTime
							: j._playStart;
						j._rate = e;
						b._webAudio && j._node && j._node.bufferSource
							? j._node.bufferSource.playbackRate.setValueAtTime(
									e,
									c.ctx.currentTime
							  )
							: j._node && (j._node.playbackRate = e);
						var n = b.seek(f[m]),
							n =
								(1e3 *
									((b._sprite[j._sprite][0] +
										b._sprite[j._sprite][1]) /
										1e3 -
										n)) /
								Math.abs(j._rate);
						if (b._endTimers[f[m]] || !j._paused)
							b._clearTimer(f[m]),
								(b._endTimers[f[m]] = setTimeout(
									b._ended.bind(b, j),
									n
								));
						b._emit('rate', j._id);
					}
			} else return (j = b._soundById(f)) ? j._rate : b._rate;
			return b;
		},
		seek: function () {
			var b = this,
				d = arguments,
				e,
				f;
			0 === d.length
				? (f = b._sounds[0]._id)
				: 1 === d.length
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: b._sounds.length &&
					  ((f = b._sounds[0]._id), (e = parseFloat(d[0])))
				: 2 === d.length &&
				  ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			if ('undefined' === typeof f) return b;
			if ('loaded' !== b._state)
				return (
					b._queue.push({
						event: 'seek',
						action: function () {
							b.seek.apply(b, d);
						},
					}),
					b
				);
			var j = b._soundById(f);
			if (j)
				if ('number' === typeof e && 0 <= e) {
					var m = b.playing(f);
					m && b.pause(f, !0);
					j._seek = e;
					j._ended = !1;
					b._clearTimer(f);
					m && b.play(f, !0);
					!b._webAudio && j._node && (j._node.currentTime = e);
					if (m && !b._webAudio) {
						var n = function () {
							b._playLock ? setTimeout(n, 0) : b._emit('seek', f);
						};
						setTimeout(n, 0);
					} else b._emit('seek', f);
				} else
					return b._webAudio
						? ((e = b.playing(f)
								? c.ctx.currentTime - j._playStart
								: 0),
						  j._seek +
								((j._rateSeek ? j._rateSeek - j._seek : 0) +
									e * Math.abs(j._rate)))
						: j._node.currentTime;
			return b;
		},
		playing: function (b) {
			if ('number' === typeof b)
				return (b = this._soundById(b)) ? !b._paused : !1;
			for (b = 0; b < this._sounds.length; b++)
				if (!this._sounds[b]._paused) return !0;
			return !1;
		},
		duration: function (b) {
			var c = this._duration;
			(b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1e3);
			return c;
		},
		state: function () {
			return this._state;
		},
		unload: function () {
			for (var b = this._sounds, d = 0; d < b.length; d++) {
				b[d]._paused || this.stop(b[d]._id);
				this._webAudio ||
					(/MSIE |Trident\//.test(
						c._navigator && c._navigator.userAgent
					) ||
						(b[d]._node.src =
							'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'),
					b[d]._node.removeEventListener('error', b[d]._errorFn, !1),
					b[d]._node.removeEventListener(
						c._canPlayEvent,
						b[d]._loadFn,
						!1
					));
				delete b[d]._node;
				this._clearTimer(b[d]._id);
				var f = c._howls.indexOf(this);
				0 <= f && c._howls.splice(f, 1);
			}
			b = !0;
			for (d = 0; d < c._howls.length; d++)
				if (c._howls[d]._src === this._src) {
					b = !1;
					break;
				}
			e && b && delete e[this._src];
			c.noAudio = !1;
			this._state = 'unloaded';
			this._sounds = [];
			return null;
		},
		on: function (b, c, d, e) {
			b = this['_on' + b];
			'function' === typeof c &&
				b.push(e ? { id: d, fn: c, once: e } : { id: d, fn: c });
			return this;
		},
		off: function (b, c, d) {
			var e = this['_on' + b],
				f = 0;
			'number' === typeof c && ((d = c), (c = null));
			if (c || d)
				for (f = 0; f < e.length; f++) {
					if (
						((b = d === e[f].id), (c === e[f].fn && b) || (!c && b))
					) {
						e.splice(f, 1);
						break;
					}
				}
			else if (b) this['_on' + b] = [];
			else {
				c = Object.keys(this);
				for (f = 0; f < c.length; f++)
					0 === c[f].indexOf('_on') &&
						Array.isArray(this[c[f]]) &&
						(this[c[f]] = []);
			}
			return this;
		},
		once: function (b, c, d) {
			this.on(b, c, d, 1);
			return this;
		},
		_emit: function (b, c, d) {
			for (var e = this['_on' + b], f = e.length - 1; 0 <= f; f--)
				if (!e[f].id || e[f].id === c || 'load' === b)
					setTimeout(
						function (b) {
							b.call(this, c, d);
						}.bind(this, e[f].fn),
						0
					),
						e[f].once && this.off(b, e[f].fn, e[f].id);
			this._loadQueue(b);
			return this;
		},
		_loadQueue: function (b) {
			if (0 < this._queue.length) {
				var c = this._queue[0];
				c.event === b && (this._queue.shift(), this._loadQueue());
				b || c.action();
			}
			return this;
		},
		_ended: function (b) {
			var d = b._sprite;
			if (
				!this._webAudio &&
				b._node &&
				!b._node.paused &&
				!b._node.ended &&
				b._node.currentTime < b._stop
			)
				return setTimeout(this._ended.bind(this, b), 100), this;
			d = !(!b._loop && !this._sprite[d][2]);
			this._emit('end', b._id);
			!this._webAudio && d && this.stop(b._id, !0).play(b._id);
			if (this._webAudio && d) {
				this._emit('play', b._id);
				b._seek = b._start || 0;
				b._rateSeek = 0;
				b._playStart = c.ctx.currentTime;
				var e = (1e3 * (b._stop - b._start)) / Math.abs(b._rate);
				this._endTimers[b._id] = setTimeout(
					this._ended.bind(this, b),
					e
				);
			}
			this._webAudio &&
				!d &&
				((b._paused = !0),
				(b._ended = !0),
				(b._seek = b._start || 0),
				(b._rateSeek = 0),
				this._clearTimer(b._id),
				this._cleanBuffer(b._node),
				c._autoSuspend());
			!this._webAudio && !d && this.stop(b._id);
			return this;
		},
		_clearTimer: function (b) {
			if (this._endTimers[b]) {
				if ('function' !== typeof this._endTimers[b])
					clearTimeout(this._endTimers[b]);
				else {
					var c = this._soundById(b);
					c &&
						c._node &&
						c._node.removeEventListener(
							'ended',
							this._endTimers[b],
							!1
						);
				}
				delete this._endTimers[b];
			}
			return this;
		},
		_soundById: function (b) {
			for (var c = 0; c < this._sounds.length; c++)
				if (b === this._sounds[c]._id) return this._sounds[c];
			return null;
		},
		_inactiveSound: function () {
			this._drain();
			for (var b = 0; b < this._sounds.length; b++)
				if (this._sounds[b]._ended) return this._sounds[b].reset();
			return new f(this);
		},
		_drain: function () {
			var b = this._pool,
				c = 0,
				d = 0;
			if (!(this._sounds.length < b)) {
				for (d = 0; d < this._sounds.length; d++)
					this._sounds[d]._ended && c++;
				for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--)
					this._sounds[d]._ended &&
						(this._webAudio &&
							this._sounds[d]._node &&
							this._sounds[d]._node.disconnect(0),
						this._sounds.splice(d, 1),
						c--);
			}
		},
		_getSoundIds: function (b) {
			if ('undefined' === typeof b) {
				b = [];
				for (var c = 0; c < this._sounds.length; c++)
					b.push(this._sounds[c]._id);
				return b;
			}
			return [b];
		},
		_refreshBuffer: function (b) {
			b._node.bufferSource = c.ctx.createBufferSource();
			b._node.bufferSource.buffer = e[this._src];
			b._panner
				? b._node.bufferSource.connect(b._panner)
				: b._node.bufferSource.connect(b._node);
			if ((b._node.bufferSource.loop = b._loop))
				(b._node.bufferSource.loopStart = b._start || 0),
					(b._node.bufferSource.loopEnd = b._stop);
			b._node.bufferSource.playbackRate.setValueAtTime(
				b._rate,
				c.ctx.currentTime
			);
			return this;
		},
		_cleanBuffer: function (b) {
			if (c._scratchBuffer) {
				b.bufferSource.onended = null;
				b.bufferSource.disconnect(0);
				try {
					b.bufferSource.buffer = c._scratchBuffer;
				} catch (d) {}
			}
			b.bufferSource = null;
			return this;
		},
	};
	var f = function (b) {
		this._parent = b;
		this.init();
	};
	f.prototype = {
		init: function () {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = '__default';
			this._id = ++c._counter;
			b._sounds.push(this);
			this.create();
			return this;
		},
		create: function () {
			var b = this._parent,
				d =
					c._muted || this._muted || this._parent._muted
						? 0
						: this._volume;
			b._webAudio
				? ((this._node =
						'undefined' === typeof c.ctx.createGain
							? c.ctx.createGainNode()
							: c.ctx.createGain()),
				  this._node.gain.setValueAtTime(d, c.ctx.currentTime),
				  (this._node.paused = !0),
				  this._node.connect(c.masterGain))
				: ((this._node = new Audio()),
				  (this._errorFn = this._errorListener.bind(this)),
				  this._node.addEventListener('error', this._errorFn, !1),
				  (this._loadFn = this._loadListener.bind(this)),
				  this._node.addEventListener(
						c._canPlayEvent,
						this._loadFn,
						!1
				  ),
				  (this._node.src = b._src),
				  (this._node.preload = 'auto'),
				  (this._node.volume = d * c.volume()),
				  this._node.load());
			return this;
		},
		reset: function () {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._rateSeek = this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = '__default';
			this._id = ++c._counter;
			return this;
		},
		_errorListener: function () {
			this._parent._emit(
				'loaderror',
				this._id,
				this._node.error ? this._node.error.code : 0
			);
			this._node.removeEventListener('error', this._errorFn, !1);
		},
		_loadListener: function () {
			var b = this._parent;
			b._duration = Math.ceil(10 * this._node.duration) / 10;
			0 === Object.keys(b._sprite).length &&
				(b._sprite = { __default: [0, 1e3 * b._duration] });
			'loaded' !== b._state &&
				((b._state = 'loaded'), b._emit('load'), b._loadQueue());
			this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1);
		},
	};
	var e = {},
		j = function (b, d) {
			c.ctx.decodeAudioData(
				b,
				function (b) {
					b && 0 < d._sounds.length && ((e[d._src] = b), n(d, b));
				},
				function () {
					d._emit('loaderror', null, 'Decoding audio data failed.');
				}
			);
		},
		n = function (b, c) {
			c && !b._duration && (b._duration = c.duration);
			0 === Object.keys(b._sprite).length &&
				(b._sprite = { __default: [0, 1e3 * b._duration] });
			'loaded' !== b._state &&
				((b._state = 'loaded'), b._emit('load'), b._loadQueue());
		},
		m = function () {
			try {
				'undefined' !== typeof AudioContext
					? (c.ctx = new AudioContext())
					: 'undefined' !== typeof webkitAudioContext
					? (c.ctx = new webkitAudioContext())
					: (c.usingWebAudio = !1);
			} catch (b) {
				c.usingWebAudio = !1;
			}
			var d = /iP(hone|od|ad)/.test(
					c._navigator && c._navigator.platform
				),
				e =
					c._navigator &&
					c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
				e = e ? parseInt(e[1], 10) : null;
			if (
				d &&
				e &&
				9 > e &&
				((d = /safari/.test(
					c._navigator && c._navigator.userAgent.toLowerCase()
				)),
				(c._navigator && c._navigator.standalone && !d) ||
					(c._navigator && !c._navigator.standalone && !d))
			)
				c.usingWebAudio = !1;
			c.usingWebAudio &&
				((c.masterGain =
					'undefined' === typeof c.ctx.createGain
						? c.ctx.createGainNode()
						: c.ctx.createGain()),
				c.masterGain.gain.setValueAtTime(
					c._muted ? 0 : 1,
					c.ctx.currentTime
				),
				c.masterGain.connect(c.ctx.destination));
			c._setup();
		};
	'function' === typeof define &&
		define.amd &&
		define([], function () {
			return { Howler: c, Howl: d };
		});
	'undefined' !== typeof exports &&
		((exports.Howler = c), (exports.Howl = d));
	'undefined' !== typeof window
		? ((window.HowlerGlobal = b),
		  (window.Howler = c),
		  (window.Howl = d),
		  (window.Sound = f))
		: 'undefined' !== typeof global &&
		  ((global.HowlerGlobal = b),
		  (global.Howler = c),
		  (global.Howl = d),
		  (global.Sound = f));
})();
(function () {
	HowlerGlobal.prototype._pos = [0, 0, 0];
	HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	HowlerGlobal.prototype.stereo = function (b) {
		if (!this.ctx || !this.ctx.listener) return this;
		for (var c = this._howls.length - 1; 0 <= c; c--)
			this._howls[c].stereo(b);
		return this;
	};
	HowlerGlobal.prototype.pos = function (b, c, d) {
		if (!this.ctx || !this.ctx.listener) return this;
		c = 'number' !== typeof c ? this._pos[1] : c;
		d = 'number' !== typeof d ? this._pos[2] : d;
		if ('number' === typeof b)
			(this._pos = [b, c, d]),
				'undefined' !== typeof this.ctx.listener.positionX
					? (this.ctx.listener.positionX.setTargetAtTime(
							this._pos[0],
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.positionY.setTargetAtTime(
							this._pos[1],
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.positionZ.setTargetAtTime(
							this._pos[2],
							Howler.ctx.currentTime,
							0.1
					  ))
					: this.ctx.listener.setPosition(
							this._pos[0],
							this._pos[1],
							this._pos[2]
					  );
		else return this._pos;
		return this;
	};
	HowlerGlobal.prototype.orientation = function (b, c, d, f, g, r) {
		if (!this.ctx || !this.ctx.listener) return this;
		var z = this._orientation;
		c = 'number' !== typeof c ? z[1] : c;
		d = 'number' !== typeof d ? z[2] : d;
		f = 'number' !== typeof f ? z[3] : f;
		g = 'number' !== typeof g ? z[4] : g;
		r = 'number' !== typeof r ? z[5] : r;
		if ('number' === typeof b)
			(this._orientation = [b, c, d, f, g, r]),
				'undefined' !== typeof this.ctx.listener.forwardX
					? (this.ctx.listener.forwardX.setTargetAtTime(
							b,
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.forwardY.setTargetAtTime(
							c,
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.forwardZ.setTargetAtTime(
							d,
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.upX.setTargetAtTime(
							b,
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.upY.setTargetAtTime(
							c,
							Howler.ctx.currentTime,
							0.1
					  ),
					  this.ctx.listener.upZ.setTargetAtTime(
							d,
							Howler.ctx.currentTime,
							0.1
					  ))
					: this.ctx.listener.setOrientation(b, c, d, f, g, r);
		else return z;
		return this;
	};
	var b = Howl.prototype.init;
	Howl.prototype.init = function (c) {
		this._orientation = c.orientation || [1, 0, 0];
		this._stereo = c.stereo || null;
		this._pos = c.pos || null;
		this._pannerAttr = {
			coneInnerAngle:
				'undefined' !== typeof c.coneInnerAngle
					? c.coneInnerAngle
					: 360,
			coneOuterAngle:
				'undefined' !== typeof c.coneOuterAngle
					? c.coneOuterAngle
					: 360,
			coneOuterGain:
				'undefined' !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
			distanceModel:
				'undefined' !== typeof c.distanceModel
					? c.distanceModel
					: 'inverse',
			maxDistance:
				'undefined' !== typeof c.maxDistance ? c.maxDistance : 1e4,
			panningModel:
				'undefined' !== typeof c.panningModel ? c.panningModel : 'HRTF',
			refDistance:
				'undefined' !== typeof c.refDistance ? c.refDistance : 1,
			rolloffFactor:
				'undefined' !== typeof c.rolloffFactor ? c.rolloffFactor : 1,
		};
		this._onstereo = c.onstereo ? [{ fn: c.onstereo }] : [];
		this._onpos = c.onpos ? [{ fn: c.onpos }] : [];
		this._onorientation = c.onorientation ? [{ fn: c.onorientation }] : [];
		return b.call(this, c);
	};
	Howl.prototype.stereo = function (b, c) {
		var d = this;
		if (!d._webAudio) return d;
		if ('loaded' !== d._state)
			return (
				d._queue.push({
					event: 'stereo',
					action: function () {
						d.stereo(b, c);
					},
				}),
				d
			);
		var m =
			'undefined' === typeof Howler.ctx.createStereoPanner
				? 'spatial'
				: 'stereo';
		if ('undefined' === typeof c)
			if ('number' === typeof b) (d._stereo = b), (d._pos = [b, 0, 0]);
			else return d._stereo;
		for (var g = d._getSoundIds(c), r = 0; r < g.length; r++) {
			var z = d._soundById(g[r]);
			if (z)
				if ('number' === typeof b)
					(z._stereo = b),
						(z._pos = [b, 0, 0]),
						z._node &&
							((z._pannerAttr.panningModel = 'equalpower'),
							(!z._panner || !z._panner.pan) && f(z, m),
							'spatial' === m
								? (z._panner.positionX.setValueAtTime(
										b,
										Howler.ctx.currentTime
								  ),
								  z._panner.positionY.setValueAtTime(
										0,
										Howler.ctx.currentTime
								  ),
								  z._panner.positionZ.setValueAtTime(
										0,
										Howler.ctx.currentTime
								  ))
								: z._panner.pan.setValueAtTime(
										b,
										Howler.ctx.currentTime
								  )),
						d._emit('stereo', z._id);
				else return z._stereo;
		}
		return d;
	};
	Howl.prototype.pos = function (b, c, d, m) {
		var g = this;
		if (!g._webAudio) return g;
		if ('loaded' !== g._state)
			return (
				g._queue.push({
					event: 'pos',
					action: function () {
						g.pos(b, c, d, m);
					},
				}),
				g
			);
		c = 'number' !== typeof c ? 0 : c;
		d = 'number' !== typeof d ? -0.5 : d;
		if ('undefined' === typeof m)
			if ('number' === typeof b) g._pos = [b, c, d];
			else return g._pos;
		for (var r = g._getSoundIds(m), z = 0; z < r.length; z++) {
			var y = g._soundById(r[z]);
			if (y)
				if ('number' === typeof b)
					(y._pos = [b, c, d]),
						y._node &&
							((!y._panner || y._panner.pan) && f(y, 'spatial'),
							y._panner.positionX.setValueAtTime(
								b,
								Howler.ctx.currentTime
							),
							y._panner.positionY.setValueAtTime(
								c,
								Howler.ctx.currentTime
							),
							y._panner.positionZ.setValueAtTime(
								d,
								Howler.ctx.currentTime
							)),
						g._emit('pos', y._id);
				else return y._pos;
		}
		return g;
	};
	Howl.prototype.orientation = function (b, c, d, m) {
		var g = this;
		if (!g._webAudio) return g;
		if ('loaded' !== g._state)
			return (
				g._queue.push({
					event: 'orientation',
					action: function () {
						g.orientation(b, c, d, m);
					},
				}),
				g
			);
		c = 'number' !== typeof c ? g._orientation[1] : c;
		d = 'number' !== typeof d ? g._orientation[2] : d;
		if ('undefined' === typeof m)
			if ('number' === typeof b) g._orientation = [b, c, d];
			else return g._orientation;
		for (var r = g._getSoundIds(m), z = 0; z < r.length; z++) {
			var y = g._soundById(r[z]);
			if (y)
				if ('number' === typeof b)
					(y._orientation = [b, c, d]),
						y._node &&
							(y._panner ||
								(y._pos || (y._pos = g._pos || [0, 0, -0.5]),
								f(y, 'spatial')),
							y._panner.orientationX.setValueAtTime(
								b,
								Howler.ctx.currentTime
							),
							y._panner.orientationY.setValueAtTime(
								c,
								Howler.ctx.currentTime
							),
							y._panner.orientationZ.setValueAtTime(
								d,
								Howler.ctx.currentTime
							)),
						g._emit('orientation', y._id);
				else return y._orientation;
		}
		return g;
	};
	Howl.prototype.pannerAttr = function () {
		var b = arguments,
			c,
			d;
		if (!this._webAudio) return this;
		if (0 === b.length) return this._pannerAttr;
		if (1 === b.length)
			if ('object' === typeof b[0])
				(c = b[0]),
					'undefined' === typeof d &&
						(c.pannerAttr ||
							(c.pannerAttr = {
								coneInnerAngle: c.coneInnerAngle,
								coneOuterAngle: c.coneOuterAngle,
								coneOuterGain: c.coneOuterGain,
								distanceModel: c.distanceModel,
								maxDistance: c.maxDistance,
								refDistance: c.refDistance,
								rolloffFactor: c.rolloffFactor,
								panningModel: c.panningModel,
							}),
						(this._pannerAttr = {
							coneInnerAngle:
								'undefined' !==
								typeof c.pannerAttr.coneInnerAngle
									? c.pannerAttr.coneInnerAngle
									: this._coneInnerAngle,
							coneOuterAngle:
								'undefined' !==
								typeof c.pannerAttr.coneOuterAngle
									? c.pannerAttr.coneOuterAngle
									: this._coneOuterAngle,
							coneOuterGain:
								'undefined' !==
								typeof c.pannerAttr.coneOuterGain
									? c.pannerAttr.coneOuterGain
									: this._coneOuterGain,
							distanceModel:
								'undefined' !==
								typeof c.pannerAttr.distanceModel
									? c.pannerAttr.distanceModel
									: this._distanceModel,
							maxDistance:
								'undefined' !== typeof c.pannerAttr.maxDistance
									? c.pannerAttr.maxDistance
									: this._maxDistance,
							refDistance:
								'undefined' !== typeof c.pannerAttr.refDistance
									? c.pannerAttr.refDistance
									: this._refDistance,
							rolloffFactor:
								'undefined' !==
								typeof c.pannerAttr.rolloffFactor
									? c.pannerAttr.rolloffFactor
									: this._rolloffFactor,
							panningModel:
								'undefined' !== typeof c.pannerAttr.panningModel
									? c.pannerAttr.panningModel
									: this._panningModel,
						}));
			else
				return (b = this._soundById(parseInt(b[0], 10)))
					? b._pannerAttr
					: this._pannerAttr;
		else 2 === b.length && ((c = b[0]), (d = parseInt(b[1], 10)));
		d = this._getSoundIds(d);
		for (var m = 0; m < d.length; m++)
			if ((b = this._soundById(d[m]))) {
				var g = b._pannerAttr,
					g = {
						coneInnerAngle:
							'undefined' !== typeof c.coneInnerAngle
								? c.coneInnerAngle
								: g.coneInnerAngle,
						coneOuterAngle:
							'undefined' !== typeof c.coneOuterAngle
								? c.coneOuterAngle
								: g.coneOuterAngle,
						coneOuterGain:
							'undefined' !== typeof c.coneOuterGain
								? c.coneOuterGain
								: g.coneOuterGain,
						distanceModel:
							'undefined' !== typeof c.distanceModel
								? c.distanceModel
								: g.distanceModel,
						maxDistance:
							'undefined' !== typeof c.maxDistance
								? c.maxDistance
								: g.maxDistance,
						refDistance:
							'undefined' !== typeof c.refDistance
								? c.refDistance
								: g.refDistance,
						rolloffFactor:
							'undefined' !== typeof c.rolloffFactor
								? c.rolloffFactor
								: g.rolloffFactor,
						panningModel:
							'undefined' !== typeof c.panningModel
								? c.panningModel
								: g.panningModel,
					},
					r = b._panner;
				r
					? ((r.coneInnerAngle = g.coneInnerAngle),
					  (r.coneOuterAngle = g.coneOuterAngle),
					  (r.coneOuterGain = g.coneOuterGain),
					  (r.distanceModel = g.distanceModel),
					  (r.maxDistance = g.maxDistance),
					  (r.refDistance = g.refDistance),
					  (r.rolloffFactor = g.rolloffFactor),
					  (r.panningModel = g.panningModel))
					: (b._pos || (b._pos = this._pos || [0, 0, -0.5]),
					  f(b, 'spatial'));
			}
		return this;
	};
	var c = Sound.prototype.init;
	Sound.prototype.init = function () {
		var b = this._parent;
		this._orientation = b._orientation;
		this._stereo = b._stereo;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		c.call(this);
		this._stereo
			? b.stereo(this._stereo)
			: this._pos &&
			  b.pos(this._pos[0], this._pos[1], this._pos[2], this._id);
	};
	var d = Sound.prototype.reset;
	Sound.prototype.reset = function () {
		var b = this._parent;
		this._orientation = b._orientation;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		return d.call(this);
	};
	var f = function (b, c) {
		'spatial' === (c || 'spatial')
			? ((b._panner = Howler.ctx.createPanner()),
			  (b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle),
			  (b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle),
			  (b._panner.coneOuterGain = b._pannerAttr.coneOuterGain),
			  (b._panner.distanceModel = b._pannerAttr.distanceModel),
			  (b._panner.maxDistance = b._pannerAttr.maxDistance),
			  (b._panner.refDistance = b._pannerAttr.refDistance),
			  (b._panner.rolloffFactor = b._pannerAttr.rolloffFactor),
			  (b._panner.panningModel = b._pannerAttr.panningModel),
			  b._panner.positionX.setValueAtTime(
					b._pos[0],
					Howler.ctx.currentTime
			  ),
			  b._panner.positionY.setValueAtTime(
					b._pos[1],
					Howler.ctx.currentTime
			  ),
			  b._panner.positionZ.setValueAtTime(
					b._pos[2],
					Howler.ctx.currentTime
			  ),
			  b._panner.orientationX.setValueAtTime(
					b._orientation[0],
					Howler.ctx.currentTime
			  ),
			  b._panner.orientationY.setValueAtTime(
					b._orientation[1],
					Howler.ctx.currentTime
			  ),
			  b._panner.orientationZ.setValueAtTime(
					b._orientation[2],
					Howler.ctx.currentTime
			  ))
			: ((b._panner = Howler.ctx.createStereoPanner()),
			  b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
		b._panner.connect(b._node);
		b._paused || b._parent.pause(b._id, !0).play(b._id, !0);
	};
})();
(function (b, c, d, f, e, j, n) {
	b.GoogleAnalyticsObject = e;
	b[e] =
		b[e] ||
		function () {
			(b[e].q = b[e].q || []).push(arguments);
		};
	b[e].l = 1 * new Date();
	j = c.createElement(d);
	n = c.getElementsByTagName(d)[0];
	j.async = 1;
	j.src = f;
	n.parentNode.insertBefore(j, n);
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-102691241-1', { name: 'marketjs' });
ga('marketjs.send', 'pageview');
(function (b) {
	Number.prototype.map = function (b, c, d, e) {
		return d + (e - d) * ((this - b) / (c - b));
	};
	Number.prototype.limit = function (b, c) {
		return Math.min(c, Math.max(b, this));
	};
	Number.prototype.round = function (b) {
		b = Math.pow(10, b || 0);
		return Math.round(this * b) / b;
	};
	Number.prototype.floor = function () {
		return Math.floor(this);
	};
	Number.prototype.ceil = function () {
		return Math.ceil(this);
	};
	Number.prototype.toInt = function () {
		return this | 0;
	};
	Number.prototype.toRad = function () {
		return (this / 180) * Math.PI;
	};
	Number.prototype.toDeg = function () {
		return (180 * this) / Math.PI;
	};
	Array.prototype.erase = function (b) {
		for (var c = this.length; c--; ) this[c] === b && this.splice(c, 1);
		return this;
	};
	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};
	Function.prototype.bind =
		Function.prototype.bind ||
		function (b) {
			if ('function' !== typeof this)
				throw new TypeError(
					'Function.prototype.bind - what is trying to be bound is not callable'
				);
			var c = Array.prototype.slice.call(arguments, 1),
				d = this,
				e = function () {},
				f = function () {
					return d.apply(
						this instanceof e && b ? this : b,
						c.concat(Array.prototype.slice.call(arguments))
					);
				};
			e.prototype = this.prototype;
			f.prototype = new e();
			return f;
		};
	b.ig = {
		game: null,
		debug: null,
		version: '1.23',
		global: b,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: '',
		ua: {},
		prefix: b.ImpactPrefix || '',
		lib: 'lib/',
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function (b) {
			return '#' == b.charAt(0)
				? document.getElementById(b.substr(1))
				: document.getElementsByTagName(b);
		},
		$new: function (b) {
			return document.createElement(b);
		},
		copy: function (b) {
			if (
				!b ||
				'object' != typeof b ||
				b instanceof HTMLElement ||
				b instanceof ig.Class
			)
				return b;
			if (b instanceof Array)
				for (var c = [], d = 0, e = b.length; d < e; d++)
					c[d] = ig.copy(b[d]);
			else for (d in ((c = {}), b)) c[d] = ig.copy(b[d]);
			return c;
		},
		merge: function (b, c) {
			for (var d in c) {
				var e = c[d];
				if (
					'object' != typeof e ||
					e instanceof HTMLElement ||
					e instanceof ig.Class ||
					null === e
				)
					b[d] = e;
				else {
					if (!b[d] || 'object' != typeof b[d])
						b[d] = e instanceof Array ? [] : {};
					ig.merge(b[d], e);
				}
			}
			return b;
		},
		ksort: function (b) {
			if (!b || 'object' != typeof b) return [];
			var c = [],
				d = [],
				e;
			for (e in b) c.push(e);
			c.sort();
			for (e = 0; e < c.length; e++) d.push(b[c[e]]);
			return d;
		},
		setVendorAttribute: function (b, c, d) {
			var e = c.charAt(0).toUpperCase() + c.substr(1);
			b[c] =
				'undefined' !== typeof b.imageSmoothingEnabled
					? (b['ms' + e] = b['moz' + e] = b['o' + e] = d)
					: (b['ms' + e] =
							b['moz' + e] =
							b['webkit' + e] =
							b['o' + e] =
								d);
		},
		getVendorAttribute: function (b, c) {
			var d = c.charAt(0).toUpperCase() + c.substr(1);
			return 'undefined' !== typeof b.imageSmoothingEnabled
				? b[c] || b['ms' + d] || b['moz' + d] || b['o' + d]
				: b[c] ||
						b['ms' + d] ||
						b['moz' + d] ||
						b['webkit' + d] ||
						b['o' + d];
		},
		normalizeVendorAttribute: function (b, c) {
			var d = ig.getVendorAttribute(b, c);
			!b[c] && d && (b[c] = d);
		},
		getImagePixels: function (b, c, d, e, f) {
			var j = ig.$new('canvas');
			j.width = b.width;
			j.height = b.height;
			var n = j.getContext('2d');
			ig.System.SCALE.CRISP(j, n);
			var I = ig.getVendorAttribute(n, 'backingStorePixelRatio') || 1;
			ig.normalizeVendorAttribute(n, 'getImageDataHD');
			var D = b.width / I,
				t = b.height / I;
			j.width = Math.ceil(D);
			j.height = Math.ceil(t);
			n.drawImage(b, 0, 0, D, t);
			return 1 === I
				? n.getImageData(c, d, e, f)
				: n.getImageDataHD(c, d, e, f);
		},
		module: function (b) {
			if (ig._current)
				throw "Module '" + ig._current.name + "' defines nothing";
			if (ig.modules[b] && ig.modules[b].body)
				throw "Module '" + b + "' is already defined";
			ig._current = { name: b, requires: [], loaded: !1, body: null };
			ig.modules[b] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig;
		},
		requires: function () {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig;
		},
		defines: function (b) {
			ig._current.body = b;
			ig._current = null;
			ig._initDOMReady();
		},
		addResource: function (b) {
			ig.resources.push(b);
		},
		setNocache: function (b) {
			ig.nocache = b ? '?' + Date.now() : '';
		},
		log: function () {},
		assert: function () {},
		show: function () {},
		mark: function () {},
		_loadScript: function (b, c) {
			ig.modules[b] = { name: b, requires: [], loaded: !1, body: null };
			ig._waitForOnload++;
			var d =
					ig.prefix +
					ig.lib +
					b.replace(/\./g, '/') +
					'.js' +
					ig.nocache,
				e = ig.$new('script');
			e.type = 'text/javascript';
			e.src = d;
			e.onload = function () {
				ig._waitForOnload--;
				ig._execModules();
			};
			e.onerror = function () {
				throw (
					'Failed to load module ' +
					b +
					' at ' +
					d +
					' required from ' +
					c
				);
			};
			ig.$('head')[0].appendChild(e);
		},
		_execModules: function () {
			for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
				for (
					var d = ig._loadQueue[c], e = !0, f = 0;
					f < d.requires.length;
					f++
				) {
					var j = d.requires[f];
					ig.modules[j]
						? ig.modules[j].loaded || (e = !1)
						: ((e = !1), ig._loadScript(j, d.name));
				}
				e &&
					d.body &&
					(ig._loadQueue.splice(c, 1),
					(d.loaded = !0),
					d.body(),
					(b = !0),
					c--);
			}
			if (b) ig._execModules();
			else if (
				!ig.baked &&
				0 == ig._waitForOnload &&
				0 != ig._loadQueue.length
			) {
				b = [];
				for (c = 0; c < ig._loadQueue.length; c++) {
					e = [];
					j = ig._loadQueue[c].requires;
					for (f = 0; f < j.length; f++)
						(d = ig.modules[j[f]]),
							(!d || !d.loaded) && e.push(j[f]);
					b.push(
						ig._loadQueue[c].name +
							' (requires: ' +
							e.join(', ') +
							')'
					);
				}
				throw (
					"Unresolved (or circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules or a previous syntax error prevents a module from loading:\n" +
					b.join('\n')
				);
			}
		},
		_DOMReady: function () {
			if (!ig.modules['dom.ready'].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules['dom.ready'].loaded = !0;
				ig._waitForOnload--;
				ig._execModules();
			}
			return 0;
		},
		_boot: function () {
			document.location.href.match(/\?nocache/) && ig.setNocache(!0);
			ig.ua.pixelRatio = b.devicePixelRatio || 1;
			ig.ua.viewport = { width: b.innerWidth, height: b.innerHeight };
			ig.ua.screen = {
				width: b.screen.availWidth * ig.ua.pixelRatio,
				height: b.screen.availHeight * ig.ua.pixelRatio,
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.is_uiwebview =
				/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
					navigator.userAgent
				);
			ig.ua.is_safari_or_uiwebview =
				/(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
			ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
			ig.ua.iOSgt5 =
				ig.ua.iOS &&
				5 <
					parseInt(
						navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]
					);
			ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
			ig.ua.touchDevice =
				'ontouchstart' in b || b.navigator.msMaxTouchPoints;
			ig.ua.mobile =
				ig.ua.iOS ||
				ig.ua.android ||
				ig.ua.iOS6 ||
				ig.ua.winPhone ||
				ig.ua.Kindle ||
				/mobile/i.test(navigator.userAgent);
		},
		_initDOMReady: function () {
			ig.modules['dom.ready']
				? ig._execModules()
				: (ig._boot(),
				  (ig.modules['dom.ready'] = {
						requires: [],
						loaded: !1,
						body: null,
				  }),
				  ig._waitForOnload++,
				  'complete' === document.readyState
						? ig._DOMReady()
						: (document.addEventListener(
								'DOMContentLoaded',
								ig._DOMReady,
								!1
						  ),
						  b.addEventListener('load', ig._DOMReady, !1)));
		},
	};
	ig.normalizeVendorAttribute(b, 'requestAnimationFrame');
	if (b.requestAnimationFrame) {
		var c = 1,
			d = {};
		b.ig.setAnimation = function (e, f) {
			var j = c++;
			d[j] = !0;
			var n = function () {
				d[j] && (b.requestAnimationFrame(n, f), e());
			};
			b.requestAnimationFrame(n, f);
			return j;
		};
		b.ig.clearAnimation = function (b) {
			delete d[b];
		};
	} else
		(b.ig.setAnimation = function (c) {
			return b.setInterval(c, 1e3 / 60);
		}),
			(b.ig.clearAnimation = function (c) {
				b.clearInterval(c);
			});
	var f = !1,
		e = /xyz/.test(function () {
			xyz;
		})
			? /\bparent\b/
			: /.*/,
		j = 0;
	b.ig.Class = function () {};
	var n = function (b) {
		var c = this.prototype,
			d = {},
			f;
		for (f in b)
			'function' == typeof b[f] &&
			'function' == typeof c[f] &&
			e.test(b[f])
				? ((d[f] = c[f]),
				  (c[f] = (function (b, c) {
						return function () {
							var e = this.parent;
							this.parent = d[b];
							var f = c.apply(this, arguments);
							this.parent = e;
							return f;
						};
				  })(f, b[f])))
				: (c[f] = b[f]);
	};
	b.ig.Class.extend = function (c) {
		function d() {
			if (!f) {
				if (this.staticInstantiate) {
					var b = this.staticInstantiate.apply(this, arguments);
					if (b) return b;
				}
				for (var c in this)
					'object' == typeof this[c] && (this[c] = ig.copy(this[c]));
				this.init && this.init.apply(this, arguments);
			}
			return this;
		}
		var r = this.prototype;
		f = !0;
		var z = new this();
		f = !1;
		for (var y in c)
			z[y] =
				'function' == typeof c[y] &&
				'function' == typeof r[y] &&
				e.test(c[y])
					? (function (b, c) {
							return function () {
								var d = this.parent;
								this.parent = r[b];
								var e = c.apply(this, arguments);
								this.parent = d;
								return e;
							};
					  })(y, c[y])
					: c[y];
		d.prototype = z;
		d.prototype.constructor = d;
		d.extend = b.ig.Class.extend;
		d.inject = n;
		d.classId = z.classId = ++j;
		return d;
	};
	b.ImpactMixin && ig.merge(ig, b.ImpactMixin);
})(window);
ig.baked = !0;
ig.module('impact.image').defines(function () {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: '',
		staticInstantiate: function (b) {
			return ig.Image.cache[b] || null;
		},
		init: function (b) {
			this.path = b;
			this.load();
		},
		load: function (b) {
			this.loaded
				? b && b(this.path, !0)
				: (!this.loaded && ig.ready
						? ((this.loadCallback = b || null),
						  (this.data = new Image()),
						  (this.data.onload = this.onload.bind(this)),
						  (this.data.onerror = this.onerror.bind(this)),
						  (this.data.src = ig.prefix + this.path + ig.nocache))
						: ig.addResource(this),
				  (ig.Image.cache[this.path] = this));
		},
		reload: function () {
			this.loaded = !1;
			this.data = new Image();
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + '?' + Date.now();
		},
		onload: function () {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0);
		},
		onerror: function () {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1);
		},
		resize: function (b) {
			var c = ig.getImagePixels(this.data, 0, 0, this.width, this.height),
				d = this.width * b,
				f = this.height * b,
				e = ig.$new('canvas');
			e.width = d;
			e.height = f;
			for (
				var j = e.getContext('2d'),
					n = j.getImageData(0, 0, d, f),
					m = 0;
				m < f;
				m++
			)
				for (var g = 0; g < d; g++) {
					var r =
							4 *
							(Math.floor(m / b) * this.width +
								Math.floor(g / b)),
						z = 4 * (m * d + g);
					n.data[z] = c.data[r];
					n.data[z + 1] = c.data[r + 1];
					n.data[z + 2] = c.data[r + 2];
					n.data[z + 3] = c.data[r + 3];
				}
			j.putImageData(n, 0, 0);
			this.data = e;
		},
		draw: function (b, c, d, f, e, j) {
			if (this.loaded) {
				var n = ig.system.scale;
				e = (e ? e : this.width) * n;
				j = (j ? j : this.height) * n;
				ig.system.context.drawImage(
					this.data,
					d ? d * n : 0,
					f ? f * n : 0,
					e,
					j,
					ig.system.getDrawPos(b),
					ig.system.getDrawPos(c),
					e,
					j
				);
				ig.Image.drawCount++;
			}
		},
		drawTile: function (b, c, d, f, e, j, n) {
			e = e ? e : f;
			if (this.loaded && !(f > this.width || e > this.height)) {
				var m = ig.system.scale,
					g = Math.floor(f * m),
					r = Math.floor(e * m),
					z = j ? -1 : 1,
					y = n ? -1 : 1;
				if (j || n)
					ig.system.context.save(), ig.system.context.scale(z, y);
				ig.system.context.drawImage(
					this.data,
					(Math.floor(d * f) % this.width) * m,
					Math.floor((d * f) / this.width) * e * m,
					g,
					r,
					ig.system.getDrawPos(b) * z - (j ? g : 0),
					ig.system.getDrawPos(c) * y - (n ? r : 0),
					g,
					r
				);
				(j || n) && ig.system.context.restore();
				ig.Image.drawCount++;
			}
		},
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function () {
		for (var b in ig.Image.cache) ig.Image.cache[b].reload();
	};
});
ig.baked = !0;
ig.module('impact.font')
	.requires('impact.image')
	.defines(function () {
		ig.Font = ig.Image.extend({
			widthMap: [],
			indices: [],
			firstChar: 32,
			alpha: 1,
			letterSpacing: 1,
			lineSpacing: 0,
			onload: function (b) {
				this._loadMetrics(this.data);
				this.parent(b);
			},
			widthForString: function (b) {
				if (-1 !== b.indexOf('\n')) {
					b = b.split('\n');
					for (var c = 0, d = 0; d < b.length; d++)
						c = Math.max(c, this._widthForLine(b[d]));
					return c;
				}
				return this._widthForLine(b);
			},
			_widthForLine: function (b) {
				for (var c = 0, d = 0; d < b.length; d++)
					c +=
						this.widthMap[b.charCodeAt(d) - this.firstChar] +
						this.letterSpacing;
				return c;
			},
			heightForString: function (b) {
				return b.split('\n').length * (this.height + this.lineSpacing);
			},
			draw: function (b, c, d, f) {
				'string' != typeof b && (b = b.toString());
				if (-1 !== b.indexOf('\n')) {
					b = b.split('\n');
					for (
						var e = this.height + this.lineSpacing, j = 0;
						j < b.length;
						j++
					)
						this.draw(b[j], c, d + j * e, f);
				} else {
					if (f == ig.Font.ALIGN.RIGHT || f == ig.Font.ALIGN.CENTER)
						(j = this._widthForLine(b)),
							(c -= f == ig.Font.ALIGN.CENTER ? j / 2 : j);
					1 !== this.alpha &&
						(ig.system.context.globalAlpha = this.alpha);
					for (j = 0; j < b.length; j++)
						(f = b.charCodeAt(j)),
							(c += this._drawChar(f - this.firstChar, c, d));
					1 !== this.alpha && (ig.system.context.globalAlpha = 1);
					ig.Image.drawCount += b.length;
				}
			},
			_drawChar: function (b, c, d) {
				if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
				var f = ig.system.scale,
					e = this.widthMap[b] * f,
					j = (this.height - 2) * f;
				ig.system.context.drawImage(
					this.data,
					this.indices[b] * f,
					0,
					e,
					j,
					ig.system.getDrawPos(c),
					ig.system.getDrawPos(d),
					e,
					j
				);
				return this.widthMap[b] + this.letterSpacing;
			},
			_loadMetrics: function (b) {
				this.height = b.height - 1;
				this.widthMap = [];
				this.indices = [];
				for (
					var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1),
						d = 0,
						f = 0,
						e = 0;
					e < b.width;
					e++
				) {
					var j = 4 * e + 3;
					127 < c.data[j]
						? f++
						: 128 > c.data[j] &&
						  f &&
						  (this.widthMap.push(f),
						  this.indices.push(e - f),
						  d++,
						  (f = 0));
				}
				this.widthMap.push(f);
				this.indices.push(e - f);
			},
		});
		ig.Font.ALIGN = { LEFT: 0, RIGHT: 1, CENTER: 2 };
	});
ig.baked = !0;
ig.module('impact.sound').defines(function () {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function () {
			if (!ig.Sound.enabled || !window.Audio) ig.Sound.enabled = !1;
			else {
				for (var b = new Audio(), c = 0; c < ig.Sound.use.length; c++) {
					var d = ig.Sound.use[c];
					if (b.canPlayType(d.mime)) {
						this.format = d;
						break;
					}
				}
				this.format || (ig.Sound.enabled = !1);
			}
		},
		load: function (b, c, d) {
			var f =
				ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[b]) {
				if (c && this.clips[b].length < ig.Sound.channels)
					for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
						var e = new Audio(f);
						e.load();
						this.clips[b].push(e);
					}
				return this.clips[b][0];
			}
			var j = new Audio(f);
			d &&
				(j.addEventListener(
					'canplaythrough',
					function m(c) {
						j.removeEventListener('canplaythrough', m, !1);
						d(b, !0, c);
					},
					!1
				),
				j.addEventListener(
					'error',
					function (c) {
						d(b, !1, c);
					},
					!1
				));
			j.preload = 'auto';
			j.load();
			this.clips[b] = [j];
			if (c)
				for (c = 1; c < ig.Sound.channels; c++)
					(e = new Audio(f)), e.load(), this.clips[b].push(e);
			return j;
		},
		get: function (b) {
			b = this.clips[b];
			for (var c = 0, d; (d = b[c++]); )
				if (d.paused || d.ended)
					return d.ended && (d.currentTime = 0), d;
			b[0].pause();
			b[0].currentTime = 0;
			return b[0];
		},
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function () {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty
				? (Object.defineProperty(this, 'volume', {
						get: this.getVolume.bind(this),
						set: this.setVolume.bind(this),
				  }),
				  Object.defineProperty(this, 'loop', {
						get: this.getLooping.bind(this),
						set: this.setLooping.bind(this),
				  }))
				: this.__defineGetter__ &&
				  (this.__defineGetter__('volume', this.getVolume.bind(this)),
				  this.__defineSetter__('volume', this.setVolume.bind(this)),
				  this.__defineGetter__('loop', this.getLooping.bind(this)),
				  this.__defineSetter__('loop', this.setLooping.bind(this)));
		},
		add: function (b, c) {
			if (ig.Sound.enabled) {
				var d = ig.soundManager.load(
					b instanceof ig.Sound ? b.path : b,
					!1
				);
				d.loop = this._loop;
				d.volume = this._volume;
				d.addEventListener('ended', this._endedCallbackBound, !1);
				this.tracks.push(d);
				c && (this.namedTracks[c] = d);
				this.currentTrack || (this.currentTrack = d);
			}
		},
		next: function () {
			this.tracks.length &&
				(this.stop(),
				(this.currentIndex = this.random
					? Math.floor(Math.random() * this.tracks.length)
					: (this.currentIndex + 1) % this.tracks.length),
				(this.currentTrack = this.tracks[this.currentIndex]),
				this.play());
		},
		pause: function () {
			this.currentTrack && this.currentTrack.pause();
		},
		stop: function () {
			this.currentTrack &&
				(this.currentTrack.pause(),
				(this.currentTrack.currentTime = 0));
		},
		play: function (b) {
			if (b && this.namedTracks[b])
				(b = this.namedTracks[b]),
					b != this.currentTrack &&
						(this.stop(), (this.currentTrack = b));
			else if (!this.currentTrack) return;
			this.currentTrack.play();
		},
		getLooping: function () {
			return this._loop;
		},
		setLooping: function (b) {
			this._loop = b;
			for (var c in this.tracks) this.tracks[c].loop = b;
		},
		getVolume: function () {
			return this._volume;
		},
		setVolume: function (b) {
			this._volume = b.limit(0, 1);
			for (var c in this.tracks) this.tracks[c].volume = this._volume;
		},
		fadeOut: function (b) {
			this.currentTrack &&
				(clearInterval(this._fadeInterval),
				(this.fadeTimer = new ig.Timer(b)),
				(this._fadeInterval = setInterval(
					this._fadeStep.bind(this),
					50
				)));
		},
		_fadeStep: function () {
			var b =
				this.fadeTimer
					.delta()
					.map(-this.fadeTimer.target, 0, 1, 0)
					.limit(0, 1) * this._volume;
			0.01 >= b
				? (this.stop(),
				  (this.currentTrack.volume = this._volume),
				  clearInterval(this._fadeInterval))
				: (this.currentTrack.volume = b);
		},
		_endedCallback: function () {
			this._loop ? this.play() : this.next();
		},
	});
	ig.Sound = ig.Class.extend({
		path: '',
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function (b, c) {
			this.path = b;
			this.multiChannel = !1 !== c;
			this.load();
		},
		load: function (b) {
			ig.Sound.enabled
				? ig.ready
					? ig.soundManager.load(this.path, this.multiChannel, b)
					: ig.addResource(this)
				: b && b(this.path, !0);
		},
		play: function () {
			ig.Sound.enabled &&
				((this.currentClip = ig.soundManager.get(this.path)),
				(this.currentClip.volume =
					ig.soundManager.volume * this.volume),
				this.currentClip.play());
		},
		stop: function () {
			this.currentClip &&
				(this.currentClip.pause(), (this.currentClip.currentTime = 0));
		},
	});
	ig.Sound.FORMAT = {
		MP3: { ext: 'mp3', mime: 'audio/mpeg' },
		M4A: { ext: 'm4a', mime: 'audio/mp4; codecs=mp4a' },
		OGG: { ext: 'ogg', mime: 'audio/ogg; codecs=vorbis' },
		WEBM: { ext: 'webm', mime: 'audio/webm; codecs=vorbis' },
		CAF: { ext: 'caf', mime: 'audio/x-caf' },
	};
	ig.Sound.use = [ig.Sound.FORMAT.OGG, ig.Sound.FORMAT.MP3];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0;
});
ig.baked = !0;
ig.module('impact.loader')
	.requires('impact.image', 'impact.font', 'impact.sound')
	.defines(function () {
		ig.Loader = ig.Class.extend({
			resources: [],
			gameClass: null,
			status: 0,
			done: !1,
			_unloaded: [],
			_drawStatus: 0,
			_intervalId: 0,
			_loadCallbackBound: null,
			init: function (b, c) {
				this.gameClass = b;
				this.resources = c;
				this._loadCallbackBound = this._loadCallback.bind(this);
				for (var d = 0; d < this.resources.length; d++)
					this._unloaded.push(this.resources[d].path);
			},
			load: function () {
				ig.system.clear('#000');
				if (this.resources.length) {
					for (var b = 0; b < this.resources.length; b++)
						this.loadResource(this.resources[b]);
					this._intervalId = setInterval(this.draw.bind(this), 16);
				} else this.end();
			},
			loadResource: function (b) {
				b.load(this._loadCallbackBound);
			},
			end: function () {
				this.done ||
					((this.done = !0), clearInterval(this._intervalId));
			},
			draw: function () {},
			_loadCallback: function (b, c) {
				if (c) this._unloaded.erase(b);
				else throw 'Failed to load resource: ' + b;
				this.status = 1 - this._unloaded.length / this.resources.length;
				0 == this._unloaded.length &&
					setTimeout(this.end.bind(this), 250);
			},
		});
	});
ig.baked = !0;
ig.module('impact.timer').defines(function () {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function (b) {
			this.last = this.base = ig.Timer.time;
			this.target = b || 0;
		},
		set: function (b) {
			this.target = b || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0;
		},
		reset: function () {
			this.base = ig.Timer.time;
			this.pausedAt = 0;
		},
		tick: function () {
			var b = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : b;
		},
		delta: function () {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target;
		},
		pause: function () {
			this.pausedAt || (this.pausedAt = ig.Timer.time);
		},
		unpause: function () {
			this.pausedAt &&
				((this.base += ig.Timer.time - this.pausedAt),
				(this.pausedAt = 0));
		},
	});
	ig.Timer._last = 0;
	ig.Timer.time = Number.MIN_VALUE;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function () {
		var b = Date.now();
		ig.Timer.time +=
			Math.min((b - ig.Timer._last) / 1e3, ig.Timer.maxStep) *
			ig.Timer.timeScale;
		ig.Timer._last = b;
	};
});
ig.baked = !0;
ig.module('impact.system')
	.requires('impact.timer', 'impact.image')
	.defines(function () {
		ig.System = ig.Class.extend({
			fps: 30,
			width: 320,
			height: 240,
			realWidth: 320,
			realHeight: 240,
			scale: 1,
			tick: 0,
			animationId: 0,
			newGameClass: null,
			running: !1,
			delegate: null,
			clock: null,
			canvas: null,
			context: null,
			init: function (b, c, d, f, e) {
				this.fps = c;
				this.clock = new ig.Timer();
				this.canvas = ig.$(b);
				this.resize(d, f, e);
				this.context = this.canvas.getContext('2d');
				this.getDrawPos = ig.System.drawMode;
				1 != this.scale &&
					(ig.System.scaleMode = ig.System.SCALE.CRISP);
				ig.System.scaleMode(this.canvas, this.context);
			},
			resize: function (b, c, d) {
				this.width = b;
				this.height = c;
				this.scale = d || this.scale;
				this.realWidth = this.width * this.scale;
				this.realHeight = this.height * this.scale;
				this.canvas.width = this.realWidth;
				this.canvas.height = this.realHeight;
			},
			setGame: function (b) {
				this.running ? (this.newGameClass = b) : this.setGameNow(b);
			},
			setGameNow: function (b) {
				ig.game = new b();
				ig.system.setDelegate(ig.game);
			},
			setDelegate: function (b) {
				if ('function' == typeof b.run)
					(this.delegate = b), this.startRunLoop();
				else throw 'System.setDelegate: No run() function in object';
			},
			stopRunLoop: function () {
				ig.clearAnimation(this.animationId);
				this.running = !1;
			},
			startRunLoop: function () {
				this.stopRunLoop();
				this.animationId = ig.setAnimation(
					this.run.bind(this),
					this.canvas
				);
				this.running = !0;
			},
			clear: function (b) {
				this.context.fillStyle = b;
				this.context.fillRect(0, 0, this.realWidth, this.realHeight);
			},
			run: function () {
				ig.Timer.step();
				this.tick = this.clock.tick();
				this.delegate.run();
				ig.input.clearPressed();
				this.newGameClass &&
					(this.setGameNow(this.newGameClass),
					(this.newGameClass = null));
			},
			getDrawPos: null,
		});
		ig.System.DRAW = {
			AUTHENTIC: function (b) {
				return Math.round(b) * this.scale;
			},
			SMOOTH: function (b) {
				return Math.round(b * this.scale);
			},
			SUBPIXEL: function (b) {
				return b * this.scale;
			},
		};
		ig.System.drawMode = ig.System.DRAW.SMOOTH;
		ig.System.SCALE = {
			CRISP: function (b, c) {
				ig.setVendorAttribute(c, 'imageSmoothingEnabled', !1);
				b.style.imageRendering = '-moz-crisp-edges';
				b.style.imageRendering = '-o-crisp-edges';
				b.style.imageRendering = '-webkit-optimize-contrast';
				b.style.imageRendering = 'crisp-edges';
				b.style.msInterpolationMode = 'nearest-neighbor';
			},
			SMOOTH: function (b, c) {
				ig.setVendorAttribute(c, 'imageSmoothingEnabled', !0);
				b.style.imageRendering = '';
				b.style.msInterpolationMode = '';
			},
		};
		ig.System.scaleMode = ig.System.SCALE.SMOOTH;
	});
ig.baked = !0;
ig.module('impact.input').defines(function () {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190,
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: { x: 0, y: 0 },
		accel: { x: 0, y: 0, z: 0 },
		initMouse: function () {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var b = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener('mousewheel', b, !1);
				ig.system.canvas.addEventListener('DOMMouseScroll', b, !1);
				ig.system.canvas.addEventListener(
					'contextmenu',
					this.contextmenu.bind(this),
					!1
				);
				ig.system.canvas.addEventListener(
					'mousedown',
					this.keydown.bind(this),
					!1
				);
				ig.system.canvas.addEventListener(
					'mouseup',
					this.keyup.bind(this),
					!1
				);
				ig.system.canvas.addEventListener(
					'mousemove',
					this.mousemove.bind(this),
					!1
				);
				ig.ua.touchDevice &&
					(ig.system.canvas.addEventListener(
						'touchstart',
						this.keydown.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'touchend',
						this.keyup.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'touchmove',
						this.mousemove.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'MSPointerDown',
						this.keydown.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'MSPointerUp',
						this.keyup.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'MSPointerMove',
						this.mousemove.bind(this),
						!1
					),
					(ig.system.canvas.style.msTouchAction = 'none'));
			}
		},
		initKeyboard: function () {
			this.isUsingKeyboard ||
				((this.isUsingKeyboard = !0),
				window.addEventListener('keydown', this.keydown.bind(this), !1),
				window.addEventListener('keyup', this.keyup.bind(this), !1));
		},
		initAccelerometer: function () {
			this.isUsingAccelerometer ||
				window.addEventListener(
					'devicemotion',
					this.devicemotion.bind(this),
					!1
				);
		},
		mousewheel: function (b) {
			var c =
				this.bindings[
					0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail)
						? ig.KEY.MWHEEL_UP
						: ig.KEY.MWHEEL_DOWN
				];
			c &&
				((this.actions[c] = !0),
				(this.presses[c] = !0),
				(this.delayedKeyup[c] = !0),
				b.stopPropagation(),
				b.preventDefault());
		},
		mousemove: function (b) {
			var c =
				parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
			ig.ua.mobile && (c = ig.system.realWidth);
			var c = ig.system.scale * (c / ig.system.realWidth),
				d = { left: 0, top: 0 };
			ig.system.canvas.getBoundingClientRect &&
				(d = ig.system.canvas.getBoundingClientRect());
			b = b.touches ? b.touches[0] : b;
			this.mouse.x = (b.clientX - d.left) / c;
			this.mouse.y = (b.clientY - d.top) / c;
		},
		contextmenu: function (b) {
			this.bindings[ig.KEY.MOUSE2] &&
				(b.stopPropagation(), b.preventDefault());
		},
		keydown: function (b) {
			var c = b.target.tagName;
			if (!('INPUT' == c || 'TEXTAREA' == c))
				if (
					((c =
						'keydown' == b.type
							? b.keyCode
							: 2 == b.button
							? ig.KEY.MOUSE2
							: ig.KEY.MOUSE1),
					('touchstart' == b.type || 'mousedown' == b.type) &&
						this.mousemove(b),
					(c = this.bindings[c]))
				)
					(this.actions[c] = !0),
						this.locks[c] ||
							((this.presses[c] = !0), (this.locks[c] = !0)),
						b.stopPropagation(),
						b.preventDefault();
		},
		keyup: function (b) {
			var c = b.target.tagName;
			if (!('INPUT' == c || 'TEXTAREA' == c))
				if (
					(c =
						this.bindings[
							'keyup' == b.type
								? b.keyCode
								: 2 == b.button
								? ig.KEY.MOUSE2
								: ig.KEY.MOUSE1
						])
				)
					(this.delayedKeyup[c] = !0),
						b.stopPropagation(),
						b.preventDefault();
		},
		devicemotion: function (b) {
			this.accel = b.accelerationIncludingGravity;
		},
		bind: function (b, c) {
			0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
			this.bindings[b] = c;
		},
		bindTouch: function (b, c) {
			var d = ig.$(b),
				f = this;
			d.addEventListener(
				'touchstart',
				function (b) {
					f.touchStart(b, c);
				},
				!1
			);
			d.addEventListener(
				'touchend',
				function (b) {
					f.touchEnd(b, c);
				},
				!1
			);
			d.addEventListener(
				'MSPointerDown',
				function (b) {
					f.touchStart(b, c);
				},
				!1
			);
			d.addEventListener(
				'MSPointerUp',
				function (b) {
					f.touchEnd(b, c);
				},
				!1
			);
		},
		unbind: function (b) {
			this.delayedKeyup[this.bindings[b]] = !0;
			this.bindings[b] = null;
		},
		unbindAll: function () {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {};
		},
		state: function (b) {
			return this.actions[b];
		},
		pressed: function (b) {
			return this.presses[b];
		},
		released: function (b) {
			return !!this.delayedKeyup[b];
		},
		clearPressed: function () {
			for (var b in this.delayedKeyup)
				(this.actions[b] = !1), (this.locks[b] = !1);
			this.delayedKeyup = {};
			this.presses = {};
		},
		touchStart: function (b, c) {
			this.actions[c] = !0;
			this.presses[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1;
		},
		touchEnd: function (b, c) {
			this.delayedKeyup[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1;
		},
	});
});
ig.baked = !0;
ig.module('impact.impact')
	.requires(
		'dom.ready',
		'impact.loader',
		'impact.system',
		'impact.input',
		'impact.sound'
	)
	.defines(function () {
		ig.main = function (b, c, d, f, e, j, n) {
			ig.system = new ig.System(b, d, f, e, j || 1);
			ig.input = new ig.Input();
			ig.soundManager = new ig.SoundManager();
			ig.music = new ig.Music();
			ig.ready = !0;
			new (n || ig.Loader)(c, ig.resources).load();
		};
	});
ig.baked = !0;
ig.module('impact.animation')
	.requires('impact.timer', 'impact.image')
	.defines(function () {
		ig.AnimationSheet = ig.Class.extend({
			width: 8,
			height: 8,
			image: null,
			init: function (b, c, d) {
				this.width = c;
				this.height = d;
				this.image = new ig.Image(b);
			},
		});
		ig.Animation = ig.Class.extend({
			sheet: null,
			timer: null,
			sequence: [],
			flip: { x: !1, y: !1 },
			pivot: { x: 0, y: 0 },
			frame: 0,
			tile: 0,
			loopCount: 0,
			alpha: 1,
			angle: 0,
			init: function (b, c, d, f) {
				this.sheet = b;
				this.pivot = { x: b.width / 2, y: b.height / 2 };
				this.timer = new ig.Timer();
				this.frameTime = c;
				this.sequence = d;
				this.stop = !!f;
				this.tile = this.sequence[0];
			},
			rewind: function () {
				this.timer.set();
				this.frame = this.loopCount = 0;
				this.tile = this.sequence[0];
				return this;
			},
			gotoFrame: function (b) {
				this.timer.set(this.frameTime * -b - 1e-4);
				this.update();
			},
			gotoRandomFrame: function () {
				this.gotoFrame(
					Math.floor(Math.random() * this.sequence.length)
				);
			},
			update: function () {
				var b = Math.floor(this.timer.delta() / this.frameTime);
				this.loopCount = Math.floor(b / this.sequence.length);
				this.frame =
					this.stop && 0 < this.loopCount
						? this.sequence.length - 1
						: b % this.sequence.length;
				this.tile = this.sequence[this.frame];
			},
			draw: function (b, c) {
				var d = Math.max(this.sheet.width, this.sheet.height);
				b > ig.system.width ||
					c > ig.system.height ||
					0 > b + d ||
					0 > c + d ||
					(1 != this.alpha &&
						(ig.system.context.globalAlpha = this.alpha),
					0 == this.angle
						? this.sheet.image.drawTile(
								b,
								c,
								this.tile,
								this.sheet.width,
								this.sheet.height,
								this.flip.x,
								this.flip.y
						  )
						: (ig.system.context.save(),
						  ig.system.context.translate(
								ig.system.getDrawPos(b + this.pivot.x),
								ig.system.getDrawPos(c + this.pivot.y)
						  ),
						  ig.system.context.rotate(this.angle),
						  this.sheet.image.drawTile(
								-this.pivot.x,
								-this.pivot.y,
								this.tile,
								this.sheet.width,
								this.sheet.height,
								this.flip.x,
								this.flip.y
						  ),
						  ig.system.context.restore()),
					1 != this.alpha && (ig.system.context.globalAlpha = 1));
			},
		});
	});
ig.baked = !0;
ig.module('impact.entity')
	.requires('impact.animation', 'impact.impact')
	.defines(function () {
		ig.Entity = ig.Class.extend({
			id: 0,
			settings: {},
			size: { x: 16, y: 16 },
			offset: { x: 0, y: 0 },
			pos: { x: 0, y: 0 },
			last: { x: 0, y: 0 },
			vel: { x: 0, y: 0 },
			accel: { x: 0, y: 0 },
			friction: { x: 0, y: 0 },
			maxVel: { x: 100, y: 100 },
			zIndex: 0,
			gravityFactor: 0,
			standing: !1,
			bounciness: 0,
			minBounceVelocity: 40,
			anims: {},
			animSheet: null,
			currentAnim: null,
			health: 10,
			type: 0,
			checkAgainst: 0,
			collides: 0,
			_killed: !1,
			slopeStanding: { min: (44).toRad(), max: (136).toRad() },
			scale: { x: 1, y: 1 },
			_pos: { x: 0, y: 0 },
			init: function (b, c, d) {
				this.id = ++ig.Entity._lastId;
				b || (b = 0);
				c || (c = 0);
				this.pos.x = this.last.x = this._pos.x = b;
				this.pos.y = this.last.y = this._pos.y = c;
				ig.merge(this, d);
			},
			reset: function (b, c, d) {
				var f = this.constructor.prototype;
				this.pos.x = b;
				this.pos.y = c;
				this.last.x = b;
				this.last.y = c;
				this.vel.x = f.vel.x;
				this.vel.y = f.vel.y;
				this.accel.x = f.accel.x;
				this.accel.y = f.accel.y;
				this.health = f.health;
				this._killed = f._killed;
				this.standing = f.standing;
				this.type = f.type;
				this.checkAgainst = f.checkAgainst;
				this.collides = f.collides;
				ig.merge(this, d);
			},
			addAnim: function (b, c, d, f) {
				if (!this.animSheet)
					throw 'No animSheet to add the animation ' + b + ' to.';
				c = new ig.Animation(this.animSheet, c, d, f);
				this.anims[b] = c;
				this.currentAnim || (this.currentAnim = c);
				return c;
			},
			update: function () {
				this.last.x = this.pos.x;
				this.last.y = this.pos.y;
				this.vel.y +=
					ig.game.gravity * ig.system.tick * this.gravityFactor;
				this.vel.x = this.getNewVelocity(
					this.vel.x,
					this.accel.x,
					this.friction.x,
					this.maxVel.x
				);
				this.vel.y = this.getNewVelocity(
					this.vel.y,
					this.accel.y,
					this.friction.y,
					this.maxVel.y
				);
				var b = ig.game.collisionMap.trace(
					this.pos.x,
					this.pos.y,
					this.vel.x * ig.system.tick,
					this.vel.y * ig.system.tick,
					this.size.x,
					this.size.y
				);
				this.handleMovementTrace(b);
				this.currentAnim && this.currentAnim.update();
			},
			getNewVelocity: function (b, c, d, f) {
				return c
					? (b + c * ig.system.tick).limit(-f, f)
					: d
					? ((c = d * ig.system.tick),
					  0 < b - c ? b - c : 0 > b + c ? b + c : 0)
					: b.limit(-f, f);
			},
			handleMovementTrace: function (b) {
				this.standing = !1;
				b.collision.y &&
					(0 < this.bounciness &&
					Math.abs(this.vel.y) > this.minBounceVelocity
						? (this.vel.y *= -this.bounciness)
						: (0 < this.vel.y && (this.standing = !0),
						  (this.vel.y = 0)));
				b.collision.x &&
					(this.vel.x =
						0 < this.bounciness &&
						Math.abs(this.vel.x) > this.minBounceVelocity
							? this.vel.x * -this.bounciness
							: 0);
				if (b.collision.slope) {
					var c = b.collision.slope;
					if (0 < this.bounciness) {
						var d = this.vel.x * c.nx + this.vel.y * c.ny;
						this.vel.x =
							(this.vel.x - 2 * c.nx * d) * this.bounciness;
						this.vel.y =
							(this.vel.y - 2 * c.ny * d) * this.bounciness;
					} else
						(d =
							(this.vel.x * c.x + this.vel.y * c.y) /
							(c.x * c.x + c.y * c.y)),
							(this.vel.x = c.x * d),
							(this.vel.y = c.y * d),
							(c = Math.atan2(c.x, c.y)),
							c > this.slopeStanding.min &&
								c < this.slopeStanding.max &&
								(this.standing = !0);
				}
				this.pos = b.pos;
			},
			draw: function () {
				this.currentAnim &&
					this.currentAnim.draw(
						this.pos.x - this.offset.x - ig.game._rscreen.x,
						this.pos.y - this.offset.y - ig.game._rscreen.y
					);
			},
			kill: function () {
				ig.game.removeEntity(this);
			},
			receiveDamage: function (b) {
				this.health -= b;
				0 >= this.health && this.kill();
			},
			touches: function (b) {
				return !(
					this.pos.x >= b.pos.x + b.size.x ||
					this.pos.x + this.size.x <= b.pos.x ||
					this.pos.y >= b.pos.y + b.size.y ||
					this.pos.y + this.size.y <= b.pos.y
				);
			},
			distanceTo: function (b) {
				var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
				b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
				return Math.sqrt(c * c + b * b);
			},
			angleTo: function (b) {
				return Math.atan2(
					b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2),
					b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2)
				);
			},
			check: function () {},
			collideWith: function () {},
			ready: function () {},
			erase: function () {},
		});
		ig.Entity._lastId = 0;
		ig.Entity.COLLIDES = {
			NEVER: 0,
			LITE: 1,
			PASSIVE: 2,
			ACTIVE: 4,
			FIXED: 8,
		};
		ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 };
		ig.Entity.checkPair = function (b, c) {
			b.checkAgainst & c.type && b.check(c);
			c.checkAgainst & b.type && c.check(b);
			b.collides &&
				c.collides &&
				b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE &&
				ig.Entity.solveCollision(b, c);
		};
		ig.Entity.solveCollision = function (b, c) {
			var d = null;
			if (
				b.collides == ig.Entity.COLLIDES.LITE ||
				c.collides == ig.Entity.COLLIDES.FIXED
			)
				d = b;
			else if (
				c.collides == ig.Entity.COLLIDES.LITE ||
				b.collides == ig.Entity.COLLIDES.FIXED
			)
				d = c;
			b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x
				? (b.last.y < c.last.y
						? ig.Entity.seperateOnYAxis(b, c, d)
						: ig.Entity.seperateOnYAxis(c, b, d),
				  b.collideWith(c, 'y'),
				  c.collideWith(b, 'y'))
				: b.last.y + b.size.y > c.last.y &&
				  b.last.y < c.last.y + c.size.y &&
				  (b.last.x < c.last.x
						? ig.Entity.seperateOnXAxis(b, c, d)
						: ig.Entity.seperateOnXAxis(c, b, d),
				  b.collideWith(c, 'x'),
				  c.collideWith(b, 'x'));
		};
		ig.Entity.seperateOnXAxis = function (b, c, d) {
			var f = b.pos.x + b.size.x - c.pos.x;
			d
				? ((d.vel.x =
						-d.vel.x * d.bounciness + (b === d ? c : b).vel.x),
				  (c = ig.game.collisionMap.trace(
						d.pos.x,
						d.pos.y,
						d == b ? -f : f,
						0,
						d.size.x,
						d.size.y
				  )),
				  (d.pos.x = c.pos.x))
				: ((d = (b.vel.x - c.vel.x) / 2),
				  (b.vel.x = -d),
				  (c.vel.x = d),
				  (d = ig.game.collisionMap.trace(
						b.pos.x,
						b.pos.y,
						-f / 2,
						0,
						b.size.x,
						b.size.y
				  )),
				  (b.pos.x = Math.floor(d.pos.x)),
				  (b = ig.game.collisionMap.trace(
						c.pos.x,
						c.pos.y,
						f / 2,
						0,
						c.size.x,
						c.size.y
				  )),
				  (c.pos.x = Math.ceil(b.pos.x)));
		};
		ig.Entity.seperateOnYAxis = function (b, c, d) {
			var f = b.pos.y + b.size.y - c.pos.y;
			if (d) {
				c = b === d ? c : b;
				d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
				var e = 0;
				d == b &&
					Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity &&
					((d.standing = !0), (e = c.vel.x * ig.system.tick));
				b = ig.game.collisionMap.trace(
					d.pos.x,
					d.pos.y,
					e,
					d == b ? -f : f,
					d.size.x,
					d.size.y
				);
				d.pos.y = b.pos.y;
				d.pos.x = b.pos.x;
			} else
				ig.game.gravity && (c.standing || 0 < b.vel.y)
					? ((d = ig.game.collisionMap.trace(
							b.pos.x,
							b.pos.y,
							0,
							-(b.pos.y + b.size.y - c.pos.y),
							b.size.x,
							b.size.y
					  )),
					  (b.pos.y = d.pos.y),
					  0 < b.bounciness && b.vel.y > b.minBounceVelocity
							? (b.vel.y *= -b.bounciness)
							: ((b.standing = !0), (b.vel.y = 0)))
					: ((d = (b.vel.y - c.vel.y) / 2),
					  (b.vel.y = -d),
					  (c.vel.y = d),
					  (e = c.vel.x * ig.system.tick),
					  (d = ig.game.collisionMap.trace(
							b.pos.x,
							b.pos.y,
							e,
							-f / 2,
							b.size.x,
							b.size.y
					  )),
					  (b.pos.y = d.pos.y),
					  (b = ig.game.collisionMap.trace(
							c.pos.x,
							c.pos.y,
							0,
							f / 2,
							c.size.x,
							c.size.y
					  )),
					  (c.pos.y = b.pos.y));
		};
	});
ig.baked = !0;
ig.module('impact.map').defines(function () {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [[]],
		name: null,
		init: function (b, c) {
			this.tilesize = b;
			this.data = c;
			this.height = c.length;
			this.width = c[0].length;
			this.pxWidth = this.width * this.tilesize;
			this.pxHeight = this.height * this.tilesize;
		},
		getTile: function (b, c) {
			var d = Math.floor(b / this.tilesize),
				f = Math.floor(c / this.tilesize);
			return 0 <= d && d < this.width && 0 <= f && f < this.height
				? this.data[f][d]
				: 0;
		},
		setTile: function (b, c, d) {
			b = Math.floor(b / this.tilesize);
			c = Math.floor(c / this.tilesize);
			0 <= b &&
				b < this.width &&
				0 <= c &&
				c < this.height &&
				(this.data[c][b] = d);
		},
	});
});
ig.baked = !0;
ig.module('impact.collision-map')
	.requires('impact.map')
	.defines(function () {
		ig.CollisionMap = ig.Map.extend({
			lastSlope: 1,
			tiledef: null,
			init: function (b, c, e) {
				this.parent(b, c);
				this.tiledef = e || ig.CollisionMap.defaultTileDef;
				for (var j in this.tiledef)
					j | (0 > this.lastSlope) && (this.lastSlope = j | 0);
			},
			trace: function (b, c, e, j, n, m) {
				var g = {
						collision: { x: !1, y: !1, slope: !1 },
						pos: { x: b, y: c },
						tile: { x: 0, y: 0 },
					},
					r = Math.ceil(
						Math.max(Math.abs(e), Math.abs(j)) / this.tilesize
					);
				if (1 < r)
					for (
						var z = e / r, y = j / r, A = 0;
						A < r &&
						(z || y) &&
						!(this._traceStep(g, b, c, z, y, n, m, e, j, A),
						(b = g.pos.x),
						(c = g.pos.y),
						g.collision.x && (e = z = 0),
						g.collision.y && (j = y = 0),
						g.collision.slope);
						A++
					);
				else this._traceStep(g, b, c, e, j, n, m, e, j, 0);
				return g;
			},
			_traceStep: function (b, c, e, j, n, m, g, r, z, y) {
				b.pos.x += j;
				b.pos.y += n;
				var A = 0;
				if (j) {
					var B = 0 < j ? m : 0,
						I = 0 > j ? this.tilesize : 0,
						A = Math.max(Math.floor(e / this.tilesize), 0),
						D = Math.min(
							Math.ceil((e + g) / this.tilesize),
							this.height
						);
					j = Math.floor((b.pos.x + B) / this.tilesize);
					var t = Math.floor((c + B) / this.tilesize);
					if (0 < y || j == t || 0 > t || t >= this.width) t = -1;
					if (0 <= j && j < this.width)
						for (
							var G = A;
							G < D &&
							!(
								-1 != t &&
								((A = this.data[G][t]),
								1 < A &&
									A <= this.lastSlope &&
									this._checkTileDef(
										b,
										A,
										c,
										e,
										r,
										z,
										m,
										g,
										t,
										G
									))
							);
							G++
						)
							if (
								((A = this.data[G][j]),
								1 == A ||
									A > this.lastSlope ||
									(1 < A &&
										this._checkTileDef(
											b,
											A,
											c,
											e,
											r,
											z,
											m,
											g,
											j,
											G
										)))
							) {
								if (
									1 < A &&
									A <= this.lastSlope &&
									b.collision.slope
								)
									break;
								b.collision.x = !0;
								b.tile.x = A;
								c = b.pos.x = j * this.tilesize - B + I;
								r = 0;
								break;
							}
				}
				if (n) {
					B = 0 < n ? g : 0;
					n = 0 > n ? this.tilesize : 0;
					A = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
					I = Math.min(
						Math.ceil((b.pos.x + m) / this.tilesize),
						this.width
					);
					G = Math.floor((b.pos.y + B) / this.tilesize);
					D = Math.floor((e + B) / this.tilesize);
					if (0 < y || G == D || 0 > D || D >= this.height) D = -1;
					if (0 <= G && G < this.height)
						for (
							j = A;
							j < I &&
							!(
								-1 != D &&
								((A = this.data[D][j]),
								1 < A &&
									A <= this.lastSlope &&
									this._checkTileDef(
										b,
										A,
										c,
										e,
										r,
										z,
										m,
										g,
										j,
										D
									))
							);
							j++
						)
							if (
								((A = this.data[G][j]),
								1 == A ||
									A > this.lastSlope ||
									(1 < A &&
										this._checkTileDef(
											b,
											A,
											c,
											e,
											r,
											z,
											m,
											g,
											j,
											G
										)))
							) {
								if (
									1 < A &&
									A <= this.lastSlope &&
									b.collision.slope
								)
									break;
								b.collision.y = !0;
								b.tile.y = A;
								b.pos.y = G * this.tilesize - B + n;
								break;
							}
				}
			},
			_checkTileDef: function (b, c, e, j, n, m, g, r, z, y) {
				var A = this.tiledef[c];
				if (!A) return !1;
				c = (A[2] - A[0]) * this.tilesize;
				var B = (A[3] - A[1]) * this.tilesize,
					I = A[4];
				g = e + n + (0 > B ? g : 0) - (z + A[0]) * this.tilesize;
				r = j + m + (0 < c ? r : 0) - (y + A[1]) * this.tilesize;
				if (0 < c * r - B * g) {
					if (0 > n * -B + m * c) return I;
					z = Math.sqrt(c * c + B * B);
					y = B / z;
					z = -c / z;
					var D = g * y + r * z,
						A = y * D,
						D = z * D;
					if (A * A + D * D >= n * n + m * m)
						return I || 0.5 > c * (r - m) - B * (g - n);
					b.pos.x = e + n - A;
					b.pos.y = j + m - D;
					b.collision.slope = { x: c, y: B, nx: y, ny: z };
					return !0;
				}
				return !1;
			},
		});
		var b = 1 / 3,
			c = 2 / 3;
		ig.CollisionMap.defaultTileDef = {
			5: [0, 1, 1, c, !0],
			6: [0, c, 1, b, !0],
			7: [0, b, 1, 0, !0],
			3: [0, 1, 1, 0.5, !0],
			4: [0, 0.5, 1, 0, !0],
			2: [0, 1, 1, 0, !0],
			10: [0.5, 1, 1, 0, !0],
			21: [0, 1, 0.5, 0, !0],
			32: [c, 1, 1, 0, !0],
			43: [b, 1, c, 0, !0],
			54: [0, 1, b, 0, !0],
			27: [0, 0, 1, b, !0],
			28: [0, b, 1, c, !0],
			29: [0, c, 1, 1, !0],
			25: [0, 0, 1, 0.5, !0],
			26: [0, 0.5, 1, 1, !0],
			24: [0, 0, 1, 1, !0],
			11: [0, 0, 0.5, 1, !0],
			22: [0.5, 0, 1, 1, !0],
			33: [0, 0, b, 1, !0],
			44: [b, 0, c, 1, !0],
			55: [c, 0, 1, 1, !0],
			16: [1, b, 0, 0, !0],
			17: [1, c, 0, b, !0],
			18: [1, 1, 0, c, !0],
			14: [1, 0.5, 0, 0, !0],
			15: [1, 1, 0, 0.5, !0],
			13: [1, 1, 0, 0, !0],
			8: [0.5, 1, 0, 0, !0],
			19: [1, 1, 0.5, 0, !0],
			30: [b, 1, 0, 0, !0],
			41: [c, 1, b, 0, !0],
			52: [1, 1, c, 0, !0],
			38: [1, c, 0, 1, !0],
			39: [1, b, 0, c, !0],
			40: [1, 0, 0, b, !0],
			36: [1, 0.5, 0, 1, !0],
			37: [1, 0, 0, 0.5, !0],
			35: [1, 0, 0, 1, !0],
			9: [1, 0, 0.5, 1, !0],
			20: [0.5, 0, 0, 1, !0],
			31: [1, 0, c, 1, !0],
			42: [c, 0, b, 1, !0],
			53: [b, 0, 0, 1, !0],
			12: [0, 0, 1, 0, !1],
			23: [1, 1, 0, 1, !1],
			34: [1, 0, 1, 1, !1],
			45: [0, 1, 0, 0, !1],
		};
		ig.CollisionMap.staticNoCollision = {
			trace: function (b, c, e, j) {
				return {
					collision: { x: !1, y: !1, slope: !1 },
					pos: { x: b + e, y: c + j },
					tile: { x: 0, y: 0 },
				};
			},
		};
	});
ig.baked = !0;
ig.module('impact.background-map')
	.requires('impact.map', 'impact.image')
	.defines(function () {
		ig.BackgroundMap = ig.Map.extend({
			tiles: null,
			scroll: { x: 0, y: 0 },
			distance: 1,
			repeat: !1,
			tilesetName: '',
			foreground: !1,
			enabled: !0,
			preRender: !1,
			preRenderedChunks: null,
			chunkSize: 512,
			debugChunks: !1,
			anims: {},
			init: function (b, c, d) {
				this.parent(b, c);
				this.setTileset(d);
			},
			setTileset: function (b) {
				this.tilesetName = b instanceof ig.Image ? b.path : b;
				this.tiles = new ig.Image(this.tilesetName);
				this.preRenderedChunks = null;
			},
			setScreenPos: function (b, c) {
				this.scroll.x = b / this.distance;
				this.scroll.y = c / this.distance;
			},
			preRenderMapToChunks: function () {
				var b = this.width * this.tilesize * ig.system.scale,
					c = this.height * this.tilesize * ig.system.scale;
				this.chunkSize = Math.min(Math.max(b, c), this.chunkSize);
				var d = Math.ceil(b / this.chunkSize),
					f = Math.ceil(c / this.chunkSize);
				this.preRenderedChunks = [];
				for (var e = 0; e < f; e++) {
					this.preRenderedChunks[e] = [];
					for (var j = 0; j < d; j++)
						this.preRenderedChunks[e][j] = this.preRenderChunk(
							j,
							e,
							j == d - 1
								? b - j * this.chunkSize
								: this.chunkSize,
							e == f - 1 ? c - e * this.chunkSize : this.chunkSize
						);
				}
			},
			preRenderChunk: function (b, c, d, f) {
				var e = d / this.tilesize / ig.system.scale + 1,
					j = f / this.tilesize / ig.system.scale + 1,
					n =
						((b * this.chunkSize) / ig.system.scale) %
						this.tilesize,
					m =
						((c * this.chunkSize) / ig.system.scale) %
						this.tilesize;
				b = Math.floor(
					(b * this.chunkSize) / this.tilesize / ig.system.scale
				);
				c = Math.floor(
					(c * this.chunkSize) / this.tilesize / ig.system.scale
				);
				var g = ig.$new('canvas');
				g.width = d;
				g.height = f;
				g.retinaResolutionEnabled = !1;
				f = g.getContext('2d');
				ig.System.scaleMode(g, f);
				d = ig.system.context;
				ig.system.context = f;
				for (f = 0; f < e; f++)
					for (var r = 0; r < j; r++)
						if (f + b < this.width && r + c < this.height) {
							var z = this.data[r + c][f + b];
							z &&
								this.tiles.drawTile(
									f * this.tilesize - n,
									r * this.tilesize - m,
									z - 1,
									this.tilesize
								);
						}
				ig.system.context = d;
				return g;
			},
			draw: function () {
				this.tiles.loaded &&
					this.enabled &&
					(this.preRender
						? this.drawPreRendered()
						: this.drawTiled());
			},
			drawPreRendered: function () {
				this.preRenderedChunks || this.preRenderMapToChunks();
				var b = ig.system.getDrawPos(this.scroll.x),
					c = ig.system.getDrawPos(this.scroll.y);
				if (this.repeat)
					var d = this.width * this.tilesize * ig.system.scale,
						b = ((b % d) + d) % d,
						d = this.height * this.tilesize * ig.system.scale,
						c = ((c % d) + d) % d;
				var d = Math.max(Math.floor(b / this.chunkSize), 0),
					f = Math.max(Math.floor(c / this.chunkSize), 0),
					e = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
					j = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
					n = this.preRenderedChunks[0].length,
					m = this.preRenderedChunks.length;
				this.repeat || ((e = Math.min(e, n)), (j = Math.min(j, m)));
				for (var g = 0; f < j; f++) {
					for (var r = 0, z = d; z < e; z++) {
						var y = this.preRenderedChunks[f % m][z % n],
							A = -b + z * this.chunkSize - r,
							B = -c + f * this.chunkSize - g;
						ig.system.context.drawImage(y, A, B);
						ig.Image.drawCount++;
						this.debugChunks &&
							((ig.system.context.strokeStyle = '#f0f'),
							ig.system.context.strokeRect(
								A,
								B,
								this.chunkSize,
								this.chunkSize
							));
						this.repeat &&
							y.width < this.chunkSize &&
							A + y.width < ig.system.realWidth &&
							((r += this.chunkSize - y.width), e++);
					}
					this.repeat &&
						y.height < this.chunkSize &&
						B + y.height < ig.system.realHeight &&
						((g += this.chunkSize - y.height), j++);
				}
			},
			drawTiled: function () {
				for (
					var b = 0,
						c = null,
						d = (this.scroll.x / this.tilesize).toInt(),
						f = (this.scroll.y / this.tilesize).toInt(),
						e = this.scroll.x % this.tilesize,
						j = this.scroll.y % this.tilesize,
						n = -e - this.tilesize,
						e = ig.system.width + this.tilesize - e,
						m = ig.system.height + this.tilesize - j,
						g = -1,
						j = -j - this.tilesize;
					j < m;
					g++, j += this.tilesize
				) {
					var r = g + f;
					if (r >= this.height || 0 > r) {
						if (!this.repeat) continue;
						r = ((r % this.height) + this.height) % this.height;
					}
					for (var z = -1, y = n; y < e; z++, y += this.tilesize) {
						b = z + d;
						if (b >= this.width || 0 > b) {
							if (!this.repeat) continue;
							b = ((b % this.width) + this.width) % this.width;
						}
						if ((b = this.data[r][b]))
							(c = this.anims[b - 1])
								? c.draw(y, j)
								: this.tiles.drawTile(
										y,
										j,
										b - 1,
										this.tilesize
								  );
					}
				}
			},
		});
	});
ig.baked = !0;
ig.module('impact.game')
	.requires(
		'impact.impact',
		'impact.entity',
		'impact.collision-map',
		'impact.background-map'
	)
	.defines(function () {
		ig.Game = ig.Class.extend({
			clearColor: '#000000',
			gravity: 0,
			screen: { x: 0, y: 0 },
			_rscreen: { x: 0, y: 0 },
			entities: [],
			namedEntities: {},
			collisionMap: ig.CollisionMap.staticNoCollision,
			backgroundMaps: [],
			backgroundAnims: {},
			autoSort: !1,
			sortBy: null,
			cellSize: 64,
			_deferredKill: [],
			_levelToLoad: null,
			_doSortEntities: !1,
			staticInstantiate: function () {
				this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
				ig.game = this;
				return null;
			},
			loadLevel: function (b) {
				this.screen = { x: 0, y: 0 };
				this.entities = [];
				this.namedEntities = {};
				for (var c = 0; c < b.entities.length; c++) {
					var d = b.entities[c];
					this.spawnEntity(d.type, d.x, d.y, d.settings);
				}
				this.sortEntities();
				this.collisionMap = ig.CollisionMap.staticNoCollision;
				this.backgroundMaps = [];
				for (c = 0; c < b.layer.length; c++)
					if (((d = b.layer[c]), 'collision' == d.name))
						this.collisionMap = new ig.CollisionMap(
							d.tilesize,
							d.data
						);
					else {
						var f = new ig.BackgroundMap(
							d.tilesize,
							d.data,
							d.tilesetName
						);
						f.anims = this.backgroundAnims[d.tilesetName] || {};
						f.repeat = d.repeat;
						f.distance = d.distance;
						f.foreground = !!d.foreground;
						f.preRender = !!d.preRender;
						f.name = d.name;
						this.backgroundMaps.push(f);
					}
				for (c = 0; c < this.entities.length; c++)
					this.entities[c].ready();
			},
			loadLevelDeferred: function (b) {
				this._levelToLoad = b;
			},
			getMapByName: function (b) {
				if ('collision' == b) return this.collisionMap;
				for (var c = 0; c < this.backgroundMaps.length; c++)
					if (this.backgroundMaps[c].name == b)
						return this.backgroundMaps[c];
				return null;
			},
			getEntityByName: function (b) {
				return this.namedEntities[b];
			},
			getEntitiesByType: function (b) {
				b = 'string' === typeof b ? ig.global[b] : b;
				for (var c = [], d = 0; d < this.entities.length; d++) {
					var f = this.entities[d];
					f instanceof b && !f._killed && c.push(f);
				}
				return c;
			},
			spawnEntity: function (b, c, d, f) {
				var e = 'string' === typeof b ? ig.global[b] : b;
				if (!e) throw "Can't spawn entity of type " + b;
				b = new e(c, d, f || {});
				this.entities.push(b);
				b.name && (this.namedEntities[b.name] = b);
				return b;
			},
			sortEntities: function () {
				this.entities.sort(this.sortBy);
			},
			sortEntitiesDeferred: function () {
				this._doSortEntities = !0;
			},
			removeEntity: function (b) {
				b.name && delete this.namedEntities[b.name];
				b._killed = !0;
				b.type = ig.Entity.TYPE.NONE;
				b.checkAgainst = ig.Entity.TYPE.NONE;
				b.collides = ig.Entity.COLLIDES.NEVER;
				this._deferredKill.push(b);
			},
			run: function () {
				this.update();
				this.draw();
			},
			update: function () {
				this._levelToLoad &&
					(this.loadLevel(this._levelToLoad),
					(this._levelToLoad = null));
				this.updateEntities();
				this.checkEntities();
				for (var b = 0; b < this._deferredKill.length; b++)
					this._deferredKill[b].erase(),
						this.entities.erase(this._deferredKill[b]);
				this._deferredKill = [];
				if (this._doSortEntities || this.autoSort)
					this.sortEntities(), (this._doSortEntities = !1);
				for (var c in this.backgroundAnims) {
					var b = this.backgroundAnims[c],
						d;
					for (d in b) b[d].update();
				}
			},
			updateEntities: function () {
				for (var b = 0; b < this.entities.length; b++) {
					var c = this.entities[b];
					c._killed || c.update();
				}
			},
			draw: function () {
				this.clearColor && ig.system.clear(this.clearColor);
				this._rscreen.x =
					ig.system.getDrawPos(this.screen.x) / ig.system.scale;
				this._rscreen.y =
					ig.system.getDrawPos(this.screen.y) / ig.system.scale;
				var b;
				for (b = 0; b < this.backgroundMaps.length; b++) {
					var c = this.backgroundMaps[b];
					if (c.foreground) break;
					c.setScreenPos(this.screen.x, this.screen.y);
					c.draw();
				}
				this.drawEntities();
				for (b; b < this.backgroundMaps.length; b++)
					(c = this.backgroundMaps[b]),
						c.setScreenPos(this.screen.x, this.screen.y),
						c.draw();
			},
			drawEntities: function () {
				for (var b = 0; b < this.entities.length; b++)
					this.entities[b].draw();
			},
			checkEntities: function () {
				for (var b = {}, c = 0; c < this.entities.length; c++) {
					var d = this.entities[c];
					if (
						!(
							d.type == ig.Entity.TYPE.NONE &&
							d.checkAgainst == ig.Entity.TYPE.NONE &&
							d.collides == ig.Entity.COLLIDES.NEVER
						)
					)
						for (
							var f = {},
								e = Math.floor(d.pos.y / this.cellSize),
								j =
									Math.floor(
										(d.pos.x + d.size.x) / this.cellSize
									) + 1,
								n =
									Math.floor(
										(d.pos.y + d.size.y) / this.cellSize
									) + 1,
								m = Math.floor(d.pos.x / this.cellSize);
							m < j;
							m++
						)
							for (var g = e; g < n; g++)
								if (b[m])
									if (b[m][g]) {
										for (
											var r = b[m][g], z = 0;
											z < r.length;
											z++
										)
											d.touches(r[z]) &&
												!f[r[z].id] &&
												((f[r[z].id] = !0),
												ig.Entity.checkPair(d, r[z]));
										r.push(d);
									} else b[m][g] = [d];
								else (b[m] = {}), (b[m][g] = [d]);
				}
			},
		});
		ig.Game.SORT = {
			Z_INDEX: function (b, c) {
				return b.zIndex - c.zIndex;
			},
			POS_X: function (b, c) {
				return b.pos.x + b.size.x - (c.pos.x + c.size.x);
			},
			POS_Y: function (b, c) {
				return c.pos.y + c.size.y - (b.pos.y + b.size.y);
			},
		};
	});
ig.baked = !0;
ig.module('plugins.patches.webkit-image-smoothing-patch').defines(function () {
	ig.System &&
		((ig.System.SCALE = {
			CRISP: function (b, c) {
				c.imageSmoothingEnabled =
					c.msImageSmoothingEnabled =
					c.mozImageSmoothingEnabled =
					c.oImageSmoothingEnabled =
						!1;
				b.style.imageRendering = '-moz-crisp-edges';
				b.style.imageRendering = '-o-crisp-edges';
				b.style.imageRendering = '-webkit-optimize-contrast';
				b.style.imageRendering = 'crisp-edges';
				b.style.msInterpolationMode = 'nearest-neighbor';
			},
			SMOOTH: function (b, c) {
				c.imageSmoothingEnabled =
					c.msImageSmoothingEnabled =
					c.mozImageSmoothingEnabled =
					c.oImageSmoothingEnabled =
						!0;
				b.style.imageRendering = '';
				b.style.msInterpolationMode = '';
			},
		}),
		(ig.System.scaleMode = ig.System.SCALE.SMOOTH));
});
ig.baked = !0;
ig.module('plugins.patches.windowfocus-onMouseDown-patch')
	.requires('impact.input')
	.defines(function () {
		var b = !1;
		try {
			(b = window.self !== window.top),
				!1 === b && (b = 0 < window.frames.length);
		} catch (c) {
			b = !0;
		}
		ig.Input.inject({
			keydown: function (c) {
				var f = c.target.tagName;
				if (!('INPUT' == f || 'TEXTAREA' == f))
					if (
						((f =
							'keydown' == c.type
								? c.keyCode
								: 2 == c.button
								? ig.KEY.MOUSE2
								: ig.KEY.MOUSE1),
						b && 0 > f && window.focus(),
						('touchstart' == c.type || 'mousedown' == c.type) &&
							this.mousemove(c),
						(f = this.bindings[f]))
					)
						(this.actions[f] = !0),
							this.locks[f] ||
								((this.presses[f] = !0), (this.locks[f] = !0)),
							c.stopPropagation(),
							c.preventDefault();
			},
		});
	});
ig.baked = !0;
ig.module('plugins.handlers.dom-handler').defines(function () {
	ig.DomHandler = ig.Class.extend({
		JQUERYAVAILABLE: !1,
		init: function () {
			this.JQUERYAVAILABLE = this._jqueryAvailable();
		},
		_jqueryAvailable: function () {
			return 'undefined' !== typeof jQuery;
		},
		addEvent: function (b, c, d, f) {
			if (this.JQUERYAVAILABLE) b.on(c, d);
			else b.addEventListener(c, d, f);
		},
		create: function (b) {
			return this.JQUERYAVAILABLE ? $('<' + b + '>') : ig.$new(b);
		},
		getElementByClass: function (b) {
			return this.JQUERYAVAILABLE
				? $('.' + b)
				: document.getElementsByClassName(b);
		},
		getElementById: function (b) {
			return this.JQUERYAVAILABLE
				? 0 < $(b).length
					? $(b)
					: null
				: ig.$(b);
		},
		appendChild: function (b, c) {
			this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c);
		},
		appendToBody: function (b) {
			this.JQUERYAVAILABLE
				? $('body').append(b)
				: document.body.appendChild(b);
		},
		resize: function (b, c, d) {
			if (this.JQUERYAVAILABLE)
				b.width(c.toFixed(2)), b.height(d.toFixed(2));
			else {
				var f = b.style.visibility;
				c =
					'width:' +
					c.toFixed(2) +
					'px; height:' +
					d.toFixed(2) +
					'px;';
				this.attr(b, 'style', c);
				b.style.visibility = f;
			}
		},
		resizeOffsetLeft: function (b, c, d, f) {
			if (this.JQUERYAVAILABLE)
				b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css('left', f);
			else {
				var e = b.style.visibility;
				c =
					'width:' +
					c.toFixed(2) +
					'px; height:' +
					d.toFixed(2) +
					'px; left: ' +
					f.toFixed(2) +
					'px;';
				this.attr(b, 'style', c);
				b.style.visibility = e;
			}
		},
		resizeOffset: function (b, c, d, f, e) {
			if (this.JQUERYAVAILABLE)
				b.width(c.toFixed(2)),
					b.height(d.toFixed(2)),
					b.css('left', f),
					b.css('top', e);
			else {
				var j = b.style.visibility;
				c =
					'width:' +
					c.toFixed(2) +
					'px; height:' +
					d.toFixed(2) +
					'px; left: ' +
					f.toFixed(2) +
					'px; top: ' +
					e.toFixed(2) +
					'px;';
				this.attr(b, 'style', c);
				b.style.visibility = j;
			}
		},
		css: function (b, c) {
			if (this.JQUERYAVAILABLE) b.css(c);
			else {
				var d = '',
					f;
				for (f in c) d += f + ':' + c[f] + ';';
				this.attr(b, 'style', d);
			}
		},
		getOffsets: function (b) {
			return this.JQUERYAVAILABLE
				? ((b = b.offset()), { left: b.left, top: b.top })
				: { left: b.offsetLeft, top: b.offsetTop };
		},
		attr: function (b, c, d) {
			if ('undefined' === typeof d)
				return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
			this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d);
		},
		show: function (b) {
			this.JQUERYAVAILABLE
				? (b.show(), b.css('visibility', 'visible'))
				: b &&
				  (b.style
						? (b.style.visibility = 'visible')
						: b[0] && (b[0].style.visibility = 'visible'));
		},
		hide: function (b) {
			this.JQUERYAVAILABLE
				? (b.hide(), b.css('visibility', 'hidden'))
				: b &&
				  (b.style
						? (b.style.visibility = 'hidden')
						: b[0] && (b[0].style.visibility = 'hidden'));
		},
		getQueryVariable: function (b) {
			for (
				var c = window.location.search.substring(1).split('&'), d = 0;
				d < c.length;
				d++
			) {
				var f = c[d].split('=');
				if (decodeURIComponent(f[0]) == b)
					return decodeURIComponent(f[1]);
			}
		},
		forcedDeviceDetection: function () {
			var b = this.getQueryVariable('device');
			if (b)
				switch (b) {
					case 'mobile':
						console.log('serving mobile version ...');
						ig.ua.mobile = !0;
						break;
					case 'desktop':
						console.log('serving desktop version ...');
						ig.ua.mobile = !1;
						break;
					default:
						console.log('serving universal version ...');
				}
			else console.log('serving universal version ...');
		},
		forcedDeviceRotation: function () {
			var b = this.getQueryVariable('force-rotate');
			if (b)
				switch (b) {
					case 'portrait':
						console.log('force rotate to portrait');
						window.orientation = 0;
						break;
					case 'landscape':
						console.log('force rotate to horizontal');
						window.orientation = 90;
						break;
					default:
						alert(
							'wrong command/type in param force-rotate. Defaulting value to portrait'
						),
							(window.orientation = 0);
				}
		},
	});
});
ig.baked = !0;
ig.module('plugins.data.vector').defines(function () {
	Vector2 = function (b, c) {
		this.x = b || 0;
		this.y = c || 0;
	};
	Vector2.prototype = {
		valType: 'number',
		neg: function () {
			this.x = -this.x;
			this.y = -this.y;
			return this;
		},
		row: function (b) {
			typeof b === this.valType && (this.y = b);
			return this.y;
		},
		col: function (b) {
			typeof b === this.valType && (this.x = b);
			return this.x;
		},
		add: function (b) {
			b instanceof Vector2
				? ((this.x += b.x), (this.y += b.y))
				: ((this.x += b), (this.y += b));
			return this;
		},
		sub: function (b) {
			b instanceof Vector2
				? ((this.x -= b.x), (this.y -= b.y))
				: ((this.x -= b), (this.y -= b));
			return this;
		},
		mul: function (b) {
			b instanceof Vector2
				? ((this.x *= b.x), (this.y *= b.y))
				: ((this.x *= b), (this.y *= b));
			return this;
		},
		div: function (b) {
			b instanceof Vector2
				? (0 != b.x && (this.x /= b.x), 0 != b.y && (this.y /= b.y))
				: 0 != b && ((this.x /= b), (this.y /= b));
			return this;
		},
		equals: function (b) {
			return this.x == b.x && this.y == b.y;
		},
		dot: function (b) {
			return this.x * b.x + this.y * b.y;
		},
		cross: function (b) {
			return this.x * b.y - this.y * b.x;
		},
		length: function () {
			return Math.sqrt(this.dot(this));
		},
		norm: function () {
			return this.divide(this.length());
		},
		min: function () {
			return Math.min(this.x, this.y);
		},
		max: function () {
			return Math.max(this.x, this.y);
		},
		toAngles: function () {
			return -Math.atan2(-this.y, this.x);
		},
		angleTo: function (b) {
			return Math.acos(this.dot(b) / (this.length() * b.length()));
		},
		toArray: function (b) {
			return [this.x, this.y].slice(0, b || 2);
		},
		clone: function () {
			return new Vector2(this.x, this.y);
		},
		set: function (b, c) {
			this.x = b;
			this.y = c;
			return this;
		},
		unit: function () {
			var b = this.length();
			if (0 < b) return new Vector2(this.x / b, this.y / b);
			throw 'Divide by 0 error in unitVector function of vector:' + this;
		},
		turnRight: function () {
			var b = this.x;
			this.x = -this.y;
			this.y = b;
			return this;
		},
		turnLeft: function () {
			var b = this.x;
			this.x = this.y;
			this.y = -b;
			return this;
		},
		rotate: function (b) {
			var c = this.clone();
			this.x = c.x * Math.cos(b) - c.y * Math.sin(b);
			this.y = c.x * Math.sin(b) + c.y * Math.cos(b);
			return this;
		},
	};
	Vector2.negative = function (b) {
		return new Vector2(-b.x, -b.y);
	};
	Vector2.add = function (b, c) {
		return c instanceof Vector2
			? new Vector2(b.x + c.x, b.y + c.y)
			: new Vector2(b.x + v, b.y + v);
	};
	Vector2.subtract = function (b, c) {
		return c instanceof Vector2
			? new Vector2(b.x - c.x, b.y - c.y)
			: new Vector2(b.x - v, b.y - v);
	};
	Vector2.multiply = function (b, c) {
		return c instanceof Vector2
			? new Vector2(b.x * c.x, b.y * c.y)
			: new Vector2(b.x * v, b.y * v);
	};
	Vector2.divide = function (b, c) {
		return c instanceof Vector2
			? new Vector2(b.x / c.x, b.y / c.y)
			: new Vector2(b.x / v, b.y / v);
	};
	Vector2.equals = function (b, c) {
		return b.x == c.x && b.y == c.y;
	};
	Vector2.dot = function (b, c) {
		return b.x * c.x + b.y * c.y;
	};
	Vector2.cross = function (b, c) {
		return b.x * c.y - b.y * c.x;
	};
});
ig.baked = !0;
ig.module('plugins.handlers.size-handler')
	.requires('plugins.data.vector')
	.defines(function () {
		ig.SizeHandler = ig.Class.extend({
			portraitMode: !0,
			disableStretchToFitOnMobileFlag: !1,
			enableStretchToFitOnAntiPortraitModeFlag: !0,
			enableScalingLimitsOnMobileFlag: !1,
			minScalingOnMobile: 0,
			maxScalingOnMobile: 1,
			enableStretchToFitOnDesktopFlag: !1,
			enableScalingLimitsOnDesktopFlag: !1,
			minScalingOnDesktop: 0,
			maxScalingOnDesktop: 1,
			desktop: {
				actualSize: new Vector2(window.innerWidth, window.innerHeight),
				actualResolution: new Vector2(540, 960),
			},
			mobile: {
				actualSize: new Vector2(window.innerWidth, window.innerHeight),
				actualResolution: new Vector2(540, 960),
			},
			windowSize: new Vector2(window.innerWidth, window.innerHeight),
			scaleRatioMultiplier: new Vector2(1, 1),
			sizeRatio: new Vector2(1, 1),
			scale: 1,
			domHandler: null,
			dynamicClickableEntityDivs: {},
			coreDivsToResize: ['#canvas', '#play', '#orientate'],
			adsToResize: {
				MobileAdInGamePreroll: {
					'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20,
				},
				MobileAdInGameEnd: {
					'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.End.Height + 20,
				},
				MobileAdInGamePreroll2: {
					'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20,
				},
				MobileAdInGameEnd2: {
					'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.End.Height + 20,
				},
				MobileAdInGamePreroll3: {
					'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20,
				},
				MobileAdInGameEnd3: {
					'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
					'box-height': _SETTINGS.Ad.Mobile.End.Height + 20,
				},
			},
			init: function (b) {
				'true' == getQueryVariable('dev') &&
					(this.desktop = {
						actualSize: new Vector2(
							window.innerWidth,
							window.innerHeight
						),
						actualResolution: new Vector2(5500, 960),
					});
				this.domHandler = b;
				if ('undefined' === typeof b)
					throw 'undefined Dom Handler for Size Handler';
				this.sizeCalcs();
				this.eventListenerSetup();
				this.samsungFix();
			},
			sizeCalcs: function () {
				this.windowSize = new Vector2(
					window.innerWidth,
					window.innerHeight
				);
				if (ig.ua.mobile) {
					this.mobile.actualSize = new Vector2(
						window.innerWidth,
						window.innerHeight
					);
					var b = new Vector2(
						this.mobile.actualResolution.x,
						this.mobile.actualResolution.y
					);
					this.scaleRatioMultiplier = new Vector2(
						this.mobile.actualSize.x / b.x,
						this.mobile.actualSize.y / b.y
					);
					if (this.disableStretchToFitOnMobileFlag) {
						var c = Math.min(
							this.scaleRatioMultiplier.x,
							this.scaleRatioMultiplier.y
						);
						this.enableScalingLimitsOnMobileFlag &&
							(c = c.limit(
								this.minScalingOnMobile,
								this.maxScalingOnMobile
							));
						this.mobile.actualSize.x = b.x * c;
						this.mobile.actualSize.y = b.y * c;
						this.scaleRatioMultiplier.x = c;
						this.scaleRatioMultiplier.y = c;
					} else
						(this.sizeRatio.x = this.scaleRatioMultiplier.x),
							(this.sizeRatio.y = this.scaleRatioMultiplier.y),
							(this.scaleRatioMultiplier.x = 1),
							(this.scaleRatioMultiplier.y = 1);
				} else
					(this.desktop.actualSize = new Vector2(
						window.innerWidth,
						window.innerHeight
					)),
						(b = new Vector2(
							this.desktop.actualResolution.x,
							this.desktop.actualResolution.y
						)),
						(this.scaleRatioMultiplier = new Vector2(
							this.desktop.actualSize.x / b.x,
							this.desktop.actualSize.y / b.y
						)),
						this.enableStretchToFitOnDesktopFlag
							? ((this.sizeRatio.x = this.scaleRatioMultiplier.x),
							  (this.sizeRatio.y = this.scaleRatioMultiplier.y),
							  (this.scaleRatioMultiplier.x = 1),
							  (this.scaleRatioMultiplier.y = 1))
							: ((c = Math.min(
									this.scaleRatioMultiplier.x,
									this.scaleRatioMultiplier.y
							  )),
							  this.enableScalingLimitsOnDesktopFlag &&
									(c = c.limit(
										this.minScalingOnDesktop,
										this.maxScalingOnDesktop
									)),
							  (this.desktop.actualSize.x = b.x * c),
							  (this.desktop.actualSize.y = b.y * c),
							  (this.scaleRatioMultiplier.x = c),
							  (this.scaleRatioMultiplier.y = c));
			},
			resizeLayers: function () {
				for (var b = 0; b < this.coreDivsToResize.length; b++) {
					var c = ig.domHandler.getElementById(
						this.coreDivsToResize[b]
					);
					if (ig.ua.mobile)
						if (this.disableStretchToFitOnMobileFlag) {
							var d = Math.floor(
									ig.sizeHandler.windowSize.x / 2 -
										ig.sizeHandler.mobile.actualSize.x / 2
								),
								f = Math.floor(
									ig.sizeHandler.windowSize.y / 2 -
										ig.sizeHandler.mobile.actualSize.y / 2
								);
							0 > d && (d = 0);
							0 > f && (f = 0);
							ig.domHandler.resizeOffset(
								c,
								Math.floor(ig.sizeHandler.mobile.actualSize.x),
								Math.floor(ig.sizeHandler.mobile.actualSize.y),
								d,
								f
							);
							var e = !1;
							if (
								(e = this.portraitMode
									? window.innerHeight < window.innerWidth
									: window.innerHeight > window.innerWidth)
							)
								if (
									this
										.enableStretchToFitOnAntiPortraitModeFlag
								)
									ig.domHandler.resizeOffset(
										c,
										Math.floor(window.innerWidth),
										Math.floor(window.innerHeight),
										0,
										0
									);
								else {
									var e = new Vector2(
											window.innerWidth /
												this.mobile.actualResolution.y,
											window.innerHeight /
												this.mobile.actualResolution.x
										),
										d = Math.min(e.x, e.y),
										e = this.mobile.actualResolution.y * d,
										j = this.mobile.actualResolution.x * d,
										d = Math.floor(
											ig.sizeHandler.windowSize.x / 2 -
												e / 2
										),
										f = Math.floor(
											ig.sizeHandler.windowSize.y / 2 -
												j / 2
										);
									0 > d && (d = 0);
									0 > f && (f = 0);
									ig.domHandler.resizeOffset(
										c,
										Math.floor(e),
										Math.floor(j),
										d,
										f
									);
								}
						} else
							ig.domHandler.resize(
								c,
								Math.floor(ig.sizeHandler.mobile.actualSize.x),
								Math.floor(ig.sizeHandler.mobile.actualSize.y)
							);
					else
						this.enableStretchToFitOnDesktopFlag
							? ig.domHandler.resize(
									c,
									Math.floor(
										ig.sizeHandler.desktop.actualSize.x
									),
									Math.floor(
										ig.sizeHandler.desktop.actualSize.y
									)
							  )
							: ((d = Math.floor(
									ig.sizeHandler.windowSize.x / 2 -
										ig.sizeHandler.desktop.actualSize.x / 2
							  )),
							  (f = Math.floor(
									ig.sizeHandler.windowSize.y / 2 -
										ig.sizeHandler.desktop.actualSize.y / 2
							  )),
							  0 > d && (d = 0),
							  0 > f && (f = 0),
							  ig.domHandler.resizeOffset(
									c,
									Math.floor(
										ig.sizeHandler.desktop.actualSize.x
									),
									Math.floor(
										ig.sizeHandler.desktop.actualSize.y
									),
									d,
									f
							  ));
				}
				for (var n in this.adsToResize)
					(b = ig.domHandler.getElementById('#' + n)),
						(c = ig.domHandler.getElementById('#' + n + '-Box')),
						(e =
							(window.innerWidth -
								this.adsToResize[n]['box-width']) /
								2 +
							'px'),
						(d =
							(window.innerHeight -
								this.adsToResize[n]['box-height']) /
								2 +
							'px'),
						b &&
							ig.domHandler.css(b, {
								width: window.innerWidth,
								height: window.innerHeight,
							}),
						c && ig.domHandler.css(c, { left: e, top: d });
				b = ig.domHandler.getElementById('#canvas');
				c = ig.domHandler.getOffsets(b);
				b = c.left;
				c = c.top;
				e = Math.min(
					ig.sizeHandler.scaleRatioMultiplier.x,
					ig.sizeHandler.scaleRatioMultiplier.y
				);
				for (n in this.dynamicClickableEntityDivs) {
					d = ig.domHandler.getElementById('#' + n);
					if (ig.ua.mobile) {
						var j = this.dynamicClickableEntityDivs[n].entity_pos_x,
							m = this.dynamicClickableEntityDivs[n].entity_pos_y,
							g = this.dynamicClickableEntityDivs[n].width,
							f = this.dynamicClickableEntityDivs[n].height;
						this.disableStretchToFitOnMobileFlag
							? ((j =
									Math.floor(
										b + j * this.scaleRatioMultiplier.x
									) + 'px'),
							  (m =
									Math.floor(
										c + m * this.scaleRatioMultiplier.y
									) + 'px'),
							  (g =
									Math.floor(
										g * this.scaleRatioMultiplier.x
									) + 'px'),
							  (f =
									Math.floor(
										f * this.scaleRatioMultiplier.y
									) + 'px'))
							: ((j = Math.floor(j * this.sizeRatio.x) + 'px'),
							  (m = Math.floor(m * this.sizeRatio.y) + 'px'),
							  (g = Math.floor(g * this.sizeRatio.x) + 'px'),
							  (f = Math.floor(f * this.sizeRatio.y) + 'px'));
					} else
						(j = this.dynamicClickableEntityDivs[n].entity_pos_x),
							(m =
								this.dynamicClickableEntityDivs[n]
									.entity_pos_y),
							(g = this.dynamicClickableEntityDivs[n].width),
							(f = this.dynamicClickableEntityDivs[n].height),
							this.enableStretchToFitOnDesktopFlag
								? ((j =
										Math.floor(j * this.sizeRatio.x) +
										'px'),
								  (m = Math.floor(m * this.sizeRatio.y) + 'px'),
								  (g = Math.floor(g * this.sizeRatio.x) + 'px'),
								  (f = Math.floor(f * this.sizeRatio.y) + 'px'))
								: ((j =
										Math.floor(
											b + j * this.scaleRatioMultiplier.x
										) + 'px'),
								  (m =
										Math.floor(
											c + m * this.scaleRatioMultiplier.y
										) + 'px'),
								  (g =
										Math.floor(
											g * this.scaleRatioMultiplier.x
										) + 'px'),
								  (f =
										Math.floor(
											f * this.scaleRatioMultiplier.y
										) + 'px'));
					ig.domHandler.css(d, {
						float: 'left',
						position: 'absolute',
						left: j,
						top: m,
						width: g,
						height: f,
						'z-index': 3,
					});
					this.dynamicClickableEntityDivs[n]['font-size'] &&
						ig.domHandler.css(d, {
							'font-size':
								this.dynamicClickableEntityDivs[n][
									'font-size'
								] *
									e +
								'px',
						});
				}
				$('#ajaxbar').width(this.windowSize.x);
				$('#ajaxbar').height(this.windowSize.y);
			},
			resize: function () {
				this.sizeCalcs();
				this.resizeLayers();
			},
			reorient: function () {
				console.log('changing orientation ...');
				if (ig.ua.mobile) {
					var b = !1,
						b = this.portraitMode
							? window.innerHeight < window.innerWidth
							: window.innerHeight > window.innerWidth,
						c = this.domHandler.getElementById('#orientate'),
						d = this.domHandler.getElementById('#game');
					b
						? (this.domHandler.show(c),
						  this.domHandler.hide(d),
						  console.log(
								'portrait' +
									window.innerWidth +
									',' +
									window.innerHeight
						  ))
						: (this.domHandler.show(d),
						  this.domHandler.hide(c),
						  console.log(
								'landscape' +
									window.innerWidth +
									',' +
									window.innerHeight
						  ));
				}
				ig.ua.mobile
					? (this.resize(), this.resizeAds())
					: this.resize();
			},
			resizeAds: function () {
				for (var b in this.adsToResize) {
					var c = ig.domHandler.getElementById('#' + b),
						d = ig.domHandler.getElementById('#' + b + '-Box'),
						f =
							(window.innerWidth -
								this.adsToResize[b]['box-width']) /
								2 +
							'px',
						e =
							(window.innerHeight -
								this.adsToResize[b]['box-height']) /
								2 +
							'px';
					c &&
						ig.domHandler.css(c, {
							width: window.innerWidth,
							height: window.innerHeight,
						});
					d && ig.domHandler.css(d, { left: f, top: e });
				}
			},
			samsungFix: function () {
				ig.ua.android &&
					!(
						4.2 >
						parseFloat(
							navigator.userAgent.slice(
								navigator.userAgent.indexOf('Android') + 8,
								navigator.userAgent.indexOf('Android') + 11
							)
						)
					) &&
					!(0 > navigator.userAgent.indexOf('GT')) &&
					!(0 < navigator.userAgent.indexOf('Chrome')) &&
					!(0 < navigator.userAgent.indexOf('Firefox')) &&
					(document.addEventListener(
						'touchstart',
						function (b) {
							b.preventDefault();
							return !1;
						},
						!1
					),
					document.addEventListener(
						'touchmove',
						function (b) {
							b.preventDefault();
							return !1;
						},
						!1
					),
					document.addEventListener(
						'touchend',
						function (b) {
							b.preventDefault();
							return !1;
						},
						!1
					));
			},
			orientationInterval: null,
			orientationTimeout: null,
			orientationHandler: function () {
				this.reorient();
				window.scrollTo(0, 1);
			},
			orientationDelayHandler: function () {
				null == this.orientationInterval &&
					(this.orientationInterval = window.setInterval(
						this.orientationHandler.bind(this),
						100
					));
				null == this.orientationTimeout &&
					(this.orientationTimeout = window.setTimeout(
						function () {
							this.clearAllIntervals();
						}.bind(this),
						2e3
					));
			},
			clearAllIntervals: function () {
				window.clearInterval(this.orientationInterval);
				this.orientationInterval = null;
				window.clearTimeout(this.orientationTimeout);
				this.orientationTimeout = null;
			},
			eventListenerSetup: function () {
				ig.ua.iOS
					? (window.addEventListener(
							'orientationchange',
							this.orientationDelayHandler.bind(this)
					  ),
					  window.addEventListener(
							'resize',
							this.orientationDelayHandler.bind(this)
					  ))
					: (window.addEventListener(
							'orientationchange',
							this.orientationHandler.bind(this)
					  ),
					  window.addEventListener(
							'resize',
							this.orientationHandler.bind(this)
					  ));
				document.ontouchmove = function (b) {
					window.scrollTo(0, 1);
					b.preventDefault();
				};
				this.chromePullDownRefreshFix();
			},
			chromePullDownRefreshFix: function () {
				var b = window.chrome || navigator.userAgent.match('CriOS'),
					c = 'ontouchstart' in document.documentElement;
				if (b && c) {
					var d = (b = !1),
						f = 0,
						e = !1;
					try {
						CSS.supports('overscroll-behavior-y', 'contain') &&
							(b = !0);
					} catch (j) {}
					try {
						if (b)
							return (document.body.style.overscrollBehaviorY =
								'contain');
					} catch (n) {}
					b = document.head || document.body;
					c = document.createElement('style');
					c.type = 'text/css';
					c.styleSheet
						? (c.styleSheet.cssText =
								'\n      ::-webkit-scrollbar {\n        width: 500x;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    ')
						: c.appendChild(
								document.createTextNode(
									'\n      ::-webkit-scrollbar {\n        width: 500px;\n      }\n      ::-webkit-scrollbar-thumb {\n        border-radius: 500px;\n        background-color: rgba(0, 0, 0, 0.2);\n      }\n      body {\n        -webkit-overflow-scrolling: auto!important;\n      }\n    '
								)
						  );
					b.appendChild(c);
					try {
						addEventListener('test', null, {
							get passive() {
								d = !0;
							},
						});
					} catch (m) {}
					document.addEventListener(
						'touchstart',
						function (b) {
							1 === b.touches.length &&
								((f = b.touches[0].clientY),
								(e = 0 === window.pageYOffset));
						},
						!!d && { passive: !0 }
					);
					document.addEventListener(
						'touchmove',
						function (b) {
							var c;
							if ((c = e)) {
								e = !1;
								c = b.touches[0].clientY;
								var d = c - f;
								c = ((f = c), 0 < d);
							}
							if (c) return b.preventDefault();
						},
						!!d && { passive: !1 }
					);
				}
			},
		});
	});
ig.baked = !0;
ig.module('plugins.handlers.api-handler').defines(function () {
	ig.ApiHandler = ig.Class.extend({
		apiAvailable: {
			MJSPreroll: function () {
				ig.ua.mobile &&
					ig.domHandler.JQUERYAVAILABLE &&
					_SETTINGS &&
					_SETTINGS.Ad.Mobile.Preroll.Enabled &&
					MobileAdInGamePreroll.Initialize();
			},
			MJSHeader: function () {
				ig.ua.mobile &&
					ig.domHandler.JQUERYAVAILABLE &&
					_SETTINGS.Ad.Mobile.Header.Enabled &&
					MobileAdInGameHeader.Initialize();
			},
			MJSFooter: function () {
				ig.ua.mobile &&
					ig.domHandler.JQUERYAVAILABLE &&
					_SETTINGS.Ad.Mobile.Footer.Enabled &&
					MobileAdInGameFooter.Initialize();
			},
			MJSEnd: function () {
				ig.ua.mobile &&
					ig.domHandler.JQUERYAVAILABLE &&
					_SETTINGS.Ad.Mobile.End.Enabled &&
					MobileAdInGameEnd.Initialize();
			},
		},
		run: function (b, c) {
			if (this.apiAvailable[b]) this.apiAvailable[b](c);
		},
	});
});
ig.baked = !0;
ig.module('plugins.audio.sound-player').defines(function () {
	SoundPlayer = ig.Class.extend({
		tagName: 'SoundPlayer',
		stayMuteFlag: !1,
		debug: !1,
		init: function () {
			this.debug && console.log(this.tagName);
		},
		play: function (b) {
			this.debug && console.log('play sound ', b);
		},
		stop: function () {
			this.debug && console.log('stop sound ');
		},
		volume: function () {
			this.debug && console.log('set volume');
		},
		mute: function (b) {
			this.debug && console.log('mute');
			'undefined' === typeof b
				? (this.stayMuteFlag = !0)
				: b && (this.stayMuteFlag = !0);
		},
		unmute: function (b) {
			this.debug && console.log('unmute');
			'undefined' === typeof b
				? (this.stayMuteFlag = !1)
				: b && (this.stayMuteFlag = !1);
		},
	});
});
ig.baked = !0;
ig.module('plugins.audio.impact-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		ImpactMusicPlayer = SoundPlayer.extend({
			tagName: 'ImpactMusicPlayer',
			bgmPlaying: !1,
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b)
					(this.soundList[d] = d), ig.music.add(b[d].path + '.*', d);
				c && c.loop && (ig.music.loop = c.loop);
			},
			play: function (b) {
				this.stayMuteFlag ||
					((this.bgmPlaying = !0),
					'undefined' === typeof b
						? ig.music.play(b)
						: ig.music.play());
			},
			stop: function () {
				this.bgmPlaying = !1;
				ig.music.pause();
			},
			volume: function (b) {
				console.log('impactmusic:', b);
				ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
			},
			getVolume: function () {
				return ig.music.volume;
			},
			mute: function (b) {
				this.parent(b);
				this.bgmPlaying && this.stop();
			},
			unmute: function (b) {
				this.parent(b);
				this.play();
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.impact-sound-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		ImpactSoundPlayer = SoundPlayer.extend({
			tagName: 'ImpactSoundPlayer',
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var f = new ig.Sound(b[d].path + '.*');
					this.soundList[d] = f;
				}
			},
			play: function (b) {
				this.stayMuteFlag ||
					('object' === typeof b
						? (console.log(b + ' exists'), b.play())
						: 'string' === typeof b && this.soundList[b].play());
			},
			stop: function (b) {
				this.parent(b);
				b.stop();
			},
			volume: function (b) {
				ig.soundManager.volume =
					0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
			},
			getVolume: function () {
				return ig.soundManager.volume;
			},
			mute: function (b) {
				this.parent(b);
				ig.Sound.enabled = !1;
			},
			unmute: function (b) {
				this.parent(b);
				ig.Sound.enabled = !0;
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.howler-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		HowlerPlayer = SoundPlayer.extend({
			tagName: 'HowlerPlayer',
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var f = b[d].path,
						f = new Howl({
							src: [
								f + '.' + ig.Sound.FORMAT.OGG.ext,
								f + '.' + ig.Sound.FORMAT.MP3.ext,
							],
						});
					this.soundList[d] = f;
				}
			},
			play: function (b) {
				this.stayMuteFlag ||
					('object' === typeof b
						? b.play()
						: 'string' === typeof b && this.soundList[b].play());
			},
			stop: function (b) {
				this.parent(b);
				'object' === typeof b
					? b.stop()
					: 'string' === typeof b && this.soundList[b].stop();
			},
			volume: function (b) {
				for (var c in this.soundList) {
					if (0 > b) {
						this.soundList[c].volume(0);
						break;
					}
					isNaN(b)
						? this.soundList[c].volume(1)
						: 1 < b
						? this.soundList[c].volume(1)
						: this.soundList[c].volume(b);
				}
			},
			getVolume: function () {
				for (var b in this.soundList) return this.soundList[b].volume();
			},
			mute: function (b) {
				this.parent(b);
				Howler.mute(!0);
			},
			unmute: function (b) {
				this.parent(b);
				Howler.mute(!1);
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.howler-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		HowlerMusicPlayer = SoundPlayer.extend({
			tagName: 'HowlerMusicPlayer',
			bgmPlaying: !1,
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var f = b[d].path,
						f = new Howl({
							src: [
								f + '.' + ig.Sound.FORMAT.OGG.ext,
								f + '.' + ig.Sound.FORMAT.MP3.ext,
							],
							loop: !0,
							autoplay: !1,
							onend: function () {}.bind(this),
						});
					this.soundList[d] = f;
				}
			},
			play: function (b) {
				if (!this.stayMuteFlag && !this.bgmPlaying)
					if ('object' === typeof b) (this.bgmPlaying = !0), b.play();
					else if ('string' === typeof b)
						(this.bgmPlaying = !0), this.soundList[b].play();
					else
						for (var c in this.soundList) {
							this.soundList[c].play();
							this.bgmPlaying = !0;
							break;
						}
			},
			stop: function (b) {
				this.parent(b);
				if (this.bgmPlaying) {
					for (var c in this.soundList) this.soundList[c].stop();
					this.bgmPlaying = !1;
				}
			},
			volume: function (b) {
				console.log('howler', b);
				for (var c in this.soundList) {
					if (0 > b) {
						this.soundList[c].volume(0);
						break;
					}
					isNaN(b)
						? this.soundList[c].volume(1)
						: 1 < b
						? this.soundList[c].volume(1)
						: this.soundList[c].volume(b);
				}
			},
			getVolume: function () {
				for (var b in this.soundList) return this.soundList[b].volume();
			},
			mute: function (b) {
				this.parent(b);
				Howler.mute(!0);
			},
			unmute: function (b) {
				this.parent(b);
				Howler.mute(!1);
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.jukebox-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		JukeboxPlayer = SoundPlayer.extend({
			tagName: 'JukeboxPlayer',
			bgmPlaying: !1,
			soundList: {},
			jukeboxPlayer: null,
			pausePosition: 0,
			premuteVolume: 0,
			minVolume: 0.001,
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					this.soundList[d] = d;
					var f = b[d].path;
					this.jukeboxPlayer = new jukebox.Player({
						resources: [
							f + '.' + ig.Sound.FORMAT.OGG.ext,
							f + '.' + ig.Sound.FORMAT.MP3.ext,
						],
						autoplay: !1,
						spritemap: {
							music: {
								start: b[d].startMp3,
								end: b[d].endMp3,
								loop: !0,
							},
						},
					});
				}
			},
			play: function () {
				this.stayMuteFlag ||
					((this.bgmPlaying = !0),
					this.pausePosition
						? (console.log('resume'),
						  this.jukeboxPlayer.resume(this.pausePosition))
						: (console.log('play'),
						  this.jukeboxPlayer.play(
								this.jukeboxPlayer.settings.spritemap.music
									.start,
								!0
						  )),
					(this.premuteVolume = this.getVolume()));
			},
			stop: function () {
				this.bgmPlaying = !1;
				this.pausePosition = this.jukeboxPlayer.pause();
			},
			volume: function (b) {
				console.log('jukebox:', b);
				0 >= b
					? this.jukeboxPlayer.setVolume(this.minVolume)
					: isNaN(b)
					? this.jukeboxPlayer.setVolume(1)
					: 1 < b
					? this.jukeboxPlayer.setVolume(1)
					: this.jukeboxPlayer.setVolume(b);
			},
			getVolume: function () {
				return this.jukeboxPlayer.getVolume();
			},
			mute: function (b) {
				this.parent(b);
				this.bgmPlaying &&
					(console.log('jukebox', this.premuteVolume),
					this.stayMuteFlag ||
						(this.premuteVolume = this.getVolume()),
					this.jukeboxPlayer.pause(),
					this.jukeboxPlayer.setVolume(this.minVolume));
			},
			unmute: function (b) {
				this.parent(b);
				this.stayMuteFlag ||
					(console.log('jukebox', this.premuteVolume),
					this.jukeboxPlayer.setVolume(this.premuteVolume),
					this.jukeboxPlayer.resume());
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.webaudio-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		WebaudioMusicPlayer = SoundPlayer.extend({
			tagName: 'WebaudioMusicPlayer',
			bgmPlaying: !1,
			isSupported: !1,
			muteFlag: !1,
			pausedTime: 0,
			webaudio: null,
			useHTML5Audio: !1,
			audio: null,
			inactiveAudio: null,
			codecs: null,
			reinitOnPlay: !1,
			inputList: null,
			_volume: 1,
			soundList: {},
			init: function (b) {
				this.webaudio = {
					compatibility: {},
					gainNode: null,
					buffer: null,
					source_loop: {},
					source_once: {},
				};
				try {
					Howler && Howler.ctx
						? (this.webaudio.context = Howler.ctx)
						: ig && ig.webaudio_ctx
						? (this.webaudio.context = ig.webaudio_ctx)
						: ((this.AudioContext =
								window.AudioContext ||
								window.webkitAudioContext),
						  (this.webaudio.context = new this.AudioContext()),
						  (ig.webaudio_ctx = this.webaudio.context)),
						(this.isSupported = !0);
				} catch (c) {
					console.log('Web Audio API not supported in this browser.'),
						(this.webaudio = null),
						(this.useHTML5Audio = !0);
				}
				if (this.useHTML5Audio)
					if ('undefined' !== typeof Audio)
						try {
							new Audio();
						} catch (d) {
							this.useHTML5Audio = !1;
						}
					else this.useHTML5Audio = !1;
				this.useHTML5Audio &&
					((this.audio = new Audio()),
					(this.isSupported = !0),
					this.initHTML5Audio(b));
				if (!this.isSupported) return null;
				this.webaudio && ((this.inputList = b), this.initWebAudio(b));
			},
			initWebAudio: function (b) {
				ig.ua.iOS && this.initIOSWebAudioUnlock();
				this.webaudio.gainNode = this.webaudio.context.createGain();
				this.webaudio.gainNode.connect(
					this.webaudio.context.destination
				);
				this.webaudio.gainNode.gain.value = this._volume;
				this.webaudio.buffer = null;
				var c = 'start',
					d = 'stop',
					f = this.webaudio.context.createBufferSource();
				'function' !== typeof f.start && (c = 'noteOn');
				this.webaudio.compatibility.start = c;
				'function' !== typeof f.stop && (d = 'noteOff');
				this.webaudio.compatibility.stop = d;
				for (var e in b) {
					this.soundList[e] = e;
					var d = b[e].path,
						c = d + '.' + ig.Sound.FORMAT.MP3.ext,
						j = d + '.' + ig.Sound.FORMAT.OGG.ext;
					ig.ua.mobile
						? ig.ua.iOS && (j = c)
						: ((d = navigator.userAgent.toLowerCase()),
						  -1 != d.indexOf('safari') &&
								-1 >= d.indexOf('chrome') &&
								(j = c),
						  d.indexOf('win64') && (j = c));
					var n = new XMLHttpRequest();
					n.open('GET', j, !0);
					n.responseType = 'arraybuffer';
					n.onload = function () {
						this.webaudio.context.decodeAudioData(
							n.response,
							function (b) {
								this.webaudio.buffer = b;
								this.webaudio.source_loop = {};
								this.bgmPlaying
									? this.play(null, !0)
									: this.stop();
							}.bind(this),
							function () {
								console.log(
									'Error decoding audio "' + j + '".'
								);
							}
						);
					}.bind(this);
					n.send();
					if (4 == n.readyState && 'undefined' !== typeof Audio) {
						this.useHTML5Audio = !0;
						try {
							new Audio();
						} catch (m) {
							this.useHTML5Audio = !1;
						}
						this.useHTML5Audio &&
							(console.log('Using HTML5 Audio'),
							(this.webaudio = null),
							(this.audio = new Audio()),
							(this.isSupported = !0),
							this.initHTML5Audio(b));
					}
					break;
				}
			},
			initIOSWebAudioUnlock: function () {
				if (this.webaudio) {
					webaudio = this.webaudio;
					var b = function () {
						var c = webaudio.context,
							d = c.createBuffer(1, 1, 22050),
							f = c.createBufferSource();
						f.buffer = d;
						f.connect(c.destination);
						'undefined' === typeof f.start
							? f.noteOn(0)
							: f.start(0);
						setTimeout(
							function () {
								(f.playbackState === f.PLAYING_STATE ||
									f.playbackState === f.FINISHED_STATE) &&
									window.removeEventListener(
										'touchend',
										b,
										!1
									);
							}.bind(this),
							0
						);
					};
					window.addEventListener('touchend', b, !1);
				}
			},
			initHTML5Audio: function (b) {
				if (this.useHTML5Audio && this.audio) {
					var c = this.audio;
					this.codecs = {};
					this.codecs = {
						mp3: !!c.canPlayType('audio/mpeg;').replace(/^no$/, ''),
						opus: !!c
							.canPlayType('audio/ogg; codecs="opus"')
							.replace(/^no$/, ''),
						ogg: !!c
							.canPlayType('audio/ogg; codecs="vorbis"')
							.replace(/^no$/, ''),
						wav: !!c
							.canPlayType('audio/wav; codecs="1"')
							.replace(/^no$/, ''),
						aac: !!c.canPlayType('audio/aac;').replace(/^no$/, ''),
						m4a: !!(
							c.canPlayType('audio/x-m4a;') ||
							c.canPlayType('audio/m4a;') ||
							c.canPlayType('audio/aac;')
						).replace(/^no$/, ''),
						mp4: !!(
							c.canPlayType('audio/x-mp4;') ||
							c.canPlayType('audio/mp4;') ||
							c.canPlayType('audio/aac;')
						).replace(/^no$/, ''),
						weba: !!c
							.canPlayType('audio/webm; codecs="vorbis"')
							.replace(/^no$/, ''),
					};
					this.is = {
						ff: Boolean(
							null != window.mozInnerScreenX &&
								/firefox/.test(
									navigator.userAgent.toLowerCase()
								)
						),
						ie: Boolean(document.all && !window.opera),
						opera: Boolean(window.opera),
						chrome: Boolean(window.chrome),
						safari: Boolean(
							!window.chrome &&
								/safari/.test(
									navigator.userAgent.toLowerCase()
								) &&
								window.getComputedStyle &&
								!window.globalStorage &&
								!window.opera
						),
					};
					this.playDelay = -60;
					this.stopDelay = 30;
					this.is.chrome && (this.playDelay = -25);
					this.is.chrome && (this.stopDelay = 25);
					this.is.ff && (this.playDelay = -25);
					this.is.ff && (this.stopDelay = 85);
					this.is.opera && (this.playDelay = 5);
					this.is.opera && (this.stopDelay = 0);
					for (var d in b) {
						this.soundList[d] = d;
						var f = b[d].path,
							c = f + '.' + ig.Sound.FORMAT.OGG.ext,
							f = f + '.' + ig.Sound.FORMAT.MP3.ext,
							e = null;
						this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()]
							? (e = c)
							: this.codecs[
									ig.Sound.FORMAT.MP3.ext.toLowerCase()
							  ] && (e = f);
						if (e) {
							ig.ua.mobile
								? ig.ua.iOS && (e = f)
								: ((b = navigator.userAgent.toLowerCase()),
								  -1 != b.indexOf('safari') &&
										-1 >= b.indexOf('chrome') &&
										(e = f));
							this.audio.addEventListener(
								'error',
								function () {
									this.audio.error &&
										4 === this.audio.error.code &&
										(this.isSupported = !1);
								},
								!1
							);
							this.audio.src = e;
							this.audio._pos = 0;
							this.audio.preload = 'auto';
							this.audio.volume = this._volume;
							this.inactiveAudio = new Audio();
							this.inactiveAudio.src = e;
							this.inactiveAudio._pos = 0;
							this.inactiveAudio.preload = 'auto';
							this.inactiveAudio.volume = this._volume;
							this.inactiveAudio.load();
							var j = function () {
								this._duration = this.audio.duration;
								this._loaded || (this._loaded = !0);
								this.bgmPlaying
									? this.play(null, !0)
									: this.stop();
								this.audio.removeEventListener(
									'canplaythrough',
									j,
									!1
								);
							}.bind(this);
							this.audio.addEventListener(
								'canplaythrough',
								j,
								!1
							);
							this.audio.load();
							break;
						}
					}
				}
			},
			play: function (b, c) {
				if (this.isSupported)
					if (((this.bgmPlaying = !0), this.webaudio)) {
						if (
							!c &&
							this.reinitOnPlay &&
							this.webaudio.source_loop.buffer ==
								this.webaudio.buffer
						) {
							if (
								this.webaudio.source_loop._playing &&
								(this.webaudio.source_loop[
									this.webaudio.compatibility.stop
								](0),
								(this.webaudio.source_loop._playing = !1),
								(this.pausedTime +=
									this.webaudio.context.currentTime -
									this.webaudio.source_loop._startTime),
								(this.pausedTime %=
									this.webaudio.source_loop.buffer.duration),
								(this.webaudio.source_loop._startTime = 0),
								'noteOn' === this.webaudio.compatibility.start)
							)
								this.webaudio.source_once[
									this.webaudio.compatibility.stop
								](0);
							try {
								this.webaudio.context.close();
								this.webaudio.context = new this.AudioContext();
								this.webaudio.gainNode =
									this.webaudio.context.createGain();
								this.webaudio.gainNode.connect(
									this.webaudio.context.destination
								);
								this.webaudio.gainNode.gain.value =
									this._volume;
								var d = 'start',
									f = 'stop',
									e =
										this.webaudio.context.createBufferSource();
								'function' !== typeof e.start && (d = 'noteOn');
								this.webaudio.compatibility.start = d;
								'function' !== typeof e.stop && (f = 'noteOff');
								this.webaudio.compatibility.stop = f;
								this.webaudio.source_loop = {};
								this.play(null, !0);
							} catch (j) {}
						}
						if (this.webaudio.buffer) {
							if (
								!this.muteFlag &&
								((this.bgmPlaying = !0),
								!this.webaudio.source_loop._playing)
							) {
								this.webaudio.source_loop =
									this.webaudio.context.createBufferSource();
								this.webaudio.source_loop.buffer =
									this.webaudio.buffer;
								this.webaudio.source_loop.loop = !0;
								this.webaudio.source_loop.connect(
									this.webaudio.gainNode
								);
								if (null == b || isNaN(b))
									(b = 0),
										this.pausedTime &&
											(b = this.pausedTime);
								this.webaudio.source_loop._startTime =
									this.webaudio.context.currentTime;
								if (
									'noteOn' ===
									this.webaudio.compatibility.start
								)
									(this.webaudio.source_once =
										this.webaudio.context.createBufferSource()),
										(this.webaudio.source_once.buffer =
											this.webaudio.buffer),
										this.webaudio.source_once.connect(
											this.webaudio.gainNode
										),
										this.webaudio.source_once.noteGrainOn(
											0,
											b,
											this.webaudio.buffer.duration - b
										),
										this.webaudio.source_loop[
											this.webaudio.compatibility.start
										](
											this.webaudio.context.currentTime +
												(this.webaudio.buffer.duration -
													b)
										);
								else
									this.webaudio.source_loop[
										this.webaudio.compatibility.start
									](0, b);
								this.webaudio.source_loop._playing = !0;
							}
						} else this.bgmPlaying = !0;
					} else if (this.audio) {
						var n = this.audio;
						if (!this.muteFlag)
							if (
								((this.bgmPlaying = !0),
								isNaN(b) &&
									((b = 0),
									this.pausedTime && (b = this.pausedTime)),
								(d = this._duration - b),
								this._onEndTimer &&
									(clearTimeout(this._onEndTimer),
									(this._onEndTimer = null)),
								(this._onEndTimer = setTimeout(
									function () {
										this.audio.currentTime = 0;
										this.audio.pause();
										this.pausedTime = 0;
										if (this.inactiveAudio) {
											var b = this.audio;
											this.audio = this.inactiveAudio;
											this.inactiveAudio = b;
										}
										this.play();
									}.bind(this),
									1e3 * d + this.playDelay
								)),
								4 === n.readyState ||
									(!n.readyState && navigator.isCocoonJS))
							)
								(n.readyState = 4),
									(n.currentTime = b),
									(n.muted = this.muteFlag || n.muted),
									(n.volume = this._volume),
									setTimeout(function () {
										n.play();
									}, 0);
							else {
								clearTimeout(this._onEndTimer);
								this._onEndTimer = null;
								var m = function () {
									typeof ('function' == this.play) &&
										(this.play(),
										n.removeEventListener(
											'canplaythrough',
											m,
											!1
										));
								}.bind(this);
								n.addEventListener('canplaythrough', m, !1);
							}
					}
			},
			stop: function () {
				this.bgmPlaying = !1;
				if (this.isSupported)
					if (this.webaudio) {
						if (
							this.webaudio.source_loop._playing &&
							(this.webaudio.source_loop[
								this.webaudio.compatibility.stop
							](0),
							(this.webaudio.source_loop._playing = !1),
							(this.pausedTime +=
								this.webaudio.context.currentTime -
								this.webaudio.source_loop._startTime),
							(this.pausedTime %=
								this.webaudio.source_loop.buffer.duration),
							(this.webaudio.source_loop._startTime = 0),
							'noteOn' === this.webaudio.compatibility.start)
						)
							this.webaudio.source_once[
								this.webaudio.compatibility.stop
							](0);
					} else if (this.audio) {
						var b = this.audio;
						4 == b.readyState &&
							((this.pausedTime = b.currentTime),
							(b.currentTime = 0),
							b.pause(),
							clearTimeout(this._onEndTimer),
							(this._onEndTimer = null));
					}
			},
			volume: function (b) {
				if (isNaN(b) || null == b) return this.getVolume();
				this.isSupported &&
					((this._volume = b),
					0 > this._volume
						? (this._volume = 0)
						: 1 < this._volume && (this._volume = 1),
					this.webaudio
						? this.webaudio.gainNode &&
						  (this.webaudio.gainNode.gain.value = this._volume)
						: this.audio &&
						  ((this.audio.volume = this._volume),
						  this.inactiveAudio &&
								(this.inactiveAudio.volume = this._volume)));
			},
			getVolume: function () {
				return !this.isSupported ? 0 : this._volume;
			},
			mute: function (b) {
				this.parent(b);
				!1 == this.muteFlag &&
					((this.muteFlag = !0),
					this.bgmPlaying && (this.stop(), (this.bgmPlaying = !0)));
			},
			unmute: function (b) {
				this.parent(b);
				!this.stayMuteFlag &&
					!0 == this.muteFlag &&
					((this.muteFlag = !1), this.bgmPlaying && this.play());
			},
		});
	});
ig.baked = !0;
ig.module('plugins.audio.sound-info').defines(function () {
	SoundInfo = ig.Class.extend({
		FORMATS: { OGG: '.ogg', MP3: '.mp3' },
		sfx: {
			kittyopeningSound: { path: 'media/audio/opening/kittyopening' },
			staticSound: { path: 'media/audio/play/static' },
			openingSound: { path: 'media/audio/opening/opening' },
			click: { path: 'media/audio/sound/click' },
			ropeOn: { path: 'media/audio/sound/rope-on' },
			ropeOff: { path: 'media/audio/sound/rope-off' },
			lose: { path: 'media/audio/sound/lose' },
			win: { path: 'media/audio/sound/win' },
			bounce: { path: 'media/audio/sound/bounce' },
		},
		bgm: {
			background: {
				path: 'media/audio/bgm',
				startOgg: 0,
				endOgg: 21.463,
				startMp3: 0,
				endMp3: 21.463,
			},
		},
	});
});
ig.baked = !0;
ig.module('plugins.audio.sound-handler')
	.requires(
		'plugins.audio.impact-music-player',
		'plugins.audio.impact-sound-player',
		'plugins.audio.howler-player',
		'plugins.audio.howler-music-player',
		'plugins.audio.jukebox-player',
		'plugins.audio.webaudio-music-player',
		'plugins.audio.sound-info'
	)
	.defines(function () {
		ig.SoundHandler = ig.Class.extend({
			bgmPlayer: null,
			sfxPlayer: null,
			focusBlurMute: !1,
			soundInfo: new SoundInfo(),
			init: function () {
				console.log('Initiating sound handler');
				this.initWindowHandler();
				ig.ua.mobile
					? (this.initPowerButtonFix(),
					  (this.bgmPlayer = new WebaudioMusicPlayer(
							this.soundInfo.bgm,
							{ loop: !0 }
					  )),
					  this.bgmPlayer.isSupported ||
							(this.bgmPlayer = new JukeboxPlayer(
								this.soundInfo.bgm,
								{ loop: !0 }
							)))
					: ((this.bgmPlayer = new WebaudioMusicPlayer(
							this.soundInfo.bgm,
							{ loop: !0 }
					  )),
					  this.bgmPlayer.isSupported ||
							(this.bgmPlayer = new ImpactMusicPlayer(
								this.soundInfo.bgm,
								{ loop: !0 }
							)));
				this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx);
			},
			checkBGM: function () {
				return this.bgmPlayer.stayMuteFlag;
			},
			checkSFX: function () {
				return this.sfxPlayer.stayMuteFlag;
			},
			muteSFX: function (b) {
				this.sfxPlayer && this.sfxPlayer.mute(b);
			},
			muteBGM: function (b) {
				this.bgmPlayer && this.bgmPlayer.mute(b);
			},
			unmuteSFX: function (b) {
				this.sfxPlayer && this.sfxPlayer.unmute(b);
			},
			unmuteBGM: function (b) {
				this.bgmPlayer && this.bgmPlayer.unmute(b);
			},
			muteAll: function (b) {
				this.muteSFX(b);
				this.muteBGM(b);
			},
			unmuteAll: function (b) {
				ig.gd.isFreez || (this.unmuteSFX(b), this.unmuteBGM(b));
			},
			forceMuteAll: function () {
				this.focusBlurMute || this.muteAll(!1);
				this.focusBlurMute = !0;
			},
			forceUnMuteAll: function () {
				!ig.gd.isFreez &&
					this.focusBlurMute &&
					(this.unmuteAll(!1), (this.focusBlurMute = !1));
			},
			initWindowHandler: function () {
				'true' === ig.domHandler.getQueryVariable('webview')
					? ($(window).focus(function () {
							if (ig.game) {
								if (ig.gd.isFreez) return;
								ig.game.resumeGame();
							}
							ig.soundHandler &&
								!ig.gd.isFreez &&
								ig.soundHandler.forceUnMuteAll();
					  }),
					  $(window).blur(function () {
							ig.game && ig.game.pauseGame();
							ig.soundHandler && ig.soundHandler.forceMuteAll();
					  }))
					: ((window.onfocus = function () {
							if (ig.game) {
								if (ig.gd.isFreez) return;
								ig.game.resumeGame();
							}
							ig.soundHandler &&
								!ig.gd.isFreez &&
								ig.soundHandler.forceUnMuteAll();
					  }),
					  (window.onblur = function () {
							ig.game && ig.game.pauseGame();
							ig.soundHandler && ig.soundHandler.forceMuteAll();
					  }));
			},
			initPowerButtonFix: function () {
				var b = this.getHiddenProp();
				b &&
					((b = b.replace(/[H|h]idden/, '') + 'visibilitychange'),
					document.addEventListener(b, this.visChange));
				window.addEventListener(
					'pagehide',
					function () {
						ig.soundHandler && ig.soundHandler.forceMuteAll();
					},
					!1
				);
				window.addEventListener(
					'pageshow',
					function () {
						ig.soundHandler &&
							!ig.gd.isFreez &&
							ig.soundHandler.forceUnMuteAll();
					},
					!1
				);
			},
			getHiddenProp: function () {
				var b = ['webkit', 'moz', 'ms', 'o'];
				if ('hidden' in document) return 'hidden';
				for (var c = 0; c < b.length; c++)
					if (b[c] + 'Hidden' in document) return b[c] + 'Hidden';
				return null;
			},
			isHidden: function () {
				var b = this.getHiddenProp();
				return !b ? !1 : document[b];
			},
			visChange: function () {
				ig.soundHandler.isHidden()
					? ig.soundHandler && ig.soundHandler.forceMuteAll()
					: ig.soundHandler &&
					  !ig.gd.isFreez &&
					  ig.soundHandler.forceUnMuteAll();
			},
			saveVolume: function () {
				this.sfxPlayer &&
					ig.game.io.storageSet(
						'soundVolume',
						this.sfxPlayer.getVolume()
					);
				this.bgmPlayer &&
					ig.game.io.storageSet(
						'musicVolume',
						this.bgmPlayer.getVolume()
					);
			},
			forceLoopBGM: function () {
				var b;
				if (
					!this.focusBlurMute &&
					this.bgmPlayer.bgmPlaying &&
					this.bgmPlayer
				) {
					var c = this.bgmPlayer.jukeboxPlayer;
					if (c) {
						null != window.mozInnerScreenX &&
							/firefox/.test(navigator.userAgent.toLowerCase());
						b = Boolean(window.chrome);
						!window.chrome &&
							/safari/.test(navigator.userAgent.toLowerCase());
						var d = 0.1;
						ig.ua.mobile &&
							((d = 0.115),
							ig.ua.android && ((d = 0.45), b && (d = 0.3)));
						c.settings.spritemap.music &&
							((b = c.settings.spritemap.music.end - d),
							c.getCurrentTime() >= b &&
								((b = c.settings.spritemap.music.start),
								ig.ua.android
									? this.forcelooped ||
									  (c.play(b, !0),
									  (this.forcelooped = !0),
									  setTimeout(function () {
											ig.soundHandler.forcelooped = !1;
									  }, d))
									: c.setCurrentTime(b)));
					} else
						'ImpactMusicPlayer' == this.bgmPlayer.tagName &&
							(null != window.mozInnerScreenX &&
								/firefox/.test(
									navigator.userAgent.toLowerCase()
								),
							(b = Boolean(window.chrome)),
							!window.chrome &&
								/safari/.test(
									navigator.userAgent.toLowerCase()
								),
							(d = 0.1),
							ig.ua.mobile &&
								((d = 0.115),
								ig.ua.android && ((d = 0.45), b && (d = 0.3))),
							(c = 0),
							'mp3' == ig.soundManager.format.ext && (c = 0.05),
							ig.music.currentTrack &&
								((b = ig.music.currentTrack.duration - d),
								ig.music.currentTrack.currentTime >= b &&
									(ig.ua.android
										? this.forcelooped ||
										  (ig.music.currentTrack.pause(),
										  (ig.music.currentTrack.currentTime =
												c),
										  ig.music.currentTrack.play(),
										  (this.forcelooped = !0),
										  setTimeout(function () {
												ig.soundHandler.forcelooped =
													!1;
										  }, d))
										: (ig.music.currentTrack.currentTime =
												c))));
				}
			},
		});
	});
ig.baked = !0;
ig.module('plugins.io.storage').defines(function () {
	ig.Storage = ig.Class.extend({
		staticInstantiate: function () {
			return !ig.Storage.instance ? null : ig.Storage.instance;
		},
		init: function () {
			ig.Storage.instance = this;
		},
		isCapable: function () {
			return 'undefined' !== typeof window.localStorage;
		},
		isSet: function (b) {
			return null !== this.get(b);
		},
		initUnset: function (b, c) {
			null === this.get(b) && this.set(b, c);
		},
		get: function (b) {
			if (!this.isCapable()) return null;
			try {
				return JSON.parse(localStorage.getItem(b));
			} catch (c) {
				return window.localStorage.getItem(b);
			}
		},
		getInt: function (b) {
			return ~~this.get(b);
		},
		getFloat: function (b) {
			return parseFloat(this.get(b));
		},
		getBool: function (b) {
			return !!this.get(b);
		},
		key: function (b) {
			return this.isCapable() ? window.localStorage.key(b) : null;
		},
		set: function (b, c) {
			if (!this.isCapable()) return null;
			try {
				window.localStorage.setItem(b, JSON.stringify(c));
			} catch (d) {
				console.log(d);
			}
		},
		setHighest: function (b, c) {
			c > this.getFloat(b) && this.set(b, c);
		},
		remove: function (b) {
			if (!this.isCapable()) return null;
			window.localStorage.removeItem(b);
		},
		clear: function () {
			if (!this.isCapable()) return null;
			window.localStorage.clear();
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.mouse').defines(function () {
	Mouse = ig.Class.extend({
		bindings: { click: [ig.KEY.MOUSE1] },
		init: function () {
			ig.input.initMouse();
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++)
					ig.input.bind(this.bindings[b][c], b);
			}
		},
		getPos: function () {
			if (ig.ua.mobile) {
				var b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x,
					c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
				return new Vector2(
					b / ig.sizeHandler.scaleRatioMultiplier.x,
					c / ig.sizeHandler.scaleRatioMultiplier.y
				);
			}
			b = ig.input.mouse.x / ig.sizeHandler.sizeRatio.x;
			c = ig.input.mouse.y / ig.sizeHandler.sizeRatio.y;
			return new Vector2(b, c);
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.keyboard').defines(function () {
	Keyboard = ig.Class.extend({
		bindings: {
			jump: [ig.KEY.W, ig.KEY.UP_ARROW],
			moveright: [ig.KEY.D, ig.KEY.RIGHT_ARROW],
			moveleft: [ig.KEY.A, ig.KEY.LEFT_ARROW],
			shoot: [ig.KEY.S, ig.KEY.DOWN_ARROW, ig.KEY.SPACE],
		},
		init: function () {
			for (var b in this.bindings) {
				this[b] = b;
				for (var c = 0; c < this.bindings[b].length; c++)
					ig.input.bind(this.bindings[b][c], b);
			}
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.gamepad-input').defines(function () {
	ig.PADKEY = {
		BUTTON_0: 0,
		PADBUTTON_1: 1,
		BUTTON_2: 2,
		BUTTON_3: 3,
		BUTTON_LEFT_BUMPER: 4,
		BUTTON_RIGHT_BUMPER: 5,
		BUTTON_LEFT_TRIGGER: 6,
		BUTTON_RIGHT_TRIGGER: 7,
		BUTTON_LEFT_JOYSTICK: 10,
		BUTTON_RIGHT_JOYSTICK: 11,
		BUTTON_DPAD_UP: 12,
		BUTTON_DPAD_DOWN: 13,
		BUTTON_DPAD_LEFT: 14,
		BUTTON_DPAD_RIGHT: 15,
		BUTTON_MENU: 16,
		AXIS_LEFT_JOYSTICK_X: 0,
		AXIS_LEFT_JOYSTICK_Y: 1,
		AXIS_RIGHT_JOYSTICK_X: 2,
		AXIS_RIGHT_JOYSTICK_Y: 3,
	};
	ig.GamepadInput = ig.Class.extend({
		isInit: !1,
		isSupported: !1,
		list: [],
		bindings: {},
		states: {},
		presses: {},
		releases: {},
		downLocks: {},
		upLocks: {},
		leftStick: { x: 0, y: 0 },
		rightStick: { x: 0, y: 0 },
		start: function () {
			if (!this.isInit) {
				this.isInit = !0;
				var b = navigator.getGamepads || navigator.webkitGetGamepads;
				b &&
					(!navigator.getGamepads &&
						navigator.webkitGetGamepads &&
						(navigator.getGamepads = navigator.webkitGetGamepads),
					(this.list = navigator.getGamepads()));
				this.isSupported = b;
			}
		},
		isAvailable: function () {
			return this.isInit && this.isSupported;
		},
		buttonPressed: function (b) {
			return 'object' == typeof b ? b.pressed : 1 == b;
		},
		buttonDown: function (b) {
			if ((b = this.bindings[b]))
				(this.states[b] = !0),
					this.downLocks[b] ||
						((this.presses[b] = !0), (this.downLocks[b] = !0));
		},
		buttonUp: function (b) {
			if ((b = this.bindings[b]) && this.downLocks[b] && !this.upLocks[b])
				(this.states[b] = !1),
					(this.releases[b] = !0),
					(this.upLocks[b] = !0);
		},
		clearPressed: function () {
			for (var b in this.releases)
				(this.states[b] = !1), (this.downLocks[b] = !1);
			this.releases = {};
			this.presses = {};
			this.upLocks = {};
		},
		bind: function (b, c) {
			this.bindings[b] = c;
		},
		unbind: function (b) {
			this.releases[this.bindings[b]] = !0;
			this.bindings[b] = null;
		},
		unbindAll: function () {
			this.bindings = {};
			this.states = {};
			this.presses = {};
			this.releases = {};
			this.downLocks = {};
			this.upLocks = {};
		},
		state: function (b) {
			return this.states[b];
		},
		pressed: function (b) {
			return this.presses[b];
		},
		released: function (b) {
			return this.releases[b];
		},
		clamp: function (b, c, d) {
			return b < c ? c : b > d ? d : b;
		},
		pollGamepads: function () {
			if (this.isSupported) {
				this.leftStick.x = 0;
				this.leftStick.y = 0;
				this.rightStick.x = 0;
				this.rightStick.y = 0;
				this.list = navigator.getGamepads();
				for (var b in this.bindings) {
					for (var c = !1, d = 0; d < this.list.length; d++) {
						var f = this.list[d];
						if (
							f &&
							f.buttons &&
							this.buttonPressed(f.buttons[b])
						) {
							c = !0;
							break;
						}
					}
					c ? this.buttonDown(b) : this.buttonUp(b);
				}
				for (d = 0; d < this.list.length; d++)
					if ((f = this.list[d]) && f.axes) {
						b = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_X];
						var c = f.axes[ig.GAMEPADINPUT.AXIS_LEFT_JOYSTICK_Y],
							e = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_X],
							f = f.axes[ig.GAMEPADINPUT.AXIS_RIGHT_JOYSTICK_Y];
						this.leftStick.x += isNaN(b) ? 0 : b;
						this.leftStick.y += isNaN(c) ? 0 : c;
						this.rightStick.x += isNaN(e) ? 0 : e;
						this.rightStick.y += isNaN(f) ? 0 : f;
					}
				0 < this.list.length &&
					((this.leftStick.x = this.clamp(this.leftStick.x, -1, 1)),
					(this.leftStick.y = this.clamp(this.leftStick.y, -1, 1)),
					(this.rightStick.x = this.clamp(this.rightStick.x, -1, 1)),
					(this.rightStick.y = this.clamp(this.rightStick.y, -1, 1)));
			}
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.gamepad')
	.requires('plugins.io.gamepad-input')
	.defines(function () {
		Gamepad = ig.Class.extend({
			bindings: { padJump: [ig.PADKEY.BUTTON_0] },
			init: function () {
				ig.gamepadInput.start();
				for (var b in this.bindings)
					for (var c = 0; c < this.bindings[b].length; c++)
						ig.gamepadInput.bind(this.bindings[b][c], b);
			},
			press: function () {},
			held: function () {},
			release: function () {},
		});
	});
ig.baked = !0;
ig.module('plugins.io.multitouch').defines(function () {
	Multitouch = ig.Class.extend({
		init: function () {
			ig.multitouchInput.start();
		},
		getTouchesPos: function () {
			if (ig.ua.mobile) {
				if (0 < ig.multitouchInput.touches.length) {
					for (
						var b = [], c = 0;
						c < ig.multitouchInput.touches.length;
						c++
					) {
						var d = ig.multitouchInput.touches[c];
						b.push({ x: d.x, y: d.y });
					}
					return b;
				}
				return null;
			}
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.multitouch-input').defines(function () {
	ig.MultitouchInput = ig.Class.extend({
		isStart: !1,
		touches: [],
		multitouchCapable: !1,
		lastEventUp: null,
		start: function () {
			this.isStart ||
				((this.isStart = !0),
				navigator.maxTouchPoints &&
					1 < navigator.maxTouchPoints &&
					(this.multitouchCapable = !0),
				ig.ua.touchDevice &&
					(window.navigator.msPointerEnabled &&
						(ig.system.canvas.addEventListener(
							'MSPointerDown',
							this.touchdown.bind(this),
							!1
						),
						ig.system.canvas.addEventListener(
							'MSPointerUp',
							this.touchup.bind(this),
							!1
						),
						ig.system.canvas.addEventListener(
							'MSPointerMove',
							this.touchmove.bind(this),
							!1
						),
						(ig.system.canvas.style.msContentZooming = 'none'),
						(ig.system.canvas.style.msTouchAction = 'none')),
					ig.system.canvas.addEventListener(
						'touchstart',
						this.touchdown.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'touchend',
						this.touchup.bind(this),
						!1
					),
					ig.system.canvas.addEventListener(
						'touchmove',
						this.touchmove.bind(this),
						!1
					)));
		},
		touchmove: function (b) {
			if (ig.ua.touchDevice) {
				var c =
						parseInt(ig.system.canvas.offsetWidth) ||
						ig.system.realWidth,
					d =
						parseInt(ig.system.canvas.offsetHeight) ||
						ig.system.realHeight,
					c = ig.system.scale * (c / ig.system.realWidth),
					d = ig.system.scale * (d / ig.system.realHeight);
				if (b.touches) {
					for (; 0 < this.touches.length; ) this.touches.pop();
					!this.multitouchCapable &&
						1 < b.touches.length &&
						(this.multitouchCapable = !0);
					var f = { left: 0, top: 0 };
					ig.system.canvas.getBoundingClientRect &&
						(f = ig.system.canvas.getBoundingClientRect());
					for (var e = 0; e < b.touches.length; e++) {
						var j = b.touches[e];
						j &&
							this.touches.push({
								x: (j.clientX - f.left) / c,
								y: (j.clientY - f.top) / d,
							});
					}
				} else this.windowMove(b);
			}
		},
		touchdown: function (b) {
			var c =
					parseInt(ig.system.canvas.offsetWidth) ||
					ig.system.realWidth,
				d =
					parseInt(ig.system.canvas.offsetHeight) ||
					ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) this.windowKeyDown(b);
			else if (ig.ua.touchDevice && b.touches) {
				for (; 0 < this.touches.length; ) this.touches.pop();
				!this.multitouchCapable &&
					1 < b.touches.length &&
					(this.multitouchCapable = !0);
				var f = { left: 0, top: 0 };
				ig.system.canvas.getBoundingClientRect &&
					(f = ig.system.canvas.getBoundingClientRect());
				for (var e = 0; e < b.touches.length; e++) {
					var j = b.touches[e];
					j &&
						this.touches.push({
							x: (j.clientX - f.left) / c,
							y: (j.clientY - f.top) / d,
						});
				}
			}
		},
		touchup: function (b) {
			var c =
				parseInt(ig.system.canvas.offsetWidth) || ig.system.realWidth;
			parseInt(ig.system.canvas.offsetHeight);
			c = ig.system.scale * (c / ig.system.realWidth);
			if (window.navigator.msPointerEnabled) this.windowKeyUp(b);
			else {
				this.lastEventUp = b;
				var d = { left: 0, top: 0 };
				ig.system.canvas.getBoundingClientRect &&
					(d = ig.system.canvas.getBoundingClientRect());
				if (ig.ua.touchDevice) {
					b = (b.changedTouches[0].clientX - d.left) / c;
					for (c = 0; c < this.touches.length; c++)
						this.touches[c].x >= b - 40 &&
							this.touches[c].x <= b + 40 &&
							this.touches.splice(c, 1);
				}
			}
		},
		windowKeyDown: function (b) {
			var c =
					parseInt(ig.system.canvas.offsetWidth) ||
					ig.system.realWidth,
				d =
					parseInt(ig.system.canvas.offsetHeight) ||
					ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight);
			if (window.navigator.msPointerEnabled) {
				var f = { left: 0, top: 0 };
				ig.system.canvas.getBoundingClientRect &&
					(f = ig.system.canvas.getBoundingClientRect());
				b = b.changedTouches ? b.changedTouches : [b];
				for (var e = 0; e < b.length; ++e) {
					for (
						var j = b[e],
							n =
								'undefined' != typeof j.identifier
									? j.identifier
									: 'undefined' != typeof j.pointerId
									? j.pointerId
									: 1,
							m = (j.clientX - f.left) / c,
							j = (j.clientY - f.top) / d,
							g = 0;
						g < this.touches.length;
						++g
					)
						this.touches[g].identifier == n &&
							this.touches.splice(g, 1);
					this.touches.push({ x: m, y: j, identifier: n });
				}
				for (c = 0; c < this.touches.length; c++);
			}
		},
		windowKeyUp: function (b) {
			b =
				'undefined' != typeof b.identifier
					? b.identifier
					: 'undefined' != typeof b.pointerId
					? b.pointerId
					: 1;
			for (var c = 0; c < this.touches.length; ++c)
				this.touches[c].identifier == b && this.touches.splice(c, 1);
			for (; 0 < this.touches.length; ) this.touches.pop();
		},
		windowMove: function (b) {
			var c =
					parseInt(ig.system.canvas.offsetWidth) ||
					ig.system.realWidth,
				d =
					parseInt(ig.system.canvas.offsetHeight) ||
					ig.system.realHeight,
				c = ig.system.scale * (c / ig.system.realWidth),
				d = ig.system.scale * (d / ig.system.realHeight),
				f = { left: 0, top: 0 };
			ig.system.canvas.getBoundingClientRect &&
				(f = ig.system.canvas.getBoundingClientRect());
			if (window.navigator.msPointerEnabled)
				for (
					var e =
							'undefined' != typeof b.identifier
								? b.identifier
								: 'undefined' != typeof b.pointerId
								? b.pointerId
								: 1,
						j = 0;
					j < this.touches.length;
					++j
				)
					if (this.touches[j].identifier == e) {
						var n = (b.clientY - f.top) / d;
						this.touches[j].x = (b.clientX - f.left) / c;
						this.touches[j].y = n;
					}
		},
	});
});
ig.baked = !0;
ig.module('plugins.io.fake-storage')
	.requires('impact.game')
	.defines(function () {
		ig.FakeStorage = ig.Class.extend({
			tempData: {},
			init: function () {
				ig.FakeStorage.instance = this;
			},
			initUnset: function (b, c) {
				null === this.get(b) && this.set(b, c);
			},
			set: function (b, c) {
				this.tempData[b] = JSON.stringify(c);
			},
			setHighest: function (b, c) {
				c > this.getFloat(b) && this.set(b, c);
			},
			get: function (b) {
				return 'undefined' == typeof this.tempData[b]
					? null
					: JSON.parse(this.tempData[b]);
			},
			getInt: function (b) {
				return ~~this.get(b);
			},
			getFloat: function (b) {
				return parseFloat(this.get(b));
			},
			getBool: function (b) {
				return !!this.get(b);
			},
			isSet: function (b) {
				return null !== this.get(b);
			},
			remove: function (b) {
				delete this.tempData[b];
			},
			clear: function () {
				this.tempData = {};
			},
		});
	});
ig.baked = !0;
ig.module('plugins.io.io-manager')
	.requires(
		'plugins.io.storage',
		'plugins.io.mouse',
		'plugins.io.keyboard',
		'plugins.io.gamepad',
		'plugins.io.multitouch',
		'plugins.io.multitouch-input',
		'plugins.io.gamepad-input',
		'plugins.io.fake-storage'
	)
	.defines(function () {
		IoManager = ig.Class.extend({
			storage: null,
			localStorageSupport: !1,
			mouse: null,
			keyboard: null,
			multitouch: null,
			gamepad: null,
			init: function () {
				ig.multitouchInput = new ig.MultitouchInput();
				ig.gamepadInput = new ig.GamepadInput();
				this.unbindAll();
				this.initStorage();
				this.initMouse();
				this.initKeyboard();
			},
			unbindAll: function () {
				ig.input.unbindAll();
				ig.gamepadInput.unbindAll();
			},
			initStorage: function () {
				try {
					window.localStorage.setItem('test', 'test'),
						(this.storage = new ig.Storage());
				} catch (b) {
					console.log('using fake storage'),
						(this.storage = new ig.FakeStorage());
				} finally {
					window.localStorage.removeItem('test');
				}
			},
			initMouse: function () {
				this.mouse = new Mouse();
			},
			initKeyboard: function () {
				this.keyboard = new Keyboard();
			},
			initMultitouch: function () {
				this.multitouch = new Multitouch();
			},
			initGamepad: function () {
				this.gamepad = new Gamepad();
			},
			press: function (b) {
				return ig.input.pressed(b) ||
					(this.gamepad && this.gamepad.press(b))
					? !0
					: !1;
			},
			held: function (b) {
				return ig.input.state(b) ||
					(this.gamepad && this.gamepad.state(b))
					? !0
					: !1;
			},
			release: function (b) {
				return ig.input.released(b) ||
					(this.gamepad && this.gamepad.released(b))
					? !0
					: !1;
			},
			getClickPos: function () {
				return this.mouse.getPos();
			},
			getTouchesPos: function () {
				return this.multitouch.getTouchesPos();
			},
			checkOverlap: function (b, c, d, f, e) {
				return b.x > c + f || b.x < c || b.y > d + e || b.y < d
					? !1
					: !0;
			},
			_supportsLocalStorage: function () {
				try {
					return (
						localStorage.setItem('test', 'test'),
						localStorage.removeItem('test'),
						(this.localStorageSupport =
							'localStorage' in window &&
							null !== window.localStorage)
					);
				} catch (b) {
					return this.localStorageSupport;
				}
			},
			storageIsSet: function (b) {
				return !this.localStorageSupport ? null : this.storage.isSet(b);
			},
			storageGet: function (b) {
				return !this.localStorageSupport ? null : this.storage.get(b);
			},
			storageSet: function (b, c) {
				if (!this.localStorageSupport) return null;
				this.storage.set(b, c);
			},
			assert: function (b, c, d) {
				if (c !== d)
					throw (
						'actualValue:' +
						c +
						' not equal to testValue:' +
						d +
						' at ' +
						b
					);
			},
		});
	});
ig.baked = !0;
ig.module('plugins.io.storage-manager')
	.requires('impact.game', 'plugins.io.io-manager')
	.defines(function () {
		ig.Game.prototype.name = 'STP-Game';
		ig.Game.prototype.version = '1.0';
		ig.Game.prototype.sessionData = {};
		ig.Game.prototype.initData = function () {
			return (this.sessionData = {
				sound: 0.5,
				music: 0.5,
				highscore: 0,
			});
		};
		ig.Game.prototype.setupStorageManager = function () {
			'undefined' === typeof this.name
				? console.error(
						'Cannot found Game Name, Storage Manager Cancelled.'
				  )
				: 'undefined' === typeof this.version
				? console.error(
						'Cannot found Game Version, Storage Manager Cancelled.'
				  )
				: (this.io ||
						((this.io = new IoManager()),
						console.log(
							"IO Manager doesn't existed. Initialize..."
						)),
				  console.log('Plug in Storage Manager'),
				  (this.storage = this.io.storage),
				  (this.storageName = this.name + '-v' + this.version),
				  this.loadAll());
		};
		ig.Game.prototype.loadAll = function () {
			var b = this.storage.get(this.storageName);
			if (null === b || 'undefined' === typeof b) b = this.initData();
			for (var c in b) this.sessionData[c] = b[c];
			this.storage.set(this.storageName, b);
		};
		ig.Game.prototype.saveAll = function () {
			var b = this.storage.get(this.storageName),
				c;
			for (c in b) b[c] = this.sessionData[c];
			this.storage.set(this.storageName, b);
		};
		ig.Game.prototype.load = function (b) {
			return this.storage.get(this.storageName)[b];
		};
		ig.Game.prototype.save = function (b, c) {
			var d = this.storage.get(this.storageName);
			d[b] = c;
			this.storage.set(this.storageName, d);
		};
	});
ig.baked = !0;
ig.module('plugins.splash-loader')
	.requires('impact.loader', 'impact.animation')
	.defines(function () {
		ig.SplashLoader = ig.Loader.extend({
			desktopCoverDIVID: 'play-desktop',
			splashDesktop: new ig.Image(
				'media/graphics/splash/desktop/cover.jpg'
			),
			splashMobile: new ig.Image(
				'media/graphics/splash/mobile/cover.jpg'
			),
			loadingBar: new ig.Image(
				'media/graphics/splash/loading/loading-bar.png'
			),
			loadingFill: new ig.Image(
				'media/graphics/splash/loading/loading-fill.png'
			),
			customAnim: new ig.AnimationSheet(
				'media/graphics/splash/loading/anim.png',
				256,
				160
			),
			resources: [
				new ig.Image('media/graphics/splash/desktop/cover.jpg'),
				new ig.Image('media/graphics/splash/mobile/cover.jpg'),
			],
			init: function (b, c) {
				this.parent(b, c);
				ig.apiHandler.run('MJSPreroll');
			},
			end: function () {
				this.parent();
				this._drawStatus = 1;
				this.draw();
				if (ig.ua.mobile) {
					var b = ig.domHandler.getElementById('#play');
					ig.domHandler.show(b);
					ig.system.setGame(MyGame);
				} else this.tapToStartDiv();
			},
			tapToStartDiv: function (b) {
				this.desktopCoverDIV = document.createElement('div');
				this.desktopCoverDIV.id = this.desktopCoverDIVID;
				this.desktopCoverDIV.setAttribute('class', 'play');
				this.desktopCoverDIV.setAttribute(
					'style',
					'position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'
				);
				this.desktopCoverDIV.innerHTML =
					"<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" +
					_STRINGS.Splash.TapToStart +
					'</div></div>';
				(
					document.getElementById('play').parentNode ||
					document.getElementById('ajaxbar')
				).appendChild(this.desktopCoverDIV);
				try {
					'undefined' !== typeof ig.sizeHandler
						? 'undefined' !==
								typeof ig.sizeHandler.coreDivsToResize &&
						  (ig.sizeHandler.coreDivsToResize.push(
								'#' + this.desktopCoverDIVID
						  ),
						  'function' === typeof ig.sizeHandler.reorient &&
								ig.sizeHandler.reorient())
						: 'undefined' !== typeof coreDivsToResize &&
						  (coreDivsToResize.push(this.desktopCoverDIVID),
						  'function' === typeof sizeHandler && sizeHandler());
				} catch (c) {
					console.log(c);
				}
				this.desktopCoverDIV.addEventListener('click', function () {
					try {
						'undefined' !== typeof ig.soundHandler
							? ('undefined' !== typeof ig.soundHandler.bgmPlayer
									? 'undefined' !==
											typeof ig.soundHandler.bgmPlayer
												.webaudio &&
									  'undefined' !==
											typeof ig.soundHandler.bgmPlayer
												.webaudio.context &&
									  ig.soundHandler.bgmPlayer.webaudio.context.resume()
									: ((ig.soundHandler = null),
									  (ig.soundHandler =
											'undefined' !== typeof ig.soundList
												? new ig.SoundHandler(
														ig.soundList
												  )
												: new ig.SoundHandler())),
							  'undefined' !== typeof ig.soundHandler.sfxPlayer
									? 'function' ===
											typeof ig.soundHandler.sfxPlayer
												.play &&
									  ig.soundHandler.sfxPlayer.play(
											'staticSound'
									  )
									: 'undefined' !==
									  typeof ig.soundHandler.staticSound
									? 'function' ===
											typeof ig.soundHandler.staticSound
												.play &&
									  ig.soundHandler.staticSound.play()
									: 'function' ===
											typeof ig.soundHandler.playSound &&
									  ig.soundHandler.playSound('staticSound'))
							: 'undefined' !== typeof Howl
							? ((ig.global.staticSound = new Howl({
									src: [
										'media/audio/play/static.ogg',
										'media/audio/play/static.mp3',
									],
							  })),
							  ig.global.staticSound.play())
							: 'undefined' !== typeof createjs &&
							  'undefined' !== typeof createjs.Sound &&
							  'function' === typeof createjs.Sound.play &&
							  createjs.Sound.play('opening');
					} catch (c) {
						console.log(c);
					}
					this.setAttribute('style', 'visibility: hidden;');
					'function' === typeof b && b();
					ig.gd.show(
						function () {
							ig.system.setGame(MyGame);
							gdsdk &&
								'function' === typeof gdsdk.play &&
								gdsdk.play();
						}.bind(this)
					);
				});
			},
			setupCustomAnimation: function () {},
			animate: function () {
				ig.Timer.step();
			},
			draw: function () {
				this._drawStatus += (this.status - this._drawStatus) / 5;
				ig.system.context.fillStyle = '#000';
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				var b = ig.system.scale,
					c,
					d,
					f,
					e;
				ig.ua.mobile
					? ((c = this.loadingBar.width),
					  (d = this.loadingBar.height),
					  (f = 0.5 * ig.system.width - c / 2),
					  (e = (7 * ig.system.height) / 8 - d / 2),
					  this.splashMobile.draw(0, 0))
					: ((c = this.loadingBar.width),
					  (d = this.loadingBar.height),
					  (f = 0.5 * ig.system.width - c / 2),
					  (e = (7 * ig.system.height) / 8 - d / 2 - 70),
					  this.splashDesktop.draw(0, 0));
				this.loadingBar.draw(f, e);
				1 < c * this._drawStatus &&
					this.loadingFill.draw(
						f,
						e,
						-8,
						-7,
						c * this._drawStatus,
						d
					);
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.font = '30px arialroundedbold';
				c = _STRINGS.Splash.Loading;
				d =
					ig.system.width / 2 -
					ig.system.context.measureText(c).width / 2;
				ig.system.context.fillText(c, d, e * b - 20);
			},
		});
	});
ig.baked = !0;
ig.module('plugins.tween')
	.requires('impact.entity')
	.defines(function () {
		Array.prototype.indexOf ||
			(Array.prototype.indexOf = function (b) {
				for (var c = 0; c < this.length; ++c)
					if (this[c] === b) return c;
				return -1;
			});
		ig.Entity.prototype.tweens = [];
		ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
		ig.Entity.prototype.update = function () {
			this._preTweenUpdate();
			if (0 < this.tweens.length) {
				for (var b = [], c = 0; c < this.tweens.length; c++)
					this.tweens[c].update(),
						this.tweens[c].complete || b.push(this.tweens[c]);
				this.tweens = b;
			}
		};
		ig.Entity.prototype.tween = function (b, c, d) {
			b = new ig.Tween(this, b, c, d);
			this.tweens.push(b);
			return b;
		};
		ig.Entity.prototype.pauseTweens = function () {
			for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause();
		};
		ig.Entity.prototype.resumeTweens = function () {
			for (var b = 0; b < this.tweens.length; b++)
				this.tweens[b].resume();
		};
		ig.Entity.prototype.stopTweens = function (b) {
			for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b);
		};
		ig.Tween = function (b, c, d, f) {
			var e = {},
				j = {},
				n = {},
				m = 0,
				g = !1,
				r = !1,
				z = !1;
			this.duration = d;
			this.paused = this.complete = !1;
			this.easing = ig.Tween.Easing.Linear.EaseNone;
			this.onComplete = !1;
			this.loop = this.delay = 0;
			this.loopCount = -1;
			ig.merge(this, f);
			this.loopNum = this.loopCount;
			this.chain = function (b) {
				z = b;
			};
			this.initEnd = function (b, c, d) {
				if ('object' !== typeof c[b]) d[b] = c[b];
				else
					for (subprop in c[b])
						d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b]);
			};
			this.initStart = function (b, c, d, e) {
				if ('object' !== typeof d[b])
					'undefined' !== typeof c[b] && (e[b] = d[b]);
				else
					for (subprop in d[b])
						e[b] || (e[b] = {}),
							'undefined' !== typeof c[b] &&
								this.initStart(subprop, c[b], d[b], e[b]);
			};
			this.start = function () {
				this.paused = this.complete = !1;
				this.loopNum = this.loopCount;
				m = 0;
				-1 == b.tweens.indexOf(this) && b.tweens.push(this);
				r = !0;
				g = new ig.Timer();
				for (var d in c) this.initEnd(d, c, j);
				for (d in j)
					this.initStart(d, j, b, e), this.initDelta(d, n, b, j);
			};
			this.initDelta = function (b, c, d, e) {
				if ('object' !== typeof e[b]) c[b] = e[b] - d[b];
				else
					for (subprop in e[b])
						c[b] || (c[b] = {}),
							this.initDelta(subprop, c[b], d[b], e[b]);
			};
			this.propUpdate = function (b, c, d, e, f) {
				if ('object' !== typeof d[b])
					c[b] = 'undefined' != typeof d[b] ? d[b] + e[b] * f : c[b];
				else
					for (subprop in d[b])
						this.propUpdate(subprop, c[b], d[b], e[b], f);
			};
			this.propSet = function (b, c, d) {
				if ('object' !== typeof c[b]) d[b] = c[b];
				else
					for (subprop in c[b])
						d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b]);
			};
			this.update = function () {
				if (!r) return !1;
				if (this.delay) {
					if (g.delta() < this.delay) return;
					this.delay = 0;
					g.reset();
				}
				if (this.paused || this.complete) return !1;
				var c = (g.delta() + m) / this.duration,
					c = 1 < c ? 1 : c,
					d = this.easing(c);
				for (property in n) this.propUpdate(property, b, e, n, d);
				if (1 <= c) {
					if (0 == this.loopNum || !this.loop) {
						this.complete = !0;
						if (this.onComplete) this.onComplete();
						z && z.start();
						return !1;
					}
					if (this.loop == ig.Tween.Loop.Revert) {
						for (property in e) this.propSet(property, e, b);
						m = 0;
						g.reset();
						-1 != this.loopNum && this.loopNum--;
					} else if (this.loop == ig.Tween.Loop.Reverse) {
						c = {};
						d = {};
						ig.merge(c, j);
						ig.merge(d, e);
						ig.merge(e, c);
						ig.merge(j, d);
						for (property in j) this.initDelta(property, n, b, j);
						m = 0;
						g.reset();
						-1 != this.loopNum && this.loopNum--;
					}
				}
			};
			this.pause = function () {
				this.paused = !0;
				g && g.delta && (m += g.delta());
			};
			this.resume = function () {
				this.paused = !1;
				g && g.reset && g.reset();
			};
			this.stop = function (b) {
				b &&
					((this.loop = this.complete = this.paused = !1),
					(m += d),
					this.update());
				this.complete = !0;
			};
		};
		ig.Tween.Loop = { Revert: 1, Reverse: 2 };
		ig.Tween.Easing = {
			Linear: {},
			Quadratic: {},
			Cubic: {},
			Quartic: {},
			Quintic: {},
			Sinusoidal: {},
			Exponential: {},
			Circular: {},
			Elastic: {},
			Back: {},
			Bounce: {},
		};
		ig.Tween.Easing.Linear.EaseNone = function (b) {
			return b;
		};
		ig.Tween.Easing.Quadratic.EaseIn = function (b) {
			return b * b;
		};
		ig.Tween.Easing.Quadratic.EaseOut = function (b) {
			return -b * (b - 2);
		};
		ig.Tween.Easing.Quadratic.EaseInOut = function (b) {
			return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1);
		};
		ig.Tween.Easing.Cubic.EaseIn = function (b) {
			return b * b * b;
		};
		ig.Tween.Easing.Cubic.EaseOut = function (b) {
			return --b * b * b + 1;
		};
		ig.Tween.Easing.Cubic.EaseInOut = function (b) {
			return 1 > (b *= 2)
				? 0.5 * b * b * b
				: 0.5 * ((b -= 2) * b * b + 2);
		};
		ig.Tween.Easing.Quartic.EaseIn = function (b) {
			return b * b * b * b;
		};
		ig.Tween.Easing.Quartic.EaseOut = function (b) {
			return -(--b * b * b * b - 1);
		};
		ig.Tween.Easing.Quartic.EaseInOut = function (b) {
			return 1 > (b *= 2)
				? 0.5 * b * b * b * b
				: -0.5 * ((b -= 2) * b * b * b - 2);
		};
		ig.Tween.Easing.Quintic.EaseIn = function (b) {
			return b * b * b * b * b;
		};
		ig.Tween.Easing.Quintic.EaseOut = function (b) {
			return (b -= 1) * b * b * b * b + 1;
		};
		ig.Tween.Easing.Quintic.EaseInOut = function (b) {
			return 1 > (b *= 2)
				? 0.5 * b * b * b * b * b
				: 0.5 * ((b -= 2) * b * b * b * b + 2);
		};
		ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
			return -Math.cos((b * Math.PI) / 2) + 1;
		};
		ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
			return Math.sin((b * Math.PI) / 2);
		};
		ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
			return -0.5 * (Math.cos(Math.PI * b) - 1);
		};
		ig.Tween.Easing.Exponential.EaseIn = function (b) {
			return 0 == b ? 0 : Math.pow(2, 10 * (b - 1));
		};
		ig.Tween.Easing.Exponential.EaseOut = function (b) {
			return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1;
		};
		ig.Tween.Easing.Exponential.EaseInOut = function (b) {
			return 0 == b
				? 0
				: 1 == b
				? 1
				: 1 > (b *= 2)
				? 0.5 * Math.pow(2, 10 * (b - 1))
				: 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2);
		};
		ig.Tween.Easing.Circular.EaseIn = function (b) {
			return -(Math.sqrt(1 - b * b) - 1);
		};
		ig.Tween.Easing.Circular.EaseOut = function (b) {
			return Math.sqrt(1 - --b * b);
		};
		ig.Tween.Easing.Circular.EaseInOut = function (b) {
			return 1 > (b /= 0.5)
				? -0.5 * (Math.sqrt(1 - b * b) - 1)
				: 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1);
		};
		ig.Tween.Easing.Elastic.EaseIn = function (b) {
			var c,
				d = 0.1,
				f = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			f || (f = 0.3);
			!d || 1 > d
				? ((d = 1), (c = f / 4))
				: (c = (f / (2 * Math.PI)) * Math.asin(1 / d));
			return -(
				d *
				Math.pow(2, 10 * (b -= 1)) *
				Math.sin(((b - c) * 2 * Math.PI) / f)
			);
		};
		ig.Tween.Easing.Elastic.EaseOut = function (b) {
			var c,
				d = 0.1,
				f = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			f || (f = 0.3);
			!d || 1 > d
				? ((d = 1), (c = f / 4))
				: (c = (f / (2 * Math.PI)) * Math.asin(1 / d));
			return (
				d *
					Math.pow(2, -10 * b) *
					Math.sin(((b - c) * 2 * Math.PI) / f) +
				1
			);
		};
		ig.Tween.Easing.Elastic.EaseInOut = function (b) {
			var c,
				d = 0.1,
				f = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			f || (f = 0.3);
			!d || 1 > d
				? ((d = 1), (c = f / 4))
				: (c = (f / (2 * Math.PI)) * Math.asin(1 / d));
			return 1 > (b *= 2)
				? -0.5 *
						d *
						Math.pow(2, 10 * (b -= 1)) *
						Math.sin(((b - c) * 2 * Math.PI) / f)
				: 0.5 *
						d *
						Math.pow(2, -10 * (b -= 1)) *
						Math.sin(((b - c) * 2 * Math.PI) / f) +
						1;
		};
		ig.Tween.Easing.Back.EaseIn = function (b) {
			return b * b * (2.70158 * b - 1.70158);
		};
		ig.Tween.Easing.Back.EaseOut = function (b) {
			return (b -= 1) * b * (2.70158 * b + 1.70158) + 1;
		};
		ig.Tween.Easing.Back.EaseInOut = function (b) {
			return 1 > (b *= 2)
				? 0.5 * b * b * (3.5949095 * b - 2.5949095)
				: 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2);
		};
		ig.Tween.Easing.Bounce.EaseIn = function (b) {
			return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b);
		};
		ig.Tween.Easing.Bounce.EaseOut = function (b) {
			return (b /= 1) < 1 / 2.75
				? 7.5625 * b * b
				: b < 2 / 2.75
				? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75
				: b < 2.5 / 2.75
				? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375
				: 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375;
		};
		ig.Tween.Easing.Bounce.EaseInOut = function (b) {
			return 0.5 > b
				? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b)
				: 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5;
		};
		ig.Tween.Interpolation = {
			Linear: function (b, c) {
				var d = b.length - 1,
					f = d * c,
					e = Math.floor(f),
					j = TWEEN.Interpolation.Utils.Linear;
				return 0 > c
					? j(b[0], b[1], f)
					: 1 < c
					? j(b[d], b[d - 1], d - f)
					: j(b[e], b[e + 1 > d ? d : e + 1], f - e);
			},
		};
	});
ig.baked = !0;
ig.module('plugins.patches.entity-patch')
	.requires('impact.entity')
	.defines(function () {
		ig.Entity.inject({
			handleMovementTrace: function (b) {
				this.standing = !1;
				b.collision.y &&
					(0 < this.bounciness &&
					Math.abs(this.vel.y) > this.minBounceVelocity
						? (this.vel.y *= -this.bounciness)
						: (0 < this.vel.y && (this.standing = !0),
						  (this.vel.y = 0)));
				b.collision.x &&
					(this.vel.x =
						0 < this.bounciness &&
						Math.abs(this.vel.x) > this.minBounceVelocity
							? this.vel.x * -this.bounciness
							: 0);
				if (b.collision.slope) {
					var c = b.collision.slope;
					if (0 < this.bounciness) {
						var d = this.vel.x * c.nx + this.vel.y * c.ny;
						this.vel.x =
							(this.vel.x - 2 * c.nx * d) * this.bounciness;
						this.vel.y =
							(this.vel.y - 2 * c.ny * d) * this.bounciness;
					} else
						(d =
							(this.vel.x * c.x + this.vel.y * c.y) /
							(c.x * c.x + c.y * c.y)),
							(this.vel.x = c.x * d),
							(this.vel.y = c.y * d),
							(c = Math.atan2(c.x, c.y)),
							c > this.slopeStanding.min &&
								c < this.slopeStanding.max &&
								(this.standing = !0);
				}
				this.pos.x = b.pos.x;
				this.pos.y = b.pos.y;
			},
		});
	});
ig.baked = !0;
ig.module('plugins.tweens-handler')
	.requires('impact.entity', 'plugins.tween', 'plugins.patches.entity-patch')
	.defines(function () {
		Array.prototype.indexOf ||
			(Array.prototype.indexOf = function (b) {
				for (var d = 0; d < this.length; ++d)
					if (this[d] === b) return d;
				return -1;
			});
		ig.TweensHandler = ig.Class.extend({
			_tweens: [],
			_systemPausedTweens: [],
			init: function () {},
			getAll: function () {
				return this._tweens;
			},
			removeAll: function () {
				this._tweens = [];
			},
			add: function (b) {
				this._tweens.push(b);
			},
			remove: function (b) {
				b = this._tweens.indexOf(b);
				-1 !== b && this._tweens.splice(b, 1);
			},
			onSystemPause: function () {
				if (0 === this._tweens.length) return !1;
				for (var b = 0, d = null; b < this._tweens.length; )
					(d = this._tweens[b]),
						d._isPlaying &&
							(this._systemPausedTweens.push(d), d.pause()),
						b++;
				return !0;
			},
			onSystemResume: function () {
				if (0 === this._systemPausedTweens.length) return !1;
				for (var b = 0; b < this._systemPausedTweens.length; )
					this._systemPausedTweens[b].resume(), b++;
				this._systemPausedTweens = [];
				return !0;
			},
			update: function (b, d) {
				if (0 === this._tweens.length) return !1;
				var f = 0;
				for (
					b = void 0 !== b ? b : ig.game.tweens.now();
					f < this._tweens.length;

				)
					this._tweens[f].update(b) || d
						? f++
						: this._tweens.splice(f, 1);
				return !0;
			},
			now: function () {
				return Date.now();
			},
		});
		ig.TweenDef = ig.Class.extend({
			_ent: null,
			_valuesStart: {},
			_valuesEnd: {},
			_valuesStartRepeat: {},
			_duration: 1e3,
			_repeat: 0,
			_yoyo: !1,
			_isPlaying: !1,
			_reversed: !1,
			_delayTime: 0,
			_startTime: null,
			_pauseTime: null,
			_easingFunction: ig.Tween.Easing.Linear.EaseNone,
			_interpolationFunction: ig.Tween.Interpolation.Linear,
			_chainedTweens: [],
			_onStartCallback: null,
			_onStartCallbackFired: !1,
			_onUpdateCallback: null,
			_onCompleteCallback: null,
			_onStopCallback: null,
			_onPauseCallback: null,
			_onResumeCallback: null,
			_currentElapsed: 0,
			init: function (b) {
				this._object = b;
			},
			to: function (b, d) {
				this._valuesEnd = b;
				void 0 !== d && (this._duration = d);
				return this;
			},
			start: function (b) {
				if (this._isPlaying) return this;
				ig.game.tweens.add(this);
				this._isPlaying = !0;
				this._onStartCallbackFired = !1;
				this._startTime = void 0 !== b ? b : ig.game.tweens.now();
				this._startTime += this._delayTime;
				for (var d in this._valuesEnd) {
					if (this._valuesEnd[d] instanceof Array) {
						if (0 === this._valuesEnd[d].length) continue;
						this._valuesEnd[d] = [this._object[d]].concat(
							this._valuesEnd[d]
						);
					}
					void 0 !== this._object[d] &&
						((this._valuesStart[d] = this._object[d]),
						!1 === this._valuesStart[d] instanceof Array &&
							(this._valuesStart[d] *= 1),
						(this._valuesStartRepeat[d] =
							this._valuesStart[d] || 0));
				}
				return this;
			},
			stop: function () {
				if (!this._isPlaying) return this;
				ig.game.tweens.remove(this);
				this._isPlaying = !1;
				null !== this._onStopCallback &&
					this._onStopCallback.call(this._object, this._object);
				this.stopChainedTweens();
				return this;
			},
			pause: function () {
				if (!this._isPlaying) return this;
				ig.game.tweens.remove(this);
				this._isPlaying = !1;
				this._pauseTime = ig.game.tweens.now();
				null !== this._onPauseCallback &&
					this._onPauseCallback.call(this._object, this._object);
				return this;
			},
			resume: function () {
				if (this._isPlaying || !this._pauseTime) return this;
				var b = ig.game.tweens.now() - this._pauseTime;
				this._startTime += b;
				ig.game.tweens.add(this);
				this._isPlaying = !0;
				null !== this._onResumeCallback &&
					this._onResumeCallback.call(this._object, this._object);
				this._pauseTime = null;
				return this;
			},
			end: function () {
				this.update(this._startTime + this._duration);
				return this;
			},
			stopChainedTweens: function () {
				for (var b = 0, d = this._chainedTweens.length; b < d; b++)
					this._chainedTweens[b].stop();
			},
			delay: function (b) {
				this._delayTime = b;
				return this;
			},
			repeat: function (b) {
				this._repeat = b;
				return this;
			},
			repeatDelay: function (b) {
				this._repeatDelayTime = b;
				return this;
			},
			yoyo: function (b) {
				this._yoyo = b;
				return this;
			},
			easing: function (b) {
				this._easingFunction = b;
				return this;
			},
			interpolation: function (b) {
				this._interpolationFunction = b;
				return this;
			},
			chain: function () {
				this._chainedTweens = arguments;
				return this;
			},
			onStart: function (b) {
				this._onStartCallback = b;
				return this;
			},
			onUpdate: function (b) {
				this._onUpdateCallback = b;
				return this;
			},
			onComplete: function (b) {
				this._onCompleteCallback = b;
				return this;
			},
			onStop: function (b) {
				this._onStopCallback = b;
				return this;
			},
			onPause: function (b) {
				this._onPauseCallback = b;
				return this;
			},
			onResume: function (b) {
				this._onResumeCallback = b;
				return this;
			},
			update: function (b) {
				var d, f, e;
				if (b < this._startTime) return !0;
				!1 === this._onStartCallbackFired &&
					(null !== this._onStartCallback &&
						this._onStartCallback.call(this._object, this._object),
					(this._onStartCallbackFired = !0));
				f = (b - this._startTime) / this._duration;
				this._currentElapsed = f = 1 < f ? 1 : f;
				e = this._easingFunction(f);
				for (d in this._valuesEnd)
					if (void 0 !== this._valuesStart[d]) {
						var j = this._valuesStart[d] || 0,
							n = this._valuesEnd[d];
						n instanceof Array
							? (this._object[d] = this._interpolationFunction(
									n,
									e
							  ))
							: ('string' === typeof n &&
									(n =
										'+' === n.charAt(0) ||
										'-' === n.charAt(0)
											? j + parseFloat(n)
											: parseFloat(n)),
							  'number' === typeof n &&
									(this._object[d] = j + (n - j) * e));
					}
				null !== this._onUpdateCallback &&
					this._onUpdateCallback.call(this._object, this._object, e);
				if (1 === f)
					if (0 < this._repeat) {
						isFinite(this._repeat) && this._repeat--;
						for (d in this._valuesStartRepeat)
							'string' === typeof this._valuesEnd[d] &&
								(this._valuesStartRepeat[d] =
									_valuesStartRepeat[d] +
									parseFloat(_valuesEnd[d])),
								this._yoyo &&
									((f = this._valuesStartRepeat[d]),
									(this._valuesStartRepeat[d] =
										this._valuesEnd[d]),
									(this._valuesEnd[d] = f)),
								(this._valuesStart[d] =
									this._valuesStartRepeat[d]);
						this._yoyo && (this._reversed = !this._reversed);
						this._startTime =
							void 0 !== this._repeatDelayTime
								? b + this._repeatDelayTime
								: b + this._delayTime;
					} else {
						null !== this._onCompleteCallback &&
							this._onCompleteCallback.call(
								this._object,
								this._object
							);
						b = 0;
						for (d = this._chainedTweens.length; b < d; b++)
							this._chainedTweens[b].start(
								this._startTime + this._duration
							);
						return !1;
					}
				return !0;
			},
		});
		var b = [1];
		ig.Tween.Interpolation = {
			Linear: function (b, d) {
				var f = b.length - 1,
					e = f * d,
					j = Math.floor(e),
					n = ig.Tween.Interpolation.Utils.Linear;
				return 0 > d
					? n(b[0], b[1], e)
					: 1 < d
					? n(b[f], b[f - 1], f - e)
					: n(b[j], b[j + 1 > f ? f : j + 1], e - j);
			},
			Bezier: function (b, d) {
				for (
					var f = 0,
						e = b.length - 1,
						j = Math.pow,
						n = ig.Tween.Interpolation.Utils.Bernstein,
						m = 0;
					m <= e;
					m++
				)
					f += j(1 - d, e - m) * j(d, m) * b[m] * n(e, m);
				return f;
			},
			CatmullRom: function (b, d) {
				var f = b.length - 1,
					e = f * d,
					j = Math.floor(e),
					n = ig.Tween.Interpolation.Utils.CatmullRom;
				return b[0] === b[f]
					? (0 > d && (j = Math.floor((e = f * (1 + d)))),
					  n(
							b[(j - 1 + f) % f],
							b[j],
							b[(j + 1) % f],
							b[(j + 2) % f],
							e - j
					  ))
					: 0 > d
					? b[0] - (n(b[0], b[0], b[1], b[1], -e) - b[0])
					: 1 < d
					? b[f] - (n(b[f], b[f], b[f - 1], b[f - 1], e - f) - b[f])
					: n(
							b[j ? j - 1 : 0],
							b[j],
							b[f < j + 1 ? f : j + 1],
							b[f < j + 2 ? f : j + 2],
							e - j
					  );
			},
			Utils: {
				Linear: function (b, d, f) {
					return (d - b) * f + b;
				},
				Bernstein: function (b, d) {
					var f = ig.Tween.Interpolation.Utils.Factorial;
					return f(b) / f(d) / f(b - d);
				},
				Factorial: function (c) {
					var d = 1;
					if (b[c]) return b[c];
					for (var f = c; 1 < f; f--) d *= f;
					return (b[c] = d);
				},
				CatmullRom: function (b, d, f, e, j) {
					b = 0.5 * (f - b);
					e = 0.5 * (e - d);
					var n = j * j;
					return (
						(2 * d - 2 * f + b + e) * j * n +
						(-3 * d + 3 * f - 2 * b - e) * n +
						b * j +
						d
					);
				},
			},
		};
	});
ig.baked = !0;
ig.module('plugins.url-parameters').defines(function () {
	ig.UrlParameters = ig.Class.extend({
		init: function () {
			switch (getQueryVariable('iphone')) {
				case 'true':
					(ig.ua.iPhone = !0), console.log('iPhone mode');
			}
			var b = getQueryVariable('webview');
			if (b)
				switch (b) {
					case 'true':
						(ig.ua.is_uiwebview = !0), console.log('webview mode');
				}
			if ((b = getQueryVariable('debug')))
				switch (b) {
					case 'true':
						ig.game.showDebugMenu(), console.log('debug mode');
				}
			switch (getQueryVariable('view')) {
				case 'stats':
					ig.game.resetPlayerStats(), ig.game.endGame();
			}
			getQueryVariable('ad');
		},
	});
});
ig.baked = !0;
ig.module('plugins.director')
	.requires('impact.impact')
	.defines(function () {
		ig.Director = ig.Class.extend({
			init: function (b, c) {
				this.game = b;
				this.levels = [];
				this.currentLevel = 0;
				this.append(c);
			},
			loadLevel: function (b) {
				for (var c in ig.sizeHandler.dynamicClickableEntityDivs) {
					var d = ig.domHandler.getElementById('#' + c);
					ig.domHandler.hide(d);
				}
				this.currentLevel = b;
				this.game.loadLevel(this.levels[b]);
				return !0;
			},
			loadLevelWithoutEntities: function (b) {
				this.currentLevel = b;
				this.game.loadLevelWithoutEntities(this.levels[b]);
				return !0;
			},
			append: function (b) {
				newLevels = [];
				return 'object' === typeof b
					? (b.constructor === [].constructor
							? (newLevels = b)
							: (newLevels[0] = b),
					  (this.levels = this.levels.concat(newLevels)),
					  !0)
					: !1;
			},
			nextLevel: function () {
				return this.currentLevel + 1 < this.levels.length
					? this.loadLevel(this.currentLevel + 1)
					: !1;
			},
			previousLevel: function () {
				return 0 <= this.currentLevel - 1
					? this.loadLevel(this.currentLevel - 1)
					: !1;
			},
			jumpTo: function (b) {
				var c = null;
				for (i = 0; i < this.levels.length; i++)
					this.levels[i] == b && (c = i);
				return 0 <= c ? this.loadLevel(c) : !1;
			},
			firstLevel: function () {
				return this.loadLevel(0);
			},
			lastLevel: function () {
				return this.loadLevel(this.levels.length - 1);
			},
			reloadLevel: function () {
				return this.loadLevel(this.currentLevel);
			},
		});
	});
ig.baked = !0;
ig.module('plugins.impact-storage')
	.requires('impact.game')
	.defines(function () {
		ig.Storage = ig.Class.extend({
			staticInstantiate: function () {
				return !ig.Storage.instance ? null : ig.Storage.instance;
			},
			init: function () {
				ig.Storage.instance = this;
			},
			isCapable: function () {
				return 'undefined' !== typeof window.localStorage;
			},
			isSet: function (b) {
				return null !== this.get(b);
			},
			initUnset: function (b, c) {
				null === this.get(b) && this.set(b, c);
			},
			get: function (b) {
				if (!this.isCapable()) return null;
				try {
					return JSON.parse(localStorage.getItem(b));
				} catch (c) {
					return window.localStorage.getItem(b);
				}
			},
			getInt: function (b) {
				return ~~this.get(b);
			},
			getFloat: function (b) {
				return parseFloat(this.get(b));
			},
			getBool: function (b) {
				return !!this.get(b);
			},
			key: function (b) {
				return this.isCapable() ? window.localStorage.key(b) : null;
			},
			set: function (b, c) {
				if (!this.isCapable()) return null;
				try {
					window.localStorage.setItem(b, JSON.stringify(c));
				} catch (d) {
					console.log(d);
				}
			},
			setHighest: function (b, c) {
				c > this.getFloat(b) && this.set(b, c);
			},
			remove: function (b) {
				if (!this.isCapable()) return null;
				window.localStorage.removeItem(b);
			},
			clear: function () {
				if (!this.isCapable()) return null;
				window.localStorage.clear();
			},
		});
	});
ig.baked = !0;
ig.module('plugins.fullscreen')
	.requires('impact.entity')
	.defines(function () {
		ig.Fullscreen = {
			enableFullscreenButton: !0,
			_isEnabled: 'notChecked',
			isEnabled: function () {
				'notChecked' == this._isEnabled &&
					(this._isEnabled =
						document.fullscreenEnabled ||
						document.mozFullScreenEnabled ||
						document.webkitFullscreenEnabled ||
						document.msFullscreenEnabled
							? !0
							: !1);
				return this._isEnabled;
			},
			isFullscreen: function () {
				return ig.Fullscreen.isEnabled() &&
					(document.fullscreenElement ||
						document.mozFullScreenElement ||
						document.webkitFullscreenElement ||
						document.msFullscreenElement)
					? !0
					: !1;
			},
			toggleFullscreen: function () {
				ig.Fullscreen.isFullscreen()
					? ig.Fullscreen.exitFullscreen()
					: ig.Fullscreen.requestFullscreen();
				ig.sizeHandler.orientationDelayHandler();
			},
			requestFullscreen: function () {
				var b = document.documentElement;
				b.requestFullscreen
					? b.requestFullscreen()
					: b.webkitRequestFullscreen
					? b.webkitRequestFullscreen()
					: b.mozRequestFullScreen
					? b.mozRequestFullScreen()
					: b.msRequestFullscreen
					? b.msRequestFullscreen()
					: console.log('no request fullscreen method available');
			},
			exitFullscreen: function () {
				document.exitFullscreen
					? document.exitFullscreen()
					: document.webkitExitFullscreen
					? document.webkitExitFullscreen()
					: document.mozCancelFullScreen
					? document.mozCancelFullScreen()
					: document.msExitFullscreen
					? document.msExitFullscreen()
					: console.log('no exit fullscreen method available');
			},
			divs: {},
		};
		ig.Director.inject({
			loadLevel: function (b) {
				var c = ig.Fullscreen.divs,
					d;
				for (d in c)
					(c = ig.domHandler.getElementById('#' + d)),
						ig.domHandler.hide(c);
				return this.parent(b);
			},
		});
		ig.SizeHandler.inject({
			resize: function () {
				this.parent();
				var b = ig.Fullscreen.divs,
					c;
				for (c in b) {
					var d = Math.min(
							ig.sizeHandler.scaleRatioMultiplier.x,
							ig.sizeHandler.scaleRatioMultiplier.y
						),
						f = ig.domHandler.getElementById('#' + c),
						e = b[c].entity_pos_x,
						j = b[c].entity_pos_y,
						n = b[c].width,
						m = b[c].height,
						g = ig.domHandler.getElementById('#canvas'),
						r = ig.domHandler.getOffsets(g);
					ig.ua.mobile
						? ((g = r.left),
						  (r = r.top),
						  ig.sizeHandler.disableStretchToFitOnMobileFlag
								? ((e =
										Math.floor(
											g +
												e *
													ig.sizeHandler
														.scaleRatioMultiplier.x
										) + 'px'),
								  (j =
										Math.floor(
											r +
												j *
													ig.sizeHandler
														.scaleRatioMultiplier.y
										) + 'px'),
								  (n =
										Math.floor(
											n *
												ig.sizeHandler
													.scaleRatioMultiplier.x
										) + 'px'),
								  (m =
										Math.floor(
											m *
												ig.sizeHandler
													.scaleRatioMultiplier.y
										) + 'px'))
								: ((e =
										Math.floor(
											e * ig.sizeHandler.sizeRatio.x
										) + 'px'),
								  (j =
										Math.floor(
											j * ig.sizeHandler.sizeRatio.y
										) + 'px'),
								  (n =
										Math.floor(
											n * ig.sizeHandler.sizeRatio.x
										) + 'px'),
								  (m =
										Math.floor(
											m * ig.sizeHandler.sizeRatio.y
										) + 'px')))
						: ((g = r.left),
						  (r = r.top),
						  (e = Math.floor(g + e * d) + 'px'),
						  (j = Math.floor(r + j * d) + 'px'),
						  (n = Math.floor(n * d) + 'px'),
						  (m = Math.floor(m * d) + 'px'));
					ig.domHandler.css(f, {
						float: 'left',
						position: 'absolute',
						left: e,
						top: j,
						width: n,
						height: m,
						'z-index': 3,
					});
					b[c]['font-size'] &&
						ig.domHandler.css(f, {
							'font-size': b[c]['font-size'] * d + 'px',
						});
				}
			},
		});
		ig.FullscreenButton = ig.Entity.extend({
			enterImage: null,
			exitImage: null,
			isReady: !1,
			zIndex: 999999,
			identifier: null,
			prevPos: { x: 0, y: 0 },
			invisImagePath: 'media/graphics/misc/invisible.png',
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.Fullscreen.isEnabled() &&
				ig.Fullscreen.enableFullscreenButton
					? this.enterImage.loaded
						? this.initSize()
						: (this.enterImage.loadCallback = function () {
								this.initSize();
						  }.bind(this))
					: this.kill();
			},
			kill: function () {
				this.parent();
			},
			destroy: function () {
				this.parent();
				console.log('destroy');
			},
			initSize: function () {
				this.size.x = this.enterImage.width;
				this.size.y = this.enterImage.height;
				this.createClickableLayer();
				this.isReady = !0;
			},
			createClickableLayer: function () {
				this.identifier = 'fullscreen-button-layer';
				var b = ig.domHandler.getElementById('#' + this.identifier);
				b
					? (ig.domHandler.show(b),
					  ig.domHandler.attr(
							b,
							'onclick',
							'ig.Fullscreen.toggleFullscreen()'
					  ))
					: this.createClickableOutboundLayer();
			},
			update: function (b, c) {
				b = this.pos.x;
				c = this.pos.y;
				this.isReady &&
					!(this.prevPos.x === b && this.prevPos.y === c) &&
					((ig.Fullscreen.divs[this.identifier] = {}),
					(ig.Fullscreen.divs[this.identifier].width = this.size.x),
					(ig.Fullscreen.divs[this.identifier].height = this.size.y),
					(ig.Fullscreen.divs[this.identifier].entity_pos_x =
						this.pos.x),
					(ig.Fullscreen.divs[this.identifier].entity_pos_y =
						this.pos.y),
					(this.prevPos.x = b),
					(this.prevPos.y = c));
			},
			draw: function () {
				this.isReady &&
					(ig.Fullscreen.isFullscreen()
						? this.exitImage.draw(this.pos.x, this.pos.y)
						: this.enterImage.draw(this.pos.x, this.pos.y));
			},
			createClickableOutboundLayer: function () {
				var b = this.identifier,
					c = this.invisImagePath,
					d = ig.domHandler.create('div');
				ig.domHandler.attr(d, 'id', b);
				ig.domHandler.attr(
					d,
					'onclick',
					'ig.Fullscreen.toggleFullscreen()'
				);
				var f = ig.domHandler.create('a'),
					e = ig.domHandler.create('img');
				ig.domHandler.css(e, { width: '100%', height: '100%' });
				ig.domHandler.attr(e, 'src', c);
				c = Math.min(
					ig.sizeHandler.scaleRatioMultiplier.x,
					ig.sizeHandler.scaleRatioMultiplier.y
				);
				if (ig.ua.mobile) {
					var j = ig.domHandler.getElementById('#canvas'),
						j = ig.domHandler.getOffsets(j),
						n = j.left,
						m = j.top;
					console.log(j.left);
					ig.sizeHandler.disableStretchToFitOnMobileFlag
						? ((j =
								Math.floor(
									n +
										this.pos.x *
											ig.sizeHandler.scaleRatioMultiplier
												.x
								) + 'px'),
						  (m =
								Math.floor(
									m +
										this.pos.y *
											ig.sizeHandler.scaleRatioMultiplier
												.y
								) + 'px'),
						  (n =
								Math.floor(
									this.size.x *
										ig.sizeHandler.scaleRatioMultiplier.x
								) + 'px'),
						  (c =
								Math.floor(
									this.size.y *
										ig.sizeHandler.scaleRatioMultiplier.y
								) + 'px'))
						: ((j =
								Math.floor(
									this.pos.x * ig.sizeHandler.sizeRatio.x
								) + 'px'),
						  (m =
								Math.floor(
									this.pos.y * ig.sizeHandler.sizeRatio.y
								) + 'px'),
						  (n =
								Math.floor(
									this.size.x * ig.sizeHandler.sizeRatio.x
								) + 'px'),
						  (c =
								Math.floor(
									this.size.y * ig.sizeHandler.sizeRatio.y
								) + 'px'));
				} else
					(j = ig.domHandler.getElementById('#canvas')),
						(j = ig.domHandler.getOffsets(j)),
						(n = j.left),
						(m = j.top),
						ig.sizeHandler.enableStretchToFitOnDesktopFlag
							? ((j =
									Math.floor(
										n +
											this.pos.x *
												ig.sizeHandler.sizeRatio.x
									) + 'px'),
							  (m =
									Math.floor(
										m +
											this.pos.y *
												ig.sizeHandler.sizeRatio.y
									) + 'px'),
							  (n =
									Math.floor(
										this.size.x * ig.sizeHandler.sizeRatio.x
									) + 'px'),
							  (c =
									Math.floor(
										this.size.y * ig.sizeHandler.sizeRatio.y
									) + 'px'))
							: ((j = Math.floor(n + this.pos.x * c) + 'px'),
							  (m = Math.floor(m + this.pos.y * c) + 'px'),
							  (n = Math.floor(this.size.x * c) + 'px'),
							  (c = Math.floor(this.size.y * c) + 'px'));
				ig.domHandler.css(d, {
					float: 'left',
					position: 'absolute',
					left: j,
					top: m,
					width: n,
					height: c,
					'z-index': 3,
				});
				ig.domHandler.addEvent(
					d,
					'mousemove',
					ig.input.mousemove.bind(ig.input),
					!1
				);
				ig.domHandler.appendChild(f, e);
				ig.domHandler.appendChild(d, f);
				ig.domHandler.appendToBody(d);
				ig.Fullscreen.divs[b] = {};
				ig.Fullscreen.divs[b].width = this.size.x;
				ig.Fullscreen.divs[b].height = this.size.y;
				ig.Fullscreen.divs[b].entity_pos_x = this.pos.x;
				ig.Fullscreen.divs[b].entity_pos_y = this.pos.y;
			},
		});
	});
var Box2D = { SCALE: 0.1 };
(function (b, c) {
	function d() {}
	var f = function () {
		var b,
			c,
			d,
			f,
			g = Function.call,
			r = Object.prototype,
			z = g.bind(r.hasOwnProperty),
			y = g.bind(r.propertyIsEnumerable),
			A = g.bind(r.toString),
			B = z(r, '__defineGetter__');
		B &&
			((b = g.bind(r.__defineGetter__)),
			(c = g.bind(r.__defineSetter__)),
			(d = g.bind(r.__lookupGetter__)),
			(f = g.bind(r.__lookupSetter__)));
		var I = function (b) {
			return (
				null == b || ('object' != typeof b && 'function' != typeof b)
			);
		};
		Object.getPrototypeOf ||
			(Object.getPrototypeOf = function (b) {
				var c = b.__proto__;
				return c || null === c
					? c
					: '[object Function]' === A(b.constructor)
					? b.constructor.prototype
					: b instanceof Object
					? r
					: null;
			});
		g = function (b) {
			try {
				return (
					(b.sentinel = 0),
					0 === Object.getOwnPropertyDescriptor(b, 'sentinel').value
				);
			} catch (c) {
				return !1;
			}
		};
		if (Object.defineProperty) {
			var D = g({});
			if (
				!(
					'undefined' == typeof document ||
					g(document.createElement('div'))
				) ||
				!D
			)
				var t = Object.getOwnPropertyDescriptor;
		}
		if (!Object.getOwnPropertyDescriptor || t)
			Object.getOwnPropertyDescriptor = function (b, c) {
				if (I(b))
					throw new TypeError(
						'Object.getOwnPropertyDescriptor called on a non-object: ' +
							b
					);
				if (t)
					try {
						return t.call(Object, b, c);
					} catch (e) {}
				var g;
				if (!z(b, c)) return g;
				if (((g = { enumerable: y(b, c), configurable: !0 }), B)) {
					var j = b.__proto__,
						E = b !== r;
					E && (b.__proto__ = r);
					var q = d(b, c),
						u = f(b, c);
					if ((E && (b.__proto__ = j), q || u))
						return q && (g.get = q), u && (g.set = u), g;
				}
				return (g.value = b[c]), (g.writable = !0), g;
			};
		if (
			(Object.getOwnPropertyNames ||
				(Object.getOwnPropertyNames = function (b) {
					return Object.keys(b);
				}),
			!Object.create)
		) {
			var G;
			G =
				'undefined' == typeof document
					? function () {
							return { __proto__: null };
					  }
					: function () {
							var b,
								c,
								d,
								e,
								f,
								g = (function () {
									if (!document.domain) return !1;
									try {
										return !!new ActiveXObject('htmlfile');
									} catch (b) {
										return !1;
									}
								})()
									? ((f = new ActiveXObject(
											'htmlfile'
									  )).write('<script>\x3c/script>'),
									  f.close(),
									  (e = f.parentWindow.Object.prototype),
									  (f = null),
									  e)
									: ((c = document.createElement('iframe')),
									  (d =
											document.body ||
											document.documentElement),
									  (c.style.display = 'none'),
									  d.appendChild(c),
									  (c.src = 'javascript:'),
									  (b = c.contentWindow.Object.prototype),
									  d.removeChild(c),
									  (c = null),
									  b);
							delete g.constructor;
							delete g.hasOwnProperty;
							delete g.propertyIsEnumerable;
							delete g.isPrototypeOf;
							delete g.toLocaleString;
							delete g.toString;
							delete g.valueOf;
							var j = function () {};
							return (
								(j.prototype = g),
								(G = function () {
									return new j();
								}),
								new j()
							);
					  };
			Object.create = function (b, c) {
				var d;
				d = function () {};
				if (null === b) d = G();
				else {
					if (null !== b && I(b))
						throw new TypeError(
							'Object prototype may only be an Object or null'
						);
					d.prototype = b;
					(d = new d()).__proto__ = b;
				}
				return void 0 !== c && Object.defineProperties(d, c), d;
			};
		}
		var E,
			D = function (b) {
				try {
					return (
						Object.defineProperty(b, 'sentinel', {}),
						'sentinel' in b
					);
				} catch (c) {
					return !1;
				}
			};
		if (
			Object.defineProperty &&
			((g = D({})),
			(D =
				'undefined' == typeof document ||
				D(document.createElement('div'))),
			!g || !D)
		)
			var L = Object.defineProperty,
				M = Object.defineProperties;
		if (!Object.defineProperty || L)
			Object.defineProperty = function (g, t, E) {
				if (I(g))
					throw new TypeError(
						'Object.defineProperty called on non-object: ' + g
					);
				if (I(E))
					throw new TypeError(
						'Property description must be an object: ' + E
					);
				if (L)
					try {
						return L.call(Object, g, t, E);
					} catch (G) {}
				if ('value' in E)
					if (B && (d(g, t) || f(g, t))) {
						var A = g.__proto__;
						g.__proto__ = r;
						delete g[t];
						g[t] = E.value;
						g.__proto__ = A;
					} else g[t] = E.value;
				else {
					var A = 'get' in E,
						y = 'set' in E;
					if (!B && (A || y))
						throw new TypeError(
							'getters & setters can not be defined on this javascript engine'
						);
					A && b(g, t, E.get);
					y && c(g, t, E.set);
				}
				return g;
			};
		(Object.defineProperties && !M) ||
			(Object.defineProperties = function (b, c) {
				if (M)
					try {
						return M.call(Object, b, c);
					} catch (d) {}
				return (
					Object.keys(c).forEach(function (d) {
						'__proto__' !== d && Object.defineProperty(b, d, c[d]);
					}),
					b
				);
			});
		Object.seal ||
			(Object.seal = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.seal can only be called on Objects.'
					);
				return b;
			});
		Object.freeze ||
			(Object.freeze = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.freeze can only be called on Objects.'
					);
				return b;
			});
		try {
			Object.freeze(function () {});
		} catch (Q) {
			Object.freeze =
				((E = Object.freeze),
				function (b) {
					return 'function' == typeof b ? b : E(b);
				});
		}
		Object.preventExtensions ||
			(Object.preventExtensions = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.preventExtensions can only be called on Objects.'
					);
				return b;
			});
		Object.isSealed ||
			(Object.isSealed = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.isSealed can only be called on Objects.'
					);
				return !1;
			});
		Object.isFrozen ||
			(Object.isFrozen = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.isFrozen can only be called on Objects.'
					);
				return !1;
			});
		Object.isExtensible ||
			(Object.isExtensible = function (b) {
				if (Object(b) !== b)
					throw new TypeError(
						'Object.isExtensible can only be called on Objects.'
					);
				for (var c = ''; z(b, c); ) c += '?';
				b[c] = !0;
				var d = z(b, c);
				return delete b[c], d;
			});
	};
	'function' == typeof define && define.amd
		? define(f)
		: 'object' == typeof exports
		? (module.exports = f())
		: (this.returnExports = f());
	!0;
	b.inherit = function (b, c) {
		d.prototype = c.prototype;
		b.prototype = new d();
		b.prototype.constructor = b;
	};
	b.generateCallback = function (b, c) {
		return function () {
			c.apply(b, arguments);
		};
	};
	b.NVector = function (b) {
		b === c && (b = 0);
		for (var d = Array(b || 0), f = 0; f < b; ++f) d[f] = 0;
		return d;
	};
	b.is = function (b, d) {
		return null === b
			? !1
			: (d instanceof Function && b instanceof d) ||
			  (b.constructor.__implements != c && b.constructor.__implements[d])
			? !0
			: !1;
	};
	b.parseUInt = function (b) {
		return Math.abs(parseInt(b));
	};
})(Box2D);
var Vector = Array,
	Vector_a2j_Number = Box2D.NVector;
'undefined' === typeof Box2D && (Box2D = {});
'undefined' === typeof Box2D.Collision && (Box2D.Collision = {});
'undefined' === typeof Box2D.Collision.Shapes && (Box2D.Collision.Shapes = {});
'undefined' === typeof Box2D.Common && (Box2D.Common = {});
'undefined' === typeof Box2D.Common.Math && (Box2D.Common.Math = {});
'undefined' === typeof Box2D.Dynamics && (Box2D.Dynamics = {});
'undefined' === typeof Box2D.Dynamics.Contacts &&
	(Box2D.Dynamics.Contacts = {});
'undefined' === typeof Box2D.Dynamics.Controllers &&
	(Box2D.Dynamics.Controllers = {});
'undefined' === typeof Box2D.Dynamics.Joints && (Box2D.Dynamics.Joints = {});
(function () {
	function b() {
		b.b2AABB.apply(this, arguments);
	}
	function c() {
		c.b2Bound.apply(this, arguments);
	}
	function d() {
		d.b2BoundValues.apply(this, arguments);
		this.constructor === d && this.b2BoundValues.apply(this, arguments);
	}
	function f() {
		f.b2Collision.apply(this, arguments);
	}
	function e() {
		e.b2ContactID.apply(this, arguments);
		this.constructor === e && this.b2ContactID.apply(this, arguments);
	}
	function j() {
		j.b2ContactPoint.apply(this, arguments);
	}
	function n() {
		n.b2Distance.apply(this, arguments);
	}
	function m() {
		m.b2DistanceInput.apply(this, arguments);
	}
	function g() {
		g.b2DistanceOutput.apply(this, arguments);
	}
	function r() {
		r.b2DistanceProxy.apply(this, arguments);
	}
	function z() {
		z.b2DynamicTree.apply(this, arguments);
		this.constructor === z && this.b2DynamicTree.apply(this, arguments);
	}
	function y() {
		y.b2DynamicTreeBroadPhase.apply(this, arguments);
	}
	function A() {
		A.b2DynamicTreeNode.apply(this, arguments);
	}
	function B() {
		B.b2DynamicTreePair.apply(this, arguments);
	}
	function I() {
		I.b2Manifold.apply(this, arguments);
		this.constructor === I && this.b2Manifold.apply(this, arguments);
	}
	function D() {
		D.b2ManifoldPoint.apply(this, arguments);
		this.constructor === D && this.b2ManifoldPoint.apply(this, arguments);
	}
	function t() {
		t.b2Point.apply(this, arguments);
	}
	function G() {
		G.b2RayCastInput.apply(this, arguments);
		this.constructor === G && this.b2RayCastInput.apply(this, arguments);
	}
	function E() {
		E.b2RayCastOutput.apply(this, arguments);
	}
	function L() {
		L.b2Segment.apply(this, arguments);
	}
	function M() {
		M.b2SeparationFunction.apply(this, arguments);
	}
	function Q() {
		Q.b2Simplex.apply(this, arguments);
		this.constructor === Q && this.b2Simplex.apply(this, arguments);
	}
	function J() {
		J.b2SimplexCache.apply(this, arguments);
	}
	function ea() {
		ea.b2SimplexVertex.apply(this, arguments);
	}
	function O() {
		O.b2TimeOfImpact.apply(this, arguments);
	}
	function P() {
		P.b2TOIInput.apply(this, arguments);
	}
	function aa() {
		aa.b2WorldManifold.apply(this, arguments);
		this.constructor === aa && this.b2WorldManifold.apply(this, arguments);
	}
	function U() {
		U.ClipVertex.apply(this, arguments);
	}
	function q() {
		q.Features.apply(this, arguments);
	}
	function u() {
		u.b2CircleShape.apply(this, arguments);
		this.constructor === u && this.b2CircleShape.apply(this, arguments);
	}
	function F() {
		F.b2EdgeChainDef.apply(this, arguments);
		this.constructor === F && this.b2EdgeChainDef.apply(this, arguments);
	}
	function C() {
		C.b2EdgeShape.apply(this, arguments);
		this.constructor === C && this.b2EdgeShape.apply(this, arguments);
	}
	function H() {
		H.b2MassData.apply(this, arguments);
	}
	function Z() {
		Z.b2PolygonShape.apply(this, arguments);
		this.constructor === Z && this.b2PolygonShape.apply(this, arguments);
	}
	function R() {
		R.b2Shape.apply(this, arguments);
		this.constructor === R && this.b2Shape.apply(this, arguments);
	}
	function l() {
		l.b2Color.apply(this, arguments);
		this.constructor === l && this.b2Color.apply(this, arguments);
	}
	function s() {
		s.b2Settings.apply(this, arguments);
	}
	function K() {
		K.b2Mat22.apply(this, arguments);
		this.constructor === K && this.b2Mat22.apply(this, arguments);
	}
	function x() {
		x.b2Mat33.apply(this, arguments);
		this.constructor === x && this.b2Mat33.apply(this, arguments);
	}
	function N() {
		N.b2Math.apply(this, arguments);
	}
	function V() {
		V.b2Sweep.apply(this, arguments);
	}
	function fa() {
		fa.b2Transform.apply(this, arguments);
		this.constructor === fa && this.b2Transform.apply(this, arguments);
	}
	function ha() {
		ha.b2Vec2.apply(this, arguments);
		this.constructor === ha && this.b2Vec2.apply(this, arguments);
	}
	function la() {
		la.b2Vec3.apply(this, arguments);
		this.constructor === la && this.b2Vec3.apply(this, arguments);
	}
	function oa() {
		oa.b2Body.apply(this, arguments);
		this.constructor === oa && this.b2Body.apply(this, arguments);
	}
	function pa() {
		pa.b2BodyDef.apply(this, arguments);
		this.constructor === pa && this.b2BodyDef.apply(this, arguments);
	}
	function va() {
		va.b2ContactFilter.apply(this, arguments);
	}
	function X() {
		X.b2ContactImpulse.apply(this, arguments);
	}
	function Eb() {
		Eb.b2ContactListener.apply(this, arguments);
	}
	function za() {
		za.b2ContactManager.apply(this, arguments);
		this.constructor === za && this.b2ContactManager.apply(this, arguments);
	}
	function bb() {
		bb.b2DebugDraw.apply(this, arguments);
		this.constructor === bb && this.b2DebugDraw.apply(this, arguments);
	}
	function db() {
		db.b2DestructionListener.apply(this, arguments);
	}
	function Ka() {
		Ka.b2FilterData.apply(this, arguments);
	}
	function La() {
		La.b2Fixture.apply(this, arguments);
		this.constructor === La && this.b2Fixture.apply(this, arguments);
	}
	function eb() {
		eb.b2FixtureDef.apply(this, arguments);
		this.constructor === eb && this.b2FixtureDef.apply(this, arguments);
	}
	function Ma() {
		Ma.b2Island.apply(this, arguments);
		this.constructor === Ma && this.b2Island.apply(this, arguments);
	}
	function ob() {
		ob.b2TimeStep.apply(this, arguments);
	}
	function pb() {
		pb.b2World.apply(this, arguments);
		this.constructor === pb && this.b2World.apply(this, arguments);
	}
	function ca() {
		ca.b2CircleContact.apply(this, arguments);
	}
	function p() {
		p.b2Contact.apply(this, arguments);
		this.constructor === p && this.b2Contact.apply(this, arguments);
	}
	function qb() {
		qb.b2ContactConstraint.apply(this, arguments);
		this.constructor === qb &&
			this.b2ContactConstraint.apply(this, arguments);
	}
	function Fb() {
		Fb.b2ContactConstraintPoint.apply(this, arguments);
	}
	function Gb() {
		Gb.b2ContactEdge.apply(this, arguments);
	}
	function rb() {
		rb.b2ContactFactory.apply(this, arguments);
		this.constructor === rb && this.b2ContactFactory.apply(this, arguments);
	}
	function Aa() {
		Aa.b2ContactRegister.apply(this, arguments);
	}
	function fb() {
		fb.b2ContactResult.apply(this, arguments);
	}
	function ba() {
		ba.b2ContactSolver.apply(this, arguments);
		this.constructor === ba && this.b2ContactSolver.apply(this, arguments);
	}
	function ib() {
		ib.b2EdgeAndCircleContact.apply(this, arguments);
	}
	function qa() {
		qa.b2NullContact.apply(this, arguments);
		this.constructor === qa && this.b2NullContact.apply(this, arguments);
	}
	function sa() {
		sa.b2PolyAndCircleContact.apply(this, arguments);
	}
	function jb() {
		jb.b2PolyAndEdgeContact.apply(this, arguments);
	}
	function tb() {
		tb.b2PolygonContact.apply(this, arguments);
	}
	function ub() {
		ub.b2PositionSolverManifold.apply(this, arguments);
		this.constructor === ub &&
			this.b2PositionSolverManifold.apply(this, arguments);
	}
	function Jb() {
		Jb.b2BuoyancyController.apply(this, arguments);
	}
	function vb() {
		vb.b2ConstantAccelController.apply(this, arguments);
	}
	function Da() {
		Da.b2ConstantForceController.apply(this, arguments);
	}
	function gb() {
		gb.b2Controller.apply(this, arguments);
	}
	function wb() {
		wb.b2ControllerEdge.apply(this, arguments);
	}
	function Ua() {
		Ua.b2GravityController.apply(this, arguments);
	}
	function Va() {
		Va.b2TensorDampingController.apply(this, arguments);
	}
	function Wa() {
		Wa.b2DistanceJoint.apply(this, arguments);
		this.constructor === Wa && this.b2DistanceJoint.apply(this, arguments);
	}
	function Pa() {
		Pa.b2DistanceJointDef.apply(this, arguments);
		this.constructor === Pa &&
			this.b2DistanceJointDef.apply(this, arguments);
	}
	function Xa() {
		Xa.b2FrictionJoint.apply(this, arguments);
		this.constructor === Xa && this.b2FrictionJoint.apply(this, arguments);
	}
	function Za() {
		Za.b2FrictionJointDef.apply(this, arguments);
		this.constructor === Za &&
			this.b2FrictionJointDef.apply(this, arguments);
	}
	function Fa() {
		Fa.b2GearJoint.apply(this, arguments);
		this.constructor === Fa && this.b2GearJoint.apply(this, arguments);
	}
	function da() {
		da.b2GearJointDef.apply(this, arguments);
		this.constructor === da && this.b2GearJointDef.apply(this, arguments);
	}
	function W() {
		W.b2Jacobian.apply(this, arguments);
	}
	function Ra() {
		Ra.b2Joint.apply(this, arguments);
		this.constructor === Ra && this.b2Joint.apply(this, arguments);
	}
	function kb() {
		kb.b2JointDef.apply(this, arguments);
		this.constructor === kb && this.b2JointDef.apply(this, arguments);
	}
	function Oa() {
		Oa.b2JointEdge.apply(this, arguments);
	}
	function $a() {
		$a.b2LineJoint.apply(this, arguments);
		this.constructor === $a && this.b2LineJoint.apply(this, arguments);
	}
	function hb() {
		hb.b2LineJointDef.apply(this, arguments);
		this.constructor === hb && this.b2LineJointDef.apply(this, arguments);
	}
	function Qa() {
		Qa.b2MouseJoint.apply(this, arguments);
		this.constructor === Qa && this.b2MouseJoint.apply(this, arguments);
	}
	function ya() {
		ya.b2MouseJointDef.apply(this, arguments);
		this.constructor === ya && this.b2MouseJointDef.apply(this, arguments);
	}
	function Ga() {
		Ga.b2PrismaticJoint.apply(this, arguments);
		this.constructor === Ga && this.b2PrismaticJoint.apply(this, arguments);
	}
	function xa() {
		xa.b2PrismaticJointDef.apply(this, arguments);
		this.constructor === xa &&
			this.b2PrismaticJointDef.apply(this, arguments);
	}
	function Y() {
		Y.b2PulleyJoint.apply(this, arguments);
		this.constructor === Y && this.b2PulleyJoint.apply(this, arguments);
	}
	function na() {
		na.b2PulleyJointDef.apply(this, arguments);
		this.constructor === na && this.b2PulleyJointDef.apply(this, arguments);
	}
	function ma() {
		ma.b2RevoluteJoint.apply(this, arguments);
		this.constructor === ma && this.b2RevoluteJoint.apply(this, arguments);
	}
	function ja() {
		ja.b2RevoluteJointDef.apply(this, arguments);
		this.constructor === ja &&
			this.b2RevoluteJointDef.apply(this, arguments);
	}
	function Ba() {
		Ba.b2WeldJoint.apply(this, arguments);
		this.constructor === Ba && this.b2WeldJoint.apply(this, arguments);
	}
	function Sa() {
		Sa.b2WeldJointDef.apply(this, arguments);
		this.constructor === Sa && this.b2WeldJointDef.apply(this, arguments);
	}
	Box2D.Collision.IBroadPhase = 'Box2D.Collision.IBroadPhase';
	Box2D.Collision.b2AABB = b;
	Box2D.Collision.b2Bound = c;
	Box2D.Collision.b2BoundValues = d;
	Box2D.Collision.b2Collision = f;
	Box2D.Collision.b2ContactID = e;
	Box2D.Collision.b2ContactPoint = j;
	Box2D.Collision.b2Distance = n;
	Box2D.Collision.b2DistanceInput = m;
	Box2D.Collision.b2DistanceOutput = g;
	Box2D.Collision.b2DistanceProxy = r;
	Box2D.Collision.b2DynamicTree = z;
	Box2D.Collision.b2DynamicTreeBroadPhase = y;
	Box2D.Collision.b2DynamicTreeNode = A;
	Box2D.Collision.b2DynamicTreePair = B;
	Box2D.Collision.b2Manifold = I;
	Box2D.Collision.b2ManifoldPoint = D;
	Box2D.Collision.b2Point = t;
	Box2D.Collision.b2RayCastInput = G;
	Box2D.Collision.b2RayCastOutput = E;
	Box2D.Collision.b2Segment = L;
	Box2D.Collision.b2SeparationFunction = M;
	Box2D.Collision.b2Simplex = Q;
	Box2D.Collision.b2SimplexCache = J;
	Box2D.Collision.b2SimplexVertex = ea;
	Box2D.Collision.b2TimeOfImpact = O;
	Box2D.Collision.b2TOIInput = P;
	Box2D.Collision.b2WorldManifold = aa;
	Box2D.Collision.ClipVertex = U;
	Box2D.Collision.Features = q;
	Box2D.Collision.Shapes.b2CircleShape = u;
	Box2D.Collision.Shapes.b2EdgeChainDef = F;
	Box2D.Collision.Shapes.b2EdgeShape = C;
	Box2D.Collision.Shapes.b2MassData = H;
	Box2D.Collision.Shapes.b2PolygonShape = Z;
	Box2D.Collision.Shapes.b2Shape = R;
	Box2D.Common.b2internal = 'Box2D.Common.b2internal';
	Box2D.Common.b2Color = l;
	Box2D.Common.b2Settings = s;
	Box2D.Common.Math.b2Mat22 = K;
	Box2D.Common.Math.b2Mat33 = x;
	Box2D.Common.Math.b2Math = N;
	Box2D.Common.Math.b2Sweep = V;
	Box2D.Common.Math.b2Transform = fa;
	Box2D.Common.Math.b2Vec2 = ha;
	Box2D.Common.Math.b2Vec3 = la;
	Box2D.Dynamics.b2Body = oa;
	Box2D.Dynamics.b2BodyDef = pa;
	Box2D.Dynamics.b2ContactFilter = va;
	Box2D.Dynamics.b2ContactImpulse = X;
	Box2D.Dynamics.b2ContactListener = Eb;
	Box2D.Dynamics.b2ContactManager = za;
	Box2D.Dynamics.b2DebugDraw = bb;
	Box2D.Dynamics.b2DestructionListener = db;
	Box2D.Dynamics.b2FilterData = Ka;
	Box2D.Dynamics.b2Fixture = La;
	Box2D.Dynamics.b2FixtureDef = eb;
	Box2D.Dynamics.b2Island = Ma;
	Box2D.Dynamics.b2TimeStep = ob;
	Box2D.Dynamics.b2World = pb;
	Box2D.Dynamics.Contacts.b2CircleContact = ca;
	Box2D.Dynamics.Contacts.b2Contact = p;
	Box2D.Dynamics.Contacts.b2ContactConstraint = qb;
	Box2D.Dynamics.Contacts.b2ContactConstraintPoint = Fb;
	Box2D.Dynamics.Contacts.b2ContactEdge = Gb;
	Box2D.Dynamics.Contacts.b2ContactFactory = rb;
	Box2D.Dynamics.Contacts.b2ContactRegister = Aa;
	Box2D.Dynamics.Contacts.b2ContactResult = fb;
	Box2D.Dynamics.Contacts.b2ContactSolver = ba;
	Box2D.Dynamics.Contacts.b2EdgeAndCircleContact = ib;
	Box2D.Dynamics.Contacts.b2NullContact = qa;
	Box2D.Dynamics.Contacts.b2PolyAndCircleContact = sa;
	Box2D.Dynamics.Contacts.b2PolyAndEdgeContact = jb;
	Box2D.Dynamics.Contacts.b2PolygonContact = tb;
	Box2D.Dynamics.Contacts.b2PositionSolverManifold = ub;
	Box2D.Dynamics.Controllers.b2BuoyancyController = Jb;
	Box2D.Dynamics.Controllers.b2ConstantAccelController = vb;
	Box2D.Dynamics.Controllers.b2ConstantForceController = Da;
	Box2D.Dynamics.Controllers.b2Controller = gb;
	Box2D.Dynamics.Controllers.b2ControllerEdge = wb;
	Box2D.Dynamics.Controllers.b2GravityController = Ua;
	Box2D.Dynamics.Controllers.b2TensorDampingController = Va;
	Box2D.Dynamics.Joints.b2DistanceJoint = Wa;
	Box2D.Dynamics.Joints.b2DistanceJointDef = Pa;
	Box2D.Dynamics.Joints.b2FrictionJoint = Xa;
	Box2D.Dynamics.Joints.b2FrictionJointDef = Za;
	Box2D.Dynamics.Joints.b2GearJoint = Fa;
	Box2D.Dynamics.Joints.b2GearJointDef = da;
	Box2D.Dynamics.Joints.b2Jacobian = W;
	Box2D.Dynamics.Joints.b2Joint = Ra;
	Box2D.Dynamics.Joints.b2JointDef = kb;
	Box2D.Dynamics.Joints.b2JointEdge = Oa;
	Box2D.Dynamics.Joints.b2LineJoint = $a;
	Box2D.Dynamics.Joints.b2LineJointDef = hb;
	Box2D.Dynamics.Joints.b2MouseJoint = Qa;
	Box2D.Dynamics.Joints.b2MouseJointDef = ya;
	Box2D.Dynamics.Joints.b2PrismaticJoint = Ga;
	Box2D.Dynamics.Joints.b2PrismaticJointDef = xa;
	Box2D.Dynamics.Joints.b2PulleyJoint = Y;
	Box2D.Dynamics.Joints.b2PulleyJointDef = na;
	Box2D.Dynamics.Joints.b2RevoluteJoint = ma;
	Box2D.Dynamics.Joints.b2RevoluteJointDef = ja;
	Box2D.Dynamics.Joints.b2WeldJoint = Ba;
	Box2D.Dynamics.Joints.b2WeldJointDef = Sa;
})();
Box2D.postDefs = [];
(function () {
	var b = Box2D.Collision.Shapes.b2CircleShape,
		c = Box2D.Collision.Shapes.b2PolygonShape,
		d = Box2D.Collision.Shapes.b2Shape,
		f = Box2D.Common.b2Settings,
		e = Box2D.Common.Math.b2Math,
		j = Box2D.Common.Math.b2Sweep,
		n = Box2D.Common.Math.b2Transform,
		m = Box2D.Common.Math.b2Vec2,
		g = Box2D.Collision.b2AABB,
		r = Box2D.Collision.b2Bound,
		z = Box2D.Collision.b2BoundValues,
		y = Box2D.Collision.b2Collision,
		A = Box2D.Collision.b2ContactID,
		B = Box2D.Collision.b2ContactPoint,
		I = Box2D.Collision.b2Distance,
		D = Box2D.Collision.b2DistanceInput,
		t = Box2D.Collision.b2DistanceOutput,
		G = Box2D.Collision.b2DistanceProxy,
		E = Box2D.Collision.b2DynamicTree,
		L = Box2D.Collision.b2DynamicTreeBroadPhase,
		M = Box2D.Collision.b2DynamicTreeNode,
		Q = Box2D.Collision.b2DynamicTreePair,
		J = Box2D.Collision.b2Manifold,
		ea = Box2D.Collision.b2ManifoldPoint,
		O = Box2D.Collision.b2Point,
		P = Box2D.Collision.b2RayCastInput,
		aa = Box2D.Collision.b2RayCastOutput,
		U = Box2D.Collision.b2Segment,
		q = Box2D.Collision.b2SeparationFunction,
		u = Box2D.Collision.b2Simplex,
		F = Box2D.Collision.b2SimplexCache,
		C = Box2D.Collision.b2SimplexVertex,
		H = Box2D.Collision.b2TimeOfImpact,
		Z = Box2D.Collision.b2TOIInput,
		R = Box2D.Collision.b2WorldManifold,
		l = Box2D.Collision.ClipVertex,
		s = Box2D.Collision.Features,
		K = Box2D.Collision.IBroadPhase;
	g.b2AABB = function () {
		this.lowerBound = new m();
		this.upperBound = new m();
	};
	g.prototype.IsValid = function () {
		var b = this.upperBound.y - this.lowerBound.y;
		return (
			0 <= this.upperBound.x - this.lowerBound.x &&
			0 <= b &&
			this.lowerBound.IsValid() &&
			this.upperBound.IsValid()
		);
	};
	g.prototype.GetCenter = function () {
		return new m(
			(this.lowerBound.x + this.upperBound.x) / 2,
			(this.lowerBound.y + this.upperBound.y) / 2
		);
	};
	g.prototype.GetExtents = function () {
		return new m(
			(this.upperBound.x - this.lowerBound.x) / 2,
			(this.upperBound.y - this.lowerBound.y) / 2
		);
	};
	g.prototype.Contains = function (b) {
		return (
			this.lowerBound.x <= b.lowerBound.x &&
			this.lowerBound.y <= b.lowerBound.y &&
			b.upperBound.x <= this.upperBound.x &&
			b.upperBound.y <= this.upperBound.y
		);
	};
	g.prototype.RayCast = function (b, c) {
		var d = -Number.MAX_VALUE,
			l = Number.MAX_VALUE,
			e = c.p1.x,
			f = c.p1.y,
			g = c.p2.x - c.p1.x,
			j = c.p2.y - c.p1.y,
			q = Math.abs(j),
			s = b.normal,
			m = 0,
			u = 0,
			C = 0;
		if (Math.abs(g) < Number.MIN_VALUE) {
			if (e < this.lowerBound.x || this.upperBound.x < e) return !1;
		} else if (
			((m = 1 / g),
			(u = (this.lowerBound.x - e) * m),
			(m *= this.upperBound.x - e),
			(C = -1),
			u > m && ((C = u), (u = m), (m = C), (C = 1)),
			u > d && ((s.x = C), (s.y = 0), (d = u)),
			(l = Math.min(l, m)),
			d > l)
		)
			return !1;
		if (q < Number.MIN_VALUE) {
			if (f < this.lowerBound.y || this.upperBound.y < f) return !1;
		} else if (
			((m = 1 / j),
			(u = (this.lowerBound.y - f) * m),
			(m *= this.upperBound.y - f),
			(C = -1),
			u > m && ((C = u), (u = m), (m = C), (C = 1)),
			u > d && ((s.y = C), (s.x = 0), (d = u)),
			(l = Math.min(l, m)),
			d > l)
		)
			return !1;
		b.fraction = d;
		return !0;
	};
	g.prototype.TestOverlap = function (b) {
		var c = b.lowerBound.y - this.upperBound.y,
			d = this.lowerBound.y - b.upperBound.y;
		return 0 < b.lowerBound.x - this.upperBound.x ||
			0 < c ||
			0 < this.lowerBound.x - b.upperBound.x ||
			0 < d
			? !1
			: !0;
	};
	g.Combine = function (b, c) {
		var d = new g();
		d.Combine(b, c);
		return d;
	};
	g.prototype.Combine = function (b, c) {
		this.lowerBound.x = Math.min(b.lowerBound.x, c.lowerBound.x);
		this.lowerBound.y = Math.min(b.lowerBound.y, c.lowerBound.y);
		this.upperBound.x = Math.max(b.upperBound.x, c.upperBound.x);
		this.upperBound.y = Math.max(b.upperBound.y, c.upperBound.y);
	};
	r.b2Bound = function () {};
	r.prototype.IsLower = function () {
		return 0 == (this.value & 1);
	};
	r.prototype.IsUpper = function () {
		return 1 == (this.value & 1);
	};
	r.prototype.Swap = function (b) {
		var c = this.value,
			d = this.proxy,
			l = this.stabbingCount;
		this.value = b.value;
		this.proxy = b.proxy;
		this.stabbingCount = b.stabbingCount;
		b.value = c;
		b.proxy = d;
		b.stabbingCount = l;
	};
	z.b2BoundValues = function () {};
	z.prototype.b2BoundValues = function () {
		this.lowerValues = new Vector_a2j_Number();
		this.lowerValues[0] = 0;
		this.lowerValues[1] = 0;
		this.upperValues = new Vector_a2j_Number();
		this.upperValues[0] = 0;
		this.upperValues[1] = 0;
	};
	y.b2Collision = function () {};
	y.ClipSegmentToLine = function (b, c, d, l) {
		void 0 === l && (l = 0);
		var e,
			f = 0;
		e = c[0];
		var g = e.v;
		e = c[1];
		var j = e.v,
			q = d.x * g.x + d.y * g.y - l;
		e = d.x * j.x + d.y * j.y - l;
		0 >= q && b[f++].Set(c[0]);
		0 >= e && b[f++].Set(c[1]);
		0 > q * e &&
			((d = q / (q - e)),
			(e = b[f]),
			(e = e.v),
			(e.x = g.x + d * (j.x - g.x)),
			(e.y = g.y + d * (j.y - g.y)),
			(e = b[f]),
			(e.id = (0 < q ? c[0] : c[1]).id),
			++f);
		return f;
	};
	y.EdgeSeparation = function (b, c, d, l, e) {
		void 0 === d && (d = 0);
		parseInt(b.m_vertexCount);
		var f = b.m_vertices;
		b = b.m_normals;
		var g = parseInt(l.m_vertexCount),
			j = l.m_vertices,
			q,
			s;
		q = c.R;
		s = b[d];
		b = q.col1.x * s.x + q.col2.x * s.y;
		l = q.col1.y * s.x + q.col2.y * s.y;
		q = e.R;
		var m = q.col1.x * b + q.col1.y * l;
		q = q.col2.x * b + q.col2.y * l;
		for (var u = 0, C = Number.MAX_VALUE, K = 0; K < g; ++K)
			(s = j[K]), (s = s.x * m + s.y * q), s < C && ((C = s), (u = K));
		s = f[d];
		q = c.R;
		d = c.position.x + (q.col1.x * s.x + q.col2.x * s.y);
		c = c.position.y + (q.col1.y * s.x + q.col2.y * s.y);
		s = j[u];
		q = e.R;
		f = e.position.x + (q.col1.x * s.x + q.col2.x * s.y);
		e = e.position.y + (q.col1.y * s.x + q.col2.y * s.y);
		return (f - d) * b + (e - c) * l;
	};
	y.FindMaxSeparation = function (b, c, d, l, e) {
		var f = parseInt(c.m_vertexCount),
			g = c.m_normals,
			j,
			q;
		q = e.R;
		j = l.m_centroid;
		var s = e.position.x + (q.col1.x * j.x + q.col2.x * j.y),
			m = e.position.y + (q.col1.y * j.x + q.col2.y * j.y);
		q = d.R;
		j = c.m_centroid;
		s -= d.position.x + (q.col1.x * j.x + q.col2.x * j.y);
		m -= d.position.y + (q.col1.y * j.x + q.col2.y * j.y);
		q = s * d.R.col1.x + m * d.R.col1.y;
		for (
			var m = s * d.R.col2.x + m * d.R.col2.y,
				s = 0,
				u = -Number.MAX_VALUE,
				C = 0;
			C < f;
			++C
		)
			(j = g[C]), (j = j.x * q + j.y * m), j > u && ((u = j), (s = C));
		g = y.EdgeSeparation(c, d, s, l, e);
		j = parseInt(0 <= s - 1 ? s - 1 : f - 1);
		q = y.EdgeSeparation(c, d, j, l, e);
		var m = parseInt(s + 1 < f ? s + 1 : 0),
			u = y.EdgeSeparation(c, d, m, l, e),
			K = 0,
			t = 0;
		if (q > g && q > u) (t = -1), (C = j), (K = q);
		else if (u > g) (t = 1), (C = m), (K = u);
		else return (b[0] = s), g;
		for (;;)
			if (
				((s =
					-1 == t
						? 0 <= C - 1
							? C - 1
							: f - 1
						: C + 1 < f
						? C + 1
						: 0),
				(g = y.EdgeSeparation(c, d, s, l, e)),
				g > K)
			)
				(C = s), (K = g);
			else break;
		b[0] = C;
		return K;
	};
	y.FindIncidentEdge = function (b, c, d, l, e, f) {
		void 0 === l && (l = 0);
		parseInt(c.m_vertexCount);
		var g = c.m_normals,
			j = parseInt(e.m_vertexCount);
		c = e.m_vertices;
		e = e.m_normals;
		var q;
		q = d.R;
		d = g[l];
		var g = q.col1.x * d.x + q.col2.x * d.y,
			s = q.col1.y * d.x + q.col2.y * d.y;
		q = f.R;
		d = q.col1.x * g + q.col1.y * s;
		s = q.col2.x * g + q.col2.y * s;
		g = d;
		q = 0;
		for (var m = Number.MAX_VALUE, u = 0; u < j; ++u)
			(d = e[u]), (d = g * d.x + s * d.y), d < m && ((m = d), (q = u));
		e = parseInt(q);
		g = parseInt(e + 1 < j ? e + 1 : 0);
		j = b[0];
		d = c[e];
		q = f.R;
		j.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
		j.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
		j.id.features.referenceEdge = l;
		j.id.features.incidentEdge = e;
		j.id.features.incidentVertex = 0;
		j = b[1];
		d = c[g];
		q = f.R;
		j.v.x = f.position.x + (q.col1.x * d.x + q.col2.x * d.y);
		j.v.y = f.position.y + (q.col1.y * d.x + q.col2.y * d.y);
		j.id.features.referenceEdge = l;
		j.id.features.incidentEdge = g;
		j.id.features.incidentVertex = 1;
	};
	y.MakeClipPointVector = function () {
		var b = new Vector(2);
		b[0] = new l();
		b[1] = new l();
		return b;
	};
	y.CollidePolygons = function (b, c, d, l, e) {
		var g;
		b.m_pointCount = 0;
		var j = c.m_radius + l.m_radius;
		y.s_edgeAO[0] = 0;
		var q = y.FindMaxSeparation(y.s_edgeAO, c, d, l, e);
		g = y.s_edgeAO[0];
		if (!(q > j)) {
			var s;
			y.s_edgeBO[0] = 0;
			var m = y.FindMaxSeparation(y.s_edgeBO, l, e, c, d);
			s = y.s_edgeBO[0];
			if (!(m > j)) {
				var u = 0,
					C = 0;
				m > 0.98 * q + 0.001
					? ((q = l),
					  (l = c),
					  (c = e),
					  (u = s),
					  (b.m_type = J.e_faceB),
					  (C = 1))
					: ((q = c),
					  (c = d),
					  (d = e),
					  (u = g),
					  (b.m_type = J.e_faceA),
					  (C = 0));
				g = y.s_incidentEdge;
				y.FindIncidentEdge(g, q, c, u, l, d);
				s = parseInt(q.m_vertexCount);
				e = q.m_vertices;
				var q = e[u],
					K;
				K = u + 1 < s ? e[parseInt(u + 1)] : e[0];
				u = y.s_localTangent;
				u.Set(K.x - q.x, K.y - q.y);
				u.Normalize();
				e = y.s_localNormal;
				e.x = u.y;
				e.y = -u.x;
				l = y.s_planePoint;
				l.Set(0.5 * (q.x + K.x), 0.5 * (q.y + K.y));
				m = y.s_tangent;
				s = c.R;
				m.x = s.col1.x * u.x + s.col2.x * u.y;
				m.y = s.col1.y * u.x + s.col2.y * u.y;
				var t = y.s_tangent2;
				t.x = -m.x;
				t.y = -m.y;
				u = y.s_normal;
				u.x = m.y;
				u.y = -m.x;
				var F = y.s_v11,
					H = y.s_v12;
				F.x = c.position.x + (s.col1.x * q.x + s.col2.x * q.y);
				F.y = c.position.y + (s.col1.y * q.x + s.col2.y * q.y);
				H.x = c.position.x + (s.col1.x * K.x + s.col2.x * K.y);
				H.y = c.position.y + (s.col1.y * K.x + s.col2.y * K.y);
				c = u.x * F.x + u.y * F.y;
				s = m.x * H.x + m.y * H.y + j;
				K = y.s_clipPoints1;
				q = y.s_clipPoints2;
				H = y.ClipSegmentToLine(K, g, t, -m.x * F.x - m.y * F.y + j);
				if (
					!(2 > H) &&
					((H = y.ClipSegmentToLine(q, K, m, s)), !(2 > H))
				) {
					b.m_localPlaneNormal.SetV(e);
					b.m_localPoint.SetV(l);
					for (l = e = 0; l < f.b2_maxManifoldPoints; ++l)
						(g = q[l]),
							u.x * g.v.x + u.y * g.v.y - c <= j &&
								((m = b.m_points[e]),
								(s = d.R),
								(t = g.v.x - d.position.x),
								(F = g.v.y - d.position.y),
								(m.m_localPoint.x =
									t * s.col1.x + F * s.col1.y),
								(m.m_localPoint.y =
									t * s.col2.x + F * s.col2.y),
								m.m_id.Set(g.id),
								(m.m_id.features.flip = C),
								++e);
					b.m_pointCount = e;
				}
			}
		}
	};
	y.CollideCircles = function (b, c, d, l, e) {
		b.m_pointCount = 0;
		var f, g;
		f = d.R;
		g = c.m_p;
		var q = d.position.x + (f.col1.x * g.x + f.col2.x * g.y);
		d = d.position.y + (f.col1.y * g.x + f.col2.y * g.y);
		f = e.R;
		g = l.m_p;
		q = e.position.x + (f.col1.x * g.x + f.col2.x * g.y) - q;
		e = e.position.y + (f.col1.y * g.x + f.col2.y * g.y) - d;
		f = c.m_radius + l.m_radius;
		q * q + e * e > f * f ||
			((b.m_type = J.e_circles),
			b.m_localPoint.SetV(c.m_p),
			b.m_localPlaneNormal.SetZero(),
			(b.m_pointCount = 1),
			b.m_points[0].m_localPoint.SetV(l.m_p),
			(b.m_points[0].m_id.key = 0));
	};
	y.CollidePolygonAndCircle = function (b, c, d, l, e) {
		var f = (b.m_pointCount = 0),
			g = 0,
			q,
			j;
		j = e.R;
		q = l.m_p;
		var s = e.position.y + (j.col1.y * q.x + j.col2.y * q.y),
			f = e.position.x + (j.col1.x * q.x + j.col2.x * q.y) - d.position.x,
			g = s - d.position.y;
		j = d.R;
		d = f * j.col1.x + g * j.col1.y;
		j = f * j.col2.x + g * j.col2.y;
		var m = 0,
			s = -Number.MAX_VALUE;
		e = c.m_radius + l.m_radius;
		var u = parseInt(c.m_vertexCount),
			C = c.m_vertices;
		c = c.m_normals;
		for (var K = 0; K < u; ++K) {
			q = C[K];
			f = d - q.x;
			g = j - q.y;
			q = c[K];
			f = q.x * f + q.y * g;
			if (f > e) return;
			f > s && ((s = f), (m = K));
		}
		f = parseInt(m);
		g = parseInt(f + 1 < u ? f + 1 : 0);
		q = C[f];
		C = C[g];
		if (s < Number.MIN_VALUE)
			(b.m_pointCount = 1),
				(b.m_type = J.e_faceA),
				b.m_localPlaneNormal.SetV(c[m]),
				(b.m_localPoint.x = 0.5 * (q.x + C.x)),
				(b.m_localPoint.y = 0.5 * (q.y + C.y));
		else if (
			((s = (d - C.x) * (q.x - C.x) + (j - C.y) * (q.y - C.y)),
			0 >= (d - q.x) * (C.x - q.x) + (j - q.y) * (C.y - q.y))
		) {
			if ((d - q.x) * (d - q.x) + (j - q.y) * (j - q.y) > e * e) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = d - q.x;
			b.m_localPlaneNormal.y = j - q.y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.SetV(q);
		} else if (0 >= s) {
			if ((d - C.x) * (d - C.x) + (j - C.y) * (j - C.y) > e * e) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = d - C.x;
			b.m_localPlaneNormal.y = j - C.y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.SetV(C);
		} else {
			m = 0.5 * (q.x + C.x);
			q = 0.5 * (q.y + C.y);
			s = (d - m) * c[f].x + (j - q) * c[f].y;
			if (s > e) return;
			b.m_pointCount = 1;
			b.m_type = J.e_faceA;
			b.m_localPlaneNormal.x = c[f].x;
			b.m_localPlaneNormal.y = c[f].y;
			b.m_localPlaneNormal.Normalize();
			b.m_localPoint.Set(m, q);
		}
		b.m_points[0].m_localPoint.SetV(l.m_p);
		b.m_points[0].m_id.key = 0;
	};
	y.TestOverlap = function (b, c) {
		var d = c.lowerBound,
			l = b.upperBound,
			e = d.x - l.x,
			f = d.y - l.y,
			d = b.lowerBound,
			l = c.upperBound,
			g = d.y - l.y;
		return 0 < e || 0 < f || 0 < d.x - l.x || 0 < g ? !1 : !0;
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.b2Collision.s_incidentEdge = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_clipPoints1 = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_clipPoints2 = y.MakeClipPointVector();
		Box2D.Collision.b2Collision.s_edgeAO = new Vector_a2j_Number(1);
		Box2D.Collision.b2Collision.s_edgeBO = new Vector_a2j_Number(1);
		Box2D.Collision.b2Collision.s_localTangent = new m();
		Box2D.Collision.b2Collision.s_localNormal = new m();
		Box2D.Collision.b2Collision.s_planePoint = new m();
		Box2D.Collision.b2Collision.s_normal = new m();
		Box2D.Collision.b2Collision.s_tangent = new m();
		Box2D.Collision.b2Collision.s_tangent2 = new m();
		Box2D.Collision.b2Collision.s_v11 = new m();
		Box2D.Collision.b2Collision.s_v12 = new m();
		Box2D.Collision.b2Collision.b2CollidePolyTempVec = new m();
		Box2D.Collision.b2Collision.b2_nullFeature = 255;
	});
	A.b2ContactID = function () {
		this.features = new s();
	};
	A.prototype.b2ContactID = function () {
		this.features._m_id = this;
	};
	A.prototype.Set = function (b) {
		this.key = b._key;
	};
	A.prototype.Copy = function () {
		var b = new A();
		b.key = this.key;
		return b;
	};
	Object.defineProperty(A.prototype, 'key', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this._key;
		},
	});
	Object.defineProperty(A.prototype, 'key', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._key = b;
			this.features._referenceEdge = this._key & 255;
			this.features._incidentEdge = ((this._key & 65280) >> 8) & 255;
			this.features._incidentVertex =
				((this._key & 16711680) >> 16) & 255;
			this.features._flip = ((this._key & 4278190080) >> 24) & 255;
		},
	});
	B.b2ContactPoint = function () {
		this.position = new m();
		this.velocity = new m();
		this.normal = new m();
		this.id = new A();
	};
	I.b2Distance = function () {};
	I.Distance = function (b, c, d) {
		++I.b2_gjkCalls;
		var l = d.proxyA,
			g = d.proxyB,
			q = d.transformA,
			j = d.transformB,
			s = I.s_simplex;
		s.ReadCache(c, l, q, g, j);
		var u = s.m_vertices,
			C = I.s_saveA,
			K = I.s_saveB,
			t = 0;
		s.GetClosestPoint().LengthSquared();
		for (var F = 0, H, R = 0; 20 > R; ) {
			t = s.m_count;
			for (F = 0; F < t; F++) (C[F] = u[F].indexA), (K[F] = u[F].indexB);
			switch (s.m_count) {
				case 1:
					break;
				case 2:
					s.Solve2();
					break;
				case 3:
					s.Solve3();
					break;
				default:
					f.b2Assert(!1);
			}
			if (3 == s.m_count) break;
			H = s.GetClosestPoint();
			H.LengthSquared();
			F = s.GetSearchDirection();
			if (F.LengthSquared() < Number.MIN_VALUE * Number.MIN_VALUE) break;
			H = u[s.m_count];
			H.indexA = l.GetSupport(e.MulTMV(q.R, F.GetNegative()));
			H.wA = e.MulX(q, l.GetVertex(H.indexA));
			H.indexB = g.GetSupport(e.MulTMV(j.R, F));
			H.wB = e.MulX(j, g.GetVertex(H.indexB));
			H.w = e.SubtractVV(H.wB, H.wA);
			++R;
			++I.b2_gjkIters;
			for (var n = !1, F = 0; F < t; F++)
				if (H.indexA == C[F] && H.indexB == K[F]) {
					n = !0;
					break;
				}
			if (n) break;
			++s.m_count;
		}
		I.b2_gjkMaxIters = e.Max(I.b2_gjkMaxIters, R);
		s.GetWitnessPoints(b.pointA, b.pointB);
		b.distance = e.SubtractVV(b.pointA, b.pointB).Length();
		b.iterations = R;
		s.WriteCache(c);
		d.useRadii &&
			((c = l.m_radius),
			(g = g.m_radius),
			b.distance > c + g && b.distance > Number.MIN_VALUE
				? ((b.distance -= c + g),
				  (d = e.SubtractVV(b.pointB, b.pointA)),
				  d.Normalize(),
				  (b.pointA.x += c * d.x),
				  (b.pointA.y += c * d.y),
				  (b.pointB.x -= g * d.x),
				  (b.pointB.y -= g * d.y))
				: ((H = new m()),
				  (H.x = 0.5 * (b.pointA.x + b.pointB.x)),
				  (H.y = 0.5 * (b.pointA.y + b.pointB.y)),
				  (b.pointA.x = b.pointB.x = H.x),
				  (b.pointA.y = b.pointB.y = H.y),
				  (b.distance = 0)));
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.b2Distance.s_simplex = new u();
		Box2D.Collision.b2Distance.s_saveA = new Vector_a2j_Number(3);
		Box2D.Collision.b2Distance.s_saveB = new Vector_a2j_Number(3);
	});
	D.b2DistanceInput = function () {};
	t.b2DistanceOutput = function () {
		this.pointA = new m();
		this.pointB = new m();
	};
	G.b2DistanceProxy = function () {};
	G.prototype.Set = function (l) {
		switch (l.GetType()) {
			case d.e_circleShape:
				l = l instanceof b ? l : null;
				this.m_vertices = new Vector(1, !0);
				this.m_vertices[0] = l.m_p;
				this.m_count = 1;
				this.m_radius = l.m_radius;
				break;
			case d.e_polygonShape:
				l = l instanceof c ? l : null;
				this.m_vertices = l.m_vertices;
				this.m_count = l.m_vertexCount;
				this.m_radius = l.m_radius;
				break;
			default:
				f.b2Assert(!1);
		}
	};
	G.prototype.GetSupport = function (b) {
		for (
			var c = 0,
				d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
				l = 1;
			l < this.m_count;
			++l
		) {
			var e = this.m_vertices[l].x * b.x + this.m_vertices[l].y * b.y;
			e > d && ((c = l), (d = e));
		}
		return c;
	};
	G.prototype.GetSupportVertex = function (b) {
		for (
			var c = 0,
				d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
				l = 1;
			l < this.m_count;
			++l
		) {
			var e = this.m_vertices[l].x * b.x + this.m_vertices[l].y * b.y;
			e > d && ((c = l), (d = e));
		}
		return this.m_vertices[c];
	};
	G.prototype.GetVertexCount = function () {
		return this.m_count;
	};
	G.prototype.GetVertex = function (b) {
		void 0 === b && (b = 0);
		f.b2Assert(0 <= b && b < this.m_count);
		return this.m_vertices[b];
	};
	E.b2DynamicTree = function () {};
	E.prototype.b2DynamicTree = function () {
		this.m_freeList = this.m_root = null;
		this.m_insertionCount = this.m_path = 0;
	};
	E.prototype.CreateProxy = function (b, c) {
		var d = this.AllocateNode(),
			l = f.b2_aabbExtension,
			e = f.b2_aabbExtension;
		d.aabb.lowerBound.x = b.lowerBound.x - l;
		d.aabb.lowerBound.y = b.lowerBound.y - e;
		d.aabb.upperBound.x = b.upperBound.x + l;
		d.aabb.upperBound.y = b.upperBound.y + e;
		d.userData = c;
		this.InsertLeaf(d);
		return d;
	};
	E.prototype.DestroyProxy = function (b) {
		this.RemoveLeaf(b);
		this.FreeNode(b);
	};
	E.prototype.MoveProxy = function (b, c, d) {
		f.b2Assert(b.IsLeaf());
		if (b.aabb.Contains(c)) return !1;
		this.RemoveLeaf(b);
		var l =
			f.b2_aabbExtension + f.b2_aabbMultiplier * (0 < d.x ? d.x : -d.x);
		d = f.b2_aabbExtension + f.b2_aabbMultiplier * (0 < d.y ? d.y : -d.y);
		b.aabb.lowerBound.x = c.lowerBound.x - l;
		b.aabb.lowerBound.y = c.lowerBound.y - d;
		b.aabb.upperBound.x = c.upperBound.x + l;
		b.aabb.upperBound.y = c.upperBound.y + d;
		this.InsertLeaf(b);
		return !0;
	};
	E.prototype.Rebalance = function (b) {
		void 0 === b && (b = 0);
		if (null != this.m_root)
			for (var c = 0; c < b; c++) {
				for (var d = this.m_root, l = 0; !1 == d.IsLeaf(); )
					(d = (this.m_path >> l) & 1 ? d.child2 : d.child1),
						(l = (l + 1) & 31);
				++this.m_path;
				this.RemoveLeaf(d);
				this.InsertLeaf(d);
			}
	};
	E.prototype.GetFatAABB = function (b) {
		return b.aabb;
	};
	E.prototype.GetUserData = function (b) {
		return b.userData;
	};
	E.prototype.Query = function (b, c) {
		if (null != this.m_root) {
			var d = new Vector(),
				l = 0;
			for (d[l++] = this.m_root; 0 < l; ) {
				var e = d[--l];
				if (e.aabb.TestOverlap(c))
					if (e.IsLeaf()) {
						if (!b(e)) break;
					} else (d[l++] = e.child1), (d[l++] = e.child2);
			}
		}
	};
	E.prototype.RayCast = function (b, c) {
		if (null != this.m_root) {
			var d = c.p1,
				l = c.p2,
				f = e.SubtractVV(d, l);
			f.Normalize();
			var f = e.CrossFV(1, f),
				q = e.AbsV(f),
				j = c.maxFraction,
				s = new g(),
				m = 0,
				u = 0,
				m = d.x + j * (l.x - d.x),
				u = d.y + j * (l.y - d.y);
			s.lowerBound.x = Math.min(d.x, m);
			s.lowerBound.y = Math.min(d.y, u);
			s.upperBound.x = Math.max(d.x, m);
			s.upperBound.y = Math.max(d.y, u);
			var C = new Vector(),
				K = 0;
			for (C[K++] = this.m_root; 0 < K; )
				if (
					((j = C[--K]),
					!1 != j.aabb.TestOverlap(s) &&
						((m = j.aabb.GetCenter()),
						(u = j.aabb.GetExtents()),
						!(
							0 <
							Math.abs(f.x * (d.x - m.x) + f.y * (d.y - m.y)) -
								q.x * u.x -
								q.y * u.y
						)))
				)
					if (j.IsLeaf()) {
						m = new P();
						m.p1 = c.p1;
						m.p2 = c.p2;
						m.maxFraction = c.maxFraction;
						j = b(m, j);
						if (0 == j) break;
						0 < j &&
							((m = d.x + j * (l.x - d.x)),
							(u = d.y + j * (l.y - d.y)),
							(s.lowerBound.x = Math.min(d.x, m)),
							(s.lowerBound.y = Math.min(d.y, u)),
							(s.upperBound.x = Math.max(d.x, m)),
							(s.upperBound.y = Math.max(d.y, u)));
					} else (C[K++] = j.child1), (C[K++] = j.child2);
		}
	};
	E.prototype.AllocateNode = function () {
		if (this.m_freeList) {
			var b = this.m_freeList;
			this.m_freeList = b.parent;
			b.parent = null;
			b.child1 = null;
			b.child2 = null;
			return b;
		}
		return new M();
	};
	E.prototype.FreeNode = function (b) {
		b.parent = this.m_freeList;
		this.m_freeList = b;
	};
	E.prototype.InsertLeaf = function (b) {
		++this.m_insertionCount;
		if (null == this.m_root) (this.m_root = b), (this.m_root.parent = null);
		else {
			var c = b.aabb.GetCenter(),
				d = this.m_root;
			if (!1 == d.IsLeaf()) {
				do
					var l = d.child1,
						d = d.child2,
						d =
							Math.abs(
								(l.aabb.lowerBound.x + l.aabb.upperBound.x) /
									2 -
									c.x
							) +
								Math.abs(
									(l.aabb.lowerBound.y +
										l.aabb.upperBound.y) /
										2 -
										c.y
								) <
							Math.abs(
								(d.aabb.lowerBound.x + d.aabb.upperBound.x) /
									2 -
									c.x
							) +
								Math.abs(
									(d.aabb.lowerBound.y +
										d.aabb.upperBound.y) /
										2 -
										c.y
								)
								? l
								: d;
				while (!1 == d.IsLeaf());
			}
			c = d.parent;
			l = this.AllocateNode();
			l.parent = c;
			l.userData = null;
			l.aabb.Combine(b.aabb, d.aabb);
			if (c) {
				d.parent.child1 == d ? (c.child1 = l) : (c.child2 = l);
				l.child1 = d;
				l.child2 = b;
				d.parent = l;
				b.parent = l;
				do {
					if (c.aabb.Contains(l.aabb)) break;
					c.aabb.Combine(c.child1.aabb, c.child2.aabb);
					l = c;
					c = c.parent;
				} while (c);
			} else
				(l.child1 = d),
					(l.child2 = b),
					(d.parent = l),
					(this.m_root = b.parent = l);
		}
	};
	E.prototype.RemoveLeaf = function (b) {
		if (b == this.m_root) this.m_root = null;
		else {
			var c = b.parent,
				d = c.parent;
			b = c.child1 == b ? c.child2 : c.child1;
			if (d) {
				d.child1 == c ? (d.child1 = b) : (d.child2 = b);
				b.parent = d;
				for (this.FreeNode(c); d; ) {
					c = d.aabb;
					d.aabb = g.Combine(d.child1.aabb, d.child2.aabb);
					if (c.Contains(d.aabb)) break;
					d = d.parent;
				}
			} else (this.m_root = b), (b.parent = null), this.FreeNode(c);
		}
	};
	L.b2DynamicTreeBroadPhase = function () {
		this.m_tree = new E();
		this.m_moveBuffer = new Vector();
		this.m_pairBuffer = new Vector();
		this.m_pairCount = 0;
	};
	L.prototype.CreateProxy = function (b, c) {
		var d = this.m_tree.CreateProxy(b, c);
		++this.m_proxyCount;
		this.BufferMove(d);
		return d;
	};
	L.prototype.DestroyProxy = function (b) {
		this.UnBufferMove(b);
		--this.m_proxyCount;
		this.m_tree.DestroyProxy(b);
	};
	L.prototype.MoveProxy = function (b, c, d) {
		this.m_tree.MoveProxy(b, c, d) && this.BufferMove(b);
	};
	L.prototype.TestOverlap = function (b, c) {
		var d = this.m_tree.GetFatAABB(b),
			l = this.m_tree.GetFatAABB(c);
		return d.TestOverlap(l);
	};
	L.prototype.GetUserData = function (b) {
		return this.m_tree.GetUserData(b);
	};
	L.prototype.GetFatAABB = function (b) {
		return this.m_tree.GetFatAABB(b);
	};
	L.prototype.GetProxyCount = function () {
		return this.m_proxyCount;
	};
	L.prototype.UpdatePairs = function (b) {
		for (
			var c = this, d = (c.m_pairCount = 0), l, d = 0;
			d < c.m_moveBuffer.length;
			++d
		) {
			l = c.m_moveBuffer[d];
			var e = c.m_tree.GetFatAABB(l);
			c.m_tree.Query(function (b) {
				if (b == l) return !0;
				c.m_pairCount == c.m_pairBuffer.length &&
					(c.m_pairBuffer[c.m_pairCount] = new Q());
				var d = c.m_pairBuffer[c.m_pairCount];
				d.proxyA = b < l ? b : l;
				d.proxyB = b >= l ? b : l;
				++c.m_pairCount;
				return !0;
			}, e);
		}
		for (d = c.m_moveBuffer.length = 0; d < c.m_pairCount; ) {
			var e = c.m_pairBuffer[d],
				f = c.m_tree.GetUserData(e.proxyA),
				g = c.m_tree.GetUserData(e.proxyB);
			b(f, g);
			for (++d; d < c.m_pairCount; ) {
				f = c.m_pairBuffer[d];
				if (f.proxyA != e.proxyA || f.proxyB != e.proxyB) break;
				++d;
			}
		}
	};
	L.prototype.Query = function (b, c) {
		this.m_tree.Query(b, c);
	};
	L.prototype.RayCast = function (b, c) {
		this.m_tree.RayCast(b, c);
	};
	L.prototype.Validate = function () {};
	L.prototype.Rebalance = function (b) {
		void 0 === b && (b = 0);
		this.m_tree.Rebalance(b);
	};
	L.prototype.BufferMove = function (b) {
		this.m_moveBuffer[this.m_moveBuffer.length] = b;
	};
	L.prototype.UnBufferMove = function (b) {
		this.m_moveBuffer.splice(parseInt(this.m_moveBuffer.indexOf(b)), 1);
	};
	L.prototype.ComparePairs = function () {
		return 0;
	};
	L.__implements = {};
	L.__implements[K] = !0;
	M.b2DynamicTreeNode = function () {
		this.aabb = new g();
	};
	M.prototype.IsLeaf = function () {
		return null == this.child1;
	};
	Q.b2DynamicTreePair = function () {};
	J.b2Manifold = function () {
		this.m_pointCount = 0;
	};
	J.prototype.b2Manifold = function () {
		this.m_points = new Vector(f.b2_maxManifoldPoints);
		for (var b = 0; b < f.b2_maxManifoldPoints; b++)
			this.m_points[b] = new ea();
		this.m_localPlaneNormal = new m();
		this.m_localPoint = new m();
	};
	J.prototype.Reset = function () {
		for (var b = 0; b < f.b2_maxManifoldPoints; b++)
			(this.m_points[b] instanceof ea ? this.m_points[b] : null).Reset();
		this.m_localPlaneNormal.SetZero();
		this.m_localPoint.SetZero();
		this.m_pointCount = this.m_type = 0;
	};
	J.prototype.Set = function (b) {
		this.m_pointCount = b.m_pointCount;
		for (var c = 0; c < f.b2_maxManifoldPoints; c++)
			(this.m_points[c] instanceof ea ? this.m_points[c] : null).Set(
				b.m_points[c]
			);
		this.m_localPlaneNormal.SetV(b.m_localPlaneNormal);
		this.m_localPoint.SetV(b.m_localPoint);
		this.m_type = b.m_type;
	};
	J.prototype.Copy = function () {
		var b = new J();
		b.Set(this);
		return b;
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.b2Manifold.e_circles = 1;
		Box2D.Collision.b2Manifold.e_faceA = 2;
		Box2D.Collision.b2Manifold.e_faceB = 4;
	});
	ea.b2ManifoldPoint = function () {
		this.m_localPoint = new m();
		this.m_id = new A();
	};
	ea.prototype.b2ManifoldPoint = function () {
		this.Reset();
	};
	ea.prototype.Reset = function () {
		this.m_localPoint.SetZero();
		this.m_tangentImpulse = this.m_normalImpulse = 0;
		this.m_id.key = 0;
	};
	ea.prototype.Set = function (b) {
		this.m_localPoint.SetV(b.m_localPoint);
		this.m_normalImpulse = b.m_normalImpulse;
		this.m_tangentImpulse = b.m_tangentImpulse;
		this.m_id.Set(b.m_id);
	};
	O.b2Point = function () {
		this.p = new m();
	};
	O.prototype.Support = function () {
		return this.p;
	};
	O.prototype.GetFirstVertex = function () {
		return this.p;
	};
	P.b2RayCastInput = function () {
		this.p1 = new m();
		this.p2 = new m();
	};
	P.prototype.b2RayCastInput = function (b, c, d) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		void 0 === d && (d = 1);
		b && this.p1.SetV(b);
		c && this.p2.SetV(c);
		this.maxFraction = d;
	};
	aa.b2RayCastOutput = function () {
		this.normal = new m();
	};
	U.b2Segment = function () {
		this.p1 = new m();
		this.p2 = new m();
	};
	U.prototype.TestSegment = function (b, c, d, l) {
		void 0 === l && (l = 0);
		var e = d.p1,
			f = d.p2.x - e.x,
			g = d.p2.y - e.y;
		d = this.p2.y - this.p1.y;
		var q = -(this.p2.x - this.p1.x),
			j = 100 * Number.MIN_VALUE,
			s = -(f * d + g * q);
		if (s > j) {
			var m = e.x - this.p1.x,
				u = e.y - this.p1.y,
				e = m * d + u * q;
			if (
				0 <= e &&
				e <= l * s &&
				((l = -f * u + g * m), -j * s <= l && l <= s * (1 + j))
			)
				return (
					(e /= s),
					(l = Math.sqrt(d * d + q * q)),
					(b[0] = e),
					c.Set(d / l, q / l),
					!0
				);
		}
		return !1;
	};
	U.prototype.Extend = function (b) {
		this.ExtendForward(b);
		this.ExtendBackward(b);
	};
	U.prototype.ExtendForward = function (b) {
		var c = this.p2.x - this.p1.x,
			d = this.p2.y - this.p1.y;
		b = Math.min(
			0 < c
				? (b.upperBound.x - this.p1.x) / c
				: 0 > c
				? (b.lowerBound.x - this.p1.x) / c
				: Number.POSITIVE_INFINITY,
			0 < d
				? (b.upperBound.y - this.p1.y) / d
				: 0 > d
				? (b.lowerBound.y - this.p1.y) / d
				: Number.POSITIVE_INFINITY
		);
		this.p2.x = this.p1.x + c * b;
		this.p2.y = this.p1.y + d * b;
	};
	U.prototype.ExtendBackward = function (b) {
		var c = -this.p2.x + this.p1.x,
			d = -this.p2.y + this.p1.y;
		b = Math.min(
			0 < c
				? (b.upperBound.x - this.p2.x) / c
				: 0 > c
				? (b.lowerBound.x - this.p2.x) / c
				: Number.POSITIVE_INFINITY,
			0 < d
				? (b.upperBound.y - this.p2.y) / d
				: 0 > d
				? (b.lowerBound.y - this.p2.y) / d
				: Number.POSITIVE_INFINITY
		);
		this.p1.x = this.p2.x + c * b;
		this.p1.y = this.p2.y + d * b;
	};
	q.b2SeparationFunction = function () {
		this.m_localPoint = new m();
		this.m_axis = new m();
	};
	q.prototype.Initialize = function (b, c, d, l, g) {
		this.m_proxyA = c;
		this.m_proxyB = l;
		var j = parseInt(b.count);
		f.b2Assert(0 < j && 3 > j);
		var s,
			u,
			C,
			K,
			F = 0,
			t = 0;
		1 == j
			? ((this.m_type = q.e_points),
			  (s = this.m_proxyA.GetVertex(b.indexA[0])),
			  (u = this.m_proxyB.GetVertex(b.indexB[0])),
			  (j = s),
			  (b = d.R),
			  (c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
			  (l = d.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
			  (j = u),
			  (b = g.R),
			  (C = g.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
			  (K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
			  (this.m_axis.x = C - c),
			  (this.m_axis.y = K - l),
			  this.m_axis.Normalize())
			: (b.indexB[0] == b.indexB[1]
					? ((this.m_type = q.e_faceA),
					  (c = this.m_proxyA.GetVertex(b.indexA[0])),
					  (l = this.m_proxyA.GetVertex(b.indexA[1])),
					  (u = this.m_proxyB.GetVertex(b.indexB[0])),
					  (this.m_localPoint.x = 0.5 * (c.x + l.x)),
					  (this.m_localPoint.y = 0.5 * (c.y + l.y)),
					  (this.m_axis = e.CrossVF(e.SubtractVV(l, c), 1)),
					  this.m_axis.Normalize(),
					  (j = this.m_axis),
					  (b = d.R),
					  (F = b.col1.x * j.x + b.col2.x * j.y),
					  (t = b.col1.y * j.x + b.col2.y * j.y),
					  (j = this.m_localPoint),
					  (b = d.R),
					  (c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
					  (l = d.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
					  (j = u),
					  (b = g.R),
					  (C = g.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
					  (K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
					  (F = (C - c) * F + (K - l) * t))
					: b.indexA[0] == b.indexA[0]
					? ((this.m_type = q.e_faceB),
					  (C = this.m_proxyB.GetVertex(b.indexB[0])),
					  (K = this.m_proxyB.GetVertex(b.indexB[1])),
					  (s = this.m_proxyA.GetVertex(b.indexA[0])),
					  (this.m_localPoint.x = 0.5 * (C.x + K.x)),
					  (this.m_localPoint.y = 0.5 * (C.y + K.y)),
					  (this.m_axis = e.CrossVF(e.SubtractVV(K, C), 1)),
					  this.m_axis.Normalize(),
					  (j = this.m_axis),
					  (b = g.R),
					  (F = b.col1.x * j.x + b.col2.x * j.y),
					  (t = b.col1.y * j.x + b.col2.y * j.y),
					  (j = this.m_localPoint),
					  (b = g.R),
					  (C = g.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
					  (K = g.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
					  (j = s),
					  (b = d.R),
					  (c = d.position.x + (b.col1.x * j.x + b.col2.x * j.y)),
					  (l = d.position.y + (b.col1.y * j.x + b.col2.y * j.y)),
					  (F = (c - C) * F + (l - K) * t))
					: ((c = this.m_proxyA.GetVertex(b.indexA[0])),
					  (l = this.m_proxyA.GetVertex(b.indexA[1])),
					  (C = this.m_proxyB.GetVertex(b.indexB[0])),
					  (K = this.m_proxyB.GetVertex(b.indexB[1])),
					  e.MulX(d, s),
					  (s = e.MulMV(d.R, e.SubtractVV(l, c))),
					  e.MulX(g, u),
					  (F = e.MulMV(g.R, e.SubtractVV(K, C))),
					  (g = s.x * s.x + s.y * s.y),
					  (u = F.x * F.x + F.y * F.y),
					  (b = e.SubtractVV(F, s)),
					  (d = s.x * b.x + s.y * b.y),
					  (b = F.x * b.x + F.y * b.y),
					  (s = s.x * F.x + s.y * F.y),
					  (t = g * u - s * s),
					  (F = 0),
					  0 != t && (F = e.Clamp((s * b - d * u) / t, 0, 1)),
					  0 > (s * F + b) / u && (F = e.Clamp((s - d) / g, 0, 1)),
					  (s = new m()),
					  (s.x = c.x + F * (l.x - c.x)),
					  (s.y = c.y + F * (l.y - c.y)),
					  (u = new m()),
					  (u.x = C.x + F * (K.x - C.x)),
					  (u.y = C.y + F * (K.y - C.y)),
					  0 == F || 1 == F
							? ((this.m_type = q.e_faceB),
							  (this.m_axis = e.CrossVF(e.SubtractVV(K, C), 1)),
							  this.m_axis.Normalize(),
							  (this.m_localPoint = u))
							: ((this.m_type = q.e_faceA),
							  (this.m_axis = e.CrossVF(e.SubtractVV(l, c), 1)),
							  (this.m_localPoint = s))),
			  0 > F && this.m_axis.NegativeSelf());
	};
	q.prototype.Evaluate = function (b, c) {
		var d,
			l,
			g = 0;
		switch (this.m_type) {
			case q.e_points:
				return (
					(d = e.MulTMV(b.R, this.m_axis)),
					(l = e.MulTMV(c.R, this.m_axis.GetNegative())),
					(d = this.m_proxyA.GetSupportVertex(d)),
					(l = this.m_proxyB.GetSupportVertex(l)),
					(d = e.MulX(b, d)),
					(l = e.MulX(c, l)),
					(l.x - d.x) * this.m_axis.x + (l.y - d.y) * this.m_axis.y
				);
			case q.e_faceA:
				return (
					(g = e.MulMV(b.R, this.m_axis)),
					(d = e.MulX(b, this.m_localPoint)),
					(l = e.MulTMV(c.R, g.GetNegative())),
					(l = this.m_proxyB.GetSupportVertex(l)),
					(l = e.MulX(c, l)),
					(l.x - d.x) * g.x + (l.y - d.y) * g.y
				);
			case q.e_faceB:
				return (
					(g = e.MulMV(c.R, this.m_axis)),
					(l = e.MulX(c, this.m_localPoint)),
					(d = e.MulTMV(b.R, g.GetNegative())),
					(d = this.m_proxyA.GetSupportVertex(d)),
					(d = e.MulX(b, d)),
					(d.x - l.x) * g.x + (d.y - l.y) * g.y
				);
			default:
				return f.b2Assert(!1), 0;
		}
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.b2SeparationFunction.e_points = 1;
		Box2D.Collision.b2SeparationFunction.e_faceA = 2;
		Box2D.Collision.b2SeparationFunction.e_faceB = 4;
	});
	u.b2Simplex = function () {
		this.m_v1 = new C();
		this.m_v2 = new C();
		this.m_v3 = new C();
		this.m_vertices = new Vector(3);
	};
	u.prototype.b2Simplex = function () {
		this.m_vertices[0] = this.m_v1;
		this.m_vertices[1] = this.m_v2;
		this.m_vertices[2] = this.m_v3;
	};
	u.prototype.ReadCache = function (b, c, d, l, g) {
		f.b2Assert(0 <= b.count && 3 >= b.count);
		var j, q;
		this.m_count = b.count;
		for (var s = this.m_vertices, m = 0; m < this.m_count; m++) {
			var u = s[m];
			u.indexA = b.indexA[m];
			u.indexB = b.indexB[m];
			j = c.GetVertex(u.indexA);
			q = l.GetVertex(u.indexB);
			u.wA = e.MulX(d, j);
			u.wB = e.MulX(g, q);
			u.w = e.SubtractVV(u.wB, u.wA);
			u.a = 0;
		}
		if (
			1 < this.m_count &&
			((b = b.metric),
			(j = this.GetMetric()),
			j < 0.5 * b || 2 * b < j || j < Number.MIN_VALUE)
		)
			this.m_count = 0;
		0 == this.m_count &&
			((u = s[0]),
			(u.indexA = 0),
			(u.indexB = 0),
			(j = c.GetVertex(0)),
			(q = l.GetVertex(0)),
			(u.wA = e.MulX(d, j)),
			(u.wB = e.MulX(g, q)),
			(u.w = e.SubtractVV(u.wB, u.wA)),
			(this.m_count = 1));
	};
	u.prototype.WriteCache = function (b) {
		b.metric = this.GetMetric();
		b.count = Box2D.parseUInt(this.m_count);
		for (var c = this.m_vertices, d = 0; d < this.m_count; d++)
			(b.indexA[d] = Box2D.parseUInt(c[d].indexA)),
				(b.indexB[d] = Box2D.parseUInt(c[d].indexB));
	};
	u.prototype.GetSearchDirection = function () {
		switch (this.m_count) {
			case 1:
				return this.m_v1.w.GetNegative();
			case 2:
				var b = e.SubtractVV(this.m_v2.w, this.m_v1.w);
				return 0 < e.CrossVV(b, this.m_v1.w.GetNegative())
					? e.CrossFV(1, b)
					: e.CrossVF(b, 1);
			default:
				return f.b2Assert(!1), new m();
		}
	};
	u.prototype.GetClosestPoint = function () {
		switch (this.m_count) {
			case 0:
				return f.b2Assert(!1), new m();
			case 1:
				return this.m_v1.w;
			case 2:
				return new m(
					this.m_v1.a * this.m_v1.w.x + this.m_v2.a * this.m_v2.w.x,
					this.m_v1.a * this.m_v1.w.y + this.m_v2.a * this.m_v2.w.y
				);
			default:
				return f.b2Assert(!1), new m();
		}
	};
	u.prototype.GetWitnessPoints = function (b, c) {
		switch (this.m_count) {
			case 0:
				f.b2Assert(!1);
				break;
			case 1:
				b.SetV(this.m_v1.wA);
				c.SetV(this.m_v1.wB);
				break;
			case 2:
				b.x =
					this.m_v1.a * this.m_v1.wA.x + this.m_v2.a * this.m_v2.wA.x;
				b.y =
					this.m_v1.a * this.m_v1.wA.y + this.m_v2.a * this.m_v2.wA.y;
				c.x =
					this.m_v1.a * this.m_v1.wB.x + this.m_v2.a * this.m_v2.wB.x;
				c.y =
					this.m_v1.a * this.m_v1.wB.y + this.m_v2.a * this.m_v2.wB.y;
				break;
			case 3:
				c.x = b.x =
					this.m_v1.a * this.m_v1.wA.x +
					this.m_v2.a * this.m_v2.wA.x +
					this.m_v3.a * this.m_v3.wA.x;
				c.y = b.y =
					this.m_v1.a * this.m_v1.wA.y +
					this.m_v2.a * this.m_v2.wA.y +
					this.m_v3.a * this.m_v3.wA.y;
				break;
			default:
				f.b2Assert(!1);
		}
	};
	u.prototype.GetMetric = function () {
		switch (this.m_count) {
			case 0:
				return f.b2Assert(!1), 0;
			case 1:
				return 0;
			case 2:
				return e.SubtractVV(this.m_v1.w, this.m_v2.w).Length();
			case 3:
				return e.CrossVV(
					e.SubtractVV(this.m_v2.w, this.m_v1.w),
					e.SubtractVV(this.m_v3.w, this.m_v1.w)
				);
			default:
				return f.b2Assert(!1), 0;
		}
	};
	u.prototype.Solve2 = function () {
		var b = this.m_v1.w,
			c = this.m_v2.w,
			d = e.SubtractVV(c, b),
			b = -(b.x * d.x + b.y * d.y);
		0 >= b
			? (this.m_count = this.m_v1.a = 1)
			: ((c = c.x * d.x + c.y * d.y),
			  0 >= c
					? ((this.m_count = this.m_v2.a = 1),
					  this.m_v1.Set(this.m_v2))
					: ((d = 1 / (c + b)),
					  (this.m_v1.a = c * d),
					  (this.m_v2.a = b * d),
					  (this.m_count = 2)));
	};
	u.prototype.Solve3 = function () {
		var b = this.m_v1.w,
			c = this.m_v2.w,
			d = this.m_v3.w,
			l = e.SubtractVV(c, b),
			f = e.Dot(b, l),
			g = e.Dot(c, l),
			f = -f,
			j = e.SubtractVV(d, b),
			q = e.Dot(b, j),
			s = e.Dot(d, j),
			q = -q,
			m = e.SubtractVV(d, c),
			u = e.Dot(c, m),
			m = e.Dot(d, m),
			u = -u,
			j = e.CrossVV(l, j),
			l = j * e.CrossVV(c, d),
			d = j * e.CrossVV(d, b),
			b = j * e.CrossVV(b, c);
		0 >= f && 0 >= q
			? (this.m_count = this.m_v1.a = 1)
			: 0 < g && 0 < f && 0 >= b
			? ((s = 1 / (g + f)),
			  (this.m_v1.a = g * s),
			  (this.m_v2.a = f * s),
			  (this.m_count = 2))
			: 0 < s && 0 < q && 0 >= d
			? ((g = 1 / (s + q)),
			  (this.m_v1.a = s * g),
			  (this.m_v3.a = q * g),
			  (this.m_count = 2),
			  this.m_v2.Set(this.m_v3))
			: 0 >= g && 0 >= u
			? ((this.m_count = this.m_v2.a = 1), this.m_v1.Set(this.m_v2))
			: 0 >= s && 0 >= m
			? ((this.m_count = this.m_v3.a = 1), this.m_v1.Set(this.m_v3))
			: 0 < m && 0 < u && 0 >= l
			? ((g = 1 / (m + u)),
			  (this.m_v2.a = m * g),
			  (this.m_v3.a = u * g),
			  (this.m_count = 2),
			  this.m_v1.Set(this.m_v3))
			: ((g = 1 / (l + d + b)),
			  (this.m_v1.a = l * g),
			  (this.m_v2.a = d * g),
			  (this.m_v3.a = b * g),
			  (this.m_count = 3));
	};
	F.b2SimplexCache = function () {
		this.indexA = new Vector_a2j_Number(3);
		this.indexB = new Vector_a2j_Number(3);
	};
	C.b2SimplexVertex = function () {};
	C.prototype.Set = function (b) {
		this.wA.SetV(b.wA);
		this.wB.SetV(b.wB);
		this.w.SetV(b.w);
		this.a = b.a;
		this.indexA = b.indexA;
		this.indexB = b.indexB;
	};
	H.b2TimeOfImpact = function () {};
	H.TimeOfImpact = function (b) {
		++H.b2_toiCalls;
		var c = b.proxyA,
			d = b.proxyB,
			l = b.sweepA,
			g = b.sweepB;
		f.b2Assert(l.t0 == g.t0);
		f.b2Assert(1 - l.t0 > Number.MIN_VALUE);
		var j = c.m_radius + d.m_radius;
		b = b.tolerance;
		var q = 0,
			s = 0,
			m = 0;
		H.s_cache.count = 0;
		for (H.s_distanceInput.useRadii = !1; ; ) {
			l.GetTransform(H.s_xfA, q);
			g.GetTransform(H.s_xfB, q);
			H.s_distanceInput.proxyA = c;
			H.s_distanceInput.proxyB = d;
			H.s_distanceInput.transformA = H.s_xfA;
			H.s_distanceInput.transformB = H.s_xfB;
			I.Distance(H.s_distanceOutput, H.s_cache, H.s_distanceInput);
			if (0 >= H.s_distanceOutput.distance) {
				q = 1;
				break;
			}
			H.s_fcn.Initialize(H.s_cache, c, H.s_xfA, d, H.s_xfB);
			var u = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
			if (0 >= u) {
				q = 1;
				break;
			}
			0 == s &&
				(m = u > j ? e.Max(j - b, 0.75 * j) : e.Max(u - b, 0.02 * j));
			if (u - m < 0.5 * b) {
				if (0 == s) {
					q = 1;
					break;
				}
				break;
			}
			var C = q,
				K = q,
				F = 1;
			l.GetTransform(H.s_xfA, F);
			g.GetTransform(H.s_xfB, F);
			var t = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
			if (t >= m) {
				q = 1;
				break;
			}
			for (var R = 0; ; ) {
				var n = 0,
					n =
						R & 1
							? K + ((m - u) * (F - K)) / (t - u)
							: 0.5 * (K + F);
				l.GetTransform(H.s_xfA, n);
				g.GetTransform(H.s_xfB, n);
				var Z = H.s_fcn.Evaluate(H.s_xfA, H.s_xfB);
				if (e.Abs(Z - m) < 0.025 * b) {
					C = n;
					break;
				}
				Z > m ? ((K = n), (u = Z)) : ((F = n), (t = Z));
				++R;
				++H.b2_toiRootIters;
				if (50 == R) break;
			}
			H.b2_toiMaxRootIters = e.Max(H.b2_toiMaxRootIters, R);
			if (C < (1 + 100 * Number.MIN_VALUE) * q) break;
			q = C;
			s++;
			++H.b2_toiIters;
			if (1e3 == s) break;
		}
		H.b2_toiMaxIters = e.Max(H.b2_toiMaxIters, s);
		return q;
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.b2TimeOfImpact.b2_toiCalls = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiMaxIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiRootIters = 0;
		Box2D.Collision.b2TimeOfImpact.b2_toiMaxRootIters = 0;
		Box2D.Collision.b2TimeOfImpact.s_cache = new F();
		Box2D.Collision.b2TimeOfImpact.s_distanceInput = new D();
		Box2D.Collision.b2TimeOfImpact.s_xfA = new n();
		Box2D.Collision.b2TimeOfImpact.s_xfB = new n();
		Box2D.Collision.b2TimeOfImpact.s_fcn = new q();
		Box2D.Collision.b2TimeOfImpact.s_distanceOutput = new t();
	});
	Z.b2TOIInput = function () {
		this.proxyA = new G();
		this.proxyB = new G();
		this.sweepA = new j();
		this.sweepB = new j();
	};
	R.b2WorldManifold = function () {
		this.m_normal = new m();
	};
	R.prototype.b2WorldManifold = function () {
		this.m_points = new Vector(f.b2_maxManifoldPoints);
		for (var b = 0; b < f.b2_maxManifoldPoints; b++)
			this.m_points[b] = new m();
	};
	R.prototype.Initialize = function (b, c, d, l, e) {
		void 0 === d && (d = 0);
		void 0 === e && (e = 0);
		if (0 != b.m_pointCount) {
			var f = 0,
				g,
				j,
				q = 0,
				s = 0,
				m = 0,
				u = 0,
				C = 0;
			switch (b.m_type) {
				case J.e_circles:
					j = c.R;
					g = b.m_localPoint;
					f = c.position.x + j.col1.x * g.x + j.col2.x * g.y;
					c = c.position.y + j.col1.y * g.x + j.col2.y * g.y;
					j = l.R;
					g = b.m_points[0].m_localPoint;
					b = l.position.x + j.col1.x * g.x + j.col2.x * g.y;
					l = l.position.y + j.col1.y * g.x + j.col2.y * g.y;
					g = b - f;
					j = l - c;
					q = g * g + j * j;
					q > Number.MIN_VALUE * Number.MIN_VALUE
						? ((q = Math.sqrt(q)),
						  (this.m_normal.x = g / q),
						  (this.m_normal.y = j / q))
						: ((this.m_normal.x = 1), (this.m_normal.y = 0));
					g = c + d * this.m_normal.y;
					l -= e * this.m_normal.y;
					this.m_points[0].x =
						0.5 *
						(f + d * this.m_normal.x + (b - e * this.m_normal.x));
					this.m_points[0].y = 0.5 * (g + l);
					break;
				case J.e_faceA:
					j = c.R;
					g = b.m_localPlaneNormal;
					q = j.col1.x * g.x + j.col2.x * g.y;
					s = j.col1.y * g.x + j.col2.y * g.y;
					j = c.R;
					g = b.m_localPoint;
					m = c.position.x + j.col1.x * g.x + j.col2.x * g.y;
					u = c.position.y + j.col1.y * g.x + j.col2.y * g.y;
					this.m_normal.x = q;
					this.m_normal.y = s;
					for (f = 0; f < b.m_pointCount; f++)
						(j = l.R),
							(g = b.m_points[f].m_localPoint),
							(C =
								l.position.x + j.col1.x * g.x + j.col2.x * g.y),
							(g =
								l.position.y + j.col1.y * g.x + j.col2.y * g.y),
							(this.m_points[f].x =
								C +
								0.5 * (d - (C - m) * q - (g - u) * s - e) * q),
							(this.m_points[f].y =
								g +
								0.5 * (d - (C - m) * q - (g - u) * s - e) * s);
					break;
				case J.e_faceB:
					j = l.R;
					g = b.m_localPlaneNormal;
					q = j.col1.x * g.x + j.col2.x * g.y;
					s = j.col1.y * g.x + j.col2.y * g.y;
					j = l.R;
					g = b.m_localPoint;
					m = l.position.x + j.col1.x * g.x + j.col2.x * g.y;
					u = l.position.y + j.col1.y * g.x + j.col2.y * g.y;
					this.m_normal.x = -q;
					this.m_normal.y = -s;
					for (f = 0; f < b.m_pointCount; f++)
						(j = c.R),
							(g = b.m_points[f].m_localPoint),
							(C =
								c.position.x + j.col1.x * g.x + j.col2.x * g.y),
							(g =
								c.position.y + j.col1.y * g.x + j.col2.y * g.y),
							(this.m_points[f].x =
								C +
								0.5 * (e - (C - m) * q - (g - u) * s - d) * q),
							(this.m_points[f].y =
								g +
								0.5 * (e - (C - m) * q - (g - u) * s - d) * s);
			}
		}
	};
	l.ClipVertex = function () {
		this.v = new m();
		this.id = new A();
	};
	l.prototype.Set = function (b) {
		this.v.SetV(b.v);
		this.id.Set(b.id);
	};
	s.Features = function () {};
	Object.defineProperty(s.prototype, 'referenceEdge', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this._referenceEdge;
		},
	});
	Object.defineProperty(s.prototype, 'referenceEdge', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._referenceEdge = b;
			this._m_id._key =
				(this._m_id._key & 4294967040) | (this._referenceEdge & 255);
		},
	});
	Object.defineProperty(s.prototype, 'incidentEdge', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this._incidentEdge;
		},
	});
	Object.defineProperty(s.prototype, 'incidentEdge', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._incidentEdge = b;
			this._m_id._key =
				(this._m_id._key & 4294902015) |
				((this._incidentEdge << 8) & 65280);
		},
	});
	Object.defineProperty(s.prototype, 'incidentVertex', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this._incidentVertex;
		},
	});
	Object.defineProperty(s.prototype, 'incidentVertex', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._incidentVertex = b;
			this._m_id._key =
				(this._m_id._key & 4278255615) |
				((this._incidentVertex << 16) & 16711680);
		},
	});
	Object.defineProperty(s.prototype, 'flip', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return this._flip;
		},
	});
	Object.defineProperty(s.prototype, 'flip', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._flip = b;
			this._m_id._key =
				(this._m_id._key & 16777215) |
				((this._flip << 24) & 4278190080);
		},
	});
})();
(function () {
	var b = Box2D.Common.b2Settings,
		c = Box2D.Collision.Shapes.b2CircleShape,
		d = Box2D.Collision.Shapes.b2EdgeChainDef,
		f = Box2D.Collision.Shapes.b2EdgeShape,
		e = Box2D.Collision.Shapes.b2MassData,
		j = Box2D.Collision.Shapes.b2PolygonShape,
		n = Box2D.Collision.Shapes.b2Shape,
		m = Box2D.Common.Math.b2Mat22,
		g = Box2D.Common.Math.b2Math,
		r = Box2D.Common.Math.b2Transform,
		z = Box2D.Common.Math.b2Vec2,
		y = Box2D.Collision.b2Distance,
		A = Box2D.Collision.b2DistanceInput,
		B = Box2D.Collision.b2DistanceOutput,
		I = Box2D.Collision.b2DistanceProxy,
		D = Box2D.Collision.b2SimplexCache;
	Box2D.inherit(c, Box2D.Collision.Shapes.b2Shape);
	c.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	c.b2CircleShape = function () {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
		this.m_p = new z();
	};
	c.prototype.Copy = function () {
		var b = new c();
		b.Set(this);
		return b;
	};
	c.prototype.Set = function (b) {
		this.__super.Set.call(this, b);
		Box2D.is(b, c) && this.m_p.SetV((b instanceof c ? b : null).m_p);
	};
	c.prototype.TestPoint = function (b, c) {
		var d = b.R,
			e = b.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
			d = b.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y),
			e = c.x - e,
			d = c.y - d;
		return e * e + d * d <= this.m_radius * this.m_radius;
	};
	c.prototype.RayCast = function (b, c, d) {
		var e = d.R,
			f =
				c.p1.x -
				(d.position.x +
					(e.col1.x * this.m_p.x + e.col2.x * this.m_p.y));
		d =
			c.p1.y -
			(d.position.y + (e.col1.y * this.m_p.x + e.col2.y * this.m_p.y));
		var e = c.p2.x - c.p1.x,
			g = c.p2.y - c.p1.y,
			j = f * e + d * g,
			m = e * e + g * g,
			n = j * j - m * (f * f + d * d - this.m_radius * this.m_radius);
		if (0 > n || m < Number.MIN_VALUE) return !1;
		j = -(j + Math.sqrt(n));
		return 0 <= j && j <= c.maxFraction * m
			? ((j /= m),
			  (b.fraction = j),
			  (b.normal.x = f + j * e),
			  (b.normal.y = d + j * g),
			  b.normal.Normalize(),
			  !0)
			: !1;
	};
	c.prototype.ComputeAABB = function (b, c) {
		var d = c.R,
			e = c.position.x + (d.col1.x * this.m_p.x + d.col2.x * this.m_p.y),
			d = c.position.y + (d.col1.y * this.m_p.x + d.col2.y * this.m_p.y);
		b.lowerBound.Set(e - this.m_radius, d - this.m_radius);
		b.upperBound.Set(e + this.m_radius, d + this.m_radius);
	};
	c.prototype.ComputeMass = function (c, d) {
		void 0 === d && (d = 0);
		c.mass = d * b.b2_pi * this.m_radius * this.m_radius;
		c.center.SetV(this.m_p);
		c.I =
			c.mass *
			(0.5 * this.m_radius * this.m_radius +
				(this.m_p.x * this.m_p.x + this.m_p.y * this.m_p.y));
	};
	c.prototype.ComputeSubmergedArea = function (b, c, d, e) {
		void 0 === c && (c = 0);
		d = g.MulX(d, this.m_p);
		var f = -(g.Dot(b, d) - c);
		if (f < -this.m_radius + Number.MIN_VALUE) return 0;
		if (f > this.m_radius)
			return e.SetV(d), Math.PI * this.m_radius * this.m_radius;
		c = this.m_radius * this.m_radius;
		var j = f * f,
			f =
				c * (Math.asin(f / this.m_radius) + Math.PI / 2) +
				f * Math.sqrt(c - j);
		c = ((-2 / 3) * Math.pow(c - j, 1.5)) / f;
		e.x = d.x + b.x * c;
		e.y = d.y + b.y * c;
		return f;
	};
	c.prototype.GetLocalPosition = function () {
		return this.m_p;
	};
	c.prototype.SetLocalPosition = function (b) {
		this.m_p.SetV(b);
	};
	c.prototype.GetRadius = function () {
		return this.m_radius;
	};
	c.prototype.SetRadius = function (b) {
		void 0 === b && (b = 0);
		this.m_radius = b;
	};
	c.prototype.b2CircleShape = function (b) {
		void 0 === b && (b = 0);
		this.__super.b2Shape.call(this);
		this.m_type = n.e_circleShape;
		this.m_radius = b;
	};
	d.b2EdgeChainDef = function () {};
	d.prototype.b2EdgeChainDef = function () {
		this.vertexCount = 0;
		this.isALoop = !0;
		this.vertices = [];
	};
	Box2D.inherit(f, Box2D.Collision.Shapes.b2Shape);
	f.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	f.b2EdgeShape = function () {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
		this.s_supportVec = new z();
		this.m_v1 = new z();
		this.m_v2 = new z();
		this.m_coreV1 = new z();
		this.m_coreV2 = new z();
		this.m_normal = new z();
		this.m_direction = new z();
		this.m_cornerDir1 = new z();
		this.m_cornerDir2 = new z();
	};
	f.prototype.TestPoint = function () {
		return !1;
	};
	f.prototype.RayCast = function (b, c, d) {
		var e,
			f = c.p2.x - c.p1.x,
			g = c.p2.y - c.p1.y;
		e = d.R;
		var j =
				d.position.x +
				(e.col1.x * this.m_v1.x + e.col2.x * this.m_v1.y),
			m =
				d.position.y +
				(e.col1.y * this.m_v1.x + e.col2.y * this.m_v1.y),
			n =
				d.position.y +
				(e.col1.y * this.m_v2.x + e.col2.y * this.m_v2.y) -
				m;
		d = -(
			d.position.x +
			(e.col1.x * this.m_v2.x + e.col2.x * this.m_v2.y) -
			j
		);
		e = 100 * Number.MIN_VALUE;
		var r = -(f * n + g * d);
		if (r > e) {
			var j = c.p1.x - j,
				A = c.p1.y - m,
				m = j * n + A * d;
			if (
				0 <= m &&
				m <= c.maxFraction * r &&
				((c = -f * A + g * j), -e * r <= c && c <= r * (1 + e))
			)
				return (
					(b.fraction = m / r),
					(c = Math.sqrt(n * n + d * d)),
					(b.normal.x = n / c),
					(b.normal.y = d / c),
					!0
				);
		}
		return !1;
	};
	f.prototype.ComputeAABB = function (b, c) {
		var d = c.R,
			e =
				c.position.x +
				(d.col1.x * this.m_v1.x + d.col2.x * this.m_v1.y),
			f =
				c.position.y +
				(d.col1.y * this.m_v1.x + d.col2.y * this.m_v1.y),
			g =
				c.position.x +
				(d.col1.x * this.m_v2.x + d.col2.x * this.m_v2.y),
			d =
				c.position.y +
				(d.col1.y * this.m_v2.x + d.col2.y * this.m_v2.y);
		e < g
			? ((b.lowerBound.x = e), (b.upperBound.x = g))
			: ((b.lowerBound.x = g), (b.upperBound.x = e));
		f < d
			? ((b.lowerBound.y = f), (b.upperBound.y = d))
			: ((b.lowerBound.y = d), (b.upperBound.y = f));
	};
	f.prototype.ComputeMass = function (b) {
		b.mass = 0;
		b.center.SetV(this.m_v1);
		b.I = 0;
	};
	f.prototype.ComputeSubmergedArea = function (b, c, d, e) {
		void 0 === c && (c = 0);
		var f = new z(b.x * c, b.y * c),
			j = g.MulX(d, this.m_v1);
		d = g.MulX(d, this.m_v2);
		var m = g.Dot(b, j) - c;
		b = g.Dot(b, d) - c;
		if (0 < m) {
			if (0 < b) return 0;
			j.x = (-b / (m - b)) * j.x + (m / (m - b)) * d.x;
			j.y = (-b / (m - b)) * j.y + (m / (m - b)) * d.y;
		} else
			0 < b &&
				((d.x = (-b / (m - b)) * j.x + (m / (m - b)) * d.x),
				(d.y = (-b / (m - b)) * j.y + (m / (m - b)) * d.y));
		e.x = (f.x + j.x + d.x) / 3;
		e.y = (f.y + j.y + d.y) / 3;
		return 0.5 * ((j.x - f.x) * (d.y - f.y) - (j.y - f.y) * (d.x - f.x));
	};
	f.prototype.GetLength = function () {
		return this.m_length;
	};
	f.prototype.GetVertex1 = function () {
		return this.m_v1;
	};
	f.prototype.GetVertex2 = function () {
		return this.m_v2;
	};
	f.prototype.GetCoreVertex1 = function () {
		return this.m_coreV1;
	};
	f.prototype.GetCoreVertex2 = function () {
		return this.m_coreV2;
	};
	f.prototype.GetNormalVector = function () {
		return this.m_normal;
	};
	f.prototype.GetDirectionVector = function () {
		return this.m_direction;
	};
	f.prototype.GetCorner1Vector = function () {
		return this.m_cornerDir1;
	};
	f.prototype.GetCorner2Vector = function () {
		return this.m_cornerDir2;
	};
	f.prototype.Corner1IsConvex = function () {
		return this.m_cornerConvex1;
	};
	f.prototype.Corner2IsConvex = function () {
		return this.m_cornerConvex2;
	};
	f.prototype.GetFirstVertex = function (b) {
		var c = b.R;
		return new z(
			b.position.x +
				(c.col1.x * this.m_coreV1.x + c.col2.x * this.m_coreV1.y),
			b.position.y +
				(c.col1.y * this.m_coreV1.x + c.col2.y * this.m_coreV1.y)
		);
	};
	f.prototype.GetNextEdge = function () {
		return this.m_nextEdge;
	};
	f.prototype.GetPrevEdge = function () {
		return this.m_prevEdge;
	};
	f.prototype.Support = function (b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = b.R,
			f =
				b.position.x +
				(e.col1.x * this.m_coreV1.x + e.col2.x * this.m_coreV1.y),
			g =
				b.position.y +
				(e.col1.y * this.m_coreV1.x + e.col2.y * this.m_coreV1.y),
			j =
				b.position.x +
				(e.col1.x * this.m_coreV2.x + e.col2.x * this.m_coreV2.y);
		b =
			b.position.y +
			(e.col1.y * this.m_coreV2.x + e.col2.y * this.m_coreV2.y);
		f * c + g * d > j * c + b * d
			? ((this.s_supportVec.x = f), (this.s_supportVec.y = g))
			: ((this.s_supportVec.x = j), (this.s_supportVec.y = b));
		return this.s_supportVec;
	};
	f.prototype.b2EdgeShape = function (c, d) {
		this.__super.b2Shape.call(this);
		this.m_type = n.e_edgeShape;
		this.m_nextEdge = this.m_prevEdge = null;
		this.m_v1 = c;
		this.m_v2 = d;
		this.m_direction.Set(
			this.m_v2.x - this.m_v1.x,
			this.m_v2.y - this.m_v1.y
		);
		this.m_length = this.m_direction.Normalize();
		this.m_normal.Set(this.m_direction.y, -this.m_direction.x);
		this.m_coreV1.Set(
			-b.b2_toiSlop * (this.m_normal.x - this.m_direction.x) +
				this.m_v1.x,
			-b.b2_toiSlop * (this.m_normal.y - this.m_direction.y) + this.m_v1.y
		);
		this.m_coreV2.Set(
			-b.b2_toiSlop * (this.m_normal.x + this.m_direction.x) +
				this.m_v2.x,
			-b.b2_toiSlop * (this.m_normal.y + this.m_direction.y) + this.m_v2.y
		);
		this.m_cornerDir1 = this.m_normal;
		this.m_cornerDir2.Set(-this.m_normal.x, -this.m_normal.y);
	};
	f.prototype.SetPrevEdge = function (b, c, d, e) {
		this.m_prevEdge = b;
		this.m_coreV1 = c;
		this.m_cornerDir1 = d;
		this.m_cornerConvex1 = e;
	};
	f.prototype.SetNextEdge = function (b, c, d, e) {
		this.m_nextEdge = b;
		this.m_coreV2 = c;
		this.m_cornerDir2 = d;
		this.m_cornerConvex2 = e;
	};
	e.b2MassData = function () {
		this.mass = 0;
		this.center = new z(0, 0);
		this.I = 0;
	};
	Box2D.inherit(j, Box2D.Collision.Shapes.b2Shape);
	j.prototype.__super = Box2D.Collision.Shapes.b2Shape.prototype;
	j.b2PolygonShape = function () {
		Box2D.Collision.Shapes.b2Shape.b2Shape.apply(this, arguments);
	};
	j.prototype.Copy = function () {
		var b = new j();
		b.Set(this);
		return b;
	};
	j.prototype.Set = function (b) {
		this.__super.Set.call(this, b);
		if (Box2D.is(b, j)) {
			b = b instanceof j ? b : null;
			this.m_centroid.SetV(b.m_centroid);
			this.m_vertexCount = b.m_vertexCount;
			this.Reserve(this.m_vertexCount);
			for (var c = 0; c < this.m_vertexCount; c++)
				this.m_vertices[c].SetV(b.m_vertices[c]),
					this.m_normals[c].SetV(b.m_normals[c]);
		}
	};
	j.prototype.SetAsArray = function (b, c) {
		void 0 === c && (c = 0);
		for (var d = new Vector(), e = 0, f, e = 0; e < b.length; ++e)
			(f = b[e]), d.push(f);
		this.SetAsVector(d, c);
	};
	j.AsArray = function (b, c) {
		void 0 === c && (c = 0);
		var d = new j();
		d.SetAsArray(b, c);
		return d;
	};
	j.prototype.SetAsVector = function (c, d) {
		void 0 === d && (d = 0);
		0 == d && (d = c.length);
		b.b2Assert(2 <= d);
		this.m_vertexCount = d;
		this.Reserve(d);
		for (var e = 0, e = 0; e < this.m_vertexCount; e++)
			this.m_vertices[e].SetV(c[e]);
		for (e = 0; e < this.m_vertexCount; ++e) {
			var f = parseInt(e),
				m = parseInt(e + 1 < this.m_vertexCount ? e + 1 : 0),
				f = g.SubtractVV(this.m_vertices[m], this.m_vertices[f]);
			b.b2Assert(f.LengthSquared() > Number.MIN_VALUE);
			this.m_normals[e].SetV(g.CrossVF(f, 1));
			this.m_normals[e].Normalize();
		}
		this.m_centroid = j.ComputeCentroid(
			this.m_vertices,
			this.m_vertexCount
		);
	};
	j.AsVector = function (b, c) {
		void 0 === c && (c = 0);
		var d = new j();
		d.SetAsVector(b, c);
		return d;
	};
	j.prototype.SetAsBox = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_vertexCount = 4;
		this.Reserve(4);
		this.m_vertices[0].Set(-b, -c);
		this.m_vertices[1].Set(b, -c);
		this.m_vertices[2].Set(b, c);
		this.m_vertices[3].Set(-b, c);
		this.m_normals[0].Set(0, -1);
		this.m_normals[1].Set(1, 0);
		this.m_normals[2].Set(0, 1);
		this.m_normals[3].Set(-1, 0);
		this.m_centroid.SetZero();
	};
	j.AsBox = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = new j();
		d.SetAsBox(b, c);
		return d;
	};
	j.prototype.SetAsOrientedBox = function (b, c, d, e) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = null);
		void 0 === e && (e = 0);
		this.m_vertexCount = 4;
		this.Reserve(4);
		this.m_vertices[0].Set(-b, -c);
		this.m_vertices[1].Set(b, -c);
		this.m_vertices[2].Set(b, c);
		this.m_vertices[3].Set(-b, c);
		this.m_normals[0].Set(0, -1);
		this.m_normals[1].Set(1, 0);
		this.m_normals[2].Set(0, 1);
		this.m_normals[3].Set(-1, 0);
		this.m_centroid = d;
		b = new r();
		b.position = d;
		b.R.Set(e);
		for (d = 0; d < this.m_vertexCount; ++d)
			(this.m_vertices[d] = g.MulX(b, this.m_vertices[d])),
				(this.m_normals[d] = g.MulMV(b.R, this.m_normals[d]));
	};
	j.AsOrientedBox = function (b, c, d, e) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = null);
		void 0 === e && (e = 0);
		var f = new j();
		f.SetAsOrientedBox(b, c, d, e);
		return f;
	};
	j.prototype.SetAsEdge = function (b, c) {
		this.m_vertexCount = 2;
		this.Reserve(2);
		this.m_vertices[0].SetV(b);
		this.m_vertices[1].SetV(c);
		this.m_centroid.x = 0.5 * (b.x + c.x);
		this.m_centroid.y = 0.5 * (b.y + c.y);
		this.m_normals[0] = g.CrossVF(g.SubtractVV(c, b), 1);
		this.m_normals[0].Normalize();
		this.m_normals[1].x = -this.m_normals[0].x;
		this.m_normals[1].y = -this.m_normals[0].y;
	};
	j.AsEdge = function (b, c) {
		var d = new j();
		d.SetAsEdge(b, c);
		return d;
	};
	j.prototype.TestPoint = function (b, c) {
		var d;
		d = b.R;
		for (
			var e = c.x - b.position.x,
				f = c.y - b.position.y,
				g = e * d.col1.x + f * d.col1.y,
				j = e * d.col2.x + f * d.col2.y,
				m = 0;
			m < this.m_vertexCount;
			++m
		)
			if (
				((d = this.m_vertices[m]),
				(e = g - d.x),
				(f = j - d.y),
				(d = this.m_normals[m]),
				0 < d.x * e + d.y * f)
			)
				return !1;
		return !0;
	};
	j.prototype.RayCast = function (b, c, d) {
		var e = 0,
			f = c.maxFraction,
			g = 0,
			j = 0,
			m,
			n,
			g = c.p1.x - d.position.x,
			j = c.p1.y - d.position.y;
		m = d.R;
		var r = g * m.col1.x + j * m.col1.y,
			A = g * m.col2.x + j * m.col2.y,
			g = c.p2.x - d.position.x,
			j = c.p2.y - d.position.y;
		m = d.R;
		c = g * m.col1.x + j * m.col1.y - r;
		m = g * m.col2.x + j * m.col2.y - A;
		for (var y = -1, q = 0; q < this.m_vertexCount; ++q) {
			n = this.m_vertices[q];
			g = n.x - r;
			j = n.y - A;
			n = this.m_normals[q];
			g = n.x * g + n.y * j;
			j = n.x * c + n.y * m;
			if (0 == j) {
				if (0 > g) return !1;
			} else
				0 > j && g < e * j
					? ((e = g / j), (y = q))
					: 0 < j && g < f * j && (f = g / j);
			if (f < e - Number.MIN_VALUE) return !1;
		}
		return 0 <= y
			? ((b.fraction = e),
			  (m = d.R),
			  (n = this.m_normals[y]),
			  (b.normal.x = m.col1.x * n.x + m.col2.x * n.y),
			  (b.normal.y = m.col1.y * n.x + m.col2.y * n.y),
			  !0)
			: !1;
	};
	j.prototype.ComputeAABB = function (b, c) {
		for (
			var d = c.R,
				e = this.m_vertices[0],
				f = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
				g = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
				j = f,
				m = g,
				n = 1;
			n < this.m_vertexCount;
			++n
		)
			var e = this.m_vertices[n],
				r = c.position.x + (d.col1.x * e.x + d.col2.x * e.y),
				e = c.position.y + (d.col1.y * e.x + d.col2.y * e.y),
				f = f < r ? f : r,
				g = g < e ? g : e,
				j = j > r ? j : r,
				m = m > e ? m : e;
		b.lowerBound.x = f - this.m_radius;
		b.lowerBound.y = g - this.m_radius;
		b.upperBound.x = j + this.m_radius;
		b.upperBound.y = m + this.m_radius;
	};
	j.prototype.ComputeMass = function (b, c) {
		void 0 === c && (c = 0);
		if (2 == this.m_vertexCount)
			(b.center.x = 0.5 * (this.m_vertices[0].x + this.m_vertices[1].x)),
				(b.center.y =
					0.5 * (this.m_vertices[0].y + this.m_vertices[1].y)),
				(b.mass = 0),
				(b.I = 0);
		else {
			for (
				var d = 0, e = 0, f = 0, g = 0, j = 1 / 3, m = 0;
				m < this.m_vertexCount;
				++m
			)
				var n = this.m_vertices[m],
					r =
						m + 1 < this.m_vertexCount
							? this.m_vertices[parseInt(m + 1)]
							: this.m_vertices[0],
					A = n.x - 0,
					y = n.y - 0,
					q = r.x - 0,
					u = r.y - 0,
					F = A * u - y * q,
					C = 0.5 * F,
					f = f + C,
					d = d + C * j * (0 + n.x + r.x),
					e = e + C * j * (0 + n.y + r.y),
					n = A,
					g =
						g +
						F *
							(j *
								(0.25 * (n * n + q * n + q * q) +
									(0 * n + 0 * q)) +
								0 +
								(j *
									(0.25 * (y * y + u * y + u * u) +
										(0 * y + 0 * u)) +
									0));
			b.mass = c * f;
			b.center.Set(d * (1 / f), e * (1 / f));
			b.I = c * g;
		}
	};
	j.prototype.ComputeSubmergedArea = function (b, c, d, f) {
		void 0 === c && (c = 0);
		var j = g.MulTMV(d.R, b),
			m = c - g.Dot(b, d.position),
			n = new Vector_a2j_Number(),
			r = 0,
			A = -1;
		c = -1;
		var y = !1;
		for (b = b = 0; b < this.m_vertexCount; ++b) {
			n[b] = g.Dot(j, this.m_vertices[b]) - m;
			var B = n[b] < -Number.MIN_VALUE;
			0 < b && (B ? y || ((A = b - 1), r++) : y && ((c = b - 1), r++));
			y = B;
		}
		switch (r) {
			case 0:
				return y
					? ((b = new e()),
					  this.ComputeMass(b, 1),
					  f.SetV(g.MulX(d, b.center)),
					  b.mass)
					: 0;
			case 1:
				-1 == A
					? (A = this.m_vertexCount - 1)
					: (c = this.m_vertexCount - 1);
		}
		b = parseInt((A + 1) % this.m_vertexCount);
		j = parseInt((c + 1) % this.m_vertexCount);
		m = (0 - n[A]) / (n[b] - n[A]);
		n = (0 - n[c]) / (n[j] - n[c]);
		A = new z(
			this.m_vertices[A].x * (1 - m) + this.m_vertices[b].x * m,
			this.m_vertices[A].y * (1 - m) + this.m_vertices[b].y * m
		);
		c = new z(
			this.m_vertices[c].x * (1 - n) + this.m_vertices[j].x * n,
			this.m_vertices[c].y * (1 - n) + this.m_vertices[j].y * n
		);
		n = 0;
		m = new z();
		for (r = this.m_vertices[b]; b != j; )
			(b = (b + 1) % this.m_vertexCount),
				(y = b == j ? c : this.m_vertices[b]),
				(B =
					0.5 *
					((r.x - A.x) * (y.y - A.y) - (r.y - A.y) * (y.x - A.x))),
				(n += B),
				(m.x += (B * (A.x + r.x + y.x)) / 3),
				(m.y += (B * (A.y + r.y + y.y)) / 3),
				(r = y);
		m.Multiply(1 / n);
		f.SetV(g.MulX(d, m));
		return n;
	};
	j.prototype.GetVertexCount = function () {
		return this.m_vertexCount;
	};
	j.prototype.GetVertices = function () {
		return this.m_vertices;
	};
	j.prototype.GetNormals = function () {
		return this.m_normals;
	};
	j.prototype.GetSupport = function (b) {
		for (
			var c = 0,
				d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
				e = 1;
			e < this.m_vertexCount;
			++e
		) {
			var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
			f > d && ((c = e), (d = f));
		}
		return c;
	};
	j.prototype.GetSupportVertex = function (b) {
		for (
			var c = 0,
				d = this.m_vertices[0].x * b.x + this.m_vertices[0].y * b.y,
				e = 1;
			e < this.m_vertexCount;
			++e
		) {
			var f = this.m_vertices[e].x * b.x + this.m_vertices[e].y * b.y;
			f > d && ((c = e), (d = f));
		}
		return this.m_vertices[c];
	};
	j.prototype.Validate = function () {
		return !1;
	};
	j.prototype.b2PolygonShape = function () {
		this.__super.b2Shape.call(this);
		this.m_type = n.e_polygonShape;
		this.m_centroid = new z();
		this.m_vertices = new Vector();
		this.m_normals = new Vector();
	};
	j.prototype.Reserve = function (b) {
		void 0 === b && (b = 0);
		for (var c = parseInt(this.m_vertices.length); c < b; c++)
			(this.m_vertices[c] = new z()), (this.m_normals[c] = new z());
	};
	j.ComputeCentroid = function (b, c) {
		void 0 === c && (c = 0);
		for (var d = new z(), e = 0, f = 1 / 3, g = 0; g < c; ++g) {
			var j = b[g],
				m = g + 1 < c ? b[parseInt(g + 1)] : b[0],
				n = 0.5 * ((j.x - 0) * (m.y - 0) - (j.y - 0) * (m.x - 0)),
				e = e + n;
			d.x += n * f * (0 + j.x + m.x);
			d.y += n * f * (0 + j.y + m.y);
		}
		d.x *= 1 / e;
		d.y *= 1 / e;
		return d;
	};
	j.ComputeOBB = function (b, c, d) {
		void 0 === d && (d = 0);
		for (var e = 0, f = new Vector(d + 1), e = 0; e < d; ++e) f[e] = c[e];
		f[d] = f[0];
		c = Number.MAX_VALUE;
		for (e = 1; e <= d; ++e) {
			for (
				var g = f[parseInt(e - 1)],
					j = f[e].x - g.x,
					m = f[e].y - g.y,
					n = Math.sqrt(j * j + m * m),
					j = j / n,
					m = m / n,
					r = -m,
					A = j,
					y = (n = Number.MAX_VALUE),
					q = -Number.MAX_VALUE,
					u = -Number.MAX_VALUE,
					F = 0;
				F < d;
				++F
			) {
				var C = f[F].x - g.x,
					H = f[F].y - g.y,
					Z = j * C + m * H,
					C = r * C + A * H;
				Z < n && (n = Z);
				C < y && (y = C);
				Z > q && (q = Z);
				C > u && (u = C);
			}
			F = (q - n) * (u - y);
			F < 0.95 * c &&
				((c = F),
				(b.R.col1.x = j),
				(b.R.col1.y = m),
				(b.R.col2.x = r),
				(b.R.col2.y = A),
				(j = 0.5 * (n + q)),
				(m = 0.5 * (y + u)),
				(r = b.R),
				(b.center.x = g.x + (r.col1.x * j + r.col2.x * m)),
				(b.center.y = g.y + (r.col1.y * j + r.col2.y * m)),
				(b.extents.x = 0.5 * (q - n)),
				(b.extents.y = 0.5 * (u - y)));
		}
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.Shapes.b2PolygonShape.s_mat = new m();
	});
	n.b2Shape = function () {};
	n.prototype.Copy = function () {
		return null;
	};
	n.prototype.Set = function (b) {
		this.m_radius = b.m_radius;
	};
	n.prototype.GetType = function () {
		return this.m_type;
	};
	n.prototype.TestPoint = function () {
		return !1;
	};
	n.prototype.RayCast = function () {
		return !1;
	};
	n.prototype.ComputeAABB = function () {};
	n.prototype.ComputeMass = function () {};
	n.prototype.ComputeSubmergedArea = function () {
		return 0;
	};
	n.TestOverlap = function (b, c, d, e) {
		var f = new A();
		f.proxyA = new I();
		f.proxyA.Set(b);
		f.proxyB = new I();
		f.proxyB.Set(d);
		f.transformA = c;
		f.transformB = e;
		f.useRadii = !0;
		b = new D();
		b.count = 0;
		c = new B();
		y.Distance(c, b, f);
		return c.distance < 10 * Number.MIN_VALUE;
	};
	n.prototype.b2Shape = function () {
		this.m_type = n.e_unknownShape;
		this.m_radius = b.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
		Box2D.Collision.Shapes.b2Shape.e_unknownShape = -1;
		Box2D.Collision.Shapes.b2Shape.e_circleShape = 0;
		Box2D.Collision.Shapes.b2Shape.e_polygonShape = 1;
		Box2D.Collision.Shapes.b2Shape.e_edgeShape = 2;
		Box2D.Collision.Shapes.b2Shape.e_shapeTypeCount = 3;
		Box2D.Collision.Shapes.b2Shape.e_hitCollide = 1;
		Box2D.Collision.Shapes.b2Shape.e_missCollide = 0;
		Box2D.Collision.Shapes.b2Shape.e_startsInsideCollide = -1;
	});
})();
(function () {
	var b = Box2D.Common.b2Color,
		c = Box2D.Common.b2Settings,
		d = Box2D.Common.Math.b2Math;
	b.b2Color = function () {
		this._b = this._g = this._r = 0;
	};
	b.prototype.b2Color = function (b, c, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === j && (j = 0);
		this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
		this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1));
	};
	b.prototype.Set = function (b, c, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === j && (j = 0);
		this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		this._g = Box2D.parseUInt(255 * d.Clamp(c, 0, 1));
		this._b = Box2D.parseUInt(255 * d.Clamp(j, 0, 1));
	};
	Object.defineProperty(b.prototype, 'r', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._r = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		},
	});
	Object.defineProperty(b.prototype, 'g', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._g = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		},
	});
	Object.defineProperty(b.prototype, 'b', {
		enumerable: !1,
		configurable: !0,
		set: function (b) {
			void 0 === b && (b = 0);
			this._b = Box2D.parseUInt(255 * d.Clamp(b, 0, 1));
		},
	});
	Object.defineProperty(b.prototype, 'color', {
		enumerable: !1,
		configurable: !0,
		get: function () {
			return (this._r << 16) | (this._g << 8) | this._b;
		},
	});
	c.b2Settings = function () {};
	c.b2MixFriction = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return Math.sqrt(b * c);
	};
	c.b2MixRestitution = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b > c ? b : c;
	};
	c.b2Assert = function (b) {
		if (!b) throw 'Assertion Failed';
	};
	Box2D.postDefs.push(function () {
		Box2D.Common.b2Settings.VERSION = '2.1alpha';
		Box2D.Common.b2Settings.USHRT_MAX = 65535;
		Box2D.Common.b2Settings.b2_pi = Math.PI;
		Box2D.Common.b2Settings.b2_maxManifoldPoints = 2;
		Box2D.Common.b2Settings.b2_aabbExtension = 0.1;
		Box2D.Common.b2Settings.b2_aabbMultiplier = 2;
		Box2D.Common.b2Settings.b2_polygonRadius = 2 * c.b2_linearSlop;
		Box2D.Common.b2Settings.b2_linearSlop = 0.005;
		Box2D.Common.b2Settings.b2_angularSlop = (2 / 180) * c.b2_pi;
		Box2D.Common.b2Settings.b2_toiSlop = 8 * c.b2_linearSlop;
		Box2D.Common.b2Settings.b2_maxTOIContactsPerIsland = 32;
		Box2D.Common.b2Settings.b2_maxTOIJointsPerIsland = 32;
		Box2D.Common.b2Settings.b2_velocityThreshold = 1;
		Box2D.Common.b2Settings.b2_maxLinearCorrection = 0.2;
		Box2D.Common.b2Settings.b2_maxAngularCorrection = (8 / 180) * c.b2_pi;
		Box2D.Common.b2Settings.b2_maxTranslation = 2;
		Box2D.Common.b2Settings.b2_maxTranslationSquared =
			c.b2_maxTranslation * c.b2_maxTranslation;
		Box2D.Common.b2Settings.b2_maxRotation = 0.5 * c.b2_pi;
		Box2D.Common.b2Settings.b2_maxRotationSquared =
			c.b2_maxRotation * c.b2_maxRotation;
		Box2D.Common.b2Settings.b2_contactBaumgarte = 0.2;
		Box2D.Common.b2Settings.b2_timeToSleep = 0.5;
		Box2D.Common.b2Settings.b2_linearSleepTolerance = 0.01;
		Box2D.Common.b2Settings.b2_angularSleepTolerance = (2 / 180) * c.b2_pi;
	});
})();
(function () {
	var b = Box2D.Common.Math.b2Mat22,
		c = Box2D.Common.Math.b2Mat33,
		d = Box2D.Common.Math.b2Math,
		f = Box2D.Common.Math.b2Sweep,
		e = Box2D.Common.Math.b2Transform,
		j = Box2D.Common.Math.b2Vec2,
		n = Box2D.Common.Math.b2Vec3;
	b.b2Mat22 = function () {
		this.col1 = new j();
		this.col2 = new j();
	};
	b.prototype.b2Mat22 = function () {
		this.SetIdentity();
	};
	b.FromAngle = function (c) {
		void 0 === c && (c = 0);
		var d = new b();
		d.Set(c);
		return d;
	};
	b.FromVV = function (c, d) {
		var e = new b();
		e.SetVV(c, d);
		return e;
	};
	b.prototype.Set = function (b) {
		void 0 === b && (b = 0);
		var c = Math.cos(b);
		b = Math.sin(b);
		this.col1.x = c;
		this.col2.x = -b;
		this.col1.y = b;
		this.col2.y = c;
	};
	b.prototype.SetVV = function (b, c) {
		this.col1.SetV(b);
		this.col2.SetV(c);
	};
	b.prototype.Copy = function () {
		var c = new b();
		c.SetM(this);
		return c;
	};
	b.prototype.SetM = function (b) {
		this.col1.SetV(b.col1);
		this.col2.SetV(b.col2);
	};
	b.prototype.AddM = function (b) {
		this.col1.x += b.col1.x;
		this.col1.y += b.col1.y;
		this.col2.x += b.col2.x;
		this.col2.y += b.col2.y;
	};
	b.prototype.SetIdentity = function () {
		this.col1.x = 1;
		this.col2.x = 0;
		this.col1.y = 0;
		this.col2.y = 1;
	};
	b.prototype.SetZero = function () {
		this.col1.x = 0;
		this.col2.x = 0;
		this.col1.y = 0;
		this.col2.y = 0;
	};
	b.prototype.GetAngle = function () {
		return Math.atan2(this.col1.y, this.col1.x);
	};
	b.prototype.GetInverse = function (b) {
		var c = this.col1.x,
			d = this.col2.x,
			e = this.col1.y,
			f = this.col2.y,
			j = c * f - d * e;
		0 != j && (j = 1 / j);
		b.col1.x = j * f;
		b.col2.x = -j * d;
		b.col1.y = -j * e;
		b.col2.y = j * c;
		return b;
	};
	b.prototype.Solve = function (b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = this.col1.x,
			f = this.col2.x,
			j = this.col1.y,
			n = this.col2.y,
			I = e * n - f * j;
		0 != I && (I = 1 / I);
		b.x = I * (n * c - f * d);
		b.y = I * (e * d - j * c);
		return b;
	};
	b.prototype.Abs = function () {
		this.col1.Abs();
		this.col2.Abs();
	};
	c.b2Mat33 = function () {
		this.col1 = new n();
		this.col2 = new n();
		this.col3 = new n();
	};
	c.prototype.b2Mat33 = function (b, c, d) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		void 0 === d && (d = null);
		!b && !c && !d
			? (this.col1.SetZero(), this.col2.SetZero(), this.col3.SetZero())
			: (this.col1.SetV(b), this.col2.SetV(c), this.col3.SetV(d));
	};
	c.prototype.SetVVV = function (b, c, d) {
		this.col1.SetV(b);
		this.col2.SetV(c);
		this.col3.SetV(d);
	};
	c.prototype.Copy = function () {
		return new c(this.col1, this.col2, this.col3);
	};
	c.prototype.SetM = function (b) {
		this.col1.SetV(b.col1);
		this.col2.SetV(b.col2);
		this.col3.SetV(b.col3);
	};
	c.prototype.AddM = function (b) {
		this.col1.x += b.col1.x;
		this.col1.y += b.col1.y;
		this.col1.z += b.col1.z;
		this.col2.x += b.col2.x;
		this.col2.y += b.col2.y;
		this.col2.z += b.col2.z;
		this.col3.x += b.col3.x;
		this.col3.y += b.col3.y;
		this.col3.z += b.col3.z;
	};
	c.prototype.SetIdentity = function () {
		this.col1.x = 1;
		this.col2.x = 0;
		this.col3.x = 0;
		this.col1.y = 0;
		this.col2.y = 1;
		this.col3.y = 0;
		this.col1.z = 0;
		this.col2.z = 0;
		this.col3.z = 1;
	};
	c.prototype.SetZero = function () {
		this.col1.x = 0;
		this.col2.x = 0;
		this.col3.x = 0;
		this.col1.y = 0;
		this.col2.y = 0;
		this.col3.y = 0;
		this.col1.z = 0;
		this.col2.z = 0;
		this.col3.z = 0;
	};
	c.prototype.Solve22 = function (b, c, d) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var e = this.col1.x,
			f = this.col2.x,
			j = this.col1.y,
			n = this.col2.y,
			I = e * n - f * j;
		0 != I && (I = 1 / I);
		b.x = I * (n * c - f * d);
		b.y = I * (e * d - j * c);
		return b;
	};
	c.prototype.Solve33 = function (b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		void 0 === e && (e = 0);
		var f = this.col1.x,
			j = this.col1.y,
			n = this.col1.z,
			I = this.col2.x,
			D = this.col2.y,
			t = this.col2.z,
			G = this.col3.x,
			E = this.col3.y,
			L = this.col3.z,
			M = f * (D * L - t * E) + j * (t * G - I * L) + n * (I * E - D * G);
		0 != M && (M = 1 / M);
		b.x =
			M *
			(c * (D * L - t * E) + d * (t * G - I * L) + e * (I * E - D * G));
		b.y =
			M *
			(f * (d * L - e * E) + j * (e * G - c * L) + n * (c * E - d * G));
		b.z =
			M *
			(f * (D * e - t * d) + j * (t * c - I * e) + n * (I * d - D * c));
		return b;
	};
	d.b2Math = function () {};
	d.IsValid = function (b) {
		void 0 === b && (b = 0);
		return isFinite(b);
	};
	d.Dot = function (b, c) {
		return b.x * c.x + b.y * c.y;
	};
	d.CrossVV = function (b, c) {
		return b.x * c.y - b.y * c.x;
	};
	d.CrossVF = function (b, c) {
		void 0 === c && (c = 0);
		return new j(c * b.y, -c * b.x);
	};
	d.CrossFV = function (b, c) {
		void 0 === b && (b = 0);
		return new j(-b * c.y, b * c.x);
	};
	d.MulMV = function (b, c) {
		return new j(
			b.col1.x * c.x + b.col2.x * c.y,
			b.col1.y * c.x + b.col2.y * c.y
		);
	};
	d.MulTMV = function (b, c) {
		return new j(d.Dot(c, b.col1), d.Dot(c, b.col2));
	};
	d.MulX = function (b, c) {
		var e = d.MulMV(b.R, c);
		e.x += b.position.x;
		e.y += b.position.y;
		return e;
	};
	d.MulXT = function (b, c) {
		var e = d.SubtractVV(c, b.position),
			f = e.x * b.R.col1.x + e.y * b.R.col1.y;
		e.y = e.x * b.R.col2.x + e.y * b.R.col2.y;
		e.x = f;
		return e;
	};
	d.AddVV = function (b, c) {
		return new j(b.x + c.x, b.y + c.y);
	};
	d.SubtractVV = function (b, c) {
		return new j(b.x - c.x, b.y - c.y);
	};
	d.Distance = function (b, c) {
		var d = b.x - c.x,
			e = b.y - c.y;
		return Math.sqrt(d * d + e * e);
	};
	d.DistanceSquared = function (b, c) {
		var d = b.x - c.x,
			e = b.y - c.y;
		return d * d + e * e;
	};
	d.MulFV = function (b, c) {
		void 0 === b && (b = 0);
		return new j(b * c.x, b * c.y);
	};
	d.AddMM = function (c, e) {
		return b.FromVV(d.AddVV(c.col1, e.col1), d.AddVV(c.col2, e.col2));
	};
	d.MulMM = function (c, e) {
		return b.FromVV(d.MulMV(c, e.col1), d.MulMV(c, e.col2));
	};
	d.MulTMM = function (c, e) {
		var f = new j(d.Dot(c.col1, e.col1), d.Dot(c.col2, e.col1)),
			n = new j(d.Dot(c.col1, e.col2), d.Dot(c.col2, e.col2));
		return b.FromVV(f, n);
	};
	d.Abs = function (b) {
		void 0 === b && (b = 0);
		return 0 < b ? b : -b;
	};
	d.AbsV = function (b) {
		return new j(d.Abs(b.x), d.Abs(b.y));
	};
	d.AbsM = function (c) {
		return b.FromVV(d.AbsV(c.col1), d.AbsV(c.col2));
	};
	d.Min = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b < c ? b : c;
	};
	d.MinV = function (b, c) {
		return new j(d.Min(b.x, c.x), d.Min(b.y, c.y));
	};
	d.Max = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return b > c ? b : c;
	};
	d.MaxV = function (b, c) {
		return new j(d.Max(b.x, c.x), d.Max(b.y, c.y));
	};
	d.Clamp = function (b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		return b < c ? c : b > d ? d : b;
	};
	d.ClampV = function (b, c, e) {
		return d.MaxV(c, d.MinV(b, e));
	};
	d.Swap = function (b, c) {
		var d = b[0];
		b[0] = c[0];
		c[0] = d;
	};
	d.Random = function () {
		return 2 * Math.random() - 1;
	};
	d.RandomRange = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		var d = Math.random();
		return (c - b) * d + b;
	};
	d.NextPowerOfTwo = function (b) {
		void 0 === b && (b = 0);
		b |= (b >> 1) & 2147483647;
		b |= (b >> 2) & 1073741823;
		b |= (b >> 4) & 268435455;
		b |= (b >> 8) & 16777215;
		return (b | ((b >> 16) & 65535)) + 1;
	};
	d.IsPowerOfTwo = function (b) {
		void 0 === b && (b = 0);
		return 0 < b && 0 == (b & (b - 1));
	};
	Box2D.postDefs.push(function () {
		Box2D.Common.Math.b2Math.b2Vec2_zero = new j(0, 0);
		Box2D.Common.Math.b2Math.b2Mat22_identity = b.FromVV(
			new j(1, 0),
			new j(0, 1)
		);
		Box2D.Common.Math.b2Math.b2Transform_identity = new e(
			d.b2Vec2_zero,
			d.b2Mat22_identity
		);
	});
	f.b2Sweep = function () {
		this.localCenter = new j();
		this.c0 = new j();
		this.c = new j();
	};
	f.prototype.Set = function (b) {
		this.localCenter.SetV(b.localCenter);
		this.c0.SetV(b.c0);
		this.c.SetV(b.c);
		this.a0 = b.a0;
		this.a = b.a;
		this.t0 = b.t0;
	};
	f.prototype.Copy = function () {
		var b = new f();
		b.localCenter.SetV(this.localCenter);
		b.c0.SetV(this.c0);
		b.c.SetV(this.c);
		b.a0 = this.a0;
		b.a = this.a;
		b.t0 = this.t0;
		return b;
	};
	f.prototype.GetTransform = function (b, c) {
		void 0 === c && (c = 0);
		b.position.x = (1 - c) * this.c0.x + c * this.c.x;
		b.position.y = (1 - c) * this.c0.y + c * this.c.y;
		b.R.Set((1 - c) * this.a0 + c * this.a);
		var d = b.R;
		b.position.x -=
			d.col1.x * this.localCenter.x + d.col2.x * this.localCenter.y;
		b.position.y -=
			d.col1.y * this.localCenter.x + d.col2.y * this.localCenter.y;
	};
	f.prototype.Advance = function (b) {
		void 0 === b && (b = 0);
		if (this.t0 < b && 1 - this.t0 > Number.MIN_VALUE) {
			var c = (b - this.t0) / (1 - this.t0);
			this.c0.x = (1 - c) * this.c0.x + c * this.c.x;
			this.c0.y = (1 - c) * this.c0.y + c * this.c.y;
			this.a0 = (1 - c) * this.a0 + c * this.a;
			this.t0 = b;
		}
	};
	e.b2Transform = function () {
		this.position = new j();
		this.R = new b();
	};
	e.prototype.b2Transform = function (b, c) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		b && (this.position.SetV(b), this.R.SetM(c));
	};
	e.prototype.Initialize = function (b, c) {
		this.position.SetV(b);
		this.R.SetM(c);
	};
	e.prototype.SetIdentity = function () {
		this.position.SetZero();
		this.R.SetIdentity();
	};
	e.prototype.Set = function (b) {
		this.position.SetV(b.position);
		this.R.SetM(b.R);
	};
	e.prototype.GetAngle = function () {
		return Math.atan2(this.R.col1.y, this.R.col1.x);
	};
	j.b2Vec2 = function () {};
	j.prototype.b2Vec2 = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = b;
		this.y = c;
	};
	j.prototype.SetZero = function () {
		this.y = this.x = 0;
	};
	j.prototype.Set = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.x = b;
		this.y = c;
	};
	j.prototype.SetV = function (b) {
		this.x = b.x;
		this.y = b.y;
	};
	j.prototype.GetNegative = function () {
		return new j(-this.x, -this.y);
	};
	j.prototype.NegativeSelf = function () {
		this.x = -this.x;
		this.y = -this.y;
	};
	j.Make = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		return new j(b, c);
	};
	j.prototype.Copy = function () {
		return new j(this.x, this.y);
	};
	j.prototype.Add = function (b) {
		this.x += b.x;
		this.y += b.y;
	};
	j.prototype.Subtract = function (b) {
		this.x -= b.x;
		this.y -= b.y;
	};
	j.prototype.Multiply = function (b) {
		void 0 === b && (b = 0);
		this.x *= b;
		this.y *= b;
	};
	j.prototype.MulM = function (b) {
		var c = this.x;
		this.x = b.col1.x * c + b.col2.x * this.y;
		this.y = b.col1.y * c + b.col2.y * this.y;
	};
	j.prototype.MulTM = function (b) {
		var c = d.Dot(this, b.col1);
		this.y = d.Dot(this, b.col2);
		this.x = c;
	};
	j.prototype.CrossVF = function (b) {
		void 0 === b && (b = 0);
		var c = this.x;
		this.x = b * this.y;
		this.y = -b * c;
	};
	j.prototype.CrossFV = function (b) {
		void 0 === b && (b = 0);
		var c = this.x;
		this.x = -b * this.y;
		this.y = b * c;
	};
	j.prototype.MinV = function (b) {
		this.x = this.x < b.x ? this.x : b.x;
		this.y = this.y < b.y ? this.y : b.y;
	};
	j.prototype.MaxV = function (b) {
		this.x = this.x > b.x ? this.x : b.x;
		this.y = this.y > b.y ? this.y : b.y;
	};
	j.prototype.Abs = function () {
		0 > this.x && (this.x = -this.x);
		0 > this.y && (this.y = -this.y);
	};
	j.prototype.Length = function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	};
	j.prototype.LengthSquared = function () {
		return this.x * this.x + this.y * this.y;
	};
	j.prototype.Normalize = function () {
		var b = Math.sqrt(this.x * this.x + this.y * this.y);
		if (b < Number.MIN_VALUE) return 0;
		var c = 1 / b;
		this.x *= c;
		this.y *= c;
		return b;
	};
	j.prototype.IsValid = function () {
		return d.IsValid(this.x) && d.IsValid(this.y);
	};
	n.b2Vec3 = function () {};
	n.prototype.b2Vec3 = function (b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.x = b;
		this.y = c;
		this.z = d;
	};
	n.prototype.SetZero = function () {
		this.x = this.y = this.z = 0;
	};
	n.prototype.Set = function (b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.x = b;
		this.y = c;
		this.z = d;
	};
	n.prototype.SetV = function (b) {
		this.x = b.x;
		this.y = b.y;
		this.z = b.z;
	};
	n.prototype.GetNegative = function () {
		return new n(-this.x, -this.y, -this.z);
	};
	n.prototype.NegativeSelf = function () {
		this.x = -this.x;
		this.y = -this.y;
		this.z = -this.z;
	};
	n.prototype.Copy = function () {
		return new n(this.x, this.y, this.z);
	};
	n.prototype.Add = function (b) {
		this.x += b.x;
		this.y += b.y;
		this.z += b.z;
	};
	n.prototype.Subtract = function (b) {
		this.x -= b.x;
		this.y -= b.y;
		this.z -= b.z;
	};
	n.prototype.Multiply = function (b) {
		void 0 === b && (b = 0);
		this.x *= b;
		this.y *= b;
		this.z *= b;
	};
})();
(function () {
	var b = Box2D.Common.Math.b2Math,
		c = Box2D.Common.Math.b2Sweep,
		d = Box2D.Common.Math.b2Transform,
		f = Box2D.Common.Math.b2Vec2,
		e = Box2D.Common.b2Color,
		j = Box2D.Common.b2Settings,
		n = Box2D.Collision.b2AABB,
		m = Box2D.Collision.b2ContactPoint,
		g = Box2D.Collision.b2DynamicTreeBroadPhase,
		r = Box2D.Collision.b2RayCastInput,
		z = Box2D.Collision.b2RayCastOutput,
		y = Box2D.Collision.Shapes.b2CircleShape,
		A = Box2D.Collision.Shapes.b2EdgeShape,
		B = Box2D.Collision.Shapes.b2MassData,
		I = Box2D.Collision.Shapes.b2PolygonShape,
		D = Box2D.Collision.Shapes.b2Shape,
		t = Box2D.Dynamics.b2Body,
		G = Box2D.Dynamics.b2BodyDef,
		E = Box2D.Dynamics.b2ContactFilter,
		L = Box2D.Dynamics.b2ContactImpulse,
		M = Box2D.Dynamics.b2ContactListener,
		Q = Box2D.Dynamics.b2ContactManager,
		J = Box2D.Dynamics.b2DebugDraw,
		ea = Box2D.Dynamics.b2DestructionListener,
		O = Box2D.Dynamics.b2FilterData,
		P = Box2D.Dynamics.b2Fixture,
		aa = Box2D.Dynamics.b2FixtureDef,
		U = Box2D.Dynamics.b2Island,
		q = Box2D.Dynamics.b2TimeStep,
		u = Box2D.Dynamics.b2World,
		F = Box2D.Dynamics.Contacts.b2Contact,
		C = Box2D.Dynamics.Contacts.b2ContactFactory,
		H = Box2D.Dynamics.Contacts.b2ContactSolver,
		Z = Box2D.Dynamics.Joints.b2Joint,
		R = Box2D.Dynamics.Joints.b2PulleyJoint;
	t.b2Body = function () {
		this.m_xf = new d();
		this.m_sweep = new c();
		this.m_linearVelocity = new f();
		this.m_force = new f();
	};
	t.prototype.connectEdges = function (c, d, e) {
		void 0 === e && (e = 0);
		var f = Math.atan2(d.GetDirectionVector().y, d.GetDirectionVector().x);
		e = b.MulFV(Math.tan(0.5 * (f - e)), d.GetDirectionVector());
		e = b.SubtractVV(e, d.GetNormalVector());
		e = b.MulFV(j.b2_toiSlop, e);
		e = b.AddVV(e, d.GetVertex1());
		var g = b.AddVV(c.GetDirectionVector(), d.GetDirectionVector());
		g.Normalize();
		var q = 0 < b.Dot(c.GetDirectionVector(), d.GetNormalVector());
		c.SetNextEdge(d, e, g, q);
		d.SetPrevEdge(c, e, g, q);
		return f;
	};
	t.prototype.CreateFixture = function (b) {
		if (!0 == this.m_world.IsLocked()) return null;
		var c = new P();
		c.Create(this, this.m_xf, b);
		this.m_flags & t.e_activeFlag &&
			c.CreateProxy(
				this.m_world.m_contactManager.m_broadPhase,
				this.m_xf
			);
		c.m_next = this.m_fixtureList;
		this.m_fixtureList = c;
		++this.m_fixtureCount;
		c.m_body = this;
		0 < c.m_density && this.ResetMassData();
		this.m_world.m_flags |= u.e_newFixture;
		return c;
	};
	t.prototype.CreateFixture2 = function (b, c) {
		void 0 === c && (c = 0);
		var d = new aa();
		d.shape = b;
		d.density = c;
		return this.CreateFixture(d);
	};
	t.prototype.DestroyFixture = function (b) {
		if (!0 != this.m_world.IsLocked()) {
			for (var c = this.m_fixtureList, d = null; null != c; ) {
				if (c == b) {
					d ? (d.m_next = b.m_next) : (this.m_fixtureList = b.m_next);
					break;
				}
				d = c;
				c = c.m_next;
			}
			for (c = this.m_contactList; c; ) {
				var d = c.contact,
					c = c.next,
					e = d.GetFixtureA(),
					f = d.GetFixtureB();
				(b == e || b == f) && this.m_world.m_contactManager.Destroy(d);
			}
			this.m_flags & t.e_activeFlag &&
				b.DestroyProxy(this.m_world.m_contactManager.m_broadPhase);
			b.Destroy();
			b.m_body = null;
			b.m_next = null;
			--this.m_fixtureCount;
			this.ResetMassData();
		}
	};
	t.prototype.SetPositionAndAngle = function (b, c) {
		void 0 === c && (c = 0);
		var d;
		if (!0 != this.m_world.IsLocked()) {
			this.m_xf.R.Set(c);
			this.m_xf.position.SetV(b);
			d = this.m_xf.R;
			var e = this.m_sweep.localCenter;
			this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
			this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
			this.m_sweep.c.x += this.m_xf.position.x;
			this.m_sweep.c.y += this.m_xf.position.y;
			this.m_sweep.c0.SetV(this.m_sweep.c);
			this.m_sweep.a0 = this.m_sweep.a = c;
			e = this.m_world.m_contactManager.m_broadPhase;
			for (d = this.m_fixtureList; d; d = d.m_next)
				d.Synchronize(e, this.m_xf, this.m_xf);
			this.m_world.m_contactManager.FindNewContacts();
		}
	};
	t.prototype.SetTransform = function (b) {
		this.SetPositionAndAngle(b.position, b.GetAngle());
	};
	t.prototype.GetTransform = function () {
		return this.m_xf;
	};
	t.prototype.GetPosition = function () {
		return this.m_xf.position;
	};
	t.prototype.SetPosition = function (b) {
		this.SetPositionAndAngle(b, this.GetAngle());
	};
	t.prototype.GetAngle = function () {
		return this.m_sweep.a;
	};
	t.prototype.SetAngle = function (b) {
		void 0 === b && (b = 0);
		this.SetPositionAndAngle(this.GetPosition(), b);
	};
	t.prototype.GetWorldCenter = function () {
		return this.m_sweep.c;
	};
	t.prototype.GetLocalCenter = function () {
		return this.m_sweep.localCenter;
	};
	t.prototype.SetLinearVelocity = function (b) {
		this.m_type != t.b2_staticBody && this.m_linearVelocity.SetV(b);
	};
	t.prototype.GetLinearVelocity = function () {
		return this.m_linearVelocity;
	};
	t.prototype.SetAngularVelocity = function (b) {
		void 0 === b && (b = 0);
		this.m_type != t.b2_staticBody && (this.m_angularVelocity = b);
	};
	t.prototype.GetAngularVelocity = function () {
		return this.m_angularVelocity;
	};
	t.prototype.GetDefinition = function () {
		var b = new G();
		b.type = this.GetType();
		b.allowSleep =
			(this.m_flags & t.e_allowSleepFlag) == t.e_allowSleepFlag;
		b.angle = this.GetAngle();
		b.angularDamping = this.m_angularDamping;
		b.angularVelocity = this.m_angularVelocity;
		b.fixedRotation =
			(this.m_flags & t.e_fixedRotationFlag) == t.e_fixedRotationFlag;
		b.bullet = (this.m_flags & t.e_bulletFlag) == t.e_bulletFlag;
		b.awake = (this.m_flags & t.e_awakeFlag) == t.e_awakeFlag;
		b.linearDamping = this.m_linearDamping;
		b.linearVelocity.SetV(this.GetLinearVelocity());
		b.position = this.GetPosition();
		b.userData = this.GetUserData();
		return b;
	};
	t.prototype.ApplyForce = function (b, c) {
		this.m_type == t.b2_dynamicBody &&
			(!1 == this.IsAwake() && this.SetAwake(!0),
			(this.m_force.x += b.x),
			(this.m_force.y += b.y),
			(this.m_torque +=
				(c.x - this.m_sweep.c.x) * b.y -
				(c.y - this.m_sweep.c.y) * b.x));
	};
	t.prototype.ApplyTorque = function (b) {
		void 0 === b && (b = 0);
		this.m_type == t.b2_dynamicBody &&
			(!1 == this.IsAwake() && this.SetAwake(!0), (this.m_torque += b));
	};
	t.prototype.ApplyImpulse = function (b, c) {
		this.m_type == t.b2_dynamicBody &&
			(!1 == this.IsAwake() && this.SetAwake(!0),
			(this.m_linearVelocity.x += this.m_invMass * b.x),
			(this.m_linearVelocity.y += this.m_invMass * b.y),
			(this.m_angularVelocity +=
				this.m_invI *
				((c.x - this.m_sweep.c.x) * b.y -
					(c.y - this.m_sweep.c.y) * b.x)));
	};
	t.prototype.Split = function (c) {
		for (
			var d = this.GetLinearVelocity().Copy(),
				e = this.GetAngularVelocity(),
				f = this.GetWorldCenter(),
				j = this.m_world.CreateBody(this.GetDefinition()),
				g,
				q = this.m_fixtureList;
			q;

		)
			if (c(q)) {
				var u = q.m_next;
				g ? (g.m_next = u) : (this.m_fixtureList = u);
				this.m_fixtureCount--;
				q.m_next = j.m_fixtureList;
				j.m_fixtureList = q;
				j.m_fixtureCount++;
				q.m_body = j;
				q = u;
			} else (g = q), (q = q.m_next);
		this.ResetMassData();
		j.ResetMassData();
		g = this.GetWorldCenter();
		c = j.GetWorldCenter();
		g = b.AddVV(d, b.CrossFV(e, b.SubtractVV(g, f)));
		d = b.AddVV(d, b.CrossFV(e, b.SubtractVV(c, f)));
		this.SetLinearVelocity(g);
		j.SetLinearVelocity(d);
		this.SetAngularVelocity(e);
		j.SetAngularVelocity(e);
		this.SynchronizeFixtures();
		j.SynchronizeFixtures();
		return j;
	};
	t.prototype.Merge = function (b) {
		var c;
		for (c = b.m_fixtureList; c; ) {
			var d = c.m_next;
			b.m_fixtureCount--;
			c.m_next = this.m_fixtureList;
			this.m_fixtureList = c;
			this.m_fixtureCount++;
			c.m_body = f;
			c = d;
		}
		e.m_fixtureCount = 0;
		var e = this,
			f = b;
		e.GetWorldCenter();
		f.GetWorldCenter();
		e.GetLinearVelocity().Copy();
		f.GetLinearVelocity().Copy();
		e.GetAngularVelocity();
		f.GetAngularVelocity();
		e.ResetMassData();
		this.SynchronizeFixtures();
	};
	t.prototype.GetMass = function () {
		return this.m_mass;
	};
	t.prototype.GetInertia = function () {
		return this.m_I;
	};
	t.prototype.GetMassData = function (b) {
		b.mass = this.m_mass;
		b.I = this.m_I;
		b.center.SetV(this.m_sweep.localCenter);
	};
	t.prototype.SetMassData = function (c) {
		j.b2Assert(!1 == this.m_world.IsLocked());
		if (!0 != this.m_world.IsLocked() && this.m_type == t.b2_dynamicBody) {
			this.m_invI = this.m_I = this.m_invMass = 0;
			this.m_mass = c.mass;
			0 >= this.m_mass && (this.m_mass = 1);
			this.m_invMass = 1 / this.m_mass;
			0 < c.I &&
				0 == (this.m_flags & t.e_fixedRotationFlag) &&
				((this.m_I =
					c.I -
					this.m_mass *
						(c.center.x * c.center.x + c.center.y * c.center.y)),
				(this.m_invI = 1 / this.m_I));
			var d = this.m_sweep.c.Copy();
			this.m_sweep.localCenter.SetV(c.center);
			this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
			this.m_sweep.c.SetV(this.m_sweep.c0);
			this.m_linearVelocity.x +=
				this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
			this.m_linearVelocity.y +=
				this.m_angularVelocity * +(this.m_sweep.c.x - d.x);
		}
	};
	t.prototype.ResetMassData = function () {
		this.m_invI = this.m_I = this.m_invMass = this.m_mass = 0;
		this.m_sweep.localCenter.SetZero();
		if (
			!(
				this.m_type == t.b2_staticBody ||
				this.m_type == t.b2_kinematicBody
			)
		) {
			for (var c = f.Make(0, 0), d = this.m_fixtureList; d; d = d.m_next)
				if (0 != d.m_density) {
					var e = d.GetMassData();
					this.m_mass += e.mass;
					c.x += e.center.x * e.mass;
					c.y += e.center.y * e.mass;
					this.m_I += e.I;
				}
			0 < this.m_mass
				? ((this.m_invMass = 1 / this.m_mass),
				  (c.x *= this.m_invMass),
				  (c.y *= this.m_invMass))
				: (this.m_invMass = this.m_mass = 1);
			0 < this.m_I && 0 == (this.m_flags & t.e_fixedRotationFlag)
				? ((this.m_I -= this.m_mass * (c.x * c.x + c.y * c.y)),
				  (this.m_I *= this.m_inertiaScale),
				  j.b2Assert(0 < this.m_I),
				  (this.m_invI = 1 / this.m_I))
				: (this.m_invI = this.m_I = 0);
			d = this.m_sweep.c.Copy();
			this.m_sweep.localCenter.SetV(c);
			this.m_sweep.c0.SetV(b.MulX(this.m_xf, this.m_sweep.localCenter));
			this.m_sweep.c.SetV(this.m_sweep.c0);
			this.m_linearVelocity.x +=
				this.m_angularVelocity * -(this.m_sweep.c.y - d.y);
			this.m_linearVelocity.y +=
				this.m_angularVelocity * +(this.m_sweep.c.x - d.x);
		}
	};
	t.prototype.GetWorldPoint = function (b) {
		var c = this.m_xf.R;
		b = new f(
			c.col1.x * b.x + c.col2.x * b.y,
			c.col1.y * b.x + c.col2.y * b.y
		);
		b.x += this.m_xf.position.x;
		b.y += this.m_xf.position.y;
		return b;
	};
	t.prototype.GetWorldVector = function (c) {
		return b.MulMV(this.m_xf.R, c);
	};
	t.prototype.GetLocalPoint = function (c) {
		return b.MulXT(this.m_xf, c);
	};
	t.prototype.GetLocalVector = function (c) {
		return b.MulTMV(this.m_xf.R, c);
	};
	t.prototype.GetLinearVelocityFromWorldPoint = function (b) {
		return new f(
			this.m_linearVelocity.x -
				this.m_angularVelocity * (b.y - this.m_sweep.c.y),
			this.m_linearVelocity.y +
				this.m_angularVelocity * (b.x - this.m_sweep.c.x)
		);
	};
	t.prototype.GetLinearVelocityFromLocalPoint = function (b) {
		var c = this.m_xf.R;
		b = new f(
			c.col1.x * b.x + c.col2.x * b.y,
			c.col1.y * b.x + c.col2.y * b.y
		);
		b.x += this.m_xf.position.x;
		b.y += this.m_xf.position.y;
		return new f(
			this.m_linearVelocity.x -
				this.m_angularVelocity * (b.y - this.m_sweep.c.y),
			this.m_linearVelocity.y +
				this.m_angularVelocity * (b.x - this.m_sweep.c.x)
		);
	};
	t.prototype.GetLinearDamping = function () {
		return this.m_linearDamping;
	};
	t.prototype.SetLinearDamping = function (b) {
		void 0 === b && (b = 0);
		this.m_linearDamping = b;
	};
	t.prototype.GetAngularDamping = function () {
		return this.m_angularDamping;
	};
	t.prototype.SetAngularDamping = function (b) {
		void 0 === b && (b = 0);
		this.m_angularDamping = b;
	};
	t.prototype.SetType = function (b) {
		void 0 === b && (b = 0);
		if (this.m_type != b) {
			this.m_type = b;
			this.ResetMassData();
			this.m_type == t.b2_staticBody &&
				(this.m_linearVelocity.SetZero(), (this.m_angularVelocity = 0));
			this.SetAwake(!0);
			this.m_force.SetZero();
			this.m_torque = 0;
			for (b = this.m_contactList; b; b = b.next)
				b.contact.FlagForFiltering();
		}
	};
	t.prototype.GetType = function () {
		return this.m_type;
	};
	t.prototype.SetBullet = function (b) {
		this.m_flags = b
			? this.m_flags | t.e_bulletFlag
			: this.m_flags & ~t.e_bulletFlag;
	};
	t.prototype.IsBullet = function () {
		return (this.m_flags & t.e_bulletFlag) == t.e_bulletFlag;
	};
	t.prototype.SetSleepingAllowed = function (b) {
		b
			? (this.m_flags |= t.e_allowSleepFlag)
			: ((this.m_flags &= ~t.e_allowSleepFlag), this.SetAwake(!0));
	};
	t.prototype.SetAwake = function (b) {
		b
			? ((this.m_flags |= t.e_awakeFlag), (this.m_sleepTime = 0))
			: ((this.m_flags &= ~t.e_awakeFlag),
			  (this.m_sleepTime = 0),
			  this.m_linearVelocity.SetZero(),
			  (this.m_angularVelocity = 0),
			  this.m_force.SetZero(),
			  (this.m_torque = 0));
	};
	t.prototype.IsAwake = function () {
		return (this.m_flags & t.e_awakeFlag) == t.e_awakeFlag;
	};
	t.prototype.SetFixedRotation = function (b) {
		this.m_flags = b
			? this.m_flags | t.e_fixedRotationFlag
			: this.m_flags & ~t.e_fixedRotationFlag;
		this.ResetMassData();
	};
	t.prototype.IsFixedRotation = function () {
		return (this.m_flags & t.e_fixedRotationFlag) == t.e_fixedRotationFlag;
	};
	t.prototype.SetActive = function (b) {
		if (b != this.IsActive()) {
			var c;
			if (b) {
				this.m_flags |= t.e_activeFlag;
				b = this.m_world.m_contactManager.m_broadPhase;
				for (c = this.m_fixtureList; c; c = c.m_next)
					c.CreateProxy(b, this.m_xf);
			} else {
				this.m_flags &= ~t.e_activeFlag;
				b = this.m_world.m_contactManager.m_broadPhase;
				for (c = this.m_fixtureList; c; c = c.m_next) c.DestroyProxy(b);
				for (b = this.m_contactList; b; )
					(c = b),
						(b = b.next),
						this.m_world.m_contactManager.Destroy(c.contact);
				this.m_contactList = null;
			}
		}
	};
	t.prototype.IsActive = function () {
		return (this.m_flags & t.e_activeFlag) == t.e_activeFlag;
	};
	t.prototype.IsSleepingAllowed = function () {
		return (this.m_flags & t.e_allowSleepFlag) == t.e_allowSleepFlag;
	};
	t.prototype.GetFixtureList = function () {
		return this.m_fixtureList;
	};
	t.prototype.GetJointList = function () {
		return this.m_jointList;
	};
	t.prototype.GetControllerList = function () {
		return this.m_controllerList;
	};
	t.prototype.GetContactList = function () {
		return this.m_contactList;
	};
	t.prototype.GetNext = function () {
		return this.m_next;
	};
	t.prototype.GetUserData = function () {
		return this.m_userData;
	};
	t.prototype.SetUserData = function (b) {
		this.m_userData = b;
	};
	t.prototype.GetWorld = function () {
		return this.m_world;
	};
	t.prototype.b2Body = function (b, c) {
		this.m_flags = 0;
		b.bullet && (this.m_flags |= t.e_bulletFlag);
		b.fixedRotation && (this.m_flags |= t.e_fixedRotationFlag);
		b.allowSleep && (this.m_flags |= t.e_allowSleepFlag);
		b.awake && (this.m_flags |= t.e_awakeFlag);
		b.active && (this.m_flags |= t.e_activeFlag);
		this.m_world = c;
		this.m_xf.position.SetV(b.position);
		this.m_xf.R.Set(b.angle);
		this.m_sweep.localCenter.SetZero();
		this.m_sweep.t0 = 1;
		this.m_sweep.a0 = this.m_sweep.a = b.angle;
		var d = this.m_xf.R,
			e = this.m_sweep.localCenter;
		this.m_sweep.c.x = d.col1.x * e.x + d.col2.x * e.y;
		this.m_sweep.c.y = d.col1.y * e.x + d.col2.y * e.y;
		this.m_sweep.c.x += this.m_xf.position.x;
		this.m_sweep.c.y += this.m_xf.position.y;
		this.m_sweep.c0.SetV(this.m_sweep.c);
		this.m_contactList = this.m_controllerList = this.m_jointList = null;
		this.m_controllerCount = 0;
		this.m_next = this.m_prev = null;
		this.m_linearVelocity.SetV(b.linearVelocity);
		this.m_angularVelocity = b.angularVelocity;
		this.m_linearDamping = b.linearDamping;
		this.m_angularDamping = b.angularDamping;
		this.m_force.Set(0, 0);
		this.m_sleepTime = this.m_torque = 0;
		this.m_type = b.type;
		this.m_invMass =
			this.m_type == t.b2_dynamicBody
				? (this.m_mass = 1)
				: (this.m_mass = 0);
		this.m_invI = this.m_I = 0;
		this.m_inertiaScale = b.inertiaScale;
		this.m_userData = b.userData;
		this.m_fixtureList = null;
		this.m_fixtureCount = 0;
	};
	t.prototype.SynchronizeFixtures = function () {
		var b = t.s_xf1;
		b.R.Set(this.m_sweep.a0);
		var c = b.R,
			d = this.m_sweep.localCenter;
		b.position.x = this.m_sweep.c0.x - (c.col1.x * d.x + c.col2.x * d.y);
		b.position.y = this.m_sweep.c0.y - (c.col1.y * d.x + c.col2.y * d.y);
		d = this.m_world.m_contactManager.m_broadPhase;
		for (c = this.m_fixtureList; c; c = c.m_next)
			c.Synchronize(d, b, this.m_xf);
	};
	t.prototype.SynchronizeTransform = function () {
		this.m_xf.R.Set(this.m_sweep.a);
		var b = this.m_xf.R,
			c = this.m_sweep.localCenter;
		this.m_xf.position.x =
			this.m_sweep.c.x - (b.col1.x * c.x + b.col2.x * c.y);
		this.m_xf.position.y =
			this.m_sweep.c.y - (b.col1.y * c.x + b.col2.y * c.y);
	};
	t.prototype.ShouldCollide = function (b) {
		if (this.m_type != t.b2_dynamicBody && b.m_type != t.b2_dynamicBody)
			return !1;
		for (var c = this.m_jointList; c; c = c.next)
			if (c.other == b && !1 == c.joint.m_collideConnected) return !1;
		return !0;
	};
	t.prototype.Advance = function (b) {
		void 0 === b && (b = 0);
		this.m_sweep.Advance(b);
		this.m_sweep.c.SetV(this.m_sweep.c0);
		this.m_sweep.a = this.m_sweep.a0;
		this.SynchronizeTransform();
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2Body.s_xf1 = new d();
		Box2D.Dynamics.b2Body.e_islandFlag = 1;
		Box2D.Dynamics.b2Body.e_awakeFlag = 2;
		Box2D.Dynamics.b2Body.e_allowSleepFlag = 4;
		Box2D.Dynamics.b2Body.e_bulletFlag = 8;
		Box2D.Dynamics.b2Body.e_fixedRotationFlag = 16;
		Box2D.Dynamics.b2Body.e_activeFlag = 32;
		Box2D.Dynamics.b2Body.b2_staticBody = 0;
		Box2D.Dynamics.b2Body.b2_kinematicBody = 1;
		Box2D.Dynamics.b2Body.b2_dynamicBody = 2;
	});
	G.b2BodyDef = function () {
		this.position = new f();
		this.linearVelocity = new f();
	};
	G.prototype.b2BodyDef = function () {
		this.userData = null;
		this.position.Set(0, 0);
		this.angle = 0;
		this.linearVelocity.Set(0, 0);
		this.angularDamping = this.linearDamping = this.angularVelocity = 0;
		this.awake = this.allowSleep = !0;
		this.bullet = this.fixedRotation = !1;
		this.type = t.b2_staticBody;
		this.active = !0;
		this.inertiaScale = 1;
	};
	E.b2ContactFilter = function () {};
	E.prototype.ShouldCollide = function (b, c) {
		var d = b.GetFilterData(),
			e = c.GetFilterData();
		return d.groupIndex == e.groupIndex && 0 != d.groupIndex
			? 0 < d.groupIndex
			: 0 != (d.maskBits & e.categoryBits) &&
					0 != (d.categoryBits & e.maskBits);
	};
	E.prototype.RayCollide = function (b, c) {
		return !b ? !0 : this.ShouldCollide(b instanceof P ? b : null, c);
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2ContactFilter.b2_defaultFilter = new E();
	});
	L.b2ContactImpulse = function () {
		this.normalImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
		this.tangentImpulses = new Vector_a2j_Number(j.b2_maxManifoldPoints);
	};
	M.b2ContactListener = function () {};
	M.prototype.BeginContact = function () {};
	M.prototype.EndContact = function () {};
	M.prototype.PreSolve = function () {};
	M.prototype.PostSolve = function () {};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2ContactListener.b2_defaultListener = new M();
	});
	Q.b2ContactManager = function () {};
	Q.prototype.b2ContactManager = function () {
		this.m_world = null;
		this.m_contactCount = 0;
		this.m_contactFilter = E.b2_defaultFilter;
		this.m_contactListener = M.b2_defaultListener;
		this.m_contactFactory = new C(this.m_allocator);
		this.m_broadPhase = new g();
	};
	Q.prototype.AddPair = function (b, c) {
		var d = b instanceof P ? b : null,
			e = c instanceof P ? c : null,
			f = d.GetBody(),
			j = e.GetBody();
		if (f != j) {
			for (var g = j.GetContactList(); g; ) {
				if (g.other == f) {
					var q = g.contact.GetFixtureA(),
						u = g.contact.GetFixtureB();
					if ((q == d && u == e) || (q == e && u == d)) return;
				}
				g = g.next;
			}
			!1 != j.ShouldCollide(f) &&
				!1 != this.m_contactFilter.ShouldCollide(d, e) &&
				((g = this.m_contactFactory.Create(d, e)),
				(d = g.GetFixtureA()),
				(e = g.GetFixtureB()),
				(f = d.m_body),
				(j = e.m_body),
				(g.m_prev = null),
				(g.m_next = this.m_world.m_contactList),
				null != this.m_world.m_contactList &&
					(this.m_world.m_contactList.m_prev = g),
				(this.m_world.m_contactList = g),
				(g.m_nodeA.contact = g),
				(g.m_nodeA.other = j),
				(g.m_nodeA.prev = null),
				(g.m_nodeA.next = f.m_contactList),
				null != f.m_contactList && (f.m_contactList.prev = g.m_nodeA),
				(f.m_contactList = g.m_nodeA),
				(g.m_nodeB.contact = g),
				(g.m_nodeB.other = f),
				(g.m_nodeB.prev = null),
				(g.m_nodeB.next = j.m_contactList),
				null != j.m_contactList && (j.m_contactList.prev = g.m_nodeB),
				(j.m_contactList = g.m_nodeB),
				++this.m_world.m_contactCount);
		}
	};
	Q.prototype.FindNewContacts = function () {
		this.m_broadPhase.UpdatePairs(
			Box2D.generateCallback(this, this.AddPair)
		);
	};
	Q.prototype.Destroy = function (b) {
		var c = b.GetFixtureA(),
			d = b.GetFixtureB(),
			c = c.GetBody(),
			d = d.GetBody();
		b.IsTouching() && this.m_contactListener.EndContact(b);
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		b == this.m_world.m_contactList &&
			(this.m_world.m_contactList = b.m_next);
		b.m_nodeA.prev && (b.m_nodeA.prev.next = b.m_nodeA.next);
		b.m_nodeA.next && (b.m_nodeA.next.prev = b.m_nodeA.prev);
		b.m_nodeA == c.m_contactList && (c.m_contactList = b.m_nodeA.next);
		b.m_nodeB.prev && (b.m_nodeB.prev.next = b.m_nodeB.next);
		b.m_nodeB.next && (b.m_nodeB.next.prev = b.m_nodeB.prev);
		b.m_nodeB == d.m_contactList && (d.m_contactList = b.m_nodeB.next);
		this.m_contactFactory.Destroy(b);
		--this.m_contactCount;
	};
	Q.prototype.Collide = function () {
		for (var b = this.m_world.m_contactList; b; ) {
			var c = b.GetFixtureA(),
				d = b.GetFixtureB(),
				e = c.GetBody(),
				f = d.GetBody();
			if (!1 == e.IsAwake() && !1 == f.IsAwake()) b = b.GetNext();
			else {
				if (b.m_flags & F.e_filterFlag) {
					if (!1 == f.ShouldCollide(e)) {
						c = b;
						b = c.GetNext();
						this.Destroy(c);
						continue;
					}
					if (!1 == this.m_contactFilter.ShouldCollide(c, d)) {
						c = b;
						b = c.GetNext();
						this.Destroy(c);
						continue;
					}
					b.m_flags &= ~F.e_filterFlag;
				}
				!1 == this.m_broadPhase.TestOverlap(c.m_proxy, d.m_proxy)
					? ((c = b), (b = c.GetNext()), this.Destroy(c))
					: (b.Update(this.m_contactListener), (b = b.GetNext()));
			}
		}
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2ContactManager.s_evalCP = new m();
	});
	J.b2DebugDraw = function () {};
	J.prototype.b2DebugDraw = function () {};
	J.prototype.SetFlags = function () {};
	J.prototype.GetFlags = function () {};
	J.prototype.AppendFlags = function () {};
	J.prototype.ClearFlags = function () {};
	J.prototype.SetSprite = function () {};
	J.prototype.GetSprite = function () {};
	J.prototype.SetDrawScale = function () {};
	J.prototype.GetDrawScale = function () {};
	J.prototype.SetLineThickness = function () {};
	J.prototype.GetLineThickness = function () {};
	J.prototype.SetAlpha = function () {};
	J.prototype.GetAlpha = function () {};
	J.prototype.SetFillAlpha = function () {};
	J.prototype.GetFillAlpha = function () {};
	J.prototype.SetXFormScale = function () {};
	J.prototype.GetXFormScale = function () {};
	J.prototype.DrawPolygon = function () {};
	J.prototype.DrawSolidPolygon = function () {};
	J.prototype.DrawCircle = function () {};
	J.prototype.DrawSolidCircle = function () {};
	J.prototype.DrawSegment = function () {};
	J.prototype.DrawTransform = function () {};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2DebugDraw.e_shapeBit = 1;
		Box2D.Dynamics.b2DebugDraw.e_jointBit = 2;
		Box2D.Dynamics.b2DebugDraw.e_aabbBit = 4;
		Box2D.Dynamics.b2DebugDraw.e_pairBit = 8;
		Box2D.Dynamics.b2DebugDraw.e_centerOfMassBit = 16;
		Box2D.Dynamics.b2DebugDraw.e_controllerBit = 32;
	});
	ea.b2DestructionListener = function () {};
	ea.prototype.SayGoodbyeJoint = function () {};
	ea.prototype.SayGoodbyeFixture = function () {};
	O.b2FilterData = function () {
		this.categoryBits = 1;
		this.maskBits = 65535;
		this.groupIndex = 0;
	};
	O.prototype.Copy = function () {
		var b = new O();
		b.categoryBits = this.categoryBits;
		b.maskBits = this.maskBits;
		b.groupIndex = this.groupIndex;
		return b;
	};
	P.b2Fixture = function () {
		this.m_filter = new O();
	};
	P.prototype.GetType = function () {
		return this.m_shape.GetType();
	};
	P.prototype.GetShape = function () {
		return this.m_shape;
	};
	P.prototype.SetSensor = function (b) {
		if (
			this.m_isSensor != b &&
			((this.m_isSensor = b), null != this.m_body)
		)
			for (b = this.m_body.GetContactList(); b; ) {
				var c = b.contact,
					d = c.GetFixtureA(),
					e = c.GetFixtureB();
				if (d == this || e == this)
					c.SetSensor(d.IsSensor() || e.IsSensor());
				b = b.next;
			}
	};
	P.prototype.IsSensor = function () {
		return this.m_isSensor;
	};
	P.prototype.SetFilterData = function (b) {
		this.m_filter = b.Copy();
		if (!this.m_body)
			for (b = this.m_body.GetContactList(); b; ) {
				var c = b.contact,
					d = c.GetFixtureA(),
					e = c.GetFixtureB();
				(d == this || e == this) && c.FlagForFiltering();
				b = b.next;
			}
	};
	P.prototype.GetFilterData = function () {
		return this.m_filter.Copy();
	};
	P.prototype.GetBody = function () {
		return this.m_body;
	};
	P.prototype.GetNext = function () {
		return this.m_next;
	};
	P.prototype.GetUserData = function () {
		return this.m_userData;
	};
	P.prototype.SetUserData = function (b) {
		this.m_userData = b;
	};
	P.prototype.TestPoint = function (b) {
		return this.m_shape.TestPoint(this.m_body.GetTransform(), b);
	};
	P.prototype.RayCast = function (b, c) {
		return this.m_shape.RayCast(b, c, this.m_body.GetTransform());
	};
	P.prototype.GetMassData = function (b) {
		void 0 === b && (b = null);
		null == b && (b = new B());
		this.m_shape.ComputeMass(b, this.m_density);
		return b;
	};
	P.prototype.SetDensity = function (b) {
		void 0 === b && (b = 0);
		this.m_density = b;
	};
	P.prototype.GetDensity = function () {
		return this.m_density;
	};
	P.prototype.GetFriction = function () {
		return this.m_friction;
	};
	P.prototype.SetFriction = function (b) {
		void 0 === b && (b = 0);
		this.m_friction = b;
	};
	P.prototype.GetRestitution = function () {
		return this.m_restitution;
	};
	P.prototype.SetRestitution = function (b) {
		void 0 === b && (b = 0);
		this.m_restitution = b;
	};
	P.prototype.GetAABB = function () {
		return this.m_aabb;
	};
	P.prototype.b2Fixture = function () {
		this.m_aabb = new n();
		this.m_shape = this.m_next = this.m_body = this.m_userData = null;
		this.m_restitution = this.m_friction = this.m_density = 0;
	};
	P.prototype.Create = function (b, c, d) {
		this.m_userData = d.userData;
		this.m_friction = d.friction;
		this.m_restitution = d.restitution;
		this.m_body = b;
		this.m_next = null;
		this.m_filter = d.filter.Copy();
		this.m_isSensor = d.isSensor;
		this.m_shape = d.shape.Copy();
		this.m_density = d.density;
	};
	P.prototype.Destroy = function () {
		this.m_shape = null;
	};
	P.prototype.CreateProxy = function (b, c) {
		this.m_shape.ComputeAABB(this.m_aabb, c);
		this.m_proxy = b.CreateProxy(this.m_aabb, this);
	};
	P.prototype.DestroyProxy = function (b) {
		null != this.m_proxy &&
			(b.DestroyProxy(this.m_proxy), (this.m_proxy = null));
	};
	P.prototype.Synchronize = function (c, d, e) {
		if (this.m_proxy) {
			var f = new n(),
				j = new n();
			this.m_shape.ComputeAABB(f, d);
			this.m_shape.ComputeAABB(j, e);
			this.m_aabb.Combine(f, j);
			d = b.SubtractVV(e.position, d.position);
			c.MoveProxy(this.m_proxy, this.m_aabb, d);
		}
	};
	aa.b2FixtureDef = function () {
		this.filter = new O();
	};
	aa.prototype.b2FixtureDef = function () {
		this.userData = this.shape = null;
		this.friction = 0.2;
		this.density = this.restitution = 0;
		this.filter.categoryBits = 1;
		this.filter.maskBits = 65535;
		this.filter.groupIndex = 0;
		this.isSensor = !1;
	};
	U.b2Island = function () {};
	U.prototype.b2Island = function () {
		this.m_bodies = new Vector();
		this.m_contacts = new Vector();
		this.m_joints = new Vector();
	};
	U.prototype.Initialize = function (b, c, d, e, f, j) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		var g = 0;
		this.m_bodyCapacity = b;
		this.m_contactCapacity = c;
		this.m_jointCapacity = d;
		this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
		this.m_allocator = e;
		this.m_listener = f;
		this.m_contactSolver = j;
		for (g = this.m_bodies.length; g < b; g++) this.m_bodies[g] = null;
		for (g = this.m_contacts.length; g < c; g++) this.m_contacts[g] = null;
		for (g = this.m_joints.length; g < d; g++) this.m_joints[g] = null;
	};
	U.prototype.Clear = function () {
		this.m_jointCount = this.m_contactCount = this.m_bodyCount = 0;
	};
	U.prototype.Solve = function (c, d, e) {
		for (var f = 0, g = 0, q, f = 0; f < this.m_bodyCount; ++f)
			(g = this.m_bodies[f]),
				g.GetType() == t.b2_dynamicBody &&
					((g.m_linearVelocity.x +=
						c.dt * (d.x + g.m_invMass * g.m_force.x)),
					(g.m_linearVelocity.y +=
						c.dt * (d.y + g.m_invMass * g.m_force.y)),
					(g.m_angularVelocity += c.dt * g.m_invI * g.m_torque),
					g.m_linearVelocity.Multiply(
						b.Clamp(1 - c.dt * g.m_linearDamping, 0, 1)
					),
					(g.m_angularVelocity *= b.Clamp(
						1 - c.dt * g.m_angularDamping,
						0,
						1
					)));
		this.m_contactSolver.Initialize(
			c,
			this.m_contacts,
			this.m_contactCount,
			this.m_allocator
		);
		d = this.m_contactSolver;
		d.InitVelocityConstraints(c);
		for (f = 0; f < this.m_jointCount; ++f)
			(q = this.m_joints[f]), q.InitVelocityConstraints(c);
		for (f = 0; f < c.velocityIterations; ++f) {
			for (g = 0; g < this.m_jointCount; ++g)
				(q = this.m_joints[g]), q.SolveVelocityConstraints(c);
			d.SolveVelocityConstraints();
		}
		for (f = 0; f < this.m_jointCount; ++f)
			(q = this.m_joints[f]), q.FinalizeVelocityConstraints();
		d.FinalizeVelocityConstraints();
		for (f = 0; f < this.m_bodyCount; ++f)
			if (((g = this.m_bodies[f]), g.GetType() != t.b2_staticBody)) {
				var u = c.dt * g.m_linearVelocity.x,
					C = c.dt * g.m_linearVelocity.y;
				u * u + C * C > j.b2_maxTranslationSquared &&
					(g.m_linearVelocity.Normalize(),
					(g.m_linearVelocity.x *= j.b2_maxTranslation * c.inv_dt),
					(g.m_linearVelocity.y *= j.b2_maxTranslation * c.inv_dt));
				u = c.dt * g.m_angularVelocity;
				u * u > j.b2_maxRotationSquared &&
					(g.m_angularVelocity =
						0 > g.m_angularVelocity
							? -j.b2_maxRotation * c.inv_dt
							: j.b2_maxRotation * c.inv_dt);
				g.m_sweep.c0.SetV(g.m_sweep.c);
				g.m_sweep.a0 = g.m_sweep.a;
				g.m_sweep.c.x += c.dt * g.m_linearVelocity.x;
				g.m_sweep.c.y += c.dt * g.m_linearVelocity.y;
				g.m_sweep.a += c.dt * g.m_angularVelocity;
				g.SynchronizeTransform();
			}
		for (f = 0; f < c.positionIterations; ++f) {
			u = d.SolvePositionConstraints(j.b2_contactBaumgarte);
			C = !0;
			for (g = 0; g < this.m_jointCount; ++g)
				(q = this.m_joints[g]),
					(q = q.SolvePositionConstraints(j.b2_contactBaumgarte)),
					(C = C && q);
			if (u && C) break;
		}
		this.Report(d.m_constraints);
		if (e) {
			e = Number.MAX_VALUE;
			d = j.b2_linearSleepTolerance * j.b2_linearSleepTolerance;
			u = j.b2_angularSleepTolerance * j.b2_angularSleepTolerance;
			for (f = 0; f < this.m_bodyCount; ++f)
				(g = this.m_bodies[f]),
					g.GetType() != t.b2_staticBody &&
						(0 == (g.m_flags & t.e_allowSleepFlag) &&
							(e = g.m_sleepTime = 0),
						0 == (g.m_flags & t.e_allowSleepFlag) ||
						g.m_angularVelocity * g.m_angularVelocity > u ||
						b.Dot(g.m_linearVelocity, g.m_linearVelocity) > d
							? (e = g.m_sleepTime = 0)
							: ((g.m_sleepTime += c.dt),
							  (e = b.Min(e, g.m_sleepTime))));
			if (e >= j.b2_timeToSleep)
				for (f = 0; f < this.m_bodyCount; ++f)
					(g = this.m_bodies[f]), g.SetAwake(!1);
		}
	};
	U.prototype.SolveTOI = function (b) {
		var c = 0,
			d = 0;
		this.m_contactSolver.Initialize(
			b,
			this.m_contacts,
			this.m_contactCount,
			this.m_allocator
		);
		for (var e = this.m_contactSolver, c = 0; c < this.m_jointCount; ++c)
			this.m_joints[c].InitVelocityConstraints(b);
		for (c = 0; c < b.velocityIterations; ++c) {
			e.SolveVelocityConstraints();
			for (d = 0; d < this.m_jointCount; ++d)
				this.m_joints[d].SolveVelocityConstraints(b);
		}
		for (c = 0; c < this.m_bodyCount; ++c)
			if (((d = this.m_bodies[c]), d.GetType() != t.b2_staticBody)) {
				var f = b.dt * d.m_linearVelocity.x,
					g = b.dt * d.m_linearVelocity.y;
				f * f + g * g > j.b2_maxTranslationSquared &&
					(d.m_linearVelocity.Normalize(),
					(d.m_linearVelocity.x *= j.b2_maxTranslation * b.inv_dt),
					(d.m_linearVelocity.y *= j.b2_maxTranslation * b.inv_dt));
				f = b.dt * d.m_angularVelocity;
				f * f > j.b2_maxRotationSquared &&
					(d.m_angularVelocity =
						0 > d.m_angularVelocity
							? -j.b2_maxRotation * b.inv_dt
							: j.b2_maxRotation * b.inv_dt);
				d.m_sweep.c0.SetV(d.m_sweep.c);
				d.m_sweep.a0 = d.m_sweep.a;
				d.m_sweep.c.x += b.dt * d.m_linearVelocity.x;
				d.m_sweep.c.y += b.dt * d.m_linearVelocity.y;
				d.m_sweep.a += b.dt * d.m_angularVelocity;
				d.SynchronizeTransform();
			}
		for (c = 0; c < b.positionIterations; ++c) {
			f = e.SolvePositionConstraints(0.75);
			g = !0;
			for (d = 0; d < this.m_jointCount; ++d)
				var q = this.m_joints[d].SolvePositionConstraints(
						j.b2_contactBaumgarte
					),
					g = g && q;
			if (f && g) break;
		}
		this.Report(e.m_constraints);
	};
	U.prototype.Report = function (b) {
		if (null != this.m_listener)
			for (var c = 0; c < this.m_contactCount; ++c) {
				for (
					var d = this.m_contacts[c], e = b[c], f = 0;
					f < e.pointCount;
					++f
				)
					(U.s_impulse.normalImpulses[f] = e.points[f].normalImpulse),
						(U.s_impulse.tangentImpulses[f] =
							e.points[f].tangentImpulse);
				this.m_listener.PostSolve(d, U.s_impulse);
			}
	};
	U.prototype.AddBody = function (b) {
		b.m_islandIndex = this.m_bodyCount;
		this.m_bodies[this.m_bodyCount++] = b;
	};
	U.prototype.AddContact = function (b) {
		this.m_contacts[this.m_contactCount++] = b;
	};
	U.prototype.AddJoint = function (b) {
		this.m_joints[this.m_jointCount++] = b;
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2Island.s_impulse = new L();
	});
	q.b2TimeStep = function () {};
	q.prototype.Set = function (b) {
		this.dt = b.dt;
		this.inv_dt = b.inv_dt;
		this.positionIterations = b.positionIterations;
		this.velocityIterations = b.velocityIterations;
		this.warmStarting = b.warmStarting;
	};
	u.b2World = function () {
		this.s_stack = new Vector();
		this.m_contactManager = new Q();
		this.m_contactSolver = new H();
		this.m_island = new U();
	};
	u.prototype.b2World = function (b, c) {
		this.m_controllerList =
			this.m_jointList =
			this.m_contactList =
			this.m_bodyList =
			this.m_debugDraw =
			this.m_destructionListener =
				null;
		this.m_controllerCount =
			this.m_jointCount =
			this.m_contactCount =
			this.m_bodyCount =
				0;
		u.m_warmStarting = !0;
		u.m_continuousPhysics = !0;
		this.m_allowSleep = c;
		this.m_gravity = b;
		this.m_inv_dt0 = 0;
		this.m_contactManager.m_world = this;
		this.m_groundBody = this.CreateBody(new G());
	};
	u.prototype.SetDestructionListener = function (b) {
		this.m_destructionListener = b;
	};
	u.prototype.SetContactFilter = function (b) {
		this.m_contactManager.m_contactFilter = b;
	};
	u.prototype.SetContactListener = function (b) {
		this.m_contactManager.m_contactListener = b;
	};
	u.prototype.SetDebugDraw = function (b) {
		this.m_debugDraw = b;
	};
	u.prototype.SetBroadPhase = function (b) {
		var c = this.m_contactManager.m_broadPhase;
		this.m_contactManager.m_broadPhase = b;
		for (var d = this.m_bodyList; d; d = d.m_next)
			for (var e = d.m_fixtureList; e; e = e.m_next)
				e.m_proxy = b.CreateProxy(c.GetFatAABB(e.m_proxy), e);
	};
	u.prototype.Validate = function () {
		this.m_contactManager.m_broadPhase.Validate();
	};
	u.prototype.GetProxyCount = function () {
		return this.m_contactManager.m_broadPhase.GetProxyCount();
	};
	u.prototype.CreateBody = function (b) {
		if (!0 == this.IsLocked()) return null;
		b = new t(b, this);
		b.m_prev = null;
		if ((b.m_next = this.m_bodyList)) this.m_bodyList.m_prev = b;
		this.m_bodyList = b;
		++this.m_bodyCount;
		return b;
	};
	u.prototype.DestroyBody = function (b) {
		if (!0 != this.IsLocked()) {
			for (var c = b.m_jointList; c; ) {
				var d = c,
					c = c.next;
				this.m_destructionListener &&
					this.m_destructionListener.SayGoodbyeJoint(d.joint);
				this.DestroyJoint(d.joint);
			}
			for (c = b.m_controllerList; c; )
				(d = c), (c = c.nextController), d.controller.RemoveBody(b);
			for (c = b.m_contactList; c; )
				(d = c), (c = c.next), this.m_contactManager.Destroy(d.contact);
			b.m_contactList = null;
			for (c = b.m_fixtureList; c; )
				(d = c),
					(c = c.m_next),
					this.m_destructionListener &&
						this.m_destructionListener.SayGoodbyeFixture(d),
					d.DestroyProxy(this.m_contactManager.m_broadPhase),
					d.Destroy();
			b.m_fixtureList = null;
			b.m_fixtureCount = 0;
			b.m_prev && (b.m_prev.m_next = b.m_next);
			b.m_next && (b.m_next.m_prev = b.m_prev);
			b == this.m_bodyList && (this.m_bodyList = b.m_next);
			--this.m_bodyCount;
		}
	};
	u.prototype.CreateJoint = function (b) {
		var c = Z.Create(b, null);
		c.m_prev = null;
		if ((c.m_next = this.m_jointList)) this.m_jointList.m_prev = c;
		this.m_jointList = c;
		++this.m_jointCount;
		c.m_edgeA.joint = c;
		c.m_edgeA.other = c.m_bodyB;
		c.m_edgeA.prev = null;
		if ((c.m_edgeA.next = c.m_bodyA.m_jointList))
			c.m_bodyA.m_jointList.prev = c.m_edgeA;
		c.m_bodyA.m_jointList = c.m_edgeA;
		c.m_edgeB.joint = c;
		c.m_edgeB.other = c.m_bodyA;
		c.m_edgeB.prev = null;
		if ((c.m_edgeB.next = c.m_bodyB.m_jointList))
			c.m_bodyB.m_jointList.prev = c.m_edgeB;
		c.m_bodyB.m_jointList = c.m_edgeB;
		var d = b.bodyA,
			e = b.bodyB;
		if (!1 == b.collideConnected)
			for (b = e.GetContactList(); b; )
				b.other == d && b.contact.FlagForFiltering(), (b = b.next);
		return c;
	};
	u.prototype.DestroyJoint = function (b) {
		var c = b.m_collideConnected;
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		b == this.m_jointList && (this.m_jointList = b.m_next);
		var d = b.m_bodyA,
			e = b.m_bodyB;
		d.SetAwake(!0);
		e.SetAwake(!0);
		b.m_edgeA.prev && (b.m_edgeA.prev.next = b.m_edgeA.next);
		b.m_edgeA.next && (b.m_edgeA.next.prev = b.m_edgeA.prev);
		b.m_edgeA == d.m_jointList && (d.m_jointList = b.m_edgeA.next);
		b.m_edgeA.prev = null;
		b.m_edgeA.next = null;
		b.m_edgeB.prev && (b.m_edgeB.prev.next = b.m_edgeB.next);
		b.m_edgeB.next && (b.m_edgeB.next.prev = b.m_edgeB.prev);
		b.m_edgeB == e.m_jointList && (e.m_jointList = b.m_edgeB.next);
		b.m_edgeB.prev = null;
		b.m_edgeB.next = null;
		Z.Destroy(b, null);
		--this.m_jointCount;
		if (!1 == c)
			for (b = e.GetContactList(); b; )
				b.other == d && b.contact.FlagForFiltering(), (b = b.next);
	};
	u.prototype.AddController = function (b) {
		b.m_next = this.m_controllerList;
		b.m_prev = null;
		this.m_controllerList = b;
		b.m_world = this;
		this.m_controllerCount++;
		return b;
	};
	u.prototype.RemoveController = function (b) {
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b.m_next && (b.m_next.m_prev = b.m_prev);
		this.m_controllerList == b && (this.m_controllerList = b.m_next);
		this.m_controllerCount--;
	};
	u.prototype.CreateController = function (b) {
		if (b.m_world != this)
			throw Error('Controller can only be a member of one world');
		b.m_next = this.m_controllerList;
		b.m_prev = null;
		this.m_controllerList && (this.m_controllerList.m_prev = b);
		this.m_controllerList = b;
		++this.m_controllerCount;
		b.m_world = this;
		return b;
	};
	u.prototype.DestroyController = function (b) {
		b.Clear();
		b.m_next && (b.m_next.m_prev = b.m_prev);
		b.m_prev && (b.m_prev.m_next = b.m_next);
		b == this.m_controllerList && (this.m_controllerList = b.m_next);
		--this.m_controllerCount;
	};
	u.prototype.SetWarmStarting = function (b) {
		u.m_warmStarting = b;
	};
	u.prototype.SetContinuousPhysics = function (b) {
		u.m_continuousPhysics = b;
	};
	u.prototype.GetBodyCount = function () {
		return this.m_bodyCount;
	};
	u.prototype.GetJointCount = function () {
		return this.m_jointCount;
	};
	u.prototype.GetContactCount = function () {
		return this.m_contactCount;
	};
	u.prototype.SetGravity = function (b) {
		this.m_gravity = b;
	};
	u.prototype.GetGravity = function () {
		return this.m_gravity;
	};
	u.prototype.GetGroundBody = function () {
		return this.m_groundBody;
	};
	u.prototype.Step = function (b, c, d) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		void 0 === d && (d = 0);
		this.m_flags & u.e_newFixture &&
			(this.m_contactManager.FindNewContacts(),
			(this.m_flags &= ~u.e_newFixture));
		this.m_flags |= u.e_locked;
		var e = u.s_timestep2;
		e.dt = b;
		e.velocityIterations = c;
		e.positionIterations = d;
		e.inv_dt = 0 < b ? 1 / b : 0;
		e.dtRatio = this.m_inv_dt0 * b;
		e.warmStarting = u.m_warmStarting;
		this.m_contactManager.Collide();
		0 < e.dt && this.Solve(e);
		u.m_continuousPhysics && 0 < e.dt && this.SolveTOI(e);
		0 < e.dt && (this.m_inv_dt0 = e.inv_dt);
		this.m_flags &= ~u.e_locked;
	};
	u.prototype.ClearForces = function () {
		for (var b = this.m_bodyList; b; b = b.m_next)
			b.m_force.SetZero(), (b.m_torque = 0);
	};
	u.prototype.DrawDebugData = function () {
		if (null != this.m_debugDraw) {
			this.m_debugDraw.m_sprite.graphics.clear();
			var b = this.m_debugDraw.GetFlags(),
				c,
				d,
				g;
			new f();
			new f();
			new f();
			var j;
			new n();
			new n();
			new f();
			new f();
			new f();
			new f();
			var q = new e(0, 0, 0);
			if (b & J.e_shapeBit)
				for (c = this.m_bodyList; c; c = c.m_next) {
					j = c.m_xf;
					for (d = c.GetFixtureList(); d; d = d.m_next)
						(g = d.GetShape()),
							!1 == c.IsActive()
								? q.Set(0.5, 0.5, 0.3)
								: c.GetType() == t.b2_staticBody
								? q.Set(0.5, 0.9, 0.5)
								: c.GetType() == t.b2_kinematicBody
								? q.Set(0.5, 0.5, 0.9)
								: !1 == c.IsAwake()
								? q.Set(0.6, 0.6, 0.6)
								: q.Set(0.9, 0.7, 0.7),
							this.DrawShape(g, j, q);
				}
			if (b & J.e_jointBit)
				for (c = this.m_jointList; c; c = c.m_next) this.DrawJoint(c);
			if (b & J.e_controllerBit)
				for (c = this.m_controllerList; c; c = c.m_next)
					c.Draw(this.m_debugDraw);
			if (b & J.e_pairBit) {
				q.Set(0.3, 0.9, 0.9);
				for (
					c = this.m_contactManager.m_contactList;
					c;
					c = c.GetNext()
				)
					(g = c.GetFixtureA()),
						(d = c.GetFixtureB()),
						(g = g.GetAABB().GetCenter()),
						(d = d.GetAABB().GetCenter()),
						this.m_debugDraw.DrawSegment(g, d, q);
			}
			if (b & J.e_aabbBit) {
				g = this.m_contactManager.m_broadPhase;
				j = [new f(), new f(), new f(), new f()];
				for (c = this.m_bodyList; c; c = c.GetNext())
					if (!1 != c.IsActive())
						for (d = c.GetFixtureList(); d; d = d.GetNext()) {
							var C = g.GetFatAABB(d.m_proxy);
							j[0].Set(C.lowerBound.x, C.lowerBound.y);
							j[1].Set(C.upperBound.x, C.lowerBound.y);
							j[2].Set(C.upperBound.x, C.upperBound.y);
							j[3].Set(C.lowerBound.x, C.upperBound.y);
							this.m_debugDraw.DrawPolygon(j, 4, q);
						}
			}
			if (b & J.e_centerOfMassBit)
				for (c = this.m_bodyList; c; c = c.m_next)
					(j = u.s_xf),
						(j.R = c.m_xf.R),
						(j.position = c.GetWorldCenter()),
						this.m_debugDraw.DrawTransform(j);
		}
	};
	u.prototype.QueryAABB = function (b, c) {
		var d = this.m_contactManager.m_broadPhase;
		d.Query(function (c) {
			return b(d.GetUserData(c));
		}, c);
	};
	u.prototype.QueryShape = function (b, c, e) {
		void 0 === e && (e = null);
		null == e && ((e = new d()), e.SetIdentity());
		var f = this.m_contactManager.m_broadPhase,
			g = new n();
		c.ComputeAABB(g, e);
		f.Query(function (d) {
			d = f.GetUserData(d) instanceof P ? f.GetUserData(d) : null;
			return D.TestOverlap(c, e, d.GetShape(), d.GetBody().GetTransform())
				? b(d)
				: !0;
		}, g);
	};
	u.prototype.QueryPoint = function (b, c) {
		var d = this.m_contactManager.m_broadPhase,
			e = new n();
		e.lowerBound.Set(c.x - j.b2_linearSlop, c.y - j.b2_linearSlop);
		e.upperBound.Set(c.x + j.b2_linearSlop, c.y + j.b2_linearSlop);
		d.Query(function (e) {
			e = d.GetUserData(e) instanceof P ? d.GetUserData(e) : null;
			return e.TestPoint(c) ? b(e) : !0;
		}, e);
	};
	u.prototype.RayCast = function (b, c, d) {
		var e = this.m_contactManager.m_broadPhase,
			g = new z(),
			j = new r(c, d);
		e.RayCast(function (j, q) {
			var u = e.GetUserData(q),
				u = u instanceof P ? u : null;
			if (u.RayCast(g, j)) {
				var C = g.fraction,
					m = new f((1 - C) * c.x + C * d.x, (1 - C) * c.y + C * d.y);
				return b(u, m, g.normal, C);
			}
			return j.maxFraction;
		}, j);
	};
	u.prototype.RayCastOne = function (b, c) {
		var d;
		this.RayCast(
			function (b, c, e, f) {
				void 0 === f && (f = 0);
				d = b;
				return f;
			},
			b,
			c
		);
		return d;
	};
	u.prototype.RayCastAll = function (b, c) {
		var d = new Vector();
		this.RayCast(
			function (b) {
				d[d.length] = b;
				return 1;
			},
			b,
			c
		);
		return d;
	};
	u.prototype.GetBodyList = function () {
		return this.m_bodyList;
	};
	u.prototype.GetJointList = function () {
		return this.m_jointList;
	};
	u.prototype.GetContactList = function () {
		return this.m_contactList;
	};
	u.prototype.IsLocked = function () {
		return 0 < (this.m_flags & u.e_locked);
	};
	u.prototype.Solve = function (b) {
		for (var c, d = this.m_controllerList; d; d = d.m_next) d.Step(b);
		d = this.m_island;
		d.Initialize(
			this.m_bodyCount,
			this.m_contactCount,
			this.m_jointCount,
			null,
			this.m_contactManager.m_contactListener,
			this.m_contactSolver
		);
		for (c = this.m_bodyList; c; c = c.m_next) c.m_flags &= ~t.e_islandFlag;
		for (var e = this.m_contactList; e; e = e.m_next)
			e.m_flags &= ~F.e_islandFlag;
		for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
		parseInt(this.m_bodyCount);
		for (var e = this.s_stack, f = this.m_bodyList; f; f = f.m_next)
			if (
				!(f.m_flags & t.e_islandFlag) &&
				!(!1 == f.IsAwake() || !1 == f.IsActive()) &&
				f.GetType() != t.b2_staticBody
			) {
				d.Clear();
				var g = 0;
				e[g++] = f;
				for (f.m_flags |= t.e_islandFlag; 0 < g; )
					if (
						((c = e[--g]),
						d.AddBody(c),
						!1 == c.IsAwake() && c.SetAwake(!0),
						c.GetType() != t.b2_staticBody)
					) {
						for (var j, q = c.m_contactList; q; q = q.next)
							if (
								!(q.contact.m_flags & F.e_islandFlag) &&
								!(
									!0 == q.contact.IsSensor() ||
									!1 == q.contact.IsEnabled() ||
									!1 == q.contact.IsTouching()
								)
							)
								d.AddContact(q.contact),
									(q.contact.m_flags |= F.e_islandFlag),
									(j = q.other),
									j.m_flags & t.e_islandFlag ||
										((e[g++] = j),
										(j.m_flags |= t.e_islandFlag));
						for (c = c.m_jointList; c; c = c.next)
							!0 != c.joint.m_islandFlag &&
								((j = c.other),
								!1 != j.IsActive() &&
									(d.AddJoint(c.joint),
									(c.joint.m_islandFlag = !0),
									j.m_flags & t.e_islandFlag ||
										((e[g++] = j),
										(j.m_flags |= t.e_islandFlag))));
					}
				d.Solve(b, this.m_gravity, this.m_allowSleep);
				for (g = 0; g < d.m_bodyCount; ++g)
					(c = d.m_bodies[g]),
						c.GetType() == t.b2_staticBody &&
							(c.m_flags &= ~t.e_islandFlag);
			}
		for (g = 0; g < e.length && e[g]; ++g) e[g] = null;
		for (c = this.m_bodyList; c; c = c.m_next)
			!1 == c.IsAwake() ||
				!1 == c.IsActive() ||
				(c.GetType() != t.b2_staticBody && c.SynchronizeFixtures());
		this.m_contactManager.FindNewContacts();
	};
	u.prototype.SolveTOI = function (b) {
		var c,
			d,
			e,
			f = this.m_island;
		f.Initialize(
			this.m_bodyCount,
			j.b2_maxTOIContactsPerIsland,
			j.b2_maxTOIJointsPerIsland,
			null,
			this.m_contactManager.m_contactListener,
			this.m_contactSolver
		);
		var g = u.s_queue;
		for (c = this.m_bodyList; c; c = c.m_next)
			(c.m_flags &= ~t.e_islandFlag), (c.m_sweep.t0 = 0);
		for (e = this.m_contactList; e; e = e.m_next)
			e.m_flags &= ~(F.e_toiFlag | F.e_islandFlag);
		for (e = this.m_jointList; e; e = e.m_next) e.m_islandFlag = !1;
		for (;;) {
			var q = null,
				C = 1;
			for (e = this.m_contactList; e; e = e.m_next)
				if (
					!(
						!0 == e.IsSensor() ||
						!1 == e.IsEnabled() ||
						!1 == e.IsContinuous()
					)
				) {
					if (e.m_flags & F.e_toiFlag) c = e.m_toi;
					else {
						c = e.m_fixtureA;
						d = e.m_fixtureB;
						c = c.m_body;
						d = d.m_body;
						if (
							(c.GetType() != t.b2_dynamicBody ||
								!1 == c.IsAwake()) &&
							(d.GetType() != t.b2_dynamicBody ||
								!1 == d.IsAwake())
						)
							continue;
						var m = c.m_sweep.t0;
						c.m_sweep.t0 < d.m_sweep.t0
							? ((m = d.m_sweep.t0), c.m_sweep.Advance(m))
							: d.m_sweep.t0 < c.m_sweep.t0 &&
							  ((m = c.m_sweep.t0), d.m_sweep.Advance(m));
						c = e.ComputeTOI(c.m_sweep, d.m_sweep);
						j.b2Assert(0 <= c && 1 >= c);
						0 < c &&
							1 > c &&
							((c = (1 - c) * m + c), 1 < c && (c = 1));
						e.m_toi = c;
						e.m_flags |= F.e_toiFlag;
					}
					Number.MIN_VALUE < c && c < C && ((q = e), (C = c));
				}
			if (null == q || 1 - 100 * Number.MIN_VALUE < C) break;
			c = q.m_fixtureA;
			d = q.m_fixtureB;
			c = c.m_body;
			d = d.m_body;
			u.s_backupA.Set(c.m_sweep);
			u.s_backupB.Set(d.m_sweep);
			c.Advance(C);
			d.Advance(C);
			q.Update(this.m_contactManager.m_contactListener);
			q.m_flags &= ~F.e_toiFlag;
			if (!0 == q.IsSensor() || !1 == q.IsEnabled())
				c.m_sweep.Set(u.s_backupA),
					d.m_sweep.Set(u.s_backupB),
					c.SynchronizeTransform(),
					d.SynchronizeTransform();
			else if (!1 != q.IsTouching()) {
				c.GetType() != t.b2_dynamicBody && (c = d);
				f.Clear();
				q = e = 0;
				g[e + q++] = c;
				for (c.m_flags |= t.e_islandFlag; 0 < q; )
					if (
						((c = g[e++]),
						--q,
						f.AddBody(c),
						!1 == c.IsAwake() && c.SetAwake(!0),
						c.GetType() == t.b2_dynamicBody)
					) {
						for (
							d = c.m_contactList;
							d && f.m_contactCount != f.m_contactCapacity;
							d = d.next
						)
							if (
								!(d.contact.m_flags & F.e_islandFlag) &&
								!(
									!0 == d.contact.IsSensor() ||
									!1 == d.contact.IsEnabled() ||
									!1 == d.contact.IsTouching()
								)
							)
								f.AddContact(d.contact),
									(d.contact.m_flags |= F.e_islandFlag),
									(m = d.other),
									m.m_flags & t.e_islandFlag ||
										(m.GetType() != t.b2_staticBody &&
											(m.Advance(C), m.SetAwake(!0)),
										(g[e + q] = m),
										++q,
										(m.m_flags |= t.e_islandFlag));
						for (c = c.m_jointList; c; c = c.next)
							f.m_jointCount != f.m_jointCapacity &&
								!0 != c.joint.m_islandFlag &&
								((m = c.other),
								!1 != m.IsActive() &&
									(f.AddJoint(c.joint),
									(c.joint.m_islandFlag = !0),
									m.m_flags & t.e_islandFlag ||
										(m.GetType() != t.b2_staticBody &&
											(m.Advance(C), m.SetAwake(!0)),
										(g[e + q] = m),
										++q,
										(m.m_flags |= t.e_islandFlag))));
					}
				e = u.s_timestep;
				e.warmStarting = !1;
				e.dt = (1 - C) * b.dt;
				e.inv_dt = 1 / e.dt;
				e.dtRatio = 0;
				e.velocityIterations = b.velocityIterations;
				e.positionIterations = b.positionIterations;
				f.SolveTOI(e);
				for (C = C = 0; C < f.m_bodyCount; ++C)
					if (
						((c = f.m_bodies[C]),
						(c.m_flags &= ~t.e_islandFlag),
						!1 != c.IsAwake() && c.GetType() == t.b2_dynamicBody)
					) {
						c.SynchronizeFixtures();
						for (d = c.m_contactList; d; d = d.next)
							d.contact.m_flags &= ~F.e_toiFlag;
					}
				for (C = 0; C < f.m_contactCount; ++C)
					(e = f.m_contacts[C]),
						(e.m_flags &= ~(F.e_toiFlag | F.e_islandFlag));
				for (C = 0; C < f.m_jointCount; ++C)
					(e = f.m_joints[C]), (e.m_islandFlag = !1);
				this.m_contactManager.FindNewContacts();
			}
		}
	};
	u.prototype.DrawJoint = function (b) {
		var c = b.GetBodyA(),
			d = b.GetBodyB(),
			e = c.m_xf.position,
			f = d.m_xf.position,
			g = b.GetAnchorA(),
			j = b.GetAnchorB(),
			q = u.s_jointColor;
		switch (b.m_type) {
			case Z.e_distanceJoint:
				this.m_debugDraw.DrawSegment(g, j, q);
				break;
			case Z.e_pulleyJoint:
				c = b instanceof R ? b : null;
				b = c.GetGroundAnchorA();
				c = c.GetGroundAnchorB();
				this.m_debugDraw.DrawSegment(b, g, q);
				this.m_debugDraw.DrawSegment(c, j, q);
				this.m_debugDraw.DrawSegment(b, c, q);
				break;
			case Z.e_mouseJoint:
				this.m_debugDraw.DrawSegment(g, j, q);
				break;
			default:
				c != this.m_groundBody && this.m_debugDraw.DrawSegment(e, g, q),
					this.m_debugDraw.DrawSegment(g, j, q),
					d != this.m_groundBody &&
						this.m_debugDraw.DrawSegment(f, j, q);
		}
	};
	u.prototype.DrawShape = function (c, d, e) {
		switch (c.m_type) {
			case D.e_circleShape:
				var f = c instanceof y ? c : null;
				this.m_debugDraw.DrawSolidCircle(
					b.MulX(d, f.m_p),
					f.m_radius,
					d.R.col1,
					e
				);
				break;
			case D.e_polygonShape:
				f = c instanceof I ? c : null;
				c = parseInt(f.GetVertexCount());
				for (
					var g = f.GetVertices(), j = new Vector(c), f = 0;
					f < c;
					++f
				)
					j[f] = b.MulX(d, g[f]);
				this.m_debugDraw.DrawSolidPolygon(j, c, e);
				break;
			case D.e_edgeShape:
				(f = c instanceof A ? c : null),
					this.m_debugDraw.DrawSegment(
						b.MulX(d, f.GetVertex1()),
						b.MulX(d, f.GetVertex2()),
						e
					);
		}
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.b2World.s_timestep2 = new q();
		Box2D.Dynamics.b2World.s_xf = new d();
		Box2D.Dynamics.b2World.s_backupA = new c();
		Box2D.Dynamics.b2World.s_backupB = new c();
		Box2D.Dynamics.b2World.s_timestep = new q();
		Box2D.Dynamics.b2World.s_queue = new Vector();
		Box2D.Dynamics.b2World.s_jointColor = new e(0.5, 0.8, 0.8);
		Box2D.Dynamics.b2World.e_newFixture = 1;
		Box2D.Dynamics.b2World.e_locked = 2;
	});
})();
(function () {
	var b = Box2D.Collision.Shapes.b2CircleShape,
		c = Box2D.Collision.Shapes.b2EdgeShape,
		d = Box2D.Collision.Shapes.b2PolygonShape,
		f = Box2D.Collision.Shapes.b2Shape,
		e = Box2D.Dynamics.Contacts.b2CircleContact,
		j = Box2D.Dynamics.Contacts.b2Contact,
		n = Box2D.Dynamics.Contacts.b2ContactConstraint,
		m = Box2D.Dynamics.Contacts.b2ContactConstraintPoint,
		g = Box2D.Dynamics.Contacts.b2ContactEdge,
		r = Box2D.Dynamics.Contacts.b2ContactFactory,
		z = Box2D.Dynamics.Contacts.b2ContactRegister,
		y = Box2D.Dynamics.Contacts.b2ContactResult,
		A = Box2D.Dynamics.Contacts.b2ContactSolver,
		B = Box2D.Dynamics.Contacts.b2EdgeAndCircleContact,
		I = Box2D.Dynamics.Contacts.b2NullContact,
		D = Box2D.Dynamics.Contacts.b2PolyAndCircleContact,
		t = Box2D.Dynamics.Contacts.b2PolyAndEdgeContact,
		G = Box2D.Dynamics.Contacts.b2PolygonContact,
		E = Box2D.Dynamics.Contacts.b2PositionSolverManifold,
		L = Box2D.Dynamics.b2Body,
		M = Box2D.Dynamics.b2TimeStep,
		Q = Box2D.Common.b2Settings,
		J = Box2D.Common.Math.b2Mat22,
		ea = Box2D.Common.Math.b2Math,
		O = Box2D.Common.Math.b2Vec2,
		P = Box2D.Collision.b2Collision,
		aa = Box2D.Collision.b2ContactID,
		U = Box2D.Collision.b2Manifold,
		q = Box2D.Collision.b2TimeOfImpact,
		u = Box2D.Collision.b2TOIInput,
		F = Box2D.Collision.b2WorldManifold;
	Box2D.inherit(e, Box2D.Dynamics.Contacts.b2Contact);
	e.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	e.b2CircleContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	e.Create = function () {
		return new e();
	};
	e.Destroy = function () {};
	e.prototype.Reset = function (b, c) {
		this.__super.Reset.call(this, b, c);
	};
	e.prototype.Evaluate = function () {
		var c = this.m_fixtureA.GetBody(),
			d = this.m_fixtureB.GetBody();
		P.CollideCircles(
			this.m_manifold,
			this.m_fixtureA.GetShape() instanceof b
				? this.m_fixtureA.GetShape()
				: null,
			c.m_xf,
			this.m_fixtureB.GetShape() instanceof b
				? this.m_fixtureB.GetShape()
				: null,
			d.m_xf
		);
	};
	j.b2Contact = function () {
		this.m_nodeA = new g();
		this.m_nodeB = new g();
		this.m_manifold = new U();
		this.m_oldManifold = new U();
	};
	j.prototype.GetManifold = function () {
		return this.m_manifold;
	};
	j.prototype.GetWorldManifold = function (b) {
		var c = this.m_fixtureA.GetBody(),
			d = this.m_fixtureB.GetBody(),
			e = this.m_fixtureA.GetShape(),
			f = this.m_fixtureB.GetShape();
		b.Initialize(
			this.m_manifold,
			c.GetTransform(),
			e.m_radius,
			d.GetTransform(),
			f.m_radius
		);
	};
	j.prototype.IsTouching = function () {
		return (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag;
	};
	j.prototype.IsContinuous = function () {
		return (this.m_flags & j.e_continuousFlag) == j.e_continuousFlag;
	};
	j.prototype.SetSensor = function (b) {
		this.m_flags = b
			? this.m_flags | j.e_sensorFlag
			: this.m_flags & ~j.e_sensorFlag;
	};
	j.prototype.IsSensor = function () {
		return (this.m_flags & j.e_sensorFlag) == j.e_sensorFlag;
	};
	j.prototype.SetEnabled = function (b) {
		this.m_flags = b
			? this.m_flags | j.e_enabledFlag
			: this.m_flags & ~j.e_enabledFlag;
	};
	j.prototype.IsEnabled = function () {
		return (this.m_flags & j.e_enabledFlag) == j.e_enabledFlag;
	};
	j.prototype.GetNext = function () {
		return this.m_next;
	};
	j.prototype.GetFixtureA = function () {
		return this.m_fixtureA;
	};
	j.prototype.GetFixtureB = function () {
		return this.m_fixtureB;
	};
	j.prototype.FlagForFiltering = function () {
		this.m_flags |= j.e_filterFlag;
	};
	j.prototype.b2Contact = function () {};
	j.prototype.Reset = function (b, c) {
		void 0 === b && (b = null);
		void 0 === c && (c = null);
		this.m_flags = j.e_enabledFlag;
		if (!b || !c) this.m_fixtureB = this.m_fixtureA = null;
		else {
			if (b.IsSensor() || c.IsSensor()) this.m_flags |= j.e_sensorFlag;
			var d = b.GetBody(),
				e = c.GetBody();
			if (
				d.GetType() != L.b2_dynamicBody ||
				d.IsBullet() ||
				e.GetType() != L.b2_dynamicBody ||
				e.IsBullet()
			)
				this.m_flags |= j.e_continuousFlag;
			this.m_fixtureA = b;
			this.m_fixtureB = c;
			this.m_manifold.m_pointCount = 0;
			this.m_next = this.m_prev = null;
			this.m_nodeA.contact = null;
			this.m_nodeA.prev = null;
			this.m_nodeA.next = null;
			this.m_nodeA.other = null;
			this.m_nodeB.contact = null;
			this.m_nodeB.prev = null;
			this.m_nodeB.next = null;
			this.m_nodeB.other = null;
		}
	};
	j.prototype.Update = function (b) {
		var c = this.m_oldManifold;
		this.m_oldManifold = this.m_manifold;
		this.m_manifold = c;
		this.m_flags |= j.e_enabledFlag;
		var d = !1,
			c = (this.m_flags & j.e_touchingFlag) == j.e_touchingFlag,
			e = this.m_fixtureA.m_body,
			g = this.m_fixtureB.m_body,
			q = this.m_fixtureA.m_aabb.TestOverlap(this.m_fixtureB.m_aabb);
		if (this.m_flags & j.e_sensorFlag)
			q &&
				((d = this.m_fixtureA.GetShape()),
				(q = this.m_fixtureB.GetShape()),
				(e = e.GetTransform()),
				(g = g.GetTransform()),
				(d = f.TestOverlap(d, e, q, g))),
				(this.m_manifold.m_pointCount = 0);
		else {
			this.m_flags =
				e.GetType() != L.b2_dynamicBody ||
				e.IsBullet() ||
				g.GetType() != L.b2_dynamicBody ||
				g.IsBullet()
					? this.m_flags | j.e_continuousFlag
					: this.m_flags & ~j.e_continuousFlag;
			if (q) {
				this.Evaluate();
				d = 0 < this.m_manifold.m_pointCount;
				for (q = 0; q < this.m_manifold.m_pointCount; ++q) {
					var u = this.m_manifold.m_points[q];
					u.m_normalImpulse = 0;
					u.m_tangentImpulse = 0;
					for (
						var m = u.m_id, F = 0;
						F < this.m_oldManifold.m_pointCount;
						++F
					) {
						var n = this.m_oldManifold.m_points[F];
						if (n.m_id.key == m.key) {
							u.m_normalImpulse = n.m_normalImpulse;
							u.m_tangentImpulse = n.m_tangentImpulse;
							break;
						}
					}
				}
			} else this.m_manifold.m_pointCount = 0;
			d != c && (e.SetAwake(!0), g.SetAwake(!0));
		}
		this.m_flags = d
			? this.m_flags | j.e_touchingFlag
			: this.m_flags & ~j.e_touchingFlag;
		!1 == c && !0 == d && b.BeginContact(this);
		!0 == c && !1 == d && b.EndContact(this);
		0 == (this.m_flags & j.e_sensorFlag) &&
			b.PreSolve(this, this.m_oldManifold);
	};
	j.prototype.Evaluate = function () {};
	j.prototype.ComputeTOI = function (b, c) {
		j.s_input.proxyA.Set(this.m_fixtureA.GetShape());
		j.s_input.proxyB.Set(this.m_fixtureB.GetShape());
		j.s_input.sweepA = b;
		j.s_input.sweepB = c;
		j.s_input.tolerance = Q.b2_linearSlop;
		return q.TimeOfImpact(j.s_input);
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Contacts.b2Contact.e_sensorFlag = 1;
		Box2D.Dynamics.Contacts.b2Contact.e_continuousFlag = 2;
		Box2D.Dynamics.Contacts.b2Contact.e_islandFlag = 4;
		Box2D.Dynamics.Contacts.b2Contact.e_toiFlag = 8;
		Box2D.Dynamics.Contacts.b2Contact.e_touchingFlag = 16;
		Box2D.Dynamics.Contacts.b2Contact.e_enabledFlag = 32;
		Box2D.Dynamics.Contacts.b2Contact.e_filterFlag = 64;
		Box2D.Dynamics.Contacts.b2Contact.s_input = new u();
	});
	n.b2ContactConstraint = function () {
		this.localPlaneNormal = new O();
		this.localPoint = new O();
		this.normal = new O();
		this.normalMass = new J();
		this.K = new J();
	};
	n.prototype.b2ContactConstraint = function () {
		this.points = new Vector(Q.b2_maxManifoldPoints);
		for (var b = 0; b < Q.b2_maxManifoldPoints; b++)
			this.points[b] = new m();
	};
	m.b2ContactConstraintPoint = function () {
		this.localPoint = new O();
		this.rA = new O();
		this.rB = new O();
	};
	g.b2ContactEdge = function () {};
	r.b2ContactFactory = function () {};
	r.prototype.b2ContactFactory = function (b) {
		this.m_allocator = b;
		this.InitializeRegisters();
	};
	r.prototype.AddType = function (b, c, d, e) {
		void 0 === d && (d = 0);
		void 0 === e && (e = 0);
		this.m_registers[d][e].createFcn = b;
		this.m_registers[d][e].destroyFcn = c;
		this.m_registers[d][e].primary = !0;
		d != e &&
			((this.m_registers[e][d].createFcn = b),
			(this.m_registers[e][d].destroyFcn = c),
			(this.m_registers[e][d].primary = !1));
	};
	r.prototype.InitializeRegisters = function () {
		this.m_registers = new Vector(f.e_shapeTypeCount);
		for (var b = 0; b < f.e_shapeTypeCount; b++) {
			this.m_registers[b] = new Vector(f.e_shapeTypeCount);
			for (var c = 0; c < f.e_shapeTypeCount; c++)
				this.m_registers[b][c] = new z();
		}
		this.AddType(e.Create, e.Destroy, f.e_circleShape, f.e_circleShape);
		this.AddType(D.Create, D.Destroy, f.e_polygonShape, f.e_circleShape);
		this.AddType(G.Create, G.Destroy, f.e_polygonShape, f.e_polygonShape);
		this.AddType(B.Create, B.Destroy, f.e_edgeShape, f.e_circleShape);
		this.AddType(t.Create, t.Destroy, f.e_polygonShape, f.e_edgeShape);
	};
	r.prototype.Create = function (b, c) {
		var d = parseInt(b.GetType()),
			e = parseInt(c.GetType()),
			d = this.m_registers[d][e];
		if (d.pool)
			return (
				(e = d.pool),
				(d.pool = e.m_next),
				d.poolCount--,
				e.Reset(b, c),
				e
			);
		e = d.createFcn;
		return null != e
			? (d.primary
					? ((e = e(this.m_allocator)), e.Reset(b, c))
					: ((e = e(this.m_allocator)), e.Reset(c, b)),
			  e)
			: null;
	};
	r.prototype.Destroy = function (b) {
		0 < b.m_manifold.m_pointCount &&
			(b.m_fixtureA.m_body.SetAwake(!0),
			b.m_fixtureB.m_body.SetAwake(!0));
		var c = parseInt(b.m_fixtureA.GetType()),
			d = parseInt(b.m_fixtureB.GetType()),
			c = this.m_registers[c][d];
		c.poolCount++;
		b.m_next = c.pool;
		c.pool = b;
		c = c.destroyFcn;
		c(b, this.m_allocator);
	};
	z.b2ContactRegister = function () {};
	y.b2ContactResult = function () {
		this.position = new O();
		this.normal = new O();
		this.id = new aa();
	};
	A.b2ContactSolver = function () {
		this.m_step = new M();
		this.m_constraints = new Vector();
	};
	A.prototype.b2ContactSolver = function () {};
	A.prototype.Initialize = function (b, c, d, e) {
		void 0 === d && (d = 0);
		var f;
		this.m_step.Set(b);
		this.m_allocator = e;
		for (
			this.m_constraintCount = d;
			this.m_constraints.length < this.m_constraintCount;

		)
			this.m_constraints[this.m_constraints.length] = new n();
		for (b = 0; b < d; ++b) {
			f = c[b];
			e = f.m_fixtureA;
			var g = f.m_fixtureB,
				j = e.m_shape.m_radius,
				q = g.m_shape.m_radius,
				u = e.m_body,
				m = g.m_body,
				F = f.GetManifold(),
				r = Q.b2MixFriction(e.GetFriction(), g.GetFriction()),
				t = Q.b2MixRestitution(e.GetRestitution(), g.GetRestitution()),
				y = u.m_linearVelocity.x,
				B = u.m_linearVelocity.y,
				z = m.m_linearVelocity.x,
				D = m.m_linearVelocity.y,
				E = u.m_angularVelocity,
				I = m.m_angularVelocity;
			Q.b2Assert(0 < F.m_pointCount);
			A.s_worldManifold.Initialize(F, u.m_xf, j, m.m_xf, q);
			g = A.s_worldManifold.m_normal.x;
			f = A.s_worldManifold.m_normal.y;
			e = this.m_constraints[b];
			e.bodyA = u;
			e.bodyB = m;
			e.manifold = F;
			e.normal.x = g;
			e.normal.y = f;
			e.pointCount = F.m_pointCount;
			e.friction = r;
			e.restitution = t;
			e.localPlaneNormal.x = F.m_localPlaneNormal.x;
			e.localPlaneNormal.y = F.m_localPlaneNormal.y;
			e.localPoint.x = F.m_localPoint.x;
			e.localPoint.y = F.m_localPoint.y;
			e.radius = j + q;
			e.type = F.m_type;
			for (j = 0; j < e.pointCount; ++j) {
				r = F.m_points[j];
				q = e.points[j];
				q.normalImpulse = r.m_normalImpulse;
				q.tangentImpulse = r.m_tangentImpulse;
				q.localPoint.SetV(r.m_localPoint);
				var r = (q.rA.x =
						A.s_worldManifold.m_points[j].x - u.m_sweep.c.x),
					t = (q.rA.y =
						A.s_worldManifold.m_points[j].y - u.m_sweep.c.y),
					G = (q.rB.x =
						A.s_worldManifold.m_points[j].x - m.m_sweep.c.x),
					L = (q.rB.y =
						A.s_worldManifold.m_points[j].y - m.m_sweep.c.y),
					J = r * f - t * g,
					M = G * f - L * g,
					J = J * J,
					M = M * M;
				q.normalMass =
					1 /
					(u.m_invMass + m.m_invMass + u.m_invI * J + m.m_invI * M);
				var O = u.m_mass * u.m_invMass + m.m_mass * m.m_invMass,
					O = O + (u.m_mass * u.m_invI * J + m.m_mass * m.m_invI * M);
				q.equalizedMass = 1 / O;
				M = f;
				O = -g;
				J = r * O - t * M;
				M = G * O - L * M;
				J *= J;
				M *= M;
				q.tangentMass =
					1 /
					(u.m_invMass + m.m_invMass + u.m_invI * J + m.m_invI * M);
				q.velocityBias = 0;
				r =
					e.normal.x * (z + -I * L - y - -E * t) +
					e.normal.y * (D + I * G - B - E * r);
				r < -Q.b2_velocityThreshold &&
					(q.velocityBias += -e.restitution * r);
			}
			2 == e.pointCount &&
				((D = e.points[0]),
				(z = e.points[1]),
				(F = u.m_invMass),
				(u = u.m_invI),
				(y = m.m_invMass),
				(m = m.m_invI),
				(B = D.rA.x * f - D.rA.y * g),
				(D = D.rB.x * f - D.rB.y * g),
				(E = z.rA.x * f - z.rA.y * g),
				(z = z.rB.x * f - z.rB.y * g),
				(g = F + y + u * B * B + m * D * D),
				(f = F + y + u * E * E + m * z * z),
				(m = F + y + u * B * E + m * D * z),
				g * g < 100 * (g * f - m * m)
					? (e.K.col1.Set(g, m),
					  e.K.col2.Set(m, f),
					  e.K.GetInverse(e.normalMass))
					: (e.pointCount = 1));
		}
	};
	A.prototype.InitVelocityConstraints = function (b) {
		for (var c = 0; c < this.m_constraintCount; ++c) {
			var d = this.m_constraints[c],
				e = d.bodyA,
				f = d.bodyB,
				g = e.m_invMass,
				j = e.m_invI,
				q = f.m_invMass,
				u = f.m_invI,
				m = d.normal.x,
				F = d.normal.y,
				n = F,
				r = -m,
				t = 0,
				y = 0;
			if (b.warmStarting) {
				y = d.pointCount;
				for (t = 0; t < y; ++t) {
					var A = d.points[t];
					A.normalImpulse *= b.dtRatio;
					A.tangentImpulse *= b.dtRatio;
					var B = A.normalImpulse * m + A.tangentImpulse * n,
						z = A.normalImpulse * F + A.tangentImpulse * r;
					e.m_angularVelocity -= j * (A.rA.x * z - A.rA.y * B);
					e.m_linearVelocity.x -= g * B;
					e.m_linearVelocity.y -= g * z;
					f.m_angularVelocity += u * (A.rB.x * z - A.rB.y * B);
					f.m_linearVelocity.x += q * B;
					f.m_linearVelocity.y += q * z;
				}
			} else {
				y = d.pointCount;
				for (t = 0; t < y; ++t)
					(e = d.points[t]),
						(e.normalImpulse = 0),
						(e.tangentImpulse = 0);
			}
		}
	};
	A.prototype.SolveVelocityConstraints = function () {
		for (
			var b = 0,
				c,
				d = 0,
				e = 0,
				f = 0,
				g = 0,
				j = 0,
				q = 0,
				u = 0,
				m,
				F = 0;
			F < this.m_constraintCount;
			++F
		) {
			var f = this.m_constraints[F],
				n = f.bodyA,
				r = f.bodyB,
				t = n.m_angularVelocity,
				A = r.m_angularVelocity,
				y = n.m_linearVelocity,
				B = r.m_linearVelocity,
				z = n.m_invMass,
				D = n.m_invI,
				E = r.m_invMass,
				I = r.m_invI,
				q = f.normal.x,
				G = (u = f.normal.y);
			m = -q;
			j = f.friction;
			for (b = 0; b < f.pointCount; b++)
				(c = f.points[b]),
					(d = B.x - A * c.rB.y - y.x + t * c.rA.y),
					(e = B.y + A * c.rB.x - y.y - t * c.rA.x),
					(d = d * G + e * m),
					(d = c.tangentMass * -d),
					(e = j * c.normalImpulse),
					(e = ea.Clamp(c.tangentImpulse + d, -e, e)),
					(d = e - c.tangentImpulse),
					(g = d * G),
					(d *= m),
					(y.x -= z * g),
					(y.y -= z * d),
					(t -= D * (c.rA.x * d - c.rA.y * g)),
					(B.x += E * g),
					(B.y += E * d),
					(A += I * (c.rB.x * d - c.rB.y * g)),
					(c.tangentImpulse = e);
			parseInt(f.pointCount);
			if (1 == f.pointCount)
				(c = f.points[0]),
					(d = B.x + -A * c.rB.y - y.x - -t * c.rA.y),
					(e = B.y + A * c.rB.x - y.y - t * c.rA.x),
					(f = d * q + e * u),
					(d = -c.normalMass * (f - c.velocityBias)),
					(e = c.normalImpulse + d),
					(e = 0 < e ? e : 0),
					(d = e - c.normalImpulse),
					(g = d * q),
					(d *= u),
					(y.x -= z * g),
					(y.y -= z * d),
					(t -= D * (c.rA.x * d - c.rA.y * g)),
					(B.x += E * g),
					(B.y += E * d),
					(A += I * (c.rB.x * d - c.rB.y * g)),
					(c.normalImpulse = e);
			else {
				c = f.points[0];
				var b = f.points[1],
					d = c.normalImpulse,
					j = b.normalImpulse,
					L =
						(B.x - A * c.rB.y - y.x + t * c.rA.y) * q +
						(B.y + A * c.rB.x - y.y - t * c.rA.x) * u,
					J =
						(B.x - A * b.rB.y - y.x + t * b.rA.y) * q +
						(B.y + A * b.rB.x - y.y - t * b.rA.x) * u,
					e = L - c.velocityBias,
					g = J - b.velocityBias;
				m = f.K;
				e -= m.col1.x * d + m.col2.x * j;
				for (g -= m.col1.y * d + m.col2.y * j; ; ) {
					m = f.normalMass;
					G = -(m.col1.x * e + m.col2.x * g);
					m = -(m.col1.y * e + m.col2.y * g);
					if (0 <= G && 0 <= m) {
						d = G - d;
						j = m - j;
						f = d * q;
						d *= u;
						q *= j;
						u *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + u);
						t -=
							D *
							(c.rA.x * d - c.rA.y * f + b.rA.x * u - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + u);
						A +=
							I *
							(c.rB.x * d - c.rB.y * f + b.rB.x * u - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = m;
						break;
					}
					G = -c.normalMass * e;
					m = 0;
					J = f.K.col1.y * G + g;
					if (0 <= G && 0 <= J) {
						d = G - d;
						j = m - j;
						f = d * q;
						d *= u;
						q *= j;
						u *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + u);
						t -=
							D *
							(c.rA.x * d - c.rA.y * f + b.rA.x * u - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + u);
						A +=
							I *
							(c.rB.x * d - c.rB.y * f + b.rB.x * u - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = m;
						break;
					}
					G = 0;
					m = -b.normalMass * g;
					L = f.K.col2.x * m + e;
					if (0 <= m && 0 <= L) {
						d = G - d;
						j = m - j;
						f = d * q;
						d *= u;
						q *= j;
						u *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + u);
						t -=
							D *
							(c.rA.x * d - c.rA.y * f + b.rA.x * u - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + u);
						A +=
							I *
							(c.rB.x * d - c.rB.y * f + b.rB.x * u - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = m;
						break;
					}
					m = G = 0;
					L = e;
					J = g;
					if (0 <= L && 0 <= J) {
						d = G - d;
						j = m - j;
						f = d * q;
						d *= u;
						q *= j;
						u *= j;
						y.x -= z * (f + q);
						y.y -= z * (d + u);
						t -=
							D *
							(c.rA.x * d - c.rA.y * f + b.rA.x * u - b.rA.y * q);
						B.x += E * (f + q);
						B.y += E * (d + u);
						A +=
							I *
							(c.rB.x * d - c.rB.y * f + b.rB.x * u - b.rB.y * q);
						c.normalImpulse = G;
						b.normalImpulse = m;
						break;
					}
					break;
				}
			}
			n.m_angularVelocity = t;
			r.m_angularVelocity = A;
		}
	};
	A.prototype.FinalizeVelocityConstraints = function () {
		for (var b = 0; b < this.m_constraintCount; ++b)
			for (
				var c = this.m_constraints[b], d = c.manifold, e = 0;
				e < c.pointCount;
				++e
			) {
				var f = d.m_points[e],
					g = c.points[e];
				f.m_normalImpulse = g.normalImpulse;
				f.m_tangentImpulse = g.tangentImpulse;
			}
	};
	A.prototype.SolvePositionConstraints = function (b) {
		void 0 === b && (b = 0);
		for (var c = 0, d = 0; d < this.m_constraintCount; d++) {
			var e = this.m_constraints[d],
				f = e.bodyA,
				g = e.bodyB,
				j = f.m_mass * f.m_invMass,
				q = f.m_mass * f.m_invI,
				u = g.m_mass * g.m_invMass,
				m = g.m_mass * g.m_invI;
			A.s_psm.Initialize(e);
			for (var F = A.s_psm.m_normal, n = 0; n < e.pointCount; n++) {
				var t = e.points[n],
					r = A.s_psm.m_points[n],
					y = A.s_psm.m_separations[n],
					B = r.x - f.m_sweep.c.x,
					z = r.y - f.m_sweep.c.y,
					D = r.x - g.m_sweep.c.x,
					r = r.y - g.m_sweep.c.y,
					c = c < y ? c : y,
					y = ea.Clamp(
						b * (y + Q.b2_linearSlop),
						-Q.b2_maxLinearCorrection,
						0
					),
					y = -t.equalizedMass * y,
					t = y * F.x,
					y = y * F.y;
				f.m_sweep.c.x -= j * t;
				f.m_sweep.c.y -= j * y;
				f.m_sweep.a -= q * (B * y - z * t);
				f.SynchronizeTransform();
				g.m_sweep.c.x += u * t;
				g.m_sweep.c.y += u * y;
				g.m_sweep.a += m * (D * y - r * t);
				g.SynchronizeTransform();
			}
		}
		return c > -1.5 * Q.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Contacts.b2ContactSolver.s_worldManifold = new F();
		Box2D.Dynamics.Contacts.b2ContactSolver.s_psm = new E();
	});
	Box2D.inherit(B, Box2D.Dynamics.Contacts.b2Contact);
	B.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	B.b2EdgeAndCircleContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	B.Create = function () {
		return new B();
	};
	B.Destroy = function () {};
	B.prototype.Reset = function (b, c) {
		this.__super.Reset.call(this, b, c);
	};
	B.prototype.Evaluate = function () {
		var d = this.m_fixtureA.GetBody(),
			e = this.m_fixtureB.GetBody();
		this.b2CollideEdgeAndCircle(
			this.m_manifold,
			this.m_fixtureA.GetShape() instanceof c
				? this.m_fixtureA.GetShape()
				: null,
			d.m_xf,
			this.m_fixtureB.GetShape() instanceof b
				? this.m_fixtureB.GetShape()
				: null,
			e.m_xf
		);
	};
	B.prototype.b2CollideEdgeAndCircle = function () {};
	Box2D.inherit(I, Box2D.Dynamics.Contacts.b2Contact);
	I.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	I.b2NullContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	I.prototype.b2NullContact = function () {
		this.__super.b2Contact.call(this);
	};
	I.prototype.Evaluate = function () {};
	Box2D.inherit(D, Box2D.Dynamics.Contacts.b2Contact);
	D.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	D.b2PolyAndCircleContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	D.Create = function () {
		return new D();
	};
	D.Destroy = function () {};
	D.prototype.Reset = function (b, c) {
		this.__super.Reset.call(this, b, c);
		Q.b2Assert(b.GetType() == f.e_polygonShape);
		Q.b2Assert(c.GetType() == f.e_circleShape);
	};
	D.prototype.Evaluate = function () {
		var c = this.m_fixtureA.m_body,
			e = this.m_fixtureB.m_body;
		P.CollidePolygonAndCircle(
			this.m_manifold,
			this.m_fixtureA.GetShape() instanceof d
				? this.m_fixtureA.GetShape()
				: null,
			c.m_xf,
			this.m_fixtureB.GetShape() instanceof b
				? this.m_fixtureB.GetShape()
				: null,
			e.m_xf
		);
	};
	Box2D.inherit(t, Box2D.Dynamics.Contacts.b2Contact);
	t.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	t.b2PolyAndEdgeContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	t.Create = function () {
		return new t();
	};
	t.Destroy = function () {};
	t.prototype.Reset = function (b, c) {
		this.__super.Reset.call(this, b, c);
		Q.b2Assert(b.GetType() == f.e_polygonShape);
		Q.b2Assert(c.GetType() == f.e_edgeShape);
	};
	t.prototype.Evaluate = function () {
		var b = this.m_fixtureA.GetBody(),
			e = this.m_fixtureB.GetBody();
		this.b2CollidePolyAndEdge(
			this.m_manifold,
			this.m_fixtureA.GetShape() instanceof d
				? this.m_fixtureA.GetShape()
				: null,
			b.m_xf,
			this.m_fixtureB.GetShape() instanceof c
				? this.m_fixtureB.GetShape()
				: null,
			e.m_xf
		);
	};
	t.prototype.b2CollidePolyAndEdge = function () {};
	Box2D.inherit(G, Box2D.Dynamics.Contacts.b2Contact);
	G.prototype.__super = Box2D.Dynamics.Contacts.b2Contact.prototype;
	G.b2PolygonContact = function () {
		Box2D.Dynamics.Contacts.b2Contact.b2Contact.apply(this, arguments);
	};
	G.Create = function () {
		return new G();
	};
	G.Destroy = function () {};
	G.prototype.Reset = function (b, c) {
		this.__super.Reset.call(this, b, c);
	};
	G.prototype.Evaluate = function () {
		var b = this.m_fixtureA.GetBody(),
			c = this.m_fixtureB.GetBody();
		P.CollidePolygons(
			this.m_manifold,
			this.m_fixtureA.GetShape() instanceof d
				? this.m_fixtureA.GetShape()
				: null,
			b.m_xf,
			this.m_fixtureB.GetShape() instanceof d
				? this.m_fixtureB.GetShape()
				: null,
			c.m_xf
		);
	};
	E.b2PositionSolverManifold = function () {};
	E.prototype.b2PositionSolverManifold = function () {
		this.m_normal = new O();
		this.m_separations = new Vector_a2j_Number(Q.b2_maxManifoldPoints);
		this.m_points = new Vector(Q.b2_maxManifoldPoints);
		for (var b = 0; b < Q.b2_maxManifoldPoints; b++)
			this.m_points[b] = new O();
	};
	E.prototype.Initialize = function (b) {
		Q.b2Assert(0 < b.pointCount);
		var c = 0,
			d = 0,
			e = 0,
			f,
			g = 0,
			j = 0;
		switch (b.type) {
			case U.e_circles:
				f = b.bodyA.m_xf.R;
				e = b.localPoint;
				c = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				d = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyB.m_xf.R;
				e = b.points[0].localPoint;
				g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				f = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				var e = g - c,
					j = f - d,
					q = e * e + j * j;
				q > Number.MIN_VALUE * Number.MIN_VALUE
					? ((q = Math.sqrt(q)),
					  (this.m_normal.x = e / q),
					  (this.m_normal.y = j / q))
					: ((this.m_normal.x = 1), (this.m_normal.y = 0));
				this.m_points[0].x = 0.5 * (c + g);
				this.m_points[0].y = 0.5 * (d + f);
				this.m_separations[0] =
					e * this.m_normal.x + j * this.m_normal.y - b.radius;
				break;
			case U.e_faceA:
				f = b.bodyA.m_xf.R;
				e = b.localPlaneNormal;
				this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
				this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
				f = b.bodyA.m_xf.R;
				e = b.localPoint;
				g = b.bodyA.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				j = b.bodyA.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyB.m_xf.R;
				for (c = 0; c < b.pointCount; ++c)
					(e = b.points[c].localPoint),
						(d =
							b.bodyB.m_xf.position.x +
							(f.col1.x * e.x + f.col2.x * e.y)),
						(e =
							b.bodyB.m_xf.position.y +
							(f.col1.y * e.x + f.col2.y * e.y)),
						(this.m_separations[c] =
							(d - g) * this.m_normal.x +
							(e - j) * this.m_normal.y -
							b.radius),
						(this.m_points[c].x = d),
						(this.m_points[c].y = e);
				break;
			case U.e_faceB:
				f = b.bodyB.m_xf.R;
				e = b.localPlaneNormal;
				this.m_normal.x = f.col1.x * e.x + f.col2.x * e.y;
				this.m_normal.y = f.col1.y * e.x + f.col2.y * e.y;
				f = b.bodyB.m_xf.R;
				e = b.localPoint;
				g = b.bodyB.m_xf.position.x + (f.col1.x * e.x + f.col2.x * e.y);
				j = b.bodyB.m_xf.position.y + (f.col1.y * e.x + f.col2.y * e.y);
				f = b.bodyA.m_xf.R;
				for (c = 0; c < b.pointCount; ++c)
					(e = b.points[c].localPoint),
						(d =
							b.bodyA.m_xf.position.x +
							(f.col1.x * e.x + f.col2.x * e.y)),
						(e =
							b.bodyA.m_xf.position.y +
							(f.col1.y * e.x + f.col2.y * e.y)),
						(this.m_separations[c] =
							(d - g) * this.m_normal.x +
							(e - j) * this.m_normal.y -
							b.radius),
						this.m_points[c].Set(d, e);
				this.m_normal.x *= -1;
				this.m_normal.y *= -1;
		}
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointA = new O();
		Box2D.Dynamics.Contacts.b2PositionSolverManifold.circlePointB = new O();
	});
})();
(function () {
	var b = Box2D.Common.Math.b2Mat22,
		c = Box2D.Common.Math.b2Math,
		d = Box2D.Common.Math.b2Vec2,
		f = Box2D.Common.b2Color,
		e = Box2D.Dynamics.Controllers.b2BuoyancyController,
		j = Box2D.Dynamics.Controllers.b2ConstantAccelController,
		n = Box2D.Dynamics.Controllers.b2ConstantForceController,
		m = Box2D.Dynamics.Controllers.b2Controller,
		g = Box2D.Dynamics.Controllers.b2ControllerEdge,
		r = Box2D.Dynamics.Controllers.b2GravityController,
		z = Box2D.Dynamics.Controllers.b2TensorDampingController;
	Box2D.inherit(e, Box2D.Dynamics.Controllers.b2Controller);
	e.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	e.b2BuoyancyController = function () {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
			this,
			arguments
		);
		this.normal = new d(0, -1);
		this.density = this.offset = 0;
		this.velocity = new d(0, 0);
		this.linearDrag = 2;
		this.angularDrag = 1;
		this.useDensity = !1;
		this.useWorldGravity = !0;
		this.gravity = null;
	};
	e.prototype.Step = function () {
		if (this.m_bodyList) {
			this.useWorldGravity &&
				(this.gravity = this.GetWorld().GetGravity().Copy());
			for (var b = this.m_bodyList; b; b = b.nextBody) {
				var c = b.body;
				if (!1 != c.IsAwake()) {
					for (
						var e = new d(),
							f = new d(),
							g = 0,
							j = 0,
							m = c.GetFixtureList();
						m;
						m = m.GetNext()
					) {
						var n = new d(),
							r = m
								.GetShape()
								.ComputeSubmergedArea(
									this.normal,
									this.offset,
									c.GetTransform(),
									n
								),
							g = g + r;
						e.x += r * n.x;
						e.y += r * n.y;
						var z = 0,
							z = 1,
							j = j + r * z;
						f.x += r * n.x * z;
						f.y += r * n.y * z;
					}
					e.x /= g;
					e.y /= g;
					f.x /= j;
					f.y /= j;
					g < Number.MIN_VALUE ||
						((j = this.gravity.GetNegative()),
						j.Multiply(this.density * g),
						c.ApplyForce(j, f),
						(f = c.GetLinearVelocityFromWorldPoint(e)),
						f.Subtract(this.velocity),
						f.Multiply(-this.linearDrag * g),
						c.ApplyForce(f, e),
						c.ApplyTorque(
							(-c.GetInertia() / c.GetMass()) *
								g *
								c.GetAngularVelocity() *
								this.angularDrag
						));
				}
			}
		}
	};
	e.prototype.Draw = function (b) {
		var c = new d(),
			e = new d();
		c.x = this.normal.x * this.offset + 1e3 * this.normal.y;
		c.y = this.normal.y * this.offset - 1e3 * this.normal.x;
		e.x = this.normal.x * this.offset - 1e3 * this.normal.y;
		e.y = this.normal.y * this.offset + 1e3 * this.normal.x;
		var g = new f(0, 0, 1);
		b.DrawSegment(c, e, g);
	};
	Box2D.inherit(j, Box2D.Dynamics.Controllers.b2Controller);
	j.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	j.b2ConstantAccelController = function () {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
			this,
			arguments
		);
		this.A = new d(0, 0);
	};
	j.prototype.Step = function (b) {
		b = new d(this.A.x * b.dt, this.A.y * b.dt);
		for (var c = this.m_bodyList; c; c = c.nextBody) {
			var e = c.body;
			e.IsAwake() &&
				e.SetLinearVelocity(
					new d(
						e.GetLinearVelocity().x + b.x,
						e.GetLinearVelocity().y + b.y
					)
				);
		}
	};
	Box2D.inherit(n, Box2D.Dynamics.Controllers.b2Controller);
	n.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	n.b2ConstantForceController = function () {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
			this,
			arguments
		);
		this.F = new d(0, 0);
	};
	n.prototype.Step = function () {
		for (var b = this.m_bodyList; b; b = b.nextBody) {
			var c = b.body;
			c.IsAwake() && c.ApplyForce(this.F, c.GetWorldCenter());
		}
	};
	m.b2Controller = function () {};
	m.prototype.Step = function () {};
	m.prototype.Draw = function () {};
	m.prototype.AddBody = function (b) {
		var c = new g();
		c.controller = this;
		c.body = b;
		c.nextBody = this.m_bodyList;
		c.prevBody = null;
		this.m_bodyList = c;
		c.nextBody && (c.nextBody.prevBody = c);
		this.m_bodyCount++;
		c.nextController = b.m_controllerList;
		c.prevController = null;
		b.m_controllerList = c;
		c.nextController && (c.nextController.prevController = c);
		b.m_controllerCount++;
	};
	m.prototype.RemoveBody = function (b) {
		for (var c = b.m_controllerList; c && c.controller != this; )
			c = c.nextController;
		c.prevBody && (c.prevBody.nextBody = c.nextBody);
		c.nextBody && (c.nextBody.prevBody = c.prevBody);
		c.nextController &&
			(c.nextController.prevController = c.prevController);
		c.prevController &&
			(c.prevController.nextController = c.nextController);
		this.m_bodyList == c && (this.m_bodyList = c.nextBody);
		b.m_controllerList == c && (b.m_controllerList = c.nextController);
		b.m_controllerCount--;
		this.m_bodyCount--;
	};
	m.prototype.Clear = function () {
		for (; this.m_bodyList; ) this.RemoveBody(this.m_bodyList.body);
	};
	m.prototype.GetNext = function () {
		return this.m_next;
	};
	m.prototype.GetWorld = function () {
		return this.m_world;
	};
	m.prototype.GetBodyList = function () {
		return this.m_bodyList;
	};
	g.b2ControllerEdge = function () {};
	Box2D.inherit(r, Box2D.Dynamics.Controllers.b2Controller);
	r.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	r.b2GravityController = function () {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
			this,
			arguments
		);
		this.G = 1;
		this.invSqr = !0;
	};
	r.prototype.Step = function () {
		var b = null,
			c = null,
			e = null,
			f = 0,
			g = null,
			j = null,
			m = null,
			n = 0,
			r = 0,
			z = 0;
		if (this.invSqr)
			for (b = this.m_bodyList; b; b = b.nextBody) {
				c = b.body;
				e = c.GetWorldCenter();
				f = c.GetMass();
				for (g = this.m_bodyList; g != b; g = g.nextBody)
					(j = g.body),
						(m = j.GetWorldCenter()),
						(n = m.x - e.x),
						(r = m.y - e.y),
						(z = n * n + r * r),
						z < Number.MIN_VALUE ||
							((n = new d(n, r)),
							n.Multiply(
								(this.G / z / Math.sqrt(z)) * f * j.GetMass()
							),
							c.IsAwake() && c.ApplyForce(n, e),
							n.Multiply(-1),
							j.IsAwake() && j.ApplyForce(n, m));
			}
		else
			for (b = this.m_bodyList; b; b = b.nextBody) {
				c = b.body;
				e = c.GetWorldCenter();
				f = c.GetMass();
				for (g = this.m_bodyList; g != b; g = g.nextBody)
					(j = g.body),
						(m = j.GetWorldCenter()),
						(n = m.x - e.x),
						(r = m.y - e.y),
						(z = n * n + r * r),
						z < Number.MIN_VALUE ||
							((n = new d(n, r)),
							n.Multiply((this.G / z) * f * j.GetMass()),
							c.IsAwake() && c.ApplyForce(n, e),
							n.Multiply(-1),
							j.IsAwake() && j.ApplyForce(n, m));
			}
	};
	Box2D.inherit(z, Box2D.Dynamics.Controllers.b2Controller);
	z.prototype.__super = Box2D.Dynamics.Controllers.b2Controller.prototype;
	z.b2TensorDampingController = function () {
		Box2D.Dynamics.Controllers.b2Controller.b2Controller.apply(
			this,
			arguments
		);
		this.T = new b();
		this.maxTimestep = 0;
	};
	z.prototype.SetAxisAligned = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.T.col1.x = -b;
		this.T.col1.y = 0;
		this.T.col2.x = 0;
		this.T.col2.y = -c;
		this.maxTimestep = 0 < b || 0 < c ? 1 / Math.max(b, c) : 0;
	};
	z.prototype.Step = function (b) {
		b = b.dt;
		if (!(b <= Number.MIN_VALUE)) {
			b > this.maxTimestep &&
				0 < this.maxTimestep &&
				(b = this.maxTimestep);
			for (var e = this.m_bodyList; e; e = e.nextBody) {
				var f = e.body;
				if (f.IsAwake()) {
					var g = f.GetWorldVector(
						c.MulMV(this.T, f.GetLocalVector(f.GetLinearVelocity()))
					);
					f.SetLinearVelocity(
						new d(
							f.GetLinearVelocity().x + g.x * b,
							f.GetLinearVelocity().y + g.y * b
						)
					);
				}
			}
		}
	};
})();
(function () {
	var b = Box2D.Common.b2Settings,
		c = Box2D.Common.Math.b2Mat22,
		d = Box2D.Common.Math.b2Mat33,
		f = Box2D.Common.Math.b2Math,
		e = Box2D.Common.Math.b2Vec2,
		j = Box2D.Common.Math.b2Vec3,
		n = Box2D.Dynamics.Joints.b2DistanceJoint,
		m = Box2D.Dynamics.Joints.b2DistanceJointDef,
		g = Box2D.Dynamics.Joints.b2FrictionJoint,
		r = Box2D.Dynamics.Joints.b2FrictionJointDef,
		z = Box2D.Dynamics.Joints.b2GearJoint,
		y = Box2D.Dynamics.Joints.b2GearJointDef,
		A = Box2D.Dynamics.Joints.b2Jacobian,
		B = Box2D.Dynamics.Joints.b2Joint,
		I = Box2D.Dynamics.Joints.b2JointDef,
		D = Box2D.Dynamics.Joints.b2JointEdge,
		t = Box2D.Dynamics.Joints.b2LineJoint,
		G = Box2D.Dynamics.Joints.b2LineJointDef,
		E = Box2D.Dynamics.Joints.b2MouseJoint,
		L = Box2D.Dynamics.Joints.b2MouseJointDef,
		M = Box2D.Dynamics.Joints.b2PrismaticJoint,
		Q = Box2D.Dynamics.Joints.b2PrismaticJointDef,
		J = Box2D.Dynamics.Joints.b2PulleyJoint,
		ea = Box2D.Dynamics.Joints.b2PulleyJointDef,
		O = Box2D.Dynamics.Joints.b2RevoluteJoint,
		P = Box2D.Dynamics.Joints.b2RevoluteJointDef,
		aa = Box2D.Dynamics.Joints.b2WeldJoint,
		U = Box2D.Dynamics.Joints.b2WeldJointDef;
	Box2D.inherit(n, Box2D.Dynamics.Joints.b2Joint);
	n.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	n.b2DistanceJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_u = new e();
	};
	n.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	n.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	n.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(
			b * this.m_impulse * this.m_u.x,
			b * this.m_impulse * this.m_u.y
		);
	};
	n.prototype.GetReactionTorque = function () {
		return 0;
	};
	n.prototype.GetLength = function () {
		return this.m_length;
	};
	n.prototype.SetLength = function (b) {
		void 0 === b && (b = 0);
		this.m_length = b;
	};
	n.prototype.GetFrequency = function () {
		return this.m_frequencyHz;
	};
	n.prototype.SetFrequency = function (b) {
		void 0 === b && (b = 0);
		this.m_frequencyHz = b;
	};
	n.prototype.GetDampingRatio = function () {
		return this.m_dampingRatio;
	};
	n.prototype.SetDampingRatio = function (b) {
		void 0 === b && (b = 0);
		this.m_dampingRatio = b;
	};
	n.prototype.b2DistanceJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_length = b.length;
		this.m_frequencyHz = b.frequencyHz;
		this.m_dampingRatio = b.dampingRatio;
		this.m_bias = this.m_gamma = this.m_impulse = 0;
	};
	n.prototype.InitVelocityConstraints = function (c) {
		var d,
			e = 0,
			f = this.m_bodyA,
			g = this.m_bodyB;
		d = f.m_xf.R;
		var j = this.m_localAnchor1.x - f.m_sweep.localCenter.x,
			m = this.m_localAnchor1.y - f.m_sweep.localCenter.y,
			e = d.col1.x * j + d.col2.x * m,
			m = d.col1.y * j + d.col2.y * m,
			j = e;
		d = g.m_xf.R;
		var l = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
			n = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
			e = d.col1.x * l + d.col2.x * n,
			n = d.col1.y * l + d.col2.y * n,
			l = e;
		this.m_u.x = g.m_sweep.c.x + l - f.m_sweep.c.x - j;
		this.m_u.y = g.m_sweep.c.y + n - f.m_sweep.c.y - m;
		e = Math.sqrt(this.m_u.x * this.m_u.x + this.m_u.y * this.m_u.y);
		e > b.b2_linearSlop ? this.m_u.Multiply(1 / e) : this.m_u.SetZero();
		d = j * this.m_u.y - m * this.m_u.x;
		var r = l * this.m_u.y - n * this.m_u.x;
		d = f.m_invMass + f.m_invI * d * d + g.m_invMass + g.m_invI * r * r;
		this.m_mass = 0 != d ? 1 / d : 0;
		if (0 < this.m_frequencyHz) {
			var e = e - this.m_length,
				r = 2 * Math.PI * this.m_frequencyHz,
				x = this.m_mass * r * r;
			this.m_gamma =
				c.dt * (2 * this.m_mass * this.m_dampingRatio * r + c.dt * x);
			this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
			this.m_bias = e * c.dt * x * this.m_gamma;
			this.m_mass = d + this.m_gamma;
			this.m_mass = 0 != this.m_mass ? 1 / this.m_mass : 0;
		}
		c.warmStarting
			? ((this.m_impulse *= c.dtRatio),
			  (c = this.m_impulse * this.m_u.x),
			  (d = this.m_impulse * this.m_u.y),
			  (f.m_linearVelocity.x -= f.m_invMass * c),
			  (f.m_linearVelocity.y -= f.m_invMass * d),
			  (f.m_angularVelocity -= f.m_invI * (j * d - m * c)),
			  (g.m_linearVelocity.x += g.m_invMass * c),
			  (g.m_linearVelocity.y += g.m_invMass * d),
			  (g.m_angularVelocity += g.m_invI * (l * d - n * c)))
			: (this.m_impulse = 0);
	};
	n.prototype.SolveVelocityConstraints = function () {
		var b,
			c = this.m_bodyA,
			d = this.m_bodyB;
		b = c.m_xf.R;
		var e = this.m_localAnchor1.x - c.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - c.m_sweep.localCenter.y,
			g = b.col1.x * e + b.col2.x * f,
			f = b.col1.y * e + b.col2.y * f,
			e = g;
		b = d.m_xf.R;
		var j = this.m_localAnchor2.x - d.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - d.m_sweep.localCenter.y,
			g = b.col1.x * j + b.col2.x * l,
			l = b.col1.y * j + b.col2.y * l,
			j = g,
			g =
				-this.m_mass *
				(this.m_u.x *
					(d.m_linearVelocity.x +
						-d.m_angularVelocity * l -
						(c.m_linearVelocity.x + -c.m_angularVelocity * f)) +
					this.m_u.y *
						(d.m_linearVelocity.y +
							d.m_angularVelocity * j -
							(c.m_linearVelocity.y + c.m_angularVelocity * e)) +
					this.m_bias +
					this.m_gamma * this.m_impulse);
		this.m_impulse += g;
		b = g * this.m_u.x;
		g *= this.m_u.y;
		c.m_linearVelocity.x -= c.m_invMass * b;
		c.m_linearVelocity.y -= c.m_invMass * g;
		c.m_angularVelocity -= c.m_invI * (e * g - f * b);
		d.m_linearVelocity.x += d.m_invMass * b;
		d.m_linearVelocity.y += d.m_invMass * g;
		d.m_angularVelocity += d.m_invI * (j * g - l * b);
	};
	n.prototype.SolvePositionConstraints = function () {
		var c;
		if (0 < this.m_frequencyHz) return !0;
		var d = this.m_bodyA,
			e = this.m_bodyB;
		c = d.m_xf.R;
		var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			m = c.col1.x * g + c.col2.x * j,
			j = c.col1.y * g + c.col2.y * j,
			g = m;
		c = e.m_xf.R;
		var n = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			m = c.col1.x * n + c.col2.x * l,
			l = c.col1.y * n + c.col2.y * l,
			n = m,
			m = e.m_sweep.c.x + n - d.m_sweep.c.x - g,
			s = e.m_sweep.c.y + l - d.m_sweep.c.y - j;
		c = Math.sqrt(m * m + s * s);
		m /= c;
		s /= c;
		c -= this.m_length;
		c = f.Clamp(c, -b.b2_maxLinearCorrection, b.b2_maxLinearCorrection);
		var r = -this.m_mass * c;
		this.m_u.Set(m, s);
		m = r * this.m_u.x;
		s = r * this.m_u.y;
		d.m_sweep.c.x -= d.m_invMass * m;
		d.m_sweep.c.y -= d.m_invMass * s;
		d.m_sweep.a -= d.m_invI * (g * s - j * m);
		e.m_sweep.c.x += e.m_invMass * m;
		e.m_sweep.c.y += e.m_invMass * s;
		e.m_sweep.a += e.m_invI * (n * s - l * m);
		d.SynchronizeTransform();
		e.SynchronizeTransform();
		return f.Abs(c) < b.b2_linearSlop;
	};
	Box2D.inherit(m, Box2D.Dynamics.Joints.b2JointDef);
	m.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	m.b2DistanceJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
	};
	m.prototype.b2DistanceJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_distanceJoint;
		this.length = 1;
		this.dampingRatio = this.frequencyHz = 0;
	};
	m.prototype.Initialize = function (b, c, d, e) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(e));
		b = e.x - d.x;
		d = e.y - d.y;
		this.length = Math.sqrt(b * b + d * d);
		this.dampingRatio = this.frequencyHz = 0;
	};
	Box2D.inherit(g, Box2D.Dynamics.Joints.b2Joint);
	g.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	g.b2FrictionJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchorA = new e();
		this.m_localAnchorB = new e();
		this.m_linearMass = new c();
		this.m_linearImpulse = new e();
	};
	g.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
	};
	g.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
	};
	g.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_linearImpulse.x, b * this.m_linearImpulse.y);
	};
	g.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		return b * this.m_angularImpulse;
	};
	g.prototype.SetMaxForce = function (b) {
		void 0 === b && (b = 0);
		this.m_maxForce = b;
	};
	g.prototype.GetMaxForce = function () {
		return this.m_maxForce;
	};
	g.prototype.SetMaxTorque = function (b) {
		void 0 === b && (b = 0);
		this.m_maxTorque = b;
	};
	g.prototype.GetMaxTorque = function () {
		return this.m_maxTorque;
	};
	g.prototype.b2FrictionJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchorA.SetV(b.localAnchorA);
		this.m_localAnchorB.SetV(b.localAnchorB);
		this.m_linearMass.SetZero();
		this.m_angularMass = 0;
		this.m_linearImpulse.SetZero();
		this.m_angularImpulse = 0;
		this.m_maxForce = b.maxForce;
		this.m_maxTorque = b.maxTorque;
	};
	g.prototype.InitVelocityConstraints = function (b) {
		var d,
			e = 0,
			f = this.m_bodyA,
			g = this.m_bodyB;
		d = f.m_xf.R;
		var j = this.m_localAnchorA.x - f.m_sweep.localCenter.x,
			m = this.m_localAnchorA.y - f.m_sweep.localCenter.y,
			e = d.col1.x * j + d.col2.x * m,
			m = d.col1.y * j + d.col2.y * m,
			j = e;
		d = g.m_xf.R;
		var l = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
			n = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
			e = d.col1.x * l + d.col2.x * n,
			n = d.col1.y * l + d.col2.y * n,
			l = e;
		d = f.m_invMass;
		var e = g.m_invMass,
			r = f.m_invI,
			x = g.m_invI,
			t = new c();
		t.col1.x = d + e;
		t.col2.x = 0;
		t.col1.y = 0;
		t.col2.y = d + e;
		t.col1.x += r * m * m;
		t.col2.x += -r * j * m;
		t.col1.y += -r * j * m;
		t.col2.y += r * j * j;
		t.col1.x += x * n * n;
		t.col2.x += -x * l * n;
		t.col1.y += -x * l * n;
		t.col2.y += x * l * l;
		t.GetInverse(this.m_linearMass);
		this.m_angularMass = r + x;
		0 < this.m_angularMass && (this.m_angularMass = 1 / this.m_angularMass);
		b.warmStarting
			? ((this.m_linearImpulse.x *= b.dtRatio),
			  (this.m_linearImpulse.y *= b.dtRatio),
			  (this.m_angularImpulse *= b.dtRatio),
			  (b = this.m_linearImpulse),
			  (f.m_linearVelocity.x -= d * b.x),
			  (f.m_linearVelocity.y -= d * b.y),
			  (f.m_angularVelocity -=
					r * (j * b.y - m * b.x + this.m_angularImpulse)),
			  (g.m_linearVelocity.x += e * b.x),
			  (g.m_linearVelocity.y += e * b.y),
			  (g.m_angularVelocity +=
					x * (l * b.y - n * b.x + this.m_angularImpulse)))
			: (this.m_linearImpulse.SetZero(), (this.m_angularImpulse = 0));
	};
	g.prototype.SolveVelocityConstraints = function (b) {
		var c,
			d = 0,
			g = this.m_bodyA,
			j = this.m_bodyB,
			m = g.m_linearVelocity,
			n = g.m_angularVelocity,
			l = j.m_linearVelocity,
			s = j.m_angularVelocity,
			r = g.m_invMass,
			x = j.m_invMass,
			t = g.m_invI,
			y = j.m_invI;
		c = g.m_xf.R;
		var z = this.m_localAnchorA.x - g.m_sweep.localCenter.x,
			B = this.m_localAnchorA.y - g.m_sweep.localCenter.y,
			d = c.col1.x * z + c.col2.x * B,
			B = c.col1.y * z + c.col2.y * B,
			z = d;
		c = j.m_xf.R;
		var A = this.m_localAnchorB.x - j.m_sweep.localCenter.x,
			D = this.m_localAnchorB.y - j.m_sweep.localCenter.y,
			d = c.col1.x * A + c.col2.x * D,
			D = c.col1.y * A + c.col2.y * D,
			A = d,
			d = -this.m_angularMass * (s - n),
			E = this.m_angularImpulse;
		c = b.dt * this.m_maxTorque;
		this.m_angularImpulse = f.Clamp(this.m_angularImpulse + d, -c, c);
		d = this.m_angularImpulse - E;
		n -= t * d;
		s += y * d;
		c = f.MulMV(
			this.m_linearMass,
			new e(-(l.x - s * D - m.x + n * B), -(l.y + s * A - m.y - n * z))
		);
		d = this.m_linearImpulse.Copy();
		this.m_linearImpulse.Add(c);
		c = b.dt * this.m_maxForce;
		this.m_linearImpulse.LengthSquared() > c * c &&
			(this.m_linearImpulse.Normalize(),
			this.m_linearImpulse.Multiply(c));
		c = f.SubtractVV(this.m_linearImpulse, d);
		m.x -= r * c.x;
		m.y -= r * c.y;
		n -= t * (z * c.y - B * c.x);
		l.x += x * c.x;
		l.y += x * c.y;
		s += y * (A * c.y - D * c.x);
		g.m_angularVelocity = n;
		j.m_angularVelocity = s;
	};
	g.prototype.SolvePositionConstraints = function () {
		return !0;
	};
	Box2D.inherit(r, Box2D.Dynamics.Joints.b2JointDef);
	r.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	r.b2FrictionJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
	};
	r.prototype.b2FrictionJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_frictionJoint;
		this.maxTorque = this.maxForce = 0;
	};
	r.prototype.Initialize = function (b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
	};
	Box2D.inherit(z, Box2D.Dynamics.Joints.b2Joint);
	z.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	z.b2GearJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_groundAnchor1 = new e();
		this.m_groundAnchor2 = new e();
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_J = new A();
	};
	z.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	z.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	z.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(
			b * this.m_impulse * this.m_J.linearB.x,
			b * this.m_impulse * this.m_J.linearB.y
		);
	};
	z.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		var c = this.m_bodyB.m_xf.R,
			d = this.m_localAnchor1.x - this.m_bodyB.m_sweep.localCenter.x,
			e = this.m_localAnchor1.y - this.m_bodyB.m_sweep.localCenter.y,
			f = c.col1.x * d + c.col2.x * e,
			e = c.col1.y * d + c.col2.y * e;
		return (
			b *
			(this.m_impulse * this.m_J.angularB -
				f * this.m_impulse * this.m_J.linearB.y +
				e * this.m_impulse * this.m_J.linearB.x)
		);
	};
	z.prototype.GetRatio = function () {
		return this.m_ratio;
	};
	z.prototype.SetRatio = function (b) {
		void 0 === b && (b = 0);
		this.m_ratio = b;
	};
	z.prototype.b2GearJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		var c = parseInt(b.joint1.m_type),
			d = parseInt(b.joint2.m_type);
		this.m_prismatic2 =
			this.m_revolute2 =
			this.m_prismatic1 =
			this.m_revolute1 =
				null;
		var e = 0,
			f = 0;
		this.m_ground1 = b.joint1.GetBodyA();
		this.m_bodyA = b.joint1.GetBodyB();
		c == B.e_revoluteJoint
			? ((this.m_revolute1 = b.joint1 instanceof O ? b.joint1 : null),
			  this.m_groundAnchor1.SetV(this.m_revolute1.m_localAnchor1),
			  this.m_localAnchor1.SetV(this.m_revolute1.m_localAnchor2),
			  (e = this.m_revolute1.GetJointAngle()))
			: ((this.m_prismatic1 = b.joint1 instanceof M ? b.joint1 : null),
			  this.m_groundAnchor1.SetV(this.m_prismatic1.m_localAnchor1),
			  this.m_localAnchor1.SetV(this.m_prismatic1.m_localAnchor2),
			  (e = this.m_prismatic1.GetJointTranslation()));
		this.m_ground2 = b.joint2.GetBodyA();
		this.m_bodyB = b.joint2.GetBodyB();
		d == B.e_revoluteJoint
			? ((this.m_revolute2 = b.joint2 instanceof O ? b.joint2 : null),
			  this.m_groundAnchor2.SetV(this.m_revolute2.m_localAnchor1),
			  this.m_localAnchor2.SetV(this.m_revolute2.m_localAnchor2),
			  (f = this.m_revolute2.GetJointAngle()))
			: ((this.m_prismatic2 = b.joint2 instanceof M ? b.joint2 : null),
			  this.m_groundAnchor2.SetV(this.m_prismatic2.m_localAnchor1),
			  this.m_localAnchor2.SetV(this.m_prismatic2.m_localAnchor2),
			  (f = this.m_prismatic2.GetJointTranslation()));
		this.m_ratio = b.ratio;
		this.m_constant = e + this.m_ratio * f;
		this.m_impulse = 0;
	};
	z.prototype.InitVelocityConstraints = function (b) {
		var c = this.m_ground1,
			d = this.m_ground2,
			e = this.m_bodyA,
			f = this.m_bodyB,
			g = 0,
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			x = 0;
		this.m_J.SetZero();
		this.m_revolute1
			? ((this.m_J.angularA = -1), (x += e.m_invI))
			: ((c = c.m_xf.R),
			  (j = this.m_prismatic1.m_localXAxis1),
			  (g = c.col1.x * j.x + c.col2.x * j.y),
			  (j = c.col1.y * j.x + c.col2.y * j.y),
			  (c = e.m_xf.R),
			  (l = this.m_localAnchor1.x - e.m_sweep.localCenter.x),
			  (m = this.m_localAnchor1.y - e.m_sweep.localCenter.y),
			  (n = c.col1.x * l + c.col2.x * m),
			  (m = c.col1.y * l + c.col2.y * m),
			  (l = n * j - m * g),
			  this.m_J.linearA.Set(-g, -j),
			  (this.m_J.angularA = -l),
			  (x += e.m_invMass + e.m_invI * l * l));
		this.m_revolute2
			? ((this.m_J.angularB = -this.m_ratio),
			  (x += this.m_ratio * this.m_ratio * f.m_invI))
			: ((c = d.m_xf.R),
			  (j = this.m_prismatic2.m_localXAxis1),
			  (g = c.col1.x * j.x + c.col2.x * j.y),
			  (j = c.col1.y * j.x + c.col2.y * j.y),
			  (c = f.m_xf.R),
			  (l = this.m_localAnchor2.x - f.m_sweep.localCenter.x),
			  (m = this.m_localAnchor2.y - f.m_sweep.localCenter.y),
			  (n = c.col1.x * l + c.col2.x * m),
			  (m = c.col1.y * l + c.col2.y * m),
			  (l = n * j - m * g),
			  this.m_J.linearB.Set(-this.m_ratio * g, -this.m_ratio * j),
			  (this.m_J.angularB = -this.m_ratio * l),
			  (x +=
					this.m_ratio *
					this.m_ratio *
					(f.m_invMass + f.m_invI * l * l)));
		this.m_mass = 0 < x ? 1 / x : 0;
		b.warmStarting
			? ((e.m_linearVelocity.x +=
					e.m_invMass * this.m_impulse * this.m_J.linearA.x),
			  (e.m_linearVelocity.y +=
					e.m_invMass * this.m_impulse * this.m_J.linearA.y),
			  (e.m_angularVelocity +=
					e.m_invI * this.m_impulse * this.m_J.angularA),
			  (f.m_linearVelocity.x +=
					f.m_invMass * this.m_impulse * this.m_J.linearB.x),
			  (f.m_linearVelocity.y +=
					f.m_invMass * this.m_impulse * this.m_J.linearB.y),
			  (f.m_angularVelocity +=
					f.m_invI * this.m_impulse * this.m_J.angularB))
			: (this.m_impulse = 0);
	};
	z.prototype.SolveVelocityConstraints = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d =
				-this.m_mass *
				this.m_J.Compute(
					b.m_linearVelocity,
					b.m_angularVelocity,
					c.m_linearVelocity,
					c.m_angularVelocity
				);
		this.m_impulse += d;
		b.m_linearVelocity.x += b.m_invMass * d * this.m_J.linearA.x;
		b.m_linearVelocity.y += b.m_invMass * d * this.m_J.linearA.y;
		b.m_angularVelocity += b.m_invI * d * this.m_J.angularA;
		c.m_linearVelocity.x += c.m_invMass * d * this.m_J.linearB.x;
		c.m_linearVelocity.y += c.m_invMass * d * this.m_J.linearB.y;
		c.m_angularVelocity += c.m_invI * d * this.m_J.angularB;
	};
	z.prototype.SolvePositionConstraints = function () {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e = 0,
			f = 0,
			e = this.m_revolute1
				? this.m_revolute1.GetJointAngle()
				: this.m_prismatic1.GetJointTranslation(),
			f = this.m_revolute2
				? this.m_revolute2.GetJointAngle()
				: this.m_prismatic2.GetJointTranslation(),
			e = -this.m_mass * (this.m_constant - (e + this.m_ratio * f));
		c.m_sweep.c.x += c.m_invMass * e * this.m_J.linearA.x;
		c.m_sweep.c.y += c.m_invMass * e * this.m_J.linearA.y;
		c.m_sweep.a += c.m_invI * e * this.m_J.angularA;
		d.m_sweep.c.x += d.m_invMass * e * this.m_J.linearB.x;
		d.m_sweep.c.y += d.m_invMass * e * this.m_J.linearB.y;
		d.m_sweep.a += d.m_invI * e * this.m_J.angularB;
		c.SynchronizeTransform();
		d.SynchronizeTransform();
		return 0 < b.b2_linearSlop;
	};
	Box2D.inherit(y, Box2D.Dynamics.Joints.b2JointDef);
	y.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	y.b2GearJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
	};
	y.prototype.b2GearJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_gearJoint;
		this.joint2 = this.joint1 = null;
		this.ratio = 1;
	};
	A.b2Jacobian = function () {
		this.linearA = new e();
		this.linearB = new e();
	};
	A.prototype.SetZero = function () {
		this.linearA.SetZero();
		this.angularA = 0;
		this.linearB.SetZero();
		this.angularB = 0;
	};
	A.prototype.Set = function (b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === e && (e = 0);
		this.linearA.SetV(b);
		this.angularA = c;
		this.linearB.SetV(d);
		this.angularB = e;
	};
	A.prototype.Compute = function (b, c, d, e) {
		void 0 === c && (c = 0);
		void 0 === e && (e = 0);
		return (
			this.linearA.x * b.x +
			this.linearA.y * b.y +
			this.angularA * c +
			(this.linearB.x * d.x + this.linearB.y * d.y) +
			this.angularB * e
		);
	};
	B.b2Joint = function () {
		this.m_edgeA = new D();
		this.m_edgeB = new D();
		this.m_localCenterA = new e();
		this.m_localCenterB = new e();
	};
	B.prototype.GetType = function () {
		return this.m_type;
	};
	B.prototype.GetAnchorA = function () {
		return null;
	};
	B.prototype.GetAnchorB = function () {
		return null;
	};
	B.prototype.GetReactionForce = function () {
		return null;
	};
	B.prototype.GetReactionTorque = function () {
		return 0;
	};
	B.prototype.GetBodyA = function () {
		return this.m_bodyA;
	};
	B.prototype.GetBodyB = function () {
		return this.m_bodyB;
	};
	B.prototype.GetNext = function () {
		return this.m_next;
	};
	B.prototype.GetUserData = function () {
		return this.m_userData;
	};
	B.prototype.SetUserData = function (b) {
		this.m_userData = b;
	};
	B.prototype.IsActive = function () {
		return this.m_bodyA.IsActive() && this.m_bodyB.IsActive();
	};
	B.Create = function (b) {
		var c = null;
		switch (b.type) {
			case B.e_distanceJoint:
				c = new n(b instanceof m ? b : null);
				break;
			case B.e_mouseJoint:
				c = new E(b instanceof L ? b : null);
				break;
			case B.e_prismaticJoint:
				c = new M(b instanceof Q ? b : null);
				break;
			case B.e_revoluteJoint:
				c = new O(b instanceof P ? b : null);
				break;
			case B.e_pulleyJoint:
				c = new J(b instanceof ea ? b : null);
				break;
			case B.e_gearJoint:
				c = new z(b instanceof y ? b : null);
				break;
			case B.e_lineJoint:
				c = new t(b instanceof G ? b : null);
				break;
			case B.e_weldJoint:
				c = new aa(b instanceof U ? b : null);
				break;
			case B.e_frictionJoint:
				c = new g(b instanceof r ? b : null);
		}
		return c;
	};
	B.Destroy = function () {};
	B.prototype.b2Joint = function (c) {
		b.b2Assert(c.bodyA != c.bodyB);
		this.m_type = c.type;
		this.m_next = this.m_prev = null;
		this.m_bodyA = c.bodyA;
		this.m_bodyB = c.bodyB;
		this.m_collideConnected = c.collideConnected;
		this.m_islandFlag = !1;
		this.m_userData = c.userData;
	};
	B.prototype.InitVelocityConstraints = function () {};
	B.prototype.SolveVelocityConstraints = function () {};
	B.prototype.FinalizeVelocityConstraints = function () {};
	B.prototype.SolvePositionConstraints = function () {
		return !1;
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2Joint.e_unknownJoint = 0;
		Box2D.Dynamics.Joints.b2Joint.e_revoluteJoint = 1;
		Box2D.Dynamics.Joints.b2Joint.e_prismaticJoint = 2;
		Box2D.Dynamics.Joints.b2Joint.e_distanceJoint = 3;
		Box2D.Dynamics.Joints.b2Joint.e_pulleyJoint = 4;
		Box2D.Dynamics.Joints.b2Joint.e_mouseJoint = 5;
		Box2D.Dynamics.Joints.b2Joint.e_gearJoint = 6;
		Box2D.Dynamics.Joints.b2Joint.e_lineJoint = 7;
		Box2D.Dynamics.Joints.b2Joint.e_weldJoint = 8;
		Box2D.Dynamics.Joints.b2Joint.e_frictionJoint = 9;
		Box2D.Dynamics.Joints.b2Joint.e_inactiveLimit = 0;
		Box2D.Dynamics.Joints.b2Joint.e_atLowerLimit = 1;
		Box2D.Dynamics.Joints.b2Joint.e_atUpperLimit = 2;
		Box2D.Dynamics.Joints.b2Joint.e_equalLimits = 3;
	});
	I.b2JointDef = function () {};
	I.prototype.b2JointDef = function () {
		this.type = B.e_unknownJoint;
		this.bodyB = this.bodyA = this.userData = null;
		this.collideConnected = !1;
	};
	D.b2JointEdge = function () {};
	Box2D.inherit(t, Box2D.Dynamics.Joints.b2Joint);
	t.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	t.b2LineJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_localXAxis1 = new e();
		this.m_localYAxis1 = new e();
		this.m_axis = new e();
		this.m_perp = new e();
		this.m_K = new c();
		this.m_impulse = new e();
	};
	t.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	t.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	t.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(
			b *
				(this.m_impulse.x * this.m_perp.x +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
			b *
				(this.m_impulse.x * this.m_perp.y +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y)
		);
	};
	t.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.y;
	};
	t.prototype.GetJointTranslation = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d = b.GetWorldPoint(this.m_localAnchor1),
			e = c.GetWorldPoint(this.m_localAnchor2),
			c = e.x - d.x,
			d = e.y - d.y,
			b = b.GetWorldVector(this.m_localXAxis1);
		return b.x * c + b.y * d;
	};
	t.prototype.GetJointSpeed = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
			g = d.col1.x * e + d.col2.x * f,
			f = d.col1.y * e + d.col2.y * f,
			e = g;
		d = c.m_xf.R;
		var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			g = d.col1.x * j + d.col2.x * l,
			l = d.col1.y * j + d.col2.y * l,
			j = g;
		d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
		var g = c.m_sweep.c.y + l - (b.m_sweep.c.y + f),
			m = b.GetWorldVector(this.m_localXAxis1),
			n = b.m_linearVelocity,
			x = c.m_linearVelocity,
			b = b.m_angularVelocity,
			c = c.m_angularVelocity;
		return (
			d * -b * m.y +
			g * b * m.x +
			(m.x * (x.x + -c * l - n.x - -b * f) +
				m.y * (x.y + c * j - n.y - b * e))
		);
	};
	t.prototype.IsLimitEnabled = function () {
		return this.m_enableLimit;
	};
	t.prototype.EnableLimit = function (b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableLimit = b;
	};
	t.prototype.GetLowerLimit = function () {
		return this.m_lowerTranslation;
	};
	t.prototype.GetUpperLimit = function () {
		return this.m_upperTranslation;
	};
	t.prototype.SetLimits = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_lowerTranslation = b;
		this.m_upperTranslation = c;
	};
	t.prototype.IsMotorEnabled = function () {
		return this.m_enableMotor;
	};
	t.prototype.EnableMotor = function (b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableMotor = b;
	};
	t.prototype.SetMotorSpeed = function (b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b;
	};
	t.prototype.GetMotorSpeed = function () {
		return this.m_motorSpeed;
	};
	t.prototype.SetMaxMotorForce = function (b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_maxMotorForce = b;
	};
	t.prototype.GetMaxMotorForce = function () {
		return this.m_maxMotorForce;
	};
	t.prototype.GetMotorForce = function () {
		return this.m_motorImpulse;
	};
	t.prototype.b2LineJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_localXAxis1.SetV(b.localAxisA);
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		this.m_impulse.SetZero();
		this.m_motorImpulse = this.m_motorMass = 0;
		this.m_lowerTranslation = b.lowerTranslation;
		this.m_upperTranslation = b.upperTranslation;
		this.m_maxMotorForce = b.maxMotorForce;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit;
		this.m_axis.SetZero();
		this.m_perp.SetZero();
	};
	t.prototype.InitVelocityConstraints = function (c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g,
			j = 0;
		this.m_localCenterA.SetV(d.GetLocalCenter());
		this.m_localCenterB.SetV(e.GetLocalCenter());
		var m = d.GetTransform();
		e.GetTransform();
		g = d.m_xf.R;
		var n = this.m_localAnchor1.x - this.m_localCenterA.x,
			l = this.m_localAnchor1.y - this.m_localCenterA.y,
			j = g.col1.x * n + g.col2.x * l,
			l = g.col1.y * n + g.col2.y * l,
			n = j;
		g = e.m_xf.R;
		var s = this.m_localAnchor2.x - this.m_localCenterB.x,
			r = this.m_localAnchor2.y - this.m_localCenterB.y,
			j = g.col1.x * s + g.col2.x * r,
			r = g.col1.y * s + g.col2.y * r,
			s = j;
		g = e.m_sweep.c.x + s - d.m_sweep.c.x - n;
		j = e.m_sweep.c.y + r - d.m_sweep.c.y - l;
		this.m_invMassA = d.m_invMass;
		this.m_invMassB = e.m_invMass;
		this.m_invIA = d.m_invI;
		this.m_invIB = e.m_invI;
		this.m_axis.SetV(f.MulMV(m.R, this.m_localXAxis1));
		this.m_a1 = (g + n) * this.m_axis.y - (j + l) * this.m_axis.x;
		this.m_a2 = s * this.m_axis.y - r * this.m_axis.x;
		this.m_motorMass =
			this.m_invMassA +
			this.m_invMassB +
			this.m_invIA * this.m_a1 * this.m_a1 +
			this.m_invIB * this.m_a2 * this.m_a2;
		this.m_motorMass =
			this.m_motorMass > Number.MIN_VALUE ? 1 / this.m_motorMass : 0;
		this.m_perp.SetV(f.MulMV(m.R, this.m_localYAxis1));
		this.m_s1 = (g + n) * this.m_perp.y - (j + l) * this.m_perp.x;
		this.m_s2 = s * this.m_perp.y - r * this.m_perp.x;
		m = this.m_invMassA;
		n = this.m_invMassB;
		l = this.m_invIA;
		s = this.m_invIB;
		this.m_K.col1.x =
			m + n + l * this.m_s1 * this.m_s1 + s * this.m_s2 * this.m_s2;
		this.m_K.col1.y = l * this.m_s1 * this.m_a1 + s * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y =
			m + n + l * this.m_a1 * this.m_a1 + s * this.m_a2 * this.m_a2;
		this.m_enableLimit
			? ((g = this.m_axis.x * g + this.m_axis.y * j),
			  f.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
			  2 * b.b2_linearSlop
					? (this.m_limitState = B.e_equalLimits)
					: g <= this.m_lowerTranslation
					? this.m_limitState != B.e_atLowerLimit &&
					  ((this.m_limitState = B.e_atLowerLimit),
					  (this.m_impulse.y = 0))
					: g >= this.m_upperTranslation
					? this.m_limitState != B.e_atUpperLimit &&
					  ((this.m_limitState = B.e_atUpperLimit),
					  (this.m_impulse.y = 0))
					: ((this.m_limitState = B.e_inactiveLimit),
					  (this.m_impulse.y = 0)))
			: (this.m_limitState = B.e_inactiveLimit);
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		c.warmStarting
			? ((this.m_impulse.x *= c.dtRatio),
			  (this.m_impulse.y *= c.dtRatio),
			  (this.m_motorImpulse *= c.dtRatio),
			  (c =
					this.m_impulse.x * this.m_perp.x +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_axis.x),
			  (g =
					this.m_impulse.x * this.m_perp.y +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_axis.y),
			  (j =
					this.m_impulse.x * this.m_s1 +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_a1),
			  (m =
					this.m_impulse.x * this.m_s2 +
					(this.m_motorImpulse + this.m_impulse.y) * this.m_a2),
			  (d.m_linearVelocity.x -= this.m_invMassA * c),
			  (d.m_linearVelocity.y -= this.m_invMassA * g),
			  (d.m_angularVelocity -= this.m_invIA * j),
			  (e.m_linearVelocity.x += this.m_invMassB * c),
			  (e.m_linearVelocity.y += this.m_invMassB * g),
			  (e.m_angularVelocity += this.m_invIB * m))
			: (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
	};
	t.prototype.SolveVelocityConstraints = function (b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			g = c.m_linearVelocity,
			j = c.m_angularVelocity,
			m = d.m_linearVelocity,
			n = d.m_angularVelocity,
			l = 0,
			s = 0,
			r = 0,
			x = 0;
		this.m_enableMotor &&
			this.m_limitState != B.e_equalLimits &&
			((x =
				this.m_motorMass *
				(this.m_motorSpeed -
					(this.m_axis.x * (m.x - g.x) +
						this.m_axis.y * (m.y - g.y) +
						this.m_a2 * n -
						this.m_a1 * j))),
			(l = this.m_motorImpulse),
			(s = b.dt * this.m_maxMotorForce),
			(this.m_motorImpulse = f.Clamp(this.m_motorImpulse + x, -s, s)),
			(x = this.m_motorImpulse - l),
			(l = x * this.m_axis.x),
			(s = x * this.m_axis.y),
			(r = x * this.m_a1),
			(x *= this.m_a2),
			(g.x -= this.m_invMassA * l),
			(g.y -= this.m_invMassA * s),
			(j -= this.m_invIA * r),
			(m.x += this.m_invMassB * l),
			(m.y += this.m_invMassB * s),
			(n += this.m_invIB * x));
		s =
			this.m_perp.x * (m.x - g.x) +
			this.m_perp.y * (m.y - g.y) +
			this.m_s2 * n -
			this.m_s1 * j;
		this.m_enableLimit && this.m_limitState != B.e_inactiveLimit
			? ((r =
					this.m_axis.x * (m.x - g.x) +
					this.m_axis.y * (m.y - g.y) +
					this.m_a2 * n -
					this.m_a1 * j),
			  (l = this.m_impulse.Copy()),
			  (b = this.m_K.Solve(new e(), -s, -r)),
			  this.m_impulse.Add(b),
			  this.m_limitState == B.e_atLowerLimit
					? (this.m_impulse.y = f.Max(this.m_impulse.y, 0))
					: this.m_limitState == B.e_atUpperLimit &&
					  (this.m_impulse.y = f.Min(this.m_impulse.y, 0)),
			  (s = -s - (this.m_impulse.y - l.y) * this.m_K.col2.x),
			  (r = 0 != this.m_K.col1.x ? s / this.m_K.col1.x + l.x : l.x),
			  (this.m_impulse.x = r),
			  (b.x = this.m_impulse.x - l.x),
			  (b.y = this.m_impulse.y - l.y),
			  (l = b.x * this.m_perp.x + b.y * this.m_axis.x),
			  (s = b.x * this.m_perp.y + b.y * this.m_axis.y),
			  (r = b.x * this.m_s1 + b.y * this.m_a1),
			  (x = b.x * this.m_s2 + b.y * this.m_a2))
			: ((b = 0 != this.m_K.col1.x ? -s / this.m_K.col1.x : 0),
			  (this.m_impulse.x += b),
			  (l = b * this.m_perp.x),
			  (s = b * this.m_perp.y),
			  (r = b * this.m_s1),
			  (x = b * this.m_s2));
		g.x -= this.m_invMassA * l;
		g.y -= this.m_invMassA * s;
		j -= this.m_invIA * r;
		m.x += this.m_invMassB * l;
		m.y += this.m_invMassB * s;
		n += this.m_invIB * x;
		c.m_linearVelocity.SetV(g);
		c.m_angularVelocity = j;
		d.m_linearVelocity.SetV(m);
		d.m_angularVelocity = n;
	};
	t.prototype.SolvePositionConstraints = function () {
		var d = this.m_bodyA,
			g = this.m_bodyB,
			j = d.m_sweep.c,
			m = d.m_sweep.a,
			n = g.m_sweep.c,
			r = g.m_sweep.a,
			t,
			l = 0,
			s = 0,
			y = 0,
			x = 0,
			z = 0,
			B = 0,
			s = !1,
			A = 0,
			D = c.FromAngle(m),
			y = c.FromAngle(r);
		t = D;
		var B = this.m_localAnchor1.x - this.m_localCenterA.x,
			E = this.m_localAnchor1.y - this.m_localCenterA.y,
			l = t.col1.x * B + t.col2.x * E,
			E = t.col1.y * B + t.col2.y * E,
			B = l;
		t = y;
		y = this.m_localAnchor2.x - this.m_localCenterB.x;
		x = this.m_localAnchor2.y - this.m_localCenterB.y;
		l = t.col1.x * y + t.col2.x * x;
		x = t.col1.y * y + t.col2.y * x;
		y = l;
		t = n.x + y - j.x - B;
		l = n.y + x - j.y - E;
		if (this.m_enableLimit) {
			this.m_axis = f.MulMV(D, this.m_localXAxis1);
			this.m_a1 = (t + B) * this.m_axis.y - (l + E) * this.m_axis.x;
			this.m_a2 = y * this.m_axis.y - x * this.m_axis.x;
			var G = this.m_axis.x * t + this.m_axis.y * l;
			f.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
			2 * b.b2_linearSlop
				? ((A = f.Clamp(
						G,
						-b.b2_maxLinearCorrection,
						b.b2_maxLinearCorrection
				  )),
				  (z = f.Abs(G)),
				  (s = !0))
				: G <= this.m_lowerTranslation
				? ((A = f.Clamp(
						G - this.m_lowerTranslation + b.b2_linearSlop,
						-b.b2_maxLinearCorrection,
						0
				  )),
				  (z = this.m_lowerTranslation - G),
				  (s = !0))
				: G >= this.m_upperTranslation &&
				  ((A = f.Clamp(
						G - this.m_upperTranslation + b.b2_linearSlop,
						0,
						b.b2_maxLinearCorrection
				  )),
				  (z = G - this.m_upperTranslation),
				  (s = !0));
		}
		this.m_perp = f.MulMV(D, this.m_localYAxis1);
		this.m_s1 = (t + B) * this.m_perp.y - (l + E) * this.m_perp.x;
		this.m_s2 = y * this.m_perp.y - x * this.m_perp.x;
		D = new e();
		E = this.m_perp.x * t + this.m_perp.y * l;
		z = f.Max(z, f.Abs(E));
		B = 0;
		s
			? ((s = this.m_invMassA),
			  (y = this.m_invMassB),
			  (x = this.m_invIA),
			  (t = this.m_invIB),
			  (this.m_K.col1.x =
					s +
					y +
					x * this.m_s1 * this.m_s1 +
					t * this.m_s2 * this.m_s2),
			  (this.m_K.col1.y =
					x * this.m_s1 * this.m_a1 + t * this.m_s2 * this.m_a2),
			  (this.m_K.col2.x = this.m_K.col1.y),
			  (this.m_K.col2.y =
					s +
					y +
					x * this.m_a1 * this.m_a1 +
					t * this.m_a2 * this.m_a2),
			  this.m_K.Solve(D, -E, -A))
			: ((s = this.m_invMassA),
			  (y = this.m_invMassB),
			  (x = this.m_invIA),
			  (t = this.m_invIB),
			  (A =
					s +
					y +
					x * this.m_s1 * this.m_s1 +
					t * this.m_s2 * this.m_s2),
			  (D.x = 0 != A ? -E / A : 0),
			  (D.y = 0));
		A = D.x * this.m_perp.x + D.y * this.m_axis.x;
		s = D.x * this.m_perp.y + D.y * this.m_axis.y;
		E = D.x * this.m_s1 + D.y * this.m_a1;
		D = D.x * this.m_s2 + D.y * this.m_a2;
		j.x -= this.m_invMassA * A;
		j.y -= this.m_invMassA * s;
		m -= this.m_invIA * E;
		n.x += this.m_invMassB * A;
		n.y += this.m_invMassB * s;
		r += this.m_invIB * D;
		d.m_sweep.a = m;
		g.m_sweep.a = r;
		d.SynchronizeTransform();
		g.SynchronizeTransform();
		return z <= b.b2_linearSlop && B <= b.b2_angularSlop;
	};
	Box2D.inherit(G, Box2D.Dynamics.Joints.b2JointDef);
	G.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	G.b2LineJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
		this.localAxisA = new e();
	};
	G.prototype.b2LineJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_lineJoint;
		this.localAxisA.Set(1, 0);
		this.enableLimit = !1;
		this.upperTranslation = this.lowerTranslation = 0;
		this.enableMotor = !1;
		this.motorSpeed = this.maxMotorForce = 0;
	};
	G.prototype.Initialize = function (b, c, d, e) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.localAxisA = this.bodyA.GetLocalVector(e);
	};
	Box2D.inherit(E, Box2D.Dynamics.Joints.b2Joint);
	E.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	E.b2MouseJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.K = new c();
		this.K1 = new c();
		this.K2 = new c();
		this.m_localAnchor = new e();
		this.m_target = new e();
		this.m_impulse = new e();
		this.m_mass = new c();
		this.m_C = new e();
	};
	E.prototype.GetAnchorA = function () {
		return this.m_target;
	};
	E.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor);
	};
	E.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	E.prototype.GetReactionTorque = function () {
		return 0;
	};
	E.prototype.GetTarget = function () {
		return this.m_target;
	};
	E.prototype.SetTarget = function (b) {
		!1 == this.m_bodyB.IsAwake() && this.m_bodyB.SetAwake(!0);
		this.m_target = b;
	};
	E.prototype.GetMaxForce = function () {
		return this.m_maxForce;
	};
	E.prototype.SetMaxForce = function (b) {
		void 0 === b && (b = 0);
		this.m_maxForce = b;
	};
	E.prototype.GetFrequency = function () {
		return this.m_frequencyHz;
	};
	E.prototype.SetFrequency = function (b) {
		void 0 === b && (b = 0);
		this.m_frequencyHz = b;
	};
	E.prototype.GetDampingRatio = function () {
		return this.m_dampingRatio;
	};
	E.prototype.SetDampingRatio = function (b) {
		void 0 === b && (b = 0);
		this.m_dampingRatio = b;
	};
	E.prototype.b2MouseJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_target.SetV(b.target);
		var c = this.m_target.x - this.m_bodyB.m_xf.position.x,
			d = this.m_target.y - this.m_bodyB.m_xf.position.y,
			e = this.m_bodyB.m_xf.R;
		this.m_localAnchor.x = c * e.col1.x + d * e.col1.y;
		this.m_localAnchor.y = c * e.col2.x + d * e.col2.y;
		this.m_maxForce = b.maxForce;
		this.m_impulse.SetZero();
		this.m_frequencyHz = b.frequencyHz;
		this.m_dampingRatio = b.dampingRatio;
		this.m_gamma = this.m_beta = 0;
	};
	E.prototype.InitVelocityConstraints = function (b) {
		var c = this.m_bodyB,
			d = c.GetMass(),
			e = 2 * Math.PI * this.m_frequencyHz,
			f = d * e * e;
		this.m_gamma = b.dt * (2 * d * this.m_dampingRatio * e + b.dt * f);
		this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0;
		this.m_beta = b.dt * f * this.m_gamma;
		var f = c.m_xf.R,
			d = this.m_localAnchor.x - c.m_sweep.localCenter.x,
			e = this.m_localAnchor.y - c.m_sweep.localCenter.y,
			g = f.col1.x * d + f.col2.x * e,
			e = f.col1.y * d + f.col2.y * e,
			d = g,
			f = c.m_invMass,
			g = c.m_invI;
		this.K1.col1.x = f;
		this.K1.col2.x = 0;
		this.K1.col1.y = 0;
		this.K1.col2.y = f;
		this.K2.col1.x = g * e * e;
		this.K2.col2.x = -g * d * e;
		this.K2.col1.y = -g * d * e;
		this.K2.col2.y = g * d * d;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.col1.x += this.m_gamma;
		this.K.col2.y += this.m_gamma;
		this.K.GetInverse(this.m_mass);
		this.m_C.x = c.m_sweep.c.x + d - this.m_target.x;
		this.m_C.y = c.m_sweep.c.y + e - this.m_target.y;
		c.m_angularVelocity *= 0.98;
		this.m_impulse.x *= b.dtRatio;
		this.m_impulse.y *= b.dtRatio;
		c.m_linearVelocity.x += f * this.m_impulse.x;
		c.m_linearVelocity.y += f * this.m_impulse.y;
		c.m_angularVelocity +=
			g * (d * this.m_impulse.y - e * this.m_impulse.x);
	};
	E.prototype.SolveVelocityConstraints = function (b) {
		var c = this.m_bodyB,
			d,
			e = 0,
			f = 0;
		d = c.m_xf.R;
		var g = this.m_localAnchor.x - c.m_sweep.localCenter.x,
			j = this.m_localAnchor.y - c.m_sweep.localCenter.y,
			e = d.col1.x * g + d.col2.x * j,
			j = d.col1.y * g + d.col2.y * j,
			g = e,
			e = c.m_linearVelocity.x + -c.m_angularVelocity * j,
			l = c.m_linearVelocity.y + c.m_angularVelocity * g;
		d = this.m_mass;
		e = e + this.m_beta * this.m_C.x + this.m_gamma * this.m_impulse.x;
		f = l + this.m_beta * this.m_C.y + this.m_gamma * this.m_impulse.y;
		l = -(d.col1.x * e + d.col2.x * f);
		f = -(d.col1.y * e + d.col2.y * f);
		d = this.m_impulse.x;
		e = this.m_impulse.y;
		this.m_impulse.x += l;
		this.m_impulse.y += f;
		b = b.dt * this.m_maxForce;
		this.m_impulse.LengthSquared() > b * b &&
			this.m_impulse.Multiply(b / this.m_impulse.Length());
		l = this.m_impulse.x - d;
		f = this.m_impulse.y - e;
		c.m_linearVelocity.x += c.m_invMass * l;
		c.m_linearVelocity.y += c.m_invMass * f;
		c.m_angularVelocity += c.m_invI * (g * f - j * l);
	};
	E.prototype.SolvePositionConstraints = function () {
		return !0;
	};
	Box2D.inherit(L, Box2D.Dynamics.Joints.b2JointDef);
	L.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	L.b2MouseJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.target = new e();
	};
	L.prototype.b2MouseJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_mouseJoint;
		this.maxForce = 0;
		this.frequencyHz = 5;
		this.dampingRatio = 0.7;
	};
	Box2D.inherit(M, Box2D.Dynamics.Joints.b2Joint);
	M.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	M.b2PrismaticJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_localXAxis1 = new e();
		this.m_localYAxis1 = new e();
		this.m_axis = new e();
		this.m_perp = new e();
		this.m_K = new d();
		this.m_impulse = new j();
	};
	M.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	M.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	M.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(
			b *
				(this.m_impulse.x * this.m_perp.x +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
			b *
				(this.m_impulse.x * this.m_perp.y +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y)
		);
	};
	M.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.y;
	};
	M.prototype.GetJointTranslation = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d = b.GetWorldPoint(this.m_localAnchor1),
			e = c.GetWorldPoint(this.m_localAnchor2),
			c = e.x - d.x,
			d = e.y - d.y,
			b = b.GetWorldVector(this.m_localXAxis1);
		return b.x * c + b.y * d;
	};
	M.prototype.GetJointSpeed = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			f = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
			g = d.col1.x * e + d.col2.x * f,
			f = d.col1.y * e + d.col2.y * f,
			e = g;
		d = c.m_xf.R;
		var j = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			g = d.col1.x * j + d.col2.x * l,
			l = d.col1.y * j + d.col2.y * l,
			j = g;
		d = c.m_sweep.c.x + j - (b.m_sweep.c.x + e);
		var g = c.m_sweep.c.y + l - (b.m_sweep.c.y + f),
			m = b.GetWorldVector(this.m_localXAxis1),
			n = b.m_linearVelocity,
			x = c.m_linearVelocity,
			b = b.m_angularVelocity,
			c = c.m_angularVelocity;
		return (
			d * -b * m.y +
			g * b * m.x +
			(m.x * (x.x + -c * l - n.x - -b * f) +
				m.y * (x.y + c * j - n.y - b * e))
		);
	};
	M.prototype.IsLimitEnabled = function () {
		return this.m_enableLimit;
	};
	M.prototype.EnableLimit = function (b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableLimit = b;
	};
	M.prototype.GetLowerLimit = function () {
		return this.m_lowerTranslation;
	};
	M.prototype.GetUpperLimit = function () {
		return this.m_upperTranslation;
	};
	M.prototype.SetLimits = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_lowerTranslation = b;
		this.m_upperTranslation = c;
	};
	M.prototype.IsMotorEnabled = function () {
		return this.m_enableMotor;
	};
	M.prototype.EnableMotor = function (b) {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_enableMotor = b;
	};
	M.prototype.SetMotorSpeed = function (b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b;
	};
	M.prototype.GetMotorSpeed = function () {
		return this.m_motorSpeed;
	};
	M.prototype.SetMaxMotorForce = function (b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_maxMotorForce = b;
	};
	M.prototype.GetMotorForce = function () {
		return this.m_motorImpulse;
	};
	M.prototype.b2PrismaticJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_localXAxis1.SetV(b.localAxisA);
		this.m_localYAxis1.x = -this.m_localXAxis1.y;
		this.m_localYAxis1.y = this.m_localXAxis1.x;
		this.m_refAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_motorImpulse = this.m_motorMass = 0;
		this.m_lowerTranslation = b.lowerTranslation;
		this.m_upperTranslation = b.upperTranslation;
		this.m_maxMotorForce = b.maxMotorForce;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit;
		this.m_axis.SetZero();
		this.m_perp.SetZero();
	};
	M.prototype.InitVelocityConstraints = function (c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g,
			j = 0;
		this.m_localCenterA.SetV(d.GetLocalCenter());
		this.m_localCenterB.SetV(e.GetLocalCenter());
		var m = d.GetTransform();
		e.GetTransform();
		g = d.m_xf.R;
		var n = this.m_localAnchor1.x - this.m_localCenterA.x,
			l = this.m_localAnchor1.y - this.m_localCenterA.y,
			j = g.col1.x * n + g.col2.x * l,
			l = g.col1.y * n + g.col2.y * l,
			n = j;
		g = e.m_xf.R;
		var s = this.m_localAnchor2.x - this.m_localCenterB.x,
			r = this.m_localAnchor2.y - this.m_localCenterB.y,
			j = g.col1.x * s + g.col2.x * r,
			r = g.col1.y * s + g.col2.y * r,
			s = j;
		g = e.m_sweep.c.x + s - d.m_sweep.c.x - n;
		j = e.m_sweep.c.y + r - d.m_sweep.c.y - l;
		this.m_invMassA = d.m_invMass;
		this.m_invMassB = e.m_invMass;
		this.m_invIA = d.m_invI;
		this.m_invIB = e.m_invI;
		this.m_axis.SetV(f.MulMV(m.R, this.m_localXAxis1));
		this.m_a1 = (g + n) * this.m_axis.y - (j + l) * this.m_axis.x;
		this.m_a2 = s * this.m_axis.y - r * this.m_axis.x;
		this.m_motorMass =
			this.m_invMassA +
			this.m_invMassB +
			this.m_invIA * this.m_a1 * this.m_a1 +
			this.m_invIB * this.m_a2 * this.m_a2;
		this.m_motorMass > Number.MIN_VALUE &&
			(this.m_motorMass = 1 / this.m_motorMass);
		this.m_perp.SetV(f.MulMV(m.R, this.m_localYAxis1));
		this.m_s1 = (g + n) * this.m_perp.y - (j + l) * this.m_perp.x;
		this.m_s2 = s * this.m_perp.y - r * this.m_perp.x;
		m = this.m_invMassA;
		n = this.m_invMassB;
		l = this.m_invIA;
		s = this.m_invIB;
		this.m_K.col1.x =
			m + n + l * this.m_s1 * this.m_s1 + s * this.m_s2 * this.m_s2;
		this.m_K.col1.y = l * this.m_s1 + s * this.m_s2;
		this.m_K.col1.z = l * this.m_s1 * this.m_a1 + s * this.m_s2 * this.m_a2;
		this.m_K.col2.x = this.m_K.col1.y;
		this.m_K.col2.y = l + s;
		this.m_K.col2.z = l * this.m_a1 + s * this.m_a2;
		this.m_K.col3.x = this.m_K.col1.z;
		this.m_K.col3.y = this.m_K.col2.z;
		this.m_K.col3.z =
			m + n + l * this.m_a1 * this.m_a1 + s * this.m_a2 * this.m_a2;
		this.m_enableLimit
			? ((g = this.m_axis.x * g + this.m_axis.y * j),
			  f.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
			  2 * b.b2_linearSlop
					? (this.m_limitState = B.e_equalLimits)
					: g <= this.m_lowerTranslation
					? this.m_limitState != B.e_atLowerLimit &&
					  ((this.m_limitState = B.e_atLowerLimit),
					  (this.m_impulse.z = 0))
					: g >= this.m_upperTranslation
					? this.m_limitState != B.e_atUpperLimit &&
					  ((this.m_limitState = B.e_atUpperLimit),
					  (this.m_impulse.z = 0))
					: ((this.m_limitState = B.e_inactiveLimit),
					  (this.m_impulse.z = 0)))
			: (this.m_limitState = B.e_inactiveLimit);
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		c.warmStarting
			? ((this.m_impulse.x *= c.dtRatio),
			  (this.m_impulse.y *= c.dtRatio),
			  (this.m_motorImpulse *= c.dtRatio),
			  (c =
					this.m_impulse.x * this.m_perp.x +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_axis.x),
			  (g =
					this.m_impulse.x * this.m_perp.y +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_axis.y),
			  (j =
					this.m_impulse.x * this.m_s1 +
					this.m_impulse.y +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_a1),
			  (m =
					this.m_impulse.x * this.m_s2 +
					this.m_impulse.y +
					(this.m_motorImpulse + this.m_impulse.z) * this.m_a2),
			  (d.m_linearVelocity.x -= this.m_invMassA * c),
			  (d.m_linearVelocity.y -= this.m_invMassA * g),
			  (d.m_angularVelocity -= this.m_invIA * j),
			  (e.m_linearVelocity.x += this.m_invMassB * c),
			  (e.m_linearVelocity.y += this.m_invMassB * g),
			  (e.m_angularVelocity += this.m_invIB * m))
			: (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
	};
	M.prototype.SolveVelocityConstraints = function (b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			g = c.m_linearVelocity,
			m = c.m_angularVelocity,
			n = d.m_linearVelocity,
			r = d.m_angularVelocity,
			l = 0,
			s = 0,
			t = 0,
			x = 0;
		this.m_enableMotor &&
			this.m_limitState != B.e_equalLimits &&
			((x =
				this.m_motorMass *
				(this.m_motorSpeed -
					(this.m_axis.x * (n.x - g.x) +
						this.m_axis.y * (n.y - g.y) +
						this.m_a2 * r -
						this.m_a1 * m))),
			(l = this.m_motorImpulse),
			(b = b.dt * this.m_maxMotorForce),
			(this.m_motorImpulse = f.Clamp(this.m_motorImpulse + x, -b, b)),
			(x = this.m_motorImpulse - l),
			(l = x * this.m_axis.x),
			(s = x * this.m_axis.y),
			(t = x * this.m_a1),
			(x *= this.m_a2),
			(g.x -= this.m_invMassA * l),
			(g.y -= this.m_invMassA * s),
			(m -= this.m_invIA * t),
			(n.x += this.m_invMassB * l),
			(n.y += this.m_invMassB * s),
			(r += this.m_invIB * x));
		t =
			this.m_perp.x * (n.x - g.x) +
			this.m_perp.y * (n.y - g.y) +
			this.m_s2 * r -
			this.m_s1 * m;
		s = r - m;
		this.m_enableLimit && this.m_limitState != B.e_inactiveLimit
			? ((b =
					this.m_axis.x * (n.x - g.x) +
					this.m_axis.y * (n.y - g.y) +
					this.m_a2 * r -
					this.m_a1 * m),
			  (l = this.m_impulse.Copy()),
			  (b = this.m_K.Solve33(new j(), -t, -s, -b)),
			  this.m_impulse.Add(b),
			  this.m_limitState == B.e_atLowerLimit
					? (this.m_impulse.z = f.Max(this.m_impulse.z, 0))
					: this.m_limitState == B.e_atUpperLimit &&
					  (this.m_impulse.z = f.Min(this.m_impulse.z, 0)),
			  (t = -t - (this.m_impulse.z - l.z) * this.m_K.col3.x),
			  (s = -s - (this.m_impulse.z - l.z) * this.m_K.col3.y),
			  (s = this.m_K.Solve22(new e(), t, s)),
			  (s.x += l.x),
			  (s.y += l.y),
			  (this.m_impulse.x = s.x),
			  (this.m_impulse.y = s.y),
			  (b.x = this.m_impulse.x - l.x),
			  (b.y = this.m_impulse.y - l.y),
			  (b.z = this.m_impulse.z - l.z),
			  (l = b.x * this.m_perp.x + b.z * this.m_axis.x),
			  (s = b.x * this.m_perp.y + b.z * this.m_axis.y),
			  (t = b.x * this.m_s1 + b.y + b.z * this.m_a1),
			  (x = b.x * this.m_s2 + b.y + b.z * this.m_a2))
			: ((b = this.m_K.Solve22(new e(), -t, -s)),
			  (this.m_impulse.x += b.x),
			  (this.m_impulse.y += b.y),
			  (l = b.x * this.m_perp.x),
			  (s = b.x * this.m_perp.y),
			  (t = b.x * this.m_s1 + b.y),
			  (x = b.x * this.m_s2 + b.y));
		g.x -= this.m_invMassA * l;
		g.y -= this.m_invMassA * s;
		m -= this.m_invIA * t;
		n.x += this.m_invMassB * l;
		n.y += this.m_invMassB * s;
		r += this.m_invIB * x;
		c.m_linearVelocity.SetV(g);
		c.m_angularVelocity = m;
		d.m_linearVelocity.SetV(n);
		d.m_angularVelocity = r;
	};
	M.prototype.SolvePositionConstraints = function () {
		var d = this.m_bodyA,
			g = this.m_bodyB,
			m = d.m_sweep.c,
			n = d.m_sweep.a,
			r = g.m_sweep.c,
			t = g.m_sweep.a,
			y,
			l = 0,
			s = 0,
			z = 0,
			x = 0,
			B = 0,
			s = !1,
			A = 0,
			D = c.FromAngle(n),
			E = c.FromAngle(t);
		y = D;
		var B = this.m_localAnchor1.x - this.m_localCenterA.x,
			G = this.m_localAnchor1.y - this.m_localCenterA.y,
			l = y.col1.x * B + y.col2.x * G,
			G = y.col1.y * B + y.col2.y * G,
			B = l;
		y = E;
		E = this.m_localAnchor2.x - this.m_localCenterB.x;
		z = this.m_localAnchor2.y - this.m_localCenterB.y;
		l = y.col1.x * E + y.col2.x * z;
		z = y.col1.y * E + y.col2.y * z;
		E = l;
		y = r.x + E - m.x - B;
		l = r.y + z - m.y - G;
		if (this.m_enableLimit) {
			this.m_axis = f.MulMV(D, this.m_localXAxis1);
			this.m_a1 = (y + B) * this.m_axis.y - (l + G) * this.m_axis.x;
			this.m_a2 = E * this.m_axis.y - z * this.m_axis.x;
			var I = this.m_axis.x * y + this.m_axis.y * l;
			f.Abs(this.m_upperTranslation - this.m_lowerTranslation) <
			2 * b.b2_linearSlop
				? ((A = f.Clamp(
						I,
						-b.b2_maxLinearCorrection,
						b.b2_maxLinearCorrection
				  )),
				  (x = f.Abs(I)),
				  (s = !0))
				: I <= this.m_lowerTranslation
				? ((A = f.Clamp(
						I - this.m_lowerTranslation + b.b2_linearSlop,
						-b.b2_maxLinearCorrection,
						0
				  )),
				  (x = this.m_lowerTranslation - I),
				  (s = !0))
				: I >= this.m_upperTranslation &&
				  ((A = f.Clamp(
						I - this.m_upperTranslation + b.b2_linearSlop,
						0,
						b.b2_maxLinearCorrection
				  )),
				  (x = I - this.m_upperTranslation),
				  (s = !0));
		}
		this.m_perp = f.MulMV(D, this.m_localYAxis1);
		this.m_s1 = (y + B) * this.m_perp.y - (l + G) * this.m_perp.x;
		this.m_s2 = E * this.m_perp.y - z * this.m_perp.x;
		D = new j();
		G = this.m_perp.x * y + this.m_perp.y * l;
		E = t - n - this.m_refAngle;
		x = f.Max(x, f.Abs(G));
		B = f.Abs(E);
		s
			? ((s = this.m_invMassA),
			  (z = this.m_invMassB),
			  (y = this.m_invIA),
			  (l = this.m_invIB),
			  (this.m_K.col1.x =
					s +
					z +
					y * this.m_s1 * this.m_s1 +
					l * this.m_s2 * this.m_s2),
			  (this.m_K.col1.y = y * this.m_s1 + l * this.m_s2),
			  (this.m_K.col1.z =
					y * this.m_s1 * this.m_a1 + l * this.m_s2 * this.m_a2),
			  (this.m_K.col2.x = this.m_K.col1.y),
			  (this.m_K.col2.y = y + l),
			  (this.m_K.col2.z = y * this.m_a1 + l * this.m_a2),
			  (this.m_K.col3.x = this.m_K.col1.z),
			  (this.m_K.col3.y = this.m_K.col2.z),
			  (this.m_K.col3.z =
					s +
					z +
					y * this.m_a1 * this.m_a1 +
					l * this.m_a2 * this.m_a2),
			  this.m_K.Solve33(D, -G, -E, -A))
			: ((s = this.m_invMassA),
			  (z = this.m_invMassB),
			  (y = this.m_invIA),
			  (l = this.m_invIB),
			  (A = y * this.m_s1 + l * this.m_s2),
			  (I = y + l),
			  this.m_K.col1.Set(
					s +
						z +
						y * this.m_s1 * this.m_s1 +
						l * this.m_s2 * this.m_s2,
					A,
					0
			  ),
			  this.m_K.col2.Set(A, I, 0),
			  (A = this.m_K.Solve22(new e(), -G, -E)),
			  (D.x = A.x),
			  (D.y = A.y),
			  (D.z = 0));
		A = D.x * this.m_perp.x + D.z * this.m_axis.x;
		s = D.x * this.m_perp.y + D.z * this.m_axis.y;
		G = D.x * this.m_s1 + D.y + D.z * this.m_a1;
		D = D.x * this.m_s2 + D.y + D.z * this.m_a2;
		m.x -= this.m_invMassA * A;
		m.y -= this.m_invMassA * s;
		n -= this.m_invIA * G;
		r.x += this.m_invMassB * A;
		r.y += this.m_invMassB * s;
		t += this.m_invIB * D;
		d.m_sweep.a = n;
		g.m_sweep.a = t;
		d.SynchronizeTransform();
		g.SynchronizeTransform();
		return x <= b.b2_linearSlop && B <= b.b2_angularSlop;
	};
	Box2D.inherit(Q, Box2D.Dynamics.Joints.b2JointDef);
	Q.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	Q.b2PrismaticJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
		this.localAxisA = new e();
	};
	Q.prototype.b2PrismaticJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_prismaticJoint;
		this.localAxisA.Set(1, 0);
		this.referenceAngle = 0;
		this.enableLimit = !1;
		this.upperTranslation = this.lowerTranslation = 0;
		this.enableMotor = !1;
		this.motorSpeed = this.maxMotorForce = 0;
	};
	Q.prototype.Initialize = function (b, c, d, e) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.localAxisA = this.bodyA.GetLocalVector(e);
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
	Box2D.inherit(J, Box2D.Dynamics.Joints.b2Joint);
	J.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	J.b2PulleyJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_groundAnchor1 = new e();
		this.m_groundAnchor2 = new e();
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_u1 = new e();
		this.m_u2 = new e();
	};
	J.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	J.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	J.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(
			b * this.m_impulse * this.m_u2.x,
			b * this.m_impulse * this.m_u2.y
		);
	};
	J.prototype.GetReactionTorque = function () {
		return 0;
	};
	J.prototype.GetGroundAnchorA = function () {
		var b = this.m_ground.m_xf.position.Copy();
		b.Add(this.m_groundAnchor1);
		return b;
	};
	J.prototype.GetGroundAnchorB = function () {
		var b = this.m_ground.m_xf.position.Copy();
		b.Add(this.m_groundAnchor2);
		return b;
	};
	J.prototype.GetLength1 = function () {
		var b = this.m_bodyA.GetWorldPoint(this.m_localAnchor1),
			c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
			b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor1.y);
		return Math.sqrt(c * c + b * b);
	};
	J.prototype.GetLength2 = function () {
		var b = this.m_bodyB.GetWorldPoint(this.m_localAnchor2),
			c = b.x - (this.m_ground.m_xf.position.x + this.m_groundAnchor2.x),
			b = b.y - (this.m_ground.m_xf.position.y + this.m_groundAnchor2.y);
		return Math.sqrt(c * c + b * b);
	};
	J.prototype.GetRatio = function () {
		return this.m_ratio;
	};
	J.prototype.b2PulleyJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_ground = this.m_bodyA.m_world.m_groundBody;
		this.m_groundAnchor1.x =
			b.groundAnchorA.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor1.y =
			b.groundAnchorA.y - this.m_ground.m_xf.position.y;
		this.m_groundAnchor2.x =
			b.groundAnchorB.x - this.m_ground.m_xf.position.x;
		this.m_groundAnchor2.y =
			b.groundAnchorB.y - this.m_ground.m_xf.position.y;
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_ratio = b.ratio;
		this.m_constant = b.lengthA + this.m_ratio * b.lengthB;
		this.m_maxLength1 = f.Min(
			b.maxLengthA,
			this.m_constant - this.m_ratio * J.b2_minPulleyLength
		);
		this.m_maxLength2 = f.Min(
			b.maxLengthB,
			(this.m_constant - J.b2_minPulleyLength) / this.m_ratio
		);
		this.m_limitImpulse2 = this.m_limitImpulse1 = this.m_impulse = 0;
	};
	J.prototype.InitVelocityConstraints = function (c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			f;
		f = d.m_xf.R;
		var g = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			j = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			m = f.col1.x * g + f.col2.x * j,
			j = f.col1.y * g + f.col2.y * j,
			g = m;
		f = e.m_xf.R;
		var l = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			n = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			m = f.col1.x * l + f.col2.x * n,
			n = f.col1.y * l + f.col2.y * n,
			l = m;
		f = e.m_sweep.c.x + l;
		var m = e.m_sweep.c.y + n,
			r = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			x = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y;
		this.m_u1.Set(
			d.m_sweep.c.x +
				g -
				(this.m_ground.m_xf.position.x + this.m_groundAnchor1.x),
			d.m_sweep.c.y +
				j -
				(this.m_ground.m_xf.position.y + this.m_groundAnchor1.y)
		);
		this.m_u2.Set(f - r, m - x);
		f = this.m_u1.Length();
		m = this.m_u2.Length();
		f > b.b2_linearSlop ? this.m_u1.Multiply(1 / f) : this.m_u1.SetZero();
		m > b.b2_linearSlop ? this.m_u2.Multiply(1 / m) : this.m_u2.SetZero();
		0 < this.m_constant - f - this.m_ratio * m
			? ((this.m_state = B.e_inactiveLimit), (this.m_impulse = 0))
			: (this.m_state = B.e_atUpperLimit);
		f < this.m_maxLength1
			? ((this.m_limitState1 = B.e_inactiveLimit),
			  (this.m_limitImpulse1 = 0))
			: (this.m_limitState1 = B.e_atUpperLimit);
		m < this.m_maxLength2
			? ((this.m_limitState2 = B.e_inactiveLimit),
			  (this.m_limitImpulse2 = 0))
			: (this.m_limitState2 = B.e_atUpperLimit);
		f = g * this.m_u1.y - j * this.m_u1.x;
		m = l * this.m_u2.y - n * this.m_u2.x;
		this.m_limitMass1 = d.m_invMass + d.m_invI * f * f;
		this.m_limitMass2 = e.m_invMass + e.m_invI * m * m;
		this.m_pulleyMass =
			this.m_limitMass1 + this.m_ratio * this.m_ratio * this.m_limitMass2;
		this.m_limitMass1 = 1 / this.m_limitMass1;
		this.m_limitMass2 = 1 / this.m_limitMass2;
		this.m_pulleyMass = 1 / this.m_pulleyMass;
		c.warmStarting
			? ((this.m_impulse *= c.dtRatio),
			  (this.m_limitImpulse1 *= c.dtRatio),
			  (this.m_limitImpulse2 *= c.dtRatio),
			  (c = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.x),
			  (f = (-this.m_impulse - this.m_limitImpulse1) * this.m_u1.y),
			  (m =
					(-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
					this.m_u2.x),
			  (r =
					(-this.m_ratio * this.m_impulse - this.m_limitImpulse2) *
					this.m_u2.y),
			  (d.m_linearVelocity.x += d.m_invMass * c),
			  (d.m_linearVelocity.y += d.m_invMass * f),
			  (d.m_angularVelocity += d.m_invI * (g * f - j * c)),
			  (e.m_linearVelocity.x += e.m_invMass * m),
			  (e.m_linearVelocity.y += e.m_invMass * r),
			  (e.m_angularVelocity += e.m_invI * (l * r - n * m)))
			: (this.m_limitImpulse2 =
					this.m_limitImpulse1 =
					this.m_impulse =
						0);
	};
	J.prototype.SolveVelocityConstraints = function () {
		var b = this.m_bodyA,
			c = this.m_bodyB,
			d;
		d = b.m_xf.R;
		var e = this.m_localAnchor1.x - b.m_sweep.localCenter.x,
			g = this.m_localAnchor1.y - b.m_sweep.localCenter.y,
			j = d.col1.x * e + d.col2.x * g,
			g = d.col1.y * e + d.col2.y * g,
			e = j;
		d = c.m_xf.R;
		var m = this.m_localAnchor2.x - c.m_sweep.localCenter.x,
			l = this.m_localAnchor2.y - c.m_sweep.localCenter.y,
			j = d.col1.x * m + d.col2.x * l,
			l = d.col1.y * m + d.col2.y * l,
			m = j,
			n = 0,
			r = 0;
		this.m_state == B.e_atUpperLimit &&
			((d = b.m_linearVelocity.x + -b.m_angularVelocity * g),
			(j = b.m_linearVelocity.y + b.m_angularVelocity * e),
			(n = c.m_linearVelocity.x + -c.m_angularVelocity * l),
			(r = c.m_linearVelocity.y + c.m_angularVelocity * m),
			(d =
				-(this.m_u1.x * d + this.m_u1.y * j) -
				this.m_ratio * (this.m_u2.x * n + this.m_u2.y * r)),
			(r = this.m_pulleyMass * -d),
			(d = this.m_impulse),
			(this.m_impulse = f.Max(0, this.m_impulse + r)),
			(r = this.m_impulse - d),
			(d = -r * this.m_u1.x),
			(j = -r * this.m_u1.y),
			(n = -this.m_ratio * r * this.m_u2.x),
			(r = -this.m_ratio * r * this.m_u2.y),
			(b.m_linearVelocity.x += b.m_invMass * d),
			(b.m_linearVelocity.y += b.m_invMass * j),
			(b.m_angularVelocity += b.m_invI * (e * j - g * d)),
			(c.m_linearVelocity.x += c.m_invMass * n),
			(c.m_linearVelocity.y += c.m_invMass * r),
			(c.m_angularVelocity += c.m_invI * (m * r - l * n)));
		this.m_limitState1 == B.e_atUpperLimit &&
			((d = b.m_linearVelocity.x + -b.m_angularVelocity * g),
			(j = b.m_linearVelocity.y + b.m_angularVelocity * e),
			(d = -(this.m_u1.x * d + this.m_u1.y * j)),
			(r = -this.m_limitMass1 * d),
			(d = this.m_limitImpulse1),
			(this.m_limitImpulse1 = f.Max(0, this.m_limitImpulse1 + r)),
			(r = this.m_limitImpulse1 - d),
			(d = -r * this.m_u1.x),
			(j = -r * this.m_u1.y),
			(b.m_linearVelocity.x += b.m_invMass * d),
			(b.m_linearVelocity.y += b.m_invMass * j),
			(b.m_angularVelocity += b.m_invI * (e * j - g * d)));
		this.m_limitState2 == B.e_atUpperLimit &&
			((n = c.m_linearVelocity.x + -c.m_angularVelocity * l),
			(r = c.m_linearVelocity.y + c.m_angularVelocity * m),
			(d = -(this.m_u2.x * n + this.m_u2.y * r)),
			(r = -this.m_limitMass2 * d),
			(d = this.m_limitImpulse2),
			(this.m_limitImpulse2 = f.Max(0, this.m_limitImpulse2 + r)),
			(r = this.m_limitImpulse2 - d),
			(n = -r * this.m_u2.x),
			(r = -r * this.m_u2.y),
			(c.m_linearVelocity.x += c.m_invMass * n),
			(c.m_linearVelocity.y += c.m_invMass * r),
			(c.m_angularVelocity += c.m_invI * (m * r - l * n)));
	};
	J.prototype.SolvePositionConstraints = function () {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e,
			g = this.m_ground.m_xf.position.x + this.m_groundAnchor1.x,
			j = this.m_ground.m_xf.position.y + this.m_groundAnchor1.y,
			m = this.m_ground.m_xf.position.x + this.m_groundAnchor2.x,
			n = this.m_ground.m_xf.position.y + this.m_groundAnchor2.y,
			l = 0,
			s = 0,
			r = 0,
			x = 0,
			t = 0,
			y = 0,
			z = 0,
			A = 0;
		this.m_state == B.e_atUpperLimit &&
			((e = c.m_xf.R),
			(l = this.m_localAnchor1.x - c.m_sweep.localCenter.x),
			(s = this.m_localAnchor1.y - c.m_sweep.localCenter.y),
			(t = e.col1.x * l + e.col2.x * s),
			(s = e.col1.y * l + e.col2.y * s),
			(l = t),
			(e = d.m_xf.R),
			(r = this.m_localAnchor2.x - d.m_sweep.localCenter.x),
			(x = this.m_localAnchor2.y - d.m_sweep.localCenter.y),
			(t = e.col1.x * r + e.col2.x * x),
			(x = e.col1.y * r + e.col2.y * x),
			(r = t),
			(e = c.m_sweep.c.x + l),
			(t = c.m_sweep.c.y + s),
			(y = d.m_sweep.c.x + r),
			(z = d.m_sweep.c.y + x),
			this.m_u1.Set(e - g, t - j),
			this.m_u2.Set(y - m, z - n),
			(e = this.m_u1.Length()),
			(t = this.m_u2.Length()),
			e > b.b2_linearSlop
				? this.m_u1.Multiply(1 / e)
				: this.m_u1.SetZero(),
			t > b.b2_linearSlop
				? this.m_u2.Multiply(1 / t)
				: this.m_u2.SetZero(),
			(e = this.m_constant - e - this.m_ratio * t),
			(A = f.Max(A, -e)),
			(e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0)),
			(z = -this.m_pulleyMass * e),
			(e = -z * this.m_u1.x),
			(t = -z * this.m_u1.y),
			(y = -this.m_ratio * z * this.m_u2.x),
			(z = -this.m_ratio * z * this.m_u2.y),
			(c.m_sweep.c.x += c.m_invMass * e),
			(c.m_sweep.c.y += c.m_invMass * t),
			(c.m_sweep.a += c.m_invI * (l * t - s * e)),
			(d.m_sweep.c.x += d.m_invMass * y),
			(d.m_sweep.c.y += d.m_invMass * z),
			(d.m_sweep.a += d.m_invI * (r * z - x * y)),
			c.SynchronizeTransform(),
			d.SynchronizeTransform());
		this.m_limitState1 == B.e_atUpperLimit &&
			((e = c.m_xf.R),
			(l = this.m_localAnchor1.x - c.m_sweep.localCenter.x),
			(s = this.m_localAnchor1.y - c.m_sweep.localCenter.y),
			(t = e.col1.x * l + e.col2.x * s),
			(s = e.col1.y * l + e.col2.y * s),
			(l = t),
			(e = c.m_sweep.c.x + l),
			(t = c.m_sweep.c.y + s),
			this.m_u1.Set(e - g, t - j),
			(e = this.m_u1.Length()),
			e > b.b2_linearSlop
				? ((this.m_u1.x *= 1 / e), (this.m_u1.y *= 1 / e))
				: this.m_u1.SetZero(),
			(e = this.m_maxLength1 - e),
			(A = f.Max(A, -e)),
			(e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0)),
			(z = -this.m_limitMass1 * e),
			(e = -z * this.m_u1.x),
			(t = -z * this.m_u1.y),
			(c.m_sweep.c.x += c.m_invMass * e),
			(c.m_sweep.c.y += c.m_invMass * t),
			(c.m_sweep.a += c.m_invI * (l * t - s * e)),
			c.SynchronizeTransform());
		this.m_limitState2 == B.e_atUpperLimit &&
			((e = d.m_xf.R),
			(r = this.m_localAnchor2.x - d.m_sweep.localCenter.x),
			(x = this.m_localAnchor2.y - d.m_sweep.localCenter.y),
			(t = e.col1.x * r + e.col2.x * x),
			(x = e.col1.y * r + e.col2.y * x),
			(r = t),
			(y = d.m_sweep.c.x + r),
			(z = d.m_sweep.c.y + x),
			this.m_u2.Set(y - m, z - n),
			(t = this.m_u2.Length()),
			t > b.b2_linearSlop
				? ((this.m_u2.x *= 1 / t), (this.m_u2.y *= 1 / t))
				: this.m_u2.SetZero(),
			(e = this.m_maxLength2 - t),
			(A = f.Max(A, -e)),
			(e = f.Clamp(e + b.b2_linearSlop, -b.b2_maxLinearCorrection, 0)),
			(z = -this.m_limitMass2 * e),
			(y = -z * this.m_u2.x),
			(z = -z * this.m_u2.y),
			(d.m_sweep.c.x += d.m_invMass * y),
			(d.m_sweep.c.y += d.m_invMass * z),
			(d.m_sweep.a += d.m_invI * (r * z - x * y)),
			d.SynchronizeTransform());
		return A < b.b2_linearSlop;
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2PulleyJoint.b2_minPulleyLength = 2;
	});
	Box2D.inherit(ea, Box2D.Dynamics.Joints.b2JointDef);
	ea.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	ea.b2PulleyJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.groundAnchorA = new e();
		this.groundAnchorB = new e();
		this.localAnchorA = new e();
		this.localAnchorB = new e();
	};
	ea.prototype.b2PulleyJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_pulleyJoint;
		this.groundAnchorA.Set(-1, 1);
		this.groundAnchorB.Set(1, 1);
		this.localAnchorA.Set(-1, 0);
		this.localAnchorB.Set(1, 0);
		this.maxLengthB = this.lengthB = this.maxLengthA = this.lengthA = 0;
		this.ratio = 1;
		this.collideConnected = !0;
	};
	ea.prototype.Initialize = function (b, c, d, e, f, g, j) {
		void 0 === j && (j = 0);
		this.bodyA = b;
		this.bodyB = c;
		this.groundAnchorA.SetV(d);
		this.groundAnchorB.SetV(e);
		this.localAnchorA = this.bodyA.GetLocalPoint(f);
		this.localAnchorB = this.bodyB.GetLocalPoint(g);
		b = f.x - d.x;
		d = f.y - d.y;
		this.lengthA = Math.sqrt(b * b + d * d);
		d = g.x - e.x;
		e = g.y - e.y;
		this.lengthB = Math.sqrt(d * d + e * e);
		this.ratio = j;
		j = this.lengthA + this.ratio * this.lengthB;
		this.maxLengthA = j - this.ratio * J.b2_minPulleyLength;
		this.maxLengthB = (j - J.b2_minPulleyLength) / this.ratio;
	};
	Box2D.inherit(O, Box2D.Dynamics.Joints.b2Joint);
	O.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	O.b2RevoluteJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.K = new c();
		this.K1 = new c();
		this.K2 = new c();
		this.K3 = new c();
		this.impulse3 = new j();
		this.impulse2 = new e();
		this.reduced = new e();
		this.m_localAnchor1 = new e();
		this.m_localAnchor2 = new e();
		this.m_impulse = new j();
		this.m_mass = new d();
	};
	O.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchor1);
	};
	O.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchor2);
	};
	O.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	O.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.z;
	};
	O.prototype.GetJointAngle = function () {
		return (
			this.m_bodyB.m_sweep.a -
			this.m_bodyA.m_sweep.a -
			this.m_referenceAngle
		);
	};
	O.prototype.GetJointSpeed = function () {
		return this.m_bodyB.m_angularVelocity - this.m_bodyA.m_angularVelocity;
	};
	O.prototype.IsLimitEnabled = function () {
		return this.m_enableLimit;
	};
	O.prototype.EnableLimit = function (b) {
		this.m_enableLimit = b;
	};
	O.prototype.GetLowerLimit = function () {
		return this.m_lowerAngle;
	};
	O.prototype.GetUpperLimit = function () {
		return this.m_upperAngle;
	};
	O.prototype.SetLimits = function (b, c) {
		void 0 === b && (b = 0);
		void 0 === c && (c = 0);
		this.m_lowerAngle = b;
		this.m_upperAngle = c;
	};
	O.prototype.IsMotorEnabled = function () {
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		return this.m_enableMotor;
	};
	O.prototype.EnableMotor = function (b) {
		this.m_enableMotor = b;
	};
	O.prototype.SetMotorSpeed = function (b) {
		void 0 === b && (b = 0);
		this.m_bodyA.SetAwake(!0);
		this.m_bodyB.SetAwake(!0);
		this.m_motorSpeed = b;
	};
	O.prototype.GetMotorSpeed = function () {
		return this.m_motorSpeed;
	};
	O.prototype.SetMaxMotorTorque = function (b) {
		void 0 === b && (b = 0);
		this.m_maxMotorTorque = b;
	};
	O.prototype.GetMotorTorque = function () {
		return this.m_maxMotorTorque;
	};
	O.prototype.b2RevoluteJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchor1.SetV(b.localAnchorA);
		this.m_localAnchor2.SetV(b.localAnchorB);
		this.m_referenceAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_motorImpulse = 0;
		this.m_lowerAngle = b.lowerAngle;
		this.m_upperAngle = b.upperAngle;
		this.m_maxMotorTorque = b.maxMotorTorque;
		this.m_motorSpeed = b.motorSpeed;
		this.m_enableLimit = b.enableLimit;
		this.m_enableMotor = b.enableMotor;
		this.m_limitState = B.e_inactiveLimit;
	};
	O.prototype.InitVelocityConstraints = function (c) {
		var d = this.m_bodyA,
			e = this.m_bodyB,
			g,
			j = 0;
		g = d.m_xf.R;
		var m = this.m_localAnchor1.x - d.m_sweep.localCenter.x,
			n = this.m_localAnchor1.y - d.m_sweep.localCenter.y,
			j = g.col1.x * m + g.col2.x * n,
			n = g.col1.y * m + g.col2.y * n,
			m = j;
		g = e.m_xf.R;
		var l = this.m_localAnchor2.x - e.m_sweep.localCenter.x,
			s = this.m_localAnchor2.y - e.m_sweep.localCenter.y,
			j = g.col1.x * l + g.col2.x * s,
			s = g.col1.y * l + g.col2.y * s,
			l = j;
		g = d.m_invMass;
		var j = e.m_invMass,
			r = d.m_invI,
			x = e.m_invI;
		this.m_mass.col1.x = g + j + n * n * r + s * s * x;
		this.m_mass.col2.x = -n * m * r - s * l * x;
		this.m_mass.col3.x = -n * r - s * x;
		this.m_mass.col1.y = this.m_mass.col2.x;
		this.m_mass.col2.y = g + j + m * m * r + l * l * x;
		this.m_mass.col3.y = m * r + l * x;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = r + x;
		this.m_motorMass = 1 / (r + x);
		!1 == this.m_enableMotor && (this.m_motorImpulse = 0);
		if (this.m_enableLimit) {
			var t = e.m_sweep.a - d.m_sweep.a - this.m_referenceAngle;
			f.Abs(this.m_upperAngle - this.m_lowerAngle) < 2 * b.b2_angularSlop
				? (this.m_limitState = B.e_equalLimits)
				: t <= this.m_lowerAngle
				? (this.m_limitState != B.e_atLowerLimit &&
						(this.m_impulse.z = 0),
				  (this.m_limitState = B.e_atLowerLimit))
				: t >= this.m_upperAngle
				? (this.m_limitState != B.e_atUpperLimit &&
						(this.m_impulse.z = 0),
				  (this.m_limitState = B.e_atUpperLimit))
				: ((this.m_limitState = B.e_inactiveLimit),
				  (this.m_impulse.z = 0));
		} else this.m_limitState = B.e_inactiveLimit;
		c.warmStarting
			? ((this.m_impulse.x *= c.dtRatio),
			  (this.m_impulse.y *= c.dtRatio),
			  (this.m_motorImpulse *= c.dtRatio),
			  (c = this.m_impulse.x),
			  (t = this.m_impulse.y),
			  (d.m_linearVelocity.x -= g * c),
			  (d.m_linearVelocity.y -= g * t),
			  (d.m_angularVelocity -=
					r *
					(m * t - n * c + this.m_motorImpulse + this.m_impulse.z)),
			  (e.m_linearVelocity.x += j * c),
			  (e.m_linearVelocity.y += j * t),
			  (e.m_angularVelocity +=
					x *
					(l * t - s * c + this.m_motorImpulse + this.m_impulse.z)))
			: (this.m_impulse.SetZero(), (this.m_motorImpulse = 0));
	};
	O.prototype.SolveVelocityConstraints = function (b) {
		var c = this.m_bodyA,
			d = this.m_bodyB,
			e = 0,
			g = 0,
			j = 0,
			m = 0,
			l = 0,
			n = c.m_linearVelocity,
			r = c.m_angularVelocity,
			t = d.m_linearVelocity,
			y = d.m_angularVelocity,
			z = c.m_invMass,
			A = d.m_invMass,
			D = c.m_invI,
			E = d.m_invI;
		this.m_enableMotor &&
			this.m_limitState != B.e_equalLimits &&
			((g = this.m_motorMass * -(y - r - this.m_motorSpeed)),
			(j = this.m_motorImpulse),
			(m = b.dt * this.m_maxMotorTorque),
			(this.m_motorImpulse = f.Clamp(this.m_motorImpulse + g, -m, m)),
			(g = this.m_motorImpulse - j),
			(r -= D * g),
			(y += E * g));
		if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
			b = c.m_xf.R;
			g = this.m_localAnchor1.x - c.m_sweep.localCenter.x;
			j = this.m_localAnchor1.y - c.m_sweep.localCenter.y;
			e = b.col1.x * g + b.col2.x * j;
			j = b.col1.y * g + b.col2.y * j;
			g = e;
			b = d.m_xf.R;
			m = this.m_localAnchor2.x - d.m_sweep.localCenter.x;
			l = this.m_localAnchor2.y - d.m_sweep.localCenter.y;
			e = b.col1.x * m + b.col2.x * l;
			l = b.col1.y * m + b.col2.y * l;
			m = e;
			b = t.x + -y * l - n.x - -r * j;
			var G = t.y + y * m - n.y - r * g;
			this.m_mass.Solve33(this.impulse3, -b, -G, -(y - r));
			this.m_limitState == B.e_equalLimits
				? this.m_impulse.Add(this.impulse3)
				: this.m_limitState == B.e_atLowerLimit
				? ((e = this.m_impulse.z + this.impulse3.z),
				  0 > e &&
						(this.m_mass.Solve22(this.reduced, -b, -G),
						(this.impulse3.x = this.reduced.x),
						(this.impulse3.y = this.reduced.y),
						(this.impulse3.z = -this.m_impulse.z),
						(this.m_impulse.x += this.reduced.x),
						(this.m_impulse.y += this.reduced.y),
						(this.m_impulse.z = 0)))
				: this.m_limitState == B.e_atUpperLimit &&
				  ((e = this.m_impulse.z + this.impulse3.z),
				  0 < e &&
						(this.m_mass.Solve22(this.reduced, -b, -G),
						(this.impulse3.x = this.reduced.x),
						(this.impulse3.y = this.reduced.y),
						(this.impulse3.z = -this.m_impulse.z),
						(this.m_impulse.x += this.reduced.x),
						(this.m_impulse.y += this.reduced.y),
						(this.m_impulse.z = 0)));
			n.x -= z * this.impulse3.x;
			n.y -= z * this.impulse3.y;
			r -=
				D *
				(g * this.impulse3.y - j * this.impulse3.x + this.impulse3.z);
			t.x += A * this.impulse3.x;
			t.y += A * this.impulse3.y;
			y +=
				E *
				(m * this.impulse3.y - l * this.impulse3.x + this.impulse3.z);
		} else
			(b = c.m_xf.R),
				(g = this.m_localAnchor1.x - c.m_sweep.localCenter.x),
				(j = this.m_localAnchor1.y - c.m_sweep.localCenter.y),
				(e = b.col1.x * g + b.col2.x * j),
				(j = b.col1.y * g + b.col2.y * j),
				(g = e),
				(b = d.m_xf.R),
				(m = this.m_localAnchor2.x - d.m_sweep.localCenter.x),
				(l = this.m_localAnchor2.y - d.m_sweep.localCenter.y),
				(e = b.col1.x * m + b.col2.x * l),
				(l = b.col1.y * m + b.col2.y * l),
				(m = e),
				this.m_mass.Solve22(
					this.impulse2,
					-(t.x + -y * l - n.x - -r * j),
					-(t.y + y * m - n.y - r * g)
				),
				(this.m_impulse.x += this.impulse2.x),
				(this.m_impulse.y += this.impulse2.y),
				(n.x -= z * this.impulse2.x),
				(n.y -= z * this.impulse2.y),
				(r -= D * (g * this.impulse2.y - j * this.impulse2.x)),
				(t.x += A * this.impulse2.x),
				(t.y += A * this.impulse2.y),
				(y += E * (m * this.impulse2.y - l * this.impulse2.x));
		c.m_linearVelocity.SetV(n);
		c.m_angularVelocity = r;
		d.m_linearVelocity.SetV(t);
		d.m_angularVelocity = y;
	};
	O.prototype.SolvePositionConstraints = function () {
		var c = 0,
			d,
			e = this.m_bodyA,
			g = this.m_bodyB,
			j = 0,
			m = 0,
			n = 0,
			l = 0;
		if (this.m_enableLimit && this.m_limitState != B.e_inactiveLimit) {
			var c = g.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
				s = 0;
			this.m_limitState == B.e_equalLimits
				? ((c = f.Clamp(
						c - this.m_lowerAngle,
						-b.b2_maxAngularCorrection,
						b.b2_maxAngularCorrection
				  )),
				  (s = -this.m_motorMass * c),
				  (j = f.Abs(c)))
				: this.m_limitState == B.e_atLowerLimit
				? ((c -= this.m_lowerAngle),
				  (j = -c),
				  (c = f.Clamp(
						c + b.b2_angularSlop,
						-b.b2_maxAngularCorrection,
						0
				  )),
				  (s = -this.m_motorMass * c))
				: this.m_limitState == B.e_atUpperLimit &&
				  ((j = c -= this.m_upperAngle),
				  (c = f.Clamp(
						c - b.b2_angularSlop,
						0,
						b.b2_maxAngularCorrection
				  )),
				  (s = -this.m_motorMass * c));
			e.m_sweep.a -= e.m_invI * s;
			g.m_sweep.a += g.m_invI * s;
			e.SynchronizeTransform();
			g.SynchronizeTransform();
		}
		d = e.m_xf.R;
		s = this.m_localAnchor1.x - e.m_sweep.localCenter.x;
		c = this.m_localAnchor1.y - e.m_sweep.localCenter.y;
		m = d.col1.x * s + d.col2.x * c;
		c = d.col1.y * s + d.col2.y * c;
		s = m;
		d = g.m_xf.R;
		var r = this.m_localAnchor2.x - g.m_sweep.localCenter.x,
			t = this.m_localAnchor2.y - g.m_sweep.localCenter.y,
			m = d.col1.x * r + d.col2.x * t,
			t = d.col1.y * r + d.col2.y * t,
			r = m,
			n = g.m_sweep.c.x + r - e.m_sweep.c.x - s,
			l = g.m_sweep.c.y + t - e.m_sweep.c.y - c,
			y = n * n + l * l;
		d = Math.sqrt(y);
		var m = e.m_invMass,
			z = g.m_invMass,
			A = e.m_invI,
			D = g.m_invI,
			E = 10 * b.b2_linearSlop;
		y > E * E &&
			((y = 1 / (m + z)),
			(n = y * -n),
			(l = y * -l),
			(e.m_sweep.c.x -= 0.5 * m * n),
			(e.m_sweep.c.y -= 0.5 * m * l),
			(g.m_sweep.c.x += 0.5 * z * n),
			(g.m_sweep.c.y += 0.5 * z * l),
			(n = g.m_sweep.c.x + r - e.m_sweep.c.x - s),
			(l = g.m_sweep.c.y + t - e.m_sweep.c.y - c));
		this.K1.col1.x = m + z;
		this.K1.col2.x = 0;
		this.K1.col1.y = 0;
		this.K1.col2.y = m + z;
		this.K2.col1.x = A * c * c;
		this.K2.col2.x = -A * s * c;
		this.K2.col1.y = -A * s * c;
		this.K2.col2.y = A * s * s;
		this.K3.col1.x = D * t * t;
		this.K3.col2.x = -D * r * t;
		this.K3.col1.y = -D * r * t;
		this.K3.col2.y = D * r * r;
		this.K.SetM(this.K1);
		this.K.AddM(this.K2);
		this.K.AddM(this.K3);
		this.K.Solve(O.tImpulse, -n, -l);
		n = O.tImpulse.x;
		l = O.tImpulse.y;
		e.m_sweep.c.x -= e.m_invMass * n;
		e.m_sweep.c.y -= e.m_invMass * l;
		e.m_sweep.a -= e.m_invI * (s * l - c * n);
		g.m_sweep.c.x += g.m_invMass * n;
		g.m_sweep.c.y += g.m_invMass * l;
		g.m_sweep.a += g.m_invI * (r * l - t * n);
		e.SynchronizeTransform();
		g.SynchronizeTransform();
		return d <= b.b2_linearSlop && j <= b.b2_angularSlop;
	};
	Box2D.postDefs.push(function () {
		Box2D.Dynamics.Joints.b2RevoluteJoint.tImpulse = new e();
	});
	Box2D.inherit(P, Box2D.Dynamics.Joints.b2JointDef);
	P.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	P.b2RevoluteJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
	};
	P.prototype.b2RevoluteJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_revoluteJoint;
		this.localAnchorA.Set(0, 0);
		this.localAnchorB.Set(0, 0);
		this.motorSpeed =
			this.maxMotorTorque =
			this.upperAngle =
			this.lowerAngle =
			this.referenceAngle =
				0;
		this.enableMotor = this.enableLimit = !1;
	};
	P.prototype.Initialize = function (b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA = this.bodyA.GetLocalPoint(d);
		this.localAnchorB = this.bodyB.GetLocalPoint(d);
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
	Box2D.inherit(aa, Box2D.Dynamics.Joints.b2Joint);
	aa.prototype.__super = Box2D.Dynamics.Joints.b2Joint.prototype;
	aa.b2WeldJoint = function () {
		Box2D.Dynamics.Joints.b2Joint.b2Joint.apply(this, arguments);
		this.m_localAnchorA = new e();
		this.m_localAnchorB = new e();
		this.m_impulse = new j();
		this.m_mass = new d();
	};
	aa.prototype.GetAnchorA = function () {
		return this.m_bodyA.GetWorldPoint(this.m_localAnchorA);
	};
	aa.prototype.GetAnchorB = function () {
		return this.m_bodyB.GetWorldPoint(this.m_localAnchorB);
	};
	aa.prototype.GetReactionForce = function (b) {
		void 0 === b && (b = 0);
		return new e(b * this.m_impulse.x, b * this.m_impulse.y);
	};
	aa.prototype.GetReactionTorque = function (b) {
		void 0 === b && (b = 0);
		return b * this.m_impulse.z;
	};
	aa.prototype.b2WeldJoint = function (b) {
		this.__super.b2Joint.call(this, b);
		this.m_localAnchorA.SetV(b.localAnchorA);
		this.m_localAnchorB.SetV(b.localAnchorB);
		this.m_referenceAngle = b.referenceAngle;
		this.m_impulse.SetZero();
		this.m_mass = new d();
	};
	aa.prototype.InitVelocityConstraints = function (b) {
		var c,
			d = 0,
			e = this.m_bodyA,
			f = this.m_bodyB;
		c = e.m_xf.R;
		var g = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
			j = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
			d = c.col1.x * g + c.col2.x * j,
			j = c.col1.y * g + c.col2.y * j,
			g = d;
		c = f.m_xf.R;
		var l = this.m_localAnchorB.x - f.m_sweep.localCenter.x,
			m = this.m_localAnchorB.y - f.m_sweep.localCenter.y,
			d = c.col1.x * l + c.col2.x * m,
			m = c.col1.y * l + c.col2.y * m,
			l = d;
		c = e.m_invMass;
		var d = f.m_invMass,
			n = e.m_invI,
			r = f.m_invI;
		this.m_mass.col1.x = c + d + j * j * n + m * m * r;
		this.m_mass.col2.x = -j * g * n - m * l * r;
		this.m_mass.col3.x = -j * n - m * r;
		this.m_mass.col1.y = this.m_mass.col2.x;
		this.m_mass.col2.y = c + d + g * g * n + l * l * r;
		this.m_mass.col3.y = g * n + l * r;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = n + r;
		b.warmStarting
			? ((this.m_impulse.x *= b.dtRatio),
			  (this.m_impulse.y *= b.dtRatio),
			  (this.m_impulse.z *= b.dtRatio),
			  (e.m_linearVelocity.x -= c * this.m_impulse.x),
			  (e.m_linearVelocity.y -= c * this.m_impulse.y),
			  (e.m_angularVelocity -=
					n *
					(g * this.m_impulse.y -
						j * this.m_impulse.x +
						this.m_impulse.z)),
			  (f.m_linearVelocity.x += d * this.m_impulse.x),
			  (f.m_linearVelocity.y += d * this.m_impulse.y),
			  (f.m_angularVelocity +=
					r *
					(l * this.m_impulse.y -
						m * this.m_impulse.x +
						this.m_impulse.z)))
			: this.m_impulse.SetZero();
	};
	aa.prototype.SolveVelocityConstraints = function () {
		var b,
			c = 0,
			d = this.m_bodyA,
			e = this.m_bodyB,
			f = d.m_linearVelocity,
			g = d.m_angularVelocity,
			m = e.m_linearVelocity,
			l = e.m_angularVelocity,
			n = d.m_invMass,
			r = e.m_invMass,
			t = d.m_invI,
			y = e.m_invI;
		b = d.m_xf.R;
		var z = this.m_localAnchorA.x - d.m_sweep.localCenter.x,
			A = this.m_localAnchorA.y - d.m_sweep.localCenter.y,
			c = b.col1.x * z + b.col2.x * A,
			A = b.col1.y * z + b.col2.y * A,
			z = c;
		b = e.m_xf.R;
		var B = this.m_localAnchorB.x - e.m_sweep.localCenter.x,
			D = this.m_localAnchorB.y - e.m_sweep.localCenter.y,
			c = b.col1.x * B + b.col2.x * D,
			D = b.col1.y * B + b.col2.y * D,
			B = c;
		b = m.x - l * D - f.x + g * A;
		var c = m.y + l * B - f.y - g * z,
			E = l - g,
			G = new j();
		this.m_mass.Solve33(G, -b, -c, -E);
		this.m_impulse.Add(G);
		f.x -= n * G.x;
		f.y -= n * G.y;
		g -= t * (z * G.y - A * G.x + G.z);
		m.x += r * G.x;
		m.y += r * G.y;
		l += y * (B * G.y - D * G.x + G.z);
		d.m_angularVelocity = g;
		e.m_angularVelocity = l;
	};
	aa.prototype.SolvePositionConstraints = function () {
		var c,
			d = 0,
			e = this.m_bodyA,
			g = this.m_bodyB;
		c = e.m_xf.R;
		var m = this.m_localAnchorA.x - e.m_sweep.localCenter.x,
			n = this.m_localAnchorA.y - e.m_sweep.localCenter.y,
			d = c.col1.x * m + c.col2.x * n,
			n = c.col1.y * m + c.col2.y * n,
			m = d;
		c = g.m_xf.R;
		var r = this.m_localAnchorB.x - g.m_sweep.localCenter.x,
			l = this.m_localAnchorB.y - g.m_sweep.localCenter.y,
			d = c.col1.x * r + c.col2.x * l,
			l = c.col1.y * r + c.col2.y * l,
			r = d;
		c = e.m_invMass;
		var d = g.m_invMass,
			s = e.m_invI,
			t = g.m_invI,
			x = g.m_sweep.c.x + r - e.m_sweep.c.x - m,
			y = g.m_sweep.c.y + l - e.m_sweep.c.y - n,
			z = g.m_sweep.a - e.m_sweep.a - this.m_referenceAngle,
			A = 10 * b.b2_linearSlop,
			B = Math.sqrt(x * x + y * y),
			D = f.Abs(z);
		B > A && ((s *= 1), (t *= 1));
		this.m_mass.col1.x = c + d + n * n * s + l * l * t;
		this.m_mass.col2.x = -n * m * s - l * r * t;
		this.m_mass.col3.x = -n * s - l * t;
		this.m_mass.col1.y = this.m_mass.col2.x;
		this.m_mass.col2.y = c + d + m * m * s + r * r * t;
		this.m_mass.col3.y = m * s + r * t;
		this.m_mass.col1.z = this.m_mass.col3.x;
		this.m_mass.col2.z = this.m_mass.col3.y;
		this.m_mass.col3.z = s + t;
		A = new j();
		this.m_mass.Solve33(A, -x, -y, -z);
		e.m_sweep.c.x -= c * A.x;
		e.m_sweep.c.y -= c * A.y;
		e.m_sweep.a -= s * (m * A.y - n * A.x + A.z);
		g.m_sweep.c.x += d * A.x;
		g.m_sweep.c.y += d * A.y;
		g.m_sweep.a += t * (r * A.y - l * A.x + A.z);
		e.SynchronizeTransform();
		g.SynchronizeTransform();
		return B <= b.b2_linearSlop && D <= b.b2_angularSlop;
	};
	Box2D.inherit(U, Box2D.Dynamics.Joints.b2JointDef);
	U.prototype.__super = Box2D.Dynamics.Joints.b2JointDef.prototype;
	U.b2WeldJointDef = function () {
		Box2D.Dynamics.Joints.b2JointDef.b2JointDef.apply(this, arguments);
		this.localAnchorA = new e();
		this.localAnchorB = new e();
	};
	U.prototype.b2WeldJointDef = function () {
		this.__super.b2JointDef.call(this);
		this.type = B.e_weldJoint;
		this.referenceAngle = 0;
	};
	U.prototype.Initialize = function (b, c, d) {
		this.bodyA = b;
		this.bodyB = c;
		this.localAnchorA.SetV(this.bodyA.GetLocalPoint(d));
		this.localAnchorB.SetV(this.bodyB.GetLocalPoint(d));
		this.referenceAngle = this.bodyB.GetAngle() - this.bodyA.GetAngle();
	};
})();
(function () {
	var b = Box2D.Dynamics.b2DebugDraw;
	b.b2DebugDraw = function () {
		this.m_xformScale =
			this.m_fillAlpha =
			this.m_alpha =
			this.m_lineThickness =
			this.m_drawScale =
				1;
		var b = this;
		this.m_sprite = {
			graphics: {
				clear: function () {
					b.m_ctx.clearRect(
						0,
						0,
						b.m_ctx.canvas.width,
						b.m_ctx.canvas.height
					);
				},
			},
		};
	};
	b.prototype._color = function (b, d) {
		return (
			'rgba(' +
			((b & 16711680) >> 16) +
			',' +
			((b & 65280) >> 8) +
			',' +
			(b & 255) +
			',' +
			d +
			')'
		);
	};
	b.prototype.b2DebugDraw = function () {
		this.m_drawFlags = 0;
	};
	b.prototype.SetFlags = function (b) {
		void 0 === b && (b = 0);
		this.m_drawFlags = b;
	};
	b.prototype.GetFlags = function () {
		return this.m_drawFlags;
	};
	b.prototype.AppendFlags = function (b) {
		void 0 === b && (b = 0);
		this.m_drawFlags |= b;
	};
	b.prototype.ClearFlags = function (b) {
		void 0 === b && (b = 0);
		this.m_drawFlags &= ~b;
	};
	b.prototype.SetSprite = function (b) {
		this.m_ctx = b;
	};
	b.prototype.GetSprite = function () {
		return this.m_ctx;
	};
	b.prototype.SetDrawScale = function (b) {
		void 0 === b && (b = 0);
		this.m_drawScale = b;
	};
	b.prototype.GetDrawScale = function () {
		return this.m_drawScale;
	};
	b.prototype.SetLineThickness = function (b) {
		void 0 === b && (b = 0);
		this.m_lineThickness = b;
		this.m_ctx.strokeWidth = b;
	};
	b.prototype.GetLineThickness = function () {
		return this.m_lineThickness;
	};
	b.prototype.SetAlpha = function (b) {
		void 0 === b && (b = 0);
		this.m_alpha = b;
	};
	b.prototype.GetAlpha = function () {
		return this.m_alpha;
	};
	b.prototype.SetFillAlpha = function (b) {
		void 0 === b && (b = 0);
		this.m_fillAlpha = b;
	};
	b.prototype.GetFillAlpha = function () {
		return this.m_fillAlpha;
	};
	b.prototype.SetXFormScale = function (b) {
		void 0 === b && (b = 0);
		this.m_xformScale = b;
	};
	b.prototype.GetXFormScale = function () {
		return this.m_xformScale;
	};
	b.prototype.DrawPolygon = function (b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.moveTo(b[0].x * j, b[0].y * j);
			for (f = 1; f < d; f++) e.lineTo(b[f].x * j, b[f].y * j);
			e.lineTo(b[0].x * j, b[0].y * j);
			e.closePath();
			e.stroke();
		}
	};
	b.prototype.DrawSolidPolygon = function (b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.fillStyle = this._color(f.color, this.m_fillAlpha);
			e.moveTo(b[0].x * j, b[0].y * j);
			for (f = 1; f < d; f++) e.lineTo(b[f].x * j, b[f].y * j);
			e.lineTo(b[0].x * j, b[0].y * j);
			e.closePath();
			e.fill();
			e.stroke();
		}
	};
	b.prototype.DrawCircle = function (b, d, f) {
		if (d) {
			var e = this.m_ctx,
				j = this.m_drawScale;
			e.beginPath();
			e.strokeStyle = this._color(f.color, this.m_alpha);
			e.arc(b.x * j, b.y * j, d * j, 0, 2 * Math.PI, !0);
			e.closePath();
			e.stroke();
		}
	};
	b.prototype.DrawSolidCircle = function (b, d, f, e) {
		if (d) {
			var j = this.m_ctx,
				n = this.m_drawScale,
				m = b.x * n,
				g = b.y * n;
			j.moveTo(0, 0);
			j.beginPath();
			j.strokeStyle = this._color(e.color, this.m_alpha);
			j.fillStyle = this._color(e.color, this.m_fillAlpha);
			j.arc(m, g, d * n, 0, 2 * Math.PI, !0);
			j.moveTo(m, g);
			j.lineTo((b.x + f.x * d) * n, (b.y + f.y * d) * n);
			j.closePath();
			j.fill();
			j.stroke();
		}
	};
	b.prototype.DrawSegment = function (b, d, f) {
		var e = this.m_ctx,
			j = this.m_drawScale;
		e.strokeStyle = this._color(f.color, this.m_alpha);
		e.beginPath();
		e.moveTo(b.x * j, b.y * j);
		e.lineTo(d.x * j, d.y * j);
		e.closePath();
		e.stroke();
	};
	b.prototype.DrawTransform = function (b) {
		var d = this.m_ctx,
			f = this.m_drawScale;
		d.beginPath();
		d.strokeStyle = this._color(16711680, this.m_alpha);
		d.moveTo(b.position.x * f, b.position.y * f);
		d.lineTo(
			(b.position.x + this.m_xformScale * b.R.col1.x) * f,
			(b.position.y + this.m_xformScale * b.R.col1.y) * f
		);
		d.strokeStyle = this._color(65280, this.m_alpha);
		d.moveTo(b.position.x * f, b.position.y * f);
		d.lineTo(
			(b.position.x + this.m_xformScale * b.R.col2.x) * f,
			(b.position.y + this.m_xformScale * b.R.col2.y) * f
		);
		d.closePath();
		d.stroke();
	};
})();
var i;
for (i = 0; i < Box2D.postDefs.length; ++i) Box2D.postDefs[i]();
delete Box2D.postDefs;
'undefined' != typeof global && (global.Box2D = Box2D);
ig.baked = !0;
ig.module('plugins.box2d.lib').defines(function () {});
ig.baked = !0;
ig.module('plugins.box2d.game')
	.requires('plugins.box2d.lib', 'impact.game')
	.defines(function () {
		ig.Box2DGame = ig.Game.extend({
			collisionRects: [],
			debugCollisionRects: !1,
			worldVelocityIterations: 6,
			worldPositionIterations: 6,
			updateTimestep: 1 / 60,
			updateTimestepAccumulator: 0,
			updateTimestepAccumulatorRatio: 0,
			lastUpdateTime: -1,
			nWorldSteps: 0,
			bodyDestroyQueue: [],
			defaultTileSegmentsDef: {},
			defaultTileVerticesDef: {},
			loadLevel: function (b) {
				this.collisionMap = ig.CollisionMap.staticNoCollision;
				for (var c = 0; c < b.layer.length; c++) {
					var d = b.layer[c];
					'collision' == d.name &&
						(this.collisionMap = new ig.CollisionMap(
							d.tilesize,
							d.data
						));
				}
				this.mergedShape = this.mergeRectangles(this.collisionMap);
				ig.world = this.createWorldFromCollisionMap(
					this.collisionMap,
					this.mergedShape
				);
				this.setupContactListener();
				this.parent(b);
			},
			createWorldFromMap: function (b, c, d, f) {
				var e = new Box2D.Collision.b2AABB();
				e.lowerBound.Set(0, 0);
				e.upperBound.Set(
					(c + 1) * f * Box2D.SCALE,
					(d + 1) * f * Box2D.SCALE
				);
				e = new Box2D.Common.Math.b2Vec2(
					0,
					ig.game.gravity * Box2D.SCALE
				);
				world = new Box2D.Dynamics.b2World(e, !0);
				b = ig.copy(b);
				this.collisionRects = [];
				for (e = 0; e < d; e++)
					for (var j = 0; j < c; j++)
						if (b[e][j]) {
							var n = this._extractRectFromMap(b, c, d, j, e);
							this.collisionRects.push(n);
						}
				for (c = 0; c < this.collisionRects.length; c++)
					(d = this.collisionRects[c]),
						(b = new Box2D.Dynamics.b2BodyDef()),
						b.position.Set(
							d.x * f * Box2D.SCALE +
								((d.width * f) / 2) * Box2D.SCALE,
							d.y * f * Box2D.SCALE +
								((d.height * f) / 2) * Box2D.SCALE
						),
						(b = world.CreateBody(b)),
						(e = new Box2D.Collision.Shapes.b2PolygonShape()),
						e.SetAsBox(
							((d.width * f) / 2) * Box2D.SCALE,
							((d.height * f) / 2) * Box2D.SCALE
						),
						b.CreateFixture2(e);
				return world;
			},
			_extractRectFromMap: function (b, c, d, f, e) {
				for (
					var j = { x: f, y: e, width: 1, height: 1 }, n = f + 1;
					n < c && b[e][n];
					n++
				)
					j.width++, (b[e][n] = 0);
				for (c = e + 1; c < d; c++) {
					e = 0;
					for (n = f; n < f + j.width && b[c][n]; n++) e++;
					if (e == j.width) {
						j.height++;
						for (n = f; n < f + j.width; n++) b[c][n] = 0;
					} else break;
				}
				return j;
			},
			update: function () {
				if (!ig.game.box2dPaused && ig.world) {
					var b = ig.system.clock.delta() - this.lastUpdateTime;
					this.lastUpdateTime = ig.system.clock.delta();
					this.updateTimestepAccumulator += b;
					this.nWorldSteps = Math.floor(
						this.updateTimestepAccumulator / this.updateTimestep
					);
					0 < this.nWorldSteps &&
						(this.updateTimestepAccumulator -=
							this.nWorldSteps * this.updateTimestep);
					this.updateTimestepAccumulatorRatio =
						this.updateTimestepAccumulator / this.updateTimestep;
					for (
						var b = Math.min(this.nWorldSteps, 5), c = 0;
						c < b;
						c++
					) {
						this.resetSmoothStates();
						ig.world.Step(
							this.updateTimestep,
							this.worldVelocityIterations,
							this.worldPositionIterations
						);
						for (var d = ig.world.GetBodyList(); d; d = d.m_next)
							if (d.IsAwake()) {
								var f = d.GetFixtureList();
								if (!f || !f.IsSensor()) {
									var f =
											0.6 >
											Math.abs(d.GetAngularVelocity()),
										e =
											0.6 >
											Math.abs(
												d.GetLinearVelocity().Length()
											);
									f && e
										? 30 < d.slowTime
											? ((d.slowTime = 0), d.SetAwake(!1))
											: (d.slowTime += 1)
										: (d.slowTime = 0);
								}
							}
					}
					ig.world.ClearForces();
					this.smoothStates();
				}
				this.parent();
				if (0 < this.bodyDestroyQueue.length) {
					for (c = 0; c < this.bodyDestroyQueue.length; c++)
						ig.world.DestroyBody(this.bodyDestroyQueue[c]);
					this.bodyDestroyQueue = [];
				}
			},
			smoothStates: function () {
				for (
					var b = 1 - this.updateTimestepAccumulatorRatio, c = 0;
					c < this.entities.length;
					c++
				) {
					var d = this.entities[c];
					null != d.body &&
						d.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
						((d.pos.x =
							this.updateTimestepAccumulatorRatio *
								d.body.GetPosition().x +
							b * d.previousBodyPosition.x),
						(d.pos.y =
							this.updateTimestepAccumulatorRatio *
								d.body.GetPosition().y +
							b * d.previousBodyPosition.y),
						(d.angle =
							this.updateTimestepAccumulatorRatio *
								d.body.GetAngle() +
							b * d.previousBodyAngle),
						d.currentAnim &&
							(d.currentAnim.update(),
							(d.currentAnim.angle = d.angle)));
				}
			},
			resetSmoothStates: function () {
				for (var b = 0; b < this.entities.length; b++) {
					var c = this.entities[b];
					null != c.body &&
						c.dynamicType != Box2D.Dynamics.b2Body.b2_staticBody &&
						((c.pos.x = c.body.GetPosition().x),
						(c.previousBodyPosition.x = c.pos.x),
						(c.pos.y = c.body.GetPosition().y),
						(c.previousBodyPosition.y = c.pos.y),
						(c.angle = c.body.GetAngle()),
						(c.previousBodyAngle = c.body.GetAngle()),
						c.currentAnim &&
							(c.currentAnim.update(),
							(c.currentAnim.angle = c.angle)));
				}
			},
			draw: function () {
				this.parent();
				if (this.debugCollisionRects)
					for (
						var b = this.collisionMap.tilesize, c = 0;
						c < this.collisionRects.length;
						c++
					) {
						var d = this.collisionRects[c];
						ig.system.context.strokeStyle = '#00ff00';
						ig.system.context.strokeRect(
							ig.system.getDrawPos(d.x * b - this.screen.x),
							ig.system.getDrawPos(d.y * b - this.screen.y),
							ig.system.getDrawPos(d.width * b),
							ig.system.getDrawPos(d.height * b)
						);
					}
			},
			queueDestroyBody: function (b) {
				this.bodyDestroyQueue.push(b);
			},
			mergeRectangles: function (b) {
				if (void 0 != b.data) {
					for (
						var c = ig.copy(b.data), d = [], f = 0;
						f < c.length;
						f++
					) {
						void 0 == d[f] && (d[f] = []);
						for (var e = 0; e < c[0].length; e++) d[f].push(0);
					}
					c = this._shapesFromCollisionMap(b);
					b = [];
					e = [];
					for (f = 0; f < c.length; f++)
						1 == c[f].id
							? (e.push(c[f]),
							  (d[c[f].tile.y][c[f].tile.x] = e[e.length - 1]))
							: b.push(c[f]);
					for (f = e.length - 1; 0 <= f; f--)
						1 == e[f].id &&
							(e[f].neighbours = this.checkNeighbour(
								d,
								e[f].tile.x,
								e[f].tile.y
							));
					d = this.linkSquares(e, d);
					return (b = b.concat(d));
				}
			},
			sideAbleCheck: function (b, c, d, f) {
				return b
					? b[d]
						? b[d][c]
							? b[d][c].neighbours
								? -1 < b[d][c].neighbours.indexOf(f)
									? !0
									: !1
								: !1
							: !1
						: !1
					: !1;
			},
			linkSquares: function (b, c) {
				for (var d = [], f = [], e = 0; e < b.length; e++) {
					var j = b[e],
						n = j.tile.x,
						m = j.tile.y;
					if (!(-1 < d.indexOf(j)))
						if ((d.push(j), -1 < j.neighbours.indexOf('right'))) {
							for (
								var g = 1;
								!0 ==
								this.sideAbleCheck(
									c,
									j.tile.x + g,
									j.tile.y,
									'right'
								);

							)
								j.tile.x + g < n && (n = j.tile.x + g),
									d.push(c[j.tile.y][j.tile.x + g]),
									g++;
							c[j.tile.y][n].settings.size.x *= g + 1;
							for (
								var r = c[j.tile.y][n].settings.vertices, z = 0;
								z < r.length;
								z++
							)
								r[z].x *= g + 1;
							d.push(c[j.tile.y][j.tile.x + g + 1]);
							f.push(c[j.tile.y][n]);
						} else if (
							-1 < j.neighbours.indexOf('down') &&
							-1 == j.neighbours.indexOf('right') &&
							-1 == j.neighbours.indexOf('left')
						) {
							j.tile.y + g < m && (m = j.tile.y + g);
							r = 0;
							for (
								n = 1;
								!0 ==
									this.sideAbleCheck(
										c,
										j.tile.x,
										j.tile.y + n,
										'down'
									) &&
								!1 ==
									this.sideAbleCheck(
										c,
										j.tile.x,
										j.tile.y + n,
										'right'
									) &&
								!1 ==
									this.sideAbleCheck(
										c,
										j.tile.x,
										j.tile.y + n,
										'left'
									);

							)
								(r = 1), d.push(c[j.tile.y + n][j.tile.x]), n++;
							!0 ==
								this.sideAbleCheck(
									c,
									j.tile.x,
									j.tile.y + n,
									'up'
								) &&
							!1 ==
								this.sideAbleCheck(
									c,
									j.tile.x,
									j.tile.y + n,
									'right'
								) &&
							!1 ==
								this.sideAbleCheck(
									c,
									j.tile.x,
									j.tile.y + n,
									'left'
								)
								? (r = 1)
								: !0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y + n,
											'up'
										) &&
								  !0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y + n,
											'right'
										)
								? (d.splice(
										d.indexOf(c[j.tile.y + n][j.tile.x]),
										1
								  ),
								  n--)
								: !0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y + n,
											'up'
										) &&
								  !0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y + n,
											'left'
										) &&
								  (d.splice(
										d.indexOf(c[j.tile.y + n][j.tile.x]),
										1
								  ),
								  n--);
							if (1 == r) {
								c[m][j.tile.x].settings.size.y *= n + 1;
								r = c[m][j.tile.x].settings.vertices;
								for (z = 0; z < r.length; z++) r[z].y *= n + 1;
								c[j.tile.y + n] &&
									d.push(c[j.tile.y + n][j.tile.x]);
							}
							f.push(c[m][j.tile.x]);
						} else if (!(-1 < j.neighbours.indexOf('left')))
							if (-1 < j.neighbours.indexOf('up')) {
								if (
									!0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y - 1,
											'down'
										) &&
									(!0 ==
										this.sideAbleCheck(
											c,
											j.tile.x,
											j.tile.y - 1,
											'right'
										) ||
										!0 ==
											this.sideAbleCheck(
												c,
												j.tile.x,
												j.tile.y - 1,
												'left'
											))
								)
									d.push(c[j.tile.y][j.tile.x]),
										f.push(c[j.tile.y][j.tile.x]);
							} else
								d.push(c[j.tile.y][j.tile.x]),
									f.push(c[j.tile.y][j.tile.x]);
				}
				return f;
			},
			getNeighbourTiles: function (b, c, d, f) {
				switch (f) {
					case 'left':
						return [{ x: c - 1, y: d }];
					case 'right':
						return [{ x: c + 1, y: d }];
					case 'up':
						return [{ x: c, y: d - 1 }];
					case 'down':
						return [{ x: c, y: d + 1 }];
					case 'topL':
						return [
							{ x: c, y: d - 1 },
							{ x: c - 1, y: d },
							{ x: c - 1, y: d - 1 },
						];
					case 'topR':
						return [
							{ x: c, y: d - 1 },
							{ x: c + 1, y: d },
							{ x: c + 1, y: d - 1 },
						];
					case 'bottomL':
						return [
							{ x: c, y: d + 1 },
							{ x: c - 1, y: d },
							{ x: c - 1, y: d + 1 },
						];
					case 'bottomR':
						return [
							{ x: c, y: d + 1 },
							{ x: c + 1, y: d },
							{ x: c + 1, y: d + 1 },
						];
				}
			},
			checkNeighbour: function (b, c, d) {
				var f = [];
				0 != this.checkArr(b, c - 1, d) && f.push('left');
				0 != this.checkArr(b, c, d + 1) && f.push('down');
				0 != this.checkArr(b, c + 1, d) && f.push('right');
				0 != this.checkArr(b, c, d - 1) && f.push('up');
				return f;
			},
			checkArr: function (b, c, d) {
				return void 0 == b[d] ? 0 : void 0 == b[d][c] ? 0 : b[d][c];
			},
			createWorldFromCollisionMap: function (b, c) {
				var d = new Box2D.Common.Math.b2Vec2(0, 0),
					d = new Box2D.Common.Math.b2Vec2(
						0,
						ig.game.gravity * Box2D.SCALE
					);
				world = new Box2D.Dynamics.b2World(d, !0);
				for (
					var d =
							void 0 != c
								? c
								: this._shapesFromCollisionMap(
										this.collisionMap
								  ),
						f = 0;
					f < d.length;
					f++
				) {
					var e = d[f],
						j = e.settings.size.x,
						n = e.settings.size.y,
						m = e.settings.vertices,
						g = new Box2D.Dynamics.b2BodyDef();
					g.position.Set(
						e.x * Box2D.SCALE + (j / 2) * Box2D.SCALE,
						e.y * Box2D.SCALE + (n / 2) * Box2D.SCALE
					);
					j = world.CreateBody(g);
					e = new Box2D.Collision.Shapes.b2PolygonShape();
					e.SetAsArray(m, m.length);
					j.CreateFixture2(e);
				}
				return world;
			},
			setupContactListener: function () {
				var b = function (b, c, e) {
						var j = c.GetFixtureA().GetBody().entity,
							n = c.GetFixtureB().GetBody().entity;
						if (j && n) j[b](n, c, e), n[b](j, c, e);
						else if (j && !n) j[b](null, c, e);
						else if (n && !j) n[b](null, c, e);
					},
					c = new Box2D.Dynamics.b2ContactListener();
				c.BeginContact = function (c) {
					b('beginContact', c);
				};
				c.EndContact = function (c) {
					b('endContact', c);
				};
				c.PostSolve = function (c, f) {
					b('postSolve', c, f);
				};
				c.PreSolve = function (c, f) {
					b('preSolve', c, f);
				};
				ig.world.SetContactListener(c);
			},
			_shapesFromCollisionMap: function (b) {
				var c = [];
				if (b instanceof ig.CollisionMap) {
					var d = ig.copy(b.data),
						f = b.tilesize,
						e = b.width,
						j = b.height,
						n,
						m,
						g,
						r,
						z,
						y,
						A,
						B,
						I,
						D;
					for (y = 0; y < j; y++)
						for (z = 0; z < e; z++) {
							D = this._shapeFromTile(b, z, y);
							I = {
								id: b.data[y][z],
								ix: z,
								iy: y,
								x: z * f,
								y: y * f,
								width: f,
								height: f,
								shape: D,
							};
							if (0 < D.vertices.length) {
								m = [];
								n = D.vertices;
								g = D.segments;
								A = 0;
								for (B = g.length; A < B; A++) {
									r = g[A];
									var t = n[r.a],
										G = I.width / 20,
										E = I.height / 20;
									m[r.a] = {
										x: t.x.map(0, 1, -G, G),
										y: t.y.map(0, 1, -E, E),
									};
								}
								D.vertices = m;
								D.vertices[D.vertices.length - 1].x ===
									D.vertices[0].x &&
									D.vertices[D.vertices.length - 1].y ===
										D.vertices[0].y &&
									D.vertices.pop();
								n = {
									id: I.id,
									settings: {
										size: { x: I.width, y: I.height },
										vertices: ig.copy(D.vertices),
									},
									x: I.x,
									y: I.y,
									tile: { x: z, y: y },
								};
								c.push(n);
							}
							d[y][z] = I;
						}
				}
				return c;
			},
			_shapeFromTile: function (b, c, d) {
				var f;
				f = b.data[d][c];
				b = this._verticesFromTile(b, c, d);
				var e;
				if (b)
					if (this.defaultTileSegmentsDef[f])
						e = this.defaultTileSegmentsDef[f];
					else {
						this.defaultTileSegmentsDef[f] = e = [];
						f = 0;
						for (c = b.length; f < c; f++) {
							var j = b[f];
							d = f === c - 1 ? 0 : f + 1;
							var n = b[d],
								m = n.x - j.x,
								j = n.y - j.y,
								n = Math.sqrt(m * m + j * j);
							e.push({
								a: f,
								b: d,
								normal: { x: j / n, y: -m / n },
							});
						}
					}
				return { vertices: b, segments: e || [] };
			},
			_verticesFromTile: function (b, c, d) {
				c = b.data[d][c];
				if (this.defaultTileVerticesDef[c])
					d = this.defaultTileVerticesDef[c];
				else if (1 === c)
					d = [
						{ x: 0, y: 0 },
						{ x: 1, y: 0 },
						{ x: 1, y: 1 },
						{ x: 0, y: 1 },
					];
				else {
					d = [];
					if ((b = b.tiledef[c])) {
						var f = (d[0] = { x: b[0], y: b[1] }),
							e = (d[1] = { x: b[2], y: b[3] });
						b = f.x;
						var f = f.y,
							j = e.x,
							e = e.y,
							n = j - b,
							m = e - f,
							g = (d[2] = { x: 0 > m ? 1 : 0, y: 0 < n ? 1 : 0 }),
							r = g.x,
							g = g.y,
							z;
						z = !1;
						if (1 > Math.abs(n) && 1 > Math.abs(m)) {
							var n = _utv2.pointQuadrant(b, f, 0.5, 0.5),
								m = _utv2.pointQuadrant(j, e, 0.5, 0.5),
								y = _utv2.pointQuadrant(r, g, 0.5, 0.5);
							!(n & y) && !(m & y) && (z = !0);
						}
						!0 === z
							? (r !== g
									? ((z = r),
									  (m = g),
									  1 == r
											? ((g = 1), (n = 0))
											: ((g = 0), (n = 1)))
									: ((n = r),
									  (m = 1 == r ? (z = 0) : (z = 1))),
							  (d[3] = { x: z, y: g }),
							  (d[4] = { x: n, y: m }))
							: (r !== g
									? ((z = r),
									  (m = g),
									  1 == r
											? ((g = Math.max(f, e)),
											  (n = Math.min(b, j)))
											: ((g = Math.min(f, e)),
											  (n = Math.max(b, j))))
									: ((n = r),
									  1 == r
											? ((z = Math.min(b, j)),
											  (m = Math.min(f, e)))
											: ((z = Math.max(b, j)),
											  (m = Math.max(f, e)))),
							  (z === b && g === f) || (z === j && g === e)
									? (n === b && m === f) ||
									  (n === j && m === e) ||
									  (d[3] = { x: n, y: m })
									: (d[3] = { x: z, y: g }));
						d = this._pointsToConvexHull(d);
					}
					this.defaultTileVerticesDef[c] = d;
				}
				return d;
			},
			_pointsToConvexHull: function (b) {
				if (3 > b.length) return b;
				var c,
					d,
					f = 0,
					e = b[f],
					j;
				c = 1;
				for (d = b.length; c < d; c++)
					(j = b[c]),
						j.y === e.y
							? j.x < e.x && ((f = c), (e = j))
							: j.y < e.y && ((f = c), (e = j));
				var n = [],
					m;
				c = 0;
				for (d = b.length; c < d; c++)
					c !== f &&
						((j = b[c]),
						(m = { x: j.x, y: j.y }),
						(m.angle = Math.atan((j.y - e.y) / (j.x - e.x))),
						0 > m.angle && (m.angle += Math.PI),
						(m.distance =
							(j.x - e.x) * (j.x - e.x) +
							(j.y - e.y) * (j.y - e.y)),
						(m.index = c),
						n.push(m));
				n.sort(function (b, c) {
					return b.angle < c.angle
						? -1
						: b.angle > c.angle
						? 1
						: b.distance < c.distance
						? -1
						: b.distance > c.distance
						? 1
						: 0;
				});
				n.unshift(n[n.length - 1], { x: e.x, y: e.y, index: f });
				f = 2;
				c = 3;
				for (d = b.length; c <= d; c++) {
					for (; 0 >= this._pointsCW(n[f - 1], n[f], n[c]); ) f--;
					f++;
					e = n[c];
					n[c] = n[f];
					n[f] = e;
				}
				d = [];
				for (c = 0; c <= f; c++) d[c] = b[n[c].index];
				return d;
			},
			_pointsCW: function (b, c, d) {
				return (c.x - b.x) * (d.y - b.y) - (c.y - b.y) * (d.x - b.x);
			},
		});
		Box2D.Common.b2Settings.b2_maxTranslation = 10;
		Box2D.Common.b2Settings.b2_maxTranslationSquared = 100;
		Box2D.Common.b2Settings.b2_velocityThreshold = 1;
	});
ig.baked = !0;
ig.module('plugins.box2d.entity')
	.requires('impact.entity', 'plugins.box2d.game')
	.defines(function () {
		ig.Box2DEntity = ig.Entity.extend({
			body: null,
			angle: 0,
			box2dType: null,
			dynamicType: null,
			density: null,
			friction: null,
			restitution: null,
			rotate: 0,
			previousBodyPosition: { x: 0, y: 0 },
			previousBodyAngle: 0,
			slowTime: 0,
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.global.wm || this.createBody();
			},
			ready: function () {
				!ig.global.wm && null == this.body && this.createBody();
				0 < this.rotate && (this.angle = (this.rotate * Math.PI) / 180);
			},
			createBody: function () {
				if (this.body) {
					var b = this.body.GetPosition();
					this.pos = {
						x: b.x / Box2D.SCALE - this.size.x / 2,
						y: b.y / Box2D.SCALE - this.size.y / 2,
					};
				}
				b = new Box2D.Dynamics.b2BodyDef();
				b.position = new Box2D.Common.Math.b2Vec2(
					(this.pos.x + this.size.x / 2) * Box2D.SCALE,
					(this.pos.y + this.size.y / 2) * Box2D.SCALE
				);
				this.previousBodyPosition = {
					x: b.position.x,
					y: b.position.y,
				};
				this.rotate && (b.angle = (this.rotate * Math.PI) / 180);
				this.previousBodyAngle = b.angle;
				null == this.dynamicType || 0 == this.dynamicType
					? (b.type = Box2D.Dynamics.b2Body.b2_dynamicBody)
					: 1 == this.dynamicType
					? (b.type = Box2D.Dynamics.b2Body.b2_kinematicBody)
					: 2 == this.dynamicType &&
					  (b.type = Box2D.Dynamics.b2Body.b2_staticBody);
				this.body = ig.world.CreateBody(b);
				null == this.body &&
					(ig.world.Step(), (this.body = ig.world.CreateBody(b)));
				this.body.entity = this;
				b = this.fixture = new Box2D.Dynamics.b2FixtureDef();
				null == this.box2dType || 0 == this.box2dType
					? ((b.shape = new Box2D.Collision.Shapes.b2PolygonShape()),
					  b.shape.SetAsBox(
							(this.size.x / 2) * Box2D.SCALE,
							(this.size.y / 2) * Box2D.SCALE
					  ))
					: 1 == this.box2dType
					? ((b.shape = new Box2D.Collision.Shapes.b2CircleShape()),
					  b.shape.SetRadius((this.size.x / 2) * Box2D.SCALE))
					: 2 == this.box2dType &&
					  ((b.shape = new Box2D.Collision.Shapes.b2PolygonShape()),
					  b.shape.SetAsArray(this.vertices, this.vertices.length));
				this.density && (b.density = this.density);
				this.friction && (b.friction = this.friction);
				this.restitution && (b.restitution = this.restitution);
				this.body.CreateFixture(b);
				this.body.SetUserData(this);
			},
			update: function () {
				var b = this.body.GetPosition();
				this.previousBodyPosition = { x: this.pos.x, y: this.pos.y };
				this.pos = {
					x: b.x / Box2D.SCALE - this.size.x / 2,
					y: b.y / Box2D.SCALE - this.size.y / 2,
				};
				this.previousBodyAngle = this.angle;
				this.angle = this.body.GetAngle().round(2);
				this.currentAnim &&
					(this.currentAnim.update(),
					(this.currentAnim.angle = this.angle));
				if (0 < this.tweens.length) {
					for (var b = [], c = 0; c < this.tweens.length; c++)
						this.tweens[c].update(),
							this.tweens[c].complete || b.push(this.tweens[c]);
					this.tweens = b;
				}
			},
			beginContact: function () {},
			endContact: function () {},
			postSolve: function () {},
			preSolve: function () {},
			processCollisionQueues: function () {
				for (var b in this.checkQueue) {
					var c = this.checkQueue[b];
					0 < this.entityContactCount[b]
						? this.check(c)
						: delete this.checkQueue[b];
				}
				for (var d in this.collideQueue)
					for (b in this.collideQueue[d])
						(c = this.collideQueue[d][b]),
							this.collideWith(c, d),
							delete this.collideQueue[d][b];
			},
			kill: function () {
				this.body && ig.game.queueDestroyBody(this.body);
				this.parent();
			},
			setScale: function (b, c) {
				this.parent(b, c);
				null != this.body &&
					this.scaleChange &&
					(ig.world.DestroyBody(this.body),
					this.createBody(),
					(this.scaleChange = !1));
			},
		});
	});
ig.baked = !0;
ig.module('plugins.scale')
	.requires('impact.entity')
	.defines(function () {
		ig.Entity.inject({
			scale: { x: 1, y: 1 },
			_offset: { x: 0, y: 0 },
			_scale: { x: 1, y: 1 },
			_size: { x: 0, y: 0 },
			init: function (b, c, d) {
				this.parent(b, c, d);
				this._offset.x = this.offset.x;
				this._offset.y = this.offset.y;
				this._size.x = this.size.x;
				this._size.y = this.size.y;
				this.setScale(this.scale.x, this.scale.y);
			},
			draw: function () {
				var b = ig.system.context;
				b.save();
				b.translate(
					ig.system.getDrawPos(
						this.pos.x.round() - this.offset.x - ig.game.screen.x
					),
					ig.system.getDrawPos(
						this.pos.y.round() - this.offset.y - ig.game.screen.y
					)
				);
				b.scale(this._scale.x, this._scale.y);
				null != this.currentAnim && this.currentAnim.draw(0, 0);
				b.restore();
			},
			setScale: function (b, c) {
				var d = this.size.x,
					f = this.size.y;
				this.scale.x = b || this.scale.x;
				this.scale.y = c || this.scale.y;
				this._scale.x = this.scale.x / ig.system.scale;
				this._scale.y = this.scale.y / ig.system.scale;
				this.offset.x = this._offset.x * this._scale.x;
				this.offset.y = this._offset.y * this._scale.y;
				this.size.x = this._size.x * this._scale.x;
				this.size.y = this._size.y * this._scale.y;
				this.pos.x += (d - this.size.x) / 2;
				this.pos.y += (f - this.size.y) / 2;
			},
		});
	});
ig.baked = !0;
ig.module('plugins.gamedist').defines(function () {
	window.GD_OPTIONS = {
		gameId: '722176c4785042368e5b4f734cc14b9e',
		advertisementSettings: { debug: !1, autoplay: !1, locale: 'en' },
		onEvent: function (c) {
			switch (c.name) {
				case 'SDK_READY':
					console.log('%cMjs-Gd: "The sdk is ready"', b);
					ig.gd.ready = !0;
					gameStart();
					break;
				case 'SDK_ERROR':
					console.log('%cMjs-Gd: "The sdk is error"', b);
					gameStart();
					break;
				case 'SDK_GAME_START':
					ig.gd.unfreez();
					if ('function' === typeof ig.gd.onAdClose)
						ig.gd.onAdClose();
					ig.gd.onAdClose = 0;
					break;
				case 'SDK_GAME_PAUSE':
					ig.gd.freez();
			}
		},
	};
	var b = 'color: blue; font-weight: bold';
	var c,
		d = document.getElementsByTagName('script')[0];
	document.getElementById('gamedistribution-jssdk') ||
		((c = document.createElement('script')),
		(c.id = 'gamedistribution-jssdk'),
		(c.src = './main.min.js'),
		d.parentNode.insertBefore(c, d));
	ig.Gd = ig.Class.extend({
		pausedMidplay: 0,
		prevMuted: { bgm: 0, sfx: 0 },
		onAdClose: 0,
		adShowing: 0,
		isFreez: 0,
		ready: !1,
		createTestButton: function () {
			this.createDiv('Resume', 5, 'green', 'white', function () {
				ig.game && ig.gd && ig.gd.unfreez();
			});
			this.createDiv('Pause', 70, 'red', 'white', function () {
				ig.game && ig.gd && ig.gd.freez();
			});
			this.createDiv(
				'Show Rewarded',
				124,
				'purple',
				'white',
				function () {
					ig.game && ig.gd && ig.gd.showRewarded();
				}
			);
		},
		createDiv: function (b, c, d, n, m) {
			var g = ig.$new('button');
			document.body.appendChild(g);
			g.textContent = b;
			g.style.position = 'absolute';
			g.style.color = n;
			g.style.background = d;
			g.style.top = '5px';
			g.style.left = c + 'px';
			g.style.padding = '5px';
			g.style.fontSize = '12px';
			g.style.fontFamily = 'Arial';
			g.style.cursor = 'pointer';
			g.style['z-index'] = 999999;
			g.onclick = m;
		},
		freez: function () {
			'undefined' !== typeof gdsdk &&
				(ig.soundHandler.muteAll(!0),
				ig.game && ig.game.pauseGame(),
				(ig.gd.isFreez = 1));
		},
		unfreez: function () {
			'undefined' !== typeof gdsdk &&
				((ig.gd.adShowing = 0),
				(ig.gd.isFreez = 0),
				ig.soundHandler.unmuteAll(!0),
				ig.game && ig.game.resumeGame());
		},
		show: function (c) {
			'undefined' !== typeof gdsdk &&
			'undefined' !== gdsdk.showAd &&
			'undefined' !== gdsdk.preloadAd &&
			ig.gd.ready
				? ig.gd.adShowing ||
				  (console.log('%cMjs-Gd: "Ad is avaiable - Showing ad"', b),
				  (ig.gd.adShowing = 1),
				  (ig.gd.onAdClose = c || 0),
				  gdsdk.showAd().catch(function (b) {
						console.log('Mjs-Gd: ' + b);
						'function' === typeof c && c();
						ig.gd.unfreez();
				  }))
				: c();
		},
		showRewarded: function (b) {
			'undefined' !== typeof gdsdk && 'undefined' !== gdsdk.showAd
				? ig.gd.adShowing ||
				  ((ig.gd.adShowing = 1),
				  (ig.gd.onAdClose = b || 0),
				  gdsdk.showAd('rewarded').catch(function (c) {
						console.log('Mjs-Gd: ' + c);
						'function' === typeof b && b();
						ig.gd.unfreez();
				  }))
				: b();
		},
		isAvaiableRewarded: function (c) {
			'undefined' !== gdsdk &&
			'undefined' !== gdsdk.preloadAd &&
			ig.gd.ready
				? gdsdk
						.preloadAd('rewarded')
						.then(
							function (d) {
								d;
								console.log(
									'%cMjs-Gd: "Ad reward is avaiable"',
									b
								);
								'function' === typeof c && c(!0);
							}.bind(this)
						)
						.catch(
							function (d) {
								d;
								console.log(
									'%cMjs-Gd: "Ad reward not available"',
									b
								);
								'function' === typeof c && c(!1);
							}.bind(this)
						)
				: 'function' === typeof c && c(!1);
		},
	});
	ig.gd = new ig.Gd();
});
ig.baked = !0;
ig.module('plugins.data.color-rgb').defines(function () {
	ColorRGB = function (b, c, d, f) {
		this.r = b || 0;
		this.g = c || 0;
		this.b = d || 0;
		this.a = f || 0;
	};
	ColorRGB.prototype = {
		setRandomColor: function () {
			this.r = Math.round(255 * Math.random());
			this.g = Math.round(255 * Math.random());
			this.b = Math.round(255 * Math.random());
		},
		getStyle: function () {
			return (
				'rgba(' +
				this.r +
				',' +
				this.g +
				',' +
				this.b +
				',' +
				this.a +
				')'
			);
		},
		getHex: function () {
			for (
				var b = this.r.toString(16),
					c = this.g.toString(16),
					d = this.b.toString(16);
				2 > b.length;

			)
				b = '0' + b;
			for (; 2 > c.length; ) c = '0' + c;
			for (; 2 > d.length; ) d = '0' + d;
			return '#' + b + c + d;
		},
		getInvertedColor: function () {
			return new ColorRGB(
				255 - this.r,
				255 - this.g,
				255 - this.b,
				255 - this.a
			);
		},
		clone: function () {
			return new ColorRGB(this.r, this.g, this.b, this.a);
		},
	};
});
this.START_BRANDING_SPLASH;
ig.baked = !0;
ig.module('plugins.branding.splash')
	.requires('impact.impact', 'impact.entity')
	.defines(function () {
		ig.BrandingSplash = ig.Class.extend({
			init: function () {
				ig.game.spawnEntity(EntityBranding, 0, 0);
				console.log('spawn branding');
			},
		});
		EntityBranding = ig.Entity.extend({
			gravityFactor: 0,
			size: { x: 32, y: 32 },
			splash: new ig.Image('branding/splash1.png'),
			init: function (b, c, d) {
				this.parent(b, c, d);
				320 >= ig.system.width
					? ((this.size.x = 320), (this.size.y = 200))
					: ((this.size.x = 480), (this.size.y = 240));
				this.pos.x = (ig.system.width - this.size.x) / 2;
				this.pos.y = -this.size.y - 200;
				this.endPosY = (ig.system.height - this.size.y) / 2;
				b = this.tween({ pos: { y: this.endPosY } }, 0.5, {
					easing: ig.Tween.Easing.Bounce.EaseIn,
				});
				c = this.tween({}, 2.5, {
					onComplete: function () {
						ig.game.director.loadLevel(
							ig.game.director.currentLevel
						);
					},
				});
				b.chain(c);
				b.start();
				this.currentAnim = this.anims.idle;
			},
			createClickableLayer: function () {
				console.log('Build clickable layer');
				this.checkClickableLayer(
					'branding-splash',
					_SETTINGS.Branding.Logo.Link,
					_SETTINGS.Branding.Logo.NewWindow
				);
			},
			doesClickableLayerExist: function (b) {
				for (k in dynamicClickableEntityDivs) if (k == b) return !0;
				return !1;
			},
			checkClickableLayer: function (b, c, d) {
				'undefined' == typeof wm &&
					(this.doesClickableLayerExist(b)
						? (ig.game.showOverlay([b]),
						  $('#' + b)
								.find('[href]')
								.attr('href', c))
						: this.createClickableOutboundLayer(
								b,
								c,
								'media/graphics/misc/invisible.png',
								d
						  ));
			},
			createClickableOutboundLayer: function (b, c, d, f) {
				var e = ig.$new('div');
				e.id = b;
				document.body.appendChild(e);
				e = $('#' + e.id);
				e.css('float', 'left');
				e.css('position', 'absolute');
				if (ig.ua.mobile) {
					var j = window.innerHeight / mobileHeight,
						n = window.innerWidth / mobileWidth;
					e.css('left', this.pos.x * n);
					e.css('top', this.pos.y * j);
					e.css('width', this.size.x * n);
					e.css('height', this.size.y * j);
				} else
					(j = w / 2 - destW / 2),
						(n = h / 2 - destH / 2),
						console.log(j, n),
						e.css('left', j + this.pos.x * multiplier),
						e.css('top', n + this.pos.y * multiplier),
						e.css('width', this.size.x * multiplier),
						e.css('height', this.size.y * multiplier);
				f
					? e.html(
							"<a target='_blank' href='" +
								c +
								"'><img style='width:100%;height:100%' src='" +
								d +
								"'></a>"
					  )
					: e.html(
							"<a href='" +
								c +
								"'><img style='width:100%;height:100%' src='" +
								d +
								"'></a>"
					  );
				dynamicClickableEntityDivs[b] = {};
				dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
				dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
				dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
				dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
			},
			draw: function () {
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				ig.system.context.fillStyle = '#000';
				ig.system.context.font = '12px Arial';
				ig.system.context.textAlign = 'left';
				320 >= ig.system.width
					? ig.system.context.fillText(
							'powered by MarketJS.com',
							ig.system.width - 150,
							ig.system.height - 15
					  )
					: ig.system.context.fillText(
							'powered by MarketJS.com',
							ig.system.width - 160,
							ig.system.height - 15
					  );
				this.parent();
				this.splash &&
					ig.system.context.drawImage(
						this.splash.data,
						0,
						0,
						this.splash.data.width,
						this.splash.data.height,
						this.pos.x,
						this.pos.y,
						this.size.x,
						this.size.y
					);
			},
		});
	});
this.END_BRANDING_SPLASH;
ig.baked = !0;
ig.module('game.entities.global.marketjs-entity')
	.requires('impact.entity')
	.defines(function () {
		EntityMarketjsEntity = ig.Entity.extend({
			oriPos: { x: null, y: null },
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.oriPos.x = this.pos.x;
				this.oriPos.y = this.pos.y;
				this.setPosition();
			},
			update: function () {
				this.parent();
				this.killOutOfLayer();
			},
			killOutOfLayer: function () {
				!1 != this.killOutLayer &&
					(this.pos.x < ig.game.screen.x - this.size.x ||
						this.pos.x > ig.game.screen.x + ig.system.width ||
						this.pos.y < ig.game.screen.y - this.size.y ||
						this.pos.y > ig.game.screen.y + ig.system.height) &&
					this.kill();
			},
			setSpriteSheet: function (b) {
				this[b + 'Sheet'] = new ig.AnimationSheet(
					this[b + 'SheetInfo'].sheetImage.path,
					this[b + 'SheetInfo'].sheetImage.width /
						this[b + 'SheetInfo'].sheetX,
					this[b + 'SheetInfo'].sheetImage.height /
						this[b + 'SheetInfo'].sheetY
				);
			},
			setSize: function (b) {
				this.size.x =
					this[b + 'SheetInfo'].sheetImage.width /
					this[b + 'SheetInfo'].sheetX;
				this.size.y =
					this[b + 'SheetInfo'].sheetImage.height /
					this[b + 'SheetInfo'].sheetY;
			},
			setPosition: function () {
				'center' == this.horizontal
					? (this.pos.x -= this.size.x / 2)
					: 'left' == this.horizontal
					? (this.pos.x = this.pos.x)
					: 'right' == this.horizontal && (this.pos.x -= this.size.x);
				'center' == this.vertical
					? (this.pos.y -= this.size.y / 2)
					: 'top' == this.vertical
					? (this.pos.y = this.pos.y)
					: 'bottom' == this.vertical && (this.pos.y -= this.size.y);
			},
			setFlip: function () {
				!0 == this.flip.x && (this.curentAnimation.flip.x = !0);
				!0 == this.flip.y && (this.curentAnimation.flip.y = !0);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button')
	.requires(
		'impact.entity',
		'plugins.data.vector',
		'game.entities.global.marketjs-entity'
	)
	.defines(function () {
		EntityButton = EntityMarketjsEntity.extend({
			gravityFactor: 0,
			collides: ig.Entity.COLLIDES.NEVER,
			type: ig.Entity.TYPE.A,
			fillColor: null,
			isEnabled: !0,
			zIndex: 95e3,
			init: function (b, c, d) {
				this.parent(b, c, d);
				!ig.global.wm && !isNaN(d.zIndex) && (this.zIndex = d.zIndex);
				b = Math.floor(256 * Math.random());
				c = Math.floor(256 * Math.random());
				d = Math.floor(256 * Math.random());
				this.fillColor = 'rgba(' + b + ',' + d + ',' + c + ',1)';
			},
			update: function () {
				this.parent();
			},
			clicked: function () {},
			clicking: function () {},
			released: function () {},
			setEnabled: function (b) {
				!0 == b
					? ((this.type = ig.Entity.TYPE.A), (this.isEnabled = !0))
					: ((this.type = ig.Entity.TYPE.NONE),
					  (this.isEnabled = !1));
			},
		});
	});
ig.baked = !0;
ig.module('plugins.clickable-div-layer')
	.requires('plugins.data.vector')
	.defines(function () {
		ClickableDivLayer = ig.Class.extend({
			pos: new Vector2(0, 0),
			size: new Vector2(0, 0),
			identifier: null,
			invisImagePath: 'media/graphics/misc/invisible.png',
			init: function (b) {
				this.pos = new Vector2(b.pos.x, b.pos.y);
				this.size = new Vector2(b.size.x, b.size.y);
				var c = 'more-games',
					d = 'www.google.com',
					f = !1;
				b.div_layer_name && (c = b.div_layer_name);
				b.link && (d = b.link);
				b.newWindow && (f = b.newWindow);
				this.createClickableLayer(c, d, f);
			},
			createClickableLayer: function (b, c, d) {
				this.identifier = b;
				var f = ig.domHandler.getElementById('#' + b);
				f
					? (ig.domHandler.show(f), ig.domHandler.attr(f, 'href', c))
					: this.createClickableOutboundLayer(
							b,
							c,
							this.invisImagePath,
							d
					  );
			},
			update: function (b, c) {
				(this.pos.x === b && this.pos.y === c) ||
					((ig.sizeHandler.dynamicClickableEntityDivs[
						this.identifier
					] = {}),
					(ig.sizeHandler.dynamicClickableEntityDivs[
						this.identifier
					].width = this.size.x),
					(ig.sizeHandler.dynamicClickableEntityDivs[
						this.identifier
					].height = this.size.y),
					(ig.sizeHandler.dynamicClickableEntityDivs[
						this.identifier
					].entity_pos_x = this.pos.x),
					(ig.sizeHandler.dynamicClickableEntityDivs[
						this.identifier
					].entity_pos_y = this.pos.y));
			},
			createClickableOutboundLayer: function (b, c, d, f) {
				var e = ig.domHandler.create('div');
				ig.domHandler.attr(e, 'id', b);
				var j = ig.domHandler.create('a');
				f
					? (ig.domHandler.attr(j, 'href', c),
					  ig.domHandler.attr(j, 'target', '_blank'))
					: ig.domHandler.attr(j, 'href', c);
				c = ig.domHandler.create('img');
				ig.domHandler.css(c, { width: '100%', height: '100%' });
				ig.domHandler.attr(c, 'src', d);
				d = Math.min(
					ig.sizeHandler.scaleRatioMultiplier.x,
					ig.sizeHandler.scaleRatioMultiplier.y
				);
				if (ig.ua.mobile) {
					f = ig.domHandler.getElementById('#canvas');
					f = ig.domHandler.getOffsets(f);
					var n = f.left,
						m = f.top;
					console.log(f.left);
					ig.sizeHandler.disableStretchToFitOnMobileFlag
						? ((f =
								Math.floor(
									n +
										this.pos.x *
											ig.sizeHandler.scaleRatioMultiplier
												.x
								) + 'px'),
						  (m =
								Math.floor(
									m +
										this.pos.y *
											ig.sizeHandler.scaleRatioMultiplier
												.y
								) + 'px'),
						  (n =
								Math.floor(
									this.size.x *
										ig.sizeHandler.scaleRatioMultiplier.x
								) + 'px'),
						  (d =
								Math.floor(
									this.size.y *
										ig.sizeHandler.scaleRatioMultiplier.y
								) + 'px'))
						: ((f =
								Math.floor(
									this.pos.x * ig.sizeHandler.sizeRatio.x
								) + 'px'),
						  (m =
								Math.floor(
									this.pos.y * ig.sizeHandler.sizeRatio.y
								) + 'px'),
						  (n =
								Math.floor(
									this.size.x * ig.sizeHandler.sizeRatio.x
								) + 'px'),
						  (d =
								Math.floor(
									this.size.y * ig.sizeHandler.sizeRatio.y
								) + 'px'));
				} else
					(f = ig.domHandler.getElementById('#canvas')),
						(f = ig.domHandler.getOffsets(f)),
						(n = f.left),
						(m = f.top),
						ig.sizeHandler.enableStretchToFitOnDesktopFlag
							? ((f =
									Math.floor(
										n +
											this.pos.x *
												ig.sizeHandler.sizeRatio.x
									) + 'px'),
							  (m =
									Math.floor(
										m +
											this.pos.y *
												ig.sizeHandler.sizeRatio.y
									) + 'px'),
							  (n =
									Math.floor(
										this.size.x * ig.sizeHandler.sizeRatio.x
									) + 'px'),
							  (d =
									Math.floor(
										this.size.y * ig.sizeHandler.sizeRatio.y
									) + 'px'))
							: ((f = Math.floor(n + this.pos.x * d) + 'px'),
							  (m = Math.floor(m + this.pos.y * d) + 'px'),
							  (n = Math.floor(this.size.x * d) + 'px'),
							  (d = Math.floor(this.size.y * d) + 'px'));
				ig.domHandler.css(e, {
					float: 'left',
					position: 'absolute',
					left: f,
					top: m,
					width: n,
					height: d,
					'z-index': 3,
				});
				ig.domHandler.addEvent(
					e,
					'mousemove',
					ig.input.mousemove.bind(ig.input),
					!1
				);
				ig.domHandler.appendChild(j, c);
				ig.domHandler.appendChild(e, j);
				ig.domHandler.appendToBody(e);
				ig.sizeHandler.dynamicClickableEntityDivs[b] = {};
				ig.sizeHandler.dynamicClickableEntityDivs[b].width =
					this.size.x;
				ig.sizeHandler.dynamicClickableEntityDivs[b].height =
					this.size.y;
				ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_x =
					this.pos.x;
				ig.sizeHandler.dynamicClickableEntityDivs[b].entity_pos_y =
					this.pos.y;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-branding-logo')
	.requires('game.entities.buttons.button', 'plugins.clickable-div-layer')
	.defines(function () {
		EntityButtonBrandingLogo = EntityButton.extend({
			type: ig.Entity.TYPE.A,
			gravityFactor: 0,
			logo: new ig.AnimationSheet(
				'branding/logo.png',
				_SETTINGS.Branding.Logo.Width,
				_SETTINGS.Branding.Logo.Height
			),
			zIndex: 10001,
			size: { x: 64, y: 66 },
			clickableLayer: null,
			link: null,
			newWindow: !1,
			div_layer_name: 'branding-logo',
			name: 'brandinglogo',
			init: function (b, c, d) {
				this.parent(b, c, d);
				if (!ig.global.wm) {
					if ('undefined' == typeof wm)
						if (_SETTINGS.Branding.Logo.Enabled)
							(this.size.x = _SETTINGS.Branding.Logo.Width),
								(this.size.y = _SETTINGS.Branding.Logo.Height),
								(this.anims.idle = new ig.Animation(
									this.logo,
									0,
									[0],
									!0
								)),
								(this.currentAnim = this.anims.idle),
								d &&
									d.centralize &&
									((this.pos.x =
										ig.system.width / 2 - this.size.x / 2),
									console.log(
										'centralize true ... centering branded logo ...'
									)),
								_SETTINGS.Branding.Logo.LinkEnabled &&
									((this.link = _SETTINGS.Branding.Logo.Link),
									(this.newWindow =
										_SETTINGS.Branding.Logo.NewWindow),
									(this.clickableLayer =
										new ClickableDivLayer(this)));
						else {
							this.kill();
							return;
						}
					this.div_layer_name = d.div_layer_name
						? d.div_layer_name
						: 'branding-logo';
				}
			},
			show: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.show(b);
			},
			hide: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.hide(b);
			},
			clicked: function () {},
			clicking: function () {},
			released: function () {},
		});
	});
ig.baked = !0;
ig.module('game.entities.branding-logo-placeholder')
	.requires('impact.entity', 'game.entities.buttons.button-branding-logo')
	.defines(function () {
		EntityBrandingLogoPlaceholder = ig.Entity.extend({
			gravityFactor: 0,
			size: { x: 32, y: 32 },
			_wmDrawBox: !0,
			_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
			init: function (b, c, d) {
				this.parent(b, c, d);
				if (d)
					switch (
						(console.log(
							'settings found ... using that div layer name'
						),
						(b = d.div_layer_name),
						console.log('settings.centralize:', d.centralize),
						d.centralize)
					) {
						case 'true':
							console.log('centralize true');
							centralize = !0;
							break;
						case 'false':
							console.log('centralize false');
							centralize = !1;
							break;
						default:
							console.log('default ... centralize false'),
								(centralize = !1);
					}
				else (b = 'branding-logo'), (centralize = !1);
				if ('undefined' == typeof wm) {
					if (_SETTINGS.Branding.Logo.Enabled)
						try {
							ig.game.spawnEntity(
								EntityButtonBrandingLogo,
								this.pos.x,
								this.pos.y,
								{ div_layer_name: b, centralize: centralize }
							);
						} catch (f) {
							console.log(f);
						}
					this.kill();
				}
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-text')
	.requires('game.entities.buttons.button', 'plugins.data.vector')
	.defines(function () {
		EntityButtonText = EntityButton.extend({
			textColor: '#FF0FFF',
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.context = ig.system.context;
			},
			draw: function () {
				this.parent();
				null != this.text &&
					((this.context.font = this.textSize + 'px janda-manatee'),
					(this.context.textAlign = 'center'),
					(this.context.textBaseline = 'middle'),
					(this.context.fillStyle = this.textColor),
					this.context.fillText(
						this.text,
						this.pos.x + this.size.x / 2,
						this.pos.y + this.size.y / 2
					));
			},
			show: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.show(b);
			},
			hide: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.hide(b);
			},
			released: function () {},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-more-games')
	.requires(
		'game.entities.buttons.button-text',
		'plugins.clickable-div-layer'
	)
	.defines(function () {
		EntityButtonMoreGames = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-mainmenu/btn-moregames.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			killOutLayer: !1,
			zIndex: 2,
			isCLickable: !1,
			clickableLayer: null,
			link: null,
			newWindow: !1,
			div_layer_name: 'more-games',
			name: 'moregames',
			allowChange: !1,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				ig.global.wm ||
					((this.div_layer_name = d.div_layer_name
						? d.div_layer_name
						: 'more-games'),
					_SETTINGS.MoreGames.Enabled
						? (_SETTINGS.MoreGames.Link &&
								(this.link = _SETTINGS.MoreGames.Link),
						  _SETTINGS.MoreGames.NewWindow &&
								(this.newWindow =
									_SETTINGS.MoreGames.NewWindow),
						  (this.clickableLayer = new ClickableDivLayer(this)))
						: this.kill());
			},
			update: function () {
				this.parent();
				ig.game.disableButtonMoreGames ? this.hide() : this.show();
			},
			over: function () {
				!ig.ua.mobile &&
					ig.game.allowToClick &&
					this.setScale(1.1, 1.1);
			},
			leave: function () {
				ig.ua.mobile || this.setScale(1, 1);
			},
			show: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.show(b);
			},
			hide: function () {
				var b = ig.domHandler.getElementById('#' + this.div_layer_name);
				ig.domHandler.hide(b);
			},
			easeIn: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {
							ig.game.easallowToClickeButton = !0;
							var b = ig.domHandler.getElementById(
								'#' + this.div_layer_name
							);
							ig.domHandler.show(b);
						}.bind(this),
					}
				).start();
			},
			easeOut: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y:
								this.oriPos.y +
								ig.system.height -
								this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Linear.EaseNone,
						onComplete: function () {
							ig.game.allowToClick = !0;
							var b = ig.domHandler.getElementById(
								'#' + this.div_layer_name
							);
							ig.domHandler.hide(b);
						}.bind(this),
					}
				).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.opening-shield')
	.requires('impact.entity')
	.defines(function () {
		EntityOpeningShield = ig.Entity.extend({
			size: { x: 48, y: 48 },
			move: 0,
			mIconAnim: 0,
			shieldAnim: 0,
			titleAnim: 0,
			shieldImage: new ig.Image('media/graphics/opening/shield.png'),
			mIconImage: new ig.Image('media/graphics/opening/m_icon.png'),
			titleImage: new ig.Image('media/graphics/opening/title.png'),
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			ready: function () {
				if (!ig.wm)
					if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
						this.initTimer = new ig.Timer(0.1);
						try {
							ig.soundHandler.playSound(
								ig.soundHandler.SOUNDID.openingSound
							);
						} catch (b) {
							console.log(b);
						}
					} else
						ig.game.director.nextLevel(),
							(ig.system.context.globalAlpha = 1),
							this.kill();
			},
			update: function () {
				this.parent();
				this.updateOriginalShieldOpening();
			},
			draw: function () {
				this.parent();
				ig.global.wm ||
					(this.nextLevelTimer &&
						0 > this.nextLevelTimer.delta() &&
						(ig.system.context.globalAlpha =
							-this.nextLevelTimer.delta()),
					this.drawOriginalShieldOpening());
			},
			updateOriginalShieldOpening: function () {
				this.initTimer &&
					0 < this.initTimer.delta() &&
					((this.initTimer = null),
					(this.sheildTimer = new ig.Timer(0.05)));
				this.sheildTimer &&
					0 < this.sheildTimer.delta() &&
					(3 > this.shieldAnim
						? (this.shieldAnim++, this.sheildTimer.reset())
						: ((this.sheildTimer = null),
						  (this.moveTimer = new ig.Timer(0.001)),
						  (this.mIconTimer = new ig.Timer(0.05)),
						  (this.titleTimer = new ig.Timer(0.15))));
				this.moveTimer &&
					0 < this.moveTimer.delta() &&
					((this.move += 0.3), this.moveTimer.reset());
				this.mIconTimer &&
					0 < this.mIconTimer.delta() &&
					(12 > this.mIconAnim
						? (this.mIconAnim++, this.moveTimer.reset())
						: (this.mIconTimer = null));
				this.titleTimer &&
					0 < this.titleTimer.delta() &&
					(11 > this.titleAnim
						? (this.titleAnim++, this.titleTimer.reset())
						: ((this.titleTimer = null),
						  (this.nextLevelTimer = new ig.Timer(1))));
				this.nextLevelTimer &&
					0 < this.nextLevelTimer.delta() &&
					((this.nextLevelTimer = null),
					ig.game.director.nextLevel(),
					(ig.system.context.globalAlpha = 1));
			},
			drawOriginalShieldOpening: function () {
				if (this.moveTimer) {
					var b = ig.system.context;
					b.save();
					var c = ig.system.width / 2,
						d = ig.system.height / 2;
					b.translate(c, d);
					b.rotate((this.move * Math.PI) / 180);
					b.beginPath();
					b.moveTo(0, 0);
					for (var f = 0, e = 1; 48 >= e; e += 1)
						b.lineTo(
							0 + 800 * Math.cos((2 * e * Math.PI) / 48),
							0 + 800 * Math.sin((2 * e * Math.PI) / 48)
						),
							f++,
							2 == f && ((f = 0), b.lineTo(0, 0));
					b.translate(-c, -d);
					c = b.createRadialGradient(c, d, 100, c, d, 250);
					c.addColorStop(0, 'rgba(255,255,255,0.1)');
					c.addColorStop(1, 'rgba(0,0,0,0)');
					b.fillStyle = c;
					b.fill();
					b.restore();
				}
				this.shieldImage.drawTile(
					ig.system.width / 2 - 91,
					0 - (768 - ig.system.height) / 2,
					this.shieldAnim,
					182,
					768
				);
				this.moveTimer &&
					(this.mIconImage.drawTile(
						ig.system.width / 2 - 96,
						ig.system.height / 2 - 70,
						this.mIconAnim,
						166,
						160
					),
					this.titleImage.drawTile(
						ig.system.width / 2 - 204,
						ig.system.height / 2 + 100,
						this.titleAnim,
						409,
						76
					));
				ig.system.context.globalAlpha = 1;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.opening-kitty')
	.requires('impact.entity')
	.defines(function () {
		EntityOpeningKitty = ig.Entity.extend({
			size: { x: 48, y: 48 },
			kittyAnim: -1,
			kittyImage: new ig.Image('media/graphics/opening/kitty.png'),
			kittyTitleImage: new ig.Image(
				'media/graphics/opening/kittytitle.png'
			),
			soundKey: 'kittyopeningSound',
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			ready: function () {
				if (!ig.wm)
					if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
						this.initTimer = new ig.Timer(0.1);
						try {
							ig.soundHandler.sfxPlayer.play(this.soundKey);
						} catch (b) {
							console.log(b);
						}
					} else
						ig.game.director.nextLevel(),
							(ig.system.context.globalAlpha = 1),
							this.kill();
			},
			update: function () {
				this.parent();
				this.updateKittyOpening();
			},
			draw: function () {
				this.parent();
				ig.global.wm ||
					(this.nextLevelTimer &&
						0 > this.nextLevelTimer.delta() &&
						(ig.system.context.globalAlpha =
							-this.nextLevelTimer.delta()),
					this.drawKittyOpening());
			},
			updateKittyOpening: function () {
				this.initTimer &&
					0 < this.initTimer.delta() &&
					((this.initTimer = null),
					(this.kittyTimer = new ig.Timer(0.15)));
				this.kittyTimer &&
					0 < this.kittyTimer.delta() &&
					(7 > this.kittyAnim
						? (this.kittyAnim++, this.kittyTimer.reset())
						: ((this.kittyTimer = null),
						  (this.nextLevelTimer = new ig.Timer(2))));
				this.nextLevelTimer &&
					0 < this.nextLevelTimer.delta() &&
					((this.nextLevelTimer = null),
					ig.game.director.nextLevel(),
					(ig.system.context.globalAlpha = 1));
			},
			drawKittyOpening: function () {
				var b = ig.system.context.createLinearGradient(
					0,
					0,
					0,
					ig.system.height
				);
				b.addColorStop(0, '#ffed94');
				b.addColorStop(1, '#ffcd85');
				ig.system.context.fillStyle = b;
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				0 <= this.kittyAnim &&
					(this.kittyImage.drawTile(
						ig.system.width / 2 - this.kittyImage.width / 8,
						ig.system.height / 2 - this.kittyImage.height / 4,
						this.kittyAnim,
						218,
						325
					),
					this.kittyTitleImage.drawTile(
						ig.system.width / 2 - this.kittyTitleImage.width / 2,
						ig.system.height / 2 + this.kittyImage.height / 4 + 10,
						this.kittyAnim,
						380,
						37
					));
				ig.system.context.globalAlpha = 1;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.pointer')
	.requires('impact.entity')
	.defines(function () {
		EntityPointer = ig.Entity.extend({
			checkAgainst: ig.Entity.TYPE.BOTH,
			isFirstPressed: !1,
			isPressed: !1,
			isReleased: !1,
			isHovering: !1,
			hoveringItem: null,
			objectArray: [],
			clickedObjectList: [],
			ignorePause: !0,
			zIndex: 5e3,
			check: function (b) {
				this.objectArray.push(b);
			},
			clickObject: function (b) {
				this.isFirstPressed &&
					'function' == typeof b.clicked &&
					(b.clicked(), this.addToClickedObjectList(b));
				this.isPressed &&
					!this.isReleased &&
					'function' == typeof b.clicking &&
					b.clicking();
				this.isReleased &&
					'function' == typeof b.released &&
					(b.released(), this.removeFromClickedObjectList(b));
			},
			downAnim: function () {},
			upAnim: function () {},
			refreshPos: function () {
				this.pos = ig.game.io.getClickPos();
				this.pos.x += ig.game.screen.x;
				this.pos.y += ig.game.screen.y;
				this.pos.x -= 0.5 * this.size.x;
				this.pos.y -= 0.5 * this.size.y;
			},
			update: function () {
				this.parent();
				this.refreshPos();
				var b = null,
					c = -1;
				for (a = this.objectArray.length - 1; -1 < a; a--)
					this.objectArray[a].zIndex > c &&
						((c = this.objectArray[a].zIndex),
						(b = this.objectArray[a]));
				if (null != b)
					null != this.hoveringItem
						? (this.hoveringItem != b &&
								('function' == typeof this.hoveringItem.leave &&
									this.hoveringItem.leave(),
								'function' == typeof b.over && b.over()),
						  this.isReleased &&
								null != this.clickedObjectList[0] &&
								this.hoveringItem !=
									this.clickedObjectList[0] &&
								('function' ==
									typeof this.clickedObjectList[0]
										.releasedOutside &&
									this.clickedObjectList[0].releasedOutside(),
								(this.clickedObjectList = [])))
						: 'function' == typeof b.over && b.over(),
						(this.hoveringItem = b),
						this.clickObject(b),
						(this.objectArray = []);
				else if (
					(null != this.hoveringItem &&
						'function' == typeof this.hoveringItem.leave &&
						(this.hoveringItem.leave(), (this.hoveringItem = null)),
					this.isReleased)
				) {
					for (b = 0; b < this.clickedObjectList.length; b++)
						(c = this.clickedObjectList[b]),
							'function' == typeof c.releasedOutside &&
								c.releasedOutside();
					this.clickedObjectList = [];
				}
				this.isFirstPressed = ig.input.pressed('click');
				this.isReleased = ig.input.released('click');
				this.isPressed = ig.input.state('click');
				ig.input.pressed('click') && this.downAnim();
				ig.input.released('click') && this.upAnim();
			},
			addToClickedObjectList: function (b) {
				this.clickedObjectList.push(b);
			},
			removeFromClickedObjectList: function (b) {
				for (
					var c = [], d = 0;
					d < this.clickedObjectList.length;
					d++
				) {
					var f = this.clickedObjectList[d];
					f != b && c.push(f);
				}
				this.clickedObjectList = c;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.pointer-selector')
	.requires('game.entities.pointer')
	.defines(function () {
		EntityPointerSelector = EntityPointer.extend({
			zIndex: 1e3,
			_wmDrawBox: !0,
			_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
			size: { x: 20, y: 20 },
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.select')
	.requires('impact.entity')
	.defines(function () {
		EntitySelect = ig.Entity.extend({
			type: ig.Entity.TYPE.B,
			checkAgainst: ig.Entity.TYPE.A,
			collides: ig.Entity.COLLIDES.NEVER,
			canSelect: !1,
			canSelectTimerDuration: 0.35,
			zIndex: 99999,
			isHovering: !1,
			isSelected: !1,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.canSelectTimer = new ig.Timer(this.canSelectTimerDuration);
			},
			doesClickableLayerExist: function (b) {
				for (k in dynamicClickableEntityDivs) if (k == b) return !0;
				return !1;
			},
			checkClickableLayer: function (b, c, d) {
				'undefined' == typeof wm &&
					(this.doesClickableLayerExist(b)
						? (ig.game.showOverlay([b]),
						  $('#' + b)
								.find('[href]')
								.attr('href', c))
						: this.createClickableOutboundLayer(
								b,
								c,
								'media/graphics/misc/invisible.png',
								d
						  ));
			},
			createClickableOutboundLayer: function (b, c, d, f) {
				var e = ig.$new('div');
				e.id = b;
				document.body.appendChild(e);
				$('#' + e.id).css('float', 'left');
				$('#' + e.id).css('width', this.size.x * multiplier);
				$('#' + e.id).css('height', this.size.y * multiplier);
				$('#' + e.id).css('position', 'absolute');
				var j = w / 2 - destW / 2,
					n = h / 2 - destH / 2;
				w == mobileWidth
					? ($('#' + e.id).css('left', this.pos.x),
					  $('#' + e.id).css('top', this.pos.y))
					: ($('#' + e.id).css('left', j + this.pos.x * multiplier),
					  $('#' + e.id).css('top', n + this.pos.y * multiplier));
				f
					? $('#' + e.id).html(
							"<a target='_blank' href='" +
								c +
								"'><img style='width:100%;height:100%' src='" +
								d +
								"'></a>"
					  )
					: $('#' + e.id).html(
							"<a href='" +
								c +
								"'><img style='width:100%;height:100%' src='" +
								d +
								"'></a>"
					  );
				dynamicClickableEntityDivs[b] = {};
				dynamicClickableEntityDivs[b].width = $('#' + e.id).width();
				dynamicClickableEntityDivs[b].height = $('#' + e.id).height();
				dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
				dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
			},
			hovered: function () {
				this.isHovering = !0;
				this.dehoverOthers();
			},
			dehoverOthers: function () {
				var b = ig.game.getEntitiesByType(EntitySelect);
				for (i = 0; i < b.length; i++)
					b[i] != this && (b[i].isHovering = !1);
			},
			deselectOthers: function () {
				var b = ig.game.getEntitiesByType(EntitySelect);
				for (i = 0; i < b.length; i++)
					b[i] != this && (b[i].isSelected = !1);
			},
			update: function () {
				this.parent();
				this.canSelectTimer &&
					0 < this.canSelectTimer.delta() &&
					((this.canSelect = !0), (this.canSelectTimer = null));
			},
		});
	});
ig.baked = !0;
ig.module('game.levels.opening')
	.requires('impact.image', 'game.entities.opening-kitty')
	.defines(function () {
		LevelOpening = {
			entities: [{ type: 'EntityOpeningKitty', x: 520, y: 212 }],
			layer: [],
		};
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-sound')
	.requires('game.entities.buttons.button')
	.defines(function () {
		EntityButtonSound = EntityButton.extend({
			type: ig.Entity.TYPE.A,
			gravityFactor: 0,
			logo: new ig.AnimationSheet(
				'branding/logo.png',
				_SETTINGS.Branding.Logo.Width,
				_SETTINGS.Branding.Logo.Height
			),
			zIndex: 10001,
			size: { x: 50, y: 50 },
			mutetest: !1,
			name: 'soundtest',
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			draw: function () {
				this.parent();
				ig.system.context.fillRect(this.pos.x, this.pos.y, 50, 50);
			},
			clicked: function () {
				console.log('pressed');
				this.mutetest
					? (console.log('unmute'),
					  ig.soundHandler.unmuteAll(!0),
					  (this.mutetest = !1))
					: (console.log('mute'),
					  ig.soundHandler.muteAll(!0),
					  (this.mutetest = !0));
			},
			clicking: function () {},
			released: function () {},
		});
	});
ig.baked = !0;
ig.module('game.entities.test')
	.requires('impact.entity')
	.defines(function () {
		EntityTest = ig.Entity.extend({
			zIndex: 99999,
			pos: new Vector2(0, 0),
			size: new Vector2(20, 20),
			color: new ColorRGB(125, 255, 125, 1),
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				this.parent();
				var b = ig.system.context;
				b.fillStyle = this.color.getHex();
				b.fillRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.test-control')
	.requires('impact.entity', 'game.entities.test')
	.defines(function () {
		EntityTestControl = ig.Entity.extend({
			zIndex: 99999,
			size: new Vector2(20, 20),
			testEnt: null,
			tween: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.global.wm ||
					((ig.game.testControl = this), this.initTestCase3());
				ig.game.spawnEntity(ig.FullscreenButton, 5, 5, {
					enterImage: new ig.Image(
						'media/graphics/misc/enter-fullscreen-transparent.png'
					),
					exitImage: new ig.Image(
						'media/graphics/misc/exit-fullscreen-transparent.png'
					),
				});
			},
			initTestCase1: function () {
				this.initTestCase1Initialized = !0;
				this.testEnt = ig.game.spawnEntity(EntityTest, 200, 200);
				this.tweenSlow = new ig.TweenDef(this.testEnt.pos)
					.to({ x: 100, y: 100 }, 2e3)
					.easing(ig.Tween.Easing.Bounce.EaseOut)
					.interpolation(ig.Tween.Interpolation.Bezier)
					.repeat(2)
					.yoyo(!0);
				this.tweenFast = new ig.TweenDef(this.testEnt.pos)
					.to({ x: 300, y: 300 }, 500)
					.repeat(4)
					.yoyo(!0);
				this.tweenSlow.chain(this.tweenFast);
				this.tweenFast.chain(this.tweenSlow);
				this.tweenFast.start();
			},
			initTestCase2: function () {
				this.initTestCase2Initialized = !0;
				this.coordsTween = new ig.TweenDef({ x: 0, y: 0 })
					.to({ x: 100, y: 100 }, 1e3)
					.easing(ig.Tween.Easing.Bounce.EaseInOut)
					.onStart(
						function (b) {
							console.log('Start', b);
							this.coordsTween.pause();
						}.bind(this)
					)
					.onUpdate(
						function () {
							0.5 <= this.coordsTween._currentElapsed &&
								this.coordsTween.stop();
						}.bind(this)
					)
					.onStop(
						function (b) {
							console.log('Stop', b);
						}.bind(this)
					)
					.onComplete(
						function (b) {
							console.log('Complete', b);
						}.bind(this)
					)
					.onPause(
						function (b) {
							console.log('Pause', b);
							this.coordsTween.resume();
						}.bind(this)
					)
					.onResume(
						function (b) {
							console.log('Resume', b);
						}.bind(this)
					)
					.start();
			},
			initTestCase3: function () {
				this.initTestCase3Initialized = !0;
				this.spawnTweenEntity();
				this.spawnTweenControlButtons();
			},
			initTestCase4: function () {
				this.initTestCase4Initialized = !0;
				this.testEntityA = ig.game.spawnEntity(EntityTest, 450, 200, {
					control: this,
					size: new Vector2(20, 40),
				});
				this.testEntityB = ig.game.spawnEntity(EntityTest, 475, 200, {
					control: this,
					size: new Vector2(40, 20),
				});
				this.testEntityB.color.r = 255;
				this.testEntityB.color.g = 0;
				this.testEntityB.color.b = 0;
			},
			spawnTweenEntity: function () {
				this.tweenEntity = ig.game.spawnEntity(EntityTest, 895, 49, {
					control: this,
					color: new ColorRGB(255, 125, 125, 1),
				});
				this.tweenControl = new ig.TweenDef(this.tweenEntity.pos).to(
					{ y: 330 },
					5e3
				);
			},
			spawnTweenControlButtons: function () {
				this.tweenControlButtons = {
					start: ig.game.spawnEntity(EntityButton, 800, 50, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
					stop: ig.game.spawnEntity(EntityButton, 800, 100, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
					pause: ig.game.spawnEntity(EntityButton, 800, 150, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
					resume: ig.game.spawnEntity(EntityButton, 800, 200, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
					end: ig.game.spawnEntity(EntityButton, 800, 250, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
					pGame: ig.game.spawnEntity(EntityButton, 800, 300, {
						control: this,
						size: new Vector2(68, 48),
						color: new ColorRGB(255, 125, 125, 1),
					}),
				};
				this.setupTweenControlButtons();
			},
			setupTweenControlButtons: function () {
				var b = null;
				for (buttonKey in this.tweenControlButtons)
					(b = this.tweenControlButtons[buttonKey]),
						(b.name = buttonKey),
						(b.backgroundColor = b.color.getStyle()),
						(b.foregroundColor = b.color
							.getInvertedColor()
							.getStyle()),
						(b.draw = function () {
							ig.system.context.fillStyle = this.backgroundColor;
							ig.system.context.fillRect(
								this.pos.x,
								this.pos.y,
								this.size.x,
								this.size.y
							);
							ig.system.context.fillStyle = this.foregroundColor;
							ig.system.context.font = '18px Arial';
							ig.system.context.textBaseline = 'middle';
							ig.system.context.textAlign = 'center';
							ig.system.context.fillText(
								this.name,
								this.pos.x + 0.5 * this.size.x,
								this.pos.y + 0.5 * this.size.y
							);
						});
				this.tweenControlButtons.start.clicked = function () {
					console.log('start');
					this.control.tweenControl.start();
				};
				this.tweenControlButtons.start.clicking = function () {};
				this.tweenControlButtons.start.released = function () {};
				this.tweenControlButtons.stop.clicked = function () {
					console.log('stop');
					this.control.tweenControl.stop();
				};
				this.tweenControlButtons.stop.clicking = function () {};
				this.tweenControlButtons.stop.released = function () {};
				this.tweenControlButtons.pause.clicked = function () {
					console.log('pause');
					this.control.tweenControl.pause();
				};
				this.tweenControlButtons.pause.clicking = function () {};
				this.tweenControlButtons.pause.released = function () {};
				this.tweenControlButtons.resume.clicked = function () {
					console.log('resume');
					this.control.tweenControl.resume();
				};
				this.tweenControlButtons.resume.clicking = function () {};
				this.tweenControlButtons.resume.released = function () {};
				this.tweenControlButtons.end.clicked = function () {
					console.log('end');
					this.control.tweenControl.end();
				};
				this.tweenControlButtons.end.clicking = function () {};
				this.tweenControlButtons.end.released = function () {};
				this.tweenControlButtons.pGame.clicked = function () {
					ig.game.pauseGame();
				};
				this.tweenControlButtons.pGame.clicking = function () {};
				this.tweenControlButtons.pGame.released = function () {};
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				this.parent();
				!0 === this.testCase3Initialized && this.drawTestCase3Info();
			},
			drawTestCase3Info: function () {},
		});
	});
ig.baked = !0;
ig.module('game.levels.test-desktop')
	.requires(
		'impact.image',
		'game.entities.branding-logo-placeholder',
		'game.entities.buttons.button-more-games',
		'game.entities.pointer',
		'game.entities.buttons.button-sound',
		'game.entities.test-control'
	)
	.defines(function () {
		LevelTestDesktop = {
			entities: [
				{
					type: 'EntityBrandingLogoPlaceholder',
					x: 296,
					y: 396,
					settings: {
						div_layer_name: 'layer_mainmenu',
						centralize: 'true',
					},
				},
				{ type: 'EntityPointer', x: 608, y: 120 },
				{ type: 'EntityButtonSound', x: 332, y: 284 },
				{ type: 'EntityTestControl', x: 0, y: 0 },
			],
			layer: [
				{
					name: 'background',
					width: 16,
					height: 9,
					linkWithCollision: !1,
					visible: 1,
					tilesetName:
						'media/graphics/backgrounds/desktop/background.jpg',
					repeat: !1,
					preRender: !0,
					distance: '1',
					tilesize: 60,
					foreground: !1,
					data: [
						[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
						[
							17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
							30, 31, 32,
						],
						[
							33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
							46, 47, 48,
						],
						[
							49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61,
							62, 63, 64,
						],
						[
							65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
							78, 79, 80,
						],
						[
							81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93,
							94, 95, 96,
						],
						[
							97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
							108, 109, 110, 111, 112,
						],
						[
							113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
							123, 124, 125, 126, 127, 128,
						],
						[
							129, 130, 131, 132, 133, 134, 135, 136, 137, 138,
							139, 140, 141, 142, 143, 144,
						],
					],
				},
			],
		};
		LevelTestDesktopResources = [
			new ig.Image('media/graphics/backgrounds/desktop/background.jpg'),
		];
	});
ig.baked = !0;
ig.module('game.levels.test-mobile')
	.requires(
		'impact.image',
		'game.entities.branding-logo-placeholder',
		'game.entities.buttons.button-more-games',
		'game.entities.pointer',
		'game.entities.buttons.button-sound'
	)
	.defines(function () {
		LevelTestMobile = {
			entities: [
				{
					type: 'EntityBrandingLogoPlaceholder',
					x: 216,
					y: 548,
					settings: {
						div_layer_name: 'layer_mainmenu',
						centralize: 'true',
					},
				},
				{ type: 'EntityPointer', x: 444, y: 192 },
				{ type: 'EntityButtonSound', x: 245, y: 490 },
			],
			layer: [
				{
					name: 'background',
					width: 9,
					height: 16,
					linkWithCollision: !1,
					visible: 1,
					tilesetName:
						'media/graphics/backgrounds/mobile/background.jpg',
					repeat: !1,
					preRender: !0,
					distance: '1',
					tilesize: 60,
					foreground: !1,
					data: [
						[1, 2, 3, 4, 5, 6, 7, 8, 9],
						[10, 11, 12, 13, 14, 15, 16, 17, 18],
						[19, 20, 21, 22, 23, 24, 25, 26, 27],
						[28, 29, 30, 31, 32, 33, 34, 35, 36],
						[37, 38, 39, 40, 41, 42, 43, 44, 45],
						[46, 47, 48, 49, 50, 51, 52, 53, 54],
						[55, 56, 57, 58, 59, 60, 61, 62, 63],
						[64, 65, 66, 67, 68, 69, 70, 71, 72],
						[73, 74, 75, 76, 77, 78, 79, 80, 81],
						[82, 83, 84, 85, 86, 87, 88, 89, 90],
						[91, 92, 93, 94, 95, 96, 97, 98, 99],
						[100, 101, 102, 103, 104, 105, 106, 107, 108],
						[109, 110, 111, 112, 113, 114, 115, 116, 117],
						[118, 119, 120, 121, 122, 123, 124, 125, 126],
						[127, 128, 129, 130, 131, 132, 133, 134, 135],
						[136, 137, 138, 139, 140, 141, 142, 143, 144],
					],
				},
			],
		};
		LevelTestMobileResources = [
			new ig.Image('media/graphics/backgrounds/mobile/background.jpg'),
		];
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-play')
	.requires('game.entities.buttons.button-text')
	.defines(function () {
		EntityButtonPlay = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-mainmenu/btn-play.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 2,
			killOutLayer: !1,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
			},
			clicked: function () {
				ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(ig.game.allowToClick = !1),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.gd.show(this.doClick.bind(this));
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				this.click = ig.game.allowToClick = !0;
				ig.game.director.nextLevel();
			},
			over: function () {
				!ig.ua.mobile &&
					ig.game.allowToClick &&
					this.setScale(1.1, 1.1);
			},
			leave: function () {
				!ig.ua.mobile && ig.game.allowToClick && this.setScale(1, 1);
			},
			show: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
			hide: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y:
								this.oriPos.y +
								ig.system.height -
								this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Linear.EaseNone,
						onComplete: function () {
							ig.game.allowToClick = !0;
							ig.game.director.nextLevel();
						}.bind(this),
					}
				).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.settings-controller')
	.requires(
		'game.entities.global.marketjs-entity',
		'game.entities.buttons.button-text'
	)
	.defines(function () {
		EntitySettingsController = EntityMarketjsEntity.extend({
			imageBg: new ig.Image(
				'media/graphics/ui-settings/window-settings.png'
			),
			imageBg1: new ig.Image(
				'media/graphics/ui-settings/window-settings.png'
			),
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/window-settings.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			zIndex: 400,
			killOutLayer: !1,
			isSettingsMenu: !0,
			init: function (b, c, d) {
				this.isSettingsMenu = d.isSettingsMenu;
				this.idleSheetInfo = {
					sheetImage: this.imageBg,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					1,
					[0]
				);
				this.parent(b, c, d);
				this.clickBlocker = ig.game.spawnEntity(
					EntityClickBlockerSettings,
					0,
					0
				);
				this.barSfx = ig.game.spawnEntity(
					EntityBar,
					ig.system.width,
					ig.system.height,
					{ zIndex: this.zIndex + 1 }
				);
				this.btnSfx = ig.game.spawnEntity(
					EntityButtonSfx,
					ig.system.width,
					ig.system.height,
					{ bar: this.barSfx, zIndex: this.zIndex + 2 }
				);
				this.barBgm = ig.game.spawnEntity(
					EntityBar,
					ig.system.width,
					ig.system.height,
					{ zIndex: this.zIndex + 1 }
				);
				this.btnBgm = ig.game.spawnEntity(
					EntityButtonBgm,
					ig.system.width,
					ig.system.height,
					{ bar: this.barBgm, zIndex: this.zIndex + 2 }
				);
				this.btnResume = ig.game.spawnEntity(
					EntityBtnPauseResume,
					0,
					ig.system.height + 200
				);
				this.btnRestart = ig.game.spawnEntity(
					EntityBtnPauseRestart,
					0,
					ig.system.height + 200
				);
				this.btnMenu = ig.game.spawnEntity(
					EntityBtnPauseMenu,
					0,
					ig.system.height + 200
				);
				this.btnSettingsMenu = ig.game.spawnEntity(
					EntityBtnSettingsMenu,
					0,
					ig.system.height + 200
				);
				this.pos.y += ig.system.height;
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				this.parent();
				ig.game.sortEntitiesDeferred();
				this.ready = !0;
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			update: function () {
				this.parent();
				this.barSfx.pos.x =
					this.pos.x +
					this.size.x / 1.65 -
					this.barSfx.size.x / 2 -
					10;
				this.barSfx.pos.y =
					this.pos.y +
					(9.5 * this.size.y) / 24 -
					this.barSfx.size.y / 2 -
					45;
				this.barBgm.pos.x =
					this.pos.x +
					this.size.x / 1.65 -
					this.barSfx.size.x / 2 -
					10;
				this.barBgm.pos.y =
					this.pos.y +
					(14 * this.size.y) / 24 -
					this.barSfx.size.y / 2 -
					30;
				!1 == this.isSettingsMenu
					? ((this.btnResume.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.btnResume.size.x / 2),
					  (this.btnResume.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.btnResume.size.y / 2 -
							10),
					  (this.btnMenu.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.btnMenu.size.x / 2 -
							130),
					  (this.btnMenu.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.btnMenu.size.y / 2 -
							9),
					  (this.btnRestart.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.btnRestart.size.x / 2 +
							130),
					  (this.btnRestart.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.btnRestart.size.y / 2 -
							9))
					: ((this.btnSettingsMenu.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.btnResume.size.x / 2),
					  (this.btnSettingsMenu.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.btnResume.size.y / 2 -
							10));
				if (
					!0 == this.btnResume.click ||
					!0 == this.btnSettingsMenu.click
				)
					(this.btnResume.click = !1),
						(this.btnSettingsMenu.click = !1),
						this.easeOut(0.4),
						setTimeout(
							function () {
								this.clickBlocker.hide();
							}.bind(this),
							400
						);
			},
			draw: function () {
				this.parent();
				var b = ig.system.context;
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#37AFFD';
				b.textAlign = 'center';
				!0 == this.isSettingsMenu
					? b.fillText(
							_STRINGS.Game.Settings,
							ig.system.width / 2,
							this.pos.y + 27
					  )
					: b.fillText(
							_STRINGS.Game.Paused,
							ig.system.width / 2,
							this.pos.y + 27
					  );
				b.restore();
			},
			easeIn: function (b) {
				ig.game.gameIsPaused = !0;
				ig.game.allowToClick = !1;
				this.clickBlocker.show();
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
			easeOut: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y:
								this.oriPos.y -
								this.size.y / 2 +
								ig.system.height +
								100,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseIn,
						onComplete: function () {
							ig.game.allowToClick = !0;
							ig.game.gameIsPaused = !1;
						}.bind(this),
					}
				).start();
			},
		});
		EntityClickBlockerSettings = EntityMarketjsEntity.extend({
			killOutLayer: !1,
			zIndex: 300,
			type: ig.Entity.TYPE.A,
			alphaValue: 0.5,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.size.x = ig.system.width;
				this.size.y = ig.system.height;
			},
			draw: function () {
				ig.system.context.fillStyle =
					'rgba(0,0,0,' + this.alphaValue + ')';
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				this.parent();
			},
			show: function () {
				this.alphaValue = 0.5;
				this.type = ig.Entity.TYPE.A;
				ig.game.disableButtonMoreGames = !0;
			},
			hide: function () {
				this.alphaValue = 0;
				this.type = ig.Entity.TYPE.NONE;
				ig.game.disableButtonMoreGames = !1;
			},
		});
		EntityBtnPause = EntityButtonText.extend({
			idleSheetInfo: null,
			checkAgainst: ig.Entity.TYPE.BOTH,
			killOutLayer: !1,
			textColor: '#FFFFFF',
			zIndex: 1234,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
			},
			clicked: function () {
				ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(ig.game.allowToClick = !1),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
		});
		EntityBtnPauseResume = EntityBtnPause.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-resume.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				this.click = !0;
				ig.game.settingIsShowed = !1;
			},
		});
		EntityBtnPauseRestart = EntityBtnPause.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-restart.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				ig.gd.show(this.restartGame.bind(this));
			},
			restartGame: function () {
				ig.game.gameIsPaused = !1;
				ig.game.levelIsClear = !1;
				ig.game.director.reloadLevel();
			},
		});
		EntityBtnPauseMenu = EntityBtnPause.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-menu.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				ig.gd.show(this.menuGame.bind(this));
			},
			menuGame: function () {
				ig.game.gameIsPaused = !1;
				ig.game.director.loadLevel(1);
			},
		});
		EntityBtnSettingsMenu = EntityBtnPause.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-resume.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				this.click = !0;
			},
		});
		EntityBar = EntityButton.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/slider-frame.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			bar: new ig.Image('media/graphics/ui-settings/slider-bar.png'),
			zIndex: 3,
			killOutLayer: !1,
			scaleX: 0,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
			},
			draw: function () {
				this.parent();
				0 < this.scaleX &&
					this.bar.draw(
						this.pos.x - ig.game.screen.x,
						this.pos.y,
						0,
						0,
						this.bar.width * this.scaleX,
						this.bar.height
					);
			},
		});
		EntityButtonSfx = EntityButton.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-slider.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			iconSfx: new ig.Image('media/graphics/ui-settings/icon-sound.png'),
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 4,
			killOutLayer: !1,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.scale = ig.game.volume.sfx;
				this.bar.scaleX = ig.game.volume.sfx;
			},
			update: function () {
				this.parent();
				this.pos.x =
					this.bar.pos.x +
					(this.bar.size.x - this.size.x) * ig.game.volSfx;
				this.pos.y =
					this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
				this.move
					? ((cursorX = ig.game.io.getClickPos().x),
					  cursorX >= this.min && cursorX <= this.max
							? (this.pos.x =
									cursorX -
									this.size.x / 2 +
									ig.game.screen.x)
							: cursorX < this.min
							? (this.pos.x =
									this.min -
									this.size.x / 2 +
									ig.game.screen.x)
							: cursorX > this.max &&
							  (this.pos.x =
									this.max -
									this.size.x / 2 +
									ig.game.screen.x),
					  (distance =
							this.pos.x +
							this.size.x / 2 -
							this.min -
							ig.game.screen.x),
					  (maxDistance = this.max - this.min),
					  (this.scale = distance / maxDistance),
					  this.updateTarget(),
					  ig.input.released('click') &&
							(ig.game.handlerSfx.volume(ig.game.volume.sfx),
							ig.soundHandler.sfxPlayer.play('click'),
							(this.move = !1),
							ig.game.saveVolume()))
					: ((this.pos.x =
							this.bar.pos.x +
							this.scale * this.bar.size.x -
							this.size.x / 2),
					  (this.pos.y =
							this.bar.pos.y +
							this.bar.size.y / 2 -
							this.size.y / 2));
				!0 == ig.game.paused &&
					ig.input.pressed('click') &&
					ig.input.mouse.x > this.pos.x &&
					ig.input.mouse.x < this.pos.x + this.size.x &&
					ig.input.mouse.y > this.pos.y &&
					ig.input.mouse.y < this.pos.y + this.size.y &&
					this.clicked();
			},
			draw: function () {
				this.iconSfx.draw(
					this.bar.pos.x -
						this.iconSfx.width / 2 -
						60 -
						ig.game.screen.x,
					this.bar.pos.y - this.iconSfx.height / 3,
					0,
					0,
					this.iconSfx.width,
					this.iconSfx.height
				);
				this.parent();
			},
			clicked: function () {
				ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(this.min = this.bar.pos.x - ig.game.screen.x),
					(this.max =
						this.bar.pos.x + this.bar.size.x - ig.game.screen.x),
					(this.move = !0));
			},
			updateTarget: function () {
				ig.game.volume.sfx = Math.round(10 * this.scale) / 10;
				this.bar.scaleX = Math.round(10 * this.scale) / 10;
			},
		});
		EntityButtonBgm = EntityButton.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-slider.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			iconMusic: new ig.Image(
				'media/graphics/ui-settings/icon-music.png'
			),
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 4,
			killOutLayer: !1,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.scale = ig.game.volume.bgm;
				this.bar.scaleX = ig.game.volume.bgm;
			},
			update: function () {
				this.parent();
				this.pos.x =
					this.bar.pos.x +
					(this.bar.size.x - this.size.x) * ig.game.volSfx;
				this.pos.y =
					this.bar.pos.y + this.bar.size.y / 2 - this.size.y / 2;
				this.move
					? ((cursorX = ig.game.io.getClickPos().x),
					  cursorX >= this.min && cursorX <= this.max
							? (this.pos.x =
									cursorX -
									this.size.x / 2 +
									ig.game.screen.x)
							: cursorX < this.min
							? (this.pos.x =
									this.min -
									this.size.x / 2 +
									ig.game.screen.x)
							: cursorX > this.max &&
							  (this.pos.x =
									this.max -
									this.size.x / 2 +
									ig.game.screen.x),
					  (distance =
							this.pos.x +
							this.size.x / 2 -
							this.min -
							ig.game.screen.x),
					  (maxDistance = this.max - this.min),
					  (this.scale = distance / maxDistance),
					  this.updateTarget(),
					  ig.input.released('click') &&
							((this.move = !1), ig.game.saveVolume()))
					: ((this.pos.x =
							this.bar.pos.x +
							this.scale * this.bar.size.x -
							this.size.x / 2),
					  (this.pos.y =
							this.bar.pos.y +
							this.bar.size.y / 2 -
							this.size.y / 2));
				!0 == ig.game.paused &&
					ig.input.pressed('click') &&
					ig.input.mouse.x > this.pos.x &&
					ig.input.mouse.x < this.pos.x + this.size.x &&
					ig.input.mouse.y > this.pos.y &&
					ig.input.mouse.y < this.pos.y + this.size.y &&
					this.clicked();
			},
			draw: function () {
				this.iconMusic.draw(
					this.bar.pos.x -
						this.iconMusic.width / 2 -
						70 -
						ig.game.screen.x,
					this.bar.pos.y - this.iconMusic.height / 3,
					0,
					0,
					this.iconMusic.width,
					this.iconMusic.height
				);
				this.parent();
			},
			clicked: function () {
				ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(this.min = this.bar.pos.x - ig.game.screen.x),
					(this.max =
						this.bar.pos.x + this.bar.size.x - ig.game.screen.x),
					(this.move = !0));
			},
			updateTarget: function () {
				ig.game.volume.bgm = Math.round(10 * this.scale) / 10;
				this.bar.scaleX = Math.round(10 * this.scale) / 10;
				ig.game.handlerBgm.volume(ig.game.volume.bgm);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-settings')
	.requires(
		'impact.timer',
		'game.entities.buttons.button',
		'game.entities.controllers.settings-controller'
	)
	.defines(function () {
		EntityButtonSettings = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-mainmenu/btn-settings.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 2,
			settings: null,
			killOutLayer: !1,
			isSettingsMenu: null,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.isSettingsMenu = d.isSettingsMenu;
				this.setScale(1, 1);
			},
			ready: function () {
				this.parent();
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			clicked: function () {
				ig.game.allowToClick &&
					((ig.game.allowToClick = !1),
					ig.soundHandler.sfxPlayer.play('click'),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				null != this.gc && (this.gc.gameIsPaused = !0);
				null == this.settings &&
					(this.settings = ig.game.spawnEntity(
						EntitySettingsController,
						ig.system.width / 2,
						ig.system.height / 2,
						{
							horizontal: 'center',
							vertical: 'center',
							isSettingsMenu: this.isSettingsMenu,
						}
					));
				this.settings.easeIn(0.8);
				ig.game.settingIsShowed = !0;
			},
			over: function () {
				!ig.ua.mobile &&
					ig.game.allowToClick &&
					this.setScale(1.1, 1.1);
			},
			leave: function () {
				!ig.ua.mobile && ig.game.allowToClick && this.setScale(1, 1);
			},
			show: function (b) {
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {}.bind(this),
					}
				).start();
			},
			hide: function (b) {
				this.tween({ pos: { x: this.pos.x, y: -200 } }, b, {
					easing: ig.Tween.Easing.Back.EaseOut,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.characters-data')
	.requires('impact.entity')
	.defines(function () {
		EntityCharactersData = ig.Entity.extend({
			data: [
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-1-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-1-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 2,
					danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-1-gameplay.png'
					),
					unlockAtLevel: 1,
				},
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-2-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-2-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 2,
					danceFrameArray: [0, 1, 2, 3, 4, 5],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-2-gameplay.png'
					),
					unlockAtLevel: 10,
				},
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-3-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-3-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 2,
					danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-3-gameplay.png'
					),
					unlockAtLevel: 20,
				},
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-4-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-4-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 2,
					danceFrameArray: [0, 1, 2, 3, 4, 5],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-4-gameplay.png'
					),
					unlockAtLevel: 30,
				},
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-5-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-5-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 1,
					danceFrameArray: [0, 1, 2, 3],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-5-gameplay.png'
					),
					unlockAtLevel: 50,
				},
				{
					ballSprite: new ig.Image(
						'media/graphics/characters/character-6-ball.png'
					),
					danceSprite: new ig.Image(
						'media/graphics/characters/character-6-dance.png'
					),
					danceSheetX: 4,
					danceSheetY: 2,
					danceFrameArray: [0, 1, 2, 3, 4, 5, 6],
					gameplaySprite: new ig.Image(
						'media/graphics/characters/character-6-gameplay.png'
					),
					unlockAtLevel: 60,
				},
			],
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.character-dance-controller')
	.requires(
		'game.entities.global.marketjs-entity',
		'game.entities.controllers.characters-data'
	)
	.defines(function () {
		EntityCharacterDanceController = EntityMarketjsEntity.extend({
			zIndex: 2,
			killOutLayer: !1,
			init: function (b, c, d) {
				this.characterIndex = d.characterIndex;
				this.charactersData = ig.game.spawnEntity(
					EntityCharactersData,
					0,
					0
				);
				this.characterSheetInfo = {
					sheetImage:
						this.charactersData.data[this.characterIndex]
							.danceSprite,
					sheetX: this.charactersData.data[this.characterIndex]
						.danceSheetX,
					sheetY: this.charactersData.data[this.characterIndex]
						.danceSheetY,
				};
				this.setSpriteSheet('character');
				this.setSize('character');
				this.currentAnim = this.character = new ig.Animation(
					this.characterSheet,
					0.2,
					this.charactersData.data[
						this.characterIndex
					].danceFrameArray
				);
				this.parent(b, c, d);
				ig.game.sortEntitiesDeferred();
			},
			changeSprite: function (b) {
				this.characterIndex = b;
				this.characterSheetInfo = {
					sheetImage:
						this.charactersData.data[this.characterIndex]
							.danceSprite,
					sheetX: this.charactersData.data[this.characterIndex]
						.danceSheetX,
					sheetY: this.charactersData.data[this.characterIndex]
						.danceSheetY,
				};
				this.setSpriteSheet('character');
				this.setSize('character');
				this.currentAnim = this.character = new ig.Animation(
					this.characterSheet,
					0.2,
					this.charactersData.data[
						this.characterIndex
					].danceFrameArray
				);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.select-character-controller')
	.requires(
		'game.entities.global.marketjs-entity',
		'game.entities.buttons.button-text',
		'game.entities.controllers.character-dance-controller'
	)
	.defines(function () {
		EntitySelectCharacterController = EntityMarketjsEntity.extend({
			imageBg: new ig.Image(
				'media/graphics/ui-select-character/window-skins.png'
			),
			zIndex: 400,
			killOutLayer: !1,
			isSettingsMenu: !0,
			init: function (b, c, d) {
				this.idleSheetInfo = {
					sheetImage: this.imageBg,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					1,
					[0]
				);
				this.parent(b, c, d);
				this.curentCharacterIndex = ig.game.selectedCharacter;
				this.charactersData =
					ig.game.getEntitiesByType(EntityCharactersData)[0];
				this.mc = ig.game.getEntitiesByType(
					EntityMainmenuController
				)[0];
				this.clickBlocker = ig.game.spawnEntity(
					EntityClickBlockerSettings,
					0,
					0
				);
				this.characterDance = ig.game.spawnEntity(
					EntityCharacterDanceController,
					0,
					ig.system.height + 200,
					{
						horizontal: 'center',
						vertical: 'center',
						characterIndex: this.curentCharacterIndex,
					}
				);
				this.characterDance.zIndex = 500;
				this.buttonNext = ig.game.spawnEntity(
					EntityButtonNext,
					0,
					ig.system.height + 200
				);
				this.buttonPrev = ig.game.spawnEntity(
					EntityButtonPrev,
					0,
					ig.system.height + 200
				);
				this.buttonSelect = ig.game.spawnEntity(
					EntityButtonSelect,
					0,
					ig.system.height + 200
				);
				this.buttonClose = ig.game.spawnEntity(
					EntityButtonCloseSelectCharacter,
					0,
					ig.system.height + 200
				);
				this.pos.y += ig.system.height;
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				this.parent();
				ig.game.sortEntitiesDeferred();
				this.ready = !0;
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			update: function () {
				this.parent();
				this.characterDance.pos.x =
					this.pos.x +
					this.size.x / 2 -
					this.characterDance.size.x / 2;
				this.characterDance.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.characterDance.size.y / 2 -
					110;
				0 < this.curentCharacterIndex
					? ((this.buttonPrev.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.buttonPrev.size.x / 2 -
							180),
					  (this.buttonPrev.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.buttonPrev.size.y / 2 -
							110))
					: ((this.buttonPrev.pos.x = 3e3),
					  (this.buttonPrev.pos.y = 3e3));
				this.curentCharacterIndex < this.charactersData.data.length - 1
					? ((this.buttonNext.pos.x =
							this.pos.x +
							this.size.x / 2 -
							this.buttonNext.size.x / 2 +
							180),
					  (this.buttonNext.pos.y =
							this.pos.y +
							(8 * this.size.y) / 10 -
							this.buttonNext.size.y / 2 -
							110))
					: ((this.buttonNext.pos.x = 3e3),
					  (this.buttonNext.pos.y = 3e3));
				this.buttonSelect.pos.x =
					this.pos.x + this.size.x / 2 - this.buttonSelect.size.x / 2;
				this.buttonSelect.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.buttonSelect.size.y / 2 +
					150;
				this.buttonClose.pos.x =
					this.pos.x +
					this.size.x / 2 -
					this.buttonClose.size.x / 2 +
					205;
				this.buttonClose.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.buttonClose.size.y / 2 -
					310;
				this.buttonClose.click &&
					((this.buttonClose.click = !1),
					this.easeOut(0.4),
					setTimeout(
						function () {
							this.clickBlocker.hide();
						}.bind(this),
						400
					));
				this.buttonNext.click &&
					this.curentCharacterIndex <
						this.charactersData.data.length - 1 &&
					((this.buttonNext.click = !1),
					this.curentCharacterIndex++,
					this.characterDance.changeSprite(
						this.curentCharacterIndex
					));
				this.buttonPrev.click &&
					-1 < this.curentCharacterIndex &&
					((this.buttonPrev.click = !1),
					this.curentCharacterIndex--,
					this.characterDance.changeSprite(
						this.curentCharacterIndex
					));
				this.curentCharacterIndex == ig.game.selectedCharacter
					? ((this.buttonSelect.buttonText =
							_STRINGS.Game.CurrentSkin),
					  (this.buttonSelect.isDisabled = !0),
					  (this.buttonSelect.buttonState = 'SELECTED'))
					: ((this.buttonSelect.buttonText =
							_STRINGS.Game.SelectSkin),
					  (this.buttonSelect.isDisabled = !1),
					  (this.buttonSelect.buttonState = 'SELECT'));
				ig.game.levelCounter <
					this.charactersData.data[this.curentCharacterIndex]
						.unlockAtLevel &&
					((this.buttonSelect.buttonText =
						_STRINGS.Game.UnlockAtLevel +
						' ' +
						this.charactersData.data[this.curentCharacterIndex]
							.unlockAtLevel),
					(this.buttonSelect.isDisabled = !0),
					(this.buttonSelect.buttonState = 'DISABLE'));
				this.buttonSelect.click &&
					((this.buttonSelect.click = !1),
					(ig.game.selectedCharacter = this.curentCharacterIndex),
					this.mc.characterDance.changeSprite(
						this.curentCharacterIndex
					),
					ig.game.saveLastLevel());
			},
			draw: function () {
				var b = ig.system.context;
				this.parent();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#37AFFD';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Skins,
					ig.system.width / 2,
					this.pos.y +
						(8 * this.size.y) / 10 -
						this.characterDance.size.y / 2 -
						190
				);
				b.restore();
			},
			easeIn: function (b) {
				ig.game.allowToClick = !1;
				this.clickBlocker.show();
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2 - 50,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
			easeOut: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y:
								this.pos.y -
								this.size.y / 2 +
								ig.system.height +
								100,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseIn,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
		});
		EntityClickBlockerSettings = EntityMarketjsEntity.extend({
			killOutLayer: !1,
			zIndex: 300,
			type: ig.Entity.TYPE.A,
			alphaValue: 0.5,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.size.x = ig.system.width;
				this.size.y = ig.system.height;
			},
			draw: function () {
				ig.system.context.fillStyle =
					'rgba(0,0,0,' + this.alphaValue + ')';
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				this.parent();
			},
			show: function () {
				this.alphaValue = 0.5;
				this.type = ig.Entity.TYPE.A;
				ig.game.disableButtonMoreGames = !0;
			},
			hide: function () {
				this.alphaValue = 0;
				this.type = ig.Entity.TYPE.NONE;
				ig.game.disableButtonMoreGames = !1;
			},
		});
		EntityButtonSelectCharacter = EntityButtonText.extend({
			idleSheetInfo: null,
			checkAgainst: ig.Entity.TYPE.BOTH,
			killOutLayer: !1,
			textColor: '#FFFFFF',
			zIndex: 1234,
			isDisabled: !1,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
			},
			clicked: function () {
				!1 == this.isDisabled &&
					ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(ig.game.allowToClick = !1),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
		});
		EntityButtonNext = EntityButtonSelectCharacter.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-next.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				this.click = !0;
			},
		});
		EntityButtonPrev = EntityButtonSelectCharacter.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-prev.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				this.click = !0;
			},
		});
		EntityButtonSelect = EntityButtonSelectCharacter.extend({
			imgDisable: new ig.Image(
				'media/graphics/ui-select-character/btn-select-disabled.png'
			),
			imgSelected: new ig.Image(
				'media/graphics/ui-select-character/btn-select-selected.png'
			),
			imgSelect: new ig.Image(
				'media/graphics/ui-select-character/btn-select.png'
			),
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-select.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			disabledSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-select-disabled.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			selectedSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-select-selected.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			buttonText: '',
			buttonState: 'SELECT',
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSpriteSheet('disabled');
				this.setSpriteSheet('selected');
				this.setSize('idle');
				this.setSize('disabled');
				this.setSize('selected');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.zIndex = 500;
			},
			draw: function () {
				var b = ig.system.context;
				this.parent();
				'DISABLE' == this.buttonState
					? this.imgDisable.draw(this.pos.x, this.pos.y)
					: 'SELECTED' == this.buttonState
					? this.imgSelected.draw(this.pos.x, this.pos.y)
					: this.imgSelect.draw(this.pos.x, this.pos.y);
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = 'rgb(0,0,0,0.2)';
				b.textAlign = 'center';
				b.fillText(
					this.buttonText,
					ig.system.width / 2 + 5,
					this.pos.y + 50 + 5
				);
				b.restore();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#ffffff';
				b.textAlign = 'center';
				b.fillText(
					this.buttonText,
					ig.system.width / 2,
					this.pos.y + 50
				);
				b.restore();
			},
			doClick: function () {
				!1 == this.isDisabled && (this.click = !0);
			},
		});
		EntityButtonCloseSelectCharacter = EntityButtonSelectCharacter.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-settings/btn-close.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			doClick: function () {
				this.click = !0;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-select-character')
	.requires(
		'impact.timer',
		'game.entities.buttons.button',
		'game.entities.controllers.select-character-controller'
	)
	.defines(function () {
		EntityButtonSelectCharacter = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-mainmenu/btn-select-character.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 2,
			settings: null,
			killOutLayer: !1,
			isSettingsMenu: null,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.isSettingsMenu = d.isSettingsMenu;
				this.setScale(1, 1);
			},
			ready: function () {
				this.parent();
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			clicked: function () {
				ig.game.allowToClick &&
					((ig.game.allowToClick = !1),
					ig.soundHandler.sfxPlayer.play('click'),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											ig.gd.show(this.doClick.bind(this));
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				null != this.gc && (this.gc.gameIsPaused = !0);
				null == this.selectCharacter &&
					(this.selectCharacter = ig.game.spawnEntity(
						EntitySelectCharacterController,
						ig.system.width / 2,
						ig.system.height / 2,
						{
							horizontal: 'center',
							vertical: 'center',
							isSettingsMenu: this.isSettingsMenu,
						}
					));
				this.selectCharacter.easeIn(0.8);
				ig.game.settingIsShowed = !0;
			},
			over: function () {
				!ig.ua.mobile &&
					ig.game.allowToClick &&
					this.setScale(1.1, 1.1);
			},
			leave: function () {
				!ig.ua.mobile && ig.game.allowToClick && this.setScale(1, 1);
			},
			shopGame: function () {
				ig.game.director.jumpTo(LevelGame);
			},
			show: function (b) {
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {}.bind(this),
					}
				).start();
			},
			hide: function (b) {
				this.tween({ pos: { x: this.pos.x, y: -200 } }, b, {
					easing: ig.Tween.Easing.Back.EaseOut,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.character-unlocked-controller')
	.requires(
		'game.entities.global.marketjs-entity',
		'game.entities.buttons.button-text',
		'game.entities.controllers.character-dance-controller'
	)
	.defines(function () {
		EntityCharacterUnlockedController = EntityMarketjsEntity.extend({
			imageBg: new ig.Image(
				'media/graphics/ui-select-character/window-skins.png'
			),
			zIndex: 400,
			killOutLayer: !1,
			isSettingsMenu: !0,
			init: function (b, c, d) {
				this.idleSheetInfo = {
					sheetImage: this.imageBg,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					1,
					[0]
				);
				this.parent(b, c, d);
				this.curentCharacterIndex = ig.game.selectedCharacter;
				this.charactersData =
					ig.game.getEntitiesByType(EntityCharactersData)[0];
				this.mc = ig.game.getEntitiesByType(
					EntityMainmenuController
				)[0];
				for (b = 0; b < this.charactersData.data.length; b++)
					if (
						((c = b),
						ig.game.levelCounter <=
							this.charactersData.data[c].unlockAtLevel)
					) {
						ig.game.nextLevelForUnlockCharacter =
							this.charactersData.data[c].unlockAtLevel;
						break;
					}
				for (b = 0; b < this.charactersData.data.length; b++)
					if (
						((c = b),
						ig.game.levelCounter - 1 ==
							this.charactersData.data[c].unlockAtLevel)
					) {
						this.curentCharacterIndex = c;
						break;
					}
				this.clickBlocker = ig.game.spawnEntity(
					EntityClickBlockerSettings,
					0,
					0
				);
				this.clickBlocker.hide();
				this.characterDance = ig.game.spawnEntity(
					EntityCharacterDanceController,
					0,
					ig.system.height + 200,
					{
						horizontal: 'center',
						vertical: 'center',
						characterIndex: this.curentCharacterIndex,
					}
				);
				this.characterDance.zIndex = 500;
				this.buttonNext = ig.game.spawnEntity(
					EntityButtonNext,
					0,
					ig.system.height + 200
				);
				this.buttonPrev = ig.game.spawnEntity(
					EntityButtonPrev,
					0,
					ig.system.height + 200
				);
				this.buttonSelect = ig.game.spawnEntity(
					EntityButtonSelect,
					0,
					ig.system.height + 200
				);
				this.buttonClose = ig.game.spawnEntity(
					EntityButtonCloseSelectCharacter,
					0,
					ig.system.height + 200
				);
				this.pos.y += ig.system.height;
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				this.parent();
				ig.game.sortEntitiesDeferred();
				this.ready = !0;
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
				ig.game.newCharacterUnlocked &&
					((ig.game.newCharacterUnlocked = !1), this.easeIn(0.8));
			},
			update: function () {
				this.parent();
				null == this.mc &&
					(this.mc = ig.game.getEntitiesByType(
						EntityMainmenuController
					)[0]);
				this.characterDance.pos.x =
					this.pos.x +
					this.size.x / 2 -
					this.characterDance.size.x / 2;
				this.characterDance.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.characterDance.size.y / 2 -
					110;
				this.buttonSelect.pos.x =
					this.pos.x + this.size.x / 2 - this.buttonSelect.size.x / 2;
				this.buttonSelect.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.buttonSelect.size.y / 2 +
					150;
				this.buttonClose.pos.x =
					this.pos.x +
					this.size.x / 2 -
					this.buttonClose.size.x / 2 +
					205;
				this.buttonClose.pos.y =
					this.pos.y +
					(8 * this.size.y) / 10 -
					this.buttonClose.size.y / 2 -
					310;
				this.buttonClose.click &&
					((this.buttonClose.click = !1),
					this.easeOut(0.4),
					setTimeout(
						function () {
							this.clickBlocker.hide();
						}.bind(this),
						400
					));
				this.buttonSelect.buttonText = _STRINGS.Game.SelectSkin;
				this.buttonSelect.isDisabled = !1;
				this.buttonSelect.click &&
					((this.buttonSelect.click = !1),
					(ig.game.selectedCharacter = this.curentCharacterIndex),
					this.mc.characterDance.changeSprite(
						this.curentCharacterIndex
					),
					ig.game.saveLastLevel(),
					this.easeOut(0.4),
					setTimeout(
						function () {
							this.clickBlocker.hide();
						}.bind(this),
						400
					));
			},
			draw: function () {
				var b = ig.system.context;
				this.parent();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#37AFFD';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.NewSKin,
					ig.system.width / 2,
					this.pos.y +
						(8 * this.size.y) / 10 -
						this.characterDance.size.y / 2 -
						190
				);
				b.restore();
			},
			easeIn: function (b) {
				ig.game.allowToClick = !1;
				this.clickBlocker.show();
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2 - 50,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
			easeOut: function (b) {
				ig.game.allowToClick = !1;
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y:
								this.pos.y -
								this.size.y / 2 +
								ig.system.height +
								100,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseIn,
						onComplete: function () {
							ig.game.allowToClick = !0;
						}.bind(this),
					}
				).start();
			},
		});
		EntityClickBlockerSettings = EntityMarketjsEntity.extend({
			killOutLayer: !1,
			zIndex: 300,
			type: ig.Entity.TYPE.A,
			alphaValue: 0.5,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.size.x = ig.system.width;
				this.size.y = ig.system.height;
			},
			draw: function () {
				ig.system.context.fillStyle =
					'rgba(0,0,0,' + this.alphaValue + ')';
				ig.system.context.fillRect(
					0,
					0,
					ig.system.width,
					ig.system.height
				);
				this.parent();
			},
			show: function () {
				this.alphaValue = 0.5;
				this.type = ig.Entity.TYPE.A;
				ig.game.disableButtonMoreGames = !0;
			},
			hide: function () {
				this.alphaValue = 0;
				this.type = ig.Entity.TYPE.NONE;
				ig.game.disableButtonMoreGames = !1;
			},
		});
		EntityButtonUnlockedCharacter = EntityButtonText.extend({
			idleSheetInfo: null,
			checkAgainst: ig.Entity.TYPE.BOTH,
			killOutLayer: !1,
			textColor: '#FFFFFF',
			zIndex: 1234,
			isDisabled: !1,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
			},
			clicked: function () {
				!1 == this.isDisabled &&
					ig.game.allowToClick &&
					(ig.soundHandler.sfxPlayer.play('click'),
					(ig.game.allowToClick = !1),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
		});
		EntityButtonSelect = EntityButtonUnlockedCharacter.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-select-character/btn-select.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			buttonText: '',
			draw: function () {
				var b = ig.system.context;
				this.parent();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = 'rgb(0,0,0,0.2)';
				b.textAlign = 'center';
				b.fillText(
					this.buttonText,
					ig.system.width / 2 + 5,
					this.pos.y + 50 + 5
				);
				b.restore();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#ffffff';
				b.textAlign = 'center';
				b.fillText(
					this.buttonText,
					ig.system.width / 2,
					this.pos.y + 50
				);
				b.restore();
			},
			doClick: function () {
				!1 == this.isDisabled && (this.click = !0);
			},
		});
		EntityButtonCloseSelectCharacter = EntityButtonUnlockedCharacter.extend(
			{
				idleSheetInfo: {
					sheetImage: new ig.Image(
						'media/graphics/ui-settings/btn-close.png'
					),
					sheetX: 1,
					sheetY: 1,
				},
				doClick: function () {
					this.click = !0;
				},
			}
		);
	});
ig.baked = !0;
ig.module('game.entities.controllers.mainmenu-controller')
	.requires(
		'game.entities.global.marketjs-entity',
		'game.entities.buttons.button-play',
		'game.entities.buttons.button-settings',
		'game.entities.buttons.button-select-character',
		'game.entities.controllers.character-unlocked-controller',
		'game.entities.controllers.character-dance-controller',
		'game.entities.controllers.characters-data',
		'plugins.fullscreen'
	)
	.defines(function () {
		EntityMainmenuController = EntityMarketjsEntity.extend({
			title: new ig.Image('media/graphics/ui-mainmenu/img-title.png'),
			imgPlatform: new ig.Image(
				'media/graphics/ui-mainmenu/img-platform.png'
			),
			imglevel: new ig.Image('media/graphics/ui-mainmenu/img-level.png'),
			gravityFactor: 0,
			zIndex: 1,
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.system.context.setTransform(1, 0, 0, 1, 0, 0);
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				null == this.pointer &&
					(this.pointer = ig.game.spawnEntity(EntityPointer, 0, 0));
				null !=
					ig.game.getEntitiesByType(EntityClickBlockerSettings)[0] &&
					ig.game
						.getEntitiesByType(EntityClickBlockerSettings)[0]
						.kill();
				this.characterDance = ig.game.spawnEntity(
					EntityCharacterDanceController,
					ig.system.width / 2,
					ig.system.height / 2 + 100,
					{
						horizontal: 'center',
						vertical: 'center',
						characterIndex: ig.game.selectedCharacter,
					}
				);
				this.btnPlay = ig.game.spawnEntity(
					EntityButtonPlay,
					ig.system.width / 2,
					(8.75 * ig.system.height) / 10,
					{
						horizontal: 'center',
						vertical: 'center',
						text: '',
						textSize: 34,
					}
				);
				this.btnSettings = ig.game.spawnEntity(
					EntityButtonSettings,
					(17.5 * ig.system.width) / 20,
					(1.5 * ig.system.height) / 20,
					{
						horizontal: 'center',
						vertical: 'center',
						text: '',
						textSize: 34,
						isSettingsMenu: !0,
					}
				);
				this.btnSelectCharacter = ig.game.spawnEntity(
					EntityButtonSelectCharacter,
					(3 * ig.system.width) / 20,
					(8.8 * ig.system.height) / 10,
					{ horizontal: 'center', vertical: 'center', text: '' }
				);
				_SETTINGS.MoreGames.Enabled &&
					(this.btnMoreGames = ig.game.spawnEntity(
						EntityButtonMoreGames,
						(17 * ig.system.width) / 20,
						(8.8 * ig.system.height) / 10,
						{ horizontal: 'center', vertical: 'center', text: '' }
					));
				this.btnFullscreen = ig.game.spawnEntity(
					ig.FullscreenButton,
					(0.9 * ig.system.width) / 20,
					(0.5 * ig.system.height) / 20,
					{
						enterImage: new ig.Image(
							'media/graphics/ui-mainmenu/btn-enter-fullscreen.png'
						),
						exitImage: new ig.Image(
							'media/graphics/ui-mainmenu/btn-exit-fullscreen.png'
						),
					}
				);
				this.btnFullscreen.zIndex = 2;
				this.windowNewCharacterUnlocked = ig.game.spawnEntity(
					EntityCharacterUnlockedController,
					ig.system.width / 2,
					ig.system.height / 2,
					{ horizontal: 'center', vertical: 'center' }
				);
				ig.game.allowToClick = !0;
				ig.game.sortEntitiesDeferred();
				b = Math.floor(2e3 * Math.random() + 1);
				ig.game.selectedBackgroundIndex = (b % 5) + 1;
				ig.game.rewardTimer.reset();
				ig.game.rewardTimer.pause();
			},
			ready: function () {
				this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				if (!ig.global.wm) {
					this.parent();
					var b = ig.system.context,
						c = b.createLinearGradient(0, 0, 0, 700),
						d = '',
						f = '';
					switch (ig.game.selectedBackgroundIndex) {
						case 1:
							d = '#68a9ff';
							f = '#fe88ec';
							break;
						case 2:
							d = '#67a9ff';
							f = '#88f5fe';
							break;
						case 3:
							d = '#98c1e7';
							f = '#84f0bf';
							break;
						case 4:
							d = '#f45970';
							f = '#f092f7';
							break;
						case 5:
							(d = '#ff8eb2'), (f = '#fdf18e');
					}
					c.addColorStop(0, d);
					c.addColorStop(1, f);
					b.save();
					b.fillStyle = c;
					b.fillRect(0, 0, ig.system.width, ig.system.height);
					b.restore();
					this.title.draw(
						ig.system.width / 2 - this.title.width / 2,
						120
					);
					this.imglevel.draw(
						ig.system.width / 2 - 106.5,
						ig.system.height / 2 - 90
					);
					this.imgPlatform.draw(
						ig.system.width / 2 - 113,
						ig.system.height / 2 + 190
					);
					b.save();
					b.font = '25px arialroundedbold';
					b.fillStyle = '#ffffff';
					b.textAlign = 'center';
					b.fillText(
						_STRINGS.Game.Level + ' ' + ig.game.levelCounter,
						ig.system.width / 2,
						ig.system.height / 2 - 55
					);
					b.restore();
				}
			},
		});
	});
ig.baked = !0;
ig.module('game.levels.mainmenu')
	.requires('impact.image', 'game.entities.controllers.mainmenu-controller')
	.defines(function () {
		LevelMainmenu = {
			entities: [{ type: 'EntityMainmenuController', x: 0, y: 0 }],
			layer: [],
		};
	});
ig.baked = !0;
ig.module('game.entities.global.marketjs-box2d-entity')
	.requires('impact.entity', 'plugins.box2d.entity')
	.defines(function () {
		EntityMarketjsBox2dEntity = ig.Box2DEntity.extend({
			oriPos: { x: null, y: null },
			id: 0,
			type: 0,
			category: '',
			box2dType: 0,
			dynamicType: 0,
			density: 1,
			friction: 0,
			restitution: 0,
			init: function (b, c, d) {
				this.parent(b, c, d);
				b = new Box2D.Common.Math.b2Vec2(
					(b + this.size.x / 2) * Box2D.SCALE,
					c * Box2D.SCALE
				);
				this.body.SetPositionAndAngle(b, this.objectAngle);
				this.oriPos.x = this.pos.x;
				this.oriPos.y = this.pos.y;
				this.setPosition();
			},
			ready: function () {
				this.parent();
			},
			update: function () {
				this.parent();
				this.killOutOfLayer();
			},
			clicked: function () {},
			killOutOfLayer: function () {
				!1 != this.killOutLayer &&
					(this.pos.x < ig.game.screen.x - this.size.x ||
						this.pos.x > ig.game.screen.x + ig.system.width ||
						this.pos.y < ig.game.screen.y - this.size.y ||
						this.pos.y > ig.game.screen.y + ig.system.height) &&
					this.kill();
			},
			setSpriteSheet: function (b) {
				this[b + 'Sheet'] = new ig.AnimationSheet(
					this[b + 'SheetInfo'].sheetImage.path,
					this[b + 'SheetInfo'].sheetImage.width /
						this[b + 'SheetInfo'].sheetX,
					this[b + 'SheetInfo'].sheetImage.height /
						this[b + 'SheetInfo'].sheetY
				);
			},
			setSize: function (b) {
				this.size.x =
					this[b + 'SheetInfo'].sheetImage.width /
					this[b + 'SheetInfo'].sheetX;
				this.size.y =
					this[b + 'SheetInfo'].sheetImage.height /
					this[b + 'SheetInfo'].sheetY;
			},
			setPosition: function () {
				'center' == this.horizontal
					? (this.pos.x -= this.size.x / 2)
					: 'left' == this.horizontal
					? (this.pos.x = this.pos.x)
					: 'right' == this.horizontal && (this.pos.x -= this.size.x);
				'center' == this.vertical
					? (this.pos.y -= this.size.y / 2)
					: 'top' == this.vertical
					? (this.pos.y = this.pos.y)
					: 'bottom' == this.vertical && (this.pos.y -= this.size.y);
			},
			setFlip: function () {
				!0 == this.flip.x && (this.curentAnimation.flip.x = !0);
				!0 == this.flip.y && (this.curentAnimation.flip.y = !0);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-skip-video')
	.requires(
		'impact.timer',
		'game.entities.buttons.button',
		'game.entities.controllers.settings-controller'
	)
	.defines(function () {
		EntityButtonSkipVideo = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-gameplay/btn-skip-video.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 200,
			settings: null,
			killOutLayer: !1,
			isSettingsMenu: null,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.isSettingsMenu = d.isSettingsMenu;
				this.devia = {};
				this.devia.x = b;
				this.devia.y = c;
				this.setScale(1, 1);
			},
			ready: function () {
				this.parent();
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			draw: function () {
				this.pos.x = ig.game.screen.x + this.devia.x;
				this.pos.y = ig.game.screen.y + this.devia.y;
				this.parent();
			},
			clicked: function () {
				ig.game.allowToClick &&
					((ig.game.allowToClick = !1),
					ig.soundHandler.sfxPlayer.play('click'),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				ig.gd.showRewarded(
					function () {
						null != this.gc && (this.gc.gameIsPaused = !0);
						this.gc.levelIsSkipped = !0;
					}.bind(this)
				);
				ig.game.rewardTimer.reset();
				this.hide();
			},
			show: function () {
				this.devia.y = this.size.y / 4;
				this.pos.y = ig.game.screen.y + this.devia.y;
			},
			hide: function () {
				this.devia.y = -200;
				this.pos.y = ig.game.screen.y + this.devia.y;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-pause')
	.requires(
		'impact.timer',
		'game.entities.buttons.button',
		'game.entities.controllers.settings-controller'
	)
	.defines(function () {
		EntityButtonPause = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-gameplay/btn-pause.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 200,
			settings: null,
			killOutLayer: !1,
			isSettingsMenu: null,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.devia = {};
				this.devia.x = b;
				this.devia.y = c;
				this.isSettingsMenu = d.isSettingsMenu;
				this.setScale(1, 1);
			},
			ready: function () {
				this.parent();
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			clicked: function () {
				console.log('KLIK');
				ig.game.allowToClick &&
					!ig.game.rewardActive &&
					((ig.game.allowToClick = !1),
					ig.soundHandler.sfxPlayer.play('click'),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !0;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				null == this.settings
					? (this.settings = ig.game.spawnEntity(
							EntitySettingsController,
							ig.system.width / 2 + ig.game.screen.x,
							ig.system.height / 2,
							{
								horizontal: 'center',
								vertical: 'center',
								isSettingsMenu: this.isSettingsMenu,
							}
					  ))
					: (this.settings.pos.x =
							ig.system.width / 2 -
							this.settings.size.x / 2 +
							ig.game.screen.x);
				this.settings.easeIn(0.8);
				ig.game.settingIsShowed = !0;
			},
			draw: function () {
				this.pos.x = ig.game.screen.x + this.devia.x;
				this.pos.y = ig.game.screen.y + this.devia.y;
				this.parent();
			},
			show: function (b) {
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {}.bind(this),
					}
				).start();
			},
			hide: function (b) {
				this.tween({ pos: { x: this.pos.x, y: -200 } }, b, {
					easing: ig.Tween.Easing.Back.EaseOut,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.hanger')
	.requires('plugins.box2d.entity')
	.defines(function () {
		EntityHanger = ig.Box2DEntity.extend({
			box2dType: 1,
			dynamicType: 2,
			density: 0,
			friction: 0,
			restitution: 0,
			size: { x: 16, y: 16 },
			zIndex: 95,
			ragdoll: null,
			allowToDrawString: !1,
			isNearest: !1,
			distanceFromRagdoll: 0,
			init: function (b, c, d) {
				this.ragdoll = d.ragdoll;
				this.parent(b, c, d);
				this.ready();
				this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
				b = new Box2D.Common.Math.b2Vec2(
					(b - this.size.x / 2) * Box2D.SCALE,
					(c - this.size.y / 2) * Box2D.SCALE
				);
				this.body.SetPositionAndAngle(b, this.body.GetAngle());
			},
			ready: function () {},
			preSolve: function (b, c) {
				b instanceof EntityRagdoll && c.SetEnabled(!1);
			},
			update: function () {
				this.parent();
				null != this.ragdoll &&
					(this.distanceFromRagdoll = this.distanceTo(this.ragdoll));
			},
			draw: function () {
				var b = ig.system.context;
				this.parent();
				if (null != this.ragdoll) {
					var c = this.body.GetPosition(),
						d = c.x / Box2D.SCALE - ig.game.screen.x,
						c = c.y / Box2D.SCALE - ig.game.screen.y,
						f = this.ragdoll.body.GetPosition(),
						e = 0,
						j = f.x / Box2D.SCALE - ig.game.screen.x * Math.cos(e),
						f = f.y / Box2D.SCALE - ig.game.screen.y * Math.sin(e),
						n = f - c,
						m = j - d,
						e = Math.atan2(n, m),
						n = Math.sqrt(Math.pow(n, 2), Math.pow(m, 2)) / 6;
					Math.cos(e);
					Math.sin(e);
					Math.abs(n * Math.cos(e) * Math.cos(e));
					!0 == this.allowToDrawString &&
						(b.save(),
						(b.strokeStyle = '#ffffff'),
						(b.lineWidth = 3),
						b.beginPath(),
						b.moveTo(d, c),
						b.lineTo(j, f),
						b.stroke(),
						b.closePath(),
						b.beginPath(),
						b.restore());
					b.save();
					b.strokeStyle = '#000000';
					b.fillStyle = '#bcbcbc';
					b.beginPath();
					b.arc(d, c, 15, 0, 2 * Math.PI);
					b.lineWidth = 2;
					b.fill();
					b.stroke();
					b.closePath();
					b.restore();
					!0 == this.allowToDrawString
						? (b.save(),
						  (b.strokeStyle = '#000000'),
						  (b.fillStyle = '#0061ff'))
						: (b.save(),
						  (b.strokeStyle = '#000000'),
						  (b.fillStyle = '#ffffff'));
					b.beginPath();
					b.arc(d, c, 5, 0, 2 * Math.PI);
					b.lineWidth = 2;
					b.fill();
					b.stroke();
					b.closePath();
					b.restore();
					this.isNearest &&
						(b.save(),
						(b.strokeStyle = '#eeff00'),
						(b.fillStyle = 'rgba(255,255,255,0)'),
						b.beginPath(),
						b.arc(d, c, 35, 0, 2 * Math.PI),
						(b.lineWidth = 4),
						b.setLineDash([6, 6]),
						b.fill(),
						b.stroke(),
						b.closePath(),
						b.restore(),
						1 == ig.game.levelCounter &&
							(b.save(),
							(b.font = '20px arialroundedbold'),
							(b.fillStyle = '#43667B'),
							(b.textAlign = 'center'),
							b.fillText(
								_STRINGS.Game.Tutorial3,
								this.pos.x - 90 + 2 - ig.game.screen.x,
								this.pos.y
							),
							b.restore(),
							b.save(),
							(b.font = '20px arialroundedbold'),
							(b.fillStyle = '#ffffff'),
							(b.textAlign = 'center'),
							b.fillText(
								_STRINGS.Game.Tutorial3,
								this.pos.x - 90 - ig.game.screen.x,
								this.pos.y
							),
							b.restore(),
							b.save(),
							(b.font = '20px arialroundedbold'),
							(b.fillStyle = '#43667B'),
							(b.textAlign = 'center'),
							b.fillText(
								_STRINGS.Game.Tutorial4,
								this.pos.x - 90 + 2 - ig.game.screen.x,
								this.pos.y + 25
							),
							b.restore(),
							b.save(),
							(b.font = '20px arialroundedbold'),
							(b.fillStyle = '#ffffff'),
							(b.textAlign = 'center'),
							b.fillText(
								_STRINGS.Game.Tutorial4,
								this.pos.x - 90 - ig.game.screen.x,
								this.pos.y + 25
							),
							b.restore()));
				}
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.jump-platform')
	.requires(
		'game.entities.global.marketjs-box2d-entity',
		'game.entities.global.marketjs-entity',
		'plugins.box2d.entity'
	)
	.defines(function () {
		EntityJumpPlatform = EntityMarketjsBox2dEntity.extend({
			objectImage: new ig.Image('media/graphics/gameplay/platform.png'),
			killOutLayer: !1,
			isDefaultObject: !1,
			box2dType: 0,
			dynamicType: 2,
			density: 0,
			friction: 0,
			restitution: 1.3,
			mass: 0,
			INERTIA: 0,
			ANGULAR_DAMPING: 0,
			zIndex: 95,
			init: function (b, c, d) {
				this.objectAngle = d.objectAngle;
				this.firstJumpPlatform = d.firstJumpPlatform;
				this.objectImage = this.objectImage;
				!0 == this.firstJumpPlatform && (this.restitution = 1);
				this.idleSheetInfo = {
					sheetImage: this.objectImage,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.currentAnim.alpha = 0;
				this.parent(b, c, d);
				this.objectJumpPlatformSprite = ig.game.spawnEntity(
					EntityObjectJumPlatformSprite,
					b,
					c,
					{ objectAngle: this.objectAngle }
				);
				this.objectJumpPlatformSprite.pos.y -=
					this.objectJumpPlatformSprite.size.y / 2 + 8;
			},
			beginContact: function (b) {
				ig.soundHandler.sfxPlayer.play('bounce');
				this.objectJumpPlatformSprite.bouncing();
				b.isFirstSpawn = !1;
			},
			update: function () {
				this.parent();
			},
		});
		EntityObjectJumPlatformSprite = EntityMarketjsEntity.extend({
			objectImage: new ig.Image(
				'media/graphics/gameplay/object-jum-platform.png'
			),
			gravityFactor: 0,
			collides: ig.Entity.COLLIDES.NEVER,
			killOutLayer: !1,
			zIndex: 96,
			init: function (b, c, d) {
				this.objectAngle = d.objectAngle;
				this.idleSheetInfo = {
					sheetImage: this.objectImage,
					sheetX: 2,
					sheetY: 3,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.idle = new ig.Animation(this.idleSheet, 0.1, [0]);
				this.bounce = new ig.Animation(
					this.idleSheet,
					0.1,
					[4, 3, 2, 3, 0]
				);
				this.idle.angle = this.objectAngle;
				this.bounce.angle = this.objectAngle;
				this.currentAnim = this.idle;
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
				1 <= this.bounce.loopCount && (this.currentAnim = this.idle);
			},
			bouncing: function () {
				this.currentAnim = this.bounce.rewind();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.buttons.button-reward')
	.requires(
		'impact.timer',
		'game.entities.buttons.button',
		'game.entities.controllers.settings-controller'
	)
	.defines(function () {
		EntityButtonReward = EntityButtonText.extend({
			idleSheetInfo: {
				sheetImage: new ig.Image(
					'media/graphics/ui-gameplay/btn-skip-video.png'
				),
				sheetX: 1,
				sheetY: 1,
			},
			checkAgainst: ig.Entity.TYPE.BOTH,
			zIndex: 200,
			settings: null,
			killOutLayer: !1,
			name: 'btn-reward',
			isSettingsMenu: null,
			init: function (b, c, d) {
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.isSettingsMenu = d.isSettingsMenu;
				this.devia = {};
				this.devia.x = b;
				this.devia.y = c;
				this.setScale(1, 1);
			},
			ready: function () {
				this.parent();
				null !=
					ig.game.getEntitiesByType(EntityGameplayController)[0] &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			clicked: function () {
				console.log('KLIK');
				ig.game.rewardActive = !0;
				ig.game.allowToClick &&
					((ig.game.allowToClick = !1),
					ig.soundHandler.sfxPlayer.play('click'),
					this.tween(
						{
							pos: {
								x: this.pos.x,
								y: this.pos.y - ig.system.height / 75,
							},
						},
						0.1,
						{
							onComplete: function () {
								this.tween(
									{
										pos: {
											x: this.pos.x,
											y:
												this.pos.y +
												ig.system.height / 75,
										},
									},
									0.1,
									{
										onComplete: function () {
											ig.game.allowToClick = !1;
											this.doClick();
										}.bind(this),
									}
								).start();
							}.bind(this),
						}
					).start());
			},
			doClick: function () {
				ig.gd.showRewarded(
					function () {
						null != this.gc && (this.gc.gameIsPaused = !0);
						this.gc.levelIsSkipped = !0;
					}.bind(this)
				);
				ig.game.rewardTimer.reset();
				this.hide();
			},
			draw: function () {
				this.pos.x = ig.game.screen.x + this.devia.x;
				this.pos.y = ig.game.screen.y + this.devia.y;
				this.parent();
			},
			show: function (b) {
				this.tween(
					{
						pos: {
							x: this.pos.x,
							y: this.oriPos.y - this.size.y / 2,
						},
					},
					b,
					{
						easing: ig.Tween.Easing.Back.EaseOut,
						onComplete: function () {}.bind(this),
					}
				).start();
			},
			hide: function (b) {
				this.tween({ pos: { x: this.pos.x, y: -200 } }, b, {
					easing: ig.Tween.Easing.Back.EaseOut,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.controllers.gameplay-controller')
	.requires(
		'impact.entity',
		'game.entities.buttons.button-skip-video',
		'game.entities.buttons.button-pause',
		'game.entities.gameplay.hanger',
		'game.entities.gameplay.jump-platform',
		'game.entities.buttons.button-reward'
	)
	.defines(function () {
		EntityGameplayController = ig.Entity.extend({
			gravityFactor: 0,
			drawGuild: !1,
			drawInfo: !0,
			drawFps: !0,
			delay: 800,
			delay2: 60,
			alpha: 1,
			mapLength: 0,
			hangers: [],
			finishLinePosX: 0,
			cameraZoomValue: 1,
			levelIsComplete: !1,
			scaleX: 0.5,
			levelIsSkipped: !1,
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.global.wm ||
					((ig.game.allowToClick = !0),
					(ig.game.rewardActive = !1),
					(ig.game.gameIsPaused = !1),
					(ig.Timer.timeScale = 1),
					(this.zIndex = 10),
					(this.pointer =
						ig.game.getEntitiesByType(EntityPointer)[0]),
					null == this.pointer &&
						(this.pointer = ig.game.spawnEntity(
							EntityPointer,
							0,
							0
						)),
					(this.devia = {}),
					(this.devia.x = b),
					(this.devia.y = c),
					ig.soundHandler.sfxPlayer.stop('win'),
					1 == ig.game.levelCounter &&
						(this.tutorial = ig.game.spawnEntity(
							EntityTutorial,
							0,
							0
						)),
					(this.arrow = ig.game.spawnEntity(EntityArrow, 0, 0)),
					0 <= ig.game.levelCounter && 2 >= ig.game.levelCounter
						? (this.mapLength = 1e3)
						: 3 <= ig.game.levelCounter && 6 >= ig.game.levelCounter
						? (this.mapLength = 1500)
						: 7 <= ig.game.levelCounter &&
						  10 >= ig.game.levelCounter
						? (this.mapLength = 2e3)
						: 11 <= ig.game.levelCounter &&
						  15 >= ig.game.levelCounter
						? (this.mapLength = 2500)
						: 16 <= ig.game.levelCounter &&
						  20 >= ig.game.levelCounter
						? (this.mapLength = 3e3)
						: 21 <= ig.game.levelCounter &&
						  30 >= ig.game.levelCounter
						? (this.mapLength = 3500)
						: 31 <= ig.game.levelCounter &&
						  40 >= ig.game.levelCounter
						? (this.mapLength = 4e3)
						: 41 <= ig.game.levelCounter &&
						  50 >= ig.game.levelCounter
						? (this.mapLength = 4500)
						: 51 <= ig.game.levelCounter &&
						  60 >= ig.game.levelCounter
						? (this.mapLength = 5e3)
						: 61 <= ig.game.levelCounter &&
						  70 >= ig.game.levelCounter
						? (this.mapLength = 5500)
						: 71 <= ig.game.levelCounter &&
						  80 >= ig.game.levelCounter
						? (this.mapLength = 6e3)
						: 81 <= ig.game.levelCounter && (this.mapLength = 6500),
					(this.shouldDrawGuild =
						this.disableRagdoll =
						this.shouldZoom =
							!1),
					(this.gScale = 1),
					ig.ua.mobile && ((this.delay = 600), (this.isMobile = !0)),
					(this.soundReady = !0),
					(this.soundTimer = new ig.Timer(2)),
					this.soundTimer.pause(),
					!1 == ig.game.isDevMode &&
						((this.reward = ig.game.spawnEntity(
							EntityButtonSkipVideo,
							(1 * ig.system.width) / 40,
							-200,
							{ horizontal: 'center', vertical: 'center' }
						)),
						(this.btnPause = ig.game.spawnEntity(
							EntityButtonPause,
							(34.2 * ig.system.width) / 40,
							(1 * ig.system.height) / 60,
							{
								horizontal: 'center',
								vertical: 'center',
								text: '',
								textSize: 34,
								isSettingsMenu: !1,
							}
						)),
						(this.jumper =
							0 <= ig.game.levelCounter &&
							2 >= ig.game.levelCounter
								? ig.game.spawnEntity(
										EntityJumpPlatform,
										25,
										850,
										{
											objectAngle: 0,
											firstJumpPlatform: !0,
										}
								  )
								: 3 <= ig.game.levelCounter &&
								  6 >= ig.game.levelCounter
								? ig.game.spawnEntity(
										EntityJumpPlatform,
										25,
										850,
										{
											objectAngle: 0.1,
											firstJumpPlatform: !0,
										}
								  )
								: 7 <= ig.game.levelCounter &&
								  10 >= ig.game.levelCounter
								? ig.game.spawnEntity(
										EntityJumpPlatform,
										25,
										850,
										{
											objectAngle: 0.2,
											firstJumpPlatform: !0,
										}
								  )
								: ig.game.spawnEntity(
										EntityJumpPlatform,
										25,
										850,
										{
											objectAngle: 0.3,
											firstJumpPlatform: !0,
										}
								  )),
						(this.mapIndicator = ig.game.spawnEntity(
							EntityMapIndicator,
							0,
							0
						))),
					ig.game.sortEntitiesDeferred(),
					ig.game.rewardTimer.reset(),
					ig.game.rewardTimer.unpause());
			},
			ready: function () {
				this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
			},
			update: function () {
				this.parent();
				if (!ig.game.isDevMode) {
					this.mapIndicator.mapIndicatorScale =
						this.ragdoll.pos.x / this.mapLength;
					if (null != this.ragdoll) {
						if (
							(this.ragdoll.pos.x > this.finishLinePosX ||
								this.levelIsSkipped) &&
							!1 == this.levelIsComplete
						) {
							this.levelIsComplete = !0;
							ig.game.allowToClick = !1;
							this.ragdoll.gravityValue = 0;
							var b = this.ragdoll.body.GetLinearVelocity();
							b.x = this.ragdoll.body.GetLinearVelocity().x / 30;
							b.y = this.ragdoll.body.GetLinearVelocity().y / 30;
							-10 > b.y && (b.y = 0);
							this.ragdoll.body.SetLinearVelocity(b);
							ig.soundHandler.sfxPlayer.play('win');
							this.shouldZoom = !0;
							this.btnPause.currentAnim.alpha = 0;
							this.reward.currentAnim.alpha = 0;
						}
						1100 < this.ragdoll.pos.y && this.gameIsLose();
						-150 > this.ragdoll.pos.x && this.gameIsLose();
						ig.game.gameIsPaused
							? this.ragdoll.body.SetActive(!1)
							: this.ragdoll.body.SetActive(!0);
					}
					if (this.shouldZoom) {
						this.gScale *= 1.03;
						ig.game.screen.x = this.finishLinePosX - 100;
						ig.game.screen.y = this.ragdoll.pos.y / 2;
						if (1.5 <= this.gScale) {
							this.shouldZoom = !1;
							ig.game.screen.x = this.finishLinePosX - 100;
							ig.game.screen.y = this.ragdoll.pos.y / 2;
							this.gScale = 1.5;
							this.gameIsWin();
							return;
						}
						ig.system.context.scale(1.03, 1.03);
					}
					this.reward &&
						0 < ig.game.rewardTimer.delta() &&
						(ig.gd.isAvaiableRewarded(
							function (b) {
								b ? this.reward.show() : this.reward.hide();
							}.bind(this)
						),
						ig.game.rewardTimer.reset());
				}
			},
			draw: function () {
				if (!ig.global.wm) {
					this.parent();
					var b = ig.system.context,
						c = b.createLinearGradient(0, 0, 0, 700),
						d = '',
						f = '';
					switch (ig.game.selectedBackgroundIndex) {
						case 1:
							d = '#68a9ff';
							f = '#fe88ec';
							break;
						case 2:
							d = '#67a9ff';
							f = '#88f5fe';
							break;
						case 3:
							d = '#98c1e7';
							f = '#84f0bf';
							break;
						case 4:
							d = '#f45970';
							f = '#f092f7';
							break;
						case 5:
							(d = '#ff8eb2'), (f = '#fdf18e');
					}
					c.addColorStop(0, d);
					c.addColorStop(1, f);
					b.save();
					b.fillStyle = c;
					b.fillRect(0, 0, ig.system.width, ig.system.height);
					b.restore();
				}
			},
			gameIsWin: function () {
				setTimeout(
					function () {
						ig.game.levelCounter ==
							ig.game.nextLevelForUnlockCharacter &&
							1 < ig.game.levelCounter &&
							(ig.game.newCharacterUnlocked = !0);
						this.btnPause.kill();
						ig.game.levelCounter++;
						ig.game.lastGeneratedLevel = [];
						ig.game.saveLastLevel();
						ig.system.context.setTransform(1, 0, 0, 1, 0, 0);
						ig.game.director.loadLevel(1);
					}.bind(this),
					1500
				);
			},
			gameIsLose: function () {
				ig.soundHandler.sfxPlayer.play('lose');
				ig.game.director.reloadLevel();
			},
		});
		EntityMapIndicator = EntityMarketjsEntity.extend({
			mapIndicatorBar: new ig.Image(
				'media/graphics/gameplay/map-indicator-bar.png'
			),
			mapIndicatorFill: new ig.Image(
				'media/graphics/gameplay/map-indicator-fill.png'
			),
			killOutLayer: !1,
			zIndex: 300,
			mapIndicatorScale: 1,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.gc = ig.game.getEntitiesByType(
					EntityGameplayController
				)[0];
			},
			update: function () {
				this.parent();
				null == this.gc &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
			},
			draw: function () {
				this.parent();
				null == this.gc &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
				var b = ig.system.context;
				if (!1 == this.gc.levelIsComplete)
					this.mapIndicatorBar.draw(
						ig.system.width / 2 - this.mapIndicatorBar.width / 2,
						40,
						0,
						0,
						this.mapIndicatorBar.width,
						this.mapIndicatorBar.height
					),
						this.mapIndicatorFill.draw(
							ig.system.width / 2 -
								this.mapIndicatorBar.width / 2,
							40,
							0,
							0,
							this.mapIndicatorFill.width *
								this.mapIndicatorScale,
							this.mapIndicatorFill.height
						),
						b.save(),
						(b.font = '30px arialroundedbold'),
						(b.fillStyle = '#ffffff'),
						(b.textAlign = 'right'),
						b.fillText(
							ig.game.levelCounter,
							ig.system.width / 2 -
								this.mapIndicatorBar.width / 2 -
								15,
							51
						),
						b.restore(),
						b.save(),
						(b.font = '30px arialroundedbold'),
						(b.fillStyle = '#ffffff'),
						(b.textAlign = 'left'),
						b.fillText(
							ig.game.levelCounter + 1,
							ig.system.width / 2 +
								this.mapIndicatorBar.width / 2 +
								15,
							51
						);
				else {
					var c = _STRINGS.Game.LevelCleared;
					!0 == this.levelIsSkipped &&
						(c = _STRINGS.Game.LevelSkipped);
					b.save();
					b.font = '30px arialroundedbold';
					b.fillStyle = '#43667B';
					b.textAlign = 'center';
					b.fillText(c, 194, 204);
					b.restore();
					b.save();
					b.font = '30px arialroundedbold';
					b.fillStyle = '#ffffff';
					b.textAlign = 'center';
					b.fillText(c, 190, 200);
				}
				b.restore();
			},
		});
		EntityTutorial = EntityMarketjsEntity.extend({
			imgHandPointer: new ig.Image(
				'media/graphics/ui-gameplay/img-hand-pointer.png'
			),
			killOutLayer: !1,
			zIndex: 50,
			bodyScale: 0.6,
			init: function (b, c, d) {
				this.idleSheetInfo = {
					sheetImage: this.imgHandPointer,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					1,
					[0]
				);
				this.parent(b, c, d);
				this.gc = ig.game.getEntitiesByType(
					EntityGameplayController
				)[0];
				this.animate();
			},
			update: function () {
				this.parent();
				null == this.gc &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
				this.setScale(this.bodyScale, this.bodyScale);
			},
			draw: function () {
				this.parent();
				var b = ig.system.context;
				this.pos.x = 250;
				this.pos.y = 780;
				b.save();
				b.font = '25px arialroundedbold';
				b.fillStyle = '#43667B';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Tutorial1 + ' ',
					272 - ig.game.screen.x,
					702
				);
				b.restore();
				b.save();
				b.font = '25px arialroundedbold';
				b.fillStyle = '#ffffff';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Tutorial1 + ' ',
					270 - ig.game.screen.x,
					700
				);
				b.restore();
				b.save();
				b.font = '25px arialroundedbold';
				b.fillStyle = '#43667B';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Tutorial2,
					272 - ig.game.screen.x,
					742
				);
				b.restore();
				b.save();
				b.font = '25px arialroundedbold';
				b.fillStyle = '#ffffff';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Tutorial2,
					270 - ig.game.screen.x,
					740
				);
				b.restore();
			},
			animate: function () {
				this.tween({ bodyScale: 0.7 }, 0.5, {
					loop: ig.Tween.Loop.Reverse,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
		EntityArrow = EntityMarketjsEntity.extend({
			imgArrow: new ig.Image('media/graphics/ui-gameplay/img-arrow.png'),
			killOutLayer: !1,
			zIndex: 50,
			init: function (b, c, d) {
				this.idleSheetInfo = {
					sheetImage: this.imgArrow,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					1,
					[0]
				);
				this.parent(b, c, d);
				this.pos.x = 270;
				this.pos.y = 150;
				this.gc = ig.game.getEntitiesByType(
					EntityGameplayController
				)[0];
				this.animate();
				this.setScale(0.7, 0.7);
			},
			update: function () {
				this.parent();
				null == this.gc &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
				this.setScale(this.bodyScale, this.bodyScale);
			},
			draw: function () {
				this.parent();
				var b = ig.system.context;
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#43667B';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Go,
					232 - ig.game.screen.x,
					this.pos.y + 2 + 25
				);
				b.restore();
				b.save();
				b.font = '35px arialroundedbold';
				b.fillStyle = '#ffffff';
				b.textAlign = 'center';
				b.fillText(
					_STRINGS.Game.Go,
					230 - ig.game.screen.x,
					this.pos.y + 25
				);
				b.restore();
			},
			animate: function () {
				this.tween({ pos: { x: 280, y: this.pos.y } }, 0.3, {
					loop: ig.Tween.Loop.Reverse,
					onComplete: function () {}.bind(this),
				}).start();
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.ball-trail')
	.requires('impact.entity')
	.defines(function () {
		GameTrailNode = ig.Class.extend({
			x: 0,
			y: 0,
			time: 0,
			remainder: 0,
			prev: null,
			next: null,
			l: 0,
			w: 1,
			dx: 0,
			dy: 0,
			adx: 0,
			ady: 0,
			ndx: 0,
			ndy: 0,
			init: function (b, c, d, f) {
				this.x = b;
				this.y = c;
				this.time = d;
				this.remainder = f;
			},
			setNext: function (b) {
				this.next = b;
				b = this.next.x - this.x;
				var c = this.next.y - this.y,
					d = Math.sqrt(b * b + c * c);
				this.l = d;
				this.next.l = d;
				this.next.dx = b / d;
				this.next.dy = c / d;
				this.next.ndx = -this.next.dy;
				this.next.ndy = this.next.dx;
				this.prev
					? ((this.adx = (this.dx + this.next.dx) / 2),
					  (this.ady = (this.dy + this.next.dy) / 2),
					  (this.ndx = -this.ady),
					  (this.ndy = this.adx))
					: ((this.adx = this.next.dx),
					  (this.ady = this.next.dy),
					  (this.ndx = -this.ady),
					  (this.ndy = this.adx),
					  (this.dx = this.next.dx),
					  (this.dy = this.next.dy));
			},
			setPrev: function (b) {
				this.prev = b;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.position-indicator')
	.requires('game.entities.global.marketjs-entity')
	.defines(function () {
		EntityPositionIndicator = EntityMarketjsEntity.extend({
			img: new ig.Image('media/graphics/ui-gameplay/img-arrow-up.png'),
			gravityFactor: 0,
			collides: ig.Entity.COLLIDES.NEVER,
			killOutLayer: !1,
			zIndex: 1e3,
			alphaValue: 0,
			init: function (b, c, d) {
				this.idleSheetInfo = {
					sheetImage: this.img,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
				this.currentAnim.alpha = this.alphaValue;
			},
			show: function () {
				this.alphaValue = 1;
			},
			hide: function () {
				this.alphaValue = 0;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.ragdoll')
	.requires(
		'game.entities.global.marketjs-box2d-entity',
		'game.entities.global.marketjs-entity',
		'game.entities.controllers.gameplay-controller',
		'game.entities.gameplay.ball-trail',
		'game.entities.gameplay.position-indicator'
	)
	.defines(function () {
		EntityRagdoll = EntityMarketjsBox2dEntity.extend({
			killOutLayer: !1,
			box2dType: 1,
			dynamicType: 0,
			density: 3,
			friction: 0,
			restitution: 0,
			m_angularDamping: 100,
			m_linearDamping: 100,
			angularDamping: 100,
			collides: ig.Entity.COLLIDES.NEVER,
			type: ig.Entity.TYPE.A,
			zIndex: 150,
			isBody: !0,
			createRope: !1,
			connectAngle: 0,
			hanger: null,
			nearestHanger: null,
			allowToGetNearestHanger: !1,
			gravityValue: 487,
			isFirstSpawn: !0,
			isCollideWithStaticPlatform: !1,
			currentVelX: 0,
			currentVelY: 0,
			init: function (b, c, d) {
				this.charactersData = ig.game.spawnEntity(
					EntityCharactersData,
					0,
					0
				);
				this.ballSheetInfo = {
					sheetImage:
						this.charactersData.data[ig.game.selectedCharacter]
							.ballSprite,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('ball');
				this.setSize('ball');
				this.currentAnim = this.ball = new ig.Animation(
					this.ballSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.force = 1625;
				ig.global.wm ||
					((this.links = []),
					(this.joints = []),
					(this.ropeOn = !1),
					(this.limitDx = ig.system.width / 2 - 40),
					(this.limitDx2 = ig.system.width / 2 + 40),
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]),
					(this.mapLength = this.gc.mapLength + 2e3),
					(this.mousePos0 = {}),
					(this.mousePos00 = {}),
					(this.shouldRemoveRope = !1),
					(this.playerSprite = ig.game.spawnEntity(
						EntityPlayerSprite,
						300,
						400,
						{
							gameplaySprite:
								this.charactersData.data[
									ig.game.selectedCharacter
								].gameplaySprite,
						}
					)),
					(this.playerSprite.offset = {
						x: 0 + this.playerSprite.size.x / 2,
						y: 0 + this.playerSprite.size.y / 2,
					}),
					(this.positionIndicator = ig.game.spawnEntity(
						EntityPositionIndicator,
						this.pos.x,
						10
					)),
					ig.game.sortEntitiesDeferred());
			},
			ready: function () {},
			update: function () {
				if (null != this.body) {
					this.parent();
					this.positionIndicator.pos.x = this.pos.x;
					-20 > this.pos.y && !1 == this.gc.levelIsComplete
						? this.positionIndicator.show()
						: this.positionIndicator.hide();
					this.enableFakeGravity();
					this.checkCurrentSpriteState();
					null != this.playerSprite &&
						((this.playerSprite.pos.x =
							this.pos.x + this.size.x / 2),
						!0 == this.gc.levelIsComplete && 0 > this.pos.y
							? (console.log('HERE'),
							  (this.playerSprite.pos.y = 100))
							: (this.playerSprite.pos.y =
									this.pos.y + this.size.y / 2),
						null != this.hanger &&
							(this.playerSprite.currentAnim.angle = this.angleTo(
								this.hanger
							)));
					if (!1 == ig.game.isDevMode) {
						var b = this.body.GetPosition().x / Box2D.SCALE;
						b - ig.game.screen.x < this.limitDx
							? (ig.game.screen.x = b - this.limitDx)
							: b - ig.game.screen.x > this.limitDx2 &&
							  (ig.game.screen.x = b - this.limitDx2);
						0 > ig.game.screen.x
							? (ig.game.screen.x = 0)
							: ig.game.screen.x >
									this.mapLength - ig.system.width &&
							  (ig.game.screen.x =
									this.mapLength - ig.system.width);
					}
					this.searchNearestHanger();
					if (!1 == this.gc.levelIsComplete) {
						if (this.createRope) {
							this.hanger.allowToDrawString = !0;
							var b = this.body.GetPosition(),
								c = this.hanger.body.GetPosition(),
								b = Math.sqrt(
									Math.pow(b.x - c.x, 2) +
										Math.pow(b.y - c.y, 2)
								);
							this.createDistanceJoint(b);
							this.createRope = !1;
							this.ropeOn = !0;
							b = this.body.GetLinearVelocity();
							ig.game.sortEntitiesDeferred();
						}
						b = this.body.GetLinearVelocity();
						5 < b.y && (this.isCollideWithStaticPlatform = !1);
						ig.input.pressed('click') &&
							!1 == ig.game.gameIsPaused &&
							80 < this.gc.pointer.pos.y &&
							(!0 == this.isCollideWithStaticPlatform
								? this.jump()
								: ((this.currentVelX = b.x),
								  (this.currentVelY = b.y),
								  ig.soundHandler.sfxPlayer.play('ropeOn'),
								  this.shootString()));
						ig.input.released('click') &&
							80 < this.gc.pointer.pos.y &&
							!1 == ig.game.gameIsPaused &&
							(ig.soundHandler.sfxPlayer.play('ropeOff'),
							this.removeRope());
					} else
						this.removeRope(),
							(this.currentAnim.alpha = 0),
							(this.playerSprite.alphaValue = 1),
							(this.playerSprite.currentAnim.angle = -1.5),
							(this.playerSprite.currentAnim =
								this.playerSprite.fly);
				}
			},
			draw: function () {
				this.parent();
			},
			enableFakeGravity: function () {
				var b =
					1.8 * (this.body.m_mass * this.gravityValue) * Box2D.SCALE;
				!0 == ig.game.isDevMode && (b = 0);
				this.body.ApplyForce(
					new Box2D.Common.Math.b2Vec2(0, b),
					this.body.GetPosition()
				);
			},
			checkCurrentSpriteState: function () {
				!0 == this.isFirstSpawn
					? ((this.currentAnim.alpha = 0),
					  (this.playerSprite.alphaValue = 1),
					  (this.playerSprite.currentAnim.angle = -1.5),
					  (this.playerSprite.currentAnim = this.playerSprite.fall))
					: (null != this.hanger && this.hanger.allowToDrawString
							? ((this.currentAnim.alpha = 0),
							  (this.playerSprite.alphaValue = 1))
							: ((this.currentAnim.alpha = 1),
							  (this.playerSprite.alphaValue = 0)),
					  0 != this.playerSprite.alphaValue &&
							(0 <= this.body.GetLinearVelocity().x
								? ((this.currentAnim.flip.y = !1),
								  (this.playerSprite.currentAnim.flip.y = !1),
								  (this.playerSprite.currentAnim =
										0 > this.playerSprite.currentAnim.angle
											? -1.5 >=
													this.playerSprite
														.currentAnim.angle &&
											  -4 <=
													this.playerSprite
														.currentAnim.angle
												? this.playerSprite.swing2
												: this.playerSprite.swing1
											: 1.5 <=
													this.playerSprite
														.currentAnim.angle &&
											  4 >=
													this.playerSprite
														.currentAnim.angle
											? this.playerSprite.swing2
											: this.playerSprite.swing1))
								: ((this.currentAnim.flip.y = !1),
								  (this.playerSprite.currentAnim.flip.y = !0),
								  (this.playerSprite.currentAnim =
										0 > this.playerSprite.currentAnim.angle
											? -1.5 >=
													this.playerSprite
														.currentAnim.angle &&
											  -4 <=
													this.playerSprite
														.currentAnim.angle
												? this.playerSprite.swing1
												: this.playerSprite.swing2
											: 1.5 <=
													this.playerSprite
														.currentAnim.angle &&
											  4 >=
													this.playerSprite
														.currentAnim.angle
											? this.playerSprite.swing2
											: this.playerSprite.swing1)),
							5 > Math.abs(this.body.GetLinearVelocity().x) &&
								(this.playerSprite.currentAnim =
									this.playerSprite.swingIdle)));
			},
			applyForce: function (b) {
				var c = this.force;
				b && (c = -this.force);
				var d = Math.PI / 2;
				this.ropeOn &&
					((b = this.body.GetPosition()),
					(d = this.hanger.body.GetPosition()),
					(d = Math.atan2(b.y - d.y, b.x - d.x)));
				b = c * Math.sin(d);
				c = -c * Math.cos(d);
				c = new Box2D.Common.Math.b2Vec2(b, c);
				this.body.ApplyForce(c, this.body.GetPosition());
			},
			applyAngularForce: function () {
				var b = 100 * this.force;
				this.pos.y < this.hanger.pos.y && (b = 100 * -this.force);
				var c = Math.PI / 2;
				if (this.ropeOn)
					var d = this.body.GetPosition(),
						c = this.hanger.body.GetPosition(),
						c = Math.atan2(d.y - c.y, d.x - c.x);
				d = b * Math.sin(c);
				b = -b * Math.cos(c);
				b = new Box2D.Common.Math.b2Vec2(d, b);
				this.body.ApplyForce(b, this.body.GetPosition());
			},
			searchNearestHanger: function () {
				this.nearestHanger = null;
				for (var b = 0; b < this.gc.hangers.length; b++)
					null == this.nearestHanger
						? (this.nearestHanger = this.gc.hangers[b])
						: this.nearestHanger.distanceFromRagdoll >
								this.gc.hangers[b].distanceFromRagdoll &&
						  (this.nearestHanger = this.gc.hangers[b]),
						(this.gc.hangers[b].isNearest = !1);
				this.nearestHanger.isNearest = !0;
			},
			getNearestHanger: function () {
				this.allowToGetNearestHanger = !1;
				this.hanger = this.nearestHanger;
			},
			shootString: function () {
				this.isFirstSpawn = !1;
				this.ropeOn
					? this.removeRope()
					: !1 == ig.game.gameIsPaused &&
					  (this.getNearestHanger(),
					  (this.createRope = !0),
					  this.prepareRope(),
					  (this.gc.ropeUsed += 1));
			},
			removeRope: function () {
				if (this.ropeOn) {
					this.destroyDistanceJoint();
					this.hanger.allowToDrawString = !1;
					this.hanger.isNearest = !1;
					this.allowToGetNearestHanger = !0;
					var b = this.body.GetLinearVelocity();
					this.hanger.pos.y < this.pos.y &&
						!1 == this.gc.levelIsComplete &&
						(b.y = this.body.GetLinearVelocity().y - 30);
				}
			},
			prepareRope: function () {
				var b = 50;
				0 > this.body.GetLinearVelocity().x && (b = -50);
				this.connectAngle = -Math.atan2(50 - this.pos.y, b);
			},
			jump: function () {
				this.isCollideWithStaticPlatform = !1;
				var b = this.body.GetLinearVelocity();
				this.hanger.pos.y < this.pos.y &&
					!1 == this.gc.levelIsComplete &&
					((b.x =
						0 != b.x
							? 20 *
							  (this.body.GetLinearVelocity().x /
									Math.abs(this.body.GetLinearVelocity().x))
							: this.body.GetLinearVelocity().x + 5),
					(b.y = this.body.GetLinearVelocity().y - 40));
			},
			goUp: function (b) {
				if (this.ropeOn) {
					var c = this.distanceJoint.GetLength();
					if (!(35 > c / Box2D.SCALE)) {
						var d = 2;
						b && (d = b);
						this.distanceJoint.SetLength(c - d * Box2D.SCALE);
					}
				}
			},
			goDown: function (b) {
				if (this.ropeOn) {
					var c = this.distanceJoint.GetLength();
					if (!(460 < c / Box2D.SCALE)) {
						var d = 2;
						b && (d = b);
						this.distanceJoint.SetLength(c + d * Box2D.SCALE);
					}
				}
			},
			createDistanceJoint: function (b) {
				var c = this.body.GetPosition(),
					d = this.hanger.body.GetPosition(),
					f = new Box2D.Dynamics.Joints.b2DistanceJointDef();
				f.bodyA = this.hanger.body;
				f.bodyB = this.body;
				f.localAnchorA = new Box2D.Common.Math.b2Vec2(0, 0);
				f.localAnchorB = new Box2D.Common.Math.b2Vec2(0, 0);
				b ||
					((c = this.body.GetPosition()),
					(d = this.hanger.body.GetPosition()),
					(b = Math.sqrt(
						Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2)
					)));
				f.length = b;
				this.distanceJoint = ig.world.CreateJoint(f);
			},
			destroyDistanceJoint: function () {
				null != this.distanceJoint &&
					(ig.world.DestroyJoint(this.distanceJoint),
					(this.distanceJoint = null),
					(this.ropeOn = !1));
			},
		});
		EntityPlayerSprite = EntityMarketjsEntity.extend({
			gravityFactor: 0,
			collides: ig.Entity.COLLIDES.NEVER,
			killOutLayer: !1,
			zIndex: 150,
			alphaValue: 1,
			init: function (b, c, d) {
				this.gameplaySprite = d.gameplaySprite;
				this.playerSheetInfo = {
					sheetImage: this.gameplaySprite,
					sheetX: 2,
					sheetY: 3,
				};
				this.setSpriteSheet('player');
				this.setSize('player');
				this.swing1 = new ig.Animation(this.playerSheet, 0.1, [0]);
				this.swing2 = new ig.Animation(this.playerSheet, 0.1, [2]);
				this.swingIdle = new ig.Animation(this.playerSheet, 0.1, [4]);
				this.fly = new ig.Animation(this.playerSheet, 0.1, [1]);
				this.fall = new ig.Animation(this.playerSheet, 0.1, [3]);
				this.idle = new ig.Animation(this.playerSheet, 0.1, [4]);
				this.currentAnim = this.swing2;
				this.parent(b, c, d);
			},
			ready: function () {
				this.playerController =
					ig.game.getEntitiesByType(EntityRagdoll)[0];
			},
			update: function () {
				this.parent();
				this.currentAnim.alpha = this.alphaValue;
			},
			draw: function () {
				this.parent();
			},
		});
		EntityBallTrail = ig.Entity.extend({
			zIndex: 150,
			nodeList: [],
			lineList: [],
			pollInterval: 0.01,
			pollMaxDuration: 0.15,
			maxPollInterval: 0.1,
			nodeMinDistance: 16,
			chains: [],
			enabled: !1,
			ball: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			draw: function () {
				this.parent();
				var b = ig.system.context;
				b.save();
				for (var c = 0; c < this.lineList.length; c++)
					this.drawLineFromNodeList(this.lineList[c]);
				this.drawLineFromNodeList(this.nodeList);
				b.restore();
			},
			update: function () {
				this.parent();
				this.pos.x = this.ball.pos.x + this.ball.size.x / 2;
				this.pos.y = this.ball.pos.y + this.ball.size.y / 2;
				for (
					var b = ig.system.clock.delta(), c = b % this.pollInterval;
					0 < this.nodeList.length;

				) {
					var d = this.nodeList[0];
					if (b - c - (d.time - d.remainder) >= this.pollMaxDuration)
						this.nodeList.splice(0, 1),
							0 < this.nodeList.length &&
								this.nodeList[0].setPrev(null);
					else break;
				}
				for (var f = 0; f < this.lineList.length; ) {
					for (var e = this.lineList[f]; 0 < e.length; )
						if (
							((d = e[0]),
							b - c - (d.time - d.remainder) >=
								this.pollMaxDuration)
						)
							e.splice(0, 1), 0 < e.length && e[0].setPrev(null);
						else break;
					0 == e.length ? this.lineList.splice(0, 1) : f++;
				}
				if (
					0 < this.nodeList.length &&
					((d = this.nodeList[this.nodeList.length - 1]),
					b - (d.time - d.remainder) < this.pollInterval)
				)
					return;
				f = this.ball.pos.x + this.ball.size.x / 2 - ig.game.screen.x;
				e = this.ball.pos.y + this.ball.size.y / 2 - ig.game.screen.y;
				if (0 < this.nodeList.length) {
					var d = this.nodeList[this.nodeList.length - 1],
						j = f - d.x,
						d = e - d.y;
					if (j * j + d * d < this.nodeMinDistance) return;
				}
				b = new GameTrailNode(f, e, b, c);
				0 < this.nodeList.length &&
					((d = this.nodeList[this.nodeList.length - 1]),
					d.setNext(b),
					b.setPrev(d));
				this.nodeList.push(b);
			},
			drawLineFromNodeList: function (b) {
				if (b && !(1 >= b.length)) {
					var c = ig.system.context;
					c.save();
					c.lineWidth = 2;
					c.strokeStyle = 'rgba(255,255,255,0.5)';
					for (var d = 10, f = 0; f < b.length; f++) {
						var e = b[f],
							j = ig.system.clock.delta() - e.time,
							j = j / this.pollMaxDuration;
						1 < j && (j = 1);
						j = 1 - j;
						e.t = j;
						e.w = d * j;
					}
					c.beginPath();
					e = b[0];
					j = e.x - e.dx * e.w;
					e = e.y - e.dy * e.w;
					c.moveTo(j, e);
					for (f = 0; f < b.length - 1; f++)
						(e = b[f]),
							(j = e.x + e.ndx * e.w),
							(e = e.y + e.ndy * e.w),
							c.lineTo(j, e);
					e = b[b.length - 1];
					d > e.l && (d = e.l);
					j = e.x + e.ndx * e.w - e.dx * d;
					e = e.y + e.ndy * e.w - e.dy * d;
					c.lineTo(j, e);
					e = b[b.length - 1];
					j = e.x + e.dx * e.w;
					e = e.y + e.dy * e.w;
					c.lineTo(j, e);
					e = b[b.length - 1];
					j = e.x - e.ndx * e.w - e.dx * d;
					e = e.y - e.ndy * e.w - e.dy * d;
					c.lineTo(j, e);
					for (f = b.length - 2; 0 <= f; f--)
						(e = b[f]),
							(j = e.x - e.ndx * e.w),
							(e = e.y - e.ndy * e.w),
							c.lineTo(j, e);
					c.closePath();
					c.fillStyle = 'rgba(255,255,255,0.75)';
					c.fill();
					d = 6;
					for (f = 0; f < b.length; f++)
						(e = b[f]),
							(j = ig.system.clock.delta() - e.time),
							(j /= this.pollMaxDuration),
							1 < j && (j = 1),
							(j -= 1),
							(e.t = j),
							(e.w = d * j * j);
					c.beginPath();
					e = b[0];
					j = e.x - e.dx * e.w;
					e = e.y - e.dy * e.w;
					c.moveTo(j, e);
					for (f = 0; f < b.length - 1; f++)
						(e = b[f]),
							(j = e.x + e.ndx * e.w),
							(e = e.y + e.ndy * e.w),
							c.lineTo(j, e);
					e = b[b.length - 1];
					d > e.l && (d = e.l);
					j = e.x + e.ndx * e.w - e.dx * d;
					e = e.y + e.ndy * e.w - e.dy * d;
					c.lineTo(j, e);
					e = b[b.length - 1];
					j = e.x + e.dx * e.w;
					e = e.y + e.dy * e.w;
					c.lineTo(j, e);
					e = b[b.length - 1];
					j = e.x - e.ndx * e.w - e.dx * d;
					e = e.y - e.ndy * e.w - e.dy * d;
					c.lineTo(j, e);
					for (f = b.length - 2; 0 <= f; f--)
						(e = b[f]),
							(j = e.x - e.ndx * e.w),
							(e = e.y - e.ndy * e.w),
							c.lineTo(j, e);
					c.closePath();
					c.fillStyle = 'rgb(255,255,255)';
					c.fill();
					c.restore();
				}
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.finish-line')
	.requires('impact.entity')
	.defines(function () {
		EntityFinishLine = ig.Entity.extend({
			imgFinishLine: new ig.Image(
				'media/graphics/gameplay/finish-line.png'
			),
			gravityFactor: 0,
			collides: ig.Entity.COLLIDES.NEVER,
			killOutLayer: !1,
			zIndex: 50,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				this.parent();
				for (var b = 0; 5 > b; b++)
					this.imgFinishLine.draw(
						this.pos.x - ig.game.screen.x,
						this.pos.y - 660 * b
					) - ig.game.screen.y;
				for (b = 0; 2 > b; b++)
					this.imgFinishLine.draw(
						this.pos.x - ig.game.screen.x,
						this.pos.y + 660 * b
					) - ig.game.screen.y;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.static-platform')
	.requires(
		'game.entities.global.marketjs-box2d-entity',
		'game.entities.global.marketjs-entity',
		'plugins.box2d.entity'
	)
	.defines(function () {
		EntityStaticPlatform = EntityMarketjsBox2dEntity.extend({
			objectImage: new ig.Image('media/graphics/gameplay/img-elips.png'),
			killOutLayer: !1,
			isDefaultObject: !1,
			box2dType: 2,
			dynamicType: 2,
			density: 0,
			friction: 0,
			restitution: 0,
			vertices: [
				{ x: -4.5, y: -4.5 },
				{ x: 5, y: -4.5 },
				{ x: 5, y: 4.5 },
				{ x: -4.5, y: 4.5 },
			],
			mass: 0,
			INERTIA: 0,
			ANGULAR_DAMPING: 0,
			zIndex: 95,
			isVertical: !0,
			originPos: { x: 0, y: 0 },
			init: function (b, c, d) {
				this.isVertical = d.isVertical;
				this.objectImage = this.objectImage;
				this.idleSheetInfo = {
					sheetImage: this.objectImage,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.originPos = this.pos;
				this.isVertical
					? ((this.leftCollider = ig.game.spawnEntity(
							EntityRoundCollider,
							this.pos.x,
							this.pos.y - 45,
							{ hostEntity: this }
					  )),
					  (this.rightCollider = ig.game.spawnEntity(
							EntityRoundCollider,
							this.pos.x,
							this.pos.y + this.size.x - 90 - 45,
							{ hostEntity: this }
					  )))
					: ((this.leftCollider = ig.game.spawnEntity(
							EntityRoundCollider,
							this.pos.x,
							this.pos.y - 45,
							{ hostEntity: this }
					  )),
					  (this.rightCollider = ig.game.spawnEntity(
							EntityRoundCollider,
							this.pos.x + this.size.x - 90,
							this.pos.y - 45,
							{ hostEntity: this }
					  )));
			},
			beginContact: function (b) {
				b.isFirstSpawn = !1;
				b.isCollideWithStaticPlatform = !0;
			},
			update: function () {
				this.parent();
				this.originPos = this.pos;
				var b = new Box2D.Common.Math.b2Vec2(
					(this.originPos.x + 45) * Box2D.SCALE,
					(this.originPos.y + 45) * Box2D.SCALE
				);
				this.leftCollider.body.SetPositionAndAngle(b, 0);
				b = new Box2D.Common.Math.b2Vec2(
					(this.originPos.x + this.size.x - 45) * Box2D.SCALE,
					(this.originPos.y + 45) * Box2D.SCALE
				);
				this.rightCollider.body.SetPositionAndAngle(b, 0);
			},
		});
		EntityRoundCollider = ig.Box2DEntity.extend({
			box2dType: 1,
			dynamicType: 2,
			density: 0,
			friction: 0,
			restitution: 0,
			size: { x: 90, y: 90 },
			zIndex: 95,
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			preSolve: function (b, c) {
				b instanceof EntityStaticPlatform && c.SetEnabled(!1);
			},
			beginContact: function (b) {
				b.isCollideWithStaticPlatform = !0;
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.big-circle')
	.requires(
		'game.entities.global.marketjs-box2d-entity',
		'game.entities.global.marketjs-entity',
		'game.entities.gameplay.hanger',
		'plugins.box2d.entity'
	)
	.defines(function () {
		EntityBigCircle = EntityMarketjsBox2dEntity.extend({
			objectImage: new ig.Image(
				'media/graphics/gameplay/img-big-circle.png'
			),
			killOutLayer: !1,
			isDefaultObject: !1,
			box2dType: 1,
			dynamicType: 2,
			density: 0,
			friction: 0,
			restitution: 0,
			mass: 0,
			INERTIA: 0,
			ANGULAR_DAMPING: 0,
			zIndex: 95,
			init: function (b, c, d) {
				this.objectImage = this.objectImage;
				this.idleSheetInfo = {
					sheetImage: this.objectImage,
					sheetX: 1,
					sheetY: 1,
				};
				this.setSpriteSheet('idle');
				this.setSize('idle');
				this.currentAnim = this.idle = new ig.Animation(
					this.idleSheet,
					0.1,
					[0]
				);
				this.parent(b, c, d);
				this.gc = ig.game.getEntitiesByType(
					EntityGameplayController
				)[0];
				this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
				this.BigCircleHanger = ig.game.spawnEntity(
					EntityHanger,
					this.pos.x + this.size.x / 2 + 8,
					this.pos.y + 8,
					{ ragdoll: this.ragdoll }
				);
			},
			ready: function () {
				null == this.gc &&
					(this.gc = ig.game.getEntitiesByType(
						EntityGameplayController
					)[0]);
				null == this.ragdoll &&
					(this.ragdoll =
						ig.game.getEntitiesByType(EntityRagdoll)[0]);
				console.log(this.pos);
				this.gc.hangers.push(this.BigCircleHanger);
			},
			preSolve: function (b, c) {
				b instanceof EntityHanger && c.SetEnabled(!1);
			},
			beginContact: function (b) {
				b.isFirstSpawn = !1;
			},
			update: function () {
				this.parent();
				var b = new Box2D.Common.Math.b2Vec2(
					(this.pos.x + this.size.x / 2 + 8) * Box2D.SCALE,
					(this.pos.y + this.size.y / 2 + 8) * Box2D.SCALE
				);
				this.BigCircleHanger.body.SetPositionAndAngle(b, 0);
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.level-objects-data')
	.requires('impact.entity')
	.defines(function () {
		EntityLevelObjectsData = ig.Entity.extend({
			devTemplates: [
				{
					size: 450,
					data: [
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							staticPlatform: [
								{ isVertical: !1, xPos: 140, yPos: 700 },
							],
						},
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							staticPlatform: [
								{ isVertical: !1, xPos: 180, yPos: 100 },
								{ isVertical: !1, xPos: 180, yPos: 370 },
							],
						},
						{
							staticPlatform: [
								{ isVertical: !1, xPos: 180, yPos: 400 },
							],
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [{ xPos: 210, yPos: 440 }],
							jumpPlatform: [
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 820,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 684,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 548,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 820,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 684,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 548,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [
								{ xPos: 210, yPos: 220 },
								{ xPos: 210, yPos: 700 },
							],
							jumpPlatform: [
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 600,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 464,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 328,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 600,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 464,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 328,
								},
							],
						},
					],
				},
			],
			tutorial: [
				{
					size: 1e3,
					data: [
						{
							hangers: [
								{ xPos: 100, yPos: 300 },
								{ xPos: 100, yPos: 600 },
								{ xPos: 400, yPos: 300 },
								{ xPos: 700, yPos: 300 },
							],
						},
					],
				},
			],
			templates: [
				{
					size: 400,
					data: [
						{ hangers: [{ xPos: 200, yPos: 150 }] },
						{
							hangers: [
								{ xPos: 200, yPos: 150 },
								{ xPos: 200, yPos: 350 },
							],
						},
						{
							hangers: [
								{ xPos: 200, yPos: 150 },
								{ xPos: 200, yPos: 350 },
								{ xPos: 200, yPos: 550 },
							],
						},
						{
							hangers: [
								{ xPos: 200, yPos: 150 },
								{ xPos: 200, yPos: 350 },
								{ xPos: 200, yPos: 550 },
								{ xPos: 200, yPos: 750 },
							],
						},
						{ hangers: [{ xPos: 200, yPos: 250 }] },
						{
							hangers: [
								{ xPos: 200, yPos: 250 },
								{ xPos: 200, yPos: 450 },
							],
						},
						{
							hangers: [
								{ xPos: 200, yPos: 250 },
								{ xPos: 200, yPos: 450 },
								{ xPos: 200, yPos: 650 },
							],
						},
					],
				},
				{
					size: 450,
					data: [
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							staticPlatform: [
								{ isVertical: !1, xPos: 140, yPos: 700 },
							],
						},
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							staticPlatform: [
								{ isVertical: !1, xPos: 140, yPos: 100 },
								{ isVertical: !1, xPos: 140, yPos: 800 },
							],
						},
						{
							staticPlatform: [
								{ isVertical: !1, xPos: 140, yPos: 100 },
							],
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [{ xPos: 225, yPos: 280 }],
							jumpPlatform: [
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [{ xPos: 210, yPos: 440 }],
							jumpPlatform: [
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 820,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 684,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 548,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 820,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 684,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 548,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 900,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 900,
								},
							],
						},
						{
							hangers: [
								{ xPos: 210, yPos: 220 },
								{ xPos: 210, yPos: 700 },
							],
							jumpPlatform: [
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 600,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 464,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 328,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 600,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 464,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 328,
								},
							],
						},
						{
							hangers: [{ xPos: 210, yPos: 450 }],
							jumpPlatform: [
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 350,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 214,
								},
								{
									angle: (90 * Math.PI) / 180,
									xPos: 160,
									yPos: 78,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 350,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 214,
								},
								{
									angle: (270 * Math.PI) / 180,
									xPos: 128,
									yPos: 78,
								},
							],
						},
						{
							hangers: [{ xPos: 210, yPos: 450 }],
							jumpPlatform: [
								{
									angle: (45 * Math.PI) / 180,
									xPos: 195,
									yPos: 405,
								},
								{
									angle: (135 * Math.PI) / 180,
									xPos: 195,
									yPos: 515,
								},
								{
									angle: (225 * Math.PI) / 180,
									xPos: 90,
									yPos: 515,
								},
								{
									angle: (315 * Math.PI) / 180,
									xPos: 90,
									yPos: 405,
								},
							],
						},
						{
							hangers: [
								{ xPos: 210, yPos: 120 },
								{ xPos: 210, yPos: 830 },
							],
							jumpPlatform: [
								{
									angle: (45 * Math.PI) / 180,
									xPos: 195,
									yPos: 75,
								},
								{
									angle: (135 * Math.PI) / 180,
									xPos: 195,
									yPos: 185,
								},
								{
									angle: (225 * Math.PI) / 180,
									xPos: 90,
									yPos: 185,
								},
								{
									angle: (315 * Math.PI) / 180,
									xPos: 90,
									yPos: 75,
								},
								{
									angle: (45 * Math.PI) / 180,
									xPos: 195,
									yPos: 785,
								},
								{
									angle: (135 * Math.PI) / 180,
									xPos: 195,
									yPos: 895,
								},
								{
									angle: (225 * Math.PI) / 180,
									xPos: 90,
									yPos: 895,
								},
								{
									angle: (315 * Math.PI) / 180,
									xPos: 90,
									yPos: 785,
								},
							],
						},
					],
				},
				{
					size: 600,
					data: [
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 500, yPos: 150 },
								{ xPos: 300, yPos: 250 },
								{ xPos: 300, yPos: 450 },
								{ xPos: 300, yPos: 650 },
							],
							jumpPlatform: [
								{
									angle: (180 * Math.PI) / 180,
									xPos: 0,
									yPos: 50,
								},
								{
									angle: (180 * Math.PI) / 180,
									xPos: 420,
									yPos: 50,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 910,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 420,
									yPos: 910,
								},
							],
						},
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 100, yPos: 350 },
								{ xPos: 100, yPos: 550 },
								{ xPos: 100, yPos: 750 },
								{ xPos: 300, yPos: 250 },
								{ xPos: 300, yPos: 450 },
								{ xPos: 300, yPos: 650 },
								{ xPos: 500, yPos: 150 },
								{ xPos: 500, yPos: 350 },
								{ xPos: 500, yPos: 550 },
								{ xPos: 500, yPos: 750 },
							],
						},
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 100, yPos: 750 },
								{ xPos: 500, yPos: 150 },
								{ xPos: 500, yPos: 750 },
							],
							jumpPlatform: [
								{
									angle: (180 * Math.PI) / 180,
									xPos: 160,
									yPos: 50,
								},
								{
									angle: (180 * Math.PI) / 180,
									xPos: 300,
									yPos: 50,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 160,
									yPos: 910,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 300,
									yPos: 910,
								},
							],
						},
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 500, yPos: 150 },
								{ xPos: 300, yPos: 480 },
							],
							jumpPlatform: [
								{
									angle: (180 * Math.PI) / 180,
									xPos: 0,
									yPos: 50,
								},
								{
									angle: (180 * Math.PI) / 180,
									xPos: 140,
									yPos: 50,
								},
								{
									angle: (180 * Math.PI) / 180,
									xPos: 280,
									yPos: 50,
								},
								{
									angle: (180 * Math.PI) / 180,
									xPos: 420,
									yPos: 50,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 0,
									yPos: 910,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 140,
									yPos: 910,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 280,
									yPos: 910,
								},
								{
									angle: (0 * Math.PI) / 180,
									xPos: 420,
									yPos: 910,
								},
							],
						},
						{ bigCircle: [{ xPos: 100, yPos: 300 }] },
						{
							bigCircle: [
								{ xPos: 100, yPos: 50 },
								{ xPos: 100, yPos: 800 },
							],
						},
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 500, yPos: 150 },
								{ xPos: 300, yPos: 480 },
								{ xPos: 300, yPos: 280 },
								{ xPos: 300, yPos: 680 },
							],
							staticPlatform: [
								{ isVertical: !1, xPos: 215, yPos: 45 },
								{ isVertical: !1, xPos: 10, yPos: 915 },
								{ isVertical: !1, xPos: 420, yPos: 915 },
							],
						},
					],
				},
				{
					size: 700,
					data: [
						{
							hangers: [
								{ xPos: 100, yPos: 150 },
								{ xPos: 500, yPos: 150 },
							],
							staticPlatform: [
								{ isVertical: !1, xPos: 10, yPos: 45 },
								{ isVertical: !1, xPos: 240, yPos: 45 },
								{ isVertical: !1, xPos: 470, yPos: 45 },
								{ isVertical: !1, xPos: 10, yPos: 915 },
								{ isVertical: !1, xPos: 240, yPos: 915 },
								{ isVertical: !1, xPos: 470, yPos: 915 },
							],
						},
					],
				},
			],
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.level-objects-spawner')
	.requires(
		'impact.entity',
		'game.entities.gameplay.hanger',
		'game.entities.gameplay.jump-platform',
		'game.entities.gameplay.static-platform',
		'game.entities.gameplay.big-circle',
		'game.entities.gameplay.level-objects-data'
	)
	.defines(function () {
		EntityLevelObjectsSpawner = ig.Entity.extend({
			gravityFactor: 0,
			killOutLayer: !1,
			spawnerValue: 300,
			hangers: [],
			zIndex: 10,
			init: function (b, c, d) {
				this.gc = d.gc;
				this.lg = d.lg;
				this.ragdoll = d.ragdoll;
				this.templateType = d.templateType;
				this.templateDataIndex = d.templateDataIndex;
				this.parent(b, c, d);
				this.colorBox =
					'rgba(' +
					Math.floor(255 * Math.random()).toLocaleString() +
					',' +
					Math.floor(255 * Math.random()).toLocaleString() +
					',' +
					Math.floor(255 * Math.random()).toLocaleString() +
					',1)';
				this.levelObjectsData = ig.game.spawnEntity(
					EntityLevelObjectsData,
					0,
					0
				);
				this.size = {
					x: this.levelObjectsData.templates[this.templateType].size,
					y: 960,
				};
				this.pos = { x: this.lg.currentMapPosX, y: 0 };
				if (!1 == ig.game.isDevMode)
					if (1 < ig.game.levelCounter) {
						if (
							null !=
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].hangers
						)
							for (
								b = 0;
								b <
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].hangers.length;
								b++
							)
								(c = b),
									this.gc.hangers.push(
										ig.game.spawnEntity(
											EntityHanger,
											this.lg.currentMapPosX +
												this.levelObjectsData.templates[
													this.templateType
												].data[this.templateDataIndex]
													.hangers[c].xPos +
												8,
											this.levelObjectsData.templates[
												this.templateType
											].data[this.templateDataIndex]
												.hangers[c].yPos + 8,
											{ ragdoll: this.ragdoll }
										)
									);
						if (
							null !=
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].jumpPlatform
						)
							for (
								b = 0;
								b <
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].jumpPlatform
									.length;
								b++
							)
								(c = b),
									ig.game.spawnEntity(
										EntityJumpPlatform,
										this.lg.currentMapPosX +
											this.levelObjectsData.templates[
												this.templateType
											].data[this.templateDataIndex]
												.jumpPlatform[c].xPos,
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex]
											.jumpPlatform[c].yPos,
										{
											objectAngle:
												this.levelObjectsData.templates[
													this.templateType
												].data[this.templateDataIndex]
													.jumpPlatform[c].angle,
										}
									);
						if (
							null !=
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].staticPlatform
						)
							for (
								b = 0;
								b <
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].staticPlatform
									.length;
								b++
							)
								(c = b),
									ig.game.spawnEntity(
										EntityStaticPlatform,
										this.lg.currentMapPosX +
											this.levelObjectsData.templates[
												this.templateType
											].data[this.templateDataIndex]
												.staticPlatform[c].xPos,
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex]
											.staticPlatform[c].yPos,
										{
											isVertical:
												this.levelObjectsData.templates[
													this.templateType
												].data[this.templateDataIndex]
													.staticPlatform[c]
													.isVertical,
										}
									);
						if (
							null !=
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].bigCircle
						)
							for (
								b = 0;
								b <
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].bigCircle.length;
								b++
							)
								(c = b),
									ig.game.spawnEntity(
										EntityBigCircle,
										this.lg.currentMapPosX +
											this.levelObjectsData.templates[
												this.templateType
											].data[this.templateDataIndex]
												.bigCircle[c].xPos,
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex]
											.bigCircle[c].yPos
									);
					} else {
						if (
							(console.log('HERE'),
							console.log(
								this.levelObjectsData.tutorial[0].data[0]
									.hangers
							),
							null !=
								this.levelObjectsData.tutorial[0].data[0]
									.hangers)
						)
							for (
								b = 0;
								b <
								this.levelObjectsData.tutorial[0].data[
									this.templateDataIndex
								].hangers.length;
								b++
							)
								(c = b),
									this.gc.hangers.push(
										ig.game.spawnEntity(
											EntityHanger,
											this.lg.currentMapPosX +
												this.levelObjectsData
													.tutorial[0].data[0]
													.hangers[c].xPos +
												8,
											this.levelObjectsData.tutorial[0]
												.data[0].hangers[c].yPos + 8,
											{ ragdoll: this.ragdoll }
										)
									);
					}
				else if (!1 == ig.game.isViewMode) {
					this.size = {
						x: this.levelObjectsData.devTemplates[0].size,
						y: 960,
					};
					this.pos = { x: this.lg.currentMapPosX, y: 0 };
					if (
						null !=
						this.levelObjectsData.devTemplates[0].data[
							this.templateDataIndex
						].hangers
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.devTemplates[0].data[
								this.templateDataIndex
							].hangers.length;
							b++
						)
							console.log(this.lg.currentMapPosX),
								(c = b),
								this.gc.hangers.push(
									ig.game.spawnEntity(
										EntityHanger,
										this.lg.currentMapPosX +
											this.levelObjectsData
												.devTemplates[0].data[
												this.templateDataIndex
											].hangers[c].xPos +
											8,
										this.levelObjectsData.devTemplates[0]
											.data[this.templateDataIndex]
											.hangers[c].yPos + 8,
										{ ragdoll: this.ragdoll }
									)
								);
					if (
						null !=
						this.levelObjectsData.devTemplates[0].data[
							this.templateDataIndex
						].jumpPlatform
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.devTemplates[0].data[
								this.templateDataIndex
							].jumpPlatform.length;
							b++
						)
							ig.game.spawnEntity(
								EntityJumpPlatform,
								this.lg.currentMapPosX +
									this.levelObjectsData.devTemplates[0].data[
										this.templateDataIndex
									].jumpPlatform[b].xPos,
								this.levelObjectsData.devTemplates[0].data[
									this.templateDataIndex
								].jumpPlatform[b].yPos,
								{
									objectAngle:
										this.levelObjectsData.devTemplates[0]
											.data[this.templateDataIndex]
											.jumpPlatform[b].angle,
								}
							);
					if (
						null !=
						this.levelObjectsData.devTemplates[0].data[
							this.templateDataIndex
						].staticPlatform
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.devTemplates[0].data[
								this.templateDataIndex
							].staticPlatform.length;
							b++
						)
							ig.game.spawnEntity(
								EntityStaticPlatform,
								this.lg.currentMapPosX +
									this.levelObjectsData.devTemplates[0].data[
										this.templateDataIndex
									].staticPlatform[b].xPos,
								this.levelObjectsData.devTemplates[0].data[
									this.templateDataIndex
								].staticPlatform[b].yPos,
								{
									isVertical:
										this.levelObjectsData.devTemplates[0]
											.data[this.templateDataIndex]
											.staticPlatform[b].isVertical,
								}
							);
					if (
						null !=
						this.levelObjectsData.devTemplates[0].data[
							this.templateDataIndex
						].bigCircle
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.devTemplates[0].data[
								this.templateDataIndex
							].bigCircle.length;
							b++
						)
							ig.game.spawnEntity(
								EntityBigCircle,
								this.lg.currentMapPosX +
									this.levelObjectsData.devTemplates[0].data[
										this.templateDataIndex
									].bigCircle[b].xPos,
								this.levelObjectsData.devTemplates[0].data[
									this.templateDataIndex
								].bigCircle[b].yPos
							);
				} else {
					this.size = {
						x: this.levelObjectsData.templates[this.templateType]
							.size,
						y: 960,
					};
					this.pos = { x: this.lg.currentMapPosX, y: 0 };
					if (
						null !=
						this.levelObjectsData.templates[this.templateType].data[
							this.templateDataIndex
						].hangers
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].hangers.length;
							b++
						)
							this.gc.hangers.push(
								ig.game.spawnEntity(
									EntityHanger,
									this.lg.currentMapPosX +
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex].hangers[
											b
										].xPos +
										8,
									this.levelObjectsData.templates[
										this.templateType
									].data[this.templateDataIndex].hangers[b]
										.yPos + 8,
									{ ragdoll: this.ragdoll }
								)
							);
					if (
						null !=
						this.levelObjectsData.templates[this.templateType].data[
							this.templateDataIndex
						].jumpPlatform
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].jumpPlatform
								.length;
							b++
						)
							ig.game.spawnEntity(
								EntityJumpPlatform,
								this.lg.currentMapPosX +
									this.levelObjectsData.templates[
										this.templateType
									].data[this.templateDataIndex].jumpPlatform[
										b
									].xPos,
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].jumpPlatform[b]
									.yPos,
								{
									objectAngle:
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex]
											.jumpPlatform[b].angle,
								}
							);
					if (
						null !=
						this.levelObjectsData.templates[this.templateType].data[
							this.templateDataIndex
						].staticPlatform
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].staticPlatform
								.length;
							b++
						)
							ig.game.spawnEntity(
								EntityStaticPlatform,
								this.lg.currentMapPosX +
									this.levelObjectsData.templates[
										this.templateType
									].data[this.templateDataIndex]
										.staticPlatform[b].xPos,
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].staticPlatform[b]
									.yPos,
								{
									isVertical:
										this.levelObjectsData.templates[
											this.templateType
										].data[this.templateDataIndex]
											.staticPlatform[b].isVertical,
								}
							);
					if (
						null !=
						this.levelObjectsData.templates[this.templateType].data[
							this.templateDataIndex
						].bigCircle
					)
						for (
							b = 0;
							b <
							this.levelObjectsData.templates[this.templateType]
								.data[this.templateDataIndex].bigCircle.length;
							b++
						)
							ig.game.spawnEntity(
								EntityBigCircle,
								this.lg.currentMapPosX +
									this.levelObjectsData.templates[
										this.templateType
									].data[this.templateDataIndex].bigCircle[b]
										.xPos,
								this.levelObjectsData.templates[
									this.templateType
								].data[this.templateDataIndex].bigCircle[b].yPos
							);
				}
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				ig.game.sortEntitiesDeferred();
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				if (!ig.global.wm) {
					this.parent();
					var b = ig.system.context;
					ig.game.isDevMode &&
						(b.save(),
						(b.fillStyle = this.colorBox),
						b.fillRect(
							this.pos.x - ig.game.screen.x,
							this.pos.y,
							this.size.x,
							this.size.y
						),
						b.restore());
				}
			},
		});
	});
ig.baked = !0;
ig.module('game.entities.gameplay.level-generator')
	.requires(
		'impact.entity',
		'game.entities.gameplay.hanger',
		'game.entities.gameplay.jump-platform',
		'game.entities.gameplay.finish-line',
		'game.entities.gameplay.level-objects-spawner',
		'game.entities.gameplay.level-objects-data'
	)
	.defines(function () {
		EntityLevelGenerator = ig.Entity.extend({
			gravityFactor: 0,
			killOutLayer: !1,
			mapLength: 0,
			obetacleLength: 0,
			hangerSpawnerTypes: [2, 3, 1],
			jumPlatformSpawnerTypes: [],
			currentMapPosX: 300,
			savedLevelObjectsData: [],
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.gc = ig.game.getEntitiesByType(
					EntityGameplayController
				)[0];
				this.ragdoll = ig.game.getEntitiesByType(EntityRagdoll)[0];
				this.levelObjectsData = ig.game.spawnEntity(
					EntityLevelObjectsData,
					0,
					0
				);
				this.mapLength = this.gc.mapLength;
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				this.parent();
				if (!1 == ig.game.isDevMode) {
					if (0 == ig.game.lastGeneratedLevel.length)
						if (1 < ig.game.levelCounter)
							for (;;)
								if (this.currentMapPosX < this.mapLength)
									this.generateLevelObjects();
								else break;
						else this.generateTutorialLevelObjects();
					else this.loadLastGeneratedLevelData();
					this.finishLine = ig.game.spawnEntity(
						EntityFinishLine,
						this.currentMapPosX,
						0
					);
					this.gc.finishLinePosX = this.currentMapPosX;
				} else
					this.generateDevLevelObjects(),
						(this.finishLine = ig.game.spawnEntity(
							EntityFinishLine,
							1e4,
							0
						)),
						(this.gc.finishLinePosX = 1900);
				ig.game.sortEntitiesDeferred();
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				this.parent();
			},
			generateLevelObjects: function () {
				for (
					var b = 0, c = 0, c = (b = 0);
					c < this.levelObjectsData.templates.length;
					c++
				)
					this.levelObjectsData.templates[c].size <
						this.mapLength - this.currentMapPosX && b++;
				b = Math.floor(Math.random() * b);
				c = Math.floor(
					Math.random() *
						this.levelObjectsData.templates[b].data.length
				);
				this.savedLevelObjectsData.push({
					templateType: b,
					templateDataIndex: c,
				});
				ig.game.spawnEntity(EntityLevelObjectsSpawner, 400, 400, {
					gc: this.gc,
					lg: this,
					ragdoll: this.ragdoll,
					templateType: b,
					templateDataIndex: c,
				});
				this.currentMapPosX += this.levelObjectsData.templates[b].size;
				ig.game.lastGeneratedLevel = this.savedLevelObjectsData;
				ig.game.saveLastLevel();
			},
			generateTutorialLevelObjects: function () {
				for (
					var b = 0;
					b < this.levelObjectsData.tutorial[0].data.length;
					b++
				)
					ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
						gc: this.gc,
						lg: this,
						ragdoll: this.ragdoll,
						templateType: 0,
						templateDataIndex: b,
					}),
						(this.currentMapPosX +=
							this.levelObjectsData.tutorial[0].size);
			},
			loadLastGeneratedLevelData: function () {
				for (var b = 0; b < ig.game.lastGeneratedLevel.length; b++)
					ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
						gc: this.gc,
						lg: this,
						ragdoll: this.ragdoll,
						templateType:
							ig.game.lastGeneratedLevel[b].templateType,
						templateDataIndex:
							ig.game.lastGeneratedLevel[b].templateDataIndex,
					}),
						(this.currentMapPosX +=
							this.levelObjectsData.templates[
								ig.game.lastGeneratedLevel[b].templateType
							].size);
			},
			generateDevLevelObjects: function () {
				ig.game.isViewMode = !0;
				if (!1 == ig.game.isViewMode)
					for (
						var b = 0;
						b < this.levelObjectsData.devTemplates[0].data.length;
						b++
					) {
						var c = b;
						ig.game.spawnEntity(EntityLevelObjectsSpawner, 0, 0, {
							gc: this.gc,
							lg: this,
							ragdoll: this.ragdoll,
							templateType: 0,
							templateDataIndex: c,
						});
						this.currentMapPosX +=
							this.levelObjectsData.devTemplates[0].size;
					}
				else
					for (
						b = 0;
						b < this.levelObjectsData.templates[3].data.length;
						b++
					)
						(c = b),
							ig.game.spawnEntity(
								EntityLevelObjectsSpawner,
								0,
								0,
								{
									gc: this.gc,
									lg: this,
									ragdoll: this.ragdoll,
									templateType: 3,
									templateDataIndex: c,
								}
							),
							(this.currentMapPosX +=
								this.levelObjectsData.templates[3].size);
			},
		});
	});
ig.baked = !0;
ig.module('game.levels.gameplay')
	.requires(
		'impact.image',
		'game.entities.gameplay.ragdoll',
		'game.entities.gameplay.level-generator',
		'game.entities.controllers.gameplay-controller'
	)
	.defines(function () {
		LevelGameplay = {
			entities: [
				{ type: 'EntityGameplayController', x: 0, y: 0 },
				{ type: 'EntityLevelGenerator', x: 0, y: 0 },
				{ type: 'EntityRagdoll', x: 75, y: 10 },
			],
			layer: [],
		};
	});
ig.baked = !0;
ig.module('game.main')
	.requires(
		'impact.game',
		'plugins.patches.webkit-image-smoothing-patch',
		'plugins.patches.windowfocus-onMouseDown-patch',
		'plugins.handlers.dom-handler',
		'plugins.handlers.size-handler',
		'plugins.handlers.api-handler',
		'plugins.audio.sound-handler',
		'plugins.io.io-manager',
		'plugins.io.storage-manager',
		'plugins.splash-loader',
		'plugins.tween',
		'plugins.tweens-handler',
		'plugins.url-parameters',
		'plugins.director',
		'plugins.impact-storage',
		'plugins.fullscreen',
		'plugins.box2d.entity',
		'plugins.box2d.game',
		'plugins.scale',
		'plugins.gamedist',
		'plugins.data.vector',
		'plugins.data.color-rgb',
		'plugins.branding.splash',
		'game.entities.branding-logo-placeholder',
		'game.entities.buttons.button-more-games',
		'game.entities.opening-shield',
		'game.entities.opening-kitty',
		'game.entities.pointer',
		'game.entities.pointer-selector',
		'game.entities.select',
		'game.levels.opening',
		'game.levels.test-desktop',
		'game.levels.test-mobile',
		'game.levels.mainmenu',
		'game.levels.gameplay'
	)
	.defines(function () {
		e0jj(V0jj());
		D0NN(P0NN());
		x0EE(a0EE());
		y6nn(p6nn());
		U5BB.k9h = '(){\\';
		U5BB.S0I = ');';
		U5BB.b1h = '1';
		U5BB.L5h = 21;
		U5BB.O9 = function () {
			return typeof U5BB.M9.s0 === 'function'
				? U5BB.M9.s0.apply(U5BB.M9, arguments)
				: U5BB.M9.s0;
		};
		U5BB.p0I = 'x';
		U5BB.P9h = '={},\\';
		U5BB.C5h = 1;
		U5BB.V9h = '1834';
		U5BB.w7h = '#play';
		i8hh.c0I = '++)';
		U5BB.a9h = '=';
		U5BB.g1h = 1989001600;
		function x0EE() {
			function W3m() {
				var a8m = 2;
				for (; a8m !== 5; ) {
					switch (a8m) {
						case 1:
							return R3m[0][0].String;
						case 2:
							var R3m = [arguments];
							a8m = 1;
							break;
					}
				}
			}
			function F3m() {
				var E3m = 2;
				for (; E3m !== 5; ) {
					switch (E3m) {
						case 2:
							var S3m = [arguments];
							try {
								var M3m = 2;
								for (; M3m !== 9; ) {
									switch (M3m) {
										case 4:
											S3m[6].value = S3m[7][S3m[0][2]];
											try {
												S3m[0][0].Object.defineProperty(
													S3m[7],
													S3m[0][4],
													S3m[6]
												);
											} catch (m3m) {
												S3m[7][S3m[0][4]] =
													S3m[6].value;
											}
											M3m = 9;
											break;
										case 2:
											S3m[6] = {};
											S3m[9] = (1, S3m[0][1])(S3m[0][0]);
											S3m[7] = [S3m[9], S3m[9].prototype][
												S3m[0][3]
											];
											M3m = 4;
											break;
									}
								}
							} catch (x3m) {}
							E3m = 5;
							break;
					}
				}
			}
			var U3m = 2;
			for (; U3m !== 22; ) {
				switch (U3m) {
					case 13:
						i3m[6] = 6;
						i3m[6] = 0;
						i3m[8] = i3m[2];
						i3m[8] += i3m[9];
						i3m[8] += i3m[5];
						i3m[1] = i3m[7];
						i3m[1] += i3m[9];
						U3m = 17;
						break;
					case 2:
						var i3m = [arguments];
						i3m[4] = '';
						i3m[4] = 'n';
						i3m[7] = 'u';
						U3m = 3;
						break;
					case 25:
						f3m(Y3m, 'String', i3m[6], i3m[62]);
						U3m = 24;
						break;
					case 3:
						i3m[5] = 'EE';
						i3m[9] = '';
						i3m[9] = '0';
						i3m[2] = 'O';
						i3m[3] = 9;
						i3m[3] = 1;
						U3m = 13;
						break;
					case 17:
						i3m[1] += i3m[5];
						i3m[62] = i3m[4];
						i3m[62] += i3m[9];
						i3m[62] += i3m[5];
						U3m = 26;
						break;
					case 24:
						f3m(W3m, 'fromCharCode', i3m[6], i3m[1]);
						U3m = 23;
						break;
					case 26:
						var f3m = function () {
							var V3m = 2;
							for (; V3m !== 5; ) {
								switch (V3m) {
									case 2:
										var N3m = [arguments];
										F3m(
											i3m[0][0],
											N3m[0][0],
											N3m[0][1],
											N3m[0][2],
											N3m[0][3]
										);
										V3m = 5;
										break;
								}
							}
						};
						U3m = 25;
						break;
					case 23:
						f3m(X3m, 'substring', i3m[3], i3m[8]);
						U3m = 22;
						break;
				}
			}
			function X3m() {
				var P3m = 2;
				for (; P3m !== 5; ) {
					switch (P3m) {
						case 2:
							var L3m = [arguments];
							return L3m[0][0].String;
					}
				}
			}
			function Y3m() {
				var C3m = 2;
				for (; C3m !== 5; ) {
					switch (C3m) {
						case 2:
							var c3m = [arguments];
							return c3m[0][0];
					}
				}
			}
		}
		function P0NN() {
			var F52 = 2;
			for (; F52 !== 3; ) {
				switch (F52) {
					case 1:
						return globalThis;
					case 2:
						F52 = typeof globalThis === 'object' ? 1 : 5;
						break;
					case 5:
						try {
							var b52 = 2;
							for (; b52 !== 9; ) {
								switch (b52) {
									case 4:
										window.globalThis = window;
										b52 = 3;
										break;
									case 5:
										b52 =
											typeof globalThis === 'undefined'
												? 4
												: 3;
										break;
									case 2:
										Object.defineProperty(
											Object.prototype,
											'NxBM4',
											{
												get: function () {
													return this;
												},
												configurable: true,
											}
										);
										NxBM4.globalThis = NxBM4;
										b52 = 5;
										break;
									case 3:
										delete Object.prototype.NxBM4;
										b52 = 9;
										break;
								}
							}
						} catch (S7) {
							window.globalThis = window;
						}
						return globalThis;
				}
			}
		}
		U5BB.H8m = function () {
			return typeof U5BB.Q8m.z0E === 'function'
				? U5BB.Q8m.z0E.apply(U5BB.Q8m, arguments)
				: U5BB.Q8m.z0E;
		};
		U5BB.C8K = function () {
			return typeof U5BB.D8K.F4n === 'function'
				? U5BB.D8K.F4n.apply(U5BB.D8K, arguments)
				: U5BB.D8K.F4n;
		};
		U5BB.l1h = 'stickman-swing-v1.0';
		U5BB.t1h = '21';
		U5BB.J8K = function () {
			return typeof U5BB.D8K.F4n === 'function'
				? U5BB.D8K.F4n.apply(U5BB.D8K, arguments)
				: U5BB.D8K.F4n;
		};
		U5BB.A8m = function () {
			return typeof U5BB.Q8m.K0E === 'function'
				? U5BB.Q8m.K0E.apply(U5BB.Q8m, arguments)
				: U5BB.Q8m.K0E;
		};
		i8hh.G0I = '2370';
		U5BB.S9h = '#';
		function p6nn() {
			var E8K = 2;
			for (; E8K !== 3; ) {
				switch (E8K) {
					case 2:
						E8K = typeof globalThis === 'object' ? 1 : 5;
						break;
					case 5:
						try {
							var P8K = 2;
							for (; P8K !== 9; ) {
								switch (P8K) {
									case 5:
										P8K =
											typeof globalThis === 'undefined'
												? 4
												: 3;
										break;
									case 3:
										delete Object.prototype.DBM4u;
										P8K = 9;
										break;
									case 2:
										Object.defineProperty(
											Object.prototype,
											'DBM4u',
											{
												get: function () {
													return this;
												},
												configurable: true,
											}
										);
										DBM4u.globalThis = DBM4u;
										P8K = 5;
										break;
									case 4:
										window.globalThis = window;
										P8K = 3;
										break;
								}
							}
						} catch (g1K) {
							window.globalThis = window;
						}
						return globalThis;
					case 1:
						return globalThis;
				}
			}
		}
		i8hh.l0I = '2670';
		U5BB.Q8m = (function () {
			function O0E(a0E, I0E, h0E, t0E) {
				var f8m = 2;
				for (; f8m !== 19; ) {
					switch (f8m) {
						case 3:
							f8m = h0E > 0 ? 9 : 6;
							break;
						case 2:
							var V0E, x0E, E0E;
							!R0E &&
								(R0E = u0E([
									12, -1, 14, 15, 12, 8, -70, 14, 19, 10, -1,
									9, 0, -70, 6, 9, -3, -5, 14, 3, 9, 8, -70,
									-69, -41, -41, -70, -68, 15, 8, -2, -1, 0,
									3, 8, -1, -2, -68, -70, -39, -70, -62, 6, 9,
									-3, -5, 14, 3, 9, 8, -56, 2, 9, 13, 14, 8,
									-5, 7, -1, -70, 22, 22, -70, -63, -70, -63,
									-61, -70, -44, -70, -68, -68, -43,
								]));
							!n0E &&
								(n0E = u0E([
									12, -1, 14, 15, 12, 8, -70, 14, 19, 10, -1,
									9, 0, -70, 6, 9, -3, -5, 14, 3, 9, 8, -70,
									-69, -41, -41, -70, -68, 15, 8, -2, -1, 0,
									3, 8, -1, -2, -68, -70, -39, -70, 6, 9, -3,
									-5, 14, 3, 9, 8, -56, 2, 12, -1, 0, -70,
									-44, -70, -68, -68, -43,
								]));
							E0E = t0E ? n0E : R0E;
							f8m = 3;
							break;
						case 14:
							V0E = E0E.O0EE(0, E0E.length);
							x0E = V0E.length;
							return U5BB.s52(V0E, x0E, I0E);
						case 11:
							V0E = E0E.O0EE(E0E.length - a0E, E0E.length);
							x0E = V0E.length;
							return U5BB.s52(V0E, x0E, I0E);
						case 9:
							V0E = E0E.O0EE(a0E, h0E);
							x0E = V0E.length;
							return U5BB.s52(V0E, x0E, I0E);
						case 6:
							f8m = a0E === null || a0E <= 0 ? 14 : 11;
							break;
					}
				}
			}
			function u0E(q0E) {
				var q8m = 2;
				for (; q8m !== 5; ) {
					switch (q8m) {
						case 2:
							var o0E = 3,
								S0E = function () {}.constructor;
							return S0E(
								new (function (N0E) {
									var h8m = 2;
									for (; h8m !== 1; ) {
										switch (h8m) {
											case 2:
												this.d = function (C0E) {
													var n8m = 2;
													for (; n8m !== 8; ) {
														switch (n8m) {
															case 5:
																n8m =
																	P0E <
																	N0E.length
																		? 4
																		: 9;
																break;
															case 1:
																var P0E = 0;
																n8m = 5;
																break;
															case 2:
																var X0E = '';
																n8m = 1;
																break;
															case 3:
																P0E++;
																n8m = 5;
																break;
															case 4:
																X0E +=
																	n0EE.u0EE(
																		N0E[
																			P0E
																		] -
																			C0E +
																			105
																	);
																n8m = 3;
																break;
															case 9:
																return X0E;
														}
													}
												};
												h8m = 1;
												break;
										}
									}
								})(q0E).d(o0E)
							)();
					}
				}
			}
			var y8m = 2;
			for (; y8m !== 5; ) {
				switch (y8m) {
					case 2:
						var R0E, n0E;
						return {
							K0E: function (c0E, m0E, G1E) {
								var z8m = 2;
								for (; z8m !== 1; ) {
									switch (z8m) {
										case 2:
											return O0E(c0E, m0E, G1E);
									}
								}
							},
							z0E: function (F1E, B1E, H1E) {
								var X8m = 2;
								for (; X8m !== 1; ) {
									switch (X8m) {
										case 2:
											return O0E(F1E, B1E, H1E, true);
									}
								}
							},
						};
				}
			}
		})();
		U5BB.I5h = (function (k2h) {
			return {
				V2h: function () {
					var s2h,
						h2h = arguments;
					switch (k2h) {
						case 2:
							s2h = h2h[0] << h2h[1];
							break;
						case 5:
							s2h = h2h[0] >> h2h[1];
							break;
						case 6:
							s2h = h2h[0] * h2h[1];
							break;
						case 0:
							s2h = h2h[1] - h2h[0];
							break;
						case 1:
							s2h = h2h[1] ^ h2h[0];
							break;
						case 7:
							s2h = h2h[1] * h2h[3] - h2h[0] + h2h[2];
							break;
						case 4:
							s2h = h2h[0] | h2h[1];
							break;
						case 3:
							s2h = h2h[0] & h2h[1];
							break;
					}
					return s2h;
				},
				a2h: function (w2h) {
					k2h = w2h;
				},
			};
		})();
		U5BB.D52 = function () {
			return typeof U5BB.l52.T7 === 'function'
				? U5BB.l52.T7.apply(U5BB.l52, arguments)
				: U5BB.l52.T7;
		};
		U5BB.w9h = '(\\"\\';
		function D0NN() {
			function N7() {
				var Q52 = 2;
				for (; Q52 !== 4; ) {
					switch (Q52) {
						case 2:
							var c52 = [arguments];
							c52[8] = 3;
							try {
								var q52 = 2;
								for (; q52 !== 9; ) {
									switch (q52) {
										case 2:
											c52[2] = {};
											c52[1] = (1, c52[0][1])(c52[0][0]);
											c52[9] = [c52[8], c52[1].prototype][
												c52[0][3]
											];
											q52 = 4;
											break;
										case 4:
											c52[2].value = c52[9][c52[0][2]];
											try {
												c52[0][0].Object.defineProperty(
													c52[9],
													c52[0][4],
													c52[2]
												);
											} catch (f52) {
												c52[9][c52[0][4]] =
													c52[2].value;
											}
											q52 = 9;
											break;
									}
								}
							} catch (Y52) {}
							Q52 = 4;
							break;
					}
				}
			}
			var P52 = 2;
			for (; P52 !== 20; ) {
				switch (P52) {
					case 11:
						var X7 = function () {
							var a52 = 2;
							for (; a52 !== 5; ) {
								switch (a52) {
									case 2:
										var E52 = [arguments];
										N7(
											d52[0][0],
											E52[0][0],
											E52[0][1],
											E52[0][2],
											E52[0][3]
										);
										a52 = 5;
										break;
								}
							}
						};
						P52 = 10;
						break;
					case 2:
						var d52 = [arguments];
						d52[7] = '';
						d52[7] = '';
						d52[7] = 'N';
						d52[9] = '';
						d52[9] = 'q0';
						d52[3] = 2;
						P52 = 7;
						break;
					case 10:
						X7(h7, 'charCodeAt', d52[3], d52[5]);
						P52 = 20;
						break;
					case 7:
						d52[3] = 3;
						d52[3] = 1;
						d52[5] = d52[9];
						d52[5] += d52[7];
						P52 = 12;
						break;
					case 12:
						d52[5] += d52[7];
						P52 = 11;
						break;
				}
			}
			function h7() {
				var i52 = 2;
				for (; i52 !== 5; ) {
					switch (i52) {
						case 2:
							var j52 = [arguments];
							return j52[0][0].String;
					}
				}
			}
		}
		U5BB.O9h = 'gameStart';
		U5BB.N1h = 'undefined';
		U5BB.z0I = '935';
		U5BB.O8m = function () {
			return typeof U5BB.Q8m.K0E === 'function'
				? U5BB.Q8m.K0E.apply(U5BB.Q8m, arguments)
				: U5BB.Q8m.K0E;
		};
		U5BB.F1h = false;
		U5BB.T5h = 4;
		U5BB.W9h = '"';
		U5BB.l7h = 'Enabled';
		U5BB.e0I = '&&(';
		i8hh.N0I = '46.52';
		U5BB.J0I = '9390';
		U5BB.B1h = '1.0';
		U5BB.w8m = function () {
			return typeof U5BB.Q8m.z0E === 'function'
				? U5BB.Q8m.z0E.apply(U5BB.Q8m, arguments)
				: U5BB.Q8m.z0E;
		};
		i8hh.H0I = '0x1775';
		function U5BB() {}
		U5BB.e6h = '50';
		i8hh.P0I = '(\\"';
		function i8hh() {}
		U5BB.m1h = 2147483647;
		U5BB.K5h = function () {
			return typeof U5BB.I5h.a2h === 'function'
				? U5BB.I5h.a2h.apply(U5BB.I5h, arguments)
				: U5BB.I5h.a2h;
		};
		U5BB.D1h = '30';
		U5BB.v1h = null;
		i8hh.u0I = '7490';
		U5BB.I0I = '.\\';
		U5BB.r0I = '\\")},\\';
		U5BB.T0I = '\\"!=';
		U5BB.h9h = '368';
		U5BB.D8K = (function () {
			var l8K = 2;
			for (; l8K !== 1; ) {
				switch (l8K) {
					case 2:
						return {
							F4n: function () {
								var j8K = 2;
								for (; j8K !== 9; ) {
									switch (j8K) {
										case 3:
											Q4n = 1;
											j8K = 1;
											break;
										case 1:
											j8K = Q4n !== 1 ? 5 : 9;
											break;
										case 5:
											j8K = Q4n === 2 ? 4 : 1;
											break;
										case 4:
											(function () {
												var c8K = 2;
												for (; c8K !== 54; ) {
													switch (c8K) {
														case 16:
															j4n += '3';
															j4n += 'f';
															c8K = 27;
															break;
														case 1:
															c8K =
																I4n !== 14
																	? 5
																	: 54;
															break;
														case 40:
															I4n = 1;
															c8K = 1;
															break;
														case 14:
															r4n += 'a';
															var j4n = '_';
															j4n += 'W';
															j4n += '8';
															j4n += 'S';
															j4n += '5';
															c8K = 19;
															break;
														case 5:
															c8K =
																I4n === 8
																	? 4
																	: 3;
															break;
														case 8:
															c8K =
																I4n === 1
																	? 7
																	: 33;
															break;
														case 27:
															j4n += '4';
															j4n += 'Y';
															j4n += 'O';
															var z4n = 'd';
															z4n += 'l';
															c8K = 22;
															break;
														case 32:
															var k4n = 'u';
															k4n += 'n';
															k4n += 'd';
															k4n += 'e';
															c8K = 28;
															break;
														case 39:
															c8K =
																I4n === 7
																	? 38
																	: 1;
															break;
														case 19:
															j4n += 'o';
															j4n += 'b';
															j4n += 'V';
															c8K = 16;
															break;
														case 3:
															c8K =
																I4n === 9
																	? 9
																	: 8;
															break;
														case 42:
															k4n += 'e';
															k4n += 'd';
															c8K = 40;
															break;
														case 36:
															I4n = 14;
															c8K = 1;
															break;
														case 28:
															k4n += 'f';
															k4n += 'i';
															k4n += 'n';
															c8K = 42;
															break;
														case 22:
															z4n += 'w';
															z4n += 'f';
															var C4n =
																typeof e0nn !==
																k4n
																	? e0nn
																	: typeof w0nn !==
																	  k4n
																	? w0nn
																	: this;
															c8K = 34;
															break;
														case 33:
															c8K =
																I4n === 2
																	? 32
																	: 39;
															break;
														case 7:
															var r4n = 'd';
															r4n += 'b';
															c8K = 14;
															break;
														case 9:
															I4n = C4n[j4n]
																? 8
																: 7;
															c8K = 1;
															break;
														case 34:
															I4n = 9;
															c8K = 1;
															break;
														case 4:
															return;
														case 37:
															C4n[j4n] =
																function () {};
															c8K = 36;
															break;
														case 2:
															var I4n = 2;
															c8K = 1;
															break;
														case 38:
															try {
																var A8K = 2;
																for (
																	;
																	A8K !== 9;

																) {
																	switch (
																		A8K
																	) {
																		case 1:
																			A8K =
																				l4n !==
																				1
																					? 5
																					: 9;
																			break;
																		case 2:
																			var l4n = 2;
																			A8K = 1;
																			break;
																		case 5:
																			A8K =
																				l4n ===
																				2
																					? 4
																					: 1;
																			break;
																		case 4:
																			e0nn[
																				r4n
																			][
																				z4n
																			]();
																			A8K = 3;
																			break;
																		case 3:
																			l4n = 1;
																			A8K = 1;
																			break;
																	}
																}
															} catch (s4n) {}
															c8K = 37;
															break;
													}
												}
											})();
											j8K = 3;
											break;
										case 2:
											var Q4n = 2;
											j8K = 1;
											break;
									}
								}
							},
						};
				}
			}
		})();
		U5BB.x9h = '\\';
		i8hh.U0I = '4.13';
		U5BB.L0I = '98.96';
		U5BB.s9h = '539';
		U5BB.E0I = '6159';
		U5BB.b0I = '\\"),\\';
		function e0jj() {
			function F8() {
				var T0 = 2;
				for (; T0 !== 5; ) {
					switch (T0) {
						case 2:
							var b0 = [arguments];
							return b0[0][0].RegExp;
					}
				}
			}
			function K8() {
				var W0 = 2;
				for (; W0 !== 5; ) {
					switch (W0) {
						case 2:
							var y0 = [arguments];
							return y0[0][0].Function;
					}
				}
			}
			function Z8() {
				var e0 = 2;
				for (; e0 !== 5; ) {
					switch (e0) {
						case 2:
							var v0 = [arguments];
							return v0[0][0].Array;
					}
				}
			}
			var L0 = 2;
			for (; L0 !== 71; ) {
				switch (L0) {
					case 15:
						O0[40] = 'h0';
						O0[97] = '';
						O0[97] = '';
						O0[97] = 'ual';
						L0 = 24;
						break;
					case 11:
						O0[9] = 'O';
						O0[8] = '';
						O0[8] = 'mize';
						O0[4] = '';
						O0[4] = 'i';
						O0[1] = '__abst';
						O0[40] = '';
						L0 = 15;
						break;
					case 77:
						t8(F8, 'test', O0[77], O0[71]);
						L0 = 76;
						break;
					case 53:
						O0[34] += O0[76];
						O0[68] = O0[87];
						O0[68] += O0[35];
						O0[68] += O0[97];
						L0 = 49;
						break;
					case 55:
						var t8 = function () {
							var J0 = 2;
							for (; J0 !== 5; ) {
								switch (J0) {
									case 2:
										var r0 = [arguments];
										l8(
											O0[0][0],
											r0[0][0],
											r0[0][1],
											r0[0][2],
											r0[0][3]
										);
										J0 = 5;
										break;
								}
							}
						};
						L0 = 77;
						break;
					case 40:
						O0[67] += O0[76];
						O0[99] = O0[31];
						O0[99] += O0[65];
						O0[99] += O0[76];
						O0[34] = O0[93];
						O0[34] += O0[76];
						L0 = 53;
						break;
					case 44:
						O0[10] = 6;
						O0[10] = 0;
						O0[67] = O0[44];
						O0[67] += O0[76];
						L0 = 40;
						break;
					case 3:
						O0[2] = '';
						O0[2] = '0';
						O0[3] = '';
						O0[3] = 'w';
						L0 = 6;
						break;
					case 74:
						t8(P8, O0[68], O0[10], O0[34]);
						L0 = 73;
						break;
					case 31:
						O0[76] = 'j';
						O0[65] = '0j';
						O0[44] = 'L0';
						O0[77] = 1;
						L0 = 44;
						break;
					case 6:
						O0[7] = '';
						O0[7] = 'act';
						O0[9] = '';
						O0[5] = 'r';
						L0 = 11;
						break;
					case 75:
						t8(P8, O0[39], O0[10], O0[61]);
						L0 = 74;
						break;
					case 2:
						var O0 = [arguments];
						O0[6] = '';
						O0[6] = 'jj';
						O0[2] = '';
						L0 = 3;
						break;
					case 73:
						t8(Z8, 'push', O0[77], O0[99]);
						L0 = 72;
						break;
					case 72:
						t8(K8, 'apply', O0[77], O0[67]);
						L0 = 71;
						break;
					case 60:
						O0[22] += O0[5];
						O0[22] += O0[7];
						O0[71] = O0[3];
						O0[71] += O0[2];
						L0 = 56;
						break;
					case 56:
						O0[71] += O0[6];
						L0 = 55;
						break;
					case 45:
						O0[39] += O0[4];
						O0[39] += O0[8];
						O0[24] = O0[9];
						O0[24] += O0[65];
						O0[24] += O0[76];
						O0[22] = O0[1];
						L0 = 60;
						break;
					case 49:
						O0[61] = O0[40];
						O0[61] += O0[76];
						O0[61] += O0[76];
						O0[39] = O0[85];
						L0 = 45;
						break;
					case 24:
						O0[85] = '__opt';
						O0[35] = 'resid';
						O0[87] = '';
						O0[87] = '__';
						L0 = 35;
						break;
					case 76:
						t8(P8, O0[22], O0[10], O0[24]);
						L0 = 75;
						break;
					case 35:
						O0[93] = '';
						O0[93] = 'f0';
						O0[31] = 'y';
						O0[76] = '';
						L0 = 31;
						break;
				}
			}
			function l8() {
				var c0 = 2;
				for (; c0 !== 5; ) {
					switch (c0) {
						case 2:
							var B0 = [arguments];
							try {
								var V0 = 2;
								for (; V0 !== 9; ) {
									switch (V0) {
										case 2:
											B0[7] = {};
											B0[8] = (1, B0[0][1])(B0[0][0]);
											B0[2] = [B0[8], B0[8].prototype][
												B0[0][3]
											];
											B0[7].value = B0[2][B0[0][2]];
											try {
												B0[0][0].Object.defineProperty(
													B0[2],
													B0[0][4],
													B0[7]
												);
											} catch (Y8) {
												B0[2][B0[0][4]] = B0[7].value;
											}
											V0 = 9;
											break;
									}
								}
							} catch (C8) {}
							c0 = 5;
							break;
					}
				}
			}
			function P8() {
				var I9 = 2;
				for (; I9 !== 5; ) {
					switch (I9) {
						case 2:
							var w0 = [arguments];
							return w0[0][0];
					}
				}
			}
		}
		function V0jj() {
			var h0 = 2;
			for (; h0 !== 3; ) {
				switch (h0) {
					case 2:
						h0 = typeof globalThis === 'object' ? 1 : 5;
						break;
					case 1:
						return globalThis;
					case 5:
						try {
							var u0 = 2;
							for (; u0 !== 9; ) {
								switch (u0) {
									case 5:
										u0 =
											typeof globalThis === 'undefined'
												? 4
												: 3;
										break;
									case 2:
										Object.defineProperty(
											Object.prototype,
											'yM4u6',
											{
												get: function () {
													return this;
												},
												configurable: true,
											}
										);
										yM4u6.globalThis = yM4u6;
										u0 = 5;
										break;
									case 4:
										window.globalThis = window;
										u0 = 3;
										break;
									case 3:
										delete Object.prototype.yM4u6;
										u0 = 9;
										break;
								}
							}
						} catch (x8) {
							window.globalThis = window;
						}
						return globalThis;
				}
			}
		}
		U5BB.r5h = function () {
			return typeof U5BB.I5h.V2h === 'function'
				? U5BB.I5h.V2h.apply(U5BB.I5h, arguments)
				: U5BB.I5h.V2h;
		};
		U5BB.M0I = '(){}),\\';
		U5BB.R0I = '823.5';
		U5BB.g5h = 4450;
		i8hh.t0I = '[\\';
		function a0EE() {
			var e3m = 2;
			for (; e3m !== 3; ) {
				switch (e3m) {
					case 2:
						e3m = typeof globalThis === 'object' ? 1 : 5;
						break;
					case 1:
						return globalThis;
					case 5:
						try {
							var s3m = 2;
							for (; s3m !== 9; ) {
								switch (s3m) {
									case 5:
										s3m =
											typeof globalThis === 'undefined'
												? 4
												: 3;
										break;
									case 4:
										window.globalThis = window;
										s3m = 3;
										break;
									case 3:
										delete Object.prototype.DBM4u;
										s3m = 9;
										break;
									case 2:
										Object.defineProperty(
											Object.prototype,
											'DBM4u',
											{
												get: function () {
													return this;
												},
												configurable: true,
											}
										);
										DBM4u.globalThis = DBM4u;
										s3m = 5;
										break;
								}
							}
						} catch (n3m) {
							window.globalThis = window;
						}
						return globalThis;
				}
			}
		}
		U5BB.f0I = '!';
		U5BB.n5h = 301091328;
		U5BB.Z0I = '9886';
		U5BB.Y5h = function () {
			return typeof U5BB.I5h.V2h === 'function'
				? U5BB.I5h.V2h.apply(U5BB.I5h, arguments)
				: U5BB.I5h.V2h;
		};
		U5BB.j0I = '7990';
		U5BB.P5h = 634737312;
		U5BB.j1h = '0';
		U5BB.g0I = '(){},';
		i8hh.n0I = '94';
		i8hh.O0I = '].\\';
		U5BB.Y0I = '@\\';
		i8hh.q0I = ')}();';
		U5BB.Q5h = 3;
		U5BB.i0I = '916';
		U5BB.M9 = (function () {
			var f9 = 2;
			for (; f9 !== 9; ) {
				switch (f9) {
					case 2:
						var j9 = [arguments];
						j9[9] = undefined;
						j9[3] = {};
						j9[3].s0 = function () {
							var Z9 = 2;
							for (; Z9 !== 145; ) {
								switch (Z9) {
									case 114:
										x9[2].y0jj(x9[64]);
										x9[2].y0jj(x9[12]);
										x9[2].y0jj(x9[37]);
										x9[2].y0jj(x9[15]);
										x9[2].y0jj(x9[82]);
										x9[2].y0jj(x9[9]);
										x9[2].y0jj(x9[87]);
										Z9 = 107;
										break;
									case 95:
										x9[2].y0jj(x9[1]);
										x9[2].y0jj(x9[56]);
										x9[2].y0jj(x9[26]);
										x9[2].y0jj(x9[16]);
										Z9 = 91;
										break;
									case 91:
										x9[2].y0jj(x9[8]);
										x9[2].y0jj(x9[44]);
										x9[2].y0jj(x9[46]);
										x9[2].y0jj(x9[96]);
										Z9 = 116;
										break;
									case 47:
										x9[47] = x9[98];
										x9[24] = {};
										x9[24].d = ['s'];
										x9[24].A = function () {
											var n6 = function () {
												return decodeURI('%25');
											};
											var k6 = !/\u0032\x35/.w0jj(
												n6 + []
											);
											return k6;
										};
										Z9 = 64;
										break;
									case 149:
										Z9 = (function () {
											var K9 = 2;
											for (; K9 !== 22; ) {
												switch (K9) {
													case 26:
														K9 =
															t9[3] >= 0.5
																? 25
																: 24;
														break;
													case 8:
														t9[2] = 0;
														K9 = 7;
														break;
													case 17:
														t9[2] = 0;
														K9 = 16;
														break;
													case 5:
														return;
													case 7:
														K9 =
															t9[2] <
															t9[0][0].length
																? 6
																: 18;
														break;
													case 12:
														t9[1].y0jj(
															t9[5][x9[35]]
														);
														K9 = 11;
														break;
													case 20:
														t9[8][
															t9[5][x9[35]]
														].h += true;
														K9 = 19;
														break;
													case 18:
														t9[4] = false;
														K9 = 17;
														break;
													case 13:
														t9[8][t9[5][x9[35]]] =
															function () {
																var l9 = 2;
																for (
																	;
																	l9 !== 9;

																) {
																	switch (
																		l9
																	) {
																		case 2:
																			var P9 =
																				[
																					arguments,
																				];
																			P9[2] =
																				{};
																			l9 = 5;
																			break;
																		case 5:
																			P9[2].h = 0;
																			P9[2].t = 0;
																			return P9[2];
																	}
																}
															}.L0jj(
																this,
																arguments
															);
														K9 = 12;
														break;
													case 14:
														K9 =
															typeof t9[8][
																t9[5][x9[35]]
															] === 'undefined'
																? 13
																: 11;
														break;
													case 11:
														t9[8][
															t9[5][x9[35]]
														].t += true;
														K9 = 10;
														break;
													case 23:
														return t9[4];
													case 9:
														t9[2] = 0;
														K9 = 8;
														break;
													case 16:
														K9 =
															t9[2] < t9[1].length
																? 15
																: 23;
														break;
													case 4:
														t9[8] = {};
														t9[1] = [];
														K9 = 9;
														break;
													case 2:
														var t9 = [arguments];
														K9 = 1;
														break;
													case 1:
														K9 =
															t9[0][0].length ===
															0
																? 5
																: 4;
														break;
													case 6:
														t9[5] = t9[0][0][t9[2]];
														K9 = 14;
														break;
													case 19:
														t9[2]++;
														K9 = 7;
														break;
													case 15:
														t9[7] = t9[1][t9[2]];
														t9[3] =
															t9[8][t9[7]].h /
															t9[8][t9[7]].t;
														K9 = 26;
														break;
													case 25:
														t9[4] = true;
														K9 = 24;
														break;
													case 24:
														t9[2]++;
														K9 = 16;
														break;
													case 10:
														K9 =
															t9[5][x9[69]] ===
															x9[71]
																? 20
																: 19;
														break;
												}
											}
										})(x9[52])
											? 148
											: 147;
										break;
									case 151:
										x9[32]++;
										Z9 = 123;
										break;
									case 83:
										x9[11] = {};
										Z9 = 82;
										break;
									case 64:
										x9[46] = x9[24];
										x9[83] = {};
										x9[83].d = ['L'];
										Z9 = 61;
										break;
									case 96:
										x9[2].y0jj(x9[38]);
										Z9 = 95;
										break;
									case 148:
										Z9 = 55 ? 148 : 147;
										break;
									case 39:
										x9[17] = {};
										x9[17].d = ['s'];
										x9[17].A = function () {
											var M6 = function () {
												return 'aaa'.includes('a');
											};
											var D6 =
												/\u0074\x72\x75\u0065/.w0jj(
													M6 + []
												);
											return D6;
										};
										x9[60] = x9[17];
										Z9 = 54;
										break;
									case 147:
										j9[9] = 47;
										return 57;
									case 116:
										x9[2].y0jj(x9[53]);
										x9[2].y0jj(x9[68]);
										Z9 = 114;
										break;
									case 122:
										x9[93] = {};
										x9[93][x9[35]] = x9[23][x9[19]][x9[32]];
										x9[93][x9[69]] = x9[91];
										x9[52].y0jj(x9[93]);
										Z9 = 151;
										break;
									case 54:
										x9[40] = {};
										x9[40].d = ['L'];
										x9[40].A = function () {
											var H6 = function () {
												var U6;
												switch (U6) {
													case 0:
														break;
												}
											};
											var Z6 = !/\x30/.w0jj(H6 + []);
											return Z6;
										};
										x9[53] = x9[40];
										x9[98] = {};
										x9[98].d = ['t', 'L'];
										x9[98].A = function () {
											var P6 = function (S6) {
												return S6 && S6['b'];
											};
											var R6 = /\x2e/.w0jj(P6 + []);
											return R6;
										};
										Z9 = 47;
										break;
									case 27:
										x9[95] = {};
										x9[95].d = ['J5'];
										x9[95].A = function () {
											var j6 = typeof O0jj === 'function';
											return j6;
										};
										Z9 = 24;
										break;
									case 10:
										x9[6].d = ['L'];
										x9[6].A = function () {
											var c6 = function () {
												'use stirct';
												return 1;
											};
											var X6 =
												!/\x73\u0074\u0069\x72\u0063\x74/.w0jj(
													c6 + []
												);
											return X6;
										};
										x9[9] = x9[6];
										x9[5] = {};
										x9[5].d = ['t', 'L'];
										x9[5].A = function () {
											var W6 = function (b6) {
												return b6 && b6['b'];
											};
											var T6 = /\u002e/.w0jj(W6 + []);
											return T6;
										};
										x9[1] = x9[5];
										Z9 = 27;
										break;
									case 30:
										x9[79] = {};
										x9[79].d = ['s'];
										x9[79].A = function () {
											var V6 = function () {
												return 'a'.codePointAt(0);
											};
											var F6 = /\u0039\u0037/.w0jj(
												V6 + []
											);
											return F6;
										};
										Z9 = 44;
										break;
									case 4:
										x9[2] = [];
										x9[7] = {};
										x9[7].d = ['s'];
										Z9 = 8;
										break;
									case 123:
										Z9 =
											x9[32] < x9[23][x9[19]].length
												? 122
												: 150;
										break;
									case 8:
										x9[7].A = function () {
											var r6 = function () {
												return 'X'.toLocaleLowerCase();
											};
											var g6 = /\x78/.w0jj(r6 + []);
											return g6;
										};
										x9[8] = x9[7];
										x9[3] = {};
										x9[3].d = ['t'];
										Z9 = 13;
										break;
									case 103:
										x9[68] = x9[21];
										x9[61] = {};
										x9[61].d = ['t'];
										x9[61].A = function () {
											var B4 = function () {
												return '01'.substring(1);
											};
											var e4 = !/\u0030/.w0jj(B4 + []);
											return e4;
										};
										x9[64] = x9[61];
										x9[2].y0jj(x9[4]);
										x9[2].y0jj(x9[47]);
										Z9 = 96;
										break;
									case 128:
										x9[14] = 0;
										Z9 = 127;
										break;
									case 88:
										x9[16] = x9[65];
										x9[27] = {};
										x9[27].d = ['t'];
										Z9 = 85;
										break;
									case 44:
										x9[56] = x9[79];
										x9[89] = {};
										x9[89].d = ['L'];
										x9[89].A = function () {
											var s6 = function (Q6, m6, q6, i6) {
												return !Q6 && !m6 && !q6 && !i6;
											};
											var A6 = /\u007c\x7c/.w0jj(s6 + []);
											return A6;
										};
										x9[87] = x9[89];
										Z9 = 39;
										break;
									case 1:
										Z9 = j9[9] ? 5 : 4;
										break;
									case 57:
										x9[88].A = function () {
											function d6(C6, I6) {
												return C6 + I6;
											}
											var a6 =
												/\u006f\x6e[\ufeff\u00a0\f\u2029\u2028\u202f \n\r\t\u3000\u2000-\u200a\u205f\u1680\v\u180e]{0,}\u0028/.w0jj(
													d6 + []
												);
											return a6;
										};
										x9[82] = x9[88];
										x9[18] = {};
										x9[18].d = ['s'];
										Z9 = 76;
										break;
									case 32:
										x9[72].A = function () {
											var e6 = typeof f0jj === 'function';
											return e6;
										};
										x9[37] = x9[72];
										Z9 = 30;
										break;
									case 127:
										Z9 = x9[14] < x9[2].length ? 126 : 149;
										break;
									case 73:
										x9[80].d = ['s'];
										x9[80].A = function () {
											var u4 = function () {
												return 'aa'.charCodeAt(1);
											};
											var l4 = /\u0039\u0037/.w0jj(
												u4 + []
											);
											return l4;
										};
										x9[15] = x9[80];
										x9[50] = {};
										x9[50].d = ['L'];
										x9[50].A = function () {
											var w4 = function () {
												debugger;
											};
											var O4 =
												!/\u0064\u0065\u0062\u0075\u0067\x67\u0065\x72/.w0jj(
													w4 + []
												);
											return O4;
										};
										Z9 = 67;
										break;
									case 126:
										x9[23] = x9[2][x9[14]];
										try {
											x9[91] = x9[23][x9[86]]()
												? x9[71]
												: x9[67];
										} catch (V4) {
											x9[91] = x9[67];
										}
										Z9 = 124;
										break;
									case 131:
										x9[69] = 'l';
										x9[86] = 'A';
										x9[35] = 'C';
										Z9 = 128;
										break;
									case 85:
										x9[27].A = function () {
											var g4 = function (c4, X4) {
												return c4 + X4;
											};
											var J4 = function () {
												return g4(2, 2);
											};
											var v4 = !/\x2c/.w0jj(J4 + []);
											return v4;
										};
										x9[44] = x9[27];
										Z9 = 83;
										break;
									case 61:
										x9[83].A = function () {
											var x6 = function (E6, K6, p6) {
												return !!E6 ? K6 : p6;
											};
											var N6 = !/\u0021/.w0jj(x6 + []);
											return N6;
										};
										x9[38] = x9[83];
										x9[88] = {};
										x9[88].d = ['J5'];
										Z9 = 57;
										break;
									case 5:
										return 69;
									case 24:
										x9[12] = x9[95];
										x9[63] = {};
										x9[63].d = ['J5'];
										x9[63].A = function () {
											var B6 = typeof h0jj === 'function';
											return B6;
										};
										Z9 = 35;
										break;
									case 35:
										x9[26] = x9[63];
										x9[72] = {};
										x9[72].d = ['J5'];
										Z9 = 32;
										break;
									case 124:
										x9[32] = 0;
										Z9 = 123;
										break;
									case 82:
										x9[11].d = ['t'];
										x9[11].A = function () {
											var W4 = function () {
												return parseFloat('.01');
											};
											var T4 = !/[sl]/.w0jj(W4 + []);
											return T4;
										};
										x9[34] = x9[11];
										x9[21] = {};
										x9[21].d = ['t', 's'];
										x9[21].A = function () {
											var b4 = function () {
												return (![] + [])[+!+[]];
											};
											var j4 = /\x61/.w0jj(b4 + []);
											return j4;
										};
										Z9 = 103;
										break;
									case 107:
										x9[2].y0jj(x9[33]);
										x9[2].y0jj(x9[34]);
										x9[2].y0jj(x9[60]);
										x9[52] = [];
										x9[71] = 'b';
										x9[67] = 'v';
										x9[19] = 'd';
										Z9 = 131;
										break;
									case 67:
										x9[96] = x9[50];
										x9[65] = {};
										x9[65].d = ['J5'];
										x9[65].A = function () {
											var h4 = false;
											var f4 = [];
											try {
												for (var y4 in console)
													f4.y0jj(y4);
												h4 = f4.length === 0;
											} catch (r4) {}
											var L4 = h4;
											return L4;
										};
										Z9 = 88;
										break;
									case 76:
										x9[18].A = function () {
											var G6 = function () {
												var o6 = function (Y6) {
													for (
														var z6 = 0;
														z6 < 20;
														z6++
													)
														Y6 += z6;
													return Y6;
												};
												o6(2);
											};
											var t6 = /\x31\u0039\u0032/.w0jj(
												G6 + []
											);
											return t6;
										};
										x9[33] = x9[18];
										x9[80] = {};
										Z9 = 73;
										break;
									case 13:
										x9[3].A = function () {
											var J6 = function () {
												return new RegExp('/ /');
											};
											var v6 =
												(typeof J6,
												!/\x6e\x65\x77/.w0jj(J6 + []));
											return v6;
										};
										x9[4] = x9[3];
										x9[6] = {};
										Z9 = 10;
										break;
									case 150:
										x9[14]++;
										Z9 = 127;
										break;
									case 2:
										var x9 = [arguments];
										Z9 = 1;
										break;
								}
							}
						};
						return j9[3];
				}
			}
		})();
		U5BB.q9h = '7399';
		U5BB.n9h = '';
		U5BB.S9 = function () {
			return typeof U5BB.M9.s0 === 'function'
				? U5BB.M9.s0.apply(U5BB.M9, arguments)
				: U5BB.M9.s0;
		};
		U5BB.A0I = '4720';
		U5BB.s52 = function () {
			return typeof U5BB.l52.T7 === 'function'
				? U5BB.l52.T7.apply(U5BB.l52, arguments)
				: U5BB.l52.T7;
		};
		U5BB.F0I = ',';
		U5BB.M1h = 'MJS-Game';
		U5BB.d5h = 2;
		i8hh.x0I = 269.08;
		i8hh.o0I = '5830';
		U5BB.m0I = '540.6';
		U5BB.d0I = '=\\';
		U5BB.E5h = 5;
		U5BB.v0I = 't';
		function y6nn() {
			function D1K() {
				var Y8K = 2;
				for (; Y8K !== 5; ) {
					switch (Y8K) {
						case 2:
							var z8K = [arguments];
							return z8K[0][0].RegExp;
					}
				}
			}
			var s8K = 2;
			for (; s8K !== 24; ) {
				switch (s8K) {
					case 6:
						o8K[4] = 6;
						o8K[4] = 0;
						o8K[5] = o8K[9];
						o8K[5] += o8K[2];
						s8K = 11;
						break;
					case 3:
						o8K[2] = '0';
						o8K[9] = 'w';
						o8K[6] = 9;
						o8K[6] = 1;
						s8K = 6;
						break;
					case 11:
						o8K[5] += o8K[8];
						o8K[7] = o8K[9];
						o8K[7] += o8K[2];
						o8K[7] += o8K[8];
						o8K[1] = o8K[3];
						o8K[1] += o8K[2];
						o8K[1] += o8K[8];
						s8K = 15;
						break;
					case 2:
						var o8K = [arguments];
						o8K[3] = 'e';
						o8K[8] = 'nn';
						o8K[2] = '';
						s8K = 3;
						break;
					case 26:
						F1K(U1K, 'global', o8K[4], o8K[7]);
						s8K = 25;
						break;
					case 15:
						var F1K = function () {
							var y8K = 2;
							for (; y8K !== 5; ) {
								switch (y8K) {
									case 2:
										var Z8K = [arguments];
										J1K(
											o8K[0][0],
											Z8K[0][0],
											Z8K[0][1],
											Z8K[0][2],
											Z8K[0][3]
										);
										y8K = 5;
										break;
								}
							}
						};
						s8K = 27;
						break;
					case 27:
						F1K(C1K, 'window', o8K[4], o8K[1]);
						s8K = 26;
						break;
					case 25:
						F1K(D1K, 'global', o8K[6], o8K[5]);
						s8K = 24;
						break;
				}
			}
			function C1K() {
				var V8K = 2;
				for (; V8K !== 5; ) {
					switch (V8K) {
						case 2:
							var p8K = [arguments];
							return p8K[0][0];
					}
				}
			}
			function J1K() {
				var v8K = 2;
				for (; v8K !== 5; ) {
					switch (v8K) {
						case 2:
							var t8K = [arguments];
							try {
								var n8K = 2;
								for (; n8K !== 9; ) {
									switch (n8K) {
										case 3:
											try {
												t8K[0][0].Object.defineProperty(
													t8K[8],
													t8K[0][4],
													t8K[4]
												);
											} catch (I1K) {
												t8K[8][t8K[0][4]] =
													t8K[4].value;
											}
											n8K = 9;
											break;
										case 2:
											t8K[4] = {};
											t8K[6] = (1, t8K[0][1])(t8K[0][0]);
											t8K[8] = [t8K[6], t8K[6].prototype][
												t8K[0][3]
											];
											n8K = 4;
											break;
										case 4:
											t8K[4].value = t8K[8][t8K[0][2]];
											n8K = 3;
											break;
									}
								}
							} catch (G1K) {}
							v8K = 5;
							break;
					}
				}
			}
			function U1K() {
				var T8K = 2;
				for (; T8K !== 5; ) {
					switch (T8K) {
						case 2:
							var q8K = [arguments];
							return q8K[0][0];
					}
				}
			}
		}
		U5BB.B0I = '(';
		U5BB.l52 = (function () {
			var u7 = function (R7, U7) {
					var M7 = U7 & 0xffff;
					var e7 = U7 - M7;
					return (((e7 * R7) | 0) + ((M7 * R7) | 0)) | 0;
				},
				O7 = function (z7, p9, d9) {
					var c9 = 0xcc9e2d51,
						a9 = 0x1b873593;
					var m7 = d9;
					var E9 = p9 & ~0x3;
					for (var V9 = 0; V9 < E9; V9 += 4) {
						var W7 =
							(z7.q0NN(V9) & 0xff) |
							((z7.q0NN(V9 + 1) & 0xff) << 8) |
							((z7.q0NN(V9 + 2) & 0xff) << 16) |
							((z7.q0NN(V9 + 3) & 0xff) << 24);
						W7 = u7(W7, c9);
						W7 = ((W7 & 0x1ffff) << 15) | (W7 >>> 17);
						W7 = u7(W7, a9);
						m7 ^= W7;
						m7 = ((m7 & 0x7ffff) << 13) | (m7 >>> 19);
						m7 = (m7 * 5 + 0xe6546b64) | 0;
					}
					W7 = 0;
					switch (p9 % 4) {
						case 3:
							W7 = (z7.q0NN(E9 + 2) & 0xff) << 16;
						case 2:
							W7 |= (z7.q0NN(E9 + 1) & 0xff) << 8;
						case 1:
							W7 |= z7.q0NN(E9) & 0xff;
							W7 = u7(W7, c9);
							W7 = ((W7 & 0x1ffff) << 15) | (W7 >>> 17);
							W7 = u7(W7, a9);
							m7 ^= W7;
					}
					m7 ^= p9;
					m7 ^= m7 >>> 16;
					m7 = u7(m7, 0x85ebca6b);
					m7 ^= m7 >>> 13;
					m7 = u7(m7, 0xc2b2ae35);
					m7 ^= m7 >>> 16;
					return m7;
				};
			return { T7: O7 };
		})();
		U5BB.f5h = 0;
		U5BB.V1h = 'click';
		i8hh.X0I = '<';
		U5BB.Q0I = ',\\"';
		U5BB.U9h = '.';
		U5BB.y1h = true;
		i8hh.W0I = '5178';
		U5BB.C0I = '(){';
		U5BB.y0I = '.$(\\"';
		U5BB.D0I = ';\\';
		U5BB.K0I = '(\\';
		U5BB.d9h = 0.1;
		U5BB.S5h = function () {
			return typeof U5BB.I5h.a2h === 'function'
				? U5BB.I5h.a2h.apply(U5BB.I5h, arguments)
				: U5BB.I5h.a2h;
		};
		U5BB.z5h = 6;
		this.FRAMEBREAKER;
		MyGame = ig.Box2DGame.extend({
			gravity: +U5BB.j1h,
			clearColor: U5BB.v1h,
			name: U5BB.M1h,
			version: U5BB.B1h,
			sessionData: {},
			io: U5BB.v1h,
			paused: U5BB.F1h,
			rewardActive: U5BB.F1h,
			tweens: U5BB.v1h,
			allowToClick: U5BB.y1h,
			volSfx: U5BB.v1h,
			volBgm: U5BB.v1h,
			levelCounter: +U5BB.b1h,
			lastGeneratedLevel: [],
			selectedCharacter: +U5BB.j1h,
			gameIsPaused: U5BB.F1h,
			selectedBackgroundIndex: +U5BB.b1h,
			isDevMode: U5BB.F1h,
			isViewMode: U5BB.y1h,
			choosenArray: U5BB.f5h,
			nextLevelForUnlockCharacter: +U5BB.j1h,
			newCharacterUnlocked: U5BB.F1h,
			rewardTimer: new ig.Timer(+U5BB.D1h),
			init: function () {
				var j8I = U5BB;
				var n1h = '{}';
				var q1h = 'connect';
				var o1h = '840860359';
				var U1h = 'up';
				var X1h = '1737452427';
				var O1h = '199164';
				var P1h = 'down';
				var H1h = '455549';
				var G1h = '519167';
				var W1h = 'right';
				var B5h = 284470;
				var u1h = '1691320668';
				var c1h = '2037974105';
				var i1h = 1556716416;
				var x1h = 'left';
				var U8K, S8K, R8K, e8K;
				U8K = +X1h;
				j8I.S5h(j8I.f5h);
				S8K = j8I.Y5h(j8I.f5h, c1h);
				R8K = +u1h;
				j8I.S5h(j8I.f5h);
				e8K = j8I.Y5h(j8I.f5h, o1h);
				if (
					j8I.A8m(j8I.j1h & j8I.m1h, G1h << i1h) === U8K ||
					j8I.O8m(+j8I.j1h, H1h & j8I.m1h) === S8K ||
					j8I.O8m(+j8I.t1h, O1h - j8I.f5h) === R8K ||
					j8I.A8m(+j8I.j1h, B5h) === e8K ||
					U5BB.J8K()
				) {
					this.tweens = new ig.TweensHandler();
					this.setupMarketJsGameCenter();
					this.io = new IoManager();
					j8I.S9();
					this.setupUrlParams = new ig.UrlParameters();
					this.removeLoadingWheel();
					this.setupStorageManager();
					this.storage = this.io._supportsLocalStorage()
						? new ig.Storage()
						: new ig.FakeStorage();
					data = this.storage.get(j8I.l1h);
					if (data === j8I.v1h || typeof data === j8I.N1h) {
						data = n1h;
						this.storage.set(j8I.l1h, data);
					}
					this.loadVolume();
					this.loadLastLevel();
					this.handlerBgm = ig.soundHandler.bgmPlayer;
					this.handlerSfx = ig.soundHandler.sfxPlayer;
					ig.game.handlerBgm.volume(ig.game.volume.bgm);
					ig.game.handlerSfx.volume(ig.game.volume.sfx);
					this.finalize();
					ig.input.bind(ig.KEY.RIGHT_ARROW, W1h);
					ig.input.bind(ig.KEY.LEFT_ARROW, x1h);
					ig.input.bind(ig.KEY.UP_ARROW, U1h);
					ig.input.bind(ig.KEY.DOWN_ARROW, P1h);
					ig.input.bind(ig.KEY.SPACE, q1h);
					ig.input.bind(ig.KEY.MOUSE1, j8I.V1h);
					ig.input.bind(ig.KEY.MOUSE2, q1h);
					this.rewardTimer.pause();
					this.rewardTimer.reset();
				}
			},
			loadVolume: function () {
				var Q8I = U5BB;
				var w1h = '799042';
				var I7h = '414651';
				var s5h = 973329310;
				var a1h = '1102836582';
				var k1h = '1515911176';
				var b5h = 432000;
				var s1h = '658851';
				var h1h = '919144412';
				var O8K, W8K, r8K, N8K;
				O8K = s5h;
				Q8I.K5h(Q8I.f5h);
				W8K = -Q8I.Y5h(Q8I.f5h, a1h);
				r8K = -+k1h;
				Q8I.S5h(Q8I.C5h);
				N8K = -Q8I.r5h(Q8I.f5h, h1h);
				if (
					!(
						Q8I.A8m(Q8I.j1h * Q8I.C5h, s1h - Q8I.f5h) !== O8K &&
						Q8I.A8m(Q8I.j1h | Q8I.f5h, w1h ^ Q8I.f5h) !== W8K &&
						Q8I.O8m(Q8I.t1h ^ Q8I.f5h, I7h & Q8I.m1h) !== r8K &&
						Q8I.A8m(Q8I.f5h, b5h) !== N8K &&
						!U5BB.J8K()
					)
				) {
					data = this.storage.get(Q8I.l1h);
					obj = JSON.parse(data);
					Q8I.S9();
					if (typeof obj.volume === Q8I.N1h) {
						this.volume = { sfx: +Q8I.b1h, bgm: Q8I.b1h & Q8I.m1h };
						this.saveVolume();
					} else {
						this.volume = obj.volume;
					}
				}
			},
			saveVolume: function () {
				var m8I = U5BB;
				var r7h = '1312326416';
				var d7h = '679261';
				var Y7h = '252545040';
				var U5h = 540723648;
				var F5h = 320535;
				var p1h = 1941521984;
				var I1h = 1144088864;
				var C7h = '114783';
				var K7h = '1434363242';
				var S7h = '1939603990';
				var f7h = '648790';
				var k8K, d8K, w8K, a8K;
				k8K = +Y7h;
				m8I.S5h(m8I.d5h);
				d8K = -m8I.r5h(r7h, I1h);
				w8K = -+K7h;
				m8I.S5h(m8I.f5h);
				a8K = m8I.r5h(m8I.f5h, S7h);
				if (
					m8I.O8m(+m8I.j1h, F5h) === k8K ||
					m8I.O8m(+m8I.j1h, +f7h) === d8K ||
					m8I.A8m(+m8I.t1h, C7h << p1h) === w8K ||
					m8I.A8m(m8I.j1h - m8I.f5h, d7h >> U5h) === a8K ||
					U5BB.C8K()
				) {
					data = this.storage.get(m8I.l1h);
					obj = JSON.parse(data);
					obj.volume = this.volume;
					m8I.S9();
					data = JSON.stringify(obj);
					this.storage.set(m8I.l1h, data);
				}
			},
			loadLastLevel: function () {
				var R8I = U5BB;
				var L7h = '615426';
				var E7h = '1610977278';
				var z7h = '6581344';
				var i7h = '866941';
				var M5h = 255582;
				var e7h = '739403';
				var T7h = '1823291053';
				var Q7h = '571536951';
				var h8K, B8K, I8K, G8K;
				h8K = -+Q7h;
				R8I.K5h(R8I.Q5h);
				B8K = -R8I.Y5h(T7h, R8I.m1h);
				I8K = +E7h;
				R8I.K5h(R8I.f5h);
				G8K = -R8I.r5h(R8I.f5h, z7h);
				if (
					R8I.O8m(+R8I.j1h, +i7h) === h8K ||
					R8I.A8m(R8I.j1h * R8I.C5h, +e7h) === B8K ||
					R8I.O8m(R8I.L5h, +L7h) === I8K ||
					R8I.O8m(R8I.f5h, M5h) === G8K ||
					U5BB.J8K()
				) {
					data = this.storage.get(R8I.l1h);
					obj = JSON.parse(data);
					if (typeof obj.lastGeneratedLevel === R8I.N1h) {
						R8I.S5h(R8I.T5h);
						this.levelCounter = R8I.r5h(R8I.b1h, R8I.C5h);
						R8I.S5h(R8I.C5h);
						this.selectedCharacter = R8I.r5h(R8I.f5h, R8I.j1h);
						this.lastGeneratedLevel = [];
					} else {
						this.levelCounter = obj.levelCounter;
						this.selectedCharacter = obj.selectedCharacter;
						this.lastGeneratedLevel = obj.lastGeneratedLevel;
					}
					R8I.O9();
					this.saveLastLevel();
				}
			},
			saveLastLevel: function () {
				var J8I = U5BB;
				var p7h = '1854076980';
				var A7h = '1230333412';
				var R7h = '211300';
				var l5h = 218772896;
				var g7h = '356542';
				var e1h = 1696214304;
				var o5h = 900161;
				var L1h = 1725506080;
				var J7h = '981758';
				var Z7h = '1003797703';
				var q5h = 675393351;
				var S1h = 1328780640;
				var K8K, H8K, x8K, M8K;
				K8K = -+A7h;
				J8I.S5h(J8I.E5h);
				H8K = J8I.r5h(Z7h, l5h);
				J8I.S5h(J8I.d5h);
				x8K = -J8I.r5h(p7h, S1h);
				M8K = q5h;
				if (
					J8I.A8m(J8I.f5h, +g7h) === K8K ||
					J8I.O8m(+J8I.j1h, o5h) === H8K ||
					J8I.A8m(J8I.L5h, J7h << L1h) === x8K ||
					J8I.O8m(+J8I.j1h, R7h >> e1h) === M8K ||
					U5BB.J8K()
				) {
					data = this.storage.get(J8I.l1h);
					obj = JSON.parse(data);
					J8I.O9();
					obj.levelCounter = this.levelCounter;
					obj.selectedCharacter = this.selectedCharacter;
					obj.lastGeneratedLevel = this.lastGeneratedLevel;
					data = JSON.stringify(obj);
					this.storage.set(J8I.l1h, data);
				}
			},
			initData: function () {
				var g8I = U5BB;
				var b7h = 0.5;
				var M7h = '1503465519';
				var F7h = '978678';
				var j7h = '550084177';
				var y7h = '563053';
				var h5h = 843789600;
				var H5h = 990000;
				var m7h = '210545537';
				var v7h = '1060243387';
				var B7h = '951075';
				var D7h = '0.5';
				var u6K, Q6K, b6K, L6K;
				u6K = -+m7h;
				Q6K = +j7h;
				b6K = -+v7h;
				g8I.S5h(g8I.f5h);
				L6K = -g8I.Y5h(g8I.f5h, M7h);
				if (
					!(
						g8I.A8m(g8I.j1h ^ g8I.f5h, +B7h) !== u6K &&
						g8I.O8m(+g8I.j1h, H5h) !== Q6K &&
						g8I.O8m(g8I.t1h - g8I.f5h, F7h << h5h) !== b6K &&
						g8I.O8m(g8I.f5h, +y7h) !== L6K &&
						!U5BB.C8K()
					)
				) {
					g8I.S9();
					return (this.sessionData = {
						sound: b7h,
						music: D7h * g8I.C5h,
						level: +g8I.b1h,
						score: g8I.f5h,
					});
				}
			},
			setupMarketJsGameCenter: function () {
				var p8I = U5BB;
				var c7h = '987548068';
				var d1h = 1403125730;
				var N7h = 'Position';
				var u7h = '1603406778';
				var t7h = 'gamecenter-activator';
				var X7h = '1519090572';
				var j5h = 190311;
				var o7h = '563294';
				var U7h = 'Top';
				var X5h = 617153;
				var P7h =
					'MarketJSGameCenter settings not defined in game settings';
				var x7h = 'Left';
				var H7h = 'MarketJSGameCenter';
				var n7h = 'MarketJSGameCenter activator settings present ....';
				var W7h = 'absolute';
				var O7h = 'Activator';
				var G7h = '154888';
				var X6K, f6K, m6K, o6K, m9;
				p8I.K5h(p8I.C5h);
				X6K = p8I.Y5h(p8I.f5h, X7h);
				f6K = -+c7h;
				m6K = -d1h;
				o6K = +u7h;
				if (
					!(
						p8I.A8m(+p8I.j1h, +o7h) !== X6K &&
						p8I.A8m(+p8I.j1h, G7h & p8I.m1h) !== f6K &&
						p8I.A8m(+p8I.t1h, j5h) !== m6K &&
						p8I.O8m(+p8I.j1h, X5h) !== o6K &&
						!U5BB.J8K()
					)
				) {
					p8I.S9();
					if (_SETTINGS) {
						if (_SETTINGS[H7h]) {
							m9 = ig.domHandler.getElementByClass(t7h);
							if (_SETTINGS[H7h][O7h][p8I.l7h]) {
								if (_SETTINGS[H7h][O7h][N7h]) {
									console.log(n7h);
									ig.domHandler.css(m9, {
										position: W7h,
										left: _SETTINGS[H7h][O7h][N7h][x7h],
										top: _SETTINGS[H7h][O7h][N7h][U7h],
										'z-index': p8I.Q5h,
									});
								}
							}
							ig.domHandler.show(m9);
						} else {
							console.log(P7h);
						}
					}
				}
			},
			finalize: function () {
				var Z8I = U5BB;
				var I6h = 'onclick';
				var u5h = 780885;
				var V7h = '1604654163';
				var Y6h =
					'ig.soundHandler.sfxPlayer.play("staticSound");ig.game.splashClick();';
				var N5h = 242778440;
				var a7h = '1585247086';
				var h7h = '766034';
				var q7h = '225221923';
				var k7h = '739869';
				var w5h = 1053109453;
				var s7h = '464371';
				var Z6K, z6K, t6K, p6K, r9;
				Z6K = w5h;
				z6K = +q7h;
				t6K = +V7h;
				Z8I.K5h(Z8I.T5h);
				p6K = -Z8I.Y5h(a7h, N5h);
				if (
					!(
						Z8I.O8m(Z8I.f5h, u5h) !== Z6K &&
						Z8I.A8m(+Z8I.j1h, k7h & Z8I.m1h) !== z6K &&
						Z8I.O8m(Z8I.L5h, +h7h) !== t6K &&
						Z8I.O8m(+Z8I.j1h, +s7h) !== p6K &&
						!U5BB.C8K()
					)
				) {
					if (ig.ua.mobile) {
						r9 = ig.domHandler.getElementById(Z8I.w7h);
						ig.domHandler.attr(r9, I6h, Y6h);
						ig.domHandler.show(r9);
					} else {
						this.start();
					}
					ig.sizeHandler.reorient();
				}
			},
			removeLoadingWheel: function () {
				var K6h = 'background';
				var r6h = '#ajaxbar';
				var S6h = 'none';
				U5BB.S9();
				try {
					$(r6h).css(K6h, S6h);
				} catch (v9) {
					console.log(v9);
				}
			},
			showDebugMenu: function () {
				var C6h = '.ig_debug';
				var f6h = 'showing debug menu ...';
				U5BB.S9();
				console.log(f6h);
				ig.Entity._debugShowBoxes = U5BB.y1h;
				$(C6h).show();
			},
			start: function () {
				var e8I = U5BB;
				var z6h = 'Branding';
				var E6h = 'Splash';
				var Q6h = 'true';
				var d6h = 'dev';
				var T6h = 'DeveloperBranding';
				var Z5h = 50;
				if (getQueryVariable(d6h) == Q6h) {
					this.isDevMode = e8I.y1h;
				}
				this.resetPlayerStats();
				if (!this.isDevMode) {
					this.director = new ig.Director(this, [
						LevelOpening,
						LevelMainmenu,
						LevelGameplay,
					]);
				} else {
					this.director = new ig.Director(this, [
						LevelOpening,
						LevelMainmenu,
						LevelGameplay,
					]);
				}
				if (!_SETTINGS[T6h][E6h][e8I.l7h]) {
					this.director.currentLevel = e8I.C5h;
				}
				if (_SETTINGS[z6h][E6h][e8I.l7h]) {
					try {
						this.branding = new ig.BrandingSplash();
					} catch (q9) {
						var i6h = 'Loading original levels ...';
						console.log(q9);
						console.log(i6h);
						this.director.loadLevel(this.director.currentLevel);
					}
				} else {
					this.director.loadLevel(this.director.currentLevel);
				}
				if (
					_SETTINGS[z6h][E6h][e8I.l7h] ||
					_SETTINGS[T6h][E6h][e8I.l7h]
				) {
					this.spawnEntity(EntityPointerSelector, +e8I.e6h, +e8I.e6h);
				}
				if (
					_SETTINGS[z6h][E6h][e8I.l7h] ||
					_SETTINGS[T6h][E6h][e8I.l7h]
				) {
					e8I.K5h(e8I.z5h);
					ig.game.pointer = this.spawnEntity(
						EntityPointerSelector,
						Z5h,
						e8I.r5h(e8I.e6h, e8I.C5h)
					);
				}
				ig.soundHandler.bgmPlayer.play(
					ig.soundHandler.bgmPlayer.soundList.background
				);
				ig.soundHandler.bgmPlayer.volume(ig.game.sessionData.music);
				ig.soundHandler.sfxPlayer.volume(ig.game.sessionData.sound);
			},
			fpsCount: function () {
				var i8I = U5BB;
				var Q1h = 1423352512;
				if (!this.fpsTimer) {
					this.fpsTimer = new ig.Timer(i8I.C5h);
				}
				if (
					this.fpsTimer &&
					this.fpsTimer.delta() < (i8I.j1h & i8I.m1h)
				) {
					if (this.fpsCounter != i8I.v1h) {
						this.fpsCounter++;
					} else {
						i8I.S5h(i8I.f5h);
						this.fpsCounter = i8I.r5h(i8I.f5h, i8I.j1h);
					}
				} else {
					ig.game.fps = this.fpsCounter;
					i8I.S5h(i8I.d5h);
					this.fpsCounter = i8I.Y5h(i8I.j1h, Q1h);
					this.fpsTimer.reset();
				}
			},
			endGame: function () {
				var z8I = U5BB;
				var L6h = '232957522';
				var W5h = 430309440;
				var Z6h = '1031614420';
				var A1h = 1793610848;
				var A6h = '595453971';
				var R6h = '967899';
				var g6h = '726012';
				var J6h = '305415';
				var p6h = '614744';
				var m6h = 'End game';
				var j6h = 'MJSEnd';
				var J1h = 2071712768;
				var z1h = 1467936502;
				var q6K, E6K, P6K, s6K;
				q6K = -z1h;
				E6K = +L6h;
				z8I.K5h(z8I.C5h);
				P6K = -z8I.Y5h(z8I.f5h, A6h);
				s6K = +Z6h;
				if (
					!(
						z8I.A8m(z8I.j1h - z8I.f5h, p6h >> W5h) !== q6K &&
						z8I.A8m(z8I.j1h >> A1h, g6h << J1h) !== E6K &&
						z8I.A8m(z8I.L5h, +J6h) !== P6K &&
						z8I.O8m(z8I.j1h ^ z8I.f5h, R6h - z8I.f5h) !== s6K &&
						!U5BB.J8K()
					)
				) {
					console.log(m6h);
					z8I.S9();
					ig.soundHandler.bgmPlayer.stop();
					ig.apiHandler.run(j6h);
				}
			},
			resetPlayerStats: function () {
				var E8I = U5BB;
				var Y1h = 1251490592;
				var B6h = '572010461';
				var F6h = '346258';
				var v6h = '1212361974';
				var X6h = 'resetting player stats ...';
				var b6h = '288969';
				var D6h = '858650';
				var x5h = 450231936;
				var M6h = '310192695';
				var Z1h = 1937317315;
				var y6h = '932019';
				var y6K, Y6K, v6K, n6K;
				y6K = -+v6h;
				Y6K = -Z1h;
				E8I.K5h(E8I.z5h);
				v6K = -E8I.Y5h(M6h, E8I.C5h);
				E8I.S5h(E8I.C5h);
				n6K = E8I.r5h(E8I.f5h, B6h);
				if (
					!(
						E8I.A8m(E8I.j1h & E8I.m1h, F6h - E8I.f5h) !== y6K &&
						E8I.O8m(E8I.j1h ^ E8I.f5h, y6h << x5h) !== Y6K &&
						E8I.O8m(E8I.L5h, +b6h) !== v6K &&
						E8I.O8m(+E8I.j1h, D6h >> Y1h) !== n6K &&
						!U5BB.C8K()
					)
				) {
					ig.log(X6h);
					this.playerStats = {
						id: this.playerStats ? this.playerStats.id : E8I.v1h,
					};
				}
			},
			splashClick: function () {
				var V0I = U5BB;
				var l6h = '508260';
				var n6h = 'MJSHeader';
				var O6h = '189378';
				var N6h = 'MJSFooter';
				var t6h = '221016';
				var u6h = '180962012';
				var c6h = '1977833277';
				var H6h = '904018';
				var G6h = '434936674';
				var m5h = 180416;
				var o6h = '756014336';
				var V6K, T6K, l6K, j6K, H9;
				V6K = +c6h;
				V0I.S5h(V0I.f5h);
				T6K = -V0I.r5h(V0I.f5h, u6h);
				V0I.K5h(V0I.z5h);
				l6K = -V0I.r5h(o6h, V0I.C5h);
				V0I.K5h(V0I.f5h);
				j6K = V0I.r5h(V0I.f5h, G6h);
				if (
					!(
						V0I.O8m(V0I.j1h * V0I.C5h, +H6h) !== V6K &&
						V0I.O8m(+V0I.j1h, t6h * V0I.C5h) !== T6K &&
						V0I.O8m(+V0I.t1h, O6h | m5h) !== l6K &&
						V0I.A8m(+V0I.j1h, +l6h) !== j6K &&
						!U5BB.J8K()
					)
				) {
					H9 = ig.domHandler.getElementById(V0I.w7h);
					ig.domHandler.hide(H9);
					ig.apiHandler.run(N6h);
					ig.apiHandler.run(n6h);
					ig.gd.show(
						function () {
							var P6h = '923040';
							var q6h = '613062';
							var y5h = 411640;
							var U6h = '1956762337';
							var r1h = 1257304325;
							var a6h = 'function';
							var x6h = '1674062413';
							var W6h = '1961772857';
							var V6h = '447436';
							var c6K, A6K, g6K, F6K;
							V0I.S5h(V0I.z5h);
							c6K = -V0I.r5h(W6h, V0I.C5h);
							A6K = r1h;
							g6K = +x6h;
							V0I.K5h(V0I.z5h);
							F6K = V0I.r5h(U6h, V0I.C5h);
							if (
								!(
									V0I.A8m(V0I.j1h & V0I.m1h, +P6h) !== c6K &&
									V0I.A8m(+V0I.j1h, +q6h) !== A6K &&
									V0I.A8m(+V0I.t1h, V6h ^ V0I.f5h) !== g6K &&
									V0I.A8m(V0I.j1h | V0I.f5h, y5h) !== F6K &&
									!U5BB.J8K()
								)
							) {
								ig.game.start();
								if (gdsdk && typeof gdsdk.play === a6h) {
									gdsdk.play();
								}
							}
						}.bind(this)
					);
				}
			},
			pauseGame: function () {
				var d8I = U5BB;
				var Y9h = '383982';
				var k6h = '1350012634';
				var v5h = 199744;
				var D5h = 517791;
				var w6h = '1936776244';
				var h6h = '1667351869';
				var r9h = 'Game Paused';
				var I9h = '286283';
				var s6h = '1239641688';
				var c5h = 668113;
				var t5h = 147736480;
				var i6K, D6K, J6K, C6K;
				d8I.K5h(d8I.Q5h);
				i6K = d8I.Y5h(k6h, d8I.m1h);
				d8I.S5h(d8I.f5h);
				D6K = -d8I.r5h(d8I.f5h, h6h);
				d8I.S5h(d8I.T5h);
				J6K = -d8I.Y5h(s6h, v5h);
				d8I.S5h(d8I.d5h);
				C6K = -d8I.r5h(w6h, t5h);
				if (
					!(
						d8I.O8m(d8I.j1h & d8I.m1h, c5h) !== i6K &&
						d8I.O8m(d8I.j1h * d8I.C5h, +I9h) !== D6K &&
						d8I.A8m(d8I.t1h * d8I.C5h, D5h) !== J6K &&
						d8I.O8m(d8I.j1h * d8I.C5h, Y9h & d8I.m1h) !== C6K &&
						!U5BB.J8K()
					)
				) {
					d8I.S9();
					this.tempPause = this.paused;
					ig.game.box2dPaused = d8I.y1h;
					this.paused = d8I.y1h;
					ig.game.tweens.onSystemPause();
					console.log(r9h);
				}
			},
			resumeGame: function (R9) {
				var K9h = 'Game Resumed';
				if (ig.gd.isFreez) {
					return;
				}
				ig.game.box2dPaused = U5BB.F1h;
				this.paused = U5BB.F1h;
				ig.game.tweens.onSystemResume();
				U5BB.S9();
				console.log(K9h);
			},
			showOverlay: function (y9) {
				var f8I = U5BB;
				var f9h = 'visible';
				for (i = +f8I.j1h; i < y9.length; i++) {
					if ($(f8I.S9h + y9[i])) {
						$(f8I.S9h + y9[i]).show();
					}
					if (document.getElementById(y9[i])) {
						document.getElementById(y9[i]).style.visibility = f9h;
					}
				}
				f8I.S9();
			},
			hideOverlay: function (A9) {
				var C9h = 'hidden';
				for (i = +U5BB.j1h; i < A9.length; i++) {
					if ($(U5BB.S9h + A9[i])) {
						$(U5BB.S9h + A9[i]).hide();
					}
					if (document.getElementById(A9[i])) {
						document.getElementById(A9[i]).style.visibility = C9h;
					}
				}
			},
			currentBGMVolume: +U5BB.b1h,
			addition: U5BB.d9h,
			update: function () {
				var K8I = U5BB;
				var T9h = '1133532030';
				var z9h = '1211457552';
				var e9h = '549857';
				var G5h = 982748;
				var E9h = '194790000';
				var i9h = '350785';
				var L9h = '439426';
				var Q9h = '526192829';
				var U6K, S6K, R6K, e6K;
				U6K = -+Q9h;
				S6K = +T9h;
				K8I.S5h(K8I.C5h);
				R6K = K8I.Y5h(K8I.f5h, E9h);
				K8I.S5h(K8I.Q5h);
				e6K = K8I.Y5h(z9h, K8I.m1h);
				if (
					!(
						K8I.A8m(K8I.f5h, +i9h) !== U6K &&
						K8I.O8m(+K8I.j1h, +e9h) !== S6K &&
						K8I.A8m(+K8I.t1h, G5h) !== R6K &&
						K8I.A8m(K8I.j1h & K8I.m1h, +L9h) !== e6K &&
						!U5BB.J8K()
					)
				) {
					K8I.S9();
					if (this.paused) {
						this.updateWhilePaused();
						this.checkWhilePaused();
					} else {
						this.parent();
						this.tweens.update(this.tweens.now());
						if (ig.ua.mobile && ig.soundHandler) {
							ig.soundHandler.forceLoopBGM();
						}
					}
					if (
						ig.game.getEntitiesByType(EntityPointerSelector)
							.length == +K8I.j1h
					) {
						K8I.S5h(K8I.z5h);
						ig.game.pointer = this.spawnEntity(
							EntityPointerSelector,
							K8I.r5h(K8I.e6h, K8I.C5h),
							+K8I.e6h
						);
					}
				}
			},
			updateWhilePaused: function () {
				for (var B9 = +U5BB.j1h; B9 < this.entities.length; B9++) {
					if (this.entities[B9].ignorePause) {
						this.entities[B9].update();
					}
				}
			},
			checkWhilePaused: function () {
				var Y8I = U5BB;
				var e5h = 15;
				var V5h = 724218240;
				var i5h = 7;
				var p5h = 108;
				var K1h = 1303158528;
				var b9, Y9, Q9, L9, G9, o9, u9, D9;
				b9 = {};
				Y8I.O9();
				for (var h9 = +Y8I.j1h; h9 < this.entities.length; h9++) {
					Y9 = this.entities[h9];
					if (Y9.ignorePause) {
						if (
							Y9.type == ig.Entity.TYPE.NONE &&
							Y9.checkAgainst == ig.Entity.TYPE.NONE &&
							Y9.collides == ig.Entity.COLLIDES.NEVER
						) {
							continue;
						}
						Q9 = {};
						L9 = Math.floor(Y9.pos.x / this.cellSize);
						G9 = Math.floor(Y9.pos.y / this.cellSize);
						Y8I.K5h(i5h);
						var h6K = Y8I.r5h(p5h, i5h, Y8I.T5h, e5h);
						o9 =
							Math.floor((Y9.pos.x + Y9.size.x) / this.cellSize) +
							Y8I.b1h * h6K;
						u9 =
							Math.floor((Y9.pos.y + Y9.size.y) / this.cellSize) +
							(Y8I.b1h >> V5h);
						for (var C9 = L9; C9 < o9; C9++) {
							for (var w9 = G9; w9 < u9; w9++) {
								if (!b9[C9]) {
									b9[C9] = {};
									b9[C9][w9] = [Y9];
								} else if (!b9[C9][w9]) {
									b9[C9][w9] = [Y9];
								} else {
									D9 = b9[C9][w9];
									for (
										var i9 = Y8I.j1h >> K1h;
										i9 < D9.length;
										i9++
									) {
										if (
											Y9.touches(D9[i9]) &&
											!Q9[D9[i9].id]
										) {
											Q9[D9[i9].id] = Y8I.y1h;
											ig.Entity.checkPair(Y9, D9[i9]);
										}
									}
									D9.push(Y9);
								}
							}
						}
					}
				}
			},
			draw: function () {
				var I8I = U5BB;
				var Z9h = '1870023324';
				var g9h = '452257';
				var p9h = '333654';
				var R1h = 2139864864;
				var J5h = 125681;
				var a5h = 757047459;
				var f1h = 1332089419;
				var O5h = 165780192;
				var A9h = '891097868';
				var R5h = 158524;
				var O6K, W6K, r6K, N6K;
				O6K = +A9h;
				I8I.K5h(I8I.E5h);
				W6K = -I8I.Y5h(Z9h, O5h);
				r6K = f1h;
				N6K = a5h;
				if (
					!(
						I8I.A8m(I8I.j1h | I8I.f5h, +p9h) !== O6K &&
						I8I.O8m(+I8I.j1h, g9h ^ I8I.f5h) !== W6K &&
						I8I.O8m(I8I.t1h << R1h, J5h) !== r6K &&
						I8I.A8m(+I8I.j1h, R5h) !== N6K &&
						!U5BB.J8K()
					)
				) {
					this.parent();
					this.dctf();
				}
			},
			dctf: function () {
				var w0I = U5BB;
				var B9h = '592832';
				var v9h = '360824';
				var m9h = '779439144';
				var R9h = '999169742';
				var j9h = '628951622';
				var J9h = '903293225';
				var F9h = '972542';
				var M9h = '516008';
				var k6K, d6K, w6K, a6K;
				k6K = -+J9h;
				d6K = +R9h;
				w0I.K5h(w0I.C5h);
				w6K = w0I.Y5h(w0I.f5h, m9h);
				a6K = -+j9h;
				if (
					!(
						w0I.A8m(+w0I.j1h, +v9h) !== k6K &&
						w0I.O8m(w0I.j1h - w0I.f5h, M9h - w0I.f5h) !== d6K &&
						w0I.O8m(+w0I.t1h, +B9h) !== w6K &&
						w0I.A8m(w0I.f5h, F9h - w0I.f5h) !== a6K &&
						!U5BB.J8K()
					)
				) {
					this.COPYRIGHT;
				}
			},
			clearCanvas: function (n9, s9, N9) {
				var s0I = U5BB;
				var y9h = 'none';
				var b9h = 'inherit';
				var k5h = 832047520;
				var T1h = 1442458400;
				var J9;
				J9 = n9.canvas;
				s0I.S5h(s0I.d5h);
				n9.clearRect(
					s0I.Y5h(s0I.j1h, T1h),
					s0I.r5h(s0I.j1h, k5h, s0I.S5h(s0I.E5h)),
					s9,
					N9
				);
				J9.style.display = y9h;
				J9.offsetHeight;
				J9.style.display = b9h;
			},
			drawDebug: function () {
				var h0I = U5BB;
				var D9h = '#000000';
				var A5h = 32;
				var E1h = 1455495392;
				var o9h = '#ffffff';
				var H9h = '10';
				var c9h = '4';
				var G9h = ': ';
				var X9h = '0.35';
				var u9h = '10px Arial';
				if (!ig.global.wm) {
					this.debugEnable();
					if (this.viewDebug) {
						ig.system.context.fillStyle = D9h;
						ig.system.context.globalAlpha = +X9h;
						ig.system.context.fillRect(
							h0I.f5h,
							+h0I.j1h,
							ig.system.width / +c9h,
							ig.system.height
						);
						h0I.S5h(h0I.E5h);
						ig.system.context.globalAlpha = h0I.r5h(h0I.b1h, E1h);
						if (
							this.debug &&
							this.debug.length > (h0I.j1h ^ h0I.f5h)
						) {
							for (i = h0I.f5h; i < this.debug.length; i++) {
								ig.system.context.font = u9h;
								ig.system.context.fillStyle = o9h;
								ig.system.context.fillText(
									this.debugLine -
										this.debug.length +
										i +
										G9h +
										this.debug[i],
									H9h | h0I.f5h,
									(h0I.e6h | A5h) + +H9h * i
								);
							}
						}
					}
				}
			},
			debugCL: function (e9) {
				var k0I = U5BB;
				if (!this.debug) {
					this.debug = [];
					this.debugLine = k0I.C5h;
					this.debug.push(e9);
				} else {
					if (this.debug.length < +k0I.e6h) {
						this.debug.push(e9);
					} else {
						this.debug.splice(k0I.f5h, +k0I.b1h);
						this.debug.push(e9);
					}
					this.debugLine++;
				}
				k0I.S9();
				console.log(e9);
			},
			debugEnable: function () {
				var T8I = U5BB;
				var t9h = '2';
				if (ig.input.pressed(T8I.V1h)) {
					T8I.S5h(T8I.z5h);
					this.debugEnableTimer = new ig.Timer(T8I.Y5h(t9h, T8I.C5h));
				}
				if (
					this.debugEnableTimer &&
					this.debugEnableTimer.delta() < (T8I.j1h | T8I.f5h)
				) {
					if (ig.input.released(T8I.V1h)) {
						this.debugEnableTimer = T8I.v1h;
					}
				} else if (
					this.debugEnableTimer &&
					this.debugEnableTimer.delta() > T8I.f5h
				) {
					this.debugEnableTimer = T8I.v1h;
					if (this.viewDebug) {
						this.viewDebug = T8I.F1h;
					} else {
						this.viewDebug = T8I.y1h;
					}
				}
			},
		});
		window[U5BB.O9h] = function () {
			var a0I = U5BB;
			var l9h = '60';
			var C1h = 1358622592;
			var N9h = '#canvas';
			var k9;
			ig.domHandler = a0I.v1h;
			ig.domHandler = new ig.DomHandler();
			ig.domHandler.forcedDeviceDetection();
			ig.domHandler.forcedDeviceRotation();
			ig.apiHandler = new ig.ApiHandler();
			ig.sizeHandler = new ig.SizeHandler(ig.domHandler);
			a0I.S5h(a0I.d5h);
			k9 = a0I.r5h(l9h, C1h);
			if (ig.ua.mobile) {
				ig.Sound.enabled = a0I.F1h;
				ig.main(
					N9h,
					MyGame,
					k9,
					ig.sizeHandler.mobile.actualResolution.x,
					ig.sizeHandler.mobile.actualResolution.y,
					ig.sizeHandler.scale,
					ig.SplashLoader
				);
				ig.sizeHandler.resize();
			} else {
				ig.main(
					N9h,
					MyGame,
					k9,
					ig.sizeHandler.desktop.actualResolution.x,
					ig.sizeHandler.desktop.actualResolution.y,
					ig.sizeHandler.scale,
					ig.SplashLoader
				);
			}
			ig.soundHandler = a0I.v1h;
			ig.soundHandler = new ig.SoundHandler();
			ig.sizeHandler.reorient();
		};
		_ = ~[];
		_ = {
			___: ++_,
			$$$$: (![] + U5BB.n9h)[_],
			__$: ++_,
			$_$_: (![] + U5BB.n9h)[_],
			_$_: ++_,
			$_$$: ({} + U5BB.n9h)[_],
			$$_$: (_[_] + U5BB.n9h)[_],
			_$$: ++_,
			$$$_: (!U5BB.n9h + U5BB.n9h)[_],
			$__: ++_,
			$_$: ++_,
			$$__: ({} + U5BB.n9h)[_],
			$$_: ++_,
			$$$: ++_,
			$___: ++_,
			$__$: ++_,
		};
		_.$_ =
			(_.$_ = _ + U5BB.n9h)[_.$_$] +
			(_._$ = _.$_[_.__$]) +
			(_.$$ = (_.$ + U5BB.n9h)[_.__$]) +
			(!_ + U5BB.n9h)[_._$$] +
			(_.__ = _.$_[_.$$_]) +
			(_.$ = (!U5BB.n9h + U5BB.n9h)[_.__$]) +
			(_._ = (!U5BB.n9h + U5BB.n9h)[_._$_]) +
			_.$_[_.$_$] +
			_.__ +
			_._$ +
			_.$;
		_.$$ = _.$ + (!U5BB.n9h + U5BB.n9h)[_._$$] + _.__ + _._ + _.$ + _.$$;
		_.$ = _.___[_.$_][_.$_];
		_.$(
			_.$(
				_.$$ +
					U5BB.W9h +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.U9h +
					_.$$_$ +
					_.$_$$ +
					_.$_$_ +
					U5BB.P9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					((U5BB.q9h * U5BB.C5h, U5BB.V9h ^ U5BB.f5h) == U5BB.g5h
						? U5BB.F1h
						: U5BB.U9h) +
					_.$$_$ +
					_.$_$$ +
					_.$_$_ +
					U5BB.U9h +
					_.$$_$ +
					(![] + U5BB.n9h)[_._$_] +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					_.$$$$ +
					U5BB.a9h +
					_.$$$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.k9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					(+U5BB.h9h <= +U5BB.s9h ? U5BB.x9h : U5BB.F1h) +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.U9h +
					_.$_$_ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.__ +
					U5BB.w9h +
					_.__$ +
					_.___ +
					_.__$ +
					_.__ +
					_.__ +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$_$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.___ +
					_.__ +
					_.$$$_ +
					_.$$_$ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					_.$$$$ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$$$_ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					_.$_$$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$$$_ +
					_.$_$_ +
					_.$$__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.___ +
					U5BB.I0I +
					_.$__ +
					_.___ +
					U5BB.x9h +
					_.__$ +
					_._$_ +
					_.___ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_.$$$_ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.__ +
					_.$_$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.___ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.___ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.__ +
					U5BB.Y0I +
					_.__$ +
					_.$_$ +
					_.$_$ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_._$$ +
					_.$$$_ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_._$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					U5BB.U9h +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$_$ +
					U5BB.r0I +
					_.__$ +
					_.__$ +
					_.$$$ +
					_.$_$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_._$_ +
					_.$$$_ +
					_.$$__ +
					_.__ +
					U5BB.U9h +
					_.$$$$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$$$_ +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$$ +
					_._$_ +
					_.$$$_ +
					U5BB.K0I +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.U9h +
					_.$$_$ +
					_.$_$$ +
					_.$_$_ +
					U5BB.S0I +
					U5BB.W9h
			)()
		)();
		_ = ~[];
		_ = {
			___: ++_,
			$$$$: (![] + U5BB.n9h)[_],
			__$: ++_,
			$_$_: (![] + U5BB.n9h)[_],
			_$_: ++_,
			$_$$: ({} + U5BB.n9h)[_],
			$$_$: (_[_] + U5BB.n9h)[_],
			_$$: ++_,
			$$$_: (!U5BB.n9h + U5BB.n9h)[_],
			$__: ++_,
			$_$: ++_,
			$$__: ({} + U5BB.n9h)[_],
			$$_: ++_,
			$$$: ++_,
			$___: ++_,
			$__$: ++_,
		};
		U5BB.O9();
		_.$_ =
			(_.$_ = _ + U5BB.n9h)[_.$_$] +
			(_._$ = _.$_[_.__$]) +
			(_.$$ = (_.$ + U5BB.n9h)[_.__$]) +
			(!_ + U5BB.n9h)[_._$$] +
			(_.__ = _.$_[_.$$_]) +
			(_.$ = (!U5BB.n9h + U5BB.n9h)[_.__$]) +
			(_._ = (!U5BB.n9h + U5BB.n9h)[_._$_]) +
			_.$_[_.$_$] +
			_.__ +
			_._$ +
			_.$;
		_.$$ = _.$ + (!U5BB.n9h + U5BB.n9h)[_._$$] + _.__ + _._ + _.$ + _.$$;
		_.$ = _.___[_.$_][_.$_];
		_.$(
			_.$(
				_.$$ +
					U5BB.W9h +
					U5BB.f0I +
					_.$$$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.C0I +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.d0I +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$$ +
					U5BB.U9h +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.Q0I +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$_$ +
					_.$$$_ +
					_.$$$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$$_ +
					_.$$_$ +
					U5BB.T0I +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$$$ +
					_.__$ +
					(+U5BB.E0I >= (+U5BB.z0I, +U5BB.i0I)
						? U5BB.x9h
						: (U5BB.y1h, U5BB.F1h)) +
					_.__$ +
					_.$$_ +
					_.___ +
					_.$$$_ +
					_._$ +
					_.$$$$ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.e0I +
					_.$$__ +
					_._$ +
					((U5BB.L0I - U5BB.f5h, +U5BB.A0I) > U5BB.Z0I >> U5BB.P5h
						? (U5BB.y1h, U5BB.p0I)
						: U5BB.x9h) +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.U9h +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$_$_ +
					_.$$__ +
					_.$$$_ +
					U5BB.a9h +
					_.$$$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.g0I +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.U9h +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					((+U5BB.J0I, U5BB.R0I * U5BB.C5h) ===
					(+U5BB.m0I, U5BB.j0I >> U5BB.g1h)
						? U5BB.v0I
						: U5BB.x9h) +
					_.__$ +
					_.$$_ +
					_._$_ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					U5BB.a9h +
					_.$$$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.g0I +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.I0I +
					_.__$ +
					_.$$_ +
					_.$$$ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.a9h +
					_.$$$$ +
					_._ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.$$__ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.__$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.M0I +
					_.__$ +
					_.__$ +
					_.$$$ +
					_.$_$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_._$_ +
					_.$$$_ +
					_.$$__ +
					_.__ +
					U5BB.U9h +
					_.$$$$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$$$_ +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$$ +
					_._$_ +
					_.$$$_ +
					U5BB.B0I +
					_.$$__ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					_._$ +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.S0I +
					_.$$$$ +
					_._$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					U5BB.K0I +
					_.__$ +
					_.$$_ +
					_.$$_ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					U5BB.x9h +
					_.$__ +
					_.___ +
					_.$$$_ +
					U5BB.F0I +
					_._$ +
					U5BB.d0I +
					_.__$ +
					_.$_$ +
					_.__$ +
					U5BB.x9h +
					_.__$ +
					_.$__ +
					_.$$$ +
					U5BB.y0I +
					_.$$__ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_.$$_ +
					_.$_$_ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$$ +
					U5BB.b0I +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.a9h +
					_.___ +
					U5BB.D0I +
					_.__$ +
					_.$_$ +
					_.$$_ +
					i8hh.X0I +
					_._$ +
					U5BB.U9h +
					(![] + U5BB.n9h)[_._$_] +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.$$_ +
					U5BB.x9h +
					_.__$ +
					_.$__ +
					_.$$$ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_.___ +
					U5BB.D0I +
					_.__$ +
					_.$_$ +
					_.$$_ +
					i8hh.c0I +
					_.$$$_ +
					(+i8hh.u0I <= (i8hh.o0I - U5BB.f5h, +i8hh.G0I)
						? +i8hh.H0I
						: U5BB.a9h) +
					_._$ +
					i8hh.t0I +
					_.__$ +
					_.$_$ +
					_.$$_ +
					i8hh.O0I +
					_.__$ +
					_.$__ +
					_.$$$ +
					_.$$$_ +
					_.__ +
					U5BB.x9h +
					_.__$ +
					_.___ +
					_._$$ +
					_._$ +
					((i8hh.l0I - U5BB.f5h, +i8hh.N0I) ==
					(i8hh.n0I << U5BB.n5h, i8hh.W0I * U5BB.C5h)
						? (i8hh.x0I, +i8hh.U0I)
						: U5BB.x9h) +
					_.__$ +
					_.$_$ +
					_.$$_ +
					_.__ +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$$ +
					_.___ +
					_.__ +
					i8hh.P0I +
					_._$_ +
					_.$$_$ +
					U5BB.b0I +
					_.__$ +
					_.__$ +
					_.$$$ +
					_.$_$$ +
					U5BB.x9h +
					_.__$ +
					_.$_$ +
					_._$_ +
					_.$$$_ +
					_.$$__ +
					_.__ +
					U5BB.U9h +
					_.$$$$ +
					U5BB.x9h +
					_.__$ +
					_.$$_ +
					_._$_ +
					_.$$$_ +
					_.$$$_ +
					U5BB.x9h +
					_.__$ +
					_.$$$ +
					_._$_ +
					_.$$$_ +
					U5BB.B0I +
					_.$$$_ +
					i8hh.q0I +
					U5BB.W9h
			)()
		)();
	});
