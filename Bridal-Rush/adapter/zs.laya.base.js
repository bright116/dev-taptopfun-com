var _0x22a000 = _0x2538;
function _0x3737() {
    var _0xd4dee0 = [
        'VERTICAL_BOTTOM',
        'HORIZONTAL_LEFT',
        'HORIZONTAL_CENTER',
        'ILaya',
        'regClass',
        'ClassUtils',
        'zs.laya.base.Layout',
        'Zhise.Layout',
        'viewName',
        'url',
        'substring',
        'lastIndexOf',
        'event',
        'EVENT_UI_VIEW_OPENED',
        'EVENT_UI_VIEW_CLOSED',
        'UI_VIEW_CLOSED',
        'UI_VIEW_OPENED',
        'zs.laya.base.BaseView',
        'Zhise.BaseView',
        'PlatformMgr',
        'platformCfg',
        'bannerCfg',
        'getComponent',
        'platform',
        'addComponent',
        'ExportGameCtrl',
        'nativeAdCfg',
        'auto',
        'NativeAdsCtrl',
        'mistakenlyTouchCfg',
        'MistakenlyTouchCtrl',
        'customAdCfg',
        'CustomAdCtrl',
        'initView',
        'Zhise.View',
        'Layout',
        'BaseView',
        'ZhiSeView',
        'base',
        '1HFXMoB',
        '42190EAOykn',
        '92136OBqdyV',
        '64556MtuTQO',
        '25GWmXup',
        '325620fqAlXl',
        '1634164lPedzz',
        '3016432ecCNuT',
        '6933798DlPylg',
        'laya',
        'topUI',
        'middleUI',
        'bottomUI',
        'leftFloatUI',
        'rightFloatUI',
        'applyStatusBar',
        'isFull',
        'VERTICAL_MIDDLE',
        'hLayout',
        'initLayout',
        'applyLayout',
        'onAwake',
        'owner',
        'getChildByName',
        'fullUI',
        'onEnable',
        'onDisable',
        'top',
        'bottom',
        'left',
        'right',
        'vLayout',
        'centerY',
        'centerX',
        'sdk',
        'DeviceService',
        'statusBarHeight',
        'stage',
        'height',
        'screenHeight',
        'width',
        'VERTICAL_TOP'
    ];
    _0x3737 = function () {
        return _0xd4dee0;
    };
    return _0x3737();
}
function _0x2538(_0xd6c090, _0x133a1) {
    var _0x373739 = _0x3737();
    return _0x2538 = function (_0x25382e, _0x1bb924) {
        _0x25382e = _0x25382e - 0xa5;
        var _0xa65163 = _0x373739[_0x25382e];
        return _0xa65163;
    }, _0x2538(_0xd6c090, _0x133a1);
}
(function (_0x5707c9, _0x36ed96) {
    var _0x1bcf80 = _0x2538, _0xbfbd37 = _0x5707c9();
    while (!![]) {
        try {
            var _0x34ca6b = parseInt(_0x1bcf80(0xa5)) / 0x1 * (parseInt(_0x1bcf80(0xa6)) / 0x2) + -parseInt(_0x1bcf80(0xa7)) / 0x3 + parseInt(_0x1bcf80(0xa8)) / 0x4 * (parseInt(_0x1bcf80(0xa9)) / 0x5) + parseInt(_0x1bcf80(0xaa)) / 0x6 + -parseInt(_0x1bcf80(0xab)) / 0x7 + -parseInt(_0x1bcf80(0xac)) / 0x8 + parseInt(_0x1bcf80(0xad)) / 0x9;
            if (_0x34ca6b === _0x36ed96)
                break;
            else
                _0xbfbd37['push'](_0xbfbd37['shift']());
        } catch (_0x1c0857) {
            _0xbfbd37['push'](_0xbfbd37['shift']());
        }
    }
}(_0x3737, 0x45a50), (window['zs'] = window['zs'] || {}, window['zs'][_0x22a000(0xae)] = window['zs'][_0x22a000(0xae)] || {}, function (_0x107f0c, _0x7235bf) {
    'use strict';
    var _0xa73182 = _0x22a000;
    class _0x5e5fb3 extends _0x7235bf['Script'] {
        constructor() {
            var _0x372f15 = _0x2538;
            super(), this['active'] = !0x1, this[_0x372f15(0xaf)] = null, this[_0x372f15(0xb0)] = null, this[_0x372f15(0xb1)] = null, this[_0x372f15(0xb2)] = null, this[_0x372f15(0xb3)] = null, this['fullUI'] = null, this[_0x372f15(0xb4)] = !0x0, this[_0x372f15(0xb5)] = !0x0, this['vLayout'] = _0x5e5fb3[_0x372f15(0xb6)], this[_0x372f15(0xb7)] = _0x5e5fb3['HORIZONTAL_CENTER'];
        }
        [_0xa73182(0xb8)](_0x10b982) {
            var _0x5bd06d = _0xa73182;
            this[_0x5bd06d(0xb4)] = _0x10b982, this[_0x5bd06d(0xb9)]();
        }
        [_0xa73182(0xba)]() {
            var _0x487fc8 = _0xa73182;
            this['topUI'] = this[_0x487fc8(0xbb)]['getChildByName']('topUI'), this[_0x487fc8(0xb0)] = this[_0x487fc8(0xbb)][_0x487fc8(0xbc)]('middleUI'), this[_0x487fc8(0xb1)] = this['owner'][_0x487fc8(0xbc)](_0x487fc8(0xb1)), this[_0x487fc8(0xb2)] = this[_0x487fc8(0xbb)]['getChildByName']('leftFloatUI'), this[_0x487fc8(0xb3)] = this[_0x487fc8(0xbb)][_0x487fc8(0xbc)](_0x487fc8(0xb3)), this['fullUI'] = this['owner']['getChildByName'](_0x487fc8(0xbd));
        }
        [_0xa73182(0xbe)]() {
            var _0x925335 = _0xa73182;
            this[_0x925335(0xb9)]();
        }
        [_0xa73182(0xbf)]() {
        }
        [_0xa73182(0xb9)]() {
            var _0x3e35c1 = _0xa73182, _0xa0a65d = this[_0x3e35c1(0xbb)];
            this['isFull'] ? (_0xa0a65d[_0x3e35c1(0xc0)] = 0x0, _0xa0a65d[_0x3e35c1(0xc1)] = 0x0, _0xa0a65d[_0x3e35c1(0xc2)] = 0x0, _0xa0a65d[_0x3e35c1(0xc3)] = 0x0) : (0x0 == this['vLayout'] ? _0xa0a65d[_0x3e35c1(0xc0)] = 0x0 : 0x1 == this[_0x3e35c1(0xc4)] ? _0xa0a65d[_0x3e35c1(0xc5)] = 0x0 : _0xa0a65d[_0x3e35c1(0xc1)] = 0x0, 0x0 == this['hLayout'] ? _0xa0a65d['left'] = 0x0 : 0x1 == this[_0x3e35c1(0xb7)] ? _0xa0a65d[_0x3e35c1(0xc6)] = 0x0 : _0xa0a65d[_0x3e35c1(0xc3)] = 0x0), this[_0x3e35c1(0xaf)] && (this[_0x3e35c1(0xaf)][_0x3e35c1(0xc0)] = this[_0x3e35c1(0xb4)] ? zs[_0x3e35c1(0xae)][_0x3e35c1(0xc7)][_0x3e35c1(0xc8)][_0x3e35c1(0xc9)]() * _0x7235bf[_0x3e35c1(0xca)][_0x3e35c1(0xcb)] / zs[_0x3e35c1(0xae)]['sdk'][_0x3e35c1(0xc8)][_0x3e35c1(0xcc)]() : 0x0, this[_0x3e35c1(0xaf)]['centerX'] = 0x0), this[_0x3e35c1(0xb0)] && (this[_0x3e35c1(0xb0)][_0x3e35c1(0xc5)] = 0x0, this[_0x3e35c1(0xb0)][_0x3e35c1(0xc6)] = 0x0), this[_0x3e35c1(0xb1)] && (this['bottomUI']['bottom'] = 0x0, this[_0x3e35c1(0xb1)][_0x3e35c1(0xc6)] = 0x0), this['leftFloatUI'] && (this['leftFloatUI']['left'] = 0x0, this[_0x3e35c1(0xb2)]['centerY'] = 0x0), this['rightFloatUI'] && (this[_0x3e35c1(0xb3)][_0x3e35c1(0xc2)] = _0x7235bf[_0x3e35c1(0xca)][_0x3e35c1(0xcd)], this[_0x3e35c1(0xb3)][_0x3e35c1(0xc5)] = 0x0), this['fullUI'] && (this[_0x3e35c1(0xbd)][_0x3e35c1(0xc0)] = -0x2, this[_0x3e35c1(0xbd)][_0x3e35c1(0xc1)] = -0x2, this[_0x3e35c1(0xbd)][_0x3e35c1(0xc2)] = -0x2, this[_0x3e35c1(0xbd)][_0x3e35c1(0xc3)] = -0x2);
        }
    }
    _0x5e5fb3[_0xa73182(0xce)] = 0x0, _0x5e5fb3[_0xa73182(0xb6)] = 0x1, _0x5e5fb3[_0xa73182(0xcf)] = 0x2, _0x5e5fb3[_0xa73182(0xd0)] = 0x0, _0x5e5fb3[_0xa73182(0xd1)] = 0x1, _0x5e5fb3['HORIZONTAL_RIGHT'] = 0x2, _0x7235bf[_0xa73182(0xd2)][_0xa73182(0xd3)](_0x5e5fb3), _0x7235bf[_0xa73182(0xd4)]['regClass'](_0xa73182(0xd5), _0x5e5fb3), _0x7235bf['ClassUtils'][_0xa73182(0xd3)](_0xa73182(0xd6), _0x5e5fb3);
    class _0x2bf522 extends _0x7235bf['Script'] {
        constructor() {
            super(), this['viewName'] = '';
        }
        ['onAwake']() {
            var _0x41c030 = _0xa73182;
            this[_0x41c030(0xd7)] = this[_0x41c030(0xbb)][_0x41c030(0xd8)], this[_0x41c030(0xd7)] = this[_0x41c030(0xd7)][_0x41c030(0xd9)](this[_0x41c030(0xd7)][_0x41c030(0xda)]('/') + 0x1, this[_0x41c030(0xd7)]['lastIndexOf']('.'));
        }
        ['onEnable']() {
            var _0x345a04 = _0xa73182;
            _0x7235bf['stage'][_0x345a04(0xdb)](_0x2bf522[_0x345a04(0xdc)], [
                this['viewName'],
                this[_0x345a04(0xbb)]
            ]);
        }
        ['onDisable']() {
            var _0x43ce34 = _0xa73182;
            _0x7235bf[_0x43ce34(0xca)][_0x43ce34(0xdb)](_0x2bf522[_0x43ce34(0xdd)], [
                this[_0x43ce34(0xd7)],
                this['owner']
            ]);
        }
    }
    _0x2bf522[_0xa73182(0xdd)] = _0xa73182(0xde), _0x2bf522['EVENT_UI_VIEW_OPENED'] = _0xa73182(0xdf), _0x7235bf['ILaya'][_0xa73182(0xd3)](_0x2bf522), _0x7235bf[_0xa73182(0xd4)]['regClass'](_0xa73182(0xe0), _0x2bf522), _0x7235bf[_0xa73182(0xd4)][_0xa73182(0xd3)](_0xa73182(0xe1), _0x2bf522);
    class _0x333a53 extends _0x2bf522 {
        constructor() {
            super();
        }
        [_0xa73182(0xba)]() {
            var _0xba790d = _0xa73182;
            super['onAwake'](), this[_0xba790d(0xbb)]['addComponent'](_0x5e5fb3)['initLayout'](!0x1);
        }
        [_0xa73182(0xbe)]() {
            var _0x200962 = _0xa73182;
            super[_0x200962(0xbe)]();
            var _0x24c7ab = zs['laya']['platform'][_0x200962(0xe2)][_0x200962(0xe3)];
            if (_0x24c7ab) {
                _0x24c7ab[_0x200962(0xe4)] && (this[_0x200962(0xbb)][_0x200962(0xe5)](zs['laya'][_0x200962(0xe6)]['BannerCtrl']) || this[_0x200962(0xbb)][_0x200962(0xe7)](zs[_0x200962(0xae)][_0x200962(0xe6)]['BannerCtrl']));
                var _0x1eb13f = _0x24c7ab['exportGameCfg'];
                _0x1eb13f && _0x1eb13f[this[_0x200962(0xd7)]] && (this[_0x200962(0xbb)][_0x200962(0xe5)](zs[_0x200962(0xae)][_0x200962(0xe6)]['ExportGameCtrl']) || this[_0x200962(0xbb)][_0x200962(0xe7)](zs[_0x200962(0xae)]['platform'][_0x200962(0xe8)]));
                var _0x2d0ae1 = _0x24c7ab[_0x200962(0xe9)];
                _0x2d0ae1 && _0x2d0ae1[this[_0x200962(0xd7)]] && 0x0 != _0x2d0ae1[this[_0x200962(0xd7)]][_0x200962(0xea)] && (this[_0x200962(0xbb)]['getComponent'](zs[_0x200962(0xae)][_0x200962(0xe6)][_0x200962(0xeb)]) || this['owner'][_0x200962(0xe7)](zs[_0x200962(0xae)][_0x200962(0xe6)][_0x200962(0xeb)]));
                var _0x479dba = _0x24c7ab[_0x200962(0xec)];
                _0x479dba && _0x479dba[this['viewName']] && (this[_0x200962(0xbb)]['getComponent'](zs['laya'][_0x200962(0xe6)][_0x200962(0xed)]) || this['owner'][_0x200962(0xe7)](zs[_0x200962(0xae)][_0x200962(0xe6)][_0x200962(0xed)]));
                var _0x37d2c6 = _0x24c7ab[_0x200962(0xee)];
                _0x37d2c6 && _0x37d2c6[this['viewName']] && (this[_0x200962(0xbb)][_0x200962(0xe5)](zs[_0x200962(0xae)][_0x200962(0xe6)][_0x200962(0xef)]) || this['owner']['addComponent'](zs[_0x200962(0xae)][_0x200962(0xe6)]['CustomAdCtrl']));
            }
        }
        [_0xa73182(0xf0)](_0x257cf2) {
        }
    }
    _0x7235bf[_0xa73182(0xd2)][_0xa73182(0xd3)](_0x333a53), _0x7235bf['ClassUtils'][_0xa73182(0xd3)]('zs.laya.base.ZhiSeView', _0x333a53), _0x7235bf[_0xa73182(0xd4)][_0xa73182(0xd3)](_0xa73182(0xf1), _0x333a53), _0x107f0c[_0xa73182(0xf2)] = _0x5e5fb3, _0x107f0c[_0xa73182(0xf3)] = _0x2bf522, _0x107f0c[_0xa73182(0xf4)] = _0x333a53;
}(window['zs'][_0x22a000(0xae)]['base'] = window['zs'][_0x22a000(0xae)][_0x22a000(0xf5)] || {}, Laya)));