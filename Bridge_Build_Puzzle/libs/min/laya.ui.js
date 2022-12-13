(function (_0x57cf5b, _0x322c83) {
    'use strict';
    class _0x5f3ab0 {
    }
    _0x5f3ab0['touchScrol' + 'lEnable'] = !![], _0x5f3ab0['mouseWheel' + 'Enable'] = !![], _0x5f3ab0['showButton' + 's'] = !![], _0x5f3ab0['popupBgCol' + 'or'] = '#000000', _0x5f3ab0['popupBgAlp' + 'ha'] = 0.5, _0x5f3ab0['closeDialo' + 'gOnSide'] = !![], window['UIConfig'] = _0x5f3ab0;
    class _0xbb775b {
    }
    _0xbb775b['defaultSiz' + 'eGrid'] = [
        0x4,
        0x4,
        0x4,
        0x4,
        0x0
    ], _0xbb775b['labelColor'] = '#000000', _0xbb775b['labelPaddi' + 'ng'] = [
        0x2,
        0x2,
        0x2,
        0x2
    ], _0xbb775b['inputLabel' + 'Padding'] = [
        0x1,
        0x1,
        0x1,
        0x3
    ], _0xbb775b['buttonStat' + 'eNum'] = 0x3, _0xbb775b['buttonLabe' + 'lColors'] = [
        '#32556b',
        '#32cc6b',
        '#ff0000',
        '#C0C0C0'
    ], _0xbb775b['comboBoxIt' + 'emColors'] = [
        '#5e95b6',
        '#ffffff',
        '#000000',
        '#8fa4b1',
        '#ffffff'
    ], _0xbb775b['scrollBarM' + 'inNum'] = 0xf, _0xbb775b['scrollBarD' + 'elayTime'] = 0x1f4;
    class _0x2d4396 extends _0x322c83['Graphics'] {
        constructor() {
            super(...arguments), this['autoCacheC' + 'md'] = !![], this['_width'] = 0x0, this['_height'] = 0x0, this['uv'] = null;
        }
        ['destroy']() {
            super['destroy'](), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
        }
        get ['sizeGrid']() {
            return this['_sizeGrid'];
        }
        set ['sizeGrid'](_0x28b6c9) {
            this['_sizeGrid'] = _0x28b6c9['map'](_0x51c048 => {
                return +_0x51c048;
            }), this['_setChange' + 'd']();
        }
        get ['width']() {
            if (this['_width'])
                return this['_width'];
            if (this['_source'])
                return this['_source']['sourceWidt' + 'h'];
            return 0x0;
        }
        set ['width'](_0x30de62) {
            this['_width'] != _0x30de62 && (this['_width'] = _0x30de62, this['_setChange' + 'd']());
        }
        get ['height']() {
            if (this['_height'])
                return this['_height'];
            if (this['_source'])
                return this['_source']['sourceHeig' + 'ht'];
            return 0x0;
        }
        set ['height'](_0x3fa05b) {
            this['_height'] != _0x3fa05b && (this['_height'] = _0x3fa05b, this['_setChange' + 'd']());
        }
        get ['source']() {
            return this['_source'];
        }
        set ['source'](_0x572359) {
            _0x572359 ? (this['_source'] = _0x572359, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
        }
        ['_setChange' + 'd']() {
            !this['_isChanged'] && (this['_isChanged'] = !![], _0x322c83['ILaya']['timer']['callLater'](this, this['changeSour' + 'ce']));
        }
        ['changeSour' + 'ce']() {
            this['_isChanged'] = ![];
            var _0xdcb4ff = this['_source'];
            if (!_0xdcb4ff || !_0xdcb4ff['bitmap'])
                return;
            var _0x15259a = this['width'], _0x434728 = this['height'], _0x3b9ce2 = this['_sizeGrid'], _0x98db01 = _0xdcb4ff['sourceWidt' + 'h'], _0x544fd1 = _0xdcb4ff['sourceHeig' + 'ht'];
            if (!_0x3b9ce2 || _0x98db01 === _0x15259a && _0x544fd1 === _0x434728)
                this['clear'](), this['drawTextur' + 'e'](_0xdcb4ff, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x15259a, _0x434728, null, 0x1, null, null, this['uv']);
            else {
                this['clear'](), this['draw9Grid'](_0xdcb4ff, 0x0, 0x0, _0x15259a, _0x434728, _0x3b9ce2), this['_repaint']();
                return;
            }
            this['_repaint']();
        }
        ['drawBitmap'](_0x320325, _0x5e0a6c, _0x193839, _0x31a5a6, _0x33e0c8 = 0x0, _0x42c7a4 = 0x0) {
            if (_0x33e0c8 < 0.1 || _0x42c7a4 < 0.1)
                return;
            if (_0x320325 && (_0x5e0a6c['width'] != _0x33e0c8 || _0x5e0a6c['height'] != _0x42c7a4))
                this['fillTextur' + 'e'](_0x5e0a6c, _0x193839, _0x31a5a6, _0x33e0c8, _0x42c7a4);
            else
                this['drawImage'](_0x5e0a6c, _0x193839, _0x31a5a6, _0x33e0c8, _0x42c7a4);
        }
        static ['getTexture'](_0x37f2a3, _0x4c0467, _0x48945b, _0x316536, _0x351b6d) {
            if (_0x316536 <= 0x0)
                _0x316536 = 0x1;
            if (_0x351b6d <= 0x0)
                _0x351b6d = 0x1;
            _0x37f2a3['$_GID'] || (_0x37f2a3['$_GID'] = _0x322c83['Utils']['getGID']());
            var _0x3b0472;
            return (!_0x3b0472 || !_0x3b0472['_getSource']()) && (_0x3b0472 = _0x322c83['Texture']['createFrom' + 'Texture'](_0x37f2a3, _0x4c0467, _0x48945b, _0x316536, _0x351b6d)), _0x3b0472;
        }
    }
    _0x322c83['ClassUtils']['regClass']('laya.ui.Au' + 'toBitmap', _0x2d4396), _0x322c83['ClassUtils']['regClass']('Laya.AutoB' + 'itmap', _0x2d4396);
    class _0x30a5a2 extends _0x322c83['Component'] {
        constructor() {
            super(...arguments), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
        }
        ['onReset']() {
            this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
        }
        ['_onEnable']() {
            if (this['owner']['parent'])
                this['_onAdded']();
            else
                this['owner']['once'](_0x322c83['Event']['ADDED'], this, this['_onAdded']);
        }
        ['_onDisable']() {
            this['owner']['off'](_0x322c83['Event']['ADDED'], this, this['_onAdded']);
            if (this['owner']['parent'])
                this['owner']['parent']['off'](_0x322c83['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
        }
        ['_onAdded']() {
            if (this['owner']['parent'])
                this['owner']['parent']['on'](_0x322c83['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
            this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
        }
        ['_onParentR' + 'esize']() {
            var _0x3d2bfe = this['resetLayou' + 'tX'](), _0x3081f6 = this['resetLayou' + 'tY']();
            if (_0x3d2bfe || _0x3081f6)
                this['owner']['event'](_0x322c83['Event']['RESIZE']);
        }
        ['resetLayou' + 'tX']() {
            var _0x7222d8 = this['owner'];
            if (!_0x7222d8)
                return ![];
            var _0x32e45e = _0x7222d8['parent'];
            if (_0x32e45e) {
                if (!isNaN(this['centerX']))
                    _0x7222d8['x'] = Math['round']((_0x32e45e['width'] - _0x7222d8['displayWid' + 'th']) * 0.5 + this['centerX'] + _0x7222d8['pivotX'] * _0x7222d8['scaleX']);
                else {
                    if (!isNaN(this['left'])) {
                        _0x7222d8['x'] = Math['round'](this['left'] + _0x7222d8['pivotX'] * _0x7222d8['scaleX']);
                        if (!isNaN(this['right'])) {
                            var _0x5af38d = (_0x32e45e['_width'] - this['left'] - this['right']) / (_0x7222d8['scaleX'] || 0.01);
                            if (_0x5af38d != _0x7222d8['width'])
                                return _0x7222d8['width'] = _0x5af38d, !![];
                        }
                    } else
                        !isNaN(this['right']) && (_0x7222d8['x'] = Math['round'](_0x32e45e['width'] - _0x7222d8['displayWid' + 'th'] - this['right'] + _0x7222d8['pivotX'] * _0x7222d8['scaleX']));
                }
            }
            return ![];
        }
        ['resetLayou' + 'tY']() {
            var _0x497e90 = this['owner'];
            if (!_0x497e90)
                return ![];
            var _0x1ac3a7 = _0x497e90['parent'];
            if (_0x1ac3a7) {
                if (!isNaN(this['centerY']))
                    _0x497e90['y'] = Math['round']((_0x1ac3a7['height'] - _0x497e90['displayHei' + 'ght']) * 0.5 + this['centerY'] + _0x497e90['pivotY'] * _0x497e90['scaleY']);
                else {
                    if (!isNaN(this['top'])) {
                        _0x497e90['y'] = Math['round'](this['top'] + _0x497e90['pivotY'] * _0x497e90['scaleY']);
                        if (!isNaN(this['bottom'])) {
                            var _0x44b3a1 = (_0x1ac3a7['_height'] - this['top'] - this['bottom']) / (_0x497e90['scaleY'] || 0.01);
                            if (_0x44b3a1 != _0x497e90['height'])
                                return _0x497e90['height'] = _0x44b3a1, !![];
                        }
                    } else
                        !isNaN(this['bottom']) && (_0x497e90['y'] = Math['round'](_0x1ac3a7['height'] - _0x497e90['displayHei' + 'ght'] - this['bottom'] + _0x497e90['pivotY'] * _0x497e90['scaleY']));
                }
            }
            return ![];
        }
        ['resetLayou' + 't']() {
            this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
        }
        get ['top']() {
            return this['_top'];
        }
        set ['top'](_0x57ced1) {
            this['_top'] != _0x57ced1 && (this['_top'] = _0x57ced1, this['resetLayou' + 'tY']());
        }
        get ['bottom']() {
            return this['_bottom'];
        }
        set ['bottom'](_0x464afc) {
            this['_bottom'] != _0x464afc && (this['_bottom'] = _0x464afc, this['resetLayou' + 'tY']());
        }
        get ['left']() {
            return this['_left'];
        }
        set ['left'](_0x1265c8) {
            this['_left'] != _0x1265c8 && (this['_left'] = _0x1265c8, this['resetLayou' + 'tX']());
        }
        get ['right']() {
            return this['_right'];
        }
        set ['right'](_0x2ba48c) {
            this['_right'] != _0x2ba48c && (this['_right'] = _0x2ba48c, this['resetLayou' + 'tX']());
        }
        get ['centerX']() {
            return this['_centerX'];
        }
        set ['centerX'](_0x56a5b7) {
            this['_centerX'] != _0x56a5b7 && (this['_centerX'] = _0x56a5b7, this['resetLayou' + 'tX']());
        }
        get ['centerY']() {
            return this['_centerY'];
        }
        set ['centerY'](_0x53c0e9) {
            this['_centerY'] != _0x53c0e9 && (this['_centerY'] = _0x53c0e9, this['resetLayou' + 'tY']());
        }
    }
    _0x30a5a2['EMPTY'] = null, _0x322c83['ILaya']['regClass'](_0x30a5a2), _0x30a5a2['EMPTY'] = new _0x30a5a2(), _0x322c83['ClassUtils']['regClass']('laya.ui.Wi' + 'dget', _0x30a5a2), _0x322c83['ClassUtils']['regClass']('Laya.Widge' + 't', _0x30a5a2);
    class _0x665776 extends _0x322c83['Event'] {
    }
    _0x665776['SHOW_TIP'] = 'showtip', _0x665776['HIDE_TIP'] = 'hidetip', _0x322c83['ILaya']['regClass'](_0x665776), _0x322c83['ClassUtils']['regClass']('laya.ui.UI' + 'Event', _0x665776), _0x322c83['ClassUtils']['regClass']('Laya.UIEve' + 'nt', _0x665776);
    class _0x373b03 {
        static ['fillArray'](_0x40ce46, _0x4bacf2, _0xb6939 = null) {
            var _0x4191d1 = _0x40ce46['concat']();
            if (_0x4bacf2) {
                var _0xf9a504 = _0x4bacf2['split'](',');
                for (var _0x964efc = 0x0, _0xc924bb = Math['min'](_0x4191d1['length'], _0xf9a504['length']); _0x964efc < _0xc924bb; _0x964efc++) {
                    var _0x28d072 = _0xf9a504[_0x964efc];
                    _0x4191d1[_0x964efc] = _0x28d072 == 'true' ? !![] : _0x28d072 == 'false' ? ![] : _0x28d072;
                    if (_0xb6939 != null)
                        _0x4191d1[_0x964efc] = _0xb6939(_0x28d072);
                }
            }
            return _0x4191d1;
        }
        static ['toColor'](_0x35fde2) {
            return _0x322c83['Utils']['toHexColor'](_0x35fde2);
        }
        static ['gray'](_0x2fd8fd, _0x3a572f = !![]) {
            _0x3a572f ? _0x373b03['addFilter'](_0x2fd8fd, _0x373b03['grayFilter']) : _0x373b03['clearFilte' + 'r'](_0x2fd8fd, _0x322c83['ColorFilte' + 'r']);
        }
        static ['addFilter'](_0x498f26, _0x434e4f) {
            var _0x5c5b49 = _0x498f26['filters'] || [];
            _0x5c5b49['push'](_0x434e4f), _0x498f26['filters'] = _0x5c5b49;
        }
        static ['clearFilte' + 'r'](_0x4de3f9, _0x5290f0) {
            var _0x2c6c19 = _0x4de3f9['filters'];
            if (_0x2c6c19 != null && _0x2c6c19['length'] > 0x0) {
                for (var _0x187077 = _0x2c6c19['length'] - 0x1; _0x187077 > -0x1; _0x187077--) {
                    var _0x303f14 = _0x2c6c19[_0x187077];
                    if (_0x303f14 instanceof _0x5290f0)
                        _0x2c6c19['splice'](_0x187077, 0x1);
                }
                _0x4de3f9['filters'] = _0x2c6c19;
            }
        }
        static ['_getReplac' + 'eStr'](_0x49a7ae) {
            return _0x373b03['escapeSequ' + 'ence'][_0x49a7ae];
        }
        static ['adptString'](_0x237e8c) {
            return _0x237e8c['replace'](/\\(\w)/g, _0x373b03['_getReplac' + 'eStr']);
        }
        static ['getBindFun'](_0xb45ded) {
            !_0x373b03['_funMap'] && (_0x373b03['_funMap'] = new _0x322c83['WeakObject']());
            var _0x14e603 = _0x373b03['_funMap']['get'](_0xb45ded);
            if (_0x14e603 == null) {
                var _0x1b74f8 = '\x22' + _0xb45ded + '\x22';
                _0x1b74f8 = _0x1b74f8['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22');
                var _0x1ce7a7 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + _0x1b74f8 + ('\x0a}catch(e)' + '{}}})');
                _0x14e603 = window['Laya']['_runScript'](_0x1ce7a7), _0x373b03['_funMap']['set'](_0xb45ded, _0x14e603);
            }
            return _0x14e603;
        }
    }
    _0x373b03['grayFilter'] = new _0x322c83['ColorFilte' + 'r']([
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
    ]), _0x373b03['escapeSequ' + 'ence'] = {
        '\x5cn': '\x0a',
        '\x5ct': '\x09'
    }, _0x373b03['_funMap'] = null, _0x322c83['ClassUtils']['regClass']('laya.ui.UI' + 'Utils', _0x373b03), _0x322c83['ClassUtils']['regClass']('Laya.UIUti' + 'ls', _0x373b03);
    class _0x283d79 extends _0x322c83['Sprite'] {
        constructor(_0x224630 = !![]) {
            super(), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x30a5a2['EMPTY'], _0x224630 && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0x9f250d = !![]) {
            super['destroy'](_0x9f250d), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
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
            if (this['_width'])
                return this['_width'];
            return this['measureWid' + 'th']();
        }
        ['measureWid' + 'th']() {
            var _0x1a041b = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x397a32 = this['numChildre' + 'n'] - 0x1; _0x397a32 > -0x1; _0x397a32--) {
                var _0x391664 = this['getChildAt'](_0x397a32);
                _0x391664['_visible'] && (_0x1a041b = Math['max'](_0x391664['_x'] + _0x391664['width'] * _0x391664['scaleX'], _0x1a041b));
            }
            return _0x1a041b;
        }
        ['commitMeas' + 'ure']() {
        }
        get ['height']() {
            return this['get_height']();
        }
        ['get_height']() {
            if (this['_height'])
                return this['_height'];
            return this['measureHei' + 'ght']();
        }
        ['measureHei' + 'ght']() {
            var _0x37d8ff = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x320830 = this['numChildre' + 'n'] - 0x1; _0x320830 > -0x1; _0x320830--) {
                var _0x29859e = this['getChildAt'](_0x320830);
                _0x29859e['_visible'] && (_0x37d8ff = Math['max'](_0x29859e['_y'] + _0x29859e['height'] * _0x29859e['scaleY'], _0x37d8ff));
            }
            return _0x37d8ff;
        }
        get ['dataSource']() {
            return this['get_dataSo' + 'urce']();
        }
        ['get_dataSo' + 'urce']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x4f0b01) {
            this['set_dataSo' + 'urce'](_0x4f0b01);
        }
        ['set_dataSo' + 'urce'](_0x5ec34f) {
            this['_dataSourc' + 'e'] = _0x5ec34f;
            for (var _0x31958d in this['_dataSourc' + 'e']) {
                _0x31958d in this && !(typeof this[_0x31958d] == 'function') && (this[_0x31958d] = this['_dataSourc' + 'e'][_0x31958d]);
            }
        }
        get ['top']() {
            return this['get_top']();
        }
        ['get_top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x134a0a) {
            this['set_top'](_0x134a0a);
        }
        ['set_top'](_0x542dfb) {
            _0x542dfb != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x542dfb);
        }
        get ['bottom']() {
            return this['get_bottom']();
        }
        ['get_bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x50b3e0) {
            this['set_bottom'](_0x50b3e0);
        }
        ['set_bottom'](_0x5cd966) {
            _0x5cd966 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x5cd966);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x25c37b) {
            _0x25c37b != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x25c37b);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0xc92532) {
            _0xc92532 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0xc92532);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x2d0420) {
            _0x2d0420 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x2d0420);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x5a54f6) {
            _0x5a54f6 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x5a54f6);
        }
        ['_sizeChang' + 'ed']() {
            if (!isNaN(this['_anchorX']))
                this['pivotX'] = this['anchorX'] * this['width'];
            if (!isNaN(this['_anchorY']))
                this['pivotY'] = this['anchorY'] * this['height'];
            this['event'](_0x322c83['Event']['RESIZE']);
            if (this['_widget'] !== _0x30a5a2['EMPTY'])
                this['_widget']['resetLayou' + 't']();
        }
        get ['tag']() {
            return this['_tag'];
        }
        set ['tag'](_0x413cdb) {
            this['_tag'] = _0x413cdb;
        }
        get ['toolTip']() {
            return this['_toolTip'];
        }
        set ['toolTip'](_0x35c874) {
            this['_toolTip'] != _0x35c874 && (this['_toolTip'] = _0x35c874, _0x35c874 != null ? (this['on'](_0x322c83['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['on'](_0x322c83['Event']['MOUSE_OUT'], this, this['onMouseOut'])) : (this['off'](_0x322c83['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['off'](_0x322c83['Event']['MOUSE_OUT'], this, this['onMouseOut'])));
        }
        ['onMouseOve' + 'r'](_0x287337) {
            _0x322c83['ILaya']['stage']['event'](_0x665776['SHOW_TIP'], this['_toolTip']);
        }
        ['onMouseOut'](_0x53bc8c) {
            _0x322c83['ILaya']['stage']['event'](_0x665776['HIDE_TIP'], this['_toolTip']);
        }
        get ['gray']() {
            return this['_gray'];
        }
        set ['gray'](_0x3d6e34) {
            _0x3d6e34 !== this['_gray'] && (this['_gray'] = _0x3d6e34, _0x373b03['gray'](this, _0x3d6e34));
        }
        get ['disabled']() {
            return this['_disabled'];
        }
        set ['disabled'](_0xd766c2) {
            _0xd766c2 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0xd766c2, this['mouseEnabl' + 'ed'] = !_0xd766c2);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x30a5a2['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x30a5a2)), this['_widget'];
        }
        set ['scaleX'](_0x12036a) {
            this['set_scaleX'](_0x12036a);
        }
        ['set_scaleX'](_0x1c5ad0) {
            if (super['get_scaleX']() == _0x1c5ad0)
                return;
            super['set_scaleX'](_0x1c5ad0), this['event'](_0x322c83['Event']['RESIZE']);
        }
        get ['scaleX']() {
            return super['scaleX'];
        }
        set ['scaleY'](_0xc6d0f9) {
            this['set_scaleY'](_0xc6d0f9);
        }
        ['set_scaleY'](_0xe1905f) {
            if (super['get_scaleY']() == _0xe1905f)
                return;
            super['set_scaleY'](_0xe1905f), this['event'](_0x322c83['Event']['RESIZE']);
        }
        get ['scaleY']() {
            return super['scaleY'];
        }
        ['onCompResi' + 'ze']() {
            this['_sizeChang' + 'ed']();
        }
        set ['width'](_0x3386b6) {
            this['set_width'](_0x3386b6);
        }
        ['set_width'](_0x48afab) {
            if (super['get_width']() == _0x48afab)
                return;
            super['set_width'](_0x48afab), this['callLater'](this['_sizeChang' + 'ed']);
        }
        set ['height'](_0x3a61c0) {
            this['set_height'](_0x3a61c0);
        }
        ['set_height'](_0x5cf38f) {
            if (super['get_height']() == _0x5cf38f)
                return;
            super['set_height'](_0x5cf38f), this['callLater'](this['_sizeChang' + 'ed']);
        }
        get ['anchorX']() {
            return this['get_anchor' + 'X']();
        }
        ['get_anchor' + 'X']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x3eaecd) {
            this['set_anchor' + 'X'](_0x3eaecd);
        }
        ['set_anchor' + 'X'](_0xe51be) {
            this['_anchorX'] != _0xe51be && (this['_anchorX'] = _0xe51be, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['get_anchor' + 'Y']();
        }
        ['get_anchor' + 'Y']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x39a7ee) {
            this['set_anchor' + 'Y'](_0x39a7ee);
        }
        ['set_anchor' + 'Y'](_0x42bd30) {
            this['_anchorY'] != _0x42bd30 && (this['_anchorY'] = _0x42bd30, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_childChan' + 'ged'](_0x24ad43 = null) {
            this['callLater'](this['_sizeChang' + 'ed']), super['_childChan' + 'ged'](_0x24ad43);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x283d79), _0x322c83['ClassUtils']['regClass']('laya.ui.UI' + 'Component', _0x283d79), _0x322c83['ClassUtils']['regClass']('Laya.UICom' + 'ponent', _0x283d79);
    class _0x87edde extends _0x283d79 {
        constructor(_0x4ef704 = null) {
            super(), this['skin'] = _0x4ef704;
        }
        ['destroy'](_0x311610 = !![]) {
            super['destroy'](_0x311610), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
        }
        ['dispose']() {
            this['destroy'](!![]), _0x322c83['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2d4396(), this['_bitmap']['autoCacheC' + 'md'] = ![];
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x130986) {
            if (this['_skin'] != _0x130986) {
                this['_skin'] = _0x130986;
                if (_0x130986) {
                    var _0x15dbb0 = _0x322c83['Loader']['getRes'](_0x130986);
                    if (_0x15dbb0)
                        this['source'] = _0x15dbb0, this['onCompResi' + 'ze']();
                    else
                        _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['setSource'], [this['_skin']]), null, _0x322c83['Loader']['IMAGE'], 0x1, !![], this['_group']);
                } else
                    this['source'] = null;
            }
        }
        get ['source']() {
            return this['_bitmap']['source'];
        }
        set ['source'](_0x3bccfb) {
            if (!this['_bitmap'])
                return;
            this['_bitmap']['source'] = _0x3bccfb, this['event'](_0x322c83['Event']['LOADED']), this['repaint']();
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x2138dc) {
            if (_0x2138dc && this['_skin'])
                _0x322c83['Loader']['setGroup'](this['_skin'], _0x2138dc);
            this['_group'] = _0x2138dc;
        }
        ['setSource'](_0x54f55a, _0x50db70 = null) {
            _0x54f55a === this['_skin'] && _0x50db70 && (this['source'] = _0x50db70, this['onCompResi' + 'ze']());
        }
        ['measureWid' + 'th']() {
            return this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bitmap']['height'];
        }
        set ['width'](_0x4bb039) {
            super['width'] = _0x4bb039, this['_bitmap']['width'] = _0x4bb039 == 0x0 ? 1e-7 : _0x4bb039;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2d2ab3) {
            super['height'] = _0x2d2ab3, this['_bitmap']['height'] = _0x2d2ab3 == 0x0 ? 1e-7 : _0x2d2ab3;
        }
        get ['height']() {
            return super['height'];
        }
        get ['sizeGrid']() {
            if (this['_bitmap']['sizeGrid'])
                return this['_bitmap']['sizeGrid']['join'](',');
            return null;
        }
        set ['sizeGrid'](_0x3535b2) {
            this['_bitmap']['sizeGrid'] = _0x373b03['fillArray'](_0xbb775b['defaultSiz' + 'eGrid'], _0x3535b2, Number);
        }
        set ['dataSource'](_0x245e8d) {
            this['_dataSourc' + 'e'] = _0x245e8d;
            if (typeof _0x245e8d == 'string')
                this['skin'] = _0x245e8d;
            else
                super['dataSource'] = _0x245e8d;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x87edde), _0x322c83['ClassUtils']['regClass']('laya.ui.Im' + 'age', _0x87edde), _0x322c83['ClassUtils']['regClass']('Laya.Image', _0x87edde);
    class _0x5a5aa1 extends _0x87edde {
        constructor(_0x5c3ee1 = null) {
            super(), this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_http'] = new _0x322c83['Browser']['window']['XMLHttpReq' + 'uest'](), this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, this['skin'] = _0x5c3ee1, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
        }
        ['setLoadUrl']() {
        }
        ['init']() {
            if (this['isSupportJ' + 'ump']())
                (_0x322c83['Browser']['onMiniGame'] || _0x322c83['Browser']['onBDMiniGa' + 'me']) && _0x322c83['ILaya']['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']();
            else
                this['visible'] = ![];
        }
        ['initEvent']() {
            this['on'](_0x322c83['Event']['CLICK'], this, this['onAdvsImgC' + 'lick']);
        }
        ['onAdvsImgC' + 'lick']() {
            var _0x3e3ebc = this['getCurrent' + 'AppidObj']();
            if (_0x3e3ebc)
                this['jumptoGame']();
        }
        ['revertAdvs' + 'Data']() {
            this['advsListAr' + 'r'][this['_playIndex']] && (this['visible'] = !![], this['skin'] = this['advsListAr' + 'r'][this['_playIndex']]);
        }
        ['isSupportJ' + 'ump']() {
            if (_0x322c83['Browser']['onMiniGame']) {
                var _0x491cc3 = window['wx']['navigateTo' + 'MiniProgra' + 'm'] instanceof Function;
                return _0x491cc3;
            } else {
                if (_0x322c83['Browser']['onBDMiniGa' + 'me'])
                    return !![];
            }
            return ![];
        }
        ['jumptoGame']() {
            var _0x4dcb7f = this['advsListAr' + 'r'][this['_playIndex']], _0x4142b2 = parseInt(_0x4dcb7f['gameid']), _0xe26ffd = _0x4dcb7f['extendInfo'], _0x57f2f7 = _0x4dcb7f['path'];
            if (_0x322c83['Browser']['onMiniGame'])
                this['isSupportJ' + 'ump']() && window['wx']['navigateTo' + 'MiniProgra' + 'm']({
                    'appId': this['_appid'],
                    'path': '',
                    'extraData': '',
                    'envVersion': 'release',
                    'success': function _0x119263() {
                        console['log']('----------' + '---跳转成功---' + '----------' + '-');
                    },
                    'fail': function _0x5e1d45() {
                        console['log']('----------' + '---跳转失败---' + '----------' + '-');
                    },
                    'complete': function _0x2e9ac3() {
                        console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), this['updateAdvs' + 'Info']();
                    }['bind'](this)
                });
            else {
                if (_0x322c83['Browser']['onBDMiniGa' + 'me']);
                else
                    this['visible'] = ![];
            }
        }
        ['updateAdvs' + 'Info']() {
            this['visible'] = ![], this['onLunbo'](), _0x322c83['ILaya']['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
        }
        ['onLunbo']() {
            if (this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1)
                this['_playIndex'] = 0x0;
            else
                this['_playIndex'] += 0x1;
            this['visible'] = !![], this['revertAdvs' + 'Data']();
        }
        ['getCurrent' + 'AppidObj']() {
            return this['advsListAr' + 'r'][this['_playIndex']];
        }
        ['onGetAdvsL' + 'istData']() {
            var _0x4ffda2 = this, _0xd419a1 = _0x5a5aa1['randRange'](0x2710, 0xf4240), _0x5761e1 = this['resUrl'] + '?' + _0xd419a1;
            this['_http']['open']('get', _0x5761e1, !![]), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x2baecc) {
                _0x4ffda2['_onError'](_0x2baecc);
            }, this['_http']['onload'] = function (_0x14c090) {
                _0x4ffda2['_onLoad'](_0x14c090);
            }, this['_http']['send'](null);
        }
        static ['randRange'](_0x197b9d, _0x2fa07f) {
            return Math['floor'](Math['random']() * (_0x2fa07f - _0x197b9d + 0x1)) + _0x197b9d;
        }
        ['_onError'](_0x86d405) {
            this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
        }
        ['_onLoad'](_0x518dfc) {
            var _0x367dcd = this['_http'], _0x4bf75a = _0x367dcd['status'] !== undefined ? _0x367dcd['status'] : 0xc8;
            _0x4bf75a === 0xc8 || _0x4bf75a === 0xcc || _0x4bf75a === 0x0 ? this['complete']() : this['error']('[' + _0x367dcd['status'] + ']' + _0x367dcd['statusText'] + ':' + _0x367dcd['responseUR' + 'L']);
        }
        ['error'](_0xe95cbd) {
            this['event'](_0x322c83['Event']['ERROR'], _0xe95cbd);
        }
        ['complete']() {
            try {
                this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']();
            } catch (_0x4ca74a) {
                this['error'](_0x4ca74a['message']);
            }
        }
        ['getAdvsQAr' + 'r'](_0x30361e) {
            var _0x2286b5 = [], _0x2d00cf = _0x322c83['LocalStora' + 'ge']['getJSON']('gameObj');
            for (var _0x98cbb8 in _0x30361e) {
                var _0x22bd8e = _0x30361e[_0x98cbb8];
                if (_0x2d00cf && _0x2d00cf[_0x22bd8e['gameid']] && !_0x22bd8e['isQiangZhi'])
                    continue;
                _0x2286b5['push'](_0x22bd8e);
            }
            return _0x2286b5;
        }
        ['clear']() {
            var _0x4628b2 = this['_http'];
            _0x4628b2['onerror'] = _0x4628b2['onabort'] = _0x4628b2['onprogress'] = _0x4628b2['onload'] = null;
        }
        ['destroy'](_0x2f6c5c = !![]) {
            _0x322c83['ILaya']['timer']['clear'](this, this['onLunbo']), super['destroy'](!![]), this['clear'](), _0x322c83['ILaya']['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
        }
    }
    _0x322c83['ClassUtils']['regClass']('laya.ui.Ad' + 'vImage', _0x5a5aa1), _0x322c83['ClassUtils']['regClass']('Laya.AdvIm' + 'age', _0x5a5aa1);
    class _0x490c4a extends _0x283d79 {
        set ['dataSource'](_0x499fcb) {
            this['_dataSourc' + 'e'] = _0x499fcb;
            for (var _0x2e4940 in _0x499fcb) {
                var _0x38f2d3 = this['getChildBy' + 'Name'](_0x2e4940);
                if (_0x38f2d3)
                    _0x38f2d3['dataSource'] = _0x499fcb[_0x2e4940];
                else {
                    if (_0x2e4940 in this && !(this[_0x2e4940] instanceof Function))
                        this[_0x2e4940] = _0x499fcb[_0x2e4940];
                }
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x5c7702) {
            this['_bgColor'] = _0x5c7702, _0x5c7702 ? (this['_onResize'](null), this['on'](_0x322c83['Event']['RESIZE'], this, this['_onResize'])) : (this['graphics']['clear'](), this['off'](_0x322c83['Event']['RESIZE'], this, this['_onResize']));
        }
        ['_onResize'](_0x2cdb13) {
            this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x490c4a), _0x322c83['ClassUtils']['regClass']('laya.ui.Bo' + 'x', _0x490c4a), _0x322c83['ClassUtils']['regClass']('Laya.Box', _0x490c4a);
    class _0x561c8e extends _0x283d79 {
        constructor(_0x26c4d3 = null, _0x49787f = '') {
            super(), this['_labelColo' + 'rs'] = _0xbb775b['buttonLabe' + 'lColors'], this['_state'] = 0x0, this['_autoSize'] = !![], this['_stateNum'] = _0xbb775b['buttonStat' + 'eNum'], this['_stateChan' + 'ged'] = ![], this['skin'] = _0x26c4d3, this['label'] = _0x49787f;
        }
        ['destroy'](_0x2b4027 = !![]) {
            super['destroy'](_0x2b4027), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x2b4027), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2d4396();
        }
        ['createText']() {
            !this['_text'] && (this['_text'] = new _0x322c83['Text'](), this['_text']['overflow'] = _0x322c83['Text']['HIDDEN'], this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
        }
        ['initialize']() {
            this['_mouseStat' + 'e'] !== 0x1 && (this['mouseEnabl' + 'ed'] = !![], this['_setBit'](_0x322c83['Const']['HAS_MOUSE'], !![])), this['_createLis' + 'tener'](_0x322c83['Event']['MOUSE_OVER'], this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener'](_0x322c83['Event']['MOUSE_OUT'], this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener'](_0x322c83['Event']['MOUSE_UP'], this, this['onMouse'], null, ![], ![]), this['_createLis' + 'tener'](_0x322c83['Event']['CLICK'], this, this['onMouse'], null, ![], ![]);
        }
        ['onMouse'](_0xb0dbd2) {
            if (this['toggle'] === ![] && this['_selected'])
                return;
            if (_0xb0dbd2['type'] === _0x322c83['Event']['CLICK']) {
                this['toggle'] && (this['selected'] = !this['_selected']), this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']();
                return;
            }
            !this['_selected'] && (this['state'] = _0x561c8e['stateMap'][_0xb0dbd2['type']]);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x370313) {
            this['_skin'] != _0x370313 && (this['_skin'] = _0x370313, _0x370313 ? !_0x322c83['Loader']['getRes'](_0x370313) ? _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x322c83['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']() : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x575e7d) {
            typeof _0x575e7d == 'string' && (_0x575e7d = parseInt(_0x575e7d)), this['_stateNum'] != _0x575e7d && (this['_stateNum'] = _0x575e7d < 0x1 ? 0x1 : _0x575e7d > 0x3 ? 0x3 : _0x575e7d, this['callLater'](this['changeClip' + 's']));
        }
        ['changeClip' + 's']() {
            var _0x4c571a = _0x322c83['Loader']['getRes'](this['_skin']);
            if (!_0x4c571a) {
                console['log']('lose\x20skin', this['_skin']);
                return;
            }
            var _0x2fac78 = _0x4c571a['sourceWidt' + 'h'], _0x2de4df = _0x4c571a['sourceHeig' + 'ht'] / this['_stateNum'];
            _0x4c571a['$_GID'] || (_0x4c571a['$_GID'] = _0x322c83['Utils']['getGID']());
            var _0x4d10c1 = _0x4c571a['$_GID'] + '-' + this['_stateNum'], _0x22991a = _0x322c83['WeakObject']['I']['get'](_0x4d10c1);
            !_0x322c83['Utils']['isOkTextur' + 'eList'](_0x22991a) && (_0x22991a = null);
            if (_0x22991a)
                this['_sources'] = _0x22991a;
            else {
                this['_sources'] = [];
                if (this['_stateNum'] === 0x1)
                    this['_sources']['push'](_0x4c571a);
                else
                    for (var _0x35ffc3 = 0x0; _0x35ffc3 < this['_stateNum']; _0x35ffc3++) {
                        this['_sources']['push'](_0x322c83['Texture']['createFrom' + 'Texture'](_0x4c571a, 0x0, _0x2de4df * _0x35ffc3, _0x2fac78, _0x2de4df));
                    }
                _0x322c83['WeakObject']['I']['set'](_0x4d10c1, this['_sources']);
            }
            this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x2fac78, this['_bitmap']['height'] = this['_height'] || _0x2de4df, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x2fac78);
        }
        ['measureWid' + 'th']() {
            this['runCallLat' + 'er'](this['changeClip' + 's']);
            if (this['_autoSize'])
                return this['_bitmap']['width'];
            return this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0);
        }
        ['measureHei' + 'ght']() {
            return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
        }
        get ['label']() {
            return this['_text'] ? this['_text']['text'] : null;
        }
        set ['label'](_0x3b7b4d) {
            if (!this['_text'] && !_0x3b7b4d)
                return;
            this['createText'](), this['_text']['text'] != _0x3b7b4d && (_0x3b7b4d && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x3b7b4d + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']());
        }
        get ['selected']() {
            return this['_selected'];
        }
        set ['selected'](_0x509f63) {
            this['_selected'] != _0x509f63 && (this['_selected'] = _0x509f63, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event'](_0x322c83['Event']['CHANGE']));
        }
        get ['state']() {
            return this['_state'];
        }
        set ['state'](_0x5bdc55) {
            this['_state'] != _0x5bdc55 && (this['_state'] = _0x5bdc55, this['_setStateC' + 'hanged']());
        }
        ['changeStat' + 'e']() {
            this['_stateChan' + 'ged'] = ![], this['runCallLat' + 'er'](this['changeClip' + 's']);
            var _0x79488c = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
            this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x79488c]);
            if (this['label']) {
                this['_text']['color'] = this['_labelColo' + 'rs'][_0x79488c];
                if (this['_strokeCol' + 'ors'])
                    this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x79488c];
            }
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs']['join'](',');
        }
        set ['labelColor' + 's'](_0x4bb173) {
            this['_labelColo' + 'rs'] = _0x373b03['fillArray'](_0xbb775b['buttonLabe' + 'lColors'], _0x4bb173, String), this['_setStateC' + 'hanged']();
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
        }
        set ['strokeColo' + 'rs'](_0x37c8bc) {
            this['_strokeCol' + 'ors'] = _0x373b03['fillArray'](_0xbb775b['buttonLabe' + 'lColors'], _0x37c8bc, String), this['_setStateC' + 'hanged']();
        }
        get ['labelPaddi' + 'ng']() {
            return this['createText'](), this['_text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x1b9e58) {
            this['createText'](), this['_text']['padding'] = _0x373b03['fillArray'](_0xbb775b['labelPaddi' + 'ng'], _0x1b9e58, Number);
        }
        get ['labelSize']() {
            return this['createText'](), this['_text']['fontSize'];
        }
        set ['labelSize'](_0x2dd624) {
            this['createText'](), this['_text']['fontSize'] = _0x2dd624;
        }
        get ['labelStrok' + 'e']() {
            return this['createText'](), this['_text']['stroke'];
        }
        set ['labelStrok' + 'e'](_0x561d8f) {
            this['createText'](), this['_text']['stroke'] = _0x561d8f;
        }
        get ['labelStrok' + 'eColor']() {
            return this['createText'](), this['_text']['strokeColo' + 'r'];
        }
        set ['labelStrok' + 'eColor'](_0x632709) {
            this['createText'](), this['_text']['strokeColo' + 'r'] = _0x632709;
        }
        get ['labelBold']() {
            return this['createText'](), this['_text']['bold'];
        }
        set ['labelBold'](_0x9f2903) {
            this['createText'](), this['_text']['bold'] = _0x9f2903;
        }
        get ['labelFont']() {
            return this['createText'](), this['_text']['font'];
        }
        set ['labelFont'](_0x497577) {
            this['createText'](), this['_text']['font'] = _0x497577;
        }
        get ['labelAlign']() {
            return this['createText'](), this['_text']['align'];
        }
        set ['labelAlign'](_0x3b970d) {
            this['createText'](), this['_text']['align'] = _0x3b970d;
        }
        get ['clickHandl' + 'er']() {
            return this['_clickHand' + 'ler'];
        }
        set ['clickHandl' + 'er'](_0xac75a8) {
            this['_clickHand' + 'ler'] = _0xac75a8;
        }
        get ['text']() {
            return this['createText'](), this['_text'];
        }
        get ['sizeGrid']() {
            if (this['_bitmap']['sizeGrid'])
                return this['_bitmap']['sizeGrid']['join'](',');
            return null;
        }
        set ['sizeGrid'](_0x470668) {
            this['_bitmap']['sizeGrid'] = _0x373b03['fillArray'](_0xbb775b['defaultSiz' + 'eGrid'], _0x470668, Number);
        }
        set ['width'](_0x334afc) {
            super['set_width'](_0x334afc), this['_autoSize'] && (this['_bitmap']['width'] = _0x334afc, this['_text'] && (this['_text']['width'] = _0x334afc));
        }
        get ['width']() {
            return super['get_width']();
        }
        set ['height'](_0x161533) {
            super['set_height'](_0x161533), this['_autoSize'] && (this['_bitmap']['height'] = _0x161533, this['_text'] && (this['_text']['height'] = _0x161533));
        }
        get ['height']() {
            return super['get_height']();
        }
        set ['dataSource'](_0x1470e4) {
            this['_dataSourc' + 'e'] = _0x1470e4;
            if (typeof _0x1470e4 == 'number' || typeof _0x1470e4 == 'string')
                this['label'] = _0x1470e4 + '';
            else
                super['set_dataSo' + 'urce'](_0x1470e4);
        }
        get ['dataSource']() {
            return super['get_dataSo' + 'urce']();
        }
        get ['iconOffset']() {
            return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
        }
        set ['iconOffset'](_0x484248) {
            if (_0x484248)
                this['_bitmap']['_offset'] = _0x373b03['fillArray']([
                    0x1,
                    0x1
                ], _0x484248, Number);
            else
                this['_bitmap']['_offset'] = [];
        }
        ['_setStateC' + 'hanged']() {
            !this['_stateChan' + 'ged'] && (this['_stateChan' + 'ged'] = !![], this['callLater'](this['changeStat' + 'e']));
        }
    }
    _0x561c8e['stateMap'] = {
        'mouseup': 0x0,
        'mouseover': 0x1,
        'mousedown': 0x2,
        'mouseout': 0x0
    }, _0x322c83['ILaya']['regClass'](_0x561c8e), _0x322c83['ClassUtils']['regClass']('laya.ui.Bu' + 'tton', _0x561c8e), _0x322c83['ClassUtils']['regClass']('Laya.Butto' + 'n', _0x561c8e);
    class _0x116ec3 extends _0x561c8e {
        constructor(_0x18a241 = null, _0xa4aa30 = '') {
            super(_0x18a241, _0xa4aa30), this['toggle'] = !![], this['_autoSize'] = ![];
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !![], this['_autoSize'] = ![];
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
        }
        set ['dataSource'](_0xe1471b) {
            this['_dataSourc' + 'e'] = _0xe1471b;
            if (_0xe1471b instanceof Boolean)
                this['selected'] = _0xe1471b;
            else {
                if (typeof _0xe1471b == 'string')
                    this['selected'] = _0xe1471b === 'true';
                else
                    super['dataSource'] = _0xe1471b;
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x116ec3), _0x322c83['ClassUtils']['regClass']('laya.ui.Ch' + 'eckBox', _0x116ec3), _0x322c83['ClassUtils']['regClass']('Laya.Check' + 'Box', _0x116ec3);
    class _0x36a3aa extends _0x283d79 {
        constructor(_0x50aa18 = null, _0xa9e475 = 0x1, _0x519c91 = 0x1) {
            super(), this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_interval'] = 0x32, this['_index'] = 0x0, this['_toIndex'] = -0x1, this['_clipX'] = _0xa9e475, this['_clipY'] = _0x519c91, this['skin'] = _0x50aa18;
        }
        ['destroy'](_0x22a6b5 = !![]) {
            super['destroy'](!![]), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
        }
        ['dispose']() {
            this['destroy'](!![]), _0x322c83['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x2d4396();
        }
        ['_onDisplay'](_0x4ccf4d) {
            if (this['_isPlaying']) {
                if (this['_getBit'](_0x322c83['Const']['DISPLAYED_' + 'INSTAGE']))
                    this['play']();
                else
                    this['stop']();
            } else
                this['_autoPlay'] && this['play']();
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x1c8ca3) {
            this['_skin'] != _0x1c8ca3 && (this['_skin'] = _0x1c8ca3, _0x1c8ca3 ? !_0x322c83['Loader']['getRes'](_0x1c8ca3) ? _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x322c83['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']() : this['_bitmap']['source'] = null);
        }
        ['_skinLoade' + 'd']() {
            this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        get ['clipX']() {
            return this['_clipX'];
        }
        set ['clipX'](_0x2da23f) {
            this['_clipX'] = _0x2da23f || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipY']() {
            return this['_clipY'];
        }
        set ['clipY'](_0x35bb7c) {
            this['_clipY'] = _0x35bb7c || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipWidth']() {
            return this['_clipWidth'];
        }
        set ['clipWidth'](_0x246ecc) {
            this['_clipWidth'] = _0x246ecc, this['_setClipCh' + 'anged']();
        }
        get ['clipHeight']() {
            return this['_clipHeigh' + 't'];
        }
        set ['clipHeight'](_0x1cdb7f) {
            this['_clipHeigh' + 't'] = _0x1cdb7f, this['_setClipCh' + 'anged']();
        }
        ['changeClip']() {
            this['_clipChang' + 'ed'] = ![];
            if (!this['_skin'])
                return;
            var _0x370617 = _0x322c83['Loader']['getRes'](this['_skin']);
            _0x370617 ? this['loadComple' + 'te'](this['_skin'], _0x370617) : _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['loadComple' + 'te'], [this['_skin']]));
        }
        ['loadComple' + 'te'](_0x4dd4d5, _0x358155) {
            if (_0x4dd4d5 === this['_skin'] && _0x358155) {
                var _0x33d22a = this['_clipWidth'] || Math['ceil'](_0x358155['sourceWidt' + 'h'] / this['_clipX']), _0x270ec1 = this['_clipHeigh' + 't'] || Math['ceil'](_0x358155['sourceHeig' + 'ht'] / this['_clipY']), _0x5f26ea = this['_skin'] + _0x33d22a + _0x270ec1, _0x504024 = _0x322c83['WeakObject']['I']['get'](_0x5f26ea);
                !_0x322c83['Utils']['isOkTextur' + 'eList'](_0x504024) && (_0x504024 = null);
                if (_0x504024)
                    this['_sources'] = _0x504024;
                else {
                    this['_sources'] = [];
                    for (var _0x1bc3ce = 0x0; _0x1bc3ce < this['_clipY']; _0x1bc3ce++) {
                        for (var _0x171ec9 = 0x0; _0x171ec9 < this['_clipX']; _0x171ec9++) {
                            this['_sources']['push'](_0x322c83['Texture']['createFrom' + 'Texture'](_0x358155, _0x33d22a * _0x171ec9, _0x270ec1 * _0x1bc3ce, _0x33d22a, _0x270ec1));
                        }
                    }
                    _0x322c83['WeakObject']['I']['set'](_0x5f26ea, this['_sources']);
                }
                this['index'] = this['_index'], this['event'](_0x322c83['Event']['LOADED']), this['onCompResi' + 'ze']();
            }
        }
        get ['sources']() {
            return this['_sources'];
        }
        set ['sources'](_0x1849d1) {
            this['_sources'] = _0x1849d1, this['index'] = this['_index'], this['event'](_0x322c83['Event']['LOADED']);
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x3519ec) {
            if (_0x3519ec && this['_skin'])
                _0x322c83['Loader']['setGroup'](this['_skin'], _0x3519ec);
            this['_group'] = _0x3519ec;
        }
        set ['width'](_0x4169ff) {
            super['width'] = _0x4169ff, this['_bitmap']['width'] = _0x4169ff;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1bb981) {
            super['height'] = _0x1bb981, this['_bitmap']['height'] = _0x1bb981;
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
            if (this['_bitmap']['sizeGrid'])
                return this['_bitmap']['sizeGrid']['join'](',');
            return null;
        }
        set ['sizeGrid'](_0x2e49fc) {
            this['_bitmap']['sizeGrid'] = _0x373b03['fillArray'](_0xbb775b['defaultSiz' + 'eGrid'], _0x2e49fc, Number);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x14f754) {
            this['_index'] = _0x14f754, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x14f754]), this['event'](_0x322c83['Event']['CHANGE']);
        }
        get ['total']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
        }
        get ['autoPlay']() {
            return this['_autoPlay'];
        }
        set ['autoPlay'](_0x3e612b) {
            this['_autoPlay'] != _0x3e612b && (this['_autoPlay'] = _0x3e612b, _0x3e612b ? this['play']() : this['stop']());
        }
        get ['interval']() {
            return this['_interval'];
        }
        set ['interval'](_0x459420) {
            if (this['_interval'] != _0x459420) {
                this['_interval'] = _0x459420;
                if (this['_isPlaying'])
                    this['play']();
            }
        }
        get ['isPlaying']() {
            return this['_isPlaying'];
        }
        set ['isPlaying'](_0x39b10f) {
            this['_isPlaying'] = _0x39b10f;
        }
        ['play'](_0x303b0f = 0x0, _0x3138cd = -0x1) {
            this['_isPlaying'] = !![], this['index'] = _0x303b0f, this['_toIndex'] = _0x3138cd, this['_index']++, _0x322c83['ILaya']['timer']['loop'](this['interval'], this, this['_loop']), this['on'](_0x322c83['Event']['DISPLAY'], this, this['_onDisplay']), this['on'](_0x322c83['Event']['UNDISPLAY'], this, this['_onDisplay']);
        }
        ['_loop']() {
            if (this['_visible'] && this['_sources']) {
                this['_index']++;
                if (this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'])
                    this['stop']();
                else {
                    if (this['_index'] >= this['_sources']['length'])
                        this['_index'] = 0x0;
                }
                this['index'] = this['_index'];
            }
        }
        ['stop']() {
            this['_isPlaying'] = ![], _0x322c83['ILaya']['timer']['clear'](this, this['_loop']), this['event'](_0x322c83['Event']['COMPLETE']);
        }
        set ['dataSource'](_0x3d273e) {
            this['_dataSourc' + 'e'] = _0x3d273e;
            if (typeof _0x3d273e == 'number' || typeof _0x3d273e == 'string')
                this['index'] = parseInt(_0x3d273e);
            else
                super['dataSource'] = _0x3d273e;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bitmap']() {
            return this['_bitmap'];
        }
        ['_setClipCh' + 'anged']() {
            !this['_clipChang' + 'ed'] && (this['_clipChang' + 'ed'] = !![], this['callLater'](this['changeClip']));
        }
    }
    _0x322c83['ILaya']['regClass'](_0x36a3aa), _0x322c83['ClassUtils']['regClass']('laya.ui.Cl' + 'ip', _0x36a3aa), _0x322c83['ClassUtils']['regClass']('Laya.Clip', _0x36a3aa);
    class _0x3674f3 extends _0x283d79 {
        constructor(_0x5e6791 = !![]) {
            super(![]), this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000', _0x5e6791 && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0x52bcb9 = !![]) {
            _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), super['destroy'](_0x52bcb9), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x52bcb9), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x52bcb9), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_colorButt' + 'on'] = new _0x561c8e()), this['_colorPane' + 'l'] = new _0x490c4a(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x322c83['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x322c83['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x322c83['Input']());
        }
        ['initialize']() {
            this['_colorButt' + 'on']['on'](_0x322c83['Event']['CLICK'], this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on'](_0x322c83['Event']['CHANGE'], this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on'](_0x322c83['Event']['KEY_DOWN'], this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on'](_0x322c83['Event']['MOUSE_MOVE'], this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on'](_0x322c83['Event']['CLICK'], this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
        }
        ['onPanelMou' + 'seDown'](_0x7b3ef5) {
            _0x7b3ef5['stopPropag' + 'ation']();
        }
        ['changePane' + 'l']() {
            this['_panelChan' + 'ged'] = ![];
            var _0x53eb3c = this['_colorPane' + 'l']['graphics'];
            _0x53eb3c['clear'](!![]), _0x53eb3c['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], _0x53eb3c = this['_colorTile' + 's']['graphics'], _0x53eb3c['clear'](!![]);
            var _0x27fe41 = [
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
            ];
            for (var _0x24e9d4 = 0x0; _0x24e9d4 < 0xc; _0x24e9d4++) {
                for (var _0x3e830c = 0x0; _0x3e830c < 0x14; _0x3e830c++) {
                    var _0x2ed3bf;
                    if (_0x3e830c === 0x0)
                        _0x2ed3bf = _0x27fe41[_0x24e9d4];
                    else {
                        if (_0x3e830c === 0x1)
                            _0x2ed3bf = 0x0;
                        else
                            _0x2ed3bf = (((_0x24e9d4 * 0x3 + _0x3e830c / 0x6) % 0x3 << 0x0) + (_0x24e9d4 / 0x6 << 0x0) * 0x3) * 0x33 << 0x10 | _0x3e830c % 0x6 * 0x33 << 0x8 | (_0x24e9d4 << 0x0) % 0x6 * 0x33;
                    }
                    var _0xd22398 = _0x373b03['toColor'](_0x2ed3bf);
                    this['_colors']['push'](_0xd22398);
                    var _0x2d882b = _0x3e830c * this['_gridSize'], _0x4ce98d = _0x24e9d4 * this['_gridSize'];
                    _0x53eb3c['drawRect'](_0x2d882b, _0x4ce98d, this['_gridSize'], this['_gridSize'], _0xd22398, '#000000');
                }
            }
        }
        ['onColorBut' + 'tonClick'](_0x5e5e05) {
            if (this['_colorPane' + 'l']['parent'])
                this['close']();
            else
                this['open']();
        }
        ['open']() {
            let _0xa142aa = _0x322c83['ILaya']['stage'];
            var _0x562f3c = this['localToGlo' + 'bal'](new _0x322c83['Point']()), _0x4a4635 = _0x562f3c['x'] + this['_colorPane' + 'l']['width'] <= _0xa142aa['width'] ? _0x562f3c['x'] : _0xa142aa['width'] - this['_colorPane' + 'l']['width'], _0x2ddcfc = _0x562f3c['y'] + this['_colorButt' + 'on']['height'];
            _0x2ddcfc = _0x2ddcfc + this['_colorPane' + 'l']['height'] <= _0xa142aa['height'] ? _0x2ddcfc : _0x562f3c['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x4a4635, _0x2ddcfc), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0xa142aa['addChild'](this['_colorPane' + 'l']), _0xa142aa['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']);
        }
        ['close']() {
            _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
        }
        ['removeColo' + 'rBox'](_0x562e81 = null) {
            this['close']();
        }
        ['onColorFie' + 'ldKeyDown'](_0x5ca28a) {
            if (_0x5ca28a['keyCode'] == 0xd) {
                if (this['_colorInpu' + 't']['text'])
                    this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'];
                else
                    this['selectedCo' + 'lor'] = null;
                this['close'](), _0x5ca28a['stopPropag' + 'ation']();
            }
        }
        ['onColorInp' + 'utChange'](_0x26c039 = null) {
            if (this['_colorInpu' + 't']['text'])
                this['drawBlock'](this['_colorInpu' + 't']['text']);
            else
                this['drawBlock']('#FFFFFF');
        }
        ['onColorTil' + 'esClick'](_0xeb32ff) {
            this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
        }
        ['onColorTil' + 'esMouseMov' + 'e'](_0x1cfe51) {
            this['_colorInpu' + 't']['focus'] = ![];
            var _0x2f8a0c = this['getColorBy' + 'Mouse']();
            this['_colorInpu' + 't']['text'] = _0x2f8a0c, this['drawBlock'](_0x2f8a0c);
        }
        ['getColorBy' + 'Mouse']() {
            var _0x405a22 = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x4b337e = Math['floor'](_0x405a22['x'] / this['_gridSize']), _0x2b7811 = Math['floor'](_0x405a22['y'] / this['_gridSize']);
            return this['_colors'][_0x2b7811 * 0x14 + _0x4b337e];
        }
        ['drawBlock'](_0x3e12cb) {
            var _0x31028d = this['_colorBloc' + 'k']['graphics'];
            _0x31028d['clear'](!![]);
            var _0x1f857a = _0x3e12cb ? _0x3e12cb : '#ffffff';
            _0x31028d['drawRect'](0x0, 0x0, 0x32, 0x14, _0x1f857a, this['_borderCol' + 'or']), _0x3e12cb || _0x31028d['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
        }
        get ['selectedCo' + 'lor']() {
            return this['_selectedC' + 'olor'];
        }
        set ['selectedCo' + 'lor'](_0xf20258) {
            this['_selectedC' + 'olor'] != _0xf20258 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0xf20258, this['drawBlock'](_0xf20258), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event'](_0x322c83['Event']['CHANGE'], _0x322c83['Event']['EMPTY']['setTo'](_0x322c83['Event']['CHANGE'], this, this)));
        }
        get ['skin']() {
            return this['_colorButt' + 'on']['skin'];
        }
        set ['skin'](_0x38c55c) {
            this['_colorButt' + 'on']['once'](_0x322c83['Event']['LOADED'], this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x38c55c;
        }
        ['changeColo' + 'r']() {
            var _0x3ed494 = this['graphics'];
            _0x3ed494['clear'](!![]);
            var _0x359edf = this['_selectedC' + 'olor'] || '#000000';
            _0x3ed494['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x359edf);
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x3c8717) {
            this['_bgColor'] = _0x3c8717, this['_setPanelC' + 'hanged']();
        }
        get ['borderColo' + 'r']() {
            return this['_borderCol' + 'or'];
        }
        set ['borderColo' + 'r'](_0x15d7f4) {
            this['_borderCol' + 'or'] = _0x15d7f4, this['_setPanelC' + 'hanged']();
        }
        get ['inputColor']() {
            return this['_inputColo' + 'r'];
        }
        set ['inputColor'](_0x178096) {
            this['_inputColo' + 'r'] = _0x178096, this['_setPanelC' + 'hanged']();
        }
        get ['inputBgCol' + 'or']() {
            return this['_inputBgCo' + 'lor'];
        }
        set ['inputBgCol' + 'or'](_0x209066) {
            this['_inputBgCo' + 'lor'] = _0x209066, this['_setPanelC' + 'hanged']();
        }
        ['_setPanelC' + 'hanged']() {
            !this['_panelChan' + 'ged'] && (this['_panelChan' + 'ged'] = !![], this['callLater'](this['changePane' + 'l']));
        }
    }
    _0x322c83['ILaya']['regClass'](_0x3674f3), _0x322c83['ClassUtils']['regClass']('laya.ui.Co' + 'lorPicker', _0x3674f3), _0x322c83['ClassUtils']['regClass']('Laya.Color' + 'Picker', _0x3674f3);
    class _0x2336dc extends _0x283d79 {
        constructor(_0x56ce7f = '') {
            super(), this['text'] = _0x56ce7f;
        }
        ['destroy'](_0x1adf90 = !![]) {
            super['destroy'](_0x1adf90), this['_tf'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x322c83['Text']());
        }
        get ['text']() {
            return this['_tf']['text'];
        }
        set ['text'](_0x3b9f33) {
            if (this['_tf']['text'] != _0x3b9f33) {
                if (_0x3b9f33)
                    _0x3b9f33 = _0x373b03['adptString'](_0x3b9f33 + '');
                this['_tf']['text'] = _0x3b9f33, this['event'](_0x322c83['Event']['CHANGE']);
                if (!this['_width'] || !this['_height'])
                    this['onCompResi' + 'ze']();
            }
        }
        ['changeText'](_0x5e855d) {
            this['_tf']['changeText'](_0x5e855d);
        }
        get ['wordWrap']() {
            return this['_tf']['wordWrap'];
        }
        set ['wordWrap'](_0x5bb4d0) {
            this['_tf']['wordWrap'] = _0x5bb4d0;
        }
        get ['color']() {
            return this['_tf']['color'];
        }
        set ['color'](_0x474f36) {
            this['_tf']['color'] = _0x474f36;
        }
        get ['font']() {
            return this['_tf']['font'];
        }
        set ['font'](_0x4e42c3) {
            this['_tf']['font'] = _0x4e42c3;
        }
        get ['align']() {
            return this['_tf']['align'];
        }
        set ['align'](_0x1901d9) {
            this['_tf']['align'] = _0x1901d9;
        }
        get ['valign']() {
            return this['_tf']['valign'];
        }
        set ['valign'](_0x292ae7) {
            this['_tf']['valign'] = _0x292ae7;
        }
        get ['bold']() {
            return this['_tf']['bold'];
        }
        set ['bold'](_0x4a286b) {
            this['_tf']['bold'] = _0x4a286b;
        }
        get ['italic']() {
            return this['_tf']['italic'];
        }
        set ['italic'](_0x5d1cdd) {
            this['_tf']['italic'] = _0x5d1cdd;
        }
        get ['leading']() {
            return this['_tf']['leading'];
        }
        set ['leading'](_0x17cb67) {
            this['_tf']['leading'] = _0x17cb67;
        }
        get ['fontSize']() {
            return this['_tf']['fontSize'];
        }
        set ['fontSize'](_0x1a8905) {
            this['_tf']['fontSize'] = _0x1a8905;
        }
        get ['padding']() {
            return this['_tf']['padding']['join'](',');
        }
        set ['padding'](_0x547c5d) {
            this['_tf']['padding'] = _0x373b03['fillArray'](_0xbb775b['labelPaddi' + 'ng'], _0x547c5d, Number);
        }
        get ['bgColor']() {
            return this['_tf']['bgColor'];
        }
        set ['bgColor'](_0x1e3500) {
            this['_tf']['bgColor'] = _0x1e3500;
        }
        get ['borderColo' + 'r']() {
            return this['_tf']['borderColo' + 'r'];
        }
        set ['borderColo' + 'r'](_0x5c19ba) {
            this['_tf']['borderColo' + 'r'] = _0x5c19ba;
        }
        get ['stroke']() {
            return this['_tf']['stroke'];
        }
        set ['stroke'](_0x280559) {
            this['_tf']['stroke'] = _0x280559;
        }
        get ['strokeColo' + 'r']() {
            return this['_tf']['strokeColo' + 'r'];
        }
        set ['strokeColo' + 'r'](_0x4fc5eb) {
            this['_tf']['strokeColo' + 'r'] = _0x4fc5eb;
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
            if (this['_width'] || this['_tf']['text'])
                return super['width'];
            return 0x0;
        }
        set ['width'](_0x372bd8) {
            super['width'] = _0x372bd8, this['_tf']['width'] = _0x372bd8;
        }
        get ['height']() {
            if (this['_height'] || this['_tf']['text'])
                return super['height'];
            return 0x0;
        }
        set ['height'](_0x96a5b4) {
            super['height'] = _0x96a5b4, this['_tf']['height'] = _0x96a5b4;
        }
        set ['dataSource'](_0x1c4a27) {
            this['_dataSourc' + 'e'] = _0x1c4a27;
            if (typeof _0x1c4a27 == 'number' || typeof _0x1c4a27 == 'string')
                this['text'] = _0x1c4a27 + '';
            else
                super['dataSource'] = _0x1c4a27;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['overflow']() {
            return this['_tf']['overflow'];
        }
        set ['overflow'](_0x42762c) {
            this['_tf']['overflow'] = _0x42762c;
        }
        get ['underline']() {
            return this['_tf']['underline'];
        }
        set ['underline'](_0x348c02) {
            this['_tf']['underline'] = _0x348c02;
        }
        get ['underlineC' + 'olor']() {
            return this['_tf']['underlineC' + 'olor'];
        }
        set ['underlineC' + 'olor'](_0x10b4ba) {
            this['_tf']['underlineC' + 'olor'] = _0x10b4ba;
        }
    }
    _0x322c83['ILaya']['regClass'](_0x2336dc), _0x322c83['ClassUtils']['regClass']('laya.ui.La' + 'bel', _0x2336dc), _0x322c83['ClassUtils']['regClass']('Laya.Label', _0x2336dc);
    class _0x21cdfc extends _0x283d79 {
        constructor(_0x2a7bd9 = null) {
            super(), this['isVertical'] = !![], this['showLabel'] = !![], this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, !_0x21cdfc['label'] && (_0x21cdfc['label'] = new _0x2336dc()), this['skin'] = _0x2a7bd9;
        }
        ['destroy'](_0x5a74c9 = !![]) {
            super['destroy'](_0x5a74c9), this['_bg'] && this['_bg']['destroy'](_0x5a74c9), this['_bar'] && this['_bar']['destroy'](_0x5a74c9), this['_progress'] && this['_progress']['destroy'](_0x5a74c9), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x87edde()), this['addChild'](this['_bar'] = new _0x561c8e());
        }
        ['initialize']() {
            this['_bar']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0';
            if (this['_progress'])
                this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'];
            this['allowClick' + 'Back'] = !![];
        }
        ['onBarMouse' + 'Down'](_0x1daf7a) {
            var _0x65f9ac = _0x322c83['ILaya'];
            this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x322c83['Point']()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x65f9ac['stage']['mouseX'], this['_ty'] = _0x65f9ac['stage']['mouseY'], _0x65f9ac['stage']['on'](_0x322c83['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x65f9ac['stage']['once'](_0x322c83['Event']['MOUSE_UP'], this, this['mouseUp']), _0x65f9ac['stage']['once'](_0x322c83['Event']['MOUSE_OUT'], this, this['mouseUp']), this['showValueT' + 'ext']();
        }
        ['showValueT' + 'ext']() {
            if (this['showLabel']) {
                var _0x50557c = _0x21cdfc['label'];
                this['addChild'](_0x50557c), _0x50557c['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x50557c['x'] = this['_bar']['_x'] + 0x14, _0x50557c['y'] = (this['_bar']['height'] - _0x50557c['height']) * 0.5 + this['_bar']['_y']) : (_0x50557c['y'] = this['_bar']['_y'] - 0x14, _0x50557c['x'] = (this['_bar']['width'] - _0x50557c['width']) * 0.5 + this['_bar']['_x']);
            }
        }
        ['hideValueT' + 'ext']() {
            _0x21cdfc['label'] && _0x21cdfc['label']['removeSelf']();
        }
        ['mouseUp'](_0x3b6dd1) {
            let _0x5332ca = _0x322c83['ILaya']['stage'];
            _0x5332ca['off'](_0x322c83['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x5332ca['off'](_0x322c83['Event']['MOUSE_UP'], this, this['mouseUp']), _0x5332ca['off'](_0x322c83['Event']['MOUSE_OUT'], this, this['mouseUp']), this['sendChange' + 'Event'](_0x322c83['Event']['CHANGED']), this['hideValueT' + 'ext']();
        }
        ['mouseMove'](_0x56634c) {
            let _0x56cbdb = _0x322c83['ILaya']['stage'];
            var _0xc90603 = this['_value'];
            if (this['isVertical']) {
                this['_bar']['y'] += (_0x56cbdb['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'];
                if (this['_bar']['_y'] > this['_maxMove'])
                    this['_bar']['y'] = this['_maxMove'];
                else {
                    if (this['_bar']['_y'] < 0x0)
                        this['_bar']['y'] = 0x0;
                }
                this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'];
                if (this['_progress'])
                    this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'];
            } else {
                this['_bar']['x'] += (_0x56cbdb['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'];
                if (this['_bar']['_x'] > this['_maxMove'])
                    this['_bar']['x'] = this['_maxMove'];
                else {
                    if (this['_bar']['_x'] < 0x0)
                        this['_bar']['x'] = 0x0;
                }
                this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'];
                if (this['_progress'])
                    this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'];
            }
            this['_tx'] = _0x56cbdb['mouseX'], this['_ty'] = _0x56cbdb['mouseY'];
            if (this['_tick'] != 0x0) {
                var _0x191968 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x191968) / _0x191968;
            }
            this['_value'] != _0xc90603 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
        }
        ['sendChange' + 'Event'](_0x14b051 = _0x322c83['Event']['CHANGE']) {
            this['event'](_0x14b051), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x5cee26) {
            this['_skin'] != _0x5cee26 && (this['_skin'] = _0x5cee26, this['_skin'] && !_0x322c83['Loader']['getRes'](this['_skin']) ? _0x322c83['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
            var _0x3b39b5 = this['_skin']['replace']('.png', '$progress.' + 'png');
            _0x322c83['Loader']['getRes'](_0x3b39b5) && (!this['_progress'] && (this['addChild'](this['_progress'] = new _0x87edde()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x3b39b5), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        ['setBarPoin' + 't']() {
            if (this['isVertical'])
                this['_bar']['x'] = Math['round']((this['_bg']['width'] - this['_bar']['width']) * 0.5);
            else
                this['_bar']['y'] = Math['round']((this['_bg']['height'] - this['_bar']['height']) * 0.5);
        }
        ['measureWid' + 'th']() {
            return Math['max'](this['_bg']['width'], this['_bar']['width']);
        }
        ['measureHei' + 'ght']() {
            return Math['max'](this['_bg']['height'], this['_bar']['height']);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed']();
            if (this['isVertical'])
                this['_bg']['height'] = this['height'];
            else
                this['_bg']['width'] = this['width'];
            this['setBarPoin' + 't'](), this['changeValu' + 'e']();
        }
        get ['sizeGrid']() {
            return this['_bg']['sizeGrid'];
        }
        set ['sizeGrid'](_0x2365e3) {
            this['_bg']['sizeGrid'] = _0x2365e3, this['_bar']['sizeGrid'] = _0x2365e3;
            if (this['_progress'])
                this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'];
        }
        ['setSlider'](_0x6608d, _0x3f7b2b, _0x3727bb) {
            this['_value'] = -0x1, this['_min'] = _0x6608d, this['_max'] = _0x3f7b2b > _0x6608d ? _0x3f7b2b : _0x6608d, this['value'] = _0x3727bb < _0x6608d ? _0x6608d : _0x3727bb > _0x3f7b2b ? _0x3f7b2b : _0x3727bb;
        }
        get ['tick']() {
            return this['_tick'];
        }
        set ['tick'](_0x4f9f6a) {
            this['_tick'] != _0x4f9f6a && (this['_tick'] = _0x4f9f6a, this['callLater'](this['changeValu' + 'e']));
        }
        ['changeValu' + 'e']() {
            if (this['tick'] != 0x0) {
                var _0x26f60c = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x26f60c) / _0x26f60c;
            }
            this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
            var _0x257c32 = this['_max'] - this['_min'];
            if (_0x257c32 === 0x0)
                _0x257c32 = 0x1;
            if (this['isVertical']) {
                this['_bar']['y'] = (this['_value'] - this['_min']) / _0x257c32 * (this['height'] - this['_bar']['height']);
                if (this['_progress'])
                    this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'];
            } else {
                this['_bar']['x'] = (this['_value'] - this['_min']) / _0x257c32 * (this['width'] - this['_bar']['width']);
                if (this['_progress'])
                    this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'];
            }
        }
        get ['max']() {
            return this['_max'];
        }
        set ['max'](_0x5b37ea) {
            this['_max'] != _0x5b37ea && (this['_max'] = _0x5b37ea, this['callLater'](this['changeValu' + 'e']));
        }
        get ['min']() {
            return this['_min'];
        }
        set ['min'](_0x1764ee) {
            this['_min'] != _0x1764ee && (this['_min'] = _0x1764ee, this['callLater'](this['changeValu' + 'e']));
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x4eb752) {
            if (this['_value'] != _0x4eb752) {
                var _0x24dacb = this['_value'];
                this['_value'] = _0x4eb752, this['changeValu' + 'e'](), this['_value'] != _0x24dacb && this['sendChange' + 'Event']();
            }
        }
        get ['allowClick' + 'Back']() {
            return this['_allowClic' + 'kBack'];
        }
        set ['allowClick' + 'Back'](_0x4848ea) {
            if (this['_allowClic' + 'kBack'] != _0x4848ea) {
                this['_allowClic' + 'kBack'] = _0x4848ea;
                if (_0x4848ea)
                    this['_bg']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']);
                else
                    this['_bg']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']);
            }
        }
        ['onBgMouseD' + 'own'](_0x3e292f) {
            var _0x2b7aa1 = this['_bg']['getMousePo' + 'int']();
            if (this['isVertical'])
                this['value'] = _0x2b7aa1['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'];
            else
                this['value'] = _0x2b7aa1['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
        }
        set ['dataSource'](_0x44978a) {
            this['_dataSourc' + 'e'] = _0x44978a;
            if (typeof _0x44978a == 'number' || typeof _0x44978a == 'string')
                this['value'] = Number(_0x44978a);
            else
                super['dataSource'] = _0x44978a;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bar']() {
            return this['_bar'];
        }
    }
    _0x21cdfc['label'] = null, _0x322c83['ILaya']['regClass'](_0x21cdfc), _0x322c83['ClassUtils']['regClass']('laya.ui.Sl' + 'ider', _0x21cdfc), _0x322c83['ClassUtils']['regClass']('Laya.Slide' + 'r', _0x21cdfc);
    class _0x3d31b4 extends _0x283d79 {
        constructor(_0x468b0e = null) {
            super(), this['rollRatio'] = 0.97, this['scaleBar'] = !![], this['autoHide'] = ![], this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['_showButto' + 'ns'] = _0x5f3ab0['showButton' + 's'], this['_scrollSiz' + 'e'] = 0x1, this['_thumbPerc' + 'ent'] = 0x1, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_isElastic'] = ![], this['_hide'] = ![], this['_clickOnly'] = !![], this['_touchScro' + 'llEnable'] = _0x5f3ab0['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x5f3ab0['mouseWheel' + 'Enable'], this['skin'] = _0x468b0e, this['max'] = 0x1;
        }
        ['destroy'](_0x372b67 = !![]) {
            this['stopScroll'](), this['target'] = null, super['destroy'](_0x372b67), this['upButton'] && this['upButton']['destroy'](_0x372b67), this['downButton'] && this['downButton']['destroy'](_0x372b67), this['slider'] && this['slider']['destroy'](_0x372b67), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['slider'] = new _0x21cdfc()), this['addChild'](this['upButton'] = new _0x561c8e()), this['addChild'](this['downButton'] = new _0x561c8e());
        }
        ['initialize']() {
            this['slider']['showLabel'] = ![], this['slider']['tick'] = 0x0, this['slider']['on'](_0x322c83['Event']['CHANGE'], this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']), this['downButton']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['onSliderCh' + 'ange']() {
            if (this['_value'] != this['slider']['value'])
                this['value'] = this['slider']['value'];
        }
        ['onButtonMo' + 'useDown'](_0x261e87) {
            var _0xefa2f0 = _0x261e87['currentTar' + 'get'] === this['upButton'];
            this['slide'](_0xefa2f0), _0x322c83['ILaya']['timer']['once'](_0xbb775b['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0xefa2f0]), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']);
        }
        ['startLoop'](_0x5da2b2) {
            _0x322c83['ILaya']['timer']['frameLoop'](0x1, this, this['slide'], [_0x5da2b2]);
        }
        ['slide'](_0x26e680) {
            if (_0x26e680)
                this['value'] -= this['_scrollSiz' + 'e'];
            else
                this['value'] += this['_scrollSiz' + 'e'];
        }
        ['onStageMou' + 'seUp'](_0x2f43c9) {
            _0x322c83['ILaya']['timer']['clear'](this, this['startLoop']), _0x322c83['ILaya']['timer']['clear'](this, this['slide']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x413aae) {
            if (_0x413aae == '\x20')
                return;
            this['_skin'] != _0x413aae && (this['_skin'] = _0x413aae, this['_skin'] && !_0x322c83['Loader']['getRes'](this['_skin']) ? _0x322c83['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$up.png'),
                this['_skin']['replace']('.png', '$down.png'),
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        ['changeScro' + 'llBar']() {
            this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'];
            this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png'));
            if (this['slider']['isVertical'])
                this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0;
            else
                this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0;
            this['resetPosit' + 'ions'](), this['repaint']();
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['repaint'](), this['resetPosit' + 'ions'](), this['event'](_0x322c83['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
        }
        ['resetPosit' + 'ions']() {
            if (this['slider']['isVertical'])
                this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0);
            else
                this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0);
            this['resetButto' + 'nPosition']();
        }
        ['resetButto' + 'nPosition']() {
            if (this['slider']['isVertical'])
                this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'];
            else
                this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
        }
        ['measureWid' + 'th']() {
            if (this['slider']['isVertical'])
                return this['slider']['width'];
            return 0x64;
        }
        ['measureHei' + 'ght']() {
            if (this['slider']['isVertical'])
                return 0x64;
            return this['slider']['height'];
        }
        ['setScroll'](_0x5b095c, _0x4c1889, _0x40ade7) {
            this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x5b095c, _0x4c1889, _0x40ade7), this['slider']['bar']['visible'] = _0x4c1889 > 0x0;
            if (!this['_hide'] && this['autoHide'])
                this['visible'] = ![];
        }
        get ['max']() {
            return this['slider']['max'];
        }
        set ['max'](_0x5267f9) {
            this['slider']['max'] = _0x5267f9;
        }
        get ['min']() {
            return this['slider']['min'];
        }
        set ['min'](_0x2d0443) {
            this['slider']['min'] = _0x2d0443;
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x293179) {
            _0x293179 !== this['_value'] && (this['_value'] = _0x293179, !this['_isElastic'] && (this['slider']['_value'] != _0x293179 && (this['slider']['_value'] = _0x293179, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event'](_0x322c83['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
        }
        get ['isVertical']() {
            return this['slider']['isVertical'];
        }
        set ['isVertical'](_0x2db485) {
            this['slider']['isVertical'] = _0x2db485;
        }
        get ['sizeGrid']() {
            return this['slider']['sizeGrid'];
        }
        set ['sizeGrid'](_0x28ec1f) {
            this['slider']['sizeGrid'] = _0x28ec1f;
        }
        get ['scrollSize']() {
            return this['_scrollSiz' + 'e'];
        }
        set ['scrollSize'](_0x17fa45) {
            this['_scrollSiz' + 'e'] = _0x17fa45;
        }
        set ['dataSource'](_0x3f60a1) {
            this['_dataSourc' + 'e'] = _0x3f60a1;
            if (typeof _0x3f60a1 == 'number' || typeof _0x3f60a1 == 'string')
                this['value'] = Number(_0x3f60a1);
            else
                super['dataSource'] = _0x3f60a1;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['thumbPerce' + 'nt']() {
            return this['_thumbPerc' + 'ent'];
        }
        set ['thumbPerce' + 'nt'](_0x5dc92d) {
            this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x5dc92d = _0x5dc92d >= 0x1 ? 0.99 : _0x5dc92d, this['_thumbPerc' + 'ent'] = _0x5dc92d;
            if (this['scaleBar']) {
                if (this['slider']['isVertical'])
                    this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x5dc92d, _0xbb775b['scrollBarM' + 'inNum']);
                else
                    this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x5dc92d, _0xbb775b['scrollBarM' + 'inNum']);
            }
        }
        get ['target']() {
            return this['_target'];
        }
        set ['target'](_0x5ba619) {
            this['_target'] && (this['_target']['off'](_0x322c83['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_target']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x5ba619, _0x5ba619 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on'](_0x322c83['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown']));
        }
        get ['hide']() {
            return this['_hide'];
        }
        set ['hide'](_0x175452) {
            this['_hide'] = _0x175452, this['visible'] = !_0x175452;
        }
        get ['showButton' + 's']() {
            return this['_showButto' + 'ns'];
        }
        set ['showButton' + 's'](_0x45668c) {
            this['_showButto' + 'ns'] = _0x45668c, this['callLater'](this['changeScro' + 'llBar']);
        }
        get ['touchScrol' + 'lEnable']() {
            return this['_touchScro' + 'llEnable'];
        }
        set ['touchScrol' + 'lEnable'](_0x393ad8) {
            this['_touchScro' + 'llEnable'] = _0x393ad8, this['target'] = this['_target'];
        }
        get ['mouseWheel' + 'Enable']() {
            return this['_mouseWhee' + 'lEnable'];
        }
        set ['mouseWheel' + 'Enable'](_0x140a9f) {
            this['_mouseWhee' + 'lEnable'] = _0x140a9f, this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useWheel'](_0x333ec0) {
            this['value'] -= _0x333ec0['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useDown'](_0x46c8e2) {
            if (this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x46c8e2))
                return;
            this['event'](_0x322c83['Event']['END']), this['_clickOnly'] = !![], this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_lastPoint'] || (this['_lastPoint'] = new _0x322c83['Point']()), this['_lastPoint']['setTo'](_0x322c83['ILaya']['stage']['mouseX'], _0x322c83['ILaya']['stage']['mouseY']), _0x322c83['ILaya']['timer']['clear'](this, this['tweenMove']), _0x322c83['Tween']['clearTween'](this), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['startDragF' + 'orce']() {
            this['_clickOnly'] = !![], this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = ![], this['_lastPoint'] || (this['_lastPoint'] = new _0x322c83['Point']()), this['_lastPoint']['setTo'](_0x322c83['ILaya']['stage']['mouseX'], _0x322c83['ILaya']['stage']['mouseY']), _0x322c83['ILaya']['timer']['clear'](this, this['tweenMove']), _0x322c83['Tween']['clearTween'](this), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['cancelDrag' + 'Op']() {
            _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['timer']['clear'](this, this['tweenMove']), _0x322c83['ILaya']['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !![];
        }
        ['checkTrigg' + 'ers'](_0x5e44a6 = ![]) {
            if (this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0) {
                if (this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x5e44a6))
                    return this['cancelDrag' + 'Op'](), this['value'] = 0x0, !![];
            }
            if (this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max']) {
                if (this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x5e44a6))
                    return this['cancelDrag' + 'Op'](), this['value'] = this['max'], !![];
            }
            return ![];
        }
        get ['lastOffset']() {
            return this['_lastOffse' + 't'];
        }
        ['startTween' + 'MoveForce'](_0x2de48d) {
            this['_lastOffse' + 't'] = _0x2de48d, _0x322c83['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
        }
        ['loop']() {
            var _0x3431f7 = _0x322c83['ILaya']['stage']['mouseY'], _0x42f9ff = _0x322c83['ILaya']['stage']['mouseX'];
            this['_lastOffse' + 't'] = this['isVertical'] ? _0x3431f7 - this['_lastPoint']['y'] : _0x42f9ff - this['_lastPoint']['x'];
            if (this['_clickOnly']) {
                if (Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x322c83['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x322c83['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1) {
                    this['_clickOnly'] = ![];
                    if (this['checkTrigg' + 'ers']())
                        return;
                    this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = ![], !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !![]), this['event'](_0x322c83['Event']['START']);
                } else
                    return;
            } else {
                if (this['checkTrigg' + 'ers']())
                    return;
            }
            this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x42f9ff, this['_lastPoint']['y'] = _0x3431f7;
            if (this['_lastOffse' + 't'] === 0x0)
                return;
            !this['_checkElas' + 'tic'] && (this['elasticDis' + 'tance'] > 0x0 ? !this['_checkElas' + 'tic'] && this['_lastOffse' + 't'] != 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !![], this['_checkElas' + 'tic'] = !![]) : this['_isElastic'] = ![]) : this['_checkElas' + 'tic'] = !![]);
            if (this['_isElastic']) {
                if (this['_value'] <= this['min']) {
                    if (this['_lastOffse' + 't'] > 0x0)
                        this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']);
                    else {
                        this['value'] -= this['_lastOffse' + 't'] * 0.5;
                        if (this['_value'] >= this['min'])
                            this['_checkElas' + 'tic'] = ![];
                    }
                } else {
                    if (this['_value'] >= this['max']) {
                        if (this['_lastOffse' + 't'] < 0x0)
                            this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']);
                        else {
                            this['value'] -= this['_lastOffse' + 't'] * 0.5;
                            if (this['_value'] <= this['max'])
                                this['_checkElas' + 'tic'] = ![];
                        }
                    }
                }
            } else
                this['value'] -= this['_lastOffse' + 't'];
        }
        ['onStageMou' + 'seUp2'](_0x481fef) {
            _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x322c83['ILaya']['timer']['clear'](this, this['loop']);
            if (this['_clickOnly']) {
                if (this['_value'] >= this['min'] && this['_value'] <= this['max'])
                    return;
            }
            this['_target']['mouseEnabl' + 'ed'] = !![];
            if (this['_isElastic']) {
                if (this['_value'] < this['min'])
                    _0x322c83['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x322c83['Ease']['sineOut'], _0x322c83['Handler']['create'](this, this['elasticOve' + 'r']));
                else
                    this['_value'] > this['max'] && _0x322c83['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x322c83['Ease']['sineOut'], _0x322c83['Handler']['create'](this, this['elasticOve' + 'r']));
            } else {
                if (!this['_offsets'])
                    return;
                this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x322c83['ILaya']['stage']['mouseY'] - this['_lastPoint']['y'] : _0x322c83['ILaya']['stage']['mouseX'] - this['_lastPoint']['x']);
                var _0x3c604b = 0x0, _0x28b7aa = Math['min'](this['_offsets']['length'], 0x3);
                for (var _0x55ea61 = 0x0; _0x55ea61 < _0x28b7aa; _0x55ea61++) {
                    _0x3c604b += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x55ea61];
                }
                this['_lastOffse' + 't'] = _0x3c604b / _0x28b7aa, _0x3c604b = Math['abs'](this['_lastOffse' + 't']);
                if (_0x3c604b < 0x2) {
                    this['event'](_0x322c83['Event']['END']);
                    return;
                }
                if (_0x3c604b > 0xfa)
                    this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa;
                var _0x48aa0f = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                _0x322c83['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x48aa0f]);
            }
        }
        ['elasticOve' + 'r']() {
            this['_isElastic'] = ![], !this['hide'] && this['autoHide'] && _0x322c83['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event'](_0x322c83['Event']['END']);
        }
        ['tweenMove'](_0xb9bb4e) {
            this['_lastOffse' + 't'] *= this['rollRatio'];
            if (this['checkTrigg' + 'ers'](!![]))
                return;
            var _0x1a0d45;
            if (_0xb9bb4e > 0x0) {
                if (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min']) {
                    this['_isElastic'] = !![], _0x1a0d45 = -(this['min'] - _0xb9bb4e - this['value']) * 0.5;
                    if (this['_lastOffse' + 't'] > _0x1a0d45)
                        this['_lastOffse' + 't'] = _0x1a0d45;
                } else {
                    if (this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max']) {
                        this['_isElastic'] = !![], _0x1a0d45 = -(this['max'] + _0xb9bb4e - this['value']) * 0.5;
                        if (this['_lastOffse' + 't'] < _0x1a0d45)
                            this['_lastOffse' + 't'] = _0x1a0d45;
                    }
                }
            }
            this['value'] -= this['_lastOffse' + 't'];
            if (Math['abs'](this['_lastOffse' + 't']) < 0.1) {
                _0x322c83['ILaya']['timer']['clear'](this, this['tweenMove']);
                if (this['_isElastic']) {
                    if (this['_value'] < this['min'])
                        _0x322c83['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x322c83['Ease']['sineOut'], _0x322c83['Handler']['create'](this, this['elasticOve' + 'r']));
                    else
                        this['_value'] > this['max'] ? _0x322c83['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x322c83['Ease']['sineOut'], _0x322c83['Handler']['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']();
                    return;
                }
                this['event'](_0x322c83['Event']['END']), !this['hide'] && this['autoHide'] && _0x322c83['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4);
            }
        }
        ['stopScroll']() {
            this['onStageMou' + 'seUp2'](null), _0x322c83['ILaya']['timer']['clear'](this, this['tweenMove']), _0x322c83['Tween']['clearTween'](this);
        }
        get ['tick']() {
            return this['slider']['tick'];
        }
        set ['tick'](_0x1b3482) {
            this['slider']['tick'] = _0x1b3482;
        }
    }
    _0x322c83['ILaya']['regClass'](_0x3d31b4), _0x322c83['ClassUtils']['regClass']('laya.ui.Sc' + 'rollBar', _0x3d31b4), _0x322c83['ClassUtils']['regClass']('Laya.Scrol' + 'lBar', _0x3d31b4);
    class _0x15b518 extends _0x3d31b4 {
    }
    _0x322c83['ILaya']['regClass'](_0x15b518), _0x322c83['ClassUtils']['regClass']('laya.ui.VS' + 'crollBar', _0x15b518), _0x322c83['ClassUtils']['regClass']('Laya.VScro' + 'llBar', _0x15b518);
    class _0x3f640f extends _0x3d31b4 {
        ['initialize']() {
            super['initialize'](), this['slider']['isVertical'] = ![];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x3f640f), _0x322c83['ClassUtils']['regClass']('laya.ui.HS' + 'crollBar', _0x3f640f), _0x322c83['ClassUtils']['regClass']('Laya.HScro' + 'llBar', _0x3f640f);
    class _0x105093 extends _0x490c4a {
        constructor() {
            super(...arguments), this['selectEnab' + 'le'] = ![], this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_cells'] = [], this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !![], this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_createdLi' + 'ne'] = 0x0, this['_offset'] = new _0x322c83['Point'](), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = ![], this['_preLen'] = 0x0;
        }
        ['destroy'](_0x159a2a = !![]) {
            this['_content'] && this['_content']['destroy'](_0x159a2a), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x159a2a), super['destroy'](_0x159a2a), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_content'] = new _0x490c4a());
        }
        set ['cacheAs'](_0x95642f) {
            super['cacheAs'] = _0x95642f;
            if (this['_scrollBar']) {
                this['_usedCache'] = null;
                if (_0x95642f !== 'none')
                    this['_scrollBar']['on'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art']);
                else
                    this['_scrollBar']['off'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art']);
            }
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_scrollBar']['once'](_0x322c83['Event']['END'], this, this['onScrollEn' + 'd']);
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
        set ['vScrollBar' + 'Skin'](_0x2bb0f5) {
            this['_removePre' + 'ScrollBar']();
            var _0x5d54b7 = new _0x15b518();
            _0x5d54b7['name'] = 'scrollBar', _0x5d54b7['right'] = 0x0, _0x5d54b7['skin'] = _0x2bb0f5, _0x5d54b7['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x5d54b7, this['addChild'](_0x5d54b7), this['_setCellCh' + 'anged']();
        }
        ['_removePre' + 'ScrollBar']() {
            var _0x146051 = this['removeChil' + 'dByName']('scrollBar');
            if (_0x146051)
                _0x146051['destroy'](!![]);
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x32ae73) {
            this['_removePre' + 'ScrollBar']();
            var _0x54f9d9 = new _0x3f640f();
            _0x54f9d9['name'] = 'scrollBar', _0x54f9d9['bottom'] = 0x0, _0x54f9d9['skin'] = _0x32ae73, _0x54f9d9['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x54f9d9, this['addChild'](_0x54f9d9), this['_setCellCh' + 'anged']();
        }
        get ['scrollBar']() {
            return this['_scrollBar'];
        }
        set ['scrollBar'](_0x4dff43) {
            this['_scrollBar'] != _0x4dff43 && (this['_scrollBar'] = _0x4dff43, _0x4dff43 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on'](_0x322c83['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'])));
        }
        get ['itemRender']() {
            return this['_itemRende' + 'r'];
        }
        set ['itemRender'](_0x38a3ec) {
            if (this['_itemRende' + 'r'] != _0x38a3ec) {
                this['_itemRende' + 'r'] = _0x38a3ec;
                for (var _0x2cd507 = this['_cells']['length'] - 0x1; _0x2cd507 > -0x1; _0x2cd507--) {
                    this['_cells'][_0x2cd507]['destroy']();
                }
                this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
            }
        }
        set ['width'](_0x3ddad1) {
            _0x3ddad1 != this['_width'] && (super['width'] = _0x3ddad1, this['_setCellCh' + 'anged']());
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xafd4b2) {
            _0xafd4b2 != this['_height'] && (super['height'] = _0xafd4b2, this['_setCellCh' + 'anged']());
        }
        get ['height']() {
            return super['height'];
        }
        get ['repeatX']() {
            return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
        }
        set ['repeatX'](_0x1eeb90) {
            this['_repeatX'] = _0x1eeb90, this['_setCellCh' + 'anged']();
        }
        get ['repeatY']() {
            return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
        }
        set ['repeatY'](_0x2747db) {
            this['_repeatY'] = _0x2747db, this['_setCellCh' + 'anged']();
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x58d3f8) {
            this['_spaceX'] = _0x58d3f8, this['_setCellCh' + 'anged']();
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x22a045) {
            this['_spaceY'] = _0x22a045, this['_setCellCh' + 'anged']();
        }
        ['changeCell' + 's']() {
            this['_cellChang' + 'ed'] = ![];
            if (this['_itemRende' + 'r']) {
                this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                var _0x1de24a = this['_getOneCel' + 'l'](), _0x11e83e = _0x1de24a['width'] + this['_spaceX'] || 0x1, _0x1d8492 = _0x1de24a['height'] + this['_spaceY'] || 0x1;
                if (this['_width'] > 0x0)
                    this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x11e83e) : Math['ceil'](this['_width'] / _0x11e83e);
                if (this['_height'] > 0x0)
                    this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x1d8492) : Math['round'](this['_height'] / _0x1d8492);
                var _0x506e50 = this['_width'] ? this['_width'] : _0x11e83e * this['repeatX'] - this['_spaceX'], _0xf54ec5 = this['_height'] ? this['_height'] : _0x1d8492 * this['repeatY'] - this['_spaceY'];
                this['_cellSize'] = this['_isVertica' + 'l'] ? _0x1d8492 : _0x11e83e, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x1d8492 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0xf54ec5 - this['_spaceY'] : _0x11e83e * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x506e50 - this['_spaceX'];
                if (this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'])
                    this['_scrollBar']['height'] = _0xf54ec5;
                else {
                    if (!this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'])
                        this['_scrollBar']['width'] = _0x506e50;
                }
                this['setContent' + 'Size'](_0x506e50, _0xf54ec5);
                var _0xa52f4 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x1f925d = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                this['_createIte' + 'ms'](0x0, _0xa52f4, _0x1f925d), this['_createdLi' + 'ne'] = _0x1f925d, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
            }
        }
        ['_getOneCel' + 'l']() {
            if (this['_cells']['length'] === 0x0) {
                var _0x28ca34 = this['createItem']();
                this['_offset']['setTo'](_0x28ca34['_x'], _0x28ca34['_y']);
                if (this['cacheConte' + 'nt'])
                    return _0x28ca34;
                this['_cells']['push'](_0x28ca34);
            }
            return this['_cells'][0x0];
        }
        ['_createIte' + 'ms'](_0x547a3a, _0xef07f3, _0xa6f659) {
            var _0x2a73cf = this['_content'], _0x161e45 = this['_getOneCel' + 'l'](), _0x17253d = _0x161e45['width'] + this['_spaceX'], _0x3a4780 = _0x161e45['height'] + this['_spaceY'];
            if (this['cacheConte' + 'nt']) {
                var _0x2f1ea7 = new _0x490c4a();
                _0x2f1ea7['cacheAs'] = 'normal', _0x2f1ea7['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x547a3a) * _0x17253d, (this['_isVertica' + 'l'] ? _0x547a3a : 0x0) * _0x3a4780), this['_content']['addChild'](_0x2f1ea7), _0x2a73cf = _0x2f1ea7;
            } else {
                var _0x2fcb33 = [];
                for (var _0x16bbba = this['_cells']['length'] - 0x1; _0x16bbba > -0x1; _0x16bbba--) {
                    var _0xcad9a3 = this['_cells'][_0x16bbba];
                    _0xcad9a3['removeSelf'](), _0x2fcb33['push'](_0xcad9a3);
                }
                this['_cells']['length'] = 0x0;
            }
            for (var _0x56f4de = _0x547a3a; _0x56f4de < _0xa6f659; _0x56f4de++) {
                for (var _0x634f88 = 0x0; _0x634f88 < _0xef07f3; _0x634f88++) {
                    _0x2fcb33 && _0x2fcb33['length'] ? _0x161e45 = _0x2fcb33['pop']() : _0x161e45 = this['createItem'](), _0x161e45['x'] = (this['_isVertica' + 'l'] ? _0x634f88 : _0x56f4de) * _0x17253d - _0x2a73cf['_x'], _0x161e45['y'] = (this['_isVertica' + 'l'] ? _0x56f4de : _0x634f88) * _0x3a4780 - _0x2a73cf['_y'], _0x161e45['name'] = 'item' + (_0x56f4de * _0xef07f3 + _0x634f88), _0x2a73cf['addChild'](_0x161e45), this['addCell'](_0x161e45);
                }
            }
        }
        ['createItem']() {
            var _0x6b5bb0 = [];
            if (typeof this['_itemRende' + 'r'] == 'function')
                var _0x1e62e6 = new this['_itemRende' + 'r']();
            else
                _0x1e62e6 = _0x322c83['SceneUtils']['createComp'](this['_itemRende' + 'r'], null, null, _0x6b5bb0);
            if (_0x6b5bb0['length'] == 0x0 && _0x1e62e6['_watchMap']) {
                var _0x2e5dbd = _0x1e62e6['_watchMap'];
                for (var _0x59f7cb in _0x2e5dbd) {
                    var _0x574a4e = _0x2e5dbd[_0x59f7cb];
                    for (var _0x1d9309 = 0x0; _0x1d9309 < _0x574a4e['length']; _0x1d9309++) {
                        var _0x478a96 = _0x574a4e[_0x1d9309];
                        _0x6b5bb0['push'](_0x478a96['comp'], _0x478a96['prop'], _0x478a96['value']);
                    }
                }
            }
            if (_0x6b5bb0['length'])
                _0x1e62e6['_$bindData'] = _0x6b5bb0;
            return _0x1e62e6;
        }
        ['addCell'](_0x163147) {
            _0x163147['on'](_0x322c83['Event']['CLICK'], this, this['onCellMous' + 'e']), _0x163147['on'](_0x322c83['Event']['RIGHT_CLIC' + 'K'], this, this['onCellMous' + 'e']), _0x163147['on'](_0x322c83['Event']['MOUSE_OVER'], this, this['onCellMous' + 'e']), _0x163147['on'](_0x322c83['Event']['MOUSE_OUT'], this, this['onCellMous' + 'e']), _0x163147['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onCellMous' + 'e']), _0x163147['on'](_0x322c83['Event']['MOUSE_UP'], this, this['onCellMous' + 'e']), this['_cells']['push'](_0x163147);
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            if (!this['_itemRende' + 'r'] && this['getChildBy' + 'Name']('item0') != null) {
                this['repeatX'] = 0x1;
                var _0x462efe;
                _0x462efe = 0x0;
                for (var _0x4fb57f = 0x0; _0x4fb57f < 0x2710; _0x4fb57f++) {
                    var _0x5c57ff = this['getChildBy' + 'Name']('item' + _0x4fb57f);
                    if (_0x5c57ff) {
                        this['addCell'](_0x5c57ff), _0x462efe++;
                        continue;
                    }
                    break;
                }
                this['repeatY'] = _0x462efe;
            }
        }
        ['setContent' + 'Size'](_0x5586c7, _0x393643) {
            this['_content']['width'] = _0x5586c7, this['_content']['height'] = _0x393643, (this['_scrollBar'] || this['_offset']['x'] != 0x0 || this['_offset']['y'] != 0x0) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x322c83['Rectangle']['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x5586c7, _0x393643), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event'](_0x322c83['Event']['RESIZE']);
        }
        ['onCellMous' + 'e'](_0xe50df9) {
            if (_0xe50df9['type'] === _0x322c83['Event']['MOUSE_DOWN'])
                this['_isMoved'] = ![];
            var _0x2a6ae8 = _0xe50df9['currentTar' + 'get'], _0x311a2a = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x2a6ae8);
            if (_0x311a2a < 0x0)
                return;
            if (_0xe50df9['type'] === _0x322c83['Event']['CLICK'] || _0xe50df9['type'] === _0x322c83['Event']['RIGHT_CLIC' + 'K']) {
                if (this['selectEnab' + 'le'] && !this['_isMoved'])
                    this['selectedIn' + 'dex'] = _0x311a2a;
                else
                    this['changeCell' + 'State'](_0x2a6ae8, !![], 0x0);
            } else
                (_0xe50df9['type'] === _0x322c83['Event']['MOUSE_OVER'] || _0xe50df9['type'] === _0x322c83['Event']['MOUSE_OUT']) && this['_selectedI' + 'ndex'] !== _0x311a2a && this['changeCell' + 'State'](_0x2a6ae8, _0xe50df9['type'] === _0x322c83['Event']['MOUSE_OVER'], 0x0);
            this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                _0xe50df9,
                _0x311a2a
            ]);
        }
        ['changeCell' + 'State'](_0x5744aa, _0x33cc00, _0x2e58d8) {
            var _0x3c4b6c = _0x5744aa['getChildBy' + 'Name']('selectBox');
            _0x3c4b6c && (this['selectEnab' + 'le'] = !![], _0x3c4b6c['visible'] = _0x33cc00, _0x3c4b6c['index'] = _0x2e58d8);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['width'], this['height']);
            if (this['_scrollBar'])
                this['callLater'](this['onScrollBa' + 'rChange']);
        }
        ['onScrollBa' + 'rChange'](_0x4f2bb0 = null) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            var _0x54e2d4 = this['_scrollBar']['value'], _0x435ae7 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x4f1c9f = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x547e8e = Math['floor'](_0x54e2d4 / this['_cellSize']);
            if (!this['cacheConte' + 'nt']) {
                var _0x57b546 = _0x547e8e * _0x435ae7, _0x3cec11 = 0x0;
                if (_0x57b546 > this['_startInde' + 'x']) {
                    _0x3cec11 = _0x57b546 - this['_startInde' + 'x'];
                    var _0x5ef81a = !![], _0x2a06bd = this['_startInde' + 'x'] + _0x435ae7 * (_0x4f1c9f + 0x1);
                    this['_isMoved'] = !![];
                } else
                    _0x57b546 < this['_startInde' + 'x'] && (_0x3cec11 = this['_startInde' + 'x'] - _0x57b546, _0x5ef81a = ![], _0x2a06bd = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !![]);
                for (var _0x38f006 = 0x0; _0x38f006 < _0x3cec11; _0x38f006++) {
                    if (_0x5ef81a) {
                        var _0x3610ad = this['_cells']['shift']();
                        this['_cells'][this['_cells']['length']] = _0x3610ad;
                        var _0x2696cf = _0x2a06bd + _0x38f006;
                    } else
                        _0x3610ad = this['_cells']['pop'](), this['_cells']['unshift'](_0x3610ad), _0x2696cf = _0x2a06bd - _0x38f006;
                    var _0x24c27d = Math['floor'](_0x2696cf / _0x435ae7) * this['_cellSize'];
                    this['_isVertica' + 'l'] ? _0x3610ad['y'] = _0x24c27d : _0x3610ad['x'] = _0x24c27d, this['renderItem'](_0x3610ad, _0x2696cf);
                }
                this['_startInde' + 'x'] = _0x57b546, this['changeSele' + 'ctStatus']();
            } else
                _0x3cec11 = _0x4f1c9f + 0x1, this['_createdLi' + 'ne'] - _0x547e8e < _0x3cec11 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x435ae7, this['_createdLi' + 'ne'] + _0x3cec11), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x435ae7, 0x0), this['_createdLi' + 'ne'] += _0x3cec11);
            var _0x86a31b = this['_content']['_style']['scrollRect'];
            this['_isVertica' + 'l'] ? (_0x86a31b['y'] = _0x54e2d4 - this['_offset']['y'], _0x86a31b['x'] = -this['_offset']['x']) : (_0x86a31b['y'] = -this['_offset']['y'], _0x86a31b['x'] = _0x54e2d4 - this['_offset']['x']), this['_content']['scrollRect'] = _0x86a31b;
        }
        ['posCell'](_0x54dd7f, _0x3907ee) {
            if (!this['_scrollBar'])
                return;
            var _0x2cc01c = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x1c9c55 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x49b37c = Math['floor'](_0x3907ee / _0x2cc01c) * this['_cellSize'];
            this['_isVertica' + 'l'] ? _0x54dd7f['_y'] = _0x49b37c : _0x54dd7f['x'] = _0x49b37c;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3f3a93) {
            this['_selectedI' + 'ndex'] != _0x3f3a93 && (this['_selectedI' + 'ndex'] = _0x3f3a93, this['changeSele' + 'ctStatus'](), this['event'](_0x322c83['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x3f3a93), this['startIndex'] = this['_startInde' + 'x']);
        }
        ['changeSele' + 'ctStatus']() {
            for (var _0x3a4013 = 0x0, _0xc7db28 = this['_cells']['length']; _0x3a4013 < _0xc7db28; _0x3a4013++) {
                this['changeCell' + 'State'](this['_cells'][_0x3a4013], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x3a4013, 0x1);
            }
        }
        get ['selectedIt' + 'em']() {
            return this['_selectedI' + 'ndex'] != -0x1 ? this['_array'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedIt' + 'em'](_0x4ee94b) {
            this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x4ee94b);
        }
        get ['selection']() {
            return this['getCell'](this['_selectedI' + 'ndex']);
        }
        set ['selection'](_0x5897a5) {
            this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x5897a5);
        }
        get ['startIndex']() {
            return this['_startInde' + 'x'];
        }
        set ['startIndex'](_0x12e4e1) {
            this['_startInde' + 'x'] = _0x12e4e1 > 0x0 ? _0x12e4e1 : 0x0, this['callLater'](this['renderItem' + 's']);
        }
        ['renderItem' + 's'](_0x3f0dfa = 0x0, _0x42736 = 0x0) {
            for (var _0x21903f = _0x3f0dfa, _0x100f66 = _0x42736 || this['_cells']['length']; _0x21903f < _0x100f66; _0x21903f++) {
                this['renderItem'](this['_cells'][_0x21903f], this['_startInde' + 'x'] + _0x21903f);
            }
            this['changeSele' + 'ctStatus']();
        }
        ['renderItem'](_0x32dc66, _0x29246c) {
            if (this['_array'] && _0x29246c >= 0x0 && _0x29246c < this['_array']['length']) {
                _0x32dc66['visible'] = !![];
                if (_0x32dc66['_$bindData'])
                    _0x32dc66['_dataSourc' + 'e'] = this['_array'][_0x29246c], this['_bindData'](_0x32dc66, this['_array'][_0x29246c]);
                else
                    _0x32dc66['dataSource'] = this['_array'][_0x29246c];
                !this['cacheConte' + 'nt'] && this['posCell'](_0x32dc66, _0x29246c);
                if (this['hasListene' + 'r'](_0x322c83['Event']['RENDER']))
                    this['event'](_0x322c83['Event']['RENDER'], [
                        _0x32dc66,
                        _0x29246c
                    ]);
                if (this['renderHand' + 'ler'])
                    this['renderHand' + 'ler']['runWith']([
                        _0x32dc66,
                        _0x29246c
                    ]);
            } else
                _0x32dc66['visible'] = ![], _0x32dc66['dataSource'] = null;
        }
        ['_bindData'](_0x209b98, _0x20bc39) {
            var _0xd60ceb = _0x209b98['_$bindData'];
            for (var _0x1493ff = 0x0, _0x302497 = _0xd60ceb['length']; _0x1493ff < _0x302497; _0x1493ff++) {
                var _0x9b47ad = _0xd60ceb[_0x1493ff++], _0x237add = _0xd60ceb[_0x1493ff++], _0x265c63 = _0xd60ceb[_0x1493ff], _0x45a59a = _0x373b03['getBindFun'](_0x265c63);
                _0x9b47ad[_0x237add] = _0x45a59a['call'](this, _0x20bc39);
            }
        }
        get ['array']() {
            return this['_array'];
        }
        set ['array'](_0x50c3c1) {
            this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x50c3c1 || [], this['_preLen'] = this['_array']['length'];
            var _0x2b29e0 = this['_array']['length'];
            this['totalPage'] = Math['ceil'](_0x2b29e0 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x2b29e0 ? this['_selectedI' + 'ndex'] : _0x2b29e0 - 0x1, this['startIndex'] = this['_startInde' + 'x'];
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x3711e7 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x268747 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x417fba = Math['ceil'](_0x2b29e0 / _0x3711e7), _0x31472f = this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage'];
                _0x31472f > 0x1 && _0x417fba >= _0x268747 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x268747 / _0x417fba, this['_scrollBar']['setScroll'](0x0, (_0x417fba - _0x268747) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
            }
        }
        ['updateArra' + 'y'](_0xe5d238) {
            this['_array'] = _0xe5d238;
            var _0x381d5f;
            if (this['_array']) {
                _0x381d5f = this['_preLen'] - this['_startInde' + 'x'];
                if (_0x381d5f >= 0x0)
                    this['renderItem' + 's'](_0x381d5f);
                this['_preLen'] = this['_array']['length'];
            }
            if (this['_scrollBar']) {
                var _0xc6d02e = _0xe5d238['length'], _0x3280f2 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0xf2b965 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x58ea2b = Math['ceil'](_0xc6d02e / _0x3280f2);
                _0x58ea2b >= _0xf2b965 && (this['_scrollBar']['thumbPerce' + 'nt'] = _0xf2b965 / _0x58ea2b, this['_scrollBar']['slider']['_max'] = (_0x58ea2b - _0xf2b965) * this['_cellSize'] + this['_cellOffse' + 't']);
            }
        }
        get ['page']() {
            return this['_page'];
        }
        set ['page'](_0x3f380a) {
            this['_page'] = _0x3f380a, this['_array'] && (this['_page'] = _0x3f380a > 0x0 ? _0x3f380a : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
        }
        get ['length']() {
            return this['_array'] ? this['_array']['length'] : 0x0;
        }
        set ['dataSource'](_0x27bdc3) {
            this['_dataSourc' + 'e'] = _0x27bdc3;
            if (typeof _0x27bdc3 == 'number' || typeof _0x27bdc3 == 'string')
                this['selectedIn' + 'dex'] = parseInt(_0x27bdc3);
            else {
                if (_0x27bdc3 instanceof Array)
                    this['array'] = _0x27bdc3;
                else
                    super['dataSource'] = _0x27bdc3;
            }
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
        set ['elasticEna' + 'bled'](_0x361b71) {
            this['_elasticEn' + 'abled'] = _0x361b71, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x361b71 ? 0xc8 : 0x0);
        }
        ['refresh']() {
            this['array'] = this['_array'];
        }
        ['getItem'](_0x2dcbd6) {
            if (_0x2dcbd6 > -0x1 && _0x2dcbd6 < this['_array']['length'])
                return this['_array'][_0x2dcbd6];
            return null;
        }
        ['changeItem'](_0x4cc5c1, _0x4a641e) {
            _0x4cc5c1 > -0x1 && _0x4cc5c1 < this['_array']['length'] && (this['_array'][_0x4cc5c1] = _0x4a641e, _0x4cc5c1 >= this['_startInde' + 'x'] && _0x4cc5c1 < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x4cc5c1), _0x4cc5c1));
        }
        ['setItem'](_0x4d7070, _0x272344) {
            this['changeItem'](_0x4d7070, _0x272344);
        }
        ['addItem'](_0x387e30) {
            this['_array']['push'](_0x387e30), this['array'] = this['_array'];
        }
        ['addItemAt'](_0xb74fbe, _0x6f86f5) {
            this['_array']['splice'](_0x6f86f5, 0x0, _0xb74fbe), this['array'] = this['_array'];
        }
        ['deleteItem'](_0x12b126) {
            this['_array']['splice'](_0x12b126, 0x1), this['array'] = this['_array'];
        }
        ['getCell'](_0x284f77) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            if (_0x284f77 > -0x1 && this['_cells'])
                return this['_cells'][(_0x284f77 - this['_startInde' + 'x']) % this['_cells']['length']];
            return null;
        }
        ['scrollTo'](_0x19eb54) {
            if (this['_scrollBar']) {
                var _0x4dcdc9 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                this['_scrollBar']['value'] = Math['floor'](_0x19eb54 / _0x4dcdc9) * this['_cellSize'];
            } else
                this['startIndex'] = _0x19eb54;
        }
        ['tweenTo'](_0x24480f, _0x200995 = 0xc8, _0xe3394b = null) {
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x72482c = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                _0x322c83['Tween']['to'](this['_scrollBar'], { 'value': Math['floor'](_0x24480f / _0x72482c) * this['_cellSize'] }, _0x200995, null, _0xe3394b, 0x0, !![]);
            } else {
                this['startIndex'] = _0x24480f;
                if (_0xe3394b)
                    _0xe3394b['run']();
            }
        }
        ['_setCellCh' + 'anged']() {
            !this['_cellChang' + 'ed'] && (this['_cellChang' + 'ed'] = !![], this['callLater'](this['changeCell' + 's']));
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x105093), _0x322c83['ClassUtils']['regClass']('laya.ui.Li' + 'st', _0x105093), _0x322c83['ClassUtils']['regClass']('Laya.List', _0x105093);
    class _0x4a237c extends _0x283d79 {
        constructor(_0x1d5d26 = null, _0x2fa4ec = null) {
            super(), this['_visibleNu' + 'm'] = 0x6, this['_itemColor' + 's'] = _0xbb775b['comboBoxIt' + 'emColors'], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['itemRender'] = null, this['skin'] = _0x1d5d26, this['labels'] = _0x2fa4ec;
        }
        ['destroy'](_0x272969 = !![]) {
            super['destroy'](_0x272969), this['_button'] && this['_button']['destroy'](_0x272969), this['_list'] && this['_list']['destroy'](_0x272969), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_button'] = new _0x561c8e()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['_createLis' + 't']() {
            this['_list'] = new _0x105093();
            if (this['_scrollBar' + 'Skin'])
                this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin'];
            this['_setListEv' + 'ent'](this['_list']);
        }
        ['_setListEv' + 'ent'](_0x3d02c4) {
            this['_list']['selectEnab' + 'le'] = !![], this['_list']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x322c83['Handler']['create'](this, this['onlistItem' + 'Mouse'], null, ![]);
            if (this['_list']['scrollBar'])
                this['_list']['scrollBar']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['onScrollBa' + 'rDown']);
        }
        ['onListDown'](_0x6580aa) {
            _0x6580aa['stopPropag' + 'ation']();
        }
        ['onScrollBa' + 'rDown'](_0x2c591a) {
            _0x2c591a['stopPropag' + 'ation']();
        }
        ['onButtonMo' + 'useDown'](_0x16d251) {
            this['callLater'](this['switchTo'], [!this['_isOpen']]);
        }
        get ['skin']() {
            return this['_button']['skin'];
        }
        set ['skin'](_0x483623) {
            this['_button']['skin'] != _0x483623 && (this['_button']['skin'] = _0x483623, this['_listChang' + 'ed'] = !![]);
        }
        ['measureWid' + 'th']() {
            return this['_button']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_button']['height'];
        }
        ['changeList']() {
            this['_listChang' + 'ed'] = ![];
            var _0x3cea85 = this['width'] - 0x2, _0x1f4681 = this['_itemColor' + 's'][0x2];
            this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                'type': 'Box',
                'child': [{
                        'type': 'Label',
                        'props': {
                            'name': 'label',
                            'x': 0x1,
                            'padding': '3,3,3,3',
                            'width': _0x3cea85,
                            'height': this['_itemHeigh' + 't'],
                            'fontSize': this['_itemSize'],
                            'color': _0x1f4681
                        }
                    }]
            }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
        }
        ['onlistItem' + 'Mouse'](_0x94e34c, _0x4ec1eb) {
            var _0x125056 = _0x94e34c['type'];
            if (_0x125056 === _0x322c83['Event']['MOUSE_OVER'] || _0x125056 === _0x322c83['Event']['MOUSE_OUT']) {
                if (this['_isCustomL' + 'ist'])
                    return;
                var _0x1cb04a = this['_list']['getCell'](_0x4ec1eb);
                if (!_0x1cb04a)
                    return;
                var _0x76ab22 = _0x1cb04a['getChildBy' + 'Name']('label');
                _0x76ab22 && (_0x125056 === _0x322c83['Event']['ROLL_OVER'] ? (_0x76ab22['bgColor'] = this['_itemColor' + 's'][0x0], _0x76ab22['color'] = this['_itemColor' + 's'][0x1]) : (_0x76ab22['bgColor'] = null, _0x76ab22['color'] = this['_itemColor' + 's'][0x2]));
            } else
                _0x125056 === _0x322c83['Event']['CLICK'] && (this['selectedIn' + 'dex'] = _0x4ec1eb, this['isOpen'] = ![]);
        }
        ['switchTo'](_0x15e864) {
            this['isOpen'] = _0x15e864;
        }
        ['changeOpen']() {
            this['isOpen'] = !this['_isOpen'];
        }
        set ['width'](_0x4e4530) {
            super['width'] = _0x4e4530, this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !![], this['_listChang' + 'ed'] = !![];
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x48606e) {
            super['height'] = _0x48606e, this['_button']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        get ['labels']() {
            return this['_labels']['join'](',');
        }
        set ['labels'](_0x2ed7ff) {
            if (this['_labels']['length'] > 0x0)
                this['selectedIn' + 'dex'] = -0x1;
            if (_0x2ed7ff)
                this['_labels'] = _0x2ed7ff['split'](',');
            else
                this['_labels']['length'] = 0x0;
            this['_itemChang' + 'ed'] = !![];
        }
        ['changeItem']() {
            this['_itemChang' + 'ed'] = ![], this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'];
            if (!this['_isCustomL' + 'ist']) {
                var _0x352298 = this['_list']['graphics'];
                _0x352298['clear'](!![]), _0x352298['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
            }
            var _0x3c9ec = this['_list']['array'] || [];
            _0x3c9ec['length'] = 0x0;
            for (var _0x1a5af0 = 0x0, _0x2947e2 = this['_labels']['length']; _0x1a5af0 < _0x2947e2; _0x1a5af0++) {
                _0x3c9ec['push']({ 'label': this['_labels'][_0x1a5af0] });
            }
            this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x3c9ec;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3f718f) {
            if (this['_selectedI' + 'ndex'] != _0x3f718f) {
                this['_selectedI' + 'ndex'] = _0x3f718f;
                if (this['_labels']['length'] > 0x0)
                    this['changeSele' + 'cted']();
                else
                    this['callLater'](this['changeSele' + 'cted']);
                this['event'](_0x322c83['Event']['CHANGE'], [_0x322c83['Event']['EMPTY']['setTo'](_0x322c83['Event']['CHANGE'], this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']);
            }
        }
        ['changeSele' + 'cted']() {
            this['_button']['label'] = this['selectedLa' + 'bel'];
        }
        get ['selectHand' + 'ler']() {
            return this['_selectHan' + 'dler'];
        }
        set ['selectHand' + 'ler'](_0x4f4088) {
            this['_selectHan' + 'dler'] = _0x4f4088;
        }
        get ['selectedLa' + 'bel']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedLa' + 'bel'](_0x3a4b92) {
            this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x3a4b92);
        }
        get ['visibleNum']() {
            return this['_visibleNu' + 'm'];
        }
        set ['visibleNum'](_0x1a470e) {
            this['_visibleNu' + 'm'] = _0x1a470e, this['_listChang' + 'ed'] = !![];
        }
        get ['itemColors']() {
            return String(this['_itemColor' + 's']);
        }
        set ['itemColors'](_0x5d37c7) {
            this['_itemColor' + 's'] = _0x373b03['fillArray'](this['_itemColor' + 's'], _0x5d37c7, String), this['_listChang' + 'ed'] = !![];
        }
        get ['itemSize']() {
            return this['_itemSize'];
        }
        set ['itemSize'](_0x2fd512) {
            this['_itemSize'] = _0x2fd512, this['_listChang' + 'ed'] = !![];
        }
        get ['isOpen']() {
            return this['_isOpen'];
        }
        set ['isOpen'](_0x557e07) {
            if (this['_isOpen'] != _0x557e07) {
                this['_isOpen'] = _0x557e07, this['_button']['selected'] = this['_isOpen'];
                if (this['_isOpen']) {
                    this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                    var _0x1502e1 = this['localToGlo' + 'bal'](_0x322c83['Point']['TEMP']['setTo'](0x0, 0x0)), _0x415863 = _0x1502e1['y'] + this['_button']['height'];
                    _0x415863 = _0x415863 + this['_listHeigh' + 't'] <= _0x322c83['ILaya']['stage']['height'] ? _0x415863 : _0x1502e1['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x1502e1['x'], _0x415863), this['_list']['zOrder'] = 0x3e9, _0x322c83['ILaya']['stage']['addChild'](this['_list']), _0x322c83['ILaya']['stage']['once'](_0x322c83['Event']['MOUSE_DOWN'], this, this['removeList']), _0x322c83['ILaya']['stage']['on'](_0x322c83['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                } else
                    this['_list'] && this['_list']['removeSelf']();
            }
        }
        ['_onStageMo' + 'useWheel'](_0x295fa5) {
            if (!this['_list'] || this['_list']['contains'](_0x295fa5['target']))
                return;
            this['removeList'](null);
        }
        ['removeList'](_0x20d99f) {
            _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['removeList']), _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['isOpen'] = ![];
        }
        get ['scrollBarS' + 'kin']() {
            return this['_scrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x22f6e4) {
            this['_scrollBar' + 'Skin'] = _0x22f6e4;
        }
        get ['sizeGrid']() {
            return this['_button']['sizeGrid'];
        }
        set ['sizeGrid'](_0xd97829) {
            this['_button']['sizeGrid'] = _0xd97829;
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
        set ['list'](_0x5e011d) {
            _0x5e011d && (_0x5e011d['removeSelf'](), this['_isCustomL' + 'ist'] = !![], this['_list'] = _0x5e011d, this['_setListEv' + 'ent'](_0x5e011d), this['_itemHeigh' + 't'] = _0x5e011d['getCell'](0x0)['height'] + _0x5e011d['spaceY']);
        }
        set ['dataSource'](_0x30ae35) {
            this['_dataSourc' + 'e'] = _0x30ae35;
            if (typeof _0x30ae35 == 'number' || typeof _0x30ae35 == 'string')
                this['selectedIn' + 'dex'] = parseInt(_0x30ae35);
            else {
                if (_0x30ae35 instanceof Array)
                    this['labels'] = _0x30ae35['join'](',');
                else
                    super['dataSource'] = _0x30ae35;
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['labelColor' + 's']() {
            return this['_button']['labelColor' + 's'];
        }
        set ['labelColor' + 's'](_0x227d72) {
            this['_button']['labelColor' + 's'] != _0x227d72 && (this['_button']['labelColor' + 's'] = _0x227d72);
        }
        get ['labelPaddi' + 'ng']() {
            return this['_button']['text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x287587) {
            this['_button']['text']['padding'] = _0x373b03['fillArray'](_0xbb775b['labelPaddi' + 'ng'], _0x287587, Number);
        }
        get ['labelSize']() {
            return this['_button']['text']['fontSize'];
        }
        set ['labelSize'](_0x3708f7) {
            this['_button']['text']['fontSize'] = _0x3708f7;
        }
        get ['labelBold']() {
            return this['_button']['text']['bold'];
        }
        set ['labelBold'](_0x461dd2) {
            this['_button']['text']['bold'] = _0x461dd2;
        }
        get ['labelFont']() {
            return this['_button']['text']['font'];
        }
        set ['labelFont'](_0x466197) {
            this['_button']['text']['font'] = _0x466197;
        }
        get ['stateNum']() {
            return this['_button']['stateNum'];
        }
        set ['stateNum'](_0x1701a2) {
            this['_button']['stateNum'] = _0x1701a2;
        }
    }
    _0x322c83['ILaya']['regClass'](_0x4a237c), _0x322c83['ClassUtils']['regClass']('laya.ui.Co' + 'mboBox', _0x4a237c), _0x322c83['ClassUtils']['regClass']('Laya.Combo' + 'Box', _0x4a237c);
    class _0x4bff32 extends _0x283d79 {
        constructor(_0x2e191b = null) {
            super(), this['_value'] = 0.5, this['skin'] = _0x2e191b;
        }
        ['destroy'](_0x2ac967 = !![]) {
            super['destroy'](_0x2ac967), this['_bg'] && this['_bg']['destroy'](_0x2ac967), this['_bar'] && this['_bar']['destroy'](_0x2ac967), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x87edde()), this['addChild'](this['_bar'] = new _0x87edde()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = ![];
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x396dfe) {
            this['_skin'] != _0x396dfe && (this['_skin'] = _0x396dfe, this['_skin'] && !_0x322c83['Loader']['getRes'](this['_skin']) ? _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x322c83['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
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
        set ['value'](_0x6df311) {
            this['_value'] != _0x6df311 && (_0x6df311 = _0x6df311 > 0x1 ? 0x1 : _0x6df311 < 0x0 ? 0x0 : _0x6df311, this['_value'] = _0x6df311, this['callLater'](this['changeValu' + 'e']), this['event'](_0x322c83['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x6df311));
        }
        ['changeValu' + 'e']() {
            if (this['sizeGrid']) {
                var _0x4be55a = this['sizeGrid']['split'](','), _0x3643de = Number(_0x4be55a[0x3]), _0x16c0c4 = Number(_0x4be55a[0x1]), _0x2881e9 = this['width'] - _0x3643de - _0x16c0c4, _0x2c764e = _0x2881e9 * this['_value'];
                this['_bar']['width'] = _0x3643de + _0x16c0c4 + _0x2c764e, this['_bar']['visible'] = this['_bar']['width'] > _0x3643de + _0x16c0c4;
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
        set ['sizeGrid'](_0x24c168) {
            this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x24c168;
        }
        set ['width'](_0x2afe6a) {
            super['width'] = _0x2afe6a, this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xbcbe94) {
            super['height'] = _0xbcbe94, this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        set ['dataSource'](_0x1cca04) {
            this['_dataSourc' + 'e'] = _0x1cca04;
            if (typeof _0x1cca04 == 'number' || typeof _0x1cca04 == 'string')
                this['value'] = Number(_0x1cca04);
            else
                super['dataSource'] = _0x1cca04;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x4bff32), _0x322c83['ClassUtils']['regClass']('laya.ui.Pr' + 'ogressBar', _0x4bff32), _0x322c83['ClassUtils']['regClass']('Laya.Progr' + 'essBar', _0x4bff32);
    class _0x5f2e43 extends _0x561c8e {
        constructor(_0x5a3017 = null, _0x26f13b = '') {
            super(_0x5a3017, _0x26f13b), this['toggle'] = ![], this['_autoSize'] = ![];
        }
        ['destroy'](_0x1ae451 = !![]) {
            super['destroy'](_0x1ae451), this['_value'] = null;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = ![], this['_autoSize'] = ![];
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on'](_0x322c83['Event']['CLICK'], this, this['onClick']);
        }
        ['onClick'](_0xe053eb) {
            this['selected'] = !![];
        }
        get ['value']() {
            return this['_value'] != null ? this['_value'] : this['label'];
        }
        set ['value'](_0x4e996b) {
            this['_value'] = _0x4e996b;
        }
    }
    _0x322c83['ILaya']['regClass'](_0x5f2e43), _0x322c83['ClassUtils']['regClass']('laya.ui.Ra' + 'dio', _0x5f2e43), _0x322c83['ClassUtils']['regClass']('Laya.Radio', _0x5f2e43);
    class _0x58e5a9 extends _0x490c4a {
        constructor(_0x3f7358 = null, _0xd52b36 = null) {
            super(), this['_selectedI' + 'ndex'] = -0x1, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['skin'] = _0xd52b36, this['labels'] = _0x3f7358;
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !![];
        }
        ['destroy'](_0x38f1fc = !![]) {
            super['destroy'](_0x38f1fc), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
        }
        ['addItem'](_0x11fc0b, _0x5ba2b9 = !![]) {
            var _0x47e95a = _0x11fc0b, _0x428ba7 = this['_items']['length'];
            _0x47e95a['name'] = 'item' + _0x428ba7, this['addChild'](_0x47e95a), this['initItems']();
            if (_0x5ba2b9 && _0x428ba7 > 0x0) {
                var _0x401ba1 = this['_items'][_0x428ba7 - 0x1];
                this['_direction'] == 'horizontal' ? _0x47e95a['x'] = _0x401ba1['_x'] + _0x401ba1['width'] + this['_space'] : _0x47e95a['y'] = _0x401ba1['_y'] + _0x401ba1['height'] + this['_space'];
            } else
                _0x5ba2b9 && (_0x47e95a['x'] = 0x0, _0x47e95a['y'] = 0x0);
            return _0x428ba7;
        }
        ['delItem'](_0xb7041a, _0x3cf37e = !![]) {
            var _0x3da939 = this['_items']['indexOf'](_0xb7041a);
            if (_0x3da939 != -0x1) {
                var _0x3dc578 = _0xb7041a;
                this['removeChil' + 'd'](_0x3dc578);
                for (var _0x2ac4db = _0x3da939 + 0x1, _0x36a913 = this['_items']['length']; _0x2ac4db < _0x36a913; _0x2ac4db++) {
                    var _0x46bcb3 = this['_items'][_0x2ac4db];
                    _0x46bcb3['name'] = 'item' + (_0x2ac4db - 0x1), _0x3cf37e && (this['_direction'] == 'horizontal' ? _0x46bcb3['x'] -= _0x3dc578['width'] + this['_space'] : _0x46bcb3['y'] -= _0x3dc578['height'] + this['_space']);
                }
                this['initItems']();
                if (this['_selectedI' + 'ndex'] > -0x1) {
                    var _0x4e12ef;
                    _0x4e12ef = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x4e12ef;
                }
            }
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
            for (var _0xb90226 = 0x0; _0xb90226 < 0x2710; _0xb90226++) {
                var _0x33d09a = this['getChildBy' + 'Name']('item' + _0xb90226);
                if (_0x33d09a == null)
                    break;
                this['_items']['push'](_0x33d09a), _0x33d09a['selected'] = _0xb90226 === this['_selectedI' + 'ndex'], _0x33d09a['clickHandl' + 'er'] = _0x322c83['Handler']['create'](this, this['itemClick'], [_0xb90226], ![]);
            }
        }
        ['itemClick'](_0x23e8e9) {
            this['selectedIn' + 'dex'] = _0x23e8e9;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x4ffe23) {
            this['_selectedI' + 'ndex'] != _0x4ffe23 && (this['setSelect'](this['_selectedI' + 'ndex'], ![]), this['_selectedI' + 'ndex'] = _0x4ffe23, this['setSelect'](_0x4ffe23, !![]), this['event'](_0x322c83['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['setSelect'](_0x1ba767, _0x2edc8b) {
            if (this['_items'] && _0x1ba767 > -0x1 && _0x1ba767 < this['_items']['length'])
                this['_items'][_0x1ba767]['selected'] = _0x2edc8b;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x18a454) {
            this['_skin'] != _0x18a454 && (this['_skin'] = _0x18a454, this['_skin'] && !_0x322c83['Loader']['getRes'](this['_skin']) ? _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x322c83['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_setLabelC' + 'hanged'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        get ['labels']() {
            return this['_labels'];
        }
        set ['labels'](_0x4987a9) {
            if (this['_labels'] != _0x4987a9) {
                this['_labels'] = _0x4987a9, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged']();
                if (this['_labels']) {
                    var _0x5d77e9 = this['_labels']['split'](',');
                    for (var _0x414448 = 0x0, _0x5d6a12 = _0x5d77e9['length']; _0x414448 < _0x5d6a12; _0x414448++) {
                        var _0x196347 = this['createItem'](this['_skin'], _0x5d77e9[_0x414448]);
                        _0x196347['name'] = 'item' + _0x414448, this['addChild'](_0x196347);
                    }
                }
                this['initItems']();
            }
        }
        ['createItem'](_0x15982c, _0x2ea39a) {
            return null;
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs'];
        }
        set ['labelColor' + 's'](_0x37e3ef) {
            this['_labelColo' + 'rs'] != _0x37e3ef && (this['_labelColo' + 'rs'] = _0x37e3ef, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'e']() {
            return this['_labelStro' + 'ke'];
        }
        set ['labelStrok' + 'e'](_0x471fb1) {
            this['_labelStro' + 'ke'] != _0x471fb1 && (this['_labelStro' + 'ke'] = _0x471fb1, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'eColor']() {
            return this['_labelStro' + 'keColor'];
        }
        set ['labelStrok' + 'eColor'](_0x51a8c7) {
            this['_labelStro' + 'keColor'] != _0x51a8c7 && (this['_labelStro' + 'keColor'] = _0x51a8c7, this['_setLabelC' + 'hanged']());
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'];
        }
        set ['strokeColo' + 'rs'](_0x5274c3) {
            this['_strokeCol' + 'ors'] != _0x5274c3 && (this['_strokeCol' + 'ors'] = _0x5274c3, this['_setLabelC' + 'hanged']());
        }
        get ['labelSize']() {
            return this['_labelSize'];
        }
        set ['labelSize'](_0x36d406) {
            this['_labelSize'] != _0x36d406 && (this['_labelSize'] = _0x36d406, this['_setLabelC' + 'hanged']());
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x1a92c8) {
            this['_stateNum'] != _0x1a92c8 && (this['_stateNum'] = _0x1a92c8, this['_setLabelC' + 'hanged']());
        }
        get ['labelBold']() {
            return this['_labelBold'];
        }
        set ['labelBold'](_0x1fc22c) {
            this['_labelBold'] != _0x1fc22c && (this['_labelBold'] = _0x1fc22c, this['_setLabelC' + 'hanged']());
        }
        get ['labelFont']() {
            return this['_labelFont'];
        }
        set ['labelFont'](_0x4b77ba) {
            this['_labelFont'] != _0x4b77ba && (this['_labelFont'] = _0x4b77ba, this['_setLabelC' + 'hanged']());
        }
        get ['labelPaddi' + 'ng']() {
            return this['_labelPadd' + 'ing'];
        }
        set ['labelPaddi' + 'ng'](_0x57cdd6) {
            this['_labelPadd' + 'ing'] != _0x57cdd6 && (this['_labelPadd' + 'ing'] = _0x57cdd6, this['_setLabelC' + 'hanged']());
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0xc7dbe8) {
            this['_direction'] = _0xc7dbe8, this['_setLabelC' + 'hanged']();
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x4771ed) {
            this['_space'] = _0x4771ed, this['_setLabelC' + 'hanged']();
        }
        ['changeLabe' + 'ls']() {
            this['_labelChan' + 'ged'] = ![];
            if (this['_items']) {
                var _0x670838 = 0x0;
                for (var _0x377b35 = 0x0, _0x1a563f = this['_items']['length']; _0x377b35 < _0x1a563f; _0x377b35++) {
                    var _0x16cbbd = this['_items'][_0x377b35];
                    this['_skin'] && (_0x16cbbd['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x16cbbd['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x16cbbd['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x16cbbd['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x16cbbd['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x16cbbd['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x16cbbd['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x16cbbd['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x16cbbd['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x16cbbd['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x16cbbd['labelFont'] = this['_labelFont']), this['_direction'] === 'horizontal' ? (_0x16cbbd['y'] = 0x0, _0x16cbbd['x'] = _0x670838, _0x670838 += _0x16cbbd['width'] + this['_space']) : (_0x16cbbd['x'] = 0x0, _0x16cbbd['y'] = _0x670838, _0x670838 += _0x16cbbd['height'] + this['_space']);
                }
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
        set ['selection'](_0x36ed8c) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x36ed8c);
        }
        set ['dataSource'](_0x333749) {
            this['_dataSourc' + 'e'] = _0x333749;
            if (typeof _0x333749 == 'number' || typeof _0x333749 == 'string')
                this['selectedIn' + 'dex'] = parseInt(_0x333749);
            else {
                if (_0x333749 instanceof Array)
                    this['labels'] = _0x333749['join'](',');
                else
                    super['dataSource'] = _0x333749;
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        ['_setLabelC' + 'hanged']() {
            !this['_labelChan' + 'ged'] && (this['_labelChan' + 'ged'] = !![], this['callLater'](this['changeLabe' + 'ls']));
        }
    }
    _0x322c83['ILaya']['regClass'](_0x58e5a9), _0x322c83['ClassUtils']['regClass']('laya.ui.UI' + 'Group', _0x58e5a9), _0x322c83['ClassUtils']['regClass']('Laya.UIGro' + 'up', _0x58e5a9);
    class _0x45eef5 extends _0x58e5a9 {
        ['createItem'](_0x119832, _0x315113) {
            return new _0x5f2e43(_0x119832, _0x315113);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x45eef5), _0x322c83['ClassUtils']['regClass']('laya.ui.Ra' + 'dioGroup', _0x45eef5), _0x322c83['ClassUtils']['regClass']('Laya.Radio' + 'Group', _0x45eef5);
    class _0x446a43 extends _0x58e5a9 {
        ['createItem'](_0x2028ae, _0x428060) {
            return new _0x561c8e(_0x2028ae, _0x428060);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x446a43), _0x322c83['ClassUtils']['regClass']('laya.ui.Ta' + 'b', _0x446a43), _0x322c83['ClassUtils']['regClass']('Laya.Tab', _0x446a43);
    class _0x2fbd85 extends _0x490c4a {
        constructor() {
            super(...arguments), this['_setIndexH' + 'andler'] = _0x322c83['Handler']['create'](this, this['setIndex'], null, ![]);
        }
        ['setItems'](_0x50140a) {
            this['removeChil' + 'dren']();
            var _0x50a584 = 0x0;
            for (var _0x41700f = 0x0, _0x4473a6 = _0x50140a['length']; _0x41700f < _0x4473a6; _0x41700f++) {
                var _0x477239 = _0x50140a[_0x41700f];
                _0x477239 && (_0x477239['name'] = 'item' + _0x50a584, this['addChild'](_0x477239), _0x50a584++);
            }
            this['initItems']();
        }
        ['addItem'](_0x3c4cee) {
            _0x3c4cee['name'] = 'item' + this['_items']['length'], this['addChild'](_0x3c4cee), this['initItems']();
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] = [];
            for (var _0x18a245 = 0x0; _0x18a245 < 0x2710; _0x18a245++) {
                var _0x45ff92 = this['getChildBy' + 'Name']('item' + _0x18a245);
                if (_0x45ff92 == null)
                    break;
                this['_items']['push'](_0x45ff92), _0x45ff92['visible'] = _0x18a245 == this['_selectedI' + 'ndex'];
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x115f15) {
            this['_selectedI' + 'ndex'] != _0x115f15 && (this['setSelect'](this['_selectedI' + 'ndex'], ![]), this['_selectedI' + 'ndex'] = _0x115f15, this['setSelect'](this['_selectedI' + 'ndex'], !![]));
        }
        ['setSelect'](_0x27e975, _0x345834) {
            this['_items'] && _0x27e975 > -0x1 && _0x27e975 < this['_items']['length'] && (this['_items'][_0x27e975]['visible'] = _0x345834);
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x4ce4bf) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x4ce4bf);
        }
        get ['setIndexHa' + 'ndler']() {
            return this['_setIndexH' + 'andler'];
        }
        set ['setIndexHa' + 'ndler'](_0x21f749) {
            this['_setIndexH' + 'andler'] = _0x21f749;
        }
        ['setIndex'](_0x5ceaca) {
            this['selectedIn' + 'dex'] = _0x5ceaca;
        }
        get ['items']() {
            return this['_items'];
        }
        set ['dataSource'](_0x2ce7fd) {
            this['_dataSourc' + 'e'] = _0x2ce7fd;
            if (typeof _0x2ce7fd == 'number' || typeof _0x2ce7fd == 'string')
                this['selectedIn' + 'dex'] = parseInt(_0x2ce7fd);
            else
                for (var _0x561133 in this['_dataSourc' + 'e']) {
                    _0x561133 in this && (this[_0x561133] = this['_dataSourc' + 'e'][_0x561133]);
                }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x2fbd85), _0x322c83['ClassUtils']['regClass']('laya.ui.Vi' + 'ewStack', _0x2fbd85), _0x322c83['ClassUtils']['regClass']('Laya.ViewS' + 'tack', _0x2fbd85);
    class _0x3dc9ee extends _0x2336dc {
        constructor(_0x3708c5 = '') {
            super(), this['text'] = _0x3708c5, this['skin'] = this['skin'];
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !![];
        }
        ['destroy'](_0x2f8799 = !![]) {
            super['destroy'](_0x2f8799), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x322c83['Input']()), this['_tf']['padding'] = _0xbb775b['inputLabel' + 'Padding'], this['_tf']['on'](_0x322c83['Event']['INPUT'], this, this['_onInput']), this['_tf']['on'](_0x322c83['Event']['ENTER'], this, this['_onEnter']), this['_tf']['on'](_0x322c83['Event']['BLUR'], this, this['_onBlur']), this['_tf']['on'](_0x322c83['Event']['FOCUS'], this, this['_onFocus']);
        }
        ['_onFocus']() {
            this['event'](_0x322c83['Event']['FOCUS'], this);
        }
        ['_onBlur']() {
            this['event'](_0x322c83['Event']['BLUR'], this);
        }
        ['_onInput']() {
            this['event'](_0x322c83['Event']['INPUT'], this);
        }
        ['_onEnter']() {
            this['event'](_0x322c83['Event']['ENTER'], this);
        }
        ['initialize']() {
            this['width'] = 0x80, this['height'] = 0x16;
        }
        get ['bg']() {
            return this['_bg'];
        }
        set ['bg'](_0x2e5a1d) {
            this['graphics'] = this['_bg'] = _0x2e5a1d;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x54d2c8) {
            this['_skin'] != _0x54d2c8 && (this['_skin'] = _0x54d2c8, this['_skin'] && !_0x322c83['Loader']['getRes'](this['_skin']) ? _0x322c83['ILaya']['loader']['load'](this['_skin'], _0x322c83['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x322c83['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x2d4396()), this['_bg']['source'] = _0x322c83['Loader']['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event'](_0x322c83['Event']['LOADED']);
        }
        get ['sizeGrid']() {
            return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x6c7c5c) {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x2d4396()), this['_bg']['sizeGrid'] = _0x373b03['fillArray'](_0xbb775b['defaultSiz' + 'eGrid'], _0x6c7c5c, Number);
        }
        set ['text'](_0x45f5ac) {
            this['_tf']['text'] != _0x45f5ac && (_0x45f5ac = _0x45f5ac + '', this['_tf']['text'] = _0x45f5ac, this['event'](_0x322c83['Event']['CHANGE']));
        }
        get ['text']() {
            return super['text'];
        }
        set ['width'](_0x156071) {
            super['width'] = _0x156071, this['_bg'] && (this['_bg']['width'] = _0x156071);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x3f3ccc) {
            super['height'] = _0x3f3ccc, this['_bg'] && (this['_bg']['height'] = _0x3f3ccc);
        }
        get ['height']() {
            return super['height'];
        }
        get ['multiline']() {
            return this['_tf']['multiline'];
        }
        set ['multiline'](_0x201d25) {
            this['_tf']['multiline'] = _0x201d25;
        }
        set ['editable'](_0x9859c6) {
            this['_tf']['editable'] = _0x9859c6;
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
        set ['restrict'](_0x23b53c) {
            this['_tf']['restrict'] = _0x23b53c;
        }
        get ['prompt']() {
            return this['_tf']['prompt'];
        }
        set ['prompt'](_0x5ab569) {
            this['_tf']['prompt'] = _0x5ab569;
        }
        get ['promptColo' + 'r']() {
            return this['_tf']['promptColo' + 'r'];
        }
        set ['promptColo' + 'r'](_0x54bed2) {
            this['_tf']['promptColo' + 'r'] = _0x54bed2;
        }
        get ['maxChars']() {
            return this['_tf']['maxChars'];
        }
        set ['maxChars'](_0x3437aa) {
            this['_tf']['maxChars'] = _0x3437aa;
        }
        get ['focus']() {
            return this['_tf']['focus'];
        }
        set ['focus'](_0x4ac755) {
            this['_tf']['focus'] = _0x4ac755;
        }
        get ['type']() {
            return this['_tf']['type'];
        }
        set ['type'](_0x4e6ec4) {
            this['_tf']['type'] = _0x4e6ec4;
        }
        ['setSelecti' + 'on'](_0x41f9c6, _0x173257) {
            this['_tf']['setSelecti' + 'on'](_0x41f9c6, _0x173257);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x3dc9ee), _0x322c83['ClassUtils']['regClass']('laya.ui.Te' + 'xtInput', _0x3dc9ee), _0x322c83['ClassUtils']['regClass']('Laya.TextI' + 'nput', _0x3dc9ee);
    class _0x3411c7 extends _0x3dc9ee {
        constructor(_0x5a0be2 = '') {
            super(_0x5a0be2), this['on'](_0x322c83['Event']['CHANGE'], this, this['_onTextCha' + 'nge']);
        }
        ['_onTextCha' + 'nge']() {
            this['callLater'](this['changeScro' + 'll']);
        }
        ['destroy'](_0x42ecb0 = !![]) {
            this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, super['destroy'](_0x42ecb0);
        }
        ['initialize']() {
            this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !![], this['multiline'] = !![];
        }
        set ['width'](_0x3f36ec) {
            super['width'] = _0x3f36ec, this['callLater'](this['changeScro' + 'll']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x217b78) {
            super['height'] = _0x217b78, this['callLater'](this['changeScro' + 'll']);
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x1406a8) {
            this['_vScrollBa' + 'r'] == null && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x15b518()), this['_vScrollBa' + 'r']['on'](_0x322c83['Event']['CHANGE'], this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x1406a8;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x243384) {
            this['_hScrollBa' + 'r'] == null && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x3f640f()), this['_hScrollBa' + 'r']['on'](_0x322c83['Event']['CHANGE'], this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = ![], this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x243384;
        }
        ['onVBarChan' + 'ged'](_0x3dac73) {
            this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
        }
        ['onHBarChan' + 'ged'](_0x23fac0) {
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
            var _0x4de095 = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x4572a8 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x14e5bc = _0x4de095 ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x388b86 = _0x4572a8 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x18c0f7 = this['_tf']['padding'] || _0xbb775b['labelPaddi' + 'ng'];
            this['_tf']['width'] = _0x14e5bc, this['_tf']['height'] = _0x388b86, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x18c0f7[0x2], this['_vScrollBa' + 'r']['y'] = _0x18c0f7[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x4572a8 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x18c0f7[0x1] - _0x18c0f7[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x388b86 / Math['max'](this['_tf']['textHeight'], _0x388b86), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x4de095), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x18c0f7[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x18c0f7[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x4de095 ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x18c0f7[0x0] - _0x18c0f7[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](_0x14e5bc * 0.033, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x14e5bc / Math['max'](this['_tf']['textWidth'], _0x14e5bc), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x4572a8);
        }
        ['scrollTo'](_0x213a26) {
            this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x213a26;
        }
    }
    _0x322c83['ILaya']['regClass'](_0x3411c7), _0x322c83['ClassUtils']['regClass']('laya.ui.Te' + 'xtArea', _0x3411c7), _0x322c83['ClassUtils']['regClass']('Laya.TextA' + 'rea', _0x3411c7);
    class _0x587a00 extends _0x490c4a {
        constructor() {
            super(...arguments), this['_oldW'] = 0x0, this['_oldH'] = 0x0;
        }
        ['onEnable']() {
            _0x322c83['ILaya']['stage']['on']('resize', this, this['onResize']), this['onResize']();
        }
        ['onDisable']() {
            _0x322c83['ILaya']['stage']['off']('resize', this, this['onResize']);
        }
        ['onResize']() {
            let _0xe43e3c = _0x322c83['ILaya']['stage'];
            if (this['width'] > 0x0 && this['height'] > 0x0) {
                var _0x1ee3b5 = Math['min'](_0xe43e3c['width'] / this['_oldW'], _0xe43e3c['height'] / this['_oldH']);
                super['width'] = _0xe43e3c['width'], super['height'] = _0xe43e3c['height'], this['scale'](_0x1ee3b5, _0x1ee3b5);
            }
        }
        set ['width'](_0x6c0ccd) {
            super['width'] = _0x6c0ccd, this['_oldW'] = _0x6c0ccd;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1d744c) {
            super['height'] = _0x1d744c, this['_oldH'] = _0x1d744c;
        }
        get ['height']() {
            return super['height'];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x587a00), _0x322c83['ClassUtils']['regClass']('laya.ui.Sc' + 'aleBox', _0x587a00), _0x322c83['ClassUtils']['regClass']('Laya.Scale' + 'Box', _0x587a00);
    class _0x17d2ec extends _0x21cdfc {
        constructor(_0x827ba9 = null) {
            super(_0x827ba9), this['isVertical'] = ![];
        }
    }
    _0x322c83['ILaya']['regClass'](_0x17d2ec), _0x322c83['ClassUtils']['regClass']('laya.ui.HS' + 'lider', _0x17d2ec), _0x322c83['ClassUtils']['regClass']('Laya.HSlid' + 'er', _0x17d2ec);
    class _0x257d56 extends _0x490c4a {
        constructor() {
            super(), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = ![], this['width'] = this['height'] = 0x64;
        }
        ['destroy'](_0x5afb9d = !![]) {
            super['destroy'](_0x5afb9d), this['_content'] && this['_content']['destroy'](_0x5afb9d), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x5afb9d), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x5afb9d), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
        }
        ['destroyChi' + 'ldren']() {
            this['_content']['destroyChi' + 'ldren']();
        }
        ['createChil' + 'dren']() {
            super['addChild'](this['_content'] = new _0x490c4a());
        }
        ['addChild'](_0x274706) {
            return _0x274706['on'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x274706);
        }
        ['onResize']() {
            this['_setScroll' + 'Changed']();
        }
        ['addChildAt'](_0xf81948, _0x25ae0b) {
            return _0xf81948['on'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0xf81948, _0x25ae0b);
        }
        ['removeChil' + 'd'](_0x573e4d) {
            return _0x573e4d['off'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x573e4d);
        }
        ['removeChil' + 'dAt'](_0x374e0d) {
            return this['getChildAt'](_0x374e0d)['off'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x374e0d);
        }
        ['removeChil' + 'dren'](_0xa53527 = 0x0, _0x4ea9e9 = 0x7fffffff) {
            return this['_content']['removeChil' + 'dren'](_0xa53527, _0x4ea9e9), this['_setScroll' + 'Changed'](), this;
        }
        ['getChildAt'](_0x49e40c) {
            return this['_content']['getChildAt'](_0x49e40c);
        }
        ['getChildBy' + 'Name'](_0x1764bb) {
            return this['_content']['getChildBy' + 'Name'](_0x1764bb);
        }
        ['getChildIn' + 'dex'](_0x4c958f) {
            return this['_content']['getChildIn' + 'dex'](_0x4c958f);
        }
        get ['numChildre' + 'n']() {
            return this['_content']['numChildre' + 'n'];
        }
        ['changeScro' + 'll']() {
            this['_scrollCha' + 'nged'] = ![];
            var _0xffa9c4 = this['contentWid' + 'th'] || 0x1, _0x41a1e7 = this['contentHei' + 'ght'] || 0x1, _0x528bb3 = this['_vScrollBa' + 'r'], _0x10ca5f = this['_hScrollBa' + 'r'], _0x5a8ae4 = _0x528bb3 && _0x41a1e7 > this['_height'], _0x539a03 = _0x10ca5f && _0xffa9c4 > this['_width'], _0x3efdb9 = _0x5a8ae4 ? this['_width'] - _0x528bb3['width'] : this['_width'], _0x4f3ff9 = _0x539a03 ? this['_height'] - _0x10ca5f['height'] : this['_height'];
            _0x528bb3 && (_0x528bb3['x'] = this['_width'] - _0x528bb3['width'], _0x528bb3['y'] = 0x0, _0x528bb3['height'] = this['_height'] - (_0x539a03 ? _0x10ca5f['height'] : 0x0), _0x528bb3['scrollSize'] = Math['max'](this['_height'] * 0.033, 0x1), _0x528bb3['thumbPerce' + 'nt'] = _0x4f3ff9 / _0x41a1e7, _0x528bb3['setScroll'](0x0, _0x41a1e7 - _0x4f3ff9, _0x528bb3['value'])), _0x10ca5f && (_0x10ca5f['x'] = 0x0, _0x10ca5f['y'] = this['_height'] - _0x10ca5f['height'], _0x10ca5f['width'] = this['_width'] - (_0x5a8ae4 ? _0x528bb3['width'] : 0x0), _0x10ca5f['scrollSize'] = Math['max'](this['_width'] * 0.033, 0x1), _0x10ca5f['thumbPerce' + 'nt'] = _0x3efdb9 / _0xffa9c4, _0x10ca5f['setScroll'](0x0, _0xffa9c4 - _0x3efdb9, _0x10ca5f['value']));
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['_width'], this['_height']);
        }
        get ['contentWid' + 'th']() {
            var _0x4b35d8 = 0x0;
            for (var _0x4f1731 = this['_content']['numChildre' + 'n'] - 0x1; _0x4f1731 > -0x1; _0x4f1731--) {
                var _0x3a7bcf = this['_content']['getChildAt'](_0x4f1731);
                _0x4b35d8 = Math['max'](_0x3a7bcf['_x'] + _0x3a7bcf['width'] * _0x3a7bcf['scaleX'] - _0x3a7bcf['pivotX'], _0x4b35d8);
            }
            return _0x4b35d8;
        }
        get ['contentHei' + 'ght']() {
            var _0x372312 = 0x0;
            for (var _0x15f396 = this['_content']['numChildre' + 'n'] - 0x1; _0x15f396 > -0x1; _0x15f396--) {
                var _0x1dfb5d = this['_content']['getChildAt'](_0x15f396);
                _0x372312 = Math['max'](_0x1dfb5d['_y'] + _0x1dfb5d['height'] * _0x1dfb5d['scaleY'] - _0x1dfb5d['pivotY'], _0x372312);
            }
            return _0x372312;
        }
        ['setContent' + 'Size'](_0x24b3f3, _0x22e6ce) {
            var _0x310d28 = this['_content'];
            _0x310d28['width'] = _0x24b3f3, _0x310d28['height'] = _0x22e6ce, _0x310d28['_style']['scrollRect'] || (_0x310d28['scrollRect'] = _0x322c83['Rectangle']['create']()), _0x310d28['_style']['scrollRect']['setTo'](0x0, 0x0, _0x24b3f3, _0x22e6ce), _0x310d28['scrollRect'] = _0x310d28['scrollRect'];
        }
        set ['width'](_0xdfbffb) {
            super['width'] = _0xdfbffb, this['_setScroll' + 'Changed']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x37944b) {
            super['height'] = _0x37944b, this['_setScroll' + 'Changed']();
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x108dc8) {
            this['_vScrollBa' + 'r'] == null && (super['addChild'](this['_vScrollBa' + 'r'] = new _0x15b518()), this['_vScrollBa' + 'r']['on'](_0x322c83['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x108dc8;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x44226c) {
            this['_hScrollBa' + 'r'] == null && (super['addChild'](this['_hScrollBa' + 'r'] = new _0x3f640f()), this['_hScrollBa' + 'r']['on'](_0x322c83['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x44226c;
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
        ['onScrollBa' + 'rChange'](_0x4f4f62) {
            var _0x21f6da = this['_content']['_style']['scrollRect'];
            if (_0x21f6da) {
                var _0x5eb933 = Math['round'](_0x4f4f62['value']);
                _0x4f4f62['isVertical'] ? _0x21f6da['y'] = _0x5eb933 : _0x21f6da['x'] = _0x5eb933, this['_content']['scrollRect'] = _0x21f6da;
            }
        }
        ['scrollTo'](_0x2129af = 0x0, _0x3488ed = 0x0) {
            if (this['vScrollBar'])
                this['vScrollBar']['value'] = _0x3488ed;
            if (this['hScrollBar'])
                this['hScrollBar']['value'] = _0x2129af;
        }
        ['refresh']() {
            this['changeScro' + 'll']();
        }
        set ['cacheAs'](_0x4a68c8) {
            super['cacheAs'] = _0x4a68c8, this['_usedCache'] = null, _0x4a68c8 !== 'none' ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off'](_0x322c83['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x54ec1d) {
            this['_elasticEn' + 'abled'] = _0x54ec1d, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x54ec1d ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x54ec1d ? 0xc8 : 0x0);
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once'](_0x322c83['Event']['END'], this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once'](_0x322c83['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        ['_setScroll' + 'Changed']() {
            !this['_scrollCha' + 'nged'] && (this['_scrollCha' + 'nged'] = !![], this['callLater'](this['changeScro' + 'll']));
        }
    }
    _0x322c83['ILaya']['regClass'](_0x257d56), _0x322c83['ClassUtils']['regClass']('laya.ui.Pa' + 'nel', _0x257d56), _0x322c83['ClassUtils']['regClass']('Laya.Panel', _0x257d56);
    class _0x4bfc99 extends _0x21cdfc {
    }
    _0x322c83['ILaya']['regClass'](_0x4bfc99), _0x322c83['ClassUtils']['regClass']('laya.ui.VS' + 'lider', _0x4bfc99), _0x322c83['ClassUtils']['regClass']('Laya.VSlid' + 'er', _0x4bfc99);
    class _0x37a9f3 extends _0x490c4a {
        constructor() {
            super(), this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !![], this['width'] = this['height'] = 0xc8;
        }
        ['destroy'](_0x3ba35f = !![]) {
            super['destroy'](_0x3ba35f), this['_list'] && this['_list']['destroy'](_0x3ba35f), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_list'] = new _0x105093()), this['_list']['renderHand' + 'ler'] = _0x322c83['Handler']['create'](this, this['renderItem'], null, ![]), this['_list']['repeatX'] = 0x1, this['_list']['on'](_0x322c83['Event']['CHANGE'], this, this['onListChan' + 'ge']);
        }
        ['onListChan' + 'ge'](_0x34761c = null) {
            this['event'](_0x322c83['Event']['CHANGE']);
        }
        get ['keepStatus']() {
            return this['_keepStatu' + 's'];
        }
        set ['keepStatus'](_0x40fed2) {
            this['_keepStatu' + 's'] = _0x40fed2;
        }
        get ['array']() {
            return this['_list']['array'];
        }
        set ['array'](_0x227340) {
            this['_keepStatu' + 's'] && this['_list']['array'] && _0x227340 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x227340), this['_source'] = _0x227340, this['_list']['array'] = this['getArray']();
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
        set ['itemRender'](_0x250e8f) {
            this['_list']['itemRender'] = _0x250e8f;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_list']['vScrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x412fac) {
            this['_list']['vScrollBar' + 'Skin'] = _0x412fac;
        }
        get ['scrollBar']() {
            return this['_list']['scrollBar'];
        }
        get ['mouseHandl' + 'er']() {
            return this['_list']['mouseHandl' + 'er'];
        }
        set ['mouseHandl' + 'er'](_0x21000f) {
            this['_list']['mouseHandl' + 'er'] = _0x21000f;
        }
        get ['renderHand' + 'ler']() {
            return this['_renderHan' + 'dler'];
        }
        set ['renderHand' + 'ler'](_0x33e002) {
            this['_renderHan' + 'dler'] = _0x33e002;
        }
        get ['spaceLeft']() {
            return this['_spaceLeft'];
        }
        set ['spaceLeft'](_0x46599e) {
            this['_spaceLeft'] = _0x46599e;
        }
        get ['spaceBotto' + 'm']() {
            return this['_list']['spaceY'];
        }
        set ['spaceBotto' + 'm'](_0x23ba57) {
            this['_list']['spaceY'] = _0x23ba57;
        }
        get ['selectedIn' + 'dex']() {
            return this['_list']['selectedIn' + 'dex'];
        }
        set ['selectedIn' + 'dex'](_0x5881b7) {
            this['_list']['selectedIn' + 'dex'] = _0x5881b7;
        }
        get ['selectedIt' + 'em']() {
            return this['_list']['selectedIt' + 'em'];
        }
        set ['selectedIt' + 'em'](_0x181e59) {
            this['_list']['selectedIt' + 'em'] = _0x181e59;
        }
        set ['width'](_0x36d403) {
            super['width'] = _0x36d403, this['_list']['width'] = _0x36d403;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x16165d) {
            super['height'] = _0x16165d, this['_list']['height'] = _0x16165d;
        }
        get ['height']() {
            return super['height'];
        }
        ['getArray']() {
            var _0x113c04 = [];
            for (let _0x517862 in this['_source']) {
                let _0x2e7745 = this['_source'][_0x517862];
                this['getParentO' + 'penStatus'](_0x2e7745) && (_0x2e7745['x'] = this['_spaceLeft'] * this['getDepth'](_0x2e7745), _0x113c04['push'](_0x2e7745));
            }
            return _0x113c04;
        }
        ['getDepth'](_0x41e820, _0x3e9bc3 = 0x0) {
            if (_0x41e820['nodeParent'] == null)
                return _0x3e9bc3;
            else
                return this['getDepth'](_0x41e820['nodeParent'], _0x3e9bc3 + 0x1);
        }
        ['getParentO' + 'penStatus'](_0x2fc456) {
            var _0x5d358d = _0x2fc456['nodeParent'];
            if (_0x5d358d == null)
                return !![];
            else {
                if (_0x5d358d['isOpen']) {
                    if (_0x5d358d['nodeParent'] != null)
                        return this['getParentO' + 'penStatus'](_0x5d358d);
                    else
                        return !![];
                } else
                    return ![];
            }
        }
        ['renderItem'](_0x1ace98, _0x57386b) {
            var _0x4ddffa = _0x1ace98['dataSource'];
            if (_0x4ddffa) {
                _0x1ace98['left'] = _0x4ddffa['x'];
                var _0x2df133 = _0x1ace98['getChildBy' + 'Name']('arrow');
                _0x2df133 && (_0x4ddffa['hasChild'] ? (_0x2df133['visible'] = !![], _0x2df133['index'] = _0x4ddffa['isOpen'] ? 0x1 : 0x0, _0x2df133['tag'] = _0x57386b, _0x2df133['off'](_0x322c83['Event']['CLICK'], this, this['onArrowCli' + 'ck']), _0x2df133['on'](_0x322c83['Event']['CLICK'], this, this['onArrowCli' + 'ck'])) : _0x2df133['visible'] = ![]);
                var _0x5ecc41 = _0x1ace98['getChildBy' + 'Name']('folder');
                _0x5ecc41 && (_0x5ecc41['clipY'] == 0x2 ? _0x5ecc41['index'] = _0x4ddffa['isDirector' + 'y'] ? 0x0 : 0x1 : _0x5ecc41['index'] = _0x4ddffa['isDirector' + 'y'] ? _0x4ddffa['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                    _0x1ace98,
                    _0x57386b
                ]);
            }
        }
        ['onArrowCli' + 'ck'](_0x5dbf7) {
            var _0x39af19 = _0x5dbf7['currentTar' + 'get'], _0x318918 = _0x39af19['tag'];
            this['_list']['array'][_0x318918]['isOpen'] = !this['_list']['array'][_0x318918]['isOpen'], this['event'](_0x322c83['Event']['OPEN']), this['_list']['array'] = this['getArray']();
        }
        ['setItemSta' + 'te'](_0xfca1f0, _0x3f5bb4) {
            if (!this['_list']['array'][_0xfca1f0])
                return;
            this['_list']['array'][_0xfca1f0]['isOpen'] = _0x3f5bb4, this['_list']['array'] = this['getArray']();
        }
        ['fresh']() {
            this['_list']['array'] = this['getArray'](), this['repaint']();
        }
        set ['dataSource'](_0x5689ec) {
            this['_dataSourc' + 'e'] = _0x5689ec, super['dataSource'] = _0x5689ec;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        set ['xml'](_0x11150e) {
            var _0x317a98 = [];
            this['parseXml'](_0x11150e['childNodes'][0x0], _0x317a98, null, !![]), this['array'] = _0x317a98;
        }
        ['parseXml'](_0xc925fd, _0x3f445b, _0x3ebc4d, _0x2732f4) {
            var _0x3000ec, _0x35ed12 = _0xc925fd['childNodes'], _0x2bcb9d = _0x35ed12['length'];
            if (!_0x2732f4) {
                _0x3000ec = {};
                var _0x1c1a22 = _0xc925fd['attributes'];
                for (let _0xff5c80 in _0x1c1a22) {
                    var _0x5df7d0 = _0x1c1a22[_0xff5c80], _0x75d398 = _0x5df7d0['nodeName'], _0x3a65a0 = _0x5df7d0['nodeValue'];
                    _0x3000ec[_0x75d398] = _0x3a65a0 == 'true' ? !![] : _0x3a65a0 == 'false' ? ![] : _0x3a65a0;
                }
                _0x3000ec['nodeParent'] = _0x3ebc4d;
                if (_0x2bcb9d > 0x0)
                    _0x3000ec['isDirector' + 'y'] = !![];
                _0x3000ec['hasChild'] = _0x2bcb9d > 0x0, _0x3f445b['push'](_0x3000ec);
            }
            for (var _0x23c8a4 = 0x0; _0x23c8a4 < _0x2bcb9d; _0x23c8a4++) {
                var _0x13d2f7 = _0x35ed12[_0x23c8a4];
                this['parseXml'](_0x13d2f7, _0x3f445b, _0x3000ec, ![]);
            }
        }
        ['parseOpenS' + 'tatus'](_0x267819, _0x2fd99c) {
            for (var _0x1f8640 = 0x0, _0xaef02d = _0x2fd99c['length']; _0x1f8640 < _0xaef02d; _0x1f8640++) {
                var _0x6a5954 = _0x2fd99c[_0x1f8640];
                if (_0x6a5954['isDirector' + 'y'])
                    for (var _0xb13a14 = 0x0, _0x4778f7 = _0x267819['length']; _0xb13a14 < _0x4778f7; _0xb13a14++) {
                        var _0x237766 = _0x267819[_0xb13a14];
                        if (_0x237766['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x237766, _0x6a5954) && _0x6a5954['label'] == _0x237766['label']) {
                            _0x6a5954['isOpen'] = _0x237766['isOpen'];
                            break;
                        }
                    }
            }
        }
        ['isSamePare' + 'nt'](_0x180b49, _0x4ec80c) {
            if (_0x180b49['nodeParent'] == null && _0x4ec80c['nodeParent'] == null)
                return !![];
            else {
                if (_0x180b49['nodeParent'] == null || _0x4ec80c['nodeParent'] == null)
                    return ![];
                else {
                    if (_0x180b49['nodeParent']['label'] == _0x4ec80c['nodeParent']['label'])
                        return this['isSamePare' + 'nt'](_0x180b49['nodeParent'], _0x4ec80c['nodeParent']);
                    else
                        return ![];
                }
            }
        }
        get ['selectedPa' + 'th']() {
            if (this['_list']['selectedIt' + 'em'])
                return this['_list']['selectedIt' + 'em']['path'];
            return null;
        }
        ['filter'](_0xa3f3ea) {
            if (Boolean(_0xa3f3ea)) {
                var _0x2d3751 = [];
                this['getFilterS' + 'ource'](this['_source'], _0x2d3751, _0xa3f3ea), this['_list']['array'] = _0x2d3751;
            } else
                this['_list']['array'] = this['getArray']();
        }
        ['getFilterS' + 'ource'](_0x5a655a, _0x1920aa, _0x545e29) {
            _0x545e29 = _0x545e29['toLocaleLo' + 'werCase']();
            for (let _0x2b24f7 of _0x5a655a) {
                !_0x2b24f7['isDirector' + 'y'] && String(_0x2b24f7['label'])['toLowerCas' + 'e']()['indexOf'](_0x545e29) > -0x1 && (_0x2b24f7['x'] = 0x0, _0x1920aa['push'](_0x2b24f7)), _0x2b24f7['child'] && _0x2b24f7['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x2b24f7['child'], _0x1920aa, _0x545e29);
            }
        }
    }
    _0x322c83['ILaya']['regClass'](_0x37a9f3), _0x322c83['ClassUtils']['regClass']('laya.ui.Tr' + 'ee', _0x37a9f3), _0x322c83['ClassUtils']['regClass']('Laya.Tree', _0x37a9f3);
    class _0x2956de extends _0x490c4a {
        constructor() {
            super(...arguments), this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = ![];
        }
        ['addChild'](_0x1d4608) {
            return _0x1d4608['on'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChild'](_0x1d4608);
        }
        ['onResize'](_0x54bcc7) {
            this['_setItemCh' + 'anged']();
        }
        ['addChildAt'](_0x9eb6bf, _0x736488) {
            return _0x9eb6bf['on'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChildAt'](_0x9eb6bf, _0x736488);
        }
        ['removeChil' + 'dAt'](_0x34b14d) {
            return this['getChildAt'](_0x34b14d)['off'](_0x322c83['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['removeChil' + 'dAt'](_0x34b14d);
        }
        ['refresh']() {
            this['_setItemCh' + 'anged']();
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = ![];
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0xcb7b8a) {
            this['_space'] = _0xcb7b8a, this['_setItemCh' + 'anged']();
        }
        get ['align']() {
            return this['_align'];
        }
        set ['align'](_0xfc628f) {
            this['_align'] = _0xfc628f, this['_setItemCh' + 'anged']();
        }
        ['sortItem'](_0x1ac151) {
            if (_0x1ac151)
                _0x1ac151['sort'](function (_0xe67121, _0x57d28c) {
                    return _0xe67121['y'] - _0x57d28c['y'];
                });
        }
        ['_setItemCh' + 'anged']() {
            !this['_itemChang' + 'ed'] && (this['_itemChang' + 'ed'] = !![], this['callLater'](this['changeItem' + 's']));
        }
    }
    _0x322c83['ILaya']['regClass'](_0x2956de), _0x322c83['ClassUtils']['regClass']('laya.ui.La' + 'youtBox', _0x2956de), _0x322c83['ClassUtils']['regClass']('Laya.Layou' + 'tBox', _0x2956de);
    class _0x25f22b extends _0x2956de {
        ['sortItem'](_0x5daa09) {
            if (_0x5daa09)
                _0x5daa09['sort'](function (_0x39bddd, _0x35fff2) {
                    return _0x39bddd['x'] - _0x35fff2['x'];
                });
        }
        set ['height'](_0x49575c) {
            this['_height'] != _0x49575c && (super['height'] = _0x49575c, this['callLater'](this['changeItem' + 's']));
        }
        get ['height']() {
            return super['height'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = ![];
            var _0x523ad7 = [], _0x74dff6 = 0x0;
            for (var _0x16c23f = 0x0, _0x19d3dc = this['numChildre' + 'n']; _0x16c23f < _0x19d3dc; _0x16c23f++) {
                var _0x3ce88c = this['getChildAt'](_0x16c23f);
                _0x3ce88c && (_0x523ad7['push'](_0x3ce88c), _0x74dff6 = this['_height'] ? this['_height'] : Math['max'](_0x74dff6, _0x3ce88c['height'] * _0x3ce88c['scaleY']));
            }
            this['sortItem'](_0x523ad7);
            var _0x5bb13c = 0x0;
            for (_0x16c23f = 0x0, _0x19d3dc = _0x523ad7['length']; _0x16c23f < _0x19d3dc; _0x16c23f++) {
                _0x3ce88c = _0x523ad7[_0x16c23f], _0x3ce88c['x'] = _0x5bb13c, _0x5bb13c += _0x3ce88c['width'] * _0x3ce88c['scaleX'] + this['_space'];
                if (this['_align'] == _0x25f22b['TOP'])
                    _0x3ce88c['y'] = 0x0;
                else {
                    if (this['_align'] == _0x25f22b['MIDDLE'])
                        _0x3ce88c['y'] = (_0x74dff6 - _0x3ce88c['height'] * _0x3ce88c['scaleY']) * 0.5;
                    else
                        this['_align'] == _0x25f22b['BOTTOM'] && (_0x3ce88c['y'] = _0x74dff6 - _0x3ce88c['height'] * _0x3ce88c['scaleY']);
                }
            }
            this['_sizeChang' + 'ed']();
        }
    }
    _0x25f22b['NONE'] = 'none', _0x25f22b['TOP'] = 'top', _0x25f22b['MIDDLE'] = 'middle', _0x25f22b['BOTTOM'] = 'bottom', _0x322c83['ILaya']['regClass'](_0x25f22b), _0x322c83['ClassUtils']['regClass']('laya.ui.HB' + 'ox', _0x25f22b), _0x322c83['ClassUtils']['regClass']('Laya.HBox', _0x25f22b);
    class _0x5bb6fa extends _0x2956de {
        set ['width'](_0x56a26d) {
            this['_width'] != _0x56a26d && (super['width'] = _0x56a26d, this['callLater'](this['changeItem' + 's']));
        }
        get ['width']() {
            return super['width'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = ![];
            var _0x25145d = [], _0x452b5f = 0x0;
            for (var _0x20b4f7 = 0x0, _0x4e2006 = this['numChildre' + 'n']; _0x20b4f7 < _0x4e2006; _0x20b4f7++) {
                var _0x16a709 = this['getChildAt'](_0x20b4f7);
                _0x16a709 && (_0x25145d['push'](_0x16a709), _0x452b5f = this['_width'] ? this['_width'] : Math['max'](_0x452b5f, _0x16a709['width'] * _0x16a709['scaleX']));
            }
            this['sortItem'](_0x25145d);
            var _0x27deec = 0x0;
            for (_0x20b4f7 = 0x0, _0x4e2006 = _0x25145d['length']; _0x20b4f7 < _0x4e2006; _0x20b4f7++) {
                _0x16a709 = _0x25145d[_0x20b4f7], _0x16a709['y'] = _0x27deec, _0x27deec += _0x16a709['height'] * _0x16a709['scaleY'] + this['_space'];
                if (this['_align'] == _0x5bb6fa['LEFT'])
                    _0x16a709['x'] = 0x0;
                else {
                    if (this['_align'] == _0x5bb6fa['CENTER'])
                        _0x16a709['x'] = (_0x452b5f - _0x16a709['width'] * _0x16a709['scaleX']) * 0.5;
                    else
                        this['_align'] == _0x5bb6fa['RIGHT'] && (_0x16a709['x'] = _0x452b5f - _0x16a709['width'] * _0x16a709['scaleX']);
                }
            }
            this['_sizeChang' + 'ed']();
        }
    }
    _0x5bb6fa['NONE'] = 'none', _0x5bb6fa['LEFT'] = 'left', _0x5bb6fa['CENTER'] = 'center', _0x5bb6fa['RIGHT'] = 'right', _0x322c83['ILaya']['regClass'](_0x5bb6fa), _0x322c83['ClassUtils']['regClass']('laya.ui.VB' + 'ox', _0x5bb6fa), _0x322c83['ClassUtils']['regClass']('Laya.VBox', _0x5bb6fa);
    class _0x46ae1d extends _0x36a3aa {
        constructor(_0x54d352 = null, _0x32ce95 = null) {
            super(), this['_valueArr'] = '', this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0;
            if (_0x54d352)
                this['skin'] = _0x54d352;
            if (_0x32ce95)
                this['sheet'] = _0x32ce95;
        }
        ['createChil' + 'dren']() {
            this['_bitmap'] = new _0x2d4396(), this['on'](_0x322c83['Event']['LOADED'], this, this['_onClipLoa' + 'ded']);
        }
        ['_onClipLoa' + 'ded']() {
            this['callLater'](this['changeValu' + 'e']);
        }
        get ['sheet']() {
            return this['_sheet'];
        }
        set ['sheet'](_0x1ac4f3) {
            _0x1ac4f3 += '', this['_sheet'] = _0x1ac4f3;
            var _0x150728 = _0x1ac4f3['split']('\x20');
            this['_clipX'] = String(_0x150728[0x0])['length'], this['clipY'] = _0x150728['length'], this['_indexMap'] = {};
            for (var _0x5bafba = 0x0; _0x5bafba < this['_clipY']; _0x5bafba++) {
                var _0x3fef1d = _0x150728[_0x5bafba]['split']('');
                for (var _0x4ae8be = 0x0, _0x473bb7 = _0x3fef1d['length']; _0x4ae8be < _0x473bb7; _0x4ae8be++) {
                    this['_indexMap'][_0x3fef1d[_0x4ae8be]] = _0x5bafba * this['_clipX'] + _0x4ae8be;
                }
            }
        }
        get ['value']() {
            if (!this['_valueArr'])
                return '';
            return this['_valueArr'];
        }
        set ['value'](_0x393a05) {
            _0x393a05 += '', this['_valueArr'] = _0x393a05, this['callLater'](this['changeValu' + 'e']);
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x279623) {
            this['_direction'] = _0x279623, this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x118d1b) {
            this['_spaceX'] = _0x118d1b;
            if (this['_direction'] === 'horizontal')
                this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x319760) {
            this['_spaceY'] = _0x319760;
            if (!(this['_direction'] === 'horizontal'))
                this['callLater'](this['changeValu' + 'e']);
        }
        set ['align'](_0x4672c8) {
            this['_align'] = _0x4672c8, this['callLater'](this['changeValu' + 'e']);
        }
        get ['align']() {
            return this['_align'];
        }
        ['changeValu' + 'e']() {
            if (!this['_sources'])
                return;
            if (!this['_valueArr'])
                return;
            this['graphics']['clear'](!![]);
            var _0x2168b2;
            _0x2168b2 = this['_sources'][0x0];
            if (!_0x2168b2)
                return;
            var _0x47a68a = this['_direction'] === 'horizontal';
            _0x47a68a ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x2168b2['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x2168b2['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x2168b2['sourceWidt' + 'h'], this['_wordsH'] = (_0x2168b2['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
            var _0x581591 = 0x0;
            if (this['_width'])
                switch (this['_align']) {
                case 'center':
                    _0x581591 = 0.5 * (this['_width'] - this['_wordsW']);
                    break;
                case 'right':
                    _0x581591 = this['_width'] - this['_wordsW'];
                    break;
                default:
                    _0x581591 = 0x0;
                }
            for (var _0x41ec88 = 0x0, _0x238538 = this['_valueArr']['length']; _0x41ec88 < _0x238538; _0x41ec88++) {
                var _0x55f9f1 = this['_indexMap'][this['_valueArr']['charAt'](_0x41ec88)];
                if (!this['sources'][_0x55f9f1])
                    continue;
                _0x2168b2 = this['sources'][_0x55f9f1];
                if (_0x47a68a)
                    this['graphics']['drawImage'](_0x2168b2, _0x581591 + _0x41ec88 * (_0x2168b2['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x2168b2['sourceWidt' + 'h'], _0x2168b2['sourceHeig' + 'ht']);
                else
                    this['graphics']['drawImage'](_0x2168b2, 0x0 + _0x581591, _0x41ec88 * (_0x2168b2['sourceHeig' + 'ht'] + this['spaceY']), _0x2168b2['sourceWidt' + 'h'], _0x2168b2['sourceHeig' + 'ht']);
            }
            !this['_width'] && (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), !this['_height'] && (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
        }
        set ['width'](_0x5c612f) {
            super['width'] = _0x5c612f, this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x7790f7) {
            super['height'] = _0x7790f7, this['callLater'](this['changeValu' + 'e']);
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
        ['destroy'](_0x5163ce = !![]) {
            this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!![]), this['removeSelf'](), this['off'](_0x322c83['Event']['LOADED'], this, this['_onClipLoa' + 'ded']), super['destroy'](_0x5163ce);
        }
    }
    _0x322c83['ILaya']['regClass'](_0x46ae1d), _0x322c83['ClassUtils']['regClass']('laya.ui.Fo' + 'ntClip', _0x46ae1d), _0x322c83['ClassUtils']['regClass']('Laya.FontC' + 'lip', _0x46ae1d);
    class _0x4ebcfa extends _0x322c83['Scene'] {
        constructor() {
            super(![]), this['_watchMap'] = {}, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x30a5a2['EMPTY'], this['createChil' + 'dren']();
        }
        static ['__init__']() {
            _0x322c83['ILaya']['ClassUtils']['regShortCl' + 'assName']([
                _0x2fbd85,
                _0x561c8e,
                _0x3411c7,
                _0x3674f3,
                _0x490c4a,
                _0x587a00,
                _0x116ec3,
                _0x36a3aa,
                _0x4a237c,
                _0x283d79,
                _0x3f640f,
                _0x17d2ec,
                _0x87edde,
                _0x2336dc,
                _0x105093,
                _0x257d56,
                _0x4bff32,
                _0x5f2e43,
                _0x45eef5,
                _0x3d31b4,
                _0x21cdfc,
                _0x446a43,
                _0x3dc9ee,
                _0x4ebcfa,
                _0x15b518,
                _0x4bfc99,
                _0x37a9f3,
                _0x25f22b,
                _0x5bb6fa,
                _0x322c83['Animation'],
                _0x322c83['Text'],
                _0x46ae1d
            ]);
        }
        static ['regCompone' + 'nt'](_0x2c0f9a, _0x12ae7a) {
            _0x322c83['ILaya']['ClassUtils']['regClass'](_0x2c0f9a, _0x12ae7a);
        }
        static ['regViewRun' + 'time'](_0x10e870, _0xbd8a72) {
            _0x322c83['ILaya']['ClassUtils']['regClass'](_0x10e870, _0xbd8a72);
        }
        static ['regUI'](_0x1b8c9a, _0x16770f) {
            _0x322c83['ILaya']['loader']['cacheRes'](_0x1b8c9a, _0x16770f);
        }
        ['destroy'](_0x22c455 = !![]) {
            this['_watchMap'] = null, super['destroy'](_0x22c455);
        }
        ['changeData'](_0x2b3c17) {
            var _0x38e0d9 = this['_watchMap'][_0x2b3c17];
            if (!_0x38e0d9)
                return;
            for (var _0x13a2ad = 0x0, _0x27c26f = _0x38e0d9['length']; _0x13a2ad < _0x27c26f; _0x13a2ad++) {
                var _0x5a7e6f = _0x38e0d9[_0x13a2ad];
                _0x5a7e6f['exe'](this);
            }
        }
        get ['top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x18f382) {
            _0x18f382 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x18f382);
        }
        get ['bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x439fb9) {
            _0x439fb9 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x439fb9);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x2802fb) {
            _0x2802fb != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x2802fb);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x27b27c) {
            _0x27b27c != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x27b27c);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x57c959) {
            _0x57c959 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x57c959);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x4a0471) {
            _0x4a0471 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x4a0471);
        }
        get ['anchorX']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x26a5a4) {
            this['_anchorX'] != _0x26a5a4 && (this['_anchorX'] = _0x26a5a4, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x278dbd) {
            this['_anchorY'] != _0x278dbd && (this['_anchorY'] = _0x278dbd, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_sizeChang' + 'ed']() {
            if (!isNaN(this['_anchorX']))
                this['pivotX'] = this['anchorX'] * this['width'];
            if (!isNaN(this['_anchorY']))
                this['pivotY'] = this['anchorY'] * this['height'];
            this['event'](_0x322c83['Event']['RESIZE']);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x30a5a2['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x30a5a2)), this['_widget'];
        }
        ['loadUI'](_0x598d13) {
            var _0xa4c6f7 = _0x4ebcfa['uiMap'][_0x598d13];
            _0x4ebcfa['uiMap'] && this['createView'](_0xa4c6f7);
        }
        get ['dataSource']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x4cfe69) {
            this['_dataSourc' + 'e'] = _0x4cfe69;
            for (var _0x333c47 in _0x4cfe69) {
                var _0x261f2e = this['getChildBy' + 'Name'](_0x333c47);
                if (_0x261f2e instanceof _0x283d79)
                    _0x261f2e['dataSource'] = _0x4cfe69[_0x333c47];
                else {
                    if (_0x333c47 in this && !(this[_0x333c47] instanceof Function))
                        this[_0x333c47] = _0x4cfe69[_0x333c47];
                }
            }
        }
    }
    _0x4ebcfa['uiMap'] = {}, _0x322c83['ILaya']['regClass'](_0x4ebcfa), _0x322c83['ClassUtils']['regClass']('laya.ui.Vi' + 'ew', _0x4ebcfa), _0x322c83['ClassUtils']['regClass']('Laya.View', _0x4ebcfa);
    class _0x260589 {
    }
    _0x260589['Dialog'] = null;
    class _0x1ada40 extends _0x322c83['Sprite'] {
        constructor() {
            super(), this['maskLayer'] = new _0x322c83['Sprite'](), this['popupEffec' + 't'] = _0x1e2a3b => {
                _0x1e2a3b['scale'](0x1, 0x1), _0x1e2a3b['_effectTwe' + 'en'] = _0x322c83['Tween']['from'](_0x1e2a3b, {
                    'x': _0x322c83['ILaya']['stage']['width'] / 0x2,
                    'y': _0x322c83['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x322c83['Ease']['backOut'], _0x322c83['Handler']['create'](this, this['doOpen'], [_0x1e2a3b]), 0x0, ![], ![]);
            }, this['closeEffec' + 't'] = _0x20a7ca => {
                _0x20a7ca['_effectTwe' + 'en'] = _0x322c83['Tween']['to'](_0x20a7ca, {
                    'x': _0x322c83['ILaya']['stage']['width'] / 0x2,
                    'y': _0x322c83['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x322c83['Ease']['strongOut'], _0x322c83['Handler']['create'](this, this['doClose'], [_0x20a7ca]), 0x0, ![], ![]);
            }, this['popupEffec' + 'tHandler'] = new _0x322c83['Handler'](this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x322c83['Handler'](this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !![], this['zOrder'] = 0x3e8, _0x322c83['ILaya']['stage']['addChild'](this), _0x322c83['ILaya']['stage']['on'](_0x322c83['Event']['RESIZE'], this, this['_onResize']);
            if (_0x5f3ab0['closeDialo' + 'gOnSide'])
                this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']);
            this['_onResize'](null);
        }
        ['_closeOnSi' + 'de']() {
            var _0x254274 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
            if (_0x254274 instanceof _0x260589['Dialog'])
                _0x254274['close']();
        }
        ['setLockVie' + 'w'](_0x13d7a3) {
            !this['lockLayer'] && (this['lockLayer'] = new _0x490c4a(), this['lockLayer']['mouseEnabl' + 'ed'] = !![], this['lockLayer']['size'](_0x322c83['ILaya']['stage']['width'], _0x322c83['ILaya']['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x13d7a3 && (_0x13d7a3['centerX'] = _0x13d7a3['centerY'] = 0x0, this['lockLayer']['addChild'](_0x13d7a3));
        }
        ['_onResize'](_0xa53618 = null) {
            var _0x825586 = this['maskLayer']['width'] = _0x322c83['ILaya']['stage']['width'], _0x5cabb9 = this['maskLayer']['height'] = _0x322c83['ILaya']['stage']['height'];
            if (this['lockLayer'])
                this['lockLayer']['size'](_0x825586, _0x5cabb9);
            this['maskLayer']['graphics']['clear'](!![]), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x825586, _0x5cabb9, _0x5f3ab0['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x5f3ab0['popupBgAlp' + 'ha'];
            for (var _0x2a4345 = this['numChildre' + 'n'] - 0x1; _0x2a4345 > -0x1; _0x2a4345--) {
                var _0x520b06 = this['getChildAt'](_0x2a4345);
                if (_0x520b06['isPopupCen' + 'ter'])
                    this['_centerDia' + 'log'](_0x520b06);
            }
        }
        ['_centerDia' + 'log'](_0x13db34) {
            _0x13db34['x'] = Math['round']((_0x322c83['ILaya']['stage']['width'] - _0x13db34['width'] >> 0x1) + _0x13db34['pivotX']), _0x13db34['y'] = Math['round']((_0x322c83['ILaya']['stage']['height'] - _0x13db34['height'] >> 0x1) + _0x13db34['pivotY']);
        }
        ['open'](_0x149f9b, _0x4e97f3 = ![], _0x41ff17 = ![]) {
            if (_0x4e97f3)
                this['_closeAll']();
            this['_clearDial' + 'ogEffect'](_0x149f9b);
            if (_0x149f9b['isPopupCen' + 'ter'])
                this['_centerDia' + 'log'](_0x149f9b);
            this['addChild'](_0x149f9b);
            if (_0x149f9b['isModal'] || this['_getBit'](_0x322c83['Const']['HAS_ZORDER']))
                _0x322c83['ILaya']['timer']['callLater'](this, this['_checkMask']);
            if (_0x41ff17 && _0x149f9b['popupEffec' + 't'] != null)
                _0x149f9b['popupEffec' + 't']['runWith'](_0x149f9b);
            else
                this['doOpen'](_0x149f9b);
            this['event'](_0x322c83['Event']['OPEN']);
        }
        ['_clearDial' + 'ogEffect'](_0x6ca404) {
            _0x6ca404['_effectTwe' + 'en'] && (_0x322c83['Tween']['clear'](_0x6ca404['_effectTwe' + 'en']), _0x6ca404['_effectTwe' + 'en'] = null);
        }
        ['doOpen'](_0x580a50) {
            _0x580a50['onOpened'](_0x580a50['_param']);
        }
        ['lock'](_0x573ea0) {
            if (this['lockLayer']) {
                if (_0x573ea0)
                    this['addChild'](this['lockLayer']);
                else
                    this['lockLayer']['removeSelf']();
            }
        }
        ['close'](_0x131685) {
            this['_clearDial' + 'ogEffect'](_0x131685);
            if (_0x131685['isShowEffe' + 'ct'] && _0x131685['closeEffec' + 't'] != null)
                _0x131685['closeEffec' + 't']['runWith']([_0x131685]);
            else
                this['doClose'](_0x131685);
            this['event'](_0x322c83['Event']['CLOSE']);
        }
        ['doClose'](_0x39499d) {
            _0x39499d['removeSelf'](), _0x39499d['isModal'] && this['_checkMask'](), _0x39499d['closeHandl' + 'er'] && _0x39499d['closeHandl' + 'er']['runWith'](_0x39499d['closeType']), _0x39499d['onClosed'](_0x39499d['closeType']);
            if (_0x39499d['autoDestro' + 'yAtClosed'])
                _0x39499d['destroy']();
        }
        ['closeAll']() {
            this['_closeAll'](), this['event'](_0x322c83['Event']['CLOSE']);
        }
        ['_closeAll']() {
            for (var _0x405f8c = this['numChildre' + 'n'] - 0x1; _0x405f8c > -0x1; _0x405f8c--) {
                var _0x451712 = this['getChildAt'](_0x405f8c);
                _0x451712 && _0x451712['close'] != null && this['doClose'](_0x451712);
            }
        }
        ['getDialogs' + 'ByGroup'](_0x2e6269) {
            var _0x393e23 = [];
            for (var _0x30c2f6 = this['numChildre' + 'n'] - 0x1; _0x30c2f6 > -0x1; _0x30c2f6--) {
                var _0x355192 = this['getChildAt'](_0x30c2f6);
                _0x355192 && _0x355192['group'] === _0x2e6269 && _0x393e23['push'](_0x355192);
            }
            return _0x393e23;
        }
        ['closeByGro' + 'up'](_0x3039ee) {
            var _0x515797 = [];
            for (var _0x1cc01b = this['numChildre' + 'n'] - 0x1; _0x1cc01b > -0x1; _0x1cc01b--) {
                var _0x4dc4dd = this['getChildAt'](_0x1cc01b);
                _0x4dc4dd && _0x4dc4dd['group'] === _0x3039ee && (_0x4dc4dd['close'](), _0x515797['push'](_0x4dc4dd));
            }
            return _0x515797;
        }
        ['_checkMask']() {
            this['maskLayer']['removeSelf']();
            for (var _0x211a2e = this['numChildre' + 'n'] - 0x1; _0x211a2e > -0x1; _0x211a2e--) {
                var _0x5800d3 = this['getChildAt'](_0x211a2e);
                if (_0x5800d3 && _0x5800d3['isModal']) {
                    this['addChildAt'](this['maskLayer'], _0x211a2e);
                    return;
                }
            }
        }
    }
    _0x322c83['ClassUtils']['regClass']('laya.ui.Di' + 'alogManage' + 'r', _0x1ada40), _0x322c83['ClassUtils']['regClass']('Laya.Dialo' + 'gManager', _0x1ada40);
    class _0x22bd0a extends _0x4ebcfa {
        constructor() {
            super(), this['isShowEffe' + 'ct'] = !![], this['isPopupCen' + 'ter'] = !![], this['popupEffec' + 't'] = _0x22bd0a['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x22bd0a['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on'](_0x322c83['Event']['CLICK'], this, this['_onClick']);
        }
        static get ['manager']() {
            return _0x22bd0a['_manager'] = _0x22bd0a['_manager'] || new _0x1ada40();
        }
        static set ['manager'](_0x4da921) {
            _0x22bd0a['_manager'] = _0x4da921;
        }
        ['_dealDragA' + 'rea']() {
            var _0x2d1f46 = this['getChildBy' + 'Name']('drag');
            _0x2d1f46 && (this['dragArea'] = _0x2d1f46['_x'] + ',' + _0x2d1f46['_y'] + ',' + _0x2d1f46['width'] + ',' + _0x2d1f46['height'], _0x2d1f46['removeSelf']());
        }
        get ['dragArea']() {
            if (this['_dragArea'])
                return this['_dragArea']['toString']();
            return null;
        }
        set ['dragArea'](_0x5b8562) {
            if (_0x5b8562) {
                var _0x2b533e = _0x373b03['fillArray']([
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x5b8562, Number);
                this['_dragArea'] = new _0x322c83['Rectangle'](_0x2b533e[0x0], _0x2b533e[0x1], _0x2b533e[0x2], _0x2b533e[0x3]), this['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
            } else
                this['_dragArea'] = null, this['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
        }
        ['_onMouseDo' + 'wn'](_0x55e542) {
            var _0x5667ce = this['getMousePo' + 'int']();
            if (this['_dragArea']['contains'](_0x5667ce['x'], _0x5667ce['y']))
                this['startDrag']();
            else
                this['stopDrag']();
        }
        ['_onClick'](_0x2caf70) {
            var _0x1b8de6 = _0x2caf70['target'];
            if (_0x1b8de6)
                switch (_0x1b8de6['name']) {
                case _0x22bd0a['CLOSE']:
                case _0x22bd0a['CANCEL']:
                case _0x22bd0a['SURE']:
                case _0x22bd0a['NO']:
                case _0x22bd0a['OK']:
                case _0x22bd0a['YES']:
                    this['close'](_0x1b8de6['name']);
                    return;
                }
        }
        ['open'](_0x37e047 = !![], _0x299e70 = null) {
            this['_dealDragA' + 'rea'](), this['_param'] = _0x299e70, _0x22bd0a['manager']['open'](this, _0x37e047, this['isShowEffe' + 'ct']), _0x22bd0a['manager']['lock'](![]);
        }
        ['close'](_0x25d975 = null) {
            this['closeType'] = _0x25d975, _0x22bd0a['manager']['close'](this);
        }
        ['destroy'](_0x326463 = !![]) {
            this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, super['destroy'](_0x326463);
        }
        ['show'](_0x49e26b = ![], _0x8565ea = !![]) {
            this['_open'](![], _0x49e26b, _0x8565ea);
        }
        ['popup'](_0x1a6c75 = ![], _0x2a809f = !![]) {
            this['_open'](!![], _0x1a6c75, _0x2a809f);
        }
        ['_open'](_0x4498a1, _0x2361c2, _0x1ef9b2) {
            this['isModal'] = _0x4498a1, this['isShowEffe' + 'ct'] = _0x1ef9b2, _0x22bd0a['manager']['lock'](!![]), this['open'](_0x2361c2);
        }
        get ['isPopup']() {
            return this['parent'] != null;
        }
        set ['zOrder'](_0x34f625) {
            super['zOrder'] = _0x34f625, _0x22bd0a['manager']['_checkMask']();
        }
        get ['zOrder']() {
            return super['zOrder'];
        }
        static ['setLockVie' + 'w'](_0x172dac) {
            _0x22bd0a['manager']['setLockVie' + 'w'](_0x172dac);
        }
        static ['lock'](_0x463310) {
            _0x22bd0a['manager']['lock'](_0x463310);
        }
        static ['closeAll']() {
            _0x22bd0a['manager']['closeAll']();
        }
        static ['getDialogs' + 'ByGroup'](_0x50f289) {
            return _0x22bd0a['manager']['getDialogs' + 'ByGroup'](_0x50f289);
        }
        static ['closeByGro' + 'up'](_0xda54cf) {
            return _0x22bd0a['manager']['closeByGro' + 'up'](_0xda54cf);
        }
    }
    _0x22bd0a['CLOSE'] = 'close', _0x22bd0a['CANCEL'] = 'cancel', _0x22bd0a['SURE'] = 'sure', _0x22bd0a['NO'] = 'no', _0x22bd0a['YES'] = 'yes', _0x22bd0a['OK'] = 'ok', _0x260589['Dialog'] = _0x22bd0a, _0x322c83['ILaya']['regClass'](_0x22bd0a), _0x322c83['ClassUtils']['regClass']('laya.ui.Di' + 'alog', _0x22bd0a), _0x322c83['ClassUtils']['regClass']('Laya.Dialo' + 'g', _0x22bd0a);
    class _0x554ad4 extends _0x283d79 {
        constructor() {
            super(), this['_tipBox'] = new _0x283d79(), this['_tipBox']['addChild'](this['_tipText'] = new _0x322c83['Text']()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x554ad4['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x322c83['ILaya']['stage']['on'](_0x665776['SHOW_TIP'], this, this['_onStageSh' + 'owTip']), _0x322c83['ILaya']['stage']['on'](_0x665776['HIDE_TIP'], this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
        }
        ['_onStageHi' + 'deTip'](_0x46529c) {
            _0x322c83['ILaya']['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
        }
        ['_onStageSh' + 'owTip'](_0x4930df) {
            _0x322c83['ILaya']['timer']['once'](_0x554ad4['tipDelay'], this, this['_showTip'], [_0x4930df], !![]);
        }
        ['_showTip'](_0x51e59b) {
            if (typeof _0x51e59b == 'string') {
                var _0x273d44 = String(_0x51e59b);
                Boolean(_0x273d44) && this['_defaultTi' + 'pHandler'](_0x273d44);
            } else {
                if (_0x51e59b instanceof _0x322c83['Handler'])
                    _0x51e59b['run']();
                else
                    _0x51e59b instanceof Function && _0x51e59b['apply']();
            }
            {
                _0x322c83['ILaya']['stage']['on'](_0x322c83['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x322c83['ILaya']['stage']['on'](_0x322c83['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']);
            }
            this['_onStageMo' + 'useMove'](null);
        }
        ['_onStageMo' + 'useDown'](_0x2acb2f) {
            this['closeAll']();
        }
        ['_onStageMo' + 'useMove'](_0x1ed874) {
            this['_showToSta' + 'ge'](this, _0x554ad4['offsetX'], _0x554ad4['offsetY']);
        }
        ['_showToSta' + 'ge'](_0x3899ab, _0x3eb30d = 0x0, _0x2e32d6 = 0x0) {
            var _0x36b67f = _0x3899ab['getBounds']();
            _0x3899ab['x'] = _0x322c83['ILaya']['stage']['mouseX'] + _0x3eb30d, _0x3899ab['y'] = _0x322c83['ILaya']['stage']['mouseY'] + _0x2e32d6, _0x3899ab['_x'] + _0x36b67f['width'] > _0x322c83['ILaya']['stage']['width'] && (_0x3899ab['x'] -= _0x36b67f['width'] + _0x3eb30d), _0x3899ab['_y'] + _0x36b67f['height'] > _0x322c83['ILaya']['stage']['height'] && (_0x3899ab['y'] -= _0x36b67f['height'] + _0x2e32d6);
        }
        ['closeAll']() {
            _0x322c83['ILaya']['timer']['clear'](this, this['_showTip']), _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x322c83['ILaya']['stage']['off'](_0x322c83['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
        }
        ['showDislay' + 'Tip'](_0x17ee39) {
            this['addChild'](_0x17ee39), this['_showToSta' + 'ge'](this), _0x322c83['ILaya']['stage']['addChild'](this);
        }
        ['_showDefau' + 'ltTip'](_0x2b7a88) {
            this['_tipText']['text'] = _0x2b7a88;
            var _0x1e2904 = this['_tipBox']['graphics'];
            _0x1e2904['clear'](!![]), _0x1e2904['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x554ad4['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x322c83['ILaya']['stage']['addChild'](this);
        }
        get ['defaultTip' + 'Handler']() {
            return this['_defaultTi' + 'pHandler'];
        }
        set ['defaultTip' + 'Handler'](_0x5d81e5) {
            this['_defaultTi' + 'pHandler'] = _0x5d81e5;
        }
    }
    _0x554ad4['offsetX'] = 0xa, _0x554ad4['offsetY'] = 0xf, _0x554ad4['tipTextCol' + 'or'] = '#ffffff', _0x554ad4['tipBackCol' + 'or'] = '#111111', _0x554ad4['tipDelay'] = 0xc8, _0x322c83['ILaya']['regClass'](_0x554ad4), _0x322c83['ClassUtils']['regClass']('laya.ui.Ti' + 'pManager', _0x554ad4), _0x322c83['ClassUtils']['regClass']('Laya.TipMa' + 'nager', _0x554ad4);
    class _0x1312a8 {
        static ['__init__']() {
        }
    }
    class _0x182bb7 extends _0x283d79 {
        constructor() {
            super(), this['_width'] = this['_height'] = 0xc8;
            var _0x224e18 = new _0x322c83['Texture']();
            _0x224e18['bitmap'] = new _0x322c83['Texture2D'](), this['texture'] = _0x224e18;
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': _0x322c83['Laya']['stage']['frameRate']
            });
            if (window['wx'] && window['sharedCanv' + 'as'])
                _0x322c83['Laya']['timer']['frameLoop'](0x1, this, this['_onLoop']);
        }
        ['onDisable']() {
            this['postMsg']({ 'type': 'undisplay' }), _0x322c83['Laya']['timer']['clear'](this, this['_onLoop']);
        }
        ['_onLoop']() {
            let _0x33dfc3 = window['sharedCanv' + 'as'];
            this['texture']['sourceWidt' + 'h'] = _0x33dfc3['width'], this['texture']['sourceHeig' + 'ht'] = _0x33dfc3['height'], this['texture']['bitmap']['loadImageS' + 'ource'](_0x33dfc3);
        }
        set ['width'](_0x5188b7) {
            super['width'] = _0x5188b7;
            if (window['sharedCanv' + 'as'])
                window['sharedCanv' + 'as']['width'] = _0x5188b7;
            this['callLater'](this['_postMsg']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x1dd978) {
            super['height'] = _0x1dd978;
            if (window['sharedCanv' + 'as'])
                window['sharedCanv' + 'as']['height'] = _0x1dd978;
            this['callLater'](this['_postMsg']);
        }
        get ['height']() {
            return super['height'];
        }
        set ['x'](_0x2f3621) {
            super['x'] = _0x2f3621, this['callLater'](this['_postMsg']);
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x5aec85) {
            super['y'] = _0x5aec85, this['callLater'](this['_postMsg']);
        }
        get ['y']() {
            return super['y'];
        }
        ['_postMsg']() {
            var _0x5bed08 = new _0x322c83['Matrix']();
            _0x5bed08['translate'](this['x'], this['y']);
            var _0x3786d2 = _0x322c83['Laya']['stage'];
            _0x5bed08['scale'](_0x3786d2['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x3786d2['transform']['getScaleX'](), _0x3786d2['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x3786d2['transform']['getScaleY']()), this['postMsg']({
                'type': 'changeMatr' + 'ix',
                'a': _0x5bed08['a'],
                'b': _0x5bed08['b'],
                'c': _0x5bed08['c'],
                'd': _0x5bed08['d'],
                'tx': _0x5bed08['tx'],
                'ty': _0x5bed08['ty'],
                'w': this['width'],
                'h': this['height']
            });
        }
        ['postMsg'](_0xdc5963) {
            if (window['wx'] && window['wx']['getOpenDat' + 'aContext']) {
                var _0x1bfaa0 = window['wx']['getOpenDat' + 'aContext']();
                _0x1bfaa0['postMessag' + 'e'](_0xdc5963);
            }
        }
    }
    _0x322c83['ILaya']['regClass'](_0x182bb7), _0x322c83['ClassUtils']['regClass']('laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x182bb7), _0x322c83['ClassUtils']['regClass']('Laya.WXOpe' + 'nDataViewe' + 'r', _0x182bb7), _0x57cf5b['AdvImage'] = _0x5a5aa1, _0x57cf5b['AutoBitmap'] = _0x2d4396, _0x57cf5b['Box'] = _0x490c4a, _0x57cf5b['Button'] = _0x561c8e, _0x57cf5b['CheckBox'] = _0x116ec3, _0x57cf5b['Clip'] = _0x36a3aa, _0x57cf5b['ColorPicke' + 'r'] = _0x3674f3, _0x57cf5b['ComboBox'] = _0x4a237c, _0x57cf5b['Dialog'] = _0x22bd0a, _0x57cf5b['DialogMana' + 'ger'] = _0x1ada40, _0x57cf5b['FontClip'] = _0x46ae1d, _0x57cf5b['HBox'] = _0x25f22b, _0x57cf5b['HScrollBar'] = _0x3f640f, _0x57cf5b['HSlider'] = _0x17d2ec, _0x57cf5b['IUI'] = _0x260589, _0x57cf5b['Image'] = _0x87edde, _0x57cf5b['Label'] = _0x2336dc, _0x57cf5b['LayoutBox'] = _0x2956de, _0x57cf5b['List'] = _0x105093, _0x57cf5b['Panel'] = _0x257d56, _0x57cf5b['ProgressBa' + 'r'] = _0x4bff32, _0x57cf5b['Radio'] = _0x5f2e43, _0x57cf5b['RadioGroup'] = _0x45eef5, _0x57cf5b['ScaleBox'] = _0x587a00, _0x57cf5b['ScrollBar'] = _0x3d31b4, _0x57cf5b['Slider'] = _0x21cdfc, _0x57cf5b['Styles'] = _0xbb775b, _0x57cf5b['Tab'] = _0x446a43, _0x57cf5b['TextArea'] = _0x3411c7, _0x57cf5b['TextInput'] = _0x3dc9ee, _0x57cf5b['TipManager'] = _0x554ad4, _0x57cf5b['Tree'] = _0x37a9f3, _0x57cf5b['UIComponen' + 't'] = _0x283d79, _0x57cf5b['UIConfig'] = _0x5f3ab0, _0x57cf5b['UIEvent'] = _0x665776, _0x57cf5b['UIGroup'] = _0x58e5a9, _0x57cf5b['UILib'] = _0x1312a8, _0x57cf5b['UIUtils'] = _0x373b03, _0x57cf5b['VBox'] = _0x5bb6fa, _0x57cf5b['VScrollBar'] = _0x15b518, _0x57cf5b['VSlider'] = _0x4bfc99, _0x57cf5b['View'] = _0x4ebcfa, _0x57cf5b['ViewStack'] = _0x2fbd85, _0x57cf5b['WXOpenData' + 'Viewer'] = _0x182bb7, _0x57cf5b['Widget'] = _0x30a5a2;
}(window['Laya'] = window['Laya'] || {}, Laya));