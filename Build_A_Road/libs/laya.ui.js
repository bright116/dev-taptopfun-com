!function (_0xd14b1f, _0x8aa1bb) {
    'use strict';
    class _0x11d313 {
    }
    _0x11d313['touchScrol' + 'lEnable'] = !0x0, _0x11d313['mouseWheel' + 'Enable'] = !0x0, _0x11d313['showButton' + 's'] = !0x0, _0x11d313['popupBgCol' + 'or'] = '#000000', _0x11d313['popupBgAlp' + 'ha'] = 0.5, _0x11d313['closeDialo' + 'gOnSide'] = !0x0, window['UIConfig'] = _0x11d313;
    class _0x14f893 {
    }
    _0x14f893['defaultSiz' + 'eGrid'] = [
        0x4,
        0x4,
        0x4,
        0x4,
        0x0
    ], _0x14f893['labelColor'] = '#000000', _0x14f893['labelPaddi' + 'ng'] = [
        0x2,
        0x2,
        0x2,
        0x2
    ], _0x14f893['inputLabel' + 'Padding'] = [
        0x1,
        0x1,
        0x1,
        0x3
    ], _0x14f893['buttonStat' + 'eNum'] = 0x3, _0x14f893['buttonLabe' + 'lColors'] = [
        '#32556b',
        '#32cc6b',
        '#ff0000',
        '#C0C0C0'
    ], _0x14f893['comboBoxIt' + 'emColors'] = [
        '#5e95b6',
        '#ffffff',
        '#000000',
        '#8fa4b1',
        '#ffffff'
    ], _0x14f893['scrollBarM' + 'inNum'] = 0xf, _0x14f893['scrollBarD' + 'elayTime'] = 0x1f4;
    class _0x210427 extends _0x8aa1bb['Graphics'] {
        constructor() {
            super(...arguments), this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['uv'] = null;
        }
        ['destroy']() {
            super['destroy'](), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
        }
        get ['sizeGrid']() {
            return this['_sizeGrid'];
        }
        set ['sizeGrid'](_0x5c2c33) {
            this['_sizeGrid'] = _0x5c2c33['map'](_0x2ea738 => +_0x2ea738), this['_setChange' + 'd']();
        }
        get ['width']() {
            return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
        }
        set ['width'](_0xaec59f) {
            this['_width'] != _0xaec59f && (this['_width'] = _0xaec59f, this['_setChange' + 'd']());
        }
        get ['height']() {
            return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
        }
        set ['height'](_0x286a4d) {
            this['_height'] != _0x286a4d && (this['_height'] = _0x286a4d, this['_setChange' + 'd']());
        }
        get ['source']() {
            return this['_source'];
        }
        set ['source'](_0x4b29e0) {
            _0x4b29e0 ? (this['_source'] = _0x4b29e0, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
        }
        ['_setChange' + 'd']() {
            this['_isChanged'] || (this['_isChanged'] = !0x0, _0x8aa1bb['ILaya']['timer']['callLater'](this, this['changeSour' + 'ce']));
        }
        ['changeSour' + 'ce']() {
            this['_isChanged'] = !0x1;
            var _0x1bfa27 = this['_source'];
            if (_0x1bfa27 && _0x1bfa27['bitmap']) {
                var _0x6a4b52 = this['width'], _0x37d5c1 = this['height'], _0x14f97c = this['_sizeGrid'], _0xcd0739 = _0x1bfa27['sourceWidt' + 'h'], _0x124379 = _0x1bfa27['sourceHeig' + 'ht'];
                if (_0x14f97c && (_0xcd0739 !== _0x6a4b52 || _0x124379 !== _0x37d5c1))
                    return this['clear'](), this['draw9Grid'](_0x1bfa27, 0x0, 0x0, _0x6a4b52, _0x37d5c1, _0x14f97c), void this['_repaint']();
                this['clear'](), this['drawTextur' + 'e'](_0x1bfa27, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x6a4b52, _0x37d5c1, null, 0x1, null, null, this['uv']), this['_repaint']();
            }
        }
        ['drawBitmap'](_0x41e70a, _0x3b63e6, _0x2c17fc, _0x4e6979, _0x4a23cf = 0x0, _0x3c425b = 0x0) {
            _0x4a23cf < 0.1 || _0x3c425b < 0.1 || (!_0x41e70a || _0x3b63e6['width'] == _0x4a23cf && _0x3b63e6['height'] == _0x3c425b ? this['drawImage'](_0x3b63e6, _0x2c17fc, _0x4e6979, _0x4a23cf, _0x3c425b) : this['fillTextur' + 'e'](_0x3b63e6, _0x2c17fc, _0x4e6979, _0x4a23cf, _0x3c425b));
        }
        static ['getTexture'](_0x5ce1fc, _0x52830b, _0x299603, _0x4cb56b, _0x39ecb0) {
            var _0x3c4a15;
            return _0x4cb56b <= 0x0 && (_0x4cb56b = 0x1), _0x39ecb0 <= 0x0 && (_0x39ecb0 = 0x1), _0x5ce1fc['$_GID'] || (_0x5ce1fc['$_GID'] = _0x8aa1bb['Utils']['getGID']()), _0x3c4a15 && _0x3c4a15['_getSource']() || (_0x3c4a15 = _0x8aa1bb['Texture']['createFrom' + 'Texture'](_0x5ce1fc, _0x52830b, _0x299603, _0x4cb56b, _0x39ecb0)), _0x3c4a15;
        }
    }
    _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Au' + 'toBitmap', _0x210427), _0x8aa1bb['ClassUtils']['regClass']('Laya.AutoB' + 'itmap', _0x210427);
    class _0x59cb63 extends _0x8aa1bb['Component'] {
        constructor() {
            super(...arguments), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
        }
        ['onReset']() {
            this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
        }
        ['_onEnable']() {
            this['owner']['parent'] ? this['_onAdded']() : this['owner']['once'](_0x8aa1bb['Event']['ADDED'], this, this['_onAdded']);
        }
        ['_onDisable']() {
            this['owner']['off'](_0x8aa1bb['Event']['ADDED'], this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off'](_0x8aa1bb['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
        }
        ['_onAdded']() {
            this['owner']['parent'] && this['owner']['parent']['on'](_0x8aa1bb['Event']['RESIZE'], this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
        }
        ['_onParentR' + 'esize']() {
            var _0x19994c = this['resetLayou' + 'tX'](), _0x203b6f = this['resetLayou' + 'tY']();
            (_0x19994c || _0x203b6f) && this['owner']['event'](_0x8aa1bb['Event']['RESIZE']);
        }
        ['resetLayou' + 'tX']() {
            var _0x708a5a = this['owner'];
            if (!_0x708a5a)
                return !0x1;
            var _0x5d75dd = _0x708a5a['parent'];
            if (_0x5d75dd) {
                if (isNaN(this['centerX'])) {
                    if (isNaN(this['left']))
                        isNaN(this['right']) || (_0x708a5a['x'] = Math['round'](_0x5d75dd['width'] - _0x708a5a['displayWid' + 'th'] - this['right'] + _0x708a5a['pivotX'] * _0x708a5a['scaleX']));
                    else {
                        if (_0x708a5a['x'] = Math['round'](this['left'] + _0x708a5a['pivotX'] * _0x708a5a['scaleX']), !isNaN(this['right'])) {
                            var _0x495ab6 = (_0x5d75dd['_width'] - this['left'] - this['right']) / (_0x708a5a['scaleX'] || 0.01);
                            if (_0x495ab6 != _0x708a5a['width'])
                                return _0x708a5a['width'] = _0x495ab6, !0x0;
                        }
                    }
                } else
                    _0x708a5a['x'] = Math['round'](0.5 * (_0x5d75dd['width'] - _0x708a5a['displayWid' + 'th']) + this['centerX'] + _0x708a5a['pivotX'] * _0x708a5a['scaleX']);
            }
            return !0x1;
        }
        ['resetLayou' + 'tY']() {
            var _0x4b69eb = this['owner'];
            if (!_0x4b69eb)
                return !0x1;
            var _0x53e447 = _0x4b69eb['parent'];
            if (_0x53e447) {
                if (isNaN(this['centerY'])) {
                    if (isNaN(this['top']))
                        isNaN(this['bottom']) || (_0x4b69eb['y'] = Math['round'](_0x53e447['height'] - _0x4b69eb['displayHei' + 'ght'] - this['bottom'] + _0x4b69eb['pivotY'] * _0x4b69eb['scaleY']));
                    else {
                        if (_0x4b69eb['y'] = Math['round'](this['top'] + _0x4b69eb['pivotY'] * _0x4b69eb['scaleY']), !isNaN(this['bottom'])) {
                            var _0x166e93 = (_0x53e447['_height'] - this['top'] - this['bottom']) / (_0x4b69eb['scaleY'] || 0.01);
                            if (_0x166e93 != _0x4b69eb['height'])
                                return _0x4b69eb['height'] = _0x166e93, !0x0;
                        }
                    }
                } else
                    _0x4b69eb['y'] = Math['round'](0.5 * (_0x53e447['height'] - _0x4b69eb['displayHei' + 'ght']) + this['centerY'] + _0x4b69eb['pivotY'] * _0x4b69eb['scaleY']);
            }
            return !0x1;
        }
        ['resetLayou' + 't']() {
            this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
        }
        get ['top']() {
            return this['_top'];
        }
        set ['top'](_0x1b179b) {
            this['_top'] != _0x1b179b && (this['_top'] = _0x1b179b, this['resetLayou' + 'tY']());
        }
        get ['bottom']() {
            return this['_bottom'];
        }
        set ['bottom'](_0x3343a4) {
            this['_bottom'] != _0x3343a4 && (this['_bottom'] = _0x3343a4, this['resetLayou' + 'tY']());
        }
        get ['left']() {
            return this['_left'];
        }
        set ['left'](_0x24f4e7) {
            this['_left'] != _0x24f4e7 && (this['_left'] = _0x24f4e7, this['resetLayou' + 'tX']());
        }
        get ['right']() {
            return this['_right'];
        }
        set ['right'](_0x4ff8c4) {
            this['_right'] != _0x4ff8c4 && (this['_right'] = _0x4ff8c4, this['resetLayou' + 'tX']());
        }
        get ['centerX']() {
            return this['_centerX'];
        }
        set ['centerX'](_0x6bce84) {
            this['_centerX'] != _0x6bce84 && (this['_centerX'] = _0x6bce84, this['resetLayou' + 'tX']());
        }
        get ['centerY']() {
            return this['_centerY'];
        }
        set ['centerY'](_0x4d9235) {
            this['_centerY'] != _0x4d9235 && (this['_centerY'] = _0x4d9235, this['resetLayou' + 'tY']());
        }
    }
    _0x59cb63['EMPTY'] = null, _0x8aa1bb['ILaya']['regClass'](_0x59cb63), _0x59cb63['EMPTY'] = new _0x59cb63(), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Wi' + 'dget', _0x59cb63), _0x8aa1bb['ClassUtils']['regClass']('Laya.Widge' + 't', _0x59cb63);
    class _0x2129e9 extends _0x8aa1bb['Event'] {
    }
    _0x2129e9['SHOW_TIP'] = 'showtip', _0x2129e9['HIDE_TIP'] = 'hidetip', _0x8aa1bb['ILaya']['regClass'](_0x2129e9), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.UI' + 'Event', _0x2129e9), _0x8aa1bb['ClassUtils']['regClass']('Laya.UIEve' + 'nt', _0x2129e9);
    class _0x2482a0 {
        static ['fillArray'](_0x321544, _0x4a1f9a, _0x5d2961 = null) {
            var _0x1a9117 = _0x321544['concat']();
            if (_0x4a1f9a)
                for (var _0x29e14e = _0x4a1f9a['split'](','), _0x55bc7f = 0x0, _0xfd6ac5 = Math['min'](_0x1a9117['length'], _0x29e14e['length']); _0x55bc7f < _0xfd6ac5; _0x55bc7f++) {
                    var _0x1a0afb = _0x29e14e[_0x55bc7f];
                    _0x1a9117[_0x55bc7f] = 'true' == _0x1a0afb || 'false' != _0x1a0afb && _0x1a0afb, null != _0x5d2961 && (_0x1a9117[_0x55bc7f] = _0x5d2961(_0x1a0afb));
                }
            return _0x1a9117;
        }
        static ['toColor'](_0x2da915) {
            return _0x8aa1bb['Utils']['toHexColor'](_0x2da915);
        }
        static ['gray'](_0x3b7901, _0x4e338d = !0x0) {
            _0x4e338d ? _0x2482a0['addFilter'](_0x3b7901, _0x2482a0['grayFilter']) : _0x2482a0['clearFilte' + 'r'](_0x3b7901, _0x8aa1bb['ColorFilte' + 'r']);
        }
        static ['addFilter'](_0x30a8ab, _0x39323f) {
            var _0x3820a5 = _0x30a8ab['filters'] || [];
            _0x3820a5['push'](_0x39323f), _0x30a8ab['filters'] = _0x3820a5;
        }
        static ['clearFilte' + 'r'](_0x2591b1, _0x5a19da) {
            var _0x16adee = _0x2591b1['filters'];
            if (null != _0x16adee && _0x16adee['length'] > 0x0) {
                for (var _0x21d07b = _0x16adee['length'] - 0x1; _0x21d07b > -0x1; _0x21d07b--) {
                    _0x16adee[_0x21d07b] instanceof _0x5a19da && _0x16adee['splice'](_0x21d07b, 0x1);
                }
                _0x2591b1['filters'] = _0x16adee;
            }
        }
        static ['_getReplac' + 'eStr'](_0x4fc601) {
            return _0x2482a0['escapeSequ' + 'ence'][_0x4fc601];
        }
        static ['adptString'](_0x30cc0e) {
            return _0x30cc0e['replace'](/\\(\w)/g, _0x2482a0['_getReplac' + 'eStr']);
        }
        static ['getBindFun'](_0x16a31e) {
            _0x2482a0['_funMap'] || (_0x2482a0['_funMap'] = new _0x8aa1bb['WeakObject']());
            var _0x47c0e3 = _0x2482a0['_funMap']['get'](_0x16a31e);
            if (null == _0x47c0e3) {
                var _0x583c9b = '\x22' + _0x16a31e + '\x22', _0x4bf563 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x583c9b = _0x583c9b['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                _0x47c0e3 = window['Laya']['_runScript'](_0x4bf563), _0x2482a0['_funMap']['set'](_0x16a31e, _0x47c0e3);
            }
            return _0x47c0e3;
        }
    }
    _0x2482a0['grayFilter'] = new _0x8aa1bb['ColorFilte' + 'r']([
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0.3086,
        0.6094,
        0.082,
        0x0,
        0x0,
        0x0,
        0x0,
        0x0,
        0x1,
        0x0
    ]), _0x2482a0['escapeSequ' + 'ence'] = {
        '\x5cn': '\x0a',
        '\x5ct': '\x09'
    }, _0x2482a0['_funMap'] = null, _0x8aa1bb['ClassUtils']['regClass']('laya.ui.UI' + 'Utils', _0x2482a0), _0x8aa1bb['ClassUtils']['regClass']('Laya.UIUti' + 'ls', _0x2482a0);
    class _0xab7961 extends _0x8aa1bb['Sprite'] {
        constructor(_0x37b4ae = !0x0) {
            super(), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x59cb63['EMPTY'], _0x37b4ae && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0x494f80 = !0x0) {
            super['destroy'](_0x494f80), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
        }
        ['preinitial' + 'ize']() {
        }
        ['createChil' + 'dren']() {
        }
        ['initialize']() {
        }
        get ['width']() {
            return this['get_width']();
        }
        ['get_width']() {
            return this['_width'] ? this['_width'] : this['measureWid' + 'th']();
        }
        ['measureWid' + 'th']() {
            var _0x38155d = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x5dabd5 = this['numChildre' + 'n'] - 0x1; _0x5dabd5 > -0x1; _0x5dabd5--) {
                var _0x1e348e = this['getChildAt'](_0x5dabd5);
                _0x1e348e['_visible'] && (_0x38155d = Math['max'](_0x1e348e['_x'] + _0x1e348e['width'] * _0x1e348e['scaleX'], _0x38155d));
            }
            return _0x38155d;
        }
        ['commitMeas' + 'ure']() {
        }
        get ['height']() {
            return this['get_height']();
        }
        ['get_height']() {
            return this['_height'] ? this['_height'] : this['measureHei' + 'ght']();
        }
        ['measureHei' + 'ght']() {
            var _0x5cf8b9 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x21ee7d = this['numChildre' + 'n'] - 0x1; _0x21ee7d > -0x1; _0x21ee7d--) {
                var _0x57b63b = this['getChildAt'](_0x21ee7d);
                _0x57b63b['_visible'] && (_0x5cf8b9 = Math['max'](_0x57b63b['_y'] + _0x57b63b['height'] * _0x57b63b['scaleY'], _0x5cf8b9));
            }
            return _0x5cf8b9;
        }
        get ['dataSource']() {
            return this['get_dataSo' + 'urce']();
        }
        ['get_dataSo' + 'urce']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x151efa) {
            this['set_dataSo' + 'urce'](_0x151efa);
        }
        ['set_dataSo' + 'urce'](_0x2302ea) {
            for (var _0x39ed6b in (this['_dataSourc' + 'e'] = _0x2302ea, this['_dataSourc' + 'e']))
                _0x39ed6b in this && 'function' != typeof this[_0x39ed6b] && (this[_0x39ed6b] = this['_dataSourc' + 'e'][_0x39ed6b]);
        }
        get ['top']() {
            return this['get_top']();
        }
        ['get_top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x333040) {
            this['set_top'](_0x333040);
        }
        ['set_top'](_0x4e17cd) {
            _0x4e17cd != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x4e17cd);
        }
        get ['bottom']() {
            return this['get_bottom']();
        }
        ['get_bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x2aa877) {
            this['set_bottom'](_0x2aa877);
        }
        ['set_bottom'](_0x2d4005) {
            _0x2d4005 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x2d4005);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x2c9e5f) {
            _0x2c9e5f != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x2c9e5f);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x65f84f) {
            _0x65f84f != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x65f84f);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x414b0c) {
            _0x414b0c != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x414b0c);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x36bf21) {
            _0x36bf21 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x36bf21);
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x8aa1bb['Event']['RESIZE']), this['_widget'] !== _0x59cb63['EMPTY'] && this['_widget']['resetLayou' + 't']();
        }
        get ['tag']() {
            return this['_tag'];
        }
        set ['tag'](_0xf8a47) {
            this['_tag'] = _0xf8a47;
        }
        get ['toolTip']() {
            return this['_toolTip'];
        }
        set ['toolTip'](_0x148d75) {
            this['_toolTip'] != _0x148d75 && (this['_toolTip'] = _0x148d75, null != _0x148d75 ? (this['on'](_0x8aa1bb['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['on'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onMouseOut'])) : (this['off'](_0x8aa1bb['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['off'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onMouseOut'])));
        }
        ['onMouseOve' + 'r'](_0x318207) {
            _0x8aa1bb['ILaya']['stage']['event'](_0x2129e9['SHOW_TIP'], this['_toolTip']);
        }
        ['onMouseOut'](_0x514ad2) {
            _0x8aa1bb['ILaya']['stage']['event'](_0x2129e9['HIDE_TIP'], this['_toolTip']);
        }
        get ['gray']() {
            return this['_gray'];
        }
        set ['gray'](_0x3b8e2a) {
            _0x3b8e2a !== this['_gray'] && (this['_gray'] = _0x3b8e2a, _0x2482a0['gray'](this, _0x3b8e2a));
        }
        get ['disabled']() {
            return this['_disabled'];
        }
        set ['disabled'](_0x484847) {
            _0x484847 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x484847, this['mouseEnabl' + 'ed'] = !_0x484847);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x59cb63['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x59cb63)), this['_widget'];
        }
        set ['scaleX'](_0x591698) {
            this['set_scaleX'](_0x591698);
        }
        ['set_scaleX'](_0x5f01cf) {
            super['get_scaleX']() != _0x5f01cf && (super['set_scaleX'](_0x5f01cf), this['event'](_0x8aa1bb['Event']['RESIZE']));
        }
        get ['scaleX']() {
            return super['scaleX'];
        }
        set ['scaleY'](_0x485d74) {
            this['set_scaleY'](_0x485d74);
        }
        ['set_scaleY'](_0x37a43d) {
            super['get_scaleY']() != _0x37a43d && (super['set_scaleY'](_0x37a43d), this['event'](_0x8aa1bb['Event']['RESIZE']));
        }
        get ['scaleY']() {
            return super['scaleY'];
        }
        ['onCompResi' + 'ze']() {
            this['_sizeChang' + 'ed']();
        }
        set ['width'](_0x1d90b8) {
            this['set_width'](_0x1d90b8);
        }
        ['set_width'](_0x5c0240) {
            super['get_width']() != _0x5c0240 && (super['set_width'](_0x5c0240), this['callLater'](this['_sizeChang' + 'ed']));
        }
        set ['height'](_0x343f4f) {
            this['set_height'](_0x343f4f);
        }
        ['set_height'](_0x3482c6) {
            super['get_height']() != _0x3482c6 && (super['set_height'](_0x3482c6), this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorX']() {
            return this['get_anchor' + 'X']();
        }
        ['get_anchor' + 'X']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x31cc03) {
            this['set_anchor' + 'X'](_0x31cc03);
        }
        ['set_anchor' + 'X'](_0x18ae8e) {
            this['_anchorX'] != _0x18ae8e && (this['_anchorX'] = _0x18ae8e, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['get_anchor' + 'Y']();
        }
        ['get_anchor' + 'Y']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x245d02) {
            this['set_anchor' + 'Y'](_0x245d02);
        }
        ['set_anchor' + 'Y'](_0x31f9eb) {
            this['_anchorY'] != _0x31f9eb && (this['_anchorY'] = _0x31f9eb, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_childChan' + 'ged'](_0x2c9133 = null) {
            this['callLater'](this['_sizeChang' + 'ed']), super['_childChan' + 'ged'](_0x2c9133);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0xab7961), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.UI' + 'Component', _0xab7961), _0x8aa1bb['ClassUtils']['regClass']('Laya.UICom' + 'ponent', _0xab7961);
    class _0x2de762 extends _0xab7961 {
        constructor(_0x3c006f = null) {
            super(), this['skin'] = _0x3c006f;
        }
        ['destroy'](_0x285712 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x8aa1bb['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x210427(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x379739) {
            if (this['_skin'] != _0x379739) {
                if (this['_skin'] = _0x379739, _0x379739) {
                    var _0x221d87 = _0x8aa1bb['Loader']['getRes'](_0x379739);
                    _0x221d87 ? (this['source'] = _0x221d87, this['onCompResi' + 'ze']()) : _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['setSource'], [this['_skin']]), null, _0x8aa1bb['Loader']['IMAGE'], 0x1, !0x0, this['_group']);
                } else
                    this['source'] = null;
            }
        }
        get ['source']() {
            return this['_bitmap']['source'];
        }
        set ['source'](_0x11995f) {
            this['_bitmap'] && (this['_bitmap']['source'] = _0x11995f, this['event'](_0x8aa1bb['Event']['LOADED']), this['repaint']());
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x4bfca7) {
            _0x4bfca7 && this['_skin'] && _0x8aa1bb['Loader']['setGroup'](this['_skin'], _0x4bfca7), this['_group'] = _0x4bfca7;
        }
        ['setSource'](_0x5c74bb, _0x272e6e = null) {
            _0x5c74bb === this['_skin'] && _0x272e6e && (this['source'] = _0x272e6e, this['onCompResi' + 'ze']());
        }
        ['measureWid' + 'th']() {
            return this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bitmap']['height'];
        }
        set ['width'](_0x147718) {
            super['width'] = _0x147718, this['_bitmap']['width'] = 0x0 == _0x147718 ? 1e-7 : _0x147718;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2650bb) {
            super['height'] = _0x2650bb, this['_bitmap']['height'] = 0x0 == _0x2650bb ? 1e-7 : _0x2650bb;
        }
        get ['height']() {
            return super['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x42d801) {
            this['_bitmap']['sizeGrid'] = _0x2482a0['fillArray'](_0x14f893['defaultSiz' + 'eGrid'], _0x42d801, Number);
        }
        set ['dataSource'](_0x26bc3a) {
            this['_dataSourc' + 'e'] = _0x26bc3a, 'string' == typeof _0x26bc3a ? this['skin'] = _0x26bc3a : super['dataSource'] = _0x26bc3a;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x2de762), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Im' + 'age', _0x2de762), _0x8aa1bb['ClassUtils']['regClass']('Laya.Image', _0x2de762);
    class _0xcb6023 extends _0x2de762 {
        constructor(_0x52a016 = null) {
            super(), this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_http'] = new _0x8aa1bb['Browser']['window']['XMLHttpReq' + 'uest'](), this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, this['skin'] = _0x52a016, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
        }
        ['setLoadUrl']() {
        }
        ['init']() {
            this['isSupportJ' + 'ump']() ? ((_0x8aa1bb['Browser']['onMiniGame'] || _0x8aa1bb['Browser']['onBDMiniGa' + 'me']) && _0x8aa1bb['ILaya']['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
        }
        ['initEvent']() {
            this['on'](_0x8aa1bb['Event']['CLICK'], this, this['onAdvsImgC' + 'lick']);
        }
        ['onAdvsImgC' + 'lick']() {
            this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
        }
        ['revertAdvs' + 'Data']() {
            this['advsListAr' + 'r'][this['_playIndex']] && (this['visible'] = !0x0, this['skin'] = this['advsListAr' + 'r'][this['_playIndex']]);
        }
        ['isSupportJ' + 'ump']() {
            return _0x8aa1bb['Browser']['onMiniGame'] ? window['wx']['navigateTo' + 'MiniProgra' + 'm'] instanceof Function : !!_0x8aa1bb['Browser']['onBDMiniGa' + 'me'];
        }
        ['jumptoGame']() {
            var _0xf30e18 = this['advsListAr' + 'r'][this['_playIndex']];
            parseInt(_0xf30e18['gameid']), _0xf30e18['extendInfo'], _0xf30e18['path'], _0x8aa1bb['Browser']['onMiniGame'] ? this['isSupportJ' + 'ump']() && window['wx']['navigateTo' + 'MiniProgra' + 'm']({
                'appId': this['_appid'],
                'path': '',
                'extraData': '',
                'envVersion': 'release',
                'success': function () {
                    console['log']('----------' + '---跳转成功---' + '----------' + '-');
                },
                'fail': function () {
                    console['log']('----------' + '---跳转失败---' + '----------' + '-');
                },
                'complete': function () {
                    console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), this['updateAdvs' + 'Info']();
                }['bind'](this)
            }) : _0x8aa1bb['Browser']['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
        }
        ['updateAdvs' + 'Info']() {
            this['visible'] = !0x1, this['onLunbo'](), _0x8aa1bb['ILaya']['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
        }
        ['onLunbo']() {
            this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
        }
        ['getCurrent' + 'AppidObj']() {
            return this['advsListAr' + 'r'][this['_playIndex']];
        }
        ['onGetAdvsL' + 'istData']() {
            var _0x276b69 = this, _0x44d6b5 = _0xcb6023['randRange'](0x2710, 0xf4240), _0x41350f = this['resUrl'] + '?' + _0x44d6b5;
            this['_http']['open']('get', _0x41350f, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x16a9e1) {
                _0x276b69['_onError'](_0x16a9e1);
            }, this['_http']['onload'] = function (_0x21dab9) {
                _0x276b69['_onLoad'](_0x21dab9);
            }, this['_http']['send'](null);
        }
        static ['randRange'](_0x270d1b, _0x3eae47) {
            return Math['floor'](Math['random']() * (_0x3eae47 - _0x270d1b + 0x1)) + _0x270d1b;
        }
        ['_onError'](_0x142b67) {
            this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
        }
        ['_onLoad'](_0x27ac1f) {
            var _0x5db647 = this['_http'], _0x3a55b8 = void 0x0 !== _0x5db647['status'] ? _0x5db647['status'] : 0xc8;
            0xc8 === _0x3a55b8 || 0xcc === _0x3a55b8 || 0x0 === _0x3a55b8 ? this['complete']() : this['error']('[' + _0x5db647['status'] + ']' + _0x5db647['statusText'] + ':' + _0x5db647['responseUR' + 'L']);
        }
        ['error'](_0x4ff03e) {
            this['event'](_0x8aa1bb['Event']['ERROR'], _0x4ff03e);
        }
        ['complete']() {
            try {
                this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']();
            } catch (_0x53644a) {
                this['error'](_0x53644a['message']);
            }
        }
        ['getAdvsQAr' + 'r'](_0x5b70ff) {
            var _0x27e376 = [], _0x342604 = _0x8aa1bb['LocalStora' + 'ge']['getJSON']('gameObj');
            for (var _0x1005b6 in _0x5b70ff) {
                var _0x53d404 = _0x5b70ff[_0x1005b6];
                _0x342604 && _0x342604[_0x53d404['gameid']] && !_0x53d404['isQiangZhi'] || _0x27e376['push'](_0x53d404);
            }
            return _0x27e376;
        }
        ['clear']() {
            var _0x463ad4 = this['_http'];
            _0x463ad4['onerror'] = _0x463ad4['onabort'] = _0x463ad4['onprogress'] = _0x463ad4['onload'] = null;
        }
        ['destroy'](_0x10764c = !0x0) {
            _0x8aa1bb['ILaya']['timer']['clear'](this, this['onLunbo']), super['destroy'](!0x0), this['clear'](), _0x8aa1bb['ILaya']['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
        }
    }
    _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ad' + 'vImage', _0xcb6023), _0x8aa1bb['ClassUtils']['regClass']('Laya.AdvIm' + 'age', _0xcb6023);
    class _0x3cfeed extends _0xab7961 {
        set ['dataSource'](_0x41d7c7) {
            for (var _0x595fb4 in (this['_dataSourc' + 'e'] = _0x41d7c7, _0x41d7c7)) {
                var _0x2e4f86 = this['getChildBy' + 'Name'](_0x595fb4);
                _0x2e4f86 ? _0x2e4f86['dataSource'] = _0x41d7c7[_0x595fb4] : _0x595fb4 in this && !(this[_0x595fb4] instanceof Function) && (this[_0x595fb4] = _0x41d7c7[_0x595fb4]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x683691) {
            this['_bgColor'] = _0x683691, _0x683691 ? (this['_onResize'](null), this['on'](_0x8aa1bb['Event']['RESIZE'], this, this['_onResize'])) : (this['graphics']['clear'](), this['off'](_0x8aa1bb['Event']['RESIZE'], this, this['_onResize']));
        }
        ['_onResize'](_0x47d022) {
            this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x3cfeed), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Bo' + 'x', _0x3cfeed), _0x8aa1bb['ClassUtils']['regClass']('Laya.Box', _0x3cfeed);
    class _0x3eb938 extends _0xab7961 {
        constructor(_0x557ab9 = null, _0x5a9e9a = '') {
            super(), this['_labelColo' + 'rs'] = _0x14f893['buttonLabe' + 'lColors'], this['_state'] = 0x0, this['_autoSize'] = !0x0, this['_stateNum'] = _0x14f893['buttonStat' + 'eNum'], this['_stateChan' + 'ged'] = !0x1, this['skin'] = _0x557ab9, this['label'] = _0x5a9e9a;
        }
        ['destroy'](_0x5a7835 = !0x0) {
            super['destroy'](_0x5a7835), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x5a7835), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x210427();
        }
        ['createText']() {
            this['_text'] || (this['_text'] = new _0x8aa1bb['Text'](), this['_text']['overflow'] = _0x8aa1bb['Text']['HIDDEN'], this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
        }
        ['initialize']() {
            0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](_0x8aa1bb['Const']['HAS_MOUSE'], !0x0)), this['_createLis' + 'tener'](_0x8aa1bb['Event']['MOUSE_OVER'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x8aa1bb['Event']['CLICK'], this, this['onMouse'], null, !0x1, !0x1);
        }
        ['onMouse'](_0x41e2f4) {
            if (!0x1 !== this['toggle'] || !this['_selected'])
                return _0x41e2f4['type'] === _0x8aa1bb['Event']['CLICK'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x3eb938['stateMap'][_0x41e2f4['type']]));
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0xc254ad) {
            this['_skin'] != _0xc254ad && (this['_skin'] = _0xc254ad, _0xc254ad ? _0x8aa1bb['Loader']['getRes'](_0xc254ad) ? this['_skinLoade' + 'd']() : _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x8aa1bb['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x59e75b) {
            'string' == typeof _0x59e75b && (_0x59e75b = parseInt(_0x59e75b)), this['_stateNum'] != _0x59e75b && (this['_stateNum'] = _0x59e75b < 0x1 ? 0x1 : _0x59e75b > 0x3 ? 0x3 : _0x59e75b, this['callLater'](this['changeClip' + 's']));
        }
        ['changeClip' + 's']() {
            var _0x5f5c05 = _0x8aa1bb['Loader']['getRes'](this['_skin']);
            if (_0x5f5c05) {
                var _0x752238 = _0x5f5c05['sourceWidt' + 'h'], _0x28935f = _0x5f5c05['sourceHeig' + 'ht'] / this['_stateNum'];
                _0x5f5c05['$_GID'] || (_0x5f5c05['$_GID'] = _0x8aa1bb['Utils']['getGID']());
                var _0x57c29b = _0x5f5c05['$_GID'] + '-' + this['_stateNum'], _0x15fd78 = _0x8aa1bb['WeakObject']['I']['get'](_0x57c29b);
                if (_0x8aa1bb['Utils']['isOkTextur' + 'eList'](_0x15fd78) || (_0x15fd78 = null), _0x15fd78)
                    this['_sources'] = _0x15fd78;
                else {
                    if (this['_sources'] = [], 0x1 === this['_stateNum'])
                        this['_sources']['push'](_0x5f5c05);
                    else {
                        for (var _0x563a39 = 0x0; _0x563a39 < this['_stateNum']; _0x563a39++)
                            this['_sources']['push'](_0x8aa1bb['Texture']['createFrom' + 'Texture'](_0x5f5c05, 0x0, _0x28935f * _0x563a39, _0x752238, _0x28935f));
                    }
                    _0x8aa1bb['WeakObject']['I']['set'](_0x57c29b, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x752238, this['_bitmap']['height'] = this['_height'] || _0x28935f, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x752238);
            } else
                console['log']('lose\x20skin', this['_skin']);
        }
        ['measureWid' + 'th']() {
            return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_autoSize'] ? this['_bitmap']['width'] : (this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0));
        }
        ['measureHei' + 'ght']() {
            return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
        }
        get ['label']() {
            return this['_text'] ? this['_text']['text'] : null;
        }
        set ['label'](_0x292f34) {
            (this['_text'] || _0x292f34) && (this['createText'](), this['_text']['text'] != _0x292f34 && (_0x292f34 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x292f34 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
        }
        get ['selected']() {
            return this['_selected'];
        }
        set ['selected'](_0x26fa3f) {
            this['_selected'] != _0x26fa3f && (this['_selected'] = _0x26fa3f, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event'](_0x8aa1bb['Event']['CHANGE']));
        }
        get ['state']() {
            return this['_state'];
        }
        set ['state'](_0x4816f5) {
            this['_state'] != _0x4816f5 && (this['_state'] = _0x4816f5, this['_setStateC' + 'hanged']());
        }
        ['changeStat' + 'e']() {
            this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
            var _0x21fe24 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
            this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x21fe24]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x21fe24], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x21fe24]));
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs']['join'](',');
        }
        set ['labelColor' + 's'](_0xc216f8) {
            this['_labelColo' + 'rs'] = _0x2482a0['fillArray'](_0x14f893['buttonLabe' + 'lColors'], _0xc216f8, String), this['_setStateC' + 'hanged']();
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
        }
        set ['strokeColo' + 'rs'](_0x3a47bc) {
            this['_strokeCol' + 'ors'] = _0x2482a0['fillArray'](_0x14f893['buttonLabe' + 'lColors'], _0x3a47bc, String), this['_setStateC' + 'hanged']();
        }
        get ['labelPaddi' + 'ng']() {
            return this['createText'](), this['_text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x11b97f) {
            this['createText'](), this['_text']['padding'] = _0x2482a0['fillArray'](_0x14f893['labelPaddi' + 'ng'], _0x11b97f, Number);
        }
        get ['labelSize']() {
            return this['createText'](), this['_text']['fontSize'];
        }
        set ['labelSize'](_0x2169c5) {
            this['createText'](), this['_text']['fontSize'] = _0x2169c5;
        }
        get ['labelStrok' + 'e']() {
            return this['createText'](), this['_text']['stroke'];
        }
        set ['labelStrok' + 'e'](_0x35ce72) {
            this['createText'](), this['_text']['stroke'] = _0x35ce72;
        }
        get ['labelStrok' + 'eColor']() {
            return this['createText'](), this['_text']['strokeColo' + 'r'];
        }
        set ['labelStrok' + 'eColor'](_0x31a509) {
            this['createText'](), this['_text']['strokeColo' + 'r'] = _0x31a509;
        }
        get ['labelBold']() {
            return this['createText'](), this['_text']['bold'];
        }
        set ['labelBold'](_0x262f78) {
            this['createText'](), this['_text']['bold'] = _0x262f78;
        }
        get ['labelFont']() {
            return this['createText'](), this['_text']['font'];
        }
        set ['labelFont'](_0x39efd7) {
            this['createText'](), this['_text']['font'] = _0x39efd7;
        }
        get ['labelAlign']() {
            return this['createText'](), this['_text']['align'];
        }
        set ['labelAlign'](_0xbab0f1) {
            this['createText'](), this['_text']['align'] = _0xbab0f1;
        }
        get ['clickHandl' + 'er']() {
            return this['_clickHand' + 'ler'];
        }
        set ['clickHandl' + 'er'](_0x180d01) {
            this['_clickHand' + 'ler'] = _0x180d01;
        }
        get ['text']() {
            return this['createText'](), this['_text'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x48aff5) {
            this['_bitmap']['sizeGrid'] = _0x2482a0['fillArray'](_0x14f893['defaultSiz' + 'eGrid'], _0x48aff5, Number);
        }
        set ['width'](_0x2abe5c) {
            super['set_width'](_0x2abe5c), this['_autoSize'] && (this['_bitmap']['width'] = _0x2abe5c, this['_text'] && (this['_text']['width'] = _0x2abe5c));
        }
        get ['width']() {
            return super['get_width']();
        }
        set ['height'](_0x133fa6) {
            super['set_height'](_0x133fa6), this['_autoSize'] && (this['_bitmap']['height'] = _0x133fa6, this['_text'] && (this['_text']['height'] = _0x133fa6));
        }
        get ['height']() {
            return super['get_height']();
        }
        set ['dataSource'](_0x3ebf62) {
            this['_dataSourc' + 'e'] = _0x3ebf62, 'number' == typeof _0x3ebf62 || 'string' == typeof _0x3ebf62 ? this['label'] = _0x3ebf62 + '' : super['set_dataSo' + 'urce'](_0x3ebf62);
        }
        get ['dataSource']() {
            return super['get_dataSo' + 'urce']();
        }
        get ['iconOffset']() {
            return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
        }
        set ['iconOffset'](_0x4aee3b) {
            this['_bitmap']['_offset'] = _0x4aee3b ? _0x2482a0['fillArray']([
                0x1,
                0x1
            ], _0x4aee3b, Number) : [];
        }
        ['_setStateC' + 'hanged']() {
            this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
        }
    }
    _0x3eb938['stateMap'] = {
        'mouseup': 0x0,
        'mouseover': 0x1,
        'mousedown': 0x2,
        'mouseout': 0x0
    }, _0x8aa1bb['ILaya']['regClass'](_0x3eb938), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Bu' + 'tton', _0x3eb938), _0x8aa1bb['ClassUtils']['regClass']('Laya.Butto' + 'n', _0x3eb938);
    class _0x155af7 extends _0x3eb938 {
        constructor(_0x3582cf = null, _0x4a9b70 = '') {
            super(_0x3582cf, _0x4a9b70), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
        }
        set ['dataSource'](_0x4d00d7) {
            this['_dataSourc' + 'e'] = _0x4d00d7, _0x4d00d7 instanceof Boolean ? this['selected'] = _0x4d00d7 : 'string' == typeof _0x4d00d7 ? this['selected'] = 'true' === _0x4d00d7 : super['dataSource'] = _0x4d00d7;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x155af7), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ch' + 'eckBox', _0x155af7), _0x8aa1bb['ClassUtils']['regClass']('Laya.Check' + 'Box', _0x155af7);
    class _0x486c8e extends _0xab7961 {
        constructor(_0x85d4bc = null, _0x51d077 = 0x1, _0x486449 = 0x1) {
            super(), this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_interval'] = 0x32, this['_index'] = 0x0, this['_toIndex'] = -0x1, this['_clipX'] = _0x51d077, this['_clipY'] = _0x486449, this['skin'] = _0x85d4bc;
        }
        ['destroy'](_0x5a0b67 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x8aa1bb['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x210427();
        }
        ['_onDisplay'](_0x364864) {
            this['_isPlaying'] ? this['_getBit'](_0x8aa1bb['Const']['DISPLAYED_' + 'INSTAGE']) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0xfce18c) {
            this['_skin'] != _0xfce18c && (this['_skin'] = _0xfce18c, _0xfce18c ? _0x8aa1bb['Loader']['getRes'](_0xfce18c) ? this['_skinLoade' + 'd']() : _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x8aa1bb['Loader']['IMAGE'], 0x1) : this['_bitmap']['source'] = null);
        }
        ['_skinLoade' + 'd']() {
            this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        get ['clipX']() {
            return this['_clipX'];
        }
        set ['clipX'](_0x93c9bf) {
            this['_clipX'] = _0x93c9bf || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipY']() {
            return this['_clipY'];
        }
        set ['clipY'](_0x322b26) {
            this['_clipY'] = _0x322b26 || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipWidth']() {
            return this['_clipWidth'];
        }
        set ['clipWidth'](_0x2c3e30) {
            this['_clipWidth'] = _0x2c3e30, this['_setClipCh' + 'anged']();
        }
        get ['clipHeight']() {
            return this['_clipHeigh' + 't'];
        }
        set ['clipHeight'](_0x590b02) {
            this['_clipHeigh' + 't'] = _0x590b02, this['_setClipCh' + 'anged']();
        }
        ['changeClip']() {
            if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                var _0x2115b1 = _0x8aa1bb['Loader']['getRes'](this['_skin']);
                _0x2115b1 ? this['loadComple' + 'te'](this['_skin'], _0x2115b1) : _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['loadComple' + 'te'], [this['_skin']]));
            }
        }
        ['loadComple' + 'te'](_0x442c82, _0x4110f8) {
            if (_0x442c82 === this['_skin'] && _0x4110f8) {
                var _0x3a3098 = this['_clipWidth'] || Math['ceil'](_0x4110f8['sourceWidt' + 'h'] / this['_clipX']), _0x3564e3 = this['_clipHeigh' + 't'] || Math['ceil'](_0x4110f8['sourceHeig' + 'ht'] / this['_clipY']), _0x48fa91 = this['_skin'] + _0x3a3098 + _0x3564e3, _0x1f8b19 = _0x8aa1bb['WeakObject']['I']['get'](_0x48fa91);
                if (_0x8aa1bb['Utils']['isOkTextur' + 'eList'](_0x1f8b19) || (_0x1f8b19 = null), _0x1f8b19)
                    this['_sources'] = _0x1f8b19;
                else {
                    this['_sources'] = [];
                    for (var _0x53cc99 = 0x0; _0x53cc99 < this['_clipY']; _0x53cc99++)
                        for (var _0x35dcdf = 0x0; _0x35dcdf < this['_clipX']; _0x35dcdf++)
                            this['_sources']['push'](_0x8aa1bb['Texture']['createFrom' + 'Texture'](_0x4110f8, _0x3a3098 * _0x35dcdf, _0x3564e3 * _0x53cc99, _0x3a3098, _0x3564e3));
                    _0x8aa1bb['WeakObject']['I']['set'](_0x48fa91, this['_sources']);
                }
                this['index'] = this['_index'], this['event'](_0x8aa1bb['Event']['LOADED']), this['onCompResi' + 'ze']();
            }
        }
        get ['sources']() {
            return this['_sources'];
        }
        set ['sources'](_0x30a177) {
            this['_sources'] = _0x30a177, this['index'] = this['_index'], this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x26ef25) {
            _0x26ef25 && this['_skin'] && _0x8aa1bb['Loader']['setGroup'](this['_skin'], _0x26ef25), this['_group'] = _0x26ef25;
        }
        set ['width'](_0x518a65) {
            super['width'] = _0x518a65, this['_bitmap']['width'] = _0x518a65;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xb656ad) {
            super['height'] = _0xb656ad, this['_bitmap']['height'] = _0xb656ad;
        }
        get ['height']() {
            return super['height'];
        }
        ['measureWid' + 'th']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x5f4f5b) {
            this['_bitmap']['sizeGrid'] = _0x2482a0['fillArray'](_0x14f893['defaultSiz' + 'eGrid'], _0x5f4f5b, Number);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x33518e) {
            this['_index'] = _0x33518e, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x33518e]), this['event'](_0x8aa1bb['Event']['CHANGE']);
        }
        get ['total']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
        }
        get ['autoPlay']() {
            return this['_autoPlay'];
        }
        set ['autoPlay'](_0x26cdce) {
            this['_autoPlay'] != _0x26cdce && (this['_autoPlay'] = _0x26cdce, _0x26cdce ? this['play']() : this['stop']());
        }
        get ['interval']() {
            return this['_interval'];
        }
        set ['interval'](_0xe3537f) {
            this['_interval'] != _0xe3537f && (this['_interval'] = _0xe3537f, this['_isPlaying'] && this['play']());
        }
        get ['isPlaying']() {
            return this['_isPlaying'];
        }
        set ['isPlaying'](_0x5eb733) {
            this['_isPlaying'] = _0x5eb733;
        }
        ['play'](_0x45da7c = 0x0, _0x1eba6c = -0x1) {
            this['_isPlaying'] = !0x0, this['index'] = _0x45da7c, this['_toIndex'] = _0x1eba6c, this['_index']++, _0x8aa1bb['ILaya']['timer']['loop'](this['interval'], this, this['_loop']), this['on'](_0x8aa1bb['Event']['DISPLAY'], this, this['_onDisplay']), this['on'](_0x8aa1bb['Event']['UNDISPLAY'], this, this['_onDisplay']);
        }
        ['_loop']() {
            this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
        }
        ['stop']() {
            this['_isPlaying'] = !0x1, _0x8aa1bb['ILaya']['timer']['clear'](this, this['_loop']), this['event'](_0x8aa1bb['Event']['COMPLETE']);
        }
        set ['dataSource'](_0x1984b4) {
            this['_dataSourc' + 'e'] = _0x1984b4, 'number' == typeof _0x1984b4 || 'string' == typeof _0x1984b4 ? this['index'] = parseInt(_0x1984b4) : super['dataSource'] = _0x1984b4;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bitmap']() {
            return this['_bitmap'];
        }
        ['_setClipCh' + 'anged']() {
            this['_clipChang' + 'ed'] || (this['_clipChang' + 'ed'] = !0x0, this['callLater'](this['changeClip']));
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x486c8e), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Cl' + 'ip', _0x486c8e), _0x8aa1bb['ClassUtils']['regClass']('Laya.Clip', _0x486c8e);
    class _0x3a9c1f extends _0xab7961 {
        constructor() {
            super(...arguments), this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000';
        }
        ['destroy'](_0xde319d = !0x0) {
            super['destroy'](_0xde319d), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0xde319d), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0xde319d), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_colorButt' + 'on'] = new _0x3eb938()), this['_colorPane' + 'l'] = new _0x3cfeed(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x8aa1bb['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x8aa1bb['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x8aa1bb['Input']());
        }
        ['initialize']() {
            this['_colorButt' + 'on']['on'](_0x8aa1bb['Event']['CLICK'], this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on'](_0x8aa1bb['Event']['KEY_DOWN'], this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on'](_0x8aa1bb['Event']['MOUSE_MOVE'], this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on'](_0x8aa1bb['Event']['CLICK'], this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
        }
        ['onPanelMou' + 'seDown'](_0x18a9e4) {
            _0x18a9e4['stopPropag' + 'ation']();
        }
        ['changePane' + 'l']() {
            this['_panelChan' + 'ged'] = !0x1;
            var _0x4d5692 = this['_colorPane' + 'l']['graphics'];
            _0x4d5692['clear'](!0x0), _0x4d5692['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x4d5692 = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
            for (var _0x381563 = [
                        0x0,
                        0x333333,
                        0x666666,
                        0x999999,
                        0xcccccc,
                        0xffffff,
                        0xff0000,
                        0xff00,
                        0xff,
                        0xffff00,
                        0xffff,
                        0xff00ff
                    ], _0x4d5c83 = 0x0; _0x4d5c83 < 0xc; _0x4d5c83++)
                for (var _0x9b327 = 0x0; _0x9b327 < 0x14; _0x9b327++) {
                    var _0x54a8e5;
                    _0x54a8e5 = 0x0 === _0x9b327 ? _0x381563[_0x4d5c83] : 0x1 === _0x9b327 ? 0x0 : 0x33 * (((0x3 * _0x4d5c83 + _0x9b327 / 0x6) % 0x3 << 0x0) + 0x3 * (_0x4d5c83 / 0x6 << 0x0)) << 0x10 | _0x9b327 % 0x6 * 0x33 << 0x8 | (_0x4d5c83 << 0x0) % 0x6 * 0x33;
                    var _0x4c88ba = _0x2482a0['toColor'](_0x54a8e5);
                    this['_colors']['push'](_0x4c88ba);
                    var _0x4b5283 = _0x9b327 * this['_gridSize'], _0x4a9754 = _0x4d5c83 * this['_gridSize'];
                    _0x4d5692['drawRect'](_0x4b5283, _0x4a9754, this['_gridSize'], this['_gridSize'], _0x4c88ba, '#000000');
                }
        }
        ['onColorBut' + 'tonClick'](_0x52ca24) {
            this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
        }
        ['open']() {
            let _0x20a7d7 = _0x8aa1bb['ILaya']['stage'];
            var _0x66b298 = this['localToGlo' + 'bal'](new _0x8aa1bb['Point']()), _0x303fe8 = _0x66b298['x'] + this['_colorPane' + 'l']['width'] <= _0x20a7d7['width'] ? _0x66b298['x'] : _0x20a7d7['width'] - this['_colorPane' + 'l']['width'], _0x316b6e = _0x66b298['y'] + this['_colorButt' + 'on']['height'];
            _0x316b6e = _0x316b6e + this['_colorPane' + 'l']['height'] <= _0x20a7d7['height'] ? _0x316b6e : _0x66b298['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x303fe8, _0x316b6e), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x20a7d7['addChild'](this['_colorPane' + 'l']), _0x20a7d7['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']);
        }
        ['close']() {
            _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
        }
        ['removeColo' + 'rBox'](_0x583038 = null) {
            this['close']();
        }
        ['onColorFie' + 'ldKeyDown'](_0x3ee845) {
            0xd == _0x3ee845['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x3ee845['stopPropag' + 'ation']());
        }
        ['onColorInp' + 'utChange'](_0x37b1f7 = null) {
            this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
        }
        ['onColorTil' + 'esClick'](_0x107887) {
            this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
        }
        ['onColorTil' + 'esMouseMov' + 'e'](_0x5eae0f) {
            this['_colorInpu' + 't']['focus'] = !0x1;
            var _0x20db6b = this['getColorBy' + 'Mouse']();
            this['_colorInpu' + 't']['text'] = _0x20db6b, this['drawBlock'](_0x20db6b);
        }
        ['getColorBy' + 'Mouse']() {
            var _0x8b8ff7 = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x498d6b = Math['floor'](_0x8b8ff7['x'] / this['_gridSize']), _0x23e66a = Math['floor'](_0x8b8ff7['y'] / this['_gridSize']);
            return this['_colors'][0x14 * _0x23e66a + _0x498d6b];
        }
        ['drawBlock'](_0x4b004d) {
            var _0x6fdebd = this['_colorBloc' + 'k']['graphics'];
            _0x6fdebd['clear'](!0x0);
            var _0x437684 = _0x4b004d || '#ffffff';
            _0x6fdebd['drawRect'](0x0, 0x0, 0x32, 0x14, _0x437684, this['_borderCol' + 'or']), _0x4b004d || _0x6fdebd['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
        }
        get ['selectedCo' + 'lor']() {
            return this['_selectedC' + 'olor'];
        }
        set ['selectedCo' + 'lor'](_0x148bc4) {
            this['_selectedC' + 'olor'] != _0x148bc4 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x148bc4, this['drawBlock'](_0x148bc4), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event'](_0x8aa1bb['Event']['CHANGE'], _0x8aa1bb['Event']['EMPTY']['setTo'](_0x8aa1bb['Event']['CHANGE'], this, this)));
        }
        get ['skin']() {
            return this['_colorButt' + 'on']['skin'];
        }
        set ['skin'](_0x2699a4) {
            this['_colorButt' + 'on']['once'](_0x8aa1bb['Event']['LOADED'], this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x2699a4;
        }
        ['changeColo' + 'r']() {
            var _0x3ed398 = this['graphics'];
            _0x3ed398['clear'](!0x0);
            var _0x513fb9 = this['_selectedC' + 'olor'] || '#000000';
            _0x3ed398['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x513fb9);
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x38b98a) {
            this['_bgColor'] = _0x38b98a, this['_setPanelC' + 'hanged']();
        }
        get ['borderColo' + 'r']() {
            return this['_borderCol' + 'or'];
        }
        set ['borderColo' + 'r'](_0x4f0c7e) {
            this['_borderCol' + 'or'] = _0x4f0c7e, this['_setPanelC' + 'hanged']();
        }
        get ['inputColor']() {
            return this['_inputColo' + 'r'];
        }
        set ['inputColor'](_0x165c47) {
            this['_inputColo' + 'r'] = _0x165c47, this['_setPanelC' + 'hanged']();
        }
        get ['inputBgCol' + 'or']() {
            return this['_inputBgCo' + 'lor'];
        }
        set ['inputBgCol' + 'or'](_0x557fc0) {
            this['_inputBgCo' + 'lor'] = _0x557fc0, this['_setPanelC' + 'hanged']();
        }
        ['_setPanelC' + 'hanged']() {
            this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x3a9c1f), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Co' + 'lorPicker', _0x3a9c1f), _0x8aa1bb['ClassUtils']['regClass']('Laya.Color' + 'Picker', _0x3a9c1f);
    class _0x2acab7 extends _0xab7961 {
        constructor(_0x396264 = '') {
            super(), this['text'] = _0x396264;
        }
        ['destroy'](_0x572362 = !0x0) {
            super['destroy'](_0x572362), this['_tf'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x8aa1bb['Text']());
        }
        get ['text']() {
            return this['_tf']['text'];
        }
        set ['text'](_0x28474e) {
            this['_tf']['text'] != _0x28474e && (_0x28474e && (_0x28474e = _0x2482a0['adptString'](_0x28474e + '')), this['_tf']['text'] = _0x28474e, this['event'](_0x8aa1bb['Event']['CHANGE']), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
        }
        ['changeText'](_0x173cab) {
            this['_tf']['changeText'](_0x173cab);
        }
        get ['wordWrap']() {
            return this['_tf']['wordWrap'];
        }
        set ['wordWrap'](_0x4f9730) {
            this['_tf']['wordWrap'] = _0x4f9730;
        }
        get ['color']() {
            return this['_tf']['color'];
        }
        set ['color'](_0x47d470) {
            this['_tf']['color'] = _0x47d470;
        }
        get ['font']() {
            return this['_tf']['font'];
        }
        set ['font'](_0x234784) {
            this['_tf']['font'] = _0x234784;
        }
        get ['align']() {
            return this['_tf']['align'];
        }
        set ['align'](_0x15d766) {
            this['_tf']['align'] = _0x15d766;
        }
        get ['valign']() {
            return this['_tf']['valign'];
        }
        set ['valign'](_0x376cb4) {
            this['_tf']['valign'] = _0x376cb4;
        }
        get ['bold']() {
            return this['_tf']['bold'];
        }
        set ['bold'](_0x4ea383) {
            this['_tf']['bold'] = _0x4ea383;
        }
        get ['italic']() {
            return this['_tf']['italic'];
        }
        set ['italic'](_0x2a9cb5) {
            this['_tf']['italic'] = _0x2a9cb5;
        }
        get ['leading']() {
            return this['_tf']['leading'];
        }
        set ['leading'](_0x17fd63) {
            this['_tf']['leading'] = _0x17fd63;
        }
        get ['fontSize']() {
            return this['_tf']['fontSize'];
        }
        set ['fontSize'](_0x15cf78) {
            this['_tf']['fontSize'] = _0x15cf78;
        }
        get ['padding']() {
            return this['_tf']['padding']['join'](',');
        }
        set ['padding'](_0x291d95) {
            this['_tf']['padding'] = _0x2482a0['fillArray'](_0x14f893['labelPaddi' + 'ng'], _0x291d95, Number);
        }
        get ['bgColor']() {
            return this['_tf']['bgColor'];
        }
        set ['bgColor'](_0x3d5056) {
            this['_tf']['bgColor'] = _0x3d5056;
        }
        get ['borderColo' + 'r']() {
            return this['_tf']['borderColo' + 'r'];
        }
        set ['borderColo' + 'r'](_0x57bad9) {
            this['_tf']['borderColo' + 'r'] = _0x57bad9;
        }
        get ['stroke']() {
            return this['_tf']['stroke'];
        }
        set ['stroke'](_0x311b16) {
            this['_tf']['stroke'] = _0x311b16;
        }
        get ['strokeColo' + 'r']() {
            return this['_tf']['strokeColo' + 'r'];
        }
        set ['strokeColo' + 'r'](_0x474c45) {
            this['_tf']['strokeColo' + 'r'] = _0x474c45;
        }
        get ['textField']() {
            return this['_tf'];
        }
        ['measureWid' + 'th']() {
            return this['_tf']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_tf']['height'];
        }
        get ['width']() {
            return this['_width'] || this['_tf']['text'] ? super['width'] : 0x0;
        }
        set ['width'](_0x1cee4d) {
            super['width'] = _0x1cee4d, this['_tf']['width'] = _0x1cee4d;
        }
        get ['height']() {
            return this['_height'] || this['_tf']['text'] ? super['height'] : 0x0;
        }
        set ['height'](_0x49f0fa) {
            super['height'] = _0x49f0fa, this['_tf']['height'] = _0x49f0fa;
        }
        set ['dataSource'](_0x4141ce) {
            this['_dataSourc' + 'e'] = _0x4141ce, 'number' == typeof _0x4141ce || 'string' == typeof _0x4141ce ? this['text'] = _0x4141ce + '' : super['dataSource'] = _0x4141ce;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['overflow']() {
            return this['_tf']['overflow'];
        }
        set ['overflow'](_0x49e919) {
            this['_tf']['overflow'] = _0x49e919;
        }
        get ['underline']() {
            return this['_tf']['underline'];
        }
        set ['underline'](_0x57662c) {
            this['_tf']['underline'] = _0x57662c;
        }
        get ['underlineC' + 'olor']() {
            return this['_tf']['underlineC' + 'olor'];
        }
        set ['underlineC' + 'olor'](_0x274f35) {
            this['_tf']['underlineC' + 'olor'] = _0x274f35;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x2acab7), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.La' + 'bel', _0x2acab7), _0x8aa1bb['ClassUtils']['regClass']('Laya.Label', _0x2acab7);
    class _0x1a0ca2 extends _0xab7961 {
        constructor(_0x53dc3d = null) {
            super(), this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, _0x1a0ca2['label'] || (_0x1a0ca2['label'] = new _0x2acab7()), this['skin'] = _0x53dc3d;
        }
        ['destroy'](_0xed18a0 = !0x0) {
            super['destroy'](_0xed18a0), this['_bg'] && this['_bg']['destroy'](_0xed18a0), this['_bar'] && this['_bar']['destroy'](_0xed18a0), this['_progress'] && this['_progress']['destroy'](_0xed18a0), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x2de762()), this['addChild'](this['_bar'] = new _0x3eb938());
        }
        ['initialize']() {
            this['_bar']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
        }
        ['onBarMouse' + 'Down'](_0x1c2f90) {
            var _0x187b18 = _0x8aa1bb['ILaya'];
            this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x8aa1bb['Point']()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x187b18['stage']['mouseX'], this['_ty'] = _0x187b18['stage']['mouseY'], _0x187b18['stage']['on'](_0x8aa1bb['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x187b18['stage']['once'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['mouseUp']), _0x187b18['stage']['once'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['mouseUp']), this['showValueT' + 'ext']();
        }
        ['showValueT' + 'ext']() {
            if (this['showLabel']) {
                var _0x76b63f = _0x1a0ca2['label'];
                this['addChild'](_0x76b63f), _0x76b63f['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x76b63f['x'] = this['_bar']['_x'] + 0x14, _0x76b63f['y'] = 0.5 * (this['_bar']['height'] - _0x76b63f['height']) + this['_bar']['_y']) : (_0x76b63f['y'] = this['_bar']['_y'] - 0x14, _0x76b63f['x'] = 0.5 * (this['_bar']['width'] - _0x76b63f['width']) + this['_bar']['_x']);
            }
        }
        ['hideValueT' + 'ext']() {
            _0x1a0ca2['label'] && _0x1a0ca2['label']['removeSelf']();
        }
        ['mouseUp'](_0x372b2a) {
            let _0x21c775 = _0x8aa1bb['ILaya']['stage'];
            _0x21c775['off'](_0x8aa1bb['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x21c775['off'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['mouseUp']), _0x21c775['off'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['mouseUp']), this['sendChange' + 'Event'](_0x8aa1bb['Event']['CHANGED']), this['hideValueT' + 'ext']();
        }
        ['mouseMove'](_0xb96586) {
            let _0x5ae730 = _0x8aa1bb['ILaya']['stage'];
            var _0x5eb0b1 = this['_value'];
            if (this['isVertical'] ? (this['_bar']['y'] += (_0x5ae730['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x5ae730['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x5ae730['mouseX'], this['_ty'] = _0x5ae730['mouseY'], 0x0 != this['_tick']) {
                var _0x54891c = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x54891c) / _0x54891c;
            }
            this['_value'] != _0x5eb0b1 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
        }
        ['sendChange' + 'Event'](_0x3a45d0 = _0x8aa1bb['Event']['CHANGE']) {
            this['event'](_0x3a45d0), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x4cc350) {
            this['_skin'] != _0x4cc350 && (this['_skin'] = _0x4cc350, this['_skin'] && !_0x8aa1bb['Loader']['getRes'](this['_skin']) ? _0x8aa1bb['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
            var _0x586b5f = this['_skin']['replace']('.png', '$progress.' + 'png');
            _0x8aa1bb['Loader']['getRes'](_0x586b5f) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x2de762()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x586b5f), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        ['setBarPoin' + 't']() {
            this['isVertical'] ? this['_bar']['x'] = Math['round'](0.5 * (this['_bg']['width'] - this['_bar']['width'])) : this['_bar']['y'] = Math['round'](0.5 * (this['_bg']['height'] - this['_bar']['height']));
        }
        ['measureWid' + 'th']() {
            return Math['max'](this['_bg']['width'], this['_bar']['width']);
        }
        ['measureHei' + 'ght']() {
            return Math['max'](this['_bg']['height'], this['_bar']['height']);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['isVertical'] ? this['_bg']['height'] = this['height'] : this['_bg']['width'] = this['width'], this['setBarPoin' + 't'](), this['changeValu' + 'e']();
        }
        get ['sizeGrid']() {
            return this['_bg']['sizeGrid'];
        }
        set ['sizeGrid'](_0x33fb0e) {
            this['_bg']['sizeGrid'] = _0x33fb0e, this['_bar']['sizeGrid'] = _0x33fb0e, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
        }
        ['setSlider'](_0x2d2655, _0x775de3, _0x2129ef) {
            this['_value'] = -0x1, this['_min'] = _0x2d2655, this['_max'] = _0x775de3 > _0x2d2655 ? _0x775de3 : _0x2d2655, this['value'] = _0x2129ef < _0x2d2655 ? _0x2d2655 : _0x2129ef > _0x775de3 ? _0x775de3 : _0x2129ef;
        }
        get ['tick']() {
            return this['_tick'];
        }
        set ['tick'](_0x169367) {
            this['_tick'] != _0x169367 && (this['_tick'] = _0x169367, this['callLater'](this['changeValu' + 'e']));
        }
        ['changeValu' + 'e']() {
            if (0x0 != this['tick']) {
                var _0x4cf417 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x4cf417) / _0x4cf417;
            }
            this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
            var _0x2910a6 = this['_max'] - this['_min'];
            0x0 === _0x2910a6 && (_0x2910a6 = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x2910a6 * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x2910a6 * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
        }
        get ['max']() {
            return this['_max'];
        }
        set ['max'](_0x5a3eb2) {
            this['_max'] != _0x5a3eb2 && (this['_max'] = _0x5a3eb2, this['callLater'](this['changeValu' + 'e']));
        }
        get ['min']() {
            return this['_min'];
        }
        set ['min'](_0x4c46d6) {
            this['_min'] != _0x4c46d6 && (this['_min'] = _0x4c46d6, this['callLater'](this['changeValu' + 'e']));
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x44ebc7) {
            if (this['_value'] != _0x44ebc7) {
                var _0x437ffd = this['_value'];
                this['_value'] = _0x44ebc7, this['changeValu' + 'e'](), this['_value'] != _0x437ffd && this['sendChange' + 'Event']();
            }
        }
        get ['allowClick' + 'Back']() {
            return this['_allowClic' + 'kBack'];
        }
        set ['allowClick' + 'Back'](_0x567931) {
            this['_allowClic' + 'kBack'] != _0x567931 && (this['_allowClic' + 'kBack'] = _0x567931, _0x567931 ? this['_bg']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']) : this['_bg']['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']));
        }
        ['onBgMouseD' + 'own'](_0x210d62) {
            var _0x1b8256 = this['_bg']['getMousePo' + 'int']();
            this['isVertical'] ? this['value'] = _0x1b8256['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x1b8256['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
        }
        set ['dataSource'](_0x2f913e) {
            this['_dataSourc' + 'e'] = _0x2f913e, 'number' == typeof _0x2f913e || 'string' == typeof _0x2f913e ? this['value'] = Number(_0x2f913e) : super['dataSource'] = _0x2f913e;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bar']() {
            return this['_bar'];
        }
    }
    _0x1a0ca2['label'] = null, _0x8aa1bb['ILaya']['regClass'](_0x1a0ca2), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Sl' + 'ider', _0x1a0ca2), _0x8aa1bb['ClassUtils']['regClass']('Laya.Slide' + 'r', _0x1a0ca2);
    class _0xdff97a extends _0xab7961 {
        constructor(_0x352c7b = null) {
            super(), this['rollRatio'] = 0.97, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['_showButto' + 'ns'] = _0x11d313['showButton' + 's'], this['_scrollSiz' + 'e'] = 0x1, this['_thumbPerc' + 'ent'] = 0x1, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_touchScro' + 'llEnable'] = _0x11d313['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x11d313['mouseWheel' + 'Enable'], this['skin'] = _0x352c7b, this['max'] = 0x1;
        }
        ['destroy'](_0x3bb26d = !0x0) {
            this['stopScroll'](), this['target'] = null, super['destroy'](_0x3bb26d), this['upButton'] && this['upButton']['destroy'](_0x3bb26d), this['downButton'] && this['downButton']['destroy'](_0x3bb26d), this['slider'] && this['slider']['destroy'](_0x3bb26d), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['slider'] = new _0x1a0ca2()), this['addChild'](this['upButton'] = new _0x3eb938()), this['addChild'](this['downButton'] = new _0x3eb938());
        }
        ['initialize']() {
            this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']), this['downButton']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['onSliderCh' + 'ange']() {
            this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
        }
        ['onButtonMo' + 'useDown'](_0x22f639) {
            var _0x321d8e = _0x22f639['currentTar' + 'get'] === this['upButton'];
            this['slide'](_0x321d8e), _0x8aa1bb['ILaya']['timer']['once'](_0x14f893['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x321d8e]), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']);
        }
        ['startLoop'](_0xc9a2d6) {
            _0x8aa1bb['ILaya']['timer']['frameLoop'](0x1, this, this['slide'], [_0xc9a2d6]);
        }
        ['slide'](_0x4c1fdd) {
            _0x4c1fdd ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
        }
        ['onStageMou' + 'seUp'](_0x420237) {
            _0x8aa1bb['ILaya']['timer']['clear'](this, this['startLoop']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['slide']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x5d431b) {
            '\x20' != _0x5d431b && this['_skin'] != _0x5d431b && (this['_skin'] = _0x5d431b, this['_skin'] && !_0x8aa1bb['Loader']['getRes'](this['_skin']) ? _0x8aa1bb['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$up.png'),
                this['_skin']['replace']('.png', '$down.png'),
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        ['changeScro' + 'llBar']() {
            this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['repaint'](), this['resetPosit' + 'ions'](), this['event'](_0x8aa1bb['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
        }
        ['resetPosit' + 'ions']() {
            this['slider']['isVertical'] ? this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0) : this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0), this['resetButto' + 'nPosition']();
        }
        ['resetButto' + 'nPosition']() {
            this['slider']['isVertical'] ? this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'] : this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
        }
        ['measureWid' + 'th']() {
            return this['slider']['isVertical'] ? this['slider']['width'] : 0x64;
        }
        ['measureHei' + 'ght']() {
            return this['slider']['isVertical'] ? 0x64 : this['slider']['height'];
        }
        ['setScroll'](_0xae6d70, _0x10e3af, _0x47b137) {
            this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0xae6d70, _0x10e3af, _0x47b137), this['slider']['bar']['visible'] = _0x10e3af > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
        }
        get ['max']() {
            return this['slider']['max'];
        }
        set ['max'](_0x2d56a1) {
            this['slider']['max'] = _0x2d56a1;
        }
        get ['min']() {
            return this['slider']['min'];
        }
        set ['min'](_0x57b989) {
            this['slider']['min'] = _0x57b989;
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x544e7e) {
            _0x544e7e !== this['_value'] && (this['_value'] = _0x544e7e, this['_isElastic'] || (this['slider']['_value'] != _0x544e7e && (this['slider']['_value'] = _0x544e7e, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event'](_0x8aa1bb['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
        }
        get ['isVertical']() {
            return this['slider']['isVertical'];
        }
        set ['isVertical'](_0x342e82) {
            this['slider']['isVertical'] = _0x342e82;
        }
        get ['sizeGrid']() {
            return this['slider']['sizeGrid'];
        }
        set ['sizeGrid'](_0x1b3111) {
            this['slider']['sizeGrid'] = _0x1b3111;
        }
        get ['scrollSize']() {
            return this['_scrollSiz' + 'e'];
        }
        set ['scrollSize'](_0x358fc9) {
            this['_scrollSiz' + 'e'] = _0x358fc9;
        }
        set ['dataSource'](_0x17e8e7) {
            this['_dataSourc' + 'e'] = _0x17e8e7, 'number' == typeof _0x17e8e7 || 'string' == typeof _0x17e8e7 ? this['value'] = Number(_0x17e8e7) : super['dataSource'] = _0x17e8e7;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['thumbPerce' + 'nt']() {
            return this['_thumbPerc' + 'ent'];
        }
        set ['thumbPerce' + 'nt'](_0x282be1) {
            this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x282be1 = _0x282be1 >= 0x1 ? 0.99 : _0x282be1, this['_thumbPerc' + 'ent'] = _0x282be1, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x282be1, _0x14f893['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x282be1, _0x14f893['scrollBarM' + 'inNum']));
        }
        get ['target']() {
            return this['_target'];
        }
        set ['target'](_0x34ef77) {
            this['_target'] && (this['_target']['off'](_0x8aa1bb['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_target']['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x34ef77, _0x34ef77 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on'](_0x8aa1bb['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown']));
        }
        get ['hide']() {
            return this['_hide'];
        }
        set ['hide'](_0x38797f) {
            this['_hide'] = _0x38797f, this['visible'] = !_0x38797f;
        }
        get ['showButton' + 's']() {
            return this['_showButto' + 'ns'];
        }
        set ['showButton' + 's'](_0x1b34c0) {
            this['_showButto' + 'ns'] = _0x1b34c0, this['callLater'](this['changeScro' + 'llBar']);
        }
        get ['touchScrol' + 'lEnable']() {
            return this['_touchScro' + 'llEnable'];
        }
        set ['touchScrol' + 'lEnable'](_0x569781) {
            this['_touchScro' + 'llEnable'] = _0x569781, this['target'] = this['_target'];
        }
        get ['mouseWheel' + 'Enable']() {
            return this['_mouseWhee' + 'lEnable'];
        }
        set ['mouseWheel' + 'Enable'](_0x3cd665) {
            this['_mouseWhee' + 'lEnable'] = _0x3cd665, this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useWheel'](_0x3e0424) {
            this['value'] -= _0x3e0424['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useDown'](_0x5e31bb) {
            this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x5e31bb) || (this['event'](_0x8aa1bb['Event']['END']), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x8aa1bb['Point']()), this['_lastPoint']['setTo'](_0x8aa1bb['ILaya']['stage']['mouseX'], _0x8aa1bb['ILaya']['stage']['mouseY']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['tweenMove']), _0x8aa1bb['Tween']['clearTween'](this), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['timer']['frameLoop'](0x1, this, this['loop']));
        }
        ['startDragF' + 'orce']() {
            this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x8aa1bb['Point']()), this['_lastPoint']['setTo'](_0x8aa1bb['ILaya']['stage']['mouseX'], _0x8aa1bb['ILaya']['stage']['mouseY']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['tweenMove']), _0x8aa1bb['Tween']['clearTween'](this), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['cancelDrag' + 'Op']() {
            _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['tweenMove']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
        }
        ['checkTrigg' + 'ers'](_0x3ea231 = !0x1) {
            return this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x3ea231) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x3ea231)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
        }
        get ['lastOffset']() {
            return this['_lastOffse' + 't'];
        }
        ['startTween' + 'MoveForce'](_0x2f2097) {
            this['_lastOffse' + 't'] = _0x2f2097, _0x8aa1bb['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
        }
        ['loop']() {
            var _0x2486c8 = _0x8aa1bb['ILaya']['stage']['mouseY'], _0x252016 = _0x8aa1bb['ILaya']['stage']['mouseX'];
            if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x2486c8 - this['_lastPoint']['y'] : _0x252016 - this['_lastPoint']['x'], this['_clickOnly']) {
                if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x8aa1bb['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x8aa1bb['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                    return;
                if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                    return;
                this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event'](_0x8aa1bb['Event']['START']);
            } else {
                if (this['checkTrigg' + 'ers']())
                    return;
            }
            this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x252016, this['_lastPoint']['y'] = _0x2486c8, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
        }
        ['onStageMou' + 'seUp2'](_0x2eca5f) {
            if (_0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x8aa1bb['ILaya']['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                    this['_value'] < this['min'] ? _0x8aa1bb['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x8aa1bb['Ease']['sineOut'], _0x8aa1bb['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x8aa1bb['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x8aa1bb['Ease']['sineOut'], _0x8aa1bb['Handler']['create'](this, this['elasticOve' + 'r']));
                else {
                    if (!this['_offsets'])
                        return;
                    this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x8aa1bb['ILaya']['stage']['mouseY'] - this['_lastPoint']['y'] : _0x8aa1bb['ILaya']['stage']['mouseX'] - this['_lastPoint']['x']);
                    for (var _0x4cee04 = 0x0, _0x33546f = Math['min'](this['_offsets']['length'], 0x3), _0x2211ad = 0x0; _0x2211ad < _0x33546f; _0x2211ad++)
                        _0x4cee04 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x2211ad];
                    if (this['_lastOffse' + 't'] = _0x4cee04 / _0x33546f, (_0x4cee04 = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                        return void this['event'](_0x8aa1bb['Event']['END']);
                    _0x4cee04 > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                    var _0x4bcbe7 = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                    _0x8aa1bb['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x4bcbe7]);
                }
            }
        }
        ['elasticOve' + 'r']() {
            this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x8aa1bb['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event'](_0x8aa1bb['Event']['END']);
        }
        ['tweenMove'](_0x451f1f) {
            var _0x2b2b45;
            if ((this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) && (_0x451f1f > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x2b2b45 = 0.5 * -(this['min'] - _0x451f1f - this['value']), this['_lastOffse' + 't'] > _0x2b2b45 && (this['_lastOffse' + 't'] = _0x2b2b45)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x2b2b45 = 0.5 * -(this['max'] + _0x451f1f - this['value']), this['_lastOffse' + 't'] < _0x2b2b45 && (this['_lastOffse' + 't'] = _0x2b2b45))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1)) {
                if (_0x8aa1bb['ILaya']['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                    return void (this['_value'] < this['min'] ? _0x8aa1bb['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x8aa1bb['Ease']['sineOut'], _0x8aa1bb['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x8aa1bb['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x8aa1bb['Ease']['sineOut'], _0x8aa1bb['Handler']['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                this['event'](_0x8aa1bb['Event']['END']), !this['hide'] && this['autoHide'] && _0x8aa1bb['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4);
            }
        }
        ['stopScroll']() {
            this['onStageMou' + 'seUp2'](null), _0x8aa1bb['ILaya']['timer']['clear'](this, this['tweenMove']), _0x8aa1bb['Tween']['clearTween'](this);
        }
        get ['tick']() {
            return this['slider']['tick'];
        }
        set ['tick'](_0x5bacc8) {
            this['slider']['tick'] = _0x5bacc8;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0xdff97a), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Sc' + 'rollBar', _0xdff97a), _0x8aa1bb['ClassUtils']['regClass']('Laya.Scrol' + 'lBar', _0xdff97a);
    class _0x54b188 extends _0xdff97a {
    }
    _0x8aa1bb['ILaya']['regClass'](_0x54b188), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.VS' + 'crollBar', _0x54b188), _0x8aa1bb['ClassUtils']['regClass']('Laya.VScro' + 'llBar', _0x54b188);
    class _0x19f59f extends _0xdff97a {
        ['initialize']() {
            super['initialize'](), this['slider']['isVertical'] = !0x1;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x19f59f), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.HS' + 'crollBar', _0x19f59f), _0x8aa1bb['ClassUtils']['regClass']('Laya.HScro' + 'llBar', _0x19f59f);
    class _0x26c198 extends _0x3cfeed {
        constructor() {
            super(...arguments), this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_cells'] = [], this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_createdLi' + 'ne'] = 0x0, this['_offset'] = new _0x8aa1bb['Point'](), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0;
        }
        ['destroy'](_0x3ab7b0 = !0x0) {
            this['_content'] && this['_content']['destroy'](_0x3ab7b0), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x3ab7b0), super['destroy'](_0x3ab7b0), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_content'] = new _0x3cfeed());
        }
        set ['cacheAs'](_0x1842f3) {
            super['cacheAs'] = _0x1842f3, this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x1842f3 ? this['_scrollBar']['on'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art']) : this['_scrollBar']['off'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_scrollBar']['once'](_0x8aa1bb['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        get ['content']() {
            return this['_content'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x1a821c) {
            this['_removePre' + 'ScrollBar']();
            var _0x6a9fae = new _0x54b188();
            _0x6a9fae['name'] = 'scrollBar', _0x6a9fae['right'] = 0x0, _0x6a9fae['skin'] = _0x1a821c, _0x6a9fae['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x6a9fae, this['addChild'](_0x6a9fae), this['_setCellCh' + 'anged']();
        }
        ['_removePre' + 'ScrollBar']() {
            var _0x42a3f3 = this['removeChil' + 'dByName']('scrollBar');
            _0x42a3f3 && _0x42a3f3['destroy'](!0x0);
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x244ca5) {
            this['_removePre' + 'ScrollBar']();
            var _0x2e7dda = new _0x19f59f();
            _0x2e7dda['name'] = 'scrollBar', _0x2e7dda['bottom'] = 0x0, _0x2e7dda['skin'] = _0x244ca5, _0x2e7dda['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x2e7dda, this['addChild'](_0x2e7dda), this['_setCellCh' + 'anged']();
        }
        get ['scrollBar']() {
            return this['_scrollBar'];
        }
        set ['scrollBar'](_0x403e00) {
            this['_scrollBar'] != _0x403e00 && (this['_scrollBar'] = _0x403e00, _0x403e00 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'])));
        }
        get ['itemRender']() {
            return this['_itemRende' + 'r'];
        }
        set ['itemRender'](_0x3bf496) {
            if (this['_itemRende' + 'r'] != _0x3bf496) {
                this['_itemRende' + 'r'] = _0x3bf496;
                for (var _0x398223 = this['_cells']['length'] - 0x1; _0x398223 > -0x1; _0x398223--)
                    this['_cells'][_0x398223]['destroy']();
                this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
            }
        }
        set ['width'](_0x3ce7f0) {
            _0x3ce7f0 != this['_width'] && (super['width'] = _0x3ce7f0, this['_setCellCh' + 'anged']());
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x5274ff) {
            _0x5274ff != this['_height'] && (super['height'] = _0x5274ff, this['_setCellCh' + 'anged']());
        }
        get ['height']() {
            return super['height'];
        }
        get ['repeatX']() {
            return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
        }
        set ['repeatX'](_0x35e5fe) {
            this['_repeatX'] = _0x35e5fe, this['_setCellCh' + 'anged']();
        }
        get ['repeatY']() {
            return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
        }
        set ['repeatY'](_0x3a59cb) {
            this['_repeatY'] = _0x3a59cb, this['_setCellCh' + 'anged']();
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x2863e6) {
            this['_spaceX'] = _0x2863e6, this['_setCellCh' + 'anged']();
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x42d70f) {
            this['_spaceY'] = _0x42d70f, this['_setCellCh' + 'anged']();
        }
        ['changeCell' + 's']() {
            if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                var _0x517f42 = this['_getOneCel' + 'l'](), _0x5031d9 = _0x517f42['width'] + this['_spaceX'] || 0x1, _0x1c6408 = _0x517f42['height'] + this['_spaceY'] || 0x1;
                this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x5031d9) : Math['ceil'](this['_width'] / _0x5031d9)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x1c6408) : Math['round'](this['_height'] / _0x1c6408));
                var _0x1b165b = this['_width'] ? this['_width'] : _0x5031d9 * this['repeatX'] - this['_spaceX'], _0x308426 = this['_height'] ? this['_height'] : _0x1c6408 * this['repeatY'] - this['_spaceY'];
                this['_cellSize'] = this['_isVertica' + 'l'] ? _0x1c6408 : _0x5031d9, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x1c6408 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x308426 - this['_spaceY'] : _0x5031d9 * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x1b165b - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0x308426 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x1b165b), this['setContent' + 'Size'](_0x1b165b, _0x308426);
                var _0x39a678 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x41b6a2 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                this['_createIte' + 'ms'](0x0, _0x39a678, _0x41b6a2), this['_createdLi' + 'ne'] = _0x41b6a2, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
            }
        }
        ['_getOneCel' + 'l']() {
            if (0x0 === this['_cells']['length']) {
                var _0x262368 = this['createItem']();
                if (this['_offset']['setTo'](_0x262368['_x'], _0x262368['_y']), this['cacheConte' + 'nt'])
                    return _0x262368;
                this['_cells']['push'](_0x262368);
            }
            return this['_cells'][0x0];
        }
        ['_createIte' + 'ms'](_0x3727fb, _0x5d3cf9, _0x4396b4) {
            var _0x51a41a = this['_content'], _0x5ba435 = this['_getOneCel' + 'l'](), _0x52426d = _0x5ba435['width'] + this['_spaceX'], _0x1a16ae = _0x5ba435['height'] + this['_spaceY'];
            if (this['cacheConte' + 'nt']) {
                var _0x110515 = new _0x3cfeed();
                _0x110515['cacheAs'] = 'normal', _0x110515['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x3727fb) * _0x52426d, (this['_isVertica' + 'l'] ? _0x3727fb : 0x0) * _0x1a16ae), this['_content']['addChild'](_0x110515), _0x51a41a = _0x110515;
            } else {
                for (var _0x513953 = [], _0x1706eb = this['_cells']['length'] - 0x1; _0x1706eb > -0x1; _0x1706eb--) {
                    var _0x48aea9 = this['_cells'][_0x1706eb];
                    _0x48aea9['removeSelf'](), _0x513953['push'](_0x48aea9);
                }
                this['_cells']['length'] = 0x0;
            }
            for (var _0x196122 = _0x3727fb; _0x196122 < _0x4396b4; _0x196122++)
                for (var _0x157a1c = 0x0; _0x157a1c < _0x5d3cf9; _0x157a1c++)
                    (_0x5ba435 = _0x513953 && _0x513953['length'] ? _0x513953['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0x157a1c : _0x196122) * _0x52426d - _0x51a41a['_x'], _0x5ba435['y'] = (this['_isVertica' + 'l'] ? _0x196122 : _0x157a1c) * _0x1a16ae - _0x51a41a['_y'], _0x5ba435['name'] = 'item' + (_0x196122 * _0x5d3cf9 + _0x157a1c), _0x51a41a['addChild'](_0x5ba435), this['addCell'](_0x5ba435);
        }
        ['createItem']() {
            var _0x4e369d = [];
            if ('function' == typeof this['_itemRende' + 'r'])
                var _0x12d3df = new this['_itemRende' + 'r']();
            else
                _0x12d3df = _0x8aa1bb['SceneUtils']['createComp'](this['_itemRende' + 'r'], null, null, _0x4e369d);
            if (0x0 == _0x4e369d['length'] && _0x12d3df['_watchMap']) {
                var _0xd510c6 = _0x12d3df['_watchMap'];
                for (var _0x47005f in _0xd510c6)
                    for (var _0x45106d = _0xd510c6[_0x47005f], _0x5d518e = 0x0; _0x5d518e < _0x45106d['length']; _0x5d518e++) {
                        var _0x21f602 = _0x45106d[_0x5d518e];
                        _0x4e369d['push'](_0x21f602['comp'], _0x21f602['prop'], _0x21f602['value']);
                    }
            }
            return _0x4e369d['length'] && (_0x12d3df['_$bindData'] = _0x4e369d), _0x12d3df;
        }
        ['addCell'](_0x51efaf) {
            _0x51efaf['on'](_0x8aa1bb['Event']['CLICK'], this, this['onCellMous' + 'e']), _0x51efaf['on'](_0x8aa1bb['Event']['RIGHT_CLIC' + 'K'], this, this['onCellMous' + 'e']), _0x51efaf['on'](_0x8aa1bb['Event']['MOUSE_OVER'], this, this['onCellMous' + 'e']), _0x51efaf['on'](_0x8aa1bb['Event']['MOUSE_OUT'], this, this['onCellMous' + 'e']), _0x51efaf['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onCellMous' + 'e']), _0x51efaf['on'](_0x8aa1bb['Event']['MOUSE_UP'], this, this['onCellMous' + 'e']), this['_cells']['push'](_0x51efaf);
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                var _0x3ce3a6;
                this['repeatX'] = 0x1, _0x3ce3a6 = 0x0;
                for (var _0xc581d9 = 0x0; _0xc581d9 < 0x2710; _0xc581d9++) {
                    var _0x27d461 = this['getChildBy' + 'Name']('item' + _0xc581d9);
                    if (!_0x27d461)
                        break;
                    this['addCell'](_0x27d461), _0x3ce3a6++;
                }
                this['repeatY'] = _0x3ce3a6;
            }
        }
        ['setContent' + 'Size'](_0x1d1dd6, _0x1c1080) {
            this['_content']['width'] = _0x1d1dd6, this['_content']['height'] = _0x1c1080, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x8aa1bb['Rectangle']['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x1d1dd6, _0x1c1080), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event'](_0x8aa1bb['Event']['RESIZE']);
        }
        ['onCellMous' + 'e'](_0x1ddd58) {
            _0x1ddd58['type'] === _0x8aa1bb['Event']['MOUSE_DOWN'] && (this['_isMoved'] = !0x1);
            var _0x27e489 = _0x1ddd58['currentTar' + 'get'], _0x23c41d = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x27e489);
            _0x23c41d < 0x0 || (_0x1ddd58['type'] === _0x8aa1bb['Event']['CLICK'] || _0x1ddd58['type'] === _0x8aa1bb['Event']['RIGHT_CLIC' + 'K'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x23c41d : this['changeCell' + 'State'](_0x27e489, !0x0, 0x0) : _0x1ddd58['type'] !== _0x8aa1bb['Event']['MOUSE_OVER'] && _0x1ddd58['type'] !== _0x8aa1bb['Event']['MOUSE_OUT'] || this['_selectedI' + 'ndex'] === _0x23c41d || this['changeCell' + 'State'](_0x27e489, _0x1ddd58['type'] === _0x8aa1bb['Event']['MOUSE_OVER'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                _0x1ddd58,
                _0x23c41d
            ]));
        }
        ['changeCell' + 'State'](_0x477f88, _0x110bb4, _0x181fec) {
            var _0x187673 = _0x477f88['getChildBy' + 'Name']('selectBox');
            _0x187673 && (this['selectEnab' + 'le'] = !0x0, _0x187673['visible'] = _0x110bb4, _0x187673['index'] = _0x181fec);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
        }
        ['onScrollBa' + 'rChange'](_0x1ff150 = null) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            var _0x13544f = this['_scrollBar']['value'], _0x4c1eed = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0xc56276 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x56d925 = Math['floor'](_0x13544f / this['_cellSize']);
            if (this['cacheConte' + 'nt'])
                _0x3cadb9 = _0xc56276 + 0x1, this['_createdLi' + 'ne'] - _0x56d925 < _0x3cadb9 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x4c1eed, this['_createdLi' + 'ne'] + _0x3cadb9), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x4c1eed, 0x0), this['_createdLi' + 'ne'] += _0x3cadb9);
            else {
                var _0x31f2bb = _0x56d925 * _0x4c1eed, _0x3cadb9 = 0x0;
                if (_0x31f2bb > this['_startInde' + 'x']) {
                    _0x3cadb9 = _0x31f2bb - this['_startInde' + 'x'];
                    var _0x2dd782 = !0x0, _0x23394b = this['_startInde' + 'x'] + _0x4c1eed * (_0xc56276 + 0x1);
                    this['_isMoved'] = !0x0;
                } else
                    _0x31f2bb < this['_startInde' + 'x'] && (_0x3cadb9 = this['_startInde' + 'x'] - _0x31f2bb, _0x2dd782 = !0x1, _0x23394b = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                for (var _0x344f87 = 0x0; _0x344f87 < _0x3cadb9; _0x344f87++) {
                    if (_0x2dd782) {
                        var _0x5c2ca4 = this['_cells']['shift']();
                        this['_cells'][this['_cells']['length']] = _0x5c2ca4;
                        var _0x44b11e = _0x23394b + _0x344f87;
                    } else
                        _0x5c2ca4 = this['_cells']['pop'](), this['_cells']['unshift'](_0x5c2ca4), _0x44b11e = _0x23394b - _0x344f87;
                    var _0x5d79be = Math['floor'](_0x44b11e / _0x4c1eed) * this['_cellSize'];
                    this['_isVertica' + 'l'] ? _0x5c2ca4['y'] = _0x5d79be : _0x5c2ca4['x'] = _0x5d79be, this['renderItem'](_0x5c2ca4, _0x44b11e);
                }
                this['_startInde' + 'x'] = _0x31f2bb, this['changeSele' + 'ctStatus']();
            }
            var _0x195e7b = this['_content']['_style']['scrollRect'];
            this['_isVertica' + 'l'] ? (_0x195e7b['y'] = _0x13544f - this['_offset']['y'], _0x195e7b['x'] = -this['_offset']['x']) : (_0x195e7b['y'] = -this['_offset']['y'], _0x195e7b['x'] = _0x13544f - this['_offset']['x']), this['_content']['scrollRect'] = _0x195e7b;
        }
        ['posCell'](_0x13e4a6, _0x45e6b5) {
            if (this['_scrollBar']) {
                var _0x58f2ee = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x3cfe26 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x45e6b5 / _0x58f2ee) * this['_cellSize']);
                this['_isVertica' + 'l'] ? _0x13e4a6['_y'] = _0x3cfe26 : _0x13e4a6['x'] = _0x3cfe26;
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x4fc23c) {
            this['_selectedI' + 'ndex'] != _0x4fc23c && (this['_selectedI' + 'ndex'] = _0x4fc23c, this['changeSele' + 'ctStatus'](), this['event'](_0x8aa1bb['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x4fc23c), this['startIndex'] = this['_startInde' + 'x']);
        }
        ['changeSele' + 'ctStatus']() {
            for (var _0x58fc1c = 0x0, _0x30e260 = this['_cells']['length']; _0x58fc1c < _0x30e260; _0x58fc1c++)
                this['changeCell' + 'State'](this['_cells'][_0x58fc1c], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x58fc1c, 0x1);
        }
        get ['selectedIt' + 'em']() {
            return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedIt' + 'em'](_0x17c350) {
            this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x17c350);
        }
        get ['selection']() {
            return this['getCell'](this['_selectedI' + 'ndex']);
        }
        set ['selection'](_0x1d6b3f) {
            this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x1d6b3f);
        }
        get ['startIndex']() {
            return this['_startInde' + 'x'];
        }
        set ['startIndex'](_0x19be82) {
            this['_startInde' + 'x'] = _0x19be82 > 0x0 ? _0x19be82 : 0x0, this['callLater'](this['renderItem' + 's']);
        }
        ['renderItem' + 's'](_0x598bd4 = 0x0, _0xf962fc = 0x0) {
            for (var _0x29bb0e = _0x598bd4, _0x1fa1f1 = _0xf962fc || this['_cells']['length']; _0x29bb0e < _0x1fa1f1; _0x29bb0e++)
                this['renderItem'](this['_cells'][_0x29bb0e], this['_startInde' + 'x'] + _0x29bb0e);
            this['changeSele' + 'ctStatus']();
        }
        ['renderItem'](_0x5e9e1d, _0x2520d1) {
            this['_array'] && _0x2520d1 >= 0x0 && _0x2520d1 < this['_array']['length'] ? (_0x5e9e1d['visible'] = !0x0, _0x5e9e1d['_$bindData'] ? (_0x5e9e1d['_dataSourc' + 'e'] = this['_array'][_0x2520d1], this['_bindData'](_0x5e9e1d, this['_array'][_0x2520d1])) : _0x5e9e1d['dataSource'] = this['_array'][_0x2520d1], this['cacheConte' + 'nt'] || this['posCell'](_0x5e9e1d, _0x2520d1), this['hasListene' + 'r'](_0x8aa1bb['Event']['RENDER']) && this['event'](_0x8aa1bb['Event']['RENDER'], [
                _0x5e9e1d,
                _0x2520d1
            ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                _0x5e9e1d,
                _0x2520d1
            ])) : (_0x5e9e1d['visible'] = !0x1, _0x5e9e1d['dataSource'] = null);
        }
        ['_bindData'](_0x100c5d, _0x44d83f) {
            for (var _0x6a48d4 = _0x100c5d['_$bindData'], _0x5560b7 = 0x0, _0x2584c4 = _0x6a48d4['length']; _0x5560b7 < _0x2584c4; _0x5560b7++) {
                var _0x2d0fdd = _0x6a48d4[_0x5560b7++], _0x1d468c = _0x6a48d4[_0x5560b7++], _0xd162d8 = _0x6a48d4[_0x5560b7], _0x33eaf5 = _0x2482a0['getBindFun'](_0xd162d8);
                _0x2d0fdd[_0x1d468c] = _0x33eaf5['call'](this, _0x44d83f);
            }
        }
        get ['array']() {
            return this['_array'];
        }
        set ['array'](_0x215e86) {
            this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x215e86 || [], this['_preLen'] = this['_array']['length'];
            var _0x3ca3d5 = this['_array']['length'];
            if (this['totalPage'] = Math['ceil'](_0x3ca3d5 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x3ca3d5 ? this['_selectedI' + 'ndex'] : _0x3ca3d5 - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x98cdd4 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x52914e = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x18c3a8 = Math['ceil'](_0x3ca3d5 / _0x98cdd4);
                (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x18c3a8 >= _0x52914e ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x52914e / _0x18c3a8, this['_scrollBar']['setScroll'](0x0, (_0x18c3a8 - _0x52914e) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
            }
        }
        ['updateArra' + 'y'](_0x51a7b9) {
            var _0x2a0a13;
            if (this['_array'] = _0x51a7b9, this['_array'] && ((_0x2a0a13 = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0x2a0a13), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                var _0x201e1f = _0x51a7b9['length'], _0x5ceffe = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0xa9e8dd = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x132996 = Math['ceil'](_0x201e1f / _0x5ceffe);
                _0x132996 >= _0xa9e8dd && (this['_scrollBar']['thumbPerce' + 'nt'] = _0xa9e8dd / _0x132996, this['_scrollBar']['slider']['_max'] = (_0x132996 - _0xa9e8dd) * this['_cellSize'] + this['_cellOffse' + 't']);
            }
        }
        get ['page']() {
            return this['_page'];
        }
        set ['page'](_0x3d9849) {
            this['_page'] = _0x3d9849, this['_array'] && (this['_page'] = _0x3d9849 > 0x0 ? _0x3d9849 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
        }
        get ['length']() {
            return this['_array'] ? this['_array']['length'] : 0x0;
        }
        set ['dataSource'](_0x3bf6ad) {
            this['_dataSourc' + 'e'] = _0x3bf6ad, 'number' == typeof _0x3bf6ad || 'string' == typeof _0x3bf6ad ? this['selectedIn' + 'dex'] = parseInt(_0x3bf6ad) : _0x3bf6ad instanceof Array ? this['array'] = _0x3bf6ad : super['dataSource'] = _0x3bf6ad;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['cells']() {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x1a33c7) {
            this['_elasticEn' + 'abled'] = _0x1a33c7, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x1a33c7 ? 0xc8 : 0x0);
        }
        ['refresh']() {
            this['array'] = this['_array'];
        }
        ['getItem'](_0x11bee2) {
            return _0x11bee2 > -0x1 && _0x11bee2 < this['_array']['length'] ? this['_array'][_0x11bee2] : null;
        }
        ['changeItem'](_0x35221e, _0x4fa274) {
            _0x35221e > -0x1 && _0x35221e < this['_array']['length'] && (this['_array'][_0x35221e] = _0x4fa274, _0x35221e >= this['_startInde' + 'x'] && _0x35221e < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x35221e), _0x35221e));
        }
        ['setItem'](_0x55f405, _0x26a20e) {
            this['changeItem'](_0x55f405, _0x26a20e);
        }
        ['addItem'](_0x2b26ec) {
            this['_array']['push'](_0x2b26ec), this['array'] = this['_array'];
        }
        ['addItemAt'](_0x236960, _0x514df8) {
            this['_array']['splice'](_0x514df8, 0x0, _0x236960), this['array'] = this['_array'];
        }
        ['deleteItem'](_0x270eb7) {
            this['_array']['splice'](_0x270eb7, 0x1), this['array'] = this['_array'];
        }
        ['getCell'](_0x3b6a05) {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x3b6a05 > -0x1 && this['_cells'] ? this['_cells'][(_0x3b6a05 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
        }
        ['scrollTo'](_0x340445) {
            if (this['_scrollBar']) {
                var _0x5638ea = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                this['_scrollBar']['value'] = Math['floor'](_0x340445 / _0x5638ea) * this['_cellSize'];
            } else
                this['startIndex'] = _0x340445;
        }
        ['tweenTo'](_0x2e050f, _0x316d56 = 0xc8, _0x5c2a7f = null) {
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x47feb0 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                _0x8aa1bb['Tween']['to'](this['_scrollBar'], { 'value': Math['floor'](_0x2e050f / _0x47feb0) * this['_cellSize'] }, _0x316d56, null, _0x5c2a7f, 0x0, !0x0);
            } else
                this['startIndex'] = _0x2e050f, _0x5c2a7f && _0x5c2a7f['run']();
        }
        ['_setCellCh' + 'anged']() {
            this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x26c198), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Li' + 'st', _0x26c198), _0x8aa1bb['ClassUtils']['regClass']('Laya.List', _0x26c198);
    class _0x4b21a5 extends _0xab7961 {
        constructor(_0xfbf6f0 = null, _0x3d259e = null) {
            super(), this['_visibleNu' + 'm'] = 0x6, this['_itemColor' + 's'] = _0x14f893['comboBoxIt' + 'emColors'], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['itemRender'] = null, this['skin'] = _0xfbf6f0, this['labels'] = _0x3d259e;
        }
        ['destroy'](_0x400153 = !0x0) {
            super['destroy'](_0x400153), this['_button'] && this['_button']['destroy'](_0x400153), this['_list'] && this['_list']['destroy'](_0x400153), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_button'] = new _0x3eb938()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['_createLis' + 't']() {
            this['_list'] = new _0x26c198(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
        }
        ['_setListEv' + 'ent'](_0x2b5161) {
            this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x8aa1bb['Handler']['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['onScrollBa' + 'rDown']);
        }
        ['onListDown'](_0x316021) {
            _0x316021['stopPropag' + 'ation']();
        }
        ['onScrollBa' + 'rDown'](_0x4e3bb8) {
            _0x4e3bb8['stopPropag' + 'ation']();
        }
        ['onButtonMo' + 'useDown'](_0x5abf83) {
            this['callLater'](this['switchTo'], [!this['_isOpen']]);
        }
        get ['skin']() {
            return this['_button']['skin'];
        }
        set ['skin'](_0x308bcf) {
            this['_button']['skin'] != _0x308bcf && (this['_button']['skin'] = _0x308bcf, this['_listChang' + 'ed'] = !0x0);
        }
        ['measureWid' + 'th']() {
            return this['_button']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_button']['height'];
        }
        ['changeList']() {
            this['_listChang' + 'ed'] = !0x1;
            var _0x137553 = this['width'] - 0x2, _0xc8187f = this['_itemColor' + 's'][0x2];
            this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                'type': 'Box',
                'child': [{
                        'type': 'Label',
                        'props': {
                            'name': 'label',
                            'x': 0x1,
                            'padding': '3,3,3,3',
                            'width': _0x137553,
                            'height': this['_itemHeigh' + 't'],
                            'fontSize': this['_itemSize'],
                            'color': _0xc8187f
                        }
                    }]
            }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
        }
        ['onlistItem' + 'Mouse'](_0x2e21ee, _0x521464) {
            var _0x27bd67 = _0x2e21ee['type'];
            if (_0x27bd67 === _0x8aa1bb['Event']['MOUSE_OVER'] || _0x27bd67 === _0x8aa1bb['Event']['MOUSE_OUT']) {
                if (this['_isCustomL' + 'ist'])
                    return;
                var _0x2bd4ab = this['_list']['getCell'](_0x521464);
                if (!_0x2bd4ab)
                    return;
                var _0x501b0b = _0x2bd4ab['getChildBy' + 'Name']('label');
                _0x501b0b && (_0x27bd67 === _0x8aa1bb['Event']['ROLL_OVER'] ? (_0x501b0b['bgColor'] = this['_itemColor' + 's'][0x0], _0x501b0b['color'] = this['_itemColor' + 's'][0x1]) : (_0x501b0b['bgColor'] = null, _0x501b0b['color'] = this['_itemColor' + 's'][0x2]));
            } else
                _0x27bd67 === _0x8aa1bb['Event']['CLICK'] && (this['selectedIn' + 'dex'] = _0x521464, this['isOpen'] = !0x1);
        }
        ['switchTo'](_0xcc0f03) {
            this['isOpen'] = _0xcc0f03;
        }
        ['changeOpen']() {
            this['isOpen'] = !this['_isOpen'];
        }
        set ['width'](_0x5c1ad7) {
            super['width'] = _0x5c1ad7, this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x549774) {
            super['height'] = _0x549774, this['_button']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        get ['labels']() {
            return this['_labels']['join'](',');
        }
        set ['labels'](_0x40b82f) {
            this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x40b82f ? this['_labels'] = _0x40b82f['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
        }
        ['changeItem']() {
            if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                var _0x3e9d96 = this['_list']['graphics'];
                _0x3e9d96['clear'](!0x0), _0x3e9d96['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
            }
            var _0x46aaec = this['_list']['array'] || [];
            _0x46aaec['length'] = 0x0;
            for (var _0xcc0d29 = 0x0, _0x40fe0b = this['_labels']['length']; _0xcc0d29 < _0x40fe0b; _0xcc0d29++)
                _0x46aaec['push']({ 'label': this['_labels'][_0xcc0d29] });
            this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x46aaec;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3305b0) {
            this['_selectedI' + 'ndex'] != _0x3305b0 && (this['_selectedI' + 'ndex'] = _0x3305b0, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event'](_0x8aa1bb['Event']['CHANGE'], [_0x8aa1bb['Event']['EMPTY']['setTo'](_0x8aa1bb['Event']['CHANGE'], this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['changeSele' + 'cted']() {
            this['_button']['label'] = this['selectedLa' + 'bel'];
        }
        get ['selectHand' + 'ler']() {
            return this['_selectHan' + 'dler'];
        }
        set ['selectHand' + 'ler'](_0x47f0b2) {
            this['_selectHan' + 'dler'] = _0x47f0b2;
        }
        get ['selectedLa' + 'bel']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedLa' + 'bel'](_0x1c34cf) {
            this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x1c34cf);
        }
        get ['visibleNum']() {
            return this['_visibleNu' + 'm'];
        }
        set ['visibleNum'](_0x38f96b) {
            this['_visibleNu' + 'm'] = _0x38f96b, this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemColors']() {
            return String(this['_itemColor' + 's']);
        }
        set ['itemColors'](_0x1003e8) {
            this['_itemColor' + 's'] = _0x2482a0['fillArray'](this['_itemColor' + 's'], _0x1003e8, String), this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemSize']() {
            return this['_itemSize'];
        }
        set ['itemSize'](_0x338184) {
            this['_itemSize'] = _0x338184, this['_listChang' + 'ed'] = !0x0;
        }
        get ['isOpen']() {
            return this['_isOpen'];
        }
        set ['isOpen'](_0x4d0e6e) {
            if (this['_isOpen'] != _0x4d0e6e) {
                if (this['_isOpen'] = _0x4d0e6e, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                    this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                    var _0x4d887b = this['localToGlo' + 'bal'](_0x8aa1bb['Point']['TEMP']['setTo'](0x0, 0x0)), _0x56c1b2 = _0x4d887b['y'] + this['_button']['height'];
                    _0x56c1b2 = _0x56c1b2 + this['_listHeigh' + 't'] <= _0x8aa1bb['ILaya']['stage']['height'] ? _0x56c1b2 : _0x4d887b['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x4d887b['x'], _0x56c1b2), this['_list']['zOrder'] = 0x3e9, _0x8aa1bb['ILaya']['stage']['addChild'](this['_list']), _0x8aa1bb['ILaya']['stage']['once'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['removeList']), _0x8aa1bb['ILaya']['stage']['on'](_0x8aa1bb['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                } else
                    this['_list'] && this['_list']['removeSelf']();
            }
        }
        ['_onStageMo' + 'useWheel'](_0x209aea) {
            this['_list'] && !this['_list']['contains'](_0x209aea['target']) && this['removeList'](null);
        }
        ['removeList'](_0x1520af) {
            _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['removeList']), _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_scrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x3bc91c) {
            this['_scrollBar' + 'Skin'] = _0x3bc91c;
        }
        get ['sizeGrid']() {
            return this['_button']['sizeGrid'];
        }
        set ['sizeGrid'](_0x2cabed) {
            this['_button']['sizeGrid'] = _0x2cabed;
        }
        get ['scrollBar']() {
            return this['list']['scrollBar'];
        }
        get ['button']() {
            return this['_button'];
        }
        get ['list']() {
            return this['_list'] || this['_createLis' + 't'](), this['_list'];
        }
        set ['list'](_0x36c808) {
            _0x36c808 && (_0x36c808['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x36c808, this['_setListEv' + 'ent'](_0x36c808), this['_itemHeigh' + 't'] = _0x36c808['getCell'](0x0)['height'] + _0x36c808['spaceY']);
        }
        set ['dataSource'](_0x49b67e) {
            this['_dataSourc' + 'e'] = _0x49b67e, 'number' == typeof _0x49b67e || 'string' == typeof _0x49b67e ? this['selectedIn' + 'dex'] = parseInt(_0x49b67e) : _0x49b67e instanceof Array ? this['labels'] = _0x49b67e['join'](',') : super['dataSource'] = _0x49b67e;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['labelColor' + 's']() {
            return this['_button']['labelColor' + 's'];
        }
        set ['labelColor' + 's'](_0x573e81) {
            this['_button']['labelColor' + 's'] != _0x573e81 && (this['_button']['labelColor' + 's'] = _0x573e81);
        }
        get ['labelPaddi' + 'ng']() {
            return this['_button']['text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x3f3fe9) {
            this['_button']['text']['padding'] = _0x2482a0['fillArray'](_0x14f893['labelPaddi' + 'ng'], _0x3f3fe9, Number);
        }
        get ['labelSize']() {
            return this['_button']['text']['fontSize'];
        }
        set ['labelSize'](_0x453e5b) {
            this['_button']['text']['fontSize'] = _0x453e5b;
        }
        get ['labelBold']() {
            return this['_button']['text']['bold'];
        }
        set ['labelBold'](_0x13c070) {
            this['_button']['text']['bold'] = _0x13c070;
        }
        get ['labelFont']() {
            return this['_button']['text']['font'];
        }
        set ['labelFont'](_0xd40b63) {
            this['_button']['text']['font'] = _0xd40b63;
        }
        get ['stateNum']() {
            return this['_button']['stateNum'];
        }
        set ['stateNum'](_0x7209b5) {
            this['_button']['stateNum'] = _0x7209b5;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x4b21a5), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Co' + 'mboBox', _0x4b21a5), _0x8aa1bb['ClassUtils']['regClass']('Laya.Combo' + 'Box', _0x4b21a5);
    class _0x192f97 extends _0xab7961 {
        constructor(_0x1c2f0d = null) {
            super(), this['_value'] = 0.5, this['skin'] = _0x1c2f0d;
        }
        ['destroy'](_0x30d508 = !0x0) {
            super['destroy'](_0x30d508), this['_bg'] && this['_bg']['destroy'](_0x30d508), this['_bar'] && this['_bar']['destroy'](_0x30d508), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x2de762()), this['addChild'](this['_bar'] = new _0x2de762()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x17918f) {
            this['_skin'] != _0x17918f && (this['_skin'] = _0x17918f, this['_skin'] && !_0x8aa1bb['Loader']['getRes'](this['_skin']) ? _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x8aa1bb['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        ['measureWid' + 'th']() {
            return this['_bg']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bg']['height'];
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x5a33fb) {
            this['_value'] != _0x5a33fb && (_0x5a33fb = _0x5a33fb > 0x1 ? 0x1 : _0x5a33fb < 0x0 ? 0x0 : _0x5a33fb, this['_value'] = _0x5a33fb, this['callLater'](this['changeValu' + 'e']), this['event'](_0x8aa1bb['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x5a33fb));
        }
        ['changeValu' + 'e']() {
            if (this['sizeGrid']) {
                var _0x5bc447 = this['sizeGrid']['split'](','), _0x41c3b = Number(_0x5bc447[0x3]), _0x5a2d41 = Number(_0x5bc447[0x1]), _0x48c28a = (this['width'] - _0x41c3b - _0x5a2d41) * this['_value'];
                this['_bar']['width'] = _0x41c3b + _0x5a2d41 + _0x48c28a, this['_bar']['visible'] = this['_bar']['width'] > _0x41c3b + _0x5a2d41;
            } else
                this['_bar']['width'] = this['width'] * this['_value'];
        }
        get ['bar']() {
            return this['_bar'];
        }
        get ['bg']() {
            return this['_bg'];
        }
        get ['sizeGrid']() {
            return this['_bg']['sizeGrid'];
        }
        set ['sizeGrid'](_0x5c4fb1) {
            this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x5c4fb1;
        }
        set ['width'](_0x266d3f) {
            super['width'] = _0x266d3f, this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x387a00) {
            super['height'] = _0x387a00, this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        set ['dataSource'](_0x1b9929) {
            this['_dataSourc' + 'e'] = _0x1b9929, 'number' == typeof _0x1b9929 || 'string' == typeof _0x1b9929 ? this['value'] = Number(_0x1b9929) : super['dataSource'] = _0x1b9929;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x192f97), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Pr' + 'ogressBar', _0x192f97), _0x8aa1bb['ClassUtils']['regClass']('Laya.Progr' + 'essBar', _0x192f97);
    class _0x59def1 extends _0x3eb938 {
        constructor(_0x53066c = null, _0x57e605 = '') {
            super(_0x53066c, _0x57e605), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['destroy'](_0x269991 = !0x0) {
            super['destroy'](_0x269991), this['_value'] = null;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on'](_0x8aa1bb['Event']['CLICK'], this, this['onClick']);
        }
        ['onClick'](_0x833348) {
            this['selected'] = !0x0;
        }
        get ['value']() {
            return null != this['_value'] ? this['_value'] : this['label'];
        }
        set ['value'](_0x76bb90) {
            this['_value'] = _0x76bb90;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x59def1), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ra' + 'dio', _0x59def1), _0x8aa1bb['ClassUtils']['regClass']('Laya.Radio', _0x59def1);
    class _0x51d979 extends _0x3cfeed {
        constructor(_0x1212f3 = null, _0x5a253b = null) {
            super(), this['_selectedI' + 'ndex'] = -0x1, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['skin'] = _0x5a253b, this['labels'] = _0x1212f3;
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x154634 = !0x0) {
            super['destroy'](_0x154634), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
        }
        ['addItem'](_0x10144e, _0x404bd7 = !0x0) {
            var _0x46753a = _0x10144e, _0x88680d = this['_items']['length'];
            if (_0x46753a['name'] = 'item' + _0x88680d, this['addChild'](_0x46753a), this['initItems'](), _0x404bd7 && _0x88680d > 0x0) {
                var _0x4bbe5c = this['_items'][_0x88680d - 0x1];
                'horizontal' == this['_direction'] ? _0x46753a['x'] = _0x4bbe5c['_x'] + _0x4bbe5c['width'] + this['_space'] : _0x46753a['y'] = _0x4bbe5c['_y'] + _0x4bbe5c['height'] + this['_space'];
            } else
                _0x404bd7 && (_0x46753a['x'] = 0x0, _0x46753a['y'] = 0x0);
            return _0x88680d;
        }
        ['delItem'](_0x552efe, _0x139c71 = !0x0) {
            var _0x3f9f9e = this['_items']['indexOf'](_0x552efe);
            if (-0x1 != _0x3f9f9e) {
                var _0x2ae97e, _0x451fa6 = _0x552efe;
                this['removeChil' + 'd'](_0x451fa6);
                for (var _0x495e2c = _0x3f9f9e + 0x1, _0x7fe81b = this['_items']['length']; _0x495e2c < _0x7fe81b; _0x495e2c++) {
                    var _0x651bc0 = this['_items'][_0x495e2c];
                    _0x651bc0['name'] = 'item' + (_0x495e2c - 0x1), _0x139c71 && ('horizontal' == this['_direction'] ? _0x651bc0['x'] -= _0x451fa6['width'] + this['_space'] : _0x651bc0['y'] -= _0x451fa6['height'] + this['_space']);
                }
                if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1)
                    _0x2ae97e = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x2ae97e;
            }
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
            for (var _0x5861a8 = 0x0; _0x5861a8 < 0x2710; _0x5861a8++) {
                var _0x3f85cc = this['getChildBy' + 'Name']('item' + _0x5861a8);
                if (null == _0x3f85cc)
                    break;
                this['_items']['push'](_0x3f85cc), _0x3f85cc['selected'] = _0x5861a8 === this['_selectedI' + 'ndex'], _0x3f85cc['clickHandl' + 'er'] = _0x8aa1bb['Handler']['create'](this, this['itemClick'], [_0x5861a8], !0x1);
            }
        }
        ['itemClick'](_0x2a3a10) {
            this['selectedIn' + 'dex'] = _0x2a3a10;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3fab5a) {
            this['_selectedI' + 'ndex'] != _0x3fab5a && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x3fab5a, this['setSelect'](_0x3fab5a, !0x0), this['event'](_0x8aa1bb['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['setSelect'](_0x20b8cd, _0x399df5) {
            this['_items'] && _0x20b8cd > -0x1 && _0x20b8cd < this['_items']['length'] && (this['_items'][_0x20b8cd]['selected'] = _0x399df5);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x3ee595) {
            this['_skin'] != _0x3ee595 && (this['_skin'] = _0x3ee595, this['_skin'] && !_0x8aa1bb['Loader']['getRes'](this['_skin']) ? _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x8aa1bb['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_setLabelC' + 'hanged'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        get ['labels']() {
            return this['_labels'];
        }
        set ['labels'](_0x328626) {
            if (this['_labels'] != _0x328626) {
                if (this['_labels'] = _0x328626, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                    for (var _0x14fb94 = this['_labels']['split'](','), _0x1af14d = 0x0, _0x1fda0d = _0x14fb94['length']; _0x1af14d < _0x1fda0d; _0x1af14d++) {
                        var _0x4abc73 = this['createItem'](this['_skin'], _0x14fb94[_0x1af14d]);
                        _0x4abc73['name'] = 'item' + _0x1af14d, this['addChild'](_0x4abc73);
                    }
                this['initItems']();
            }
        }
        ['createItem'](_0x3c9bd4, _0x47c66c) {
            return null;
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs'];
        }
        set ['labelColor' + 's'](_0x1eaa49) {
            this['_labelColo' + 'rs'] != _0x1eaa49 && (this['_labelColo' + 'rs'] = _0x1eaa49, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'e']() {
            return this['_labelStro' + 'ke'];
        }
        set ['labelStrok' + 'e'](_0x49004f) {
            this['_labelStro' + 'ke'] != _0x49004f && (this['_labelStro' + 'ke'] = _0x49004f, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'eColor']() {
            return this['_labelStro' + 'keColor'];
        }
        set ['labelStrok' + 'eColor'](_0x25c4cc) {
            this['_labelStro' + 'keColor'] != _0x25c4cc && (this['_labelStro' + 'keColor'] = _0x25c4cc, this['_setLabelC' + 'hanged']());
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'];
        }
        set ['strokeColo' + 'rs'](_0x931d9a) {
            this['_strokeCol' + 'ors'] != _0x931d9a && (this['_strokeCol' + 'ors'] = _0x931d9a, this['_setLabelC' + 'hanged']());
        }
        get ['labelSize']() {
            return this['_labelSize'];
        }
        set ['labelSize'](_0x5b18fc) {
            this['_labelSize'] != _0x5b18fc && (this['_labelSize'] = _0x5b18fc, this['_setLabelC' + 'hanged']());
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x4d8148) {
            this['_stateNum'] != _0x4d8148 && (this['_stateNum'] = _0x4d8148, this['_setLabelC' + 'hanged']());
        }
        get ['labelBold']() {
            return this['_labelBold'];
        }
        set ['labelBold'](_0x44ca5a) {
            this['_labelBold'] != _0x44ca5a && (this['_labelBold'] = _0x44ca5a, this['_setLabelC' + 'hanged']());
        }
        get ['labelFont']() {
            return this['_labelFont'];
        }
        set ['labelFont'](_0x10f376) {
            this['_labelFont'] != _0x10f376 && (this['_labelFont'] = _0x10f376, this['_setLabelC' + 'hanged']());
        }
        get ['labelPaddi' + 'ng']() {
            return this['_labelPadd' + 'ing'];
        }
        set ['labelPaddi' + 'ng'](_0x19384e) {
            this['_labelPadd' + 'ing'] != _0x19384e && (this['_labelPadd' + 'ing'] = _0x19384e, this['_setLabelC' + 'hanged']());
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x27d9b6) {
            this['_direction'] = _0x27d9b6, this['_setLabelC' + 'hanged']();
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x46f0a8) {
            this['_space'] = _0x46f0a8, this['_setLabelC' + 'hanged']();
        }
        ['changeLabe' + 'ls']() {
            if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                for (var _0x120854 = 0x0, _0x13410a = 0x0, _0x48bfc7 = this['_items']['length']; _0x13410a < _0x48bfc7; _0x13410a++) {
                    var _0x39774f = this['_items'][_0x13410a];
                    this['_skin'] && (_0x39774f['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x39774f['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x39774f['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x39774f['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x39774f['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x39774f['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x39774f['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x39774f['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x39774f['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x39774f['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x39774f['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x39774f['y'] = 0x0, _0x39774f['x'] = _0x120854, _0x120854 += _0x39774f['width'] + this['_space']) : (_0x39774f['x'] = 0x0, _0x39774f['y'] = _0x120854, _0x120854 += _0x39774f['height'] + this['_space']);
                }
            this['_sizeChang' + 'ed']();
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
        }
        get ['items']() {
            return this['_items'];
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x4be0f5) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x4be0f5);
        }
        set ['dataSource'](_0x467ef9) {
            this['_dataSourc' + 'e'] = _0x467ef9, 'number' == typeof _0x467ef9 || 'string' == typeof _0x467ef9 ? this['selectedIn' + 'dex'] = parseInt(_0x467ef9) : _0x467ef9 instanceof Array ? this['labels'] = _0x467ef9['join'](',') : super['dataSource'] = _0x467ef9;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        ['_setLabelC' + 'hanged']() {
            this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x51d979), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.UI' + 'Group', _0x51d979), _0x8aa1bb['ClassUtils']['regClass']('Laya.UIGro' + 'up', _0x51d979);
    class _0x1de03e extends _0x51d979 {
        ['createItem'](_0x3146d6, _0x3e6dff) {
            return new _0x59def1(_0x3146d6, _0x3e6dff);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x1de03e), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ra' + 'dioGroup', _0x1de03e), _0x8aa1bb['ClassUtils']['regClass']('Laya.Radio' + 'Group', _0x1de03e);
    class _0x405502 extends _0x51d979 {
        ['createItem'](_0x3f1a13, _0x1e9c48) {
            return new _0x3eb938(_0x3f1a13, _0x1e9c48);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x405502), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ta' + 'b', _0x405502), _0x8aa1bb['ClassUtils']['regClass']('Laya.Tab', _0x405502);
    class _0x57d4f0 extends _0x3cfeed {
        constructor() {
            super(...arguments), this['_setIndexH' + 'andler'] = _0x8aa1bb['Handler']['create'](this, this['setIndex'], null, !0x1);
        }
        ['setItems'](_0x26b884) {
            this['removeChil' + 'dren']();
            for (var _0xb7603a = 0x0, _0x517c96 = 0x0, _0x4299cc = _0x26b884['length']; _0x517c96 < _0x4299cc; _0x517c96++) {
                var _0x4a6469 = _0x26b884[_0x517c96];
                _0x4a6469 && (_0x4a6469['name'] = 'item' + _0xb7603a, this['addChild'](_0x4a6469), _0xb7603a++);
            }
            this['initItems']();
        }
        ['addItem'](_0x11f6fb) {
            _0x11f6fb['name'] = 'item' + this['_items']['length'], this['addChild'](_0x11f6fb), this['initItems']();
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] = [];
            for (var _0x5b54d9 = 0x0; _0x5b54d9 < 0x2710; _0x5b54d9++) {
                var _0xc22d5b = this['getChildBy' + 'Name']('item' + _0x5b54d9);
                if (null == _0xc22d5b)
                    break;
                this['_items']['push'](_0xc22d5b), _0xc22d5b['visible'] = _0x5b54d9 == this['_selectedI' + 'ndex'];
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x26a836) {
            this['_selectedI' + 'ndex'] != _0x26a836 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x26a836, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
        }
        ['setSelect'](_0x2ca7f7, _0x32f260) {
            this['_items'] && _0x2ca7f7 > -0x1 && _0x2ca7f7 < this['_items']['length'] && (this['_items'][_0x2ca7f7]['visible'] = _0x32f260);
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x593042) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x593042);
        }
        get ['setIndexHa' + 'ndler']() {
            return this['_setIndexH' + 'andler'];
        }
        set ['setIndexHa' + 'ndler'](_0x3e7c6f) {
            this['_setIndexH' + 'andler'] = _0x3e7c6f;
        }
        ['setIndex'](_0x1405b8) {
            this['selectedIn' + 'dex'] = _0x1405b8;
        }
        get ['items']() {
            return this['_items'];
        }
        set ['dataSource'](_0x5e511a) {
            if (this['_dataSourc' + 'e'] = _0x5e511a, 'number' == typeof _0x5e511a || 'string' == typeof _0x5e511a)
                this['selectedIn' + 'dex'] = parseInt(_0x5e511a);
            else {
                for (var _0x3ab6bc in this['_dataSourc' + 'e'])
                    _0x3ab6bc in this && (this[_0x3ab6bc] = this['_dataSourc' + 'e'][_0x3ab6bc]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x57d4f0), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Vi' + 'ewStack', _0x57d4f0), _0x8aa1bb['ClassUtils']['regClass']('Laya.ViewS' + 'tack', _0x57d4f0);
    class _0x49c5dc extends _0x2acab7 {
        constructor(_0xc5404d = '') {
            super(), this['text'] = _0xc5404d, this['skin'] = this['skin'];
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x265d1a = !0x0) {
            super['destroy'](_0x265d1a), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x8aa1bb['Input']()), this['_tf']['padding'] = _0x14f893['inputLabel' + 'Padding'], this['_tf']['on'](_0x8aa1bb['Event']['INPUT'], this, this['_onInput']), this['_tf']['on'](_0x8aa1bb['Event']['ENTER'], this, this['_onEnter']), this['_tf']['on'](_0x8aa1bb['Event']['BLUR'], this, this['_onBlur']), this['_tf']['on'](_0x8aa1bb['Event']['FOCUS'], this, this['_onFocus']);
        }
        ['_onFocus']() {
            this['event'](_0x8aa1bb['Event']['FOCUS'], this);
        }
        ['_onBlur']() {
            this['event'](_0x8aa1bb['Event']['BLUR'], this);
        }
        ['_onInput']() {
            this['event'](_0x8aa1bb['Event']['INPUT'], this);
        }
        ['_onEnter']() {
            this['event'](_0x8aa1bb['Event']['ENTER'], this);
        }
        ['initialize']() {
            this['width'] = 0x80, this['height'] = 0x16;
        }
        get ['bg']() {
            return this['_bg'];
        }
        set ['bg'](_0x29d2e4) {
            this['graphics'] = this['_bg'] = _0x29d2e4;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x1438d1) {
            this['_skin'] != _0x1438d1 && (this['_skin'] = _0x1438d1, this['_skin'] && !_0x8aa1bb['Loader']['getRes'](this['_skin']) ? _0x8aa1bb['ILaya']['loader']['load'](this['_skin'], _0x8aa1bb['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x8aa1bb['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x210427()), this['_bg']['source'] = _0x8aa1bb['Loader']['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event'](_0x8aa1bb['Event']['LOADED']);
        }
        get ['sizeGrid']() {
            return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x5b4851) {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x210427()), this['_bg']['sizeGrid'] = _0x2482a0['fillArray'](_0x14f893['defaultSiz' + 'eGrid'], _0x5b4851, Number);
        }
        set ['text'](_0x39c371) {
            this['_tf']['text'] != _0x39c371 && (_0x39c371 += '', this['_tf']['text'] = _0x39c371, this['event'](_0x8aa1bb['Event']['CHANGE']));
        }
        get ['text']() {
            return super['text'];
        }
        set ['width'](_0x282633) {
            super['width'] = _0x282633, this['_bg'] && (this['_bg']['width'] = _0x282633);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x4d50de) {
            super['height'] = _0x4d50de, this['_bg'] && (this['_bg']['height'] = _0x4d50de);
        }
        get ['height']() {
            return super['height'];
        }
        get ['multiline']() {
            return this['_tf']['multiline'];
        }
        set ['multiline'](_0x3e8754) {
            this['_tf']['multiline'] = _0x3e8754;
        }
        set ['editable'](_0x24a226) {
            this['_tf']['editable'] = _0x24a226;
        }
        get ['editable']() {
            return this['_tf']['editable'];
        }
        ['select']() {
            this['_tf']['select']();
        }
        get ['restrict']() {
            return this['_tf']['restrict'];
        }
        set ['restrict'](_0x45de8d) {
            this['_tf']['restrict'] = _0x45de8d;
        }
        get ['prompt']() {
            return this['_tf']['prompt'];
        }
        set ['prompt'](_0x1a268e) {
            this['_tf']['prompt'] = _0x1a268e;
        }
        get ['promptColo' + 'r']() {
            return this['_tf']['promptColo' + 'r'];
        }
        set ['promptColo' + 'r'](_0x403f8e) {
            this['_tf']['promptColo' + 'r'] = _0x403f8e;
        }
        get ['maxChars']() {
            return this['_tf']['maxChars'];
        }
        set ['maxChars'](_0x15067f) {
            this['_tf']['maxChars'] = _0x15067f;
        }
        get ['focus']() {
            return this['_tf']['focus'];
        }
        set ['focus'](_0x4437a7) {
            this['_tf']['focus'] = _0x4437a7;
        }
        get ['type']() {
            return this['_tf']['type'];
        }
        set ['type'](_0x4e34e0) {
            this['_tf']['type'] = _0x4e34e0;
        }
        ['setSelecti' + 'on'](_0x1451ad, _0x224608) {
            this['_tf']['setSelecti' + 'on'](_0x1451ad, _0x224608);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x49c5dc), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Te' + 'xtInput', _0x49c5dc), _0x8aa1bb['ClassUtils']['regClass']('Laya.TextI' + 'nput', _0x49c5dc);
    class _0x2bf654 extends _0x49c5dc {
        constructor(_0x426f1a = '') {
            super(_0x426f1a), this['on'](_0x8aa1bb['Event']['CHANGE'], this, this['_onTextCha' + 'nge']);
        }
        ['_onTextCha' + 'nge']() {
            this['callLater'](this['changeScro' + 'll']);
        }
        ['destroy'](_0x15d2b5 = !0x0) {
            this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, super['destroy'](_0x15d2b5);
        }
        ['initialize']() {
            this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
        }
        set ['width'](_0x42473c) {
            super['width'] = _0x42473c, this['callLater'](this['changeScro' + 'll']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x157447) {
            super['height'] = _0x157447, this['callLater'](this['changeScro' + 'll']);
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x20992a) {
            null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x54b188()), this['_vScrollBa' + 'r']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x20992a;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x2e94d2) {
            null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x19f59f()), this['_hScrollBa' + 'r']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x2e94d2;
        }
        ['onVBarChan' + 'ged'](_0xb6f66e) {
            this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
        }
        ['onHBarChan' + 'ged'](_0x589f04) {
            this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
        }
        get ['vScrollBar']() {
            return this['_vScrollBa' + 'r'];
        }
        get ['hScrollBar']() {
            return this['_hScrollBa' + 'r'];
        }
        get ['maxScrollY']() {
            return this['_tf']['maxScrollY'];
        }
        get ['scrollY']() {
            return this['_tf']['scrollY'];
        }
        get ['maxScrollX']() {
            return this['_tf']['maxScrollX'];
        }
        get ['scrollX']() {
            return this['_tf']['scrollX'];
        }
        ['changeScro' + 'll']() {
            var _0x31c0ef = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x1c3c70 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x1bc1f9 = _0x31c0ef ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x32f290 = _0x1c3c70 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x1817cc = this['_tf']['padding'] || _0x14f893['labelPaddi' + 'ng'];
            this['_tf']['width'] = _0x1bc1f9, this['_tf']['height'] = _0x32f290, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x1817cc[0x2], this['_vScrollBa' + 'r']['y'] = _0x1817cc[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x1c3c70 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x1817cc[0x1] - _0x1817cc[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x32f290 / Math['max'](this['_tf']['textHeight'], _0x32f290), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x31c0ef), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x1817cc[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x1817cc[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x31c0ef ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x1817cc[0x0] - _0x1817cc[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x1bc1f9, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x1bc1f9 / Math['max'](this['_tf']['textWidth'], _0x1bc1f9), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x1c3c70);
        }
        ['scrollTo'](_0x248ec5) {
            this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x248ec5;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x2bf654), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Te' + 'xtArea', _0x2bf654), _0x8aa1bb['ClassUtils']['regClass']('Laya.TextA' + 'rea', _0x2bf654);
    class _0x287f0f extends _0x3cfeed {
        constructor() {
            super(...arguments), this['_oldW'] = 0x0, this['_oldH'] = 0x0;
        }
        ['onEnable']() {
            _0x8aa1bb['ILaya']['stage']['on']('resize', this, this['onResize']), this['onResize']();
        }
        ['onDisable']() {
            _0x8aa1bb['ILaya']['stage']['off']('resize', this, this['onResize']);
        }
        ['onResize']() {
            let _0x3f0480 = _0x8aa1bb['ILaya']['stage'];
            if (this['width'] > 0x0 && this['height'] > 0x0) {
                var _0x3db738 = Math['min'](_0x3f0480['width'] / this['_oldW'], _0x3f0480['height'] / this['_oldH']);
                super['width'] = _0x3f0480['width'], super['height'] = _0x3f0480['height'], this['scale'](_0x3db738, _0x3db738);
            }
        }
        set ['width'](_0x45f24f) {
            super['width'] = _0x45f24f, this['_oldW'] = _0x45f24f;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x4c9367) {
            super['height'] = _0x4c9367, this['_oldH'] = _0x4c9367;
        }
        get ['height']() {
            return super['height'];
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x287f0f), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Sc' + 'aleBox', _0x287f0f), _0x8aa1bb['ClassUtils']['regClass']('Laya.Scale' + 'Box', _0x287f0f);
    class _0x35cd9f extends _0x1a0ca2 {
        constructor(_0xee216 = null) {
            super(_0xee216), this['isVertical'] = !0x1;
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x35cd9f), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.HS' + 'lider', _0x35cd9f), _0x8aa1bb['ClassUtils']['regClass']('Laya.HSlid' + 'er', _0x35cd9f);
    class _0x178e31 extends _0x3cfeed {
        constructor() {
            super(), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['width'] = this['height'] = 0x64;
        }
        ['destroy'](_0x455217 = !0x0) {
            super['destroy'](_0x455217), this['_content'] && this['_content']['destroy'](_0x455217), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x455217), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x455217), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
        }
        ['destroyChi' + 'ldren']() {
            this['_content']['destroyChi' + 'ldren']();
        }
        ['createChil' + 'dren']() {
            super['addChild'](this['_content'] = new _0x3cfeed());
        }
        ['addChild'](_0x4ddfb8) {
            return _0x4ddfb8['on'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x4ddfb8);
        }
        ['onResize']() {
            this['_setScroll' + 'Changed']();
        }
        ['addChildAt'](_0x5723b5, _0x244f7f) {
            return _0x5723b5['on'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x5723b5, _0x244f7f);
        }
        ['removeChil' + 'd'](_0x252d30) {
            return _0x252d30['off'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x252d30);
        }
        ['removeChil' + 'dAt'](_0x5edb04) {
            return this['getChildAt'](_0x5edb04)['off'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x5edb04);
        }
        ['removeChil' + 'dren'](_0x53b3ab = 0x0, _0x41ce49 = 0x7fffffff) {
            return this['_content']['removeChil' + 'dren'](_0x53b3ab, _0x41ce49), this['_setScroll' + 'Changed'](), this;
        }
        ['getChildAt'](_0x49a9f9) {
            return this['_content']['getChildAt'](_0x49a9f9);
        }
        ['getChildBy' + 'Name'](_0x2e91e9) {
            return this['_content']['getChildBy' + 'Name'](_0x2e91e9);
        }
        ['getChildIn' + 'dex'](_0x36e956) {
            return this['_content']['getChildIn' + 'dex'](_0x36e956);
        }
        get ['numChildre' + 'n']() {
            return this['_content']['numChildre' + 'n'];
        }
        ['changeScro' + 'll']() {
            this['_scrollCha' + 'nged'] = !0x1;
            var _0x5958cf = this['contentWid' + 'th'] || 0x1, _0x2391fd = this['contentHei' + 'ght'] || 0x1, _0x5a4bd6 = this['_vScrollBa' + 'r'], _0x494c94 = this['_hScrollBa' + 'r'], _0x248737 = _0x5a4bd6 && _0x2391fd > this['_height'], _0x577263 = _0x494c94 && _0x5958cf > this['_width'], _0x1252a2 = _0x248737 ? this['_width'] - _0x5a4bd6['width'] : this['_width'], _0x1724ab = _0x577263 ? this['_height'] - _0x494c94['height'] : this['_height'];
            _0x5a4bd6 && (_0x5a4bd6['x'] = this['_width'] - _0x5a4bd6['width'], _0x5a4bd6['y'] = 0x0, _0x5a4bd6['height'] = this['_height'] - (_0x577263 ? _0x494c94['height'] : 0x0), _0x5a4bd6['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x5a4bd6['thumbPerce' + 'nt'] = _0x1724ab / _0x2391fd, _0x5a4bd6['setScroll'](0x0, _0x2391fd - _0x1724ab, _0x5a4bd6['value'])), _0x494c94 && (_0x494c94['x'] = 0x0, _0x494c94['y'] = this['_height'] - _0x494c94['height'], _0x494c94['width'] = this['_width'] - (_0x248737 ? _0x5a4bd6['width'] : 0x0), _0x494c94['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x494c94['thumbPerce' + 'nt'] = _0x1252a2 / _0x5958cf, _0x494c94['setScroll'](0x0, _0x5958cf - _0x1252a2, _0x494c94['value']));
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['_width'], this['_height']);
        }
        get ['contentWid' + 'th']() {
            for (var _0x564a1a = 0x0, _0x15d55e = this['_content']['numChildre' + 'n'] - 0x1; _0x15d55e > -0x1; _0x15d55e--) {
                var _0x1cf6c3 = this['_content']['getChildAt'](_0x15d55e);
                _0x564a1a = Math['max'](_0x1cf6c3['_x'] + _0x1cf6c3['width'] * _0x1cf6c3['scaleX'] - _0x1cf6c3['pivotX'], _0x564a1a);
            }
            return _0x564a1a;
        }
        get ['contentHei' + 'ght']() {
            for (var _0x458603 = 0x0, _0x295fbd = this['_content']['numChildre' + 'n'] - 0x1; _0x295fbd > -0x1; _0x295fbd--) {
                var _0x5193f1 = this['_content']['getChildAt'](_0x295fbd);
                _0x458603 = Math['max'](_0x5193f1['_y'] + _0x5193f1['height'] * _0x5193f1['scaleY'] - _0x5193f1['pivotY'], _0x458603);
            }
            return _0x458603;
        }
        ['setContent' + 'Size'](_0x8c7f81, _0x3d2d2a) {
            var _0x436805 = this['_content'];
            _0x436805['width'] = _0x8c7f81, _0x436805['height'] = _0x3d2d2a, _0x436805['_style']['scrollRect'] || (_0x436805['scrollRect'] = _0x8aa1bb['Rectangle']['create']()), _0x436805['_style']['scrollRect']['setTo'](0x0, 0x0, _0x8c7f81, _0x3d2d2a), _0x436805['scrollRect'] = _0x436805['scrollRect'];
        }
        set ['width'](_0x56fd1a) {
            super['width'] = _0x56fd1a, this['_setScroll' + 'Changed']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x301fae) {
            super['height'] = _0x301fae, this['_setScroll' + 'Changed']();
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x201690) {
            null == this['_vScrollBa' + 'r'] && (super['addChild'](this['_vScrollBa' + 'r'] = new _0x54b188()), this['_vScrollBa' + 'r']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x201690;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x1dafa3) {
            null == this['_hScrollBa' + 'r'] && (super['addChild'](this['_hScrollBa' + 'r'] = new _0x19f59f()), this['_hScrollBa' + 'r']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x1dafa3;
        }
        get ['vScrollBar']() {
            return this['_vScrollBa' + 'r'];
        }
        get ['hScrollBar']() {
            return this['_hScrollBa' + 'r'];
        }
        get ['content']() {
            return this['_content'];
        }
        ['onScrollBa' + 'rChange'](_0x432376) {
            var _0xdf6523 = this['_content']['_style']['scrollRect'];
            if (_0xdf6523) {
                var _0xe0978 = Math['round'](_0x432376['value']);
                _0x432376['isVertical'] ? _0xdf6523['y'] = _0xe0978 : _0xdf6523['x'] = _0xe0978, this['_content']['scrollRect'] = _0xdf6523;
            }
        }
        ['scrollTo'](_0x23f6e3 = 0x0, _0x2ea03a = 0x0) {
            this['vScrollBar'] && (this['vScrollBar']['value'] = _0x2ea03a), this['hScrollBar'] && (this['hScrollBar']['value'] = _0x23f6e3);
        }
        ['refresh']() {
            this['changeScro' + 'll']();
        }
        set ['cacheAs'](_0x11532d) {
            super['cacheAs'] = _0x11532d, this['_usedCache'] = null, 'none' !== _0x11532d ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off'](_0x8aa1bb['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x52c055) {
            this['_elasticEn' + 'abled'] = _0x52c055, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x52c055 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x52c055 ? 0xc8 : 0x0);
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once'](_0x8aa1bb['Event']['END'], this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once'](_0x8aa1bb['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        ['_setScroll' + 'Changed']() {
            this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x178e31), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Pa' + 'nel', _0x178e31), _0x8aa1bb['ClassUtils']['regClass']('Laya.Panel', _0x178e31);
    class _0x58ec2e extends _0x1a0ca2 {
    }
    _0x8aa1bb['ILaya']['regClass'](_0x58ec2e), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.VS' + 'lider', _0x58ec2e), _0x8aa1bb['ClassUtils']['regClass']('Laya.VSlid' + 'er', _0x58ec2e);
    class _0x352326 extends _0x3cfeed {
        constructor() {
            super(), this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, this['width'] = this['height'] = 0xc8;
        }
        ['destroy'](_0x1279a3 = !0x0) {
            super['destroy'](_0x1279a3), this['_list'] && this['_list']['destroy'](_0x1279a3), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_list'] = new _0x26c198()), this['_list']['renderHand' + 'ler'] = _0x8aa1bb['Handler']['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on'](_0x8aa1bb['Event']['CHANGE'], this, this['onListChan' + 'ge']);
        }
        ['onListChan' + 'ge'](_0x47c1f8 = null) {
            this['event'](_0x8aa1bb['Event']['CHANGE']);
        }
        get ['keepStatus']() {
            return this['_keepStatu' + 's'];
        }
        set ['keepStatus'](_0x216b99) {
            this['_keepStatu' + 's'] = _0x216b99;
        }
        get ['array']() {
            return this['_list']['array'];
        }
        set ['array'](_0x5de247) {
            this['_keepStatu' + 's'] && this['_list']['array'] && _0x5de247 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x5de247), this['_source'] = _0x5de247, this['_list']['array'] = this['getArray']();
        }
        get ['source']() {
            return this['_source'];
        }
        get ['list']() {
            return this['_list'];
        }
        get ['itemRender']() {
            return this['_list']['itemRender'];
        }
        set ['itemRender'](_0xb09900) {
            this['_list']['itemRender'] = _0xb09900;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_list']['vScrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x21849a) {
            this['_list']['vScrollBar' + 'Skin'] = _0x21849a;
        }
        get ['scrollBar']() {
            return this['_list']['scrollBar'];
        }
        get ['mouseHandl' + 'er']() {
            return this['_list']['mouseHandl' + 'er'];
        }
        set ['mouseHandl' + 'er'](_0x35fe09) {
            this['_list']['mouseHandl' + 'er'] = _0x35fe09;
        }
        get ['renderHand' + 'ler']() {
            return this['_renderHan' + 'dler'];
        }
        set ['renderHand' + 'ler'](_0x207703) {
            this['_renderHan' + 'dler'] = _0x207703;
        }
        get ['spaceLeft']() {
            return this['_spaceLeft'];
        }
        set ['spaceLeft'](_0x45c906) {
            this['_spaceLeft'] = _0x45c906;
        }
        get ['spaceBotto' + 'm']() {
            return this['_list']['spaceY'];
        }
        set ['spaceBotto' + 'm'](_0x42a592) {
            this['_list']['spaceY'] = _0x42a592;
        }
        get ['selectedIn' + 'dex']() {
            return this['_list']['selectedIn' + 'dex'];
        }
        set ['selectedIn' + 'dex'](_0x1a0a9e) {
            this['_list']['selectedIn' + 'dex'] = _0x1a0a9e;
        }
        get ['selectedIt' + 'em']() {
            return this['_list']['selectedIt' + 'em'];
        }
        set ['selectedIt' + 'em'](_0x13daa0) {
            this['_list']['selectedIt' + 'em'] = _0x13daa0;
        }
        set ['width'](_0x492b10) {
            super['width'] = _0x492b10, this['_list']['width'] = _0x492b10;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x5b7548) {
            super['height'] = _0x5b7548, this['_list']['height'] = _0x5b7548;
        }
        get ['height']() {
            return super['height'];
        }
        ['getArray']() {
            var _0x1e70ac = [];
            for (let _0x2c346d in this['_source']) {
                let _0x1a43b1 = this['_source'][_0x2c346d];
                this['getParentO' + 'penStatus'](_0x1a43b1) && (_0x1a43b1['x'] = this['_spaceLeft'] * this['getDepth'](_0x1a43b1), _0x1e70ac['push'](_0x1a43b1));
            }
            return _0x1e70ac;
        }
        ['getDepth'](_0x3a52ac, _0x2559a1 = 0x0) {
            return null == _0x3a52ac['nodeParent'] ? _0x2559a1 : this['getDepth'](_0x3a52ac['nodeParent'], _0x2559a1 + 0x1);
        }
        ['getParentO' + 'penStatus'](_0x53365b) {
            var _0x526995 = _0x53365b['nodeParent'];
            return null == _0x526995 || !!_0x526995['isOpen'] && (null == _0x526995['nodeParent'] || this['getParentO' + 'penStatus'](_0x526995));
        }
        ['renderItem'](_0x80b056, _0x1a5f87) {
            var _0x17cf22 = _0x80b056['dataSource'];
            if (_0x17cf22) {
                _0x80b056['left'] = _0x17cf22['x'];
                var _0x233fbb = _0x80b056['getChildBy' + 'Name']('arrow');
                _0x233fbb && (_0x17cf22['hasChild'] ? (_0x233fbb['visible'] = !0x0, _0x233fbb['index'] = _0x17cf22['isOpen'] ? 0x1 : 0x0, _0x233fbb['tag'] = _0x1a5f87, _0x233fbb['off'](_0x8aa1bb['Event']['CLICK'], this, this['onArrowCli' + 'ck']), _0x233fbb['on'](_0x8aa1bb['Event']['CLICK'], this, this['onArrowCli' + 'ck'])) : _0x233fbb['visible'] = !0x1);
                var _0x318d8d = _0x80b056['getChildBy' + 'Name']('folder');
                _0x318d8d && (0x2 == _0x318d8d['clipY'] ? _0x318d8d['index'] = _0x17cf22['isDirector' + 'y'] ? 0x0 : 0x1 : _0x318d8d['index'] = _0x17cf22['isDirector' + 'y'] ? _0x17cf22['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                    _0x80b056,
                    _0x1a5f87
                ]);
            }
        }
        ['onArrowCli' + 'ck'](_0x1e9766) {
            var _0x110ac9 = _0x1e9766['currentTar' + 'get']['tag'];
            this['_list']['array'][_0x110ac9]['isOpen'] = !this['_list']['array'][_0x110ac9]['isOpen'], this['event'](_0x8aa1bb['Event']['OPEN']), this['_list']['array'] = this['getArray']();
        }
        ['setItemSta' + 'te'](_0x571924, _0x45bc15) {
            this['_list']['array'][_0x571924] && (this['_list']['array'][_0x571924]['isOpen'] = _0x45bc15, this['_list']['array'] = this['getArray']());
        }
        ['fresh']() {
            this['_list']['array'] = this['getArray'](), this['repaint']();
        }
        set ['dataSource'](_0x1cf7a9) {
            this['_dataSourc' + 'e'] = _0x1cf7a9, super['dataSource'] = _0x1cf7a9;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        set ['xml'](_0x478a3f) {
            var _0x4cecf4 = [];
            this['parseXml'](_0x478a3f['childNodes'][0x0], _0x4cecf4, null, !0x0), this['array'] = _0x4cecf4;
        }
        ['parseXml'](_0x4d4c67, _0x24c6e8, _0x35e403, _0x117249) {
            var _0x3729ed, _0x28d4f1 = _0x4d4c67['childNodes'], _0x217c42 = _0x28d4f1['length'];
            if (!_0x117249) {
                _0x3729ed = {};
                var _0x46c564 = _0x4d4c67['attributes'];
                for (let _0x34c88c in _0x46c564) {
                    var _0x3324a3 = _0x46c564[_0x34c88c], _0x53e1c7 = _0x3324a3['nodeName'], _0x2e0c85 = _0x3324a3['nodeValue'];
                    _0x3729ed[_0x53e1c7] = 'true' == _0x2e0c85 || 'false' != _0x2e0c85 && _0x2e0c85;
                }
                _0x3729ed['nodeParent'] = _0x35e403, _0x217c42 > 0x0 && (_0x3729ed['isDirector' + 'y'] = !0x0), _0x3729ed['hasChild'] = _0x217c42 > 0x0, _0x24c6e8['push'](_0x3729ed);
            }
            for (var _0x4366a2 = 0x0; _0x4366a2 < _0x217c42; _0x4366a2++) {
                var _0x536e5b = _0x28d4f1[_0x4366a2];
                this['parseXml'](_0x536e5b, _0x24c6e8, _0x3729ed, !0x1);
            }
        }
        ['parseOpenS' + 'tatus'](_0x699e6, _0x3f2c02) {
            for (var _0x1cdd2d = 0x0, _0x2b18dd = _0x3f2c02['length']; _0x1cdd2d < _0x2b18dd; _0x1cdd2d++) {
                var _0x1edef3 = _0x3f2c02[_0x1cdd2d];
                if (_0x1edef3['isDirector' + 'y'])
                    for (var _0x34982d = 0x0, _0x408c08 = _0x699e6['length']; _0x34982d < _0x408c08; _0x34982d++) {
                        var _0x15d0cf = _0x699e6[_0x34982d];
                        if (_0x15d0cf['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x15d0cf, _0x1edef3) && _0x1edef3['label'] == _0x15d0cf['label']) {
                            _0x1edef3['isOpen'] = _0x15d0cf['isOpen'];
                            break;
                        }
                    }
            }
        }
        ['isSamePare' + 'nt'](_0x7ee721, _0x2267bc) {
            return null == _0x7ee721['nodeParent'] && null == _0x2267bc['nodeParent'] || null != _0x7ee721['nodeParent'] && null != _0x2267bc['nodeParent'] && (_0x7ee721['nodeParent']['label'] == _0x2267bc['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x7ee721['nodeParent'], _0x2267bc['nodeParent']));
        }
        get ['selectedPa' + 'th']() {
            return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
        }
        ['filter'](_0x2be45a) {
            if (Boolean(_0x2be45a)) {
                var _0x3d94d2 = [];
                this['getFilterS' + 'ource'](this['_source'], _0x3d94d2, _0x2be45a), this['_list']['array'] = _0x3d94d2;
            } else
                this['_list']['array'] = this['getArray']();
        }
        ['getFilterS' + 'ource'](_0x34a4e6, _0x4eb00a, _0x4736c5) {
            _0x4736c5 = _0x4736c5['toLocaleLo' + 'werCase']();
            for (let _0x5ed6bf of _0x34a4e6)
                !_0x5ed6bf['isDirector' + 'y'] && String(_0x5ed6bf['label'])['toLowerCas' + 'e']()['indexOf'](_0x4736c5) > -0x1 && (_0x5ed6bf['x'] = 0x0, _0x4eb00a['push'](_0x5ed6bf)), _0x5ed6bf['child'] && _0x5ed6bf['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x5ed6bf['child'], _0x4eb00a, _0x4736c5);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x352326), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Tr' + 'ee', _0x352326), _0x8aa1bb['ClassUtils']['regClass']('Laya.Tree', _0x352326);
    class _0x1e15a0 extends _0x3cfeed {
        constructor() {
            super(...arguments), this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1;
        }
        ['addChild'](_0x3d6e84) {
            return _0x3d6e84['on'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChild'](_0x3d6e84);
        }
        ['onResize'](_0x9baa6a) {
            this['_setItemCh' + 'anged']();
        }
        ['addChildAt'](_0x563915, _0x5c13e5) {
            return _0x563915['on'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChildAt'](_0x563915, _0x5c13e5);
        }
        ['removeChil' + 'dAt'](_0x269687) {
            return this['getChildAt'](_0x269687)['off'](_0x8aa1bb['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['removeChil' + 'dAt'](_0x269687);
        }
        ['refresh']() {
            this['_setItemCh' + 'anged']();
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x28de62) {
            this['_space'] = _0x28de62, this['_setItemCh' + 'anged']();
        }
        get ['align']() {
            return this['_align'];
        }
        set ['align'](_0x1f5cf0) {
            this['_align'] = _0x1f5cf0, this['_setItemCh' + 'anged']();
        }
        ['sortItem'](_0x3fa2f4) {
            _0x3fa2f4 && _0x3fa2f4['sort'](function (_0x515833, _0x5bb110) {
                return _0x515833['y'] - _0x5bb110['y'];
            });
        }
        ['_setItemCh' + 'anged']() {
            this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x1e15a0), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.La' + 'youtBox', _0x1e15a0), _0x8aa1bb['ClassUtils']['regClass']('Laya.Layou' + 'tBox', _0x1e15a0);
    class _0xe87d24 extends _0x1e15a0 {
        ['sortItem'](_0x3fd29c) {
            _0x3fd29c && _0x3fd29c['sort'](function (_0x1983aa, _0x243d94) {
                return _0x1983aa['x'] - _0x243d94['x'];
            });
        }
        set ['height'](_0xe799d5) {
            this['_height'] != _0xe799d5 && (super['height'] = _0xe799d5, this['callLater'](this['changeItem' + 's']));
        }
        get ['height']() {
            return super['height'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x2d4e01 = [], _0xdab668 = 0x0, _0x16a6ee = 0x0, _0x59f3c8 = this['numChildre' + 'n']; _0x16a6ee < _0x59f3c8; _0x16a6ee++) {
                var _0x389345 = this['getChildAt'](_0x16a6ee);
                _0x389345 && (_0x2d4e01['push'](_0x389345), _0xdab668 = this['_height'] ? this['_height'] : Math['max'](_0xdab668, _0x389345['height'] * _0x389345['scaleY']));
            }
            this['sortItem'](_0x2d4e01);
            var _0x36c292 = 0x0;
            for (_0x16a6ee = 0x0, _0x59f3c8 = _0x2d4e01['length']; _0x16a6ee < _0x59f3c8; _0x16a6ee++)
                (_0x389345 = _0x2d4e01[_0x16a6ee])['x'] = _0x36c292, _0x36c292 += _0x389345['width'] * _0x389345['scaleX'] + this['_space'], this['_align'] == _0xe87d24['TOP'] ? _0x389345['y'] = 0x0 : this['_align'] == _0xe87d24['MIDDLE'] ? _0x389345['y'] = 0.5 * (_0xdab668 - _0x389345['height'] * _0x389345['scaleY']) : this['_align'] == _0xe87d24['BOTTOM'] && (_0x389345['y'] = _0xdab668 - _0x389345['height'] * _0x389345['scaleY']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0xe87d24['NONE'] = 'none', _0xe87d24['TOP'] = 'top', _0xe87d24['MIDDLE'] = 'middle', _0xe87d24['BOTTOM'] = 'bottom', _0x8aa1bb['ILaya']['regClass'](_0xe87d24), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.HB' + 'ox', _0xe87d24), _0x8aa1bb['ClassUtils']['regClass']('Laya.HBox', _0xe87d24);
    class _0x26d1e6 extends _0x1e15a0 {
        set ['width'](_0x1130c9) {
            this['_width'] != _0x1130c9 && (super['width'] = _0x1130c9, this['callLater'](this['changeItem' + 's']));
        }
        get ['width']() {
            return super['width'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x5454bc = [], _0x2c29c5 = 0x0, _0x2dd55c = 0x0, _0x593a1f = this['numChildre' + 'n']; _0x2dd55c < _0x593a1f; _0x2dd55c++) {
                var _0x8cf9e3 = this['getChildAt'](_0x2dd55c);
                _0x8cf9e3 && (_0x5454bc['push'](_0x8cf9e3), _0x2c29c5 = this['_width'] ? this['_width'] : Math['max'](_0x2c29c5, _0x8cf9e3['width'] * _0x8cf9e3['scaleX']));
            }
            this['sortItem'](_0x5454bc);
            var _0x4d8b00 = 0x0;
            for (_0x2dd55c = 0x0, _0x593a1f = _0x5454bc['length']; _0x2dd55c < _0x593a1f; _0x2dd55c++)
                (_0x8cf9e3 = _0x5454bc[_0x2dd55c])['y'] = _0x4d8b00, _0x4d8b00 += _0x8cf9e3['height'] * _0x8cf9e3['scaleY'] + this['_space'], this['_align'] == _0x26d1e6['LEFT'] ? _0x8cf9e3['x'] = 0x0 : this['_align'] == _0x26d1e6['CENTER'] ? _0x8cf9e3['x'] = 0.5 * (_0x2c29c5 - _0x8cf9e3['width'] * _0x8cf9e3['scaleX']) : this['_align'] == _0x26d1e6['RIGHT'] && (_0x8cf9e3['x'] = _0x2c29c5 - _0x8cf9e3['width'] * _0x8cf9e3['scaleX']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x26d1e6['NONE'] = 'none', _0x26d1e6['LEFT'] = 'left', _0x26d1e6['CENTER'] = 'center', _0x26d1e6['RIGHT'] = 'right', _0x8aa1bb['ILaya']['regClass'](_0x26d1e6), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.VB' + 'ox', _0x26d1e6), _0x8aa1bb['ClassUtils']['regClass']('Laya.VBox', _0x26d1e6);
    class _0x4a293f extends _0x486c8e {
        constructor(_0x3c63e8 = null, _0x117b81 = null) {
            super(), this['_valueArr'] = '', this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x3c63e8 && (this['skin'] = _0x3c63e8), _0x117b81 && (this['sheet'] = _0x117b81);
        }
        ['createChil' + 'dren']() {
            this['_bitmap'] = new _0x210427(), this['on'](_0x8aa1bb['Event']['LOADED'], this, this['_onClipLoa' + 'ded']);
        }
        ['_onClipLoa' + 'ded']() {
            this['callLater'](this['changeValu' + 'e']);
        }
        get ['sheet']() {
            return this['_sheet'];
        }
        set ['sheet'](_0x3dfeaf) {
            _0x3dfeaf += '', this['_sheet'] = _0x3dfeaf;
            var _0x3ebb52 = _0x3dfeaf['split']('\x20');
            this['_clipX'] = String(_0x3ebb52[0x0])['length'], this['clipY'] = _0x3ebb52['length'], this['_indexMap'] = {};
            for (var _0x35f71b = 0x0; _0x35f71b < this['_clipY']; _0x35f71b++)
                for (var _0x538eef = _0x3ebb52[_0x35f71b]['split'](''), _0x114563 = 0x0, _0x58bedc = _0x538eef['length']; _0x114563 < _0x58bedc; _0x114563++)
                    this['_indexMap'][_0x538eef[_0x114563]] = _0x35f71b * this['_clipX'] + _0x114563;
        }
        get ['value']() {
            return this['_valueArr'] ? this['_valueArr'] : '';
        }
        set ['value'](_0x549611) {
            _0x549611 += '', this['_valueArr'] = _0x549611, this['callLater'](this['changeValu' + 'e']);
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x561679) {
            this['_direction'] = _0x561679, this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x25825d) {
            this['_spaceX'] = _0x25825d, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x279e48) {
            this['_spaceY'] = _0x279e48, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        set ['align'](_0x5b9122) {
            this['_align'] = _0x5b9122, this['callLater'](this['changeValu' + 'e']);
        }
        get ['align']() {
            return this['_align'];
        }
        ['changeValu' + 'e']() {
            var _0x459e43;
            if (this['_sources'] && (this['_valueArr'] && (this['graphics']['clear'](!0x0), _0x459e43 = this['_sources'][0x0]))) {
                var _0x311fc3 = 'horizontal' === this['_direction'];
                _0x311fc3 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x459e43['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x459e43['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x459e43['sourceWidt' + 'h'], this['_wordsH'] = (_0x459e43['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                var _0x254bca = 0x0;
                if (this['_width'])
                    switch (this['_align']) {
                    case 'center':
                        _0x254bca = 0.5 * (this['_width'] - this['_wordsW']);
                        break;
                    case 'right':
                        _0x254bca = this['_width'] - this['_wordsW'];
                        break;
                    default:
                        _0x254bca = 0x0;
                    }
                for (var _0x3a6221 = 0x0, _0x2c54ef = this['_valueArr']['length']; _0x3a6221 < _0x2c54ef; _0x3a6221++) {
                    var _0x1b4771 = this['_indexMap'][this['_valueArr']['charAt'](_0x3a6221)];
                    this['sources'][_0x1b4771] && (_0x459e43 = this['sources'][_0x1b4771], _0x311fc3 ? this['graphics']['drawImage'](_0x459e43, _0x254bca + _0x3a6221 * (_0x459e43['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x459e43['sourceWidt' + 'h'], _0x459e43['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x459e43, 0x0 + _0x254bca, _0x3a6221 * (_0x459e43['sourceHeig' + 'ht'] + this['spaceY']), _0x459e43['sourceWidt' + 'h'], _0x459e43['sourceHeig' + 'ht']));
                }
                this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
            }
        }
        set ['width'](_0x225602) {
            super['width'] = _0x225602, this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x4ff6bb) {
            super['height'] = _0x4ff6bb, this['callLater'](this['changeValu' + 'e']);
        }
        get ['height']() {
            return super['height'];
        }
        ['measureWid' + 'th']() {
            return this['_wordsW'];
        }
        ['measureHei' + 'ght']() {
            return this['_wordsH'];
        }
        ['destroy'](_0x154e1d = !0x0) {
            this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off'](_0x8aa1bb['Event']['LOADED'], this, this['_onClipLoa' + 'ded']), super['destroy'](_0x154e1d);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x4a293f), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Fo' + 'ntClip', _0x4a293f), _0x8aa1bb['ClassUtils']['regClass']('Laya.FontC' + 'lip', _0x4a293f);
    class _0x254bd9 extends _0x8aa1bb['Scene'] {
        constructor() {
            super(!0x1), this['_watchMap'] = {}, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x59cb63['EMPTY'], this['createChil' + 'dren']();
        }
        static ['__init__']() {
            _0x8aa1bb['ILaya']['ClassUtils']['regShortCl' + 'assName']([
                _0x57d4f0,
                _0x3eb938,
                _0x2bf654,
                _0x3a9c1f,
                _0x3cfeed,
                _0x287f0f,
                _0x155af7,
                _0x486c8e,
                _0x4b21a5,
                _0xab7961,
                _0x19f59f,
                _0x35cd9f,
                _0x2de762,
                _0x2acab7,
                _0x26c198,
                _0x178e31,
                _0x192f97,
                _0x59def1,
                _0x1de03e,
                _0xdff97a,
                _0x1a0ca2,
                _0x405502,
                _0x49c5dc,
                _0x254bd9,
                _0x54b188,
                _0x58ec2e,
                _0x352326,
                _0xe87d24,
                _0x26d1e6,
                _0x8aa1bb['Animation'],
                _0x8aa1bb['Text'],
                _0x4a293f
            ]);
        }
        static ['regCompone' + 'nt'](_0x3ddba0, _0x5cfdb1) {
            _0x8aa1bb['ILaya']['ClassUtils']['regClass'](_0x3ddba0, _0x5cfdb1);
        }
        static ['regViewRun' + 'time'](_0x4f2706, _0xb4a17) {
            _0x8aa1bb['ILaya']['ClassUtils']['regClass'](_0x4f2706, _0xb4a17);
        }
        static ['regUI'](_0x1c49dd, _0x1d55cb) {
            _0x8aa1bb['ILaya']['loader']['cacheRes'](_0x1c49dd, _0x1d55cb);
        }
        ['destroy'](_0x24f54b = !0x0) {
            this['_watchMap'] = null, super['destroy'](_0x24f54b);
        }
        ['changeData'](_0x2f9462) {
            var _0x23b796 = this['_watchMap'][_0x2f9462];
            if (_0x23b796)
                for (var _0x14cf13 = 0x0, _0xb9414b = _0x23b796['length']; _0x14cf13 < _0xb9414b; _0x14cf13++) {
                    _0x23b796[_0x14cf13]['exe'](this);
                }
        }
        get ['top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x121393) {
            _0x121393 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x121393);
        }
        get ['bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x5a73d7) {
            _0x5a73d7 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x5a73d7);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x460e9f) {
            _0x460e9f != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x460e9f);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x3495eb) {
            _0x3495eb != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x3495eb);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x485156) {
            _0x485156 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x485156);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0xeb031) {
            _0xeb031 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0xeb031);
        }
        get ['anchorX']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x3d1082) {
            this['_anchorX'] != _0x3d1082 && (this['_anchorX'] = _0x3d1082, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x1bcf6f) {
            this['_anchorY'] != _0x1bcf6f && (this['_anchorY'] = _0x1bcf6f, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x8aa1bb['Event']['RESIZE']);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x59cb63['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x59cb63)), this['_widget'];
        }
        ['loadUI'](_0x30c911) {
            var _0x308905 = _0x254bd9['uiMap'][_0x30c911];
            _0x254bd9['uiMap'] && this['createView'](_0x308905);
        }
        get ['dataSource']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x1813b0) {
            for (var _0x3695f4 in (this['_dataSourc' + 'e'] = _0x1813b0, _0x1813b0)) {
                var _0x503a8f = this['getChildBy' + 'Name'](_0x3695f4);
                _0x503a8f instanceof _0xab7961 ? _0x503a8f['dataSource'] = _0x1813b0[_0x3695f4] : _0x3695f4 in this && !(this[_0x3695f4] instanceof Function) && (this[_0x3695f4] = _0x1813b0[_0x3695f4]);
            }
        }
    }
    _0x254bd9['uiMap'] = {}, _0x8aa1bb['ILaya']['regClass'](_0x254bd9), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Vi' + 'ew', _0x254bd9), _0x8aa1bb['ClassUtils']['regClass']('Laya.View', _0x254bd9);
    class _0x5815ec {
    }
    _0x5815ec['Dialog'] = null;
    class _0x224ac0 extends _0x8aa1bb['Sprite'] {
        constructor() {
            super(), this['maskLayer'] = new _0x8aa1bb['Sprite'](), this['popupEffec' + 't'] = _0xa02198 => {
                _0xa02198['scale'](0x1, 0x1), _0xa02198['_effectTwe' + 'en'] = _0x8aa1bb['Tween']['from'](_0xa02198, {
                    'x': _0x8aa1bb['ILaya']['stage']['width'] / 0x2,
                    'y': _0x8aa1bb['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x8aa1bb['Ease']['backOut'], _0x8aa1bb['Handler']['create'](this, this['doOpen'], [_0xa02198]), 0x0, !0x1, !0x1);
            }, this['closeEffec' + 't'] = _0x1bdc61 => {
                _0x1bdc61['_effectTwe' + 'en'] = _0x8aa1bb['Tween']['to'](_0x1bdc61, {
                    'x': _0x8aa1bb['ILaya']['stage']['width'] / 0x2,
                    'y': _0x8aa1bb['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x8aa1bb['Ease']['strongOut'], _0x8aa1bb['Handler']['create'](this, this['doClose'], [_0x1bdc61]), 0x0, !0x1, !0x1);
            }, this['popupEffec' + 'tHandler'] = new _0x8aa1bb['Handler'](this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x8aa1bb['Handler'](this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x8aa1bb['ILaya']['stage']['addChild'](this), _0x8aa1bb['ILaya']['stage']['on'](_0x8aa1bb['Event']['RESIZE'], this, this['_onResize']), _0x11d313['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
        }
        ['_closeOnSi' + 'de']() {
            var _0x425bf7 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
            _0x425bf7 instanceof _0x5815ec['Dialog'] && _0x425bf7['close']();
        }
        ['setLockVie' + 'w'](_0xeec47f) {
            this['lockLayer'] || (this['lockLayer'] = new _0x3cfeed(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x8aa1bb['ILaya']['stage']['width'], _0x8aa1bb['ILaya']['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0xeec47f && (_0xeec47f['centerX'] = _0xeec47f['centerY'] = 0x0, this['lockLayer']['addChild'](_0xeec47f));
        }
        ['_onResize'](_0x437395 = null) {
            var _0x1aa320 = this['maskLayer']['width'] = _0x8aa1bb['ILaya']['stage']['width'], _0x5a9c7b = this['maskLayer']['height'] = _0x8aa1bb['ILaya']['stage']['height'];
            this['lockLayer'] && this['lockLayer']['size'](_0x1aa320, _0x5a9c7b), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x1aa320, _0x5a9c7b, _0x11d313['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x11d313['popupBgAlp' + 'ha'];
            for (var _0x197004 = this['numChildre' + 'n'] - 0x1; _0x197004 > -0x1; _0x197004--) {
                var _0x4fcfd2 = this['getChildAt'](_0x197004);
                _0x4fcfd2['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x4fcfd2);
            }
        }
        ['_centerDia' + 'log'](_0xea4509) {
            _0xea4509['x'] = Math['round']((_0x8aa1bb['ILaya']['stage']['width'] - _0xea4509['width'] >> 0x1) + _0xea4509['pivotX']), _0xea4509['y'] = Math['round']((_0x8aa1bb['ILaya']['stage']['height'] - _0xea4509['height'] >> 0x1) + _0xea4509['pivotY']);
        }
        ['open'](_0xdb4e65, _0x8916e4 = !0x1, _0x44e73b = !0x1) {
            _0x8916e4 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0xdb4e65), _0xdb4e65['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0xdb4e65), this['addChild'](_0xdb4e65), (_0xdb4e65['isModal'] || this['_getBit'](_0x8aa1bb['Const']['HAS_ZORDER'])) && _0x8aa1bb['ILaya']['timer']['callLater'](this, this['_checkMask']), _0x44e73b && null != _0xdb4e65['popupEffec' + 't'] ? _0xdb4e65['popupEffec' + 't']['runWith'](_0xdb4e65) : this['doOpen'](_0xdb4e65), this['event'](_0x8aa1bb['Event']['OPEN']);
        }
        ['_clearDial' + 'ogEffect'](_0xb6aacc) {
            _0xb6aacc['_effectTwe' + 'en'] && (_0x8aa1bb['Tween']['clear'](_0xb6aacc['_effectTwe' + 'en']), _0xb6aacc['_effectTwe' + 'en'] = null);
        }
        ['doOpen'](_0x568ff6) {
            _0x568ff6['onOpened'](_0x568ff6['_param']);
        }
        ['lock'](_0x3785cc) {
            this['lockLayer'] && (_0x3785cc ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
        }
        ['close'](_0x6e5072) {
            this['_clearDial' + 'ogEffect'](_0x6e5072), _0x6e5072['isShowEffe' + 'ct'] && null != _0x6e5072['closeEffec' + 't'] ? _0x6e5072['closeEffec' + 't']['runWith']([_0x6e5072]) : this['doClose'](_0x6e5072), this['event'](_0x8aa1bb['Event']['CLOSE']);
        }
        ['doClose'](_0x115c26) {
            _0x115c26['removeSelf'](), _0x115c26['isModal'] && this['_checkMask'](), _0x115c26['closeHandl' + 'er'] && _0x115c26['closeHandl' + 'er']['runWith'](_0x115c26['closeType']), _0x115c26['onClosed'](_0x115c26['closeType']), _0x115c26['autoDestro' + 'yAtClosed'] && _0x115c26['destroy']();
        }
        ['closeAll']() {
            this['_closeAll'](), this['event'](_0x8aa1bb['Event']['CLOSE']);
        }
        ['_closeAll']() {
            for (var _0x22aaee = this['numChildre' + 'n'] - 0x1; _0x22aaee > -0x1; _0x22aaee--) {
                var _0x2f542a = this['getChildAt'](_0x22aaee);
                _0x2f542a && null != _0x2f542a['close'] && this['doClose'](_0x2f542a);
            }
        }
        ['getDialogs' + 'ByGroup'](_0x1888c6) {
            for (var _0x5329d3 = [], _0xee583f = this['numChildre' + 'n'] - 0x1; _0xee583f > -0x1; _0xee583f--) {
                var _0x14368d = this['getChildAt'](_0xee583f);
                _0x14368d && _0x14368d['group'] === _0x1888c6 && _0x5329d3['push'](_0x14368d);
            }
            return _0x5329d3;
        }
        ['closeByGro' + 'up'](_0x462040) {
            for (var _0x1b7f77 = [], _0x26ed24 = this['numChildre' + 'n'] - 0x1; _0x26ed24 > -0x1; _0x26ed24--) {
                var _0x33e452 = this['getChildAt'](_0x26ed24);
                _0x33e452 && _0x33e452['group'] === _0x462040 && (_0x33e452['close'](), _0x1b7f77['push'](_0x33e452));
            }
            return _0x1b7f77;
        }
        ['_checkMask']() {
            this['maskLayer']['removeSelf']();
            for (var _0xde2a2d = this['numChildre' + 'n'] - 0x1; _0xde2a2d > -0x1; _0xde2a2d--) {
                var _0x584c1e = this['getChildAt'](_0xde2a2d);
                if (_0x584c1e && _0x584c1e['isModal'])
                    return void this['addChildAt'](this['maskLayer'], _0xde2a2d);
            }
        }
    }
    _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Di' + 'alogManage' + 'r', _0x224ac0), _0x8aa1bb['ClassUtils']['regClass']('Laya.Dialo' + 'gManager', _0x224ac0);
    class _0x1cb6ab extends _0x254bd9 {
        constructor() {
            super(), this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['popupEffec' + 't'] = _0x1cb6ab['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x1cb6ab['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on'](_0x8aa1bb['Event']['CLICK'], this, this['_onClick']);
        }
        static get ['manager']() {
            return _0x1cb6ab['_manager'] = _0x1cb6ab['_manager'] || new _0x224ac0();
        }
        static set ['manager'](_0x13b824) {
            _0x1cb6ab['_manager'] = _0x13b824;
        }
        ['_dealDragA' + 'rea']() {
            var _0x30aa83 = this['getChildBy' + 'Name']('drag');
            _0x30aa83 && (this['dragArea'] = _0x30aa83['_x'] + ',' + _0x30aa83['_y'] + ',' + _0x30aa83['width'] + ',' + _0x30aa83['height'], _0x30aa83['removeSelf']());
        }
        get ['dragArea']() {
            return this['_dragArea'] ? this['_dragArea']['toString']() : null;
        }
        set ['dragArea'](_0x11c51b) {
            if (_0x11c51b) {
                var _0x300c7c = _0x2482a0['fillArray']([
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x11c51b, Number);
                this['_dragArea'] = new _0x8aa1bb['Rectangle'](_0x300c7c[0x0], _0x300c7c[0x1], _0x300c7c[0x2], _0x300c7c[0x3]), this['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
            } else
                this['_dragArea'] = null, this['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
        }
        ['_onMouseDo' + 'wn'](_0x1b80bd) {
            var _0xb61e5e = this['getMousePo' + 'int']();
            this['_dragArea']['contains'](_0xb61e5e['x'], _0xb61e5e['y']) ? this['startDrag']() : this['stopDrag']();
        }
        ['_onClick'](_0x211d2c) {
            var _0x5df801 = _0x211d2c['target'];
            if (_0x5df801)
                switch (_0x5df801['name']) {
                case _0x1cb6ab['CLOSE']:
                case _0x1cb6ab['CANCEL']:
                case _0x1cb6ab['SURE']:
                case _0x1cb6ab['NO']:
                case _0x1cb6ab['OK']:
                case _0x1cb6ab['YES']:
                    return void this['close'](_0x5df801['name']);
                }
        }
        ['open'](_0x4007ed = !0x0, _0x20e10d = null) {
            this['_dealDragA' + 'rea'](), this['_param'] = _0x20e10d, _0x1cb6ab['manager']['open'](this, _0x4007ed, this['isShowEffe' + 'ct']), _0x1cb6ab['manager']['lock'](!0x1);
        }
        ['close'](_0x324809 = null) {
            this['closeType'] = _0x324809, _0x1cb6ab['manager']['close'](this);
        }
        ['destroy'](_0x2c378d = !0x0) {
            this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, super['destroy'](_0x2c378d);
        }
        ['show'](_0x2bf6c1 = !0x1, _0x4fbbd6 = !0x0) {
            this['_open'](!0x1, _0x2bf6c1, _0x4fbbd6);
        }
        ['popup'](_0x2092d0 = !0x1, _0x261e3d = !0x0) {
            this['_open'](!0x0, _0x2092d0, _0x261e3d);
        }
        ['_open'](_0x301afd, _0x5c2344, _0x13865) {
            this['isModal'] = _0x301afd, this['isShowEffe' + 'ct'] = _0x13865, _0x1cb6ab['manager']['lock'](!0x0), this['open'](_0x5c2344);
        }
        get ['isPopup']() {
            return null != this['parent'];
        }
        set ['zOrder'](_0xefec91) {
            super['zOrder'] = _0xefec91, _0x1cb6ab['manager']['_checkMask']();
        }
        get ['zOrder']() {
            return super['zOrder'];
        }
        static ['setLockVie' + 'w'](_0x4c17d9) {
            _0x1cb6ab['manager']['setLockVie' + 'w'](_0x4c17d9);
        }
        static ['lock'](_0x2fb932) {
            _0x1cb6ab['manager']['lock'](_0x2fb932);
        }
        static ['closeAll']() {
            _0x1cb6ab['manager']['closeAll']();
        }
        static ['getDialogs' + 'ByGroup'](_0x36576e) {
            return _0x1cb6ab['manager']['getDialogs' + 'ByGroup'](_0x36576e);
        }
        static ['closeByGro' + 'up'](_0x407a60) {
            return _0x1cb6ab['manager']['closeByGro' + 'up'](_0x407a60);
        }
    }
    _0x1cb6ab['CLOSE'] = 'close', _0x1cb6ab['CANCEL'] = 'cancel', _0x1cb6ab['SURE'] = 'sure', _0x1cb6ab['NO'] = 'no', _0x1cb6ab['YES'] = 'yes', _0x1cb6ab['OK'] = 'ok', _0x5815ec['Dialog'] = _0x1cb6ab, _0x8aa1bb['ILaya']['regClass'](_0x1cb6ab), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Di' + 'alog', _0x1cb6ab), _0x8aa1bb['ClassUtils']['regClass']('Laya.Dialo' + 'g', _0x1cb6ab);
    class _0x15e599 extends _0xab7961 {
        constructor() {
            super(), this['_tipBox'] = new _0xab7961(), this['_tipBox']['addChild'](this['_tipText'] = new _0x8aa1bb['Text']()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x15e599['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x8aa1bb['ILaya']['stage']['on'](_0x2129e9['SHOW_TIP'], this, this['_onStageSh' + 'owTip']), _0x8aa1bb['ILaya']['stage']['on'](_0x2129e9['HIDE_TIP'], this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
        }
        ['_onStageHi' + 'deTip'](_0x3997ab) {
            _0x8aa1bb['ILaya']['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
        }
        ['_onStageSh' + 'owTip'](_0x4df761) {
            _0x8aa1bb['ILaya']['timer']['once'](_0x15e599['tipDelay'], this, this['_showTip'], [_0x4df761], !0x0);
        }
        ['_showTip'](_0x46aedc) {
            if ('string' == typeof _0x46aedc) {
                var _0x406014 = String(_0x46aedc);
                Boolean(_0x406014) && this['_defaultTi' + 'pHandler'](_0x406014);
            } else
                _0x46aedc instanceof _0x8aa1bb['Handler'] ? _0x46aedc['run']() : _0x46aedc instanceof Function && _0x46aedc['apply']();
            _0x8aa1bb['ILaya']['stage']['on'](_0x8aa1bb['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x8aa1bb['ILaya']['stage']['on'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
        }
        ['_onStageMo' + 'useDown'](_0x5a2290) {
            this['closeAll']();
        }
        ['_onStageMo' + 'useMove'](_0x29abb8) {
            this['_showToSta' + 'ge'](this, _0x15e599['offsetX'], _0x15e599['offsetY']);
        }
        ['_showToSta' + 'ge'](_0xea4b23, _0x1d05ee = 0x0, _0x4be56e = 0x0) {
            var _0x3b31f1 = _0xea4b23['getBounds']();
            _0xea4b23['x'] = _0x8aa1bb['ILaya']['stage']['mouseX'] + _0x1d05ee, _0xea4b23['y'] = _0x8aa1bb['ILaya']['stage']['mouseY'] + _0x4be56e, _0xea4b23['_x'] + _0x3b31f1['width'] > _0x8aa1bb['ILaya']['stage']['width'] && (_0xea4b23['x'] -= _0x3b31f1['width'] + _0x1d05ee), _0xea4b23['_y'] + _0x3b31f1['height'] > _0x8aa1bb['ILaya']['stage']['height'] && (_0xea4b23['y'] -= _0x3b31f1['height'] + _0x4be56e);
        }
        ['closeAll']() {
            _0x8aa1bb['ILaya']['timer']['clear'](this, this['_showTip']), _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x8aa1bb['ILaya']['stage']['off'](_0x8aa1bb['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
        }
        ['showDislay' + 'Tip'](_0x11e798) {
            this['addChild'](_0x11e798), this['_showToSta' + 'ge'](this), _0x8aa1bb['ILaya']['stage']['addChild'](this);
        }
        ['_showDefau' + 'ltTip'](_0x5b9d42) {
            this['_tipText']['text'] = _0x5b9d42;
            var _0xd5ab45 = this['_tipBox']['graphics'];
            _0xd5ab45['clear'](!0x0), _0xd5ab45['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x15e599['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x8aa1bb['ILaya']['stage']['addChild'](this);
        }
        get ['defaultTip' + 'Handler']() {
            return this['_defaultTi' + 'pHandler'];
        }
        set ['defaultTip' + 'Handler'](_0x3bc997) {
            this['_defaultTi' + 'pHandler'] = _0x3bc997;
        }
    }
    _0x15e599['offsetX'] = 0xa, _0x15e599['offsetY'] = 0xf, _0x15e599['tipTextCol' + 'or'] = '#ffffff', _0x15e599['tipBackCol' + 'or'] = '#111111', _0x15e599['tipDelay'] = 0xc8, _0x8aa1bb['ILaya']['regClass'](_0x15e599), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.Ti' + 'pManager', _0x15e599), _0x8aa1bb['ClassUtils']['regClass']('Laya.TipMa' + 'nager', _0x15e599);
    class _0x57a26 extends _0xab7961 {
        constructor() {
            super(), this['_width'] = this['_height'] = 0xc8;
            var _0x36ad76 = new _0x8aa1bb['Texture']();
            _0x36ad76['bitmap'] = new _0x8aa1bb['Texture2D'](), this['texture'] = _0x36ad76;
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': _0x8aa1bb['Laya']['stage']['frameRate']
            }), window['wx'] && window['sharedCanv' + 'as'] && _0x8aa1bb['Laya']['timer']['frameLoop'](0x1, this, this['_onLoop']);
        }
        ['onDisable']() {
            this['postMsg']({ 'type': 'undisplay' }), _0x8aa1bb['Laya']['timer']['clear'](this, this['_onLoop']);
        }
        ['_onLoop']() {
            this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
        }
        set ['width'](_0x479a4b) {
            super['width'] = _0x479a4b, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['width'] = _0x479a4b), this['callLater'](this['_postMsg']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x38ae38) {
            super['height'] = _0x38ae38, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['height'] = _0x38ae38), this['callLater'](this['_postMsg']);
        }
        get ['height']() {
            return super['height'];
        }
        set ['x'](_0x42292b) {
            super['x'] = _0x42292b, this['callLater'](this['_postMsg']);
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x1b8ea6) {
            super['y'] = _0x1b8ea6, this['callLater'](this['_postMsg']);
        }
        get ['y']() {
            return super['y'];
        }
        ['_postMsg']() {
            var _0x4e12c8 = new _0x8aa1bb['Matrix']();
            _0x4e12c8['translate'](this['x'], this['y']);
            var _0x34ce1d = _0x8aa1bb['Laya']['stage'];
            _0x4e12c8['scale'](_0x34ce1d['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x34ce1d['transform']['getScaleX'](), _0x34ce1d['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x34ce1d['transform']['getScaleY']()), this['postMsg']({
                'type': 'changeMatr' + 'ix',
                'a': _0x4e12c8['a'],
                'b': _0x4e12c8['b'],
                'c': _0x4e12c8['c'],
                'd': _0x4e12c8['d'],
                'tx': _0x4e12c8['tx'],
                'ty': _0x4e12c8['ty'],
                'w': this['width'],
                'h': this['height']
            });
        }
        ['postMsg'](_0x1b8806) {
            window['wx'] && window['wx']['getOpenDat' + 'aContext'] && window['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x1b8806);
        }
    }
    _0x8aa1bb['ILaya']['regClass'](_0x57a26), _0x8aa1bb['ClassUtils']['regClass']('laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x57a26), _0x8aa1bb['ClassUtils']['regClass']('Laya.WXOpe' + 'nDataViewe' + 'r', _0x57a26), _0xd14b1f['AdvImage'] = _0xcb6023, _0xd14b1f['AutoBitmap'] = _0x210427, _0xd14b1f['Box'] = _0x3cfeed, _0xd14b1f['Button'] = _0x3eb938, _0xd14b1f['CheckBox'] = _0x155af7, _0xd14b1f['Clip'] = _0x486c8e, _0xd14b1f['ColorPicke' + 'r'] = _0x3a9c1f, _0xd14b1f['ComboBox'] = _0x4b21a5, _0xd14b1f['Dialog'] = _0x1cb6ab, _0xd14b1f['DialogMana' + 'ger'] = _0x224ac0, _0xd14b1f['FontClip'] = _0x4a293f, _0xd14b1f['HBox'] = _0xe87d24, _0xd14b1f['HScrollBar'] = _0x19f59f, _0xd14b1f['HSlider'] = _0x35cd9f, _0xd14b1f['IUI'] = _0x5815ec, _0xd14b1f['Image'] = _0x2de762, _0xd14b1f['Label'] = _0x2acab7, _0xd14b1f['LayoutBox'] = _0x1e15a0, _0xd14b1f['List'] = _0x26c198, _0xd14b1f['Panel'] = _0x178e31, _0xd14b1f['ProgressBa' + 'r'] = _0x192f97, _0xd14b1f['Radio'] = _0x59def1, _0xd14b1f['RadioGroup'] = _0x1de03e, _0xd14b1f['ScaleBox'] = _0x287f0f, _0xd14b1f['ScrollBar'] = _0xdff97a, _0xd14b1f['Slider'] = _0x1a0ca2, _0xd14b1f['Styles'] = _0x14f893, _0xd14b1f['Tab'] = _0x405502, _0xd14b1f['TextArea'] = _0x2bf654, _0xd14b1f['TextInput'] = _0x49c5dc, _0xd14b1f['TipManager'] = _0x15e599, _0xd14b1f['Tree'] = _0x352326, _0xd14b1f['UIComponen' + 't'] = _0xab7961, _0xd14b1f['UIConfig'] = _0x11d313, _0xd14b1f['UIEvent'] = _0x2129e9, _0xd14b1f['UIGroup'] = _0x51d979, _0xd14b1f['UILib'] = class {
        static ['__init__']() {
        }
    }, _0xd14b1f['UIUtils'] = _0x2482a0, _0xd14b1f['VBox'] = _0x26d1e6, _0xd14b1f['VScrollBar'] = _0x54b188, _0xd14b1f['VSlider'] = _0x58ec2e, _0xd14b1f['View'] = _0x254bd9, _0xd14b1f['ViewStack'] = _0x57d4f0, _0xd14b1f['WXOpenData' + 'Viewer'] = _0x57a26, _0xd14b1f['Widget'] = _0x59cb63;
}(window['Laya'] = window['Laya'] || {}, Laya);