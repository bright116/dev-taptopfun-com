!function (_0x105438, _0x438e82, _0x290223) {
    _0x290223['un'], _0x290223['uns'];
    var _0x26875a = _0x290223['static'], _0x9a35ce = _0x290223['class'], _0x1df89a = _0x290223['getset'], _0x2690df = (_0x290223['__newvec'], laya['display']['Animation']), _0x4cf231 = laya['utils']['Browser'], _0x27b938 = laya['utils']['ClassUtils'], _0x3aff8d = laya['filters']['ColorFilte' + 'r'], _0x33a316 = laya['components']['Component'], _0x5daf9b = (laya['Const'], laya['utils']['Ease']), _0x4d7b52 = laya['events']['Event'], _0x16c6cf = laya['display']['Graphics'], _0x3169bc = laya['utils']['Handler'], _0x2e7f3f = laya['net']['HttpReques' + 't'], _0x389e7b = laya['display']['Input'], _0x5a5cdd = laya['net']['Loader'], _0x199abd = laya['net']['LocalStora' + 'ge'], _0x3de2fa = laya['maths']['Matrix'], _0x3247b1 = (laya['display']['Node'], laya['maths']['Point']), _0x445590 = laya['maths']['Rectangle'], _0x1554e0 = (laya['renders']['Render'], laya['display']['Scene']), _0xdfea3c = laya['utils']['SceneUtils'], _0x3cfa9d = laya['display']['Sprite'], _0x4e6a74 = (laya['display']['Stage'], laya['display']['Text']), _0x3a0b6c = laya['resource']['Texture'], _0x170da9 = laya['utils']['TimeLine'], _0x546c37 = laya['utils']['Tween'], _0x5a1df2 = laya['utils']['Utils'], _0x5179a1 = laya['utils']['WeakObject'];
    _0x290223['interface']('laya.ui.IB' + 'ox'), _0x290223['interface']('laya.ui.II' + 'tem'), _0x290223['interface']('laya.ui.IS' + 'elect'), _0x290223['interface']('laya.ui.IR' + 'ender');
    var _0x251845 = function () {
            function _0x30606d() {
            }
            return _0x9a35ce(_0x30606d, 'UIConfig'), _0x30606d['touchScrol' + 'lEnable'] = !0x0, _0x30606d['mouseWheel' + 'Enable'] = !0x0, _0x30606d['showButton' + 's'] = !0x0, _0x30606d['popupBgCol' + 'or'] = '#000000', _0x30606d['popupBgAlp' + 'ha'] = 0.5, _0x30606d['closeDialo' + 'gOnSide'] = !0x0, _0x30606d;
        }(), _0xf96cc0 = function () {
            function _0x1c5456() {
            }
            return _0x9a35ce(_0x1c5456, 'laya.ui.St' + 'yles'), _0x1c5456['labelColor'] = '#000000', _0x1c5456['buttonStat' + 'eNum'] = 0x3, _0x1c5456['scrollBarM' + 'inNum'] = 0xf, _0x1c5456['scrollBarD' + 'elayTime'] = 0x1f4, _0x26875a(_0x1c5456, [
                'defaultSiz' + 'eGrid',
                function () {
                    return this['defaultSiz' + 'eGrid'] = [
                        0x4,
                        0x4,
                        0x4,
                        0x4,
                        0x0
                    ];
                },
                'labelPaddi' + 'ng',
                function () {
                    return this['labelPaddi' + 'ng'] = [
                        0x2,
                        0x2,
                        0x2,
                        0x2
                    ];
                },
                'inputLabel' + 'Padding',
                function () {
                    return this['inputLabel' + 'Padding'] = [
                        0x1,
                        0x1,
                        0x1,
                        0x3
                    ];
                },
                'buttonLabe' + 'lColors',
                function () {
                    return this['buttonLabe' + 'lColors'] = [
                        '#32556b',
                        '#32cc6b',
                        '#ff0000',
                        '#C0C0C0'
                    ];
                },
                'comboBoxIt' + 'emColors',
                function () {
                    return this['comboBoxIt' + 'emColors'] = [
                        '#5e95b6',
                        '#ffffff',
                        '#000000',
                        '#8fa4b1',
                        '#ffffff'
                    ];
                }
            ]), _0x1c5456;
        }(), _0x3c7b88 = function () {
            function _0x3b6742() {
            }
            return _0x9a35ce(_0x3b6742, 'laya.ui.UI' + 'Utils'), _0x3b6742['fillArray'] = function (_0x346a1d, _0x10a3b3, _0x1fdc59) {
                var _0xd88316 = _0x346a1d['concat']();
                if (_0x10a3b3)
                    for (var _0x58e465 = _0x10a3b3['split'](','), _0x574ddb = 0x0, _0x594dad = Math['min'](_0xd88316['length'], _0x58e465['length']); _0x574ddb < _0x594dad; _0x574ddb++) {
                        var _0x3bfaad = _0x58e465[_0x574ddb];
                        _0xd88316[_0x574ddb] = 'true' == _0x3bfaad || 'false' != _0x3bfaad && _0x3bfaad, null != _0x1fdc59 && (_0xd88316[_0x574ddb] = _0x1fdc59(_0x3bfaad));
                    }
                return _0xd88316;
            }, _0x3b6742['toColor'] = function (_0x41df17) {
                return _0x5a1df2['toHexColor'](_0x41df17);
            }, _0x3b6742['gray'] = function (_0x15b0c3, _0x2cadac) {
                void 0x0 === _0x2cadac && (_0x2cadac = !0x0), _0x2cadac ? _0x3b6742['addFilter'](_0x15b0c3, _0x3b6742['grayFilter']) : _0x3b6742['clearFilte' + 'r'](_0x15b0c3, _0x3aff8d);
            }, _0x3b6742['addFilter'] = function (_0x2fb931, _0x5d6813) {
                var _0x4b5365 = _0x2fb931['filters'] || [];
                _0x4b5365['push'](_0x5d6813), _0x2fb931['filters'] = _0x4b5365;
            }, _0x3b6742['clearFilte' + 'r'] = function (_0xd706b4, _0x1f8386) {
                var _0x5d19fa = _0xd706b4['filters'];
                if (null != _0x5d19fa && _0x5d19fa['length'] > 0x0) {
                    for (var _0x5b11c0 = _0x5d19fa['length'] - 0x1; _0x5b11c0 > -0x1; _0x5b11c0--) {
                        var _0x4950d7 = _0x5d19fa[_0x5b11c0];
                        _0x290223['__typeof'](_0x4950d7, _0x1f8386) && _0x5d19fa['splice'](_0x5b11c0, 0x1);
                    }
                    _0xd706b4['filters'] = _0x5d19fa;
                }
            }, _0x3b6742['_getReplac' + 'eStr'] = function (_0x42e3f1) {
                return _0x3b6742['escapeSequ' + 'ence'][_0x42e3f1];
            }, _0x3b6742['adptString'] = function (_0x24ba19) {
                return _0x24ba19['replace'](/\\(\w)/g, _0x3b6742['_getReplac' + 'eStr']);
            }, _0x3b6742['getBindFun'] = function (_0xd3f55a) {
                var _0x22f3af = _0x3b6742['_funMap']['get'](_0xd3f55a);
                if (null == _0x22f3af) {
                    var _0x150909 = '\x22' + _0xd3f55a + '\x22', _0x423cf1 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x150909 = _0x150909['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                    _0x22f3af = _0x290223['_runScript'](_0x423cf1), _0x3b6742['_funMap']['set'](_0xd3f55a, _0x22f3af);
                }
                return _0x22f3af;
            }, _0x26875a(_0x3b6742, [
                'grayFilter',
                function () {
                    return this['grayFilter'] = new _0x3aff8d([
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
                    ]);
                },
                'escapeSequ' + 'ence',
                function () {
                    return this['escapeSequ' + 'ence'] = {
                        '\x5cn': '\x0a',
                        '\x5ct': '\x09'
                    };
                },
                '_funMap',
                function () {
                    return this['_funMap'] = new _0x5179a1();
                }
            ]), _0x3b6742;
        }(), _0x23ac3b = function (_0x4ccd12) {
            function _0x279117() {
                _0x279117['__super']['call'](this), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
            }
            _0x9a35ce(_0x279117, 'laya.ui.Wi' + 'dget', _0x33a316);
            var _0x2e64ce = _0x279117['prototype'];
            return _0x2e64ce['onReset'] = function () {
                this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
            }, _0x2e64ce['_onEnable'] = function () {
                this['owner']['parent'] ? this['_onAdded']() : this['owner']['once']('added', this, this['_onAdded']);
            }, _0x2e64ce['_onDisable'] = function () {
                this['owner']['off']('added', this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off']('resize', this, this['_onParentR' + 'esize']);
            }, _0x2e64ce['_onAdded'] = function () {
                this['owner']['parent'] && this['owner']['parent']['on']('resize', this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
            }, _0x2e64ce['_onParentR' + 'esize'] = function () {
                (this['resetLayou' + 'tX']() || this['resetLayou' + 'tY']()) && this['owner']['event']('resize');
            }, _0x2e64ce['resetLayou' + 'tX'] = function () {
                var _0x385c45 = this['owner'];
                if (!_0x385c45)
                    return !0x1;
                var _0x9ed0c8 = _0x385c45['parent'];
                if (_0x9ed0c8) {
                    if (isNaN(this['centerX'])) {
                        if (isNaN(this['left']))
                            isNaN(this['right']) || (_0x385c45['x'] = Math['round'](_0x9ed0c8['width'] - _0x385c45['displayWid' + 'th'] - this['right'] + _0x385c45['pivotX'] * _0x385c45['scaleX']));
                        else {
                            if (_0x385c45['x'] = Math['round'](this['left'] + _0x385c45['pivotX'] * _0x385c45['scaleX']), !isNaN(this['right'])) {
                                var _0x468aa5 = (_0x9ed0c8['_width'] - this['left'] - this['right']) / (_0x385c45['scaleX'] || 0.01);
                                if (_0x468aa5 != _0x385c45['width'])
                                    return _0x385c45['width'] = _0x468aa5, !0x0;
                            }
                        }
                    } else
                        _0x385c45['x'] = Math['round'](0.5 * (_0x9ed0c8['width'] - _0x385c45['displayWid' + 'th']) + this['centerX'] + _0x385c45['pivotX'] * _0x385c45['scaleX']);
                }
                return !0x1;
            }, _0x2e64ce['resetLayou' + 'tY'] = function () {
                var _0x2776b5 = this['owner'];
                if (!_0x2776b5)
                    return !0x1;
                var _0x4df28a = _0x2776b5['parent'];
                if (_0x4df28a) {
                    if (isNaN(this['centerY'])) {
                        if (isNaN(this['top']))
                            isNaN(this['bottom']) || (_0x2776b5['y'] = Math['round'](_0x4df28a['height'] - _0x2776b5['displayHei' + 'ght'] - this['bottom'] + _0x2776b5['pivotY'] * _0x2776b5['scaleY']));
                        else {
                            if (_0x2776b5['y'] = Math['round'](this['top'] + _0x2776b5['pivotY'] * _0x2776b5['scaleY']), !isNaN(this['bottom'])) {
                                var _0x22d839 = (_0x4df28a['_height'] - this['top'] - this['bottom']) / (_0x2776b5['scaleY'] || 0.01);
                                if (_0x22d839 != _0x2776b5['height'])
                                    return _0x2776b5['height'] = _0x22d839, !0x0;
                            }
                        }
                    } else
                        _0x2776b5['y'] = Math['round'](0.5 * (_0x4df28a['height'] - _0x2776b5['displayHei' + 'ght']) + this['centerY'] + _0x2776b5['pivotY'] * _0x2776b5['scaleY']);
                }
                return !0x1;
            }, _0x2e64ce['resetLayou' + 't'] = function () {
                this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
            }, _0x1df89a(0x0, _0x2e64ce, 'centerX', function () {
                return this['_centerX'];
            }, function (_0x15de26) {
                this['_centerX'] != _0x15de26 && (this['_centerX'] = _0x15de26, this['resetLayou' + 'tX']());
            }), _0x1df89a(0x0, _0x2e64ce, 'top', function () {
                return this['_top'];
            }, function (_0x21d70c) {
                this['_top'] != _0x21d70c && (this['_top'] = _0x21d70c, this['resetLayou' + 'tY']());
            }), _0x1df89a(0x0, _0x2e64ce, 'bottom', function () {
                return this['_bottom'];
            }, function (_0x3abeb1) {
                this['_bottom'] != _0x3abeb1 && (this['_bottom'] = _0x3abeb1, this['resetLayou' + 'tY']());
            }), _0x1df89a(0x0, _0x2e64ce, 'left', function () {
                return this['_left'];
            }, function (_0x36e70c) {
                this['_left'] != _0x36e70c && (this['_left'] = _0x36e70c, this['resetLayou' + 'tX']());
            }), _0x1df89a(0x0, _0x2e64ce, 'right', function () {
                return this['_right'];
            }, function (_0x217eb5) {
                this['_right'] != _0x217eb5 && (this['_right'] = _0x217eb5, this['resetLayou' + 'tX']());
            }), _0x1df89a(0x0, _0x2e64ce, 'centerY', function () {
                return this['_centerY'];
            }, function (_0x41cf98) {
                this['_centerY'] != _0x41cf98 && (this['_centerY'] = _0x41cf98, this['resetLayou' + 'tY']());
            }), _0x26875a(_0x279117, [
                'EMPTY',
                function () {
                    return this['EMPTY'] = new _0x279117();
                }
            ]), _0x279117;
        }(), _0x943fcf = (function (_0x41bbc2) {
            function _0x35be54() {
                _0x35be54['__super']['call'](this);
            }
            _0x9a35ce(_0x35be54, 'laya.ui.UI' + 'Event', _0x4d7b52), _0x35be54['SHOW_TIP'] = 'showtip', _0x35be54['HIDE_TIP'] = 'hidetip';
        }(), function (_0x5e8b40) {
            function _0x5eff14() {
                this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['_source'] = null, this['_sizeGrid'] = null, this['_isChanged'] = !0x1, this['_offset'] = null, _0x5eff14['__super']['call'](this);
            }
            _0x9a35ce(_0x5eff14, 'laya.ui.Au' + 'toBitmap', _0x5e8b40);
            var _0x4a0352 = _0x5eff14['prototype'];
            return _0x4a0352['destroy'] = function () {
                _0x5e8b40['prototype']['destroy']['call'](this), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
            }, _0x4a0352['_setChange' + 'd'] = function () {
                this['_isChanged'] || (this['_isChanged'] = !0x0, _0x290223['timer']['callLater'](this, this['changeSour' + 'ce']));
            }, _0x4a0352['changeSour' + 'ce'] = function () {
                this['_isChanged'] = !0x1;
                var _0x5730ea = this['_source'];
                if (_0x5730ea && _0x5730ea['bitmap']) {
                    var _0x49a53e = this['width'], _0x4d332d = this['height'], _0x517855 = this['_sizeGrid'], _0x47231c = _0x5730ea['sourceWidt' + 'h'], _0x381055 = _0x5730ea['sourceHeig' + 'ht'];
                    if (!_0x517855 || _0x47231c === _0x49a53e && _0x381055 === _0x4d332d)
                        this['clear'](), this['drawTextur' + 'e'](_0x5730ea, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0x49a53e, _0x4d332d);
                    else {
                        this['clear']();
                        var _0x55f908 = _0x517855[0x0], _0x5e6a06 = _0x517855[0x1], _0x2f2fc6 = _0x517855[0x2], _0x1c18d1 = _0x517855[0x3], _0x3de95c = _0x517855[0x4], _0x2054eb = !0x1;
                        if (_0x49a53e == _0x47231c && (_0x1c18d1 = _0x5e6a06 = 0x0), _0x4d332d == _0x381055 && (_0x55f908 = _0x2f2fc6 = 0x0), _0x1c18d1 + _0x5e6a06 > _0x49a53e) {
                            var _0x40ed16 = _0x49a53e;
                            _0x2054eb = !0x0, _0x49a53e = _0x1c18d1 + _0x5e6a06, this['save'](), this['clipRect'](0x0, 0x0, _0x40ed16, _0x4d332d);
                        }
                        _0x1c18d1 && _0x55f908 && this['drawImage'](_0x5eff14['getTexture'](_0x5730ea, 0x0, 0x0, _0x1c18d1, _0x55f908), 0x0, 0x0, _0x1c18d1, _0x55f908), _0x5e6a06 && _0x55f908 && this['drawImage'](_0x5eff14['getTexture'](_0x5730ea, _0x47231c - _0x5e6a06, 0x0, _0x5e6a06, _0x55f908), _0x49a53e - _0x5e6a06, 0x0, _0x5e6a06, _0x55f908), _0x1c18d1 && _0x2f2fc6 && this['drawImage'](_0x5eff14['getTexture'](_0x5730ea, 0x0, _0x381055 - _0x2f2fc6, _0x1c18d1, _0x2f2fc6), 0x0, _0x4d332d - _0x2f2fc6, _0x1c18d1, _0x2f2fc6), _0x5e6a06 && _0x2f2fc6 && this['drawImage'](_0x5eff14['getTexture'](_0x5730ea, _0x47231c - _0x5e6a06, _0x381055 - _0x2f2fc6, _0x5e6a06, _0x2f2fc6), _0x49a53e - _0x5e6a06, _0x4d332d - _0x2f2fc6, _0x5e6a06, _0x2f2fc6), _0x55f908 && this['drawBitmap'](_0x3de95c, _0x5eff14['getTexture'](_0x5730ea, _0x1c18d1, 0x0, _0x47231c - _0x1c18d1 - _0x5e6a06, _0x55f908), _0x1c18d1, 0x0, _0x49a53e - _0x1c18d1 - _0x5e6a06, _0x55f908), _0x2f2fc6 && this['drawBitmap'](_0x3de95c, _0x5eff14['getTexture'](_0x5730ea, _0x1c18d1, _0x381055 - _0x2f2fc6, _0x47231c - _0x1c18d1 - _0x5e6a06, _0x2f2fc6), _0x1c18d1, _0x4d332d - _0x2f2fc6, _0x49a53e - _0x1c18d1 - _0x5e6a06, _0x2f2fc6), _0x1c18d1 && this['drawBitmap'](_0x3de95c, _0x5eff14['getTexture'](_0x5730ea, 0x0, _0x55f908, _0x1c18d1, _0x381055 - _0x55f908 - _0x2f2fc6), 0x0, _0x55f908, _0x1c18d1, _0x4d332d - _0x55f908 - _0x2f2fc6), _0x5e6a06 && this['drawBitmap'](_0x3de95c, _0x5eff14['getTexture'](_0x5730ea, _0x47231c - _0x5e6a06, _0x55f908, _0x5e6a06, _0x381055 - _0x55f908 - _0x2f2fc6), _0x49a53e - _0x5e6a06, _0x55f908, _0x5e6a06, _0x4d332d - _0x55f908 - _0x2f2fc6), this['drawBitmap'](_0x3de95c, _0x5eff14['getTexture'](_0x5730ea, _0x1c18d1, _0x55f908, _0x47231c - _0x1c18d1 - _0x5e6a06, _0x381055 - _0x55f908 - _0x2f2fc6), _0x1c18d1, _0x55f908, _0x49a53e - _0x1c18d1 - _0x5e6a06, _0x4d332d - _0x55f908 - _0x2f2fc6), _0x2054eb && this['restore']();
                    }
                    this['_repaint']();
                }
            }, _0x4a0352['drawBitmap'] = function (_0x58a430, _0x10ce09, _0x31e36c, _0x1f3c61, _0x1858a4, _0x2948f6) {
                void 0x0 === _0x1858a4 && (_0x1858a4 = 0x0), void 0x0 === _0x2948f6 && (_0x2948f6 = 0x0), _0x1858a4 < 0.1 || _0x2948f6 < 0.1 || (!_0x58a430 || _0x10ce09['width'] == _0x1858a4 && _0x10ce09['height'] == _0x2948f6 ? this['drawImage'](_0x10ce09, _0x31e36c, _0x1f3c61, _0x1858a4, _0x2948f6) : this['fillTextur' + 'e'](_0x10ce09, _0x31e36c, _0x1f3c61, _0x1858a4, _0x2948f6));
            }, _0x1df89a(0x0, _0x4a0352, 'sizeGrid', function () {
                return this['_sizeGrid'];
            }, function (_0x195f87) {
                this['_sizeGrid'] = _0x195f87, this['_setChange' + 'd']();
            }), _0x1df89a(0x0, _0x4a0352, 'width', function () {
                return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
            }, function (_0x1d84fb) {
                this['_width'] != _0x1d84fb && (this['_width'] = _0x1d84fb, this['_setChange' + 'd']());
            }), _0x1df89a(0x0, _0x4a0352, 'height', function () {
                return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
            }, function (_0x59d702) {
                this['_height'] != _0x59d702 && (this['_height'] = _0x59d702, this['_setChange' + 'd']());
            }), _0x1df89a(0x0, _0x4a0352, 'source', function () {
                return this['_source'];
            }, function (_0x3b867e) {
                _0x3b867e ? (this['_source'] = _0x3b867e, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
            }), _0x5eff14['getTexture'] = function (_0x4f72d6, _0x690625, _0x5d4b26, _0x2e1e77, _0x20bd41) {
                var _0x2c25d2;
                return _0x2e1e77 <= 0x0 && (_0x2e1e77 = 0x1), _0x20bd41 <= 0x0 && (_0x20bd41 = 0x1), _0x4f72d6['$_GID'] || (_0x4f72d6['$_GID'] = _0x5a1df2['getGID']()), _0x2c25d2 && _0x2c25d2['_getSource']() || (_0x2c25d2 = _0x3a0b6c['createFrom' + 'Texture'](_0x4f72d6, _0x690625, _0x5d4b26, _0x2e1e77, _0x20bd41)), _0x2c25d2;
            }, _0x5eff14;
        }(_0x16c6cf)), _0x566be1 = function (_0x509aa3) {
            function _0x416400() {
                this['_dataSourc' + 'e'] = null, this['_toolTip'] = null, this['_tag'] = null, this['_disabled'] = !0x1, this['_gray'] = !0x1, _0x416400['__super']['call'](this), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x23ac3b['EMPTY'], this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']();
            }
            _0x9a35ce(_0x416400, 'laya.ui.UI' + 'Component', _0x509aa3);
            var _0x43cbd5 = _0x416400['prototype'];
            return _0x43cbd5['destroy'] = function (_0x3a8a9d) {
                void 0x0 === _0x3a8a9d && (_0x3a8a9d = !0x0), _0x509aa3['prototype']['destroy']['call'](this, _0x3a8a9d), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
            }, _0x43cbd5['preinitial' + 'ize'] = function () {
            }, _0x43cbd5['createChil' + 'dren'] = function () {
            }, _0x43cbd5['initialize'] = function () {
            }, _0x43cbd5['measureWid' + 'th'] = function () {
                var _0x11559a = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x21cc17 = this['numChildre' + 'n'] - 0x1; _0x21cc17 > -0x1; _0x21cc17--) {
                    var _0x2f7fcb = this['getChildAt'](_0x21cc17);
                    _0x2f7fcb['_visible'] && (_0x11559a = Math['max'](_0x2f7fcb['_x'] + _0x2f7fcb['width'] * _0x2f7fcb['scaleX'], _0x11559a));
                }
                return _0x11559a;
            }, _0x43cbd5['commitMeas' + 'ure'] = function () {
            }, _0x43cbd5['measureHei' + 'ght'] = function () {
                var _0x1cef52 = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x1e691d = this['numChildre' + 'n'] - 0x1; _0x1e691d > -0x1; _0x1e691d--) {
                    var _0xe08790 = this['getChildAt'](_0x1e691d);
                    _0xe08790['_visible'] && (_0x1cef52 = Math['max'](_0xe08790['_y'] + _0xe08790['height'] * _0xe08790['scaleY'], _0x1cef52));
                }
                return _0x1cef52;
            }, _0x43cbd5['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize'), this['_widget'] !== _0x23ac3b['EMPTY'] && this['_widget']['resetLayou' + 't']();
            }, _0x43cbd5['onMouseOve' + 'r'] = function (_0x329252) {
                _0x290223['stage']['event']('showtip', this['_toolTip']);
            }, _0x43cbd5['onMouseOut'] = function (_0x164209) {
                _0x290223['stage']['event']('hidetip', this['_toolTip']);
            }, _0x43cbd5['_getWidget'] = function () {
                return this['_widget'] === _0x23ac3b['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x23ac3b)), this['_widget'];
            }, _0x43cbd5['onCompResi' + 'ze'] = function () {
                this['_sizeChang' + 'ed']();
            }, _0x43cbd5['_childChan' + 'ged'] = function (_0x38bfe0) {
                this['callLater'](this['_sizeChang' + 'ed']), _0x509aa3['prototype']['_childChan' + 'ged']['call'](this, _0x38bfe0);
            }, _0x1df89a(0x0, _0x43cbd5, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x651490) {
                _0x651490 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x651490);
            }), _0x1df89a(0x0, _0x43cbd5, 'width', function () {
                return this['_width'] ? this['_width'] : this['measureWid' + 'th']();
            }, function (_0x556324) {
                _0x290223['superGet'](_0x3cfa9d, this, 'width') != _0x556324 && (_0x290223['superSet'](_0x3cfa9d, this, 'width', _0x556324), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x1df89a(0x0, _0x43cbd5, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0xafbde1) {
                _0xafbde1 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0xafbde1);
            }), _0x1df89a(0x0, _0x43cbd5, 'height', function () {
                return this['_height'] ? this['_height'] : this['measureHei' + 'ght']();
            }, function (_0x4b770d) {
                _0x290223['superGet'](_0x3cfa9d, this, 'height') != _0x4b770d && (_0x290223['superSet'](_0x3cfa9d, this, 'height', _0x4b770d), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x1df89a(0x0, _0x43cbd5, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x2ed651) {
                _0x2ed651 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x2ed651);
            }), _0x1df89a(0x0, _0x43cbd5, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x10f8dc) {
                for (var _0x506730 in (this['_dataSourc' + 'e'] = _0x10f8dc, this['_dataSourc' + 'e']))
                    this['hasOwnProp' + 'erty'](_0x506730) && 'function' != typeof this[_0x506730] && (this[_0x506730] = this['_dataSourc' + 'e'][_0x506730]);
            }), _0x1df89a(0x0, _0x43cbd5, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x3c1914) {
                _0x3c1914 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x3c1914);
            }), _0x1df89a(0x0, _0x43cbd5, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x29041c) {
                _0x29041c != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x29041c);
            }), _0x1df89a(0x0, _0x43cbd5, 'right', function () {
                return this['_widget']['right'];
            }, function (_0xa95887) {
                _0xa95887 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0xa95887);
            }), _0x1df89a(0x0, _0x43cbd5, 'tag', function () {
                return this['_tag'];
            }, function (_0xd30a24) {
                this['_tag'] = _0xd30a24;
            }), _0x1df89a(0x0, _0x43cbd5, 'toolTip', function () {
                return this['_toolTip'];
            }, function (_0x3b61f4) {
                this['_toolTip'] != _0x3b61f4 && (this['_toolTip'] = _0x3b61f4, null != _0x3b61f4 ? (this['on']('mouseover', this, this['onMouseOve' + 'r']), this['on']('mouseout', this, this['onMouseOut'])) : (this['off']('mouseover', this, this['onMouseOve' + 'r']), this['off']('mouseout', this, this['onMouseOut'])));
            }), _0x1df89a(0x0, _0x43cbd5, 'gray', function () {
                return this['_gray'];
            }, function (_0x235d7d) {
                _0x235d7d !== this['_gray'] && (this['_gray'] = _0x235d7d, _0x3c7b88['gray'](this, _0x235d7d));
            }), _0x1df89a(0x0, _0x43cbd5, 'disabled', function () {
                return this['_disabled'];
            }, function (_0x1c4889) {
                _0x1c4889 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x1c4889, this['mouseEnabl' + 'ed'] = !_0x1c4889);
            }), _0x1df89a(0x0, _0x43cbd5, 'scaleX', _0x509aa3['prototype']['_$get_scal' + 'eX'], function (_0x1d5763) {
                _0x290223['superGet'](_0x3cfa9d, this, 'scaleX') != _0x1d5763 && (_0x290223['superSet'](_0x3cfa9d, this, 'scaleX', _0x1d5763), this['event']('resize'));
            }), _0x1df89a(0x0, _0x43cbd5, 'scaleY', _0x509aa3['prototype']['_$get_scal' + 'eY'], function (_0x4fb4a2) {
                _0x290223['superGet'](_0x3cfa9d, this, 'scaleY') != _0x4fb4a2 && (_0x290223['superSet'](_0x3cfa9d, this, 'scaleY', _0x4fb4a2), this['event']('resize'));
            }), _0x1df89a(0x0, _0x43cbd5, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x4864f2) {
                this['_anchorX'] != _0x4864f2 && (this['_anchorX'] = _0x4864f2, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x1df89a(0x0, _0x43cbd5, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x57c5f4) {
                this['_anchorY'] != _0x57c5f4 && (this['_anchorY'] = _0x57c5f4, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x416400;
        }(_0x3cfa9d), _0x349c9b = function (_0x51b44e) {
            function _0x5a12f2() {
                this['lockLayer'] = null, this['popupEffec' + 't'] = function (_0x252722) {
                    _0x252722['scale'](0x1, 0x1), _0x252722['_effectTwe' + 'en'] = _0x546c37['from'](_0x252722, {
                        'x': _0x290223['stage']['width'] / 0x2,
                        'y': _0x290223['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x5daf9b['backOut'], _0x3169bc['create'](this, this['doOpen'], [_0x252722]), 0x0, !0x1, !0x1);
                }, this['closeEffec' + 't'] = function (_0x11f451) {
                    _0x11f451['_effectTwe' + 'en'] = _0x546c37['to'](_0x11f451, {
                        'x': _0x290223['stage']['width'] / 0x2,
                        'y': _0x290223['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x5daf9b['strongOut'], _0x3169bc['create'](this, this['doClose'], [_0x11f451]), 0x0, !0x1, !0x1);
                }, _0x5a12f2['__super']['call'](this), this['maskLayer'] = new _0x3cfa9d(), this['popupEffec' + 'tHandler'] = new _0x3169bc(this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x3169bc(this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x290223['stage']['addChild'](this), _0x290223['stage']['on']('resize', this, this['_onResize']), _0x251845['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
            }
            _0x9a35ce(_0x5a12f2, 'laya.ui.Di' + 'alogManage' + 'r', _0x3cfa9d);
            var _0x2f55b9 = _0x5a12f2['prototype'];
            return _0x2f55b9['_closeOnSi' + 'de'] = function () {
                var _0x37ccfa = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
                _0x37ccfa instanceof laya['ui']['Dialog'] && _0x37ccfa['close']();
            }, _0x2f55b9['setLockVie' + 'w'] = function (_0x364896) {
                this['lockLayer'] || (this['lockLayer'] = new _0x213a7b(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x290223['stage']['width'], _0x290223['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x364896 && (_0x364896['centerX'] = _0x364896['centerY'] = 0x0, this['lockLayer']['addChild'](_0x364896));
            }, _0x2f55b9['_onResize'] = function (_0x499ea8) {
                var _0x154f7f = this['maskLayer']['width'] = _0x290223['stage']['width'], _0x1d886b = this['maskLayer']['height'] = _0x290223['stage']['height'];
                this['lockLayer'] && this['lockLayer']['size'](_0x154f7f, _0x1d886b), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x154f7f, _0x1d886b, _0x251845['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x251845['popupBgAlp' + 'ha'];
                for (var _0x119073 = this['numChildre' + 'n'] - 0x1; _0x119073 > -0x1; _0x119073--) {
                    var _0x21c528 = this['getChildAt'](_0x119073);
                    _0x21c528['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x21c528);
                }
            }, _0x2f55b9['_centerDia' + 'log'] = function (_0x339e11) {
                _0x339e11['x'] = Math['round']((_0x290223['stage']['width'] - _0x339e11['width'] >> 0x1) + _0x339e11['pivotX']), _0x339e11['y'] = Math['round']((_0x290223['stage']['height'] - _0x339e11['height'] >> 0x1) + _0x339e11['pivotY']);
            }, _0x2f55b9['open'] = function (_0x105347, _0x497d55, _0x265d83) {
                void 0x0 === _0x497d55 && (_0x497d55 = !0x1), void 0x0 === _0x265d83 && (_0x265d83 = !0x1), _0x497d55 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x105347), _0x105347['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x105347), this['addChild'](_0x105347), (_0x105347['isModal'] || this['_getBit'](0x20)) && _0x290223['timer']['callLater'](this, this['_checkMask']), _0x265d83 && null != _0x105347['popupEffec' + 't'] ? _0x105347['popupEffec' + 't']['runWith'](_0x105347) : this['doOpen'](_0x105347), this['event']('open');
            }, _0x2f55b9['_clearDial' + 'ogEffect'] = function (_0x171570) {
                _0x171570['_effectTwe' + 'en'] && (_0x546c37['clear'](_0x171570['_effectTwe' + 'en']), _0x171570['_effectTwe' + 'en'] = null);
            }, _0x2f55b9['doOpen'] = function (_0x2bb1c1) {
                _0x2bb1c1['onOpened'](_0x2bb1c1['_param']);
            }, _0x2f55b9['lock'] = function (_0x338800) {
                this['lockLayer'] && (_0x338800 ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
            }, _0x2f55b9['close'] = function (_0x2ccc0d) {
                this['_clearDial' + 'ogEffect'](_0x2ccc0d), _0x2ccc0d['isShowEffe' + 'ct'] && null != _0x2ccc0d['closeEffec' + 't'] ? _0x2ccc0d['closeEffec' + 't']['runWith']([_0x2ccc0d]) : this['doClose'](_0x2ccc0d), this['event']('close');
            }, _0x2f55b9['doClose'] = function (_0x54cb16) {
                _0x54cb16['removeSelf'](), _0x54cb16['isModal'] && this['_checkMask'](), _0x54cb16['closeHandl' + 'er'] && _0x54cb16['closeHandl' + 'er']['runWith'](_0x54cb16['closeType']), _0x54cb16['onClosed'](_0x54cb16['closeType']), _0x54cb16['autoDestro' + 'yAtClosed'] && _0x54cb16['destroy']();
            }, _0x2f55b9['closeAll'] = function () {
                this['_closeAll'](), this['event']('close');
            }, _0x2f55b9['_closeAll'] = function () {
                for (var _0xce07df = this['numChildre' + 'n'] - 0x1; _0xce07df > -0x1; _0xce07df--) {
                    var _0x682a85 = this['getChildAt'](_0xce07df);
                    _0x682a85 && null != _0x682a85['close'] && this['doClose'](_0x682a85);
                }
            }, _0x2f55b9['getDialogs' + 'ByGroup'] = function (_0x1011cd) {
                for (var _0x4c96b0 = [], _0x67aa78 = this['numChildre' + 'n'] - 0x1; _0x67aa78 > -0x1; _0x67aa78--) {
                    var _0x3dab46 = this['getChildAt'](_0x67aa78);
                    _0x3dab46 && _0x3dab46['group'] === _0x1011cd && _0x4c96b0['push'](_0x3dab46);
                }
                return _0x4c96b0;
            }, _0x2f55b9['closeByGro' + 'up'] = function (_0x2468a7) {
                for (var _0x255be7 = [], _0x203729 = this['numChildre' + 'n'] - 0x1; _0x203729 > -0x1; _0x203729--) {
                    var _0x2beb7c = this['getChildAt'](_0x203729);
                    _0x2beb7c && _0x2beb7c['group'] === _0x2468a7 && (_0x2beb7c['close'](), _0x255be7['push'](_0x2beb7c));
                }
                return _0x255be7;
            }, _0x2f55b9['_checkMask'] = function () {
                this['maskLayer']['removeSelf']();
                for (var _0x450842 = this['numChildre' + 'n'] - 0x1; _0x450842 > -0x1; _0x450842--) {
                    var _0x46717b = this['getChildAt'](_0x450842);
                    if (_0x46717b && _0x46717b['isModal'])
                        return void this['addChildAt'](this['maskLayer'], _0x450842);
                }
            }, _0x5a12f2;
        }(), _0x1d5c18 = function (_0x18482b) {
            function _0x1058bc() {
                this['_watchMap'] = {}, this['_widget'] = null, this['_dataSourc' + 'e'] = null, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x23ac3b['EMPTY'], _0x1058bc['__super']['call'](this);
            }
            _0x9a35ce(_0x1058bc, 'laya.ui.Vi' + 'ew', _0x18482b);
            var _0x50e750 = _0x1058bc['prototype'];
            return _0x50e750['destroy'] = function (_0x51cb32) {
                void 0x0 === _0x51cb32 && (_0x51cb32 = !0x0), this['_watchMap'] = null, _0x18482b['prototype']['destroy']['call'](this, _0x51cb32);
            }, _0x50e750['changeData'] = function (_0x2a5818) {
                var _0xf8233c = this['_watchMap'][_0x2a5818];
                if (_0xf8233c)
                    for (var _0x455ab6 = 0x0, _0x14726c = _0xf8233c['length']; _0x455ab6 < _0x14726c; _0x455ab6++) {
                        _0xf8233c[_0x455ab6]['exe'](this);
                    }
            }, _0x50e750['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize');
            }, _0x50e750['_getWidget'] = function () {
                return this['_widget'] === _0x23ac3b['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x23ac3b)), this['_widget'];
            }, _0x50e750['loadUI'] = function (_0xf10bfa) {
                var _0x34906a = _0x1058bc['uiMap'][_0xf10bfa];
                _0x1058bc['uiMap'] && this['createView'](_0x34906a);
            }, _0x1df89a(0x0, _0x50e750, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x200d52) {
                this['_anchorX'] != _0x200d52 && (this['_anchorX'] = _0x200d52, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x1df89a(0x0, _0x50e750, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x45275) {
                _0x45275 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x45275);
            }), _0x1df89a(0x0, _0x50e750, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x52ccc2) {
                _0x52ccc2 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x52ccc2);
            }), _0x1df89a(0x0, _0x50e750, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x2ce97a) {
                _0x2ce97a != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x2ce97a);
            }), _0x1df89a(0x0, _0x50e750, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x51a70a) {
                for (var _0x6d7ec in (this['_dataSourc' + 'e'] = _0x51a70a, _0x51a70a)) {
                    var _0x4b1449 = this['getChildBy' + 'Name'](_0x6d7ec);
                    _0x4b1449 instanceof laya['ui']['UIComponen' + 't'] ? _0x4b1449['dataSource'] = _0x51a70a[_0x6d7ec] : this['hasOwnProp' + 'erty'](_0x6d7ec) && 'function' != typeof this[_0x6d7ec] && (this[_0x6d7ec] = _0x51a70a[_0x6d7ec]);
                }
            }), _0x1df89a(0x0, _0x50e750, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x5b9795) {
                _0x5b9795 != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x5b9795);
            }), _0x1df89a(0x0, _0x50e750, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x5b8118) {
                _0x5b8118 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x5b8118);
            }), _0x1df89a(0x0, _0x50e750, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x9a251c) {
                this['_anchorY'] != _0x9a251c && (this['_anchorY'] = _0x9a251c, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x1df89a(0x0, _0x50e750, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x4cdb53) {
                _0x4cdb53 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x4cdb53);
            }), _0x1058bc['regCompone' + 'nt'] = function (_0x30a619, _0x45ea27) {
                _0x27b938['regClass'](_0x30a619, _0x45ea27);
            }, _0x1058bc['regViewRun' + 'time'] = function (_0x40ad01, _0xdc4cf4) {
                _0x27b938['regClass'](_0x40ad01, _0xdc4cf4);
            }, _0x1058bc['regUI'] = function (_0x227da3, _0x423bfa) {
                _0x290223['loader']['cacheRes'](_0x227da3, _0x423bfa);
            }, _0x1058bc['uiMap'] = {}, _0x1058bc['__init$'] = function () {
                _0x27b938['regShortCl' + 'assName']([
                    _0x420800,
                    _0x1851a2,
                    _0x19baa0,
                    _0x1020d2,
                    _0x213a7b,
                    _0x144425,
                    _0x1851a2,
                    _0x67044c,
                    _0x6e1d29,
                    _0x1c3d29,
                    _0x566be1,
                    _0x19b13a,
                    _0x310e66,
                    _0x1f8bdb,
                    _0x1202c1,
                    _0x4b8986,
                    _0x4a8d75,
                    _0x399022,
                    _0x99cd14,
                    _0x25ee5f,
                    _0x571641,
                    _0x17643a,
                    _0x1cdc48,
                    _0x4e219d,
                    _0x1058bc,
                    _0x57f91f,
                    _0x55acad,
                    _0x4bce9b,
                    _0x144345,
                    _0x71c298,
                    _0x4483e3,
                    _0x3cfa9d,
                    _0x2690df,
                    _0x4e6a74,
                    _0x3f9733
                ]);
            }, _0x1058bc;
        }(_0x1554e0), _0x213a7b = (function (_0x357331) {
            function _0x3fddd5() {
                this['_$4__textu' + 're'] = null, _0x3fddd5['__super']['call'](this), this['_width'] = this['_height'] = 0xc8;
                var _0xa3ab3c = new _0x3a0b6c();
                if (!_0x290223['Texture2D'])
                    throw new Error('WXOpenData' + 'Viewer:web' + 'gl\x20not\x20fou' + 'nd!');
                _0xa3ab3c['bitmap'] = new _0x290223['Texture2D'](), this['texture'] = _0xa3ab3c;
            }
            _0x9a35ce(_0x3fddd5, 'laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x357331);
            var _0x4ac987 = _0x3fddd5['prototype'];
            _0x4ac987['onEnable'] = function () {
                this['postMsg']({
                    'type': 'display',
                    'rate': _0x290223['stage']['frameRate']
                }), _0x105438['wx'] && _0x105438['sharedCanv' + 'as'] && _0x290223['timer']['frameLoop'](0x1, this, this['_onLoop']);
            }, _0x4ac987['onDisable'] = function () {
                this['postMsg']({ 'type': 'undisplay' }), _0x290223['timer']['clear'](this, this['_onLoop']);
            }, _0x4ac987['_onLoop'] = function () {
                this['texture']['bitmap']['loadImageS' + 'ource'](_0x105438['sharedCanv' + 'as']);
            }, _0x4ac987['_postMsg'] = function () {
                var _0x558dec = new _0x3de2fa();
                _0x558dec['translate'](this['x'], this['y']);
                var _0x199f8f = _0x290223['stage'];
                _0x558dec['scale'](_0x199f8f['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x199f8f['transform']['getScaleX'](), _0x199f8f['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x199f8f['transform']['getScaleY']()), this['postMsg']({
                    'type': 'changeMatr' + 'ix',
                    'a': _0x558dec['a'],
                    'b': _0x558dec['b'],
                    'c': _0x558dec['c'],
                    'd': _0x558dec['d'],
                    'tx': _0x558dec['tx'],
                    'ty': _0x558dec['ty'],
                    'w': this['width'],
                    'h': this['height']
                });
            }, _0x4ac987['postMsg'] = function (_0x53df9d) {
                _0x105438['wx'] && _0x105438['wx']['getOpenDat' + 'aContext'] && _0x105438['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x53df9d);
            }, _0x1df89a(0x0, _0x4ac987, 'x', _0x357331['prototype']['_$get_x'], function (_0x2bc0f6) {
                _0x290223['superSet'](_0x566be1, this, 'x', _0x2bc0f6), this['callLater'](this['_postMsg']);
            }), _0x1df89a(0x0, _0x4ac987, 'width', _0x357331['prototype']['_$get_widt' + 'h'], function (_0x5f1d18) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x5f1d18), _0x105438['sharedCanv' + 'as'] && (_0x105438['sharedCanv' + 'as']['width'] = _0x5f1d18), this['callLater'](this['_postMsg']);
            }), _0x1df89a(0x0, _0x4ac987, 'height', _0x357331['prototype']['_$get_heig' + 'ht'], function (_0x25ef35) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x25ef35), _0x105438['sharedCanv' + 'as'] && (_0x105438['sharedCanv' + 'as']['height'] = _0x25ef35), this['callLater'](this['_postMsg']);
            }), _0x1df89a(0x0, _0x4ac987, 'y', _0x357331['prototype']['_$get_y'], function (_0x50811a) {
                _0x290223['superSet'](_0x566be1, this, 'y', _0x50811a), this['callLater'](this['_postMsg']);
            });
        }(_0x566be1), function (_0x1664cd) {
            function _0x527570() {
                this['_bgColor'] = null, _0x527570['__super']['call'](this);
            }
            _0x9a35ce(_0x527570, 'laya.ui.Bo' + 'x', _0x1664cd);
            var _0x34543f = _0x527570['prototype'];
            return _0x290223['imps'](_0x34543f, { 'laya.ui.IBox': !0x0 }), _0x34543f['_onResize'] = function (_0x509b82) {
                this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
            }, _0x1df89a(0x0, _0x34543f, 'dataSource', _0x1664cd['prototype']['_$get_data' + 'Source'], function (_0xb796d1) {
                for (var _0x24ac28 in (this['_dataSourc' + 'e'] = _0xb796d1, _0xb796d1)) {
                    var _0x304766 = this['getChildBy' + 'Name'](_0x24ac28);
                    _0x304766 ? _0x304766['dataSource'] = _0xb796d1[_0x24ac28] : this['hasOwnProp' + 'erty'](_0x24ac28) && 'function' != typeof this[_0x24ac28] && (this[_0x24ac28] = _0xb796d1[_0x24ac28]);
                }
            }), _0x1df89a(0x0, _0x34543f, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x39d39a) {
                this['_bgColor'] = _0x39d39a, _0x39d39a ? (this['_onResize'](null), this['on']('resize', this, this['_onResize'])) : (this['graphics']['clear'](), this['off']('resize', this, this['_onResize']));
            }), _0x527570;
        }(_0x566be1)), _0x1851a2 = function (_0x24fe38) {
            function _0x262d09(_0x460f7a, _0x543265) {
                this['toggle'] = !0x1, this['_bitmap'] = null, this['_text'] = null, this['_strokeCol' + 'ors'] = null, this['_state'] = 0x0, this['_selected'] = !0x1, this['_skin'] = null, this['_autoSize'] = !0x0, this['_sources'] = null, this['_clickHand' + 'ler'] = null, this['_stateChan' + 'ged'] = !0x1, _0x262d09['__super']['call'](this), this['_labelColo' + 'rs'] = _0xf96cc0['buttonLabe' + 'lColors'], this['_stateNum'] = _0xf96cc0['buttonStat' + 'eNum'], void 0x0 === _0x543265 && (_0x543265 = ''), this['skin'] = _0x460f7a, this['label'] = _0x543265;
            }
            _0x9a35ce(_0x262d09, 'laya.ui.Bu' + 'tton', _0x24fe38);
            var _0x41ab77 = _0x262d09['prototype'];
            return _0x290223['imps'](_0x41ab77, { 'laya.ui.ISelect': !0x0 }), _0x41ab77['destroy'] = function (_0x5d4b6c) {
                void 0x0 === _0x5d4b6c && (_0x5d4b6c = !0x0), _0x24fe38['prototype']['destroy']['call'](this, _0x5d4b6c), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x5d4b6c), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
            }, _0x41ab77['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x943fcf();
            }, _0x41ab77['createText'] = function () {
                this['_text'] || (this['_text'] = new _0x4e6a74(), this['_text']['overflow'] = 'hidden', this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
            }, _0x41ab77['initialize'] = function () {
                0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](0x40, !0x0)), this['_createLis' + 'tener']('mouseover', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseout', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mousedown', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseup', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('click', this, this['onMouse'], null, !0x1, !0x1);
            }, _0x41ab77['onMouse'] = function (_0x11fcde) {
                if (!0x1 !== this['toggle'] || !this['_selected'])
                    return 'click' === _0x11fcde['type'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x262d09['stateMap'][_0x11fcde['type']]));
            }, _0x41ab77['_skinLoade' + 'd'] = function () {
                this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x41ab77['changeClip' + 's'] = function () {
                var _0xb044ed = _0x5a5cdd['getRes'](this['_skin']);
                if (_0xb044ed) {
                    var _0x18df2b = _0xb044ed['sourceWidt' + 'h'], _0x796627 = _0xb044ed['sourceHeig' + 'ht'] / this['_stateNum'];
                    _0xb044ed['$_GID'] || (_0xb044ed['$_GID'] = _0x5a1df2['getGID']());
                    var _0x1f09c5 = _0xb044ed['$_GID'] + '-' + this['_stateNum'], _0xc55305 = _0x5179a1['I']['get'](_0x1f09c5);
                    if (_0x5a1df2['isOkTextur' + 'eList'](_0xc55305) || (_0xc55305 = null), _0xc55305)
                        this['_sources'] = _0xc55305;
                    else {
                        if (this['_sources'] = [], 0x1 === this['_stateNum'])
                            this['_sources']['push'](_0xb044ed);
                        else {
                            for (var _0x461ad5 = 0x0; _0x461ad5 < this['_stateNum']; _0x461ad5++)
                                this['_sources']['push'](_0x3a0b6c['createFrom' + 'Texture'](_0xb044ed, 0x0, _0x796627 * _0x461ad5, _0x18df2b, _0x796627));
                        }
                        _0x5179a1['I']['set'](_0x1f09c5, this['_sources']);
                    }
                    this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x18df2b, this['_bitmap']['height'] = this['_height'] || _0x796627, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x18df2b);
                } else
                    console['log']('lose\x20skin', this['_skin']);
            }, _0x41ab77['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_autoSize'] ? this['_bitmap']['width'] : (this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0));
            }, _0x41ab77['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
            }, _0x41ab77['changeStat' + 'e'] = function () {
                this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
                var _0x4153e4 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
                this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x4153e4]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x4153e4], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x4153e4]));
            }, _0x41ab77['_setStateC' + 'hanged'] = function () {
                this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
            }, _0x1df89a(0x0, _0x41ab77, 'skin', function () {
                return this['_skin'];
            }, function (_0x572476) {
                this['_skin'] != _0x572476 && (this['_skin'] = _0x572476, _0x572476 ? _0x5a5cdd['getRes'](_0x572476) ? this['_skinLoade' + 'd']() : _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0x41ab77, 'labelPaddi' + 'ng', function () {
                return this['createText'](), this['_text']['padding']['join'](',');
            }, function (_0x3983e3) {
                this['createText'](), this['_text']['padding'] = _0x3c7b88['fillArray'](_0xf96cc0['labelPaddi' + 'ng'], _0x3983e3, Number);
            }), _0x1df89a(0x0, _0x41ab77, 'state', function () {
                return this['_state'];
            }, function (_0x139dc7) {
                this['_state'] != _0x139dc7 && (this['_state'] = _0x139dc7, this['_setStateC' + 'hanged']());
            }), _0x1df89a(0x0, _0x41ab77, 'text', function () {
                return this['createText'](), this['_text'];
            }), _0x1df89a(0x0, _0x41ab77, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x57420a) {
                'string' == typeof _0x57420a && (_0x57420a = parseInt(_0x57420a)), this['_stateNum'] != _0x57420a && (this['_stateNum'] = _0x57420a < 0x1 ? 0x1 : _0x57420a > 0x3 ? 0x3 : _0x57420a, this['callLater'](this['changeClip' + 's']));
            }), _0x1df89a(0x0, _0x41ab77, 'label', function () {
                return this['_text'] ? this['_text']['text'] : null;
            }, function (_0x181b69) {
                (this['_text'] || _0x181b69) && (this['createText'](), this['_text']['text'] != _0x181b69 && (_0x181b69 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0x181b69 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
            }), _0x1df89a(0x0, _0x41ab77, 'labelSize', function () {
                return this['createText'](), this['_text']['fontSize'];
            }, function (_0x226dae) {
                this['createText'](), this['_text']['fontSize'] = _0x226dae;
            }), _0x1df89a(0x0, _0x41ab77, 'selected', function () {
                return this['_selected'];
            }, function (_0x3d02b0) {
                this['_selected'] != _0x3d02b0 && (this['_selected'] = _0x3d02b0, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event']('change'));
            }), _0x1df89a(0x0, _0x41ab77, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
            }, function (_0x340138) {
                this['_strokeCol' + 'ors'] = _0x3c7b88['fillArray'](_0xf96cc0['buttonLabe' + 'lColors'], _0x340138, String), this['_setStateC' + 'hanged']();
            }), _0x1df89a(0x0, _0x41ab77, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs']['join'](',');
            }, function (_0x228549) {
                this['_labelColo' + 'rs'] = _0x3c7b88['fillArray'](_0xf96cc0['buttonLabe' + 'lColors'], _0x228549, String), this['_setStateC' + 'hanged']();
            }), _0x1df89a(0x0, _0x41ab77, 'labelStrok' + 'e', function () {
                return this['createText'](), this['_text']['stroke'];
            }, function (_0x11afce) {
                this['createText'](), this['_text']['stroke'] = _0x11afce;
            }), _0x1df89a(0x0, _0x41ab77, 'labelStrok' + 'eColor', function () {
                return this['createText'](), this['_text']['strokeColo' + 'r'];
            }, function (_0x59d142) {
                this['createText'](), this['_text']['strokeColo' + 'r'] = _0x59d142;
            }), _0x1df89a(0x0, _0x41ab77, 'labelBold', function () {
                return this['createText'](), this['_text']['bold'];
            }, function (_0x443afd) {
                this['createText'](), this['_text']['bold'] = _0x443afd;
            }), _0x1df89a(0x0, _0x41ab77, 'labelFont', function () {
                return this['createText'](), this['_text']['font'];
            }, function (_0x12601b) {
                this['createText'](), this['_text']['font'] = _0x12601b;
            }), _0x1df89a(0x0, _0x41ab77, 'labelAlign', function () {
                return this['createText'](), this['_text']['align'];
            }, function (_0x14acb3) {
                this['createText'](), this['_text']['align'] = _0x14acb3;
            }), _0x1df89a(0x0, _0x41ab77, 'clickHandl' + 'er', function () {
                return this['_clickHand' + 'ler'];
            }, function (_0x39b841) {
                this['_clickHand' + 'ler'] = _0x39b841;
            }), _0x1df89a(0x0, _0x41ab77, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x34cd96) {
                this['_bitmap']['sizeGrid'] = _0x3c7b88['fillArray'](_0xf96cc0['defaultSiz' + 'eGrid'], _0x34cd96, Number);
            }), _0x1df89a(0x0, _0x41ab77, 'width', _0x24fe38['prototype']['_$get_widt' + 'h'], function (_0x515e25) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x515e25), this['_autoSize'] && (this['_bitmap']['width'] = _0x515e25, this['_text'] && (this['_text']['width'] = _0x515e25));
            }), _0x1df89a(0x0, _0x41ab77, 'height', _0x24fe38['prototype']['_$get_heig' + 'ht'], function (_0x1ffc17) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x1ffc17), this['_autoSize'] && (this['_bitmap']['height'] = _0x1ffc17, this['_text'] && (this['_text']['height'] = _0x1ffc17));
            }), _0x1df89a(0x0, _0x41ab77, 'dataSource', _0x24fe38['prototype']['_$get_data' + 'Source'], function (_0x1a05cb) {
                this['_dataSourc' + 'e'] = _0x1a05cb, 'number' == typeof _0x1a05cb || 'string' == typeof _0x1a05cb ? this['label'] = _0x1a05cb + '' : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x1a05cb);
            }), _0x1df89a(0x0, _0x41ab77, 'iconOffset', function () {
                return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
            }, function (_0x3f7b51) {
                this['_bitmap']['_offset'] = _0x3f7b51 ? _0x3c7b88['fillArray']([
                    0x1,
                    0x1
                ], _0x3f7b51, Number) : [];
            }), _0x26875a(_0x262d09, [
                'stateMap',
                function () {
                    return this['stateMap'] = {
                        'mouseup': 0x0,
                        'mouseover': 0x1,
                        'mousedown': 0x2,
                        'mouseout': 0x0
                    };
                }
            ]), _0x262d09;
        }(_0x566be1), _0x1f8bdb = function (_0x5852e0) {
            function _0x429342(_0x3e128e) {
                this['_bitmap'] = null, this['_skin'] = null, this['_group'] = null, _0x429342['__super']['call'](this), this['skin'] = _0x3e128e;
            }
            _0x9a35ce(_0x429342, 'laya.ui.Im' + 'age', _0x5852e0);
            var _0x5b8945 = _0x429342['prototype'];
            return _0x5b8945['destroy'] = function (_0x2f0150) {
                void 0x0 === _0x2f0150 && (_0x2f0150 = !0x0), _0x5852e0['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
            }, _0x5b8945['dispose'] = function () {
                this['destroy'](!0x0), _0x290223['loader']['clearRes'](this['_skin']);
            }, _0x5b8945['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x943fcf(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0x5b8945['setSource'] = function (_0x50a086, _0x14c241) {
                _0x50a086 === this['_skin'] && _0x14c241 && (this['source'] = _0x14c241, this['onCompResi' + 'ze']());
            }, _0x5b8945['measureWid' + 'th'] = function () {
                return this['_bitmap']['width'];
            }, _0x5b8945['measureHei' + 'ght'] = function () {
                return this['_bitmap']['height'];
            }, _0x1df89a(0x0, _0x5b8945, 'dataSource', _0x5852e0['prototype']['_$get_data' + 'Source'], function (_0x368c15) {
                this['_dataSourc' + 'e'] = _0x368c15, 'string' == typeof _0x368c15 ? this['skin'] = _0x368c15 : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x368c15);
            }), _0x1df89a(0x0, _0x5b8945, 'source', function () {
                return this['_bitmap']['source'];
            }, function (_0x50e645) {
                this['_bitmap'] && (this['_bitmap']['source'] = _0x50e645, this['event']('loaded'), this['repaint']());
            }), _0x1df89a(0x0, _0x5b8945, 'skin', function () {
                return this['_skin'];
            }, function (_0xc109a4) {
                if (this['_skin'] != _0xc109a4) {
                    if (this['_skin'] = _0xc109a4, _0xc109a4) {
                        var _0x1d0d28 = _0x5a5cdd['getRes'](_0xc109a4);
                        _0x1d0d28 ? (this['source'] = _0x1d0d28, this['onCompResi' + 'ze']()) : _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['setSource'], [this['_skin']]), null, 'image', 0x1, !0x0, this['_group']);
                    } else
                        this['source'] = null;
                }
            }), _0x1df89a(0x0, _0x5b8945, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x583227) {
                this['_bitmap']['sizeGrid'] = _0x3c7b88['fillArray'](_0xf96cc0['defaultSiz' + 'eGrid'], _0x583227, Number);
            }), _0x1df89a(0x0, _0x5b8945, 'group', function () {
                return this['_group'];
            }, function (_0x5eb25a) {
                _0x5eb25a && this['_skin'] && _0x5a5cdd['setGroup'](this['_skin'], _0x5eb25a), this['_group'] = _0x5eb25a;
            }), _0x1df89a(0x0, _0x5b8945, 'width', _0x5852e0['prototype']['_$get_widt' + 'h'], function (_0x67d244) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x67d244), this['_bitmap']['width'] = 0x0 == _0x67d244 ? 1e-7 : _0x67d244;
            }), _0x1df89a(0x0, _0x5b8945, 'height', _0x5852e0['prototype']['_$get_heig' + 'ht'], function (_0x2ca17) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x2ca17), this['_bitmap']['height'] = 0x0 == _0x2ca17 ? 1e-7 : _0x2ca17;
            }), _0x429342;
        }(_0x566be1), _0x1202c1 = function (_0x4635f2) {
            function _0x228791(_0x3de8d7) {
                this['_tf'] = null, _0x228791['__super']['call'](this), void 0x0 === _0x3de8d7 && (_0x3de8d7 = ''), this['text'] = _0x3de8d7;
            }
            _0x9a35ce(_0x228791, 'laya.ui.La' + 'bel', _0x4635f2);
            var _0x5c149a = _0x228791['prototype'];
            return _0x5c149a['destroy'] = function (_0x10ffc0) {
                void 0x0 === _0x10ffc0 && (_0x10ffc0 = !0x0), _0x4635f2['prototype']['destroy']['call'](this, _0x10ffc0), this['_tf'] = null;
            }, _0x5c149a['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x4e6a74());
            }, _0x5c149a['changeText'] = function (_0x148e74) {
                this['_tf']['changeText'](_0x148e74);
            }, _0x5c149a['measureWid' + 'th'] = function () {
                return this['_tf']['width'];
            }, _0x5c149a['measureHei' + 'ght'] = function () {
                return this['_tf']['height'];
            }, _0x1df89a(0x0, _0x5c149a, 'padding', function () {
                return this['_tf']['padding']['join'](',');
            }, function (_0x1f6ad2) {
                this['_tf']['padding'] = _0x3c7b88['fillArray'](_0xf96cc0['labelPaddi' + 'ng'], _0x1f6ad2, Number);
            }), _0x1df89a(0x0, _0x5c149a, 'bold', function () {
                return this['_tf']['bold'];
            }, function (_0x3b505a) {
                this['_tf']['bold'] = _0x3b505a;
            }), _0x1df89a(0x0, _0x5c149a, 'align', function () {
                return this['_tf']['align'];
            }, function (_0x48d8bc) {
                this['_tf']['align'] = _0x48d8bc;
            }), _0x1df89a(0x0, _0x5c149a, 'text', function () {
                return this['_tf']['text'];
            }, function (_0x5e15b1) {
                this['_tf']['text'] != _0x5e15b1 && (_0x5e15b1 && (_0x5e15b1 = _0x3c7b88['adptString'](_0x5e15b1 + '')), this['_tf']['text'] = _0x5e15b1, this['event']('change'), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
            }), _0x1df89a(0x0, _0x5c149a, 'italic', function () {
                return this['_tf']['italic'];
            }, function (_0x504b98) {
                this['_tf']['italic'] = _0x504b98;
            }), _0x1df89a(0x0, _0x5c149a, 'wordWrap', function () {
                return this['_tf']['wordWrap'];
            }, function (_0x1c2ace) {
                this['_tf']['wordWrap'] = _0x1c2ace;
            }), _0x1df89a(0x0, _0x5c149a, 'font', function () {
                return this['_tf']['font'];
            }, function (_0x5c7be2) {
                this['_tf']['font'] = _0x5c7be2;
            }), _0x1df89a(0x0, _0x5c149a, 'dataSource', _0x4635f2['prototype']['_$get_data' + 'Source'], function (_0x379f4f) {
                this['_dataSourc' + 'e'] = _0x379f4f, 'number' == typeof _0x379f4f || 'string' == typeof _0x379f4f ? this['text'] = _0x379f4f + '' : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x379f4f);
            }), _0x1df89a(0x0, _0x5c149a, 'color', function () {
                return this['_tf']['color'];
            }, function (_0x4523f4) {
                this['_tf']['color'] = _0x4523f4;
            }), _0x1df89a(0x0, _0x5c149a, 'valign', function () {
                return this['_tf']['valign'];
            }, function (_0x564f19) {
                this['_tf']['valign'] = _0x564f19;
            }), _0x1df89a(0x0, _0x5c149a, 'leading', function () {
                return this['_tf']['leading'];
            }, function (_0x4ce6a2) {
                this['_tf']['leading'] = _0x4ce6a2;
            }), _0x1df89a(0x0, _0x5c149a, 'fontSize', function () {
                return this['_tf']['fontSize'];
            }, function (_0x22456d) {
                this['_tf']['fontSize'] = _0x22456d;
            }), _0x1df89a(0x0, _0x5c149a, 'bgColor', function () {
                return this['_tf']['bgColor'];
            }, function (_0x26c03c) {
                this['_tf']['bgColor'] = _0x26c03c;
            }), _0x1df89a(0x0, _0x5c149a, 'borderColo' + 'r', function () {
                return this['_tf']['borderColo' + 'r'];
            }, function (_0x584dfb) {
                this['_tf']['borderColo' + 'r'] = _0x584dfb;
            }), _0x1df89a(0x0, _0x5c149a, 'stroke', function () {
                return this['_tf']['stroke'];
            }, function (_0x2f0d7a) {
                this['_tf']['stroke'] = _0x2f0d7a;
            }), _0x1df89a(0x0, _0x5c149a, 'strokeColo' + 'r', function () {
                return this['_tf']['strokeColo' + 'r'];
            }, function (_0x1b5f1d) {
                this['_tf']['strokeColo' + 'r'] = _0x1b5f1d;
            }), _0x1df89a(0x0, _0x5c149a, 'textField', function () {
                return this['_tf'];
            }), _0x1df89a(0x0, _0x5c149a, 'width', function () {
                return this['_width'] || this['_tf']['text'] ? _0x290223['superGet'](_0x566be1, this, 'width') : 0x0;
            }, function (_0x400e12) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x400e12), this['_tf']['width'] = _0x400e12;
            }), _0x1df89a(0x0, _0x5c149a, 'height', function () {
                return this['_height'] || this['_tf']['text'] ? _0x290223['superGet'](_0x566be1, this, 'height') : 0x0;
            }, function (_0x1d8383) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x1d8383), this['_tf']['height'] = _0x1d8383;
            }), _0x1df89a(0x0, _0x5c149a, 'overflow', function () {
                return this['_tf']['overflow'];
            }, function (_0x4ce4f6) {
                this['_tf']['overflow'] = _0x4ce4f6;
            }), _0x1df89a(0x0, _0x5c149a, 'underline', function () {
                return this['_tf']['underline'];
            }, function (_0x3ab54f) {
                this['_tf']['underline'] = _0x3ab54f;
            }), _0x1df89a(0x0, _0x5c149a, 'underlineC' + 'olor', function () {
                return this['_tf']['underlineC' + 'olor'];
            }, function (_0x26bb75) {
                this['_tf']['underlineC' + 'olor'] = _0x26bb75;
            }), _0x228791;
        }(_0x566be1), _0x1c3d29 = function (_0x6a5bf9) {
            function _0x122984(_0x227b1d, _0x10ab24) {
                this['_visibleNu' + 'm'] = 0x6, this['_button'] = null, this['_list'] = null, this['_isOpen'] = !0x1, this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['_selectHan' + 'dler'] = null, this['_itemHeigh' + 't'] = NaN, this['_listHeigh' + 't'] = NaN, this['_listChang' + 'ed'] = !0x1, this['_itemChang' + 'ed'] = !0x1, this['_scrollBar' + 'Skin'] = null, this['_isCustomL' + 'ist'] = !0x1, this['itemRender'] = null, _0x122984['__super']['call'](this), this['_itemColor' + 's'] = _0xf96cc0['comboBoxIt' + 'emColors'], this['skin'] = _0x227b1d, this['labels'] = _0x10ab24;
            }
            _0x9a35ce(_0x122984, 'laya.ui.Co' + 'mboBox', _0x6a5bf9);
            var _0x3cf36b = _0x122984['prototype'];
            return _0x3cf36b['destroy'] = function (_0x64b1f9) {
                void 0x0 === _0x64b1f9 && (_0x64b1f9 = !0x0), _0x6a5bf9['prototype']['destroy']['call'](this, _0x64b1f9), this['_button'] && this['_button']['destroy'](_0x64b1f9), this['_list'] && this['_list']['destroy'](_0x64b1f9), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
            }, _0x3cf36b['createChil' + 'dren'] = function () {
                this['addChild'](this['_button'] = new _0x1851a2()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x3cf36b['_createLis' + 't'] = function () {
                this['_list'] = new _0x4b8986(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
            }, _0x3cf36b['_setListEv' + 'ent'] = function (_0x19ea29) {
                this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on']('mousedown', this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x3169bc['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on']('mousedown', this, this['onScrollBa' + 'rDown']);
            }, _0x3cf36b['onListDown'] = function (_0x250892) {
                _0x250892['stopPropag' + 'ation']();
            }, _0x3cf36b['onScrollBa' + 'rDown'] = function (_0x13cf4e) {
                _0x13cf4e['stopPropag' + 'ation']();
            }, _0x3cf36b['onButtonMo' + 'useDown'] = function (_0x55a02f) {
                this['callLater'](this['switchTo'], [!this['_isOpen']]);
            }, _0x3cf36b['measureWid' + 'th'] = function () {
                return this['_button']['width'];
            }, _0x3cf36b['measureHei' + 'ght'] = function () {
                return this['_button']['height'];
            }, _0x3cf36b['changeList'] = function () {
                this['_listChang' + 'ed'] = !0x1;
                var _0x48c852 = this['width'] - 0x2, _0x1a9e3c = this['_itemColor' + 's'][0x2];
                this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                    'type': 'Box',
                    'child': [{
                            'type': 'Label',
                            'props': {
                                'name': 'label',
                                'x': 0x1,
                                'padding': '3,3,3,3',
                                'width': _0x48c852,
                                'height': this['_itemHeigh' + 't'],
                                'fontSize': this['_itemSize'],
                                'color': _0x1a9e3c
                            }
                        }]
                }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
            }, _0x3cf36b['onlistItem' + 'Mouse'] = function (_0x1782e8, _0x3e384e) {
                var _0x40120a = _0x1782e8['type'];
                if ('mouseover' === _0x40120a || 'mouseout' === _0x40120a) {
                    if (this['_isCustomL' + 'ist'])
                        return;
                    var _0x294ff6 = this['_list']['getCell'](_0x3e384e);
                    if (!_0x294ff6)
                        return;
                    var _0x543743 = _0x294ff6['getChildBy' + 'Name']('label');
                    _0x543743 && ('mouseover' === _0x40120a ? (_0x543743['bgColor'] = this['_itemColor' + 's'][0x0], _0x543743['color'] = this['_itemColor' + 's'][0x1]) : (_0x543743['bgColor'] = null, _0x543743['color'] = this['_itemColor' + 's'][0x2]));
                } else
                    'click' === _0x40120a && (this['selectedIn' + 'dex'] = _0x3e384e, this['isOpen'] = !0x1);
            }, _0x3cf36b['switchTo'] = function (_0x3b342f) {
                this['isOpen'] = _0x3b342f;
            }, _0x3cf36b['changeOpen'] = function () {
                this['isOpen'] = !this['_isOpen'];
            }, _0x3cf36b['changeItem'] = function () {
                if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                    var _0x5e5714 = this['_list']['graphics'];
                    _0x5e5714['clear'](!0x0), _0x5e5714['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
                }
                var _0x5a6f44 = this['_list']['array'] || [];
                _0x5a6f44['length'] = 0x0;
                for (var _0x5cfb40 = 0x0, _0x53f896 = this['_labels']['length']; _0x5cfb40 < _0x53f896; _0x5cfb40++)
                    _0x5a6f44['push']({ 'label': this['_labels'][_0x5cfb40] });
                this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x5a6f44;
            }, _0x3cf36b['changeSele' + 'cted'] = function () {
                this['_button']['label'] = this['selectedLa' + 'bel'];
            }, _0x3cf36b['_onStageMo' + 'useWheel'] = function (_0x51daf9) {
                this['_list'] && !this['_list']['contains'](_0x51daf9['target']) && this['removeList'](null);
            }, _0x3cf36b['removeList'] = function (_0x409d8c) {
                _0x290223['stage']['off']('mousedown', this, this['removeList']), _0x290223['stage']['off']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
            }, _0x1df89a(0x0, _0x3cf36b, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x2e4655) {
                this['_selectedI' + 'ndex'] != _0x2e4655 && (this['_selectedI' + 'ndex'] = _0x2e4655, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event']('change', [_0x4d7b52['EMPTY']['setTo']('change', this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x1df89a(0x0, _0x3cf36b, 'skin', function () {
                return this['_button']['skin'];
            }, function (_0x45ee4b) {
                this['_button']['skin'] != _0x45ee4b && (this['_button']['skin'] = _0x45ee4b, this['_listChang' + 'ed'] = !0x0);
            }), _0x1df89a(0x0, _0x3cf36b, 'visibleNum', function () {
                return this['_visibleNu' + 'm'];
            }, function (_0x2f7ff7) {
                this['_visibleNu' + 'm'] = _0x2f7ff7, this['_listChang' + 'ed'] = !0x0;
            }), _0x1df89a(0x0, _0x3cf36b, 'width', _0x6a5bf9['prototype']['_$get_widt' + 'h'], function (_0x372246) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x372246), this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
            }), _0x1df89a(0x0, _0x3cf36b, 'selectedLa' + 'bel', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
            }, function (_0xf7021a) {
                this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0xf7021a);
            }), _0x1df89a(0x0, _0x3cf36b, 'labels', function () {
                return this['_labels']['join'](',');
            }, function (_0x1b3af4) {
                this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x1b3af4 ? this['_labels'] = _0x1b3af4['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
            }), _0x1df89a(0x0, _0x3cf36b, 'height', _0x6a5bf9['prototype']['_$get_heig' + 'ht'], function (_0x59ffad) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x59ffad), this['_button']['height'] = this['_height'];
            }), _0x1df89a(0x0, _0x3cf36b, 'selectHand' + 'ler', function () {
                return this['_selectHan' + 'dler'];
            }, function (_0xc2d814) {
                this['_selectHan' + 'dler'] = _0xc2d814;
            }), _0x1df89a(0x0, _0x3cf36b, 'labelBold', function () {
                return this['_button']['text']['bold'];
            }, function (_0x82d3a4) {
                this['_button']['text']['bold'] = _0x82d3a4;
            }), _0x1df89a(0x0, _0x3cf36b, 'itemColors', function () {
                return String(this['_itemColor' + 's']);
            }, function (_0x3532d0) {
                this['_itemColor' + 's'] = _0x3c7b88['fillArray'](this['_itemColor' + 's'], _0x3532d0, String), this['_listChang' + 'ed'] = !0x0;
            }), _0x1df89a(0x0, _0x3cf36b, 'itemSize', function () {
                return this['_itemSize'];
            }, function (_0x33b228) {
                this['_itemSize'] = _0x33b228, this['_listChang' + 'ed'] = !0x0;
            }), _0x1df89a(0x0, _0x3cf36b, 'scrollBar', function () {
                return this['list']['scrollBar'];
            }), _0x1df89a(0x0, _0x3cf36b, 'isOpen', function () {
                return this['_isOpen'];
            }, function (_0x553470) {
                if (this['_isOpen'] != _0x553470) {
                    if (this['_isOpen'] = _0x553470, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                        this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                        var _0x3ed1b3 = this['localToGlo' + 'bal'](_0x3247b1['TEMP']['setTo'](0x0, 0x0)), _0x587f97 = _0x3ed1b3['y'] + this['_button']['height'];
                        _0x587f97 = _0x587f97 + this['_listHeigh' + 't'] <= _0x290223['stage']['height'] ? _0x587f97 : _0x3ed1b3['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x3ed1b3['x'], _0x587f97), this['_list']['zOrder'] = 0x3e9, _0x290223['_currentSt' + 'age']['addChild'](this['_list']), _0x290223['stage']['once']('mousedown', this, this['removeList']), _0x290223['stage']['on']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                    } else
                        this['_list'] && this['_list']['removeSelf']();
                }
            }), _0x1df89a(0x0, _0x3cf36b, 'scrollBarS' + 'kin', function () {
                return this['_scrollBar' + 'Skin'];
            }, function (_0x586378) {
                this['_scrollBar' + 'Skin'] = _0x586378;
            }), _0x1df89a(0x0, _0x3cf36b, 'sizeGrid', function () {
                return this['_button']['sizeGrid'];
            }, function (_0x539243) {
                this['_button']['sizeGrid'] = _0x539243;
            }), _0x1df89a(0x0, _0x3cf36b, 'button', function () {
                return this['_button'];
            }), _0x1df89a(0x0, _0x3cf36b, 'list', function () {
                return this['_list'] || this['_createLis' + 't'](), this['_list'];
            }, function (_0x1ca6d0) {
                _0x1ca6d0 && (_0x1ca6d0['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x1ca6d0, this['_setListEv' + 'ent'](_0x1ca6d0), this['_itemHeigh' + 't'] = _0x1ca6d0['getCell'](0x0)['height'] + _0x1ca6d0['spaceY']);
            }), _0x1df89a(0x0, _0x3cf36b, 'dataSource', _0x6a5bf9['prototype']['_$get_data' + 'Source'], function (_0x19a6af) {
                this['_dataSourc' + 'e'] = _0x19a6af, 'number' == typeof _0x19a6af && Math['floor'](_0x19a6af) == _0x19a6af || 'string' == typeof _0x19a6af ? this['selectedIn' + 'dex'] = parseInt(_0x19a6af) : _0x19a6af instanceof Array ? this['labels'] = _0x19a6af['join'](',') : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x19a6af);
            }), _0x1df89a(0x0, _0x3cf36b, 'labelColor' + 's', function () {
                return this['_button']['labelColor' + 's'];
            }, function (_0x3adcce) {
                this['_button']['labelColor' + 's'] != _0x3adcce && (this['_button']['labelColor' + 's'] = _0x3adcce);
            }), _0x1df89a(0x0, _0x3cf36b, 'labelPaddi' + 'ng', function () {
                return this['_button']['text']['padding']['join'](',');
            }, function (_0x507c23) {
                this['_button']['text']['padding'] = _0x3c7b88['fillArray'](_0xf96cc0['labelPaddi' + 'ng'], _0x507c23, Number);
            }), _0x1df89a(0x0, _0x3cf36b, 'labelSize', function () {
                return this['_button']['text']['fontSize'];
            }, function (_0x1b92da) {
                this['_button']['text']['fontSize'] = _0x1b92da;
            }), _0x1df89a(0x0, _0x3cf36b, 'labelFont', function () {
                return this['_button']['text']['font'];
            }, function (_0x1f96d2) {
                this['_button']['text']['font'] = _0x1f96d2;
            }), _0x1df89a(0x0, _0x3cf36b, 'stateNum', function () {
                return this['_button']['stateNum'];
            }, function (_0x4d70cd) {
                this['_button']['stateNum'] = _0x4d70cd;
            }), _0x122984;
        }(_0x566be1), _0x6e1d29 = (function (_0x31097e) {
            function _0x177f5b() {
                this['_tipBox'] = null, this['_tipText'] = null, this['_defaultTi' + 'pHandler'] = null, _0x177f5b['__super']['call'](this), this['_tipBox'] = new _0x566be1(), this['_tipBox']['addChild'](this['_tipText'] = new _0x4e6a74()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x177f5b['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x290223['stage']['on']('showtip', this, this['_onStageSh' + 'owTip']), _0x290223['stage']['on']('hidetip', this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
            }
            _0x9a35ce(_0x177f5b, 'laya.ui.Ti' + 'pManager', _0x566be1);
            var _0x3efc07 = _0x177f5b['prototype'];
            _0x3efc07['_onStageHi' + 'deTip'] = function (_0x4dbac6) {
                _0x290223['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
            }, _0x3efc07['_onStageSh' + 'owTip'] = function (_0x197783) {
                _0x290223['timer']['once'](_0x177f5b['tipDelay'], this, this['_showTip'], [_0x197783], !0x0);
            }, _0x3efc07['_showTip'] = function (_0x4760f1) {
                if ('string' == typeof _0x4760f1) {
                    var _0x134b7c = String(_0x4760f1);
                    Boolean(_0x134b7c) && this['_defaultTi' + 'pHandler'](_0x134b7c);
                } else
                    _0x4760f1 instanceof laya['utils']['Handler'] ? _0x4760f1['run']() : 'function' == typeof _0x4760f1 && _0x4760f1['apply']();
                _0x290223['stage']['on']('mousemove', this, this['_onStageMo' + 'useMove']), _0x290223['stage']['on']('mousedown', this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
            }, _0x3efc07['_onStageMo' + 'useDown'] = function (_0x2900cf) {
                this['closeAll']();
            }, _0x3efc07['_onStageMo' + 'useMove'] = function (_0x416118) {
                this['_showToSta' + 'ge'](this, _0x177f5b['offsetX'], _0x177f5b['offsetY']);
            }, _0x3efc07['_showToSta' + 'ge'] = function (_0x236e47, _0x523602, _0x590c72) {
                void 0x0 === _0x523602 && (_0x523602 = 0x0), void 0x0 === _0x590c72 && (_0x590c72 = 0x0);
                var _0x4e6390 = _0x236e47['getBounds']();
                _0x236e47['x'] = _0x290223['stage']['mouseX'] + _0x523602, _0x236e47['y'] = _0x290223['stage']['mouseY'] + _0x590c72, _0x236e47['_x'] + _0x4e6390['width'] > _0x290223['stage']['width'] && (_0x236e47['x'] -= _0x4e6390['width'] + _0x523602), _0x236e47['_y'] + _0x4e6390['height'] > _0x290223['stage']['height'] && (_0x236e47['y'] -= _0x4e6390['height'] + _0x590c72);
            }, _0x3efc07['closeAll'] = function () {
                _0x290223['timer']['clear'](this, this['_showTip']), _0x290223['stage']['off']('mousemove', this, this['_onStageMo' + 'useMove']), _0x290223['stage']['off']('mousedown', this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
            }, _0x3efc07['showDislay' + 'Tip'] = function (_0x4b462c) {
                this['addChild'](_0x4b462c), this['_showToSta' + 'ge'](this), _0x290223['_currentSt' + 'age']['addChild'](this);
            }, _0x3efc07['_showDefau' + 'ltTip'] = function (_0x34475a) {
                this['_tipText']['text'] = _0x34475a;
                var _0x46a08 = this['_tipBox']['graphics'];
                _0x46a08['clear'](!0x0), _0x46a08['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x177f5b['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x290223['_currentSt' + 'age']['addChild'](this);
            }, _0x1df89a(0x0, _0x3efc07, 'defaultTip' + 'Handler', function () {
                return this['_defaultTi' + 'pHandler'];
            }, function (_0x5d61d0) {
                this['_defaultTi' + 'pHandler'] = _0x5d61d0;
            }), _0x177f5b['offsetX'] = 0xa, _0x177f5b['offsetY'] = 0xf, _0x177f5b['tipTextCol' + 'or'] = '#ffffff', _0x177f5b['tipBackCol' + 'or'] = '#111111', _0x177f5b['tipDelay'] = 0xc8;
        }(), function (_0x25bfea) {
            function _0x5bb463(_0x4e5f0b, _0x4ec34e, _0x55ac00) {
                this['_sources'] = null, this['_bitmap'] = null, this['_skin'] = null, this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_autoPlay'] = !0x1, this['_interval'] = 0x32, this['_complete'] = null, this['_isPlaying'] = !0x1, this['_index'] = 0x0, this['_clipChang' + 'ed'] = !0x1, this['_group'] = null, this['_toIndex'] = -0x1, _0x5bb463['__super']['call'](this), void 0x0 === _0x4ec34e && (_0x4ec34e = 0x1), void 0x0 === _0x55ac00 && (_0x55ac00 = 0x1), this['_clipX'] = _0x4ec34e, this['_clipY'] = _0x55ac00, this['skin'] = _0x4e5f0b;
            }
            _0x9a35ce(_0x5bb463, 'laya.ui.Cl' + 'ip', _0x25bfea);
            var _0x6d7d8f = _0x5bb463['prototype'];
            return _0x6d7d8f['destroy'] = function (_0xfc7d7e) {
                void 0x0 === _0xfc7d7e && (_0xfc7d7e = !0x0), _0x25bfea['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
            }, _0x6d7d8f['dispose'] = function () {
                this['destroy'](!0x0), _0x290223['loader']['clearRes'](this['_skin']);
            }, _0x6d7d8f['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x943fcf();
            }, _0x6d7d8f['_onDisplay'] = function (_0x234511) {
                this['_isPlaying'] ? this['_getBit'](0x80) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
            }, _0x6d7d8f['_skinLoade' + 'd'] = function () {
                this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x6d7d8f['changeClip'] = function () {
                if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                    var _0x1fb192 = _0x5a5cdd['getRes'](this['_skin']);
                    _0x1fb192 ? this['loadComple' + 'te'](this['_skin'], _0x1fb192) : _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['loadComple' + 'te'], [this['_skin']]));
                }
            }, _0x6d7d8f['loadComple' + 'te'] = function (_0x4953ed, _0x333041) {
                if (_0x4953ed === this['_skin'] && _0x333041) {
                    var _0x81fdd7 = this['_clipWidth'] || Math['ceil'](_0x333041['sourceWidt' + 'h'] / this['_clipX']), _0x385468 = this['_clipHeigh' + 't'] || Math['ceil'](_0x333041['sourceHeig' + 'ht'] / this['_clipY']), _0x4aff6f = this['_skin'] + _0x81fdd7 + _0x385468, _0xf5feab = _0x5179a1['I']['get'](_0x4aff6f);
                    if (_0x5a1df2['isOkTextur' + 'eList'](_0xf5feab) || (_0xf5feab = null), _0xf5feab)
                        this['_sources'] = _0xf5feab;
                    else {
                        this['_sources'] = [];
                        for (var _0x47a3b = 0x0; _0x47a3b < this['_clipY']; _0x47a3b++)
                            for (var _0x5651fe = 0x0; _0x5651fe < this['_clipX']; _0x5651fe++)
                                this['_sources']['push'](_0x3a0b6c['createFrom' + 'Texture'](_0x333041, _0x81fdd7 * _0x5651fe, _0x385468 * _0x47a3b, _0x81fdd7, _0x385468));
                        _0x5179a1['I']['set'](_0x4aff6f, this['_sources']);
                    }
                    this['index'] = this['_index'], this['event']('loaded'), this['onCompResi' + 'ze']();
                }
            }, _0x6d7d8f['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
            }, _0x6d7d8f['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
            }, _0x6d7d8f['play'] = function (_0x4ddd12, _0xaadef5) {
                void 0x0 === _0x4ddd12 && (_0x4ddd12 = 0x0), void 0x0 === _0xaadef5 && (_0xaadef5 = -0x1), this['_isPlaying'] = !0x0, this['index'] = _0x4ddd12, this['_toIndex'] = _0xaadef5, this['_index']++, _0x290223['timer']['loop'](this['interval'], this, this['_loop']), this['on']('display', this, this['_onDisplay']), this['on']('undisplay', this, this['_onDisplay']);
            }, _0x6d7d8f['_loop'] = function () {
                this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
            }, _0x6d7d8f['stop'] = function () {
                this['_isPlaying'] = !0x1, _0x290223['timer']['clear'](this, this['_loop']), this['event']('complete');
            }, _0x6d7d8f['_setClipCh' + 'anged'] = function () {
                this['_clipChang' + 'ed'] || (this['_clipChang' + 'ed'] = !0x0, this['callLater'](this['changeClip']));
            }, _0x1df89a(0x0, _0x6d7d8f, 'interval', function () {
                return this['_interval'];
            }, function (_0x1b1314) {
                this['_interval'] != _0x1b1314 && (this['_interval'] = _0x1b1314, this['_isPlaying'] && this['play']());
            }), _0x1df89a(0x0, _0x6d7d8f, 'skin', function () {
                return this['_skin'];
            }, function (_0x229332) {
                this['_skin'] != _0x229332 && (this['_skin'] = _0x229332, _0x229332 ? _0x5a5cdd['getRes'](_0x229332) ? this['_skinLoade' + 'd']() : _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_bitmap']['source'] = null);
            }), _0x1df89a(0x0, _0x6d7d8f, 'sources', function () {
                return this['_sources'];
            }, function (_0x7d9fcc) {
                this['_sources'] = _0x7d9fcc, this['index'] = this['_index'], this['event']('loaded');
            }), _0x1df89a(0x0, _0x6d7d8f, 'clipX', function () {
                return this['_clipX'];
            }, function (_0x1c3579) {
                this['_clipX'] = _0x1c3579 || 0x1, this['_setClipCh' + 'anged']();
            }), _0x1df89a(0x0, _0x6d7d8f, 'clipY', function () {
                return this['_clipY'];
            }, function (_0x5611cb) {
                this['_clipY'] = _0x5611cb || 0x1, this['_setClipCh' + 'anged']();
            }), _0x1df89a(0x0, _0x6d7d8f, 'total', function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
            }), _0x1df89a(0x0, _0x6d7d8f, 'clipWidth', function () {
                return this['_clipWidth'];
            }, function (_0x1e6cd4) {
                this['_clipWidth'] = _0x1e6cd4, this['_setClipCh' + 'anged']();
            }), _0x1df89a(0x0, _0x6d7d8f, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x47aa64) {
                this['_bitmap']['sizeGrid'] = _0x3c7b88['fillArray'](_0xf96cc0['defaultSiz' + 'eGrid'], _0x47aa64, Number);
            }), _0x1df89a(0x0, _0x6d7d8f, 'group', function () {
                return this['_group'];
            }, function (_0x11d17a) {
                _0x11d17a && this['_skin'] && _0x5a5cdd['setGroup'](this['_skin'], _0x11d17a), this['_group'] = _0x11d17a;
            }), _0x1df89a(0x0, _0x6d7d8f, 'clipHeight', function () {
                return this['_clipHeigh' + 't'];
            }, function (_0x2a98aa) {
                this['_clipHeigh' + 't'] = _0x2a98aa, this['_setClipCh' + 'anged']();
            }), _0x1df89a(0x0, _0x6d7d8f, 'width', _0x25bfea['prototype']['_$get_widt' + 'h'], function (_0x291518) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x291518), this['_bitmap']['width'] = _0x291518;
            }), _0x1df89a(0x0, _0x6d7d8f, 'height', _0x25bfea['prototype']['_$get_heig' + 'ht'], function (_0x3e4d6c) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x3e4d6c), this['_bitmap']['height'] = _0x3e4d6c;
            }), _0x1df89a(0x0, _0x6d7d8f, 'index', function () {
                return this['_index'];
            }, function (_0x22a19a) {
                this['_index'] = _0x22a19a, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x22a19a]), this['event']('change');
            }), _0x1df89a(0x0, _0x6d7d8f, 'autoPlay', function () {
                return this['_autoPlay'];
            }, function (_0x3e509b) {
                this['_autoPlay'] != _0x3e509b && (this['_autoPlay'] = _0x3e509b, _0x3e509b ? this['play']() : this['stop']());
            }), _0x1df89a(0x0, _0x6d7d8f, 'isPlaying', function () {
                return this['_isPlaying'];
            }, function (_0x349a36) {
                this['_isPlaying'] = _0x349a36;
            }), _0x1df89a(0x0, _0x6d7d8f, 'dataSource', _0x25bfea['prototype']['_$get_data' + 'Source'], function (_0x5d0692) {
                this['_dataSourc' + 'e'] = _0x5d0692, 'number' == typeof _0x5d0692 && Math['floor'](_0x5d0692) == _0x5d0692 || 'string' == typeof _0x5d0692 ? this['index'] = parseInt(_0x5d0692) : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x5d0692);
            }), _0x1df89a(0x0, _0x6d7d8f, 'bitmap', function () {
                return this['_bitmap'];
            }), _0x5bb463;
        }(_0x566be1)), _0x1020d2 = function (_0x3b2ae0) {
            function _0x27e109() {
                this['changeHand' + 'ler'] = null, this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000', this['_panelChan' + 'ged'] = !0x1, _0x27e109['__super']['call'](this);
            }
            _0x9a35ce(_0x27e109, 'laya.ui.Co' + 'lorPicker', _0x3b2ae0);
            var _0x55bb30 = _0x27e109['prototype'];
            return _0x55bb30['destroy'] = function (_0x315fbe) {
                void 0x0 === _0x315fbe && (_0x315fbe = !0x0), _0x3b2ae0['prototype']['destroy']['call'](this, _0x315fbe), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x315fbe), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x315fbe), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
            }, _0x55bb30['createChil' + 'dren'] = function () {
                this['addChild'](this['_colorButt' + 'on'] = new _0x1851a2()), this['_colorPane' + 'l'] = new _0x213a7b(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x3cfa9d()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x3cfa9d()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x389e7b());
            }, _0x55bb30['initialize'] = function () {
                this['_colorButt' + 'on']['on']('click', this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on']('change', this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on']('keydown', this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on']('mousemove', this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on']('click', this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on']('mousedown', this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
            }, _0x55bb30['onPanelMou' + 'seDown'] = function (_0x14d488) {
                _0x14d488['stopPropag' + 'ation']();
            }, _0x55bb30['changePane' + 'l'] = function () {
                this['_panelChan' + 'ged'] = !0x1;
                var _0x5265d5 = this['_colorPane' + 'l']['graphics'];
                _0x5265d5['clear'](!0x0), _0x5265d5['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x5265d5 = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
                for (var _0x152e95 = [
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
                        ], _0x5c6544 = 0x0; _0x5c6544 < 0xc; _0x5c6544++)
                    for (var _0x1e2440 = 0x0; _0x1e2440 < 0x14; _0x1e2440++) {
                        var _0x3de475 = 0x0;
                        _0x3de475 = 0x0 === _0x1e2440 ? _0x152e95[_0x5c6544] : 0x1 === _0x1e2440 ? 0x0 : 0x33 * (((0x3 * _0x5c6544 + _0x1e2440 / 0x6) % 0x3 << 0x0) + 0x3 * (_0x5c6544 / 0x6 << 0x0)) << 0x10 | _0x1e2440 % 0x6 * 0x33 << 0x8 | (_0x5c6544 << 0x0) % 0x6 * 0x33;
                        var _0x1a408b = _0x3c7b88['toColor'](_0x3de475);
                        this['_colors']['push'](_0x1a408b);
                        var _0x1e36e3 = _0x1e2440 * this['_gridSize'], _0x5ab51f = _0x5c6544 * this['_gridSize'];
                        _0x5265d5['drawRect'](_0x1e36e3, _0x5ab51f, this['_gridSize'], this['_gridSize'], _0x1a408b, '#000000');
                    }
            }, _0x55bb30['onColorBut' + 'tonClick'] = function (_0x27b8c4) {
                this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
            }, _0x55bb30['open'] = function () {
                var _0x452b9a = this['localToGlo' + 'bal'](new _0x3247b1()), _0x338075 = _0x452b9a['x'] + this['_colorPane' + 'l']['width'] <= _0x290223['stage']['width'] ? _0x452b9a['x'] : _0x290223['stage']['width'] - this['_colorPane' + 'l']['width'], _0x2f0f7f = _0x452b9a['y'] + this['_colorButt' + 'on']['height'];
                _0x2f0f7f = _0x2f0f7f + this['_colorPane' + 'l']['height'] <= _0x290223['stage']['height'] ? _0x2f0f7f : _0x452b9a['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x338075, _0x2f0f7f), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x290223['_currentSt' + 'age']['addChild'](this['_colorPane' + 'l']), _0x290223['stage']['on']('mousedown', this, this['removeColo' + 'rBox']);
            }, _0x55bb30['close'] = function () {
                _0x290223['stage']['off']('mousedown', this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
            }, _0x55bb30['removeColo' + 'rBox'] = function (_0x280403) {
                this['close']();
            }, _0x55bb30['onColorFie' + 'ldKeyDown'] = function (_0x54e7b7) {
                0xd == _0x54e7b7['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0x54e7b7['stopPropag' + 'ation']());
            }, _0x55bb30['onColorInp' + 'utChange'] = function (_0x1adeb0) {
                this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
            }, _0x55bb30['onColorTil' + 'esClick'] = function (_0x271bf3) {
                this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
            }, _0x55bb30['onColorTil' + 'esMouseMov' + 'e'] = function (_0x4a02d8) {
                this['_colorInpu' + 't']['focus'] = !0x1;
                var _0x417a5c = this['getColorBy' + 'Mouse']();
                this['_colorInpu' + 't']['text'] = _0x417a5c, this['drawBlock'](_0x417a5c);
            }, _0x55bb30['getColorBy' + 'Mouse'] = function () {
                var _0x1fc229 = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x1d9888 = Math['floor'](_0x1fc229['x'] / this['_gridSize']), _0x57db76 = Math['floor'](_0x1fc229['y'] / this['_gridSize']);
                return this['_colors'][0x14 * _0x57db76 + _0x1d9888];
            }, _0x55bb30['drawBlock'] = function (_0x53e35) {
                var _0x29db48 = this['_colorBloc' + 'k']['graphics'];
                _0x29db48['clear'](!0x0);
                var _0xa87665 = _0x53e35 || '#ffffff';
                _0x29db48['drawRect'](0x0, 0x0, 0x32, 0x14, _0xa87665, this['_borderCol' + 'or']), _0x53e35 || _0x29db48['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
            }, _0x55bb30['changeColo' + 'r'] = function () {
                var _0x2b886b = this['graphics'];
                _0x2b886b['clear'](!0x0);
                var _0x508fea = this['_selectedC' + 'olor'] || '#000000';
                _0x2b886b['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0x508fea);
            }, _0x55bb30['_setPanelC' + 'hanged'] = function () {
                this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
            }, _0x1df89a(0x0, _0x55bb30, 'inputBgCol' + 'or', function () {
                return this['_inputBgCo' + 'lor'];
            }, function (_0x4626c3) {
                this['_inputBgCo' + 'lor'] = _0x4626c3, this['_setPanelC' + 'hanged']();
            }), _0x1df89a(0x0, _0x55bb30, 'selectedCo' + 'lor', function () {
                return this['_selectedC' + 'olor'];
            }, function (_0x181942) {
                this['_selectedC' + 'olor'] != _0x181942 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0x181942, this['drawBlock'](_0x181942), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event']('change', _0x4d7b52['EMPTY']['setTo']('change', this, this)));
            }), _0x1df89a(0x0, _0x55bb30, 'skin', function () {
                return this['_colorButt' + 'on']['skin'];
            }, function (_0x49fb3e) {
                this['_colorButt' + 'on']['once']('loaded', this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x49fb3e;
            }), _0x1df89a(0x0, _0x55bb30, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x40cac4) {
                this['_bgColor'] = _0x40cac4, this['_setPanelC' + 'hanged']();
            }), _0x1df89a(0x0, _0x55bb30, 'borderColo' + 'r', function () {
                return this['_borderCol' + 'or'];
            }, function (_0x3eb028) {
                this['_borderCol' + 'or'] = _0x3eb028, this['_setPanelC' + 'hanged']();
            }), _0x1df89a(0x0, _0x55bb30, 'inputColor', function () {
                return this['_inputColo' + 'r'];
            }, function (_0x125ce7) {
                this['_inputColo' + 'r'] = _0x125ce7, this['_setPanelC' + 'hanged']();
            }), _0x27e109;
        }(_0x566be1), _0x399022 = function (_0x415eab) {
            function _0x14b7db(_0x4ceec5) {
                this['changeHand' + 'ler'] = null, this['_bg'] = null, this['_bar'] = null, this['_skin'] = null, this['_value'] = 0.5, _0x14b7db['__super']['call'](this), this['skin'] = _0x4ceec5;
            }
            _0x9a35ce(_0x14b7db, 'laya.ui.Pr' + 'ogressBar', _0x415eab);
            var _0xf11b7c = _0x14b7db['prototype'];
            return _0xf11b7c['destroy'] = function (_0x182131) {
                void 0x0 === _0x182131 && (_0x182131 = !0x0), _0x415eab['prototype']['destroy']['call'](this, _0x182131), this['_bg'] && this['_bg']['destroy'](_0x182131), this['_bar'] && this['_bar']['destroy'](_0x182131), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
            }, _0xf11b7c['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x1f8bdb()), this['addChild'](this['_bar'] = new _0x1f8bdb()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0xf11b7c['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0xf11b7c['measureWid' + 'th'] = function () {
                return this['_bg']['width'];
            }, _0xf11b7c['measureHei' + 'ght'] = function () {
                return this['_bg']['height'];
            }, _0xf11b7c['changeValu' + 'e'] = function () {
                if (this['sizeGrid']) {
                    var _0x55883f = this['sizeGrid']['split'](','), _0x112534 = Number(_0x55883f[0x3]), _0x9e1099 = Number(_0x55883f[0x1]), _0x366441 = (this['width'] - _0x112534 - _0x9e1099) * this['_value'];
                    this['_bar']['width'] = _0x112534 + _0x9e1099 + _0x366441, this['_bar']['visible'] = this['_bar']['width'] > _0x112534 + _0x9e1099;
                } else
                    this['_bar']['width'] = this['width'] * this['_value'];
            }, _0x1df89a(0x0, _0xf11b7c, 'dataSource', _0x415eab['prototype']['_$get_data' + 'Source'], function (_0x385f37) {
                this['_dataSourc' + 'e'] = _0x385f37, 'number' == typeof _0x385f37 || 'string' == typeof _0x385f37 ? this['value'] = Number(_0x385f37) : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x385f37);
            }), _0x1df89a(0x0, _0xf11b7c, 'skin', function () {
                return this['_skin'];
            }, function (_0xea10ab) {
                this['_skin'] != _0xea10ab && (this['_skin'] = _0xea10ab, this['_skin'] && !_0x5a5cdd['getRes'](this['_skin']) ? _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0xf11b7c, 'height', _0x415eab['prototype']['_$get_heig' + 'ht'], function (_0x537ae5) {
                _0x290223['superSet'](_0x566be1, this, 'height', _0x537ae5), this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
            }), _0x1df89a(0x0, _0xf11b7c, 'bar', function () {
                return this['_bar'];
            }), _0x1df89a(0x0, _0xf11b7c, 'value', function () {
                return this['_value'];
            }, function (_0x10c789) {
                this['_value'] != _0x10c789 && (_0x10c789 = _0x10c789 > 0x1 ? 0x1 : _0x10c789 < 0x0 ? 0x0 : _0x10c789, this['_value'] = _0x10c789, this['callLater'](this['changeValu' + 'e']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x10c789));
            }), _0x1df89a(0x0, _0xf11b7c, 'bg', function () {
                return this['_bg'];
            }), _0x1df89a(0x0, _0xf11b7c, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x31c355) {
                this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x31c355;
            }), _0x1df89a(0x0, _0xf11b7c, 'width', _0x415eab['prototype']['_$get_widt' + 'h'], function (_0x254c0c) {
                _0x290223['superSet'](_0x566be1, this, 'width', _0x254c0c), this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
            }), _0x14b7db;
        }(_0x566be1), _0x571641 = function (_0x1f0b91) {
            function _0x317c00(_0x268089) {
                this['rollRatio'] = 0.97, this['changeHand' + 'ler'] = null, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['upButton'] = null, this['downButton'] = null, this['slider'] = null, this['_scrollSiz' + 'e'] = 0x1, this['_skin'] = null, this['_thumbPerc' + 'ent'] = 0x1, this['_target'] = null, this['_lastPoint'] = null, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_value'] = NaN, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_offsets'] = null, this['isLockedFu' + 'n'] = null, this['triggerDow' + 'nDragLimit'] = null, this['triggerUpD' + 'ragLimit'] = null, _0x317c00['__super']['call'](this), this['_showButto' + 'ns'] = _0x251845['showButton' + 's'], this['_touchScro' + 'llEnable'] = _0x251845['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x251845['mouseWheel' + 'Enable'], this['skin'] = _0x268089, this['max'] = 0x1;
            }
            _0x9a35ce(_0x317c00, 'laya.ui.Sc' + 'rollBar', _0x1f0b91);
            var _0x13e76e = _0x317c00['prototype'];
            return _0x13e76e['destroy'] = function (_0x55dc18) {
                void 0x0 === _0x55dc18 && (_0x55dc18 = !0x0), this['stopScroll'](), this['target'] = null, _0x1f0b91['prototype']['destroy']['call'](this, _0x55dc18), this['upButton'] && this['upButton']['destroy'](_0x55dc18), this['downButton'] && this['downButton']['destroy'](_0x55dc18), this['slider'] && this['slider']['destroy'](_0x55dc18), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
            }, _0x13e76e['createChil' + 'dren'] = function () {
                this['addChild'](this['slider'] = new _0x17643a()), this['addChild'](this['upButton'] = new _0x1851a2()), this['addChild'](this['downButton'] = new _0x1851a2());
            }, _0x13e76e['initialize'] = function () {
                this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on']('change', this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']), this['downButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x13e76e['onSliderCh' + 'ange'] = function () {
                this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
            }, _0x13e76e['onButtonMo' + 'useDown'] = function (_0x141e56) {
                var _0xec6d40 = _0x141e56['currentTar' + 'get'] === this['upButton'];
                this['slide'](_0xec6d40), _0x290223['timer']['once'](_0xf96cc0['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0xec6d40]), _0x290223['stage']['once']('mouseup', this, this['onStageMou' + 'seUp']);
            }, _0x13e76e['startLoop'] = function (_0x180bd9) {
                _0x290223['timer']['frameLoop'](0x1, this, this['slide'], [_0x180bd9]);
            }, _0x13e76e['slide'] = function (_0x4b566a) {
                _0x4b566a ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
            }, _0x13e76e['onStageMou' + 'seUp'] = function (_0x4f40ff) {
                _0x290223['timer']['clear'](this, this['startLoop']), _0x290223['timer']['clear'](this, this['slide']);
            }, _0x13e76e['_skinLoade' + 'd'] = function () {
                this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x13e76e['changeScro' + 'llBar'] = function () {
                this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
            }, _0x13e76e['_sizeChang' + 'ed'] = function () {
                _0x1f0b91['prototype']['_sizeChang' + 'ed']['call'](this), this['repaint'](), this['resetPosit' + 'ions'](), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
            }, _0x13e76e['resetPosit' + 'ions'] = function () {
                this['slider']['isVertical'] ? this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0) : this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0), this['resetButto' + 'nPosition']();
            }, _0x13e76e['resetButto' + 'nPosition'] = function () {
                this['slider']['isVertical'] ? this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'] : this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
            }, _0x13e76e['measureWid' + 'th'] = function () {
                return this['slider']['isVertical'] ? this['slider']['width'] : 0x64;
            }, _0x13e76e['measureHei' + 'ght'] = function () {
                return this['slider']['isVertical'] ? 0x64 : this['slider']['height'];
            }, _0x13e76e['setScroll'] = function (_0x8707e, _0x10bff1, _0x458423) {
                this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x8707e, _0x10bff1, _0x458423), this['slider']['bar']['visible'] = _0x10bff1 > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
            }, _0x13e76e['onTargetMo' + 'useWheel'] = function (_0x431c21) {
                this['value'] -= _0x431c21['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
            }, _0x13e76e['onTargetMo' + 'useDown'] = function (_0x3e884d) {
                this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x3e884d) || (this['event']('end'), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x3247b1()), this['_lastPoint']['setTo'](_0x290223['stage']['mouseX'], _0x290223['stage']['mouseY']), _0x290223['timer']['clear'](this, this['tweenMove']), _0x546c37['clearTween'](this), _0x290223['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x290223['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x290223['timer']['frameLoop'](0x1, this, this['loop']));
            }, _0x13e76e['startDragF' + 'orce'] = function () {
                this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x3247b1()), this['_lastPoint']['setTo'](_0x290223['stage']['mouseX'], _0x290223['stage']['mouseY']), _0x290223['timer']['clear'](this, this['tweenMove']), _0x546c37['clearTween'](this), _0x290223['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x290223['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x290223['timer']['frameLoop'](0x1, this, this['loop']);
            }, _0x13e76e['cancelDrag' + 'Op'] = function () {
                _0x290223['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x290223['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x290223['timer']['clear'](this, this['tweenMove']), _0x290223['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
            }, _0x13e76e['checkTrigg' + 'ers'] = function (_0x334d9c) {
                return void 0x0 === _0x334d9c && (_0x334d9c = !0x1), this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x334d9c) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x334d9c)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
            }, _0x13e76e['startTween' + 'MoveForce'] = function (_0x45947e) {
                this['_lastOffse' + 't'] = _0x45947e, _0x290223['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
            }, _0x13e76e['loop'] = function () {
                var _0x27ad4d = _0x290223['stage']['mouseY'], _0x4ae079 = _0x290223['stage']['mouseX'];
                if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x27ad4d - this['_lastPoint']['y'] : _0x4ae079 - this['_lastPoint']['x'], this['_clickOnly']) {
                    if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x290223['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x290223['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                        return;
                    if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                        return;
                    this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event']('start');
                } else {
                    if (this['checkTrigg' + 'ers']())
                        return;
                }
                this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x4ae079, this['_lastPoint']['y'] = _0x27ad4d, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
            }, _0x13e76e['onStageMou' + 'seUp2'] = function (_0x54449d) {
                if (_0x290223['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x290223['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x290223['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                    if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                        this['_value'] < this['min'] ? _0x546c37['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x5daf9b['sineOut'], _0x3169bc['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x546c37['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x5daf9b['sineOut'], _0x3169bc['create'](this, this['elasticOve' + 'r']));
                    else {
                        if (!this['_offsets'])
                            return;
                        this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x290223['stage']['mouseY'] - this['_lastPoint']['y'] : _0x290223['stage']['mouseX'] - this['_lastPoint']['x']);
                        for (var _0x460ae1 = 0x0, _0x35b715 = Math['min'](this['_offsets']['length'], 0x3), _0x20d5bc = 0x0; _0x20d5bc < _0x35b715; _0x20d5bc++)
                            _0x460ae1 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x20d5bc];
                        if (this['_lastOffse' + 't'] = _0x460ae1 / _0x35b715, (_0x460ae1 = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                            return void this['event']('end');
                        _0x460ae1 > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                        var _0x4e6e16 = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                        _0x290223['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x4e6e16]);
                    }
                }
            }, _0x13e76e['elasticOve' + 'r'] = function () {
                this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x546c37['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event']('end');
            }, _0x13e76e['tweenMove'] = function (_0x3bc12c) {
                if (this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) {
                    var _0x44ea56 = NaN;
                    if (_0x3bc12c > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x44ea56 = 0.5 * -(this['min'] - _0x3bc12c - this['value']), this['_lastOffse' + 't'] > _0x44ea56 && (this['_lastOffse' + 't'] = _0x44ea56)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x44ea56 = 0.5 * -(this['max'] + _0x3bc12c - this['value']), this['_lastOffse' + 't'] < _0x44ea56 && (this['_lastOffse' + 't'] = _0x44ea56))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1) {
                        if (_0x290223['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                            return void (this['_value'] < this['min'] ? _0x546c37['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x5daf9b['sineOut'], _0x3169bc['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x546c37['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x5daf9b['sineOut'], _0x3169bc['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                        this['event']('end'), !this['hide'] && this['autoHide'] && _0x546c37['to'](this, { 'alpha': 0x0 }, 0x1f4);
                    }
                }
            }, _0x13e76e['stopScroll'] = function () {
                this['onStageMou' + 'seUp2'](null), _0x290223['timer']['clear'](this, this['tweenMove']), _0x546c37['clearTween'](this);
            }, _0x1df89a(0x0, _0x13e76e, 'thumbPerce' + 'nt', function () {
                return this['_thumbPerc' + 'ent'];
            }, function (_0x4344a6) {
                this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x4344a6 = _0x4344a6 >= 0x1 ? 0.99 : _0x4344a6, this['_thumbPerc' + 'ent'] = _0x4344a6, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x4344a6, _0xf96cc0['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x4344a6, _0xf96cc0['scrollBarM' + 'inNum']));
            }), _0x1df89a(0x0, _0x13e76e, 'dataSource', _0x1f0b91['prototype']['_$get_data' + 'Source'], function (_0x12b71d) {
                this['_dataSourc' + 'e'] = _0x12b71d, 'number' == typeof _0x12b71d || 'string' == typeof _0x12b71d ? this['value'] = Number(_0x12b71d) : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x12b71d);
            }), _0x1df89a(0x0, _0x13e76e, 'skin', function () {
                return this['_skin'];
            }, function (_0x2bd7be) {
                '\x20' != _0x2bd7be && this['_skin'] != _0x2bd7be && (this['_skin'] = _0x2bd7be, this['_skin'] && !_0x5a5cdd['getRes'](this['_skin']) ? _0x290223['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$up.png'),
                    this['_skin']['replace']('.png', '$down.png'),
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x3169bc['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0x13e76e, 'max', function () {
                return this['slider']['max'];
            }, function (_0x5ec081) {
                this['slider']['max'] = _0x5ec081;
            }), _0x1df89a(0x0, _0x13e76e, 'min', function () {
                return this['slider']['min'];
            }, function (_0x1dc29a) {
                this['slider']['min'] = _0x1dc29a;
            }), _0x1df89a(0x0, _0x13e76e, 'value', function () {
                return this['_value'];
            }, function (_0x371fe2) {
                _0x371fe2 !== this['_value'] && (this['_value'] = _0x371fe2, this['_isElastic'] || (this['slider']['_value'] != _0x371fe2 && (this['slider']['_value'] = _0x371fe2, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
            }), _0x1df89a(0x0, _0x13e76e, 'isVertical', function () {
                return this['slider']['isVertical'];
            }, function (_0x2334d5) {
                this['slider']['isVertical'] = _0x2334d5;
            }), _0x1df89a(0x0, _0x13e76e, 'sizeGrid', function () {
                return this['slider']['sizeGrid'];
            }, function (_0x4ace00) {
                this['slider']['sizeGrid'] = _0x4ace00;
            }), _0x1df89a(0x0, _0x13e76e, 'scrollSize', function () {
                return this['_scrollSiz' + 'e'];
            }, function (_0x3517c1) {
                this['_scrollSiz' + 'e'] = _0x3517c1;
            }), _0x1df89a(0x0, _0x13e76e, 'target', function () {
                return this['_target'];
            }, function (_0x263f78) {
                this['_target'] && (this['_target']['off']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_target']['off']('mousedown', this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x263f78, _0x263f78 && (this['_mouseWhee' + 'lEnable'] && this['_target']['on']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on']('mousedown', this, this['onTargetMo' + 'useDown']));
            }), _0x1df89a(0x0, _0x13e76e, 'hide', function () {
                return this['_hide'];
            }, function (_0x59c1b9) {
                this['_hide'] = _0x59c1b9, this['visible'] = !_0x59c1b9;
            }), _0x1df89a(0x0, _0x13e76e, 'showButton' + 's', function () {
                return this['_showButto' + 'ns'];
            }, function (_0x51076d) {
                this['_showButto' + 'ns'] = _0x51076d, this['callLater'](this['changeScro' + 'llBar']);
            }), _0x1df89a(0x0, _0x13e76e, 'touchScrol' + 'lEnable', function () {
                return this['_touchScro' + 'llEnable'];
            }, function (_0x345ce9) {
                this['_touchScro' + 'llEnable'] = _0x345ce9, this['target'] = this['_target'];
            }), _0x1df89a(0x0, _0x13e76e, 'mouseWheel' + 'Enable', function () {
                return this['_mouseWhee' + 'lEnable'];
            }, function (_0x553f60) {
                this['_mouseWhee' + 'lEnable'] = _0x553f60, this['target'] = this['_target'];
            }), _0x1df89a(0x0, _0x13e76e, 'lastOffset', function () {
                return this['_lastOffse' + 't'];
            }), _0x1df89a(0x0, _0x13e76e, 'tick', function () {
                return this['slider']['tick'];
            }, function (_0x326467) {
                this['slider']['tick'] = _0x326467;
            }), _0x317c00;
        }(_0x566be1), _0x17643a = function (_0x539418) {
            function _0x1ee958(_0x4181de) {
                this['changeHand' + 'ler'] = null, this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_allowClic' + 'kBack'] = !0x1, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, this['_skin'] = null, this['_bg'] = null, this['_progress'] = null, this['_bar'] = null, this['_tx'] = NaN, this['_ty'] = NaN, this['_maxMove'] = NaN, this['_globalSac' + 'le'] = null, _0x1ee958['__super']['call'](this), this['skin'] = _0x4181de;
            }
            _0x9a35ce(_0x1ee958, 'laya.ui.Sl' + 'ider', _0x539418);
            var _0x4a1b90 = _0x1ee958['prototype'];
            return _0x4a1b90['destroy'] = function (_0x4ba458) {
                void 0x0 === _0x4ba458 && (_0x4ba458 = !0x0), _0x539418['prototype']['destroy']['call'](this, _0x4ba458), this['_bg'] && this['_bg']['destroy'](_0x4ba458), this['_bar'] && this['_bar']['destroy'](_0x4ba458), this['_progress'] && this['_progress']['destroy'](_0x4ba458), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
            }, _0x4a1b90['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x1f8bdb()), this['addChild'](this['_bar'] = new _0x1851a2());
            }, _0x4a1b90['initialize'] = function () {
                this['_bar']['on']('mousedown', this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
            }, _0x4a1b90['onBarMouse' + 'Down'] = function (_0x2b60a2) {
                this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x3247b1()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x290223['stage']['mouseX'], this['_ty'] = _0x290223['stage']['mouseY'], _0x290223['stage']['on']('mousemove', this, this['mouseMove']), _0x290223['stage']['once']('mouseup', this, this['mouseUp']), _0x290223['stage']['once']('mouseout', this, this['mouseUp']), this['showValueT' + 'ext']();
            }, _0x4a1b90['showValueT' + 'ext'] = function () {
                if (this['showLabel']) {
                    var _0x4b09b6 = laya['ui']['Slider']['label'];
                    this['addChild'](_0x4b09b6), _0x4b09b6['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x4b09b6['x'] = this['_bar']['_x'] + 0x14, _0x4b09b6['y'] = 0.5 * (this['_bar']['height'] - _0x4b09b6['height']) + this['_bar']['_y']) : (_0x4b09b6['y'] = this['_bar']['_y'] - 0x14, _0x4b09b6['x'] = 0.5 * (this['_bar']['width'] - _0x4b09b6['width']) + this['_bar']['_x']);
                }
            }, _0x4a1b90['hideValueT' + 'ext'] = function () {
                laya['ui']['Slider']['label'] && laya['ui']['Slider']['label']['removeSelf']();
            }, _0x4a1b90['mouseUp'] = function (_0x4ab631) {
                _0x290223['stage']['off']('mousemove', this, this['mouseMove']), _0x290223['stage']['off']('mouseup', this, this['mouseUp']), _0x290223['stage']['off']('mouseout', this, this['mouseUp']), this['sendChange' + 'Event']('changed'), this['hideValueT' + 'ext']();
            }, _0x4a1b90['mouseMove'] = function (_0x2a87f9) {
                var _0x479028 = this['_value'];
                if (this['isVertical'] ? (this['_bar']['y'] += (_0x290223['stage']['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x290223['stage']['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x290223['stage']['mouseX'], this['_ty'] = _0x290223['stage']['mouseY'], 0x0 != this['_tick']) {
                    var _0x3513d2 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x3513d2) / _0x3513d2;
                }
                this['_value'] != _0x479028 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
            }, _0x4a1b90['sendChange' + 'Event'] = function (_0x4d202b) {
                void 0x0 === _0x4d202b && (_0x4d202b = 'change'), this['event'](_0x4d202b), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
            }, _0x4a1b90['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
                var _0x367b4f = this['_skin']['replace']('.png', '$progress.' + 'png');
                _0x5a5cdd['getRes'](_0x367b4f) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x1f8bdb()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x367b4f), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x4a1b90['setBarPoin' + 't'] = function () {
                this['isVertical'] ? this['_bar']['x'] = Math['round'](0.5 * (this['_bg']['width'] - this['_bar']['width'])) : this['_bar']['y'] = Math['round'](0.5 * (this['_bg']['height'] - this['_bar']['height']));
            }, _0x4a1b90['measureWid' + 'th'] = function () {
                return Math['max'](this['_bg']['width'], this['_bar']['width']);
            }, _0x4a1b90['measureHei' + 'ght'] = function () {
                return Math['max'](this['_bg']['height'], this['_bar']['height']);
            }, _0x4a1b90['_sizeChang' + 'ed'] = function () {
                _0x539418['prototype']['_sizeChang' + 'ed']['call'](this), this['isVertical'] ? this['_bg']['height'] = this['height'] : this['_bg']['width'] = this['width'], this['setBarPoin' + 't'](), this['changeValu' + 'e']();
            }, _0x4a1b90['setSlider'] = function (_0xdf82a9, _0x36ff60, _0x259093) {
                this['_value'] = -0x1, this['_min'] = _0xdf82a9, this['_max'] = _0x36ff60 > _0xdf82a9 ? _0x36ff60 : _0xdf82a9, this['value'] = _0x259093 < _0xdf82a9 ? _0xdf82a9 : _0x259093 > _0x36ff60 ? _0x36ff60 : _0x259093;
            }, _0x4a1b90['changeValu' + 'e'] = function () {
                if (0x0 != this['tick']) {
                    var _0x4b5857 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x4b5857) / _0x4b5857;
                }
                this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
                var _0x56e499 = this['_max'] - this['_min'];
                0x0 === _0x56e499 && (_0x56e499 = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x56e499 * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x56e499 * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
            }, _0x4a1b90['onBgMouseD' + 'own'] = function (_0x1ae0ed) {
                var _0x3872f4 = this['_bg']['getMousePo' + 'int']();
                this['isVertical'] ? this['value'] = _0x3872f4['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x3872f4['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
            }, _0x1df89a(0x0, _0x4a1b90, 'dataSource', _0x539418['prototype']['_$get_data' + 'Source'], function (_0x4a2728) {
                this['_dataSourc' + 'e'] = _0x4a2728, 'number' == typeof _0x4a2728 || 'string' == typeof _0x4a2728 ? this['value'] = Number(_0x4a2728) : _0x290223['superSet'](_0x566be1, this, 'dataSource', _0x4a2728);
            }), _0x1df89a(0x0, _0x4a1b90, 'skin', function () {
                return this['_skin'];
            }, function (_0x22fbdf) {
                this['_skin'] != _0x22fbdf && (this['_skin'] = _0x22fbdf, this['_skin'] && !_0x5a5cdd['getRes'](this['_skin']) ? _0x290223['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x3169bc['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0x4a1b90, 'tick', function () {
                return this['_tick'];
            }, function (_0x4674b8) {
                this['_tick'] != _0x4674b8 && (this['_tick'] = _0x4674b8, this['callLater'](this['changeValu' + 'e']));
            }), _0x1df89a(0x0, _0x4a1b90, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x2df39c) {
                this['_bg']['sizeGrid'] = _0x2df39c, this['_bar']['sizeGrid'] = _0x2df39c, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
            }), _0x1df89a(0x0, _0x4a1b90, 'allowClick' + 'Back', function () {
                return this['_allowClic' + 'kBack'];
            }, function (_0x4f49ce) {
                this['_allowClic' + 'kBack'] != _0x4f49ce && (this['_allowClic' + 'kBack'] = _0x4f49ce, _0x4f49ce ? this['_bg']['on']('mousedown', this, this['onBgMouseD' + 'own']) : this['_bg']['off']('mousedown', this, this['onBgMouseD' + 'own']));
            }), _0x1df89a(0x0, _0x4a1b90, 'max', function () {
                return this['_max'];
            }, function (_0x4dc689) {
                this['_max'] != _0x4dc689 && (this['_max'] = _0x4dc689, this['callLater'](this['changeValu' + 'e']));
            }), _0x1df89a(0x0, _0x4a1b90, 'min', function () {
                return this['_min'];
            }, function (_0x38fe82) {
                this['_min'] != _0x38fe82 && (this['_min'] = _0x38fe82, this['callLater'](this['changeValu' + 'e']));
            }), _0x1df89a(0x0, _0x4a1b90, 'bar', function () {
                return this['_bar'];
            }), _0x1df89a(0x0, _0x4a1b90, 'value', function () {
                return this['_value'];
            }, function (_0x5cfcb1) {
                if (this['_value'] != _0x5cfcb1) {
                    var _0x473895 = this['_value'];
                    this['_value'] = _0x5cfcb1, this['changeValu' + 'e'](), this['_value'] != _0x473895 && this['sendChange' + 'Event']();
                }
            }), _0x26875a(_0x1ee958, [
                'label',
                function () {
                    return this['label'] = new _0x1202c1();
                }
            ]), _0x1ee958;
        }(_0x566be1), _0x5eab45 = function (_0xbbf092) {
            var _0x2562aa, _0x5c8e58;
            function _0x42d6a7(_0x3da01f) {
                this['gameStopHD'] = !0x1, this['iconImgTl'] = null, this['_iconImage'] = null, this['_moreBox'] = null, this['_gameBox'] = null, this['screenType'] = 0x0, this['_moreGameD' + 'ataUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/more/game' + 'list2.json', this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['isShow'] = !0x1, this['dinfo'] = null, this['ErrorUrlHt' + 'tps'] = 'https://el' + 'astic.laya' + 'box.com/', this['tongjiType'] = 'bdm', void 0x0 === _0x3da01f && (_0x3da01f = 0x0), _0x42d6a7['__super']['call'](this), this['screenType'] = _0x3da01f, this['init']();
            }
            _0x9a35ce(_0x42d6a7, 'laya.ui.Mo' + 'reGame', _0x1d5c18);
            var _0x28062c = _0x42d6a7['prototype'];
            return _0x28062c['getLocalDa' + 'teString'] = function (_0x3ee298) {
                void 0x0 === _0x3ee298 && (_0x3ee298 = 0x0);
                var _0x1ec36c = this['getDateByT' + 'imestamp'](_0x3ee298)['toLocaleDa' + 'teString']();
                if (_0x4cf231['onLimixiu'] || _0x4cf231['onMiniGame']) {
                    var _0x1e9298 = new Date();
                    _0x1ec36c = _0x42d6a7['toLocaleDa' + 'teString'](_0x1e9298['getTime']());
                }
                var _0x5f273c = new RegExp('/', 'g');
                return _0x1ec36c = _0x1ec36c['replace'](_0x5f273c, '-');
            }, _0x28062c['getDateByT' + 'imestamp'] = function (_0x48a2c3) {
                return void 0x0 === _0x48a2c3 && (_0x48a2c3 = 0x0), _0x48a2c3 && '' != _0x48a2c3 ? new Date(_0x48a2c3) : new Date();
            }, _0x28062c['reportErro' + 'r'] = function (_0x5862c8, _0x541561, _0x325e27) {
                void 0x0 === _0x541561 && (_0x541561 = ''), _0x325e27 = _0x325e27 || {};
                var _0x43e36d = Date['now'](), _0xee8d12 = new Date(_0x43e36d + 0x0);
                _0x325e27['date'] = _0xee8d12['toLocaleSt' + 'ring'](), _0x325e27['etype'] = _0x5862c8, 'error' != _0x5862c8 && 'statistics' != _0x5862c8 && (_0x5862c8 = 'statistics'), _0x325e27['version'] = 'V0.0.1', _0x325e27['gameId'] = 0x2774, _0x325e27['dinfo'] = this['dinfo'], _0x325e27['channel'] = -0x3e8, _0x325e27['msg'] = _0x541561, _0x325e27['@timestamp'] = _0xee8d12['toISOStrin' + 'g'](), _0x325e27['user'] = this['getUserId'](), _0x325e27['openid'] = this['getOpenId']();
                var _0x4f96d6 = _0x42d6a7['getDay'](_0xee8d12);
                _0x325e27['rdate'] = _0x4f96d6, _0x325e27['day'] = _0xee8d12['getDate']() + '', _0x325e27['hour'] = _0xee8d12['getHours']() + '', _0x325e27['minute'] = _0xee8d12['getMinutes']() + '', _0x325e27['gameurl'] = _0x438e82['baseURI'], _0x325e27['regTime'] = 0x0, 'error' == _0x5862c8 ? this['sendLog'](_0x325e27, this['tongjiType'] + 'error-' + _0x4f96d6['substring'](0x0, 0x6) + '/' + _0x5862c8 + '/', _0x5862c8) : this['sendLog'](_0x325e27, this['tongjiType'] + '-' + _0x4f96d6['substring'](0x0, 0x6) + '/' + _0x5862c8 + '/', _0x5862c8);
            }, _0x28062c['getUserId'] = function () {
                var _0xff621e = parseInt(_0x199abd['getItem']('layauserid') + '') || -0x1;
                return -0x1 == _0xff621e && (_0xff621e = this['randRange'](0x0, 0x3b9aca00), _0x199abd['setItem']('layauserid', _0xff621e + '')), _0xff621e;
            }, _0x28062c['getOpenId'] = function () {
                var _0x4375bf = _0x199abd['getItem']('openid');
                if (null == _0x4375bf || '' == _0x4375bf) {
                    _0x4375bf = '';
                    for (var _0xe62dc2 = 0x0; _0xe62dc2 < 0x20; _0xe62dc2++) {
                        var _0x4db394 = this['randRange'](0x0, 0x3e);
                        _0x4375bf += ('abcdefghij' + 'klmnopqrst' + 'uvwxyzABCD' + 'EFGHIJKLMN' + 'OPQRSTUVWX' + 'YZ01234567' + '89')['charAt'](_0x4db394);
                    }
                    _0x199abd['setItem']('openid', _0x4375bf);
                }
                return _0x4375bf;
            }, _0x28062c['sendLog'] = function (_0x16ffcf, _0x4a3f70, _0x580674) {
                var _0xbf73ec = this, _0x4b2ad3 = new _0x2e7f3f();
                _0x4b2ad3['on']('error', this, function (_0x3d0d1b, _0x90f258, _0x3e7cbc) {
                    _0x3e7cbc && -0x1 != _0x3e7cbc['indexOf']('[404]') && new _0x2e7f3f()['send'](_0xbf73ec['ErrorUrlHt' + 'tps'] + 'garbage/' + _0x90f258 + '/', JSON['stringify'](_0x3d0d1b), 'post', 'text', [
                        'Content-Ty' + 'pe',
                        'applicatio' + 'n/json'
                    ]);
                }, [
                    _0x16ffcf,
                    _0x580674
                ]), _0x4cf231['onBDMiniGa' + 'me'] && (_0x16ffcf['gameurl'] = ''), _0x4b2ad3['send'](this['ErrorUrlHt' + 'tps'] + _0x4a3f70, JSON['stringify'](_0x16ffcf), 'post', 'text', [
                    'Content-Ty' + 'pe',
                    'applicatio' + 'n/json'
                ]);
            }, _0x28062c['initEvent'] = function () {
                this['on']('click', this, this['onIconClic' + 'k']);
            }, _0x28062c['onStageRes' + 'ize'] = function () {
                var _0x5cc647 = Math['min'](_0x290223['stage']['width'] / _0x290223['stage']['designWidt' + 'h'], _0x290223['stage']['height'] / _0x290223['stage']['designHeig' + 'ht']);
                _0x290223['stage']['width'] < 0x2d0 && (_0x5cc647 = 0.9), this['_moreBox'] && this['_moreBox']['scale'](_0x5cc647, _0x5cc647), this['_gameBox'] && this['_gameBox']['scale'](_0x5cc647, _0x5cc647);
            }, _0x28062c['tada'] = function (_0x10be08, _0x33f889, _0xad54b0, _0xa18c16) {
                void 0x0 === _0xad54b0 && (_0xad54b0 = 1.1), void 0x0 === _0xa18c16 && (_0xa18c16 = 0x1);
                var _0x49bd04 = new _0x170da9();
                return _0x49bd04['reset'](), _0x49bd04['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': 0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': -0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': 0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': -0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': 0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': -0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': 0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': -0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xad54b0,
                    'scaleY': _0xad54b0,
                    'rotation': 0x3
                }, 0.1 * _0x33f889)['to'](_0x10be08, {
                    'scaleX': _0xa18c16,
                    'scaleY': _0xa18c16,
                    'rotation': 0x0
                }, 0.1 * _0x33f889), _0x49bd04['play'](0x0), _0x49bd04;
            }, _0x28062c['dispose'] = function () {
                this['removeEven' + 't'](), this['gameStopHD'] = !0x0, _0x42d6a7['_moreGameD' + 'ata'] = null, this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null), this['_moreBox'] && (this['_moreBox']['removeChil' + 'dren'](), this['_moreBox'] = null), this['_gameBox'] && (this['_gameBox']['removeChil' + 'dren'](), this['_gameBox'] = null), this['_iconImage'] && (this['_iconImage']['removeSelf'](), this['_iconImage'] = null);
            }, _0x28062c['onSetIconT' + 'ype'] = function (_0x28f631) {
                this['gameStopHD'] = !_0x28f631, this['visible'] = _0x28f631;
            }, _0x28062c['checkIconI' + 'mgHD'] = function () {
                this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] = this['tada'](this['_iconImage'], 0x4b0, 1.1, 0.9), this['iconImgTl']['on']('complete', this, this['onTlComple' + 'te']);
            }, _0x28062c['onTlComple' + 'te'] = function () {
                if (this['parent']) {
                    if (this['_iconImage']['scale'](0.9, 0.9), this['_iconImage']['rotation'] = 0x0, this['gameStopHD'] && this['iconImgTl'])
                        return this['iconImgTl']['offAll']('complete'), void (this['iconImgTl'] = null);
                    _0x290223['timer']['once'](0x3e8, this, this['onYanChiPl' + 'ay']);
                } else
                    this['iconImgTl'] && (this['iconImgTl']['offAll'](), this['iconImgTl'] = null);
            }, _0x28062c['onYanChiPl' + 'ay'] = function () {
                this['parent'] && this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null);
            }, _0x28062c['removeEven' + 't'] = function () {
                this['off']('click', this, this['onIconClic' + 'k']);
            }, _0x28062c['onIconClic' + 'k'] = function () {
                this['isShow'] = !0x0, null != this['clickCallB' + 'ack'] && this['clickCallB' + 'ack']['run']();
                var _0x45b949 = _0x199abd['getItem']('currentTim' + 'e'), _0x4f17f4 = this['getLocalDa' + 'teString']();
                _0x45b949 != _0x4f17f4 ? (_0x199abd['setItem']('currentTim' + 'e', _0x4f17f4), this['reportErro' + 'r'](_0x42d6a7['_moreGameD' + 'ata']['statid1'])) : this['reportErro' + 'r'](_0x42d6a7['_moreGameD' + 'ata']['statid2']), this['onResLoade' + 'd']();
            }, _0x28062c['onResLoade' + 'd'] = function () {
                if (this['_moreBox'])
                    this['_moreBox']['visible'] = !0x0;
                else {
                    this['_moreBox'] = new _0x213a7b(), _0x290223['stage']['addChild'](this['_moreBox']), this['_moreBox']['zOrder'] = 0x1869f, this['_moreBox']['left'] = this['_moreBox']['right'] = this['_moreBox']['top'] = this['_moreBox']['bottom'] = 0x0;
                    var _0x576537 = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('img_white_' + 'bg'), this['_moreBox']);
                    _0x576537['top'] = _0x576537['left'] = _0x576537['right'] = _0x576537['bottom'] = 0x0, _0x576537['sizeGrid'] = '1,1,1,1,1';
                    var _0x5a4399 = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('hengfengex' + 'ian'), this['_moreBox']);
                    _0x5a4399['left'] = _0x5a4399['right'] = 0x0, _0x5a4399['y'] = 0x84, _0x5a4399['alpha'] = 0.2;
                    var _0x263aef = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('img_font_j' + 'ingcai'), this['_moreBox']);
                    _0x263aef['on']('click', this, this['onJiantouI' + 'mgClick']), this['isQMP']() && this['screenType'] ? _0x263aef['pos'](0xf, 0x46) : _0x263aef['pos'](0xf, 0x2d);
                    var _0x2b499b = new _0x4b8986();
                    this['_moreBox']['addChild'](_0x2b499b), _0x2b499b['itemRender'] = _0x2562aa, _0x2b499b['selectEnab' + 'le'] = !0x0, _0x2b499b['vScrollBar' + 'Skin'] = '', _0x2b499b['scrollBar']['autoHide'] = !0x0, _0x2b499b['scrollBar']['elasticDis' + 'tance'] = 0xfa, _0x2b499b['renderHand' + 'ler'] = new _0x3169bc(this, this['onGameList' + 'Render']);
                    var _0x27a09a = _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'], _0x162cca = [];
                    _0x162cca['push'](_0x27a09a[0x0]), _0x162cca['push'](_0x27a09a[0x1]);
                    var _0x2de1d8 = this['RandomNumB' + 'oth'](_0x162cca['length'], _0x27a09a['length'] - _0x162cca['length'], _0x27a09a['length']);
                    if (!_0x2de1d8)
                        return void (this['visible'] = !0x1);
                    try {
                        for (var _0x2426b1 = 0x0, _0x1daf33 = _0x2de1d8['length']; _0x2426b1 < _0x1daf33; _0x2426b1++) {
                            var _0x331d4e = _0x2de1d8[_0x2426b1];
                            _0x162cca['push'](_0x27a09a[_0x331d4e]);
                        }
                        _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = [], _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = _0x162cca, _0x2b499b['array'] = _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    } catch (_0x411bb1) {
                        _0x2b499b['array'] = _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    }
                    this['screenType'] && (_0x2b499b['spaceY'] = 0xa, _0x2b499b['width'] = 0x2b2, this['isQMP']() ? _0x2b499b['height'] = _0x290223['stage']['height'] + 0x82 : _0x2b499b['height'] = 0x473, _0x2b499b['y'] = 0x8b, _0x2b499b['centerX'] = 0x0), this['onStageRes' + 'ize']();
                }
            }, _0x28062c['RandomNumB' + 'oth'] = function (_0x276373, _0x11f94a, _0x464cbb) {
                for (var _0x2477d4 = [], _0x2e0def = _0x276373; _0x2e0def < _0x464cbb; _0x2e0def++)
                    _0x2477d4['push'](_0x2e0def);
                var _0x2ea74f = [], _0x3276aa = _0x2477d4['length'];
                for (_0x2e0def = 0x0; _0x2e0def < _0x3276aa; _0x2e0def++) {
                    _0x2477d4['length'];
                    var _0x47421a = Math['floor'](Math['random']() * _0x2477d4['length']);
                    if (_0x2ea74f['push'](_0x2477d4[_0x47421a]), _0x2477d4['splice'](_0x47421a, 0x1), _0x2477d4['length'] <= _0x3276aa - _0x11f94a)
                        return _0x2ea74f;
                }
                return null;
            }, _0x28062c['isQMP'] = function () {
                var _0x81c7c8 = !0x1, _0x3891bb = 0x0;
                if (_0x3891bb = 'horizontal' == _0x290223['stage']['screenMode'] ? _0x4cf231['height'] % 0x9 : _0x4cf231['width'] % 0x9, _0x4cf231['onAndroid'] && 0x0 == _0x3891bb) {
                    var _0x4bc430 = 0x0;
                    _0x4bc430 = 'horizontal' == _0x290223['stage']['screenMode'] ? _0x4cf231['width'] : _0x4cf231['height'], -0x1 != [
                        0x8e8,
                        0x870,
                        0x8c4,
                        0xc30,
                        0x8c8,
                        0x924,
                        0x906
                    ]['indexOf'](_0x4bc430) && (_0x81c7c8 = !0x0);
                }
                var _0x40fd68 = /iPhone/gi['test'](_0x4cf231['window']['navigator']['userAgent']) && 0x177 == Math['min'](_0x4cf231['clientHeig' + 'ht'], _0x4cf231['clientWidt' + 'h']) && 0x32c == Math['max'](_0x4cf231['clientHeig' + 'ht'], _0x4cf231['clientWidt' + 'h']), _0x480ca3 = 0x19e == Math['min'](_0x4cf231['clientHeig' + 'ht'], _0x4cf231['clientWidt' + 'h']) && 0x380 == Math['max'](_0x4cf231['clientHeig' + 'ht'], _0x4cf231['clientWidt' + 'h']);
                return !_0x4cf231['onMiniGame'] && !_0x4cf231['onBDMiniGa' + 'me'] || _0x4cf231['onAndroid'] || !_0x40fd68 && !_0x480ca3 || (_0x81c7c8 = !0x0), _0x81c7c8;
            }, _0x28062c['onDrawShap' + 'es'] = function (_0x27637d, _0x5ce69b, _0x5eb5e8, _0x322059) {
                void 0x0 === _0x5eb5e8 && (_0x5eb5e8 = 0x5), void 0x0 === _0x322059 && (_0x322059 = !0x1);
                var _0x39fbfd = _0x5eb5e8;
                _0x322059 && (_0x39fbfd = 0x0);
                var _0x32856d = new _0x3cfa9d();
                return _0x32856d['graphics']['drawPath'](0x0, 0x0, [
                    [
                        'moveTo',
                        _0x5eb5e8,
                        0x0
                    ],
                    [
                        'lineTo',
                        0x69,
                        0x0
                    ],
                    [
                        'arcTo',
                        _0x27637d,
                        0x0,
                        _0x27637d,
                        _0x5eb5e8,
                        _0x5eb5e8
                    ],
                    [
                        'lineTo',
                        _0x27637d,
                        _0x5ce69b
                    ],
                    [
                        'arcTo',
                        _0x27637d,
                        _0x5ce69b + _0x5eb5e8,
                        0x69,
                        _0x5ce69b + _0x5eb5e8,
                        _0x39fbfd
                    ],
                    [
                        'lineTo',
                        _0x5eb5e8,
                        _0x5ce69b + _0x5eb5e8
                    ],
                    [
                        'arcTo',
                        0x0,
                        _0x5ce69b + _0x5eb5e8,
                        0x0,
                        _0x5ce69b,
                        _0x39fbfd
                    ],
                    [
                        'lineTo',
                        0x0,
                        _0x5eb5e8
                    ],
                    [
                        'arcTo',
                        0x0,
                        0x0,
                        _0x5eb5e8,
                        0x0,
                        _0x5eb5e8
                    ],
                    ['closePath']
                ], { 'fillStyle': '#ff0000' }), _0x32856d;
            }, _0x28062c['onCreateMa' + 'skImg'] = function (_0x12fd87, _0x32d264) {
                var _0x3d68d6 = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('dayuan'), _0x32d264), _0x506cc3 = this['onCreateIm' + 'age'](_0x12fd87, _0x3d68d6);
                _0x506cc3['pos'](0xb, 0xa);
                var _0x2dfc72 = new _0x3cfa9d();
                return _0x2dfc72['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), _0x506cc3['mask'] = _0x2dfc72, _0x3d68d6['scale'](0.7, 0.7), _0x3d68d6;
            }, _0x28062c['onGameList' + 'Render'] = function (_0x29c1a3, _0x491b7b) {
                var _0x32055d = _0x42d6a7['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                if (!(_0x491b7b < 0x0 || _0x491b7b > _0x32055d['length'] - 0x1)) {
                    var _0x31238d = _0x32055d[_0x491b7b];
                    _0x29c1a3['init'](_0x31238d, this['screenType'], new _0x3169bc(this, this['onItemClic' + 'kCallBack']));
                }
            }, _0x28062c['onItemClic' + 'kCallBack'] = function (_0x4851d9) {
                var _0xe55158 = this;
                if (swan['navigateTo' + 'MiniProgra' + 'm']) {
                    var _0x5df09b = _0x4851d9['appKey'], _0x3a6e6c = _0x4851d9['path'], _0x14253e = _0x4851d9['extendInfo'];
                    swan['navigateTo' + 'MiniProgra' + 'm']({
                        'appKey': _0x5df09b,
                        'path': _0x3a6e6c,
                        'extraData': _0x14253e,
                        'success': function (_0x11bc39) {
                        },
                        'fail': function (_0xeef1fa) {
                        },
                        'complete': function (_0x3fe90c) {
                            _0xe55158['reportErro' + 'r'](_0x4851d9['statid']);
                        }['bind'](this)
                    });
                }
            }, _0x28062c['onJiantouI' + 'mgClick'] = function (_0x33521e) {
                this['isShow'] = !0x1, this['_moreBox'] && (this['_moreBox']['visible'] = !0x1), null != this['closeCallB' + 'ack'] && this['closeCallB' + 'ack']['run']();
            }, _0x28062c['onCreateLa' + 'bel'] = function (_0x570d33, _0x37d19b, _0x1240b7, _0x2fd711, _0x465887, _0x45de68, _0x1aa37c) {
                void 0x0 === _0x1240b7 && (_0x1240b7 = 0x18), void 0x0 === _0x2fd711 && (_0x2fd711 = '#000000'), void 0x0 === _0x465887 && (_0x465887 = !0x1), void 0x0 === _0x45de68 && (_0x45de68 = 'center'), void 0x0 === _0x1aa37c && (_0x1aa37c = 0xa);
                var _0x84cb94 = new _0x1202c1();
                return _0x84cb94['text'] = _0x570d33, _0x84cb94['font'] = 'Microsoft\x20' + 'YaHei', _0x84cb94['fontSize'] = _0x1240b7, _0x84cb94['color'] = _0x2fd711, _0x84cb94['bold'] = !0x0, _0x84cb94['leading'] = _0x1aa37c, _0x84cb94['valign'] = 'middle', _0x84cb94['align'] = _0x45de68, _0x84cb94['wordWrap'] = _0x465887, _0x37d19b['addChild'](_0x84cb94), _0x84cb94;
            }, _0x28062c['onCreateIm' + 'age'] = function (_0x2cff6c, _0x117083) {
                var _0x207ad5 = new _0x1f8bdb();
                return _0x207ad5['skin'] = _0x2cff6c, _0x117083['addChild'](_0x207ad5), _0x207ad5;
            }, _0x28062c['init'] = function () {
                var _0x850be3 = _0x4cf231['window']['navigator']['userAgent']['indexOf']('SwanGame') > -0x1;
                this['visible'] = !0x1, _0x850be3 && (this['dinfo'] = JSON['stringify'](laya['bd']['mini']['BMiniAdapt' + 'er']['systemInfo']), this['onGetAdvsL' + 'istData']());
            }, _0x28062c['randRange'] = function (_0x3a9af2, _0x478077) {
                return Math['floor'](Math['random']() * (_0x478077 - _0x3a9af2 + 0x1)) + _0x3a9af2;
            }, _0x28062c['onGetAdvsL' + 'istData'] = function () {
                var _0x71b23c = this, _0x342be9 = this['randRange'](0x2710, 0xf4240), _0x5cb388 = this['_moreGameD' + 'ataUrl'] + '?' + _0x342be9;
                _0x42d6a7['_http']['open']('get', _0x5cb388, !0x0), _0x42d6a7['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), _0x42d6a7['_http']['responseTy' + 'pe'] = 'text', _0x42d6a7['_http']['onerror'] = function (_0x32a2ff) {
                    _0x71b23c['_onError'](_0x32a2ff);
                }, _0x42d6a7['_http']['onload'] = function (_0x10c3c5) {
                    _0x71b23c['_onLoad'](_0x10c3c5);
                }, _0x42d6a7['_http']['send'](null);
            }, _0x28062c['_onError'] = function (_0x512949) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + _0x42d6a7['_http']['status'] + '\x20text:' + _0x42d6a7['_http']['statusText']);
            }, _0x28062c['_onLoad'] = function (_0x5702b3) {
                var _0x5bfd02 = _0x42d6a7['_http'], _0x39bd7e = void 0x0 !== _0x5bfd02['status'] ? _0x5bfd02['status'] : 0xc8;
                0xc8 === _0x39bd7e || 0xcc === _0x39bd7e || 0x0 === _0x39bd7e ? this['complete']() : this['error']('[' + _0x5bfd02['status'] + ']' + _0x5bfd02['statusText'] + ':' + _0x5bfd02['responseUR' + 'L']);
            }, _0x28062c['error'] = function (_0x15fbfe) {
                this['event']('error', _0x15fbfe);
            }, _0x28062c['complete'] = function () {
                try {
                    var _0x4e231b = _0x42d6a7['_http']['response'] || _0x42d6a7['_http']['responseTe' + 'xt'];
                    _0x42d6a7['_moreGameD' + 'ata'] = JSON['parse'](_0x4e231b), this['initUI']();
                } catch (_0x395ed7) {
                    !0x1, this['error'](_0x395ed7['message']);
                }
            }, _0x28062c['initUI'] = function () {
                _0x42d6a7['_moreGameD' + 'ata']['isOpen'] && this['screenType'] ? (this['_iconImage'] || (this['_iconImage'] = new _0x1f8bdb(), this['addChild'](this['_iconImage'])), this['_iconImage']['skin'] = _0x42d6a7['onGetImgSk' + 'inUrl'](_0x42d6a7['_moreGameD' + 'ata']['icon']), this['_iconImage' + 'Obj'] && (this['_iconImage']['size'](this['_iconImage' + 'Obj']['width'], this['_iconImage' + 'Obj']['height']), this['_iconImage']['pivot'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2), this['_iconImage']['pos'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2)), this['visible'] = !0x0, this['initEvent'](), this['gameStopHD'] = !0x1, this['checkIconI' + 'mgHD']()) : this['visible'] = !0x1;
            }, _0x28062c['setIconSiz' + 'e'] = function (_0x260c7a, _0x16fe44) {
                this['_iconImage'] && (this['_iconImage']['size'](_0x260c7a, _0x16fe44), this['_iconImage']['pivot'](_0x260c7a / 0x2, _0x16fe44 / 0x2), this['_iconImage']['pos'](_0x260c7a / 0x2, _0x16fe44 / 0x2)), this['_iconImage' + 'Obj'] = {
                    'width': _0x260c7a,
                    'height': _0x16fe44
                };
            }, _0x42d6a7['toLocaleDa' + 'teString'] = function (_0x161cd7) {
                return _0x42d6a7['getDateFor' + 'matStr'](_0x161cd7, '/');
            }, _0x42d6a7['getDateFor' + 'matStr'] = function (_0x4f3c20, _0x51524e) {
                void 0x0 === _0x51524e && (_0x51524e = 'yynndd');
                var _0x420347 = new Date(_0x4f3c20), _0xd4ee74 = _0x420347['getFullYea' + 'r'](), _0x456ad9 = _0x420347['getMonth']() + 0x1, _0x5458c7 = _0x420347['getDate'](), _0xa9bd00 = _0x420347['getHours'](), _0x518152 = _0x420347['getMinutes'](), _0x567c62 = _0x420347['getSeconds']();
                switch (_0x51524e) {
                case 'yynndd':
                    return _0xd4ee74['toString']() + '年' + _0x456ad9['toString']() + '月' + _0x5458c7['toString']() + '日';
                case '/':
                    return _0xd4ee74['toString']() + '/' + _0x456ad9['toString']() + '/' + _0x5458c7['toString']();
                }
                return _0xd4ee74['toString']() + '年' + _0x456ad9['toString']() + '月' + _0x5458c7['toString']() + '日' + _0xa9bd00['toString']() + '时' + _0x518152['toString']() + '分' + _0x567c62['toString']() + '秒';
            }, _0x42d6a7['getDay'] = function (_0x14252b) {
                var _0x4f70aa = _0x14252b['getMonth']() + 0x1, _0xe925a0 = _0x14252b['getDate']();
                return _0x14252b['getFullYea' + 'r']() + '' + (_0x4f70aa < 0xa ? '0' + _0x4f70aa : _0x4f70aa) + (_0xe925a0 < 0xa ? '0' + _0xe925a0 : _0xe925a0);
            }, _0x42d6a7['onGetAtlas' + 'DanImgUrl'] = function (_0x5ba9fe) {
                return _0x42d6a7['_moreGameD' + 'ata']['imgPath'] + _0x42d6a7['_moreGameD' + 'ata']['atlas'] + _0x5ba9fe + '.png';
            }, _0x42d6a7['onGetImgSk' + 'inUrl'] = function (_0x4a1fee) {
                return _0x42d6a7['_moreGameD' + 'ata']['imgPath'] + _0x4a1fee;
            }, _0x42d6a7['onGetIconI' + 'mgSkinUrl'] = function (_0x145e96) {
                return _0x42d6a7['_moreGameD' + 'ata']['iconPath'] + _0x145e96;
            }, _0x42d6a7['_moreGameD' + 'ata'] = null, _0x26875a(_0x42d6a7, [
                '_http',
                function () {
                    return this['_http'] = new _0x4cf231['window']['XMLHttpReq' + 'uest']();
                }
            ]), _0x42d6a7['__init$'] = function () {
                _0x2562aa = function (_0x35856c) {
                    function _0x32d0e8() {
                        this['titleLabel'] = null, this['gameListBo' + 'x'] = null, _0x32d0e8['__super']['call'](this);
                    }
                    _0x9a35ce(_0x32d0e8, '', _0x213a7b);
                    var _0x4969ef = _0x32d0e8['prototype'];
                    return _0x4969ef['init'] = function (_0x512dc4, _0x26e5b3, _0x4d5846) {
                        if (this['titleLabel'] ? this['titleLabel']['text'] = _0x512dc4['title'] : (this['titleLabel'] = this['onCreateLa' + 'bel'](_0x512dc4['title'], this, 0x20, '#3d3939'), this['titleLabel']['pos'](0x8, 0x0), this['titleLabel']['size'](0xa2, 0x32)), this['gameListBo' + 'x']) {
                            for (_0xc69c38 = 0x0, _0x1bc065 = this['gameListBo' + 'x']['_children']['length']; _0xc69c38 < _0x1bc065; _0xc69c38++)
                                (_0x5ae268 = this['gameListBo' + 'x']['_children'][_0xc69c38])['init'](_0x512dc4['gameList'][_0xc69c38], _0x26e5b3, _0x4d5846);
                        } else {
                            this['gameListBo' + 'x'] = new _0x213a7b(), this['addChild'](this['gameListBo' + 'x']);
                            for (var _0xc69c38 = 0x0, _0x1bc065 = _0x512dc4['gameList']['length']; _0xc69c38 < _0x1bc065; _0xc69c38++) {
                                var _0x5ae268 = new _0x5c8e58();
                                _0x5ae268['init'](_0x512dc4['gameList'][_0xc69c38], _0x26e5b3, _0x4d5846), _0x5ae268['x'] = 0x0 + 0xaf * _0xc69c38, _0x5ae268['y'] = 0x41, this['gameListBo' + 'x']['addChild'](_0x5ae268);
                            }
                        }
                        this['size'](0x2b7, 0x154);
                    }, _0x4969ef['onCreateLa' + 'bel'] = function (_0x57d873, _0x1e511d, _0x48ea2a, _0x2efbad, _0x3fc7e7) {
                        void 0x0 === _0x48ea2a && (_0x48ea2a = 0x1a), void 0x0 === _0x2efbad && (_0x2efbad = '#000000'), void 0x0 === _0x3fc7e7 && (_0x3fc7e7 = !0x0);
                        var _0x485dca = new _0x1202c1();
                        return _0x485dca['text'] = _0x57d873, _0x485dca['font'] = 'Microsoft\x20' + 'YaHei', _0x485dca['fontSize'] = _0x48ea2a, _0x485dca['color'] = _0x2efbad, _0x485dca['bold'] = _0x3fc7e7, _0x485dca['leading'] = 0xa, _0x485dca['valign'] = 'middle', _0x485dca['align'] = 'center', _0x485dca['overflow'] = 'hidden', _0x1e511d['addChild'](_0x485dca), _0x485dca;
                    }, _0x32d0e8;
                }(), _0x5c8e58 = function (_0x3eae07) {
                    function _0x6f3c33() {
                        this['kuangImg'] = null, this['iconNameLa' + 'bel'] = null, this['iconImg'] = null, this['playImg'] = null, this['itemData'] = null, this['callBackHa' + 'ndler'] = null, _0x6f3c33['__super']['call'](this);
                    }
                    _0x9a35ce(_0x6f3c33, '', _0x213a7b);
                    var _0x2efc71 = _0x6f3c33['prototype'];
                    return _0x2efc71['MoveGameIt' + 'em'] = function () {
                    }, _0x2efc71['initEvent'] = function () {
                        this['on']('click', this, this['onItemClic' + 'k']);
                    }, _0x2efc71['onItemClic' + 'k'] = function () {
                        null != this['callBackHa' + 'ndler'] && this['callBackHa' + 'ndler']['runWith']([this['itemData']]);
                    }, _0x2efc71['init'] = function (_0x5403a, _0x4c2b0b, _0x3785f8) {
                        if (this['itemData'] = _0x5403a, this['callBackHa' + 'ndler'] = _0x3785f8, this['kuangImg'] ? this['kuangImg']['skin'] = _0x42d6a7['onGetAtlas' + 'DanImgUrl']('dayuan') : this['kuangImg'] = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('dayuan'), this), this['iconImg'])
                            this['iconImg']['skin'] = _0x42d6a7['onGetIconI' + 'mgSkinUrl'](_0x5403a['icon']);
                        else {
                            this['iconImg'] = this['onCreateIm' + 'age'](_0x42d6a7['onGetIconI' + 'mgSkinUrl'](_0x5403a['icon']), this);
                            var _0x49d51f = new _0x3cfa9d();
                            _0x49d51f['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), this['iconImg']['mask'] = _0x49d51f, this['iconImg']['pos'](0xd, 0xa);
                        }
                        this['iconNameLa' + 'bel'] ? this['iconNameLa' + 'bel']['text'] = _0x5403a['name'] : (this['iconNameLa' + 'bel'] = this['onCreateLa' + 'bel'](_0x5403a['name'], this, 0x1c, '#3d3939'), this['iconNameLa' + 'bel']['pos'](0x7, 0xa5)), this['playImg'] ? this['playImg']['skin'] = _0x42d6a7['onGetAtlas' + 'DanImgUrl']('img_play') : (this['playImg'] = this['onCreateIm' + 'age'](_0x42d6a7['onGetAtlas' + 'DanImgUrl']('img_play'), this), this['playImg']['pos'](0xc, 0xd2)), this['size'](0xa5, 0x10e), this['initEvent']();
                    }, _0x2efc71['onCreateLa' + 'bel'] = function (_0x229817, _0x51defa, _0xee93f3, _0x3888e5, _0x366054) {
                        void 0x0 === _0xee93f3 && (_0xee93f3 = 0x18), void 0x0 === _0x3888e5 && (_0x3888e5 = '#000000'), void 0x0 === _0x366054 && (_0x366054 = !0x1);
                        var _0x49b51d = new _0x1202c1();
                        return _0x49b51d['text'] = _0x229817, _0x49b51d['font'] = 'Microsoft\x20' + 'YaHei', _0x49b51d['fontSize'] = _0xee93f3, _0x49b51d['color'] = _0x3888e5, _0x49b51d['bold'] = _0x366054, _0x49b51d['leading'] = 0xa, _0x49b51d['valign'] = 'middle', _0x49b51d['align'] = 'center', _0x49b51d['size'](0x98, 0x2c), _0x49b51d['overflow'] = 'hidden', _0x51defa['addChild'](_0x49b51d), _0x49b51d;
                    }, _0x2efc71['onCreateIm' + 'age'] = function (_0x4e4416, _0x47cd2f) {
                        var _0xfa804e = new _0x1f8bdb();
                        return _0xfa804e['skin'] = _0x4e4416, _0x47cd2f['addChild'](_0xfa804e), _0xfa804e;
                    }, _0x6f3c33;
                }();
            }, _0x42d6a7;
        }(), _0x57f91f = function (_0x267dfe) {
            function _0x2f96df() {
                this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['group'] = null, this['isModal'] = !0x1, this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['closeType'] = null, this['_dragArea'] = null, this['_param'] = null, this['_effectTwe' + 'en'] = null, _0x2f96df['__super']['call'](this), this['popupEffec' + 't'] = _0x2f96df['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x2f96df['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on']('click', this, this['_onClick']);
            }
            _0x9a35ce(_0x2f96df, 'laya.ui.Di' + 'alog', _0x267dfe);
            var _0x55737a = _0x2f96df['prototype'];
            return _0x55737a['_dealDragA' + 'rea'] = function () {
                var _0x391cac = this['getChildBy' + 'Name']('drag');
                _0x391cac && (this['dragArea'] = _0x391cac['_x'] + ',' + _0x391cac['_y'] + ',' + _0x391cac['width'] + ',' + _0x391cac['height'], _0x391cac['removeSelf']());
            }, _0x55737a['_onMouseDo' + 'wn'] = function (_0x41a271) {
                var _0x50f89a = this['getMousePo' + 'int']();
                this['_dragArea']['contains'](_0x50f89a['x'], _0x50f89a['y']) ? this['startDrag']() : this['stopDrag']();
            }, _0x55737a['_onClick'] = function (_0xb7f32a) {
                var _0x9fe755 = _0xb7f32a['target'];
                if (_0x9fe755)
                    switch (_0x9fe755['name']) {
                    case 'close':
                    case 'cancel':
                    case 'sure':
                    case 'no':
                    case 'ok':
                    case 'yes':
                        return void this['close'](_0x9fe755['name']);
                    }
            }, _0x55737a['open'] = function (_0x13d0dc, _0x335181) {
                void 0x0 === _0x13d0dc && (_0x13d0dc = !0x0), this['_dealDragA' + 'rea'](), this['_param'] = _0x335181, _0x2f96df['manager']['open'](this, _0x13d0dc, this['isShowEffe' + 'ct']), _0x2f96df['manager']['lock'](!0x1);
            }, _0x55737a['close'] = function (_0x58d9c9) {
                this['closeType'] = _0x58d9c9, _0x2f96df['manager']['close'](this);
            }, _0x55737a['destroy'] = function (_0x552925) {
                void 0x0 === _0x552925 && (_0x552925 = !0x0), this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, _0x267dfe['prototype']['destroy']['call'](this, _0x552925);
            }, _0x55737a['show'] = function (_0x3dc620, _0x2fa72a) {
                void 0x0 === _0x3dc620 && (_0x3dc620 = !0x1), void 0x0 === _0x2fa72a && (_0x2fa72a = !0x0), this['_open'](!0x1, _0x3dc620, _0x2fa72a);
            }, _0x55737a['popup'] = function (_0x1f74f3, _0x41ba80) {
                void 0x0 === _0x1f74f3 && (_0x1f74f3 = !0x1), void 0x0 === _0x41ba80 && (_0x41ba80 = !0x0), this['_open'](!0x0, _0x1f74f3, _0x41ba80);
            }, _0x55737a['_open'] = function (_0x2b46b7, _0x127cb6, _0x1f018f) {
                this['isModal'] = _0x2b46b7, this['isShowEffe' + 'ct'] = _0x1f018f, _0x2f96df['manager']['lock'](!0x0), this['open'](_0x127cb6);
            }, _0x1df89a(0x0, _0x55737a, 'dragArea', function () {
                return this['_dragArea'] ? this['_dragArea']['toString']() : null;
            }, function (_0x39b894) {
                if (_0x39b894) {
                    var _0x18a6dd = _0x3c7b88['fillArray']([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ], _0x39b894, Number);
                    this['_dragArea'] = new _0x445590(_0x18a6dd[0x0], _0x18a6dd[0x1], _0x18a6dd[0x2], _0x18a6dd[0x3]), this['on']('mousedown', this, this['_onMouseDo' + 'wn']);
                } else
                    this['_dragArea'] = null, this['off']('mousedown', this, this['_onMouseDo' + 'wn']);
            }), _0x1df89a(0x0, _0x55737a, 'isPopup', function () {
                return null != this['parent'];
            }), _0x1df89a(0x0, _0x55737a, 'zOrder', _0x267dfe['prototype']['_$get_zOrd' + 'er'], function (_0x1e2e89) {
                _0x290223['superSet'](_0x1d5c18, this, 'zOrder', _0x1e2e89), _0x2f96df['manager']['_checkMask']();
            }), _0x1df89a(0x1, _0x2f96df, 'manager', function () {
                return _0x2f96df['_manager'] = _0x2f96df['_manager'] || new _0x349c9b();
            }, function (_0x1ec001) {
                _0x2f96df['_manager'] = _0x1ec001;
            }), _0x2f96df['setLockVie' + 'w'] = function (_0x2639e5) {
                _0x2f96df['manager']['setLockVie' + 'w'](_0x2639e5);
            }, _0x2f96df['lock'] = function (_0xa26db5) {
                _0x2f96df['manager']['lock'](_0xa26db5);
            }, _0x2f96df['closeAll'] = function () {
                _0x2f96df['manager']['closeAll']();
            }, _0x2f96df['getDialogs' + 'ByGroup'] = function (_0x30f577) {
                return _0x2f96df['manager']['getDialogs' + 'ByGroup'](_0x30f577);
            }, _0x2f96df['closeByGro' + 'up'] = function (_0x324c2d) {
                return _0x2f96df['manager']['closeByGro' + 'up'](_0x324c2d);
            }, _0x2f96df['CLOSE'] = 'close', _0x2f96df['CANCEL'] = 'cancel', _0x2f96df['SURE'] = 'sure', _0x2f96df['NO'] = 'no', _0x2f96df['YES'] = 'yes', _0x2f96df['OK'] = 'ok', _0x2f96df['_manager'] = null, _0x2f96df;
        }(_0x1d5c18), _0x420800 = function (_0x33565c) {
            function _0x3161c1() {
                this['_items'] = null, this['_selectedI' + 'ndex'] = 0x0, _0x3161c1['__super']['call'](this), this['_setIndexH' + 'andler'] = _0x3169bc['create'](this, this['setIndex'], null, !0x1);
            }
            _0x9a35ce(_0x3161c1, 'laya.ui.Vi' + 'ewStack', _0x33565c);
            var _0x2c9b2 = _0x3161c1['prototype'];
            return _0x290223['imps'](_0x2c9b2, { 'laya.ui.IItem': !0x0 }), _0x2c9b2['setItems'] = function (_0xd46907) {
                this['removeChil' + 'dren']();
                for (var _0x404e66 = 0x0, _0x531db4 = 0x0, _0x40674e = _0xd46907['length']; _0x531db4 < _0x40674e; _0x531db4++) {
                    var _0x19ee06 = _0xd46907[_0x531db4];
                    _0x19ee06 && (_0x19ee06['name'] = 'item' + _0x404e66, this['addChild'](_0x19ee06), _0x404e66++);
                }
                this['initItems']();
            }, _0x2c9b2['addItem'] = function (_0x290dc5) {
                _0x290dc5['name'] = 'item' + this['_items']['length'], this['addChild'](_0x290dc5), this['initItems']();
            }, _0x2c9b2['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x2c9b2['initItems'] = function () {
                this['_items'] = [];
                for (var _0xb3575b = 0x0; _0xb3575b < 0x2710; _0xb3575b++) {
                    var _0x30542d = this['getChildBy' + 'Name']('item' + _0xb3575b);
                    if (null == _0x30542d)
                        break;
                    this['_items']['push'](_0x30542d), _0x30542d['visible'] = _0xb3575b == this['_selectedI' + 'ndex'];
                }
            }, _0x2c9b2['setSelect'] = function (_0x4ab34d, _0x227a75) {
                this['_items'] && _0x4ab34d > -0x1 && _0x4ab34d < this['_items']['length'] && (this['_items'][_0x4ab34d]['visible'] = _0x227a75);
            }, _0x2c9b2['setIndex'] = function (_0x1d7401) {
                this['selectedIn' + 'dex'] = _0x1d7401;
            }, _0x1df89a(0x0, _0x2c9b2, 'dataSource', _0x33565c['prototype']['_$get_data' + 'Source'], function (_0x3282c0) {
                if (this['_dataSourc' + 'e'] = _0x3282c0, 'number' == typeof _0x3282c0 && Math['floor'](_0x3282c0) == _0x3282c0 || 'string' == typeof _0x3282c0)
                    this['selectedIn' + 'dex'] = parseInt(_0x3282c0);
                else {
                    for (var _0x2776b2 in this['_dataSourc' + 'e'])
                        this['hasOwnProp' + 'erty'](_0x2776b2) && (this[_0x2776b2] = this['_dataSourc' + 'e'][_0x2776b2]);
                }
            }), _0x1df89a(0x0, _0x2c9b2, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x57c3df) {
                this['_selectedI' + 'ndex'] != _0x57c3df && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x57c3df, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
            }), _0x1df89a(0x0, _0x2c9b2, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x53fade) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x53fade);
            }), _0x1df89a(0x0, _0x2c9b2, 'items', function () {
                return this['_items'];
            }), _0x1df89a(0x0, _0x2c9b2, 'setIndexHa' + 'ndler', function () {
                return this['_setIndexH' + 'andler'];
            }, function (_0x253a25) {
                this['_setIndexH' + 'andler'] = _0x253a25;
            }), _0x3161c1;
        }(_0x213a7b), _0x5a5cc0 = function (_0x5db90c) {
            function _0x168b6d() {
                this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1, _0x168b6d['__super']['call'](this);
            }
            _0x9a35ce(_0x168b6d, 'laya.ui.La' + 'youtBox', _0x213a7b);
            var _0x39981e = _0x168b6d['prototype'];
            return _0x39981e['addChild'] = function (_0x5b7c32) {
                return _0x5b7c32['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChild']['call'](this, _0x5b7c32);
            }, _0x39981e['onResize'] = function (_0x150b64) {
                this['_setItemCh' + 'anged']();
            }, _0x39981e['addChildAt'] = function (_0x2a084d, _0x150314) {
                return _0x2a084d['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChildAt']['call'](this, _0x2a084d, _0x150314);
            }, _0x39981e['removeChil' + 'dAt'] = function (_0x1685c0) {
                return this['getChildAt'](_0x1685c0)['off']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['removeChil' + 'dAt']['call'](this, _0x1685c0);
            }, _0x39981e['refresh'] = function () {
                this['_setItemCh' + 'anged']();
            }, _0x39981e['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
            }, _0x39981e['sortItem'] = function (_0x2378aa) {
                _0x2378aa && _0x2378aa['sort'](function (_0x1e59d4, _0x5e1db9) {
                    return _0x1e59d4['y'] - _0x5e1db9['y'];
                });
            }, _0x39981e['_setItemCh' + 'anged'] = function () {
                this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
            }, _0x1df89a(0x0, _0x39981e, 'space', function () {
                return this['_space'];
            }, function (_0x180641) {
                this['_space'] = _0x180641, this['_setItemCh' + 'anged']();
            }), _0x1df89a(0x0, _0x39981e, 'align', function () {
                return this['_align'];
            }, function (_0x1439c5) {
                this['_align'] = _0x1439c5, this['_setItemCh' + 'anged']();
            }), _0x168b6d;
        }(), _0x5e1a23 = function (_0x1907d0) {
            function _0x6e56bd(_0x3d3b34, _0x3b1633) {
                this['selectHand' + 'ler'] = null, this['_items'] = null, this['_selectedI' + 'ndex'] = -0x1, this['_skin'] = null, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['_labels'] = null, this['_labelColo' + 'rs'] = null, this['_labelFont'] = null, this['_labelStro' + 'keColor'] = null, this['_strokeCol' + 'ors'] = null, this['_labelStro' + 'ke'] = NaN, this['_labelSize'] = 0x0, this['_labelBold'] = !0x1, this['_labelPadd' + 'ing'] = null, this['_labelAlig' + 'n'] = null, this['_stateNum'] = 0x0, this['_labelChan' + 'ged'] = !0x1, _0x6e56bd['__super']['call'](this), this['skin'] = _0x3b1633, this['labels'] = _0x3d3b34;
            }
            _0x9a35ce(_0x6e56bd, 'laya.ui.UI' + 'Group', _0x1907d0);
            var _0x104d96 = _0x6e56bd['prototype'];
            return _0x290223['imps'](_0x104d96, { 'laya.ui.IItem': !0x0 }), _0x104d96['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x104d96['destroy'] = function (_0x417052) {
                void 0x0 === _0x417052 && (_0x417052 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x417052), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
            }, _0x104d96['addItem'] = function (_0x42e8d1, _0x1d7346) {
                void 0x0 === _0x1d7346 && (_0x1d7346 = !0x0);
                var _0x8cbc46 = _0x42e8d1, _0x42625d = this['_items']['length'];
                if (_0x8cbc46['name'] = 'item' + _0x42625d, this['addChild'](_0x8cbc46), this['initItems'](), _0x1d7346 && _0x42625d > 0x0) {
                    var _0x5970fe = this['_items'][_0x42625d - 0x1];
                    'horizontal' == this['_direction'] ? _0x8cbc46['x'] = _0x5970fe['_x'] + _0x5970fe['width'] + this['_space'] : _0x8cbc46['y'] = _0x5970fe['_y'] + _0x5970fe['height'] + this['_space'];
                } else
                    _0x1d7346 && (_0x8cbc46['x'] = 0x0, _0x8cbc46['y'] = 0x0);
                return _0x42625d;
            }, _0x104d96['delItem'] = function (_0x5c5944, _0x31afc5) {
                void 0x0 === _0x31afc5 && (_0x31afc5 = !0x0);
                var _0x88f7fa = this['_items']['indexOf'](_0x5c5944);
                if (-0x1 != _0x88f7fa) {
                    var _0x3554de = _0x5c5944;
                    this['removeChil' + 'd'](_0x3554de);
                    for (var _0x1e489e = _0x88f7fa + 0x1, _0x3f078d = this['_items']['length']; _0x1e489e < _0x3f078d; _0x1e489e++) {
                        var _0x20d40d = this['_items'][_0x1e489e];
                        _0x20d40d['name'] = 'item' + (_0x1e489e - 0x1), _0x31afc5 && ('horizontal' == this['_direction'] ? _0x20d40d['x'] -= _0x3554de['width'] + this['_space'] : _0x20d40d['y'] -= _0x3554de['height'] + this['_space']);
                    }
                    if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1) {
                        var _0x112beb;
                        _0x112beb = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x112beb;
                    }
                }
            }, _0x104d96['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x104d96['initItems'] = function () {
                this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
                for (var _0x4902b3 = 0x0; _0x4902b3 < 0x2710; _0x4902b3++) {
                    var _0x56daac = this['getChildBy' + 'Name']('item' + _0x4902b3);
                    if (null == _0x56daac)
                        break;
                    this['_items']['push'](_0x56daac), _0x56daac['selected'] = _0x4902b3 === this['_selectedI' + 'ndex'], _0x56daac['clickHandl' + 'er'] = _0x3169bc['create'](this, this['itemClick'], [_0x4902b3], !0x1);
                }
            }, _0x104d96['itemClick'] = function (_0x49d353) {
                this['selectedIn' + 'dex'] = _0x49d353;
            }, _0x104d96['setSelect'] = function (_0x242885, _0x3f9e0b) {
                this['_items'] && _0x242885 > -0x1 && _0x242885 < this['_items']['length'] && (this['_items'][_0x242885]['selected'] = _0x3f9e0b);
            }, _0x104d96['_skinLoade' + 'd'] = function () {
                this['_setLabelC' + 'hanged'](), this['event']('loaded');
            }, _0x104d96['createItem'] = function (_0x23a691, _0xef085f) {
                return null;
            }, _0x104d96['changeLabe' + 'ls'] = function () {
                if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                    for (var _0x268676 = 0x0, _0x457b75 = 0x0, _0x24fb31 = this['_items']['length']; _0x457b75 < _0x24fb31; _0x457b75++) {
                        var _0x3d0200 = this['_items'][_0x457b75];
                        this['_skin'] && (_0x3d0200['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x3d0200['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x3d0200['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x3d0200['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x3d0200['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x3d0200['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x3d0200['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x3d0200['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x3d0200['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x3d0200['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x3d0200['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x3d0200['y'] = 0x0, _0x3d0200['x'] = _0x268676, _0x268676 += _0x3d0200['width'] + this['_space']) : (_0x3d0200['x'] = 0x0, _0x3d0200['y'] = _0x268676, _0x268676 += _0x3d0200['height'] + this['_space']);
                    }
                this['_sizeChang' + 'ed']();
            }, _0x104d96['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
            }, _0x104d96['_setLabelC' + 'hanged'] = function () {
                this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
            }, _0x1df89a(0x0, _0x104d96, 'labelStrok' + 'eColor', function () {
                return this['_labelStro' + 'keColor'];
            }, function (_0x44e731) {
                this['_labelStro' + 'keColor'] != _0x44e731 && (this['_labelStro' + 'keColor'] = _0x44e731, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'skin', function () {
                return this['_skin'];
            }, function (_0x18523c) {
                this['_skin'] != _0x18523c && (this['_skin'] = _0x18523c, this['_skin'] && !_0x5a5cdd['getRes'](this['_skin']) ? _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0x104d96, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x421b75) {
                this['_selectedI' + 'ndex'] != _0x421b75 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x421b75, this['setSelect'](_0x421b75, !0x0), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x1df89a(0x0, _0x104d96, 'labels', function () {
                return this['_labels'];
            }, function (_0x2a776a) {
                if (this['_labels'] != _0x2a776a) {
                    if (this['_labels'] = _0x2a776a, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                        for (var _0xf9373e = this['_labels']['split'](','), _0x924838 = 0x0, _0x539fdb = _0xf9373e['length']; _0x924838 < _0x539fdb; _0x924838++) {
                            var _0x28b9c0 = this['createItem'](this['_skin'], _0xf9373e[_0x924838]);
                            _0x28b9c0['name'] = 'item' + _0x924838, this['addChild'](_0x28b9c0);
                        }
                    this['initItems']();
                }
            }), _0x1df89a(0x0, _0x104d96, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'];
            }, function (_0x526248) {
                this['_strokeCol' + 'ors'] != _0x526248 && (this['_strokeCol' + 'ors'] = _0x526248, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs'];
            }, function (_0x4a92e9) {
                this['_labelColo' + 'rs'] != _0x4a92e9 && (this['_labelColo' + 'rs'] = _0x4a92e9, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelStrok' + 'e', function () {
                return this['_labelStro' + 'ke'];
            }, function (_0x1692d3) {
                this['_labelStro' + 'ke'] != _0x1692d3 && (this['_labelStro' + 'ke'] = _0x1692d3, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelSize', function () {
                return this['_labelSize'];
            }, function (_0xa5ff3) {
                this['_labelSize'] != _0xa5ff3 && (this['_labelSize'] = _0xa5ff3, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x4652dd) {
                this['_stateNum'] != _0x4652dd && (this['_stateNum'] = _0x4652dd, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelBold', function () {
                return this['_labelBold'];
            }, function (_0x1c35a4) {
                this['_labelBold'] != _0x1c35a4 && (this['_labelBold'] = _0x1c35a4, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelFont', function () {
                return this['_labelFont'];
            }, function (_0x4356e3) {
                this['_labelFont'] != _0x4356e3 && (this['_labelFont'] = _0x4356e3, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'labelPaddi' + 'ng', function () {
                return this['_labelPadd' + 'ing'];
            }, function (_0x57139e) {
                this['_labelPadd' + 'ing'] != _0x57139e && (this['_labelPadd' + 'ing'] = _0x57139e, this['_setLabelC' + 'hanged']());
            }), _0x1df89a(0x0, _0x104d96, 'direction', function () {
                return this['_direction'];
            }, function (_0x4cb0d4) {
                this['_direction'] = _0x4cb0d4, this['_setLabelC' + 'hanged']();
            }), _0x1df89a(0x0, _0x104d96, 'space', function () {
                return this['_space'];
            }, function (_0x41a46f) {
                this['_space'] = _0x41a46f, this['_setLabelC' + 'hanged']();
            }), _0x1df89a(0x0, _0x104d96, 'items', function () {
                return this['_items'];
            }), _0x1df89a(0x0, _0x104d96, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x4d5f8c) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x4d5f8c);
            }), _0x1df89a(0x0, _0x104d96, 'dataSource', _0x1907d0['prototype']['_$get_data' + 'Source'], function (_0x3a36b2) {
                this['_dataSourc' + 'e'] = _0x3a36b2, 'number' == typeof _0x3a36b2 && Math['floor'](_0x3a36b2) == _0x3a36b2 || 'string' == typeof _0x3a36b2 ? this['selectedIn' + 'dex'] = parseInt(_0x3a36b2) : _0x3a36b2 instanceof Array ? this['labels'] = _0x3a36b2['join'](',') : _0x290223['superSet'](_0x213a7b, this, 'dataSource', _0x3a36b2);
            }), _0x6e56bd;
        }(_0x213a7b), _0x67044c = function (_0x3d1e04) {
            function _0x470535(_0x25cb8f, _0x4d02e4) {
                void 0x0 === _0x4d02e4 && (_0x4d02e4 = ''), _0x470535['__super']['call'](this, _0x25cb8f, _0x4d02e4);
            }
            _0x9a35ce(_0x470535, 'laya.ui.Ch' + 'eckBox', _0x3d1e04);
            var _0x1d90ad = _0x470535['prototype'];
            return _0x1d90ad['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
            }, _0x1d90ad['initialize'] = function () {
                _0x3d1e04['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
            }, _0x1df89a(0x0, _0x1d90ad, 'dataSource', _0x3d1e04['prototype']['_$get_data' + 'Source'], function (_0x98c236) {
                this['_dataSourc' + 'e'] = _0x98c236, 'boolean' == typeof _0x98c236 ? this['selected'] = _0x98c236 : 'string' == typeof _0x98c236 ? this['selected'] = 'true' === _0x98c236 : _0x290223['superSet'](_0x1851a2, this, 'dataSource', _0x98c236);
            }), _0x470535;
        }(_0x1851a2), _0x144345 = function (_0x2eed55) {
            function _0xf650d6() {
                this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null, this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, _0xf650d6['__super']['call'](this), this['width'] = this['height'] = 0xc8;
            }
            _0x9a35ce(_0xf650d6, 'laya.ui.Tr' + 'ee', _0x2eed55);
            var _0x45afc3 = _0xf650d6['prototype'];
            return _0x290223['imps'](_0x45afc3, { 'laya.ui.IRender': !0x0 }), _0x45afc3['destroy'] = function (_0x205445) {
                void 0x0 === _0x205445 && (_0x205445 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x205445), this['_list'] && this['_list']['destroy'](_0x205445), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
            }, _0x45afc3['createChil' + 'dren'] = function () {
                this['addChild'](this['_list'] = new _0x4b8986()), this['_list']['renderHand' + 'ler'] = _0x3169bc['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on']('change', this, this['onListChan' + 'ge']);
            }, _0x45afc3['onListChan' + 'ge'] = function (_0x1a10a4) {
                this['event']('change');
            }, _0x45afc3['getArray'] = function () {
                var _0x576831, _0x57ac01 = [];
                for (var _0x473acd in this['_source'])
                    _0x576831 = this['_source'][_0x473acd], this['getParentO' + 'penStatus'](_0x576831) && (_0x576831['x'] = this['_spaceLeft'] * this['getDepth'](_0x576831), _0x57ac01['push'](_0x576831));
                return _0x57ac01;
            }, _0x45afc3['getDepth'] = function (_0x92e61f, _0x4ef6cf) {
                return void 0x0 === _0x4ef6cf && (_0x4ef6cf = 0x0), null == _0x92e61f['nodeParent'] ? _0x4ef6cf : this['getDepth'](_0x92e61f['nodeParent'], _0x4ef6cf + 0x1);
            }, _0x45afc3['getParentO' + 'penStatus'] = function (_0x1fdf29) {
                var _0x402880 = _0x1fdf29['nodeParent'];
                return null == _0x402880 || !!_0x402880['isOpen'] && (null == _0x402880['nodeParent'] || this['getParentO' + 'penStatus'](_0x402880));
            }, _0x45afc3['renderItem'] = function (_0x3114c2, _0x402131) {
                var _0x42f0a1 = _0x3114c2['dataSource'];
                if (_0x42f0a1) {
                    _0x3114c2['left'] = _0x42f0a1['x'];
                    var _0x282d49 = _0x3114c2['getChildBy' + 'Name']('arrow');
                    _0x282d49 && (_0x42f0a1['hasChild'] ? (_0x282d49['visible'] = !0x0, _0x282d49['index'] = _0x42f0a1['isOpen'] ? 0x1 : 0x0, _0x282d49['tag'] = _0x402131, _0x282d49['off']('click', this, this['onArrowCli' + 'ck']), _0x282d49['on']('click', this, this['onArrowCli' + 'ck'])) : _0x282d49['visible'] = !0x1);
                    var _0x22cada = _0x3114c2['getChildBy' + 'Name']('folder');
                    _0x22cada && (0x2 == _0x22cada['clipY'] ? _0x22cada['index'] = _0x42f0a1['isDirector' + 'y'] ? 0x0 : 0x1 : _0x22cada['index'] = _0x42f0a1['isDirector' + 'y'] ? _0x42f0a1['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                        _0x3114c2,
                        _0x402131
                    ]);
                }
            }, _0x45afc3['onArrowCli' + 'ck'] = function (_0x1f7f4f) {
                var _0x38988e = _0x1f7f4f['currentTar' + 'get']['tag'];
                this['_list']['array'][_0x38988e]['isOpen'] = !this['_list']['array'][_0x38988e]['isOpen'], this['event']('open'), this['_list']['array'] = this['getArray']();
            }, _0x45afc3['setItemSta' + 'te'] = function (_0x75822d, _0x50a579) {
                this['_list']['array'][_0x75822d] && (this['_list']['array'][_0x75822d]['isOpen'] = _0x50a579, this['_list']['array'] = this['getArray']());
            }, _0x45afc3['fresh'] = function () {
                this['_list']['array'] = this['getArray'](), this['repaint']();
            }, _0x45afc3['parseXml'] = function (_0x2884bd, _0x1e439a, _0x2194e3, _0x1393a6) {
                var _0x5e3c46, _0x3c73d8 = _0x2884bd['childNodes'], _0x35aee7 = _0x3c73d8['length'];
                if (!_0x1393a6) {
                    _0x5e3c46 = {};
                    var _0x44c102, _0x297a53 = _0x2884bd['attributes'];
                    for (var _0x4e9d9f in _0x297a53) {
                        var _0x2ec031 = (_0x44c102 = _0x297a53[_0x4e9d9f])['nodeName'], _0x11e2cb = _0x44c102['nodeValue'];
                        _0x5e3c46[_0x2ec031] = 'true' == _0x11e2cb || 'false' != _0x11e2cb && _0x11e2cb;
                    }
                    _0x5e3c46['nodeParent'] = _0x2194e3, _0x35aee7 > 0x0 && (_0x5e3c46['isDirector' + 'y'] = !0x0), _0x5e3c46['hasChild'] = _0x35aee7 > 0x0, _0x1e439a['push'](_0x5e3c46);
                }
                for (var _0x2dc9ee = 0x0; _0x2dc9ee < _0x35aee7; _0x2dc9ee++) {
                    var _0x35c027 = _0x3c73d8[_0x2dc9ee];
                    this['parseXml'](_0x35c027, _0x1e439a, _0x5e3c46, !0x1);
                }
            }, _0x45afc3['parseOpenS' + 'tatus'] = function (_0x4b4986, _0x21951a) {
                for (var _0x362b14 = 0x0, _0x2c6a53 = _0x21951a['length']; _0x362b14 < _0x2c6a53; _0x362b14++) {
                    var _0x146b90 = _0x21951a[_0x362b14];
                    if (_0x146b90['isDirector' + 'y'])
                        for (var _0x1ad444 = 0x0, _0x223dc6 = _0x4b4986['length']; _0x1ad444 < _0x223dc6; _0x1ad444++) {
                            var _0x4eed47 = _0x4b4986[_0x1ad444];
                            if (_0x4eed47['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x4eed47, _0x146b90) && _0x146b90['label'] == _0x4eed47['label']) {
                                _0x146b90['isOpen'] = _0x4eed47['isOpen'];
                                break;
                            }
                        }
                }
            }, _0x45afc3['isSamePare' + 'nt'] = function (_0x4c6b3c, _0xdfdf1d) {
                return null == _0x4c6b3c['nodeParent'] && null == _0xdfdf1d['nodeParent'] || null != _0x4c6b3c['nodeParent'] && null != _0xdfdf1d['nodeParent'] && (_0x4c6b3c['nodeParent']['label'] == _0xdfdf1d['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x4c6b3c['nodeParent'], _0xdfdf1d['nodeParent']));
            }, _0x45afc3['filter'] = function (_0x38a99e) {
                if (Boolean(_0x38a99e)) {
                    var _0x275483 = [];
                    this['getFilterS' + 'ource'](this['_source'], _0x275483, _0x38a99e), this['_list']['array'] = _0x275483;
                } else
                    this['_list']['array'] = this['getArray']();
            }, _0x45afc3['getFilterS' + 'ource'] = function (_0x27e39e, _0xc44d1d, _0xbf4ca4) {
                var _0x56856c;
                for (var _0x269dab in (_0xbf4ca4 = _0xbf4ca4['toLocaleLo' + 'werCase'](), _0x27e39e))
                    !(_0x56856c = _0x27e39e[_0x269dab])['isDirector' + 'y'] && String(_0x56856c['label'])['toLowerCas' + 'e']()['indexOf'](_0xbf4ca4) > -0x1 && (_0x56856c['x'] = 0x0, _0xc44d1d['push'](_0x56856c)), _0x56856c['child'] && _0x56856c['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x56856c['child'], _0xc44d1d, _0xbf4ca4);
            }, _0x1df89a(0x0, _0x45afc3, 'spaceBotto' + 'm', function () {
                return this['_list']['spaceY'];
            }, function (_0x1fce6d) {
                this['_list']['spaceY'] = _0x1fce6d;
            }), _0x1df89a(0x0, _0x45afc3, 'keepStatus', function () {
                return this['_keepStatu' + 's'];
            }, function (_0x28cd0c) {
                this['_keepStatu' + 's'] = _0x28cd0c;
            }), _0x1df89a(0x0, _0x45afc3, 'itemRender', function () {
                return this['_list']['itemRender'];
            }, function (_0xe70b72) {
                this['_list']['itemRender'] = _0xe70b72;
            }), _0x1df89a(0x0, _0x45afc3, 'array', function () {
                return this['_list']['array'];
            }, function (_0x225964) {
                this['_keepStatu' + 's'] && this['_list']['array'] && _0x225964 && this['parseOpenS' + 'tatus'](this['_list']['array'], _0x225964), this['_source'] = _0x225964, this['_list']['array'] = this['getArray']();
            }), _0x1df89a(0x0, _0x45afc3, 'mouseHandl' + 'er', function () {
                return this['_list']['mouseHandl' + 'er'];
            }, function (_0x18dfea) {
                this['_list']['mouseHandl' + 'er'] = _0x18dfea;
            }), _0x1df89a(0x0, _0x45afc3, 'dataSource', _0x2eed55['prototype']['_$get_data' + 'Source'], function (_0x16b48c) {
                this['_dataSourc' + 'e'] = _0x16b48c, _0x290223['superSet'](_0x213a7b, this, 'dataSource', _0x16b48c);
            }), _0x1df89a(0x0, _0x45afc3, 'source', function () {
                return this['_source'];
            }), _0x1df89a(0x0, _0x45afc3, 'scrollBar', function () {
                return this['_list']['scrollBar'];
            }), _0x1df89a(0x0, _0x45afc3, 'list', function () {
                return this['_list'];
            }), _0x1df89a(0x0, _0x45afc3, 'scrollBarS' + 'kin', function () {
                return this['_list']['vScrollBar' + 'Skin'];
            }, function (_0x52652e) {
                this['_list']['vScrollBar' + 'Skin'] = _0x52652e;
            }), _0x1df89a(0x0, _0x45afc3, 'renderHand' + 'ler', function () {
                return this['_renderHan' + 'dler'];
            }, function (_0x100189) {
                this['_renderHan' + 'dler'] = _0x100189;
            }), _0x1df89a(0x0, _0x45afc3, 'selectedIn' + 'dex', function () {
                return this['_list']['selectedIn' + 'dex'];
            }, function (_0x2e4dfe) {
                this['_list']['selectedIn' + 'dex'] = _0x2e4dfe;
            }), _0x1df89a(0x0, _0x45afc3, 'spaceLeft', function () {
                return this['_spaceLeft'];
            }, function (_0x2ac5e6) {
                this['_spaceLeft'] = _0x2ac5e6;
            }), _0x1df89a(0x0, _0x45afc3, 'selectedIt' + 'em', function () {
                return this['_list']['selectedIt' + 'em'];
            }, function (_0x301336) {
                this['_list']['selectedIt' + 'em'] = _0x301336;
            }), _0x1df89a(0x0, _0x45afc3, 'width', _0x2eed55['prototype']['_$get_widt' + 'h'], function (_0x26b043) {
                _0x290223['superSet'](_0x213a7b, this, 'width', _0x26b043), this['_list']['width'] = _0x26b043;
            }), _0x1df89a(0x0, _0x45afc3, 'height', _0x2eed55['prototype']['_$get_heig' + 'ht'], function (_0x5a36ce) {
                _0x290223['superSet'](_0x213a7b, this, 'height', _0x5a36ce), this['_list']['height'] = _0x5a36ce;
            }), _0x1df89a(0x0, _0x45afc3, 'xml', null, function (_0x8dab47) {
                var _0x2900e3 = [];
                this['parseXml'](_0x8dab47['childNodes'][0x0], _0x2900e3, null, !0x0), this['array'] = _0x2900e3;
            }), _0x1df89a(0x0, _0x45afc3, 'selectedPa' + 'th', function () {
                return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
            }), _0xf650d6;
        }(_0x213a7b), _0x4a8d75 = function (_0x3db3be) {
            function _0x5ba545() {
                this['_content'] = null, this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_scrollCha' + 'nged'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, _0x5ba545['__super']['call'](this), this['width'] = this['height'] = 0x64;
            }
            _0x9a35ce(_0x5ba545, 'laya.ui.Pa' + 'nel', _0x3db3be);
            var _0x5a9fb1 = _0x5ba545['prototype'];
            return _0x5a9fb1['destroy'] = function (_0x1c8726) {
                void 0x0 === _0x1c8726 && (_0x1c8726 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x1c8726), this['_content'] && this['_content']['destroy'](_0x1c8726), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0x1c8726), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0x1c8726), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
            }, _0x5a9fb1['destroyChi' + 'ldren'] = function () {
                this['_content']['destroyChi' + 'ldren']();
            }, _0x5a9fb1['createChil' + 'dren'] = function () {
                laya['display']['Node']['prototype']['addChild']['call'](this, this['_content'] = new _0x213a7b());
            }, _0x5a9fb1['addChild'] = function (_0x1a63ff) {
                return _0x1a63ff['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x1a63ff);
            }, _0x5a9fb1['onResize'] = function () {
                this['_setScroll' + 'Changed']();
            }, _0x5a9fb1['addChildAt'] = function (_0x1d9e15, _0x5ee0ad) {
                return _0x1d9e15['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x1d9e15, _0x5ee0ad);
            }, _0x5a9fb1['removeChil' + 'd'] = function (_0x519d26) {
                return _0x519d26['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x519d26);
            }, _0x5a9fb1['removeChil' + 'dAt'] = function (_0xbdb86a) {
                return this['getChildAt'](_0xbdb86a)['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0xbdb86a);
            }, _0x5a9fb1['removeChil' + 'dren'] = function (_0xc970c7, _0x2f585f) {
                return void 0x0 === _0xc970c7 && (_0xc970c7 = 0x0), void 0x0 === _0x2f585f && (_0x2f585f = 0x7fffffff), this['_content']['removeChil' + 'dren'](_0xc970c7, _0x2f585f), this['_setScroll' + 'Changed'](), this;
            }, _0x5a9fb1['getChildAt'] = function (_0x4467b1) {
                return this['_content']['getChildAt'](_0x4467b1);
            }, _0x5a9fb1['getChildBy' + 'Name'] = function (_0x5b2bf7) {
                return this['_content']['getChildBy' + 'Name'](_0x5b2bf7);
            }, _0x5a9fb1['getChildIn' + 'dex'] = function (_0x2ffe36) {
                return this['_content']['getChildIn' + 'dex'](_0x2ffe36);
            }, _0x5a9fb1['changeScro' + 'll'] = function () {
                this['_scrollCha' + 'nged'] = !0x1;
                var _0x49bd64 = this['contentWid' + 'th'] || 0x1, _0x4a8488 = this['contentHei' + 'ght'] || 0x1, _0x348678 = this['_vScrollBa' + 'r'], _0x4eda81 = this['_hScrollBa' + 'r'], _0x49cd90 = _0x348678 && _0x4a8488 > this['_height'], _0x20dac2 = _0x4eda81 && _0x49bd64 > this['_width'], _0x45c9e7 = _0x49cd90 ? this['_width'] - _0x348678['width'] : this['_width'], _0x222add = _0x20dac2 ? this['_height'] - _0x4eda81['height'] : this['_height'];
                _0x348678 && (_0x348678['x'] = this['_width'] - _0x348678['width'], _0x348678['y'] = 0x0, _0x348678['height'] = this['_height'] - (_0x20dac2 ? _0x4eda81['height'] : 0x0), _0x348678['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0x348678['thumbPerce' + 'nt'] = _0x222add / _0x4a8488, _0x348678['setScroll'](0x0, _0x4a8488 - _0x222add, _0x348678['value'])), _0x4eda81 && (_0x4eda81['x'] = 0x0, _0x4eda81['y'] = this['_height'] - _0x4eda81['height'], _0x4eda81['width'] = this['_width'] - (_0x49cd90 ? _0x348678['width'] : 0x0), _0x4eda81['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x4eda81['thumbPerce' + 'nt'] = _0x45c9e7 / _0x49bd64, _0x4eda81['setScroll'](0x0, _0x49bd64 - _0x45c9e7, _0x4eda81['value']));
            }, _0x5a9fb1['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['_width'], this['_height']);
            }, _0x5a9fb1['setContent' + 'Size'] = function (_0x3b6711, _0x3b89c5) {
                var _0x4e34f3 = this['_content'];
                _0x4e34f3['width'] = _0x3b6711, _0x4e34f3['height'] = _0x3b89c5, _0x4e34f3['_style']['scrollRect'] || (_0x4e34f3['scrollRect'] = _0x445590['create']()), _0x4e34f3['_style']['scrollRect']['setTo'](0x0, 0x0, _0x3b6711, _0x3b89c5), _0x4e34f3['scrollRect'] = _0x4e34f3['scrollRect'];
            }, _0x5a9fb1['onScrollBa' + 'rChange'] = function (_0x3005da) {
                var _0x1eea48 = this['_content']['_style']['scrollRect'];
                if (_0x1eea48) {
                    var _0x489927 = Math['round'](_0x3005da['value']);
                    _0x3005da['isVertical'] ? _0x1eea48['y'] = _0x489927 : _0x1eea48['x'] = _0x489927, this['_content']['scrollRect'] = _0x1eea48;
                }
            }, _0x5a9fb1['scrollTo'] = function (_0xa8a87e, _0x2716d7) {
                void 0x0 === _0xa8a87e && (_0xa8a87e = 0x0), void 0x0 === _0x2716d7 && (_0x2716d7 = 0x0), this['vScrollBar'] && (this['vScrollBar']['value'] = _0x2716d7), this['hScrollBar'] && (this['hScrollBar']['value'] = _0xa8a87e);
            }, _0x5a9fb1['refresh'] = function () {
                this['changeScro' + 'll']();
            }, _0x5a9fb1['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x290223['superGet'](_0x213a7b, this, 'cacheAs')), _0x290223['superSet'](_0x213a7b, this, 'cacheAs', 'none'), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x5a9fb1['onScrollEn' + 'd'] = function () {
                _0x290223['superSet'](_0x213a7b, this, 'cacheAs', this['_usedCache']);
            }, _0x5a9fb1['_setScroll' + 'Changed'] = function () {
                this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
            }, _0x1df89a(0x0, _0x5a9fb1, 'numChildre' + 'n', function () {
                return this['_content']['numChildre' + 'n'];
            }), _0x1df89a(0x0, _0x5a9fb1, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x5256a5) {
                null == this['_hScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_hScrollBa' + 'r'] = new _0x19b13a()), this['_hScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x5256a5;
            }), _0x1df89a(0x0, _0x5a9fb1, 'contentWid' + 'th', function () {
                for (var _0x4821c1 = 0x0, _0x38aef4 = this['_content']['numChildre' + 'n'] - 0x1; _0x38aef4 > -0x1; _0x38aef4--) {
                    var _0x548d06 = this['_content']['getChildAt'](_0x38aef4);
                    _0x4821c1 = Math['max'](_0x548d06['_x'] + _0x548d06['width'] * _0x548d06['scaleX'] - _0x548d06['pivotX'], _0x4821c1);
                }
                return _0x4821c1;
            }), _0x1df89a(0x0, _0x5a9fb1, 'contentHei' + 'ght', function () {
                for (var _0x25026e = 0x0, _0xf7a24b = this['_content']['numChildre' + 'n'] - 0x1; _0xf7a24b > -0x1; _0xf7a24b--) {
                    var _0x16ebbe = this['_content']['getChildAt'](_0xf7a24b);
                    _0x25026e = Math['max'](_0x16ebbe['_y'] + _0x16ebbe['height'] * _0x16ebbe['scaleY'] - _0x16ebbe['pivotY'], _0x25026e);
                }
                return _0x25026e;
            }), _0x1df89a(0x0, _0x5a9fb1, 'width', _0x3db3be['prototype']['_$get_widt' + 'h'], function (_0x5513e3) {
                _0x290223['superSet'](_0x213a7b, this, 'width', _0x5513e3), this['_setScroll' + 'Changed']();
            }), _0x1df89a(0x0, _0x5a9fb1, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x1df89a(0x0, _0x5a9fb1, 'content', function () {
                return this['_content'];
            }), _0x1df89a(0x0, _0x5a9fb1, 'height', _0x3db3be['prototype']['_$get_heig' + 'ht'], function (_0x339e1a) {
                _0x290223['superSet'](_0x213a7b, this, 'height', _0x339e1a), this['_setScroll' + 'Changed']();
            }), _0x1df89a(0x0, _0x5a9fb1, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x413b9c) {
                null == this['_vScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_vScrollBa' + 'r'] = new _0x55acad()), this['_vScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x413b9c;
            }), _0x1df89a(0x0, _0x5a9fb1, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x1df89a(0x0, _0x5a9fb1, 'cacheAs', _0x3db3be['prototype']['_$get_cach' + 'eAs'], function (_0x3a5bc9) {
                _0x290223['superSet'](_0x213a7b, this, 'cacheAs', _0x3a5bc9), this['_usedCache'] = null, 'none' !== _0x3a5bc9 ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x1df89a(0x0, _0x5a9fb1, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x36821b) {
                this['_elasticEn' + 'abled'] = _0x36821b, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x36821b ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x36821b ? 0xc8 : 0x0);
            }), _0x5ba545;
        }(_0x213a7b), _0x4b8986 = function (_0x1ea42a) {
            function _0x5e194e() {
                this['selectHand' + 'ler'] = null, this['renderHand' + 'ler'] = null, this['mouseHandl' + 'er'] = null, this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_array'] = null, this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_isMoved'] = !0x1, this['cacheConte' + 'nt'] = !0x1, this['_createdLi' + 'ne'] = 0x0, this['_cellChang' + 'ed'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0, _0x5e194e['__super']['call'](this), this['_cells'] = [], this['_offset'] = new _0x3247b1();
            }
            _0x9a35ce(_0x5e194e, 'laya.ui.Li' + 'st', _0x1ea42a);
            var _0xe060f5 = _0x5e194e['prototype'];
            return _0x290223['imps'](_0xe060f5, {
                'laya.ui.IRender': !0x0,
                'laya.ui.IItem': !0x0
            }), _0xe060f5['destroy'] = function (_0x2972cd) {
                void 0x0 === _0x2972cd && (_0x2972cd = !0x0), this['_content'] && this['_content']['destroy'](_0x2972cd), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x2972cd), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x2972cd), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
            }, _0xe060f5['createChil' + 'dren'] = function () {
                this['addChild'](this['_content'] = new _0x213a7b());
            }, _0xe060f5['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x290223['superGet'](_0x213a7b, this, 'cacheAs')), _0x290223['superSet'](_0x213a7b, this, 'cacheAs', 'none'), this['_scrollBar']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0xe060f5['onScrollEn' + 'd'] = function () {
                _0x290223['superSet'](_0x213a7b, this, 'cacheAs', this['_usedCache']);
            }, _0xe060f5['_removePre' + 'ScrollBar'] = function () {
                var _0x4bf437 = this['removeChil' + 'dByName']('scrollBar');
                _0x4bf437 && _0x4bf437['destroy'](!0x0);
            }, _0xe060f5['changeCell' + 's'] = function () {
                if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                    this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                    var _0x2ce5bc = this['_getOneCel' + 'l'](), _0x41d408 = _0x2ce5bc['width'] + this['_spaceX'] || 0x1, _0x479c10 = _0x2ce5bc['height'] + this['_spaceY'] || 0x1;
                    this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0x41d408) : Math['ceil'](this['_width'] / _0x41d408)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x479c10) : Math['round'](this['_height'] / _0x479c10));
                    var _0x52d798 = this['_width'] ? this['_width'] : _0x41d408 * this['repeatX'] - this['_spaceX'], _0xee50d1 = this['_height'] ? this['_height'] : _0x479c10 * this['repeatY'] - this['_spaceY'];
                    this['_cellSize'] = this['_isVertica' + 'l'] ? _0x479c10 : _0x41d408, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x479c10 * Math['max'](this['_repeatY2'], this['_repeatY']) - _0xee50d1 - this['_spaceY'] : _0x41d408 * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x52d798 - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0xee50d1 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x52d798), this['setContent' + 'Size'](_0x52d798, _0xee50d1);
                    var _0x55f61d = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x151413 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                    this['_createIte' + 'ms'](0x0, _0x55f61d, _0x151413), this['_createdLi' + 'ne'] = _0x151413, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
                }
            }, _0xe060f5['_getOneCel' + 'l'] = function () {
                if (0x0 === this['_cells']['length']) {
                    var _0x55c1b2 = this['createItem']();
                    if (this['_offset']['setTo'](_0x55c1b2['_x'], _0x55c1b2['_y']), this['cacheConte' + 'nt'])
                        return _0x55c1b2;
                    this['_cells']['push'](_0x55c1b2);
                }
                return this['_cells'][0x0];
            }, _0xe060f5['_createIte' + 'ms'] = function (_0x416b6d, _0x2d8581, _0x12a99c) {
                var _0x5873ab = this['_content'], _0x1864c0 = this['_getOneCel' + 'l'](), _0x12029f = _0x1864c0['width'] + this['_spaceX'], _0x896838 = _0x1864c0['height'] + this['_spaceY'];
                if (this['cacheConte' + 'nt']) {
                    var _0x494264 = new _0x213a7b();
                    _0x494264['cacheAs'] = 'normal', _0x494264['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x416b6d) * _0x12029f, (this['_isVertica' + 'l'] ? _0x416b6d : 0x0) * _0x896838), this['_content']['addChild'](_0x494264), _0x5873ab = _0x494264;
                } else {
                    for (var _0x4fc337 = [], _0x4286f5 = this['_cells']['length'] - 0x1; _0x4286f5 > -0x1; _0x4286f5--) {
                        var _0x250f3f = this['_cells'][_0x4286f5];
                        _0x250f3f['removeSelf'](), _0x4fc337['push'](_0x250f3f);
                    }
                    this['_cells']['length'] = 0x0;
                }
                for (var _0x8c9713 = _0x416b6d; _0x8c9713 < _0x12a99c; _0x8c9713++)
                    for (var _0x4be3bf = 0x0; _0x4be3bf < _0x2d8581; _0x4be3bf++)
                        (_0x1864c0 = _0x4fc337 && _0x4fc337['length'] ? _0x4fc337['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0x4be3bf : _0x8c9713) * _0x12029f - _0x5873ab['_x'], _0x1864c0['y'] = (this['_isVertica' + 'l'] ? _0x8c9713 : _0x4be3bf) * _0x896838 - _0x5873ab['_y'], _0x1864c0['name'] = 'item' + (_0x8c9713 * _0x2d8581 + _0x4be3bf), _0x5873ab['addChild'](_0x1864c0), this['addCell'](_0x1864c0);
            }, _0xe060f5['createItem'] = function () {
                var _0x1fe3db = [];
                if ('function' == typeof this['_itemRende' + 'r'])
                    var _0x1267c2 = new this['_itemRende' + 'r']();
                else
                    _0x1267c2 = _0xdfea3c['createComp'](this['_itemRende' + 'r'], null, null, _0x1fe3db);
                if (0x0 == _0x1fe3db['length'] && _0x1267c2['_watchMap']) {
                    var _0x1b8db3 = _0x1267c2['_watchMap'];
                    for (var _0x184252 in _0x1b8db3)
                        for (var _0x363508 = _0x1b8db3[_0x184252], _0x128b35 = 0x0; _0x128b35 < _0x363508['length']; _0x128b35++) {
                            var _0x12a23a = _0x363508[_0x128b35];
                            _0x1fe3db['push'](_0x12a23a['comp'], _0x12a23a['prop'], _0x12a23a['value']);
                        }
                }
                return _0x1fe3db['length'] && (_0x1267c2['_$bindData'] = _0x1fe3db), _0x1267c2;
            }, _0xe060f5['addCell'] = function (_0x243ce8) {
                _0x243ce8['on']('click', this, this['onCellMous' + 'e']), _0x243ce8['on']('rightclick', this, this['onCellMous' + 'e']), _0x243ce8['on']('mouseover', this, this['onCellMous' + 'e']), _0x243ce8['on']('mouseout', this, this['onCellMous' + 'e']), _0x243ce8['on']('mousedown', this, this['onCellMous' + 'e']), _0x243ce8['on']('mouseup', this, this['onCellMous' + 'e']), this['_cells']['push'](_0x243ce8);
            }, _0xe060f5['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0xe060f5['initItems'] = function () {
                if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                    this['repeatX'] = 0x1;
                    var _0x234d16 = 0x0;
                    _0x234d16 = 0x0;
                    for (var _0xb06faf = 0x0; _0xb06faf < 0x2710; _0xb06faf++) {
                        var _0x51f0aa = this['getChildBy' + 'Name']('item' + _0xb06faf);
                        if (!_0x51f0aa)
                            break;
                        this['addCell'](_0x51f0aa), _0x234d16++;
                    }
                    this['repeatY'] = _0x234d16;
                }
            }, _0xe060f5['setContent' + 'Size'] = function (_0x30766c, _0x2a0f37) {
                this['_content']['width'] = _0x30766c, this['_content']['height'] = _0x2a0f37, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x445590['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x30766c, _0x2a0f37), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event']('resize');
            }, _0xe060f5['onCellMous' + 'e'] = function (_0x4787d8) {
                'mousedown' === _0x4787d8['type'] && (this['_isMoved'] = !0x1);
                var _0x4de8bf = _0x4787d8['currentTar' + 'get'], _0x18316b = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x4de8bf);
                _0x18316b < 0x0 || ('click' === _0x4787d8['type'] || 'rightclick' === _0x4787d8['type'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x18316b : this['changeCell' + 'State'](_0x4de8bf, !0x0, 0x0) : 'mouseover' !== _0x4787d8['type'] && 'mouseout' !== _0x4787d8['type'] || this['_selectedI' + 'ndex'] === _0x18316b || this['changeCell' + 'State'](_0x4de8bf, 'mouseover' === _0x4787d8['type'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                    _0x4787d8,
                    _0x18316b
                ]));
            }, _0xe060f5['changeCell' + 'State'] = function (_0x272651, _0x1bf765, _0x5a4841) {
                var _0x55405f = _0x272651['getChildBy' + 'Name']('selectBox');
                _0x55405f && (this['selectEnab' + 'le'] = !0x0, _0x55405f['visible'] = _0x1bf765, _0x55405f['index'] = _0x5a4841);
            }, _0xe060f5['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
            }, _0xe060f5['onScrollBa' + 'rChange'] = function (_0x1aaa69) {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
                var _0x3c911f = this['_scrollBar']['value'], _0x36ea4f = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x564b03 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x1aa46b = Math['floor'](_0x3c911f / this['_cellSize']);
                if (this['cacheConte' + 'nt'])
                    _0x5d08f5 = _0x564b03 + 0x1, this['_createdLi' + 'ne'] - _0x1aa46b < _0x5d08f5 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x36ea4f, this['_createdLi' + 'ne'] + _0x5d08f5), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x36ea4f, 0x0), this['_createdLi' + 'ne'] += _0x5d08f5);
                else {
                    var _0x228e27 = _0x1aa46b * _0x36ea4f, _0x5d08f5 = 0x0;
                    if (_0x228e27 > this['_startInde' + 'x']) {
                        _0x5d08f5 = _0x228e27 - this['_startInde' + 'x'];
                        var _0x5c5d3e = !0x0, _0x39fe5a = this['_startInde' + 'x'] + _0x36ea4f * (_0x564b03 + 0x1);
                        this['_isMoved'] = !0x0;
                    } else
                        _0x228e27 < this['_startInde' + 'x'] && (_0x5d08f5 = this['_startInde' + 'x'] - _0x228e27, _0x5c5d3e = !0x1, _0x39fe5a = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                    for (var _0x489a24 = 0x0; _0x489a24 < _0x5d08f5; _0x489a24++) {
                        if (_0x5c5d3e) {
                            var _0x42d224 = this['_cells']['shift']();
                            this['_cells'][this['_cells']['length']] = _0x42d224;
                            var _0x2b75f1 = _0x39fe5a + _0x489a24;
                        } else
                            _0x42d224 = this['_cells']['pop'](), this['_cells']['unshift'](_0x42d224), _0x2b75f1 = _0x39fe5a - _0x489a24;
                        var _0x18c722 = Math['floor'](_0x2b75f1 / _0x36ea4f) * this['_cellSize'];
                        this['_isVertica' + 'l'] ? _0x42d224['y'] = _0x18c722 : _0x42d224['x'] = _0x18c722, this['renderItem'](_0x42d224, _0x2b75f1);
                    }
                    this['_startInde' + 'x'] = _0x228e27, this['changeSele' + 'ctStatus']();
                }
                var _0x2ac8c7 = this['_content']['_style']['scrollRect'];
                this['_isVertica' + 'l'] ? (_0x2ac8c7['y'] = _0x3c911f - this['_offset']['y'], _0x2ac8c7['x'] = -this['_offset']['x']) : (_0x2ac8c7['y'] = -this['_offset']['y'], _0x2ac8c7['x'] = _0x3c911f - this['_offset']['x']), this['_content']['scrollRect'] = _0x2ac8c7;
            }, _0xe060f5['posCell'] = function (_0x555486, _0x519907) {
                if (this['_scrollBar']) {
                    var _0x621232 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0xb33e9b = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x519907 / _0x621232) * this['_cellSize']);
                    this['_isVertica' + 'l'] ? _0x555486['_y'] = _0xb33e9b : _0x555486['x'] = _0xb33e9b;
                }
            }, _0xe060f5['changeSele' + 'ctStatus'] = function () {
                for (var _0x348862 = 0x0, _0x437bc9 = this['_cells']['length']; _0x348862 < _0x437bc9; _0x348862++)
                    this['changeCell' + 'State'](this['_cells'][_0x348862], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x348862, 0x1);
            }, _0xe060f5['renderItem' + 's'] = function (_0x125c5c, _0x5a9f98) {
                void 0x0 === _0x125c5c && (_0x125c5c = 0x0), void 0x0 === _0x5a9f98 && (_0x5a9f98 = 0x0);
                for (var _0x440d0e = _0x125c5c, _0x43af00 = _0x5a9f98 || this['_cells']['length']; _0x440d0e < _0x43af00; _0x440d0e++)
                    this['renderItem'](this['_cells'][_0x440d0e], this['_startInde' + 'x'] + _0x440d0e);
                this['changeSele' + 'ctStatus']();
            }, _0xe060f5['renderItem'] = function (_0x332f2f, _0x2fa9a7) {
                this['_array'] && _0x2fa9a7 >= 0x0 && _0x2fa9a7 < this['_array']['length'] ? (_0x332f2f['visible'] = !0x0, _0x332f2f['_$bindData'] ? (_0x332f2f['_dataSourc' + 'e'] = this['_array'][_0x2fa9a7], this['_bindData'](_0x332f2f, this['_array'][_0x2fa9a7])) : _0x332f2f['dataSource'] = this['_array'][_0x2fa9a7], this['cacheConte' + 'nt'] || this['posCell'](_0x332f2f, _0x2fa9a7), this['hasListene' + 'r']('render') && this['event']('render', [
                    _0x332f2f,
                    _0x2fa9a7
                ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                    _0x332f2f,
                    _0x2fa9a7
                ])) : (_0x332f2f['visible'] = !0x1, _0x332f2f['dataSource'] = null);
            }, _0xe060f5['_bindData'] = function (_0x2e67ce, _0x5738c7) {
                for (var _0x59f4b1 = _0x2e67ce['_$bindData'], _0x31e410 = 0x0, _0x1364e3 = _0x59f4b1['length']; _0x31e410 < _0x1364e3; _0x31e410++) {
                    var _0x1b86a5 = _0x59f4b1[_0x31e410++], _0x5e353d = _0x59f4b1[_0x31e410++], _0x47bf12 = _0x59f4b1[_0x31e410], _0x2dec0d = _0x3c7b88['getBindFun'](_0x47bf12);
                    _0x1b86a5[_0x5e353d] = _0x2dec0d['call'](this, _0x5738c7);
                }
            }, _0xe060f5['updateArra' + 'y'] = function (_0x2e7f18) {
                this['_array'] = _0x2e7f18;
                var _0x31337a = 0x0;
                if (this['_array'] && ((_0x31337a = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0x31337a), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                    var _0x1eaeda = _0x2e7f18['length'], _0x13ab95 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x23d9fa = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x47308a = Math['ceil'](_0x1eaeda / _0x13ab95);
                    _0x47308a >= _0x23d9fa && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x23d9fa / _0x47308a, this['_scrollBar']['slider']['_max'] = (_0x47308a - _0x23d9fa) * this['_cellSize'] + this['_cellOffse' + 't']);
                }
            }, _0xe060f5['refresh'] = function () {
                this['array'] = this['_array'];
            }, _0xe060f5['getItem'] = function (_0x43b271) {
                return _0x43b271 > -0x1 && _0x43b271 < this['_array']['length'] ? this['_array'][_0x43b271] : null;
            }, _0xe060f5['changeItem'] = function (_0x3d7167, _0x366f0b) {
                _0x3d7167 > -0x1 && _0x3d7167 < this['_array']['length'] && (this['_array'][_0x3d7167] = _0x366f0b, _0x3d7167 >= this['_startInde' + 'x'] && _0x3d7167 < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x3d7167), _0x3d7167));
            }, _0xe060f5['setItem'] = function (_0x1f33d1, _0x852700) {
                this['changeItem'](_0x1f33d1, _0x852700);
            }, _0xe060f5['addItem'] = function (_0x165f9f) {
                this['_array']['push'](_0x165f9f), this['array'] = this['_array'];
            }, _0xe060f5['addItemAt'] = function (_0x20fedc, _0x26ace3) {
                this['_array']['splice'](_0x26ace3, 0x0, _0x20fedc), this['array'] = this['_array'];
            }, _0xe060f5['deleteItem'] = function (_0x27da9a) {
                this['_array']['splice'](_0x27da9a, 0x1), this['array'] = this['_array'];
            }, _0xe060f5['getCell'] = function (_0x3e8f38) {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), _0x3e8f38 > -0x1 && this['_cells'] ? this['_cells'][(_0x3e8f38 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
            }, _0xe060f5['scrollTo'] = function (_0x12695b) {
                if (this['_scrollBar']) {
                    var _0x3c7564 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    this['_scrollBar']['value'] = Math['floor'](_0x12695b / _0x3c7564) * this['_cellSize'];
                } else
                    this['startIndex'] = _0x12695b;
            }, _0xe060f5['tweenTo'] = function (_0x5a16dc, _0x243b51, _0x147dc0) {
                if (void 0x0 === _0x243b51 && (_0x243b51 = 0xc8), this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x8b0a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    _0x546c37['to'](this['_scrollBar'], { 'value': Math['floor'](_0x5a16dc / _0x8b0a) * this['_cellSize'] }, _0x243b51, null, _0x147dc0, 0x0, !0x0);
                } else
                    this['startIndex'] = _0x5a16dc, _0x147dc0 && _0x147dc0['run']();
            }, _0xe060f5['_setCellCh' + 'anged'] = function () {
                this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
            }, _0xe060f5['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
            }, _0x1df89a(0x0, _0xe060f5, 'cacheAs', _0x1ea42a['prototype']['_$get_cach' + 'eAs'], function (_0x41e16d) {
                _0x290223['superSet'](_0x213a7b, this, 'cacheAs', _0x41e16d), this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x41e16d ? this['_scrollBar']['on']('start', this, this['onScrollSt' + 'art']) : this['_scrollBar']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x1df89a(0x0, _0xe060f5, 'content', function () {
                return this['_content'];
            }), _0x1df89a(0x0, _0xe060f5, 'height', _0x1ea42a['prototype']['_$get_heig' + 'ht'], function (_0x539134) {
                _0x539134 != this['_height'] && (_0x290223['superSet'](_0x213a7b, this, 'height', _0x539134), this['_setCellCh' + 'anged']());
            }), _0x1df89a(0x0, _0xe060f5, 'itemRender', function () {
                return this['_itemRende' + 'r'];
            }, function (_0x42f572) {
                if (this['_itemRende' + 'r'] != _0x42f572) {
                    this['_itemRende' + 'r'] = _0x42f572;
                    for (var _0x13f69c = this['_cells']['length'] - 0x1; _0x13f69c > -0x1; _0x13f69c--)
                        this['_cells'][_0x13f69c]['destroy']();
                    this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
                }
            }), _0x1df89a(0x0, _0xe060f5, 'vScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x1ca014) {
                this['_removePre' + 'ScrollBar']();
                var _0x5f51bf = new _0x55acad();
                _0x5f51bf['name'] = 'scrollBar', _0x5f51bf['right'] = 0x0, _0x5f51bf['skin'] = _0x1ca014, _0x5f51bf['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x5f51bf, this['addChild'](_0x5f51bf), this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'page', function () {
                return this['_page'];
            }, function (_0x3df0c0) {
                this['_page'] = _0x3df0c0, this['_array'] && (this['_page'] = _0x3df0c0 > 0x0 ? _0x3df0c0 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
            }), _0x1df89a(0x0, _0xe060f5, 'hScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x2b8f01) {
                this['_removePre' + 'ScrollBar']();
                var _0x588120 = new _0x19b13a();
                _0x588120['name'] = 'scrollBar', _0x588120['bottom'] = 0x0, _0x588120['skin'] = _0x2b8f01, _0x588120['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x588120, this['addChild'](_0x588120), this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'repeatX', function () {
                return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
            }, function (_0x5cfa46) {
                this['_repeatX'] = _0x5cfa46, this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'scrollBar', function () {
                return this['_scrollBar'];
            }, function (_0x1e97d6) {
                this['_scrollBar'] != _0x1e97d6 && (this['_scrollBar'] = _0x1e97d6, _0x1e97d6 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on']('change', this, this['onScrollBa' + 'rChange'])));
            }), _0x1df89a(0x0, _0xe060f5, 'width', _0x1ea42a['prototype']['_$get_widt' + 'h'], function (_0x50bd81) {
                _0x50bd81 != this['_width'] && (_0x290223['superSet'](_0x213a7b, this, 'width', _0x50bd81), this['_setCellCh' + 'anged']());
            }), _0x1df89a(0x0, _0xe060f5, 'repeatY', function () {
                return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
            }, function (_0x5df757) {
                this['_repeatY'] = _0x5df757, this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x39e4ed) {
                this['_spaceX'] = _0x39e4ed, this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x19a0f7) {
                this['_spaceY'] = _0x19a0f7, this['_setCellCh' + 'anged']();
            }), _0x1df89a(0x0, _0xe060f5, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x55376e) {
                this['_selectedI' + 'ndex'] != _0x55376e && (this['_selectedI' + 'ndex'] = _0x55376e, this['changeSele' + 'ctStatus'](), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x55376e), this['startIndex'] = this['_startInde' + 'x']);
            }), _0x1df89a(0x0, _0xe060f5, 'selectedIt' + 'em', function () {
                return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x92db56) {
                this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x92db56);
            }), _0x1df89a(0x0, _0xe060f5, 'length', function () {
                return this['_array'] ? this['_array']['length'] : 0x0;
            }), _0x1df89a(0x0, _0xe060f5, 'selection', function () {
                return this['getCell'](this['_selectedI' + 'ndex']);
            }, function (_0x3f85b6) {
                this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x3f85b6);
            }), _0x1df89a(0x0, _0xe060f5, 'startIndex', function () {
                return this['_startInde' + 'x'];
            }, function (_0x81f700) {
                this['_startInde' + 'x'] = _0x81f700 > 0x0 ? _0x81f700 : 0x0, this['callLater'](this['renderItem' + 's']);
            }), _0x1df89a(0x0, _0xe060f5, 'array', function () {
                return this['_array'];
            }, function (_0xa5cb5d) {
                this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0xa5cb5d || [], this['_preLen'] = this['_array']['length'];
                var _0x2a3b4b = this['_array']['length'];
                if (this['totalPage'] = Math['ceil'](_0x2a3b4b / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x2a3b4b ? this['_selectedI' + 'ndex'] : _0x2a3b4b - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x20ab68 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x7e9cab = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x52e16b = Math['ceil'](_0x2a3b4b / _0x20ab68);
                    (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x52e16b >= _0x7e9cab ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x7e9cab / _0x52e16b, this['_scrollBar']['setScroll'](0x0, (_0x52e16b - _0x7e9cab) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
                }
            }), _0x1df89a(0x0, _0xe060f5, 'dataSource', _0x1ea42a['prototype']['_$get_data' + 'Source'], function (_0xaf1e08) {
                this['_dataSourc' + 'e'] = _0xaf1e08, 'number' == typeof _0xaf1e08 && Math['floor'](_0xaf1e08) == _0xaf1e08 || 'string' == typeof _0xaf1e08 ? this['selectedIn' + 'dex'] = parseInt(_0xaf1e08) : _0xaf1e08 instanceof Array ? this['array'] = _0xaf1e08 : _0x290223['superSet'](_0x213a7b, this, 'dataSource', _0xaf1e08);
            }), _0x1df89a(0x0, _0xe060f5, 'cells', function () {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
            }), _0x1df89a(0x0, _0xe060f5, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x3dbd4c) {
                this['_elasticEn' + 'abled'] = _0x3dbd4c, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x3dbd4c ? 0xc8 : 0x0);
            }), _0x5e194e;
        }(_0x213a7b), _0x4e219d = function (_0x2f7f84) {
            function _0x47716d(_0x4a2ce6) {
                this['_bg'] = null, this['_skin'] = null, _0x47716d['__super']['call'](this), void 0x0 === _0x4a2ce6 && (_0x4a2ce6 = ''), this['text'] = _0x4a2ce6, this['skin'] = this['skin'];
            }
            _0x9a35ce(_0x47716d, 'laya.ui.Te' + 'xtInput', _0x2f7f84);
            var _0x2b4fd5 = _0x47716d['prototype'];
            return _0x2b4fd5['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x2b4fd5['destroy'] = function (_0x3e8345) {
                void 0x0 === _0x3e8345 && (_0x3e8345 = !0x0), _0x2f7f84['prototype']['destroy']['call'](this, _0x3e8345), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
            }, _0x2b4fd5['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x389e7b()), this['_tf']['padding'] = _0xf96cc0['inputLabel' + 'Padding'], this['_tf']['on']('input', this, this['_onInput']), this['_tf']['on']('enter', this, this['_onEnter']), this['_tf']['on']('blur', this, this['_onBlur']), this['_tf']['on']('focus', this, this['_onFocus']);
            }, _0x2b4fd5['_onFocus'] = function () {
                this['event']('focus', this);
            }, _0x2b4fd5['_onBlur'] = function () {
                this['event']('blur', this);
            }, _0x2b4fd5['_onInput'] = function () {
                this['event']('input', this);
            }, _0x2b4fd5['_onEnter'] = function () {
                this['event']('enter', this);
            }, _0x2b4fd5['initialize'] = function () {
                this['width'] = 0x80, this['height'] = 0x16;
            }, _0x2b4fd5['_skinLoade' + 'd'] = function () {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x943fcf()), this['_bg']['source'] = _0x5a5cdd['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x2b4fd5['select'] = function () {
                this['_tf']['select']();
            }, _0x2b4fd5['setSelecti' + 'on'] = function (_0x26dace, _0x14758f) {
                this['_tf']['setSelecti' + 'on'](_0x26dace, _0x14758f);
            }, _0x1df89a(0x0, _0x2b4fd5, 'text', _0x2f7f84['prototype']['_$get_text'], function (_0x3ccabd) {
                this['_tf']['text'] != _0x3ccabd && (_0x3ccabd += '', this['_tf']['text'] = _0x3ccabd, this['event']('change'));
            }), _0x1df89a(0x0, _0x2b4fd5, 'bg', function () {
                return this['_bg'];
            }, function (_0x2bffe4) {
                this['graphics'] = this['_bg'] = _0x2bffe4;
            }), _0x1df89a(0x0, _0x2b4fd5, 'multiline', function () {
                return this['_tf']['multiline'];
            }, function (_0x44f21c) {
                this['_tf']['multiline'] = _0x44f21c;
            }), _0x1df89a(0x0, _0x2b4fd5, 'skin', function () {
                return this['_skin'];
            }, function (_0x120c48) {
                this['_skin'] != _0x120c48 && (this['_skin'] = _0x120c48, this['_skin'] && !_0x5a5cdd['getRes'](this['_skin']) ? _0x290223['loader']['load'](this['_skin'], _0x3169bc['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x1df89a(0x0, _0x2b4fd5, 'sizeGrid', function () {
                return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
            }, function (_0x940fa6) {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x943fcf()), this['_bg']['sizeGrid'] = _0x3c7b88['fillArray'](_0xf96cc0['defaultSiz' + 'eGrid'], _0x940fa6, Number);
            }), _0x1df89a(0x0, _0x2b4fd5, 'width', _0x2f7f84['prototype']['_$get_widt' + 'h'], function (_0x31f842) {
                _0x290223['superSet'](_0x1202c1, this, 'width', _0x31f842), this['_bg'] && (this['_bg']['width'] = _0x31f842);
            }), _0x1df89a(0x0, _0x2b4fd5, 'height', _0x2f7f84['prototype']['_$get_heig' + 'ht'], function (_0x14a76d) {
                _0x290223['superSet'](_0x1202c1, this, 'height', _0x14a76d), this['_bg'] && (this['_bg']['height'] = _0x14a76d);
            }), _0x1df89a(0x0, _0x2b4fd5, 'editable', function () {
                return this['_tf']['editable'];
            }, function (_0x2c5cfa) {
                this['_tf']['editable'] = _0x2c5cfa;
            }), _0x1df89a(0x0, _0x2b4fd5, 'restrict', function () {
                return this['_tf']['restrict'];
            }, function (_0x27e755) {
                this['_tf']['restrict'] = _0x27e755;
            }), _0x1df89a(0x0, _0x2b4fd5, 'prompt', function () {
                return this['_tf']['prompt'];
            }, function (_0x3ef9be) {
                this['_tf']['prompt'] = _0x3ef9be;
            }), _0x1df89a(0x0, _0x2b4fd5, 'promptColo' + 'r', function () {
                return this['_tf']['promptColo' + 'r'];
            }, function (_0x2d2f54) {
                this['_tf']['promptColo' + 'r'] = _0x2d2f54;
            }), _0x1df89a(0x0, _0x2b4fd5, 'maxChars', function () {
                return this['_tf']['maxChars'];
            }, function (_0x198f3b) {
                this['_tf']['maxChars'] = _0x198f3b;
            }), _0x1df89a(0x0, _0x2b4fd5, 'focus', function () {
                return this['_tf']['focus'];
            }, function (_0x7b2916) {
                this['_tf']['focus'] = _0x7b2916;
            }), _0x1df89a(0x0, _0x2b4fd5, 'type', function () {
                return this['_tf']['type'];
            }, function (_0x59033d) {
                this['_tf']['type'] = _0x59033d;
            }), _0x47716d;
        }(_0x1202c1), _0x144425 = function (_0x5c4094) {
            function _0x3af17e() {
                this['_oldW'] = 0x0, this['_oldH'] = 0x0, _0x3af17e['__super']['call'](this);
            }
            _0x9a35ce(_0x3af17e, 'laya.ui.Sc' + 'aleBox', _0x5c4094);
            var _0x3b06dc = _0x3af17e['prototype'];
            return _0x3b06dc['onEnable'] = function () {
                _0x290223['stage']['on']('resize', this, this['onResize']), this['onResize']();
            }, _0x3b06dc['onDisable'] = function () {
                _0x290223['stage']['off']('resize', this, this['onResize']);
            }, _0x3b06dc['onResize'] = function () {
                if (this['width'] > 0x0 && this['height'] > 0x0) {
                    var _0x4da08f = Math['min'](_0x290223['stage']['width'] / this['_oldW'], _0x290223['stage']['height'] / this['_oldH']);
                    _0x290223['superSet'](_0x213a7b, this, 'width', _0x290223['stage']['width']), _0x290223['superSet'](_0x213a7b, this, 'height', _0x290223['stage']['height']), this['scale'](_0x4da08f, _0x4da08f);
                }
            }, _0x1df89a(0x0, _0x3b06dc, 'width', _0x5c4094['prototype']['_$get_widt' + 'h'], function (_0x240f14) {
                _0x290223['superSet'](_0x213a7b, this, 'width', _0x240f14), this['_oldW'] = _0x240f14;
            }), _0x1df89a(0x0, _0x3b06dc, 'height', _0x5c4094['prototype']['_$get_heig' + 'ht'], function (_0x5d5c67) {
                _0x290223['superSet'](_0x213a7b, this, 'height', _0x5d5c67), this['_oldH'] = _0x5d5c67;
            }), _0x3af17e;
        }(_0x213a7b), _0x99cd14 = function (_0x10e106) {
            function _0x2fa65b(_0x27a34e, _0x455353) {
                this['_value'] = null, void 0x0 === _0x455353 && (_0x455353 = ''), _0x2fa65b['__super']['call'](this, _0x27a34e, _0x455353);
            }
            _0x9a35ce(_0x2fa65b, 'laya.ui.Ra' + 'dio', _0x10e106);
            var _0x1cf4ec = _0x2fa65b['prototype'];
            return _0x1cf4ec['destroy'] = function (_0x4a3348) {
                void 0x0 === _0x4a3348 && (_0x4a3348 = !0x0), _0x10e106['prototype']['destroy']['call'](this, _0x4a3348), this['_value'] = null;
            }, _0x1cf4ec['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
            }, _0x1cf4ec['initialize'] = function () {
                _0x10e106['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on']('click', this, this['onClick']);
            }, _0x1cf4ec['onClick'] = function (_0x2ef978) {
                this['selected'] = !0x0;
            }, _0x1df89a(0x0, _0x1cf4ec, 'value', function () {
                return null != this['_value'] ? this['_value'] : this['label'];
            }, function (_0x183b80) {
                this['_value'] = _0x183b80;
            }), _0x2fa65b;
        }(_0x1851a2), _0x3f9733 = function (_0x22a42e) {
            function _0x57671e(_0x594722, _0x45b9de) {
                this['_valueArr'] = null, this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x57671e['__super']['call'](this), _0x594722 && (this['skin'] = _0x594722), _0x45b9de && (this['sheet'] = _0x45b9de);
            }
            _0x9a35ce(_0x57671e, 'laya.ui.Fo' + 'ntClip', _0x22a42e);
            var _0x26f542 = _0x57671e['prototype'];
            return _0x26f542['createChil' + 'dren'] = function () {
                this['_bitmap'] = new _0x943fcf(), this['on']('loaded', this, this['_onClipLoa' + 'ded']);
            }, _0x26f542['_onClipLoa' + 'ded'] = function () {
                this['callLater'](this['changeValu' + 'e']);
            }, _0x26f542['changeValu' + 'e'] = function () {
                var _0x319efa;
                if (this['_sources'] && (this['_valueArr'] && (this['graphics']['clear'](!0x0), _0x319efa = this['_sources'][0x0]))) {
                    var _0x31617c = 'horizontal' === this['_direction'];
                    _0x31617c ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x319efa['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x319efa['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x319efa['sourceWidt' + 'h'], this['_wordsH'] = (_0x319efa['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                    var _0x47e855 = 0x0;
                    if (this['_width'])
                        switch (this['_align']) {
                        case 'center':
                            _0x47e855 = 0.5 * (this['_width'] - this['_wordsW']);
                            break;
                        case 'right':
                            _0x47e855 = this['_width'] - this['_wordsW'];
                            break;
                        default:
                            _0x47e855 = 0x0;
                        }
                    for (var _0x14ba61 = 0x0, _0x1cc2ba = this['_valueArr']['length']; _0x14ba61 < _0x1cc2ba; _0x14ba61++) {
                        var _0x2982cb = this['_indexMap'][this['_valueArr']['charAt'](_0x14ba61)];
                        this['sources'][_0x2982cb] && (_0x319efa = this['sources'][_0x2982cb], _0x31617c ? this['graphics']['drawImage'](_0x319efa, _0x47e855 + _0x14ba61 * (_0x319efa['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x319efa['sourceWidt' + 'h'], _0x319efa['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x319efa, 0x0 + _0x47e855, _0x14ba61 * (_0x319efa['sourceHeig' + 'ht'] + this['spaceY']), _0x319efa['sourceWidt' + 'h'], _0x319efa['sourceHeig' + 'ht']));
                    }
                    this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
                }
            }, _0x26f542['measureWid' + 'th'] = function () {
                return this['_wordsW'];
            }, _0x26f542['measureHei' + 'ght'] = function () {
                return this['_wordsH'];
            }, _0x26f542['destroy'] = function (_0x303f06) {
                void 0x0 === _0x303f06 && (_0x303f06 = !0x0), this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off']('loaded', this, this['_onClipLoa' + 'ded']), _0x22a42e['prototype']['destroy']['call'](this, _0x303f06);
            }, _0x1df89a(0x0, _0x26f542, 'sheet', function () {
                return this['_sheet'];
            }, function (_0x3c40d4) {
                _0x3c40d4 += '', this['_sheet'] = _0x3c40d4;
                var _0x309aaf = _0x3c40d4['split']('\x20');
                this['_clipX'] = String(_0x309aaf[0x0])['length'], this['clipY'] = _0x309aaf['length'], this['_indexMap'] = {};
                for (var _0x325b32 = 0x0; _0x325b32 < this['_clipY']; _0x325b32++)
                    for (var _0x18a2ed = _0x309aaf[_0x325b32]['split'](''), _0x43589a = 0x0, _0x10fcab = _0x18a2ed['length']; _0x43589a < _0x10fcab; _0x43589a++)
                        this['_indexMap'][_0x18a2ed[_0x43589a]] = _0x325b32 * this['_clipX'] + _0x43589a;
            }), _0x1df89a(0x0, _0x26f542, 'height', _0x22a42e['prototype']['_$get_heig' + 'ht'], function (_0x3b171a) {
                _0x290223['superSet'](_0x6e1d29, this, 'height', _0x3b171a), this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'direction', function () {
                return this['_direction'];
            }, function (_0x4515cc) {
                this['_direction'] = _0x4515cc, this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'value', function () {
                return this['_valueArr'] ? this['_valueArr'] : '';
            }, function (_0x1d4cb1) {
                _0x1d4cb1 += '', this['_valueArr'] = _0x1d4cb1, this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'width', _0x22a42e['prototype']['_$get_widt' + 'h'], function (_0xfe741f) {
                _0x290223['superSet'](_0x6e1d29, this, 'width', _0xfe741f), this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x92fcc8) {
                this['_spaceX'] = _0x92fcc8, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x1c9ae1) {
                this['_spaceY'] = _0x1c9ae1, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x1df89a(0x0, _0x26f542, 'align', function () {
                return this['_align'];
            }, function (_0x38e219) {
                this['_align'] = _0x38e219, this['callLater'](this['changeValu' + 'e']);
            }), _0x57671e;
        }(_0x6e1d29), _0x55acad = (function (_0x2a0e2c) {
            function _0x2f4e0b(_0x1dcb3c) {
                this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_appid'] = null, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, _0x2f4e0b['__super']['call'](this), this['_http'] = new _0x4cf231['window']['XMLHttpReq' + 'uest'](), this['skin'] = _0x1dcb3c, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
            }
            _0x9a35ce(_0x2f4e0b, 'laya.ui.Ad' + 'vImage', _0x2a0e2c);
            var _0x38aa76 = _0x2f4e0b['prototype'];
            _0x38aa76['setLoadUrl'] = function () {
                _0x4cf231['onLimixiu'] && (this['resUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/wyw/gconf' + 'ig.json');
            }, _0x38aa76['init'] = function () {
                this['isSupportJ' + 'ump']() ? ((_0x4cf231['onMiniGame'] || _0x4cf231['onBDMiniGa' + 'me']) && _0x290223['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
            }, _0x38aa76['initEvent'] = function () {
                this['on']('click', this, this['onAdvsImgC' + 'lick']);
            }, _0x38aa76['onAdvsImgC' + 'lick'] = function () {
                this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
            }, _0x38aa76['revertAdvs' + 'Data'] = function () {
                if (this['advsListAr' + 'r'][this['_playIndex']]) {
                    if (this['visible'] = !0x0, _0x4cf231['onLimixiu']) {
                        this['visible'] = !0x0;
                        var _0xf70c = this['advsListAr' + 'r'][this['_playIndex']];
                        _0xf70c && (_0x4cf231['onLimixiu'] && GameStatusInfo['gameId'] == _0xf70c['gameid'] ? this['onLunbo']() : (this['skin'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/icon/' + _0xf70c['iconUrl'], this['size'](0x67, 0x7e)));
                    } else
                        this['skin'] = this['advsListAr' + 'r'][this['_playIndex']];
                }
            }, _0x38aa76['isSupportJ' + 'ump'] = function () {
                if (_0x4cf231['onMiniGame'])
                    return 'function' == typeof wx['navigateTo' + 'MiniProgra' + 'm'];
                if (_0x4cf231['onLimixiu']) {
                    if (BK['QQ']['skipGame'])
                        return !0x0;
                } else {
                    if (_0x4cf231['onBDMiniGa' + 'me'])
                        return !0x0;
                }
                return !0x1;
            }, _0x38aa76['jumptoGame'] = function () {
                var _0x122642 = this, _0x2ab649 = this['advsListAr' + 'r'][this['_playIndex']], _0x22d516 = parseInt(_0x2ab649['gameid']), _0x4a3cad = _0x2ab649['extendInfo'];
                _0x2ab649['path'];
                if (_0x4cf231['onLimixiu']) {
                    if (!_0x2ab649['isLunBo'] && !_0x2ab649['isLunBo']) {
                        var _0x110d7a = _0x199abd['getJSON']('gameObj');
                        _0x110d7a || (_0x110d7a = {}), _0x110d7a[_0x2ab649['gameid']] || (_0x110d7a[_0x2ab649['gameid']] = {}), _0x110d7a[_0x2ab649['gameid']] = { 'isclick': !0x0 }, _0x199abd['setJSON']('gameObj', _0x110d7a), this['advsListAr' + 'r']['splice'](this['_playIndex'], 0x1);
                    }
                    BK['QQ']['skipGame'](_0x22d516, _0x4a3cad), this['updateAdvs' + 'Info']();
                } else
                    _0x4cf231['onMiniGame'] ? this['isSupportJ' + 'ump']() && wx['navigateTo' + 'MiniProgra' + 'm']({
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
                            console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), _0x122642['updateAdvs' + 'Info']();
                        }['bind'](this)
                    }) : _0x4cf231['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
            }, _0x38aa76['updateAdvs' + 'Info'] = function () {
                this['visible'] = !0x1, this['onLunbo'](), _0x290223['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
            }, _0x38aa76['onLunbo'] = function () {
                this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
            }, _0x38aa76['getCurrent' + 'AppidObj'] = function () {
                return this['advsListAr' + 'r'][this['_playIndex']];
            }, _0x38aa76['onGetAdvsL' + 'istData'] = function () {
                var _0x404646 = this, _0x5379cf = _0x2f4e0b['randRange'](0x2710, 0xf4240), _0x14a984 = this['resUrl'] + '?' + _0x5379cf;
                this['_http']['open']('get', _0x14a984, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x1b9ebe) {
                    _0x404646['_onError'](_0x1b9ebe);
                }, this['_http']['onload'] = function (_0x203670) {
                    _0x404646['_onLoad'](_0x203670);
                }, this['_http']['send'](null);
            }, _0x38aa76['_onError'] = function (_0x948e2b) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
            }, _0x38aa76['_onLoad'] = function (_0x35422c) {
                var _0x35c8de = this['_http'], _0x441843 = void 0x0 !== _0x35c8de['status'] ? _0x35c8de['status'] : 0xc8;
                0xc8 === _0x441843 || 0xcc === _0x441843 || 0x0 === _0x441843 ? this['complete']() : this['error']('[' + _0x35c8de['status'] + ']' + _0x35c8de['statusText'] + ':' + _0x35c8de['responseUR' + 'L']);
            }, _0x38aa76['error'] = function (_0x2ccb1c) {
                this['event']('error', _0x2ccb1c);
            }, _0x38aa76['complete'] = function () {
                try {
                    this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), _0x4cf231['onLimixiu'] ? (this['advsListAr' + 'r'] = this['getAdvsQAr' + 'r'](this['_data']), this['advsListAr' + 'r']['length'] ? (this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']()) : this['visible'] = !0x1) : (this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']());
                } catch (_0x21f6e5) {
                    !0x1, this['error'](_0x21f6e5['message']);
                }
            }, _0x38aa76['getAdvsQAr' + 'r'] = function (_0x569f71) {
                var _0x5b6b42 = [], _0x3be55e = _0x199abd['getJSON']('gameObj');
                for (var _0x6bfe6d in _0x569f71) {
                    var _0x4e961b = _0x569f71[_0x6bfe6d];
                    _0x3be55e && _0x3be55e[_0x4e961b['gameid']] && !_0x4e961b['isQiangZhi'] || _0x5b6b42['push'](_0x4e961b);
                }
                return _0x5b6b42;
            }, _0x38aa76['clear'] = function () {
                var _0x5f7db5 = this['_http'];
                _0x5f7db5['onerror'] = _0x5f7db5['onabort'] = _0x5f7db5['onprogress'] = _0x5f7db5['onload'] = null;
            }, _0x38aa76['destroy'] = function (_0x2ba265) {
                void 0x0 === _0x2ba265 && (_0x2ba265 = !0x0), _0x290223['timer']['clear'](this, this['onLunbo']), _0x2a0e2c['prototype']['destroy']['call'](this, !0x0), this['clear'](), _0x290223['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
            }, _0x2f4e0b['randRange'] = function (_0x1990b5, _0x1e1f31) {
                return Math['floor'](Math['random']() * (_0x1e1f31 - _0x1990b5 + 0x1)) + _0x1990b5;
            };
        }(_0x1f8bdb), function (_0x2dd063) {
            function _0x362235() {
                _0x362235['__super']['call'](this);
            }
            return _0x9a35ce(_0x362235, 'laya.ui.VS' + 'crollBar', _0x571641), _0x362235;
        }()), _0x4bce9b = function (_0x36115d) {
            function _0xd831fc() {
                _0xd831fc['__super']['call'](this);
            }
            return _0x9a35ce(_0xd831fc, 'laya.ui.VS' + 'lider', _0x17643a), _0xd831fc;
        }(), _0x19b13a = function (_0x3214a2) {
            function _0x219365() {
                _0x219365['__super']['call'](this);
            }
            return _0x9a35ce(_0x219365, 'laya.ui.HS' + 'crollBar', _0x3214a2), _0x219365['prototype']['initialize'] = function () {
                _0x3214a2['prototype']['initialize']['call'](this), this['slider']['isVertical'] = !0x1;
            }, _0x219365;
        }(_0x571641), _0x310e66 = function (_0x489dbf) {
            function _0x5ba8cc(_0x405ed5) {
                _0x5ba8cc['__super']['call'](this, _0x405ed5), this['isVertical'] = !0x1;
            }
            return _0x9a35ce(_0x5ba8cc, 'laya.ui.HS' + 'lider', _0x17643a), _0x5ba8cc;
        }(), _0x71c298 = function (_0x39b002) {
            function _0x11bee0() {
                _0x11bee0['__super']['call'](this);
            }
            _0x9a35ce(_0x11bee0, 'laya.ui.HB' + 'ox', _0x39b002);
            var _0x32cf98 = _0x11bee0['prototype'];
            return _0x32cf98['sortItem'] = function (_0x47c62b) {
                _0x47c62b && _0x47c62b['sort'](function (_0x37bcfe, _0xf42ff2) {
                    return _0x37bcfe['x'] - _0xf42ff2['x'];
                });
            }, _0x32cf98['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x2bb0e0 = [], _0x3e3c90 = 0x0, _0x503f3d = 0x0, _0x5daa03 = this['numChildre' + 'n']; _0x503f3d < _0x5daa03; _0x503f3d++) {
                    var _0x18741b = this['getChildAt'](_0x503f3d);
                    _0x18741b && (_0x2bb0e0['push'](_0x18741b), _0x3e3c90 = this['_height'] ? this['_height'] : Math['max'](_0x3e3c90, _0x18741b['height'] * _0x18741b['scaleY']));
                }
                this['sortItem'](_0x2bb0e0);
                var _0x524ed9 = 0x0;
                for (_0x503f3d = 0x0, _0x5daa03 = _0x2bb0e0['length']; _0x503f3d < _0x5daa03; _0x503f3d++)
                    (_0x18741b = _0x2bb0e0[_0x503f3d])['x'] = _0x524ed9, _0x524ed9 += _0x18741b['width'] * _0x18741b['scaleX'] + this['_space'], 'top' == this['_align'] ? _0x18741b['y'] = 0x0 : 'middle' == this['_align'] ? _0x18741b['y'] = 0.5 * (_0x3e3c90 - _0x18741b['height'] * _0x18741b['scaleY']) : 'bottom' == this['_align'] && (_0x18741b['y'] = _0x3e3c90 - _0x18741b['height'] * _0x18741b['scaleY']);
                this['_sizeChang' + 'ed']();
            }, _0x1df89a(0x0, _0x32cf98, 'height', _0x39b002['prototype']['_$get_heig' + 'ht'], function (_0x578f19) {
                this['_height'] != _0x578f19 && (_0x290223['superSet'](_0x5a5cc0, this, 'height', _0x578f19), this['callLater'](this['changeItem' + 's']));
            }), _0x11bee0['NONE'] = 'none', _0x11bee0['TOP'] = 'top', _0x11bee0['MIDDLE'] = 'middle', _0x11bee0['BOTTOM'] = 'bottom', _0x11bee0;
        }(_0x5a5cc0), _0x25ee5f = function (_0x3aefc8) {
            function _0x38097b() {
                _0x38097b['__super']['call'](this);
            }
            return _0x9a35ce(_0x38097b, 'laya.ui.Ra' + 'dioGroup', _0x5e1a23), _0x38097b['prototype']['createItem'] = function (_0x14cb11, _0x23b57c) {
                return new _0x99cd14(_0x14cb11, _0x23b57c);
            }, _0x38097b;
        }(), _0x4483e3 = function (_0x1b5f00) {
            function _0x3ed7d7() {
                _0x3ed7d7['__super']['call'](this);
            }
            _0x9a35ce(_0x3ed7d7, 'laya.ui.VB' + 'ox', _0x1b5f00);
            var _0x12b22b = _0x3ed7d7['prototype'];
            return _0x12b22b['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x16224c = [], _0x9f842e = 0x0, _0x473a3f = 0x0, _0x17bd7e = this['numChildre' + 'n']; _0x473a3f < _0x17bd7e; _0x473a3f++) {
                    var _0x4f1d43 = this['getChildAt'](_0x473a3f);
                    _0x4f1d43 && (_0x16224c['push'](_0x4f1d43), _0x9f842e = this['_width'] ? this['_width'] : Math['max'](_0x9f842e, _0x4f1d43['width'] * _0x4f1d43['scaleX']));
                }
                this['sortItem'](_0x16224c);
                var _0x1869d8 = 0x0;
                for (_0x473a3f = 0x0, _0x17bd7e = _0x16224c['length']; _0x473a3f < _0x17bd7e; _0x473a3f++)
                    (_0x4f1d43 = _0x16224c[_0x473a3f])['y'] = _0x1869d8, _0x1869d8 += _0x4f1d43['height'] * _0x4f1d43['scaleY'] + this['_space'], 'left' == this['_align'] ? _0x4f1d43['x'] = 0x0 : 'center' == this['_align'] ? _0x4f1d43['x'] = 0.5 * (_0x9f842e - _0x4f1d43['width'] * _0x4f1d43['scaleX']) : 'right' == this['_align'] && (_0x4f1d43['x'] = _0x9f842e - _0x4f1d43['width'] * _0x4f1d43['scaleX']);
                this['_sizeChang' + 'ed']();
            }, _0x1df89a(0x0, _0x12b22b, 'width', _0x1b5f00['prototype']['_$get_widt' + 'h'], function (_0x39fe86) {
                this['_width'] != _0x39fe86 && (_0x290223['superSet'](_0x5a5cc0, this, 'width', _0x39fe86), this['callLater'](this['changeItem' + 's']));
            }), _0x3ed7d7['NONE'] = 'none', _0x3ed7d7['LEFT'] = 'left', _0x3ed7d7['CENTER'] = 'center', _0x3ed7d7['RIGHT'] = 'right', _0x3ed7d7;
        }(_0x5a5cc0), _0x19baa0 = function (_0x142fd2) {
            function _0x3ddab4(_0x225d98) {
                this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, void 0x0 === _0x225d98 && (_0x225d98 = ''), _0x3ddab4['__super']['call'](this, _0x225d98), this['on']('change', this, this['_onTextCha' + 'nge']);
            }
            _0x9a35ce(_0x3ddab4, 'laya.ui.Te' + 'xtArea', _0x142fd2);
            var _0x47d85e = _0x3ddab4['prototype'];
            return _0x47d85e['_onTextCha' + 'nge'] = function () {
                this['callLater'](this['changeScro' + 'll']);
            }, _0x47d85e['destroy'] = function (_0xde6a43) {
                void 0x0 === _0xde6a43 && (_0xde6a43 = !0x0), _0x142fd2['prototype']['destroy']['call'](this, _0xde6a43), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null;
            }, _0x47d85e['initialize'] = function () {
                this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
            }, _0x47d85e['onVBarChan' + 'ged'] = function (_0x8a26aa) {
                this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
            }, _0x47d85e['onHBarChan' + 'ged'] = function (_0x21cd62) {
                this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
            }, _0x47d85e['changeScro' + 'll'] = function () {
                var _0x289a2c = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x29f44c = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x8f250b = _0x289a2c ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x308b27 = _0x29f44c ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x5c9adf = this['_tf']['padding'] || _0xf96cc0['labelPaddi' + 'ng'];
                this['_tf']['width'] = _0x8f250b, this['_tf']['height'] = _0x308b27, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x5c9adf[0x2], this['_vScrollBa' + 'r']['y'] = _0x5c9adf[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x29f44c ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x5c9adf[0x1] - _0x5c9adf[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x308b27 / Math['max'](this['_tf']['textHeight'], _0x308b27), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x289a2c), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x5c9adf[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x5c9adf[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x289a2c ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x5c9adf[0x0] - _0x5c9adf[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x8f250b, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x8f250b / Math['max'](this['_tf']['textWidth'], _0x8f250b), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x29f44c);
            }, _0x47d85e['scrollTo'] = function (_0xedcfc4) {
                this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0xedcfc4;
            }, _0x1df89a(0x0, _0x47d85e, 'scrollY', function () {
                return this['_tf']['scrollY'];
            }), _0x1df89a(0x0, _0x47d85e, 'width', _0x142fd2['prototype']['_$get_widt' + 'h'], function (_0x1a54c9) {
                _0x290223['superSet'](_0x4e219d, this, 'width', _0x1a54c9), this['callLater'](this['changeScro' + 'll']);
            }), _0x1df89a(0x0, _0x47d85e, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x1df89a(0x0, _0x47d85e, 'height', _0x142fd2['prototype']['_$get_heig' + 'ht'], function (_0x2e29e3) {
                _0x290223['superSet'](_0x4e219d, this, 'height', _0x2e29e3), this['callLater'](this['changeScro' + 'll']);
            }), _0x1df89a(0x0, _0x47d85e, 'maxScrollX', function () {
                return this['_tf']['maxScrollX'];
            }), _0x1df89a(0x0, _0x47d85e, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x360832) {
                null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0x55acad()), this['_vScrollBa' + 'r']['on']('change', this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x360832;
            }), _0x1df89a(0x0, _0x47d85e, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x49772d) {
                null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x19b13a()), this['_hScrollBa' + 'r']['on']('change', this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x49772d;
            }), _0x1df89a(0x0, _0x47d85e, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x1df89a(0x0, _0x47d85e, 'maxScrollY', function () {
                return this['_tf']['maxScrollY'];
            }), _0x1df89a(0x0, _0x47d85e, 'scrollX', function () {
                return this['_tf']['scrollX'];
            }), _0x3ddab4;
        }(_0x4e219d), _0x1cdc48 = function (_0x130b7f) {
            function _0xce10e() {
                _0xce10e['__super']['call'](this);
            }
            return _0x9a35ce(_0xce10e, 'laya.ui.Ta' + 'b', _0x5e1a23), _0xce10e['prototype']['createItem'] = function (_0x3c1566, _0x5d0521) {
                return new _0x1851a2(_0x3c1566, _0x5d0521);
            }, _0xce10e;
        }();
    _0x290223['__init']([
        _0x5eab45,
        _0x1d5c18
    ]);
}(window, document, Laya);