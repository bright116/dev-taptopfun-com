const _0x566b = [
    'slice',
    'create',
    'YYGSDK_INITIALIZED',
    'parse',
    'showInterstitial',
    'display',
    'length',
    'REWARD',
    'onfocus',
    'initData',
    'addEventListener',
    'setItem',
    'prompt',
    'isGamedistribution',
    'onNavigate_',
    'focus',
    'initialized_',
    'navigate',
    'TYPE',
    'MORE',
    'AD_SKIPPED',
    'style',
    'inline',
    'stringify',
    'gameNameId',
    'screen_',
    'showReward',
    'offAll',
    'getElementsByTagName',
    's\x20ease-in,\x20opacity\x20',
    'getElementById',
    'audio',
    'cargamesstartup',
    'LocalStorage',
    'visible',
    'floor',
    'webkitTransition',
    'to_',
    'getItem',
    'canNavigateActive_',
    'div',
    'cssText',
    'prompt_',
    'mouseup',
    'getInstance',
    'ChannelType',
    'font-family:siyuan;max-width:80%;min-width:320px;padding:10px\x2010px\x2010px\x2010px;min-height:40px;color:\x20rgb(255,\x20255,\x20255);line-height:\x2020px;text-align:center;border-radius:\x204px;position:\x20fixed;top:\x2040%;left:\x2050%;transform:\x20translate(-50%,\x20-50%);z-index:\x20999999;background:\x20rgba(0,\x200,\x200,.7);font-size:\x2016px;',
    'CARGAMES',
    'gamedistributionID',
    'body',
    'getForgames',
    'Options',
    'none',
    's\x20ease-in',
    'Event',
    'innerHTML',
    'onblur',
    '_instance',
    'forgames',
    '-webkit-transform\x20',
    'action_',
    '__init__',
    'layaCanvas',
    'touchend',
    'Handler',
    'muted',
    'setStorageSync',
    'MOUSE_DOWN',
    'platform',
    'Failed\x20to\x20get\x20the\x20reward,\x20please\x20watch\x20the\x20ads\x20to\x20the\x20end.',
    'bind',
    'random'
];
(function (_0x4e193d, _0x566b02) {
    const _0x260ef7 = function (_0x7eb4d2) {
        while (--_0x7eb4d2) {
            _0x4e193d['push'](_0x4e193d['shift']());
        }
    };
    _0x260ef7(++_0x566b02);
}(_0x566b, 0x1ac));
const _0x260e = function (_0x4e193d, _0x566b02) {
    _0x4e193d = _0x4e193d - 0x0;
    let _0x260ef7 = _0x566b[_0x4e193d];
    return _0x260ef7;
};
!function () {
    class _0x503458 {
        constructor() {
            this['canNavigateActive_'] = ![], this[_0x260e('0x1d')] = '', this[_0x260e('0x40')] = '', this['to_'] = '', this['prompt_'] = null, this[_0x260e('0x14')] = ![], this[_0x260e('0xd')]();
        }
        static [_0x260e('0x30')]() {
            return !this[_0x260e('0x3d')] && (this['_instance'] = new _0x503458()), this[_0x260e('0x3d')];
        }
        [_0x260e('0xd')]() {
            let _0x40060a = document[_0x260e('0x22')](_0x260e('0x42'));
            _0x40060a && (_0x40060a['addEventListener'](_0x260e('0x2f'), this[_0x260e('0x12')][_0x260e('0x2')](this)), _0x40060a[_0x260e('0xe')](_0x260e('0x43'), this['onNavigate_'][_0x260e('0x2')](this)));
        }
        [_0x260e('0x12')]() {
            //TODO onNavigate_
            // if (YYGSDK[_0x260e('0x11')])
            //     return;
            // this[_0x260e('0x2b')] && YYGSDK[_0x260e('0x15')](this[_0x260e('0x1d')], this[_0x260e('0x40')], this['to_']), this['canNavigateActive_'] = ![];
        }
        ['getStorageSync'](_0x48255b) {
            let _0x2ca172 = null;
            try {
                let _0x2235a2 = Laya[_0x260e('0x25')][_0x260e('0x2a')](_0x48255b);
                _0x2ca172 = JSON[_0x260e('0x7')](_0x2235a2);
            } catch (_0x2669f6) {
            }
            return _0x2ca172;
        }
        [_0x260e('0x46')](_0x14eb21, _0x388eb8) {
            return Laya[_0x260e('0x25')][_0x260e('0xf')](_0x14eb21, JSON[_0x260e('0x1b')](_0x388eb8));
        }
        ['navigate'](_0x30ac0e, _0x5de0d2, _0x387a30) {
            this[_0x260e('0x2b')] === ![] && (this[_0x260e('0x1d')] = _0x30ac0e, this[_0x260e('0x40')] = _0x5de0d2, this[_0x260e('0x29')] = _0x387a30, this[_0x260e('0x2b')] = !![]);
        }
        ['onblur']() {
            if (document && document[_0x260e('0x20')]) {
                let _0x373e69 = document[_0x260e('0x20')]('audio') || [];
                for (let _0x3eff12 = 0x0; _0x3eff12 < _0x373e69[_0x260e('0xa')]; _0x3eff12++) {
                    _0x373e69[_0x3eff12]['muted'] = !![];
                }
            }
        }
        [_0x260e('0xc')]() {
            if (document && document[_0x260e('0x20')]) {
                let _0x4bc069 = document['getElementsByTagName'](_0x260e('0x23')) || [];
                for (let _0xa3611a = 0x0; _0xa3611a < _0x4bc069[_0x260e('0xa')]; _0xa3611a++) {
                    _0x4bc069[_0xa3611a][_0x260e('0x45')] = ![];
                }
            }
        }
        [_0x260e('0x8')](_0x53b3f9) {
            //TODO showInterstitial
            console.log("请求插屏广告");

            // 展示插屏广告
            HUHU_showInterstitialAd();
        
            // 继续游戏
            _0x53b3f9 && _0x53b3f9();
            return;
            // if (!this['initialized_']) {
                // TODO 这一行：complete && complete()
            //     _0x53b3f9 && _0x53b3f9();
            //     return;
            // }
            // this[_0x260e('0x3c')](), YYGSDK[_0x260e('0x8')](() => {
            //     window[_0x260e('0x13')](), this[_0x260e('0xc')](), _0x53b3f9 && _0x53b3f9();
            // });
        }
        [_0x260e('0x1e')](_0x285d96, _0x347359) {
            //TODO showReward
            console.log("请求激励广告");


            HUHU_showRewardedVideoAd(
              () => {
                  // 用户观看广告完成，继续游戏
                  _0x285d96 && _0x285d96();
              },
              () => {
                // 广告请求失败或者用户跳过广告
                window[_0x260e('0x13')](), this[_0x260e('0xc')](), _0x285d96 && _0x285d96(), _0x285d96 = null;
          
          
                promptMessage("Failed to get the reward, please watch the ads to the end.");
              }
            );
            // if (!this[_0x260e('0x14')]) {
                // TODO 这一行：success && success();
            //     _0x285d96 && _0x285d96();
            //     return;
            // }
            // this[_0x260e('0x3c')](), YYGSDK['adsManager']['request'](YYG[_0x260e('0x16')][_0x260e('0xb')], YYG['EventHandler'][_0x260e('0x5')](this, () => {
            //     window[_0x260e('0x13')](), this[_0x260e('0xc')](), _0x285d96 && _0x285d96(), _0x285d96 = null;
            // }), YYG['EventHandler'][_0x260e('0x5')](this, _0x442136 => {
                // TODO 这一行失败的回调 
            //     window[_0x260e('0x13')](), this[_0x260e('0xc')](), _0x347359 ? (_0x347359(), _0x347359 = null) : _0x442136 == YYG[_0x260e('0x3a')][_0x260e('0x18')] && this[_0x260e('0x10')](_0x260e('0x1'));
            // }));
        }
        ['initList'](_0x2fb9ea) {
            //TODO initList
            // if (YYGSDK[_0x260e('0x11')]) {
            //     _0x2fb9ea[_0x260e('0x26')] = ![];
            //     return;
            // }
            _0x2fb9ea['renderHandler'] = new Laya[(_0x260e('0x44'))](_0x2fb9ea, function (_0x2ed05c) {
                _0x2ed05c[_0x260e('0x1f')](Laya['Event']['MOUSE_DOWN']), _0x2ed05c['on'](Laya['Event'][_0x260e('0x47')], _0x2ed05c, () => {
                    _0x503458[_0x260e('0x30')]()[_0x260e('0x15')]('GAME', _0x260e('0x17'), _0x2ed05c['dataSource']['id']);
                });
            }), _0x2fb9ea['array'] = _0x503458[_0x260e('0x30')]()['getForgames']();
        }
        [_0x260e('0x10')](_0x442544, _0x208275) {
            !this[_0x260e('0x2e')] && (this[_0x260e('0x2e')] = document['createElement'](_0x260e('0x2c')), this[_0x260e('0x2e')]['style'][_0x260e('0x2d')] = _0x260e('0x32'), document[_0x260e('0x35')]['appendChild'](this['prompt_'])), this[_0x260e('0x2e')][_0x260e('0x3b')] = _0x442544, _0x208275 = isNaN(_0x208275) ? 0x7d0 : _0x208275, this[_0x260e('0x2e')][_0x260e('0x19')]['display'] = _0x260e('0x1a'), this[_0x260e('0x2e')][_0x260e('0x19')]['opacity'] = '1', setTimeout(function () {
                var _0x2cfdc1 = 0.5;
                this[_0x260e('0x2e')][_0x260e('0x19')][_0x260e('0x28')] = _0x260e('0x3f') + _0x2cfdc1 + _0x260e('0x21') + _0x2cfdc1 + _0x260e('0x39'), this[_0x260e('0x2e')][_0x260e('0x19')]['opacity'] = '0', this['prompt_']['style'][_0x260e('0x9')] = _0x260e('0x38');
            }[_0x260e('0x2')](this), _0x208275);
        }
        [_0x260e('0x36')]() {
            //TODO getForgames
            return [];
            // let _0x345fe4 = YYGSDK[_0x260e('0x3e')] || [], _0x27c745 = _0x345fe4[_0x260e('0x4')]();
            // for (let _0x46cda5 = 0x0, _0x4f2535 = _0x27c745['length']; _0x46cda5 < _0x4f2535; _0x46cda5++) {
            //     const _0xa96f2f = Math[_0x260e('0x27')](Math[_0x260e('0x3')]() * (_0x46cda5 + 0x1)), _0x377989 = _0x27c745[_0xa96f2f];
            //     _0x27c745[_0xa96f2f] = _0x27c745[_0x46cda5], _0x27c745[_0x46cda5] = _0x377989;
            // }
            // return _0x27c745;
        }
        [_0x260e('0x24')](_0x7ee429, _0x36e9a4) {
            if (this['initialized_'])
                return;
            this[_0x260e('0x14')] = !![], Laya['loader'][_0x260e('0x5')]('cnf.json', Laya['Handler']['create'](this, _0x1aace => {
                //TODO yadstartup
                this[_0x260e('0x14')] = ![],
                this[_0x260e('0x14')] = !![], _0x36e9a4 && _0x36e9a4(), _0x36e9a4 = null;
                //  YYGSDK['on'](YYG[_0x260e('0x3a')][_0x260e('0x6')], this, () => {
                //     this[_0x260e('0x14')] = !![], _0x36e9a4 && _0x36e9a4(), _0x36e9a4 = null;
                // });
                // let _0x481ec7 = new YYG[(_0x260e('0x37'))]();
                // _0x481ec7[_0x260e('0x1c')] = _0x7ee429, _0x481ec7[_0x260e('0x34')] = _0x1aace['id'] || '', YYGSDK[_0x260e('0x41')](YYG[_0x260e('0x31')][_0x260e('0x33')], _0x481ec7);
            }));
        }
    }
    _0x503458[_0x260e('0x3d')] = null, window[_0x260e('0x0')] = _0x503458;
}();