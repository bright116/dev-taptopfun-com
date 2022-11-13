const _0x2537 = [
    'MORE',
    'touchend',
    'opacity',
    'EventHandler',
    'focus',
    'screen_',
    'floor',
    's\x20ease-in',
    'initData',
    'addEventListener',
    'onblur',
    'onNavigate_',
    'random',
    'div',
    'onfocus',
    'startup',
    'innerHTML',
    'stringify',
    'Event',
    'action_',
    'initialized_',
    'cssText',
    'then',
    'init2',
    'GAME',
    'navigate',
    'inline',
    'showReward',
    'TYPE',
    'getElementsByTagName',
    'body',
    'bind',
    'length',
    'getForgames',
    'display',
    'webkitTransition',
    'canNavigateActive_',
    'array',
    'request',
    'appendChild',
    'layaCanvas',
    'ChannelType',
    'muted',
    'Failed\x20to\x20get\x20the\x20reward,\x20please\x20watch\x20the\x20ads\x20to\x20the\x20end.',
    'getInstance',
    'createElement',
    '-webkit-transform\x20',
    'isGamedistribution',
    'log',
    'style',
    'to_',
    'slice',
    'setStorageSync',
    'ads',
    'none',
    'prompt_',
    'prompt',
    'create',
    'LocalStorage',
    'initList',
    'parse',
    '_instance',
    'dataSource',
    'MOUSE_DOWN',
    'audio',
    'showInterstitial'
];
(function (_0x539625, _0x25372d) {
    const _0x3182c3 = function (_0x5c9978) {
        while (--_0x5c9978) {
            _0x539625['push'](_0x539625['shift']());
        }
    };
    _0x3182c3(++_0x25372d);
}(_0x2537, 0x1c3));
const _0x3182 = function (_0x539625, _0x25372d) {
    _0x539625 = _0x539625 - 0x0;
    let _0x3182c3 = _0x2537[_0x539625];
    return _0x3182c3;
};
!function () {
    class _0x3a0dfd {
        constructor() {
            this[_0x3182('0x2f')] = ![], this['screen_'] = '', this[_0x3182('0x1e')] = '', this[_0x3182('0x3d')] = '', this[_0x3182('0x0')] = null, this[_0x3182('0x1f')] = ![], this[_0x3182('0x13')]();
        }
        static [_0x3182('0x37')]() {
            return !this[_0x3182('0x6')] && (this[_0x3182('0x6')] = new _0x3a0dfd()), this['_instance'];
        }
        [_0x3182('0x13')]() {
            let _0x81135c = document['getElementById'](_0x3182('0x33'));
            _0x81135c && (_0x81135c[_0x3182('0x14')]('mouseup', this['onNavigate_'][_0x3182('0x2a')](this)), _0x81135c[_0x3182('0x14')](_0x3182('0xc'), this[_0x3182('0x16')][_0x3182('0x2a')](this)));
        }
        [_0x3182('0x16')]() {
            this['canNavigateActive_'] && YYGSDK[_0x3182('0x24')](this[_0x3182('0x10')], this['action_'], this[_0x3182('0x3d')]), this['canNavigateActive_'] = ![];
        }
        ['getStorageSync'](_0x107b01) {
            let _0x504073 = null;
            try {
                let _0x3be5b2 = Laya[_0x3182('0x3')]['getItem'](_0x107b01);
                _0x504073 = JSON[_0x3182('0x5')](_0x3be5b2);
            } catch (_0x183574) {
            }
            return _0x504073;
        }
        [_0x3182('0x3f')](_0x33cc90, _0x4c5349) {
            return Laya[_0x3182('0x3')]['setItem'](_0x33cc90, JSON[_0x3182('0x1c')](_0x4c5349));
        }
        [_0x3182('0x24')](_0xfd8146, _0x333def, _0x5012d4) {
            if (YYGSDK[_0x3182('0x3a')])
                return;
            this[_0x3182('0x2f')] === ![] && (this[_0x3182('0x10')] = _0xfd8146, this['action_'] = _0x333def, this[_0x3182('0x3d')] = _0x5012d4, this['canNavigateActive_'] = !![]);
        }
        [_0x3182('0x15')]() {
            if (document && document[_0x3182('0x28')]) {
                let _0x2abaa5 = document[_0x3182('0x28')](_0x3182('0x9')) || [];
                for (let _0x40b0ff = 0x0; _0x40b0ff < _0x2abaa5['length']; _0x40b0ff++) {
                    _0x2abaa5[_0x40b0ff][_0x3182('0x35')] = !![];
                }
            }
            console['log']('onbluronblur'), YYGGames['audio'][_0x3182('0x35')] = !![];
        }
        [_0x3182('0x19')]() {
            if (document && document[_0x3182('0x28')]) {
                let _0x392e94 = document[_0x3182('0x28')](_0x3182('0x9')) || [];
                for (let _0x351431 = 0x0; _0x351431 < _0x392e94[_0x3182('0x2b')]; _0x351431++) {
                    _0x392e94[_0x351431]['muted'] = ![];
                }
            }
            YYGGames['audio'][_0x3182('0x35')] = ![];
        }
        [_0x3182('0xa')](_0x2795f4) {
            if (!this[_0x3182('0x1f')]) {
                _0x2795f4 && _0x2795f4();
                return;
            }
            this[_0x3182('0x15')](), YYGGames[_0x3182('0x40')][_0x3182('0xa')](_0x2795f4);
        }
        [_0x3182('0x26')](_0x28a314, _0x9a3122) {
            if (!this[_0x3182('0x1f')]) {
                _0x28a314 && _0x28a314();
                return;
            }
            this[_0x3182('0x15')](), YYGSDK['adsManager'][_0x3182('0x31')](YYG[_0x3182('0x27')]['REWARD'], YYG['EventHandler'][_0x3182('0x2')](this, () => {
                window[_0x3182('0xf')](), this['onfocus'](), _0x28a314 && _0x28a314(), _0x28a314 = null;
            }), YYG[_0x3182('0xe')][_0x3182('0x2')](this, _0x5d426b => {
                window[_0x3182('0xf')](), this['onfocus'](), _0x9a3122 && (_0x9a3122(), _0x9a3122 = null), _0x5d426b == YYG[_0x3182('0x1d')]['AD_SKIPPED'] && this[_0x3182('0x1')](_0x3182('0x36'));
            }));
        }
        [_0x3182('0x4')](_0x178ab0) {
            if (YYGSDK[_0x3182('0x3a')]) {
                _0x178ab0['visible'] = ![];
                return;
            }
            _0x178ab0['renderHandler'] = new Laya['Handler'](_0x178ab0, function (_0x16ca47) {
                _0x16ca47['offAll'](Laya[_0x3182('0x1d')][_0x3182('0x8')]), _0x16ca47['on'](Laya[_0x3182('0x1d')]['MOUSE_DOWN'], _0x16ca47, () => {
                    _0x3a0dfd[_0x3182('0x37')]()[_0x3182('0x24')](_0x3182('0x23'), _0x3182('0xb'), _0x16ca47[_0x3182('0x7')]['id']);
                });
            }), _0x178ab0[_0x3182('0x30')] = _0x3a0dfd[_0x3182('0x37')]()[_0x3182('0x2c')](), console[_0x3182('0x3b')]('\x20appList.array', _0x178ab0[_0x3182('0x30')]);
        }
        [_0x3182('0x1')](_0x24bd12, _0x2e4c57) {
            !this['prompt_'] && (this[_0x3182('0x0')] = document[_0x3182('0x38')](_0x3182('0x18')), this[_0x3182('0x0')]['style'][_0x3182('0x20')] = 'font-family:siyuan;max-width:80%;min-width:320px;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;', document[_0x3182('0x29')][_0x3182('0x32')](this[_0x3182('0x0')])), this[_0x3182('0x0')][_0x3182('0x1b')] = _0x24bd12, _0x2e4c57 = isNaN(_0x2e4c57) ? 0x7d0 : _0x2e4c57, this[_0x3182('0x0')][_0x3182('0x3c')][_0x3182('0x2d')] = _0x3182('0x25'), this[_0x3182('0x0')][_0x3182('0x3c')][_0x3182('0xd')] = '1', setTimeout(function () {
                var _0x29c255 = 0.5;
                this['prompt_'][_0x3182('0x3c')][_0x3182('0x2e')] = _0x3182('0x39') + _0x29c255 + 's\x20ease-in,\x20opacity\x20' + _0x29c255 + _0x3182('0x12'), this[_0x3182('0x0')]['style'][_0x3182('0xd')] = '0', this[_0x3182('0x0')][_0x3182('0x3c')]['display'] = _0x3182('0x41');
            }[_0x3182('0x2a')](this), _0x2e4c57);
        }
        [_0x3182('0x2c')]() {
            let _0x2d032c = YYGSDK['forgames'] || [], _0x630bc3 = _0x2d032c[_0x3182('0x3e')]();
            for (let _0x101333 = 0x0, _0x372a85 = _0x630bc3[_0x3182('0x2b')]; _0x101333 < _0x372a85; _0x101333++) {
                const _0x4d8a22 = Math[_0x3182('0x11')](Math[_0x3182('0x17')]() * (_0x101333 + 0x1)), _0x10ce27 = _0x630bc3[_0x4d8a22];
                _0x630bc3[_0x4d8a22] = _0x630bc3[_0x101333], _0x630bc3[_0x101333] = _0x10ce27;
            }
            return _0x630bc3;
        }
        [_0x3182('0x1a')](_0x13775b, _0x3d59f4) {
            window[_0x3182('0xf')]();
            if (this[_0x3182('0x1f')])
                return;
            this[_0x3182('0x1f')] = !![], YYGGames[_0x3182('0x22')](_0x13775b, ![], YYG[_0x3182('0x34')]['CARGAMES'])[_0x3182('0x21')](_0x3d59f4);
        }
    }
    _0x3a0dfd['_instance'] = null, window['platform'] = _0x3a0dfd;
}();