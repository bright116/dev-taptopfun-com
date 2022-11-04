!function (_0x4b722f, _0x306107, _0x4d77ad) {
    _0x4d77ad['un'], _0x4d77ad['uns'];
    var _0x2da4d9 = _0x4d77ad['static'], _0x3b4bb6 = _0x4d77ad['class'], _0x3be031 = _0x4d77ad['getset'], _0x3de3fc = (_0x4d77ad['__newvec'], laya['display']['Animation']), _0x151f5a = laya['utils']['Browser'], _0x116238 = laya['utils']['ClassUtils'], _0x168455 = laya['filters']['ColorFilte' + 'r'], _0x2b590d = laya['components']['Component'], _0x108523 = (laya['Const'], laya['utils']['Ease']), _0x383ea5 = laya['events']['Event'], _0x22520d = laya['display']['Graphics'], _0x1ef768 = laya['utils']['Handler'], _0x2cf13a = laya['net']['HttpReques' + 't'], _0x18deff = laya['display']['Input'], _0x27b7ec = laya['net']['Loader'], _0x20e7ff = laya['net']['LocalStora' + 'ge'], _0x46fad6 = laya['maths']['Matrix'], _0x53b25d = (laya['display']['Node'], laya['maths']['Point']), _0x12cc88 = laya['maths']['Rectangle'], _0xf4066b = (laya['renders']['Render'], laya['display']['Scene']), _0x344ef1 = laya['utils']['SceneUtils'], _0x51555a = laya['display']['Sprite'], _0x29ecac = (laya['display']['Stage'], laya['display']['Text']), _0x898082 = laya['resource']['Texture'], _0x1f746d = laya['utils']['TimeLine'], _0x5d7233 = laya['utils']['Tween'], _0x4e82e1 = laya['utils']['Utils'], _0x2767d0 = laya['utils']['WeakObject'];
    _0x4d77ad['interface']('laya.ui.IB' + 'ox'), _0x4d77ad['interface']('laya.ui.II' + 'tem'), _0x4d77ad['interface']('laya.ui.IS' + 'elect'), _0x4d77ad['interface']('laya.ui.IR' + 'ender');
    var _0x4b493c = function () {
            function _0x35e4c0() {
            }
            return _0x3b4bb6(_0x35e4c0, 'laya.ui.UI' + 'Utils'), _0x35e4c0['fillArray'] = function (_0x55f760, _0xb3ea15, _0x240b40) {
                var _0x43f1b8 = _0x55f760['concat']();
                if (_0xb3ea15)
                    for (var _0x48adca = _0xb3ea15['split'](','), _0x2c21cf = 0x0, _0x277926 = Math['min'](_0x43f1b8['length'], _0x48adca['length']); _0x2c21cf < _0x277926; _0x2c21cf++) {
                        var _0x58cab2 = _0x48adca[_0x2c21cf];
                        _0x43f1b8[_0x2c21cf] = 'true' == _0x58cab2 || 'false' != _0x58cab2 && _0x58cab2, null != _0x240b40 && (_0x43f1b8[_0x2c21cf] = _0x240b40(_0x58cab2));
                    }
                return _0x43f1b8;
            }, _0x35e4c0['toColor'] = function (_0x52395e) {
                return _0x4e82e1['toHexColor'](_0x52395e);
            }, _0x35e4c0['gray'] = function (_0x2b7a51, _0x379e7a) {
                void 0x0 === _0x379e7a && (_0x379e7a = !0x0), _0x379e7a ? _0x35e4c0['addFilter'](_0x2b7a51, _0x35e4c0['grayFilter']) : _0x35e4c0['clearFilte' + 'r'](_0x2b7a51, _0x168455);
            }, _0x35e4c0['addFilter'] = function (_0xf5ac1b, _0xe36f21) {
                var _0xf86cf3 = _0xf5ac1b['filters'] || [];
                _0xf86cf3['push'](_0xe36f21), _0xf5ac1b['filters'] = _0xf86cf3;
            }, _0x35e4c0['clearFilte' + 'r'] = function (_0x21369c, _0x53f0fb) {
                var _0x1cb49f = _0x21369c['filters'];
                if (null != _0x1cb49f && _0x1cb49f['length'] > 0x0) {
                    for (var _0x330a6f = _0x1cb49f['length'] - 0x1; _0x330a6f > -0x1; _0x330a6f--) {
                        var _0x46ca36 = _0x1cb49f[_0x330a6f];
                        _0x4d77ad['__typeof'](_0x46ca36, _0x53f0fb) && _0x1cb49f['splice'](_0x330a6f, 0x1);
                    }
                    _0x21369c['filters'] = _0x1cb49f;
                }
            }, _0x35e4c0['_getReplac' + 'eStr'] = function (_0x2afa31) {
                return _0x35e4c0['escapeSequ' + 'ence'][_0x2afa31];
            }, _0x35e4c0['adptString'] = function (_0x10cb9b) {
                return _0x10cb9b['replace'](/\\(\w)/g, _0x35e4c0['_getReplac' + 'eStr']);
            }, _0x35e4c0['getBindFun'] = function (_0x5c9e76) {
                var _0x46bc76 = _0x35e4c0['_funMap']['get'](_0x5c9e76);
                if (null == _0x46bc76) {
                    var _0x258ed8 = '\x22' + _0x5c9e76 + '\x22', _0x2b06b4 = '(function(' + 'data){if(d' + 'ata==null)' + 'return;wit' + 'h(data){tr' + 'y{\x0areturn\x20' + (_0x258ed8 = _0x258ed8['replace'](/^"\${|}"$/g, '')['replace'](/\${/g, '\x22+')['replace'](/}/g, '+\x22')) + ('\x0a}catch(e)' + '{}}})');
                    _0x46bc76 = _0x4d77ad['_runScript'](_0x2b06b4), _0x35e4c0['_funMap']['set'](_0x5c9e76, _0x46bc76);
                }
                return _0x46bc76;
            }, _0x2da4d9(_0x35e4c0, [
                'grayFilter',
                function () {
                    return this['grayFilter'] = new _0x168455([
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
                    return this['_funMap'] = new _0x2767d0();
                }
            ]), _0x35e4c0;
        }(), _0x55fcb = function () {
            function _0x52d8d4() {
            }
            return _0x3b4bb6(_0x52d8d4, 'laya.ui.St' + 'yles'), _0x52d8d4['labelColor'] = '#000000', _0x52d8d4['buttonStat' + 'eNum'] = 0x3, _0x52d8d4['scrollBarM' + 'inNum'] = 0xf, _0x52d8d4['scrollBarD' + 'elayTime'] = 0x1f4, _0x2da4d9(_0x52d8d4, [
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
            ]), _0x52d8d4;
        }(), _0x5c4625 = function () {
            function _0x9760a0() {
            }
            return _0x3b4bb6(_0x9760a0, 'UIConfig'), _0x9760a0['touchScrol' + 'lEnable'] = !0x0, _0x9760a0['mouseWheel' + 'Enable'] = !0x0, _0x9760a0['showButton' + 's'] = !0x0, _0x9760a0['popupBgCol' + 'or'] = '#000000', _0x9760a0['popupBgAlp' + 'ha'] = 0.5, _0x9760a0['closeDialo' + 'gOnSide'] = !0x0, _0x9760a0;
        }(), _0x1402c1 = function (_0x5c4c4c) {
            function _0x1e0415() {
                this['autoCacheC' + 'md'] = !0x0, this['_width'] = 0x0, this['_height'] = 0x0, this['_source'] = null, this['_sizeGrid'] = null, this['_isChanged'] = !0x1, this['_offset'] = null, _0x1e0415['__super']['call'](this);
            }
            _0x3b4bb6(_0x1e0415, 'laya.ui.Au' + 'toBitmap', _0x5c4c4c);
            var _0x7dd45f = _0x1e0415['prototype'];
            return _0x7dd45f['destroy'] = function () {
                _0x5c4c4c['prototype']['destroy']['call'](this), this['_source'] = null, this['_sizeGrid'] = null, this['_offset'] = null;
            }, _0x7dd45f['_setChange' + 'd'] = function () {
                this['_isChanged'] || (this['_isChanged'] = !0x0, _0x4d77ad['timer']['callLater'](this, this['changeSour' + 'ce']));
            }, _0x7dd45f['changeSour' + 'ce'] = function () {
                this['_isChanged'] = !0x1;
                var _0x3b8ee1 = this['_source'];
                if (_0x3b8ee1 && _0x3b8ee1['bitmap']) {
                    var _0xee7af1 = this['width'], _0x101cc3 = this['height'], _0x13f19b = this['_sizeGrid'], _0x197ccc = _0x3b8ee1['sourceWidt' + 'h'], _0x3030b6 = _0x3b8ee1['sourceHeig' + 'ht'];
                    if (!_0x13f19b || _0x197ccc === _0xee7af1 && _0x3030b6 === _0x101cc3)
                        this['clear'](), this['drawTextur' + 'e'](_0x3b8ee1, this['_offset'] ? this['_offset'][0x0] : 0x0, this['_offset'] ? this['_offset'][0x1] : 0x0, _0xee7af1, _0x101cc3);
                    else {
                        this['clear']();
                        var _0x4d1b6f = _0x13f19b[0x0], _0x139be3 = _0x13f19b[0x1], _0xd52beb = _0x13f19b[0x2], _0x5a5ea3 = _0x13f19b[0x3], _0xe4a47 = _0x13f19b[0x4], _0xfc78 = !0x1;
                        if (_0xee7af1 == _0x197ccc && (_0x5a5ea3 = _0x139be3 = 0x0), _0x101cc3 == _0x3030b6 && (_0x4d1b6f = _0xd52beb = 0x0), _0x5a5ea3 + _0x139be3 > _0xee7af1) {
                            var _0x7286eb = _0xee7af1;
                            _0xfc78 = !0x0, _0xee7af1 = _0x5a5ea3 + _0x139be3, this['save'](), this['clipRect'](0x0, 0x0, _0x7286eb, _0x101cc3);
                        }
                        _0x5a5ea3 && _0x4d1b6f && this['drawImage'](_0x1e0415['getTexture'](_0x3b8ee1, 0x0, 0x0, _0x5a5ea3, _0x4d1b6f), 0x0, 0x0, _0x5a5ea3, _0x4d1b6f), _0x139be3 && _0x4d1b6f && this['drawImage'](_0x1e0415['getTexture'](_0x3b8ee1, _0x197ccc - _0x139be3, 0x0, _0x139be3, _0x4d1b6f), _0xee7af1 - _0x139be3, 0x0, _0x139be3, _0x4d1b6f), _0x5a5ea3 && _0xd52beb && this['drawImage'](_0x1e0415['getTexture'](_0x3b8ee1, 0x0, _0x3030b6 - _0xd52beb, _0x5a5ea3, _0xd52beb), 0x0, _0x101cc3 - _0xd52beb, _0x5a5ea3, _0xd52beb), _0x139be3 && _0xd52beb && this['drawImage'](_0x1e0415['getTexture'](_0x3b8ee1, _0x197ccc - _0x139be3, _0x3030b6 - _0xd52beb, _0x139be3, _0xd52beb), _0xee7af1 - _0x139be3, _0x101cc3 - _0xd52beb, _0x139be3, _0xd52beb), _0x4d1b6f && this['drawBitmap'](_0xe4a47, _0x1e0415['getTexture'](_0x3b8ee1, _0x5a5ea3, 0x0, _0x197ccc - _0x5a5ea3 - _0x139be3, _0x4d1b6f), _0x5a5ea3, 0x0, _0xee7af1 - _0x5a5ea3 - _0x139be3, _0x4d1b6f), _0xd52beb && this['drawBitmap'](_0xe4a47, _0x1e0415['getTexture'](_0x3b8ee1, _0x5a5ea3, _0x3030b6 - _0xd52beb, _0x197ccc - _0x5a5ea3 - _0x139be3, _0xd52beb), _0x5a5ea3, _0x101cc3 - _0xd52beb, _0xee7af1 - _0x5a5ea3 - _0x139be3, _0xd52beb), _0x5a5ea3 && this['drawBitmap'](_0xe4a47, _0x1e0415['getTexture'](_0x3b8ee1, 0x0, _0x4d1b6f, _0x5a5ea3, _0x3030b6 - _0x4d1b6f - _0xd52beb), 0x0, _0x4d1b6f, _0x5a5ea3, _0x101cc3 - _0x4d1b6f - _0xd52beb), _0x139be3 && this['drawBitmap'](_0xe4a47, _0x1e0415['getTexture'](_0x3b8ee1, _0x197ccc - _0x139be3, _0x4d1b6f, _0x139be3, _0x3030b6 - _0x4d1b6f - _0xd52beb), _0xee7af1 - _0x139be3, _0x4d1b6f, _0x139be3, _0x101cc3 - _0x4d1b6f - _0xd52beb), this['drawBitmap'](_0xe4a47, _0x1e0415['getTexture'](_0x3b8ee1, _0x5a5ea3, _0x4d1b6f, _0x197ccc - _0x5a5ea3 - _0x139be3, _0x3030b6 - _0x4d1b6f - _0xd52beb), _0x5a5ea3, _0x4d1b6f, _0xee7af1 - _0x5a5ea3 - _0x139be3, _0x101cc3 - _0x4d1b6f - _0xd52beb), _0xfc78 && this['restore']();
                    }
                    this['_repaint']();
                }
            }, _0x7dd45f['drawBitmap'] = function (_0x167c01, _0x28cf61, _0x35b085, _0xad8388, _0x59c81c, _0x274323) {
                void 0x0 === _0x59c81c && (_0x59c81c = 0x0), void 0x0 === _0x274323 && (_0x274323 = 0x0), _0x59c81c < 0.1 || _0x274323 < 0.1 || (!_0x167c01 || _0x28cf61['width'] == _0x59c81c && _0x28cf61['height'] == _0x274323 ? this['drawImage'](_0x28cf61, _0x35b085, _0xad8388, _0x59c81c, _0x274323) : this['fillTextur' + 'e'](_0x28cf61, _0x35b085, _0xad8388, _0x59c81c, _0x274323));
            }, _0x3be031(0x0, _0x7dd45f, 'sizeGrid', function () {
                return this['_sizeGrid'];
            }, function (_0x15c983) {
                this['_sizeGrid'] = _0x15c983, this['_setChange' + 'd']();
            }), _0x3be031(0x0, _0x7dd45f, 'width', function () {
                return this['_width'] ? this['_width'] : this['_source'] ? this['_source']['sourceWidt' + 'h'] : 0x0;
            }, function (_0x11fe60) {
                this['_width'] != _0x11fe60 && (this['_width'] = _0x11fe60, this['_setChange' + 'd']());
            }), _0x3be031(0x0, _0x7dd45f, 'height', function () {
                return this['_height'] ? this['_height'] : this['_source'] ? this['_source']['sourceHeig' + 'ht'] : 0x0;
            }, function (_0xa3e8d7) {
                this['_height'] != _0xa3e8d7 && (this['_height'] = _0xa3e8d7, this['_setChange' + 'd']());
            }), _0x3be031(0x0, _0x7dd45f, 'source', function () {
                return this['_source'];
            }, function (_0x371c20) {
                _0x371c20 ? (this['_source'] = _0x371c20, this['_setChange' + 'd']()) : (this['_source'] = null, this['clear']());
            }), _0x1e0415['getTexture'] = function (_0x37e69f, _0x2b4116, _0x21badc, _0x331099, _0x333a5e) {
                _0x331099 <= 0x0 && (_0x331099 = 0x1), _0x333a5e <= 0x0 && (_0x333a5e = 0x1), _0x37e69f['$_GID'] || (_0x37e69f['$_GID'] = _0x4e82e1['getGID']());
                var _0x5b7a04;
                return _0x5b7a04 && _0x5b7a04['_getSource']() || (_0x5b7a04 = _0x898082['createFrom' + 'Texture'](_0x37e69f, _0x2b4116, _0x21badc, _0x331099, _0x333a5e)), _0x5b7a04;
            }, _0x1e0415;
        }(_0x22520d), _0x2f6b99 = (function (_0x3f26a6) {
            function _0x155b07() {
                _0x155b07['__super']['call'](this);
            }
            _0x3b4bb6(_0x155b07, 'laya.ui.UI' + 'Event', _0x383ea5), _0x155b07['SHOW_TIP'] = 'showtip', _0x155b07['HIDE_TIP'] = 'hidetip';
        }(), function (_0x3aeeb0) {
            function _0x3407a9() {
                _0x3407a9['__super']['call'](this), this['_top'] = NaN, this['_bottom'] = NaN, this['_left'] = NaN, this['_right'] = NaN, this['_centerX'] = NaN, this['_centerY'] = NaN;
            }
            _0x3b4bb6(_0x3407a9, 'laya.ui.Wi' + 'dget', _0x2b590d);
            var _0x2f2432 = _0x3407a9['prototype'];
            return _0x2f2432['onReset'] = function () {
                this['_top'] = this['_bottom'] = this['_left'] = this['_right'] = this['_centerX'] = this['_centerY'] = NaN;
            }, _0x2f2432['_onEnable'] = function () {
                this['owner']['parent'] ? this['_onAdded']() : this['owner']['once']('added', this, this['_onAdded']);
            }, _0x2f2432['_onDisable'] = function () {
                this['owner']['off']('added', this, this['_onAdded']), this['owner']['parent'] && this['owner']['parent']['off']('resize', this, this['_onParentR' + 'esize']);
            }, _0x2f2432['_onAdded'] = function () {
                this['owner']['parent'] && this['owner']['parent']['on']('resize', this, this['_onParentR' + 'esize']), this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']();
            }, _0x2f2432['_onParentR' + 'esize'] = function () {
                (this['resetLayou' + 'tX']() || this['resetLayou' + 'tY']()) && this['owner']['event']('resize');
            }, _0x2f2432['resetLayou' + 'tX'] = function () {
                var _0x213262 = this['owner'];
                if (!_0x213262)
                    return !0x1;
                var _0x85d376 = _0x213262['parent'];
                if (_0x85d376) {
                    if (isNaN(this['centerX'])) {
                        if (isNaN(this['left']))
                            isNaN(this['right']) || (_0x213262['x'] = Math['round'](_0x85d376['width'] - _0x213262['displayWid' + 'th'] - this['right'] + _0x213262['pivotX'] * _0x213262['scaleX']));
                        else {
                            if (_0x213262['x'] = Math['round'](this['left'] + _0x213262['pivotX'] * _0x213262['scaleX']), !isNaN(this['right'])) {
                                var _0x5c11df = (_0x85d376['_width'] - this['left'] - this['right']) / (_0x213262['scaleX'] || 0.01);
                                if (_0x5c11df != _0x213262['width'])
                                    return _0x213262['width'] = _0x5c11df, !0x0;
                            }
                        }
                    } else
                        _0x213262['x'] = Math['round'](0.5 * (_0x85d376['width'] - _0x213262['displayWid' + 'th']) + this['centerX'] + _0x213262['pivotX'] * _0x213262['scaleX']);
                }
                return !0x1;
            }, _0x2f2432['resetLayou' + 'tY'] = function () {
                var _0x51fdcc = this['owner'];
                if (!_0x51fdcc)
                    return !0x1;
                var _0xb17215 = _0x51fdcc['parent'];
                if (_0xb17215) {
                    if (isNaN(this['centerY'])) {
                        if (isNaN(this['top']))
                            isNaN(this['bottom']) || (_0x51fdcc['y'] = Math['round'](_0xb17215['height'] - _0x51fdcc['displayHei' + 'ght'] - this['bottom'] + _0x51fdcc['pivotY'] * _0x51fdcc['scaleY']));
                        else {
                            if (_0x51fdcc['y'] = Math['round'](this['top'] + _0x51fdcc['pivotY'] * _0x51fdcc['scaleY']), !isNaN(this['bottom'])) {
                                var _0x1cf105 = (_0xb17215['_height'] - this['top'] - this['bottom']) / (_0x51fdcc['scaleY'] || 0.01);
                                if (_0x1cf105 != _0x51fdcc['height'])
                                    return _0x51fdcc['height'] = _0x1cf105, !0x0;
                            }
                        }
                    } else
                        _0x51fdcc['y'] = Math['round'](0.5 * (_0xb17215['height'] - _0x51fdcc['displayHei' + 'ght']) + this['centerY'] + _0x51fdcc['pivotY'] * _0x51fdcc['scaleY']);
                }
                return !0x1;
            }, _0x2f2432['resetLayou' + 't'] = function () {
                this['owner'] && (this['resetLayou' + 'tX'](), this['resetLayou' + 'tY']());
            }, _0x3be031(0x0, _0x2f2432, 'centerX', function () {
                return this['_centerX'];
            }, function (_0xc0d5) {
                this['_centerX'] != _0xc0d5 && (this['_centerX'] = _0xc0d5, this['resetLayou' + 'tX']());
            }), _0x3be031(0x0, _0x2f2432, 'top', function () {
                return this['_top'];
            }, function (_0x2bf6e1) {
                this['_top'] != _0x2bf6e1 && (this['_top'] = _0x2bf6e1, this['resetLayou' + 'tY']());
            }), _0x3be031(0x0, _0x2f2432, 'bottom', function () {
                return this['_bottom'];
            }, function (_0x112096) {
                this['_bottom'] != _0x112096 && (this['_bottom'] = _0x112096, this['resetLayou' + 'tY']());
            }), _0x3be031(0x0, _0x2f2432, 'left', function () {
                return this['_left'];
            }, function (_0x5afa04) {
                this['_left'] != _0x5afa04 && (this['_left'] = _0x5afa04, this['resetLayou' + 'tX']());
            }), _0x3be031(0x0, _0x2f2432, 'right', function () {
                return this['_right'];
            }, function (_0xd1ab0) {
                this['_right'] != _0xd1ab0 && (this['_right'] = _0xd1ab0, this['resetLayou' + 'tX']());
            }), _0x3be031(0x0, _0x2f2432, 'centerY', function () {
                return this['_centerY'];
            }, function (_0x2508d0) {
                this['_centerY'] != _0x2508d0 && (this['_centerY'] = _0x2508d0, this['resetLayou' + 'tY']());
            }), _0x2da4d9(_0x3407a9, [
                'EMPTY',
                function () {
                    return this['EMPTY'] = new _0x3407a9();
                }
            ]), _0x3407a9;
        }()), _0x14c206 = function (_0x23c605) {
            function _0xc0f405() {
                this['_dataSourc' + 'e'] = null, this['_toolTip'] = null, this['_tag'] = null, this['_disabled'] = !0x1, this['_gray'] = !0x1, _0xc0f405['__super']['call'](this), this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2f6b99['EMPTY'], this['preinitial' + 'ize'](), this['createChil' + 'dren'](), this['initialize']();
            }
            _0x3b4bb6(_0xc0f405, 'laya.ui.UI' + 'Component', _0x23c605);
            var _0x151615 = _0xc0f405['prototype'];
            return _0x151615['destroy'] = function (_0x48181f) {
                void 0x0 === _0x48181f && (_0x48181f = !0x0), _0x23c605['prototype']['destroy']['call'](this, _0x48181f), this['_dataSourc' + 'e'] = null, this['_tag'] = null, this['_toolTip'] = null;
            }, _0x151615['preinitial' + 'ize'] = function () {
            }, _0x151615['createChil' + 'dren'] = function () {
            }, _0x151615['initialize'] = function () {
            }, _0x151615['measureWid' + 'th'] = function () {
                var _0x15eb3e = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x24487d = this['numChildre' + 'n'] - 0x1; _0x24487d > -0x1; _0x24487d--) {
                    var _0x3e3003 = this['getChildAt'](_0x24487d);
                    _0x3e3003['_visible'] && (_0x15eb3e = Math['max'](_0x3e3003['_x'] + _0x3e3003['width'] * _0x3e3003['scaleX'], _0x15eb3e));
                }
                return _0x15eb3e;
            }, _0x151615['commitMeas' + 'ure'] = function () {
            }, _0x151615['measureHei' + 'ght'] = function () {
                var _0x577950 = 0x0;
                this['commitMeas' + 'ure']();
                for (var _0x258276 = this['numChildre' + 'n'] - 0x1; _0x258276 > -0x1; _0x258276--) {
                    var _0x35c9c9 = this['getChildAt'](_0x258276);
                    _0x35c9c9['_visible'] && (_0x577950 = Math['max'](_0x35c9c9['_y'] + _0x35c9c9['height'] * _0x35c9c9['scaleY'], _0x577950));
                }
                return _0x577950;
            }, _0x151615['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize'), this['_widget'] !== _0x2f6b99['EMPTY'] && this['_widget']['resetLayou' + 't']();
            }, _0x151615['onMouseOve' + 'r'] = function (_0x12c9e7) {
                _0x4d77ad['stage']['event']('showtip', this['_toolTip']);
            }, _0x151615['onMouseOut'] = function (_0x5e82b2) {
                _0x4d77ad['stage']['event']('hidetip', this['_toolTip']);
            }, _0x151615['_getWidget'] = function () {
                return this['_widget'] === _0x2f6b99['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2f6b99)), this['_widget'];
            }, _0x151615['onCompResi' + 'ze'] = function () {
                this['_sizeChang' + 'ed']();
            }, _0x151615['_childChan' + 'ged'] = function (_0x5b5e0c) {
                this['callLater'](this['_sizeChang' + 'ed']), _0x23c605['prototype']['_childChan' + 'ged']['call'](this, _0x5b5e0c);
            }, _0x3be031(0x0, _0x151615, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0xa27ec1) {
                _0xa27ec1 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0xa27ec1);
            }), _0x3be031(0x0, _0x151615, 'width', function () {
                return this['_width'] ? this['_width'] : this['measureWid' + 'th']();
            }, function (_0x5e6816) {
                _0x4d77ad['superGet'](_0x51555a, this, 'width') != _0x5e6816 && (_0x4d77ad['superSet'](_0x51555a, this, 'width', _0x5e6816), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3be031(0x0, _0x151615, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0x30c3a7) {
                _0x30c3a7 != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0x30c3a7);
            }), _0x3be031(0x0, _0x151615, 'height', function () {
                return this['_height'] ? this['_height'] : this['measureHei' + 'ght']();
            }, function (_0xaeca39) {
                _0x4d77ad['superGet'](_0x51555a, this, 'height') != _0xaeca39 && (_0x4d77ad['superSet'](_0x51555a, this, 'height', _0xaeca39), this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3be031(0x0, _0x151615, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x27b99a) {
                _0x27b99a != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x27b99a);
            }), _0x3be031(0x0, _0x151615, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x59868f) {
                this['_dataSourc' + 'e'] = _0x59868f;
                for (var _0x8d4b42 in this['_dataSourc' + 'e'])
                    this['hasOwnProp' + 'erty'](_0x8d4b42) && 'function' != typeof this[_0x8d4b42] && (this[_0x8d4b42] = this['_dataSourc' + 'e'][_0x8d4b42]);
            }), _0x3be031(0x0, _0x151615, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x5b80c3) {
                _0x5b80c3 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x5b80c3);
            }), _0x3be031(0x0, _0x151615, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x5d6776) {
                _0x5d6776 != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x5d6776);
            }), _0x3be031(0x0, _0x151615, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x315bf8) {
                _0x315bf8 != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x315bf8);
            }), _0x3be031(0x0, _0x151615, 'tag', function () {
                return this['_tag'];
            }, function (_0x4e83a7) {
                this['_tag'] = _0x4e83a7;
            }), _0x3be031(0x0, _0x151615, 'toolTip', function () {
                return this['_toolTip'];
            }, function (_0x3717e3) {
                this['_toolTip'] != _0x3717e3 && (this['_toolTip'] = _0x3717e3, null != _0x3717e3 ? (this['on']('mouseover', this, this['onMouseOve' + 'r']), this['on']('mouseout', this, this['onMouseOut'])) : (this['off']('mouseover', this, this['onMouseOve' + 'r']), this['off']('mouseout', this, this['onMouseOut'])));
            }), _0x3be031(0x0, _0x151615, 'gray', function () {
                return this['_gray'];
            }, function (_0x2382d1) {
                _0x2382d1 !== this['_gray'] && (this['_gray'] = _0x2382d1, _0x4b493c['gray'](this, _0x2382d1));
            }), _0x3be031(0x0, _0x151615, 'disabled', function () {
                return this['_disabled'];
            }, function (_0x517905) {
                _0x517905 !== this['_disabled'] && (this['gray'] = this['_disabled'] = _0x517905, this['mouseEnabl' + 'ed'] = !_0x517905);
            }), _0x3be031(0x0, _0x151615, 'scaleX', _0x23c605['prototype']['_$get_scal' + 'eX'], function (_0x53b510) {
                _0x4d77ad['superGet'](_0x51555a, this, 'scaleX') != _0x53b510 && (_0x4d77ad['superSet'](_0x51555a, this, 'scaleX', _0x53b510), this['event']('resize'));
            }), _0x3be031(0x0, _0x151615, 'scaleY', _0x23c605['prototype']['_$get_scal' + 'eY'], function (_0x55baea) {
                _0x4d77ad['superGet'](_0x51555a, this, 'scaleY') != _0x55baea && (_0x4d77ad['superSet'](_0x51555a, this, 'scaleY', _0x55baea), this['event']('resize'));
            }), _0x3be031(0x0, _0x151615, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x469af2) {
                this['_anchorX'] != _0x469af2 && (this['_anchorX'] = _0x469af2, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3be031(0x0, _0x151615, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x5a471b) {
                this['_anchorY'] != _0x5a471b && (this['_anchorY'] = _0x5a471b, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0xc0f405;
        }(_0x51555a), _0x573380 = function (_0x1ec2f5) {
            function _0x480d22() {
                this['lockLayer'] = null, this['popupEffec' + 't'] = function (_0x2e0b11) {
                    _0x2e0b11['scale'](0x1, 0x1), _0x2e0b11['_effectTwe' + 'en'] = _0x5d7233['from'](_0x2e0b11, {
                        'x': _0x4d77ad['stage']['width'] / 0x2,
                        'y': _0x4d77ad['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x108523['backOut'], _0x1ef768['create'](this, this['doOpen'], [_0x2e0b11]), 0x0, !0x1, !0x1);
                }, this['closeEffec' + 't'] = function (_0x328ef9) {
                    _0x328ef9['_effectTwe' + 'en'] = _0x5d7233['to'](_0x328ef9, {
                        'x': _0x4d77ad['stage']['width'] / 0x2,
                        'y': _0x4d77ad['stage']['height'] / 0x2,
                        'scaleX': 0x0,
                        'scaleY': 0x0
                    }, 0x12c, _0x108523['strongOut'], _0x1ef768['create'](this, this['doClose'], [_0x328ef9]), 0x0, !0x1, !0x1);
                }, _0x480d22['__super']['call'](this), this['maskLayer'] = new _0x51555a(), this['popupEffec' + 'tHandler'] = new _0x1ef768(this, this['popupEffec' + 't']), this['closeEffec' + 'tHandler'] = new _0x1ef768(this, this['closeEffec' + 't']), this['mouseEnabl' + 'ed'] = this['maskLayer']['mouseEnabl' + 'ed'] = !0x0, this['zOrder'] = 0x3e8, _0x4d77ad['stage']['addChild'](this), _0x4d77ad['stage']['on']('resize', this, this['_onResize']), _0x5c4625['closeDialo' + 'gOnSide'] && this['maskLayer']['on']('click', this, this['_closeOnSi' + 'de']), this['_onResize'](null);
            }
            _0x3b4bb6(_0x480d22, 'laya.ui.Di' + 'alogManage' + 'r', _0x51555a);
            var _0x2ef684 = _0x480d22['prototype'];
            return _0x2ef684['_closeOnSi' + 'de'] = function () {
                var _0x33d306 = this['getChildAt'](this['numChildre' + 'n'] - 0x1);
                _0x33d306 instanceof laya['ui']['Dialog'] && _0x33d306['close']();
            }, _0x2ef684['setLockVie' + 'w'] = function (_0x4f4c94) {
                this['lockLayer'] || (this['lockLayer'] = new _0x560329(), this['lockLayer']['mouseEnabl' + 'ed'] = !0x0, this['lockLayer']['size'](_0x4d77ad['stage']['width'], _0x4d77ad['stage']['height'])), this['lockLayer']['removeChil' + 'dren'](), _0x4f4c94 && (_0x4f4c94['centerX'] = _0x4f4c94['centerY'] = 0x0, this['lockLayer']['addChild'](_0x4f4c94));
            }, _0x2ef684['_onResize'] = function (_0x7c4ad6) {
                var _0x431dd5 = this['maskLayer']['width'] = _0x4d77ad['stage']['width'], _0x1f3c72 = this['maskLayer']['height'] = _0x4d77ad['stage']['height'];
                this['lockLayer'] && this['lockLayer']['size'](_0x431dd5, _0x1f3c72), this['maskLayer']['graphics']['clear'](!0x0), this['maskLayer']['graphics']['drawRect'](0x0, 0x0, _0x431dd5, _0x1f3c72, _0x5c4625['popupBgCol' + 'or']), this['maskLayer']['alpha'] = _0x5c4625['popupBgAlp' + 'ha'];
                for (var _0x35f4e7 = this['numChildre' + 'n'] - 0x1; _0x35f4e7 > -0x1; _0x35f4e7--) {
                    var _0x199857 = this['getChildAt'](_0x35f4e7);
                    _0x199857['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x199857);
                }
            }, _0x2ef684['_centerDia' + 'log'] = function (_0x80e82d) {
                _0x80e82d['x'] = Math['round']((_0x4d77ad['stage']['width'] - _0x80e82d['width'] >> 0x1) + _0x80e82d['pivotX']), _0x80e82d['y'] = Math['round']((_0x4d77ad['stage']['height'] - _0x80e82d['height'] >> 0x1) + _0x80e82d['pivotY']);
            }, _0x2ef684['open'] = function (_0x1f1b2c, _0x4f9da9, _0xfbd4bf) {
                void 0x0 === _0x4f9da9 && (_0x4f9da9 = !0x1), void 0x0 === _0xfbd4bf && (_0xfbd4bf = !0x1), _0x4f9da9 && this['_closeAll'](), this['_clearDial' + 'ogEffect'](_0x1f1b2c), _0x1f1b2c['isPopupCen' + 'ter'] && this['_centerDia' + 'log'](_0x1f1b2c), this['addChild'](_0x1f1b2c), (_0x1f1b2c['isModal'] || this['_getBit'](0x20)) && _0x4d77ad['timer']['callLater'](this, this['_checkMask']), _0xfbd4bf && null != _0x1f1b2c['popupEffec' + 't'] ? _0x1f1b2c['popupEffec' + 't']['runWith'](_0x1f1b2c) : this['doOpen'](_0x1f1b2c), this['event']('open');
            }, _0x2ef684['_clearDial' + 'ogEffect'] = function (_0x4d678d) {
                _0x4d678d['_effectTwe' + 'en'] && (_0x5d7233['clear'](_0x4d678d['_effectTwe' + 'en']), _0x4d678d['_effectTwe' + 'en'] = null);
            }, _0x2ef684['doOpen'] = function (_0x3ca13e) {
                _0x3ca13e['onOpened'](_0x3ca13e['_param']);
            }, _0x2ef684['lock'] = function (_0x2838a0) {
                this['lockLayer'] && (_0x2838a0 ? this['addChild'](this['lockLayer']) : this['lockLayer']['removeSelf']());
            }, _0x2ef684['close'] = function (_0x101868) {
                this['_clearDial' + 'ogEffect'](_0x101868), _0x101868['isShowEffe' + 'ct'] && null != _0x101868['closeEffec' + 't'] ? _0x101868['closeEffec' + 't']['runWith']([_0x101868]) : this['doClose'](_0x101868), this['event']('close');
            }, _0x2ef684['doClose'] = function (_0x3a2c4d) {
                _0x3a2c4d['removeSelf'](), _0x3a2c4d['isModal'] && this['_checkMask'](), _0x3a2c4d['closeHandl' + 'er'] && _0x3a2c4d['closeHandl' + 'er']['runWith'](_0x3a2c4d['closeType']), _0x3a2c4d['onClosed'](_0x3a2c4d['closeType']), _0x3a2c4d['autoDestro' + 'yAtClosed'] && _0x3a2c4d['destroy']();
            }, _0x2ef684['closeAll'] = function () {
                this['_closeAll'](), this['event']('close');
            }, _0x2ef684['_closeAll'] = function () {
                for (var _0x5b6df8 = this['numChildre' + 'n'] - 0x1; _0x5b6df8 > -0x1; _0x5b6df8--) {
                    var _0x302310 = this['getChildAt'](_0x5b6df8);
                    _0x302310 && null != _0x302310['close'] && this['doClose'](_0x302310);
                }
            }, _0x2ef684['getDialogs' + 'ByGroup'] = function (_0x3db1cf) {
                for (var _0xde7471 = [], _0x1200a3 = this['numChildre' + 'n'] - 0x1; _0x1200a3 > -0x1; _0x1200a3--) {
                    var _0x2effe4 = this['getChildAt'](_0x1200a3);
                    _0x2effe4 && _0x2effe4['group'] === _0x3db1cf && _0xde7471['push'](_0x2effe4);
                }
                return _0xde7471;
            }, _0x2ef684['closeByGro' + 'up'] = function (_0x11a508) {
                for (var _0x18304a = [], _0x30a611 = this['numChildre' + 'n'] - 0x1; _0x30a611 > -0x1; _0x30a611--) {
                    var _0x1e6903 = this['getChildAt'](_0x30a611);
                    _0x1e6903 && _0x1e6903['group'] === _0x11a508 && (_0x1e6903['close'](), _0x18304a['push'](_0x1e6903));
                }
                return _0x18304a;
            }, _0x2ef684['_checkMask'] = function () {
                this['maskLayer']['removeSelf']();
                for (var _0x13ec4d = this['numChildre' + 'n'] - 0x1; _0x13ec4d > -0x1; _0x13ec4d--) {
                    var _0x27e388 = this['getChildAt'](_0x13ec4d);
                    if (_0x27e388 && _0x27e388['isModal'])
                        return void this['addChildAt'](this['maskLayer'], _0x13ec4d);
                }
            }, _0x480d22;
        }(), _0xc11a77 = function (_0x5e74ff) {
            function _0x34b327() {
                this['_watchMap'] = {}, this['_widget'] = null, this['_dataSourc' + 'e'] = null, this['_anchorX'] = NaN, this['_anchorY'] = NaN, this['_widget'] = _0x2f6b99['EMPTY'], _0x34b327['__super']['call'](this);
            }
            _0x3b4bb6(_0x34b327, 'laya.ui.Vi' + 'ew', _0x5e74ff);
            var _0x5d4c2b = _0x34b327['prototype'];
            return _0x5d4c2b['destroy'] = function (_0x1d4382) {
                void 0x0 === _0x1d4382 && (_0x1d4382 = !0x0), this['_watchMap'] = null, _0x5e74ff['prototype']['destroy']['call'](this, _0x1d4382);
            }, _0x5d4c2b['changeData'] = function (_0x3b3e6c) {
                var _0x38c2cd = this['_watchMap'][_0x3b3e6c];
                if (_0x38c2cd)
                    for (var _0x1f9533 = 0x0, _0x5989ec = _0x38c2cd['length']; _0x1f9533 < _0x5989ec; _0x1f9533++) {
                        _0x38c2cd[_0x1f9533]['exe'](this);
                    }
            }, _0x5d4c2b['_sizeChang' + 'ed'] = function () {
                isNaN(this['_anchorX']) || (this['pivotX'] = this['anchorX'] * this['width']), isNaN(this['_anchorY']) || (this['pivotY'] = this['anchorY'] * this['height']), this['event']('resize');
            }, _0x5d4c2b['_getWidget'] = function () {
                return this['_widget'] === _0x2f6b99['EMPTY'] && (this['_widget'] = this['addCompone' + 'nt'](_0x2f6b99)), this['_widget'];
            }, _0x5d4c2b['loadUI'] = function (_0x5bbbdd) {
                var _0x15098f = _0x34b327['uiMap'][_0x5bbbdd];
                _0x34b327['uiMap'] && this['createView'](_0x15098f);
            }, _0x3be031(0x0, _0x5d4c2b, 'anchorX', function () {
                return this['_anchorX'];
            }, function (_0x3d38fd) {
                this['_anchorX'] != _0x3d38fd && (this['_anchorX'] = _0x3d38fd, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3be031(0x0, _0x5d4c2b, 'centerX', function () {
                return this['_widget']['centerX'];
            }, function (_0x5091e8) {
                _0x5091e8 != this['_widget']['centerX'] && (this['_getWidget']()['centerX'] = _0x5091e8);
            }), _0x3be031(0x0, _0x5d4c2b, 'top', function () {
                return this['_widget']['top'];
            }, function (_0x28a16c) {
                _0x28a16c != this['_widget']['top'] && (this['_getWidget']()['top'] = _0x28a16c);
            }), _0x3be031(0x0, _0x5d4c2b, 'bottom', function () {
                return this['_widget']['bottom'];
            }, function (_0xc11b6c) {
                _0xc11b6c != this['_widget']['bottom'] && (this['_getWidget']()['bottom'] = _0xc11b6c);
            }), _0x3be031(0x0, _0x5d4c2b, 'dataSource', function () {
                return this['_dataSourc' + 'e'];
            }, function (_0x25170a) {
                this['_dataSourc' + 'e'] = _0x25170a;
                for (var _0x2bd62c in _0x25170a) {
                    var _0x25f35f = this['getChildBy' + 'Name'](_0x2bd62c);
                    _0x25f35f instanceof laya['ui']['UIComponen' + 't'] ? _0x25f35f['dataSource'] = _0x25170a[_0x2bd62c] : this['hasOwnProp' + 'erty'](_0x2bd62c) && 'function' != typeof this[_0x2bd62c] && (this[_0x2bd62c] = _0x25170a[_0x2bd62c]);
                }
            }), _0x3be031(0x0, _0x5d4c2b, 'left', function () {
                return this['_widget']['left'];
            }, function (_0x2845fc) {
                _0x2845fc != this['_widget']['left'] && (this['_getWidget']()['left'] = _0x2845fc);
            }), _0x3be031(0x0, _0x5d4c2b, 'right', function () {
                return this['_widget']['right'];
            }, function (_0x3e9e5a) {
                _0x3e9e5a != this['_widget']['right'] && (this['_getWidget']()['right'] = _0x3e9e5a);
            }), _0x3be031(0x0, _0x5d4c2b, 'anchorY', function () {
                return this['_anchorY'];
            }, function (_0x3d669d) {
                this['_anchorY'] != _0x3d669d && (this['_anchorY'] = _0x3d669d, this['callLater'](this['_sizeChang' + 'ed']));
            }), _0x3be031(0x0, _0x5d4c2b, 'centerY', function () {
                return this['_widget']['centerY'];
            }, function (_0x1cd254) {
                _0x1cd254 != this['_widget']['centerY'] && (this['_getWidget']()['centerY'] = _0x1cd254);
            }), _0x34b327['regCompone' + 'nt'] = function (_0x377a2c, _0x36c48d) {
                _0x116238['regClass'](_0x377a2c, _0x36c48d);
            }, _0x34b327['regViewRun' + 'time'] = function (_0x5d2c47, _0x444222) {
                _0x116238['regClass'](_0x5d2c47, _0x444222);
            }, _0x34b327['regUI'] = function (_0x283eb9, _0x2bb146) {
                _0x4d77ad['loader']['cacheRes'](_0x283eb9, _0x2bb146);
            }, _0x34b327['uiMap'] = {}, _0x34b327['__init$'] = function () {
                _0x116238['regShortCl' + 'assName']([
                    _0x1aec85,
                    _0x18019c,
                    _0xbdf92e,
                    _0x57156d,
                    _0x560329,
                    _0x90c8ae,
                    _0x18019c,
                    _0x3e035e,
                    _0x31387b,
                    _0x377382,
                    _0x14c206,
                    _0x51cb1c,
                    _0x30dd36,
                    _0x354d99,
                    _0x30df4a,
                    _0x475063,
                    _0x26d239,
                    _0x34829c,
                    _0x3276f9,
                    _0x387844,
                    _0x240e90,
                    _0x58c225,
                    _0x34df15,
                    _0x87eb14,
                    _0x34b327,
                    _0x111355,
                    _0xba4e3e,
                    _0x140e83,
                    _0x16726d,
                    _0x38aeb1,
                    _0x17fb7a,
                    _0x51555a,
                    _0x3de3fc,
                    _0x29ecac,
                    _0x2d3a71
                ]);
            }, _0x34b327;
        }(_0xf4066b), _0x240e90 = function (_0x140d2f) {
            function _0x399d29(_0x5d8612) {
                this['rollRatio'] = 0.97, this['changeHand' + 'ler'] = null, this['scaleBar'] = !0x0, this['autoHide'] = !0x1, this['elasticDis' + 'tance'] = 0x0, this['elasticBac' + 'kTime'] = 0x1f4, this['upButton'] = null, this['downButton'] = null, this['slider'] = null, this['_scrollSiz' + 'e'] = 0x1, this['_skin'] = null, this['_thumbPerc' + 'ent'] = 0x1, this['_target'] = null, this['_lastPoint'] = null, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_isElastic'] = !0x1, this['_value'] = NaN, this['_hide'] = !0x1, this['_clickOnly'] = !0x0, this['_offsets'] = null, this['isLockedFu' + 'n'] = null, this['triggerDow' + 'nDragLimit'] = null, this['triggerUpD' + 'ragLimit'] = null, _0x399d29['__super']['call'](this), this['_showButto' + 'ns'] = _0x5c4625['showButton' + 's'], this['_touchScro' + 'llEnable'] = _0x5c4625['touchScrol' + 'lEnable'], this['_mouseWhee' + 'lEnable'] = _0x5c4625['mouseWheel' + 'Enable'], this['skin'] = _0x5d8612, this['max'] = 0x1;
            }
            _0x3b4bb6(_0x399d29, 'laya.ui.Sc' + 'rollBar', _0x140d2f);
            var _0xa37a23 = _0x399d29['prototype'];
            return _0xa37a23['destroy'] = function (_0x56aca3) {
                void 0x0 === _0x56aca3 && (_0x56aca3 = !0x0), this['stopScroll'](), this['target'] = null, _0x140d2f['prototype']['destroy']['call'](this, _0x56aca3), this['upButton'] && this['upButton']['destroy'](_0x56aca3), this['downButton'] && this['downButton']['destroy'](_0x56aca3), this['slider'] && this['slider']['destroy'](_0x56aca3), this['upButton'] = this['downButton'] = null, this['slider'] = null, this['changeHand' + 'ler'] = null, this['_offsets'] = null;
            }, _0xa37a23['createChil' + 'dren'] = function () {
                this['addChild'](this['slider'] = new _0x58c225()), this['addChild'](this['upButton'] = new _0x18019c()), this['addChild'](this['downButton'] = new _0x18019c());
            }, _0xa37a23['initialize'] = function () {
                this['slider']['showLabel'] = !0x1, this['slider']['tick'] = 0x0, this['slider']['on']('change', this, this['onSliderCh' + 'ange']), this['slider']['setSlider'](0x0, 0x0, 0x0), this['upButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']), this['downButton']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0xa37a23['onSliderCh' + 'ange'] = function () {
                this['_value'] != this['slider']['value'] && (this['value'] = this['slider']['value']);
            }, _0xa37a23['onButtonMo' + 'useDown'] = function (_0x7d5640) {
                var _0x2f9266 = _0x7d5640['currentTar' + 'get'] === this['upButton'];
                this['slide'](_0x2f9266), _0x4d77ad['timer']['once'](_0x55fcb['scrollBarD' + 'elayTime'], this, this['startLoop'], [_0x2f9266]), _0x4d77ad['stage']['once']('mouseup', this, this['onStageMou' + 'seUp']);
            }, _0xa37a23['startLoop'] = function (_0x40f1b3) {
                _0x4d77ad['timer']['frameLoop'](0x1, this, this['slide'], [_0x40f1b3]);
            }, _0xa37a23['slide'] = function (_0x53879d) {
                _0x53879d ? this['value'] -= this['_scrollSiz' + 'e'] : this['value'] += this['_scrollSiz' + 'e'];
            }, _0xa37a23['onStageMou' + 'seUp'] = function (_0x3377b7) {
                _0x4d77ad['timer']['clear'](this, this['startLoop']), _0x4d77ad['timer']['clear'](this, this['slide']);
            }, _0xa37a23['_skinLoade' + 'd'] = function () {
                this['slider']['skin'] = this['_skin'], this['callLater'](this['changeScro' + 'llBar']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0xa37a23['changeScro' + 'llBar'] = function () {
                this['upButton']['visible'] = this['_showButto' + 'ns'], this['downButton']['visible'] = this['_showButto' + 'ns'], this['_showButto' + 'ns'] && (this['upButton']['skin'] = this['_skin']['replace']('.png', '$up.png'), this['downButton']['skin'] = this['_skin']['replace']('.png', '$down.png')), this['slider']['isVertical'] ? this['slider']['y'] = this['_showButto' + 'ns'] ? this['upButton']['height'] : 0x0 : this['slider']['x'] = this['_showButto' + 'ns'] ? this['upButton']['width'] : 0x0, this['resetPosit' + 'ions'](), this['repaint']();
            }, _0xa37a23['_sizeChang' + 'ed'] = function () {
                _0x140d2f['prototype']['_sizeChang' + 'ed']['call'](this), this['repaint'](), this['resetPosit' + 'ions'](), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['value']);
            }, _0xa37a23['resetPosit' + 'ions'] = function () {
                this['slider']['isVertical'] ? this['slider']['height'] = this['height'] - (this['_showButto' + 'ns'] ? this['upButton']['height'] + this['downButton']['height'] : 0x0) : this['slider']['width'] = this['width'] - (this['_showButto' + 'ns'] ? this['upButton']['width'] + this['downButton']['width'] : 0x0), this['resetButto' + 'nPosition']();
            }, _0xa37a23['resetButto' + 'nPosition'] = function () {
                this['slider']['isVertical'] ? this['downButton']['y'] = this['slider']['_y'] + this['slider']['height'] : this['downButton']['x'] = this['slider']['_x'] + this['slider']['width'];
            }, _0xa37a23['measureWid' + 'th'] = function () {
                return this['slider']['isVertical'] ? this['slider']['width'] : 0x64;
            }, _0xa37a23['measureHei' + 'ght'] = function () {
                return this['slider']['isVertical'] ? 0x64 : this['slider']['height'];
            }, _0xa37a23['setScroll'] = function (_0x15c94f, _0x592a43, _0x114849) {
                this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), this['slider']['setSlider'](_0x15c94f, _0x592a43, _0x114849), this['slider']['bar']['visible'] = _0x592a43 > 0x0, !this['_hide'] && this['autoHide'] && (this['visible'] = !0x1);
            }, _0xa37a23['onTargetMo' + 'useWheel'] = function (_0x252a91) {
                this['value'] -= _0x252a91['delta'] * this['_scrollSiz' + 'e'], this['target'] = this['_target'];
            }, _0xa37a23['onTargetMo' + 'useDown'] = function (_0x2660e8) {
                this['isLockedFu' + 'n'] && !this['isLockedFu' + 'n'](_0x2660e8) || (this['event']('end'), this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x53b25d()), this['_lastPoint']['setTo'](_0x4d77ad['stage']['mouseX'], _0x4d77ad['stage']['mouseY']), _0x4d77ad['timer']['clear'](this, this['tweenMove']), _0x5d7233['clearTween'](this), _0x4d77ad['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x4d77ad['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x4d77ad['timer']['frameLoop'](0x1, this, this['loop']));
            }, _0xa37a23['startDragF' + 'orce'] = function () {
                this['_clickOnly'] = !0x0, this['_lastOffse' + 't'] = 0x0, this['_checkElas' + 'tic'] = !0x1, this['_lastPoint'] || (this['_lastPoint'] = new _0x53b25d()), this['_lastPoint']['setTo'](_0x4d77ad['stage']['mouseX'], _0x4d77ad['stage']['mouseY']), _0x4d77ad['timer']['clear'](this, this['tweenMove']), _0x5d7233['clearTween'](this), _0x4d77ad['stage']['once']('mouseup', this, this['onStageMou' + 'seUp2']), _0x4d77ad['stage']['once']('mouseout', this, this['onStageMou' + 'seUp2']), _0x4d77ad['timer']['frameLoop'](0x1, this, this['loop']);
            }, _0xa37a23['cancelDrag' + 'Op'] = function () {
                _0x4d77ad['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x4d77ad['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x4d77ad['timer']['clear'](this, this['tweenMove']), _0x4d77ad['timer']['clear'](this, this['loop']), this['_target']['mouseEnabl' + 'ed'] = !0x0;
            }, _0xa37a23['checkTrigg' + 'ers'] = function (_0x4cc187) {
                return void 0x0 === _0x4cc187 && (_0x4cc187 = !0x1), this['value'] >= 0x0 && this['value'] - this['_lastOffse' + 't'] <= 0x0 && this['triggerDow' + 'nDragLimit'] && this['triggerDow' + 'nDragLimit'](_0x4cc187) ? (this['cancelDrag' + 'Op'](), this['value'] = 0x0, !0x0) : !!(this['value'] <= this['max'] && this['value'] - this['_lastOffse' + 't'] >= this['max'] && this['triggerUpD' + 'ragLimit'] && this['triggerUpD' + 'ragLimit'](_0x4cc187)) && (this['cancelDrag' + 'Op'](), this['value'] = this['max'], !0x0);
            }, _0xa37a23['startTween' + 'MoveForce'] = function (_0x53460d) {
                this['_lastOffse' + 't'] = _0x53460d, _0x4d77ad['timer']['frameLoop'](0x1, this, this['tweenMove'], [0xc8]);
            }, _0xa37a23['loop'] = function () {
                var _0x3dc9f4 = _0x4d77ad['stage']['mouseY'], _0x212232 = _0x4d77ad['stage']['mouseX'];
                if (this['_lastOffse' + 't'] = this['isVertical'] ? _0x3dc9f4 - this['_lastPoint']['y'] : _0x212232 - this['_lastPoint']['x'], this['_clickOnly']) {
                    if (!(Math['abs'](this['_lastOffse' + 't'] * (this['isVertical'] ? _0x4d77ad['stage']['_canvasTra' + 'nsform']['getScaleY']() : _0x4d77ad['stage']['_canvasTra' + 'nsform']['getScaleX']())) > 0x1))
                        return;
                    if (this['_clickOnly'] = !0x1, this['checkTrigg' + 'ers']())
                        return;
                    this['_offsets'] || (this['_offsets'] = []), this['_offsets']['length'] = 0x0, this['_target']['mouseEnabl' + 'ed'] = !0x1, !this['hide'] && this['autoHide'] && (this['alpha'] = 0x1, this['visible'] = !0x0), this['event']('start');
                } else {
                    if (this['checkTrigg' + 'ers']())
                        return;
                }
                this['_offsets']['push'](this['_lastOffse' + 't']), this['_lastPoint']['x'] = _0x212232, this['_lastPoint']['y'] = _0x3dc9f4, 0x0 !== this['_lastOffse' + 't'] && (this['_checkElas' + 'tic'] || (this['elasticDis' + 'tance'] > 0x0 ? this['_checkElas' + 'tic'] || 0x0 == this['_lastOffse' + 't'] || (this['_lastOffse' + 't'] > 0x0 && this['_value'] <= this['min'] || this['_lastOffse' + 't'] < 0x0 && this['_value'] >= this['max'] ? (this['_isElastic'] = !0x0, this['_checkElas' + 'tic'] = !0x0) : this['_isElastic'] = !0x1) : this['_checkElas' + 'tic'] = !0x0), this['_isElastic'] ? this['_value'] <= this['min'] ? this['_lastOffse' + 't'] > 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['min'] - this['_value']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] >= this['min'] && (this['_checkElas' + 'tic'] = !0x1)) : this['_value'] >= this['max'] && (this['_lastOffse' + 't'] < 0x0 ? this['value'] -= this['_lastOffse' + 't'] * Math['max'](0x0, 0x1 - (this['_value'] - this['max']) / this['elasticDis' + 'tance']) : (this['value'] -= 0.5 * this['_lastOffse' + 't'], this['_value'] <= this['max'] && (this['_checkElas' + 'tic'] = !0x1))) : this['value'] -= this['_lastOffse' + 't']);
            }, _0xa37a23['onStageMou' + 'seUp2'] = function (_0x19de97) {
                if (_0x4d77ad['stage']['off']('mouseup', this, this['onStageMou' + 'seUp2']), _0x4d77ad['stage']['off']('mouseout', this, this['onStageMou' + 'seUp2']), _0x4d77ad['timer']['clear'](this, this['loop']), !(this['_clickOnly'] && this['_value'] >= this['min'] && this['_value'] <= this['max'])) {
                    if (this['_target']['mouseEnabl' + 'ed'] = !0x0, this['_isElastic'])
                        this['_value'] < this['min'] ? _0x5d7233['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x108523['sineOut'], _0x1ef768['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] && _0x5d7233['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x108523['sineOut'], _0x1ef768['create'](this, this['elasticOve' + 'r']));
                    else {
                        if (!this['_offsets'])
                            return;
                        this['_offsets']['length'] < 0x1 && (this['_offsets'][0x0] = this['isVertical'] ? _0x4d77ad['stage']['mouseY'] - this['_lastPoint']['y'] : _0x4d77ad['stage']['mouseX'] - this['_lastPoint']['x']);
                        for (var _0x209ec9 = 0x0, _0x31056e = Math['min'](this['_offsets']['length'], 0x3), _0x3aa682 = 0x0; _0x3aa682 < _0x31056e; _0x3aa682++)
                            _0x209ec9 += this['_offsets'][this['_offsets']['length'] - 0x1 - _0x3aa682];
                        if (this['_lastOffse' + 't'] = _0x209ec9 / _0x31056e, (_0x209ec9 = Math['abs'](this['_lastOffse' + 't'])) < 0x2)
                            return void this['event']('end');
                        _0x209ec9 > 0xfa && (this['_lastOffse' + 't'] = this['_lastOffse' + 't'] > 0x0 ? 0xfa : -0xfa);
                        var _0x5ad89a = Math['round'](Math['abs'](this['elasticDis' + 'tance'] * (this['_lastOffse' + 't'] / 0x96)));
                        _0x4d77ad['timer']['frameLoop'](0x1, this, this['tweenMove'], [_0x5ad89a]);
                    }
                }
            }, _0xa37a23['elasticOve' + 'r'] = function () {
                this['_isElastic'] = !0x1, !this['hide'] && this['autoHide'] && _0x5d7233['to'](this, { 'alpha': 0x0 }, 0x1f4), this['event']('end');
            }, _0xa37a23['tweenMove'] = function (_0x43805d) {
                if (this['_lastOffse' + 't'] *= this['rollRatio'], !this['checkTrigg' + 'ers'](!0x0)) {
                    var _0x5ad312 = NaN;
                    if (_0x43805d > 0x0 && (this['_lastOffse' + 't'] > 0x0 && this['value'] <= this['min'] ? (this['_isElastic'] = !0x0, _0x5ad312 = 0.5 * -(this['min'] - _0x43805d - this['value']), this['_lastOffse' + 't'] > _0x5ad312 && (this['_lastOffse' + 't'] = _0x5ad312)) : this['_lastOffse' + 't'] < 0x0 && this['value'] >= this['max'] && (this['_isElastic'] = !0x0, _0x5ad312 = 0.5 * -(this['max'] + _0x43805d - this['value']), this['_lastOffse' + 't'] < _0x5ad312 && (this['_lastOffse' + 't'] = _0x5ad312))), this['value'] -= this['_lastOffse' + 't'], Math['abs'](this['_lastOffse' + 't']) < 0.1) {
                        if (_0x4d77ad['timer']['clear'](this, this['tweenMove']), this['_isElastic'])
                            return void (this['_value'] < this['min'] ? _0x5d7233['to'](this, { 'value': this['min'] }, this['elasticBac' + 'kTime'], _0x108523['sineOut'], _0x1ef768['create'](this, this['elasticOve' + 'r'])) : this['_value'] > this['max'] ? _0x5d7233['to'](this, { 'value': this['max'] }, this['elasticBac' + 'kTime'], _0x108523['sineOut'], _0x1ef768['create'](this, this['elasticOve' + 'r'])) : this['elasticOve' + 'r']());
                        this['event']('end'), !this['hide'] && this['autoHide'] && _0x5d7233['to'](this, { 'alpha': 0x0 }, 0x1f4);
                    }
                }
            }, _0xa37a23['stopScroll'] = function () {
                this['onStageMou' + 'seUp2'](null), _0x4d77ad['timer']['clear'](this, this['tweenMove']), _0x5d7233['clearTween'](this);
            }, _0x3be031(0x0, _0xa37a23, 'thumbPerce' + 'nt', function () {
                return this['_thumbPerc' + 'ent'];
            }, function (_0x52e69c) {
                this['runCallLat' + 'er'](this['changeScro' + 'llBar']), this['runCallLat' + 'er'](this['_sizeChang' + 'ed']), _0x52e69c = _0x52e69c >= 0x1 ? 0.99 : _0x52e69c, this['_thumbPerc' + 'ent'] = _0x52e69c, this['scaleBar'] && (this['slider']['isVertical'] ? this['slider']['bar']['height'] = Math['max'](this['slider']['height'] * _0x52e69c, _0x55fcb['scrollBarM' + 'inNum']) : this['slider']['bar']['width'] = Math['max'](this['slider']['width'] * _0x52e69c, _0x55fcb['scrollBarM' + 'inNum']));
            }), _0x3be031(0x0, _0xa37a23, 'dataSource', _0x140d2f['prototype']['_$get_data' + 'Source'], function (_0x3502cf) {
                this['_dataSourc' + 'e'] = _0x3502cf, 'number' == typeof _0x3502cf || 'string' == typeof _0x3502cf ? this['value'] = Number(_0x3502cf) : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x3502cf);
            }), _0x3be031(0x0, _0xa37a23, 'skin', function () {
                return this['_skin'];
            }, function (_0x3f2189) {
                '\x20' != _0x3f2189 && this['_skin'] != _0x3f2189 && (this['_skin'] = _0x3f2189, this['_skin'] && !_0x27b7ec['getRes'](this['_skin']) ? _0x4d77ad['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$up.png'),
                    this['_skin']['replace']('.png', '$down.png'),
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x1ef768['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0xa37a23, 'max', function () {
                return this['slider']['max'];
            }, function (_0x255297) {
                this['slider']['max'] = _0x255297;
            }), _0x3be031(0x0, _0xa37a23, 'min', function () {
                return this['slider']['min'];
            }, function (_0x4c1021) {
                this['slider']['min'] = _0x4c1021;
            }), _0x3be031(0x0, _0xa37a23, 'value', function () {
                return this['_value'];
            }, function (_0x3c8c6d) {
                _0x3c8c6d !== this['_value'] && (this['_value'] = _0x3c8c6d, this['_isElastic'] || (this['slider']['_value'] != _0x3c8c6d && (this['slider']['_value'] = _0x3c8c6d, this['slider']['changeValu' + 'e']()), this['_value'] = this['slider']['_value']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']));
            }), _0x3be031(0x0, _0xa37a23, 'isVertical', function () {
                return this['slider']['isVertical'];
            }, function (_0x4ccc44) {
                this['slider']['isVertical'] = _0x4ccc44;
            }), _0x3be031(0x0, _0xa37a23, 'sizeGrid', function () {
                return this['slider']['sizeGrid'];
            }, function (_0x529dcf) {
                this['slider']['sizeGrid'] = _0x529dcf;
            }), _0x3be031(0x0, _0xa37a23, 'scrollSize', function () {
                return this['_scrollSiz' + 'e'];
            }, function (_0x4892c5) {
                this['_scrollSiz' + 'e'] = _0x4892c5;
            }), _0x3be031(0x0, _0xa37a23, 'target', function () {
                return this['_target'];
            }, function (_0x13b69e) {
                this['_target'] && (this['_target']['off']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_target']['off']('mousedown', this, this['onTargetMo' + 'useDown'])), this['_target'] = _0x13b69e, _0x13b69e && (this['_mouseWhee' + 'lEnable'] && this['_target']['on']('mousewheel', this, this['onTargetMo' + 'useWheel']), this['_touchScro' + 'llEnable'] && this['_target']['on']('mousedown', this, this['onTargetMo' + 'useDown']));
            }), _0x3be031(0x0, _0xa37a23, 'hide', function () {
                return this['_hide'];
            }, function (_0x1dea1a) {
                this['_hide'] = _0x1dea1a, this['visible'] = !_0x1dea1a;
            }), _0x3be031(0x0, _0xa37a23, 'showButton' + 's', function () {
                return this['_showButto' + 'ns'];
            }, function (_0x225900) {
                this['_showButto' + 'ns'] = _0x225900, this['callLater'](this['changeScro' + 'llBar']);
            }), _0x3be031(0x0, _0xa37a23, 'touchScrol' + 'lEnable', function () {
                return this['_touchScro' + 'llEnable'];
            }, function (_0x574a61) {
                this['_touchScro' + 'llEnable'] = _0x574a61, this['target'] = this['_target'];
            }), _0x3be031(0x0, _0xa37a23, 'mouseWheel' + 'Enable', function () {
                return this['_mouseWhee' + 'lEnable'];
            }, function (_0x37d8d0) {
                this['_mouseWhee' + 'lEnable'] = _0x37d8d0, this['target'] = this['_target'];
            }), _0x3be031(0x0, _0xa37a23, 'lastOffset', function () {
                return this['_lastOffse' + 't'];
            }), _0x3be031(0x0, _0xa37a23, 'tick', function () {
                return this['slider']['tick'];
            }, function (_0x2bb5d4) {
                this['slider']['tick'] = _0x2bb5d4;
            }), _0x399d29;
        }(_0x14c206), _0x560329 = function (_0x5337f5) {
            function _0x366b23() {
                this['_bgColor'] = null, _0x366b23['__super']['call'](this);
            }
            _0x3b4bb6(_0x366b23, 'laya.ui.Bo' + 'x', _0x5337f5);
            var _0x295078 = _0x366b23['prototype'];
            return _0x4d77ad['imps'](_0x295078, { 'laya.ui.IBox': !0x0 }), _0x295078['_onResize'] = function (_0x319ba8) {
                this['graphics']['clear'](), this['graphics']['drawRect'](0x0, 0x0, this['width'], this['height'], this['_bgColor']);
            }, _0x3be031(0x0, _0x295078, 'dataSource', _0x5337f5['prototype']['_$get_data' + 'Source'], function (_0x9c4e2) {
                this['_dataSourc' + 'e'] = _0x9c4e2;
                for (var _0x34c917 in _0x9c4e2) {
                    var _0x59aefd = this['getChildBy' + 'Name'](_0x34c917);
                    _0x59aefd ? _0x59aefd['dataSource'] = _0x9c4e2[_0x34c917] : this['hasOwnProp' + 'erty'](_0x34c917) && 'function' != typeof this[_0x34c917] && (this[_0x34c917] = _0x9c4e2[_0x34c917]);
                }
            }), _0x3be031(0x0, _0x295078, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x803fa3) {
                this['_bgColor'] = _0x803fa3, _0x803fa3 ? (this['_onResize'](null), this['on']('resize', this, this['_onResize'])) : (this['graphics']['clear'](), this['off']('resize', this, this['_onResize']));
            }), _0x366b23;
        }(_0x14c206), _0x354d99 = function (_0x52fbb0) {
            function _0x2c1505(_0x4af740) {
                this['_bitmap'] = null, this['_skin'] = null, this['_group'] = null, _0x2c1505['__super']['call'](this), this['skin'] = _0x4af740;
            }
            _0x3b4bb6(_0x2c1505, 'laya.ui.Im' + 'age', _0x52fbb0);
            var _0xd90e = _0x2c1505['prototype'];
            return _0xd90e['destroy'] = function (_0x30d2a3) {
                void 0x0 === _0x30d2a3 && (_0x30d2a3 = !0x0), _0x52fbb0['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null;
            }, _0xd90e['dispose'] = function () {
                this['destroy'](!0x0), _0x4d77ad['loader']['clearRes'](this['_skin']);
            }, _0xd90e['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x1402c1(), this['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0xd90e['setSource'] = function (_0x5b1525, _0x5acb09) {
                _0x5b1525 === this['_skin'] && _0x5acb09 && (this['source'] = _0x5acb09, this['onCompResi' + 'ze']());
            }, _0xd90e['measureWid' + 'th'] = function () {
                return this['_bitmap']['width'];
            }, _0xd90e['measureHei' + 'ght'] = function () {
                return this['_bitmap']['height'];
            }, _0x3be031(0x0, _0xd90e, 'dataSource', _0x52fbb0['prototype']['_$get_data' + 'Source'], function (_0x3d2453) {
                this['_dataSourc' + 'e'] = _0x3d2453, 'string' == typeof _0x3d2453 ? this['skin'] = _0x3d2453 : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x3d2453);
            }), _0x3be031(0x0, _0xd90e, 'source', function () {
                return this['_bitmap']['source'];
            }, function (_0xdcb0eb) {
                this['_bitmap'] && (this['_bitmap']['source'] = _0xdcb0eb, this['event']('loaded'), this['repaint']());
            }), _0x3be031(0x0, _0xd90e, 'skin', function () {
                return this['_skin'];
            }, function (_0x2ddd77) {
                if (this['_skin'] != _0x2ddd77) {
                    if (this['_skin'] = _0x2ddd77, _0x2ddd77) {
                        var _0x26297e = _0x27b7ec['getRes'](_0x2ddd77);
                        _0x26297e ? (this['source'] = _0x26297e, this['onCompResi' + 'ze']()) : _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['setSource'], [this['_skin']]), null, 'image', 0x1, !0x0, this['_group']);
                    } else
                        this['source'] = null;
                }
            }), _0x3be031(0x0, _0xd90e, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x467d8d) {
                this['_bitmap']['sizeGrid'] = _0x4b493c['fillArray'](_0x55fcb['defaultSiz' + 'eGrid'], _0x467d8d, Number);
            }), _0x3be031(0x0, _0xd90e, 'group', function () {
                return this['_group'];
            }, function (_0x4c0772) {
                _0x4c0772 && this['_skin'] && _0x27b7ec['setGroup'](this['_skin'], _0x4c0772), this['_group'] = _0x4c0772;
            }), _0x3be031(0x0, _0xd90e, 'width', _0x52fbb0['prototype']['_$get_widt' + 'h'], function (_0x4bc495) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0x4bc495), this['_bitmap']['width'] = 0x0 == _0x4bc495 ? 1e-7 : _0x4bc495;
            }), _0x3be031(0x0, _0xd90e, 'height', _0x52fbb0['prototype']['_$get_heig' + 'ht'], function (_0x18075b) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x18075b), this['_bitmap']['height'] = 0x0 == _0x18075b ? 1e-7 : _0x18075b;
            }), _0x2c1505;
        }(_0x14c206), _0x58c225 = function (_0x38f7fc) {
            function _0x5f27cb(_0x5ef466) {
                this['changeHand' + 'ler'] = null, this['isVertical'] = !0x0, this['showLabel'] = !0x0, this['_allowClic' + 'kBack'] = !0x1, this['_max'] = 0x64, this['_min'] = 0x0, this['_tick'] = 0x1, this['_value'] = 0x0, this['_skin'] = null, this['_bg'] = null, this['_progress'] = null, this['_bar'] = null, this['_tx'] = NaN, this['_ty'] = NaN, this['_maxMove'] = NaN, this['_globalSac' + 'le'] = null, _0x5f27cb['__super']['call'](this), this['skin'] = _0x5ef466;
            }
            _0x3b4bb6(_0x5f27cb, 'laya.ui.Sl' + 'ider', _0x38f7fc);
            var _0xc452 = _0x5f27cb['prototype'];
            return _0xc452['destroy'] = function (_0x2a43e8) {
                void 0x0 === _0x2a43e8 && (_0x2a43e8 = !0x0), _0x38f7fc['prototype']['destroy']['call'](this, _0x2a43e8), this['_bg'] && this['_bg']['destroy'](_0x2a43e8), this['_bar'] && this['_bar']['destroy'](_0x2a43e8), this['_progress'] && this['_progress']['destroy'](_0x2a43e8), this['_bg'] = null, this['_bar'] = null, this['_progress'] = null, this['changeHand' + 'ler'] = null;
            }, _0xc452['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x354d99()), this['addChild'](this['_bar'] = new _0x18019c());
            }, _0xc452['initialize'] = function () {
                this['_bar']['on']('mousedown', this, this['onBarMouse' + 'Down']), this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = '4,4,4,4,0', this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']), this['allowClick' + 'Back'] = !0x0;
            }, _0xc452['onBarMouse' + 'Down'] = function (_0x5f0ffa) {
                this['_globalSac' + 'le'] || (this['_globalSac' + 'le'] = new _0x53b25d()), this['_globalSac' + 'le']['setTo'](this['globalScal' + 'eX'] || 0.01, this['globalScal' + 'eY'] || 0.01), this['_maxMove'] = this['isVertical'] ? this['height'] - this['_bar']['height'] : this['width'] - this['_bar']['width'], this['_tx'] = _0x4d77ad['stage']['mouseX'], this['_ty'] = _0x4d77ad['stage']['mouseY'], _0x4d77ad['stage']['on']('mousemove', this, this['mouseMove']), _0x4d77ad['stage']['once']('mouseup', this, this['mouseUp']), _0x4d77ad['stage']['once']('mouseout', this, this['mouseUp']), this['showValueT' + 'ext']();
            }, _0xc452['showValueT' + 'ext'] = function () {
                if (this['showLabel']) {
                    var _0x3047d4 = laya['ui']['Slider']['label'];
                    this['addChild'](_0x3047d4), _0x3047d4['textField']['changeText'](this['_value'] + ''), this['isVertical'] ? (_0x3047d4['x'] = this['_bar']['_x'] + 0x14, _0x3047d4['y'] = 0.5 * (this['_bar']['height'] - _0x3047d4['height']) + this['_bar']['_y']) : (_0x3047d4['y'] = this['_bar']['_y'] - 0x14, _0x3047d4['x'] = 0.5 * (this['_bar']['width'] - _0x3047d4['width']) + this['_bar']['_x']);
                }
            }, _0xc452['hideValueT' + 'ext'] = function () {
                laya['ui']['Slider']['label'] && laya['ui']['Slider']['label']['removeSelf']();
            }, _0xc452['mouseUp'] = function (_0x93c669) {
                _0x4d77ad['stage']['off']('mousemove', this, this['mouseMove']), _0x4d77ad['stage']['off']('mouseup', this, this['mouseUp']), _0x4d77ad['stage']['off']('mouseout', this, this['mouseUp']), this['sendChange' + 'Event']('changed'), this['hideValueT' + 'ext']();
            }, _0xc452['mouseMove'] = function (_0x7587a3) {
                var _0x573097 = this['_value'];
                if (this['isVertical'] ? (this['_bar']['y'] += (_0x4d77ad['stage']['mouseY'] - this['_ty']) / this['_globalSac' + 'le']['y'], this['_bar']['_y'] > this['_maxMove'] ? this['_bar']['y'] = this['_maxMove'] : this['_bar']['_y'] < 0x0 && (this['_bar']['y'] = 0x0), this['_value'] = this['_bar']['_y'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] += (_0x4d77ad['stage']['mouseX'] - this['_tx']) / this['_globalSac' + 'le']['x'], this['_bar']['_x'] > this['_maxMove'] ? this['_bar']['x'] = this['_maxMove'] : this['_bar']['_x'] < 0x0 && (this['_bar']['x'] = 0x0), this['_value'] = this['_bar']['_x'] / this['_maxMove'] * (this['_max'] - this['_min']) + this['_min'], this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width'])), this['_tx'] = _0x4d77ad['stage']['mouseX'], this['_ty'] = _0x4d77ad['stage']['mouseY'], 0x0 != this['_tick']) {
                    var _0x463d63 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x463d63) / _0x463d63;
                }
                this['_value'] != _0x573097 && this['sendChange' + 'Event'](), this['showValueT' + 'ext']();
            }, _0xc452['sendChange' + 'Event'] = function (_0x1f08d4) {
                void 0x0 === _0x1f08d4 && (_0x1f08d4 = 'change'), this['event'](_0x1f08d4), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_value']);
            }, _0xc452['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png');
                var _0x27b5fc = this['_skin']['replace']('.png', '$progress.' + 'png');
                _0x27b7ec['getRes'](_0x27b5fc) && (this['_progress'] || (this['addChild'](this['_progress'] = new _0x354d99()), this['_progress']['sizeGrid'] = this['_bar']['sizeGrid'], this['setChildIn' + 'dex'](this['_progress'], 0x1)), this['_progress']['skin'] = _0x27b5fc), this['setBarPoin' + 't'](), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0xc452['setBarPoin' + 't'] = function () {
                this['isVertical'] ? this['_bar']['x'] = Math['round'](0.5 * (this['_bg']['width'] - this['_bar']['width'])) : this['_bar']['y'] = Math['round'](0.5 * (this['_bg']['height'] - this['_bar']['height']));
            }, _0xc452['measureWid' + 'th'] = function () {
                return Math['max'](this['_bg']['width'], this['_bar']['width']);
            }, _0xc452['measureHei' + 'ght'] = function () {
                return Math['max'](this['_bg']['height'], this['_bar']['height']);
            }, _0xc452['_sizeChang' + 'ed'] = function () {
                _0x38f7fc['prototype']['_sizeChang' + 'ed']['call'](this), this['isVertical'] ? this['_bg']['height'] = this['height'] : this['_bg']['width'] = this['width'], this['setBarPoin' + 't'](), this['changeValu' + 'e']();
            }, _0xc452['setSlider'] = function (_0x149485, _0x45ace8, _0xd5e195) {
                this['_value'] = -0x1, this['_min'] = _0x149485, this['_max'] = _0x45ace8 > _0x149485 ? _0x45ace8 : _0x149485, this['value'] = _0xd5e195 < _0x149485 ? _0x149485 : _0xd5e195 > _0x45ace8 ? _0x45ace8 : _0xd5e195;
            }, _0xc452['changeValu' + 'e'] = function () {
                if (0x0 != this['tick']) {
                    var _0x193121 = Math['pow'](0xa, (this['_tick'] + '')['length'] - 0x1);
                    this['_value'] = Math['round'](Math['round'](this['_value'] / this['_tick']) * this['_tick'] * _0x193121) / _0x193121;
                }
                this['_value'] = this['_value'] > this['_max'] ? this['_max'] : this['_value'] < this['_min'] ? this['_min'] : this['_value'];
                var _0x34ecf2 = this['_max'] - this['_min'];
                0x0 === _0x34ecf2 && (_0x34ecf2 = 0x1), this['isVertical'] ? (this['_bar']['y'] = (this['_value'] - this['_min']) / _0x34ecf2 * (this['height'] - this['_bar']['height']), this['_progress'] && (this['_progress']['height'] = this['_bar']['_y'] + 0.5 * this['_bar']['height'])) : (this['_bar']['x'] = (this['_value'] - this['_min']) / _0x34ecf2 * (this['width'] - this['_bar']['width']), this['_progress'] && (this['_progress']['width'] = this['_bar']['_x'] + 0.5 * this['_bar']['width']));
            }, _0xc452['onBgMouseD' + 'own'] = function (_0x4275ce) {
                var _0x30b253 = this['_bg']['getMousePo' + 'int']();
                this['isVertical'] ? this['value'] = _0x30b253['y'] / (this['height'] - this['_bar']['height']) * (this['_max'] - this['_min']) + this['_min'] : this['value'] = _0x30b253['x'] / (this['width'] - this['_bar']['width']) * (this['_max'] - this['_min']) + this['_min'];
            }, _0x3be031(0x0, _0xc452, 'dataSource', _0x38f7fc['prototype']['_$get_data' + 'Source'], function (_0x176ee6) {
                this['_dataSourc' + 'e'] = _0x176ee6, 'number' == typeof _0x176ee6 || 'string' == typeof _0x176ee6 ? this['value'] = Number(_0x176ee6) : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x176ee6);
            }), _0x3be031(0x0, _0xc452, 'skin', function () {
                return this['_skin'];
            }, function (_0x508067) {
                this['_skin'] != _0x508067 && (this['_skin'] = _0x508067, this['_skin'] && !_0x27b7ec['getRes'](this['_skin']) ? _0x4d77ad['loader']['load']([
                    this['_skin'],
                    this['_skin']['replace']('.png', '$bar.png')
                ], _0x1ef768['create'](this, this['_skinLoade' + 'd'])) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0xc452, 'tick', function () {
                return this['_tick'];
            }, function (_0x2c790d) {
                this['_tick'] != _0x2c790d && (this['_tick'] = _0x2c790d, this['callLater'](this['changeValu' + 'e']));
            }), _0x3be031(0x0, _0xc452, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x1b416a) {
                this['_bg']['sizeGrid'] = _0x1b416a, this['_bar']['sizeGrid'] = _0x1b416a, this['_progress'] && (this['_progress']['sizeGrid'] = this['_bar']['sizeGrid']);
            }), _0x3be031(0x0, _0xc452, 'allowClick' + 'Back', function () {
                return this['_allowClic' + 'kBack'];
            }, function (_0x485bd6) {
                this['_allowClic' + 'kBack'] != _0x485bd6 && (this['_allowClic' + 'kBack'] = _0x485bd6, _0x485bd6 ? this['_bg']['on']('mousedown', this, this['onBgMouseD' + 'own']) : this['_bg']['off']('mousedown', this, this['onBgMouseD' + 'own']));
            }), _0x3be031(0x0, _0xc452, 'max', function () {
                return this['_max'];
            }, function (_0x1d5cf8) {
                this['_max'] != _0x1d5cf8 && (this['_max'] = _0x1d5cf8, this['callLater'](this['changeValu' + 'e']));
            }), _0x3be031(0x0, _0xc452, 'min', function () {
                return this['_min'];
            }, function (_0x505c6f) {
                this['_min'] != _0x505c6f && (this['_min'] = _0x505c6f, this['callLater'](this['changeValu' + 'e']));
            }), _0x3be031(0x0, _0xc452, 'bar', function () {
                return this['_bar'];
            }), _0x3be031(0x0, _0xc452, 'value', function () {
                return this['_value'];
            }, function (_0x43e9d1) {
                if (this['_value'] != _0x43e9d1) {
                    var _0x9d03e6 = this['_value'];
                    this['_value'] = _0x43e9d1, this['changeValu' + 'e'](), this['_value'] != _0x9d03e6 && this['sendChange' + 'Event']();
                }
            }), _0x2da4d9(_0x5f27cb, [
                'label',
                function () {
                    return this['label'] = new _0x30df4a();
                }
            ]), _0x5f27cb;
        }(_0x14c206), _0x30df4a = function (_0x28a2da) {
            function _0x3f5206(_0x56117b) {
                this['_tf'] = null, _0x3f5206['__super']['call'](this), void 0x0 === _0x56117b && (_0x56117b = ''), this['text'] = _0x56117b;
            }
            _0x3b4bb6(_0x3f5206, 'laya.ui.La' + 'bel', _0x28a2da);
            var _0x24940e = _0x3f5206['prototype'];
            return _0x24940e['destroy'] = function (_0x41a6ec) {
                void 0x0 === _0x41a6ec && (_0x41a6ec = !0x0), _0x28a2da['prototype']['destroy']['call'](this, _0x41a6ec), this['_tf'] = null;
            }, _0x24940e['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x29ecac());
            }, _0x24940e['changeText'] = function (_0x3a1fc2) {
                this['_tf']['changeText'](_0x3a1fc2);
            }, _0x24940e['measureWid' + 'th'] = function () {
                return this['_tf']['width'];
            }, _0x24940e['measureHei' + 'ght'] = function () {
                return this['_tf']['height'];
            }, _0x3be031(0x0, _0x24940e, 'padding', function () {
                return this['_tf']['padding']['join'](',');
            }, function (_0x571e18) {
                this['_tf']['padding'] = _0x4b493c['fillArray'](_0x55fcb['labelPaddi' + 'ng'], _0x571e18, Number);
            }), _0x3be031(0x0, _0x24940e, 'bold', function () {
                return this['_tf']['bold'];
            }, function (_0x719358) {
                this['_tf']['bold'] = _0x719358;
            }), _0x3be031(0x0, _0x24940e, 'align', function () {
                return this['_tf']['align'];
            }, function (_0x310aa6) {
                this['_tf']['align'] = _0x310aa6;
            }), _0x3be031(0x0, _0x24940e, 'text', function () {
                return this['_tf']['text'];
            }, function (_0x2873fa) {
                this['_tf']['text'] != _0x2873fa && (_0x2873fa && (_0x2873fa = _0x4b493c['adptString'](_0x2873fa + '')), this['_tf']['text'] = _0x2873fa, this['event']('change'), this['_width'] && this['_height'] || this['onCompResi' + 'ze']());
            }), _0x3be031(0x0, _0x24940e, 'italic', function () {
                return this['_tf']['italic'];
            }, function (_0x2a866a) {
                this['_tf']['italic'] = _0x2a866a;
            }), _0x3be031(0x0, _0x24940e, 'wordWrap', function () {
                return this['_tf']['wordWrap'];
            }, function (_0x45957c) {
                this['_tf']['wordWrap'] = _0x45957c;
            }), _0x3be031(0x0, _0x24940e, 'font', function () {
                return this['_tf']['font'];
            }, function (_0x25ef0d) {
                this['_tf']['font'] = _0x25ef0d;
            }), _0x3be031(0x0, _0x24940e, 'dataSource', _0x28a2da['prototype']['_$get_data' + 'Source'], function (_0x292030) {
                this['_dataSourc' + 'e'] = _0x292030, 'number' == typeof _0x292030 || 'string' == typeof _0x292030 ? this['text'] = _0x292030 + '' : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x292030);
            }), _0x3be031(0x0, _0x24940e, 'color', function () {
                return this['_tf']['color'];
            }, function (_0x3d18f6) {
                this['_tf']['color'] = _0x3d18f6;
            }), _0x3be031(0x0, _0x24940e, 'valign', function () {
                return this['_tf']['valign'];
            }, function (_0x1b77b6) {
                this['_tf']['valign'] = _0x1b77b6;
            }), _0x3be031(0x0, _0x24940e, 'leading', function () {
                return this['_tf']['leading'];
            }, function (_0x34ca07) {
                this['_tf']['leading'] = _0x34ca07;
            }), _0x3be031(0x0, _0x24940e, 'fontSize', function () {
                return this['_tf']['fontSize'];
            }, function (_0x1b170b) {
                this['_tf']['fontSize'] = _0x1b170b;
            }), _0x3be031(0x0, _0x24940e, 'bgColor', function () {
                return this['_tf']['bgColor'];
            }, function (_0x2e802c) {
                this['_tf']['bgColor'] = _0x2e802c;
            }), _0x3be031(0x0, _0x24940e, 'borderColo' + 'r', function () {
                return this['_tf']['borderColo' + 'r'];
            }, function (_0x3fd70b) {
                this['_tf']['borderColo' + 'r'] = _0x3fd70b;
            }), _0x3be031(0x0, _0x24940e, 'stroke', function () {
                return this['_tf']['stroke'];
            }, function (_0x5a8171) {
                this['_tf']['stroke'] = _0x5a8171;
            }), _0x3be031(0x0, _0x24940e, 'strokeColo' + 'r', function () {
                return this['_tf']['strokeColo' + 'r'];
            }, function (_0x5224fa) {
                this['_tf']['strokeColo' + 'r'] = _0x5224fa;
            }), _0x3be031(0x0, _0x24940e, 'textField', function () {
                return this['_tf'];
            }), _0x3be031(0x0, _0x24940e, 'width', function () {
                return this['_width'] || this['_tf']['text'] ? _0x4d77ad['superGet'](_0x14c206, this, 'width') : 0x0;
            }, function (_0x530579) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0x530579), this['_tf']['width'] = _0x530579;
            }), _0x3be031(0x0, _0x24940e, 'height', function () {
                return this['_height'] || this['_tf']['text'] ? _0x4d77ad['superGet'](_0x14c206, this, 'height') : 0x0;
            }, function (_0x91c5b7) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x91c5b7), this['_tf']['height'] = _0x91c5b7;
            }), _0x3be031(0x0, _0x24940e, 'overflow', function () {
                return this['_tf']['overflow'];
            }, function (_0x16bad6) {
                this['_tf']['overflow'] = _0x16bad6;
            }), _0x3be031(0x0, _0x24940e, 'underline', function () {
                return this['_tf']['underline'];
            }, function (_0x39c090) {
                this['_tf']['underline'] = _0x39c090;
            }), _0x3be031(0x0, _0x24940e, 'underlineC' + 'olor', function () {
                return this['_tf']['underlineC' + 'olor'];
            }, function (_0x43d90a) {
                this['_tf']['underlineC' + 'olor'] = _0x43d90a;
            }), _0x3f5206;
        }(_0x14c206), _0x57156d = function (_0x324b63) {
            function _0x114305() {
                this['changeHand' + 'ler'] = null, this['_gridSize'] = 0xb, this['_bgColor'] = '#ffffff', this['_borderCol' + 'or'] = '#000000', this['_inputColo' + 'r'] = '#000000', this['_inputBgCo' + 'lor'] = '#efefef', this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = [], this['_selectedC' + 'olor'] = '#000000', this['_panelChan' + 'ged'] = !0x1, _0x114305['__super']['call'](this);
            }
            _0x3b4bb6(_0x114305, 'laya.ui.Co' + 'lorPicker', _0x324b63);
            var _0x5cbfac = _0x114305['prototype'];
            return _0x5cbfac['destroy'] = function (_0x4b435e) {
                void 0x0 === _0x4b435e && (_0x4b435e = !0x0), _0x324b63['prototype']['destroy']['call'](this, _0x4b435e), this['_colorPane' + 'l'] && this['_colorPane' + 'l']['destroy'](_0x4b435e), this['_colorButt' + 'on'] && this['_colorButt' + 'on']['destroy'](_0x4b435e), this['_colorPane' + 'l'] = null, this['_colorTile' + 's'] = null, this['_colorBloc' + 'k'] = null, this['_colorInpu' + 't'] = null, this['_colorButt' + 'on'] = null, this['_colors'] = null, this['changeHand' + 'ler'] = null;
            }, _0x5cbfac['createChil' + 'dren'] = function () {
                this['addChild'](this['_colorButt' + 'on'] = new _0x18019c()), this['_colorPane' + 'l'] = new _0x560329(), this['_colorPane' + 'l']['size'](0xe6, 0xa6), this['_colorPane' + 'l']['addChild'](this['_colorTile' + 's'] = new _0x51555a()), this['_colorPane' + 'l']['addChild'](this['_colorBloc' + 'k'] = new _0x51555a()), this['_colorPane' + 'l']['addChild'](this['_colorInpu' + 't'] = new _0x18deff());
            }, _0x5cbfac['initialize'] = function () {
                this['_colorButt' + 'on']['on']('click', this, this['onColorBut' + 'tonClick']), this['_colorBloc' + 'k']['pos'](0x5, 0x5), this['_colorInpu' + 't']['pos'](0x3c, 0x5), this['_colorInpu' + 't']['size'](0x3c, 0x14), this['_colorInpu' + 't']['on']('change', this, this['onColorInp' + 'utChange']), this['_colorInpu' + 't']['on']('keydown', this, this['onColorFie' + 'ldKeyDown']), this['_colorTile' + 's']['pos'](0x5, 0x1e), this['_colorTile' + 's']['on']('mousemove', this, this['onColorTil' + 'esMouseMov' + 'e']), this['_colorTile' + 's']['on']('click', this, this['onColorTil' + 'esClick']), this['_colorTile' + 's']['size'](0x14 * this['_gridSize'], 0xc * this['_gridSize']), this['_colorPane' + 'l']['on']('mousedown', this, this['onPanelMou' + 'seDown']), this['bgColor'] = this['_bgColor'];
            }, _0x5cbfac['onPanelMou' + 'seDown'] = function (_0x22e71f) {
                _0x22e71f['stopPropag' + 'ation']();
            }, _0x5cbfac['changePane' + 'l'] = function () {
                this['_panelChan' + 'ged'] = !0x1;
                var _0x3fe8ed = this['_colorPane' + 'l']['graphics'];
                _0x3fe8ed['clear'](!0x0), _0x3fe8ed['drawRect'](0x0, 0x0, 0xe6, 0xa6, this['_bgColor'], this['_borderCol' + 'or']), this['drawBlock'](this['_selectedC' + 'olor']), this['_colorInpu' + 't']['borderColo' + 'r'] = this['_borderCol' + 'or'], this['_colorInpu' + 't']['bgColor'] = this['_inputBgCo' + 'lor'], this['_colorInpu' + 't']['color'] = this['_inputColo' + 'r'], (_0x3fe8ed = this['_colorTile' + 's']['graphics'])['clear'](!0x0);
                for (var _0x1fcd78 = [
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
                        ], _0x2601f5 = 0x0; _0x2601f5 < 0xc; _0x2601f5++)
                    for (var _0x49bb08 = 0x0; _0x49bb08 < 0x14; _0x49bb08++) {
                        var _0x2185b5 = 0x0;
                        _0x2185b5 = 0x0 === _0x49bb08 ? _0x1fcd78[_0x2601f5] : 0x1 === _0x49bb08 ? 0x0 : 0x33 * (((0x3 * _0x2601f5 + _0x49bb08 / 0x6) % 0x3 << 0x0) + 0x3 * (_0x2601f5 / 0x6 << 0x0)) << 0x10 | _0x49bb08 % 0x6 * 0x33 << 0x8 | (_0x2601f5 << 0x0) % 0x6 * 0x33;
                        var _0x3da372 = _0x4b493c['toColor'](_0x2185b5);
                        this['_colors']['push'](_0x3da372);
                        var _0x728dcc = _0x49bb08 * this['_gridSize'], _0x33f928 = _0x2601f5 * this['_gridSize'];
                        _0x3fe8ed['drawRect'](_0x728dcc, _0x33f928, this['_gridSize'], this['_gridSize'], _0x3da372, '#000000');
                    }
            }, _0x5cbfac['onColorBut' + 'tonClick'] = function (_0x3bf483) {
                this['_colorPane' + 'l']['parent'] ? this['close']() : this['open']();
            }, _0x5cbfac['open'] = function () {
                var _0x2d512c = this['localToGlo' + 'bal'](new _0x53b25d()), _0x4aa7ca = _0x2d512c['x'] + this['_colorPane' + 'l']['width'] <= _0x4d77ad['stage']['width'] ? _0x2d512c['x'] : _0x4d77ad['stage']['width'] - this['_colorPane' + 'l']['width'], _0x38d714 = _0x2d512c['y'] + this['_colorButt' + 'on']['height'];
                _0x38d714 = _0x38d714 + this['_colorPane' + 'l']['height'] <= _0x4d77ad['stage']['height'] ? _0x38d714 : _0x2d512c['y'] - this['_colorPane' + 'l']['height'], this['_colorPane' + 'l']['pos'](_0x4aa7ca, _0x38d714), this['_colorPane' + 'l']['zOrder'] = 0x3e9, _0x4d77ad['_currentSt' + 'age']['addChild'](this['_colorPane' + 'l']), _0x4d77ad['stage']['on']('mousedown', this, this['removeColo' + 'rBox']);
            }, _0x5cbfac['close'] = function () {
                _0x4d77ad['stage']['off']('mousedown', this, this['removeColo' + 'rBox']), this['_colorPane' + 'l']['removeSelf']();
            }, _0x5cbfac['removeColo' + 'rBox'] = function (_0x47dfc3) {
                this['close']();
            }, _0x5cbfac['onColorFie' + 'ldKeyDown'] = function (_0xcc5cf4) {
                0xd == _0xcc5cf4['keyCode'] && (this['_colorInpu' + 't']['text'] ? this['selectedCo' + 'lor'] = this['_colorInpu' + 't']['text'] : this['selectedCo' + 'lor'] = null, this['close'](), _0xcc5cf4['stopPropag' + 'ation']());
            }, _0x5cbfac['onColorInp' + 'utChange'] = function (_0x19de91) {
                this['_colorInpu' + 't']['text'] ? this['drawBlock'](this['_colorInpu' + 't']['text']) : this['drawBlock']('#FFFFFF');
            }, _0x5cbfac['onColorTil' + 'esClick'] = function (_0x14eb17) {
                this['selectedCo' + 'lor'] = this['getColorBy' + 'Mouse'](), this['close']();
            }, _0x5cbfac['onColorTil' + 'esMouseMov' + 'e'] = function (_0x34fc34) {
                this['_colorInpu' + 't']['focus'] = !0x1;
                var _0x2ceaed = this['getColorBy' + 'Mouse']();
                this['_colorInpu' + 't']['text'] = _0x2ceaed, this['drawBlock'](_0x2ceaed);
            }, _0x5cbfac['getColorBy' + 'Mouse'] = function () {
                var _0x4f59ba = this['_colorTile' + 's']['getMousePo' + 'int'](), _0x4025af = Math['floor'](_0x4f59ba['x'] / this['_gridSize']), _0x5eef11 = Math['floor'](_0x4f59ba['y'] / this['_gridSize']);
                return this['_colors'][0x14 * _0x5eef11 + _0x4025af];
            }, _0x5cbfac['drawBlock'] = function (_0x2068ba) {
                var _0x36cf92 = this['_colorBloc' + 'k']['graphics'];
                _0x36cf92['clear'](!0x0);
                var _0x44b7ee = _0x2068ba || '#ffffff';
                _0x36cf92['drawRect'](0x0, 0x0, 0x32, 0x14, _0x44b7ee, this['_borderCol' + 'or']), _0x2068ba || _0x36cf92['drawLine'](0x0, 0x0, 0x32, 0x14, '#ff0000');
            }, _0x5cbfac['changeColo' + 'r'] = function () {
                var _0x3d14c7 = this['graphics'];
                _0x3d14c7['clear'](!0x0);
                var _0xb1038c = this['_selectedC' + 'olor'] || '#000000';
                _0x3d14c7['drawRect'](0x0, 0x0, this['_colorButt' + 'on']['width'], this['_colorButt' + 'on']['height'], _0xb1038c);
            }, _0x5cbfac['_setPanelC' + 'hanged'] = function () {
                this['_panelChan' + 'ged'] || (this['_panelChan' + 'ged'] = !0x0, this['callLater'](this['changePane' + 'l']));
            }, _0x3be031(0x0, _0x5cbfac, 'inputBgCol' + 'or', function () {
                return this['_inputBgCo' + 'lor'];
            }, function (_0x560228) {
                this['_inputBgCo' + 'lor'] = _0x560228, this['_setPanelC' + 'hanged']();
            }), _0x3be031(0x0, _0x5cbfac, 'selectedCo' + 'lor', function () {
                return this['_selectedC' + 'olor'];
            }, function (_0xfebcb3) {
                this['_selectedC' + 'olor'] != _0xfebcb3 && (this['_selectedC' + 'olor'] = this['_colorInpu' + 't']['text'] = _0xfebcb3, this['drawBlock'](_0xfebcb3), this['changeColo' + 'r'](), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](this['_selectedC' + 'olor']), this['event']('change', _0x383ea5['EMPTY']['setTo']('change', this, this)));
            }), _0x3be031(0x0, _0x5cbfac, 'skin', function () {
                return this['_colorButt' + 'on']['skin'];
            }, function (_0x56aff8) {
                this['_colorButt' + 'on']['once']('loaded', this, this['changeColo' + 'r']), this['_colorButt' + 'on']['skin'] = _0x56aff8;
            }), _0x3be031(0x0, _0x5cbfac, 'bgColor', function () {
                return this['_bgColor'];
            }, function (_0x2250eb) {
                this['_bgColor'] = _0x2250eb, this['_setPanelC' + 'hanged']();
            }), _0x3be031(0x0, _0x5cbfac, 'borderColo' + 'r', function () {
                return this['_borderCol' + 'or'];
            }, function (_0x35315d) {
                this['_borderCol' + 'or'] = _0x35315d, this['_setPanelC' + 'hanged']();
            }), _0x3be031(0x0, _0x5cbfac, 'inputColor', function () {
                return this['_inputColo' + 'r'];
            }, function (_0x3337f3) {
                this['_inputColo' + 'r'] = _0x3337f3, this['_setPanelC' + 'hanged']();
            }), _0x114305;
        }(_0x14c206), _0x18019c = function (_0x294e06) {
            function _0x42d9d3(_0x415d43, _0x340056) {
                this['toggle'] = !0x1, this['_bitmap'] = null, this['_text'] = null, this['_strokeCol' + 'ors'] = null, this['_state'] = 0x0, this['_selected'] = !0x1, this['_skin'] = null, this['_autoSize'] = !0x0, this['_sources'] = null, this['_clickHand' + 'ler'] = null, this['_stateChan' + 'ged'] = !0x1, _0x42d9d3['__super']['call'](this), this['_labelColo' + 'rs'] = _0x55fcb['buttonLabe' + 'lColors'], this['_stateNum'] = _0x55fcb['buttonStat' + 'eNum'], void 0x0 === _0x340056 && (_0x340056 = ''), this['skin'] = _0x415d43, this['label'] = _0x340056;
            }
            _0x3b4bb6(_0x42d9d3, 'laya.ui.Bu' + 'tton', _0x294e06);
            var _0x5413cc = _0x42d9d3['prototype'];
            return _0x4d77ad['imps'](_0x5413cc, { 'laya.ui.ISelect': !0x0 }), _0x5413cc['destroy'] = function (_0x258b6c) {
                void 0x0 === _0x258b6c && (_0x258b6c = !0x0), _0x294e06['prototype']['destroy']['call'](this, _0x258b6c), this['_bitmap'] && this['_bitmap']['destroy'](), this['_text'] && this['_text']['destroy'](_0x258b6c), this['_bitmap'] = null, this['_text'] = null, this['_clickHand' + 'ler'] = null, this['_labelColo' + 'rs'] = this['_sources'] = this['_strokeCol' + 'ors'] = null;
            }, _0x5413cc['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x1402c1();
            }, _0x5413cc['createText'] = function () {
                this['_text'] || (this['_text'] = new _0x29ecac(), this['_text']['overflow'] = 'hidden', this['_text']['align'] = 'center', this['_text']['valign'] = 'middle', this['_text']['width'] = this['_width'], this['_text']['height'] = this['_height']);
            }, _0x5413cc['initialize'] = function () {
                0x1 !== this['_mouseStat' + 'e'] && (this['mouseEnabl' + 'ed'] = !0x0, this['_setBit'](0x40, !0x0)), this['_createLis' + 'tener']('mouseover', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseout', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mousedown', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('mouseup', this, this['onMouse'], null, !0x1, !0x1), this['_createLis' + 'tener']('click', this, this['onMouse'], null, !0x1, !0x1);
            }, _0x5413cc['onMouse'] = function (_0x4b5162) {
                if (!0x1 !== this['toggle'] || !this['_selected'])
                    return 'click' === _0x4b5162['type'] ? (this['toggle'] && (this['selected'] = !this['_selected']), void (this['_clickHand' + 'ler'] && this['_clickHand' + 'ler']['run']())) : void (!this['_selected'] && (this['state'] = _0x42d9d3['stateMap'][_0x4b5162['type']]));
            }, _0x5413cc['_skinLoade' + 'd'] = function () {
                this['callLater'](this['changeClip' + 's']), this['_setStateC' + 'hanged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x5413cc['changeClip' + 's'] = function () {
                var _0x2f3eef = _0x27b7ec['getRes'](this['_skin']);
                if (_0x2f3eef) {
                    var _0x91150b = _0x2f3eef['sourceWidt' + 'h'], _0x13e099 = _0x2f3eef['sourceHeig' + 'ht'] / this['_stateNum'];
                    _0x2f3eef['$_GID'] || (_0x2f3eef['$_GID'] = _0x4e82e1['getGID']());
                    var _0x1ada48 = _0x2f3eef['$_GID'] + '-' + this['_stateNum'], _0xf117e5 = _0x2767d0['I']['get'](_0x1ada48);
                    if (_0x4e82e1['isOkTextur' + 'eList'](_0xf117e5) || (_0xf117e5 = null), _0xf117e5)
                        this['_sources'] = _0xf117e5;
                    else {
                        if (this['_sources'] = [], 0x1 === this['_stateNum'])
                            this['_sources']['push'](_0x2f3eef);
                        else {
                            for (var _0x4210fc = 0x0; _0x4210fc < this['_stateNum']; _0x4210fc++)
                                this['_sources']['push'](_0x898082['createFrom' + 'Texture'](_0x2f3eef, 0x0, _0x13e099 * _0x4210fc, _0x91150b, _0x13e099));
                        }
                        _0x2767d0['I']['set'](_0x1ada48, this['_sources']);
                    }
                    this['_autoSize'] ? (this['_bitmap']['width'] = this['_width'] || _0x91150b, this['_bitmap']['height'] = this['_height'] || _0x13e099, this['_text'] && (this['_text']['width'] = this['_bitmap']['width'], this['_text']['height'] = this['_bitmap']['height'])) : this['_text'] && (this['_text']['x'] = _0x91150b);
                } else
                    console['log']('lose\x20skin', this['_skin']);
            }, _0x5413cc['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_autoSize'] ? this['_bitmap']['width'] : (this['runCallLat' + 'er'](this['changeStat' + 'e']), this['_bitmap']['width'] + (this['_text'] ? this['_text']['width'] : 0x0));
            }, _0x5413cc['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip' + 's']), this['_text'] ? Math['max'](this['_bitmap']['height'], this['_text']['height']) : this['_bitmap']['height'];
            }, _0x5413cc['changeStat' + 'e'] = function () {
                this['_stateChan' + 'ged'] = !0x1, this['runCallLat' + 'er'](this['changeClip' + 's']);
                var _0x5a4d57 = this['_state'] < this['_stateNum'] ? this['_state'] : this['_stateNum'] - 0x1;
                this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x5a4d57]), this['label'] && (this['_text']['color'] = this['_labelColo' + 'rs'][_0x5a4d57], this['_strokeCol' + 'ors'] && (this['_text']['strokeColo' + 'r'] = this['_strokeCol' + 'ors'][_0x5a4d57]));
            }, _0x5413cc['_setStateC' + 'hanged'] = function () {
                this['_stateChan' + 'ged'] || (this['_stateChan' + 'ged'] = !0x0, this['callLater'](this['changeStat' + 'e']));
            }, _0x3be031(0x0, _0x5413cc, 'skin', function () {
                return this['_skin'];
            }, function (_0x58fadb) {
                this['_skin'] != _0x58fadb && (this['_skin'] = _0x58fadb, _0x58fadb ? _0x27b7ec['getRes'](_0x58fadb) ? this['_skinLoade' + 'd']() : _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0x5413cc, 'labelPaddi' + 'ng', function () {
                return this['createText'](), this['_text']['padding']['join'](',');
            }, function (_0x5af843) {
                this['createText'](), this['_text']['padding'] = _0x4b493c['fillArray'](_0x55fcb['labelPaddi' + 'ng'], _0x5af843, Number);
            }), _0x3be031(0x0, _0x5413cc, 'state', function () {
                return this['_state'];
            }, function (_0x4f309d) {
                this['_state'] != _0x4f309d && (this['_state'] = _0x4f309d, this['_setStateC' + 'hanged']());
            }), _0x3be031(0x0, _0x5413cc, 'text', function () {
                return this['createText'](), this['_text'];
            }), _0x3be031(0x0, _0x5413cc, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x45cab2) {
                'string' == typeof _0x45cab2 && (_0x45cab2 = parseInt(_0x45cab2)), this['_stateNum'] != _0x45cab2 && (this['_stateNum'] = _0x45cab2 < 0x1 ? 0x1 : _0x45cab2 > 0x3 ? 0x3 : _0x45cab2, this['callLater'](this['changeClip' + 's']));
            }), _0x3be031(0x0, _0x5413cc, 'label', function () {
                return this['_text'] ? this['_text']['text'] : null;
            }, function (_0xa597f0) {
                (this['_text'] || _0xa597f0) && (this['createText'](), this['_text']['text'] != _0xa597f0 && (_0xa597f0 && !this['_text']['parent'] && this['addChild'](this['_text']), this['_text']['text'] = (_0xa597f0 + '')['replace'](/\\n/g, '\x0a'), this['_setStateC' + 'hanged']()));
            }), _0x3be031(0x0, _0x5413cc, 'labelSize', function () {
                return this['createText'](), this['_text']['fontSize'];
            }, function (_0x40e79b) {
                this['createText'](), this['_text']['fontSize'] = _0x40e79b;
            }), _0x3be031(0x0, _0x5413cc, 'selected', function () {
                return this['_selected'];
            }, function (_0x42738b) {
                this['_selected'] != _0x42738b && (this['_selected'] = _0x42738b, this['state'] = this['_selected'] ? 0x2 : 0x0, this['event']('change'));
            }), _0x3be031(0x0, _0x5413cc, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'] ? this['_strokeCol' + 'ors']['join'](',') : '';
            }, function (_0x41462c) {
                this['_strokeCol' + 'ors'] = _0x4b493c['fillArray'](_0x55fcb['buttonLabe' + 'lColors'], _0x41462c, String), this['_setStateC' + 'hanged']();
            }), _0x3be031(0x0, _0x5413cc, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs']['join'](',');
            }, function (_0x4c1e07) {
                this['_labelColo' + 'rs'] = _0x4b493c['fillArray'](_0x55fcb['buttonLabe' + 'lColors'], _0x4c1e07, String), this['_setStateC' + 'hanged']();
            }), _0x3be031(0x0, _0x5413cc, 'labelStrok' + 'e', function () {
                return this['createText'](), this['_text']['stroke'];
            }, function (_0xeeaa69) {
                this['createText'](), this['_text']['stroke'] = _0xeeaa69;
            }), _0x3be031(0x0, _0x5413cc, 'labelStrok' + 'eColor', function () {
                return this['createText'](), this['_text']['strokeColo' + 'r'];
            }, function (_0x131b98) {
                this['createText'](), this['_text']['strokeColo' + 'r'] = _0x131b98;
            }), _0x3be031(0x0, _0x5413cc, 'labelBold', function () {
                return this['createText'](), this['_text']['bold'];
            }, function (_0x4a0328) {
                this['createText'](), this['_text']['bold'] = _0x4a0328;
            }), _0x3be031(0x0, _0x5413cc, 'labelFont', function () {
                return this['createText'](), this['_text']['font'];
            }, function (_0x164152) {
                this['createText'](), this['_text']['font'] = _0x164152;
            }), _0x3be031(0x0, _0x5413cc, 'labelAlign', function () {
                return this['createText'](), this['_text']['align'];
            }, function (_0x540a52) {
                this['createText'](), this['_text']['align'] = _0x540a52;
            }), _0x3be031(0x0, _0x5413cc, 'clickHandl' + 'er', function () {
                return this['_clickHand' + 'ler'];
            }, function (_0x23996a) {
                this['_clickHand' + 'ler'] = _0x23996a;
            }), _0x3be031(0x0, _0x5413cc, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x2c7c36) {
                this['_bitmap']['sizeGrid'] = _0x4b493c['fillArray'](_0x55fcb['defaultSiz' + 'eGrid'], _0x2c7c36, Number);
            }), _0x3be031(0x0, _0x5413cc, 'width', _0x294e06['prototype']['_$get_widt' + 'h'], function (_0xef6298) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0xef6298), this['_autoSize'] && (this['_bitmap']['width'] = _0xef6298, this['_text'] && (this['_text']['width'] = _0xef6298));
            }), _0x3be031(0x0, _0x5413cc, 'height', _0x294e06['prototype']['_$get_heig' + 'ht'], function (_0x1b6198) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x1b6198), this['_autoSize'] && (this['_bitmap']['height'] = _0x1b6198, this['_text'] && (this['_text']['height'] = _0x1b6198));
            }), _0x3be031(0x0, _0x5413cc, 'dataSource', _0x294e06['prototype']['_$get_data' + 'Source'], function (_0xb9ab96) {
                this['_dataSourc' + 'e'] = _0xb9ab96, 'number' == typeof _0xb9ab96 || 'string' == typeof _0xb9ab96 ? this['label'] = _0xb9ab96 + '' : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0xb9ab96);
            }), _0x3be031(0x0, _0x5413cc, 'iconOffset', function () {
                return this['_bitmap']['_offset'] ? this['_bitmap']['_offset']['join'](',') : null;
            }, function (_0x33a8c0) {
                this['_bitmap']['_offset'] = _0x33a8c0 ? _0x4b493c['fillArray']([
                    0x1,
                    0x1
                ], _0x33a8c0, Number) : [];
            }), _0x2da4d9(_0x42d9d3, [
                'stateMap',
                function () {
                    return this['stateMap'] = {
                        'mouseup': 0x0,
                        'mouseover': 0x1,
                        'mousedown': 0x2,
                        'mouseout': 0x0
                    };
                }
            ]), _0x42d9d3;
        }(_0x14c206), _0x34829c = function (_0x441aa4) {
            function _0x2f1e36(_0xb8cc4a) {
                this['changeHand' + 'ler'] = null, this['_bg'] = null, this['_bar'] = null, this['_skin'] = null, this['_value'] = 0.5, _0x2f1e36['__super']['call'](this), this['skin'] = _0xb8cc4a;
            }
            _0x3b4bb6(_0x2f1e36, 'laya.ui.Pr' + 'ogressBar', _0x441aa4);
            var _0x56d3ef = _0x2f1e36['prototype'];
            return _0x56d3ef['destroy'] = function (_0x462b96) {
                void 0x0 === _0x462b96 && (_0x462b96 = !0x0), _0x441aa4['prototype']['destroy']['call'](this, _0x462b96), this['_bg'] && this['_bg']['destroy'](_0x462b96), this['_bar'] && this['_bar']['destroy'](_0x462b96), this['_bg'] = this['_bar'] = null, this['changeHand' + 'ler'] = null;
            }, _0x56d3ef['createChil' + 'dren'] = function () {
                this['addChild'](this['_bg'] = new _0x354d99()), this['addChild'](this['_bar'] = new _0x354d99()), this['_bar']['_bitmap']['autoCacheC' + 'md'] = !0x1;
            }, _0x56d3ef['_skinLoade' + 'd'] = function () {
                this['_bg']['skin'] = this['_skin'], this['_bar']['skin'] = this['_skin']['replace']('.png', '$bar.png'), this['callLater'](this['changeValu' + 'e']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x56d3ef['measureWid' + 'th'] = function () {
                return this['_bg']['width'];
            }, _0x56d3ef['measureHei' + 'ght'] = function () {
                return this['_bg']['height'];
            }, _0x56d3ef['changeValu' + 'e'] = function () {
                if (this['sizeGrid']) {
                    var _0x620ce1 = this['sizeGrid']['split'](','), _0x28d2b6 = Number(_0x620ce1[0x3]), _0x1141c3 = Number(_0x620ce1[0x1]), _0x2b3322 = (this['width'] - _0x28d2b6 - _0x1141c3) * this['_value'];
                    this['_bar']['width'] = _0x28d2b6 + _0x1141c3 + _0x2b3322, this['_bar']['visible'] = this['_bar']['width'] > _0x28d2b6 + _0x1141c3;
                } else
                    this['_bar']['width'] = this['width'] * this['_value'];
            }, _0x3be031(0x0, _0x56d3ef, 'dataSource', _0x441aa4['prototype']['_$get_data' + 'Source'], function (_0x4d0ccb) {
                this['_dataSourc' + 'e'] = _0x4d0ccb, 'number' == typeof _0x4d0ccb || 'string' == typeof _0x4d0ccb ? this['value'] = Number(_0x4d0ccb) : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x4d0ccb);
            }), _0x3be031(0x0, _0x56d3ef, 'skin', function () {
                return this['_skin'];
            }, function (_0x2ef140) {
                this['_skin'] != _0x2ef140 && (this['_skin'] = _0x2ef140, this['_skin'] && !_0x27b7ec['getRes'](this['_skin']) ? _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0x56d3ef, 'height', _0x441aa4['prototype']['_$get_heig' + 'ht'], function (_0x2b1d01) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x2b1d01), this['_bg']['height'] = this['_height'], this['_bar']['height'] = this['_height'];
            }), _0x3be031(0x0, _0x56d3ef, 'bar', function () {
                return this['_bar'];
            }), _0x3be031(0x0, _0x56d3ef, 'value', function () {
                return this['_value'];
            }, function (_0x10ff6e) {
                this['_value'] != _0x10ff6e && (_0x10ff6e = _0x10ff6e > 0x1 ? 0x1 : _0x10ff6e < 0x0 ? 0x0 : _0x10ff6e, this['_value'] = _0x10ff6e, this['callLater'](this['changeValu' + 'e']), this['event']('change'), this['changeHand' + 'ler'] && this['changeHand' + 'ler']['runWith'](_0x10ff6e));
            }), _0x3be031(0x0, _0x56d3ef, 'bg', function () {
                return this['_bg'];
            }), _0x3be031(0x0, _0x56d3ef, 'sizeGrid', function () {
                return this['_bg']['sizeGrid'];
            }, function (_0x2f5f29) {
                this['_bg']['sizeGrid'] = this['_bar']['sizeGrid'] = _0x2f5f29;
            }), _0x3be031(0x0, _0x56d3ef, 'width', _0x441aa4['prototype']['_$get_widt' + 'h'], function (_0x5924a6) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0x5924a6), this['_bg']['width'] = this['_width'], this['callLater'](this['changeValu' + 'e']);
            }), _0x2f1e36;
        }(_0x14c206), _0x377382 = (function (_0x228fe4) {
            function _0x5d6645() {
                this['_tipBox'] = null, this['_tipText'] = null, this['_defaultTi' + 'pHandler'] = null, _0x5d6645['__super']['call'](this), this['_tipBox'] = new _0x14c206(), this['_tipBox']['addChild'](this['_tipText'] = new _0x29ecac()), this['_tipText']['x'] = this['_tipText']['y'] = 0x5, this['_tipText']['color'] = _0x5d6645['tipTextCol' + 'or'], this['_defaultTi' + 'pHandler'] = this['_showDefau' + 'ltTip'], _0x4d77ad['stage']['on']('showtip', this, this['_onStageSh' + 'owTip']), _0x4d77ad['stage']['on']('hidetip', this, this['_onStageHi' + 'deTip']), this['zOrder'] = 0x44c;
            }
            _0x3b4bb6(_0x5d6645, 'laya.ui.Ti' + 'pManager', _0x14c206);
            var _0x397529 = _0x5d6645['prototype'];
            _0x397529['_onStageHi' + 'deTip'] = function (_0x557b68) {
                _0x4d77ad['timer']['clear'](this, this['_showTip']), this['closeAll'](), this['removeSelf']();
            }, _0x397529['_onStageSh' + 'owTip'] = function (_0x246408) {
                _0x4d77ad['timer']['once'](_0x5d6645['tipDelay'], this, this['_showTip'], [_0x246408], !0x0);
            }, _0x397529['_showTip'] = function (_0x200ba7) {
                if ('string' == typeof _0x200ba7) {
                    var _0xe73d1f = String(_0x200ba7);
                    Boolean(_0xe73d1f) && this['_defaultTi' + 'pHandler'](_0xe73d1f);
                } else
                    _0x200ba7 instanceof laya['utils']['Handler'] ? _0x200ba7['run']() : 'function' == typeof _0x200ba7 && _0x200ba7['apply']();
                _0x4d77ad['stage']['on']('mousemove', this, this['_onStageMo' + 'useMove']), _0x4d77ad['stage']['on']('mousedown', this, this['_onStageMo' + 'useDown']), this['_onStageMo' + 'useMove'](null);
            }, _0x397529['_onStageMo' + 'useDown'] = function (_0x4e02bc) {
                this['closeAll']();
            }, _0x397529['_onStageMo' + 'useMove'] = function (_0x2f521a) {
                this['_showToSta' + 'ge'](this, _0x5d6645['offsetX'], _0x5d6645['offsetY']);
            }, _0x397529['_showToSta' + 'ge'] = function (_0x39ca70, _0x2fbd3d, _0x3bfb06) {
                void 0x0 === _0x2fbd3d && (_0x2fbd3d = 0x0), void 0x0 === _0x3bfb06 && (_0x3bfb06 = 0x0);
                var _0x4f4817 = _0x39ca70['getBounds']();
                _0x39ca70['x'] = _0x4d77ad['stage']['mouseX'] + _0x2fbd3d, _0x39ca70['y'] = _0x4d77ad['stage']['mouseY'] + _0x3bfb06, _0x39ca70['_x'] + _0x4f4817['width'] > _0x4d77ad['stage']['width'] && (_0x39ca70['x'] -= _0x4f4817['width'] + _0x2fbd3d), _0x39ca70['_y'] + _0x4f4817['height'] > _0x4d77ad['stage']['height'] && (_0x39ca70['y'] -= _0x4f4817['height'] + _0x3bfb06);
            }, _0x397529['closeAll'] = function () {
                _0x4d77ad['timer']['clear'](this, this['_showTip']), _0x4d77ad['stage']['off']('mousemove', this, this['_onStageMo' + 'useMove']), _0x4d77ad['stage']['off']('mousedown', this, this['_onStageMo' + 'useDown']), this['removeChil' + 'dren']();
            }, _0x397529['showDislay' + 'Tip'] = function (_0xbac5ba) {
                this['addChild'](_0xbac5ba), this['_showToSta' + 'ge'](this), _0x4d77ad['_currentSt' + 'age']['addChild'](this);
            }, _0x397529['_showDefau' + 'ltTip'] = function (_0x11b791) {
                this['_tipText']['text'] = _0x11b791;
                var _0x35e31f = this['_tipBox']['graphics'];
                _0x35e31f['clear'](!0x0), _0x35e31f['drawRect'](0x0, 0x0, this['_tipText']['width'] + 0xa, this['_tipText']['height'] + 0xa, _0x5d6645['tipBackCol' + 'or']), this['addChild'](this['_tipBox']), this['_showToSta' + 'ge'](this), _0x4d77ad['_currentSt' + 'age']['addChild'](this);
            }, _0x3be031(0x0, _0x397529, 'defaultTip' + 'Handler', function () {
                return this['_defaultTi' + 'pHandler'];
            }, function (_0x37c1ba) {
                this['_defaultTi' + 'pHandler'] = _0x37c1ba;
            }), _0x5d6645['offsetX'] = 0xa, _0x5d6645['offsetY'] = 0xf, _0x5d6645['tipTextCol' + 'or'] = '#ffffff', _0x5d6645['tipBackCol' + 'or'] = '#111111', _0x5d6645['tipDelay'] = 0xc8;
        }(), function (_0x22536b) {
            function _0x88319d(_0x153c92, _0x5a8cb5) {
                this['_visibleNu' + 'm'] = 0x6, this['_button'] = null, this['_list'] = null, this['_isOpen'] = !0x1, this['_itemSize'] = 0xc, this['_labels'] = [], this['_selectedI' + 'ndex'] = -0x1, this['_selectHan' + 'dler'] = null, this['_itemHeigh' + 't'] = NaN, this['_listHeigh' + 't'] = NaN, this['_listChang' + 'ed'] = !0x1, this['_itemChang' + 'ed'] = !0x1, this['_scrollBar' + 'Skin'] = null, this['_isCustomL' + 'ist'] = !0x1, this['itemRender'] = null, _0x88319d['__super']['call'](this), this['_itemColor' + 's'] = _0x55fcb['comboBoxIt' + 'emColors'], this['skin'] = _0x153c92, this['labels'] = _0x5a8cb5;
            }
            _0x3b4bb6(_0x88319d, 'laya.ui.Co' + 'mboBox', _0x22536b);
            var _0x516e3c = _0x88319d['prototype'];
            return _0x516e3c['destroy'] = function (_0x574c83) {
                void 0x0 === _0x574c83 && (_0x574c83 = !0x0), _0x22536b['prototype']['destroy']['call'](this, _0x574c83), this['_button'] && this['_button']['destroy'](_0x574c83), this['_list'] && this['_list']['destroy'](_0x574c83), this['_button'] = null, this['_list'] = null, this['_itemColor' + 's'] = null, this['_labels'] = null, this['_selectHan' + 'dler'] = null;
            }, _0x516e3c['createChil' + 'dren'] = function () {
                this['addChild'](this['_button'] = new _0x18019c()), this['_button']['text']['align'] = 'left', this['_button']['labelPaddi' + 'ng'] = '0,0,0,5', this['_button']['on']('mousedown', this, this['onButtonMo' + 'useDown']);
            }, _0x516e3c['_createLis' + 't'] = function () {
                this['_list'] = new _0x475063(), this['_scrollBar' + 'Skin'] && (this['_list']['vScrollBar' + 'Skin'] = this['_scrollBar' + 'Skin']), this['_setListEv' + 'ent'](this['_list']);
            }, _0x516e3c['_setListEv' + 'ent'] = function (_0x38c447) {
                this['_list']['selectEnab' + 'le'] = !0x0, this['_list']['on']('mousedown', this, this['onListDown']), this['_list']['mouseHandl' + 'er'] = _0x1ef768['create'](this, this['onlistItem' + 'Mouse'], null, !0x1), this['_list']['scrollBar'] && this['_list']['scrollBar']['on']('mousedown', this, this['onScrollBa' + 'rDown']);
            }, _0x516e3c['onListDown'] = function (_0x3c2cec) {
                _0x3c2cec['stopPropag' + 'ation']();
            }, _0x516e3c['onScrollBa' + 'rDown'] = function (_0x277e23) {
                _0x277e23['stopPropag' + 'ation']();
            }, _0x516e3c['onButtonMo' + 'useDown'] = function (_0x4f643c) {
                this['callLater'](this['switchTo'], [!this['_isOpen']]);
            }, _0x516e3c['measureWid' + 'th'] = function () {
                return this['_button']['width'];
            }, _0x516e3c['measureHei' + 'ght'] = function () {
                return this['_button']['height'];
            }, _0x516e3c['changeList'] = function () {
                this['_listChang' + 'ed'] = !0x1;
                var _0x40f5f1 = this['width'] - 0x2, _0x5e7282 = this['_itemColor' + 's'][0x2];
                this['_itemHeigh' + 't'] = this['_itemSize'] + 0x6, this['_list']['itemRender'] = this['itemRender'] || {
                    'type': 'Box',
                    'child': [{
                            'type': 'Label',
                            'props': {
                                'name': 'label',
                                'x': 0x1,
                                'padding': '3,3,3,3',
                                'width': _0x40f5f1,
                                'height': this['_itemHeigh' + 't'],
                                'fontSize': this['_itemSize'],
                                'color': _0x5e7282
                            }
                        }]
                }, this['_list']['repeatY'] = this['_visibleNu' + 'm'], this['_list']['refresh']();
            }, _0x516e3c['onlistItem' + 'Mouse'] = function (_0x3adc05, _0x125150) {
                var _0x24e4b4 = _0x3adc05['type'];
                if ('mouseover' === _0x24e4b4 || 'mouseout' === _0x24e4b4) {
                    if (this['_isCustomL' + 'ist'])
                        return;
                    var _0x19c608 = this['_list']['getCell'](_0x125150);
                    if (!_0x19c608)
                        return;
                    var _0x515656 = _0x19c608['getChildBy' + 'Name']('label');
                    _0x515656 && ('mouseover' === _0x24e4b4 ? (_0x515656['bgColor'] = this['_itemColor' + 's'][0x0], _0x515656['color'] = this['_itemColor' + 's'][0x1]) : (_0x515656['bgColor'] = null, _0x515656['color'] = this['_itemColor' + 's'][0x2]));
                } else
                    'click' === _0x24e4b4 && (this['selectedIn' + 'dex'] = _0x125150, this['isOpen'] = !0x1);
            }, _0x516e3c['switchTo'] = function (_0x4b0ec1) {
                this['isOpen'] = _0x4b0ec1;
            }, _0x516e3c['changeOpen'] = function () {
                this['isOpen'] = !this['_isOpen'];
            }, _0x516e3c['changeItem'] = function () {
                if (this['_itemChang' + 'ed'] = !0x1, this['_listHeigh' + 't'] = this['_labels']['length'] > 0x0 ? Math['min'](this['_visibleNu' + 'm'], this['_labels']['length']) * this['_itemHeigh' + 't'] : this['_itemHeigh' + 't'], !this['_isCustomL' + 'ist']) {
                    var _0x378c18 = this['_list']['graphics'];
                    _0x378c18['clear'](!0x0), _0x378c18['drawRect'](0x0, 0x0, this['width'] - 0x1, this['_listHeigh' + 't'], this['_itemColor' + 's'][0x4], this['_itemColor' + 's'][0x3]);
                }
                var _0x39d594 = this['_list']['array'] || [];
                _0x39d594['length'] = 0x0;
                for (var _0x3bbc6b = 0x0, _0x236b06 = this['_labels']['length']; _0x3bbc6b < _0x236b06; _0x3bbc6b++)
                    _0x39d594['push']({ 'label': this['_labels'][_0x3bbc6b] });
                this['_list']['height'] = this['_listHeigh' + 't'], this['_list']['array'] = _0x39d594;
            }, _0x516e3c['changeSele' + 'cted'] = function () {
                this['_button']['label'] = this['selectedLa' + 'bel'];
            }, _0x516e3c['_onStageMo' + 'useWheel'] = function (_0x4a03a6) {
                this['_list'] && !this['_list']['contains'](_0x4a03a6['target']) && this['removeList'](null);
            }, _0x516e3c['removeList'] = function (_0x28925c) {
                _0x4d77ad['stage']['off']('mousedown', this, this['removeList']), _0x4d77ad['stage']['off']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['isOpen'] = !0x1;
            }, _0x3be031(0x0, _0x516e3c, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x317aa6) {
                this['_selectedI' + 'ndex'] != _0x317aa6 && (this['_selectedI' + 'ndex'] = _0x317aa6, this['_labels']['length'] > 0x0 ? this['changeSele' + 'cted']() : this['callLater'](this['changeSele' + 'cted']), this['event']('change', [_0x383ea5['EMPTY']['setTo']('change', this, this)]), this['_selectHan' + 'dler'] && this['_selectHan' + 'dler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x3be031(0x0, _0x516e3c, 'skin', function () {
                return this['_button']['skin'];
            }, function (_0x172f08) {
                this['_button']['skin'] != _0x172f08 && (this['_button']['skin'] = _0x172f08, this['_listChang' + 'ed'] = !0x0);
            }), _0x3be031(0x0, _0x516e3c, 'visibleNum', function () {
                return this['_visibleNu' + 'm'];
            }, function (_0x5aaed5) {
                this['_visibleNu' + 'm'] = _0x5aaed5, this['_listChang' + 'ed'] = !0x0;
            }), _0x3be031(0x0, _0x516e3c, 'width', _0x22536b['prototype']['_$get_widt' + 'h'], function (_0x404824) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0x404824), this['_button']['width'] = this['_width'], this['_itemChang' + 'ed'] = !0x0, this['_listChang' + 'ed'] = !0x0;
            }), _0x3be031(0x0, _0x516e3c, 'selectedLa' + 'bel', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_labels']['length'] ? this['_labels'][this['_selectedI' + 'ndex']] : null;
            }, function (_0xa90941) {
                this['selectedIn' + 'dex'] = this['_labels']['indexOf'](_0xa90941);
            }), _0x3be031(0x0, _0x516e3c, 'labels', function () {
                return this['_labels']['join'](',');
            }, function (_0x298730) {
                this['_labels']['length'] > 0x0 && (this['selectedIn' + 'dex'] = -0x1), _0x298730 ? this['_labels'] = _0x298730['split'](',') : this['_labels']['length'] = 0x0, this['_itemChang' + 'ed'] = !0x0;
            }), _0x3be031(0x0, _0x516e3c, 'height', _0x22536b['prototype']['_$get_heig' + 'ht'], function (_0x10d7c6) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x10d7c6), this['_button']['height'] = this['_height'];
            }), _0x3be031(0x0, _0x516e3c, 'selectHand' + 'ler', function () {
                return this['_selectHan' + 'dler'];
            }, function (_0x1edbb7) {
                this['_selectHan' + 'dler'] = _0x1edbb7;
            }), _0x3be031(0x0, _0x516e3c, 'labelBold', function () {
                return this['_button']['text']['bold'];
            }, function (_0x1a5576) {
                this['_button']['text']['bold'] = _0x1a5576;
            }), _0x3be031(0x0, _0x516e3c, 'itemColors', function () {
                return String(this['_itemColor' + 's']);
            }, function (_0x1258b8) {
                this['_itemColor' + 's'] = _0x4b493c['fillArray'](this['_itemColor' + 's'], _0x1258b8, String), this['_listChang' + 'ed'] = !0x0;
            }), _0x3be031(0x0, _0x516e3c, 'itemSize', function () {
                return this['_itemSize'];
            }, function (_0x4b6d55) {
                this['_itemSize'] = _0x4b6d55, this['_listChang' + 'ed'] = !0x0;
            }), _0x3be031(0x0, _0x516e3c, 'scrollBar', function () {
                return this['list']['scrollBar'];
            }), _0x3be031(0x0, _0x516e3c, 'isOpen', function () {
                return this['_isOpen'];
            }, function (_0x27ac21) {
                if (this['_isOpen'] != _0x27ac21) {
                    if (this['_isOpen'] = _0x27ac21, this['_button']['selected'] = this['_isOpen'], this['_isOpen']) {
                        this['_list'] || this['_createLis' + 't'](), this['_listChang' + 'ed'] && !this['_isCustomL' + 'ist'] && this['changeList'](), this['_itemChang' + 'ed'] && this['changeItem']();
                        var _0x573667 = this['localToGlo' + 'bal'](_0x53b25d['TEMP']['setTo'](0x0, 0x0)), _0x2ff51f = _0x573667['y'] + this['_button']['height'];
                        _0x2ff51f = _0x2ff51f + this['_listHeigh' + 't'] <= _0x4d77ad['stage']['height'] ? _0x2ff51f : _0x573667['y'] - this['_listHeigh' + 't'], this['_list']['pos'](_0x573667['x'], _0x2ff51f), this['_list']['zOrder'] = 0x3e9, _0x4d77ad['_currentSt' + 'age']['addChild'](this['_list']), _0x4d77ad['stage']['once']('mousedown', this, this['removeList']), _0x4d77ad['stage']['on']('mousewheel', this, this['_onStageMo' + 'useWheel']), this['_list']['selectedIn' + 'dex'] = this['_selectedI' + 'ndex'];
                    } else
                        this['_list'] && this['_list']['removeSelf']();
                }
            }), _0x3be031(0x0, _0x516e3c, 'scrollBarS' + 'kin', function () {
                return this['_scrollBar' + 'Skin'];
            }, function (_0x17c26f) {
                this['_scrollBar' + 'Skin'] = _0x17c26f;
            }), _0x3be031(0x0, _0x516e3c, 'sizeGrid', function () {
                return this['_button']['sizeGrid'];
            }, function (_0x1cee20) {
                this['_button']['sizeGrid'] = _0x1cee20;
            }), _0x3be031(0x0, _0x516e3c, 'button', function () {
                return this['_button'];
            }), _0x3be031(0x0, _0x516e3c, 'list', function () {
                return this['_list'] || this['_createLis' + 't'](), this['_list'];
            }, function (_0x6fa5b6) {
                _0x6fa5b6 && (_0x6fa5b6['removeSelf'](), this['_isCustomL' + 'ist'] = !0x0, this['_list'] = _0x6fa5b6, this['_setListEv' + 'ent'](_0x6fa5b6), this['_itemHeigh' + 't'] = _0x6fa5b6['getCell'](0x0)['height'] + _0x6fa5b6['spaceY']);
            }), _0x3be031(0x0, _0x516e3c, 'dataSource', _0x22536b['prototype']['_$get_data' + 'Source'], function (_0x230154) {
                this['_dataSourc' + 'e'] = _0x230154, 'number' == typeof _0x230154 && Math['floor'](_0x230154) == _0x230154 || 'string' == typeof _0x230154 ? this['selectedIn' + 'dex'] = parseInt(_0x230154) : _0x230154 instanceof Array ? this['labels'] = _0x230154['join'](',') : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x230154);
            }), _0x3be031(0x0, _0x516e3c, 'labelColor' + 's', function () {
                return this['_button']['labelColor' + 's'];
            }, function (_0x3b23b2) {
                this['_button']['labelColor' + 's'] != _0x3b23b2 && (this['_button']['labelColor' + 's'] = _0x3b23b2);
            }), _0x3be031(0x0, _0x516e3c, 'labelPaddi' + 'ng', function () {
                return this['_button']['text']['padding']['join'](',');
            }, function (_0xccef13) {
                this['_button']['text']['padding'] = _0x4b493c['fillArray'](_0x55fcb['labelPaddi' + 'ng'], _0xccef13, Number);
            }), _0x3be031(0x0, _0x516e3c, 'labelSize', function () {
                return this['_button']['text']['fontSize'];
            }, function (_0x36b594) {
                this['_button']['text']['fontSize'] = _0x36b594;
            }), _0x3be031(0x0, _0x516e3c, 'labelFont', function () {
                return this['_button']['text']['font'];
            }, function (_0xebdd4e) {
                this['_button']['text']['font'] = _0xebdd4e;
            }), _0x3be031(0x0, _0x516e3c, 'stateNum', function () {
                return this['_button']['stateNum'];
            }, function (_0x4b3448) {
                this['_button']['stateNum'] = _0x4b3448;
            }), _0x88319d;
        }(_0x14c206)), _0x31387b = (function (_0x5bab13) {
            function _0x51b2e6() {
                this['_$4__textu' + 're'] = null, _0x51b2e6['__super']['call'](this), this['_width'] = this['_height'] = 0xc8;
                var _0x4ff360 = new _0x898082();
                if (!_0x4d77ad['Texture2D'])
                    throw new Error('WXOpenData' + 'Viewer:web' + 'gl\x20not\x20fou' + 'nd!');
                _0x4ff360['bitmap'] = new _0x4d77ad['Texture2D'](), this['texture'] = _0x4ff360;
            }
            _0x3b4bb6(_0x51b2e6, 'laya.ui.WX' + 'OpenDataVi' + 'ewer', _0x5bab13);
            var _0x15462b = _0x51b2e6['prototype'];
            _0x15462b['onEnable'] = function () {
                this['postMsg']({
                    'type': 'display',
                    'rate': _0x4d77ad['stage']['frameRate']
                }), _0x4b722f['wx'] && _0x4b722f['sharedCanv' + 'as'] && _0x4d77ad['timer']['frameLoop'](0x3, this, this['_onLoop']);
            }, _0x15462b['onDisable'] = function () {
                this['postMsg']({ 'type': 'undisplay' }), _0x4d77ad['timer']['clear'](this, this['_onLoop']);
            }, _0x15462b['_onLoop'] = function () {
                this['texture']['bitmap']['loadImageS' + 'ource'](_0x4b722f['sharedCanv' + 'as']);
            }, _0x15462b['_postMsg'] = function () {
                var _0x19b86e = new _0x46fad6();
                _0x19b86e['translate'](this['x'], this['y']);
                var _0x52f44e = _0x4d77ad['stage'];
                _0x19b86e['scale'](_0x52f44e['_canvasTra' + 'nsform']['getScaleX']() * this['globalScal' + 'eX'] * _0x52f44e['transform']['getScaleX'](), _0x52f44e['_canvasTra' + 'nsform']['getScaleY']() * this['globalScal' + 'eY'] * _0x52f44e['transform']['getScaleY']()), this['postMsg']({
                    'type': 'changeMatr' + 'ix',
                    'a': _0x19b86e['a'],
                    'b': _0x19b86e['b'],
                    'c': _0x19b86e['c'],
                    'd': _0x19b86e['d'],
                    'tx': _0x19b86e['tx'],
                    'ty': _0x19b86e['ty'],
                    'w': this['width'],
                    'h': this['height']
                });
            }, _0x15462b['postMsg'] = function (_0x2e0d7e) {
                _0x4b722f['wx'] && _0x4b722f['wx']['getOpenDat' + 'aContext'] && _0x4b722f['wx']['getOpenDat' + 'aContext']()['postMessag' + 'e'](_0x2e0d7e);
            }, _0x3be031(0x0, _0x15462b, 'x', _0x5bab13['prototype']['_$get_x'], function (_0x501b1d) {
                _0x4d77ad['superSet'](_0x14c206, this, 'x', _0x501b1d), this['callLater'](this['_postMsg']);
            }), _0x3be031(0x0, _0x15462b, 'width', _0x5bab13['prototype']['_$get_widt' + 'h'], function (_0x2c1cd9) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0x2c1cd9), _0x4b722f['sharedCanv' + 'as'] && (_0x4b722f['sharedCanv' + 'as']['width'] = _0x2c1cd9), this['callLater'](this['_postMsg']);
            }), _0x3be031(0x0, _0x15462b, 'height', _0x5bab13['prototype']['_$get_heig' + 'ht'], function (_0x4efa0c) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0x4efa0c), _0x4b722f['sharedCanv' + 'as'] && (_0x4b722f['sharedCanv' + 'as']['height'] = _0x4efa0c), this['callLater'](this['_postMsg']);
            }), _0x3be031(0x0, _0x15462b, 'y', _0x5bab13['prototype']['_$get_y'], function (_0x390ee3) {
                _0x4d77ad['superSet'](_0x14c206, this, 'y', _0x390ee3), this['callLater'](this['_postMsg']);
            });
        }(_0x14c206), function (_0x4e1338) {
            function _0xd71260(_0x551ce4, _0x3eba7a, _0x41adab) {
                this['_sources'] = null, this['_bitmap'] = null, this['_skin'] = null, this['_clipX'] = 0x1, this['_clipY'] = 0x1, this['_clipWidth'] = 0x0, this['_clipHeigh' + 't'] = 0x0, this['_autoPlay'] = !0x1, this['_interval'] = 0x32, this['_complete'] = null, this['_isPlaying'] = !0x1, this['_index'] = 0x0, this['_clipChang' + 'ed'] = !0x1, this['_group'] = null, this['_toIndex'] = -0x1, _0xd71260['__super']['call'](this), void 0x0 === _0x3eba7a && (_0x3eba7a = 0x1), void 0x0 === _0x41adab && (_0x41adab = 0x1), this['_clipX'] = _0x3eba7a, this['_clipY'] = _0x41adab, this['skin'] = _0x551ce4;
            }
            _0x3b4bb6(_0xd71260, 'laya.ui.Cl' + 'ip', _0x4e1338);
            var _0x5db04a = _0xd71260['prototype'];
            return _0x5db04a['destroy'] = function (_0x31d4ab) {
                void 0x0 === _0x31d4ab && (_0x31d4ab = !0x0), _0x4e1338['prototype']['destroy']['call'](this, !0x0), this['_bitmap'] && this['_bitmap']['destroy'](), this['_bitmap'] = null, this['_sources'] = null;
            }, _0x5db04a['dispose'] = function () {
                this['destroy'](!0x0), _0x4d77ad['loader']['clearRes'](this['_skin']);
            }, _0x5db04a['createChil' + 'dren'] = function () {
                this['graphics'] = this['_bitmap'] = new _0x1402c1();
            }, _0x5db04a['_onDisplay'] = function (_0x15ed00) {
                this['_isPlaying'] ? this['_getBit'](0x80) ? this['play']() : this['stop']() : this['_autoPlay'] && this['play']();
            }, _0x5db04a['_skinLoade' + 'd'] = function () {
                this['_setClipCh' + 'anged'](), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x5db04a['changeClip'] = function () {
                if (this['_clipChang' + 'ed'] = !0x1, this['_skin']) {
                    var _0xfd25d6 = _0x27b7ec['getRes'](this['_skin']);
                    _0xfd25d6 ? this['loadComple' + 'te'](this['_skin'], _0xfd25d6) : _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['loadComple' + 'te'], [this['_skin']]));
                }
            }, _0x5db04a['loadComple' + 'te'] = function (_0x2568f2, _0x2d797f) {
                if (_0x2568f2 === this['_skin'] && _0x2d797f) {
                    var _0x2e9fa7 = this['_clipWidth'] || Math['ceil'](_0x2d797f['sourceWidt' + 'h'] / this['_clipX']), _0x91fe1e = this['_clipHeigh' + 't'] || Math['ceil'](_0x2d797f['sourceHeig' + 'ht'] / this['_clipY']), _0x198a6a = this['_skin'] + _0x2e9fa7 + _0x91fe1e, _0x413e9f = _0x2767d0['I']['get'](_0x198a6a);
                    if (_0x4e82e1['isOkTextur' + 'eList'](_0x413e9f) || (_0x413e9f = null), _0x413e9f)
                        this['_sources'] = _0x413e9f;
                    else {
                        this['_sources'] = [];
                        for (var _0x5a7b21 = 0x0; _0x5a7b21 < this['_clipY']; _0x5a7b21++)
                            for (var _0x474ec7 = 0x0; _0x474ec7 < this['_clipX']; _0x474ec7++)
                                this['_sources']['push'](_0x898082['createFrom' + 'Texture'](_0x2d797f, _0x2e9fa7 * _0x474ec7, _0x91fe1e * _0x5a7b21, _0x2e9fa7, _0x91fe1e));
                        _0x2767d0['I']['set'](_0x198a6a, this['_sources']);
                    }
                    this['index'] = this['_index'], this['event']('loaded'), this['onCompResi' + 'ze']();
                }
            }, _0x5db04a['measureWid' + 'th'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['width'];
            }, _0x5db04a['measureHei' + 'ght'] = function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_bitmap']['height'];
            }, _0x5db04a['play'] = function (_0x1ed26b, _0x30db19) {
                void 0x0 === _0x1ed26b && (_0x1ed26b = 0x0), void 0x0 === _0x30db19 && (_0x30db19 = -0x1), this['_isPlaying'] = !0x0, this['index'] = _0x1ed26b, this['_toIndex'] = _0x30db19, this['_index']++, _0x4d77ad['timer']['loop'](this['interval'], this, this['_loop']), this['on']('display', this, this['_onDisplay']), this['on']('undisplay', this, this['_onDisplay']);
            }, _0x5db04a['_loop'] = function () {
                this['_visible'] && this['_sources'] && (this['_index']++, this['_toIndex'] > -0x1 && this['_index'] >= this['_toIndex'] ? this['stop']() : this['_index'] >= this['_sources']['length'] && (this['_index'] = 0x0), this['index'] = this['_index']);
            }, _0x5db04a['stop'] = function () {
                this['_isPlaying'] = !0x1, _0x4d77ad['timer']['clear'](this, this['_loop']), this['event']('complete');
            }, _0x5db04a['_setClipCh' + 'anged'] = function () {
                this['_clipChang' + 'ed'] || (this['_clipChang' + 'ed'] = !0x0, this['callLater'](this['changeClip']));
            }, _0x3be031(0x0, _0x5db04a, 'interval', function () {
                return this['_interval'];
            }, function (_0x2f3077) {
                this['_interval'] != _0x2f3077 && (this['_interval'] = _0x2f3077, this['_isPlaying'] && this['play']());
            }), _0x3be031(0x0, _0x5db04a, 'skin', function () {
                return this['_skin'];
            }, function (_0x243187) {
                this['_skin'] != _0x243187 && (this['_skin'] = _0x243187, _0x243187 ? _0x27b7ec['getRes'](_0x243187) ? this['_skinLoade' + 'd']() : _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_bitmap']['source'] = null);
            }), _0x3be031(0x0, _0x5db04a, 'sources', function () {
                return this['_sources'];
            }, function (_0x5279a8) {
                this['_sources'] = _0x5279a8, this['index'] = this['_index'], this['event']('loaded');
            }), _0x3be031(0x0, _0x5db04a, 'clipX', function () {
                return this['_clipX'];
            }, function (_0x1750e6) {
                this['_clipX'] = _0x1750e6 || 0x1, this['_setClipCh' + 'anged']();
            }), _0x3be031(0x0, _0x5db04a, 'clipY', function () {
                return this['_clipY'];
            }, function (_0x50ccdc) {
                this['_clipY'] = _0x50ccdc || 0x1, this['_setClipCh' + 'anged']();
            }), _0x3be031(0x0, _0x5db04a, 'total', function () {
                return this['runCallLat' + 'er'](this['changeClip']), this['_sources'] ? this['_sources']['length'] : 0x0;
            }), _0x3be031(0x0, _0x5db04a, 'clipWidth', function () {
                return this['_clipWidth'];
            }, function (_0x2d492f) {
                this['_clipWidth'] = _0x2d492f, this['_setClipCh' + 'anged']();
            }), _0x3be031(0x0, _0x5db04a, 'sizeGrid', function () {
                return this['_bitmap']['sizeGrid'] ? this['_bitmap']['sizeGrid']['join'](',') : null;
            }, function (_0x2d7835) {
                this['_bitmap']['sizeGrid'] = _0x4b493c['fillArray'](_0x55fcb['defaultSiz' + 'eGrid'], _0x2d7835, Number);
            }), _0x3be031(0x0, _0x5db04a, 'group', function () {
                return this['_group'];
            }, function (_0x496021) {
                _0x496021 && this['_skin'] && _0x27b7ec['setGroup'](this['_skin'], _0x496021), this['_group'] = _0x496021;
            }), _0x3be031(0x0, _0x5db04a, 'clipHeight', function () {
                return this['_clipHeigh' + 't'];
            }, function (_0x5df307) {
                this['_clipHeigh' + 't'] = _0x5df307, this['_setClipCh' + 'anged']();
            }), _0x3be031(0x0, _0x5db04a, 'width', _0x4e1338['prototype']['_$get_widt' + 'h'], function (_0xc4036) {
                _0x4d77ad['superSet'](_0x14c206, this, 'width', _0xc4036), this['_bitmap']['width'] = _0xc4036;
            }), _0x3be031(0x0, _0x5db04a, 'height', _0x4e1338['prototype']['_$get_heig' + 'ht'], function (_0xc24ae6) {
                _0x4d77ad['superSet'](_0x14c206, this, 'height', _0xc24ae6), this['_bitmap']['height'] = _0xc24ae6;
            }), _0x3be031(0x0, _0x5db04a, 'index', function () {
                return this['_index'];
            }, function (_0x62aba2) {
                this['_index'] = _0x62aba2, this['_bitmap'] && this['_sources'] && (this['_bitmap']['source'] = this['_sources'][_0x62aba2]), this['event']('change');
            }), _0x3be031(0x0, _0x5db04a, 'autoPlay', function () {
                return this['_autoPlay'];
            }, function (_0x5dec6a) {
                this['_autoPlay'] != _0x5dec6a && (this['_autoPlay'] = _0x5dec6a, _0x5dec6a ? this['play']() : this['stop']());
            }), _0x3be031(0x0, _0x5db04a, 'isPlaying', function () {
                return this['_isPlaying'];
            }, function (_0x4d83fa) {
                this['_isPlaying'] = _0x4d83fa;
            }), _0x3be031(0x0, _0x5db04a, 'dataSource', _0x4e1338['prototype']['_$get_data' + 'Source'], function (_0x2e5b3d) {
                this['_dataSourc' + 'e'] = _0x2e5b3d, 'number' == typeof _0x2e5b3d && Math['floor'](_0x2e5b3d) == _0x2e5b3d || 'string' == typeof _0x2e5b3d ? this['index'] = parseInt(_0x2e5b3d) : _0x4d77ad['superSet'](_0x14c206, this, 'dataSource', _0x2e5b3d);
            }), _0x3be031(0x0, _0x5db04a, 'bitmap', function () {
                return this['_bitmap'];
            }), _0xd71260;
        }(_0x14c206)), _0x111355 = function (_0x10347c) {
            function _0x56d5b9() {
                this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['group'] = null, this['isModal'] = !0x1, this['isShowEffe' + 'ct'] = !0x0, this['isPopupCen' + 'ter'] = !0x0, this['closeType'] = null, this['_dragArea'] = null, this['_param'] = null, this['_effectTwe' + 'en'] = null, _0x56d5b9['__super']['call'](this), this['popupEffec' + 't'] = _0x56d5b9['manager']['popupEffec' + 'tHandler'], this['closeEffec' + 't'] = _0x56d5b9['manager']['closeEffec' + 'tHandler'], this['_dealDragA' + 'rea'](), this['on']('click', this, this['_onClick']);
            }
            _0x3b4bb6(_0x56d5b9, 'laya.ui.Di' + 'alog', _0x10347c);
            var _0x3b7680 = _0x56d5b9['prototype'];
            return _0x3b7680['_dealDragA' + 'rea'] = function () {
                var _0x50fa6c = this['getChildBy' + 'Name']('drag');
                _0x50fa6c && (this['dragArea'] = _0x50fa6c['_x'] + ',' + _0x50fa6c['_y'] + ',' + _0x50fa6c['width'] + ',' + _0x50fa6c['height'], _0x50fa6c['removeSelf']());
            }, _0x3b7680['_onMouseDo' + 'wn'] = function (_0x2a2e76) {
                var _0x1c46b0 = this['getMousePo' + 'int']();
                this['_dragArea']['contains'](_0x1c46b0['x'], _0x1c46b0['y']) ? this['startDrag']() : this['stopDrag']();
            }, _0x3b7680['_onClick'] = function (_0x54033d) {
                var _0x2878c1 = _0x54033d['target'];
                if (_0x2878c1)
                    switch (_0x2878c1['name']) {
                    case 'close':
                    case 'cancel':
                    case 'sure':
                    case 'no':
                    case 'ok':
                    case 'yes':
                        return void this['close'](_0x2878c1['name']);
                    }
            }, _0x3b7680['open'] = function (_0x77fe6f, _0x1204b9) {
                void 0x0 === _0x77fe6f && (_0x77fe6f = !0x0), this['_dealDragA' + 'rea'](), this['_param'] = _0x1204b9, _0x56d5b9['manager']['open'](this, _0x77fe6f, this['isShowEffe' + 'ct']), _0x56d5b9['manager']['lock'](!0x1);
            }, _0x3b7680['close'] = function (_0x8b37a9) {
                this['closeType'] = _0x8b37a9, _0x56d5b9['manager']['close'](this);
            }, _0x3b7680['destroy'] = function (_0x3d4731) {
                void 0x0 === _0x3d4731 && (_0x3d4731 = !0x0), this['closeHandl' + 'er'] = null, this['popupEffec' + 't'] = null, this['closeEffec' + 't'] = null, this['_dragArea'] = null, _0x10347c['prototype']['destroy']['call'](this, _0x3d4731);
            }, _0x3b7680['show'] = function (_0x2a38ee, _0x428f80) {
                void 0x0 === _0x2a38ee && (_0x2a38ee = !0x1), void 0x0 === _0x428f80 && (_0x428f80 = !0x0), this['_open'](!0x1, _0x2a38ee, _0x428f80);
            }, _0x3b7680['popup'] = function (_0x2ea7ff, _0xcc5cb0) {
                void 0x0 === _0x2ea7ff && (_0x2ea7ff = !0x1), void 0x0 === _0xcc5cb0 && (_0xcc5cb0 = !0x0), this['_open'](!0x0, _0x2ea7ff, _0xcc5cb0);
            }, _0x3b7680['_open'] = function (_0x4d182a, _0x1526cc, _0x133c74) {
                this['isModal'] = _0x4d182a, this['isShowEffe' + 'ct'] = _0x133c74, _0x56d5b9['manager']['lock'](!0x0), this['open'](_0x1526cc);
            }, _0x3be031(0x0, _0x3b7680, 'dragArea', function () {
                return this['_dragArea'] ? this['_dragArea']['toString']() : null;
            }, function (_0x564f24) {
                if (_0x564f24) {
                    var _0x557a8a = _0x4b493c['fillArray']([
                        0x0,
                        0x0,
                        0x0,
                        0x0
                    ], _0x564f24, Number);
                    this['_dragArea'] = new _0x12cc88(_0x557a8a[0x0], _0x557a8a[0x1], _0x557a8a[0x2], _0x557a8a[0x3]), this['on']('mousedown', this, this['_onMouseDo' + 'wn']);
                } else
                    this['_dragArea'] = null, this['off']('mousedown', this, this['_onMouseDo' + 'wn']);
            }), _0x3be031(0x0, _0x3b7680, 'isPopup', function () {
                return null != this['parent'];
            }), _0x3be031(0x0, _0x3b7680, 'zOrder', _0x10347c['prototype']['_$get_zOrd' + 'er'], function (_0x2405a8) {
                _0x4d77ad['superSet'](_0xc11a77, this, 'zOrder', _0x2405a8), _0x56d5b9['manager']['_checkMask']();
            }), _0x3be031(0x1, _0x56d5b9, 'manager', function () {
                return _0x56d5b9['_manager'] = _0x56d5b9['_manager'] || new _0x573380();
            }, function (_0x5866ef) {
                _0x56d5b9['_manager'] = _0x5866ef;
            }), _0x56d5b9['setLockVie' + 'w'] = function (_0xe30ada) {
                _0x56d5b9['manager']['setLockVie' + 'w'](_0xe30ada);
            }, _0x56d5b9['lock'] = function (_0x1cea51) {
                _0x56d5b9['manager']['lock'](_0x1cea51);
            }, _0x56d5b9['closeAll'] = function () {
                _0x56d5b9['manager']['closeAll']();
            }, _0x56d5b9['getDialogs' + 'ByGroup'] = function (_0x31d44c) {
                return _0x56d5b9['manager']['getDialogs' + 'ByGroup'](_0x31d44c);
            }, _0x56d5b9['closeByGro' + 'up'] = function (_0x1073f4) {
                return _0x56d5b9['manager']['closeByGro' + 'up'](_0x1073f4);
            }, _0x56d5b9['CLOSE'] = 'close', _0x56d5b9['CANCEL'] = 'cancel', _0x56d5b9['SURE'] = 'sure', _0x56d5b9['NO'] = 'no', _0x56d5b9['YES'] = 'yes', _0x56d5b9['OK'] = 'ok', _0x56d5b9['_manager'] = null, _0x56d5b9;
        }(_0xc11a77), _0x43db41 = function (_0x2928e) {
            function _0x496b3b(_0x2a04a6) {
                this['gameStopHD'] = !0x1, this['iconImgTl'] = null, this['_iconImage'] = null, this['_moreBox'] = null, this['_gameBox'] = null, this['screenType'] = 0x0, this['_moreGameD' + 'ataUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/more/game' + 'list2.json', this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['isShow'] = !0x1, this['dinfo'] = null, this['ErrorUrlHt' + 'tps'] = 'https://el' + 'astic.laya' + 'box.com/', this['tongjiType'] = 'bdm', void 0x0 === _0x2a04a6 && (_0x2a04a6 = 0x0), _0x496b3b['__super']['call'](this), this['screenType'] = _0x2a04a6, this['init']();
            }
            var _0x4fb7fe, _0x3cf53e;
            _0x3b4bb6(_0x496b3b, 'laya.ui.Mo' + 'reGame', _0xc11a77);
            var _0x5ae68d = _0x496b3b['prototype'];
            return _0x5ae68d['getLocalDa' + 'teString'] = function (_0x1a3f32) {
                void 0x0 === _0x1a3f32 && (_0x1a3f32 = 0x0);
                var _0x5d9504 = this['getDateByT' + 'imestamp'](_0x1a3f32)['toLocaleDa' + 'teString']();
                if (_0x151f5a['onLimixiu'] || _0x151f5a['onMiniGame']) {
                    var _0x5d9962 = new Date();
                    _0x5d9504 = _0x496b3b['toLocaleDa' + 'teString'](_0x5d9962['getTime']());
                }
                var _0xab0b05 = new RegExp('/', 'g');
                return _0x5d9504 = _0x5d9504['replace'](_0xab0b05, '-');
            }, _0x5ae68d['getDateByT' + 'imestamp'] = function (_0x240584) {
                return void 0x0 === _0x240584 && (_0x240584 = 0x0), _0x240584 && '' != _0x240584 ? new Date(_0x240584) : new Date();
            }, _0x5ae68d['reportErro' + 'r'] = function (_0x52fecf, _0x4c26e9, _0x442255) {
                void 0x0 === _0x4c26e9 && (_0x4c26e9 = ''), _0x442255 = _0x442255 || {};
                var _0x1f04f1 = Date['now'](), _0x4b5026 = new Date(_0x1f04f1 + 0x0);
                _0x442255['date'] = _0x4b5026['toLocaleSt' + 'ring'](), _0x442255['etype'] = _0x52fecf, 'error' != _0x52fecf && 'statistics' != _0x52fecf && (_0x52fecf = 'statistics'), _0x442255['version'] = 'V0.0.1', _0x442255['gameId'] = 0x2774, _0x442255['dinfo'] = this['dinfo'], _0x442255['channel'] = -0x3e8, _0x442255['msg'] = _0x4c26e9, _0x442255['@timestamp'] = _0x4b5026['toISOStrin' + 'g'](), _0x442255['user'] = this['getUserId'](), _0x442255['openid'] = this['getOpenId']();
                var _0xd48214 = _0x496b3b['getDay'](_0x4b5026);
                _0x442255['rdate'] = _0xd48214, _0x442255['day'] = _0x4b5026['getDate']() + '', _0x442255['hour'] = _0x4b5026['getHours']() + '', _0x442255['minute'] = _0x4b5026['getMinutes']() + '', _0x442255['gameurl'] = _0x306107['baseURI'], _0x442255['regTime'] = 0x0, 'error' == _0x52fecf ? this['sendLog'](_0x442255, this['tongjiType'] + 'error-' + _0xd48214['substring'](0x0, 0x6) + '/' + _0x52fecf + '/', _0x52fecf) : this['sendLog'](_0x442255, this['tongjiType'] + '-' + _0xd48214['substring'](0x0, 0x6) + '/' + _0x52fecf + '/', _0x52fecf);
            }, _0x5ae68d['getUserId'] = function () {
                var _0xf4efd4 = parseInt(_0x20e7ff['getItem']('layauserid') + '') || -0x1;
                return -0x1 == _0xf4efd4 && (_0xf4efd4 = this['randRange'](0x0, 0x3b9aca00), _0x20e7ff['setItem']('layauserid', _0xf4efd4 + '')), _0xf4efd4;
            }, _0x5ae68d['getOpenId'] = function () {
                var _0x1dab2c = _0x20e7ff['getItem']('openid');
                if (null == _0x1dab2c || '' == _0x1dab2c) {
                    _0x1dab2c = '';
                    for (var _0x52f086 = 0x0; _0x52f086 < 0x20; _0x52f086++) {
                        var _0x4a7dd3 = this['randRange'](0x0, 0x3e);
                        _0x1dab2c += ('abcdefghij' + 'klmnopqrst' + 'uvwxyzABCD' + 'EFGHIJKLMN' + 'OPQRSTUVWX' + 'YZ01234567' + '89')['charAt'](_0x4a7dd3);
                    }
                    _0x20e7ff['setItem']('openid', _0x1dab2c);
                }
                return _0x1dab2c;
            }, _0x5ae68d['sendLog'] = function (_0x56b2f5, _0x407f9b, _0xd828f7) {
                var _0x454938 = this, _0x92639c = new _0x2cf13a();
                _0x92639c['on']('error', this, function (_0x67310e, _0x102db1, _0x222b28) {
                    _0x222b28 && -0x1 != _0x222b28['indexOf']('[404]') && new _0x2cf13a()['send'](_0x454938['ErrorUrlHt' + 'tps'] + 'garbage/' + _0x102db1 + '/', JSON['stringify'](_0x67310e), 'post', 'text', [
                        'Content-Ty' + 'pe',
                        'applicatio' + 'n/json'
                    ]);
                }, [
                    _0x56b2f5,
                    _0xd828f7
                ]), _0x151f5a['onBDMiniGa' + 'me'] && (_0x56b2f5['gameurl'] = ''), _0x92639c['send'](this['ErrorUrlHt' + 'tps'] + _0x407f9b, JSON['stringify'](_0x56b2f5), 'post', 'text', [
                    'Content-Ty' + 'pe',
                    'applicatio' + 'n/json'
                ]);
            }, _0x5ae68d['initEvent'] = function () {
                this['on']('click', this, this['onIconClic' + 'k']);
            }, _0x5ae68d['onStageRes' + 'ize'] = function () {
                var _0x176a8e = Math['min'](_0x4d77ad['stage']['width'] / _0x4d77ad['stage']['designWidt' + 'h'], _0x4d77ad['stage']['height'] / _0x4d77ad['stage']['designHeig' + 'ht']);
                _0x4d77ad['stage']['width'] < 0x2d0 && (_0x176a8e = 0.9), this['_moreBox'] && this['_moreBox']['scale'](_0x176a8e, _0x176a8e), this['_gameBox'] && this['_gameBox']['scale'](_0x176a8e, _0x176a8e);
            }, _0x5ae68d['tada'] = function (_0x47e966, _0x5ac920, _0x43ce20, _0x468744) {
                void 0x0 === _0x43ce20 && (_0x43ce20 = 1.1), void 0x0 === _0x468744 && (_0x468744 = 0x1);
                var _0x151549 = new _0x1f746d();
                return _0x151549['reset'](), _0x151549['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': 0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': -0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': 0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': -0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': 0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': -0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': 0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': -0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x43ce20,
                    'scaleY': _0x43ce20,
                    'rotation': 0x3
                }, 0.1 * _0x5ac920)['to'](_0x47e966, {
                    'scaleX': _0x468744,
                    'scaleY': _0x468744,
                    'rotation': 0x0
                }, 0.1 * _0x5ac920), _0x151549['play'](0x0), _0x151549;
            }, _0x5ae68d['dispose'] = function () {
                this['removeEven' + 't'](), this['gameStopHD'] = !0x0, _0x496b3b['_moreGameD' + 'ata'] = null, this['_iconImage' + 'Obj'] = null, this['clickCallB' + 'ack'] = null, this['closeCallB' + 'ack'] = null, this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null), this['_moreBox'] && (this['_moreBox']['removeChil' + 'dren'](), this['_moreBox'] = null), this['_gameBox'] && (this['_gameBox']['removeChil' + 'dren'](), this['_gameBox'] = null), this['_iconImage'] && (this['_iconImage']['removeSelf'](), this['_iconImage'] = null);
            }, _0x5ae68d['onSetIconT' + 'ype'] = function (_0x241214) {
                this['gameStopHD'] = !_0x241214, this['visible'] = _0x241214;
            }, _0x5ae68d['checkIconI' + 'mgHD'] = function () {
                this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] = this['tada'](this['_iconImage'], 0x4b0, 1.1, 0.9), this['iconImgTl']['on']('complete', this, this['onTlComple' + 'te']);
            }, _0x5ae68d['onTlComple' + 'te'] = function () {
                if (this['parent']) {
                    if (this['_iconImage']['scale'](0.9, 0.9), this['_iconImage']['rotation'] = 0x0, this['gameStopHD'] && this['iconImgTl'])
                        return this['iconImgTl']['offAll']('complete'), void (this['iconImgTl'] = null);
                    _0x4d77ad['timer']['once'](0x3e8, this, this['onYanChiPl' + 'ay']);
                } else
                    this['iconImgTl'] && (this['iconImgTl']['offAll'](), this['iconImgTl'] = null);
            }, _0x5ae68d['onYanChiPl' + 'ay'] = function () {
                this['parent'] && this['iconImgTl'] ? this['iconImgTl']['play'](0x0) : this['iconImgTl'] && (this['iconImgTl']['offAll']('complete'), this['iconImgTl'] = null);
            }, _0x5ae68d['removeEven' + 't'] = function () {
                this['off']('click', this, this['onIconClic' + 'k']);
            }, _0x5ae68d['onIconClic' + 'k'] = function () {
                this['isShow'] = !0x0, null != this['clickCallB' + 'ack'] && this['clickCallB' + 'ack']['run']();
                var _0x129b99 = _0x20e7ff['getItem']('currentTim' + 'e'), _0x222f24 = this['getLocalDa' + 'teString']();
                _0x129b99 != _0x222f24 ? (_0x20e7ff['setItem']('currentTim' + 'e', _0x222f24), this['reportErro' + 'r'](_0x496b3b['_moreGameD' + 'ata']['statid1'])) : this['reportErro' + 'r'](_0x496b3b['_moreGameD' + 'ata']['statid2']), this['onResLoade' + 'd']();
            }, _0x5ae68d['onResLoade' + 'd'] = function () {
                if (this['_moreBox'])
                    this['_moreBox']['visible'] = !0x0;
                else {
                    this['_moreBox'] = new _0x560329(), _0x4d77ad['stage']['addChild'](this['_moreBox']), this['_moreBox']['zOrder'] = 0x1869f, this['_moreBox']['left'] = this['_moreBox']['right'] = this['_moreBox']['top'] = this['_moreBox']['bottom'] = 0x0;
                    var _0x55c85e = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('img_white_' + 'bg'), this['_moreBox']);
                    _0x55c85e['top'] = _0x55c85e['left'] = _0x55c85e['right'] = _0x55c85e['bottom'] = 0x0, _0x55c85e['sizeGrid'] = '1,1,1,1,1';
                    var _0xfdb06f = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('hengfengex' + 'ian'), this['_moreBox']);
                    _0xfdb06f['left'] = _0xfdb06f['right'] = 0x0, _0xfdb06f['y'] = 0x84, _0xfdb06f['alpha'] = 0.2;
                    var _0x280aab = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('img_font_j' + 'ingcai'), this['_moreBox']);
                    _0x280aab['on']('click', this, this['onJiantouI' + 'mgClick']), this['isQMP']() && this['screenType'] ? _0x280aab['pos'](0xf, 0x46) : _0x280aab['pos'](0xf, 0x2d);
                    var _0x495062 = new _0x475063();
                    this['_moreBox']['addChild'](_0x495062), _0x495062['itemRender'] = _0x4fb7fe, _0x495062['selectEnab' + 'le'] = !0x0, _0x495062['vScrollBar' + 'Skin'] = '', _0x495062['scrollBar']['autoHide'] = !0x0, _0x495062['scrollBar']['elasticDis' + 'tance'] = 0xfa, _0x495062['renderHand' + 'ler'] = new _0x1ef768(this, this['onGameList' + 'Render']);
                    var _0x5c1bb3 = _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'], _0x2145d2 = [];
                    _0x2145d2['push'](_0x5c1bb3[0x0]), _0x2145d2['push'](_0x5c1bb3[0x1]);
                    var _0x5531e7 = this['RandomNumB' + 'oth'](_0x2145d2['length'], _0x5c1bb3['length'] - _0x2145d2['length'], _0x5c1bb3['length']);
                    if (!_0x5531e7)
                        return void (this['visible'] = !0x1);
                    try {
                        for (var _0x2567f3 = 0x0, _0x1c04be = _0x5531e7['length']; _0x2567f3 < _0x1c04be; _0x2567f3++) {
                            var _0x2019eb = _0x5531e7[_0x2567f3];
                            _0x2145d2['push'](_0x5c1bb3[_0x2019eb]);
                        }
                        _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = [], _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'] = _0x2145d2, _0x495062['array'] = _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    } catch (_0x2a153d) {
                        _0x495062['array'] = _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                    }
                    this['screenType'] && (_0x495062['spaceY'] = 0xa, _0x495062['width'] = 0x2b2, this['isQMP']() ? _0x495062['height'] = _0x4d77ad['stage']['height'] + 0x82 : _0x495062['height'] = 0x473, _0x495062['y'] = 0x8b, _0x495062['centerX'] = 0x0), this['onStageRes' + 'ize']();
                }
            }, _0x5ae68d['RandomNumB' + 'oth'] = function (_0xb58c36, _0x4996ca, _0x1e861a) {
                for (var _0x245e23 = [], _0x35e2ed = _0xb58c36; _0x35e2ed < _0x1e861a; _0x35e2ed++)
                    _0x245e23['push'](_0x35e2ed);
                var _0x394c63 = [], _0x161bcb = _0x245e23['length'];
                for (_0x35e2ed = 0x0; _0x35e2ed < _0x161bcb; _0x35e2ed++) {
                    _0x245e23['length'];
                    var _0x342cc4 = Math['floor'](Math['random']() * _0x245e23['length']);
                    if (_0x394c63['push'](_0x245e23[_0x342cc4]), _0x245e23['splice'](_0x342cc4, 0x1), _0x245e23['length'] <= _0x161bcb - _0x4996ca)
                        return _0x394c63;
                }
                return null;
            }, _0x5ae68d['isQMP'] = function () {
                var _0x5e6c81 = !0x1, _0x5186a1 = 0x0;
                if (_0x5186a1 = 'horizontal' == _0x4d77ad['stage']['screenMode'] ? _0x151f5a['height'] % 0x9 : _0x151f5a['width'] % 0x9, _0x151f5a['onAndroid'] && 0x0 == _0x5186a1) {
                    var _0x504aa3 = 0x0;
                    _0x504aa3 = 'horizontal' == _0x4d77ad['stage']['screenMode'] ? _0x151f5a['width'] : _0x151f5a['height'], -0x1 != [
                        0x8e8,
                        0x870,
                        0x8c4,
                        0xc30,
                        0x8c8,
                        0x924,
                        0x906
                    ]['indexOf'](_0x504aa3) && (_0x5e6c81 = !0x0);
                }
                var _0x2b280f = /iPhone/gi['test'](_0x151f5a['window']['navigator']['userAgent']) && 0x177 == Math['min'](_0x151f5a['clientHeig' + 'ht'], _0x151f5a['clientWidt' + 'h']) && 0x32c == Math['max'](_0x151f5a['clientHeig' + 'ht'], _0x151f5a['clientWidt' + 'h']), _0x1450ca = 0x19e == Math['min'](_0x151f5a['clientHeig' + 'ht'], _0x151f5a['clientWidt' + 'h']) && 0x380 == Math['max'](_0x151f5a['clientHeig' + 'ht'], _0x151f5a['clientWidt' + 'h']);
                return !_0x151f5a['onMiniGame'] && !_0x151f5a['onBDMiniGa' + 'me'] || _0x151f5a['onAndroid'] || !_0x2b280f && !_0x1450ca || (_0x5e6c81 = !0x0), _0x5e6c81;
            }, _0x5ae68d['onDrawShap' + 'es'] = function (_0xe16419, _0x3baca5, _0x3ea59f, _0x1130dd) {
                void 0x0 === _0x3ea59f && (_0x3ea59f = 0x5), void 0x0 === _0x1130dd && (_0x1130dd = !0x1);
                var _0x1ab8f8 = _0x3ea59f;
                _0x1130dd && (_0x1ab8f8 = 0x0);
                var _0x5ccac1 = new _0x51555a();
                return _0x5ccac1['graphics']['drawPath'](0x0, 0x0, [
                    [
                        'moveTo',
                        _0x3ea59f,
                        0x0
                    ],
                    [
                        'lineTo',
                        0x69,
                        0x0
                    ],
                    [
                        'arcTo',
                        _0xe16419,
                        0x0,
                        _0xe16419,
                        _0x3ea59f,
                        _0x3ea59f
                    ],
                    [
                        'lineTo',
                        _0xe16419,
                        _0x3baca5
                    ],
                    [
                        'arcTo',
                        _0xe16419,
                        _0x3baca5 + _0x3ea59f,
                        0x69,
                        _0x3baca5 + _0x3ea59f,
                        _0x1ab8f8
                    ],
                    [
                        'lineTo',
                        _0x3ea59f,
                        _0x3baca5 + _0x3ea59f
                    ],
                    [
                        'arcTo',
                        0x0,
                        _0x3baca5 + _0x3ea59f,
                        0x0,
                        _0x3baca5,
                        _0x1ab8f8
                    ],
                    [
                        'lineTo',
                        0x0,
                        _0x3ea59f
                    ],
                    [
                        'arcTo',
                        0x0,
                        0x0,
                        _0x3ea59f,
                        0x0,
                        _0x3ea59f
                    ],
                    ['closePath']
                ], { 'fillStyle': '#ff0000' }), _0x5ccac1;
            }, _0x5ae68d['onCreateMa' + 'skImg'] = function (_0x332e10, _0x22551f) {
                var _0x5ae25f = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('dayuan'), _0x22551f), _0x3f00ae = this['onCreateIm' + 'age'](_0x332e10, _0x5ae25f);
                _0x3f00ae['pos'](0xb, 0xa);
                var _0x3ca587 = new _0x51555a();
                return _0x3ca587['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), _0x3f00ae['mask'] = _0x3ca587, _0x5ae25f['scale'](0.7, 0.7), _0x5ae25f;
            }, _0x5ae68d['onGameList' + 'Render'] = function (_0x1d4c3a, _0x250aaa) {
                var _0x754b3b = _0x496b3b['_moreGameD' + 'ata']['marvellous' + 'Game']['gameList'];
                if (!(_0x250aaa < 0x0 || _0x250aaa > _0x754b3b['length'] - 0x1)) {
                    var _0x27d1c3 = _0x754b3b[_0x250aaa];
                    _0x1d4c3a['init'](_0x27d1c3, this['screenType'], new _0x1ef768(this, this['onItemClic' + 'kCallBack']));
                }
            }, _0x5ae68d['onItemClic' + 'kCallBack'] = function (_0x44e0a2) {
                var _0x3926c9 = this;
                if (swan['navigateTo' + 'MiniProgra' + 'm']) {
                    var _0x583f88 = _0x44e0a2['appKey'], _0x26dca7 = _0x44e0a2['path'], _0x4f4d1d = _0x44e0a2['extendInfo'];
                    swan['navigateTo' + 'MiniProgra' + 'm']({
                        'appKey': _0x583f88,
                        'path': _0x26dca7,
                        'extraData': _0x4f4d1d,
                        'success': function (_0x166e03) {
                        },
                        'fail': function (_0x1382f5) {
                        },
                        'complete': function (_0x425f44) {
                            _0x3926c9['reportErro' + 'r'](_0x44e0a2['statid']);
                        }['bind'](this)
                    });
                }
            }, _0x5ae68d['onJiantouI' + 'mgClick'] = function (_0x2bb66c) {
                this['isShow'] = !0x1, this['_moreBox'] && (this['_moreBox']['visible'] = !0x1), null != this['closeCallB' + 'ack'] && this['closeCallB' + 'ack']['run']();
            }, _0x5ae68d['onCreateLa' + 'bel'] = function (_0x483bf6, _0x2baf9f, _0x1ae8e1, _0x3a742e, _0x26c4ee, _0x332a17, _0x5ba297) {
                void 0x0 === _0x1ae8e1 && (_0x1ae8e1 = 0x18), void 0x0 === _0x3a742e && (_0x3a742e = '#000000'), void 0x0 === _0x26c4ee && (_0x26c4ee = !0x1), void 0x0 === _0x332a17 && (_0x332a17 = 'center'), void 0x0 === _0x5ba297 && (_0x5ba297 = 0xa);
                var _0x1c9e11 = new _0x30df4a();
                return _0x1c9e11['text'] = _0x483bf6, _0x1c9e11['font'] = 'Microsoft\x20' + 'YaHei', _0x1c9e11['fontSize'] = _0x1ae8e1, _0x1c9e11['color'] = _0x3a742e, _0x1c9e11['bold'] = !0x0, _0x1c9e11['leading'] = _0x5ba297, _0x1c9e11['valign'] = 'middle', _0x1c9e11['align'] = _0x332a17, _0x1c9e11['wordWrap'] = _0x26c4ee, _0x2baf9f['addChild'](_0x1c9e11), _0x1c9e11;
            }, _0x5ae68d['onCreateIm' + 'age'] = function (_0x56461e, _0x2e83ec) {
                var _0x428a6e = new _0x354d99();
                return _0x428a6e['skin'] = _0x56461e, _0x2e83ec['addChild'](_0x428a6e), _0x428a6e;
            }, _0x5ae68d['init'] = function () {
                var _0x552155 = _0x151f5a['window']['navigator']['userAgent']['indexOf']('SwanGame') > -0x1;
                this['visible'] = !0x1, _0x552155 && (this['dinfo'] = JSON['stringify'](laya['bd']['mini']['BMiniAdapt' + 'er']['systemInfo']), this['onGetAdvsL' + 'istData']());
            }, _0x5ae68d['randRange'] = function (_0x344d07, _0x2dbbc2) {
                return Math['floor'](Math['random']() * (_0x2dbbc2 - _0x344d07 + 0x1)) + _0x344d07;
            }, _0x5ae68d['onGetAdvsL' + 'istData'] = function () {
                var _0x1211a1 = this, _0x53180c = this['randRange'](0x2710, 0xf4240), _0x299d22 = this['_moreGameD' + 'ataUrl'] + '?' + _0x53180c;
                _0x496b3b['_http']['open']('get', _0x299d22, !0x0), _0x496b3b['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), _0x496b3b['_http']['responseTy' + 'pe'] = 'text', _0x496b3b['_http']['onerror'] = function (_0x2466ee) {
                    _0x1211a1['_onError'](_0x2466ee);
                }, _0x496b3b['_http']['onload'] = function (_0x2fceb2) {
                    _0x1211a1['_onLoad'](_0x2fceb2);
                }, _0x496b3b['_http']['send'](null);
            }, _0x5ae68d['_onError'] = function (_0x49a8d4) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + _0x496b3b['_http']['status'] + '\x20text:' + _0x496b3b['_http']['statusText']);
            }, _0x5ae68d['_onLoad'] = function (_0x24e02a) {
                var _0x35ac3e = _0x496b3b['_http'], _0x4e2be1 = void 0x0 !== _0x35ac3e['status'] ? _0x35ac3e['status'] : 0xc8;
                0xc8 === _0x4e2be1 || 0xcc === _0x4e2be1 || 0x0 === _0x4e2be1 ? this['complete']() : this['error']('[' + _0x35ac3e['status'] + ']' + _0x35ac3e['statusText'] + ':' + _0x35ac3e['responseUR' + 'L']);
            }, _0x5ae68d['error'] = function (_0x302f1e) {
                this['event']('error', _0x302f1e);
            }, _0x5ae68d['complete'] = function () {
                try {
                    var _0x1bab61 = _0x496b3b['_http']['response'] || _0x496b3b['_http']['responseTe' + 'xt'];
                    _0x496b3b['_moreGameD' + 'ata'] = JSON['parse'](_0x1bab61), this['initUI']();
                } catch (_0x5213ce) {
                    !0x1, this['error'](_0x5213ce['message']);
                }
            }, _0x5ae68d['initUI'] = function () {
                _0x496b3b['_moreGameD' + 'ata']['isOpen'] && this['screenType'] ? (this['_iconImage'] || (this['_iconImage'] = new _0x354d99(), this['addChild'](this['_iconImage'])), this['_iconImage']['skin'] = _0x496b3b['onGetImgSk' + 'inUrl'](_0x496b3b['_moreGameD' + 'ata']['icon']), this['_iconImage' + 'Obj'] && (this['_iconImage']['size'](this['_iconImage' + 'Obj']['width'], this['_iconImage' + 'Obj']['height']), this['_iconImage']['pivot'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2), this['_iconImage']['pos'](this['_iconImage' + 'Obj']['width'] / 0x2, this['_iconImage' + 'Obj']['height'] / 0x2)), this['visible'] = !0x0, this['initEvent'](), this['gameStopHD'] = !0x1, this['checkIconI' + 'mgHD']()) : this['visible'] = !0x1;
            }, _0x5ae68d['setIconSiz' + 'e'] = function (_0x3702a9, _0x22259b) {
                this['_iconImage'] && (this['_iconImage']['size'](_0x3702a9, _0x22259b), this['_iconImage']['pivot'](_0x3702a9 / 0x2, _0x22259b / 0x2), this['_iconImage']['pos'](_0x3702a9 / 0x2, _0x22259b / 0x2)), this['_iconImage' + 'Obj'] = {
                    'width': _0x3702a9,
                    'height': _0x22259b
                };
            }, _0x496b3b['toLocaleDa' + 'teString'] = function (_0x1b41bc) {
                return _0x496b3b['getDateFor' + 'matStr'](_0x1b41bc, '/');
            }, _0x496b3b['getDateFor' + 'matStr'] = function (_0x5b3480, _0x523c43) {
                void 0x0 === _0x523c43 && (_0x523c43 = 'yynndd');
                var _0x25ba68 = new Date(_0x5b3480), _0x44d9d9 = _0x25ba68['getFullYea' + 'r'](), _0x36fb7f = _0x25ba68['getMonth']() + 0x1, _0x4724e2 = _0x25ba68['getDate'](), _0x3038fe = _0x25ba68['getHours'](), _0x3afca5 = _0x25ba68['getMinutes'](), _0x14bf64 = _0x25ba68['getSeconds']();
                switch (_0x523c43) {
                case 'yynndd':
                    return _0x44d9d9['toString']() + '年' + _0x36fb7f['toString']() + '月' + _0x4724e2['toString']() + '日';
                case '/':
                    return _0x44d9d9['toString']() + '/' + _0x36fb7f['toString']() + '/' + _0x4724e2['toString']();
                }
                return _0x44d9d9['toString']() + '年' + _0x36fb7f['toString']() + '月' + _0x4724e2['toString']() + '日' + _0x3038fe['toString']() + '时' + _0x3afca5['toString']() + '分' + _0x14bf64['toString']() + '秒';
            }, _0x496b3b['getDay'] = function (_0x4b3bf5) {
                var _0x408bc5 = _0x4b3bf5['getMonth']() + 0x1, _0x625333 = _0x4b3bf5['getDate']();
                return _0x4b3bf5['getFullYea' + 'r']() + '' + (_0x408bc5 < 0xa ? '0' + _0x408bc5 : _0x408bc5) + (_0x625333 < 0xa ? '0' + _0x625333 : _0x625333);
            }, _0x496b3b['onGetAtlas' + 'DanImgUrl'] = function (_0xe5fdec) {
                return _0x496b3b['_moreGameD' + 'ata']['imgPath'] + _0x496b3b['_moreGameD' + 'ata']['atlas'] + _0xe5fdec + '.png';
            }, _0x496b3b['onGetImgSk' + 'inUrl'] = function (_0x1de407) {
                return _0x496b3b['_moreGameD' + 'ata']['imgPath'] + _0x1de407;
            }, _0x496b3b['onGetIconI' + 'mgSkinUrl'] = function (_0x37bd42) {
                return _0x496b3b['_moreGameD' + 'ata']['iconPath'] + _0x37bd42;
            }, _0x496b3b['_moreGameD' + 'ata'] = null, _0x2da4d9(_0x496b3b, [
                '_http',
                function () {
                    return this['_http'] = new _0x151f5a['window']['XMLHttpReq' + 'uest']();
                }
            ]), _0x496b3b['__init$'] = function () {
                _0x4fb7fe = function (_0x3ffa8c) {
                    function _0x423415() {
                        this['titleLabel'] = null, this['gameListBo' + 'x'] = null, _0x423415['__super']['call'](this);
                    }
                    _0x3b4bb6(_0x423415, '', _0x560329);
                    var _0x2974f5 = _0x423415['prototype'];
                    return _0x2974f5['init'] = function (_0x523af1, _0x268593, _0x1c3cc2) {
                        if (this['titleLabel'] ? this['titleLabel']['text'] = _0x523af1['title'] : (this['titleLabel'] = this['onCreateLa' + 'bel'](_0x523af1['title'], this, 0x20, '#3d3939'), this['titleLabel']['pos'](0x8, 0x0), this['titleLabel']['size'](0xa2, 0x32)), this['gameListBo' + 'x']) {
                            for (_0x3db778 = 0x0, _0xf21a3 = this['gameListBo' + 'x']['_children']['length']; _0x3db778 < _0xf21a3; _0x3db778++)
                                (_0x266a78 = this['gameListBo' + 'x']['_children'][_0x3db778])['init'](_0x523af1['gameList'][_0x3db778], _0x268593, _0x1c3cc2);
                        } else {
                            this['gameListBo' + 'x'] = new _0x560329(), this['addChild'](this['gameListBo' + 'x']);
                            for (var _0x3db778 = 0x0, _0xf21a3 = _0x523af1['gameList']['length']; _0x3db778 < _0xf21a3; _0x3db778++) {
                                var _0x266a78 = new _0x3cf53e();
                                _0x266a78['init'](_0x523af1['gameList'][_0x3db778], _0x268593, _0x1c3cc2), _0x266a78['x'] = 0x0 + 0xaf * _0x3db778, _0x266a78['y'] = 0x41, this['gameListBo' + 'x']['addChild'](_0x266a78);
                            }
                        }
                        this['size'](0x2b7, 0x154);
                    }, _0x2974f5['onCreateLa' + 'bel'] = function (_0x2633fc, _0x2a76a6, _0x24ec52, _0x2fd665, _0x2c1e28) {
                        void 0x0 === _0x24ec52 && (_0x24ec52 = 0x1a), void 0x0 === _0x2fd665 && (_0x2fd665 = '#000000'), void 0x0 === _0x2c1e28 && (_0x2c1e28 = !0x0);
                        var _0x588aec = new _0x30df4a();
                        return _0x588aec['text'] = _0x2633fc, _0x588aec['font'] = 'Microsoft\x20' + 'YaHei', _0x588aec['fontSize'] = _0x24ec52, _0x588aec['color'] = _0x2fd665, _0x588aec['bold'] = _0x2c1e28, _0x588aec['leading'] = 0xa, _0x588aec['valign'] = 'middle', _0x588aec['align'] = 'center', _0x588aec['overflow'] = 'hidden', _0x2a76a6['addChild'](_0x588aec), _0x588aec;
                    }, _0x423415;
                }(), _0x3cf53e = function (_0x1c4c58) {
                    function _0x25dc29() {
                        this['kuangImg'] = null, this['iconNameLa' + 'bel'] = null, this['iconImg'] = null, this['playImg'] = null, this['itemData'] = null, this['callBackHa' + 'ndler'] = null, _0x25dc29['__super']['call'](this);
                    }
                    _0x3b4bb6(_0x25dc29, '', _0x560329);
                    var _0x5b7077 = _0x25dc29['prototype'];
                    return _0x5b7077['MoveGameIt' + 'em'] = function () {
                    }, _0x5b7077['initEvent'] = function () {
                        this['on']('click', this, this['onItemClic' + 'k']);
                    }, _0x5b7077['onItemClic' + 'k'] = function () {
                        null != this['callBackHa' + 'ndler'] && this['callBackHa' + 'ndler']['runWith']([this['itemData']]);
                    }, _0x5b7077['init'] = function (_0x3f5c14, _0x5c14a7, _0x42ec60) {
                        if (this['itemData'] = _0x3f5c14, this['callBackHa' + 'ndler'] = _0x42ec60, this['kuangImg'] ? this['kuangImg']['skin'] = _0x496b3b['onGetAtlas' + 'DanImgUrl']('dayuan') : this['kuangImg'] = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('dayuan'), this), this['iconImg'])
                            this['iconImg']['skin'] = _0x496b3b['onGetIconI' + 'mgSkinUrl'](_0x3f5c14['icon']);
                        else {
                            this['iconImg'] = this['onCreateIm' + 'age'](_0x496b3b['onGetIconI' + 'mgSkinUrl'](_0x3f5c14['icon']), this);
                            var _0x1e88f5 = new _0x51555a();
                            _0x1e88f5['graphics']['drawCircle'](0x47, 0x4a, 0x44, '#ff0000'), this['iconImg']['mask'] = _0x1e88f5, this['iconImg']['pos'](0xd, 0xa);
                        }
                        this['iconNameLa' + 'bel'] ? this['iconNameLa' + 'bel']['text'] = _0x3f5c14['name'] : (this['iconNameLa' + 'bel'] = this['onCreateLa' + 'bel'](_0x3f5c14['name'], this, 0x1c, '#3d3939'), this['iconNameLa' + 'bel']['pos'](0x7, 0xa5)), this['playImg'] ? this['playImg']['skin'] = _0x496b3b['onGetAtlas' + 'DanImgUrl']('img_play') : (this['playImg'] = this['onCreateIm' + 'age'](_0x496b3b['onGetAtlas' + 'DanImgUrl']('img_play'), this), this['playImg']['pos'](0xc, 0xd2)), this['size'](0xa5, 0x10e), this['initEvent']();
                    }, _0x5b7077['onCreateLa' + 'bel'] = function (_0x340357, _0x54f21a, _0x3888e6, _0x1c0f35, _0xabd538) {
                        void 0x0 === _0x3888e6 && (_0x3888e6 = 0x18), void 0x0 === _0x1c0f35 && (_0x1c0f35 = '#000000'), void 0x0 === _0xabd538 && (_0xabd538 = !0x1);
                        var _0x19cb3c = new _0x30df4a();
                        return _0x19cb3c['text'] = _0x340357, _0x19cb3c['font'] = 'Microsoft\x20' + 'YaHei', _0x19cb3c['fontSize'] = _0x3888e6, _0x19cb3c['color'] = _0x1c0f35, _0x19cb3c['bold'] = _0xabd538, _0x19cb3c['leading'] = 0xa, _0x19cb3c['valign'] = 'middle', _0x19cb3c['align'] = 'center', _0x19cb3c['size'](0x98, 0x2c), _0x19cb3c['overflow'] = 'hidden', _0x54f21a['addChild'](_0x19cb3c), _0x19cb3c;
                    }, _0x5b7077['onCreateIm' + 'age'] = function (_0x357213, _0x1616d0) {
                        var _0x6ed2c4 = new _0x354d99();
                        return _0x6ed2c4['skin'] = _0x357213, _0x1616d0['addChild'](_0x6ed2c4), _0x6ed2c4;
                    }, _0x25dc29;
                }();
            }, _0x496b3b;
        }(), _0xba4e3e = function (_0xc55d5e) {
            function _0x321134() {
                _0x321134['__super']['call'](this);
            }
            return _0x3b4bb6(_0x321134, 'laya.ui.VS' + 'crollBar', _0x240e90), _0x321134;
        }(), _0x51cb1c = function (_0x215242) {
            function _0x45c4ce() {
                _0x45c4ce['__super']['call'](this);
            }
            return _0x3b4bb6(_0x45c4ce, 'laya.ui.HS' + 'crollBar', _0x215242), (_0x45c4ce['prototype']['initialize'] = function () {
                _0x215242['prototype']['initialize']['call'](this), this['slider']['isVertical'] = !0x1;
            }, _0x45c4ce);
        }(_0x240e90), _0x51ce89 = function (_0x42f922) {
            function _0x21e980(_0x5eaba9, _0x3f5c4e) {
                this['selectHand' + 'ler'] = null, this['_items'] = null, this['_selectedI' + 'ndex'] = -0x1, this['_skin'] = null, this['_direction'] = 'horizontal', this['_space'] = 0x0, this['_labels'] = null, this['_labelColo' + 'rs'] = null, this['_labelFont'] = null, this['_labelStro' + 'keColor'] = null, this['_strokeCol' + 'ors'] = null, this['_labelStro' + 'ke'] = NaN, this['_labelSize'] = 0x0, this['_labelBold'] = !0x1, this['_labelPadd' + 'ing'] = null, this['_labelAlig' + 'n'] = null, this['_stateNum'] = 0x0, this['_labelChan' + 'ged'] = !0x1, _0x21e980['__super']['call'](this), this['skin'] = _0x3f5c4e, this['labels'] = _0x5eaba9;
            }
            _0x3b4bb6(_0x21e980, 'laya.ui.UI' + 'Group', _0x42f922);
            var _0x21523f = _0x21e980['prototype'];
            return _0x4d77ad['imps'](_0x21523f, { 'laya.ui.IItem': !0x0 }), _0x21523f['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x21523f['destroy'] = function (_0x3d88e9) {
                void 0x0 === _0x3d88e9 && (_0x3d88e9 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x3d88e9), this['_items'] && (this['_items']['length'] = 0x0), this['_items'] = null, this['selectHand' + 'ler'] = null;
            }, _0x21523f['addItem'] = function (_0x5a4371, _0x23c25e) {
                void 0x0 === _0x23c25e && (_0x23c25e = !0x0);
                var _0x12f87e = _0x5a4371, _0x5a8c66 = this['_items']['length'];
                if (_0x12f87e['name'] = 'item' + _0x5a8c66, this['addChild'](_0x12f87e), this['initItems'](), _0x23c25e && _0x5a8c66 > 0x0) {
                    var _0x5ae4b1 = this['_items'][_0x5a8c66 - 0x1];
                    'horizontal' == this['_direction'] ? _0x12f87e['x'] = _0x5ae4b1['_x'] + _0x5ae4b1['width'] + this['_space'] : _0x12f87e['y'] = _0x5ae4b1['_y'] + _0x5ae4b1['height'] + this['_space'];
                } else
                    _0x23c25e && (_0x12f87e['x'] = 0x0, _0x12f87e['y'] = 0x0);
                return _0x5a8c66;
            }, _0x21523f['delItem'] = function (_0x37cd62, _0x33992f) {
                void 0x0 === _0x33992f && (_0x33992f = !0x0);
                var _0x4585fd = this['_items']['indexOf'](_0x37cd62);
                if (-0x1 != _0x4585fd) {
                    var _0x95af1 = _0x37cd62;
                    this['removeChil' + 'd'](_0x95af1);
                    for (var _0x510e0b = _0x4585fd + 0x1, _0x420f75 = this['_items']['length']; _0x510e0b < _0x420f75; _0x510e0b++) {
                        var _0x3dc0a0 = this['_items'][_0x510e0b];
                        _0x3dc0a0['name'] = 'item' + (_0x510e0b - 0x1), _0x33992f && ('horizontal' == this['_direction'] ? _0x3dc0a0['x'] -= _0x95af1['width'] + this['_space'] : _0x3dc0a0['y'] -= _0x95af1['height'] + this['_space']);
                    }
                    if (this['initItems'](), this['_selectedI' + 'ndex'] > -0x1) {
                        var _0x55a096 = 0x0;
                        _0x55a096 = this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_selectedI' + 'ndex'] : this['_selectedI' + 'ndex'] - 0x1, this['_selectedI' + 'ndex'] = -0x1, this['selectedIn' + 'dex'] = _0x55a096;
                    }
                }
            }, _0x21523f['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x21523f['initItems'] = function () {
                this['_items'] || (this['_items'] = []), this['_items']['length'] = 0x0;
                for (var _0x348937 = 0x0; _0x348937 < 0x2710; _0x348937++) {
                    var _0x1c9e3d = this['getChildBy' + 'Name']('item' + _0x348937);
                    if (null == _0x1c9e3d)
                        break;
                    this['_items']['push'](_0x1c9e3d), _0x1c9e3d['selected'] = _0x348937 === this['_selectedI' + 'ndex'], _0x1c9e3d['clickHandl' + 'er'] = _0x1ef768['create'](this, this['itemClick'], [_0x348937], !0x1);
                }
            }, _0x21523f['itemClick'] = function (_0x482844) {
                this['selectedIn' + 'dex'] = _0x482844;
            }, _0x21523f['setSelect'] = function (_0xf57c70, _0x119636) {
                this['_items'] && _0xf57c70 > -0x1 && _0xf57c70 < this['_items']['length'] && (this['_items'][_0xf57c70]['selected'] = _0x119636);
            }, _0x21523f['_skinLoade' + 'd'] = function () {
                this['_setLabelC' + 'hanged'](), this['event']('loaded');
            }, _0x21523f['createItem'] = function (_0x3cd00f, _0x228f06) {
                return null;
            }, _0x21523f['changeLabe' + 'ls'] = function () {
                if (this['_labelChan' + 'ged'] = !0x1, this['_items'])
                    for (var _0x6d5aea = 0x0, _0x208ef5 = 0x0, _0x3b30bc = this['_items']['length']; _0x208ef5 < _0x3b30bc; _0x208ef5++) {
                        var _0x4d3ad5 = this['_items'][_0x208ef5];
                        this['_skin'] && (_0x4d3ad5['skin'] = this['_skin']), this['_labelColo' + 'rs'] && (_0x4d3ad5['labelColor' + 's'] = this['_labelColo' + 'rs']), this['_labelSize'] && (_0x4d3ad5['labelSize'] = this['_labelSize']), this['_labelStro' + 'ke'] && (_0x4d3ad5['labelStrok' + 'e'] = this['_labelStro' + 'ke']), this['_labelStro' + 'keColor'] && (_0x4d3ad5['labelStrok' + 'eColor'] = this['_labelStro' + 'keColor']), this['_strokeCol' + 'ors'] && (_0x4d3ad5['strokeColo' + 'rs'] = this['_strokeCol' + 'ors']), this['_labelBold'] && (_0x4d3ad5['labelBold'] = this['_labelBold']), this['_labelPadd' + 'ing'] && (_0x4d3ad5['labelPaddi' + 'ng'] = this['_labelPadd' + 'ing']), this['_labelAlig' + 'n'] && (_0x4d3ad5['labelAlign'] = this['_labelAlig' + 'n']), this['_stateNum'] && (_0x4d3ad5['stateNum'] = this['_stateNum']), this['_labelFont'] && (_0x4d3ad5['labelFont'] = this['_labelFont']), 'horizontal' === this['_direction'] ? (_0x4d3ad5['y'] = 0x0, _0x4d3ad5['x'] = _0x6d5aea, _0x6d5aea += _0x4d3ad5['width'] + this['_space']) : (_0x4d3ad5['x'] = 0x0, _0x4d3ad5['y'] = _0x6d5aea, _0x6d5aea += _0x4d3ad5['height'] + this['_space']);
                    }
                this['_sizeChang' + 'ed']();
            }, _0x21523f['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeLabe' + 'ls']);
            }, _0x21523f['_setLabelC' + 'hanged'] = function () {
                this['_labelChan' + 'ged'] || (this['_labelChan' + 'ged'] = !0x0, this['callLater'](this['changeLabe' + 'ls']));
            }, _0x3be031(0x0, _0x21523f, 'labelStrok' + 'eColor', function () {
                return this['_labelStro' + 'keColor'];
            }, function (_0x23e573) {
                this['_labelStro' + 'keColor'] != _0x23e573 && (this['_labelStro' + 'keColor'] = _0x23e573, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'skin', function () {
                return this['_skin'];
            }, function (_0x584b0a) {
                this['_skin'] != _0x584b0a && (this['_skin'] = _0x584b0a, this['_skin'] && !_0x27b7ec['getRes'](this['_skin']) ? _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0x21523f, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x4e9c58) {
                this['_selectedI' + 'ndex'] != _0x4e9c58 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x4e9c58, this['setSelect'](_0x4e9c58, !0x0), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](this['_selectedI' + 'ndex']));
            }), _0x3be031(0x0, _0x21523f, 'labels', function () {
                return this['_labels'];
            }, function (_0x4597f2) {
                if (this['_labels'] != _0x4597f2) {
                    if (this['_labels'] = _0x4597f2, this['removeChil' + 'dren'](), this['_setLabelC' + 'hanged'](), this['_labels'])
                        for (var _0x497c12 = this['_labels']['split'](','), _0x1f5b67 = 0x0, _0x2b2eb4 = _0x497c12['length']; _0x1f5b67 < _0x2b2eb4; _0x1f5b67++) {
                            var _0x3158b8 = this['createItem'](this['_skin'], _0x497c12[_0x1f5b67]);
                            _0x3158b8['name'] = 'item' + _0x1f5b67, this['addChild'](_0x3158b8);
                        }
                    this['initItems']();
                }
            }), _0x3be031(0x0, _0x21523f, 'strokeColo' + 'rs', function () {
                return this['_strokeCol' + 'ors'];
            }, function (_0x231078) {
                this['_strokeCol' + 'ors'] != _0x231078 && (this['_strokeCol' + 'ors'] = _0x231078, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelColor' + 's', function () {
                return this['_labelColo' + 'rs'];
            }, function (_0xc10040) {
                this['_labelColo' + 'rs'] != _0xc10040 && (this['_labelColo' + 'rs'] = _0xc10040, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelStrok' + 'e', function () {
                return this['_labelStro' + 'ke'];
            }, function (_0x4ae2e6) {
                this['_labelStro' + 'ke'] != _0x4ae2e6 && (this['_labelStro' + 'ke'] = _0x4ae2e6, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelSize', function () {
                return this['_labelSize'];
            }, function (_0x3275b6) {
                this['_labelSize'] != _0x3275b6 && (this['_labelSize'] = _0x3275b6, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'stateNum', function () {
                return this['_stateNum'];
            }, function (_0x5047de) {
                this['_stateNum'] != _0x5047de && (this['_stateNum'] = _0x5047de, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelBold', function () {
                return this['_labelBold'];
            }, function (_0x9c7213) {
                this['_labelBold'] != _0x9c7213 && (this['_labelBold'] = _0x9c7213, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelFont', function () {
                return this['_labelFont'];
            }, function (_0x3f1032) {
                this['_labelFont'] != _0x3f1032 && (this['_labelFont'] = _0x3f1032, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'labelPaddi' + 'ng', function () {
                return this['_labelPadd' + 'ing'];
            }, function (_0x19e63f) {
                this['_labelPadd' + 'ing'] != _0x19e63f && (this['_labelPadd' + 'ing'] = _0x19e63f, this['_setLabelC' + 'hanged']());
            }), _0x3be031(0x0, _0x21523f, 'direction', function () {
                return this['_direction'];
            }, function (_0x1768ba) {
                this['_direction'] = _0x1768ba, this['_setLabelC' + 'hanged']();
            }), _0x3be031(0x0, _0x21523f, 'space', function () {
                return this['_space'];
            }, function (_0x5ed79a) {
                this['_space'] = _0x5ed79a, this['_setLabelC' + 'hanged']();
            }), _0x3be031(0x0, _0x21523f, 'items', function () {
                return this['_items'];
            }), _0x3be031(0x0, _0x21523f, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x31e143) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x31e143);
            }), _0x3be031(0x0, _0x21523f, 'dataSource', _0x42f922['prototype']['_$get_data' + 'Source'], function (_0x23f03c) {
                this['_dataSourc' + 'e'] = _0x23f03c, 'number' == typeof _0x23f03c && Math['floor'](_0x23f03c) == _0x23f03c || 'string' == typeof _0x23f03c ? this['selectedIn' + 'dex'] = parseInt(_0x23f03c) : _0x23f03c instanceof Array ? this['labels'] = _0x23f03c['join'](',') : _0x4d77ad['superSet'](_0x560329, this, 'dataSource', _0x23f03c);
            }), _0x21e980;
        }(_0x560329), _0x26d239 = (function (_0x3c0552) {
            function _0xcb03(_0x539097) {
                this['advsListAr' + 'r'] = [], this['resUrl'] = 'https://un' + 'ioncdn.lay' + 'abox.com/c' + 'onfig/icon' + 'list.json', this['_data'] = [], this['_resquestT' + 'ime'] = 0x57e40, this['_appid'] = null, this['_playIndex'] = 0x0, this['_lunboTime'] = 0x1388, _0xcb03['__super']['call'](this), this['_http'] = new _0x151f5a['window']['XMLHttpReq' + 'uest'](), this['skin'] = _0x539097, this['setLoadUrl'](), this['init'](), this['size'](0x78, 0x78);
            }
            _0x3b4bb6(_0xcb03, 'laya.ui.Ad' + 'vImage', _0x3c0552);
            var _0xd3c033 = _0xcb03['prototype'];
            _0xd3c033['setLoadUrl'] = function () {
                _0x151f5a['onLimixiu'] && (this['resUrl'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/wyw/gconf' + 'ig.json');
            }, _0xd3c033['init'] = function () {
                this['isSupportJ' + 'ump']() ? ((_0x151f5a['onMiniGame'] || _0x151f5a['onBDMiniGa' + 'me']) && _0x4d77ad['timer']['loop'](this['_resquestT' + 'ime'], this, this['onGetAdvsL' + 'istData']), this['onGetAdvsL' + 'istData'](), this['initEvent']()) : this['visible'] = !0x1;
            }, _0xd3c033['initEvent'] = function () {
                this['on']('click', this, this['onAdvsImgC' + 'lick']);
            }, _0xd3c033['onAdvsImgC' + 'lick'] = function () {
                this['getCurrent' + 'AppidObj']() && this['jumptoGame']();
            }, _0xd3c033['revertAdvs' + 'Data'] = function () {
                if (this['advsListAr' + 'r'][this['_playIndex']]) {
                    if (this['visible'] = !0x0, _0x151f5a['onLimixiu']) {
                        this['visible'] = !0x0;
                        var _0xe8669d = this['advsListAr' + 'r'][this['_playIndex']];
                        _0xe8669d && (_0x151f5a['onLimixiu'] && GameStatusInfo['gameId'] == _0xe8669d['gameid'] ? this['onLunbo']() : (this['skin'] = 'https://ab' + 'c.layabox.' + 'com/public' + '/icon/' + _0xe8669d['iconUrl'], this['size'](0x67, 0x7e)));
                    } else
                        this['skin'] = this['advsListAr' + 'r'][this['_playIndex']];
                }
            }, _0xd3c033['isSupportJ' + 'ump'] = function () {
                if (_0x151f5a['onMiniGame'])
                    return 'function' == typeof wx['navigateTo' + 'MiniProgra' + 'm'];
                if (_0x151f5a['onLimixiu']) {
                    if (BK['QQ']['skipGame'])
                        return !0x0;
                } else {
                    if (_0x151f5a['onBDMiniGa' + 'me'])
                        return !0x0;
                }
                return !0x1;
            }, _0xd3c033['jumptoGame'] = function () {
                var _0x3117b4 = this, _0x57d05a = this['advsListAr' + 'r'][this['_playIndex']], _0x5dc8b9 = parseInt(_0x57d05a['gameid']), _0x4c6305 = _0x57d05a['extendInfo'];
                _0x57d05a['path'];
                if (_0x151f5a['onLimixiu']) {
                    if (!_0x57d05a['isLunBo'] && !_0x57d05a['isLunBo']) {
                        var _0x520bf1 = _0x20e7ff['getJSON']('gameObj');
                        _0x520bf1 || (_0x520bf1 = {}), _0x520bf1[_0x57d05a['gameid']] || (_0x520bf1[_0x57d05a['gameid']] = {}), _0x520bf1[_0x57d05a['gameid']] = { 'isclick': !0x0 }, _0x20e7ff['setJSON']('gameObj', _0x520bf1), this['advsListAr' + 'r']['splice'](this['_playIndex'], 0x1);
                    }
                    BK['QQ']['skipGame'](_0x5dc8b9, _0x4c6305), this['updateAdvs' + 'Info']();
                } else
                    _0x151f5a['onMiniGame'] ? this['isSupportJ' + 'ump']() && wx['navigateTo' + 'MiniProgra' + 'm']({
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
                            console['log']('----------' + '---跳转接口调用成' + '功---------' + '-----'), _0x3117b4['updateAdvs' + 'Info']();
                        }['bind'](this)
                    }) : _0x151f5a['onBDMiniGa' + 'me'] || (this['visible'] = !0x1);
            }, _0xd3c033['updateAdvs' + 'Info'] = function () {
                this['visible'] = !0x1, this['onLunbo'](), _0x4d77ad['timer']['loop'](this['_lunboTime'], this, this['onLunbo']);
            }, _0xd3c033['onLunbo'] = function () {
                this['_playIndex'] >= this['advsListAr' + 'r']['length'] - 0x1 ? this['_playIndex'] = 0x0 : this['_playIndex'] += 0x1, this['visible'] = !0x0, this['revertAdvs' + 'Data']();
            }, _0xd3c033['getCurrent' + 'AppidObj'] = function () {
                return this['advsListAr' + 'r'][this['_playIndex']];
            }, _0xd3c033['onGetAdvsL' + 'istData'] = function () {
                var _0x32c976 = this, _0x5bde56 = _0xcb03['randRange'](0x2710, 0xf4240), _0x27d062 = this['resUrl'] + '?' + _0x5bde56;
                this['_http']['open']('get', _0x27d062, !0x0), this['_http']['setRequest' + 'Header']('Content-Ty' + 'pe', 'applicatio' + 'n/x-www-fo' + 'rm-urlenco' + 'ded'), this['_http']['responseTy' + 'pe'] = 'text', this['_http']['onerror'] = function (_0x301e06) {
                    _0x32c976['_onError'](_0x301e06);
                }, this['_http']['onload'] = function (_0x1436cf) {
                    _0x32c976['_onLoad'](_0x1436cf);
                }, this['_http']['send'](null);
            }, _0xd3c033['_onError'] = function (_0x1dcd60) {
                this['error']('Request\x20fa' + 'iled\x20Statu' + 's:' + this['_http']['status'] + '\x20text:' + this['_http']['statusText']);
            }, _0xd3c033['_onLoad'] = function (_0x31856f) {
                var _0x2a537a = this['_http'], _0x42607b = void 0x0 !== _0x2a537a['status'] ? _0x2a537a['status'] : 0xc8;
                0xc8 === _0x42607b || 0xcc === _0x42607b || 0x0 === _0x42607b ? this['complete']() : this['error']('[' + _0x2a537a['status'] + ']' + _0x2a537a['statusText'] + ':' + _0x2a537a['responseUR' + 'L']);
            }, _0xd3c033['error'] = function (_0x5a0a5f) {
                this['event']('error', _0x5a0a5f);
            }, _0xd3c033['complete'] = function () {
                try {
                    this['_data'] = this['_http']['response'] || this['_http']['responseTe' + 'xt'], this['_data'] = JSON['parse'](this['_data']), _0x151f5a['onLimixiu'] ? (this['advsListAr' + 'r'] = this['getAdvsQAr' + 'r'](this['_data']), this['advsListAr' + 'r']['length'] ? (this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']()) : this['visible'] = !0x1) : (this['advsListAr' + 'r'] = this['_data']['list'], this['_appid'] = this['_data']['appid'], this['updateAdvs' + 'Info'](), this['revertAdvs' + 'Data']());
                } catch (_0x49c072) {
                    !0x1, this['error'](_0x49c072['message']);
                }
            }, _0xd3c033['getAdvsQAr' + 'r'] = function (_0x2c417f) {
                var _0x5e45a1 = [], _0x11a10e = _0x20e7ff['getJSON']('gameObj');
                for (var _0x565eef in _0x2c417f) {
                    var _0x567225 = _0x2c417f[_0x565eef];
                    _0x11a10e && _0x11a10e[_0x567225['gameid']] && !_0x567225['isQiangZhi'] || _0x5e45a1['push'](_0x567225);
                }
                return _0x5e45a1;
            }, _0xd3c033['clear'] = function () {
                var _0x47ad1b = this['_http'];
                _0x47ad1b['onerror'] = _0x47ad1b['onabort'] = _0x47ad1b['onprogress'] = _0x47ad1b['onload'] = null;
            }, _0xd3c033['destroy'] = function (_0x318ac9) {
                void 0x0 === _0x318ac9 && (_0x318ac9 = !0x0), _0x4d77ad['timer']['clear'](this, this['onLunbo']), _0x3c0552['prototype']['destroy']['call'](this, !0x0), this['clear'](), _0x4d77ad['timer']['clear'](this, this['onGetAdvsL' + 'istData']);
            }, _0xcb03['randRange'] = function (_0x33ed44, _0x2ebca8) {
                return Math['floor'](Math['random']() * (_0x2ebca8 - _0x33ed44 + 0x1)) + _0x33ed44;
            };
        }(_0x354d99), function (_0x4305ff) {
            function _0x17fc3b() {
                this['_content'] = null, this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_scrollCha' + 'nged'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, _0x17fc3b['__super']['call'](this), this['width'] = this['height'] = 0x64;
            }
            _0x3b4bb6(_0x17fc3b, 'laya.ui.Pa' + 'nel', _0x4305ff);
            var _0x5ae854 = _0x17fc3b['prototype'];
            return _0x5ae854['destroy'] = function (_0xed70a3) {
                void 0x0 === _0xed70a3 && (_0xed70a3 = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0xed70a3), this['_content'] && this['_content']['destroy'](_0xed70a3), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](_0xed70a3), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](_0xed70a3), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, this['_content'] = null;
            }, _0x5ae854['destroyChi' + 'ldren'] = function () {
                this['_content']['destroyChi' + 'ldren']();
            }, _0x5ae854['createChil' + 'dren'] = function () {
                laya['display']['Node']['prototype']['addChild']['call'](this, this['_content'] = new _0x560329());
            }, _0x5ae854['addChild'] = function (_0x25ab3e) {
                return _0x25ab3e['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChild'](_0x25ab3e);
            }, _0x5ae854['onResize'] = function () {
                this['_setScroll' + 'Changed']();
            }, _0x5ae854['addChildAt'] = function (_0x23917d, _0x190874) {
                return _0x23917d['on']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['addChildAt'](_0x23917d, _0x190874);
            }, _0x5ae854['removeChil' + 'd'] = function (_0x3874eb) {
                return _0x3874eb['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'd'](_0x3874eb);
            }, _0x5ae854['removeChil' + 'dAt'] = function (_0x1dc13f) {
                return this['getChildAt'](_0x1dc13f)['off']('resize', this, this['onResize']), this['_setScroll' + 'Changed'](), this['_content']['removeChil' + 'dAt'](_0x1dc13f);
            }, _0x5ae854['removeChil' + 'dren'] = function (_0x399f2a, _0xa5d14c) {
                return void 0x0 === _0x399f2a && (_0x399f2a = 0x0), void 0x0 === _0xa5d14c && (_0xa5d14c = 0x7fffffff), this['_content']['removeChil' + 'dren'](_0x399f2a, _0xa5d14c), this['_setScroll' + 'Changed'](), this;
            }, _0x5ae854['getChildAt'] = function (_0x185774) {
                return this['_content']['getChildAt'](_0x185774);
            }, _0x5ae854['getChildBy' + 'Name'] = function (_0x2f334c) {
                return this['_content']['getChildBy' + 'Name'](_0x2f334c);
            }, _0x5ae854['getChildIn' + 'dex'] = function (_0x19ee06) {
                return this['_content']['getChildIn' + 'dex'](_0x19ee06);
            }, _0x5ae854['changeScro' + 'll'] = function () {
                this['_scrollCha' + 'nged'] = !0x1;
                var _0x330406 = this['contentWid' + 'th'] || 0x1, _0x24a1d1 = this['contentHei' + 'ght'] || 0x1, _0xaf635d = this['_vScrollBa' + 'r'], _0x3bc6a9 = this['_hScrollBa' + 'r'], _0x5afce1 = _0xaf635d && _0x24a1d1 > this['_height'], _0x4f0082 = _0x3bc6a9 && _0x330406 > this['_width'], _0x1860b1 = _0x5afce1 ? this['_width'] - _0xaf635d['width'] : this['_width'], _0x5dae9f = _0x4f0082 ? this['_height'] - _0x3bc6a9['height'] : this['_height'];
                _0xaf635d && (_0xaf635d['x'] = this['_width'] - _0xaf635d['width'], _0xaf635d['y'] = 0x0, _0xaf635d['height'] = this['_height'] - (_0x4f0082 ? _0x3bc6a9['height'] : 0x0), _0xaf635d['scrollSize'] = Math['max'](0.033 * this['_height'], 0x1), _0xaf635d['thumbPerce' + 'nt'] = _0x5dae9f / _0x24a1d1, _0xaf635d['setScroll'](0x0, _0x24a1d1 - _0x5dae9f, _0xaf635d['value'])), _0x3bc6a9 && (_0x3bc6a9['x'] = 0x0, _0x3bc6a9['y'] = this['_height'] - _0x3bc6a9['height'], _0x3bc6a9['width'] = this['_width'] - (_0x5afce1 ? _0xaf635d['width'] : 0x0), _0x3bc6a9['scrollSize'] = Math['max'](0.033 * this['_width'], 0x1), _0x3bc6a9['thumbPerce' + 'nt'] = _0x1860b1 / _0x330406, _0x3bc6a9['setScroll'](0x0, _0x330406 - _0x1860b1, _0x3bc6a9['value']));
            }, _0x5ae854['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['_width'], this['_height']);
            }, _0x5ae854['setContent' + 'Size'] = function (_0x1f7688, _0x35e2e5) {
                var _0x5f1e9c = this['_content'];
                _0x5f1e9c['width'] = _0x1f7688, _0x5f1e9c['height'] = _0x35e2e5, _0x5f1e9c['_style']['scrollRect'] || (_0x5f1e9c['scrollRect'] = _0x12cc88['create']()), _0x5f1e9c['_style']['scrollRect']['setTo'](0x0, 0x0, _0x1f7688, _0x35e2e5), _0x5f1e9c['scrollRect'] = _0x5f1e9c['scrollRect'];
            }, _0x5ae854['onScrollBa' + 'rChange'] = function (_0x3dad52) {
                var _0x4dc67d = this['_content']['_style']['scrollRect'];
                if (_0x4dc67d) {
                    var _0x51c6ee = Math['round'](_0x3dad52['value']);
                    _0x3dad52['isVertical'] ? _0x4dc67d['y'] = _0x51c6ee : _0x4dc67d['x'] = _0x51c6ee, this['_content']['scrollRect'] = _0x4dc67d;
                }
            }, _0x5ae854['scrollTo'] = function (_0x3180e6, _0x59493e) {
                void 0x0 === _0x3180e6 && (_0x3180e6 = 0x0), void 0x0 === _0x59493e && (_0x59493e = 0x0), this['vScrollBar'] && (this['vScrollBar']['value'] = _0x59493e), this['hScrollBar'] && (this['hScrollBar']['value'] = _0x3180e6);
            }, _0x5ae854['refresh'] = function () {
                this['changeScro' + 'll']();
            }, _0x5ae854['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x4d77ad['superGet'](_0x560329, this, 'cacheAs')), _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', 'none'), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x5ae854['onScrollEn' + 'd'] = function () {
                _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', this['_usedCache']);
            }, _0x5ae854['_setScroll' + 'Changed'] = function () {
                this['_scrollCha' + 'nged'] || (this['_scrollCha' + 'nged'] = !0x0, this['callLater'](this['changeScro' + 'll']));
            }, _0x3be031(0x0, _0x5ae854, 'numChildre' + 'n', function () {
                return this['_content']['numChildre' + 'n'];
            }), _0x3be031(0x0, _0x5ae854, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x476ca8) {
                null == this['_hScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_hScrollBa' + 'r'] = new _0x51cb1c()), this['_hScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_hScrollBa' + 'r']]), this['_hScrollBa' + 'r']['target'] = this['_content'], this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_hScrollBa' + 'r']['skin'] = _0x476ca8;
            }), _0x3be031(0x0, _0x5ae854, 'contentWid' + 'th', function () {
                for (var _0x47daa1 = 0x0, _0x494de0 = this['_content']['numChildre' + 'n'] - 0x1; _0x494de0 > -0x1; _0x494de0--) {
                    var _0x397828 = this['_content']['getChildAt'](_0x494de0);
                    _0x47daa1 = Math['max'](_0x397828['_x'] + _0x397828['width'] * _0x397828['scaleX'] - _0x397828['pivotX'], _0x47daa1);
                }
                return _0x47daa1;
            }), _0x3be031(0x0, _0x5ae854, 'contentHei' + 'ght', function () {
                for (var _0x8153d8 = 0x0, _0x1e1dee = this['_content']['numChildre' + 'n'] - 0x1; _0x1e1dee > -0x1; _0x1e1dee--) {
                    var _0x13001f = this['_content']['getChildAt'](_0x1e1dee);
                    _0x8153d8 = Math['max'](_0x13001f['_y'] + _0x13001f['height'] * _0x13001f['scaleY'] - _0x13001f['pivotY'], _0x8153d8);
                }
                return _0x8153d8;
            }), _0x3be031(0x0, _0x5ae854, 'width', _0x4305ff['prototype']['_$get_widt' + 'h'], function (_0x5c79ae) {
                _0x4d77ad['superSet'](_0x560329, this, 'width', _0x5c79ae), this['_setScroll' + 'Changed']();
            }), _0x3be031(0x0, _0x5ae854, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x3be031(0x0, _0x5ae854, 'content', function () {
                return this['_content'];
            }), _0x3be031(0x0, _0x5ae854, 'height', _0x4305ff['prototype']['_$get_heig' + 'ht'], function (_0x3d278d) {
                _0x4d77ad['superSet'](_0x560329, this, 'height', _0x3d278d), this['_setScroll' + 'Changed']();
            }), _0x3be031(0x0, _0x5ae854, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x27a0b0) {
                null == this['_vScrollBa' + 'r'] && (laya['display']['Node']['prototype']['addChild']['call'](this, this['_vScrollBa' + 'r'] = new _0xba4e3e()), this['_vScrollBa' + 'r']['on']('change', this, this['onScrollBa' + 'rChange'], [this['_vScrollBa' + 'r']]), this['_vScrollBa' + 'r']['target'] = this['_content'], this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['_setScroll' + 'Changed']()), this['_vScrollBa' + 'r']['skin'] = _0x27a0b0;
            }), _0x3be031(0x0, _0x5ae854, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x3be031(0x0, _0x5ae854, 'cacheAs', _0x4305ff['prototype']['_$get_cach' + 'eAs'], function (_0x1219fd) {
                _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', _0x1219fd), this['_usedCache'] = null, 'none' !== _0x1219fd ? (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['on']('start', this, this['onScrollSt' + 'art'])) : (this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x3be031(0x0, _0x5ae854, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x45eecb) {
                this['_elasticEn' + 'abled'] = _0x45eecb, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['elasticDis' + 'tance'] = _0x45eecb ? 0xc8 : 0x0), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['elasticDis' + 'tance'] = _0x45eecb ? 0xc8 : 0x0);
            }), _0x17fc3b;
        }(_0x560329)), _0x87eb14 = function (_0x3344cb) {
            function _0x19d10d(_0xc06d56) {
                this['_bg'] = null, this['_skin'] = null, _0x19d10d['__super']['call'](this), void 0x0 === _0xc06d56 && (_0xc06d56 = ''), this['text'] = _0xc06d56, this['skin'] = this['skin'];
            }
            _0x3b4bb6(_0x19d10d, 'laya.ui.Te' + 'xtInput', _0x3344cb);
            var _0x3a03c4 = _0x19d10d['prototype'];
            return _0x3a03c4['preinitial' + 'ize'] = function () {
                this['mouseEnabl' + 'ed'] = !0x0;
            }, _0x3a03c4['destroy'] = function (_0x1bf00f) {
                void 0x0 === _0x1bf00f && (_0x1bf00f = !0x0), _0x3344cb['prototype']['destroy']['call'](this, _0x1bf00f), this['_bg'] && this['_bg']['destroy'](), this['_bg'] = null;
            }, _0x3a03c4['createChil' + 'dren'] = function () {
                this['addChild'](this['_tf'] = new _0x18deff()), this['_tf']['padding'] = _0x55fcb['inputLabel' + 'Padding'], this['_tf']['on']('input', this, this['_onInput']), this['_tf']['on']('enter', this, this['_onEnter']), this['_tf']['on']('blur', this, this['_onBlur']), this['_tf']['on']('focus', this, this['_onFocus']);
            }, _0x3a03c4['_onFocus'] = function () {
                this['event']('focus', this);
            }, _0x3a03c4['_onBlur'] = function () {
                this['event']('blur', this);
            }, _0x3a03c4['_onInput'] = function () {
                this['event']('input', this);
            }, _0x3a03c4['_onEnter'] = function () {
                this['event']('enter', this);
            }, _0x3a03c4['initialize'] = function () {
                this['width'] = 0x80, this['height'] = 0x16;
            }, _0x3a03c4['_skinLoade' + 'd'] = function () {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x1402c1()), this['_bg']['source'] = _0x27b7ec['getRes'](this['_skin']), this['_width'] && (this['_bg']['width'] = this['_width']), this['_height'] && (this['_bg']['height'] = this['_height']), this['_sizeChang' + 'ed'](), this['event']('loaded');
            }, _0x3a03c4['select'] = function () {
                this['_tf']['select']();
            }, _0x3a03c4['setSelecti' + 'on'] = function (_0x25a2e3, _0x38586e) {
                this['_tf']['setSelecti' + 'on'](_0x25a2e3, _0x38586e);
            }, _0x3be031(0x0, _0x3a03c4, 'text', _0x3344cb['prototype']['_$get_text'], function (_0x12b8fb) {
                this['_tf']['text'] != _0x12b8fb && (_0x12b8fb += '', this['_tf']['text'] = _0x12b8fb, this['event']('change'));
            }), _0x3be031(0x0, _0x3a03c4, 'bg', function () {
                return this['_bg'];
            }, function (_0x5acda6) {
                this['graphics'] = this['_bg'] = _0x5acda6;
            }), _0x3be031(0x0, _0x3a03c4, 'multiline', function () {
                return this['_tf']['multiline'];
            }, function (_0x50cb25) {
                this['_tf']['multiline'] = _0x50cb25;
            }), _0x3be031(0x0, _0x3a03c4, 'skin', function () {
                return this['_skin'];
            }, function (_0x30db49) {
                this['_skin'] != _0x30db49 && (this['_skin'] = _0x30db49, this['_skin'] && !_0x27b7ec['getRes'](this['_skin']) ? _0x4d77ad['loader']['load'](this['_skin'], _0x1ef768['create'](this, this['_skinLoade' + 'd']), null, 'image', 0x1) : this['_skinLoade' + 'd']());
            }), _0x3be031(0x0, _0x3a03c4, 'sizeGrid', function () {
                return this['_bg'] && this['_bg']['sizeGrid'] ? this['_bg']['sizeGrid']['join'](',') : null;
            }, function (_0x2332bd) {
                this['_bg'] || (this['graphics'] = this['_bg'] = new _0x1402c1()), this['_bg']['sizeGrid'] = _0x4b493c['fillArray'](_0x55fcb['defaultSiz' + 'eGrid'], _0x2332bd, Number);
            }), _0x3be031(0x0, _0x3a03c4, 'width', _0x3344cb['prototype']['_$get_widt' + 'h'], function (_0x16c1ac) {
                _0x4d77ad['superSet'](_0x30df4a, this, 'width', _0x16c1ac), this['_bg'] && (this['_bg']['width'] = _0x16c1ac);
            }), _0x3be031(0x0, _0x3a03c4, 'height', _0x3344cb['prototype']['_$get_heig' + 'ht'], function (_0xfb23cf) {
                _0x4d77ad['superSet'](_0x30df4a, this, 'height', _0xfb23cf), this['_bg'] && (this['_bg']['height'] = _0xfb23cf);
            }), _0x3be031(0x0, _0x3a03c4, 'editable', function () {
                return this['_tf']['editable'];
            }, function (_0x13eba7) {
                this['_tf']['editable'] = _0x13eba7;
            }), _0x3be031(0x0, _0x3a03c4, 'restrict', function () {
                return this['_tf']['restrict'];
            }, function (_0xdf4a56) {
                this['_tf']['restrict'] = _0xdf4a56;
            }), _0x3be031(0x0, _0x3a03c4, 'prompt', function () {
                return this['_tf']['prompt'];
            }, function (_0x26e48a) {
                this['_tf']['prompt'] = _0x26e48a;
            }), _0x3be031(0x0, _0x3a03c4, 'promptColo' + 'r', function () {
                return this['_tf']['promptColo' + 'r'];
            }, function (_0x46f1f8) {
                this['_tf']['promptColo' + 'r'] = _0x46f1f8;
            }), _0x3be031(0x0, _0x3a03c4, 'maxChars', function () {
                return this['_tf']['maxChars'];
            }, function (_0x9a61e5) {
                this['_tf']['maxChars'] = _0x9a61e5;
            }), _0x3be031(0x0, _0x3a03c4, 'focus', function () {
                return this['_tf']['focus'];
            }, function (_0x4069b5) {
                this['_tf']['focus'] = _0x4069b5;
            }), _0x3be031(0x0, _0x3a03c4, 'type', function () {
                return this['_tf']['type'];
            }, function (_0x4ea79a) {
                this['_tf']['type'] = _0x4ea79a;
            }), _0x19d10d;
        }(_0x30df4a), _0x33fed5 = function (_0x162b37) {
            function _0x31e517() {
                this['_space'] = 0x0, this['_align'] = 'none', this['_itemChang' + 'ed'] = !0x1, _0x31e517['__super']['call'](this);
            }
            _0x3b4bb6(_0x31e517, 'laya.ui.La' + 'youtBox', _0x560329);
            var _0x3f201b = _0x31e517['prototype'];
            return _0x3f201b['addChild'] = function (_0x407a1e) {
                return _0x407a1e['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChild']['call'](this, _0x407a1e);
            }, _0x3f201b['onResize'] = function (_0x517b5a) {
                this['_setItemCh' + 'anged']();
            }, _0x3f201b['addChildAt'] = function (_0x2aca42, _0x4663ff) {
                return _0x2aca42['on']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['addChildAt']['call'](this, _0x2aca42, _0x4663ff);
            }, _0x3f201b['removeChil' + 'dAt'] = function (_0xd5e179) {
                return this['getChildAt'](_0xd5e179)['off']('resize', this, this['onResize']), this['_setItemCh' + 'anged'](), laya['display']['Node']['prototype']['removeChil' + 'dAt']['call'](this, _0xd5e179);
            }, _0x3f201b['refresh'] = function () {
                this['_setItemCh' + 'anged']();
            }, _0x3f201b['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
            }, _0x3f201b['sortItem'] = function (_0x43d3ba) {
                _0x43d3ba && _0x43d3ba['sort'](function (_0x368665, _0xe11fa1) {
                    return _0x368665['y'] - _0xe11fa1['y'];
                });
            }, _0x3f201b['_setItemCh' + 'anged'] = function () {
                this['_itemChang' + 'ed'] || (this['_itemChang' + 'ed'] = !0x0, this['callLater'](this['changeItem' + 's']));
            }, _0x3be031(0x0, _0x3f201b, 'space', function () {
                return this['_space'];
            }, function (_0x49de78) {
                this['_space'] = _0x49de78, this['_setItemCh' + 'anged']();
            }), _0x3be031(0x0, _0x3f201b, 'align', function () {
                return this['_align'];
            }, function (_0x47f2d2) {
                this['_align'] = _0x47f2d2, this['_setItemCh' + 'anged']();
            }), _0x31e517;
        }(), _0x1aec85 = function (_0xd9aa04) {
            function _0x4fbc2f() {
                this['_items'] = null, this['_selectedI' + 'ndex'] = 0x0, _0x4fbc2f['__super']['call'](this), this['_setIndexH' + 'andler'] = _0x1ef768['create'](this, this['setIndex'], null, !0x1);
            }
            _0x3b4bb6(_0x4fbc2f, 'laya.ui.Vi' + 'ewStack', _0xd9aa04);
            var _0x2c52a1 = _0x4fbc2f['prototype'];
            return _0x4d77ad['imps'](_0x2c52a1, { 'laya.ui.IItem': !0x0 }), _0x2c52a1['setItems'] = function (_0x32f26e) {
                this['removeChil' + 'dren']();
                for (var _0x48b146 = 0x0, _0x1ecaf2 = 0x0, _0x271cc8 = _0x32f26e['length']; _0x1ecaf2 < _0x271cc8; _0x1ecaf2++) {
                    var _0xfbfd9 = _0x32f26e[_0x1ecaf2];
                    _0xfbfd9 && (_0xfbfd9['name'] = 'item' + _0x48b146, this['addChild'](_0xfbfd9), _0x48b146++);
                }
                this['initItems']();
            }, _0x2c52a1['addItem'] = function (_0x1cdce) {
                _0x1cdce['name'] = 'item' + this['_items']['length'], this['addChild'](_0x1cdce), this['initItems']();
            }, _0x2c52a1['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x2c52a1['initItems'] = function () {
                this['_items'] = [];
                for (var _0x55e96a = 0x0; _0x55e96a < 0x2710; _0x55e96a++) {
                    var _0x52ef67 = this['getChildBy' + 'Name']('item' + _0x55e96a);
                    if (null == _0x52ef67)
                        break;
                    this['_items']['push'](_0x52ef67), _0x52ef67['visible'] = _0x55e96a == this['_selectedI' + 'ndex'];
                }
            }, _0x2c52a1['setSelect'] = function (_0x219b8a, _0x2057f3) {
                this['_items'] && _0x219b8a > -0x1 && _0x219b8a < this['_items']['length'] && (this['_items'][_0x219b8a]['visible'] = _0x2057f3);
            }, _0x2c52a1['setIndex'] = function (_0x541618) {
                this['selectedIn' + 'dex'] = _0x541618;
            }, _0x3be031(0x0, _0x2c52a1, 'dataSource', _0xd9aa04['prototype']['_$get_data' + 'Source'], function (_0x11f309) {
                if (this['_dataSourc' + 'e'] = _0x11f309, 'number' == typeof _0x11f309 && Math['floor'](_0x11f309) == _0x11f309 || 'string' == typeof _0x11f309)
                    this['selectedIn' + 'dex'] = parseInt(_0x11f309);
                else {
                    for (var _0xb1b0c5 in this['_dataSourc' + 'e'])
                        this['hasOwnProp' + 'erty'](_0xb1b0c5) && (this[_0xb1b0c5] = this['_dataSourc' + 'e'][_0xb1b0c5]);
                }
            }), _0x3be031(0x0, _0x2c52a1, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x5f33e4) {
                this['_selectedI' + 'ndex'] != _0x5f33e4 && (this['setSelect'](this['_selectedI' + 'ndex'], !0x1), this['_selectedI' + 'ndex'] = _0x5f33e4, this['setSelect'](this['_selectedI' + 'ndex'], !0x0));
            }), _0x3be031(0x0, _0x2c52a1, 'selection', function () {
                return this['_selectedI' + 'ndex'] > -0x1 && this['_selectedI' + 'ndex'] < this['_items']['length'] ? this['_items'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x45ab43) {
                this['selectedIn' + 'dex'] = this['_items']['indexOf'](_0x45ab43);
            }), _0x3be031(0x0, _0x2c52a1, 'items', function () {
                return this['_items'];
            }), _0x3be031(0x0, _0x2c52a1, 'setIndexHa' + 'ndler', function () {
                return this['_setIndexH' + 'andler'];
            }, function (_0x5a7690) {
                this['_setIndexH' + 'andler'] = _0x5a7690;
            }), _0x4fbc2f;
        }(_0x560329), _0x140e83 = function (_0x52806f) {
            function _0x27d7d5() {
                _0x27d7d5['__super']['call'](this);
            }
            return _0x3b4bb6(_0x27d7d5, 'laya.ui.VS' + 'lider', _0x58c225), _0x27d7d5;
        }(), _0x16726d = function (_0x542542) {
            function _0x7c2462() {
                this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null, this['_spaceLeft'] = 0xa, this['_spaceBott' + 'om'] = 0x0, this['_keepStatu' + 's'] = !0x0, _0x7c2462['__super']['call'](this), this['width'] = this['height'] = 0xc8;
            }
            _0x3b4bb6(_0x7c2462, 'laya.ui.Tr' + 'ee', _0x542542);
            var _0x26fde7 = _0x7c2462['prototype'];
            return _0x4d77ad['imps'](_0x26fde7, { 'laya.ui.IRender': !0x0 }), _0x26fde7['destroy'] = function (_0x4b97ca) {
                void 0x0 === _0x4b97ca && (_0x4b97ca = !0x0), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x4b97ca), this['_list'] && this['_list']['destroy'](_0x4b97ca), this['_list'] = null, this['_source'] = null, this['_renderHan' + 'dler'] = null;
            }, _0x26fde7['createChil' + 'dren'] = function () {
                this['addChild'](this['_list'] = new _0x475063()), this['_list']['renderHand' + 'ler'] = _0x1ef768['create'](this, this['renderItem'], null, !0x1), this['_list']['repeatX'] = 0x1, this['_list']['on']('change', this, this['onListChan' + 'ge']);
            }, _0x26fde7['onListChan' + 'ge'] = function (_0x53c794) {
                this['event']('change');
            }, _0x26fde7['getArray'] = function () {
                var _0x15dd18, _0x17bab0 = [];
                for (var _0xfe1161 in this['_source'])
                    _0x15dd18 = this['_source'][_0xfe1161], this['getParentO' + 'penStatus'](_0x15dd18) && (_0x15dd18['x'] = this['_spaceLeft'] * this['getDepth'](_0x15dd18), _0x17bab0['push'](_0x15dd18));
                return _0x17bab0;
            }, _0x26fde7['getDepth'] = function (_0x94ad0f, _0x4f6d59) {
                return void 0x0 === _0x4f6d59 && (_0x4f6d59 = 0x0), null == _0x94ad0f['nodeParent'] ? _0x4f6d59 : this['getDepth'](_0x94ad0f['nodeParent'], _0x4f6d59 + 0x1);
            }, _0x26fde7['getParentO' + 'penStatus'] = function (_0x53039d) {
                var _0x52d77e = _0x53039d['nodeParent'];
                return null == _0x52d77e || !!_0x52d77e['isOpen'] && (null == _0x52d77e['nodeParent'] || this['getParentO' + 'penStatus'](_0x52d77e));
            }, _0x26fde7['renderItem'] = function (_0x47b646, _0x523483) {
                var _0x290ea9 = _0x47b646['dataSource'];
                if (_0x290ea9) {
                    _0x47b646['left'] = _0x290ea9['x'];
                    var _0x497e04 = _0x47b646['getChildBy' + 'Name']('arrow');
                    _0x497e04 && (_0x290ea9['hasChild'] ? (_0x497e04['visible'] = !0x0, _0x497e04['index'] = _0x290ea9['isOpen'] ? 0x1 : 0x0, _0x497e04['tag'] = _0x523483, _0x497e04['off']('click', this, this['onArrowCli' + 'ck']), _0x497e04['on']('click', this, this['onArrowCli' + 'ck'])) : _0x497e04['visible'] = !0x1);
                    var _0xf84550 = _0x47b646['getChildBy' + 'Name']('folder');
                    _0xf84550 && (0x2 == _0xf84550['clipY'] ? _0xf84550['index'] = _0x290ea9['isDirector' + 'y'] ? 0x0 : 0x1 : _0xf84550['index'] = _0x290ea9['isDirector' + 'y'] ? _0x290ea9['isOpen'] ? 0x1 : 0x0 : 0x2), this['_renderHan' + 'dler'] && this['_renderHan' + 'dler']['runWith']([
                        _0x47b646,
                        _0x523483
                    ]);
                }
            }, _0x26fde7['onArrowCli' + 'ck'] = function (_0x1f06ed) {
                var _0x1f3ea9 = _0x1f06ed['currentTar' + 'get']['tag'];
                this['_list']['array'][_0x1f3ea9]['isOpen'] = !this['_list']['array'][_0x1f3ea9]['isOpen'], this['event']('open'), this['_list']['array'] = this['getArray']();
            }, _0x26fde7['setItemSta' + 'te'] = function (_0x4c4c22, _0x52f683) {
                this['_list']['array'][_0x4c4c22] && (this['_list']['array'][_0x4c4c22]['isOpen'] = _0x52f683, this['_list']['array'] = this['getArray']());
            }, _0x26fde7['fresh'] = function () {
                this['_list']['array'] = this['getArray'](), this['repaint']();
            }, _0x26fde7['parseXml'] = function (_0x814940, _0x4e58e2, _0x1fd7aa, _0x38f39e) {
                var _0x189226, _0x1cde8d = _0x814940['childNodes'], _0x7f961c = _0x1cde8d['length'];
                if (!_0x38f39e) {
                    _0x189226 = {};
                    var _0x2c39ee, _0x2ee928 = _0x814940['attributes'];
                    for (var _0x2f7114 in _0x2ee928) {
                        var _0x465550 = (_0x2c39ee = _0x2ee928[_0x2f7114])['nodeName'], _0x5f11c2 = _0x2c39ee['nodeValue'];
                        _0x189226[_0x465550] = 'true' == _0x5f11c2 || 'false' != _0x5f11c2 && _0x5f11c2;
                    }
                    _0x189226['nodeParent'] = _0x1fd7aa, _0x7f961c > 0x0 && (_0x189226['isDirector' + 'y'] = !0x0), _0x189226['hasChild'] = _0x7f961c > 0x0, _0x4e58e2['push'](_0x189226);
                }
                for (var _0x1c2123 = 0x0; _0x1c2123 < _0x7f961c; _0x1c2123++) {
                    var _0x284215 = _0x1cde8d[_0x1c2123];
                    this['parseXml'](_0x284215, _0x4e58e2, _0x189226, !0x1);
                }
            }, _0x26fde7['parseOpenS' + 'tatus'] = function (_0x317630, _0xf9a555) {
                for (var _0x42a230 = 0x0, _0x226565 = _0xf9a555['length']; _0x42a230 < _0x226565; _0x42a230++) {
                    var _0x3ee299 = _0xf9a555[_0x42a230];
                    if (_0x3ee299['isDirector' + 'y'])
                        for (var _0x30b99f = 0x0, _0xc9dceb = _0x317630['length']; _0x30b99f < _0xc9dceb; _0x30b99f++) {
                            var _0x1257b4 = _0x317630[_0x30b99f];
                            if (_0x1257b4['isDirector' + 'y'] && this['isSamePare' + 'nt'](_0x1257b4, _0x3ee299) && _0x3ee299['label'] == _0x1257b4['label']) {
                                _0x3ee299['isOpen'] = _0x1257b4['isOpen'];
                                break;
                            }
                        }
                }
            }, _0x26fde7['isSamePare' + 'nt'] = function (_0x2afc0d, _0x2cee85) {
                return null == _0x2afc0d['nodeParent'] && null == _0x2cee85['nodeParent'] || null != _0x2afc0d['nodeParent'] && null != _0x2cee85['nodeParent'] && (_0x2afc0d['nodeParent']['label'] == _0x2cee85['nodeParent']['label'] && this['isSamePare' + 'nt'](_0x2afc0d['nodeParent'], _0x2cee85['nodeParent']));
            }, _0x26fde7['filter'] = function (_0x55b621) {
                if (Boolean(_0x55b621)) {
                    var _0x76774b = [];
                    this['getFilterS' + 'ource'](this['_source'], _0x76774b, _0x55b621), this['_list']['array'] = _0x76774b;
                } else
                    this['_list']['array'] = this['getArray']();
            }, _0x26fde7['getFilterS' + 'ource'] = function (_0x153796, _0x1633d3, _0x54a860) {
                _0x54a860 = _0x54a860['toLocaleLo' + 'werCase']();
                var _0x19732a;
                for (var _0x38e0bd in _0x153796)
                    !(_0x19732a = _0x153796[_0x38e0bd])['isDirector' + 'y'] && String(_0x19732a['label'])['toLowerCas' + 'e']()['indexOf'](_0x54a860) > -0x1 && (_0x19732a['x'] = 0x0, _0x1633d3['push'](_0x19732a)), _0x19732a['child'] && _0x19732a['child']['length'] > 0x0 && this['getFilterS' + 'ource'](_0x19732a['child'], _0x1633d3, _0x54a860);
            }, _0x3be031(0x0, _0x26fde7, 'spaceBotto' + 'm', function () {
                return this['_list']['spaceY'];
            }, function (_0x12839e) {
                this['_list']['spaceY'] = _0x12839e;
            }), _0x3be031(0x0, _0x26fde7, 'keepStatus', function () {
                return this['_keepStatu' + 's'];
            }, function (_0x250caf) {
                this['_keepStatu' + 's'] = _0x250caf;
            }), _0x3be031(0x0, _0x26fde7, 'itemRender', function () {
                return this['_list']['itemRender'];
            }, function (_0x123837) {
                this['_list']['itemRender'] = _0x123837;
            }), _0x3be031(0x0, _0x26fde7, 'array', function () {
                return this['_list']['array'];
            }, function (_0xb42c2d) {
                this['_keepStatu' + 's'] && this['_list']['array'] && _0xb42c2d && this['parseOpenS' + 'tatus'](this['_list']['array'], _0xb42c2d), this['_source'] = _0xb42c2d, this['_list']['array'] = this['getArray']();
            }), _0x3be031(0x0, _0x26fde7, 'mouseHandl' + 'er', function () {
                return this['_list']['mouseHandl' + 'er'];
            }, function (_0x936ab) {
                this['_list']['mouseHandl' + 'er'] = _0x936ab;
            }), _0x3be031(0x0, _0x26fde7, 'dataSource', _0x542542['prototype']['_$get_data' + 'Source'], function (_0xd40946) {
                this['_dataSourc' + 'e'] = _0xd40946, _0x4d77ad['superSet'](_0x560329, this, 'dataSource', _0xd40946);
            }), _0x3be031(0x0, _0x26fde7, 'source', function () {
                return this['_source'];
            }), _0x3be031(0x0, _0x26fde7, 'scrollBar', function () {
                return this['_list']['scrollBar'];
            }), _0x3be031(0x0, _0x26fde7, 'list', function () {
                return this['_list'];
            }), _0x3be031(0x0, _0x26fde7, 'scrollBarS' + 'kin', function () {
                return this['_list']['vScrollBar' + 'Skin'];
            }, function (_0xae883a) {
                this['_list']['vScrollBar' + 'Skin'] = _0xae883a;
            }), _0x3be031(0x0, _0x26fde7, 'renderHand' + 'ler', function () {
                return this['_renderHan' + 'dler'];
            }, function (_0x2b49e8) {
                this['_renderHan' + 'dler'] = _0x2b49e8;
            }), _0x3be031(0x0, _0x26fde7, 'selectedIn' + 'dex', function () {
                return this['_list']['selectedIn' + 'dex'];
            }, function (_0x5f376d) {
                this['_list']['selectedIn' + 'dex'] = _0x5f376d;
            }), _0x3be031(0x0, _0x26fde7, 'spaceLeft', function () {
                return this['_spaceLeft'];
            }, function (_0x162528) {
                this['_spaceLeft'] = _0x162528;
            }), _0x3be031(0x0, _0x26fde7, 'selectedIt' + 'em', function () {
                return this['_list']['selectedIt' + 'em'];
            }, function (_0x1adb75) {
                this['_list']['selectedIt' + 'em'] = _0x1adb75;
            }), _0x3be031(0x0, _0x26fde7, 'width', _0x542542['prototype']['_$get_widt' + 'h'], function (_0x563b54) {
                _0x4d77ad['superSet'](_0x560329, this, 'width', _0x563b54), this['_list']['width'] = _0x563b54;
            }), _0x3be031(0x0, _0x26fde7, 'height', _0x542542['prototype']['_$get_heig' + 'ht'], function (_0x50b173) {
                _0x4d77ad['superSet'](_0x560329, this, 'height', _0x50b173), this['_list']['height'] = _0x50b173;
            }), _0x3be031(0x0, _0x26fde7, 'xml', null, function (_0x2c85b4) {
                var _0x190c1c = [];
                this['parseXml'](_0x2c85b4['childNodes'][0x0], _0x190c1c, null, !0x0), this['array'] = _0x190c1c;
            }), _0x3be031(0x0, _0x26fde7, 'selectedPa' + 'th', function () {
                return this['_list']['selectedIt' + 'em'] ? this['_list']['selectedIt' + 'em']['path'] : null;
            }), _0x7c2462;
        }(_0x560329), _0x475063 = function (_0x5a3718) {
            function _0x439dec() {
                this['selectHand' + 'ler'] = null, this['renderHand' + 'ler'] = null, this['mouseHandl' + 'er'] = null, this['selectEnab' + 'le'] = !0x1, this['totalPage'] = 0x0, this['_$componen' + 'tType'] = 'List', this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_repeatX'] = 0x0, this['_repeatY'] = 0x0, this['_repeatX2'] = 0x0, this['_repeatY2'] = 0x0, this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_array'] = null, this['_startInde' + 'x'] = 0x0, this['_selectedI' + 'ndex'] = -0x1, this['_page'] = 0x0, this['_isVertica' + 'l'] = !0x0, this['_cellSize'] = 0x14, this['_cellOffse' + 't'] = 0x0, this['_isMoved'] = !0x1, this['cacheConte' + 'nt'] = !0x1, this['_createdLi' + 'ne'] = 0x0, this['_cellChang' + 'ed'] = !0x1, this['_usedCache'] = null, this['_elasticEn' + 'abled'] = !0x1, this['_preLen'] = 0x0, _0x439dec['__super']['call'](this), this['_cells'] = [], this['_offset'] = new _0x53b25d();
            }
            _0x3b4bb6(_0x439dec, 'laya.ui.Li' + 'st', _0x5a3718);
            var _0x1f3189 = _0x439dec['prototype'];
            return _0x4d77ad['imps'](_0x1f3189, {
                'laya.ui.IRender': !0x0,
                'laya.ui.IItem': !0x0
            }), _0x1f3189['destroy'] = function (_0x2b6574) {
                void 0x0 === _0x2b6574 && (_0x2b6574 = !0x0), this['_content'] && this['_content']['destroy'](_0x2b6574), this['_scrollBar'] && this['_scrollBar']['destroy'](_0x2b6574), laya['ui']['UIComponen' + 't']['prototype']['destroy']['call'](this, _0x2b6574), this['_content'] = null, this['_scrollBar'] = null, this['_itemRende' + 'r'] = null, this['_cells'] = null, this['_array'] = null, this['selectHand' + 'ler'] = this['renderHand' + 'ler'] = this['mouseHandl' + 'er'] = null;
            }, _0x1f3189['createChil' + 'dren'] = function () {
                this['addChild'](this['_content'] = new _0x560329());
            }, _0x1f3189['onScrollSt' + 'art'] = function () {
                this['_usedCache'] || (this['_usedCache'] = _0x4d77ad['superGet'](_0x560329, this, 'cacheAs')), _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', 'none'), this['_scrollBar']['once']('end', this, this['onScrollEn' + 'd']);
            }, _0x1f3189['onScrollEn' + 'd'] = function () {
                _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', this['_usedCache']);
            }, _0x1f3189['_removePre' + 'ScrollBar'] = function () {
                var _0x6d2646 = this['removeChil' + 'dByName']('scrollBar');
                _0x6d2646 && _0x6d2646['destroy'](!0x0);
            }, _0x1f3189['changeCell' + 's'] = function () {
                if (this['_cellChang' + 'ed'] = !0x1, this['_itemRende' + 'r']) {
                    this['scrollBar'] = this['getChildBy' + 'Name']('scrollBar');
                    var _0x386c44 = this['_getOneCel' + 'l'](), _0xdc6e6 = _0x386c44['width'] + this['_spaceX'] || 0x1, _0x2a263d = _0x386c44['height'] + this['_spaceY'] || 0x1;
                    this['_width'] > 0x0 && (this['_repeatX2'] = this['_isVertica' + 'l'] ? Math['round'](this['_width'] / _0xdc6e6) : Math['ceil'](this['_width'] / _0xdc6e6)), this['_height'] > 0x0 && (this['_repeatY2'] = this['_isVertica' + 'l'] ? Math['ceil'](this['_height'] / _0x2a263d) : Math['round'](this['_height'] / _0x2a263d));
                    var _0x4c655d = this['_width'] ? this['_width'] : _0xdc6e6 * this['repeatX'] - this['_spaceX'], _0x850ae9 = this['_height'] ? this['_height'] : _0x2a263d * this['repeatY'] - this['_spaceY'];
                    this['_cellSize'] = this['_isVertica' + 'l'] ? _0x2a263d : _0xdc6e6, this['_cellOffse' + 't'] = this['_isVertica' + 'l'] ? _0x2a263d * Math['max'](this['_repeatY2'], this['_repeatY']) - _0x850ae9 - this['_spaceY'] : _0xdc6e6 * Math['max'](this['_repeatX2'], this['_repeatX']) - _0x4c655d - this['_spaceX'], this['_isVertica' + 'l'] && this['vScrollBar' + 'Skin'] ? this['_scrollBar']['height'] = _0x850ae9 : !this['_isVertica' + 'l'] && this['hScrollBar' + 'Skin'] && (this['_scrollBar']['width'] = _0x4c655d), this['setContent' + 'Size'](_0x4c655d, _0x850ae9);
                    var _0x58596f = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x2abb92 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX']) + (this['_scrollBar'] ? 0x1 : 0x0);
                    this['_createIte' + 'ms'](0x0, _0x58596f, _0x2abb92), this['_createdLi' + 'ne'] = _0x2abb92, this['_array'] && (this['array'] = this['_array'], this['runCallLat' + 'er'](this['renderItem' + 's']));
                }
            }, _0x1f3189['_getOneCel' + 'l'] = function () {
                if (0x0 === this['_cells']['length']) {
                    var _0x45c58e = this['createItem']();
                    if (this['_offset']['setTo'](_0x45c58e['_x'], _0x45c58e['_y']), this['cacheConte' + 'nt'])
                        return _0x45c58e;
                    this['_cells']['push'](_0x45c58e);
                }
                return this['_cells'][0x0];
            }, _0x1f3189['_createIte' + 'ms'] = function (_0x5a3e06, _0x15d912, _0x32e9a6) {
                var _0x29a58e = this['_content'], _0x5e8b23 = this['_getOneCel' + 'l'](), _0x27e259 = _0x5e8b23['width'] + this['_spaceX'], _0x25092e = _0x5e8b23['height'] + this['_spaceY'];
                if (this['cacheConte' + 'nt']) {
                    var _0x191340 = new _0x560329();
                    _0x191340['cacheAs'] = 'normal', _0x191340['pos']((this['_isVertica' + 'l'] ? 0x0 : _0x5a3e06) * _0x27e259, (this['_isVertica' + 'l'] ? _0x5a3e06 : 0x0) * _0x25092e), this['_content']['addChild'](_0x191340), _0x29a58e = _0x191340;
                } else {
                    for (var _0x29c0e2 = [], _0x449624 = this['_cells']['length'] - 0x1; _0x449624 > -0x1; _0x449624--) {
                        var _0x477a16 = this['_cells'][_0x449624];
                        _0x477a16['removeSelf'](), _0x29c0e2['push'](_0x477a16);
                    }
                    this['_cells']['length'] = 0x0;
                }
                for (var _0x3eb994 = _0x5a3e06; _0x3eb994 < _0x32e9a6; _0x3eb994++)
                    for (var _0xbe87e0 = 0x0; _0xbe87e0 < _0x15d912; _0xbe87e0++)
                        (_0x5e8b23 = _0x29c0e2 && _0x29c0e2['length'] ? _0x29c0e2['pop']() : this['createItem']())['x'] = (this['_isVertica' + 'l'] ? _0xbe87e0 : _0x3eb994) * _0x27e259 - _0x29a58e['_x'], _0x5e8b23['y'] = (this['_isVertica' + 'l'] ? _0x3eb994 : _0xbe87e0) * _0x25092e - _0x29a58e['_y'], _0x5e8b23['name'] = 'item' + (_0x3eb994 * _0x15d912 + _0xbe87e0), _0x29a58e['addChild'](_0x5e8b23), this['addCell'](_0x5e8b23);
            }, _0x1f3189['createItem'] = function () {
                var _0x2193ca = [];
                if ('function' == typeof this['_itemRende' + 'r'])
                    var _0x580ff3 = new this['_itemRende' + 'r']();
                else
                    _0x580ff3 = _0x344ef1['createComp'](this['_itemRende' + 'r'], null, null, _0x2193ca);
                if (0x0 == _0x2193ca['length'] && _0x580ff3['_watchMap']) {
                    var _0x5114a5 = _0x580ff3['_watchMap'];
                    for (var _0x15ecca in _0x5114a5)
                        for (var _0xada11e = _0x5114a5[_0x15ecca], _0x345e6e = 0x0; _0x345e6e < _0xada11e['length']; _0x345e6e++) {
                            var _0x2ca42f = _0xada11e[_0x345e6e];
                            _0x2193ca['push'](_0x2ca42f['comp'], _0x2ca42f['prop'], _0x2ca42f['value']);
                        }
                }
                return _0x2193ca['length'] && (_0x580ff3['_$bindData'] = _0x2193ca), _0x580ff3;
            }, _0x1f3189['addCell'] = function (_0x3d2572) {
                _0x3d2572['on']('click', this, this['onCellMous' + 'e']), _0x3d2572['on']('rightclick', this, this['onCellMous' + 'e']), _0x3d2572['on']('mouseover', this, this['onCellMous' + 'e']), _0x3d2572['on']('mouseout', this, this['onCellMous' + 'e']), _0x3d2572['on']('mousedown', this, this['onCellMous' + 'e']), _0x3d2572['on']('mouseup', this, this['onCellMous' + 'e']), this['_cells']['push'](_0x3d2572);
            }, _0x1f3189['_afterInit' + 'ed'] = function () {
                this['initItems']();
            }, _0x1f3189['initItems'] = function () {
                if (!this['_itemRende' + 'r'] && null != this['getChildBy' + 'Name']('item0')) {
                    this['repeatX'] = 0x1;
                    var _0x13b4d3 = 0x0;
                    _0x13b4d3 = 0x0;
                    for (var _0x5b0c90 = 0x0; _0x5b0c90 < 0x2710; _0x5b0c90++) {
                        var _0x2e8634 = this['getChildBy' + 'Name']('item' + _0x5b0c90);
                        {
                            if (!_0x2e8634)
                                break;
                            this['addCell'](_0x2e8634), _0x13b4d3++;
                        }
                    }
                    this['repeatY'] = _0x13b4d3;
                }
            }, _0x1f3189['setContent' + 'Size'] = function (_0x46cdf9, _0x1d20e5) {
                this['_content']['width'] = _0x46cdf9, this['_content']['height'] = _0x1d20e5, (this['_scrollBar'] || 0x0 != this['_offset']['x'] || 0x0 != this['_offset']['y']) && (this['_content']['_style']['scrollRect'] || (this['_content']['scrollRect'] = _0x12cc88['create']()), this['_content']['_style']['scrollRect']['setTo'](-this['_offset']['x'], -this['_offset']['y'], _0x46cdf9, _0x1d20e5), this['_content']['scrollRect'] = this['_content']['scrollRect']), this['event']('resize');
            }, _0x1f3189['onCellMous' + 'e'] = function (_0x5214df) {
                'mousedown' === _0x5214df['type'] && (this['_isMoved'] = !0x1);
                var _0x2fd508 = _0x5214df['currentTar' + 'get'], _0x3a50e5 = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x2fd508);
                _0x3a50e5 < 0x0 || ('click' === _0x5214df['type'] || 'rightclick' === _0x5214df['type'] ? this['selectEnab' + 'le'] && !this['_isMoved'] ? this['selectedIn' + 'dex'] = _0x3a50e5 : this['changeCell' + 'State'](_0x2fd508, !0x0, 0x0) : 'mouseover' !== _0x5214df['type'] && 'mouseout' !== _0x5214df['type'] || this['_selectedI' + 'ndex'] === _0x3a50e5 || this['changeCell' + 'State'](_0x2fd508, 'mouseover' === _0x5214df['type'], 0x0), this['mouseHandl' + 'er'] && this['mouseHandl' + 'er']['runWith']([
                    _0x5214df,
                    _0x3a50e5
                ]));
            }, _0x1f3189['changeCell' + 'State'] = function (_0x5a6f6f, _0x5c2fbc, _0x3d709c) {
                var _0x4dbaae = _0x5a6f6f['getChildBy' + 'Name']('selectBox');
                _0x4dbaae && (this['selectEnab' + 'le'] = !0x0, _0x4dbaae['visible'] = _0x5c2fbc, _0x4dbaae['index'] = _0x3d709c);
            }, _0x1f3189['_sizeChang' + 'ed'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['_sizeChang' + 'ed']['call'](this), this['setContent' + 'Size'](this['width'], this['height']), this['_scrollBar'] && this['callLater'](this['onScrollBa' + 'rChange']);
            }, _0x1f3189['onScrollBa' + 'rChange'] = function (_0x4214c8) {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
                var _0x228358 = this['_scrollBar']['value'], _0x5d4526 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x21d0bf = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x4b7e66 = Math['floor'](_0x228358 / this['_cellSize']);
                if (this['cacheConte' + 'nt'])
                    _0x3587c7 = _0x21d0bf + 0x1, this['_createdLi' + 'ne'] - _0x4b7e66 < _0x3587c7 && (this['_createIte' + 'ms'](this['_createdLi' + 'ne'], _0x5d4526, this['_createdLi' + 'ne'] + _0x3587c7), this['renderItem' + 's'](this['_createdLi' + 'ne'] * _0x5d4526, 0x0), this['_createdLi' + 'ne'] += _0x3587c7);
                else {
                    var _0x9b1ac8 = _0x4b7e66 * _0x5d4526, _0x3587c7 = 0x0;
                    if (_0x9b1ac8 > this['_startInde' + 'x']) {
                        _0x3587c7 = _0x9b1ac8 - this['_startInde' + 'x'];
                        var _0xaac7d6 = !0x0, _0xe459f = this['_startInde' + 'x'] + _0x5d4526 * (_0x21d0bf + 0x1);
                        this['_isMoved'] = !0x0;
                    } else
                        _0x9b1ac8 < this['_startInde' + 'x'] && (_0x3587c7 = this['_startInde' + 'x'] - _0x9b1ac8, _0xaac7d6 = !0x1, _0xe459f = this['_startInde' + 'x'] - 0x1, this['_isMoved'] = !0x0);
                    for (var _0x488b96 = 0x0; _0x488b96 < _0x3587c7; _0x488b96++) {
                        if (_0xaac7d6) {
                            var _0x1fe4f4 = this['_cells']['shift']();
                            this['_cells'][this['_cells']['length']] = _0x1fe4f4;
                            var _0x4ed402 = _0xe459f + _0x488b96;
                        } else
                            _0x1fe4f4 = this['_cells']['pop'](), this['_cells']['unshift'](_0x1fe4f4), _0x4ed402 = _0xe459f - _0x488b96;
                        var _0x23b727 = Math['floor'](_0x4ed402 / _0x5d4526) * this['_cellSize'];
                        this['_isVertica' + 'l'] ? _0x1fe4f4['y'] = _0x23b727 : _0x1fe4f4['x'] = _0x23b727, this['renderItem'](_0x1fe4f4, _0x4ed402);
                    }
                    this['_startInde' + 'x'] = _0x9b1ac8, this['changeSele' + 'ctStatus']();
                }
                var _0x23df55 = this['_content']['_style']['scrollRect'];
                this['_isVertica' + 'l'] ? (_0x23df55['y'] = _0x228358 - this['_offset']['y'], _0x23df55['x'] = -this['_offset']['x']) : (_0x23df55['y'] = -this['_offset']['y'], _0x23df55['x'] = _0x228358 - this['_offset']['x']), this['_content']['scrollRect'] = _0x23df55;
            }, _0x1f3189['posCell'] = function (_0x35c83a, _0x546216) {
                if (this['_scrollBar']) {
                    var _0x261948 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x236544 = (this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], Math['floor'](_0x546216 / _0x261948) * this['_cellSize']);
                    this['_isVertica' + 'l'] ? _0x35c83a['_y'] = _0x236544 : _0x35c83a['x'] = _0x236544;
                }
            }, _0x1f3189['changeSele' + 'ctStatus'] = function () {
                for (var _0x5104bd = 0x0, _0x1b3383 = this['_cells']['length']; _0x5104bd < _0x1b3383; _0x5104bd++)
                    this['changeCell' + 'State'](this['_cells'][_0x5104bd], this['_selectedI' + 'ndex'] === this['_startInde' + 'x'] + _0x5104bd, 0x1);
            }, _0x1f3189['renderItem' + 's'] = function (_0x5d7823, _0x3d8299) {
                void 0x0 === _0x5d7823 && (_0x5d7823 = 0x0), void 0x0 === _0x3d8299 && (_0x3d8299 = 0x0);
                for (var _0x405414 = _0x5d7823, _0xcada98 = _0x3d8299 || this['_cells']['length']; _0x405414 < _0xcada98; _0x405414++)
                    this['renderItem'](this['_cells'][_0x405414], this['_startInde' + 'x'] + _0x405414);
                this['changeSele' + 'ctStatus']();
            }, _0x1f3189['renderItem'] = function (_0x203434, _0x1692c5) {
                this['_array'] && _0x1692c5 >= 0x0 && _0x1692c5 < this['_array']['length'] ? (_0x203434['visible'] = !0x0, _0x203434['_$bindData'] ? (_0x203434['_dataSourc' + 'e'] = this['_array'][_0x1692c5], this['_bindData'](_0x203434, this['_array'][_0x1692c5])) : _0x203434['dataSource'] = this['_array'][_0x1692c5], this['cacheConte' + 'nt'] || this['posCell'](_0x203434, _0x1692c5), this['hasListene' + 'r']('render') && this['event']('render', [
                    _0x203434,
                    _0x1692c5
                ]), this['renderHand' + 'ler'] && this['renderHand' + 'ler']['runWith']([
                    _0x203434,
                    _0x1692c5
                ])) : (_0x203434['visible'] = !0x1, _0x203434['dataSource'] = null);
            }, _0x1f3189['_bindData'] = function (_0x41e235, _0x38bb1f) {
                for (var _0x3ab504 = _0x41e235['_$bindData'], _0x5b2b23 = 0x0, _0x1ee7b9 = _0x3ab504['length']; _0x5b2b23 < _0x1ee7b9; _0x5b2b23++) {
                    var _0x3e8c00 = _0x3ab504[_0x5b2b23++], _0x2a0293 = _0x3ab504[_0x5b2b23++], _0x5de0cc = _0x3ab504[_0x5b2b23], _0x5cf66e = _0x4b493c['getBindFun'](_0x5de0cc);
                    _0x3e8c00[_0x2a0293] = _0x5cf66e['call'](this, _0x38bb1f);
                }
            }, _0x1f3189['updateArra' + 'y'] = function (_0x948289) {
                this['_array'] = _0x948289;
                var _0x3fdfdf = 0x0;
                if (this['_array'] && ((_0x3fdfdf = this['_preLen'] - this['_startInde' + 'x']) >= 0x0 && this['renderItem' + 's'](_0x3fdfdf), this['_preLen'] = this['_array']['length']), this['_scrollBar']) {
                    var _0x442add = _0x948289['length'], _0x3b0a8a = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x22e99d = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x1469fb = Math['ceil'](_0x442add / _0x3b0a8a);
                    _0x1469fb >= _0x22e99d && (this['_scrollBar']['thumbPerce' + 'nt'] = _0x22e99d / _0x1469fb, this['_scrollBar']['slider']['_max'] = (_0x1469fb - _0x22e99d) * this['_cellSize'] + this['_cellOffse' + 't']);
                }
            }, _0x1f3189['refresh'] = function () {
                this['array'] = this['_array'];
            }, _0x1f3189['getItem'] = function (_0x226331) {
                return _0x226331 > -0x1 && _0x226331 < this['_array']['length'] ? this['_array'][_0x226331] : null;
            }, _0x1f3189['changeItem'] = function (_0x97f0de, _0x49a514) {
                _0x97f0de > -0x1 && _0x97f0de < this['_array']['length'] && (this['_array'][_0x97f0de] = _0x49a514, _0x97f0de >= this['_startInde' + 'x'] && _0x97f0de < this['_startInde' + 'x'] + this['_cells']['length'] && this['renderItem'](this['getCell'](_0x97f0de), _0x97f0de));
            }, _0x1f3189['setItem'] = function (_0x35b917, _0x7ea4f0) {
                this['changeItem'](_0x35b917, _0x7ea4f0);
            }, _0x1f3189['addItem'] = function (_0x34bd11) {
                this['_array']['push'](_0x34bd11), this['array'] = this['_array'];
            }, _0x1f3189['addItemAt'] = function (_0x542b21, _0x8c2a0) {
                this['_array']['splice'](_0x8c2a0, 0x0, _0x542b21), this['array'] = this['_array'];
            }, _0x1f3189['deleteItem'] = function (_0x290355) {
                this['_array']['splice'](_0x290355, 0x1), this['array'] = this['_array'];
            }, _0x1f3189['getCell'] = function (_0xd47629) {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), _0xd47629 > -0x1 && this['_cells'] ? this['_cells'][(_0xd47629 - this['_startInde' + 'x']) % this['_cells']['length']] : null;
            }, _0x1f3189['scrollTo'] = function (_0x520b07) {
                if (this['_scrollBar']) {
                    var _0x496149 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    this['_scrollBar']['value'] = Math['floor'](_0x520b07 / _0x496149) * this['_cellSize'];
                } else
                    this['startIndex'] = _0x520b07;
            }, _0x1f3189['tweenTo'] = function (_0x4a6bbb, _0x4632fe, _0x326e00) {
                if (void 0x0 === _0x4632fe && (_0x4632fe = 0xc8), this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x5083bf = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'];
                    _0x5d7233['to'](this['_scrollBar'], { 'value': Math['floor'](_0x4a6bbb / _0x5083bf) * this['_cellSize'] }, _0x4632fe, null, _0x326e00, 0x0, !0x0);
                } else
                    this['startIndex'] = _0x4a6bbb, _0x326e00 && _0x326e00['run']();
            }, _0x1f3189['_setCellCh' + 'anged'] = function () {
                this['_cellChang' + 'ed'] || (this['_cellChang' + 'ed'] = !0x0, this['callLater'](this['changeCell' + 's']));
            }, _0x1f3189['commitMeas' + 'ure'] = function () {
                this['runCallLat' + 'er'](this['changeCell' + 's']);
            }, _0x3be031(0x0, _0x1f3189, 'cacheAs', _0x5a3718['prototype']['_$get_cach' + 'eAs'], function (_0x3b636a) {
                _0x4d77ad['superSet'](_0x560329, this, 'cacheAs', _0x3b636a), this['_scrollBar'] && (this['_usedCache'] = null, 'none' !== _0x3b636a ? this['_scrollBar']['on']('start', this, this['onScrollSt' + 'art']) : this['_scrollBar']['off']('start', this, this['onScrollSt' + 'art']));
            }), _0x3be031(0x0, _0x1f3189, 'content', function () {
                return this['_content'];
            }), _0x3be031(0x0, _0x1f3189, 'height', _0x5a3718['prototype']['_$get_heig' + 'ht'], function (_0x103611) {
                _0x103611 != this['_height'] && (_0x4d77ad['superSet'](_0x560329, this, 'height', _0x103611), this['_setCellCh' + 'anged']());
            }), _0x3be031(0x0, _0x1f3189, 'itemRender', function () {
                return this['_itemRende' + 'r'];
            }, function (_0x145572) {
                if (this['_itemRende' + 'r'] != _0x145572) {
                    this['_itemRende' + 'r'] = _0x145572;
                    for (var _0x44c73d = this['_cells']['length'] - 0x1; _0x44c73d > -0x1; _0x44c73d--)
                        this['_cells'][_0x44c73d]['destroy']();
                    this['_cells']['length'] = 0x0, this['_setCellCh' + 'anged']();
                }
            }), _0x3be031(0x0, _0x1f3189, 'vScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x3dfde1) {
                this['_removePre' + 'ScrollBar']();
                var _0x3c9b55 = new _0xba4e3e();
                _0x3c9b55['name'] = 'scrollBar', _0x3c9b55['right'] = 0x0, _0x3c9b55['skin'] = _0x3dfde1, _0x3c9b55['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x3c9b55, this['addChild'](_0x3c9b55), this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'page', function () {
                return this['_page'];
            }, function (_0x1fa796) {
                this['_page'] = _0x1fa796, this['_array'] && (this['_page'] = _0x1fa796 > 0x0 ? _0x1fa796 : 0x0, this['_page'] = this['_page'] < this['totalPage'] ? this['_page'] : this['totalPage'] - 0x1, this['startIndex'] = this['_page'] * this['repeatX'] * this['repeatY']);
            }), _0x3be031(0x0, _0x1f3189, 'hScrollBar' + 'Skin', function () {
                return this['_scrollBar'] ? this['_scrollBar']['skin'] : null;
            }, function (_0x2adbb6) {
                this['_removePre' + 'ScrollBar']();
                var _0x40a539 = new _0x51cb1c();
                _0x40a539['name'] = 'scrollBar', _0x40a539['bottom'] = 0x0, _0x40a539['skin'] = _0x2adbb6, _0x40a539['elasticDis' + 'tance'] = this['_elasticEn' + 'abled'] ? 0xc8 : 0x0, this['scrollBar'] = _0x40a539, this['addChild'](_0x40a539), this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'repeatX', function () {
                return this['_repeatX'] > 0x0 ? this['_repeatX'] : this['_repeatX2'] > 0x0 ? this['_repeatX2'] : 0x1;
            }, function (_0x513c3e) {
                this['_repeatX'] = _0x513c3e, this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'scrollBar', function () {
                return this['_scrollBar'];
            }, function (_0xe81b89) {
                this['_scrollBar'] != _0xe81b89 && (this['_scrollBar'] = _0xe81b89, _0xe81b89 && (this['_isVertica' + 'l'] = this['_scrollBar']['isVertical'], this['addChild'](this['_scrollBar']), this['_scrollBar']['on']('change', this, this['onScrollBa' + 'rChange'])));
            }), _0x3be031(0x0, _0x1f3189, 'width', _0x5a3718['prototype']['_$get_widt' + 'h'], function (_0x4f9c0b) {
                _0x4f9c0b != this['_width'] && (_0x4d77ad['superSet'](_0x560329, this, 'width', _0x4f9c0b), this['_setCellCh' + 'anged']());
            }), _0x3be031(0x0, _0x1f3189, 'repeatY', function () {
                return this['_repeatY'] > 0x0 ? this['_repeatY'] : this['_repeatY2'] > 0x0 ? this['_repeatY2'] : 0x1;
            }, function (_0x18b422) {
                this['_repeatY'] = _0x18b422, this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x6f22bb) {
                this['_spaceX'] = _0x6f22bb, this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x32f0b1) {
                this['_spaceY'] = _0x32f0b1, this['_setCellCh' + 'anged']();
            }), _0x3be031(0x0, _0x1f3189, 'selectedIn' + 'dex', function () {
                return this['_selectedI' + 'ndex'];
            }, function (_0x53a746) {
                this['_selectedI' + 'ndex'] != _0x53a746 && (this['_selectedI' + 'ndex'] = _0x53a746, this['changeSele' + 'ctStatus'](), this['event']('change'), this['selectHand' + 'ler'] && this['selectHand' + 'ler']['runWith'](_0x53a746), this['startIndex'] = this['_startInde' + 'x']);
            }), _0x3be031(0x0, _0x1f3189, 'selectedIt' + 'em', function () {
                return -0x1 != this['_selectedI' + 'ndex'] ? this['_array'][this['_selectedI' + 'ndex']] : null;
            }, function (_0x419e16) {
                this['selectedIn' + 'dex'] = this['_array']['indexOf'](_0x419e16);
            }), _0x3be031(0x0, _0x1f3189, 'length', function () {
                return this['_array'] ? this['_array']['length'] : 0x0;
            }), _0x3be031(0x0, _0x1f3189, 'selection', function () {
                return this['getCell'](this['_selectedI' + 'ndex']);
            }, function (_0x48d817) {
                this['selectedIn' + 'dex'] = this['_startInde' + 'x'] + this['_cells']['indexOf'](_0x48d817);
            }), _0x3be031(0x0, _0x1f3189, 'startIndex', function () {
                return this['_startInde' + 'x'];
            }, function (_0x139a73) {
                this['_startInde' + 'x'] = _0x139a73 > 0x0 ? _0x139a73 : 0x0, this['callLater'](this['renderItem' + 's']);
            }), _0x3be031(0x0, _0x1f3189, 'array', function () {
                return this['_array'];
            }, function (_0x2f036f) {
                this['runCallLat' + 'er'](this['changeCell' + 's']), this['_array'] = _0x2f036f || [], this['_preLen'] = this['_array']['length'];
                var _0x40d5f4 = this['_array']['length'];
                if (this['totalPage'] = Math['ceil'](_0x40d5f4 / (this['repeatX'] * this['repeatY'])), this['_selectedI' + 'ndex'] = this['_selectedI' + 'ndex'] < _0x40d5f4 ? this['_selectedI' + 'ndex'] : _0x40d5f4 - 0x1, this['startIndex'] = this['_startInde' + 'x'], this['_scrollBar']) {
                    this['_scrollBar']['stopScroll']();
                    var _0x1a4891 = this['_isVertica' + 'l'] ? this['repeatX'] : this['repeatY'], _0x599f76 = this['_isVertica' + 'l'] ? this['repeatY'] : this['repeatX'], _0x435a87 = Math['ceil'](_0x40d5f4 / _0x1a4891);
                    (this['_cellOffse' + 't'] > 0x0 ? this['totalPage'] + 0x1 : this['totalPage']) > 0x1 && _0x435a87 >= _0x599f76 ? (this['_scrollBar']['scrollSize'] = this['_cellSize'], this['_scrollBar']['thumbPerce' + 'nt'] = _0x599f76 / _0x435a87, this['_scrollBar']['setScroll'](0x0, (_0x435a87 - _0x599f76) * this['_cellSize'] + this['_cellOffse' + 't'], this['_scrollBar']['value']), this['_scrollBar']['target'] = this['_content']) : (this['_scrollBar']['setScroll'](0x0, 0x0, 0x0), this['_scrollBar']['target'] = this['_content']);
                }
            }), _0x3be031(0x0, _0x1f3189, 'dataSource', _0x5a3718['prototype']['_$get_data' + 'Source'], function (_0x1e3cf4) {
                this['_dataSourc' + 'e'] = _0x1e3cf4, 'number' == typeof _0x1e3cf4 && Math['floor'](_0x1e3cf4) == _0x1e3cf4 || 'string' == typeof _0x1e3cf4 ? this['selectedIn' + 'dex'] = parseInt(_0x1e3cf4) : _0x1e3cf4 instanceof Array ? this['array'] = _0x1e3cf4 : _0x4d77ad['superSet'](_0x560329, this, 'dataSource', _0x1e3cf4);
            }), _0x3be031(0x0, _0x1f3189, 'cells', function () {
                return this['runCallLat' + 'er'](this['changeCell' + 's']), this['_cells'];
            }), _0x3be031(0x0, _0x1f3189, 'elasticEna' + 'bled', function () {
                return this['_elasticEn' + 'abled'];
            }, function (_0x43300e) {
                this['_elasticEn' + 'abled'] = _0x43300e, this['_scrollBar'] && (this['_scrollBar']['elasticDis' + 'tance'] = _0x43300e ? 0xc8 : 0x0);
            }), _0x439dec;
        }(_0x560329), _0x30dd36 = function (_0x8583e9) {
            function _0x5cc006(_0x65af59) {
                _0x5cc006['__super']['call'](this, _0x65af59), this['isVertical'] = !0x1;
            }
            return _0x3b4bb6(_0x5cc006, 'laya.ui.HS' + 'lider', _0x58c225), _0x5cc006;
        }(), _0x3276f9 = function (_0x1799ec) {
            function _0x1eae6c(_0x491438, _0x59b18c) {
                this['_value'] = null, void 0x0 === _0x59b18c && (_0x59b18c = ''), _0x1eae6c['__super']['call'](this, _0x491438, _0x59b18c);
            }
            _0x3b4bb6(_0x1eae6c, 'laya.ui.Ra' + 'dio', _0x1799ec);
            var _0x86a85e = _0x1eae6c['prototype'];
            return _0x86a85e['destroy'] = function (_0x7a5dbc) {
                void 0x0 === _0x7a5dbc && (_0x7a5dbc = !0x0), _0x1799ec['prototype']['destroy']['call'](this, _0x7a5dbc), this['_value'] = null;
            }, _0x86a85e['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x1, this['_autoSize'] = !0x1;
            }, _0x86a85e['initialize'] = function () {
                _0x1799ec['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0, this['on']('click', this, this['onClick']);
            }, _0x86a85e['onClick'] = function (_0x3307b2) {
                this['selected'] = !0x0;
            }, _0x3be031(0x0, _0x86a85e, 'value', function () {
                return null != this['_value'] ? this['_value'] : this['label'];
            }, function (_0xe537df) {
                this['_value'] = _0xe537df;
            }), _0x1eae6c;
        }(_0x18019c), _0x90c8ae = function (_0x5b3b3c) {
            function _0x5c7360() {
                this['_oldW'] = 0x0, this['_oldH'] = 0x0, _0x5c7360['__super']['call'](this);
            }
            _0x3b4bb6(_0x5c7360, 'laya.ui.Sc' + 'aleBox', _0x5b3b3c);
            var _0x2cfd2d = _0x5c7360['prototype'];
            return _0x2cfd2d['onEnable'] = function () {
                _0x4d77ad['stage']['on']('resize', this, this['onResize']), this['onResize']();
            }, _0x2cfd2d['onDisable'] = function () {
                _0x4d77ad['stage']['off']('resize', this, this['onResize']);
            }, _0x2cfd2d['onResize'] = function () {
                if (this['width'] > 0x0 && this['height'] > 0x0) {
                    var _0x15e0f2 = Math['min'](_0x4d77ad['stage']['width'] / this['_oldW'], _0x4d77ad['stage']['height'] / this['_oldH']);
                    _0x4d77ad['superSet'](_0x560329, this, 'width', _0x4d77ad['stage']['width']), _0x4d77ad['superSet'](_0x560329, this, 'height', _0x4d77ad['stage']['height']), this['scale'](_0x15e0f2, _0x15e0f2);
                }
            }, _0x3be031(0x0, _0x2cfd2d, 'width', _0x5b3b3c['prototype']['_$get_widt' + 'h'], function (_0x44e995) {
                _0x4d77ad['superSet'](_0x560329, this, 'width', _0x44e995), this['_oldW'] = _0x44e995;
            }), _0x3be031(0x0, _0x2cfd2d, 'height', _0x5b3b3c['prototype']['_$get_heig' + 'ht'], function (_0x220630) {
                _0x4d77ad['superSet'](_0x560329, this, 'height', _0x220630), this['_oldH'] = _0x220630;
            }), _0x5c7360;
        }(_0x560329), _0x3e035e = function (_0xaed4b3) {
            function _0x22dcdf(_0x4f98b1, _0x250327) {
                void 0x0 === _0x250327 && (_0x250327 = ''), _0x22dcdf['__super']['call'](this, _0x4f98b1, _0x250327);
            }
            _0x3b4bb6(_0x22dcdf, 'laya.ui.Ch' + 'eckBox', _0xaed4b3);
            var _0x1e5793 = _0x22dcdf['prototype'];
            return _0x1e5793['preinitial' + 'ize'] = function () {
                laya['ui']['UIComponen' + 't']['prototype']['preinitial' + 'ize']['call'](this), this['toggle'] = !0x0, this['_autoSize'] = !0x1;
            }, _0x1e5793['initialize'] = function () {
                _0xaed4b3['prototype']['initialize']['call'](this), this['createText'](), this['_text']['align'] = 'left', this['_text']['valign'] = 'top', this['_text']['width'] = 0x0;
            }, _0x3be031(0x0, _0x1e5793, 'dataSource', _0xaed4b3['prototype']['_$get_data' + 'Source'], function (_0x2452a6) {
                this['_dataSourc' + 'e'] = _0x2452a6, 'boolean' == typeof _0x2452a6 ? this['selected'] = _0x2452a6 : 'string' == typeof _0x2452a6 ? this['selected'] = 'true' === _0x2452a6 : _0x4d77ad['superSet'](_0x18019c, this, 'dataSource', _0x2452a6);
            }), _0x22dcdf;
        }(_0x18019c), _0x2d3a71 = function (_0x256b2f) {
            function _0x378e92(_0x30d77f, _0xc3959e) {
                this['_valueArr'] = null, this['_indexMap'] = null, this['_sheet'] = null, this['_direction'] = 'horizontal', this['_spaceX'] = 0x0, this['_spaceY'] = 0x0, this['_align'] = 'left', this['_wordsW'] = 0x0, this['_wordsH'] = 0x0, _0x378e92['__super']['call'](this), _0x30d77f && (this['skin'] = _0x30d77f), _0xc3959e && (this['sheet'] = _0xc3959e);
            }
            _0x3b4bb6(_0x378e92, 'laya.ui.Fo' + 'ntClip', _0x256b2f);
            var _0x3b5eb3 = _0x378e92['prototype'];
            return _0x3b5eb3['createChil' + 'dren'] = function () {
                this['_bitmap'] = new _0x1402c1(), this['on']('loaded', this, this['_onClipLoa' + 'ded']);
            }, _0x3b5eb3['_onClipLoa' + 'ded'] = function () {
                this['callLater'](this['changeValu' + 'e']);
            }, _0x3b5eb3['changeValu' + 'e'] = function () {
                if (this['_sources'] && this['_valueArr']) {
                    this['graphics']['clear'](!0x0);
                    var _0x1a3da7;
                    if (_0x1a3da7 = this['_sources'][0x0]) {
                        var _0x98b150 = 'horizontal' === this['_direction'];
                        _0x98b150 ? (this['_wordsW'] = this['_valueArr']['length'] * (_0x1a3da7['sourceWidt' + 'h'] + this['spaceX']), this['_wordsH'] = _0x1a3da7['sourceHeig' + 'ht']) : (this['_wordsW'] = _0x1a3da7['sourceWidt' + 'h'], this['_wordsH'] = (_0x1a3da7['sourceHeig' + 'ht'] + this['spaceY']) * this['_valueArr']['length']);
                        var _0x599047 = 0x0;
                        if (this['_width'])
                            switch (this['_align']) {
                            case 'center':
                                _0x599047 = 0.5 * (this['_width'] - this['_wordsW']);
                                break;
                            case 'right':
                                _0x599047 = this['_width'] - this['_wordsW'];
                                break;
                            default:
                                _0x599047 = 0x0;
                            }
                        for (var _0x36a128 = 0x0, _0x35654f = this['_valueArr']['length']; _0x36a128 < _0x35654f; _0x36a128++) {
                            var _0x314f31 = this['_indexMap'][this['_valueArr']['charAt'](_0x36a128)];
                            this['sources'][_0x314f31] && (_0x1a3da7 = this['sources'][_0x314f31], _0x98b150 ? this['graphics']['drawImage'](_0x1a3da7, _0x599047 + _0x36a128 * (_0x1a3da7['sourceWidt' + 'h'] + this['spaceX']), 0x0, _0x1a3da7['sourceWidt' + 'h'], _0x1a3da7['sourceHeig' + 'ht']) : this['graphics']['drawImage'](_0x1a3da7, 0x0 + _0x599047, _0x36a128 * (_0x1a3da7['sourceHeig' + 'ht'] + this['spaceY']), _0x1a3da7['sourceWidt' + 'h'], _0x1a3da7['sourceHeig' + 'ht']));
                        }
                        this['_width'] || (this['_widget']['resetLayou' + 'tX'](), this['callLater'](this['_sizeChang' + 'ed'])), this['_height'] || (this['_widget']['resetLayou' + 'tY'](), this['callLater'](this['_sizeChang' + 'ed']));
                    }
                }
            }, _0x3b5eb3['measureWid' + 'th'] = function () {
                return this['_wordsW'];
            }, _0x3b5eb3['measureHei' + 'ght'] = function () {
                return this['_wordsH'];
            }, _0x3b5eb3['destroy'] = function (_0x19e272) {
                void 0x0 === _0x19e272 && (_0x19e272 = !0x0), this['_valueArr'] = null, this['_indexMap'] = null, this['graphics']['clear'](!0x0), this['removeSelf'](), this['off']('loaded', this, this['_onClipLoa' + 'ded']), _0x256b2f['prototype']['destroy']['call'](this, _0x19e272);
            }, _0x3be031(0x0, _0x3b5eb3, 'sheet', function () {
                return this['_sheet'];
            }, function (_0xb0ac62) {
                _0xb0ac62 += '', this['_sheet'] = _0xb0ac62;
                var _0x39861b = _0xb0ac62['split']('\x20');
                this['_clipX'] = String(_0x39861b[0x0])['length'], this['clipY'] = _0x39861b['length'], this['_indexMap'] = {};
                for (var _0x42afb0 = 0x0; _0x42afb0 < this['_clipY']; _0x42afb0++)
                    for (var _0x2b02c9 = _0x39861b[_0x42afb0]['split'](''), _0x57f89b = 0x0, _0x5b2442 = _0x2b02c9['length']; _0x57f89b < _0x5b2442; _0x57f89b++)
                        this['_indexMap'][_0x2b02c9[_0x57f89b]] = _0x42afb0 * this['_clipX'] + _0x57f89b;
            }), _0x3be031(0x0, _0x3b5eb3, 'height', _0x256b2f['prototype']['_$get_heig' + 'ht'], function (_0x4155a8) {
                _0x4d77ad['superSet'](_0x31387b, this, 'height', _0x4155a8), this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'direction', function () {
                return this['_direction'];
            }, function (_0x22f25d) {
                this['_direction'] = _0x22f25d, this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'value', function () {
                return this['_valueArr'] ? this['_valueArr'] : '';
            }, function (_0x3e18e2) {
                _0x3e18e2 += '', this['_valueArr'] = _0x3e18e2, this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'width', _0x256b2f['prototype']['_$get_widt' + 'h'], function (_0x21c007) {
                _0x4d77ad['superSet'](_0x31387b, this, 'width', _0x21c007), this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'spaceX', function () {
                return this['_spaceX'];
            }, function (_0x3d5729) {
                this['_spaceX'] = _0x3d5729, 'horizontal' === this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'spaceY', function () {
                return this['_spaceY'];
            }, function (_0x3c9e31) {
                this['_spaceY'] = _0x3c9e31, 'horizontal' !== this['_direction'] && this['callLater'](this['changeValu' + 'e']);
            }), _0x3be031(0x0, _0x3b5eb3, 'align', function () {
                return this['_align'];
            }, function (_0x116d8e) {
                this['_align'] = _0x116d8e, this['callLater'](this['changeValu' + 'e']);
            }), _0x378e92;
        }(_0x31387b), _0x34df15 = function (_0x24bcfa) {
            function _0x1b381e() {
                _0x1b381e['__super']['call'](this);
            }
            return _0x3b4bb6(_0x1b381e, 'laya.ui.Ta' + 'b', _0x51ce89), (_0x1b381e['prototype']['createItem'] = function (_0x5074e9, _0x94b66d) {
                return new _0x18019c(_0x5074e9, _0x94b66d);
            }, _0x1b381e);
        }(), _0x387844 = function (_0x2074b5) {
            function _0x2518a4() {
                _0x2518a4['__super']['call'](this);
            }
            return _0x3b4bb6(_0x2518a4, 'laya.ui.Ra' + 'dioGroup', _0x51ce89), (_0x2518a4['prototype']['createItem'] = function (_0xa953fa, _0xa69074) {
                return new _0x3276f9(_0xa953fa, _0xa69074);
            }, _0x2518a4);
        }(), _0x38aeb1 = function (_0xd5560e) {
            function _0x114cc3() {
                _0x114cc3['__super']['call'](this);
            }
            _0x3b4bb6(_0x114cc3, 'laya.ui.HB' + 'ox', _0xd5560e);
            var _0x195f2f = _0x114cc3['prototype'];
            return _0x195f2f['sortItem'] = function (_0x3bdf3a) {
                _0x3bdf3a && _0x3bdf3a['sort'](function (_0x3a68df, _0x12c3ac) {
                    return _0x3a68df['x'] - _0x12c3ac['x'];
                });
            }, _0x195f2f['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x5f017f = [], _0x7138fb = 0x0, _0x346abf = 0x0, _0x5d18d1 = this['numChildre' + 'n']; _0x346abf < _0x5d18d1; _0x346abf++) {
                    var _0x4836ed = this['getChildAt'](_0x346abf);
                    _0x4836ed && (_0x5f017f['push'](_0x4836ed), _0x7138fb = this['_height'] ? this['_height'] : Math['max'](_0x7138fb, _0x4836ed['height'] * _0x4836ed['scaleY']));
                }
                this['sortItem'](_0x5f017f);
                var _0x5e8a1c = 0x0;
                for (_0x346abf = 0x0, _0x5d18d1 = _0x5f017f['length']; _0x346abf < _0x5d18d1; _0x346abf++)
                    (_0x4836ed = _0x5f017f[_0x346abf])['x'] = _0x5e8a1c, _0x5e8a1c += _0x4836ed['width'] * _0x4836ed['scaleX'] + this['_space'], 'top' == this['_align'] ? _0x4836ed['y'] = 0x0 : 'middle' == this['_align'] ? _0x4836ed['y'] = 0.5 * (_0x7138fb - _0x4836ed['height'] * _0x4836ed['scaleY']) : 'bottom' == this['_align'] && (_0x4836ed['y'] = _0x7138fb - _0x4836ed['height'] * _0x4836ed['scaleY']);
                this['_sizeChang' + 'ed']();
            }, _0x3be031(0x0, _0x195f2f, 'height', _0xd5560e['prototype']['_$get_heig' + 'ht'], function (_0x111f65) {
                this['_height'] != _0x111f65 && (_0x4d77ad['superSet'](_0x33fed5, this, 'height', _0x111f65), this['callLater'](this['changeItem' + 's']));
            }), _0x114cc3['NONE'] = 'none', _0x114cc3['TOP'] = 'top', _0x114cc3['MIDDLE'] = 'middle', _0x114cc3['BOTTOM'] = 'bottom', _0x114cc3;
        }(_0x33fed5), _0xbdf92e = function (_0x546db8) {
            function _0x546622(_0x1e2dbf) {
                this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null, void 0x0 === _0x1e2dbf && (_0x1e2dbf = ''), _0x546622['__super']['call'](this, _0x1e2dbf), this['on']('change', this, this['_onTextCha' + 'nge']);
            }
            _0x3b4bb6(_0x546622, 'laya.ui.Te' + 'xtArea', _0x546db8);
            var _0xebacc8 = _0x546622['prototype'];
            return _0xebacc8['_onTextCha' + 'nge'] = function () {
                this['callLater'](this['changeScro' + 'll']);
            }, _0xebacc8['destroy'] = function (_0x3ea62a) {
                void 0x0 === _0x3ea62a && (_0x3ea62a = !0x0), _0x546db8['prototype']['destroy']['call'](this, _0x3ea62a), this['_vScrollBa' + 'r'] && this['_vScrollBa' + 'r']['destroy'](), this['_hScrollBa' + 'r'] && this['_hScrollBa' + 'r']['destroy'](), this['_vScrollBa' + 'r'] = null, this['_hScrollBa' + 'r'] = null;
            }, _0xebacc8['initialize'] = function () {
                this['width'] = 0xb4, this['height'] = 0x96, this['_tf']['wordWrap'] = !0x0, this['multiline'] = !0x0;
            }, _0xebacc8['onVBarChan' + 'ged'] = function (_0x320139) {
                this['_tf']['scrollY'] != this['_vScrollBa' + 'r']['value'] && (this['_tf']['scrollY'] = this['_vScrollBa' + 'r']['value']);
            }, _0xebacc8['onHBarChan' + 'ged'] = function (_0x4e72f9) {
                this['_tf']['scrollX'] != this['_hScrollBa' + 'r']['value'] && (this['_tf']['scrollX'] = this['_hScrollBa' + 'r']['value']);
            }, _0xebacc8['changeScro' + 'll'] = function () {
                var _0x512749 = this['_vScrollBa' + 'r'] && this['_tf']['maxScrollY'] > 0x0, _0x364034 = this['_hScrollBa' + 'r'] && this['_tf']['maxScrollX'] > 0x0, _0x23771a = _0x512749 ? this['_width'] - this['_vScrollBa' + 'r']['width'] : this['_width'], _0x54aac2 = _0x364034 ? this['_height'] - this['_hScrollBa' + 'r']['height'] : this['_height'], _0x563909 = this['_tf']['padding'] || _0x55fcb['labelPaddi' + 'ng'];
                this['_tf']['width'] = _0x23771a, this['_tf']['height'] = _0x54aac2, this['_vScrollBa' + 'r'] && (this['_vScrollBa' + 'r']['x'] = this['_width'] - this['_vScrollBa' + 'r']['width'] - _0x563909[0x2], this['_vScrollBa' + 'r']['y'] = _0x563909[0x1], this['_vScrollBa' + 'r']['height'] = this['_height'] - (_0x364034 ? this['_hScrollBa' + 'r']['height'] : 0x0) - _0x563909[0x1] - _0x563909[0x3], this['_vScrollBa' + 'r']['scrollSize'] = 0x1, this['_vScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x54aac2 / Math['max'](this['_tf']['textHeight'], _0x54aac2), this['_vScrollBa' + 'r']['setScroll'](0x1, this['_tf']['maxScrollY'], this['_tf']['scrollY']), this['_vScrollBa' + 'r']['visible'] = _0x512749), this['_hScrollBa' + 'r'] && (this['_hScrollBa' + 'r']['x'] = _0x563909[0x0], this['_hScrollBa' + 'r']['y'] = this['_height'] - this['_hScrollBa' + 'r']['height'] - _0x563909[0x3], this['_hScrollBa' + 'r']['width'] = this['_width'] - (_0x512749 ? this['_vScrollBa' + 'r']['width'] : 0x0) - _0x563909[0x0] - _0x563909[0x2], this['_hScrollBa' + 'r']['scrollSize'] = Math['max'](0.033 * _0x23771a, 0x1), this['_hScrollBa' + 'r']['thumbPerce' + 'nt'] = _0x23771a / Math['max'](this['_tf']['textWidth'], _0x23771a), this['_hScrollBa' + 'r']['setScroll'](0x0, this['maxScrollX'], this['scrollX']), this['_hScrollBa' + 'r']['visible'] = _0x364034);
            }, _0xebacc8['scrollTo'] = function (_0x26935d) {
                this['commitMeas' + 'ure'](), this['_tf']['scrollY'] = _0x26935d;
            }, _0x3be031(0x0, _0xebacc8, 'scrollY', function () {
                return this['_tf']['scrollY'];
            }), _0x3be031(0x0, _0xebacc8, 'width', _0x546db8['prototype']['_$get_widt' + 'h'], function (_0x3b53dd) {
                _0x4d77ad['superSet'](_0x87eb14, this, 'width', _0x3b53dd), this['callLater'](this['changeScro' + 'll']);
            }), _0x3be031(0x0, _0xebacc8, 'hScrollBar', function () {
                return this['_hScrollBa' + 'r'];
            }), _0x3be031(0x0, _0xebacc8, 'height', _0x546db8['prototype']['_$get_heig' + 'ht'], function (_0x1cbb02) {
                _0x4d77ad['superSet'](_0x87eb14, this, 'height', _0x1cbb02), this['callLater'](this['changeScro' + 'll']);
            }), _0x3be031(0x0, _0xebacc8, 'maxScrollX', function () {
                return this['_tf']['maxScrollX'];
            }), _0x3be031(0x0, _0xebacc8, 'vScrollBar' + 'Skin', function () {
                return this['_vScrollBa' + 'r'] ? this['_vScrollBa' + 'r']['skin'] : null;
            }, function (_0x4ecd2c) {
                null == this['_vScrollBa' + 'r'] && (this['addChild'](this['_vScrollBa' + 'r'] = new _0xba4e3e()), this['_vScrollBa' + 'r']['on']('change', this, this['onVBarChan' + 'ged']), this['_vScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_vScrollBa' + 'r']['skin'] = _0x4ecd2c;
            }), _0x3be031(0x0, _0xebacc8, 'hScrollBar' + 'Skin', function () {
                return this['_hScrollBa' + 'r'] ? this['_hScrollBa' + 'r']['skin'] : null;
            }, function (_0x45817d) {
                null == this['_hScrollBa' + 'r'] && (this['addChild'](this['_hScrollBa' + 'r'] = new _0x51cb1c()), this['_hScrollBa' + 'r']['on']('change', this, this['onHBarChan' + 'ged']), this['_hScrollBa' + 'r']['mouseWheel' + 'Enable'] = !0x1, this['_hScrollBa' + 'r']['target'] = this['_tf'], this['callLater'](this['changeScro' + 'll'])), this['_hScrollBa' + 'r']['skin'] = _0x45817d;
            }), _0x3be031(0x0, _0xebacc8, 'vScrollBar', function () {
                return this['_vScrollBa' + 'r'];
            }), _0x3be031(0x0, _0xebacc8, 'maxScrollY', function () {
                return this['_tf']['maxScrollY'];
            }), _0x3be031(0x0, _0xebacc8, 'scrollX', function () {
                return this['_tf']['scrollX'];
            }), _0x546622;
        }(_0x87eb14), _0x17fb7a = function (_0x38642f) {
            function _0x14af39() {
                _0x14af39['__super']['call'](this);
            }
            _0x3b4bb6(_0x14af39, 'laya.ui.VB' + 'ox', _0x38642f);
            var _0x1d3e42 = _0x14af39['prototype'];
            return _0x1d3e42['changeItem' + 's'] = function () {
                this['_itemChang' + 'ed'] = !0x1;
                for (var _0x5affc7 = [], _0xa4a9cc = 0x0, _0x278bbe = 0x0, _0x1ad9cb = this['numChildre' + 'n']; _0x278bbe < _0x1ad9cb; _0x278bbe++) {
                    var _0x1713f5 = this['getChildAt'](_0x278bbe);
                    _0x1713f5 && (_0x5affc7['push'](_0x1713f5), _0xa4a9cc = this['_width'] ? this['_width'] : Math['max'](_0xa4a9cc, _0x1713f5['width'] * _0x1713f5['scaleX']));
                }
                this['sortItem'](_0x5affc7);
                var _0xd64f49 = 0x0;
                for (_0x278bbe = 0x0, _0x1ad9cb = _0x5affc7['length']; _0x278bbe < _0x1ad9cb; _0x278bbe++)
                    (_0x1713f5 = _0x5affc7[_0x278bbe])['y'] = _0xd64f49, _0xd64f49 += _0x1713f5['height'] * _0x1713f5['scaleY'] + this['_space'], 'left' == this['_align'] ? _0x1713f5['x'] = 0x0 : 'center' == this['_align'] ? _0x1713f5['x'] = 0.5 * (_0xa4a9cc - _0x1713f5['width'] * _0x1713f5['scaleX']) : 'right' == this['_align'] && (_0x1713f5['x'] = _0xa4a9cc - _0x1713f5['width'] * _0x1713f5['scaleX']);
                this['_sizeChang' + 'ed']();
            }, _0x3be031(0x0, _0x1d3e42, 'width', _0x38642f['prototype']['_$get_widt' + 'h'], function (_0x253954) {
                this['_width'] != _0x253954 && (_0x4d77ad['superSet'](_0x33fed5, this, 'width', _0x253954), this['callLater'](this['changeItem' + 's']));
            }), _0x14af39['NONE'] = 'none', _0x14af39['LEFT'] = 'left', _0x14af39['CENTER'] = 'center', _0x14af39['RIGHT'] = 'right', _0x14af39;
        }(_0x33fed5);
    _0x4d77ad['__init']([
        _0x43db41,
        _0xc11a77
    ]);
}(window, document, Laya);