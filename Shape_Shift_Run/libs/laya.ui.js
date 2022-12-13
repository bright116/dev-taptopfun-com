!function (_0x41a583, _0x579e6a) {
    'use strict';
    class _0x5d7bb6 {
    }
    _0x5d7bb6['touchScrol' + 'lEnable'] = !0x0, _0x5d7bb6['mouseWheel' + 'Enable'] = !0x0, _0x5d7bb6['showButton' + 's'] = !0x0, _0x5d7bb6['popupBgCol' + 'or'] = '#000000', _0x5d7bb6['popupBgAlp' + 'ha'] = 0.5, _0x5d7bb6['closeDialo' + 'gOnSide'] = !0x0, window['UIConfig'] = _0x5d7bb6;
    class _0x1016b0 {
    }
    _0x1016b0['defaultSiz' + 'eGrid'] = [
        0x4,
        0x4,
        0x4,
        0x4,
        0x0
    ], _0x1016b0['labelColor'] = '#000000', _0x1016b0['labelPaddi' + 'ng'] = [
        0x2,
        0x2,
        0x2,
        0x2
    ], _0x1016b0['inputLabel' + 'Padding'] = [
        0x1,
        0x1,
        0x1,
        0x3
    ], _0x1016b0['buttonStat' + 'eNum'] = 0x3, _0x1016b0['buttonLabe' + 'lColors'] = [
        '#32556b',
        '#32cc6b',
        '#ff0000',
        '#C0C0C0'
    ], _0x1016b0['comboBoxIt' + 'emColors'] = [
        '#5e95b6',
        '#ffffff',
        '#000000',
        '#8fa4b1',
        '#ffffff'
    ], _0x1016b0['scrollBarM' + 'inNum'] = 0xf, _0x1016b0['scrollBarD' + 'elayTime'] = 0x1f4;
    class _0x218db5 extends _0x579e6a['Graphics'] {
        constructor() {
            super(...arguments), this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['uv'] = null;
        }
        ['destroy']() {
            super['destroy'](), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
        }
        get ['sizeGrid']() {
            return this['_sizeGrid'];
        }
        set ['sizeGrid'](_0x4434f9) {
            this['_sizeGrid'] = _0x4434f9['map'](_0x4c992d => +_0x4c992d), this['_setChange' + 'd']();
        }
        get ['width']() {
            return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
        }
        set ['width'](_0x1808c3) {
            this['_width'] != _0x1808c3 && (this['_width'] = _0x1808c3, this['_setChange' + 'd']());
        }
        get ['height']() {
            return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
        }
        set ['height'](_0x5b7668) {
            this['_height'] != _0x5b7668 && (this['_height'] = _0x5b7668, this['_setChange' + 'd']());
        }
        get ['source']() {
            return this['_source'];
        }
        set ['source'](_0x50cfce) {
            _0x50cfce ? (this['_source'] = _0x50cfce, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
        }
        ['_setChange' + 'd']() {
            this['_isChanged'] || (this['_isChanged'] = !0x0, _0x579e6a['ILaya']['timer']['callLater'](this, this['changeSour' + 'ce']));
        }
        ['changeSour' + 'ce']() {
            this['_isChanged'] = !0x1;
            var _0x59b83f = this['_source'];
            if (_0x59b83f && _0x59b83f['bitmap']) {
                var _0xd302e8 = this['width'], _0x2b6632 = this['height'], _0x4f028c = this['_sizeGrid'], _0x595a2e = _0x59b83f['sourceWidt' + 'h'], _0x5994ac = _0x59b83f['sourceHeig' + 'ht'];
                if (_0x4f028c && (_0x595a2e !== _0xd302e8 || _0x5994ac !== _0x2b6632))
                    return this['clear'](), this['draw9Grid'](_0x59b83f, 0x0, 0x0, _0xd302e8, _0x2b6632, _0x4f028c), void this['_repaint']();
                this['clear'](), this['drawTextur' + 'e'](_0x59b83f, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0xd302e8, _0x2b6632, null, 0x1, null, null, this['uv']), this['_repaint']();
            }
        }
        ['drawBitmap'](_0x526c56, _0x3e4b82, _0x2bb3bd, _0x5e6688, _0x21ed5e = 0x0, _0x3bcbe4 = 0x0) {
            _0x21ed5e < 0.1 || _0x3bcbe4 < 0.1 || (!_0x526c56 || _0x3e4b82['width'] == _0x21ed5e && _0x3e4b82['height'] == _0x3bcbe4 ? this['drawImage'](_0x3e4b82, _0x2bb3bd, _0x5e6688, _0x21ed5e, _0x3bcbe4) : this['fillTextur' + 'e'](_0x3e4b82, _0x2bb3bd, _0x5e6688, _0x21ed5e, _0x3bcbe4));
        }
        static ['getTexture'](_0x49af18, _0x364b46, _0x47f601, _0x39fc79, _0x382e59) {
            var _0x1e7096;
            return _0x39fc79 <= 0x0 && (_0x39fc79 = 0x1), _0x382e59 <= 0x0 && (_0x382e59 = 0x1), _0x49af18['$_GID'] || (_0x49af18['$_GID'] = _0x579e6a['Utils']['getGID']()), _0x1e7096 && _0x1e7096['_getSource']() || (_0x1e7096 = _0x579e6a['Texture']['createFrom' + 'Texture'](_0x49af18, _0x364b46, _0x47f601, _0x39fc79, _0x382e59)), _0x1e7096;
        }
    }
    _0x579e6a['ClassUtils']['regClass']('laya.ui.Au' + 'toBitmap', _0x218db5), _0x579e6a['ClassUtils']['regClass']('Laya.AutoB' + 'itmap', _0x218db5);
    class _0x2a34ba extends _0x579e6a['Component'] {
        constructor() {
            super(...arguments), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
        }
        ['onReset']() {
            this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
        }
        ['_onEnable']() {
            this['owner']['parent'] ? this['_onAdded']() : this['owner']['once'](_0x579e6a['Event']['ADDED'], this, this['_onAdded']);
        }
        ['_onDisable']() {
            this['owner']['off'](_0x579e6a['Event']['ADDED'], this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off'](_0x579e6a['Event']['RESIZE'], this, this['_onParentR' + 'esize']);
        }
        ['_onAdded']() {
            this['owner']['parent'] && this['owner']['parent']['on'](_0x579e6a['Event']['RESIZE'], this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
        }
        ['_onParentR' + 'esize']() {
            var _0xf1f588 = this['resetLayou' + 'tX'](), _0x831e05 = this['resetLayou' + 'tY']();
            (_0xf1f588 || _0x831e05) && this['owner']['event'](_0x579e6a['Event']['RESIZE']);
        }
        ['resetLayou' + 'tX']() {
            var _0x19fe00 = this['owner'];
            if (!_0x19fe00)
                return !0x1;
            var _0x3c39b1 = _0x19fe00['parent'];
            if (_0x3c39b1) {
                if (isNaN(this['centerX'])) {
                    if (isNaN(this['left']))
                        isNaN(this['right']) || (_0x19fe00['x'] = Math['round'](_0x3c39b1['width'] - _0x19fe00['displayWid' + 'th'] - this['right'] + _0x19fe00['pivotX'] * _0x19fe00['scaleX']));
                    else {
                        if (_0x19fe00['x'] = Math['round'](this['left'] + _0x19fe00['pivotX'] * _0x19fe00['scaleX']), !isNaN(this['right'])) {
                            var _0x280db3 = (_0x3c39b1['_width'] - this['left'] - this['right']) / (_0x19fe00['scaleX'] || 0.01);
                            if (_0x280db3 != _0x19fe00['width'])
                                return _0x19fe00['width'] = _0x280db3, !0x0;
                        }
                    }
                } else
                    _0x19fe00['x'] = Math['round'](0.5 * (_0x3c39b1['width'] - _0x19fe00['displayWid' + 'th']) + this['centerX'] + _0x19fe00['pivotX'] * _0x19fe00['scaleX']);
            }
            return !0x1;
        }
        ['resetLayou' + 'tY']() {
            var _0x5762fe = this['owner'];
            if (!_0x5762fe)
                return !0x1;
            var _0x2f5f9e = _0x5762fe['parent'];
            if (_0x2f5f9e) {
                if (isNaN(this['centerY'])) {
                    if (isNaN(this['top']))
                        isNaN(this['bottom']) || (_0x5762fe['y'] = Math['round'](_0x2f5f9e['height'] - _0x5762fe['displayHei' + 'ght'] - this['bottom'] + _0x5762fe['pivotY'] * _0x5762fe['scaleY']));
                    else {
                        if (_0x5762fe['y'] = Math['round'](this['top'] + _0x5762fe['pivotY'] * _0x5762fe['scaleY']), !isNaN(this['bottom'])) {
                            var _0x43f075 = (_0x2f5f9e['_height'] - this['top'] - this['bottom']) / (_0x5762fe['scaleY'] || 0.01);
                            if (_0x43f075 != _0x5762fe['height'])
                                return _0x5762fe['height'] = _0x43f075, !0x0;
                        }
                    }
                } else
                    _0x5762fe['y'] = Math['round'](0.5 * (_0x2f5f9e['height'] - _0x5762fe['displayHei' + 'ght']) + this['centerY'] + _0x5762fe['pivotY'] * _0x5762fe['scaleY']);
            }
            return !0x1;
        }
        ['resetLayou' + 't']() {
            this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
        }
        get ['top']() {
            return this['_top'];
        }
        set ['top'](_0x51f758) {
            this['_top'] != _0x51f758 && (this['_top'] = _0x51f758, this['resetLayou' + 'tY']());
        }
        get ['bottom']() {
            return this['_bottom'];
        }
        set ['bottom'](_0xaa33e5) {
            this['_bottom'] != _0xaa33e5 && (this['_bottom'] = _0xaa33e5, this['resetLayou' + 'tY']());
        }
        get ['left']() {
            return this['_left'];
        }
        set ['left'](_0x15e869) {
            this['_left'] != _0x15e869 && (this['_left'] = _0x15e869, this['resetLayou' + 'tX']());
        }
        get ['right']() {
            return this['_right'];
        }
        set ['right'](_0x3cbefb) {
            this['_right'] != _0x3cbefb && (this['_right'] = _0x3cbefb, this['resetLayou' + 'tX']());
        }
        get ['centerX']() {
            return this['_centerX'];
        }
        set ['centerX'](_0x18a4ab) {
            this['_centerX'] != _0x18a4ab && (this['_centerX'] = _0x18a4ab, this['resetLayou' + 'tX']());
        }
        get ['centerY']() {
            return this['_centerY'];
        }
        set ['centerY'](_0x1e97fc) {
            this['_centerY'] != _0x1e97fc && (this['_centerY'] = _0x1e97fc, this['resetLayou' + 'tY']());
        }
    }
    _0x2a34ba['EMPTY'] = null, _0x579e6a['ILaya']['regClass'](_0x2a34ba), _0x2a34ba['EMPTY'] = new _0x2a34ba(), _0x579e6a['ClassUtils']['regClass']('laya.ui.Wi' + 'dget', _0x2a34ba), _0x579e6a['ClassUtils']['regClass']('Laya.Widge' + 't', _0x2a34ba);
    class _0x542661 extends _0x579e6a['Event'] {
    }
    _0x542661['SHOW_TIP'] = 'showtip', _0x542661['HIDE_TIP'] = 'hidetip', _0x579e6a['ILaya']['regClass'](_0x542661), _0x579e6a['ClassUtils']['regClass']('laya.ui.UI' + 'Event', _0x542661), _0x579e6a['ClassUtils']['regClass']('Laya.UIEve' + 'nt', _0x542661);
    class _0x42ba36 {
        static ['fillArray'](_0x3b9fe3, _0x34eca6, _0xbbe1d1 = null) {
            var _0x4a02b6 = _0x3b9fe3['concat']();
            if (_0x34eca6)
                for (var _0x593e8c = _0x34eca6['split'](','), _0x342280 = 0x0, _0x111526 = Math['min'](_0x4a02b6['length'], _0x593e8c['length']); _0x342280 < _0x111526; _0x342280++) {
                    var _0x30c423 = _0x593e8c[_0x342280];
                    _0x4a02b6[_0x342280] = 'true' == _0x30c423 || 'false' != _0x30c423 && _0x30c423, null != _0xbbe1d1 && (_0x4a02b6[_0x342280] = _0xbbe1d1(_0x30c423));
                }
            return _0x4a02b6;
        }
        static ['toColor'](_0x24dca0) {
            return _0x579e6a['Utils']['toHexColor'](_0x24dca0);
        }
        static ['gray'](_0x47f226, _0x4e0fb8 = !0x0) {
            _0x4e0fb8 ? _0x42ba36['addFilter'](_0x47f226, _0x42ba36['grayFilter']) : _0x42ba36['clearFilte' + 'r'](_0x47f226, _0x579e6a['ColorFilte' + 'r']);
        }
        static ['addFilter'](_0x4de2ef, _0xfba8f7) {
            var _0x114dde = _0x4de2ef['filters'] || [];
            _0x114dde['push'](_0xfba8f7), _0x4de2ef['filters'] = _0x114dde;
        }
        static ['clearFilte' + 'r'](_0x4d4685, _0x4cfd18) {
            var _0x4a6878 = _0x4d4685['filters'];
            if (null != _0x4a6878 && _0x4a6878['length'] > 0x0) {
                for (var _0x482c1c = _0x4a6878['length'] - 0x1; _0x482c1c > -0x1; _0x482c1c--) {
                    _0x4a6878[_0x482c1c] instanceof _0x4cfd18 && _0x4a6878['splice'](_0x482c1c, 0x1);
                }
                _0x4d4685['filters'] = _0x4a6878;
            }
        }
        static ['_getReplac' + 'eStr'](_0x210d58) {
            return _0x42ba36['escapeSequ' + 'ence'][_0x210d58];
        }
        static ['adptString'](_0x32f58a) {
            return _0x32f58a['replace'](/\\(\w)/g, _0x42ba36['_getReplac' + 'eStr']);
        }
        static ['getBindFun'](_0x5b3878) {
            _0x42ba36['_funMap'] || (_0x42ba36['_funMap'] = new _0x579e6a['WeakObject']());
            var _0x38832e = _0x42ba36['_funMap']['get'](_0x5b3878);
            if (null == _0x38832e) {
                var _0x1cc775 = '\x22' + _0x5b3878 + '\x22', _0x14e336 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x1cc775 = _0x1cc775['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                _0x38832e = window['Laya']['_runScript'](_0x14e336), _0x42ba36['_funMap']['set'](_0x5b3878, _0x38832e);
            }
            return _0x38832e;
        }
    }
    _0x42ba36['grayFilter'] = new _0x579e6a['ColorFilte' + 'r']([
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
    ]), _0x42ba36['escapeSequ' + 'ence'] = {
        '\x5cn': '\x0a',
        '\x5ct': '\x09'
    }, _0x42ba36['_funMap'] = null, _0x579e6a['ClassUtils']['regClass']('laya.ui.UI' + 'Utils', _0x42ba36), _0x579e6a['ClassUtils']['regClass']('Laya.UIUti' + 'ls', _0x42ba36);
    class _0xc0040 extends _0x579e6a['Sprite'] {
        constructor(_0x6f0b98 = !0x0) {
            super(), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2a34ba['EMPTY'], _0x6f0b98 && (this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']());
        }
        ['destroy'](_0x5bc932 = !0x0) {
            super['destroy'](_0x5bc932), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
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
            var _0x1bec37 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x5111e7 = this['numChildre' + 'n'] - 0x1; _0x5111e7 > -0x1; _0x5111e7--) {
                var _0x7448bd = this['getChildAt'](_0x5111e7);
                _0x7448bd['_visible'] && (_0x1bec37 = Math['max'](_0x7448bd['_x'] + _0x7448bd['width'] * _0x7448bd['scaleX'], _0x1bec37));
            }
            return _0x1bec37;
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
            var _0x383571 = 0x0;
            this['commitMeas' + 'ure']();
            for (var _0x4c55f5 = this['numChildre' + 'n'] - 0x1; _0x4c55f5 > -0x1; _0x4c55f5--) {
                var _0x26aaaa = this['getChildAt'](_0x4c55f5);
                _0x26aaaa['_visible'] && (_0x383571 = Math['max'](_0x26aaaa['_y'] + _0x26aaaa['height'] * _0x26aaaa['scaleY'], _0x383571));
            }
            return _0x383571;
        }
        get ['dataSource']() {
            return this['get_dataSo' + 'urce']();
        }
        ['get_dataSo' + 'urce']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x4e636c) {
            this['set_dataSo' + 'urce'](_0x4e636c);
        }
        ['set_dataSo' + 'urce'](_0x5048b4) {
            for (var _0x178002 in (this['_dataSourc' + 'e'] = _0x5048b4, this['_dataSourc' + 'e']))
                _0x178002 in this && 'function' != typeof this[_0x178002] && (this[_0x178002] = this['_dataSourc' + 'e'][_0x178002]);
        }
        get ['top']() {
            return this['get_top']();
        }
        ['get_top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x166a75) {
            this['set_top'](_0x166a75);
        }
        ['set_top'](_0x1a89c0) {
            _0x1a89c0 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x1a89c0);
        }
        get ['bottom']() {
            return this['get_bottom']();
        }
        ['get_bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x41b3fd) {
            this['set_bottom'](_0x41b3fd);
        }
        ['set_bottom'](_0x45e253) {
            _0x45e253 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x45e253);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x56864b) {
            _0x56864b != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x56864b);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0xde3db8) {
            _0xde3db8 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0xde3db8);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x1cf787) {
            _0x1cf787 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x1cf787);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x45195e) {
            _0x45195e != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x45195e);
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x579e6a['Event']['RESIZE']), this['_widget'] !== _0x2a34ba['EMPTY'] && this['_widget']['resetLayou' + 't']();
        }
        get ['tag']() {
            return this['_tag'];
        }
        set ['tag'](_0x4fa79e) {
            this['_tag'] = _0x4fa79e;
        }
        get ['toolTip']() {
            return this['_toolTip'];
        }
        set ['toolTip'](_0x11cf61) {
            this['_toolTip'] != _0x11cf61 && (this['_toolTip'] = _0x11cf61, null != _0x11cf61 ? (this['on'](_0x579e6a['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['on'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onMouseOut'])) : (this['off'](_0x579e6a['Event']['MOUSE_OVER'], this, this['onMouseOve' + 'r']), this['off'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onMouseOut'])));
        }
        ['onMouseOve' + 'r'](_0x5988a7) {
            _0x579e6a['ILaya']['stage']['event'](_0x542661['SHOW_TIP'], this['_toolTip']);
        }
        ['onMouseOut'](_0x59f95a) {
            _0x579e6a['ILaya']['stage']['event'](_0x542661['HIDE_TIP'], this['_toolTip']);
        }
        get ['gray']() {
            return this['_gray'];
        }
        set ['gray'](_0x4b6d18) {
            _0x4b6d18 !== this['_gray'] && (this['_gray'] = _0x4b6d18, _0x42ba36['gray'](this, _0x4b6d18));
        }
        get ['disabled']() {
            return this['_disabled'];
        }
        set ['disabled'](_0xafb6e0) {
            _0xafb6e0 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0xafb6e0, this['mouseEnabl' + 'ed'] = !_0xafb6e0);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2a34ba['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2a34ba)), this['_widget'];
        }
        set ['scaleX'](_0x1979a0) {
            this['set_scaleX'](_0x1979a0);
        }
        ['set_scaleX'](_0x50b079) {
            super['get_scaleX']() != _0x50b079 && (super['set_scaleX'](_0x50b079), this['event'](_0x579e6a['Event']['RESIZE']));
        }
        get ['scaleX']() {
            return super['scaleX'];
        }
        set ['scaleY'](_0x4c87c4) {
            this['set_scaleY'](_0x4c87c4);
        }
        ['set_scaleY'](_0x3eb220) {
            super['get_scaleY']() != _0x3eb220 && (super['set_scaleY'](_0x3eb220), this['event'](_0x579e6a['Event']['RESIZE']));
        }
        get ['scaleY']() {
            return super['scaleY'];
        }
        ['onCompResi' + 'ze']() {
            this['_sizeChang' + 'ed']();
        }
        set ['width'](_0x1710b3) {
            this['set_width'](_0x1710b3);
        }
        ['set_width'](_0xa65260) {
            super['get_width']() != _0xa65260 && (super['set_width'](_0xa65260), this['callLater'](this['_sizeChang' + 'ed']));
        }
        set ['height'](_0x459c8f) {
            this['set_height'](_0x459c8f);
        }
        ['set_height'](_0x234cc9) {
            super['get_height']() != _0x234cc9 && (super['set_height'](_0x234cc9), this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorX']() {
            return this['get_anchor' + 'X']();
        }
        ['get_anchor' + 'X']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x233292) {
            this['set_anchor' + 'X'](_0x233292);
        }
        ['set_anchor' + 'X'](_0x2b3e6f) {
            this['_anchorX'] != _0x2b3e6f && (this['_anchorX'] = _0x2b3e6f, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['get_anchor' + 'Y']();
        }
        ['get_anchor' + 'Y']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0x28c9c9) {
            this['set_anchor' + 'Y'](_0x28c9c9);
        }
        ['set_anchor' + 'Y'](_0xeadf8c) {
            this['_anchorY'] != _0xeadf8c && (this['_anchorY'] = _0xeadf8c, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_childChan' + 'ged'](_0x2f2a47 = null) {
            this['callLater'](this['_sizeChang' + 'ed']), super['_childChan' + 'ged'](_0x2f2a47);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0xc0040), _0x579e6a['ClassUtils']['regClass']('laya.ui.UI' + 'Component', _0xc0040), _0x579e6a['ClassUtils']['regClass']('Laya.UICom' + 'ponent', _0xc0040);
    class _0x68d04b extends _0xc0040 {
        constructor(_0x39cf8a = null) {
            super(), this['skin'] = _0x39cf8a;
        }
        ['destroy'](_0xeed5c1 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x579e6a['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x218db5(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x587c06) {
            if (this['_skin'] != _0x587c06) {
                if (this['_skin'] = _0x587c06, _0x587c06) {
                    var _0x4b4c66 = _0x579e6a['Loader']['getRes'](_0x587c06);
                    _0x4b4c66 ? (this['source'] = _0x4b4c66, this['onCompResi' + 'ze']()) : _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['setSource'], [this['_skin']]), null, _0x579e6a['Loader']['IMAGE'], 0x1, !0x0, this['_group']);
                } else
                    this['source'] = null;
            }
        }
        get ['source']() {
            return this['_bitmap']['source'];
        }
        set ['source'](_0x2df32a) {
            this['_bitmap'] && (this['_bitmap']['source'] = _0x2df32a, this['event'](_0x579e6a['Event']['LOADED']), this['repaint']());
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0xcd5fb8) {
            _0xcd5fb8 && this['_skin'] && _0x579e6a['Loader']['setGroup'](this['_skin'], _0xcd5fb8), this['_group'] = _0xcd5fb8;
        }
        ['setSource'](_0x33fb0e, _0x247f2f = null) {
            _0x33fb0e === this['_skin'] && _0x247f2f && (this['source'] = _0x247f2f, this['onCompResi' + 'ze']());
        }
        ['measureWid' + 'th']() {
            return this['_bitmap']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_bitmap']['height'];
        }
        set ['width'](_0x3069a1) {
            super['width'] = _0x3069a1, this['_bitmap']['width'] = 0x0 == _0x3069a1 ? 1e-7 : _0x3069a1;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x105347) {
            super['height'] = _0x105347, this['_bitmap']['height'] = 0x0 == _0x105347 ? 1e-7 : _0x105347;
        }
        get ['height']() {
            return super['height'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x3b9aa0) {
            this['_bitmap']['sizeGrid'] = _0x42ba36['fillArray'](_0x1016b0['defaultSiz' + 'eGrid'], _0x3b9aa0, Number);
        }
        set ['dataSource'](_0x1b9dad) {
            this['_dataSourc' + 'e'] = _0x1b9dad, 'string' == typeof _0x1b9dad ? this['skin'] = _0x1b9dad : super['dataSource'] = _0x1b9dad;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x68d04b), _0x579e6a['ClassUtils']['regClass']('laya.ui.Im' + 'age', _0x68d04b), _0x579e6a['ClassUtils']['regClass']('Laya.Image', _0x68d04b);
    class _0x51d0b2 extends _0x68d04b {
        constructor(_0x45b626 = null) {
            super(), this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_http'] = new _0x579e6a['Browser']['window']['XMLHttpReq' + 'uest'](), this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, this['skin'] = _0x45b626, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
        }
        ['setLoadUrl']() {
        }
        ['init']() {
            this['isSupportJ' + 'ump']() ? ((_0x579e6a['Browser']['onMiniGame'] || _0x579e6a['Browser']['onBDMiniGa' + 'me']) && _0x579e6a['ILaya']['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
        }
        ['initEvent']() {
            this['on'](_0x579e6a['Event']['CLICK'], this, this['onAdvsImgC' + 'lick']);
        }
        ['onAdvsImgC' + 'lick']() {
            this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
        }
        ['revertAdvs' + 'Data']() {
            this['advsListAr' + 'r'][this['_playIndex']] && (this['visible'] = !0x0, this['skin'] = this['advsListAr' + 'r'][this['_playIndex']]);
        }
        ['isSupportJ' + 'ump']() {
            return _0x579e6a['Browser']['onMiniGame'] ? window['wx']['navigateTo' + 'MiniProgra' + 'm'] instanceof Function : !!_0x579e6a['Browser']['onBDMiniGa' + 'me'];
        }
        ['jumptoGame']() {
            var _0x261b0d = this['advsListAr' + 'r'][this['_playIndex']];
            parseInt(_0x261b0d['gameid']), _0x261b0d['extendInfo'], _0x261b0d['path'], _0x579e6a['Browser']['onMiniGame'] ? this['isSupportJ' + 'ump']() && window['wx']['navigateTo' + 'MiniProgra' + 'm']({
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
            }) : _0x579e6a['Browser']['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
        }
        ['updateAdvs' + 'Info']() {
            this['visible'] = !0x1, this['onLunbo'](), _0x579e6a['ILaya']['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
        }
        ['onLunbo']() {
            this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
        }
        ['getCurrent' + 'AppidObj']() {
            return this['advsListAr' + 'r'][this['_playIndex']];
        }
        ['onGetAdvsL' + 'istData']() {
            var _0x54085e = this, _0x1b1bee = _0x51d0b2['randRange'](0x2710, 0xf4240), _0x36b7c5 = this['resUrl'] + '?' + _0x1b1bee;
            this['_http']['open']('get', _0x36b7c5, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x167a9b) {
                _0x54085e['_onError'](_0x167a9b);
            }, this['_http']['onload'] = function (_0x1ed4bd) {
                _0x54085e['_onLoad'](_0x1ed4bd);
            }, this['_http']['send'](null);
        }
        static ['randRange'](_0x472650, _0x647020) {
            return Math['floor'](Math['random']() * (_0x647020 - _0x472650 + 0x1)) + _0x472650;
        }
        ['_onError'](_0xc44901) {
            this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
        }
        ['_onLoad'](_0x1f79a2) {
            var _0x12ed45 = this['_http'], _0x10507d = void 0x0 !== _0x12ed45['status'] ? _0x12ed45['status'] : 0xc8;
            0xc8 === _0x10507d || 0xcc === _0x10507d || 0x0 === _0x10507d ? this['complete']() : this['error']('[' + _0x12ed45['status'] + ']' + _0x12ed45['statusText'] + ':' + _0x12ed45['responseUR' + 'L']);
        }
        ['error'](_0x55647a) {
            this['event'](_0x579e6a['Event']['ERROR'], _0x55647a);
        }
        ['complete']() {
            try {
                this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']();
            } catch (_0x67b17e) {
                this['error'](_0x67b17e['message']);
            }
        }
        ['getAdvsQAr' + 'r'](_0x24fca3) {
            var _0x37c4ca = [], _0x5e745d = _0x579e6a['LocalStora' + 'ge']['getJSON']('gameObj');
            for (var _0x2ead4f in _0x24fca3) {
                var _0x34dfb9 = _0x24fca3[_0x2ead4f];
                _0x5e745d && _0x5e745d[_0x34dfb9['gameid']] && !_0x34dfb9['isQiangZhi'] || _0x37c4ca['push'](_0x34dfb9);
            }
            return _0x37c4ca;
        }
        ['clear']() {
            var _0x27e785 = this['_http'];
            _0x27e785['onerror'] = _0x27e785['onabort'] = _0x27e785['onprogress'] = _0x27e785['onload'] = null;
        }
        ['destroy'](_0x57df72 = !0x0) {
            _0x579e6a['ILaya']['timer']['clear'](this, this['onLunbo']), super['destroy'](!0x0), this['clear'](), _0x579e6a['ILaya']['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
        }
    }
    _0x579e6a['ClassUtils']['regClass']('laya.ui.Ad' + 'vImage', _0x51d0b2), _0x579e6a['ClassUtils']['regClass']('Laya.AdvIm' + 'age', _0x51d0b2);
    class _0x4aa05f extends _0xc0040 {
        set ['dataSource'](_0xb664b7) {
            for (var _0xaf5907 in (this['_dataSourc' + 'e'] = _0xb664b7, _0xb664b7)) {
                var _0x43eba5 = this['getChildBy' + 'Name'](_0xaf5907);
                _0x43eba5 ? _0x43eba5['dataSource'] = _0xb664b7[_0xaf5907] : _0xaf5907 in this && !(this[_0xaf5907] instanceof Function) && (this[_0xaf5907] = _0xb664b7[_0xaf5907]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0x25b335) {
            this['_bgColor'] = _0x25b335, _0x25b335 ? (this['_onResize'](null), this['on'](_0x579e6a['Event']['RESIZE'], this, this['_onResize'])) : (this['graphics']['clear'](), this['off'](_0x579e6a['Event']['RESIZE'], this, this['_onResize']));
        }
        ['_onResize'](_0x164b02) {
            this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x4aa05f), _0x579e6a['ClassUtils']['regClass']('laya.ui.Bo' + 'x', _0x4aa05f), _0x579e6a['ClassUtils']['regClass']('Laya.Box', _0x4aa05f);
    class _0x32f31e extends _0xc0040 {
        constructor(_0xd76e8a = null, _0x199b52 = '') {
            super(), this['_labelColo' + 'rs'] = _0x1016b0['buttonLabe' + 'lColors'], this['_state'] = 0x0, this['_autoSize'] = !0x0, this['_stateNum'] = _0x1016b0['buttonStat' + 'eNum'], this['_stateChan' + 'ged'] = !0x1, this['skin'] = _0xd76e8a, this['label'] = _0x199b52;
        }
        ['destroy'](_0x427f67 = !0x0) {
            super['destroy'](_0x427f67), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x427f67), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x218db5();
        }
        ['createText']() {
            this['_text'] || (this['_text'] = new _0x579e6a['Text'](), this['_text']['overflow'] = _0x579e6a['Text']['HIDDEN'], this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
        }
        ['initialize']() {
            0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](_0x579e6a['Const']['HAS_MOUSE'], !0x0)), this['_createLis' + 'tener'](_0x579e6a['Event']['MOUSE_OVER'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x579e6a['Event']['MOUSE_UP'], this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener'](_0x579e6a['Event']['CLICK'], this, this['onMouse'], null, !0x1, !0x1);
        }
        ['onMouse'](_0x474c86) {
            if (!0x1 !== this['toggle'] || !this['_selected'])
                return _0x474c86['type'] === _0x579e6a['Event']['CLICK'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x32f31e['stateMap'][_0x474c86['type']]));
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x200682) {
            this['_skin'] != _0x200682 && (this['_skin'] = _0x200682, _0x200682 ? _0x579e6a['Loader']['getRes'](_0x200682) ? this['_skinLoade' + 'd']() : _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x579e6a['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x388adb) {
            'string' == typeof _0x388adb && (_0x388adb = parseInt(_0x388adb)), this['_stateNum'] != _0x388adb && (this['_stateNum'] = _0x388adb < 0x1 ? 0x1 : _0x388adb > 0x3 ? 0x3 : _0x388adb, this['callLater'](this['changeClip' + 's']));
        }
        ['changeClip' + 's']() {
            var _0x2c3d27 = _0x579e6a['Loader']['getRes'](this['_skin']);
            if (_0x2c3d27) {
                var _0x7e3f36 = _0x2c3d27['sourceWidt' + 'h'], _0x1aaa2a = _0x2c3d27['sourceHeig' + 'ht'] / this['_stateNum'];
                _0x2c3d27['$_GID'] || (_0x2c3d27['$_GID'] = _0x579e6a['Utils']['getGID']());
                var _0x5de375 = _0x2c3d27['$_GID'] + '-' + this['_stateNum'], _0x537b36 = _0x579e6a['WeakObject']['I']['get'](_0x5de375);
                if (_0x579e6a['Utils']['isOkTextur' + 'eList'](_0x537b36) || (_0x537b36 = null), _0x537b36)
                    this['_sources'] = _0x537b36;
                else {
                    if (this['_sources'] = [], 0x1 === this['_stateNum'])
                        this['_sources']['push'](_0x2c3d27);
                    else {
                        for (var _0x39d30a = 0x0; _0x39d30a < this['_stateNum']; _0x39d30a++)
                            this['_sources']['push'](_0x579e6a['Texture']['createFrom' + 'Texture'](_0x2c3d27, 0x0, _0x1aaa2a * _0x39d30a, _0x7e3f36, _0x1aaa2a));
                    }
                    _0x579e6a['WeakObject']['I']['set'](_0x5de375, this['_sources']);
                }
                this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x7e3f36, this['_bitmap']['height'] = this['_height'] || _0x1aaa2a, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x7e3f36);
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
        set ['label'](_0x1a4256) {
            (this['_text'] || _0x1a4256) && (this['createText'](), this['_text']['text'] != _0x1a4256 && (_0x1a4256 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x1a4256 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
        }
        get ['selected']() {
            return this['_selected'];
        }
        set ['selected'](_0x20053a) {
            this['_selected'] != _0x20053a && (this['_selected'] = _0x20053a, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event'](_0x579e6a['Event']['CHANGE']));
        }
        get ['state']() {
            return this['_state'];
        }
        set ['state'](_0xec773) {
            this['_state'] != _0xec773 && (this['_state'] = _0xec773, this['_setStateC' + 'hanged']());
        }
        ['changeStat' + 'e']() {
            this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
            var _0x5b4822 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
            this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x5b4822]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x5b4822], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x5b4822]));
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs']['join'](',');
        }
        set ['labelColor' + 's'](_0x22587f) {
            this['_labelColo' + 'rs'] = _0x42ba36['fillArray'](_0x1016b0['buttonLabe' + 'lColors'], _0x22587f, String), this['_setStateC' + 'hanged']();
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
        }
        set ['strokeColo' + 'rs'](_0x571c8e) {
            this['_strokeCol' + 'ors'] = _0x42ba36['fillArray'](_0x1016b0['buttonLabe' + 'lColors'], _0x571c8e, String), this['_setStateC' + 'hanged']();
        }
        get ['labelPaddi' + 'ng']() {
            return this['createText'](), this['_text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x1afcbc) {
            this['createText'](), this['_text']['padding'] = _0x42ba36['fillArray'](_0x1016b0['labelPaddi' + 'ng'], _0x1afcbc, Number);
        }
        get ['labelSize']() {
            return this['createText'](), this['_text']['fontSize'];
        }
        set ['labelSize'](_0x39cba4) {
            this['createText'](), this['_text']['fontSize'] = _0x39cba4;
        }
        get ['labelStrok' + 'e']() {
            return this['createText'](), this['_text']['stroke'];
        }
        set ['labelStrok' + 'e'](_0x311303) {
            this['createText'](), this['_text']['stroke'] = _0x311303;
        }
        get ['labelStrok' + 'eColor']() {
            return this['createText'](), this['_text']['strokeColo' + 'r'];
        }
        set ['labelStrok' + 'eColor'](_0xa14e97) {
            this['createText'](), this['_text']['strokeColo' + 'r'] = _0xa14e97;
        }
        get ['labelBold']() {
            return this['createText'](), this['_text']['bold'];
        }
        set ['labelBold'](_0x3d02c1) {
            this['createText'](), this['_text']['bold'] = _0x3d02c1;
        }
        get ['labelFont']() {
            return this['createText'](), this['_text']['font'];
        }
        set ['labelFont'](_0x536045) {
            this['createText'](), this['_text']['font'] = _0x536045;
        }
        get ['labelAlign']() {
            return this['createText'](), this['_text']['align'];
        }
        set ['labelAlign'](_0x181f81) {
            this['createText'](), this['_text']['align'] = _0x181f81;
        }
        get ['clickHandl' + 'er']() {
            return this['_clickHand' + 'ler'];
        }
        set ['clickHandl' + 'er'](_0x59530f) {
            this['_clickHand' + 'ler'] = _0x59530f;
        }
        get ['text']() {
            return this['createText'](), this['_text'];
        }
        get ['sizeGrid']() {
            return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x332e6a) {
            this['_bitmap']['sizeGrid'] = _0x42ba36['fillArray'](_0x1016b0['defaultSiz' + 'eGrid'], _0x332e6a, Number);
        }
        set ['width'](_0x30ddf6) {
            super['set_width'](_0x30ddf6), this['_autoSize'] && (this['_bitmap']['width'] = _0x30ddf6, this['_text'] && (this['_text']['width'] = _0x30ddf6));
        }
        get ['width']() {
            return super['get_width']();
        }
        set ['height'](_0x398add) {
            super['set_height'](_0x398add), this['_autoSize'] && (this['_bitmap']['height'] = _0x398add, this['_text'] && (this['_text']['height'] = _0x398add));
        }
        get ['height']() {
            return super['get_height']();
        }
        set ['dataSource'](_0x498c7d) {
            this['_dataSourc' + 'e'] = _0x498c7d, 'number' == typeof _0x498c7d || 'string' == typeof _0x498c7d ? this['label'] = _0x498c7d + '' : super['set_dataSo' + 'urce'](_0x498c7d);
        }
        get ['dataSource']() {
            return super['get_dataSo' + 'urce']();
        }
        get ['iconOffset']() {
            return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
        }
        set ['iconOffset'](_0x159dbc) {
            this['_bitmap']['_offset'] = _0x159dbc ? _0x42ba36['fillArray']([
                0x1,
                0x1
            ], _0x159dbc, Number) : [];
        }
        ['_setStateC' + 'hanged']() {
            this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
        }
    }
    _0x32f31e['stateMap'] = {
        'mouseup': 0x0,
        'mouseover': 0x1,
        'mousedown': 0x2,
        'mouseout': 0x0
    }, _0x579e6a['ILaya']['regClass'](_0x32f31e), _0x579e6a['ClassUtils']['regClass']('laya.ui.Bu' + 'tton', _0x32f31e), _0x579e6a['ClassUtils']['regClass']('Laya.Butto' + 'n', _0x32f31e);
    class _0x1e851d extends _0x32f31e {
        constructor(_0x21fd88 = null, _0xdb3a65 = '') {
            super(_0x21fd88, _0xdb3a65), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
        }
        set ['dataSource'](_0x1c03dc) {
            this['_dataSourc' + 'e'] = _0x1c03dc, _0x1c03dc instanceof Boolean ? this['selected'] = _0x1c03dc : 'string' == typeof _0x1c03dc ? this['selected'] = 'true' === _0x1c03dc : super['dataSource'] = _0x1c03dc;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x1e851d), _0x579e6a['ClassUtils']['regClass']('laya.ui.Ch' + 'eckBox', _0x1e851d), _0x579e6a['ClassUtils']['regClass']('Laya.Check' + 'Box', _0x1e851d);
    class _0x4c7b79 extends _0xc0040 {
        constructor(_0x38e5e5 = null, _0x476db9 = 0x1, _0x9b9378 = 0x1) {
            super(), this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_interval'] = 0x32, this['_index'] = 0x0, this['_toIndex'] = -0x1, this['_clipX'] = _0x476db9, this['_clipY'] = _0x9b9378, this['skin'] = _0x38e5e5;
        }
        ['destroy'](_0x43e6d0 = !0x0) {
            super['destroy'](!0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
        }
        ['dispose']() {
            this['destroy'](!0x0), _0x579e6a['ILaya']['loader']['clearRes'](this['_skin']);
        }
        ['createChil' + 'dren']() {
            this['graphics'] = this['_bitmap'] = new _0x218db5();
        }
        ['_onDisplay'](_0x7fcba3) {
            this['_isPlaying'] ? this['_getBit'](_0x579e6a['Const']['DISPLAYED_' + 'INSTAGE']) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x4a7ddc) {
            this['_skin'] != _0x4a7ddc && (this['_skin'] = _0x4a7ddc, _0x4a7ddc ? _0x579e6a['Loader']['getRes'](_0x4a7ddc) ? this['_skinLoade' + 'd']() : _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x579e6a['Loader']['IMAGE'], 0x1) : this['_bitmap']['source'] = null);
        }
        ['_skinLoade' + 'd']() {
            this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
        }
        get ['clipX']() {
            return this['_clipX'];
        }
        set ['clipX'](_0x8f123d) {
            this['_clipX'] = _0x8f123d || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipY']() {
            return this['_clipY'];
        }
        set ['clipY'](_0x5a2a3c) {
            this['_clipY'] = _0x5a2a3c || 0x1, this['_setClipCh' + 'anged']();
        }
        get ['clipWidth']() {
            return this['_clipWidth'];
        }
        set ['clipWidth'](_0x1e991d) {
            this['_clipWidth'] = _0x1e991d, this['_setClipCh' + 'anged']();
        }
        get ['clipHeight']() {
            return this['_clipHeigh' + 't'];
        }
        set ['clipHeight'](_0x4929cb) {
            this['_clipHeigh' + 't'] = _0x4929cb, this['_setClipCh' + 'anged']();
        }
        ['changeClip']() {
            if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                var _0x11f105 = _0x579e6a['Loader']['getRes'](this['_skin']);
                _0x11f105 ? this['loadComple' + 'te'](this['_skin'], _0x11f105) : _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['loadComple' + 'te'], [this['_skin']]));
            }
        }
        ['loadComple' + 'te'](_0x599da4, _0x24b4bc) {
            if (_0x599da4 === this['_skin'] && _0x24b4bc) {
                var _0x209e9d = this['_clipWidth'] || Math['ceil'](_0x24b4bc['sourceWidt' + 'h'] / this['_clipX']), _0x419b8d = this['_clipHeigh' + 't'] || Math['ceil'](_0x24b4bc['sourceHeig' + 'ht'] / this['_clipY']), _0x291b6b = this['_skin'] + _0x209e9d + _0x419b8d, _0x2f010d = _0x579e6a['WeakObject']['I']['get'](_0x291b6b);
                if (_0x579e6a['Utils']['isOkTextur' + 'eList'](_0x2f010d) || (_0x2f010d = null), _0x2f010d)
                    this['_sources'] = _0x2f010d;
                else {
                    this['_sources'] = [];
                    for (var _0x2a3966 = 0x0; _0x2a3966 < this['_clipY']; _0x2a3966++)
                        for (var _0x2c60b8 = 0x0; _0x2c60b8 < this['_clipX']; _0x2c60b8++)
                            this['_sources']['push'](_0x579e6a['Texture']['createFrom' + 'Texture'](_0x24b4bc, _0x209e9d * _0x2c60b8, _0x419b8d * _0x2a3966, _0x209e9d, _0x419b8d));
                    _0x579e6a['WeakObject']['I']['set'](_0x291b6b, this['_sources']);
                }
                this['index'] = this['_index'], this['event'](_0x579e6a['Event']['LOADED']), this['onCompResi' + 'ze']();
            }
        }
        get ['sources']() {
            return this['_sources'];
        }
        set ['sources'](_0x53ae29) {
            this['_sources'] = _0x53ae29, this['index'] = this['_index'], this['event'](_0x579e6a['Event']['LOADED']);
        }
        get ['group']() {
            return this['_group'];
        }
        set ['group'](_0x1c5b83) {
            _0x1c5b83 && this['_skin'] && _0x579e6a['Loader']['setGroup'](this['_skin'], _0x1c5b83), this['_group'] = _0x1c5b83;
        }
        set ['width'](_0x4d375f) {
            super['width'] = _0x4d375f, this['_bitmap']['width'] = _0x4d375f;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x139b99) {
            super['height'] = _0x139b99, this['_bitmap']['height'] = _0x139b99;
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
        set ['sizeGrid'](_0x50d2e7) {
            this['_bitmap']['sizeGrid'] = _0x42ba36['fillArray'](_0x1016b0['defaultSiz' + 'eGrid'], _0x50d2e7, Number);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x4733de) {
            this['_index'] = _0x4733de, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x4733de]), this['event'](_0x579e6a['Event']['CHANGE']);
        }
        get ['total']() {
            return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
        }
        get ['autoPlay']() {
            return this['_autoPlay'];
        }
        set ['autoPlay'](_0x5f3e70) {
            this['_autoPlay'] != _0x5f3e70 && (this['_autoPlay'] = _0x5f3e70, _0x5f3e70 ? this['play']() : this['stop']());
        }
        get ['interval']() {
            return this['_interval'];
        }
        set ['interval'](_0x35f35d) {
            this['_interval'] != _0x35f35d && (this['_interval'] = _0x35f35d, this['_isPlaying'] && this['play']());
        }
        get ['isPlaying']() {
            return this['_isPlaying'];
        }
        set ['isPlaying'](_0x585f66) {
            this['_isPlaying'] = _0x585f66;
        }
        ['play'](_0x1863a3 = 0x0, _0x4a44ea = -0x1) {
            this['_isPlaying'] = !0x0, this['index'] = _0x1863a3, this['_toIndex'] = _0x4a44ea, this['_index']++, _0x579e6a['ILaya']['timer']['loop'](this['interval'], this, this['_loop']), this['on'](_0x579e6a['Event']['DISPLAY'], this, this['_onDisplay']), this['on'](_0x579e6a['Event']['UNDISPLAY'], this, this['_onDisplay']);
        }
        ['_loop']() {
            this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
        }
        ['stop']() {
            this['_isPlaying'] = !0x1, _0x579e6a['ILaya']['timer']['clear'](this, this['_loop']), this['event'](_0x579e6a['Event']['COMPLETE']);
        }
        set ['dataSource'](_0x496e92) {
            this['_dataSourc' + 'e'] = _0x496e92, 'number' == typeof _0x496e92 || 'string' == typeof _0x496e92 ? this['index'] = parseInt(_0x496e92) : super['dataSource'] = _0x496e92;
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
    _0x579e6a['ILaya']['regClass'](_0x4c7b79), _0x579e6a['ClassUtils']['regClass']('laya.ui.Cl' + 'ip', _0x4c7b79), _0x579e6a['ClassUtils']['regClass']('Laya.Clip', _0x4c7b79);
    class _0x5a3842 extends _0xc0040 {
        constructor() {
            super(...arguments), this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000';
        }
        ['destroy'](_0x4ede97 = !0x0) {
            super['destroy'](_0x4ede97), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x4ede97), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x4ede97), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_colorButt' + 'on'] = new _0x32f31e()), this['_colorPane' + 'l'] = new _0x4aa05f(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x579e6a['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x579e6a['Sprite']()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x579e6a['Input']());
        }
        ['initialize']() {
            this['_colorButt' + 'on']['on'](_0x579e6a['Event']['CLICK'], this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on'](_0x579e6a['Event']['CHANGE'], this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on'](_0x579e6a['Event']['KEY_DOWN'], this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on'](_0x579e6a['Event']['MOUSE_MOVE'], this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on'](_0x579e6a['Event']['CLICK'], this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
        }
        ['onPanelMou' + 'seDown'](_0xecaf90) {
            _0xecaf90['stopPropag' + 'ation']();
        }
        ['changePane' + 'l']() {
            this['_panelChan' + 'ged'] = !0x1;
            var _0x243deb = this['_colorPane' + 'l']['graphics'];
            _0x243deb['clear'](!0x0), _0x243deb['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x243deb = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
            for (var _0x11e7b0 = [
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
                    ], _0xa992a1 = 0x0; _0xa992a1 < 0xc; _0xa992a1++)
                for (var _0x59295a = 0x0; _0x59295a < 0x14; _0x59295a++) {
                    var _0x143183;
                    _0x143183 = 0x0 === _0x59295a ? _0x11e7b0[_0xa992a1] : 0x1 === _0x59295a ? 0x0 : 0x33 * (((0x3 * _0xa992a1 + _0x59295a / 0x6) % 0x3 << 0x0) + 0x3 * (_0xa992a1 / 0x6 << 0x0)) << 0x10 | _0x59295a % 0x6 * 0x33 << 0x8 | (_0xa992a1 << 0x0) % 0x6 * 0x33;
                    var _0x49fc23 = _0x42ba36['toColor'](_0x143183);
                    this['_colors']['push'](_0x49fc23);
                    var _0x420098 = _0x59295a * this['_gridSize'], _0x2eeb0b = _0xa992a1 * this['_gridSize'];
                    _0x243deb['drawRect'](_0x420098, _0x2eeb0b, this['_gridSize'], this['_gridSize'], _0x49fc23, '#000000');
                }
        }
        ['onColorBut' + 'tonClick'](_0x1060a3) {
            this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
        }
        ['open']() {
            let _0x39881b = _0x579e6a['ILaya']['stage'];
            var _0x133b38 = this['localToGlo' + 'bal'](new _0x579e6a['Point']()), _0x14c419 = _0x133b38['x'] + this['_colorPane' + 'l']['width'] <= _0x39881b['width'] ? _0x133b38['x'] : _0x39881b['width'] - this['_colorPane' + 'l']['width'], _0x1ffd19 = _0x133b38['y'] + this['_colorButt' + 'on']['height'];
            _0x1ffd19 = _0x1ffd19 + this['_colorPane' + 'l']['height'] <= _0x39881b['height'] ? _0x1ffd19 : _0x133b38['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x14c419, _0x1ffd19), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x39881b['addChild'](this['_colorPane' + 'l']), _0x39881b['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']);
        }
        ['close']() {
            _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
        }
        ['removeColo' + 'rBox'](_0x51494b = null) {
            this['close']();
        }
        ['onColorFie' + 'ldKeyDown'](_0x4690e6) {
            0xd == _0x4690e6['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x4690e6['stopPropag' + 'ation']());
        }
        ['onColorInp' + 'utChange'](_0xced08e = null) {
            this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
        }
        ['onColorTil' + 'esClick'](_0x38e53e) {
            this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
        }
        ['onColorTil' + 'esMouseMov' + 'e'](_0x4c88d2) {
            this['_colorInpu' + 't']['focus'] = !0x1;
            var _0x7bab9c = this['getColorBy' + 'Mouse']();
            this['_colorInpu' + 't']['text'] = _0x7bab9c, this['drawBlock'](_0x7bab9c);
        }
        ['getColorBy' + 'Mouse']() {
            var _0x22e7f1 = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x3e9028 = Math['floor'](_0x22e7f1['x'] / this['_gridSize']), _0x315ab9 = Math['floor'](_0x22e7f1['y'] / this['_gridSize']);
            return this['_colors'][0x14 * _0x315ab9 + _0x3e9028];
        }
        ['drawBlock'](_0x133417) {
            var _0x4e07f3 = this['_colorBloc' + 'k']['graphics'];
            _0x4e07f3['clear'](!0x0);
            var _0x70d825 = _0x133417 || '#ffffff';
            _0x4e07f3['drawRect'](0x0, 0x0, 0x32, 0x14, _0x70d825, this['_borderCol' + 'or']), _0x133417 || _0x4e07f3['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
        }
        get ['selectedCo' + 'lor']() {
            return this['_selectedC' + 'olor'];
        }
        set ['selectedCo' + 'lor'](_0x3575a2) {
            this['_selectedC' + 'olor'] != _0x3575a2 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x3575a2, this['drawBlock'](_0x3575a2), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event'](_0x579e6a['Event']['CHANGE'], _0x579e6a['Event']['EMPTY']['setTo'](_0x579e6a['Event']['CHANGE'], this, this)));
        }
        get ['skin']() {
            return this['_colorButt' + 'on']['skin'];
        }
        set ['skin'](_0x429f7a) {
            this['_colorButt' + 'on']['once'](_0x579e6a['Event']['LOADED'], this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x429f7a;
        }
        ['changeColo' + 'r']() {
            var _0x1549bb = this['graphics'];
            _0x1549bb['clear'](!0x0);
            var _0x1de316 = this['_selectedC' + 'olor'] || '#000000';
            _0x1549bb['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x1de316);
        }
        get ['bgColor']() {
            return this['_bgColor'];
        }
        set ['bgColor'](_0xa995e7) {
            this['_bgColor'] = _0xa995e7, this['_setPanelC' + 'hanged']();
        }
        get ['borderColo' + 'r']() {
            return this['_borderCol' + 'or'];
        }
        set ['borderColo' + 'r'](_0x1647b0) {
            this['_borderCol' + 'or'] = _0x1647b0, this['_setPanelC' + 'hanged']();
        }
        get ['inputColor']() {
            return this['_inputColo' + 'r'];
        }
        set ['inputColor'](_0x17c340) {
            this['_inputColo' + 'r'] = _0x17c340, this['_setPanelC' + 'hanged']();
        }
        get ['inputBgCol' + 'or']() {
            return this['_inputBgCo' + 'lor'];
        }
        set ['inputBgCol' + 'or'](_0x18b556) {
            this['_inputBgCo' + 'lor'] = _0x18b556, this['_setPanelC' + 'hanged']();
        }
        ['_setPanelC' + 'hanged']() {
            this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x5a3842), _0x579e6a['ClassUtils']['regClass']('laya.ui.Co' + 'lorPicker', _0x5a3842), _0x579e6a['ClassUtils']['regClass']('Laya.Color' + 'Picker', _0x5a3842);
    class _0x1678c1 extends _0xc0040 {
        constructor(_0xbe6800 = '') {
            super(), this['text'] = _0xbe6800;
        }
        ['destroy'](_0xef8c8e = !0x0) {
            super['destroy'](_0xef8c8e), this['_tf'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x579e6a['Text']());
        }
        get ['text']() {
            return this['_tf']['text'];
        }
        set ['text'](_0x53f093) {
            this['_tf']['text'] != _0x53f093 && (_0x53f093 && (_0x53f093 = _0x42ba36['adptString'](_0x53f093 + '')), this['_tf']['text'] = _0x53f093, this['event'](_0x579e6a['Event']['CHANGE']), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
        }
        ['changeText'](_0x2c8773) {
            this['_tf']['changeText'](_0x2c8773);
        }
        get ['wordWrap']() {
            return this['_tf']['wordWrap'];
        }
        set ['wordWrap'](_0x467738) {
            this['_tf']['wordWrap'] = _0x467738;
        }
        get ['color']() {
            return this['_tf']['color'];
        }
        set ['color'](_0x49cdd8) {
            this['_tf']['color'] = _0x49cdd8;
        }
        get ['font']() {
            return this['_tf']['font'];
        }
        set ['font'](_0xc2f612) {
            this['_tf']['font'] = _0xc2f612;
        }
        get ['align']() {
            return this['_tf']['align'];
        }
        set ['align'](_0x24b746) {
            this['_tf']['align'] = _0x24b746;
        }
        get ['valign']() {
            return this['_tf']['valign'];
        }
        set ['valign'](_0x29b859) {
            this['_tf']['valign'] = _0x29b859;
        }
        get ['bold']() {
            return this['_tf']['bold'];
        }
        set ['bold'](_0x4f0004) {
            this['_tf']['bold'] = _0x4f0004;
        }
        get ['italic']() {
            return this['_tf']['italic'];
        }
        set ['italic'](_0x1fd0c6) {
            this['_tf']['italic'] = _0x1fd0c6;
        }
        get ['leading']() {
            return this['_tf']['leading'];
        }
        set ['leading'](_0x43afc0) {
            this['_tf']['leading'] = _0x43afc0;
        }
        get ['fontSize']() {
            return this['_tf']['fontSize'];
        }
        set ['fontSize'](_0x5d455b) {
            this['_tf']['fontSize'] = _0x5d455b;
        }
        get ['padding']() {
            return this['_tf']['padding']['join'](',');
        }
        set ['padding'](_0x423fed) {
            this['_tf']['padding'] = _0x42ba36['fillArray'](_0x1016b0['labelPaddi' + 'ng'], _0x423fed, Number);
        }
        get ['bgColor']() {
            return this['_tf']['bgColor'];
        }
        set ['bgColor'](_0x4722dc) {
            this['_tf']['bgColor'] = _0x4722dc;
        }
        get ['borderColo' + 'r']() {
            return this['_tf']['borderColo' + 'r'];
        }
        set ['borderColo' + 'r'](_0x803085) {
            this['_tf']['borderColo' + 'r'] = _0x803085;
        }
        get ['stroke']() {
            return this['_tf']['stroke'];
        }
        set ['stroke'](_0x18ad35) {
            this['_tf']['stroke'] = _0x18ad35;
        }
        get ['strokeColo' + 'r']() {
            return this['_tf']['strokeColo' + 'r'];
        }
        set ['strokeColo' + 'r'](_0x386081) {
            this['_tf']['strokeColo' + 'r'] = _0x386081;
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
        set ['width'](_0x2ec5f8) {
            super['width'] = _0x2ec5f8, this['_tf']['width'] = _0x2ec5f8;
        }
        get ['height']() {
            return this['_height'] || this['_tf']['text'] ? super['height'] : 0x0;
        }
        set ['height'](_0x21a1e7) {
            super['height'] = _0x21a1e7, this['_tf']['height'] = _0x21a1e7;
        }
        set ['dataSource'](_0x296cff) {
            this['_dataSourc' + 'e'] = _0x296cff, 'number' == typeof _0x296cff || 'string' == typeof _0x296cff ? this['text'] = _0x296cff + '' : super['dataSource'] = _0x296cff;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['overflow']() {
            return this['_tf']['overflow'];
        }
        set ['overflow'](_0x4127df) {
            this['_tf']['overflow'] = _0x4127df;
        }
        get ['underline']() {
            return this['_tf']['underline'];
        }
        set ['underline'](_0x325e4a) {
            this['_tf']['underline'] = _0x325e4a;
        }
        get ['underlineC' + 'olor']() {
            return this['_tf']['underlineC' + 'olor'];
        }
        set ['underlineC' + 'olor'](_0x4a59a5) {
            this['_tf']['underlineC' + 'olor'] = _0x4a59a5;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x1678c1), _0x579e6a['ClassUtils']['regClass']('laya.ui.La' + 'bel', _0x1678c1), _0x579e6a['ClassUtils']['regClass']('Laya.Label', _0x1678c1);
    class _0x487f67 extends _0xc0040 {
        constructor(_0x595976 = null) {
            super(), this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, _0x487f67['label'] || (_0x487f67['label'] = new _0x1678c1()), this['skin'] = _0x595976;
        }
        ['destroy'](_0x42c695 = !0x0) {
            super['destroy'](_0x42c695), this['_bg'] && this['_bg']['destroy'](_0x42c695), this['_bar'] && this['_bar']['destroy'](_0x42c695), this['_progress'] && this['_progress']['destroy'](_0x42c695), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x68d04b()), this['addChild'](this['_bar'] = new _0x32f31e());
        }
        ['initialize']() {
            this['_bar']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
        }
        ['onBarMouse' + 'Down'](_0x2972a8) {
            var _0xa1c3ba = _0x579e6a['ILaya'];
            this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x579e6a['Point']()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0xa1c3ba['stage']['mouseX'], this['_ty'] = _0xa1c3ba['stage']['mouseY'], _0xa1c3ba['stage']['on'](_0x579e6a['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0xa1c3ba['stage']['once'](_0x579e6a['Event']['MOUSE_UP'], this, this['mouseUp']), _0xa1c3ba['stage']['once'](_0x579e6a['Event']['MOUSE_OUT'], this, this['mouseUp']), this['showValueT' + 'ext']();
        }
        ['showValueT' + 'ext']() {
            if (this['showLabel']) {
                var _0x4cfe04 = _0x487f67['label'];
                this['addChild'](_0x4cfe04), _0x4cfe04['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x4cfe04['x'] = this['_bar']['_x'] + 0x14, _0x4cfe04['y'] = 0.5 * (this['_bar']['height'] - _0x4cfe04['height']) + this['_bar']['_y']) : (_0x4cfe04['y'] = this['_bar']['_y'] - 0x14, _0x4cfe04['x'] = 0.5 * (this['_bar']['width'] - _0x4cfe04['width']) + this['_bar']['_x']);
            }
        }
        ['hideValueT' + 'ext']() {
            _0x487f67['label'] && _0x487f67['label']['removeSelf']();
        }
        ['mouseUp'](_0x17f48a) {
            let _0x59ddff = _0x579e6a['ILaya']['stage'];
            _0x59ddff['off'](_0x579e6a['Event']['MOUSE_MOVE'], this, this['mouseMove']), _0x59ddff['off'](_0x579e6a['Event']['MOUSE_UP'], this, this['mouseUp']), _0x59ddff['off'](_0x579e6a['Event']['MOUSE_OUT'], this, this['mouseUp']), this['sendChange' + 'Event'](_0x579e6a['Event']['CHANGED']), this['hideValueT' + 'ext']();
        }
        ['mouseMove'](_0xa4857f) {
            let _0x43105b = _0x579e6a['ILaya']['stage'];
            var _0x20f2ea = this['_value'];
            if (this['isVertical'] ? (this['_bar']['y'] += (_0x43105b['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x43105b['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x43105b['mouseX'], this['_ty'] = _0x43105b['mouseY'], 0x0 != this['_tick']) {
                var _0x489826 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x489826) / _0x489826;
            }
            this['_value'] != _0x20f2ea && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
        }
        ['sendChange' + 'Event'](_0x26d52f = _0x579e6a['Event']['CHANGE']) {
            this['event'](_0x26d52f), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x2d4b55) {
            this['_skin'] != _0x2d4b55 && (this['_skin'] = _0x2d4b55, this['_skin'] && !_0x579e6a['Loader']['getRes'](this['_skin']) ? _0x579e6a['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
            var _0x4164e0 = this['_skin']['replace']('.png', '$progress.' + 'png');
            _0x579e6a['Loader']['getRes'](_0x4164e0) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x68d04b()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x4164e0), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
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
        set ['sizeGrid'](_0x3ecdf1) {
            this['_bg']['sizeGrid'] = _0x3ecdf1, this['_bar']['sizeGrid'] = _0x3ecdf1, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
        }
        ['setSlider'](_0x3cc835, _0x359927, _0x58af08) {
            this['_value'] = -0x1, this['_min'] = _0x3cc835, this['_max'] = _0x359927 > _0x3cc835 ? _0x359927 : _0x3cc835, this['value'] = _0x58af08 < _0x3cc835 ? _0x3cc835 : _0x58af08 > _0x359927 ? _0x359927 : _0x58af08;
        }
        get ['tick']() {
            return this['_tick'];
        }
        set ['tick'](_0x27e33b) {
            this['_tick'] != _0x27e33b && (this['_tick'] = _0x27e33b, this['callLater'](this['changeValu' + 'e']));
        }
        ['changeValu' + 'e']() {
            if (0x0 != this['tick']) {
                var _0x428c78 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x428c78) / _0x428c78;
            }
            this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
            var _0x5dbe47 = this['_max'] - this['_min'];
            0x0 === _0x5dbe47 && (_0x5dbe47 = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x5dbe47 * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x5dbe47 * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
        }
        get ['max']() {
            return this['_max'];
        }
        set ['max'](_0xfaf2c9) {
            this['_max'] != _0xfaf2c9 && (this['_max'] = _0xfaf2c9, this['callLater'](this['changeValu' + 'e']));
        }
        get ['min']() {
            return this['_min'];
        }
        set ['min'](_0x230b98) {
            this['_min'] != _0x230b98 && (this['_min'] = _0x230b98, this['callLater'](this['changeValu' + 'e']));
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x333a3f) {
            if (this['_value'] != _0x333a3f) {
                var _0x22eeb5 = this['_value'];
                this['_value'] = _0x333a3f, this['changeValu' + 'e'](), this['_value'] != _0x22eeb5 && this['sendChange' + 'Event']();
            }
        }
        get ['allowClick' + 'Back']() {
            return this['_allowClic' + 'kBack'];
        }
        set ['allowClick' + 'Back'](_0x123f65) {
            this['_allowClic' + 'kBack'] != _0x123f65 && (this['_allowClic' + 'kBack'] = _0x123f65, _0x123f65 ? this['_bg']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']) : this['_bg']['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onBgMouseD' + 'own']));
        }
        ['onBgMouseD' + 'own'](_0x54f0ed) {
            var _0x194d19 = this['_bg']['getMousePo' + 'int']();
            this['isVertical'] ? this['value'] = _0x194d19['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x194d19['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
        }
        set ['dataSource'](_0x5d44f9) {
            this['_dataSourc' + 'e'] = _0x5d44f9, 'number' == typeof _0x5d44f9 || 'string' == typeof _0x5d44f9 ? this['value'] = Number(_0x5d44f9) : super['dataSource'] = _0x5d44f9;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['bar']() {
            return this['_bar'];
        }
    }
    _0x487f67['label'] = null, _0x579e6a['ILaya']['regClass'](_0x487f67), _0x579e6a['ClassUtils']['regClass']('laya.ui.Sl' + 'ider', _0x487f67), _0x579e6a['ClassUtils']['regClass']('Laya.Slide' + 'r', _0x487f67);
    class _0x3c997a extends _0xc0040 {
        constructor(_0x6725fc = null) {
            super(), this['rollRatio'] = 0.97, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['_showButto' + 'ns'] = _0x5d7bb6['showButton' + 's'], this['_scrollSiz' + 'e'] = 0x1, this['_thumbPerc' + 'ent'] = 0x1, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_touchScro' + 'llEnable'] = _0x5d7bb6['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x5d7bb6['mouseWheel' + 'Enable'], this['skin'] = _0x6725fc, this['max'] = 0x1;
        }
        ['destroy'](_0xe821e7 = !0x0) {
            this['stopScroll'](), this['target'] = null, super['destroy'](_0xe821e7), this['upButton'] && this['upButton']['destroy'](_0xe821e7), this['downButton'] && this['downButton']['destroy'](_0xe821e7), this['slider'] && this['slider']['destroy'](_0xe821e7), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['slider'] = new _0x487f67()), this['addChild'](this['upButton'] = new _0x32f31e()), this['addChild'](this['downButton'] = new _0x32f31e());
        }
        ['initialize']() {
            this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on'](_0x579e6a['Event']['CHANGE'], this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']), this['downButton']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['onSliderCh' + 'ange']() {
            this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
        }
        ['onButtonMo' + 'useDown'](_0x243d19) {
            var _0x489c8b = _0x243d19['currentTar' + 'get'] === this['upButton'];
            this['slide'](_0x489c8b), _0x579e6a['ILaya']['timer']['once'](_0x1016b0['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x489c8b]), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp']);
        }
        ['startLoop'](_0x530a83) {
            _0x579e6a['ILaya']['timer']['frameLoop'](0x1, this, this['slide'], [_0x530a83]);
        }
        ['slide'](_0x217404) {
            _0x217404 ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
        }
        ['onStageMou' + 'seUp'](_0x307e44) {
            _0x579e6a['ILaya']['timer']['clear'](this, this['startLoop']), _0x579e6a['ILaya']['timer']['clear'](this, this['slide']);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x4467c0) {
            '\x20' != _0x4467c0 && this['_skin'] != _0x4467c0 && (this['_skin'] = _0x4467c0, this['_skin'] && !_0x579e6a['Loader']['getRes'](this['_skin']) ? _0x579e6a['ILaya']['loader']['load']([
                this['_skin'],
                this['_skin']['replace']('.png', '$up.png'),
                this['_skin']['replace']('.png', '$down.png'),
                this['_skin']['replace']('.png', '$bar.png')
            ], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
        }
        ['changeScro' + 'llBar']() {
            this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['repaint'](), this['resetPosit' + 'ions'](), this['event'](_0x579e6a['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
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
        ['setScroll'](_0x5614ab, _0x3af167, _0x3f8fad) {
            this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x5614ab, _0x3af167, _0x3f8fad), this['slider']['bar']['visible'] = _0x3af167 > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
        }
        get ['max']() {
            return this['slider']['max'];
        }
        set ['max'](_0x1d81ed) {
            this['slider']['max'] = _0x1d81ed;
        }
        get ['min']() {
            return this['slider']['min'];
        }
        set ['min'](_0xf8f8af) {
            this['slider']['min'] = _0xf8f8af;
        }
        get ['value']() {
            return this['_value'];
        }
        set ['value'](_0x42f690) {
            _0x42f690 !== this['_value'] && (this['_value'] = _0x42f690, this['_isElastic'] || (this['slider']['_value'] != _0x42f690 && (this['slider']['_value'] = _0x42f690, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event'](_0x579e6a['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
        }
        get ['isVertical']() {
            return this['slider']['isVertical'];
        }
        set ['isVertical'](_0x122ed0) {
            this['slider']['isVertical'] = _0x122ed0;
        }
        get ['sizeGrid']() {
            return this['slider']['sizeGrid'];
        }
        set ['sizeGrid'](_0x24e689) {
            this['slider']['sizeGrid'] = _0x24e689;
        }
        get ['scrollSize']() {
            return this['_scrollSiz' + 'e'];
        }
        set ['scrollSize'](_0x42b826) {
            this['_scrollSiz' + 'e'] = _0x42b826;
        }
        set ['dataSource'](_0x382141) {
            this['_dataSourc' + 'e'] = _0x382141, 'number' == typeof _0x382141 || 'string' == typeof _0x382141 ? this['value'] = Number(_0x382141) : super['dataSource'] = _0x382141;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['thumbPerce' + 'nt']() {
            return this['_thumbPerc' + 'ent'];
        }
        set ['thumbPerce' + 'nt'](_0x4b9247) {
            this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x4b9247 = _0x4b9247 >= 0x1 ? 0.99 : _0x4b9247, this['_thumbPerc' + 'ent'] = _0x4b9247, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x4b9247, _0x1016b0['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x4b9247, _0x1016b0['scrollBarM' + 'inNum']));
        }
        get ['target']() {
            return this['_target'];
        }
        set ['target'](_0x27b1fc) {
            this['_target'] && (this['_target']['off'](_0x579e6a['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_target']['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x27b1fc, _0x27b1fc && (this['_mouseWhee' + 'lEnable'] && this['_target']['on'](_0x579e6a['Event']['MOUSE_WHEE' + 'L'], this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onTargetMo' + 'useDown']));
        }
        get ['hide']() {
            return this['_hide'];
        }
        set ['hide'](_0x354f6c) {
            this['_hide'] = _0x354f6c, this['visible'] = !_0x354f6c;
        }
        get ['showButton' + 's']() {
            return this['_showButto' + 'ns'];
        }
        set ['showButton' + 's'](_0x2ceb11) {
            this['_showButto' + 'ns'] = _0x2ceb11, this['callLater'](this['changeScro' + 'llBar']);
        }
        get ['touchScrol' + 'lEnable']() {
            return this['_touchScro' + 'llEnable'];
        }
        set ['touchScrol' + 'lEnable'](_0x57a31b) {
            this['_touchScro' + 'llEnable'] = _0x57a31b, this['target'] = this['_target'];
        }
        get ['mouseWheel' + 'Enable']() {
            return this['_mouseWhee' + 'lEnable'];
        }
        set ['mouseWheel' + 'Enable'](_0x47a754) {
            this['_mouseWhee' + 'lEnable'] = _0x47a754, this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useWheel'](_0x13202f) {
            this['value'] -= _0x13202f['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
        }
        ['onTargetMo' + 'useDown'](_0x3673ef) {
            this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x3673ef) || (this['event'](_0x579e6a['Event']['END']), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x579e6a['Point']()), this['_lastPoint']['setTo'](_0x579e6a['ILaya']['stage']['mouseX'], _0x579e6a['ILaya']['stage']['mouseY']), _0x579e6a['ILaya']['timer']['clear'](this, this['tweenMove']), _0x579e6a['Tween']['clearTween'](this), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['timer']['frameLoop'](0x1, this, this['loop']));
        }
        ['startDragF' + 'orce']() {
            this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x579e6a['Point']()), this['_lastPoint']['setTo'](_0x579e6a['ILaya']['stage']['mouseX'], _0x579e6a['ILaya']['stage']['mouseY']), _0x579e6a['ILaya']['timer']['clear'](this, this['tweenMove']), _0x579e6a['Tween']['clearTween'](this), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['timer']['frameLoop'](0x1, this, this['loop']);
        }
        ['cancelDrag' + 'Op']() {
            _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['timer']['clear'](this, this['tweenMove']), _0x579e6a['ILaya']['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
        }
        ['checkTrigg' + 'ers'](_0x31f32e = !0x1) {
            return this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x31f32e) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x31f32e)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
        }
        get ['lastOffset']() {
            return this['_lastOffse' + 't'];
        }
        ['startTween' + 'MoveForce'](_0x4796e9) {
            this['_lastOffse' + 't'] = _0x4796e9, _0x579e6a['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
        }
        ['loop']() {
            var _0x1b4546 = _0x579e6a['ILaya']['stage']['mouseY'], _0x51bf2c = _0x579e6a['ILaya']['stage']['mouseX'];
            if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x1b4546 - this['_lastPoint']['y'] : _0x51bf2c - this['_lastPoint']['x'], this['_clickOnly']) {
                if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x579e6a['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x579e6a['ILaya']['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                    return;
                if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                    return;
                this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event'](_0x579e6a['Event']['START']);
            } else {
                if (this['checkTrigg' + 'ers']())
                    return;
            }
            this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x51bf2c, this['_lastPoint']['y'] = _0x1b4546, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
        }
        ['onStageMou' + 'seUp2'](_0x3caeed) {
            if (_0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_UP'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onStageMou' + 'seUp2']), _0x579e6a['ILaya']['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                    this['_value'] < this['min'] ? _0x579e6a['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x579e6a['Ease']['sineOut'], _0x579e6a['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x579e6a['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x579e6a['Ease']['sineOut'], _0x579e6a['Handler']['create'](this, this['elasticOve' + 'r']));
                else {
                    if (!this['_offsets'])
                        return;
                    this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x579e6a['ILaya']['stage']['mouseY'] - this['_lastPoint']['y'] : _0x579e6a['ILaya']['stage']['mouseX'] - this['_lastPoint']['x']);
                    for (var _0x39f4eb = 0x0, _0x1503ca = Math['min'](this['_offsets']['length'], 0x3), _0x3b3ac8 = 0x0; _0x3b3ac8 < _0x1503ca; _0x3b3ac8++)
                        _0x39f4eb += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x3b3ac8];
                    if (this['_lastOffse' + 't'] = _0x39f4eb / _0x1503ca, (_0x39f4eb = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                        return void this['event'](_0x579e6a['Event']['END']);
                    _0x39f4eb > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                    var _0x1572d6 = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                    _0x579e6a['ILaya']['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x1572d6]);
                }
            }
        }
        ['elasticOve' + 'r']() {
            this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x579e6a['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event'](_0x579e6a['Event']['END']);
        }
        ['tweenMove'](_0x13294f) {
            var _0x13ae42;
            if ((this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) && (_0x13294f > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x13ae42 = 0.5 * -(this['min'] - _0x13294f - this['value']), this['_lastOffse' + 't'] > _0x13ae42 && (this['_lastOffse' + 't'] = _0x13ae42)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x13ae42 = 0.5 * -(this['max'] + _0x13294f - this['value']), this['_lastOffse' + 't'] < _0x13ae42 && (this['_lastOffse' + 't'] = _0x13ae42))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1)) {
                if (_0x579e6a['ILaya']['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                    return void (this['_value'] < this['min'] ? _0x579e6a['Tween']['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x579e6a['Ease']['sineOut'], _0x579e6a['Handler']['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x579e6a['Tween']['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x579e6a['Ease']['sineOut'], _0x579e6a['Handler']['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                this['event'](_0x579e6a['Event']['END']), !this['hide'] && this['autoHide'] && _0x579e6a['Tween']['to'](this, { 'alpha': 0x0 }, 0x1f4);
            }
        }
        ['stopScroll']() {
            this['onStageMou' + 'seUp2'](null), _0x579e6a['ILaya']['timer']['clear'](this, this['tweenMove']), _0x579e6a['Tween']['clearTween'](this);
        }
        get ['tick']() {
            return this['slider']['tick'];
        }
        set ['tick'](_0x2ada55) {
            this['slider']['tick'] = _0x2ada55;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x3c997a), _0x579e6a['ClassUtils']['regClass']('laya.ui.Sc' + 'rollBar', _0x3c997a), _0x579e6a['ClassUtils']['regClass']('Laya.Scrol' + 'lBar', _0x3c997a);
    class _0x161ed5 extends _0x3c997a {
    }
    _0x579e6a['ILaya']['regClass'](_0x161ed5), _0x579e6a['ClassUtils']['regClass']('laya.ui.VS' + 'crollBar', _0x161ed5), _0x579e6a['ClassUtils']['regClass']('Laya.VScro' + 'llBar', _0x161ed5);
    class _0x6cf261 extends _0x3c997a {
        ['initialize']() {
            super['initialize'](), this['slider']['isVertical'] = !0x1;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x6cf261), _0x579e6a['ClassUtils']['regClass']('laya.ui.HS' + 'crollBar', _0x6cf261), _0x579e6a['ClassUtils']['regClass']('Laya.HScro' + 'llBar', _0x6cf261);
    class _0x387393 extends _0x4aa05f {
        constructor() {
            super(...arguments), this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_cells'] = [], this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_createdLi' + 'ne'] = 0x0, this['_offset'] = new _0x579e6a['Point'](), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0;
        }
        ['destroy'](_0x5e1a0b = !0x0) {
            this['_content'] && this['_content']['destroy'](_0x5e1a0b), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x5e1a0b), super['destroy'](_0x5e1a0b), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_content'] = new _0x4aa05f());
        }
        set ['cacheAs'](_0x4ce469) {
            super['cacheAs'] = _0x4ce469, this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x4ce469 ? this['_scrollBar']['on'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art']) : this['_scrollBar']['off'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_scrollBar']['once'](_0x579e6a['Event']['END'], this, this['onScrollEn' + 'd']);
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
        set ['vScrollBar' + 'Skin'](_0x5bb3b6) {
            this['_removePre' + 'ScrollBar']();
            var _0x3a55c3 = new _0x161ed5();
            _0x3a55c3['name'] = 'scrollBar', _0x3a55c3['right'] = 0x0, _0x3a55c3['skin'] = _0x5bb3b6, _0x3a55c3['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x3a55c3, this['addChild'](_0x3a55c3), this['_setCellCh' + 'anged']();
        }
        ['_removePre' + 'ScrollBar']() {
            var _0x181d12 = this['removeChil' + 'dByName']('scrollBar');
            _0x181d12 && _0x181d12['destroy'](!0x0);
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x5098f2) {
            this['_removePre' + 'ScrollBar']();
            var _0x293350 = new _0x6cf261();
            _0x293350['name'] = 'scrollBar', _0x293350['bottom'] = 0x0, _0x293350['skin'] = _0x5098f2, _0x293350['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x293350, this['addChild'](_0x293350), this['_setCellCh' + 'anged']();
        }
        get ['scrollBar']() {
            return this['_scrollBar'];
        }
        set ['scrollBar'](_0x8fd2ce) {
            this['_scrollBar'] != _0x8fd2ce && (this['_scrollBar'] = _0x8fd2ce, _0x8fd2ce && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on'](_0x579e6a['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'])));
        }
        get ['itemRender']() {
            return this['_itemRende' + 'r'];
        }
        set ['itemRender'](_0x11c595) {
            if (this['_itemRende' + 'r'] != _0x11c595) {
                this['_itemRende' + 'r'] = _0x11c595;
                for (var _0x1f0cdc = this['_cells']['length'] - 0x1; _0x1f0cdc > -0x1; _0x1f0cdc--)
                    this['_cells'][_0x1f0cdc]['destroy']();
                this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
            }
        }
        set ['width'](_0x1f3cd8) {
            _0x1f3cd8 != this['_width'] && (super['width'] = _0x1f3cd8, this['_setCellCh' + 'anged']());
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x44ca36) {
            _0x44ca36 != this['_height'] && (super['height'] = _0x44ca36, this['_setCellCh' + 'anged']());
        }
        get ['height']() {
            return super['height'];
        }
        get ['repeatX']() {
            return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
        }
        set ['repeatX'](_0x30b548) {
            this['_repeatX'] = _0x30b548, this['_setCellCh' + 'anged']();
        }
        get ['repeatY']() {
            return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
        }
        set ['repeatY'](_0x24a036) {
            this['_repeatY'] = _0x24a036, this['_setCellCh' + 'anged']();
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x1e8473) {
            this['_spaceX'] = _0x1e8473, this['_setCellCh' + 'anged']();
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x1655a4) {
            this['_spaceY'] = _0x1655a4, this['_setCellCh' + 'anged']();
        }
        ['changeCell' + 's']() {
            if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                var _0x2e6eba = this['_getOneCel' + 'l'](), _0x21dc7c = _0x2e6eba['width'] + this['_spaceX'] || 0x1, _0x5e8f53 = _0x2e6eba['height'] + this['_spaceY'] || 0x1;
                this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x21dc7c) : Math['ceil'](this['_width'] / _0x21dc7c)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x5e8f53) : Math['round'](this['_height'] / _0x5e8f53));
                var _0x386d88 = this['_width'] ? this['_width'] : _0x21dc7c * this['repeatX'] - this['_spaceX'], _0x1ee139 = this['_height'] ? this['_height'] : _0x5e8f53 * this['repeatY'] - this['_spaceY'];
                this['_cellSize'] = this['_isVertica' + 'l'] ? _0x5e8f53 : _0x21dc7c, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x5e8f53 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x1ee139 - this['_spaceY'] : _0x21dc7c * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x386d88 - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0x1ee139 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x386d88), this['setContent' + 'Size'](_0x386d88, _0x1ee139);
                var _0x2d7d50 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x3249b7 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                this['_createIte' + 'ms'](0x0, _0x2d7d50, _0x3249b7), this['_createdLi' + 'ne'] = _0x3249b7, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
            }
        }
        ['_getOneCel' + 'l']() {
            if (0x0 === this['_cells']['length']) {
                var _0x1618e1 = this['createItem']();
                if (this['_offset']['setTo'](_0x1618e1['_x'], _0x1618e1['_y']), this['cacheConte' + 'nt'])
                    return _0x1618e1;
                this['_cells']['push'](_0x1618e1);
            }
            return this['_cells'][0x0];
        }
        ['_createIte' + 'ms'](_0x53263b, _0x49a28c, _0x4cd879) {
            var _0x3e7c4b = this['_content'], _0x24d47d = this['_getOneCel' + 'l'](), _0x29d2cc = _0x24d47d['width'] + this['_spaceX'], _0x1a9a16 = _0x24d47d['height'] + this['_spaceY'];
            if (this['cacheConte' + 'nt']) {
                var _0x3d5aa2 = new _0x4aa05f();
                _0x3d5aa2['cacheAs'] = 'normal', _0x3d5aa2['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x53263b) * _0x29d2cc, (this['_isVertica' + 'l'] ? _0x53263b : 0x0) * _0x1a9a16), this['_content']['addChild'](_0x3d5aa2), _0x3e7c4b = _0x3d5aa2;
            } else {
                for (var _0x3998c0 = [], _0x38b382 = this['_cells']['length'] - 0x1; _0x38b382 > -0x1; _0x38b382--) {
                    var _0x5dcda7 = this['_cells'][_0x38b382];
                    _0x5dcda7['removeSelf'](), _0x3998c0['push'](_0x5dcda7);
                }
                this['_cells']['length'] = 0x0;
            }
            for (var _0x3a7d3c = _0x53263b; _0x3a7d3c < _0x4cd879; _0x3a7d3c++)
                for (var _0x5d07cf = 0x0; _0x5d07cf < _0x49a28c; _0x5d07cf++)
                    (_0x24d47d = _0x3998c0 && _0x3998c0['length'] ? _0x3998c0['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0x5d07cf : _0x3a7d3c) * _0x29d2cc - _0x3e7c4b['_x'], _0x24d47d['y'] = (this['_isVertica' + 'l'] ? _0x3a7d3c : _0x5d07cf) * _0x1a9a16 - _0x3e7c4b['_y'], _0x24d47d['name'] = 'item' + (_0x3a7d3c * _0x49a28c + _0x5d07cf), _0x3e7c4b['addChild'](_0x24d47d), this['addCell'](_0x24d47d);
        }
        ['createItem']() {
            var _0x34e7e3 = [];
            if ('function' == typeof this['_itemRende' + 'r'])
                var _0x414763 = new this['_itemRende' + 'r']();
            else
                _0x414763 = _0x579e6a['SceneUtils']['createComp'](this['_itemRende' + 'r'], null, null, _0x34e7e3);
            if (0x0 == _0x34e7e3['length'] && _0x414763['_watchMap']) {
                var _0x5cd6c3 = _0x414763['_watchMap'];
                for (var _0x2d1468 in _0x5cd6c3)
                    for (var _0x3fb1f0 = _0x5cd6c3[_0x2d1468], _0x48773c = 0x0; _0x48773c < _0x3fb1f0['length']; _0x48773c++) {
                        var _0x2703c0 = _0x3fb1f0[_0x48773c];
                        _0x34e7e3['push'](_0x2703c0['comp'], _0x2703c0['prop'], _0x2703c0['value']);
                    }
            }
            return _0x34e7e3['length'] && (_0x414763['_$bindData'] = _0x34e7e3), _0x414763;
        }
        ['addCell'](_0x1c629c) {
            _0x1c629c['on'](_0x579e6a['Event']['CLICK'], this, this['onCellMous' + 'e']), _0x1c629c['on'](_0x579e6a['Event']['RIGHT_CLIC' + 'K'], this, this['onCellMous' + 'e']), _0x1c629c['on'](_0x579e6a['Event']['MOUSE_OVER'], this, this['onCellMous' + 'e']), _0x1c629c['on'](_0x579e6a['Event']['MOUSE_OUT'], this, this['onCellMous' + 'e']), _0x1c629c['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onCellMous' + 'e']), _0x1c629c['on'](_0x579e6a['Event']['MOUSE_UP'], this, this['onCellMous' + 'e']), this['_cells']['push'](_0x1c629c);
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                var _0x476296;
                this['repeatX'] = 0x1, _0x476296 = 0x0;
                for (var _0x5c9636 = 0x0; _0x5c9636 < 0x2710; _0x5c9636++) {
                    var _0x341d33 = this['getChildBy' + 'Name']('item' + _0x5c9636);
                    if (!_0x341d33)
                        break;
                    this['addCell'](_0x341d33), _0x476296++;
                }
                this['repeatY'] = _0x476296;
            }
        }
        ['setContent' + 'Size'](_0x3190f6, _0x3e43d4) {
            this['_content']['width'] = _0x3190f6, this['_content']['height'] = _0x3e43d4, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x579e6a['Rectangle']['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x3190f6, _0x3e43d4), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event'](_0x579e6a['Event']['RESIZE']);
        }
        ['onCellMous' + 'e'](_0x7e6157) {
            _0x7e6157['type'] === _0x579e6a['Event']['MOUSE_DOWN'] && (this['_isMoved'] = !0x1);
            var _0x4e2967 = _0x7e6157['currentTar' + 'get'], _0x2d1da3 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x4e2967);
            _0x2d1da3 < 0x0 || (_0x7e6157['type'] === _0x579e6a['Event']['CLICK'] || _0x7e6157['type'] === _0x579e6a['Event']['RIGHT_CLIC' + 'K'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x2d1da3 : this['changeCell' + 'State'](_0x4e2967, !0x0, 0x0) : _0x7e6157['type'] !== _0x579e6a['Event']['MOUSE_OVER'] && _0x7e6157['type'] !== _0x579e6a['Event']['MOUSE_OUT'] || this['_selectedI' + 'ndex'] === _0x2d1da3 || this['changeCell' + 'State'](_0x4e2967, _0x7e6157['type'] === _0x579e6a['Event']['MOUSE_OVER'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                _0x7e6157,
                _0x2d1da3
            ]));
        }
        ['changeCell' + 'State'](_0x25a489, _0x4d6d99, _0x4020a9) {
            var _0x365d04 = _0x25a489['getChildBy' + 'Name']('selectBox');
            _0x365d04 && (this['selectEnab' + 'le'] = !0x0, _0x365d04['visible'] = _0x4d6d99, _0x365d04['index'] = _0x4020a9);
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
        }
        ['onScrollBa' + 'rChange'](_0x7d25f6 = null) {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
            var _0x229d97 = this['_scrollBar']['value'], _0x388b25 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x487a05 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x32379c = Math['floor'](_0x229d97 / this['_cellSize']);
            if (this['cacheConte' + 'nt'])
                _0x500269 = _0x487a05 + 0x1, this['_createdLi' + 'ne'] - _0x32379c < _0x500269 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x388b25, this['_createdLi' + 'ne'] + _0x500269), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x388b25, 0x0), this['_createdLi' + 'ne'] += _0x500269);
            else {
                var _0x25431f = _0x32379c * _0x388b25, _0x500269 = 0x0;
                if (_0x25431f > this['_startInde' + 'x']) {
                    _0x500269 = _0x25431f - this['_startInde' + 'x'];
                    var _0x21f898 = !0x0, _0x723c93 = this['_startInde' + 'x'] + _0x388b25 * (_0x487a05 + 0x1);
                    this['_isMoved'] = !0x0;
                } else
                    _0x25431f < this['_startInde' + 'x'] && (_0x500269 = this['_startInde' + 'x'] - _0x25431f, _0x21f898 = !0x1, _0x723c93 = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                for (var _0x4c7242 = 0x0; _0x4c7242 < _0x500269; _0x4c7242++) {
                    if (_0x21f898) {
                        var _0x121366 = this['_cells']['shift']();
                        this['_cells'][this['_cells']['length']] = _0x121366;
                        var _0x429a38 = _0x723c93 + _0x4c7242;
                    } else
                        _0x121366 = this['_cells']['pop'](), this['_cells']['unshift'](_0x121366), _0x429a38 = _0x723c93 - _0x4c7242;
                    var _0x33fa3e = Math['floor'](_0x429a38 / _0x388b25) * this['_cellSize'];
                    this['_isVertica' + 'l'] ? _0x121366['y'] = _0x33fa3e : _0x121366['x'] = _0x33fa3e, this['renderItem'](_0x121366, _0x429a38);
                }
                this['_startInde' + 'x'] = _0x25431f, this['changeSele' + 'ctStatus']();
            }
            var _0x5c52e5 = this['_content']['_style']['scrollRect'];
            this['_isVertica' + 'l'] ? (_0x5c52e5['y'] = _0x229d97 - this['_offset']['y'], _0x5c52e5['x'] = -this['_offset']['x']) : (_0x5c52e5['y'] = -this['_offset']['y'], _0x5c52e5['x'] = _0x229d97 - this['_offset']['x']), this['_content']['scrollRect'] = _0x5c52e5;
        }
        ['posCell'](_0x21d828, _0x26a651) {
            if (this['_scrollBar']) {
                var _0x227cf9 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x152ab1 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x26a651 / _0x227cf9) * this['_cellSize']);
                this['_isVertica' + 'l'] ? _0x21d828['_y'] = _0x152ab1 : _0x21d828['x'] = _0x152ab1;
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x388c04) {
            this['_selectedI' + 'ndex'] != _0x388c04 && (this['_selectedI' + 'ndex'] = _0x388c04, this['changeSele' + 'ctStatus'](), this['event'](_0x579e6a['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x388c04), this['startIndex'] = this['_startInde' + 'x']);
        }
        ['changeSele' + 'ctStatus']() {
            for (var _0x384e6e = 0x0, _0x3db3dd = this['_cells']['length']; _0x384e6e < _0x3db3dd; _0x384e6e++)
                this['changeCell' + 'State'](this['_cells'][_0x384e6e], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x384e6e, 0x1);
        }
        get ['selectedIt' + 'em']() {
            return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedIt' + 'em'](_0x4a9df0) {
            this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x4a9df0);
        }
        get ['selection']() {
            return this['getCell'](this['_selectedI' + 'ndex']);
        }
        set ['selection'](_0x239170) {
            this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x239170);
        }
        get ['startIndex']() {
            return this['_startInde' + 'x'];
        }
        set ['startIndex'](_0x1f0633) {
            this['_startInde' + 'x'] = _0x1f0633 > 0x0 ? _0x1f0633 : 0x0, this['callLater'](this['renderItem' + 's']);
        }
        ['renderItem' + 's'](_0x41dbfe = 0x0, _0xda1a2c = 0x0) {
            for (var _0x430545 = _0x41dbfe, _0x5d871e = _0xda1a2c || this['_cells']['length']; _0x430545 < _0x5d871e; _0x430545++)
                this['renderItem'](this['_cells'][_0x430545], this['_startInde' + 'x'] + _0x430545);
            this['changeSele' + 'ctStatus']();
        }
        ['renderItem'](_0xfc3d63, _0x28f2c1) {
            this['_array'] && _0x28f2c1 >= 0x0 && _0x28f2c1 < this['_array']['length'] ? (_0xfc3d63['visible'] = !0x0, _0xfc3d63['_$bindData'] ? (_0xfc3d63['_dataSourc' + 'e'] = this['_array'][_0x28f2c1], this['_bindData'](_0xfc3d63, this['_array'][_0x28f2c1])) : _0xfc3d63['dataSource'] = this['_array'][_0x28f2c1], this['cacheConte' + 'nt'] || this['posCell'](_0xfc3d63, _0x28f2c1), this['hasListene' + 'r'](_0x579e6a['Event']['RENDER']) && this['event'](_0x579e6a['Event']['RENDER'], [
                _0xfc3d63,
                _0x28f2c1
            ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                _0xfc3d63,
                _0x28f2c1
            ])) : (_0xfc3d63['visible'] = !0x1, _0xfc3d63['dataSource'] = null);
        }
        ['_bindData'](_0x3589f0, _0x232443) {
            for (var _0x551184 = _0x3589f0['_$bindData'], _0x334b01 = 0x0, _0x595822 = _0x551184['length']; _0x334b01 < _0x595822; _0x334b01++) {
                var _0x5d703b = _0x551184[_0x334b01++], _0x2a3d75 = _0x551184[_0x334b01++], _0xad445d = _0x551184[_0x334b01], _0x46d3ed = _0x42ba36['getBindFun'](_0xad445d);
                _0x5d703b[_0x2a3d75] = _0x46d3ed['call'](this, _0x232443);
            }
        }
        get ['array']() {
            return this['_array'];
        }
        set ['array'](_0x4d5136) {
            this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x4d5136 || [], this['_preLen'] = this['_array']['length'];
            var _0x32a270 = this['_array']['length'];
            if (this['totalPage'] = Math['ceil'](_0x32a270 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x32a270 ? this['_selectedI' + 'ndex'] : _0x32a270 - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0xfe0ed4 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x4322f3 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x1a5c29 = Math['ceil'](_0x32a270 / _0xfe0ed4);
                (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x1a5c29 >= _0x4322f3 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x4322f3 / _0x1a5c29, this['_scrollBar']['setScroll'](0x0, (_0x1a5c29 - _0x4322f3) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
            }
        }
        ['updateArra' + 'y'](_0x46bccf) {
            var _0xbaa01c;
            if (this['_array'] = _0x46bccf, this['_array'] && ((_0xbaa01c = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0xbaa01c), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                var _0x4dfc37 = _0x46bccf['length'], _0x54aa31 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x5c83e0 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x301c7e = Math['ceil'](_0x4dfc37 / _0x54aa31);
                _0x301c7e >= _0x5c83e0 && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x5c83e0 / _0x301c7e, this['_scrollBar']['slider']['_max'] = (_0x301c7e - _0x5c83e0) * this['_cellSize'] + this['_cellOffse' + 't']);
            }
        }
        get ['page']() {
            return this['_page'];
        }
        set ['page'](_0x41ff00) {
            this['_page'] = _0x41ff00, this['_array'] && (this['_page'] = _0x41ff00 > 0x0 ? _0x41ff00 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
        }
        get ['length']() {
            return this['_array'] ? this['_array']['length'] : 0x0;
        }
        set ['dataSource'](_0x50391c) {
            this['_dataSourc' + 'e'] = _0x50391c, 'number' == typeof _0x50391c || 'string' == typeof _0x50391c ? this['selectedIn' + 'dex'] = parseInt(_0x50391c) : _0x50391c instanceof Array ? this['array'] = _0x50391c : super['dataSource'] = _0x50391c;
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
        set ['elasticEna' + 'bled'](_0x48470e) {
            this['_elasticEn' + 'abled'] = _0x48470e, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x48470e ? 0xc8 : 0x0);
        }
        ['refresh']() {
            this['array'] = this['_array'];
        }
        ['getItem'](_0xae51b5) {
            return _0xae51b5 > -0x1 && _0xae51b5 < this['_array']['length'] ? this['_array'][_0xae51b5] : null;
        }
        ['changeItem'](_0x5c00e1, _0x340f16) {
            _0x5c00e1 > -0x1 && _0x5c00e1 < this['_array']['length'] && (this['_array'][_0x5c00e1] = _0x340f16, _0x5c00e1 >= this['_startInde' + 'x'] && _0x5c00e1 < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x5c00e1), _0x5c00e1));
        }
        ['setItem'](_0xb4c7ee, _0x5e1275) {
            this['changeItem'](_0xb4c7ee, _0x5e1275);
        }
        ['addItem'](_0x29f0c4) {
            this['_array']['push'](_0x29f0c4), this['array'] = this['_array'];
        }
        ['addItemAt'](_0x47d415, _0x17db54) {
            this['_array']['splice'](_0x17db54, 0x0, _0x47d415), this['array'] = this['_array'];
        }
        ['deleteItem'](_0x4e4442) {
            this['_array']['splice'](_0x4e4442, 0x1), this['array'] = this['_array'];
        }
        ['getCell'](_0x30b982) {
            return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x30b982 > -0x1 && this['_cells'] ? this['_cells'][(_0x30b982 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
        }
        ['scrollTo'](_0x4dcb65) {
            if (this['_scrollBar']) {
                var _0x34a69a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                this['_scrollBar']['value'] = Math['floor'](_0x4dcb65 / _0x34a69a) * this['_cellSize'];
            } else
                this['startIndex'] = _0x4dcb65;
        }
        ['tweenTo'](_0x11532f, _0x367378 = 0xc8, _0x57e19d = null) {
            if (this['_scrollBar']) {
                this['_scrollBar']['stopScroll']();
                var _0x372b5b = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                _0x579e6a['Tween']['to'](this['_scrollBar'], { 'value': Math['floor'](_0x11532f / _0x372b5b) * this['_cellSize'] }, _0x367378, null, _0x57e19d, 0x0, !0x0);
            } else
                this['startIndex'] = _0x11532f, _0x57e19d && _0x57e19d['run']();
        }
        ['_setCellCh' + 'anged']() {
            this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
        }
        ['commitMeas' + 'ure']() {
            this['runCallLat' + 'er'](this['changeCell' + 's']);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x387393), _0x579e6a['ClassUtils']['regClass']('laya.ui.Li' + 'st', _0x387393), _0x579e6a['ClassUtils']['regClass']('Laya.List', _0x387393);
    class _0x1275f1 extends _0xc0040 {
        constructor(_0x337192 = null, _0x33506f = null) {
            super(), this['_visibleNu' + 'm'] = 0x6, this['_itemColor' + 's'] = _0x1016b0['comboBoxIt' + 'emColors'], this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['itemRender'] = null, this['skin'] = _0x337192, this['labels'] = _0x33506f;
        }
        ['destroy'](_0x5e4688 = !0x0) {
            super['destroy'](_0x5e4688), this['_button'] && this['_button']['destroy'](_0x5e4688), this['_list'] && this['_list']['destroy'](_0x5e4688), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_button'] = new _0x32f31e()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onButtonMo' + 'useDown']);
        }
        ['_createLis' + 't']() {
            this['_list'] = new _0x387393(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
        }
        ['_setListEv' + 'ent'](_0xce8a68) {
            this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x579e6a['Handler']['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['onScrollBa' + 'rDown']);
        }
        ['onListDown'](_0x37be40) {
            _0x37be40['stopPropag' + 'ation']();
        }
        ['onScrollBa' + 'rDown'](_0x26cc27) {
            _0x26cc27['stopPropag' + 'ation']();
        }
        ['onButtonMo' + 'useDown'](_0x4f6e31) {
            this['callLater'](this['switchTo'], [!this['_isOpen']]);
        }
        get ['skin']() {
            return this['_button']['skin'];
        }
        set ['skin'](_0x5ca98a) {
            this['_button']['skin'] != _0x5ca98a && (this['_button']['skin'] = _0x5ca98a, this['_listChang' + 'ed'] = !0x0);
        }
        ['measureWid' + 'th']() {
            return this['_button']['width'];
        }
        ['measureHei' + 'ght']() {
            return this['_button']['height'];
        }
        ['changeList']() {
            this['_listChang' + 'ed'] = !0x1;
            var _0x19806b = this['width'] - 0x2, _0x1c057a = this['_itemColor' + 's'][0x2];
            this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                'type': 'Box',
                'child': [{
                        'type': 'Label',
                        'props': {
                            'name': 'label',
                            'x': 0x1,
                            'padding': '3,3,3,3',
                            'width': _0x19806b,
                            'height': this['_itemHeigh' + 't'],
                            'fontSize': this['_itemSize'],
                            'color': _0x1c057a
                        }
                    }]
            }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
        }
        ['onlistItem' + 'Mouse'](_0x4b48c6, _0x3f097a) {
            var _0x1a571b = _0x4b48c6['type'];
            if (_0x1a571b === _0x579e6a['Event']['MOUSE_OVER'] || _0x1a571b === _0x579e6a['Event']['MOUSE_OUT']) {
                if (this['_isCustomL' + 'ist'])
                    return;
                var _0x406d18 = this['_list']['getCell'](_0x3f097a);
                if (!_0x406d18)
                    return;
                var _0x4140f3 = _0x406d18['getChildBy' + 'Name']('label');
                _0x4140f3 && (_0x1a571b === _0x579e6a['Event']['ROLL_OVER'] ? (_0x4140f3['bgColor'] = this['_itemColor' + 's'][0x0], _0x4140f3['color'] = this['_itemColor' + 's'][0x1]) : (_0x4140f3['bgColor'] = null, _0x4140f3['color'] = this['_itemColor' + 's'][0x2]));
            } else
                _0x1a571b === _0x579e6a['Event']['CLICK'] && (this['selectedIn' + 'dex'] = _0x3f097a, this['isOpen'] = !0x1);
        }
        ['switchTo'](_0x394939) {
            this['isOpen'] = _0x394939;
        }
        ['changeOpen']() {
            this['isOpen'] = !this['_isOpen'];
        }
        set ['width'](_0x26fc74) {
            super['width'] = _0x26fc74, this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x46fbe9) {
            super['height'] = _0x46fbe9, this['_button']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        get ['labels']() {
            return this['_labels']['join'](',');
        }
        set ['labels'](_0x2fdfbb) {
            this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x2fdfbb ? this['_labels'] = _0x2fdfbb['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
        }
        ['changeItem']() {
            if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                var _0x9f93f0 = this['_list']['graphics'];
                _0x9f93f0['clear'](!0x0), _0x9f93f0['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
            }
            var _0x23bf54 = this['_list']['array'] || [];
            _0x23bf54['length'] = 0x0;
            for (var _0x52cb5d = 0x0, _0x47604e = this['_labels']['length']; _0x52cb5d < _0x47604e; _0x52cb5d++)
                _0x23bf54['push']({ 'label': this['_labels'][_0x52cb5d] });
            this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x23bf54;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x3be2e3) {
            this['_selectedI' + 'ndex'] != _0x3be2e3 && (this['_selectedI' + 'ndex'] = _0x3be2e3, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event'](_0x579e6a['Event']['CHANGE'], [_0x579e6a['Event']['EMPTY']['setTo'](_0x579e6a['Event']['CHANGE'], this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['changeSele' + 'cted']() {
            this['_button']['label'] = this['selectedLa' + 'bel'];
        }
        get ['selectHand' + 'ler']() {
            return this['_selectHan' + 'dler'];
        }
        set ['selectHand' + 'ler'](_0x1df24f) {
            this['_selectHan' + 'dler'] = _0x1df24f;
        }
        get ['selectedLa' + 'bel']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selectedLa' + 'bel'](_0x5ee656) {
            this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0x5ee656);
        }
        get ['visibleNum']() {
            return this['_visibleNu' + 'm'];
        }
        set ['visibleNum'](_0x3eeeb0) {
            this['_visibleNu' + 'm'] = _0x3eeeb0, this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemColors']() {
            return String(this['_itemColor' + 's']);
        }
        set ['itemColors'](_0x533395) {
            this['_itemColor' + 's'] = _0x42ba36['fillArray'](this['_itemColor' + 's'], _0x533395, String), this['_listChang' + 'ed'] = !0x0;
        }
        get ['itemSize']() {
            return this['_itemSize'];
        }
        set ['itemSize'](_0x5ad63e) {
            this['_itemSize'] = _0x5ad63e, this['_listChang' + 'ed'] = !0x0;
        }
        get ['isOpen']() {
            return this['_isOpen'];
        }
        set ['isOpen'](_0x19b14c) {
            if (this['_isOpen'] != _0x19b14c) {
                if (this['_isOpen'] = _0x19b14c, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                    this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                    var _0x471e26 = this['localToGlo' + 'bal'](_0x579e6a['Point']['TEMP']['setTo'](0x0, 0x0)), _0x414142 = _0x471e26['y'] + this['_button']['height'];
                    _0x414142 = _0x414142 + this['_listHeigh' + 't'] <= _0x579e6a['ILaya']['stage']['height'] ? _0x414142 : _0x471e26['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x471e26['x'], _0x414142), this['_list']['zOrder'] = 0x3e9, _0x579e6a['ILaya']['stage']['addChild'](this['_list']), _0x579e6a['ILaya']['stage']['once'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['removeList']), _0x579e6a['ILaya']['stage']['on'](_0x579e6a['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                } else
                    this['_list'] && this['_list']['removeSelf']();
            }
        }
        ['_onStageMo' + 'useWheel'](_0x2ccc02) {
            this['_list'] && !this['_list']['contains'](_0x2ccc02['target']) && this['removeList'](null);
        }
        ['removeList'](_0x28e6ee) {
            _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['removeList']), _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_WHEE' + 'L'], this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_scrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x61e383) {
            this['_scrollBar' + 'Skin'] = _0x61e383;
        }
        get ['sizeGrid']() {
            return this['_button']['sizeGrid'];
        }
        set ['sizeGrid'](_0x111b39) {
            this['_button']['sizeGrid'] = _0x111b39;
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
        set ['list'](_0x41440b) {
            _0x41440b && (_0x41440b['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x41440b, this['_setListEv' + 'ent'](_0x41440b), this['_itemHeigh' + 't'] = _0x41440b['getCell'](0x0)['height'] + _0x41440b['spaceY']);
        }
        set ['dataSource'](_0x27bb9f) {
            this['_dataSourc' + 'e'] = _0x27bb9f, 'number' == typeof _0x27bb9f || 'string' == typeof _0x27bb9f ? this['selectedIn' + 'dex'] = parseInt(_0x27bb9f) : _0x27bb9f instanceof Array ? this['labels'] = _0x27bb9f['join'](',') : super['dataSource'] = _0x27bb9f;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        get ['labelColor' + 's']() {
            return this['_button']['labelColor' + 's'];
        }
        set ['labelColor' + 's'](_0x537085) {
            this['_button']['labelColor' + 's'] != _0x537085 && (this['_button']['labelColor' + 's'] = _0x537085);
        }
        get ['labelPaddi' + 'ng']() {
            return this['_button']['text']['padding']['join'](',');
        }
        set ['labelPaddi' + 'ng'](_0x4e7a0c) {
            this['_button']['text']['padding'] = _0x42ba36['fillArray'](_0x1016b0['labelPaddi' + 'ng'], _0x4e7a0c, Number);
        }
        get ['labelSize']() {
            return this['_button']['text']['fontSize'];
        }
        set ['labelSize'](_0x451ef9) {
            this['_button']['text']['fontSize'] = _0x451ef9;
        }
        get ['labelBold']() {
            return this['_button']['text']['bold'];
        }
        set ['labelBold'](_0x41abdb) {
            this['_button']['text']['bold'] = _0x41abdb;
        }
        get ['labelFont']() {
            return this['_button']['text']['font'];
        }
        set ['labelFont'](_0xe8ae6b) {
            this['_button']['text']['font'] = _0xe8ae6b;
        }
        get ['stateNum']() {
            return this['_button']['stateNum'];
        }
        set ['stateNum'](_0x3df22b) {
            this['_button']['stateNum'] = _0x3df22b;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x1275f1), _0x579e6a['ClassUtils']['regClass']('laya.ui.Co' + 'mboBox', _0x1275f1), _0x579e6a['ClassUtils']['regClass']('Laya.Combo' + 'Box', _0x1275f1);
    class _0x3f3b10 extends _0xc0040 {
        constructor(_0x57554b = null) {
            super(), this['_value'] = 0.5, this['skin'] = _0x57554b;
        }
        ['destroy'](_0x1e6550 = !0x0) {
            super['destroy'](_0x1e6550), this['_bg'] && this['_bg']['destroy'](_0x1e6550), this['_bar'] && this['_bar']['destroy'](_0x1e6550), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_bg'] = new _0x68d04b()), this['addChild'](this['_bar'] = new _0x68d04b()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x11a442) {
            this['_skin'] != _0x11a442 && (this['_skin'] = _0x11a442, this['_skin'] && !_0x579e6a['Loader']['getRes'](this['_skin']) ? _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x579e6a['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
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
        set ['value'](_0x3c4313) {
            this['_value'] != _0x3c4313 && (_0x3c4313 = _0x3c4313 > 0x1 ? 0x1 : _0x3c4313 < 0x0 ? 0x0 : _0x3c4313, this['_value'] = _0x3c4313, this['callLater'](this['changeValu' + 'e']), this['event'](_0x579e6a['Event']['CHANGE']), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x3c4313));
        }
        ['changeValu' + 'e']() {
            if (this['sizeGrid']) {
                var _0x36f5dd = this['sizeGrid']['split'](','), _0x2db170 = Number(_0x36f5dd[0x3]), _0x3dfdc2 = Number(_0x36f5dd[0x1]), _0xdedeb7 = (this['width'] - _0x2db170 - _0x3dfdc2) * this['_value'];
                this['_bar']['width'] = _0x2db170 + _0x3dfdc2 + _0xdedeb7, this['_bar']['visible'] = this['_bar']['width'] > _0x2db170 + _0x3dfdc2;
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
        set ['sizeGrid'](_0x4a358b) {
            this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x4a358b;
        }
        set ['width'](_0x2a6bc2) {
            super['width'] = _0x2a6bc2, this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x7f2a7a) {
            super['height'] = _0x7f2a7a, this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
        }
        get ['height']() {
            return super['height'];
        }
        set ['dataSource'](_0x6e483f) {
            this['_dataSourc' + 'e'] = _0x6e483f, 'number' == typeof _0x6e483f || 'string' == typeof _0x6e483f ? this['value'] = Number(_0x6e483f) : super['dataSource'] = _0x6e483f;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x3f3b10), _0x579e6a['ClassUtils']['regClass']('laya.ui.Pr' + 'ogressBar', _0x3f3b10), _0x579e6a['ClassUtils']['regClass']('Laya.Progr' + 'essBar', _0x3f3b10);
    class _0x40da37 extends _0x32f31e {
        constructor(_0x127059 = null, _0x8cbb08 = '') {
            super(_0x127059, _0x8cbb08), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['destroy'](_0x36d421 = !0x0) {
            super['destroy'](_0x36d421), this['_value'] = null;
        }
        ['preinitial' + 'ize']() {
            super['preinitial' + 'ize'](), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
        }
        ['initialize']() {
            super['initialize'](), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on'](_0x579e6a['Event']['CLICK'], this, this['onClick']);
        }
        ['onClick'](_0xfc666f) {
            this['selected'] = !0x0;
        }
        get ['value']() {
            return null != this['_value'] ? this['_value'] : this['label'];
        }
        set ['value'](_0x19cd65) {
            this['_value'] = _0x19cd65;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x40da37), _0x579e6a['ClassUtils']['regClass']('laya.ui.Ra' + 'dio', _0x40da37), _0x579e6a['ClassUtils']['regClass']('Laya.Radio', _0x40da37);
    class _0x32cad2 extends _0x4aa05f {
        constructor(_0x5e46d4 = null, _0x458d4c = null) {
            super(), this['_selectedI' + 'ndex'] = -0x1, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['skin'] = _0x458d4c, this['labels'] = _0x5e46d4;
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x292b87 = !0x0) {
            super['destroy'](_0x292b87), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
        }
        ['addItem'](_0x23e21c, _0x4d309a = !0x0) {
            var _0x546d84 = _0x23e21c, _0x15c9b0 = this['_items']['length'];
            if (_0x546d84['name'] = 'item' + _0x15c9b0, this['addChild'](_0x546d84), this['initItems'](), _0x4d309a && _0x15c9b0 > 0x0) {
                var _0x3494f8 = this['_items'][_0x15c9b0 - 0x1];
                'horizontal' == this['_direction'] ? _0x546d84['x'] = _0x3494f8['_x'] + _0x3494f8['width'] + this['_space'] : _0x546d84['y'] = _0x3494f8['_y'] + _0x3494f8['height'] + this['_space'];
            } else
                _0x4d309a && (_0x546d84['x'] = 0x0, _0x546d84['y'] = 0x0);
            return _0x15c9b0;
        }
        ['delItem'](_0x498d26, _0x5e5f27 = !0x0) {
            var _0x180159 = this['_items']['indexOf'](_0x498d26);
            if (-0x1 != _0x180159) {
                var _0x4ffa56, _0xdc1294 = _0x498d26;
                this['removeChil' + 'd'](_0xdc1294);
                for (var _0x598e4f = _0x180159 + 0x1, _0x3f89a6 = this['_items']['length']; _0x598e4f < _0x3f89a6; _0x598e4f++) {
                    var _0x2cb9bd = this['_items'][_0x598e4f];
                    _0x2cb9bd['name'] = 'item' + (_0x598e4f - 0x1), _0x5e5f27 && ('horizontal' == this['_direction'] ? _0x2cb9bd['x'] -= _0xdc1294['width'] + this['_space'] : _0x2cb9bd['y'] -= _0xdc1294['height'] + this['_space']);
                }
                if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1)
                    _0x4ffa56 = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x4ffa56;
            }
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
            for (var _0xe51899 = 0x0; _0xe51899 < 0x2710; _0xe51899++) {
                var _0x130397 = this['getChildBy' + 'Name']('item' + _0xe51899);
                if (null == _0x130397)
                    break;
                this['_items']['push'](_0x130397), _0x130397['selected'] = _0xe51899 === this['_selectedI' + 'ndex'], _0x130397['clickHandl' + 'er'] = _0x579e6a['Handler']['create'](this, this['itemClick'], [_0xe51899], !0x1);
            }
        }
        ['itemClick'](_0x35f650) {
            this['selectedIn' + 'dex'] = _0x35f650;
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x567b24) {
            this['_selectedI' + 'ndex'] != _0x567b24 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x567b24, this['setSelect'](_0x567b24, !0x0), this['event'](_0x579e6a['Event']['CHANGE']), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
        }
        ['setSelect'](_0x3ede9e, _0x2fcbb4) {
            this['_items'] && _0x3ede9e > -0x1 && _0x3ede9e < this['_items']['length'] && (this['_items'][_0x3ede9e]['selected'] = _0x2fcbb4);
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x391687) {
            this['_skin'] != _0x391687 && (this['_skin'] = _0x391687, this['_skin'] && !_0x579e6a['Loader']['getRes'](this['_skin']) ? _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x579e6a['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_setLabelC' + 'hanged'](), this['event'](_0x579e6a['Event']['LOADED']);
        }
        get ['labels']() {
            return this['_labels'];
        }
        set ['labels'](_0x45f3b0) {
            if (this['_labels'] != _0x45f3b0) {
                if (this['_labels'] = _0x45f3b0, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                    for (var _0x4eb113 = this['_labels']['split'](','), _0xe3c42b = 0x0, _0x3010ca = _0x4eb113['length']; _0xe3c42b < _0x3010ca; _0xe3c42b++) {
                        var _0x123407 = this['createItem'](this['_skin'], _0x4eb113[_0xe3c42b]);
                        _0x123407['name'] = 'item' + _0xe3c42b, this['addChild'](_0x123407);
                    }
                this['initItems']();
            }
        }
        ['createItem'](_0x2513f4, _0x1fa44d) {
            return null;
        }
        get ['labelColor' + 's']() {
            return this['_labelColo' + 'rs'];
        }
        set ['labelColor' + 's'](_0x8caa1a) {
            this['_labelColo' + 'rs'] != _0x8caa1a && (this['_labelColo' + 'rs'] = _0x8caa1a, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'e']() {
            return this['_labelStro' + 'ke'];
        }
        set ['labelStrok' + 'e'](_0x5b9ed3) {
            this['_labelStro' + 'ke'] != _0x5b9ed3 && (this['_labelStro' + 'ke'] = _0x5b9ed3, this['_setLabelC' + 'hanged']());
        }
        get ['labelStrok' + 'eColor']() {
            return this['_labelStro' + 'keColor'];
        }
        set ['labelStrok' + 'eColor'](_0x6bc753) {
            this['_labelStro' + 'keColor'] != _0x6bc753 && (this['_labelStro' + 'keColor'] = _0x6bc753, this['_setLabelC' + 'hanged']());
        }
        get ['strokeColo' + 'rs']() {
            return this['_strokeCol' + 'ors'];
        }
        set ['strokeColo' + 'rs'](_0x1b6dbd) {
            this['_strokeCol' + 'ors'] != _0x1b6dbd && (this['_strokeCol' + 'ors'] = _0x1b6dbd, this['_setLabelC' + 'hanged']());
        }
        get ['labelSize']() {
            return this['_labelSize'];
        }
        set ['labelSize'](_0x4dcf4c) {
            this['_labelSize'] != _0x4dcf4c && (this['_labelSize'] = _0x4dcf4c, this['_setLabelC' + 'hanged']());
        }
        get ['stateNum']() {
            return this['_stateNum'];
        }
        set ['stateNum'](_0x119ad5) {
            this['_stateNum'] != _0x119ad5 && (this['_stateNum'] = _0x119ad5, this['_setLabelC' + 'hanged']());
        }
        get ['labelBold']() {
            return this['_labelBold'];
        }
        set ['labelBold'](_0x2f8ea0) {
            this['_labelBold'] != _0x2f8ea0 && (this['_labelBold'] = _0x2f8ea0, this['_setLabelC' + 'hanged']());
        }
        get ['labelFont']() {
            return this['_labelFont'];
        }
        set ['labelFont'](_0x546b4b) {
            this['_labelFont'] != _0x546b4b && (this['_labelFont'] = _0x546b4b, this['_setLabelC' + 'hanged']());
        }
        get ['labelPaddi' + 'ng']() {
            return this['_labelPadd' + 'ing'];
        }
        set ['labelPaddi' + 'ng'](_0x21710f) {
            this['_labelPadd' + 'ing'] != _0x21710f && (this['_labelPadd' + 'ing'] = _0x21710f, this['_setLabelC' + 'hanged']());
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x17006b) {
            this['_direction'] = _0x17006b, this['_setLabelC' + 'hanged']();
        }
        get ['space']() {
            return this['_space'];
        }
        set ['space'](_0x4fd7ae) {
            this['_space'] = _0x4fd7ae, this['_setLabelC' + 'hanged']();
        }
        ['changeLabe' + 'ls']() {
            if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                for (var _0x33c499 = 0x0, _0x3c9cd2 = 0x0, _0x3661b9 = this['_items']['length']; _0x3c9cd2 < _0x3661b9; _0x3c9cd2++) {
                    var _0x43be20 = this['_items'][_0x3c9cd2];
                    this['_skin'] && (_0x43be20['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x43be20['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x43be20['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x43be20['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x43be20['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x43be20['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x43be20['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x43be20['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x43be20['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x43be20['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x43be20['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x43be20['y'] = 0x0, _0x43be20['x'] = _0x33c499, _0x33c499 += _0x43be20['width'] + this['_space']) : (_0x43be20['x'] = 0x0, _0x43be20['y'] = _0x33c499, _0x33c499 += _0x43be20['height'] + this['_space']);
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
        set ['selection'](_0x442c9b) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x442c9b);
        }
        set ['dataSource'](_0x2fed45) {
            this['_dataSourc' + 'e'] = _0x2fed45, 'number' == typeof _0x2fed45 || 'string' == typeof _0x2fed45 ? this['selectedIn' + 'dex'] = parseInt(_0x2fed45) : _0x2fed45 instanceof Array ? this['labels'] = _0x2fed45['join'](',') : super['dataSource'] = _0x2fed45;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        ['_setLabelC' + 'hanged']() {
            this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x32cad2), _0x579e6a['ClassUtils']['regClass']('laya.ui.UI' + 'Group', _0x32cad2), _0x579e6a['ClassUtils']['regClass']('Laya.UIGro' + 'up', _0x32cad2);
    class _0x358826 extends _0x32cad2 {
        ['createItem'](_0x57b32b, _0x57e274) {
            return new _0x40da37(_0x57b32b, _0x57e274);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x358826), _0x579e6a['ClassUtils']['regClass']('laya.ui.Ra' + 'dioGroup', _0x358826), _0x579e6a['ClassUtils']['regClass']('Laya.Radio' + 'Group', _0x358826);
    class _0x7d9ba4 extends _0x32cad2 {
        ['createItem'](_0x307682, _0x480f86) {
            return new _0x32f31e(_0x307682, _0x480f86);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x7d9ba4), _0x579e6a['ClassUtils']['regClass']('laya.ui.Ta' + 'b', _0x7d9ba4), _0x579e6a['ClassUtils']['regClass']('Laya.Tab', _0x7d9ba4);
    class _0x4be30c extends _0x4aa05f {
        constructor() {
            super(...arguments), this['_setIndexH' + 'andler'] = _0x579e6a['Handler']['create'](this, this['setIndex'], null, !0x1);
        }
        ['setItems'](_0x59eba5) {
            this['removeChil' + 'dren']();
            for (var _0x1df2f0 = 0x0, _0x2e18e2 = 0x0, _0x3db5b9 = _0x59eba5['length']; _0x2e18e2 < _0x3db5b9; _0x2e18e2++) {
                var _0x3bf28c = _0x59eba5[_0x2e18e2];
                _0x3bf28c && (_0x3bf28c['name'] = 'item' + _0x1df2f0, this['addChild'](_0x3bf28c), _0x1df2f0++);
            }
            this['initItems']();
        }
        ['addItem'](_0x44ba3f) {
            _0x44ba3f['name'] = 'item' + this['_items']['length'], this['addChild'](_0x44ba3f), this['initItems']();
        }
        ['_afterInit' + 'ed']() {
            this['initItems']();
        }
        ['initItems']() {
            this['_items'] = [];
            for (var _0x59828d = 0x0; _0x59828d < 0x2710; _0x59828d++) {
                var _0x1da08d = this['getChildBy' + 'Name']('item' + _0x59828d);
                if (null == _0x1da08d)
                    break;
                this['_items']['push'](_0x1da08d), _0x1da08d['visible'] = _0x59828d == this['_selectedI' + 'ndex'];
            }
        }
        get ['selectedIn' + 'dex']() {
            return this['_selectedI' + 'ndex'];
        }
        set ['selectedIn' + 'dex'](_0x4d9bf2) {
            this['_selectedI' + 'ndex'] != _0x4d9bf2 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x4d9bf2, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
        }
        ['setSelect'](_0x5359eb, _0x5f50f1) {
            this['_items'] && _0x5359eb > -0x1 && _0x5359eb < this['_items']['length'] && (this['_items'][_0x5359eb]['visible'] = _0x5f50f1);
        }
        get ['selection']() {
            return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
        }
        set ['selection'](_0x30e697) {
            this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x30e697);
        }
        get ['setIndexHa' + 'ndler']() {
            return this['_setIndexH' + 'andler'];
        }
        set ['setIndexHa' + 'ndler'](_0x13ee25) {
            this['_setIndexH' + 'andler'] = _0x13ee25;
        }
        ['setIndex'](_0x8006d5) {
            this['selectedIn' + 'dex'] = _0x8006d5;
        }
        get ['items']() {
            return this['_items'];
        }
        set ['dataSource'](_0x96f192) {
            if (this['_dataSourc' + 'e'] = _0x96f192, 'number' == typeof _0x96f192 || 'string' == typeof _0x96f192)
                this['selectedIn' + 'dex'] = parseInt(_0x96f192);
            else {
                for (var _0xe675f2 in this['_dataSourc' + 'e'])
                    _0xe675f2 in this && (this[_0xe675f2] = this['_dataSourc' + 'e'][_0xe675f2]);
            }
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x4be30c), _0x579e6a['ClassUtils']['regClass']('laya.ui.Vi' + 'ewStack', _0x4be30c), _0x579e6a['ClassUtils']['regClass']('Laya.ViewS' + 'tack', _0x4be30c);
    class _0x3a3e48 extends _0x1678c1 {
        constructor(_0x5dd05c = '') {
            super(), this['text'] = _0x5dd05c, this['skin'] = this['skin'];
        }
        ['preinitial' + 'ize']() {
            this['mouseEnabl' + 'ed'] = !0x0;
        }
        ['destroy'](_0x25e35f = !0x0) {
            super['destroy'](_0x25e35f), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_tf'] = new _0x579e6a['Input']()), this['_tf']['padding'] = _0x1016b0['inputLabel' + 'Padding'], this['_tf']['on'](_0x579e6a['Event']['INPUT'], this, this['_onInput']), this['_tf']['on'](_0x579e6a['Event']['ENTER'], this, this['_onEnter']), this['_tf']['on'](_0x579e6a['Event']['BLUR'], this, this['_onBlur']), this['_tf']['on'](_0x579e6a['Event']['FOCUS'], this, this['_onFocus']);
        }
        ['_onFocus']() {
            this['event'](_0x579e6a['Event']['FOCUS'], this);
        }
        ['_onBlur']() {
            this['event'](_0x579e6a['Event']['BLUR'], this);
        }
        ['_onInput']() {
            this['event'](_0x579e6a['Event']['INPUT'], this);
        }
        ['_onEnter']() {
            this['event'](_0x579e6a['Event']['ENTER'], this);
        }
        ['initialize']() {
            this['width'] = 0x80, this['height'] = 0x16;
        }
        get ['bg']() {
            return this['_bg'];
        }
        set ['bg'](_0x23c8de) {
            this['graphics'] = this['_bg'] = _0x23c8de;
        }
        get ['skin']() {
            return this['_skin'];
        }
        set ['skin'](_0x14935c) {
            this['_skin'] != _0x14935c && (this['_skin'] = _0x14935c, this['_skin'] && !_0x579e6a['Loader']['getRes'](this['_skin']) ? _0x579e6a['ILaya']['loader']['load'](this['_skin'], _0x579e6a['Handler']['create'](this, this['_skinLoade' + 'd']), null, _0x579e6a['Loader']['IMAGE'], 0x1) : this['_skinLoade' + 'd']());
        }
        ['_skinLoade' + 'd']() {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x218db5()), this['_bg']['source'] = _0x579e6a['Loader']['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event'](_0x579e6a['Event']['LOADED']);
        }
        get ['sizeGrid']() {
            return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
        }
        set ['sizeGrid'](_0x5c9164) {
            this['_bg'] || (this['graphics'] = this['_bg'] = new _0x218db5()), this['_bg']['sizeGrid'] = _0x42ba36['fillArray'](_0x1016b0['defaultSiz' + 'eGrid'], _0x5c9164, Number);
        }
        set ['text'](_0x595152) {
            this['_tf']['text'] != _0x595152 && (_0x595152 += '', this['_tf']['text'] = _0x595152, this['event'](_0x579e6a['Event']['CHANGE']));
        }
        get ['text']() {
            return super['text'];
        }
        set ['width'](_0xe73f06) {
            super['width'] = _0xe73f06, this['_bg'] && (this['_bg']['width'] = _0xe73f06);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x588733) {
            super['height'] = _0x588733, this['_bg'] && (this['_bg']['height'] = _0x588733);
        }
        get ['height']() {
            return super['height'];
        }
        get ['multiline']() {
            return this['_tf']['multiline'];
        }
        set ['multiline'](_0x2c82ef) {
            this['_tf']['multiline'] = _0x2c82ef;
        }
        set ['editable'](_0x50d26d) {
            this['_tf']['editable'] = _0x50d26d;
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
        set ['restrict'](_0x27ee8e) {
            this['_tf']['restrict'] = _0x27ee8e;
        }
        get ['prompt']() {
            return this['_tf']['prompt'];
        }
        set ['prompt'](_0x2b9d39) {
            this['_tf']['prompt'] = _0x2b9d39;
        }
        get ['promptColo' + 'r']() {
            return this['_tf']['promptColo' + 'r'];
        }
        set ['promptColo' + 'r'](_0x6f10c4) {
            this['_tf']['promptColo' + 'r'] = _0x6f10c4;
        }
        get ['maxChars']() {
            return this['_tf']['maxChars'];
        }
        set ['maxChars'](_0x8b2531) {
            this['_tf']['maxChars'] = _0x8b2531;
        }
        get ['focus']() {
            return this['_tf']['focus'];
        }
        set ['focus'](_0x1a922c) {
            this['_tf']['focus'] = _0x1a922c;
        }
        get ['type']() {
            return this['_tf']['type'];
        }
        set ['type'](_0xa99d6f) {
            this['_tf']['type'] = _0xa99d6f;
        }
        ['setSelecti' + 'on'](_0x4b9b00, _0x3fd6c1) {
            this['_tf']['setSelecti' + 'on'](_0x4b9b00, _0x3fd6c1);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x3a3e48), _0x579e6a['ClassUtils']['regClass']('laya.ui.Te' + 'xtInput', _0x3a3e48), _0x579e6a['ClassUtils']['regClass']('Laya.TextI' + 'nput', _0x3a3e48);
    class _0x1c2af7 extends _0x3a3e48 {
        constructor(_0x1881f1 = '') {
            super(_0x1881f1), this['on'](_0x579e6a['Event']['CHANGE'], this, this['_onTextCha' + 'nge']);
        }
        ['_onTextCha' + 'nge']() {
            this['callLater'](this['changeScro' + 'll']);
        }
        ['destroy'](_0x1bafda = !0x0) {
            this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, super['destroy'](_0x1bafda);
        }
        ['initialize']() {
            this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
        }
        set ['width'](_0x54519a) {
            super['width'] = _0x54519a, this['callLater'](this['changeScro' + 'll']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x2cf55d) {
            super['height'] = _0x2cf55d, this['callLater'](this['changeScro' + 'll']);
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x5dda44) {
            null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x161ed5()), this['_vScrollBa' + 'r']['on'](_0x579e6a['Event']['CHANGE'], this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x5dda44;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x5731e1) {
            null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x6cf261()), this['_hScrollBa' + 'r']['on'](_0x579e6a['Event']['CHANGE'], this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x5731e1;
        }
        ['onVBarChan' + 'ged'](_0x7f649f) {
            this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
        }
        ['onHBarChan' + 'ged'](_0x34e6e0) {
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
            var _0x45e33e = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x349894 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x19b58c = _0x45e33e ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x42b7c2 = _0x349894 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x45fa66 = this['_tf']['padding'] || _0x1016b0['labelPaddi' + 'ng'];
            this['_tf']['width'] = _0x19b58c, this['_tf']['height'] = _0x42b7c2, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x45fa66[0x2], this['_vScrollBa' + 'r']['y'] = _0x45fa66[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x349894 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x45fa66[0x1] - _0x45fa66[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x42b7c2 / Math['max'](this['_tf']['textHeight'], _0x42b7c2), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x45e33e), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x45fa66[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x45fa66[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x45e33e ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x45fa66[0x0] - _0x45fa66[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x19b58c, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x19b58c / Math['max'](this['_tf']['textWidth'], _0x19b58c), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x349894);
        }
        ['scrollTo'](_0x39ced2) {
            this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x39ced2;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x1c2af7), _0x579e6a['ClassUtils']['regClass']('laya.ui.Te' + 'xtArea', _0x1c2af7), _0x579e6a['ClassUtils']['regClass']('Laya.TextA' + 'rea', _0x1c2af7);
    class _0x4779ef extends _0x4aa05f {
        constructor() {
            super(...arguments), this['_oldW'] = 0x0, this['_oldH'] = 0x0;
        }
        ['onEnable']() {
            _0x579e6a['ILaya']['stage']['on']('resize', this, this['onResize']), this['onResize']();
        }
        ['onDisable']() {
            _0x579e6a['ILaya']['stage']['off']('resize', this, this['onResize']);
        }
        ['onResize']() {
            let _0x32487b = _0x579e6a['ILaya']['stage'];
            if (this['width'] > 0x0 && this['height'] > 0x0) {
                var _0x3fa78c = Math['min'](_0x32487b['width'] / this['_oldW'], _0x32487b['height'] / this['_oldH']);
                super['width'] = _0x32487b['width'], super['height'] = _0x32487b['height'], this['scale'](_0x3fa78c, _0x3fa78c);
            }
        }
        set ['width'](_0x3dc5f5) {
            super['width'] = _0x3dc5f5, this['_oldW'] = _0x3dc5f5;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x32a7c2) {
            super['height'] = _0x32a7c2, this['_oldH'] = _0x32a7c2;
        }
        get ['height']() {
            return super['height'];
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x4779ef), _0x579e6a['ClassUtils']['regClass']('laya.ui.Sc' + 'aleBox', _0x4779ef), _0x579e6a['ClassUtils']['regClass']('Laya.Scale' + 'Box', _0x4779ef);
    class _0x273abf extends _0x487f67 {
        constructor(_0x381746 = null) {
            super(_0x381746), this['isVertical'] = !0x1;
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x273abf), _0x579e6a['ClassUtils']['regClass']('laya.ui.HS' + 'lider', _0x273abf), _0x579e6a['ClassUtils']['regClass']('Laya.HSlid' + 'er', _0x273abf);
    class _0x11d34c extends _0x4aa05f {
        constructor() {
            super(), this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['width'] = this['height'] = 0x64;
        }
        ['destroy'](_0x3eadc6 = !0x0) {
            super['destroy'](_0x3eadc6), this['_content'] && this['_content']['destroy'](_0x3eadc6), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x3eadc6), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x3eadc6), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
        }
        ['destroyChi' + 'ldren']() {
            this['_content']['destroyChi' + 'ldren']();
        }
        ['createChil' + 'dren']() {
            super['addChild'](this['_content'] = new _0x4aa05f());
        }
        ['addChild'](_0x502a02) {
            return _0x502a02['on'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x502a02);
        }
        ['onResize']() {
            this['_setScroll' + 'Changed']();
        }
        ['addChildAt'](_0x3f0692, _0x13a83b) {
            return _0x3f0692['on'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x3f0692, _0x13a83b);
        }
        ['removeChil' + 'd'](_0x3ed788) {
            return _0x3ed788['off'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x3ed788);
        }
        ['removeChil' + 'dAt'](_0x19ffd3) {
            return this['getChildAt'](_0x19ffd3)['off'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x19ffd3);
        }
        ['removeChil' + 'dren'](_0x2ef749 = 0x0, _0x47322a = 0x7fffffff) {
            return this['_content']['removeChil' + 'dren'](_0x2ef749, _0x47322a), this['_setScroll' + 'Changed'](), this;
        }
        ['getChildAt'](_0x4fb320) {
            return this['_content']['getChildAt'](_0x4fb320);
        }
        ['getChildBy' + 'Name'](_0xb56cc9) {
            return this['_content']['getChildBy' + 'Name'](_0xb56cc9);
        }
        ['getChildIn' + 'dex'](_0x38a878) {
            return this['_content']['getChildIn' + 'dex'](_0x38a878);
        }
        get ['numChildre' + 'n']() {
            return this['_content']['numChildre' + 'n'];
        }
        ['changeScro' + 'll']() {
            this['_scrollCha' + 'nged'] = !0x1;
            var _0x27f29b = this['contentWid' + 'th'] || 0x1, _0x2d25b2 = this['contentHei' + 'ght'] || 0x1, _0x5d644a = this['_vScrollBa' + 'r'], _0x427862 = this['_hScrollBa' + 'r'], _0x4db6da = _0x5d644a && _0x2d25b2 > this['_height'], _0x35f493 = _0x427862 && _0x27f29b > this['_width'], _0x29d108 = _0x4db6da ? this['_width'] - _0x5d644a['width'] : this['_width'], _0xf61d34 = _0x35f493 ? this['_height'] - _0x427862['height'] : this['_height'];
            _0x5d644a && (_0x5d644a['x'] = this['_width'] - _0x5d644a['width'], _0x5d644a['y'] = 0x0, _0x5d644a['height'] = this['_height'] - (_0x35f493 ? _0x427862['height'] : 0x0), _0x5d644a['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x5d644a['thumbPerce' + 'nt'] = _0xf61d34 / _0x2d25b2, _0x5d644a['setScroll'](0x0, _0x2d25b2 - _0xf61d34, _0x5d644a['value'])), _0x427862 && (_0x427862['x'] = 0x0, _0x427862['y'] = this['_height'] - _0x427862['height'], _0x427862['width'] = this['_width'] - (_0x4db6da ? _0x5d644a['width'] : 0x0), _0x427862['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x427862['thumbPerce' + 'nt'] = _0x29d108 / _0x27f29b, _0x427862['setScroll'](0x0, _0x27f29b - _0x29d108, _0x427862['value']));
        }
        ['_sizeChang' + 'ed']() {
            super['_sizeChang' + 'ed'](), this['setContent' + 'Size'](this['_width'], this['_height']);
        }
        get ['contentWid' + 'th']() {
            for (var _0x1a50ac = 0x0, _0x30ffa9 = this['_content']['numChildre' + 'n'] - 0x1; _0x30ffa9 > -0x1; _0x30ffa9--) {
                var _0x4dab24 = this['_content']['getChildAt'](_0x30ffa9);
                _0x1a50ac = Math['max'](_0x4dab24['_x'] + _0x4dab24['width'] * _0x4dab24['scaleX'] - _0x4dab24['pivotX'], _0x1a50ac);
            }
            return _0x1a50ac;
        }
        get ['contentHei' + 'ght']() {
            for (var _0xa3bba9 = 0x0, _0x46f5fe = this['_content']['numChildre' + 'n'] - 0x1; _0x46f5fe > -0x1; _0x46f5fe--) {
                var _0x18eda4 = this['_content']['getChildAt'](_0x46f5fe);
                _0xa3bba9 = Math['max'](_0x18eda4['_y'] + _0x18eda4['height'] * _0x18eda4['scaleY'] - _0x18eda4['pivotY'], _0xa3bba9);
            }
            return _0xa3bba9;
        }
        ['setContent' + 'Size'](_0x3177c4, _0x5ca2ba) {
            var _0x5c7e6f = this['_content'];
            _0x5c7e6f['width'] = _0x3177c4, _0x5c7e6f['height'] = _0x5ca2ba, _0x5c7e6f['_style']['scrollRect'] || (_0x5c7e6f['scrollRect'] = _0x579e6a['Rectangle']['create']()), _0x5c7e6f['_style']['scrollRect']['setTo'](0x0, 0x0, _0x3177c4, _0x5ca2ba), _0x5c7e6f['scrollRect'] = _0x5c7e6f['scrollRect'];
        }
        set ['width'](_0x36bdea) {
            super['width'] = _0x36bdea, this['_setScroll' + 'Changed']();
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x45c8f7) {
            super['height'] = _0x45c8f7, this['_setScroll' + 'Changed']();
        }
        get ['height']() {
            return super['height'];
        }
        get ['vScrollBar' + 'Skin']() {
            return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
        }
        set ['vScrollBar' + 'Skin'](_0x4ff968) {
            null == this['_vScrollBa' + 'r'] && (super['addChild'](this['_vScrollBa' + 'r'] = new _0x161ed5()), this['_vScrollBa' + 'r']['on'](_0x579e6a['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x4ff968;
        }
        get ['hScrollBar' + 'Skin']() {
            return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
        }
        set ['hScrollBar' + 'Skin'](_0x497448) {
            null == this['_hScrollBa' + 'r'] && (super['addChild'](this['_hScrollBa' + 'r'] = new _0x6cf261()), this['_hScrollBa' + 'r']['on'](_0x579e6a['Event']['CHANGE'], this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x497448;
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
        ['onScrollBa' + 'rChange'](_0x29431b) {
            var _0x26c107 = this['_content']['_style']['scrollRect'];
            if (_0x26c107) {
                var _0x4de191 = Math['round'](_0x29431b['value']);
                _0x29431b['isVertical'] ? _0x26c107['y'] = _0x4de191 : _0x26c107['x'] = _0x4de191, this['_content']['scrollRect'] = _0x26c107;
            }
        }
        ['scrollTo'](_0x4fe175 = 0x0, _0x351cfe = 0x0) {
            this['vScrollBar'] && (this['vScrollBar']['value'] = _0x351cfe), this['hScrollBar'] && (this['hScrollBar']['value'] = _0x4fe175);
        }
        ['refresh']() {
            this['changeScro' + 'll']();
        }
        set ['cacheAs'](_0xe74627) {
            super['cacheAs'] = _0xe74627, this['_usedCache'] = null, 'none' !== _0xe74627 ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off'](_0x579e6a['Event']['START'], this, this['onScrollSt' + 'art']));
        }
        get ['cacheAs']() {
            return super['cacheAs'];
        }
        get ['elasticEna' + 'bled']() {
            return this['_elasticEn' + 'abled'];
        }
        set ['elasticEna' + 'bled'](_0x4d7e75) {
            this['_elasticEn' + 'abled'] = _0x4d7e75, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x4d7e75 ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x4d7e75 ? 0xc8 : 0x0);
        }
        ['onScrollSt' + 'art']() {
            this['_usedCache'] || (this['_usedCache'] = super['cacheAs']), super['cacheAs'] = 'none', this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once'](_0x579e6a['Event']['END'], this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once'](_0x579e6a['Event']['END'], this, this['onScrollEn' + 'd']);
        }
        ['onScrollEn' + 'd']() {
            super['cacheAs'] = this['_usedCache'];
        }
        ['_setScroll' + 'Changed']() {
            this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x11d34c), _0x579e6a['ClassUtils']['regClass']('laya.ui.Pa' + 'nel', _0x11d34c), _0x579e6a['ClassUtils']['regClass']('Laya.Panel', _0x11d34c);
    class _0x38c658 extends _0x487f67 {
    }
    _0x579e6a['ILaya']['regClass'](_0x38c658), _0x579e6a['ClassUtils']['regClass']('laya.ui.VS' + 'lider', _0x38c658), _0x579e6a['ClassUtils']['regClass']('Laya.VSlid' + 'er', _0x38c658);
    class _0x38b261 extends _0x4aa05f {
        constructor() {
            super(), this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, this['width'] = this['height'] = 0xc8;
        }
        ['destroy'](_0x254b59 = !0x0) {
            super['destroy'](_0x254b59), this['_list'] && this['_list']['destroy'](_0x254b59), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
        }
        ['createChil' + 'dren']() {
            this['addChild'](this['_list'] = new _0x387393()), this['_list']['renderHand' + 'ler'] = _0x579e6a['Handler']['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on'](_0x579e6a['Event']['CHANGE'], this, this['onListChan' + 'ge']);
        }
        ['onListChan' + 'ge'](_0x299a07 = null) {
            this['event'](_0x579e6a['Event']['CHANGE']);
        }
        get ['keepStatus']() {
            return this['_keepStatu' + 's'];
        }
        set ['keepStatus'](_0x3bc6f1) {
            this['_keepStatu' + 's'] = _0x3bc6f1;
        }
        get ['array']() {
            return this['_list']['array'];
        }
        set ['array'](_0x2848b4) {
            this['_keepStatu' + 's'] && this['_list']['array'] && _0x2848b4 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x2848b4), this['_source'] = _0x2848b4, this['_list']['array'] = this['getArray']();
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
        set ['itemRender'](_0x1423c7) {
            this['_list']['itemRender'] = _0x1423c7;
        }
        get ['scrollBarS' + 'kin']() {
            return this['_list']['vScrollBar' + 'Skin'];
        }
        set ['scrollBarS' + 'kin'](_0x1d6be7) {
            this['_list']['vScrollBar' + 'Skin'] = _0x1d6be7;
        }
        get ['scrollBar']() {
            return this['_list']['scrollBar'];
        }
        get ['mouseHandl' + 'er']() {
            return this['_list']['mouseHandl' + 'er'];
        }
        set ['mouseHandl' + 'er'](_0x4a8a36) {
            this['_list']['mouseHandl' + 'er'] = _0x4a8a36;
        }
        get ['renderHand' + 'ler']() {
            return this['_renderHan' + 'dler'];
        }
        set ['renderHand' + 'ler'](_0x474b3e) {
            this['_renderHan' + 'dler'] = _0x474b3e;
        }
        get ['spaceLeft']() {
            return this['_spaceLeft'];
        }
        set ['spaceLeft'](_0xae54e4) {
            this['_spaceLeft'] = _0xae54e4;
        }
        get ['spaceBotto' + 'm']() {
            return this['_list']['spaceY'];
        }
        set ['spaceBotto' + 'm'](_0x52e0b8) {
            this['_list']['spaceY'] = _0x52e0b8;
        }
        get ['selectedIn' + 'dex']() {
            return this['_list']['selectedIn' + 'dex'];
        }
        set ['selectedIn' + 'dex'](_0xb9859a) {
            this['_list']['selectedIn' + 'dex'] = _0xb9859a;
        }
        get ['selectedIt' + 'em']() {
            return this['_list']['selectedIt' + 'em'];
        }
        set ['selectedIt' + 'em'](_0x1b8bd8) {
            this['_list']['selectedIt' + 'em'] = _0x1b8bd8;
        }
        set ['width'](_0x3f43fb) {
            super['width'] = _0x3f43fb, this['_list']['width'] = _0x3f43fb;
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x34b3dd) {
            super['height'] = _0x34b3dd, this['_list']['height'] = _0x34b3dd;
        }
        get ['height']() {
            return super['height'];
        }
        ['getArray']() {
            var _0x5df94d = [];
            for (let _0x495143 in this['_source']) {
                let _0x15ba94 = this['_source'][_0x495143];
                this['getParentO' + 'penStatus'](_0x15ba94) && (_0x15ba94['x'] = this['_spaceLeft'] * this['getDepth'](_0x15ba94), _0x5df94d['push'](_0x15ba94));
            }
            return _0x5df94d;
        }
        ['getDepth'](_0x4dbe82, _0x72d854 = 0x0) {
            return null == _0x4dbe82['nodeParent'] ? _0x72d854 : this['getDepth'](_0x4dbe82['nodeParent'], _0x72d854 + 0x1);
        }
        ['getParentO' + 'penStatus'](_0x513b0e) {
            var _0x493322 = _0x513b0e['nodeParent'];
            return null == _0x493322 || !!_0x493322['isOpen'] && (null == _0x493322['nodeParent'] || this['getParentO' + 'penStatus'](_0x493322));
        }
        ['renderItem'](_0x2403a8, _0x2e92c2) {
            var _0x32400c = _0x2403a8['dataSource'];
            if (_0x32400c) {
                _0x2403a8['left'] = _0x32400c['x'];
                var _0x35499d = _0x2403a8['getChildBy' + 'Name']('arrow');
                _0x35499d && (_0x32400c['hasChild'] ? (_0x35499d['visible'] = !0x0, _0x35499d['index'] = _0x32400c['isOpen'] ? 0x1 : 0x0, _0x35499d['tag'] = _0x2e92c2, _0x35499d['off'](_0x579e6a['Event']['CLICK'], this, this['onArrowCli' + 'ck']), _0x35499d['on'](_0x579e6a['Event']['CLICK'], this, this['onArrowCli' + 'ck'])) : _0x35499d['visible'] = !0x1);
                var _0x1d2405 = _0x2403a8['getChildBy' + 'Name']('folder');
                _0x1d2405 && (0x2 == _0x1d2405['clipY'] ? _0x1d2405['index'] = _0x32400c['isDirector' + 'y'] ? 0x0 : 0x1 : _0x1d2405['index'] = _0x32400c['isDirector' + 'y'] ? _0x32400c['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                    _0x2403a8,
                    _0x2e92c2
                ]);
            }
        }
        ['onArrowCli' + 'ck'](_0x232284) {
            var _0x18f3e5 = _0x232284['currentTar' + 'get']['tag'];
            this['_list']['array'][_0x18f3e5]['isOpen'] = !this['_list']['array'][_0x18f3e5]['isOpen'], this['event'](_0x579e6a['Event']['OPEN']), this['_list']['array'] = this['getArray']();
        }
        ['setItemSta' + 'te'](_0x1ed9df, _0x4e2266) {
            this['_list']['array'][_0x1ed9df] && (this['_list']['array'][_0x1ed9df]['isOpen'] = _0x4e2266, this['_list']['array'] = this['getArray']());
        }
        ['fresh']() {
            this['_list']['array'] = this['getArray'](), this['repaint']();
        }
        set ['dataSource'](_0x4ebac0) {
            this['_dataSourc' + 'e'] = _0x4ebac0, super['dataSource'] = _0x4ebac0;
        }
        get ['dataSource']() {
            return super['dataSource'];
        }
        set ['xml'](_0x2d6f0d) {
            var _0x1abd8c = [];
            this['parseXml'](_0x2d6f0d['childNodes'][0x0], _0x1abd8c, null, !0x0), this['array'] = _0x1abd8c;
        }
        ['parseXml'](_0x3ad867, _0x27912a, _0x4e14c3, _0x506b31) {
            var _0x91c79b, _0xc64f59 = _0x3ad867['childNodes'], _0x54c067 = _0xc64f59['length'];
            if (!_0x506b31) {
                _0x91c79b = {};
                var _0x33b450 = _0x3ad867['attributes'];
                for (let _0x4f7a59 in _0x33b450) {
                    var _0x2c8441 = _0x33b450[_0x4f7a59], _0x469dd3 = _0x2c8441['nodeName'], _0x343d4c = _0x2c8441['nodeValue'];
                    _0x91c79b[_0x469dd3] = 'true' == _0x343d4c || 'false' != _0x343d4c && _0x343d4c;
                }
                _0x91c79b['nodeParent'] = _0x4e14c3, _0x54c067 > 0x0 && (_0x91c79b['isDirector' + 'y'] = !0x0), _0x91c79b['hasChild'] = _0x54c067 > 0x0, _0x27912a['push'](_0x91c79b);
            }
            for (var _0x5349f2 = 0x0; _0x5349f2 < _0x54c067; _0x5349f2++) {
                var _0x18a82a = _0xc64f59[_0x5349f2];
                this['parseXml'](_0x18a82a, _0x27912a, _0x91c79b, !0x1);
            }
        }
        ['parseOpenS' + 'tatus'](_0x1c7d9f, _0x2fd11f) {
            for (var _0x4af35f = 0x0, _0x8e46e9 = _0x2fd11f['length']; _0x4af35f < _0x8e46e9; _0x4af35f++) {
                var _0xf1e722 = _0x2fd11f[_0x4af35f];
                if (_0xf1e722['isDirector' + 'y'])
                    for (var _0x21a0b4 = 0x0, _0x2c0792 = _0x1c7d9f['length']; _0x21a0b4 < _0x2c0792; _0x21a0b4++) {
                        var _0x2d44e6 = _0x1c7d9f[_0x21a0b4];
                        if (_0x2d44e6['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x2d44e6, _0xf1e722) && _0xf1e722['label'] == _0x2d44e6['label']) {
                            _0xf1e722['isOpen'] = _0x2d44e6['isOpen'];
                            break;
                        }
                    }
            }
        }
        ['isSamePare' + 'nt'](_0x2dc32b, _0xe718c3) {
            return null == _0x2dc32b['nodeParent'] && null == _0xe718c3['nodeParent'] || null != _0x2dc32b['nodeParent'] && null != _0xe718c3['nodeParent'] && (_0x2dc32b['nodeParent']['label'] == _0xe718c3['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x2dc32b['nodeParent'], _0xe718c3['nodeParent']));
        }
        get ['selectedPa' + 'th']() {
            return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
        }
        ['filter'](_0x2e0322) {
            if (Boolean(_0x2e0322)) {
                var _0x51331 = [];
                this['getFilterS' + 'ource'](this['_source'], _0x51331, _0x2e0322), this['_list']['array'] = _0x51331;
            } else
                this['_list']['array'] = this['getArray']();
        }
        ['getFilterS' + 'ource'](_0x23a8ef, _0x34c215, _0x2b8b18) {
            _0x2b8b18 = _0x2b8b18['toLocaleLo' + 'werCase']();
            for (let _0x311aa5 of _0x23a8ef)
                !_0x311aa5['isDirector' + 'y'] && String(_0x311aa5['label'])['toLowerCas' + 'e']()['indexOf'](_0x2b8b18) > -0x1 && (_0x311aa5['x'] = 0x0, _0x34c215['push'](_0x311aa5)), _0x311aa5['child'] && _0x311aa5['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x311aa5['child'], _0x34c215, _0x2b8b18);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x38b261), _0x579e6a['ClassUtils']['regClass']('laya.ui.Tr' + 'ee', _0x38b261), _0x579e6a['ClassUtils']['regClass']('Laya.Tree', _0x38b261);
    class _0x1cfa57 extends _0x4aa05f {
        constructor() {
            super(...arguments), this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1;
        }
        ['addChild'](_0x1b3f12) {
            return _0x1b3f12['on'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChild'](_0x1b3f12);
        }
        ['onResize'](_0xf83701) {
            this['_setItemCh' + 'anged']();
        }
        ['addChildAt'](_0x24cefc, _0x367ddb) {
            return _0x24cefc['on'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['addChildAt'](_0x24cefc, _0x367ddb);
        }
        ['removeChil' + 'dAt'](_0x550b67) {
            return this['getChildAt'](_0x550b67)['off'](_0x579e6a['Event']['RESIZE'], this, this['onResize']), this['_setItemCh' + 'anged'](), super['removeChil' + 'dAt'](_0x550b67);
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
        set ['space'](_0x16c82a) {
            this['_space'] = _0x16c82a, this['_setItemCh' + 'anged']();
        }
        get ['align']() {
            return this['_align'];
        }
        set ['align'](_0xb31023) {
            this['_align'] = _0xb31023, this['_setItemCh' + 'anged']();
        }
        ['sortItem'](_0x488460) {
            _0x488460 && _0x488460['sort'](function (_0x2e456c, _0x1722dd) {
                return _0x2e456c['y'] - _0x1722dd['y'];
            });
        }
        ['_setItemCh' + 'anged']() {
            this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x1cfa57), _0x579e6a['ClassUtils']['regClass']('laya.ui.La' + 'youtBox', _0x1cfa57), _0x579e6a['ClassUtils']['regClass']('Laya.Layou' + 'tBox', _0x1cfa57);
    class _0x2c81c0 extends _0x1cfa57 {
        ['sortItem'](_0x2dfc84) {
            _0x2dfc84 && _0x2dfc84['sort'](function (_0x4aa449, _0x5a7f32) {
                return _0x4aa449['x'] - _0x5a7f32['x'];
            });
        }
        set ['height'](_0x5afb9c) {
            this['_height'] != _0x5afb9c && (super['height'] = _0x5afb9c, this['callLater'](this['changeItem' + 's']));
        }
        get ['height']() {
            return super['height'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x3e9c59 = [], _0x5ae583 = 0x0, _0xc597e1 = 0x0, _0x351858 = this['numChildre' + 'n']; _0xc597e1 < _0x351858; _0xc597e1++) {
                var _0x2526ae = this['getChildAt'](_0xc597e1);
                _0x2526ae && (_0x3e9c59['push'](_0x2526ae), _0x5ae583 = this['_height'] ? this['_height'] : Math['max'](_0x5ae583, _0x2526ae['height'] * _0x2526ae['scaleY']));
            }
            this['sortItem'](_0x3e9c59);
            var _0x3271e5 = 0x0;
            for (_0xc597e1 = 0x0, _0x351858 = _0x3e9c59['length']; _0xc597e1 < _0x351858; _0xc597e1++)
                (_0x2526ae = _0x3e9c59[_0xc597e1])['x'] = _0x3271e5, _0x3271e5 += _0x2526ae['width'] * _0x2526ae['scaleX'] + this['_space'], this['_align'] == _0x2c81c0['TOP'] ? _0x2526ae['y'] = 0x0 : this['_align'] == _0x2c81c0['MIDDLE'] ? _0x2526ae['y'] = 0.5 * (_0x5ae583 - _0x2526ae['height'] * _0x2526ae['scaleY']) : this['_align'] == _0x2c81c0['BOTTOM'] && (_0x2526ae['y'] = _0x5ae583 - _0x2526ae['height'] * _0x2526ae['scaleY']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x2c81c0['NONE'] = 'none', _0x2c81c0['TOP'] = 'top', _0x2c81c0['MIDDLE'] = 'middle', _0x2c81c0['BOTTOM'] = 'bottom', _0x579e6a['ILaya']['regClass'](_0x2c81c0), _0x579e6a['ClassUtils']['regClass']('laya.ui.HB' + 'ox', _0x2c81c0), _0x579e6a['ClassUtils']['regClass']('Laya.HBox', _0x2c81c0);
    class _0x5d2ea9 extends _0x1cfa57 {
        set ['width'](_0x10fabc) {
            this['_width'] != _0x10fabc && (super['width'] = _0x10fabc, this['callLater'](this['changeItem' + 's']));
        }
        get ['width']() {
            return super['width'];
        }
        ['changeItem' + 's']() {
            this['_itemChang' + 'ed'] = !0x1;
            for (var _0x323d8e = [], _0x493ab7 = 0x0, _0xac2c3d = 0x0, _0x1f6e49 = this['numChildre' + 'n']; _0xac2c3d < _0x1f6e49; _0xac2c3d++) {
                var _0x586aa5 = this['getChildAt'](_0xac2c3d);
                _0x586aa5 && (_0x323d8e['push'](_0x586aa5), _0x493ab7 = this['_width'] ? this['_width'] : Math['max'](_0x493ab7, _0x586aa5['width'] * _0x586aa5['scaleX']));
            }
            this['sortItem'](_0x323d8e);
            var _0x259134 = 0x0;
            for (_0xac2c3d = 0x0, _0x1f6e49 = _0x323d8e['length']; _0xac2c3d < _0x1f6e49; _0xac2c3d++)
                (_0x586aa5 = _0x323d8e[_0xac2c3d])['y'] = _0x259134, _0x259134 += _0x586aa5['height'] * _0x586aa5['scaleY'] + this['_space'], this['_align'] == _0x5d2ea9['LEFT'] ? _0x586aa5['x'] = 0x0 : this['_align'] == _0x5d2ea9['CENTER'] ? _0x586aa5['x'] = 0.5 * (_0x493ab7 - _0x586aa5['width'] * _0x586aa5['scaleX']) : this['_align'] == _0x5d2ea9['RIGHT'] && (_0x586aa5['x'] = _0x493ab7 - _0x586aa5['width'] * _0x586aa5['scaleX']);
            this['_sizeChang' + 'ed']();
        }
    }
    _0x5d2ea9['NONE'] = 'none', _0x5d2ea9['LEFT'] = 'left', _0x5d2ea9['CENTER'] = 'center', _0x5d2ea9['RIGHT'] = 'right', _0x579e6a['ILaya']['regClass'](_0x5d2ea9), _0x579e6a['ClassUtils']['regClass']('laya.ui.VB' + 'ox', _0x5d2ea9), _0x579e6a['ClassUtils']['regClass']('Laya.VBox', _0x5d2ea9);
    class _0x306129 extends _0x4c7b79 {
        constructor(_0x485ef3 = null, _0x25203e = null) {
            super(), this['_valueArr'] = '', this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x485ef3 && (this['skin'] = _0x485ef3), _0x25203e && (this['sheet'] = _0x25203e);
        }
        ['createChil' + 'dren']() {
            this['_bitmap'] = new _0x218db5(), this['on'](_0x579e6a['Event']['LOADED'], this, this['_onClipLoa' + 'ded']);
        }
        ['_onClipLoa' + 'ded']() {
            this['callLater'](this['changeValu' + 'e']);
        }
        get ['sheet']() {
            return this['_sheet'];
        }
        set ['sheet'](_0x19f9ba) {
            _0x19f9ba += '', this['_sheet'] = _0x19f9ba;
            var _0x2e6ead = _0x19f9ba['split']('\x20');
            this['_clipX'] = String(_0x2e6ead[0x0])['length'], this['clipY'] = _0x2e6ead['length'], this['_indexMap'] = {};
            for (var _0x3745f1 = 0x0; _0x3745f1 < this['_clipY']; _0x3745f1++)
                for (var _0x39b7dd = _0x2e6ead[_0x3745f1]['split'](''), _0x5ec775 = 0x0, _0x3b44e2 = _0x39b7dd['length']; _0x5ec775 < _0x3b44e2; _0x5ec775++)
                    this['_indexMap'][_0x39b7dd[_0x5ec775]] = _0x3745f1 * this['_clipX'] + _0x5ec775;
        }
        get ['value']() {
            return this['_valueArr'] ? this['_valueArr'] : '';
        }
        set ['value'](_0x1da8a6) {
            _0x1da8a6 += '', this['_valueArr'] = _0x1da8a6, this['callLater'](this['changeValu' + 'e']);
        }
        get ['direction']() {
            return this['_direction'];
        }
        set ['direction'](_0x1e7368) {
            this['_direction'] = _0x1e7368, this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceX']() {
            return this['_spaceX'];
        }
        set ['spaceX'](_0x26f685) {
            this['_spaceX'] = _0x26f685, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        get ['spaceY']() {
            return this['_spaceY'];
        }
        set ['spaceY'](_0x1d1488) {
            this['_spaceY'] = _0x1d1488, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
        }
        set ['align'](_0x1b19be) {
            this['_align'] = _0x1b19be, this['callLater'](this['changeValu' + 'e']);
        }
        get ['align']() {
            return this['_align'];
        }
        ['changeValu' + 'e']() {
            var _0x182afb;
            if (this['_sources'] && (this['_valueArr'] && (this['graphics']['clear'](!0x0), _0x182afb = this['_sources'][0x0]))) {
                var _0x226662 = 'horizontal' === this['_direction'];
                _0x226662 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x182afb['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x182afb['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x182afb['sourceWidt' + 'h'], this['_wordsH'] = (_0x182afb['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                var _0x3a6a12 = 0x0;
                if (this['_width'])
                    switch (this['_align']) {
                    case 'center':
                        _0x3a6a12 = 0.5 * (this['_width'] - this['_wordsW']);
                        break;
                    case 'right':
                        _0x3a6a12 = this['_width'] - this['_wordsW'];
                        break;
                    default:
                        _0x3a6a12 = 0x0;
                    }
                for (var _0x5d2802 = 0x0, _0x505c4b = this['_valueArr']['length']; _0x5d2802 < _0x505c4b; _0x5d2802++) {
                    var _0x17250a = this['_indexMap'][this['_valueArr']['charAt'](_0x5d2802)];
                    this['sources'][_0x17250a] && (_0x182afb = this['sources'][_0x17250a], _0x226662 ? this['graphics']['drawImage'](_0x182afb, _0x3a6a12 + _0x5d2802 * (_0x182afb['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x182afb['sourceWidt' + 'h'], _0x182afb['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x182afb, 0x0 + _0x3a6a12, _0x5d2802 * (_0x182afb['sourceHeig' + 'ht'] + this['spaceY']), _0x182afb['sourceWidt' + 'h'], _0x182afb['sourceHeig' + 'ht']));
                }
                this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
            }
        }
        set ['width'](_0x3000f9) {
            super['width'] = _0x3000f9, this['callLater'](this['changeValu' + 'e']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0xdedefe) {
            super['height'] = _0xdedefe, this['callLater'](this['changeValu' + 'e']);
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
        ['destroy'](_0x2cbb1d = !0x0) {
            this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off'](_0x579e6a['Event']['LOADED'], this, this['_onClipLoa' + 'ded']), super['destroy'](_0x2cbb1d);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0x306129), _0x579e6a['ClassUtils']['regClass']('laya.ui.Fo' + 'ntClip', _0x306129), _0x579e6a['ClassUtils']['regClass']('Laya.FontC' + 'lip', _0x306129);
    class _0x419916 extends _0x579e6a['Scene'] {
        constructor() {
            super(!0x1), this['_watchMap'] = {}, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2a34ba['EMPTY'], this['createChil' + 'dren']();
        }
        static ['__init__']() {
            _0x579e6a['ILaya']['ClassUtils']['regShortCl' + 'assName']([
                _0x4be30c,
                _0x32f31e,
                _0x1c2af7,
                _0x5a3842,
                _0x4aa05f,
                _0x4779ef,
                _0x1e851d,
                _0x4c7b79,
                _0x1275f1,
                _0xc0040,
                _0x6cf261,
                _0x273abf,
                _0x68d04b,
                _0x1678c1,
                _0x387393,
                _0x11d34c,
                _0x3f3b10,
                _0x40da37,
                _0x358826,
                _0x3c997a,
                _0x487f67,
                _0x7d9ba4,
                _0x3a3e48,
                _0x419916,
                _0x161ed5,
                _0x38c658,
                _0x38b261,
                _0x2c81c0,
                _0x5d2ea9,
                _0x579e6a['Animation'],
                _0x579e6a['Text'],
                _0x306129
            ]);
        }
        static ['regCompone' + 'nt'](_0x1e8c97, _0x30085d) {
            _0x579e6a['ILaya']['ClassUtils']['regClass'](_0x1e8c97, _0x30085d);
        }
        static ['regViewRun' + 'time'](_0x41eab4, _0xad6cde) {
            _0x579e6a['ILaya']['ClassUtils']['regClass'](_0x41eab4, _0xad6cde);
        }
        static ['regUI'](_0x5b6f4d, _0x29bba5) {
            _0x579e6a['ILaya']['loader']['cacheRes'](_0x5b6f4d, _0x29bba5);
        }
        ['destroy'](_0x6a25b1 = !0x0) {
            this['_watchMap'] = null, super['destroy'](_0x6a25b1);
        }
        ['changeData'](_0x399a6f) {
            var _0x28632a = this['_watchMap'][_0x399a6f];
            if (_0x28632a)
                for (var _0x2809c5 = 0x0, _0xa2ab4 = _0x28632a['length']; _0x2809c5 < _0xa2ab4; _0x2809c5++) {
                    _0x28632a[_0x2809c5]['exe'](this);
                }
        }
        get ['top']() {
            return this['_widget']['top'];
        }
        set ['top'](_0x5b602d) {
            _0x5b602d != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x5b602d);
        }
        get ['bottom']() {
            return this['_widget']['bottom'];
        }
        set ['bottom'](_0x84735c) {
            _0x84735c != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x84735c);
        }
        get ['left']() {
            return this['_widget']['left'];
        }
        set ['left'](_0x3d77b8) {
            _0x3d77b8 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x3d77b8);
        }
        get ['right']() {
            return this['_widget']['right'];
        }
        set ['right'](_0x4aeafb) {
            _0x4aeafb != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x4aeafb);
        }
        get ['centerX']() {
            return this['_widget']['centerX'];
        }
        set ['centerX'](_0x4ba167) {
            _0x4ba167 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x4ba167);
        }
        get ['centerY']() {
            return this['_widget']['centerY'];
        }
        set ['centerY'](_0x533db0) {
            _0x533db0 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x533db0);
        }
        get ['anchorX']() {
            return this['_anchorX'];
        }
        set ['anchorX'](_0x1af6bf) {
            this['_anchorX'] != _0x1af6bf && (this['_anchorX'] = _0x1af6bf, this['callLater'](this['_sizeChang' + 'ed']));
        }
        get ['anchorY']() {
            return this['_anchorY'];
        }
        set ['anchorY'](_0xf7ac2d) {
            this['_anchorY'] != _0xf7ac2d && (this['_anchorY'] = _0xf7ac2d, this['callLater'](this['_sizeChang' + 'ed']));
        }
        ['_sizeChang' + 'ed']() {
            isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event'](_0x579e6a['Event']['RESIZE']);
        }
        ['_getWidget']() {
            return this['_widget'] === _0x2a34ba['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2a34ba)), this['_widget'];
        }
        ['loadUI'](_0x13984a) {
            var _0x3d6e24 = _0x419916['uiMap'][_0x13984a];
            _0x419916['uiMap'] && this['createView'](_0x3d6e24);
        }
        get ['dataSource']() {
            return this['_dataSourc' + 'e'];
        }
        set ['dataSource'](_0x4565f7) {
            for (var _0x51f185 in (this['_dataSourc' + 'e'] = _0x4565f7, _0x4565f7)) {
                var _0x188239 = this['getChildBy' + 'Name'](_0x51f185);
                _0x188239 instanceof _0xc0040 ? _0x188239['dataSource'] = _0x4565f7[_0x51f185] : _0x51f185 in this && !(this[_0x51f185] instanceof Function) && (this[_0x51f185] = _0x4565f7[_0x51f185]);
            }
        }
    }
    _0x419916['uiMap'] = {}, _0x579e6a['ILaya']['regClass'](_0x419916), _0x579e6a['ClassUtils']['regClass']('laya.ui.Vi' + 'ew', _0x419916), _0x579e6a['ClassUtils']['regClass']('Laya.View', _0x419916);
    class _0x24260c {
    }
    _0x24260c['Dialog'] = null;
    class _0x27a361 extends _0x579e6a['Sprite'] {
        constructor() {
            super(), this['maskLayer'] = new _0x579e6a['Sprite'](), this['popupEffec' + 't'] = _0x298402 => {
                _0x298402['scale'](0x1, 0x1), _0x298402['_effectTwe' + 'en'] = _0x579e6a['Tween']['from'](_0x298402, {
                    'x': _0x579e6a['ILaya']['stage']['width'] / 0x2,
                    'y': _0x579e6a['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x579e6a['Ease']['backOut'], _0x579e6a['Handler']['create'](this, this['doOpen'], [_0x298402]), 0x0, !0x1, !0x1);
            }, this['closeEffec' + 't'] = _0x26f4be => {
                _0x26f4be['_effectTwe' + 'en'] = _0x579e6a['Tween']['to'](_0x26f4be, {
                    'x': _0x579e6a['ILaya']['stage']['width'] / 0x2,
                    'y': _0x579e6a['ILaya']['stage']['height'] / 0x2,
                    'scaleX': 0x0,
                    'scaleY': 0x0
                }, 0x12c, _0x579e6a['Ease']['strongOut'], _0x579e6a['Handler']['create'](this, this['doClose'], [_0x26f4be]), 0x0, !0x1, !0x1);
            }, this['popupEffec' + 'tHandler'] = new _0x579e6a['Handler'](this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x579e6a['Handler'](this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x579e6a['ILaya']['stage']['addChild'](this), _0x579e6a['ILaya']['stage']['on'](_0x579e6a['Event']['RESIZE'], this, this['_onResize']), _0x5d7bb6['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
        }
        ['_closeOnSi' + 'de']() {
            var _0x5eb432 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
            _0x5eb432 instanceof _0x24260c['Dialog'] && _0x5eb432['close']();
        }
        ['setLockVie' + 'w'](_0x5abeae) {
            this['lockLayer'] || (this['lockLayer'] = new _0x4aa05f(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x579e6a['ILaya']['stage']['width'], _0x579e6a['ILaya']['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x5abeae && (_0x5abeae['centerX'] = _0x5abeae['centerY'] = 0x0, this['lockLayer']['addChild'](_0x5abeae));
        }
        ['_onResize'](_0x42984e = null) {
            var _0x2ab0d7 = this['maskLayer']['width'] = _0x579e6a['ILaya']['stage']['width'], _0x2f2ead = this['maskLayer']['height'] = _0x579e6a['ILaya']['stage']['height'];
            this['lockLayer'] && this['lockLayer']['size'](_0x2ab0d7, _0x2f2ead), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x2ab0d7, _0x2f2ead, _0x5d7bb6['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x5d7bb6['popupBgAlp' + 'ha'];
            for (var _0x59eac9 = this['numChildre' + 'n'] - 0x1; _0x59eac9 > -0x1; _0x59eac9--) {
                var _0x4c5615 = this['getChildAt'](_0x59eac9);
                _0x4c5615['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x4c5615);
            }
        }
        ['_centerDia' + 'log'](_0x3fa261) {
            _0x3fa261['x'] = Math['round']((_0x579e6a['ILaya']['stage']['width'] - _0x3fa261['width'] >> 0x1) + _0x3fa261['pivotX']), _0x3fa261['y'] = Math['round']((_0x579e6a['ILaya']['stage']['height'] - _0x3fa261['height'] >> 0x1) + _0x3fa261['pivotY']);
        }
        ['open'](_0x12d71e, _0x9a3523 = !0x1, _0x43ce38 = !0x1) {
            _0x9a3523 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x12d71e), _0x12d71e['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x12d71e), this['addChild'](_0x12d71e), (_0x12d71e['isModal'] || this['_getBit'](_0x579e6a['Const']['HAS_ZORDER'])) && _0x579e6a['ILaya']['timer']['callLater'](this, this['_checkMask']), _0x43ce38 && null != _0x12d71e['popupEffec' + 't'] ? _0x12d71e['popupEffec' + 't']['runWith'](_0x12d71e) : this['doOpen'](_0x12d71e), this['event'](_0x579e6a['Event']['OPEN']);
        }
        ['_clearDial' + 'ogEffect'](_0x2fddf2) {
            _0x2fddf2['_effectTwe' + 'en'] && (_0x579e6a['Tween']['clear'](_0x2fddf2['_effectTwe' + 'en']), _0x2fddf2['_effectTwe' + 'en'] = null);
        }
        ['doOpen'](_0x119c2b) {
            _0x119c2b['onOpened'](_0x119c2b['_param']);
        }
        ['lock'](_0x30e0cd) {
            this['lockLayer'] && (_0x30e0cd ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
        }
        ['close'](_0xe68aa2) {
            this['_clearDial' + 'ogEffect'](_0xe68aa2), _0xe68aa2['isShowEffe' + 'ct'] && null != _0xe68aa2['closeEffec' + 't'] ? _0xe68aa2['closeEffec' + 't']['runWith']([_0xe68aa2]) : this['doClose'](_0xe68aa2), this['event'](_0x579e6a['Event']['CLOSE']);
        }
        ['doClose'](_0x1bcbc0) {
            _0x1bcbc0['removeSelf'](), _0x1bcbc0['isModal'] && this['_checkMask'](), _0x1bcbc0['closeHandl' + 'er'] && _0x1bcbc0['closeHandl' + 'er']['runWith'](_0x1bcbc0['closeType']), _0x1bcbc0['onClosed'](_0x1bcbc0['closeType']), _0x1bcbc0['autoDestro' + 'yAtClosed'] && _0x1bcbc0['destroy']();
        }
        ['closeAll']() {
            this['_closeAll'](), this['event'](_0x579e6a['Event']['CLOSE']);
        }
        ['_closeAll']() {
            for (var _0x44309e = this['numChildre' + 'n'] - 0x1; _0x44309e > -0x1; _0x44309e--) {
                var _0x133aed = this['getChildAt'](_0x44309e);
                _0x133aed && null != _0x133aed['close'] && this['doClose'](_0x133aed);
            }
        }
        ['getDialogs' + 'ByGroup'](_0x5a805d) {
            for (var _0x5f1b98 = [], _0x1b2057 = this['numChildre' + 'n'] - 0x1; _0x1b2057 > -0x1; _0x1b2057--) {
                var _0x24ac53 = this['getChildAt'](_0x1b2057);
                _0x24ac53 && _0x24ac53['group'] === _0x5a805d && _0x5f1b98['push'](_0x24ac53);
            }
            return _0x5f1b98;
        }
        ['closeByGro' + 'up'](_0x4a02ef) {
            for (var _0x2d595e = [], _0x7fe482 = this['numChildre' + 'n'] - 0x1; _0x7fe482 > -0x1; _0x7fe482--) {
                var _0x22e3a6 = this['getChildAt'](_0x7fe482);
                _0x22e3a6 && _0x22e3a6['group'] === _0x4a02ef && (_0x22e3a6['close'](), _0x2d595e['push'](_0x22e3a6));
            }
            return _0x2d595e;
        }
        ['_checkMask']() {
            this['maskLayer']['removeSelf']();
            for (var _0x51a3fd = this['numChildre' + 'n'] - 0x1; _0x51a3fd > -0x1; _0x51a3fd--) {
                var _0x488695 = this['getChildAt'](_0x51a3fd);
                if (_0x488695 && _0x488695['isModal'])
                    return void this['addChildAt'](this['maskLayer'], _0x51a3fd);
            }
        }
    }
    _0x579e6a['ClassUtils']['regClass']('laya.ui.Di' + 'alogManage' + 'r', _0x27a361), _0x579e6a['ClassUtils']['regClass']('Laya.Dialo' + 'gManager', _0x27a361);
    class _0x146c37 extends _0x419916 {
        constructor() {
            super(), this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['popupEffec' + 't'] = _0x146c37['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x146c37['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on'](_0x579e6a['Event']['CLICK'], this, this['_onClick']);
        }
        static get ['manager']() {
            return _0x146c37['_manager'] = _0x146c37['_manager'] || new _0x27a361();
        }
        static set ['manager'](_0x595e71) {
            _0x146c37['_manager'] = _0x595e71;
        }
        ['_dealDragA' + 'rea']() {
            var _0xaf8c58 = this['getChildBy' + 'Name']('drag');
            _0xaf8c58 && (this['dragArea'] = _0xaf8c58['_x'] + ',' + _0xaf8c58['_y'] + ',' + _0xaf8c58['width'] + ',' + _0xaf8c58['height'], _0xaf8c58['removeSelf']());
        }
        get ['dragArea']() {
            return this['_dragArea'] ? this['_dragArea']['toString']() : null;
        }
        set ['dragArea'](_0x1a6ee2) {
            if (_0x1a6ee2) {
                var _0x5b8a50 = _0x42ba36['fillArray']([
                    0x0,
                    0x0,
                    0x0,
                    0x0
                ], _0x1a6ee2, Number);
                this['_dragArea'] = new _0x579e6a['Rectangle'](_0x5b8a50[0x0], _0x5b8a50[0x1], _0x5b8a50[0x2], _0x5b8a50[0x3]), this['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
            } else
                this['_dragArea'] = null, this['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['_onMouseDo' + 'wn']);
        }
        ['_onMouseDo' + 'wn'](_0x456737) {
            var _0x40a402 = this['getMousePo' + 'int']();
            this['_dragArea']['contains'](_0x40a402['x'], _0x40a402['y']) ? this['startDrag']() : this['stopDrag']();
        }
        ['_onClick'](_0x473a24) {
            var _0x3a2b6c = _0x473a24['target'];
            if (_0x3a2b6c)
                switch (_0x3a2b6c['name']) {
                case _0x146c37['CLOSE']:
                case _0x146c37['CANCEL']:
                case _0x146c37['SURE']:
                case _0x146c37['NO']:
                case _0x146c37['OK']:
                case _0x146c37['YES']:
                    return void this['close'](_0x3a2b6c['name']);
                }
        }
        ['open'](_0x1802c6 = !0x0, _0x1380ba = null) {
            this['_dealDragA' + 'rea'](), this['_param'] = _0x1380ba, _0x146c37['manager']['open'](this, _0x1802c6, this['isShowEffe' + 'ct']), _0x146c37['manager']['lock'](!0x1);
        }
        ['close'](_0x24c484 = null) {
            this['closeType'] = _0x24c484, _0x146c37['manager']['close'](this);
        }
        ['destroy'](_0x5362bb = !0x0) {
            this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, super['destroy'](_0x5362bb);
        }
        ['show'](_0x3a9919 = !0x1, _0x4771a5 = !0x0) {
            this['_open'](!0x1, _0x3a9919, _0x4771a5);
        }
        ['popup'](_0xc5db92 = !0x1, _0x9d606b = !0x0) {
            this['_open'](!0x0, _0xc5db92, _0x9d606b);
        }
        ['_open'](_0x22cfba, _0x2d59c4, _0x4ded8f) {
            this['isModal'] = _0x22cfba, this['isShowEffe' + 'ct'] = _0x4ded8f, _0x146c37['manager']['lock'](!0x0), this['open'](_0x2d59c4);
        }
        get ['isPopup']() {
            return null != this['parent'];
        }
        set ['zOrder'](_0x28ee46) {
            super['zOrder'] = _0x28ee46, _0x146c37['manager']['_checkMask']();
        }
        get ['zOrder']() {
            return super['zOrder'];
        }
        static ['setLockVie' + 'w'](_0x337d7b) {
            _0x146c37['manager']['setLockVie' + 'w'](_0x337d7b);
        }
        static ['lock'](_0x5572f8) {
            _0x146c37['manager']['lock'](_0x5572f8);
        }
        static ['closeAll']() {
            _0x146c37['manager']['closeAll']();
        }
        static ['getDialogs' + 'ByGroup'](_0x5c67dd) {
            return _0x146c37['manager']['getDialogs' + 'ByGroup'](_0x5c67dd);
        }
        static ['closeByGro' + 'up'](_0x2ee40d) {
            return _0x146c37['manager']['closeByGro' + 'up'](_0x2ee40d);
        }
    }
    _0x146c37['CLOSE'] = 'close', _0x146c37['CANCEL'] = 'cancel', _0x146c37['SURE'] = 'sure', _0x146c37['NO'] = 'no', _0x146c37['YES'] = 'yes', _0x146c37['OK'] = 'ok', _0x24260c['Dialog'] = _0x146c37, _0x579e6a['ILaya']['regClass'](_0x146c37), _0x579e6a['ClassUtils']['regClass']('laya.ui.Di' + 'alog', _0x146c37), _0x579e6a['ClassUtils']['regClass']('Laya.Dialo' + 'g', _0x146c37);
    class _0x191f3a extends _0xc0040 {
        constructor() {
            super(), this['_tipBox'] = new _0xc0040(), this['_tipBox']['addChild'](this['_tipText'] = new _0x579e6a['Text']()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x191f3a['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x579e6a['ILaya']['stage']['on'](_0x542661['SHOW_TIP'], this, this['_onStageSh' + 'owTip']), _0x579e6a['ILaya']['stage']['on'](_0x542661['HIDE_TIP'], this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
        }
        ['_onStageHi' + 'deTip'](_0x30f4e9) {
            _0x579e6a['ILaya']['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
        }
        ['_onStageSh' + 'owTip'](_0x4edbb5) {
            _0x579e6a['ILaya']['timer']['once'](_0x191f3a['tipDelay'], this, this['_showTip'], [_0x4edbb5], !0x0);
        }
        ['_showTip'](_0x111d7f) {
            if ('string' == typeof _0x111d7f) {
                var _0x3cd814 = String(_0x111d7f);
                Boolean(_0x3cd814) && this['_defaultTi' + 'pHandler'](_0x3cd814);
            } else
                _0x111d7f instanceof _0x579e6a['Handler'] ? _0x111d7f['run']() : _0x111d7f instanceof Function && _0x111d7f['apply']();
            _0x579e6a['ILaya']['stage']['on'](_0x579e6a['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x579e6a['ILaya']['stage']['on'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
        }
        ['_onStageMo' + 'useDown'](_0x321e86) {
            this['closeAll']();
        }
        ['_onStageMo' + 'useMove'](_0x3e5892) {
            this['_showToSta' + 'ge'](this, _0x191f3a['offsetX'], _0x191f3a['offsetY']);
        }
        ['_showToSta' + 'ge'](_0x287cab, _0x12f926 = 0x0, _0x10fa7a = 0x0) {
            var _0x111ffc = _0x287cab['getBounds']();
            _0x287cab['x'] = _0x579e6a['ILaya']['stage']['mouseX'] + _0x12f926, _0x287cab['y'] = _0x579e6a['ILaya']['stage']['mouseY'] + _0x10fa7a, _0x287cab['_x'] + _0x111ffc['width'] > _0x579e6a['ILaya']['stage']['width'] && (_0x287cab['x'] -= _0x111ffc['width'] + _0x12f926), _0x287cab['_y'] + _0x111ffc['height'] > _0x579e6a['ILaya']['stage']['height'] && (_0x287cab['y'] -= _0x111ffc['height'] + _0x10fa7a);
        }
        ['closeAll']() {
            _0x579e6a['ILaya']['timer']['clear'](this, this['_showTip']), _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_MOVE'], this, this['_onStageMo' + 'useMove']), _0x579e6a['ILaya']['stage']['off'](_0x579e6a['Event']['MOUSE_DOWN'], this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
        }
        ['showDislay' + 'Tip'](_0x18c9cd) {
            this['addChild'](_0x18c9cd), this['_showToSta' + 'ge'](this), _0x579e6a['ILaya']['stage']['addChild'](this);
        }
        ['_showDefau' + 'ltTip'](_0x3472a5) {
            this['_tipText']['text'] = _0x3472a5;
            var _0x6391c6 = this['_tipBox']['graphics'];
            _0x6391c6['clear'](!0x0), _0x6391c6['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x191f3a['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x579e6a['ILaya']['stage']['addChild'](this);
        }
        get ['defaultTip' + 'Handler']() {
            return this['_defaultTi' + 'pHandler'];
        }
        set ['defaultTip' + 'Handler'](_0x56142d) {
            this['_defaultTi' + 'pHandler'] = _0x56142d;
        }
    }
    _0x191f3a['offsetX'] = 0xa, _0x191f3a['offsetY'] = 0xf, _0x191f3a['tipTextCol' + 'or'] = '#ffffff', _0x191f3a['tipBackCol' + 'or'] = '#111111', _0x191f3a['tipDelay'] = 0xc8, _0x579e6a['ILaya']['regClass'](_0x191f3a), _0x579e6a['ClassUtils']['regClass']('laya.ui.Ti' + 'pManager', _0x191f3a), _0x579e6a['ClassUtils']['regClass']('Laya.TipMa' + 'nager', _0x191f3a);
    class _0xc6865d extends _0xc0040 {
        constructor() {
            super(), this['_width'] = this['_height'] = 0xc8;
            var _0x5e5cdd = new _0x579e6a['Texture']();
            _0x5e5cdd['bitmap'] = new _0x579e6a['Texture2D'](), this['texture'] = _0x5e5cdd;
        }
        ['onEnable']() {
            this['postMsg']({
                'type': 'display',
                'rate': _0x579e6a['Laya']['stage']['frameRate']
            }), window['wx'] && window['sharedCanv' + 'as'] && _0x579e6a['Laya']['timer']['frameLoop'](0x1, this, this['_onLoop']);
        }
        ['onDisable']() {
            this['postMsg']({ 'type': 'undisplay' }), _0x579e6a['Laya']['timer']['clear'](this, this['_onLoop']);
        }
        ['_onLoop']() {
            this['texture']['bitmap']['loadImageS' + 'ource'](window['sharedCanv' + 'as']);
        }
        set ['width'](_0x1033d6) {
            super['width'] = _0x1033d6, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['width'] = _0x1033d6), this['callLater'](this['_postMsg']);
        }
        get ['width']() {
            return super['width'];
        }
        set ['height'](_0x539442) {
            super['height'] = _0x539442, window['sharedCanv' + 'as'] && (window['sharedCanv' + 'as']['height'] = _0x539442), this['callLater'](this['_postMsg']);
        }
        get ['height']() {
            return super['height'];
        }
        set ['x'](_0x253ed6) {
            super['x'] = _0x253ed6, this['callLater'](this['_postMsg']);
        }
        get ['x']() {
            return super['x'];
        }
        set ['y'](_0x19ea4c) {
            super['y'] = _0x19ea4c, this['callLater'](this['_postMsg']);
        }
        get ['y']() {
            return super['y'];
        }
        ['_postMsg']() {
            var _0x22b314 = new _0x579e6a['Matrix']();
            _0x22b314['translate'](this['x'], this['y']);
            var _0x1731b2 = _0x579e6a['Laya']['stage'];
            _0x22b314['scale'](_0x1731b2['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x1731b2['transform']['getScaleX'](), _0x1731b2['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x1731b2['transform']['getScaleY']()), this['postMsg']({
                'type': 'changeMatr' + 'ix',
                'a': _0x22b314['a'],
                'b': _0x22b314['b'],
                'c': _0x22b314['c'],
                'd': _0x22b314['d'],
                'tx': _0x22b314['tx'],
                'ty': _0x22b314['ty'],
                'w': this['width'],
                'h': this['height']
            });
        }
        ['postMsg'](_0x4a0359) {
            window['wx'] && window['wx']['getOpenDat' + 'aContext'] && window['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x4a0359);
        }
    }
    _0x579e6a['ILaya']['regClass'](_0xc6865d), _0x579e6a['ClassUtils']['regClass']('laya.ui.WX' + 'OpenDataVi' + 'ewer', _0xc6865d), _0x579e6a['ClassUtils']['regClass']('Laya.WXOpe' + 'nDataViewe' + 'r', _0xc6865d), _0x41a583['AdvImage'] = _0x51d0b2, _0x41a583['AutoBitmap'] = _0x218db5, _0x41a583['Box'] = _0x4aa05f, _0x41a583['Button'] = _0x32f31e, _0x41a583['CheckBox'] = _0x1e851d, _0x41a583['Clip'] = _0x4c7b79, _0x41a583['ColorPicke' + 'r'] = _0x5a3842, _0x41a583['ComboBox'] = _0x1275f1, _0x41a583['Dialog'] = _0x146c37, _0x41a583['DialogMana' + 'ger'] = _0x27a361, _0x41a583['FontClip'] = _0x306129, _0x41a583['HBox'] = _0x2c81c0, _0x41a583['HScrollBar'] = _0x6cf261, _0x41a583['HSlider'] = _0x273abf, _0x41a583['IUI'] = _0x24260c, _0x41a583['Image'] = _0x68d04b, _0x41a583['Label'] = _0x1678c1, _0x41a583['LayoutBox'] = _0x1cfa57, _0x41a583['List'] = _0x387393, _0x41a583['Panel'] = _0x11d34c, _0x41a583['ProgressBa' + 'r'] = _0x3f3b10, _0x41a583['Radio'] = _0x40da37, _0x41a583['RadioGroup'] = _0x358826, _0x41a583['ScaleBox'] = _0x4779ef, _0x41a583['ScrollBar'] = _0x3c997a, _0x41a583['Slider'] = _0x487f67, _0x41a583['Styles'] = _0x1016b0, _0x41a583['Tab'] = _0x7d9ba4, _0x41a583['TextArea'] = _0x1c2af7, _0x41a583['TextInput'] = _0x3a3e48, _0x41a583['TipManager'] = _0x191f3a, _0x41a583['Tree'] = _0x38b261, _0x41a583['UIComponen' + 't'] = _0xc0040, _0x41a583['UIConfig'] = _0x5d7bb6, _0x41a583['UIEvent'] = _0x542661, _0x41a583['UIGroup'] = _0x32cad2, _0x41a583['UILib'] = class {
        static ['__init__']() {
        }
    }, _0x41a583['UIUtils'] = _0x42ba36, _0x41a583['VBox'] = _0x5d2ea9, _0x41a583['VScrollBar'] = _0x161ed5, _0x41a583['VSlider'] = _0x38c658, _0x41a583['View'] = _0x419916, _0x41a583['ViewStack'] = _0x4be30c, _0x41a583['WXOpenData' + 'Viewer'] = _0xc6865d, _0x41a583['Widget'] = _0x2a34ba;
}(window['Laya'] = window['Laya'] || {}, Laya);