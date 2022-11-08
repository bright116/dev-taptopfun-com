!function (_0x3ab2bb, _0x204ca6, _0x21b72c) {
    _0x21b72c['un'], _0x21b72c['uns'];
    var _0x3c33f4 = _0x21b72c['static'], _0x1df06c = _0x21b72c['class'], _0x17c821 = _0x21b72c['getset'], _0x4847b3 = _0x21b72c['__newvec'], _0x503312 = laya['maths']['Bezier'], _0x4ffdb6 = laya['utils']['Browser'], _0x2a0ff4 = laya['utils']['Byte'], _0x15e869 = (laya['Const'], laya['events']['Event'], laya['events']['EventDispa' + 'tcher']), _0x16fee2 = laya['display']['Graphics'], _0x1def60 = laya['utils']['Handler'], _0x2aa6df = laya['net']['Loader'], _0x44a261 = laya['maths']['MathUtil'], _0x41fdcd = laya['maths']['Matrix'], _0x272376 = (laya['display']['Node'], laya['maths']['Rectangle']), _0x49315b = (laya['renders']['Render'], laya['resource']['Resource']), _0x5ec870 = (laya['media']['SoundChann' + 'el'], laya['media']['SoundManag' + 'er']), _0x4efbbe = laya['display']['Sprite'], _0xe39151 = laya['utils']['Stat'], _0x5bdfad = laya['resource']['Texture'], _0x26b1dd = (laya['resource']['Texture2D'], laya['utils']['Timer'], laya['net']['URL'], laya['utils']['Utils']), _0x5a4317 = function () {
            function _0x1a0506() {
                this['name'] = null, this['displayArr'] = [];
            }
            return _0x1df06c(_0x1a0506, 'laya.ani.b' + 'one.SlotDa' + 'ta'), _0x1a0506['prototype']['getDisplay' + 'ByName'] = function (_0x5b4c8e) {
                for (var _0x390d42 = 0x0, _0x5e92c7 = this['displayArr']['length']; _0x390d42 < _0x5e92c7; _0x390d42++)
                    if (this['displayArr'][_0x390d42]['attachment' + 'Name'] == _0x5b4c8e)
                        return _0x390d42;
                return -0x1;
            }, _0x1a0506;
        }(), _0x554a59 = function () {
            function _0x2ee135() {
                this['texture'] = null, this['uvTransfor' + 'm'] = null, this['useUvTrans' + 'form'] = !0x1, this['canvasPadd' + 'ing'] = 0x1, this['uvs'] = new Float32Array([
                    0x0,
                    0x0,
                    0x1,
                    0x0,
                    0x1,
                    0x1,
                    0x0,
                    0x1
                ]), this['vertices'] = new Float32Array([
                    0x0,
                    0x0,
                    0x64,
                    0x0,
                    0x64,
                    0x64,
                    0x0,
                    0x64
                ]), this['indexes'] = new Uint16Array([
                    0x0,
                    0x1,
                    0x3,
                    0x3,
                    0x1,
                    0x2
                ]);
            }
            return _0x1df06c(_0x2ee135, 'laya.ani.b' + 'one.canvas' + 'mesh.MeshD' + 'ata'), _0x2ee135['prototype']['getBounds'] = function () {
                return _0x272376['_getWrapRe' + 'c'](this['vertices']);
            }, _0x2ee135;
        }(), _0x10e51e = function () {
            function _0xa61fe3() {
                this['name'] = null, this['parentInde' + 'x'] = 0x0, this['parent'] = null, this['keyframeWi' + 'dth'] = 0x0, this['lerpType'] = 0x0, this['interpolat' + 'ionMethod'] = null, this['childs'] = null, this['keyFrame'] = null, this['playTime'] = NaN, this['extenData'] = null, this['dataOffset'] = 0x0;
            }
            return _0x1df06c(_0xa61fe3, 'laya.ani.A' + 'nimationNo' + 'deContent'), _0xa61fe3;
        }(), _0x179658 = function () {
            function _0x24d886() {
                this['startTime'] = NaN, this['duration'] = NaN, this['interpolat' + 'ionData'] = null, this['data'] = null, this['dData'] = null, this['nextData'] = null;
            }
            return _0x1df06c(_0x24d886, 'laya.ani.K' + 'eyFramesCo' + 'ntent'), _0x24d886;
        }(), _0x1c46e5 = function () {
            function _0x2190d2(_0x87fd14, _0x17724a) {
                this['_data'] = null, this['_bones'] = null, this['target'] = null, this['rotateMix'] = NaN, this['translateM' + 'ix'] = NaN, this['scaleMix'] = NaN, this['shearMix'] = NaN, this['_temp'] = _0x4847b3(0x2, 0x0), this['_data'] = _0x87fd14, null == this['_bones'] && (this['_bones'] = []), this['target'] = _0x17724a[_0x87fd14['targetInde' + 'x']];
                var _0x6894f3, _0x228cb2 = 0x0;
                for (_0x228cb2 = 0x0, _0x6894f3 = _0x87fd14['boneIndexs']['length']; _0x228cb2 < _0x6894f3; _0x228cb2++)
                    this['_bones']['push'](_0x17724a[_0x87fd14['boneIndexs'][_0x228cb2]]);
                this['rotateMix'] = _0x87fd14['rotateMix'], this['translateM' + 'ix'] = _0x87fd14['translateM' + 'ix'], this['scaleMix'] = _0x87fd14['scaleMix'], this['shearMix'] = _0x87fd14['shearMix'];
            }
            return _0x1df06c(_0x2190d2, 'laya.ani.b' + 'one.TfCons' + 'traint'), _0x2190d2['prototype']['apply'] = function () {
                for (var _0x2e66b4, _0x54c527 = this['target']['resultMatr' + 'ix']['a'], _0x56e240 = this['target']['resultMatr' + 'ix']['b'], _0x10a7d3 = this['target']['resultMatr' + 'ix']['c'], _0x4b9851 = this['target']['resultMatr' + 'ix']['d'], _0x20b847 = 0x0, _0x1f512e = this['_bones']['length']; _0x20b847 < _0x1f512e; _0x20b847++) {
                    if (_0x2e66b4 = this['_bones'][_0x20b847], this['rotateMix'] > 0x0) {
                        var _0x5caeef = _0x2e66b4['resultMatr' + 'ix']['a'], _0x373e9d = _0x2e66b4['resultMatr' + 'ix']['b'], _0x22fede = _0x2e66b4['resultMatr' + 'ix']['c'], _0x5c2956 = _0x2e66b4['resultMatr' + 'ix']['d'], _0x96e615 = Math['atan2'](_0x10a7d3, _0x54c527) - Math['atan2'](_0x22fede, _0x5caeef) + this['_data']['offsetRota' + 'tion'] * Math['PI'] / 0xb4;
                        _0x96e615 > Math['PI'] ? _0x96e615 -= 0x2 * Math['PI'] : _0x96e615 < -Math['PI'] && (_0x96e615 += 0x2 * Math['PI']), _0x96e615 *= this['rotateMix'];
                        var _0x40e0a0 = Math['cos'](_0x96e615), _0x429b03 = Math['sin'](_0x96e615);
                        _0x2e66b4['resultMatr' + 'ix']['a'] = _0x40e0a0 * _0x5caeef - _0x429b03 * _0x22fede, _0x2e66b4['resultMatr' + 'ix']['b'] = _0x40e0a0 * _0x373e9d - _0x429b03 * _0x5c2956, _0x2e66b4['resultMatr' + 'ix']['c'] = _0x429b03 * _0x5caeef + _0x40e0a0 * _0x22fede, _0x2e66b4['resultMatr' + 'ix']['d'] = _0x429b03 * _0x373e9d + _0x40e0a0 * _0x5c2956;
                    }
                    if (this['translateM' + 'ix'] && (this['_temp'][0x0] = this['_data']['offsetX'], this['_temp'][0x1] = this['_data']['offsetY'], this['target']['localToWor' + 'ld'](this['_temp']), _0x2e66b4['resultMatr' + 'ix']['tx'] += (this['_temp'][0x0] - _0x2e66b4['resultMatr' + 'ix']['tx']) * this['translateM' + 'ix'], _0x2e66b4['resultMatr' + 'ix']['ty'] += (this['_temp'][0x1] - _0x2e66b4['resultMatr' + 'ix']['ty']) * this['translateM' + 'ix'], _0x2e66b4['updateChil' + 'd']()), this['scaleMix'] > 0x0) {
                        var _0x3d91b2 = Math['sqrt'](_0x2e66b4['resultMatr' + 'ix']['a'] * _0x2e66b4['resultMatr' + 'ix']['a'] + _0x2e66b4['resultMatr' + 'ix']['c'] * _0x2e66b4['resultMatr' + 'ix']['c']), _0x20a179 = Math['sqrt'](_0x54c527 * _0x54c527 + _0x10a7d3 * _0x10a7d3), _0x57e8f4 = _0x3d91b2 > 0.00001 ? (_0x3d91b2 + (_0x20a179 - _0x3d91b2 + this['_data']['offsetScal' + 'eX']) * this['scaleMix']) / _0x3d91b2 : 0x0;
                        _0x2e66b4['resultMatr' + 'ix']['a'] *= _0x57e8f4, _0x2e66b4['resultMatr' + 'ix']['c'] *= _0x57e8f4, _0x3d91b2 = Math['sqrt'](_0x2e66b4['resultMatr' + 'ix']['b'] * _0x2e66b4['resultMatr' + 'ix']['b'] + _0x2e66b4['resultMatr' + 'ix']['d'] * _0x2e66b4['resultMatr' + 'ix']['d']), _0x20a179 = Math['sqrt'](_0x56e240 * _0x56e240 + _0x4b9851 * _0x4b9851), _0x57e8f4 = _0x3d91b2 > 0.00001 ? (_0x3d91b2 + (_0x20a179 - _0x3d91b2 + this['_data']['offsetScal' + 'eY']) * this['scaleMix']) / _0x3d91b2 : 0x0, _0x2e66b4['resultMatr' + 'ix']['b'] *= _0x57e8f4, _0x2e66b4['resultMatr' + 'ix']['d'] *= _0x57e8f4;
                    }
                    if (this['shearMix'] > 0x0) {
                        _0x373e9d = _0x2e66b4['resultMatr' + 'ix']['b'], _0x5c2956 = _0x2e66b4['resultMatr' + 'ix']['d'];
                        var _0x1f814b = Math['atan2'](_0x5c2956, _0x373e9d);
                        (_0x96e615 = Math['atan2'](_0x4b9851, _0x56e240) - Math['atan2'](_0x10a7d3, _0x54c527) - (_0x1f814b - Math['atan2'](_0x2e66b4['resultMatr' + 'ix']['c'], _0x2e66b4['resultMatr' + 'ix']['a']))) > Math['PI'] ? _0x96e615 -= 0x2 * Math['PI'] : _0x96e615 < -Math['PI'] && (_0x96e615 += 0x2 * Math['PI']), _0x96e615 = _0x1f814b + (_0x96e615 + this['_data']['offsetShea' + 'rY'] * Math['PI'] / 0xb4) * this['shearMix'], _0x57e8f4 = Math['sqrt'](_0x373e9d * _0x373e9d + _0x5c2956 * _0x5c2956), _0x2e66b4['resultMatr' + 'ix']['b'] = Math['cos'](_0x96e615) * _0x57e8f4, _0x2e66b4['resultMatr' + 'ix']['d'] = Math['sin'](_0x96e615) * _0x57e8f4;
                    }
                }
            }, _0x2190d2;
        }(), _0x8036c7 = function () {
            function _0xb0273d() {
                this['name'] = null, this['target'] = null, this['positionMo' + 'de'] = null, this['spacingMod' + 'e'] = null, this['rotateMode'] = null, this['offsetRota' + 'tion'] = NaN, this['position'] = NaN, this['spacing'] = NaN, this['rotateMix'] = NaN, this['translateM' + 'ix'] = NaN, this['bones'] = [];
            }
            return _0x1df06c(_0xb0273d, 'laya.ani.b' + 'one.PathCo' + 'nstraintDa' + 'ta'), _0xb0273d;
        }(), _0x4675d7 = function () {
            function _0x3a2b6a() {
            }
            return _0x1df06c(_0x3a2b6a, 'laya.ani.b' + 'one.UVTool' + 's'), _0x3a2b6a['getRelativ' + 'eUV'] = function (_0x398fe7, _0x585ced, _0x56abef) {
                var _0x3030b9 = _0x398fe7[0x0], _0x4617da = _0x398fe7[0x2] - _0x398fe7[0x0], _0x40e280 = _0x398fe7[0x1], _0x1bf696 = _0x398fe7[0x5] - _0x398fe7[0x1];
                _0x56abef || (_0x56abef = []), _0x56abef['length'] = _0x585ced['length'];
                var _0x28bf42, _0x343ec9 = 0x0;
                _0x28bf42 = _0x56abef['length'];
                var _0x30e9b5 = 0x1 / _0x4617da, _0x3d4849 = 0x1 / _0x1bf696;
                for (_0x343ec9 = 0x0; _0x343ec9 < _0x28bf42; _0x343ec9 += 0x2)
                    _0x56abef[_0x343ec9] = (_0x585ced[_0x343ec9] - _0x3030b9) * _0x30e9b5, _0x56abef[_0x343ec9 + 0x1] = (_0x585ced[_0x343ec9 + 0x1] - _0x40e280) * _0x3d4849;
                return _0x56abef;
            }, _0x3a2b6a['getAbsolut' + 'eUV'] = function (_0x3d8794, _0x4bfc38, _0x2ce64d) {
                if (0x0 == _0x3d8794[0x0] && 0x0 == _0x3d8794[0x1] && 0x1 == _0x3d8794[0x4] && 0x1 == _0x3d8794[0x5])
                    return _0x2ce64d ? (_0x26b1dd['copyArray'](_0x2ce64d, _0x4bfc38), _0x2ce64d) : _0x4bfc38;
                var _0x4c701a = _0x3d8794[0x0], _0xfa45e = _0x3d8794[0x2] - _0x3d8794[0x0], _0xcb57cf = _0x3d8794[0x1], _0x2eb45d = _0x3d8794[0x5] - _0x3d8794[0x1];
                _0x2ce64d || (_0x2ce64d = []), _0x2ce64d['length'] = _0x4bfc38['length'];
                var _0x2ee0fa, _0x333feb = 0x0;
                for (_0x2ee0fa = _0x2ce64d['length'], _0x333feb = 0x0; _0x333feb < _0x2ee0fa; _0x333feb += 0x2)
                    _0x2ce64d[_0x333feb] = _0x4bfc38[_0x333feb] * _0xfa45e + _0x4c701a, _0x2ce64d[_0x333feb + 0x1] = _0x4bfc38[_0x333feb + 0x1] * _0x2eb45d + _0xcb57cf;
                return _0x2ce64d;
            }, _0x3a2b6a;
        }(), _0x422223 = function () {
            function _0x593bab() {
                this['deformSlot' + 'DisplayLis' + 't'] = [];
            }
            return _0x1df06c(_0x593bab, 'laya.ani.b' + 'one.Deform' + 'SlotData'), _0x593bab;
        }(), _0x3337d7 = function () {
            function _0x397e11() {
            }
            return _0x1df06c(_0x397e11, 'laya.ani.A' + 'nimationPa' + 'rser02'), _0x397e11['READ_DATA'] = function () {
                _0x397e11['_DATA']['offset'] = _0x397e11['_reader']['getUint32'](), _0x397e11['_DATA']['size'] = _0x397e11['_reader']['getUint32']();
            }, _0x397e11['READ_BLOCK'] = function () {
                for (var _0x2ad433 = _0x397e11['_BLOCK']['count'] = _0x397e11['_reader']['getUint16'](), _0x454806 = _0x397e11['_BLOCK']['blockStart' + 's'] = [], _0xcf9220 = _0x397e11['_BLOCK']['blockLengt' + 'hs'] = [], _0x1bc1b6 = 0x0; _0x1bc1b6 < _0x2ad433; _0x1bc1b6++)
                    _0x454806['push'](_0x397e11['_reader']['getUint32']()), _0xcf9220['push'](_0x397e11['_reader']['getUint32']());
            }, _0x397e11['READ_STRIN' + 'GS'] = function () {
                var _0x104f1d = _0x397e11['_reader']['getUint32'](), _0x5db50d = _0x397e11['_reader']['getUint16'](), _0x2d8e5a = _0x397e11['_reader']['pos'];
                _0x397e11['_reader']['pos'] = _0x104f1d + _0x397e11['_DATA']['offset'];
                for (var _0x3f4a42 = 0x0; _0x3f4a42 < _0x5db50d; _0x3f4a42++)
                    _0x397e11['_strings'][_0x3f4a42] = _0x397e11['_reader']['readUTFStr' + 'ing']();
                _0x397e11['_reader']['pos'] = _0x2d8e5a;
            }, _0x397e11['parse'] = function (_0x334f28, _0x3f1232) {
                _0x397e11['_templet'] = _0x334f28, _0x397e11['_reader'] = _0x3f1232, _0x3f1232['__getBuffe' + 'r'](), (_0x397e11['READ_DATA'](), _0x397e11['READ_BLOCK'](), _0x397e11['READ_STRIN' + 'GS']());
                for (var _0x227861 = 0x0, _0x477f03 = _0x397e11['_BLOCK']['count']; _0x227861 < _0x477f03; _0x227861++) {
                    var _0x40f5a7 = _0x3f1232['getUint16'](), _0x130640 = _0x397e11['_strings'][_0x40f5a7], _0x2c8ebf = _0x397e11['READ_' + _0x130640];
                    if (null == _0x2c8ebf)
                        throw new Error('model\x20file' + '\x20err,no\x20th' + 'is\x20functio' + 'n:' + _0x40f5a7 + '\x20' + _0x130640);
                    _0x2c8ebf['call'](null);
                }
            }, _0x397e11['READ_ANIMA' + 'TIONS'] = function () {
                var _0x2de6d2 = _0x397e11['_reader'], _0x39088f = _0x2de6d2['__getBuffe' + 'r'](), _0x3ae32c = 0x0, _0x11e3b8 = 0x0, _0x495df1 = 0x0, _0x5172c0 = 0x0, _0x226f5a = _0x2de6d2['getUint16'](), _0x181194 = [];
                for (_0x181194['length'] = _0x226f5a, _0x3ae32c = 0x0; _0x3ae32c < _0x226f5a; _0x3ae32c++)
                    _0x181194[_0x3ae32c] = _0x21cb65['interpolat' + 'ion'][_0x2de6d2['getByte']()];
                var _0x17d574 = _0x2de6d2['getUint8']();
                for (_0x397e11['_templet']['_anis']['length'] = _0x17d574, _0x3ae32c = 0x0; _0x3ae32c < _0x17d574; _0x3ae32c++) {
                    var _0x424d82 = _0x397e11['_templet']['_anis'][_0x3ae32c] = new _0xc1af76();
                    _0x424d82['nodes'] = new Array();
                    var _0x583fbb = _0x424d82['name'] = _0x397e11['_strings'][_0x2de6d2['getUint16']()];
                    _0x397e11['_templet']['_aniMap'][_0x583fbb] = _0x3ae32c, _0x424d82['bone3DMap'] = {}, _0x424d82['playTime'] = _0x2de6d2['getFloat32']();
                    var _0x98b490 = _0x424d82['nodes']['length'] = _0x2de6d2['getInt16']();
                    for (_0x424d82['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x11e3b8 = 0x0; _0x11e3b8 < _0x98b490; _0x11e3b8++) {
                        var _0x102feb = _0x424d82['nodes'][_0x11e3b8] = new _0x10e51e();
                        _0x102feb['keyframeWi' + 'dth'] = _0x226f5a, _0x102feb['childs'] = [];
                        var _0x2168c8 = _0x2de6d2['getUint16']();
                        _0x2168c8 >= 0x0 && (_0x102feb['name'] = _0x397e11['_strings'][_0x2168c8], _0x424d82['bone3DMap'][_0x102feb['name']] = _0x11e3b8), _0x102feb['keyFrame'] = new Array(), _0x102feb['parentInde' + 'x'] = _0x2de6d2['getInt16'](), -0x1 == _0x102feb['parentInde' + 'x'] ? _0x102feb['parent'] = null : _0x102feb['parent'] = _0x424d82['nodes'][_0x102feb['parentInde' + 'x']], _0x424d82['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x226f5a, _0x102feb['interpolat' + 'ionMethod'] = _0x181194, null != _0x102feb['parent'] && _0x102feb['parent']['childs']['push'](_0x102feb);
                        var _0xfaed1 = _0x2de6d2['getUint16']();
                        _0x102feb['keyFrame']['length'] = _0xfaed1;
                        var _0x5d9da0 = null, _0x5137c0 = null;
                        for (_0x495df1 = 0x0, _0x5172c0 = _0xfaed1; _0x495df1 < _0x5172c0; _0x495df1++) {
                            (_0x5d9da0 = _0x102feb['keyFrame'][_0x495df1] = new _0x179658())['startTime'] = _0x2de6d2['getFloat32'](), _0x5137c0 && (_0x5137c0['duration'] = _0x5d9da0['startTime'] - _0x5137c0['startTime']), _0x5d9da0['dData'] = new Float32Array(_0x226f5a), _0x5d9da0['nextData'] = new Float32Array(_0x226f5a);
                            var _0x2dcbaf = _0x397e11['_DATA']['offset'], _0x481542 = _0x2de6d2['getUint32'](), _0x3e439b = 0x4 * _0x226f5a, _0x545ab9 = _0x39088f['slice'](_0x2dcbaf + _0x481542, _0x2dcbaf + _0x481542 + _0x3e439b);
                            _0x5d9da0['data'] = new Float32Array(_0x545ab9), _0x5137c0 = _0x5d9da0;
                        }
                        _0x5d9da0['duration'] = 0x0, _0x102feb['playTime'] = _0x424d82['playTime'], _0x397e11['_templet']['_calculate' + 'KeyFrame'](_0x102feb, _0xfaed1, _0x226f5a);
                    }
                }
            }, _0x397e11['_templet'] = null, _0x397e11['_reader'] = null, _0x397e11['_strings'] = [], _0x3c33f4(_0x397e11, [
                '_BLOCK',
                function () {
                    return this['_BLOCK'] = { 'count': 0x0 };
                },
                '_DATA',
                function () {
                    return this['_DATA'] = {
                        'offset': 0x0,
                        'size': 0x0
                    };
                }
            ]), _0x397e11;
        }(), _0x40c413 = function () {
            function _0x3df855() {
            }
            return _0x1df06c(_0x3df855, 'laya.ani.A' + 'nimationPa' + 'rser01'), _0x3df855['parse'] = function (_0x3bcdec, _0x5a4c5a) {
                var _0x46f709 = _0x5a4c5a['__getBuffe' + 'r'](), _0x14e5a8 = 0x0, _0x325fcf = 0x0, _0x42e78f = 0x0, _0x546048 = 0x0, _0x1f0dd3 = 0x0, _0x22abbf = 0x0, _0x29dbf6 = 0x0, _0x5b3e76 = _0x5a4c5a['readUTFStr' + 'ing']();
                _0x3bcdec['_aniClassN' + 'ame'] = _0x5b3e76;
                var _0x32c2ed, _0xb50849 = _0x5a4c5a['readUTFStr' + 'ing']()['split']('\x0a'), _0x37c009 = _0x5a4c5a['getUint8'](), _0x4a1370 = _0x5a4c5a['getUint32'](), _0x1e966b = _0x5a4c5a['getUint32']();
                _0x4a1370 > 0x0 && (_0x32c2ed = _0x46f709['slice'](_0x4a1370, _0x1e966b));
                var _0xca3a59 = new _0x2a0ff4(_0x32c2ed);
                for (_0x1e966b > 0x0 && (_0x3bcdec['_publicExt' + 'Data'] = _0x46f709['slice'](_0x1e966b, _0x46f709['byteLength'])), _0x3bcdec['_useParent'] = !!_0x5a4c5a['getUint8'](), _0x3bcdec['_anis']['length'] = _0x37c009, _0x14e5a8 = 0x0; _0x14e5a8 < _0x37c009; _0x14e5a8++) {
                    var _0x192fb3 = _0x3bcdec['_anis'][_0x14e5a8] = new _0xc1af76();
                    _0x192fb3['nodes'] = new Array();
                    var _0x173f83 = _0x192fb3['name'] = _0xb50849[_0x5a4c5a['getUint16']()];
                    _0x3bcdec['_aniMap'][_0x173f83] = _0x14e5a8, _0x192fb3['bone3DMap'] = {}, _0x192fb3['playTime'] = _0x5a4c5a['getFloat32']();
                    var _0x167e94 = _0x192fb3['nodes']['length'] = _0x5a4c5a['getUint8']();
                    for (_0x192fb3['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x325fcf = 0x0; _0x325fcf < _0x167e94; _0x325fcf++) {
                        var _0x1be94f = _0x192fb3['nodes'][_0x325fcf] = new _0x10e51e();
                        _0x1be94f['childs'] = [];
                        var _0x4fd7ec = _0x5a4c5a['getInt16']();
                        _0x4fd7ec >= 0x0 && (_0x1be94f['name'] = _0xb50849[_0x4fd7ec], _0x192fb3['bone3DMap'][_0x1be94f['name']] = _0x325fcf), _0x1be94f['keyFrame'] = new Array(), _0x1be94f['parentInde' + 'x'] = _0x5a4c5a['getInt16'](), -0x1 == _0x1be94f['parentInde' + 'x'] ? _0x1be94f['parent'] = null : _0x1be94f['parent'] = _0x192fb3['nodes'][_0x1be94f['parentInde' + 'x']], _0x1be94f['lerpType'] = _0x5a4c5a['getUint8']();
                        var _0x19eec3 = _0x5a4c5a['getUint32']();
                        _0xca3a59['pos'] = _0x19eec3;
                        var _0x44576a = _0x1be94f['keyframeWi' + 'dth'] = _0xca3a59['getUint16']();
                        if (_0x192fb3['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x44576a, 0x0 === _0x1be94f['lerpType'] || 0x1 === _0x1be94f['lerpType']) {
                            for (_0x1be94f['interpolat' + 'ionMethod'] = [], _0x1be94f['interpolat' + 'ionMethod']['length'] = _0x44576a, _0x42e78f = 0x0; _0x42e78f < _0x44576a; _0x42e78f++)
                                _0x1be94f['interpolat' + 'ionMethod'][_0x42e78f] = _0x21cb65['interpolat' + 'ion'][_0xca3a59['getUint8']()];
                        }
                        null != _0x1be94f['parent'] && _0x1be94f['parent']['childs']['push'](_0x1be94f);
                        var _0xcc492a = _0x5a4c5a['getUint16']();
                        _0xcc492a > 0x0 && (_0x1be94f['extenData'] = _0x46f709['slice'](_0x5a4c5a['pos'], _0x5a4c5a['pos'] + _0xcc492a), _0x5a4c5a['pos'] += _0xcc492a);
                        var _0x425d09 = _0x5a4c5a['getUint16']();
                        _0x1be94f['keyFrame']['length'] = _0x425d09;
                        var _0x21154f, _0x25eb60 = 0x0;
                        for (_0x42e78f = 0x0, _0x546048 = _0x425d09; _0x42e78f < _0x546048; _0x42e78f++) {
                            if ((_0x21154f = _0x1be94f['keyFrame'][_0x42e78f] = new _0x179658())['duration'] = _0x5a4c5a['getFloat32'](), _0x21154f['startTime'] = _0x25eb60, 0x2 === _0x1be94f['lerpType']) {
                                _0x21154f['interpolat' + 'ionData'] = [];
                                var _0x4c6bde, _0x4f0110 = _0x5a4c5a['getUint8']();
                                switch (_0x4c6bde = _0x5a4c5a['getFloat32']()) {
                                case 0xfe:
                                    for (_0x21154f['interpolat' + 'ionData']['length'] = _0x44576a, _0x29dbf6 = 0x0; _0x29dbf6 < _0x44576a; _0x29dbf6++)
                                        _0x21154f['interpolat' + 'ionData'][_0x29dbf6] = 0x0;
                                    break;
                                case 0xff:
                                    for (_0x21154f['interpolat' + 'ionData']['length'] = _0x44576a, _0x29dbf6 = 0x0; _0x29dbf6 < _0x44576a; _0x29dbf6++)
                                        _0x21154f['interpolat' + 'ionData'][_0x29dbf6] = 0x5;
                                    break;
                                default:
                                    for (_0x21154f['interpolat' + 'ionData']['push'](_0x4c6bde), _0x22abbf = 0x1; _0x22abbf < _0x4f0110; _0x22abbf++)
                                        _0x21154f['interpolat' + 'ionData']['push'](_0x5a4c5a['getFloat32']());
                                }
                            }
                            for (_0x21154f['data'] = new Float32Array(_0x44576a), _0x21154f['dData'] = new Float32Array(_0x44576a), _0x21154f['nextData'] = new Float32Array(_0x44576a), _0x1f0dd3 = 0x0; _0x1f0dd3 < _0x44576a; _0x1f0dd3++)
                                _0x21154f['data'][_0x1f0dd3] = _0x5a4c5a['getFloat32'](), _0x21154f['data'][_0x1f0dd3] > -1e-8 && _0x21154f['data'][_0x1f0dd3] < 1e-8 && (_0x21154f['data'][_0x1f0dd3] = 0x0);
                            _0x25eb60 += _0x21154f['duration'];
                        }
                        _0x21154f['startTime'] = _0x192fb3['playTime'], _0x1be94f['playTime'] = _0x192fb3['playTime'], _0x3bcdec['_calculate' + 'KeyFrame'](_0x1be94f, _0x425d09, _0x44576a);
                    }
                }
            }, _0x3df855;
        }(), _0x228e08 = function () {
            function _0x3d3a7a() {
                this['name'] = null, this['slotArr'] = [];
            }
            return _0x1df06c(_0x3d3a7a, 'laya.ani.b' + 'one.SkinDa' + 'ta'), _0x3d3a7a;
        }(), _0xb9f29b = function () {
            function _0x5435d7(_0xfc711d, _0x293f65) {
                this['_targetBon' + 'e'] = null, this['_bones'] = null, this['_data'] = null, this['name'] = null, this['mix'] = NaN, this['bendDirect' + 'ion'] = NaN, this['isSpine'] = !0x0, this['_sp'] = null, this['isDebug'] = !0x1, this['_data'] = _0xfc711d, this['_targetBon' + 'e'] = _0x293f65[_0xfc711d['targetBone' + 'Index']], this['isSpine'] = _0xfc711d['isSpine'], null == this['_bones'] && (this['_bones'] = []), this['_bones']['length'] = 0x0;
                for (var _0x8f831 = 0x0, _0x1ebef4 = _0xfc711d['boneIndexs']['length']; _0x8f831 < _0x1ebef4; _0x8f831++)
                    this['_bones']['push'](_0x293f65[_0xfc711d['boneIndexs'][_0x8f831]]);
                this['name'] = _0xfc711d['name'], this['mix'] = _0xfc711d['mix'], this['bendDirect' + 'ion'] = _0xfc711d['bendDirect' + 'ion'];
            }
            _0x1df06c(_0x5435d7, 'laya.ani.b' + 'one.IkCons' + 'traint');
            var _0xc09e9d = _0x5435d7['prototype'];
            return _0xc09e9d['apply'] = function () {
                switch (this['_bones']['length']) {
                case 0x1:
                    this['_applyIk1'](this['_bones'][0x0], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['mix']);
                    break;
                case 0x2:
                    this['isSpine'] ? this['_applyIk2'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']) : this['_applyIk3'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']);
                }
            }, _0xc09e9d['_applyIk1'] = function (_0x318f44, _0x3a54d4, _0x358a74, _0x5434da) {
                var _0xe4991e = _0x318f44['parentBone'], _0x3e2650 = 0x1 / (_0xe4991e['resultMatr' + 'ix']['a'] * _0xe4991e['resultMatr' + 'ix']['d'] - _0xe4991e['resultMatr' + 'ix']['b'] * _0xe4991e['resultMatr' + 'ix']['c']), _0x399765 = _0x3a54d4 - _0xe4991e['resultMatr' + 'ix']['tx'], _0x358f69 = _0x358a74 - _0xe4991e['resultMatr' + 'ix']['ty'], _0x5485c0 = (_0x399765 * _0xe4991e['resultMatr' + 'ix']['d'] - _0x358f69 * _0xe4991e['resultMatr' + 'ix']['c']) * _0x3e2650 - _0x318f44['transform']['x'], _0x183926 = (_0x358f69 * _0xe4991e['resultMatr' + 'ix']['a'] - _0x399765 * _0xe4991e['resultMatr' + 'ix']['b']) * _0x3e2650 - _0x318f44['transform']['y'], _0x2f81d4 = Math['atan2'](_0x183926, _0x5485c0) * _0x5435d7['radDeg'] - 0x0 - _0x318f44['transform']['skX'];
                _0x318f44['transform']['scX'] < 0x0 && (_0x2f81d4 += 0xb4), _0x2f81d4 > 0xb4 ? _0x2f81d4 -= 0x168 : _0x2f81d4 < -0xb4 && (_0x2f81d4 += 0x168), _0x318f44['transform']['skX'] = _0x318f44['transform']['skY'] = _0x318f44['transform']['skX'] + _0x2f81d4 * _0x5434da, _0x318f44['update']();
            }, _0xc09e9d['updatePos'] = function (_0xcc63c0, _0x17929a) {
                this['_sp'] && this['_sp']['pos'](_0xcc63c0, _0x17929a);
            }, _0xc09e9d['_applyIk2'] = function (_0x43eb39, _0x76be16, _0x55161c, _0x3e149e, _0x54d74e, _0x3592b7) {
                if (0x0 != _0x3592b7) {
                    var _0x13d761 = _0x43eb39['resultTran' + 'sform']['x'], _0x2132f6 = _0x43eb39['resultTran' + 'sform']['y'], _0x460ee6 = _0x43eb39['transform']['scX'], _0x28a741 = _0x43eb39['transform']['scY'], _0x1ae850 = _0x76be16['transform']['scX'], _0xd2b627 = 0x0, _0xc37b00 = 0x0, _0x3495e1 = 0x0;
                    _0x460ee6 < 0x0 ? (_0x460ee6 = -_0x460ee6, _0xd2b627 = 0xb4, _0x3495e1 = -0x1) : (_0xd2b627 = 0x0, _0x3495e1 = 0x1), _0x28a741 < 0x0 && (_0x28a741 = -_0x28a741, _0x3495e1 = -_0x3495e1), _0x1ae850 < 0x0 ? (_0x1ae850 = -_0x1ae850, _0xc37b00 = 0xb4) : _0xc37b00 = 0x0;
                    var _0x5c4669 = _0x76be16['resultTran' + 'sform']['x'], _0x18eae3 = NaN, _0x1cb6db = NaN, _0x3e18e0 = NaN, _0x345e36 = _0x43eb39['resultMatr' + 'ix']['a'], _0x49a494 = _0x43eb39['resultMatr' + 'ix']['c'], _0x3568be = _0x43eb39['resultMatr' + 'ix']['b'], _0x564580 = _0x43eb39['resultMatr' + 'ix']['d'], _0x3a6226 = Math['abs'](_0x460ee6 - _0x28a741) <= 0.0001;
                    _0x3a6226 ? (_0x1cb6db = _0x345e36 * _0x5c4669 + _0x49a494 * (_0x18eae3 = _0x76be16['resultTran' + 'sform']['y']) + _0x43eb39['resultMatr' + 'ix']['tx'], _0x3e18e0 = _0x3568be * _0x5c4669 + _0x564580 * _0x18eae3 + _0x43eb39['resultMatr' + 'ix']['ty']) : (_0x18eae3 = 0x0, _0x1cb6db = _0x345e36 * _0x5c4669 + _0x43eb39['resultMatr' + 'ix']['tx'], _0x3e18e0 = _0x3568be * _0x5c4669 + _0x43eb39['resultMatr' + 'ix']['ty']), this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x4efbbe(), _0x21b72c['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x55161c, _0x3e149e, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x1cb6db, _0x3e18e0, 0xf, '#ff00ff')), _0x43eb39['setRotatio' + 'n'](Math['atan2'](_0x3e18e0 - _0x43eb39['resultMatr' + 'ix']['ty'], _0x1cb6db - _0x43eb39['resultMatr' + 'ix']['tx']));
                    var _0x275c76 = _0x43eb39['parentBone'];
                    _0x345e36 = _0x275c76['resultMatr' + 'ix']['a'], _0x49a494 = _0x275c76['resultMatr' + 'ix']['c'], _0x3568be = _0x275c76['resultMatr' + 'ix']['b'];
                    var _0x4336b1 = 0x1 / (_0x345e36 * (_0x564580 = _0x275c76['resultMatr' + 'ix']['d']) - _0x49a494 * _0x3568be), _0x4dde02 = _0x55161c - _0x275c76['resultMatr' + 'ix']['tx'], _0x384aef = _0x3e149e - _0x275c76['resultMatr' + 'ix']['ty'], _0x19bd8b = (_0x4dde02 * _0x564580 - _0x384aef * _0x49a494) * _0x4336b1 - _0x13d761, _0x202d3b = (_0x384aef * _0x345e36 - _0x4dde02 * _0x3568be) * _0x4336b1 - _0x2132f6, _0x4bed10 = ((_0x4dde02 = _0x1cb6db - _0x275c76['resultMatr' + 'ix']['tx']) * _0x564580 - (_0x384aef = _0x3e18e0 - _0x275c76['resultMatr' + 'ix']['ty']) * _0x49a494) * _0x4336b1 - _0x13d761, _0x1c23c1 = (_0x384aef * _0x345e36 - _0x4dde02 * _0x3568be) * _0x4336b1 - _0x2132f6, _0x12d047 = Math['sqrt'](_0x4bed10 * _0x4bed10 + _0x1c23c1 * _0x1c23c1), _0x339f30 = _0x76be16['length'] * _0x1ae850, _0x1f86bf = NaN, _0x5db63d = NaN;
                    if (_0x3a6226) {
                        var _0x31ecc7 = (_0x19bd8b * _0x19bd8b + _0x202d3b * _0x202d3b - _0x12d047 * _0x12d047 - (_0x339f30 *= _0x460ee6) * _0x339f30) / (0x2 * _0x12d047 * _0x339f30);
                        _0x31ecc7 < -0x1 ? _0x31ecc7 = -0x1 : _0x31ecc7 > 0x1 && (_0x31ecc7 = 0x1), _0x5db63d = Math['acos'](_0x31ecc7) * _0x54d74e, _0x345e36 = _0x12d047 + _0x339f30 * _0x31ecc7, _0x49a494 = _0x339f30 * Math['sin'](_0x5db63d), _0x1f86bf = Math['atan2'](_0x202d3b * _0x345e36 - _0x19bd8b * _0x49a494, _0x19bd8b * _0x345e36 + _0x202d3b * _0x49a494);
                    } else {
                        var _0x4f4f64 = (_0x345e36 = _0x460ee6 * _0x339f30) * _0x345e36, _0x431e90 = (_0x49a494 = _0x28a741 * _0x339f30) * _0x49a494, _0x215086 = _0x19bd8b * _0x19bd8b + _0x202d3b * _0x202d3b, _0xa37737 = Math['atan2'](_0x202d3b, _0x19bd8b), _0x341e61 = -0x2 * _0x431e90 * _0x12d047, _0x557b42 = _0x431e90 - _0x4f4f64;
                        if ((_0x564580 = _0x341e61 * _0x341e61 - 0x4 * _0x557b42 * (_0x3568be = _0x431e90 * _0x12d047 * _0x12d047 + _0x4f4f64 * _0x215086 - _0x4f4f64 * _0x431e90)) > 0x0) {
                            var _0x2cedeb = Math['sqrt'](_0x564580);
                            _0x341e61 < 0x0 && (_0x2cedeb = -_0x2cedeb);
                            var _0x33fe97 = (_0x2cedeb = -(_0x341e61 + _0x2cedeb) / 0x2) / _0x557b42, _0xdb578c = _0x3568be / _0x2cedeb, _0x1221b0 = Math['abs'](_0x33fe97) < Math['abs'](_0xdb578c) ? _0x33fe97 : _0xdb578c;
                            _0x1221b0 * _0x1221b0 <= _0x215086 && (_0x384aef = Math['sqrt'](_0x215086 - _0x1221b0 * _0x1221b0) * _0x54d74e, _0x1f86bf = _0xa37737 - Math['atan2'](_0x384aef, _0x1221b0), _0x5db63d = Math['atan2'](_0x384aef / _0x28a741, (_0x1221b0 - _0x12d047) / _0x460ee6));
                        }
                        var _0x58ca97 = 0x0, _0x1ba3d4 = Number['MAX_VALUE'], _0x4fec47 = 0x0, _0x1df958 = 0x0, _0x453a48 = 0x0, _0x4e5fd2 = 0x0, _0x4b9c96 = 0x0, _0x574c5b = 0x0;
                        (_0x564580 = (_0x4dde02 = _0x12d047 + _0x345e36) * _0x4dde02) > _0x4e5fd2 && (_0x453a48 = 0x0, _0x4e5fd2 = _0x564580, _0x4b9c96 = _0x4dde02), (_0x564580 = (_0x4dde02 = _0x12d047 - _0x345e36) * _0x4dde02) < _0x1ba3d4 && (_0x58ca97 = Math['PI'], _0x1ba3d4 = _0x564580, _0x4fec47 = _0x4dde02);
                        var _0x129a5e = Math['acos'](-_0x345e36 * _0x12d047 / (_0x4f4f64 - _0x431e90));
                        (_0x564580 = (_0x4dde02 = _0x345e36 * Math['cos'](_0x129a5e) + _0x12d047) * _0x4dde02 + (_0x384aef = _0x49a494 * Math['sin'](_0x129a5e)) * _0x384aef) < _0x1ba3d4 && (_0x58ca97 = _0x129a5e, _0x1ba3d4 = _0x564580, _0x4fec47 = _0x4dde02, _0x1df958 = _0x384aef), _0x564580 > _0x4e5fd2 && (_0x453a48 = _0x129a5e, _0x4e5fd2 = _0x564580, _0x4b9c96 = _0x4dde02, _0x574c5b = _0x384aef), _0x215086 <= (_0x1ba3d4 + _0x4e5fd2) / 0x2 ? (_0x1f86bf = _0xa37737 - Math['atan2'](_0x1df958 * _0x54d74e, _0x4fec47), _0x5db63d = _0x58ca97 * _0x54d74e) : (_0x1f86bf = _0xa37737 - Math['atan2'](_0x574c5b * _0x54d74e, _0x4b9c96), _0x5db63d = _0x453a48 * _0x54d74e);
                    }
                    var _0x4735f5 = Math['atan2'](_0x18eae3, _0x5c4669) * _0x3495e1, _0x763bac = _0x43eb39['resultTran' + 'sform']['skX'];
                    (_0x1f86bf = (_0x1f86bf - _0x4735f5) * _0x5435d7['radDeg'] + _0xd2b627 - _0x763bac) > 0xb4 ? _0x1f86bf -= 0x168 : _0x1f86bf < -0xb4 && (_0x1f86bf += 0x168), _0x43eb39['resultTran' + 'sform']['x'] = _0x13d761, _0x43eb39['resultTran' + 'sform']['y'] = _0x2132f6, _0x43eb39['resultTran' + 'sform']['skX'] = _0x43eb39['resultTran' + 'sform']['skY'] = _0x763bac + _0x1f86bf * _0x3592b7, _0x763bac = _0x76be16['resultTran' + 'sform']['skX'], _0x763bac %= 0x168, (_0x5db63d = ((_0x5db63d + _0x4735f5) * _0x5435d7['radDeg'] - 0x0) * _0x3495e1 + _0xc37b00 - _0x763bac) > 0xb4 ? _0x5db63d -= 0x168 : _0x5db63d < -0xb4 && (_0x5db63d += 0x168), _0x76be16['resultTran' + 'sform']['x'] = _0x5c4669, _0x76be16['resultTran' + 'sform']['y'] = _0x18eae3, _0x76be16['resultTran' + 'sform']['skX'] = _0x76be16['resultTran' + 'sform']['skY'] = _0x76be16['resultTran' + 'sform']['skY'] + _0x5db63d * _0x3592b7, _0x43eb39['update']();
                }
            }, _0xc09e9d['_applyIk3'] = function (_0x3d813a, _0x5aed20, _0x4528ac, _0x3c3843, _0x46db7a, _0x56bd13) {
                if (0x0 != _0x56bd13) {
                    var _0x48525e, _0x44b87c, _0x3ba3eb = _0x5aed20['resultMatr' + 'ix']['a'] * _0x5aed20['length'], _0x810acd = _0x5aed20['resultMatr' + 'ix']['b'] * _0x5aed20['length'], _0x501f30 = _0x3ba3eb * _0x3ba3eb + _0x810acd * _0x810acd, _0xc73956 = Math['sqrt'](_0x501f30), _0x4030d0 = _0x3d813a['resultMatr' + 'ix']['tx'], _0x1f1fd7 = _0x3d813a['resultMatr' + 'ix']['ty'], _0x142648 = _0x5aed20['resultMatr' + 'ix']['tx'], _0xa61e74 = _0x5aed20['resultMatr' + 'ix']['ty'], _0x8cc22 = _0x142648 - _0x4030d0, _0x79f8f0 = _0xa61e74 - _0x1f1fd7, _0x109369 = _0x8cc22 * _0x8cc22 + _0x79f8f0 * _0x79f8f0, _0x28d5f5 = Math['sqrt'](_0x109369), _0x16d7d1 = (_0x8cc22 = _0x4528ac - _0x3d813a['resultMatr' + 'ix']['tx']) * _0x8cc22 + (_0x79f8f0 = _0x3c3843 - _0x3d813a['resultMatr' + 'ix']['ty']) * _0x79f8f0, _0x4af8c9 = Math['sqrt'](_0x16d7d1);
                    if (_0xc73956 + _0x28d5f5 <= _0x4af8c9 || _0x4af8c9 + _0xc73956 <= _0x28d5f5 || _0x4af8c9 + _0x28d5f5 <= _0xc73956) {
                        var _0x46a7a1 = NaN;
                        _0x142648 = _0x4030d0 + (_0x46a7a1 = _0xc73956 + _0x28d5f5 <= _0x4af8c9 ? 0x1 : -0x1) * (_0x4528ac - _0x4030d0) * _0x28d5f5 / _0x4af8c9, _0xa61e74 = _0x1f1fd7 + _0x46a7a1 * (_0x3c3843 - _0x1f1fd7) * _0x28d5f5 / _0x4af8c9;
                    } else {
                        var _0x2ec69c = (_0x109369 - _0x501f30 + _0x16d7d1) / (0x2 * _0x16d7d1), _0xca3990 = Math['sqrt'](_0x109369 - _0x2ec69c * _0x2ec69c * _0x16d7d1) / _0x4af8c9, _0x1d7ef3 = _0x4030d0 + _0x8cc22 * _0x2ec69c, _0x7ffcc7 = _0x1f1fd7 + _0x79f8f0 * _0x2ec69c, _0x4690be = -_0x79f8f0 * _0xca3990, _0x3b137 = _0x8cc22 * _0xca3990;
                        _0x46db7a > 0x0 ? (_0x142648 = _0x1d7ef3 - _0x4690be, _0xa61e74 = _0x7ffcc7 - _0x3b137) : (_0x142648 = _0x1d7ef3 + _0x4690be, _0xa61e74 = _0x7ffcc7 + _0x3b137);
                    }
                    _0x48525e = _0x142648, _0x44b87c = _0xa61e74, this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x4efbbe(), _0x21b72c['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x4030d0, _0x1f1fd7, 0xf, '#ff00ff'), this['_sp']['graphics']['drawCircle'](_0x4528ac, _0x3c3843, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x48525e, _0x44b87c, 0xf, '#ff00ff'));
                    var _0x14d4d6, _0x3fb499;
                    _0x14d4d6 = Math['atan2'](_0x44b87c - _0x3d813a['resultMatr' + 'ix']['ty'], _0x48525e - _0x3d813a['resultMatr' + 'ix']['tx']), _0x3d813a['setRotatio' + 'n'](_0x14d4d6), (_0x3fb499 = _0x5435d7['_tempMatri' + 'x'])['identity'](), _0x3fb499['rotate'](_0x14d4d6), _0x3fb499['scale'](_0x3d813a['resultMatr' + 'ix']['getScaleX'](), _0x3d813a['resultMatr' + 'ix']['getScaleY']()), _0x3fb499['translate'](_0x3d813a['resultMatr' + 'ix']['tx'], _0x3d813a['resultMatr' + 'ix']['ty']), _0x3fb499['copyTo'](_0x3d813a['resultMatr' + 'ix']), _0x3d813a['updateChil' + 'd']();
                    var _0x30c8d7, _0x13bcb5;
                    _0x30c8d7 = Math['atan2'](_0x3c3843 - _0x44b87c, _0x4528ac - _0x48525e), _0x5aed20['setRotatio' + 'n'](_0x30c8d7), (_0x13bcb5 = _0x5435d7['_tempMatri' + 'x'])['identity'](), _0x13bcb5['rotate'](_0x30c8d7), _0x13bcb5['scale'](_0x5aed20['resultMatr' + 'ix']['getScaleX'](), _0x5aed20['resultMatr' + 'ix']['getScaleY']()), _0x13bcb5['translate'](_0x48525e, _0x44b87c), _0x3fb499['copyTo'](_0x5aed20['resultMatr' + 'ix']), _0x5aed20['updateChil' + 'd']();
                }
            }, _0x3c33f4(_0x5435d7, [
                'radDeg',
                function () {
                    return this['radDeg'] = 0xb4 / Math['PI'];
                },
                'degRad',
                function () {
                    return this['degRad'] = Math['PI'] / 0xb4;
                },
                '_tempMatri' + 'x',
                function () {
                    return this['_tempMatri' + 'x'] = new _0x41fdcd();
                }
            ]), _0x5435d7;
        }(), _0x2b74a9 = function () {
            function _0x2862db() {
                this['name'] = null, this['targetInde' + 'x'] = 0x0, this['rotateMix'] = NaN, this['translateM' + 'ix'] = NaN, this['scaleMix'] = NaN, this['shearMix'] = NaN, this['offsetRota' + 'tion'] = NaN, this['offsetX'] = NaN, this['offsetY'] = NaN, this['offsetScal' + 'eX'] = NaN, this['offsetScal' + 'eY'] = NaN, this['offsetShea' + 'rY'] = NaN, this['boneIndexs'] = [];
            }
            return _0x1df06c(_0x2862db, 'laya.ani.b' + 'one.TfCons' + 'traintData'), _0x2862db;
        }(), _0xc1af76 = function () {
            function _0x36fd57() {
                this['nodes'] = null, this['name'] = null, this['playTime'] = NaN, this['bone3DMap'] = null, this['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0;
            }
            return _0x1df06c(_0x36fd57, 'laya.ani.A' + 'nimationCo' + 'ntent'), _0x36fd57;
        }(), _0x1289c0 = (function () {
            function _0x38820c() {
            }
            _0x1df06c(_0x38820c, 'laya.ani.A' + 'nimationSt' + 'ate'), _0x38820c['stopped'] = 0x0, _0x38820c['paused'] = 0x1, _0x38820c['playing'] = 0x2;
        }(), function () {
            function _0x2d9130() {
                this['skinName'] = null, this['deformSlot' + 'DataList'] = [];
            }
            return _0x1df06c(_0x2d9130, 'laya.ani.b' + 'one.Deform' + 'AniData'), _0x2d9130;
        }()), _0x2b77f3 = function () {
            function _0x1d07f3() {
                this['name'] = null, this['attachment' + 'Name'] = null, this['type'] = 0x0, this['transform'] = null, this['width'] = NaN, this['height'] = NaN, this['texture'] = null, this['bones'] = null, this['uvs'] = null, this['weights'] = null, this['triangles'] = null, this['vertices'] = null, this['lengths'] = null, this['verLen'] = 0x0;
            }
            _0x1df06c(_0x1d07f3, 'laya.ani.b' + 'one.SkinSl' + 'otDisplayD' + 'ata');
            var _0x9c9509 = _0x1d07f3['prototype'];
            return _0x9c9509['createText' + 'ure'] = function (_0x421cbb) {
                return this['texture'] ? this['texture'] : (this['texture'] = new _0x5bdfad(_0x421cbb['bitmap'], this['uvs']), this['uvs'][0x0] > this['uvs'][0x4] && this['uvs'][0x1] > this['uvs'][0x5] ? (this['texture']['width'] = _0x421cbb['height'], this['texture']['height'] = _0x421cbb['width'], this['texture']['offsetX'] = -_0x421cbb['offsetX'], this['texture']['offsetY'] = -_0x421cbb['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x421cbb['sourceHeig' + 'ht'], this['texture']['sourceHeig' + 'ht'] = _0x421cbb['sourceWidt' + 'h']) : (this['texture']['width'] = _0x421cbb['width'], this['texture']['height'] = _0x421cbb['height'], this['texture']['offsetX'] = -_0x421cbb['offsetX'], this['texture']['offsetY'] = -_0x421cbb['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x421cbb['sourceWidt' + 'h'], this['texture']['sourceHeig' + 'ht'] = _0x421cbb['sourceHeig' + 'ht']), this['texture']);
            }, _0x9c9509['destory'] = function () {
                this['texture'] && this['texture']['destroy']();
            }, _0x1d07f3;
        }(), _0x1aa0d0 = function () {
            function _0x2d74c9() {
                this['boneSlot'] = null, this['slotIndex'] = -0x1, this['attachment'] = null, this['deformData'] = null, this['frameIndex'] = 0x0, this['timeList'] = [], this['vectices'] = [], this['tweenKeyLi' + 'st'] = [];
            }
            _0x1df06c(_0x2d74c9, 'laya.ani.b' + 'one.Deform' + 'SlotDispla' + 'yData');
            var _0x1dbf35 = _0x2d74c9['prototype'];
            return _0x1dbf35['binarySear' + 'ch1'] = function (_0x3a9b1c, _0x43a0a3) {
                var _0x362f67 = 0x0, _0x41559a = _0x3a9b1c['length'] - 0x2;
                if (0x0 == _0x41559a)
                    return 0x1;
                for (var _0x5541b4 = _0x41559a >>> 0x1;;) {
                    if (_0x3a9b1c[Math['floor'](_0x5541b4 + 0x1)] <= _0x43a0a3 ? _0x362f67 = _0x5541b4 + 0x1 : _0x41559a = _0x5541b4, _0x362f67 == _0x41559a)
                        return _0x362f67 + 0x1;
                    _0x5541b4 = _0x362f67 + _0x41559a >>> 0x1;
                }
                return 0x0;
            }, _0x1dbf35['apply'] = function (_0x1c7324, _0x54ba64, _0x156d4a) {
                if (void 0x0 === _0x156d4a && (_0x156d4a = 0x1), _0x1c7324 += 0.05, !(this['timeList']['length'] <= 0x0)) {
                    var _0x3c99d = 0x0;
                    if (!(_0x1c7324 < this['timeList'][0x0])) {
                        var _0x1ae6f1 = this['vectices'][0x0]['length'], _0x3cdbd6 = [], _0x20d9f6 = this['binarySear' + 'ch1'](this['timeList'], _0x1c7324);
                        if (this['frameIndex'] = _0x20d9f6, _0x1c7324 >= this['timeList'][this['timeList']['length'] - 0x1]) {
                            var _0x49fa73 = this['vectices'][this['vectices']['length'] - 0x1];
                            if (_0x156d4a < 0x1) {
                                for (_0x3c99d = 0x0; _0x3c99d < _0x1ae6f1; _0x3c99d++)
                                    _0x3cdbd6[_0x3c99d] += (_0x49fa73[_0x3c99d] - _0x3cdbd6[_0x3c99d]) * _0x156d4a;
                            } else {
                                for (_0x3c99d = 0x0; _0x3c99d < _0x1ae6f1; _0x3c99d++)
                                    _0x3cdbd6[_0x3c99d] = _0x49fa73[_0x3c99d];
                            }
                            this['deformData'] = _0x3cdbd6;
                        } else {
                            this['tweenKeyLi' + 'st'][this['frameIndex']];
                            var _0x256412 = this['vectices'][this['frameIndex'] - 0x1], _0x225dfe = this['vectices'][this['frameIndex']], _0x258722 = this['timeList'][this['frameIndex'] - 0x1], _0x204fa0 = this['timeList'][this['frameIndex']];
                            _0x156d4a = this['tweenKeyLi' + 'st'][_0x20d9f6 - 0x1] ? (_0x1c7324 - _0x258722) / (_0x204fa0 - _0x258722) : 0x0;
                            var _0x463904 = NaN;
                            for (_0x3c99d = 0x0; _0x3c99d < _0x1ae6f1; _0x3c99d++)
                                _0x463904 = _0x256412[_0x3c99d], _0x3cdbd6[_0x3c99d] = _0x463904 + (_0x225dfe[_0x3c99d] - _0x463904) * _0x156d4a;
                            this['deformData'] = _0x3cdbd6;
                        }
                    }
                }
            }, _0x2d74c9;
        }(), _0x3a056e = function () {
            function _0x44c9d7() {
                this['name'] = null, this['parent'] = null, this['attachment' + 'Name'] = null, this['srcDisplay' + 'Index'] = -0x1, this['type'] = 'src', this['templet'] = null, this['currSlotDa' + 'ta'] = null, this['currTextur' + 'e'] = null, this['currDispla' + 'yData'] = null, this['displayInd' + 'ex'] = -0x1, this['originalIn' + 'dex'] = -0x1, this['_diyTextur' + 'e'] = null, this['_parentMat' + 'rix'] = null, this['_resultMat' + 'rix'] = null, this['_replaceDi' + 'c'] = {}, this['_curDiyUV'] = null, this['_curDiyVS'] = null, this['_skinSprit' + 'e'] = null, this['deformData'] = null, this['_mVerticle' + 'Arr'] = null, this['_preGraphi' + 'cVerticle'] = null, this['_preGraphi' + 'cMatrix'] = null;
            }
            _0x1df06c(_0x44c9d7, 'laya.ani.b' + 'one.BoneSl' + 'ot');
            var _0x291a12 = _0x44c9d7['prototype'];
            return _0x291a12['showSlotDa' + 'ta'] = function (_0x36f33d, _0xfd67e9) {
                void 0x0 === _0xfd67e9 && (_0xfd67e9 = !0x0), this['currSlotDa' + 'ta'] = _0x36f33d, _0xfd67e9 && (this['displayInd' + 'ex'] = this['srcDisplay' + 'Index']), this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
            }, _0x291a12['showDispla' + 'yByName'] = function (_0x3534be) {
                this['currSlotDa' + 'ta'] && this['showDispla' + 'yByIndex'](this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x3534be));
            }, _0x291a12['replaceDis' + 'playByName'] = function (_0x45c9b1, _0x3f9313) {
                if (this['currSlotDa' + 'ta']) {
                    var _0x2fb7a8;
                    _0x2fb7a8 = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x45c9b1);
                    var _0x22fda4;
                    _0x22fda4 = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x3f9313), this['replaceDis' + 'playByInde' + 'x'](_0x2fb7a8, _0x22fda4);
                }
            }, _0x291a12['replaceDis' + 'playByInde' + 'x'] = function (_0x51f96d, _0x4ad8bd) {
                this['currSlotDa' + 'ta'] && (this['_replaceDi' + 'c'][_0x51f96d] = _0x4ad8bd, this['originalIn' + 'dex'] == _0x51f96d && this['showDispla' + 'yByIndex'](_0x51f96d));
            }, _0x291a12['showDispla' + 'yByIndex'] = function (_0x342747) {
                if (this['originalIn' + 'dex'] = _0x342747, null != this['_replaceDi' + 'c'][_0x342747] && (_0x342747 = this['_replaceDi' + 'c'][_0x342747]), this['currSlotDa' + 'ta'] && _0x342747 > -0x1 && _0x342747 < this['currSlotDa' + 'ta']['displayArr']['length']) {
                    if (this['displayInd' + 'ex'] = _0x342747, this['currDispla' + 'yData'] = this['currSlotDa' + 'ta']['displayArr'][_0x342747], this['currDispla' + 'yData']) {
                        var _0x2cabb1 = this['currDispla' + 'yData']['name'];
                        this['currTextur' + 'e'] = this['templet']['getTexture'](_0x2cabb1), this['currTextur' + 'e'] && 0x0 == this['currDispla' + 'yData']['type'] && this['currDispla' + 'yData']['uvs'] && (this['currTextur' + 'e'] = this['currDispla' + 'yData']['createText' + 'ure'](this['currTextur' + 'e']));
                    }
                } else
                    this['displayInd' + 'ex'] = -0x1, this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
            }, _0x291a12['replaceSki' + 'n'] = function (_0x27fe32) {
                this['_diyTextur' + 'e'] = _0x27fe32, this['_curDiyUV'] && (this['_curDiyUV']['length'] = 0x0), this['currDispla' + 'yData'] && this['_diyTextur' + 'e'] == this['currDispla' + 'yData']['texture'] && (this['_diyTextur' + 'e'] = null);
            }, _0x291a12['setParentM' + 'atrix'] = function (_0x819942) {
                this['_parentMat' + 'rix'] = _0x819942;
            }, _0x291a12['getSaveVer' + 'ticle'] = function (_0x1e0cbb) {
                return _0x44c9d7['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cVerticle'] && _0x44c9d7['isSameArr'](_0x1e0cbb, this['_preGraphi' + 'cVerticle']) ? _0x1e0cbb = this['_preGraphi' + 'cVerticle'] : (_0x1e0cbb = _0x26b1dd['copyArray']([], _0x1e0cbb), this['_preGraphi' + 'cVerticle'] = _0x1e0cbb), _0x1e0cbb;
            }, _0x291a12['getSaveMat' + 'rix'] = function (_0x16fe90) {
                if (_0x44c9d7['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cMatrix'] && _0x44c9d7['isSameMatr' + 'ix'](_0x16fe90, this['_preGraphi' + 'cMatrix']))
                    _0x16fe90 = this['_preGraphi' + 'cMatrix'];
                else {
                    var _0x5276b7 = _0x16fe90['clone']();
                    _0x16fe90 = _0x5276b7, this['_preGraphi' + 'cMatrix'] = _0x16fe90;
                }
                return _0x16fe90;
            }, _0x291a12['draw'] = function (_0x1495cd, _0x46a1b9, _0x4732e6, _0x33feb7) {
                if (void 0x0 === _0x4732e6 && (_0x4732e6 = !0x1), void 0x0 === _0x33feb7 && (_0x33feb7 = 0x1), (null != this['_diyTextur' + 'e'] || null != this['currTextur' + 'e']) && null != this['currDispla' + 'yData'] || this['currDispla' + 'yData'] && 0x3 == this['currDispla' + 'yData']['type']) {
                    var _0x17968b, _0x5c1695 = this['currTextur' + 'e'];
                    switch (this['_diyTextur' + 'e'] && (_0x5c1695 = this['_diyTextur' + 'e']), this['currDispla' + 'yData']['type']) {
                    case 0x0:
                        if (_0x1495cd) {
                            var _0x1e896b = this['getDisplay' + 'Matrix']();
                            if (this['_parentMat' + 'rix']) {
                                var _0x310df9 = !0x1;
                                if (_0x1e896b) {
                                    var _0x3de34a;
                                    if (_0x41fdcd['mul'](_0x1e896b, this['_parentMat' + 'rix'], _0x41fdcd['TEMP']), _0x4732e6 ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x41fdcd()), _0x3de34a = this['_resultMat' + 'rix']) : _0x3de34a = _0x44c9d7['_tempResul' + 'tMatrix'], this['_diyTextur' + 'e'] && this['currDispla' + 'yData']['uvs']) {
                                        var _0x53a524 = _0x44c9d7['_tempMatri' + 'x'];
                                        _0x53a524['identity'](), this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x53a524['d'] = -0x1), this['currDispla' + 'yData']['uvs'][0x0] > this['currDispla' + 'yData']['uvs'][0x4] && this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x310df9 = !0x0, _0x53a524['rotate'](-Math['PI'] / 0x2)), _0x41fdcd['mul'](_0x53a524, _0x41fdcd['TEMP'], _0x3de34a);
                                    } else
                                        _0x41fdcd['TEMP']['copyTo'](_0x3de34a);
                                    _0x4732e6 || (_0x3de34a = this['getSaveMat' + 'rix'](_0x3de34a)), _0x3de34a['_checkTran' + 'sform'](), _0x310df9 ? _0x1495cd['drawTextur' + 'e'](_0x5c1695, -this['currDispla' + 'yData']['height'] / 0x2, -this['currDispla' + 'yData']['width'] / 0x2, this['currDispla' + 'yData']['height'], this['currDispla' + 'yData']['width'], _0x3de34a, _0x33feb7) : _0x1495cd['drawTextur' + 'e'](_0x5c1695, -this['currDispla' + 'yData']['width'] / 0x2, -this['currDispla' + 'yData']['height'] / 0x2, this['currDispla' + 'yData']['width'], this['currDispla' + 'yData']['height'], _0x3de34a, _0x33feb7);
                                }
                            }
                        }
                        break;
                    case 0x1:
                        if (_0x4732e6 ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x44c9d7['createSkin' + 'Mesh']()), _0x17968b = this['_skinSprit' + 'e']) : _0x17968b = _0x44c9d7['createSkin' + 'Mesh'](), null == _0x17968b)
                            return;
                        var _0x71ea54;
                        if (null == this['currDispla' + 'yData']['bones']) {
                            var _0x13e715, _0x11e1b9 = this['currDispla' + 'yData']['weights'];
                            this['deformData'] && (_0x11e1b9 = this['deformData']), this['_diyTextur' + 'e'] ? (this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x4675d7['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x4675d7['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x13e715 = this['_curDiyUV']) : _0x13e715 = this['currDispla' + 'yData']['uvs'], this['_mVerticle' + 'Arr'] = _0x11e1b9, this['currDispla' + 'yData']['triangles']['length'], (_0x71ea54 = this['currDispla' + 'yData']['triangles'], this['deformData'] && (_0x4732e6 || (this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']))), _0x17968b['init2'](_0x5c1695, _0x71ea54, this['_mVerticle' + 'Arr'], _0x13e715));
                            var _0x46387b, _0x3b0be9 = this['getDisplay' + 'Matrix']();
                            if (this['_parentMat' + 'rix']) {
                                if (_0x3b0be9)
                                    _0x41fdcd['mul'](_0x3b0be9, this['_parentMat' + 'rix'], _0x41fdcd['TEMP']), _0x4732e6 ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x41fdcd()), _0x46387b = this['_resultMat' + 'rix']) : _0x46387b = _0x44c9d7['_tempResul' + 'tMatrix'], _0x41fdcd['TEMP']['copyTo'](_0x46387b), _0x4732e6 || (_0x46387b = this['getSaveMat' + 'rix'](_0x46387b)), _0x17968b['transform'] = _0x46387b;
                            }
                        } else
                            this['skinMesh'](_0x46a1b9, _0x17968b);
                        _0x1495cd['drawSkin'](_0x17968b, _0x33feb7);
                        break;
                    case 0x2:
                        if (_0x4732e6 ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x44c9d7['createSkin' + 'Mesh']()), _0x17968b = this['_skinSprit' + 'e']) : _0x17968b = _0x44c9d7['createSkin' + 'Mesh'](), null == _0x17968b)
                            return;
                        this['skinMesh'](_0x46a1b9, _0x17968b), _0x1495cd['drawSkin'](_0x17968b, _0x33feb7);
                    }
                }
            }, _0x291a12['skinMesh'] = function (_0x18ccff, _0x3722ba) {
                var _0x335566, _0x7d3921 = this['currTextur' + 'e'], _0x21f786 = this['currDispla' + 'yData']['bones'];
                this['_diyTextur' + 'e'] ? (_0x7d3921 = this['_diyTextur' + 'e'], this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x4675d7['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x4675d7['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x335566 = this['_curDiyUV']) : _0x335566 = this['currDispla' + 'yData']['uvs'];
                var _0x582573, _0x47f1b2, _0x329ce3, _0x206c2c = this['currDispla' + 'yData']['weights'], _0x160724 = this['currDispla' + 'yData']['triangles'], _0x5d65ea = 0x0, _0x34b362 = 0x0, _0x188900 = 0x0, _0x5f3225 = NaN, _0x49ed7b = NaN, _0x24faab = 0x0, _0x1f449c = 0x0, _0x23237d = 0x0, _0x57a765 = 0x0;
                if (_0x44c9d7['_tempVerti' + 'cleArr']['length'] = 0x0, _0x329ce3 = _0x44c9d7['_tempVerti' + 'cleArr'], this['deformData'] && this['deformData']['length'] > 0x0) {
                    var _0x2544f1 = 0x0;
                    for (_0x23237d = 0x0, _0x57a765 = _0x21f786['length']; _0x23237d < _0x57a765;) {
                        for (_0x188900 = _0x21f786[_0x23237d++] + _0x23237d, _0x5d65ea = 0x0, _0x34b362 = 0x0; _0x23237d < _0x188900; _0x23237d++)
                            _0x47f1b2 = _0x18ccff[_0x21f786[_0x23237d]], _0x5f3225 = _0x206c2c[_0x24faab] + this['deformData'][_0x2544f1++], _0x49ed7b = _0x206c2c[_0x24faab + 0x1] + this['deformData'][_0x2544f1++], _0x1f449c = _0x206c2c[_0x24faab + 0x2], _0x5d65ea += (_0x5f3225 * _0x47f1b2['a'] + _0x49ed7b * _0x47f1b2['c'] + _0x47f1b2['tx']) * _0x1f449c, _0x34b362 += (_0x5f3225 * _0x47f1b2['b'] + _0x49ed7b * _0x47f1b2['d'] + _0x47f1b2['ty']) * _0x1f449c, _0x24faab += 0x3;
                        _0x329ce3['push'](_0x5d65ea, _0x34b362);
                    }
                } else
                    for (_0x23237d = 0x0, _0x57a765 = _0x21f786['length']; _0x23237d < _0x57a765;) {
                        for (_0x188900 = _0x21f786[_0x23237d++] + _0x23237d, _0x5d65ea = 0x0, _0x34b362 = 0x0; _0x23237d < _0x188900; _0x23237d++)
                            _0x47f1b2 = _0x18ccff[_0x21f786[_0x23237d]], _0x5f3225 = _0x206c2c[_0x24faab], _0x49ed7b = _0x206c2c[_0x24faab + 0x1], _0x1f449c = _0x206c2c[_0x24faab + 0x2], _0x5d65ea += (_0x5f3225 * _0x47f1b2['a'] + _0x49ed7b * _0x47f1b2['c'] + _0x47f1b2['tx']) * _0x1f449c, _0x34b362 += (_0x5f3225 * _0x47f1b2['b'] + _0x49ed7b * _0x47f1b2['d'] + _0x47f1b2['ty']) * _0x1f449c, _0x24faab += 0x3;
                        _0x329ce3['push'](_0x5d65ea, _0x34b362);
                    }
                this['_mVerticle' + 'Arr'] = _0x329ce3, _0x582573 = _0x160724, this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']), _0x3722ba['init2'](_0x7d3921, _0x582573, this['_mVerticle' + 'Arr'], _0x335566);
            }, _0x291a12['drawBonePo' + 'int'] = function (_0x2d621f) {
                _0x2d621f && this['_parentMat' + 'rix'] && _0x2d621f['drawCircle'](this['_parentMat' + 'rix']['tx'], this['_parentMat' + 'rix']['ty'], 0x5, '#ff0000');
            }, _0x291a12['getDisplay' + 'Matrix'] = function () {
                return this['currDispla' + 'yData'] ? this['currDispla' + 'yData']['transform']['getMatrix']() : null;
            }, _0x291a12['getMatrix'] = function () {
                return this['_resultMat' + 'rix'];
            }, _0x291a12['copy'] = function () {
                var _0x5cc7c1 = new _0x44c9d7();
                return _0x5cc7c1['type'] = 'copy', _0x5cc7c1['name'] = this['name'], _0x5cc7c1['attachment' + 'Name'] = this['attachment' + 'Name'], _0x5cc7c1['srcDisplay' + 'Index'] = this['srcDisplay' + 'Index'], _0x5cc7c1['parent'] = this['parent'], _0x5cc7c1['displayInd' + 'ex'] = this['displayInd' + 'ex'], _0x5cc7c1['templet'] = this['templet'], _0x5cc7c1['currSlotDa' + 'ta'] = this['currSlotDa' + 'ta'], _0x5cc7c1['currTextur' + 'e'] = this['currTextur' + 'e'], _0x5cc7c1['currDispla' + 'yData'] = this['currDispla' + 'yData'], _0x5cc7c1;
            }, _0x44c9d7['createSkin' + 'Mesh'] = function () {
                return new _0x372715();
            }, _0x44c9d7['isSameArr'] = function (_0x5d6ea6, _0x5670d4) {
                if (_0x5d6ea6['length'] != _0x5670d4['length'])
                    return !0x1;
                var _0x5246da, _0x52289b = 0x0;
                for (_0x5246da = _0x5d6ea6['length'], _0x52289b = 0x0; _0x52289b < _0x5246da; _0x52289b++)
                    if (_0x5d6ea6[_0x52289b] != _0x5670d4[_0x52289b])
                        return !0x1;
                return !0x0;
            }, _0x44c9d7['isSameMatr' + 'ix'] = function (_0x5b7dcf, _0x66b412) {
                return _0x5b7dcf['a'] == _0x66b412['a'] && _0x5b7dcf['b'] == _0x66b412['b'] && _0x5b7dcf['c'] == _0x66b412['c'] && _0x5b7dcf['d'] == _0x66b412['d'] && Math['abs'](_0x5b7dcf['tx'] - _0x66b412['tx']) < 0.00001 && Math['abs'](_0x5b7dcf['ty'] - _0x66b412['ty']) < 0.00001;
            }, _0x44c9d7['useSameMat' + 'rixAndVert' + 'icle'] = !0x0, _0x44c9d7['_tempVerti' + 'cleArr'] = [], _0x3c33f4(_0x44c9d7, [
                '_tempMatri' + 'x',
                function () {
                    return this['_tempMatri' + 'x'] = new _0x41fdcd();
                },
                '_tempResul' + 'tMatrix',
                function () {
                    return this['_tempResul' + 'tMatrix'] = new _0x41fdcd();
                }
            ]), _0x44c9d7;
        }(), _0x41b091 = function () {
            function _0xae8027(_0x4234ca, _0x51c3a7) {
                this['target'] = null, this['data'] = null, this['bones'] = null, this['position'] = NaN, this['spacing'] = NaN, this['rotateMix'] = NaN, this['translateM' + 'ix'] = NaN, this['_debugKey'] = !0x1, this['_spaces'] = null, this['_segments'] = [], this['_curves'] = [], this['data'] = _0x4234ca, this['position'] = _0x4234ca['position'], this['spacing'] = _0x4234ca['spacing'], this['rotateMix'] = _0x4234ca['rotateMix'], this['translateM' + 'ix'] = _0x4234ca['translateM' + 'ix'], this['bones'] = [];
                for (var _0x20da34 = this['data']['bones'], _0x5ebd43 = 0x0, _0x356c43 = _0x20da34['length']; _0x5ebd43 < _0x356c43; _0x5ebd43++)
                    this['bones']['push'](_0x51c3a7[_0x20da34[_0x5ebd43]]);
            }
            _0x1df06c(_0xae8027, 'laya.ani.b' + 'one.PathCo' + 'nstraint');
            var _0x284987 = _0xae8027['prototype'];
            return _0x284987['apply'] = function (_0x26c801, _0x516e2d) {
                if (this['target']) {
                    var _0x3ce4ec = this['translateM' + 'ix'], _0x482c0c = this['translateM' + 'ix'], _0x2caf4d = _0x482c0c > 0x0, _0x25d413 = this['data']['spacingMod' + 'e'], _0x23120e = 'length' == _0x25d413, _0x220280 = this['data']['rotateMode'], _0x36540f = 'tangent' == _0x220280, _0x2721db = 'chainScale' == _0x220280, _0x107ca8 = [], _0x413c63 = this['bones']['length'], _0x197e5b = _0x36540f ? _0x413c63 : _0x413c63 + 0x1, _0x3c17e0 = [];
                    this['_spaces'] = _0x3c17e0, _0x3c17e0[0x0] = this['position'];
                    var _0x282d8a = this['spacing'];
                    if (_0x2721db || _0x23120e)
                        for (var _0x37ace2 = 0x0, _0x3b9eb2 = _0x197e5b - 0x1; _0x37ace2 < _0x3b9eb2;) {
                            var _0xe6fc1f = this['bones'][_0x37ace2], _0x271d60 = _0xe6fc1f['length'], _0x275f5f = _0x271d60 * _0xe6fc1f['resultMatr' + 'ix']['a'], _0x391eda = _0x271d60 * _0xe6fc1f['resultMatr' + 'ix']['b'];
                            _0x271d60 = Math['sqrt'](_0x275f5f * _0x275f5f + _0x391eda * _0x391eda), _0x2721db && (_0x107ca8[_0x37ace2] = _0x271d60), _0x3c17e0[++_0x37ace2] = _0x23120e ? Math['max'](0x0, _0x271d60 + _0x282d8a) : _0x282d8a;
                        }
                    else {
                        for (_0x37ace2 = 0x1; _0x37ace2 < _0x197e5b; _0x37ace2++)
                            _0x3c17e0[_0x37ace2] = _0x282d8a;
                    }
                    var _0x17e510 = this['computeWor' + 'ldPosition' + 's'](this['target'], _0x26c801, _0x516e2d, _0x197e5b, _0x36540f, 'percent' == this['data']['positionMo' + 'de'], 'percent' == _0x25d413);
                    if (this['_debugKey']) {
                        for (_0x37ace2 = 0x0; _0x37ace2 < _0x17e510['length']; _0x37ace2++)
                            _0x516e2d['drawCircle'](_0x17e510[_0x37ace2++], _0x17e510[_0x37ace2++], 0x5, '#00ff00');
                        var _0x5a69c0 = [];
                        for (_0x37ace2 = 0x0; _0x37ace2 < _0x17e510['length']; _0x37ace2++)
                            _0x5a69c0['push'](_0x17e510[_0x37ace2++], _0x17e510[_0x37ace2++]);
                        _0x516e2d['drawLines'](0x0, 0x0, _0x5a69c0, '#ff0000');
                    }
                    var _0x404776 = _0x17e510[0x0], _0x538087 = _0x17e510[0x1], _0x4bd8b0 = this['data']['offsetRota' + 'tion'], _0x138bcb = 'chain' == _0x220280 && 0x0 == _0x4bd8b0, _0xcb1446 = NaN;
                    for (_0x37ace2 = 0x0, _0xcb1446 = 0x3; _0x37ace2 < _0x413c63; _0x37ace2++, _0xcb1446 += 0x3) {
                        (_0xe6fc1f = this['bones'][_0x37ace2])['resultMatr' + 'ix']['tx'] += (_0x404776 - _0xe6fc1f['resultMatr' + 'ix']['tx']) * _0x3ce4ec, _0xe6fc1f['resultMatr' + 'ix']['ty'] += (_0x538087 - _0xe6fc1f['resultMatr' + 'ix']['ty']) * _0x3ce4ec;
                        var _0xf2f826 = (_0x275f5f = _0x17e510[_0xcb1446]) - _0x404776, _0x1e2238 = (_0x391eda = _0x17e510[_0xcb1446 + 0x1]) - _0x538087;
                        if (_0x2721db && 0x0 != (_0x271d60 = _0x107ca8[_0x37ace2])) {
                            var _0x1e3752 = (Math['sqrt'](_0xf2f826 * _0xf2f826 + _0x1e2238 * _0x1e2238) / _0x271d60 - 0x1) * _0x482c0c + 0x1;
                            _0xe6fc1f['resultMatr' + 'ix']['a'] *= _0x1e3752, _0xe6fc1f['resultMatr' + 'ix']['c'] *= _0x1e3752;
                        }
                        if (_0x404776 = _0x275f5f, _0x538087 = _0x391eda, _0x2caf4d) {
                            var _0x547f63 = _0xe6fc1f['resultMatr' + 'ix']['a'], _0x4a186b = _0xe6fc1f['resultMatr' + 'ix']['c'], _0x127d24 = _0xe6fc1f['resultMatr' + 'ix']['b'], _0x13cb3e = _0xe6fc1f['resultMatr' + 'ix']['d'], _0x202957 = NaN, _0x1344b7 = NaN, _0x36dc36 = NaN;
                            _0x202957 = _0x36540f ? _0x17e510[_0xcb1446 - 0x1] : 0x0 == _0x3c17e0[_0x37ace2 + 0x1] ? _0x17e510[_0xcb1446 + 0x2] : Math['atan2'](_0x1e2238, _0xf2f826), _0x202957 -= Math['atan2'](_0x127d24, _0x547f63) - _0x4bd8b0 / 0xb4 * Math['PI'], _0x138bcb && (_0x1344b7 = Math['cos'](_0x202957), _0x36dc36 = Math['sin'](_0x202957), _0x404776 += ((_0x271d60 = _0xe6fc1f['length']) * (_0x1344b7 * _0x547f63 - _0x36dc36 * _0x127d24) - _0xf2f826) * _0x482c0c, _0x538087 += (_0x271d60 * (_0x36dc36 * _0x547f63 + _0x1344b7 * _0x127d24) - _0x1e2238) * _0x482c0c), _0x202957 > Math['PI'] ? _0x202957 -= 0x2 * Math['PI'] : _0x202957 < -Math['PI'] && (_0x202957 += 0x2 * Math['PI']), _0x202957 *= _0x482c0c, _0x1344b7 = Math['cos'](_0x202957), _0x36dc36 = Math['sin'](_0x202957), _0xe6fc1f['resultMatr' + 'ix']['a'] = _0x1344b7 * _0x547f63 - _0x36dc36 * _0x127d24, _0xe6fc1f['resultMatr' + 'ix']['c'] = _0x1344b7 * _0x4a186b - _0x36dc36 * _0x13cb3e, _0xe6fc1f['resultMatr' + 'ix']['b'] = _0x36dc36 * _0x547f63 + _0x1344b7 * _0x127d24, _0xe6fc1f['resultMatr' + 'ix']['d'] = _0x36dc36 * _0x4a186b + _0x1344b7 * _0x13cb3e;
                        }
                    }
                }
            }, _0x284987['computeWor' + 'ldVertices' + '2'] = function (_0x5d8d5d, _0x9aa1c8, _0x260416, _0x1c4185, _0x293abd, _0x57e727) {
                var _0x669c2, _0x209360, _0x1427c6 = _0x5d8d5d['currDispla' + 'yData']['bones'], _0x853502 = _0x5d8d5d['currDispla' + 'yData']['weights'], _0x1fd769 = _0x5d8d5d['currDispla' + 'yData']['triangles'], _0x41ae25 = 0x0, _0x44eee6 = 0x0, _0x111927 = 0x0, _0x3ae3e6 = 0x0, _0x222999 = 0x0, _0x17097f = 0x0, _0x238a80 = 0x0, _0xdbd2a8 = 0x0, _0xc488a8 = 0x0, _0x549ee1 = 0x0, _0x465b7d = 0x0;
                if (null != _0x1427c6) {
                    for (_0x41ae25 = 0x0; _0x41ae25 < _0x260416; _0x41ae25 += 0x2)
                        _0x44eee6 += (_0x3ae3e6 = _0x1427c6[_0x44eee6]) + 0x1, _0x111927 += _0x3ae3e6;
                    var _0x4ca432 = _0x9aa1c8;
                    for (_0x222999 = _0x57e727, _0x17097f = 0x3 * _0x111927; _0x222999 < _0x1c4185; _0x222999 += 0x2) {
                        for (_0x238a80 = 0x0, _0xdbd2a8 = 0x0, _0x3ae3e6 = _0x1427c6[_0x44eee6++], _0x3ae3e6 += _0x44eee6; _0x44eee6 < _0x3ae3e6; _0x44eee6++, _0x17097f += 0x3) {
                            _0x669c2 = _0x4ca432[_0x1427c6[_0x44eee6]]['resultMatr' + 'ix'], _0xc488a8 = _0x853502[_0x17097f], _0x549ee1 = _0x853502[_0x17097f + 0x1];
                            var _0x3c129b = _0x853502[_0x17097f + 0x2];
                            _0x238a80 += (_0xc488a8 * _0x669c2['a'] + _0x549ee1 * _0x669c2['c'] + _0x669c2['tx']) * _0x3c129b, _0xdbd2a8 += (_0xc488a8 * _0x669c2['b'] + _0x549ee1 * _0x669c2['d'] + _0x669c2['ty']) * _0x3c129b;
                        }
                        _0x293abd[_0x222999] = _0x238a80, _0x293abd[_0x222999 + 0x1] = _0xdbd2a8;
                    }
                } else {
                    var _0xadcd6b, _0x2e6953;
                    if (_0x1fd769 || (_0x1fd769 = _0x853502), _0x5d8d5d['deformData'] && (_0x1fd769 = _0x5d8d5d['deformData']), _0xadcd6b = _0x5d8d5d['parent'], _0x9aa1c8) {
                        for (_0x465b7d = _0x9aa1c8['length'], _0x41ae25 = 0x0; _0x41ae25 < _0x465b7d; _0x41ae25++)
                            if (_0x9aa1c8[_0x41ae25]['name'] == _0xadcd6b) {
                                _0x209360 = _0x9aa1c8[_0x41ae25];
                                break;
                            }
                    }
                    _0x209360 && (_0x2e6953 = _0x209360['resultMatr' + 'ix']), _0x2e6953 || (_0x2e6953 = _0xae8027['_tempMt']);
                    var _0x56d138 = _0x2e6953['tx'], _0x513d16 = _0x2e6953['ty'], _0x5e9931 = _0x2e6953['a'], _0x371bf5 = _0x2e6953['b'], _0x53d109 = _0x2e6953['c'], _0x54c028 = _0x2e6953['d'];
                    for (_0x209360 && (_0x54c028 *= _0x209360['d']), _0x44eee6 = _0x260416, _0x222999 = _0x57e727; _0x222999 < _0x1c4185; _0x44eee6 += 0x2, _0x222999 += 0x2)
                        _0xc488a8 = _0x1fd769[_0x44eee6], _0x549ee1 = _0x1fd769[_0x44eee6 + 0x1], _0x293abd[_0x222999] = _0xc488a8 * _0x5e9931 + _0x549ee1 * _0x371bf5 + _0x56d138, _0x293abd[_0x222999 + 0x1] = -(_0xc488a8 * _0x53d109 + _0x549ee1 * _0x54c028 + _0x513d16);
                }
            }, _0x284987['computeWor' + 'ldPosition' + 's'] = function (_0xa31dc5, _0x3dd290, _0x23b1d2, _0x1c9ebc, _0x5e0857, _0x54b69c, _0x2a42cf) {
                _0xa31dc5['currDispla' + 'yData']['bones'], _0xa31dc5['currDispla' + 'yData']['weights'], _0xa31dc5['currDispla' + 'yData']['triangles'];
                var _0xb231da = [], _0x54ea89 = 0x0, _0xef7072 = _0xa31dc5['currDispla' + 'yData']['verLen'], _0x137fa0 = this['position'], _0x9458ff = this['_spaces'], _0x5849e7 = [], _0xbd94f0 = [], _0x2a265f = _0xef7072 / 0x6, _0x32b63f = -0x1, _0x466651 = NaN, _0x133f63 = 0x0, _0x251a0d = 0x0, _0x52bbbe = NaN, _0x37e84e = NaN, _0x4889d7 = NaN, _0x19ca4b = NaN;
                if (_0x2a265f--, _0xef7072 -= 0x4, this['computeWor' + 'ldVertices' + '2'](_0xa31dc5, _0x3dd290, 0x2, _0xef7072, _0xb231da, 0x0), this['_debugKey']) {
                    for (_0x54ea89 = 0x0; _0x54ea89 < _0xb231da['length'];)
                        _0x23b1d2['drawCircle'](_0xb231da[_0x54ea89++], _0xb231da[_0x54ea89++], 0xa, '#ff0000');
                }
                _0x5849e7 = _0xb231da, this['_curves']['length'] = _0x2a265f;
                var _0x9cd35 = this['_curves'];
                _0x466651 = 0x0;
                var _0x127b73 = _0x5849e7[0x0], _0xbdaded = _0x5849e7[0x1], _0x120185 = 0x0, _0x352ae2 = 0x0, _0x188871 = 0x0, _0x2032a = 0x0, _0x20e86d = 0x0, _0x33d99d = 0x0, _0x101f4e = NaN, _0xdc49bc = NaN, _0x4d7907 = NaN, _0x5b233c = NaN, _0x431253 = NaN, _0xe8be7e = NaN, _0x389820 = NaN, _0x3ec5b3 = NaN, _0x33e820 = 0x0;
                for (_0x54ea89 = 0x0, _0x33e820 = 0x2; _0x54ea89 < _0x2a265f; _0x54ea89++, _0x33e820 += 0x6)
                    _0x120185 = _0x5849e7[_0x33e820], _0x352ae2 = _0x5849e7[_0x33e820 + 0x1], _0x188871 = _0x5849e7[_0x33e820 + 0x2], _0x2032a = _0x5849e7[_0x33e820 + 0x3], _0x431253 = 0x2 * (_0x101f4e = 0.1875 * (_0x127b73 - 0x2 * _0x120185 + _0x188871)) + (_0x4d7907 = 0.09375 * (0x3 * (_0x120185 - _0x188871) - _0x127b73 + (_0x20e86d = _0x5849e7[_0x33e820 + 0x4]))), _0xe8be7e = 0x2 * (_0xdc49bc = 0.1875 * (_0xbdaded - 0x2 * _0x352ae2 + _0x2032a)) + (_0x5b233c = 0.09375 * (0x3 * (_0x352ae2 - _0x2032a) - _0xbdaded + (_0x33d99d = _0x5849e7[_0x33e820 + 0x5]))), _0x389820 = 0.75 * (_0x120185 - _0x127b73) + _0x101f4e + 0.16666667 * _0x4d7907, _0x3ec5b3 = 0.75 * (_0x352ae2 - _0xbdaded) + _0xdc49bc + 0.16666667 * _0x5b233c, _0x466651 += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x389820 += _0x431253, _0x3ec5b3 += _0xe8be7e, _0x431253 += _0x4d7907, _0xe8be7e += _0x5b233c, _0x466651 += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x389820 += _0x431253, _0x3ec5b3 += _0xe8be7e, _0x466651 += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x389820 += _0x431253 + _0x4d7907, _0x3ec5b3 += _0xe8be7e + _0x5b233c, _0x466651 += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x9cd35[_0x54ea89] = _0x466651, _0x127b73 = _0x20e86d, _0xbdaded = _0x33d99d;
                if (_0x54b69c && (_0x137fa0 *= _0x466651), _0x2a42cf) {
                    for (_0x54ea89 = 0x0; _0x54ea89 < _0x1c9ebc; _0x54ea89++)
                        _0x9458ff[_0x54ea89] *= _0x466651;
                }
                var _0x129283 = this['_segments'], _0x2f809d = 0x0, _0x5b749 = 0x0;
                for (_0x54ea89 = 0x0, _0x133f63 = 0x0, _0x251a0d = 0x0, _0x5b749 = 0x0; _0x54ea89 < _0x1c9ebc; _0x54ea89++, _0x133f63 += 0x3)
                    if ((_0x52bbbe = _0x137fa0 += _0x37e84e = _0x9458ff[_0x54ea89]) < 0x0)
                        this['addBeforeP' + 'osition'](_0x52bbbe, _0x5849e7, 0x0, _0xbd94f0, _0x133f63);
                    else {
                        if (_0x52bbbe > _0x466651)
                            this['addAfterPo' + 'sition'](_0x52bbbe - _0x466651, _0x5849e7, _0xef7072 - 0x4, _0xbd94f0, _0x133f63);
                        else {
                            for (;; _0x251a0d++)
                                if (!(_0x52bbbe > (_0x19ca4b = _0x9cd35[_0x251a0d]))) {
                                    0x0 == _0x251a0d ? _0x52bbbe /= _0x19ca4b : _0x52bbbe = (_0x52bbbe - (_0x4889d7 = _0x9cd35[_0x251a0d - 0x1])) / (_0x19ca4b - _0x4889d7);
                                    break;
                                }
                            if (_0x251a0d != _0x32b63f) {
                                _0x32b63f = _0x251a0d;
                                var _0x4605d9 = 0x6 * _0x251a0d;
                                for (_0x127b73 = _0x5849e7[_0x4605d9], _0xbdaded = _0x5849e7[_0x4605d9 + 0x1], _0x120185 = _0x5849e7[_0x4605d9 + 0x2], _0x352ae2 = _0x5849e7[_0x4605d9 + 0x3], _0x188871 = _0x5849e7[_0x4605d9 + 0x4], _0x2032a = _0x5849e7[_0x4605d9 + 0x5], _0x431253 = 0x2 * (_0x101f4e = 0.03 * (_0x127b73 - 0x2 * _0x120185 + _0x188871)) + (_0x4d7907 = 0.006 * (0x3 * (_0x120185 - _0x188871) - _0x127b73 + (_0x20e86d = _0x5849e7[_0x4605d9 + 0x6]))), _0xe8be7e = 0x2 * (_0xdc49bc = 0.03 * (_0xbdaded - 0x2 * _0x352ae2 + _0x2032a)) + (_0x5b233c = 0.006 * (0x3 * (_0x352ae2 - _0x2032a) - _0xbdaded + (_0x33d99d = _0x5849e7[_0x4605d9 + 0x7]))), _0x389820 = 0.3 * (_0x120185 - _0x127b73) + _0x101f4e + 0.16666667 * _0x4d7907, _0x3ec5b3 = 0.3 * (_0x352ae2 - _0xbdaded) + _0xdc49bc + 0.16666667 * _0x5b233c, _0x2f809d = Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x129283[0x0] = _0x2f809d, _0x4605d9 = 0x1; _0x4605d9 < 0x8; _0x4605d9++)
                                    _0x389820 += _0x431253, _0x3ec5b3 += _0xe8be7e, _0x431253 += _0x4d7907, _0xe8be7e += _0x5b233c, _0x2f809d += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x129283[_0x4605d9] = _0x2f809d;
                                _0x389820 += _0x431253, _0x3ec5b3 += _0xe8be7e, _0x2f809d += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x129283[0x8] = _0x2f809d, _0x389820 += _0x431253 + _0x4d7907, _0x3ec5b3 += _0xe8be7e + _0x5b233c, _0x2f809d += Math['sqrt'](_0x389820 * _0x389820 + _0x3ec5b3 * _0x3ec5b3), _0x129283[0x9] = _0x2f809d, _0x5b749 = 0x0;
                            }
                            for (_0x52bbbe *= _0x2f809d;; _0x5b749++)
                                if (!(_0x52bbbe > (_0x19ca4b = _0x129283[_0x5b749]))) {
                                    0x0 == _0x5b749 ? _0x52bbbe /= _0x19ca4b : _0x52bbbe = _0x5b749 + (_0x52bbbe - (_0x4889d7 = _0x129283[_0x5b749 - 0x1])) / (_0x19ca4b - _0x4889d7);
                                    break;
                                }
                            this['addCurvePo' + 'sition'](0.1 * _0x52bbbe, _0x127b73, _0xbdaded, _0x120185, _0x352ae2, _0x188871, _0x2032a, _0x20e86d, _0x33d99d, _0xbd94f0, _0x133f63, _0x5e0857 || _0x54ea89 > 0x0 && 0x0 == _0x37e84e);
                        }
                    }
                return _0xbd94f0;
            }, _0x284987['addBeforeP' + 'osition'] = function (_0x173961, _0xd28682, _0x48a6f, _0xcd266, _0x36b748) {
                var _0x1f5a49 = _0xd28682[_0x48a6f], _0x590ea9 = _0xd28682[_0x48a6f + 0x1], _0x496f08 = _0xd28682[_0x48a6f + 0x2] - _0x1f5a49, _0x5d5469 = _0xd28682[_0x48a6f + 0x3] - _0x590ea9, _0x54043c = Math['atan2'](_0x5d5469, _0x496f08);
                _0xcd266[_0x36b748] = _0x1f5a49 + _0x173961 * Math['cos'](_0x54043c), _0xcd266[_0x36b748 + 0x1] = _0x590ea9 + _0x173961 * Math['sin'](_0x54043c), _0xcd266[_0x36b748 + 0x2] = _0x54043c;
            }, _0x284987['addAfterPo' + 'sition'] = function (_0x56b8c6, _0x5722e1, _0x276986, _0xd1844c, _0x8e71eb) {
                var _0x1c4ed1 = _0x5722e1[_0x276986 + 0x2], _0x4a6a67 = _0x5722e1[_0x276986 + 0x3], _0x1e7e5b = _0x1c4ed1 - _0x5722e1[_0x276986], _0x210470 = _0x4a6a67 - _0x5722e1[_0x276986 + 0x1], _0x5aec8a = Math['atan2'](_0x210470, _0x1e7e5b);
                _0xd1844c[_0x8e71eb] = _0x1c4ed1 + _0x56b8c6 * Math['cos'](_0x5aec8a), _0xd1844c[_0x8e71eb + 0x1] = _0x4a6a67 + _0x56b8c6 * Math['sin'](_0x5aec8a), _0xd1844c[_0x8e71eb + 0x2] = _0x5aec8a;
            }, _0x284987['addCurvePo' + 'sition'] = function (_0x51d727, _0x456aca, _0x482101, _0x5140cb, _0x28d61f, _0x150272, _0x2d7379, _0x5288ec, _0x7a2ba9, _0x48b04c, _0x4b89af, _0x31027f) {
                0x0 == _0x51d727 && (_0x51d727 = 0.0001);
                var _0x3acd92 = _0x51d727 * _0x51d727, _0x240176 = _0x3acd92 * _0x51d727, _0x31cb1b = 0x1 - _0x51d727, _0x275861 = _0x31cb1b * _0x31cb1b, _0x5653d2 = _0x275861 * _0x31cb1b, _0x3c0e07 = _0x31cb1b * _0x51d727, _0x262372 = 0x3 * _0x3c0e07, _0x5b73e6 = _0x31cb1b * _0x262372, _0x35a41f = _0x262372 * _0x51d727, _0x279d46 = _0x456aca * _0x5653d2 + _0x5140cb * _0x5b73e6 + _0x150272 * _0x35a41f + _0x5288ec * _0x240176, _0x404a2b = _0x482101 * _0x5653d2 + _0x28d61f * _0x5b73e6 + _0x2d7379 * _0x35a41f + _0x7a2ba9 * _0x240176;
                _0x48b04c[_0x4b89af] = _0x279d46, _0x48b04c[_0x4b89af + 0x1] = _0x404a2b, _0x48b04c[_0x4b89af + 0x2] = _0x31027f ? Math['atan2'](_0x404a2b - (_0x482101 * _0x275861 + _0x28d61f * _0x3c0e07 * 0x2 + _0x2d7379 * _0x3acd92), _0x279d46 - (_0x456aca * _0x275861 + _0x5140cb * _0x3c0e07 * 0x2 + _0x150272 * _0x3acd92)) : 0x0;
            }, _0xae8027['NONE'] = -0x1, _0xae8027['BEFORE'] = -0x2, _0xae8027['AFTER'] = -0x3, _0x3c33f4(_0xae8027, [
                '_tempMt',
                function () {
                    return this['_tempMt'] = new _0x41fdcd();
                }
            ]), _0xae8027;
        }(), _0x26082d = function () {
            function _0x59a838() {
                this['skX'] = 0x0, this['skY'] = 0x0, this['scX'] = 0x1, this['scY'] = 0x1, this['x'] = 0x0, this['y'] = 0x0, this['skewX'] = 0x0, this['skewY'] = 0x0, this['mMatrix'] = null;
            }
            _0x1df06c(_0x59a838, 'laya.ani.b' + 'one.Transf' + 'orm');
            var _0x5b2349 = _0x59a838['prototype'];
            return _0x5b2349['initData'] = function (_0x7f9b1f) {
                null != _0x7f9b1f['x'] && (this['x'] = _0x7f9b1f['x']), null != _0x7f9b1f['y'] && (this['y'] = _0x7f9b1f['y']), null != _0x7f9b1f['skX'] && (this['skX'] = _0x7f9b1f['skX']), null != _0x7f9b1f['skY'] && (this['skY'] = _0x7f9b1f['skY']), null != _0x7f9b1f['scX'] && (this['scX'] = _0x7f9b1f['scX']), null != _0x7f9b1f['scY'] && (this['scY'] = _0x7f9b1f['scY']);
            }, _0x5b2349['getMatrix'] = function () {
                var _0x3ba189;
                return (_0x3ba189 = this['mMatrix'] ? this['mMatrix'] : this['mMatrix'] = new _0x41fdcd())['identity'](), _0x3ba189['scale'](this['scX'], this['scY']), (this['skewX'] || this['skewY']) && this['skew'](_0x3ba189, this['skewX'] * Math['PI'] / 0xb4, this['skewY'] * Math['PI'] / 0xb4), _0x3ba189['rotate'](this['skX'] * Math['PI'] / 0xb4), _0x3ba189['translate'](this['x'], this['y']), _0x3ba189;
            }, _0x5b2349['skew'] = function (_0x21058e, _0x4d6d21, _0x35101a) {
                var _0x2a2185 = Math['sin'](_0x35101a), _0x4d3471 = Math['cos'](_0x35101a), _0x152244 = Math['sin'](_0x4d6d21), _0x51db6b = Math['cos'](_0x4d6d21);
                return _0x21058e['setTo'](_0x21058e['a'] * _0x51db6b - _0x21058e['b'] * _0x2a2185, _0x21058e['a'] * _0x152244 + _0x21058e['b'] * _0x4d3471, _0x21058e['c'] * _0x51db6b - _0x21058e['d'] * _0x2a2185, _0x21058e['c'] * _0x152244 + _0x21058e['d'] * _0x4d3471, _0x21058e['tx'] * _0x51db6b - _0x21058e['ty'] * _0x2a2185, _0x21058e['tx'] * _0x152244 + _0x21058e['ty'] * _0x4d3471), _0x21058e;
            }, _0x59a838;
        }(), _0x880ee0 = function () {
            function _0x5ddad8() {
                this['time'] = NaN, this['drawOrder'] = [];
            }
            return _0x1df06c(_0x5ddad8, 'laya.ani.b' + 'one.DrawOr' + 'derData'), _0x5ddad8;
        }(), _0x13721a = function () {
            function _0x3f311b() {
            }
            return _0x1df06c(_0x3f311b, 'laya.ani.m' + 'ath.Bezier' + 'Lerp'), _0x3f311b['getBezierR' + 'ate'] = function (_0x37e0c1, _0x571aed, _0x88e45e, _0x531dd4, _0x2ca049) {
                var _0x5dd5fa = _0x3f311b['_getBezier' + 'ParamKey'](_0x571aed, _0x88e45e, _0x531dd4, _0x2ca049), _0x2d637d = 0x64 * _0x5dd5fa + _0x37e0c1;
                if (_0x3f311b['_bezierRes' + 'ultCache'][_0x2d637d])
                    return _0x3f311b['_bezierRes' + 'ultCache'][_0x2d637d];
                var _0x366c46, _0x9f2696 = _0x3f311b['_getBezier' + 'Points'](_0x571aed, _0x88e45e, _0x531dd4, _0x2ca049, _0x5dd5fa), _0x4acfdb = 0x0;
                for (_0x366c46 = _0x9f2696['length'], _0x4acfdb = 0x0; _0x4acfdb < _0x366c46; _0x4acfdb += 0x2)
                    if (_0x37e0c1 <= _0x9f2696[_0x4acfdb])
                        return _0x3f311b['_bezierRes' + 'ultCache'][_0x2d637d] = _0x9f2696[_0x4acfdb + 0x1], _0x9f2696[_0x4acfdb + 0x1];
                return _0x3f311b['_bezierRes' + 'ultCache'][_0x2d637d] = 0x1, 0x1;
            }, _0x3f311b['_getBezier' + 'ParamKey'] = function (_0x421363, _0x1e4ea1, _0x17a81a, _0x45918e) {
                return 0x64 * (0x64 * (0x64 * (0x64 * _0x421363 + _0x1e4ea1) + _0x17a81a) + _0x45918e);
            }, _0x3f311b['_getBezier' + 'Points'] = function (_0x3b0831, _0x40bf91, _0x5d49dc, _0x22232b, _0x199fbc) {
                return _0x3f311b['_bezierPoi' + 'ntsCache'][_0x199fbc] ? _0x3f311b['_bezierPoi' + 'ntsCache'][_0x199fbc] : (_0x3ae9b2 = [
                    0x0,
                    0x0,
                    _0x3b0831,
                    _0x40bf91,
                    _0x5d49dc,
                    _0x22232b,
                    0x1,
                    0x1
                ], _0x15c327 = new _0x503312()['getBezierP' + 'oints'](_0x3ae9b2, 0x64, 0x3), _0x3f311b['_bezierPoi' + 'ntsCache'][_0x199fbc] = _0x15c327, _0x15c327);
                var _0x3ae9b2, _0x15c327;
            }, _0x3f311b['_bezierRes' + 'ultCache'] = {}, _0x3f311b['_bezierPoi' + 'ntsCache'] = {}, _0x3f311b;
        }(), _0x5874e2 = function () {
            function _0x53f265() {
                this['name'] = null, this['root'] = null, this['parentBone'] = null, this['length'] = 0xa, this['transform'] = null, this['inheritSca' + 'le'] = !0x0, this['inheritRot' + 'ation'] = !0x0, this['rotation'] = NaN, this['resultRota' + 'tion'] = NaN, this['d'] = -0x1, this['_tempMatri' + 'x'] = null, this['_sprite'] = null, this['resultTran' + 'sform'] = new _0x26082d(), this['resultMatr' + 'ix'] = new _0x41fdcd(), this['_children'] = [];
            }
            _0x1df06c(_0x53f265, 'laya.ani.b' + 'one.Bone');
            var _0x3ac836 = _0x53f265['prototype'];
            return _0x3ac836['setTempMat' + 'rix'] = function (_0x31b327) {
                this['_tempMatri' + 'x'] = _0x31b327;
                var _0x1b9824, _0x124134 = 0x0;
                for (_0x124134 = 0x0, _0x1b9824 = this['_children']['length']; _0x124134 < _0x1b9824; _0x124134++)
                    this['_children'][_0x124134]['setTempMat' + 'rix'](this['_tempMatri' + 'x']);
            }, _0x3ac836['update'] = function (_0x490e7b) {
                var _0x28e7b8;
                if (this['rotation'] = this['transform']['skX'], _0x490e7b)
                    _0x28e7b8 = this['resultTran' + 'sform']['getMatrix'](), _0x41fdcd['mul'](_0x28e7b8, _0x490e7b, this['resultMatr' + 'ix']), this['resultRota' + 'tion'] = this['rotation'];
                else {
                    if (this['resultRota' + 'tion'] = this['rotation'] + this['parentBone']['resultRota' + 'tion'], this['parentBone']) {
                        if (this['inheritRot' + 'ation'] && this['inheritSca' + 'le'])
                            _0x28e7b8 = this['resultTran' + 'sform']['getMatrix'](), _0x41fdcd['mul'](_0x28e7b8, this['parentBone']['resultMatr' + 'ix'], this['resultMatr' + 'ix']);
                        else {
                            var _0x107dc3 = this['parentBone'], _0x25e61b = NaN, _0x3460cd = NaN, _0x353c87 = NaN, _0x18124d = this['parentBone']['resultMatr' + 'ix'];
                            _0x28e7b8 = this['resultTran' + 'sform']['getMatrix']();
                            var _0x2001ce = _0x18124d['a'] * _0x28e7b8['tx'] + _0x18124d['c'] * _0x28e7b8['ty'] + _0x18124d['tx'], _0xda4cd6 = _0x18124d['b'] * _0x28e7b8['tx'] + _0x18124d['d'] * _0x28e7b8['ty'] + _0x18124d['ty'], _0x5c55bf = new _0x41fdcd();
                            this['inheritRot' + 'ation'] ? (_0x25e61b = Math['atan2'](_0x107dc3['resultMatr' + 'ix']['b'], _0x107dc3['resultMatr' + 'ix']['a']), _0x3460cd = Math['cos'](_0x25e61b), _0x353c87 = Math['sin'](_0x25e61b), _0x5c55bf['setTo'](_0x3460cd, _0x353c87, -_0x353c87, _0x3460cd, 0x0, 0x0), _0x41fdcd['mul'](this['_tempMatri' + 'x'], _0x5c55bf, _0x41fdcd['TEMP']), _0x41fdcd['TEMP']['copyTo'](_0x5c55bf), _0x28e7b8 = this['resultTran' + 'sform']['getMatrix'](), _0x41fdcd['mul'](_0x28e7b8, _0x5c55bf, this['resultMatr' + 'ix']), this['resultTran' + 'sform']['scX'] * this['resultTran' + 'sform']['scY'] < 0x0 && this['resultMatr' + 'ix']['rotate'](0.5 * Math['PI']), this['resultMatr' + 'ix']['tx'] = _0x2001ce, this['resultMatr' + 'ix']['ty'] = _0xda4cd6) : (this['inheritSca' + 'le'], _0x28e7b8 = this['resultTran' + 'sform']['getMatrix'](), _0x41fdcd['TEMP']['identity'](), _0x41fdcd['TEMP']['d'] = this['d'], _0x41fdcd['mul'](_0x28e7b8, _0x41fdcd['TEMP'], this['resultMatr' + 'ix']), this['resultMatr' + 'ix']['tx'] = _0x2001ce, this['resultMatr' + 'ix']['ty'] = _0xda4cd6);
                        }
                    } else
                        (_0x28e7b8 = this['resultTran' + 'sform']['getMatrix']())['copyTo'](this['resultMatr' + 'ix']);
                }
                var _0x1ab2fb, _0x4008f3 = 0x0;
                for (_0x4008f3 = 0x0, _0x1ab2fb = this['_children']['length']; _0x4008f3 < _0x1ab2fb; _0x4008f3++)
                    this['_children'][_0x4008f3]['update']();
            }, _0x3ac836['updateChil' + 'd'] = function () {
                var _0x4395bb, _0x54bfc2 = 0x0;
                for (_0x54bfc2 = 0x0, _0x4395bb = this['_children']['length']; _0x54bfc2 < _0x4395bb; _0x54bfc2++)
                    this['_children'][_0x54bfc2]['update']();
            }, _0x3ac836['setRotatio' + 'n'] = function (_0x308b98) {
                this['_sprite'] && (this['_sprite']['rotation'] = 0xb4 * _0x308b98 / Math['PI']);
            }, _0x3ac836['updateDraw'] = function (_0x39b552, _0x45c090) {
                _0x53f265['ShowBones'] && !_0x53f265['ShowBones'][this['name']] || (this['_sprite'] ? (this['_sprite']['x'] = _0x39b552 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x45c090 + this['resultMatr' + 'ix']['ty']) : (this['_sprite'] = new _0x4efbbe(), this['_sprite']['graphics']['drawCircle'](0x0, 0x0, 0x5, '#ff0000'), this['_sprite']['graphics']['drawLine'](0x0, 0x0, this['length'], 0x0, '#00ff00'), this['_sprite']['graphics']['fillText'](this['name'], 0x0, 0x0, '20px\x20Arial', '#00ff00', 'center'), _0x21b72c['stage']['addChild'](this['_sprite']), this['_sprite']['x'] = _0x39b552 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x45c090 + this['resultMatr' + 'ix']['ty']));
                var _0x1bb925, _0x182a12 = 0x0;
                for (_0x182a12 = 0x0, _0x1bb925 = this['_children']['length']; _0x182a12 < _0x1bb925; _0x182a12++)
                    this['_children'][_0x182a12]['updateDraw'](_0x39b552, _0x45c090);
            }, _0x3ac836['addChild'] = function (_0x5f3238) {
                this['_children']['push'](_0x5f3238), _0x5f3238['parentBone'] = this;
            }, _0x3ac836['findBone'] = function (_0x2689e1) {
                if (this['name'] == _0x2689e1)
                    return this;
                var _0x1eeb0c, _0x5acdaa, _0x18ec99 = 0x0;
                for (_0x18ec99 = 0x0, _0x1eeb0c = this['_children']['length']; _0x18ec99 < _0x1eeb0c; _0x18ec99++)
                    if (_0x5acdaa = this['_children'][_0x18ec99]['findBone'](_0x2689e1))
                        return _0x5acdaa;
                return null;
            }, _0x3ac836['localToWor' + 'ld'] = function (_0x4962fa) {
                var _0x6f35b4 = _0x4962fa[0x0], _0x4e8e90 = _0x4962fa[0x1];
                _0x4962fa[0x0] = _0x6f35b4 * this['resultMatr' + 'ix']['a'] + _0x4e8e90 * this['resultMatr' + 'ix']['c'] + this['resultMatr' + 'ix']['tx'], _0x4962fa[0x1] = _0x6f35b4 * this['resultMatr' + 'ix']['b'] + _0x4e8e90 * this['resultMatr' + 'ix']['d'] + this['resultMatr' + 'ix']['ty'];
            }, _0x53f265['ShowBones'] = {}, _0x53f265;
        }(), _0x9cf4d2 = function () {
            function _0x16b038() {
                this['name'] = null, this['intValue'] = 0x0, this['floatValue'] = NaN, this['stringValu' + 'e'] = null, this['audioValue'] = null, this['time'] = NaN;
            }
            return _0x1df06c(_0x16b038, 'laya.ani.b' + 'one.EventD' + 'ata'), _0x16b038;
        }(), _0x3fb2e7 = function () {
            function _0xc530a3() {
                this['name'] = null, this['targetBone' + 'Name'] = null, this['bendDirect' + 'ion'] = 0x1, this['mix'] = 0x1, this['isSpine'] = !0x0, this['targetBone' + 'Index'] = -0x1, this['boneNames'] = [], this['boneIndexs'] = [];
            }
            return _0x1df06c(_0xc530a3, 'laya.ani.b' + 'one.IkCons' + 'traintData'), _0xc530a3;
        }(), _0x48bed6 = function (_0x5a7565) {
            function _0x23ff92() {
                this['_destroyed'] = !0x1, this['_templet'] = null, this['_currentTi' + 'me'] = NaN, this['_currentFr' + 'ameTime'] = NaN, this['_playStart'] = NaN, this['_playEnd'] = NaN, this['_playDurat' + 'ion'] = NaN, this['_overallDu' + 'ration'] = NaN, this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, this['_elapsedPl' + 'aybackTime'] = NaN, this['_startUpda' + 'teLoopCoun' + 't'] = NaN, this['_currentAn' + 'imationCli' + 'pIndex'] = 0x0, this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_paused'] = !0x1, this['_cacheFram' + 'eRate'] = 0x0, this['_cacheFram' + 'eRateInter' + 'val'] = NaN, this['_cachePlay' + 'Rate'] = NaN, this['isCache'] = !0x0, this['playbackRa' + 'te'] = 0x1, this['returnToZe' + 'roStopped'] = !0x1, _0x23ff92['__super']['call'](this), this['_destroyed'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['_currentKe' + 'yframeInde' + 'x'] = -0x1, this['_currentTi' + 'me'] = 0x0, this['_overallDu' + 'ration'] = Number['MAX_VALUE'], this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, this['_elapsedPl' + 'aybackTime'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = -0x1, this['_cachePlay' + 'Rate'] = 0x1, this['cacheFrame' + 'Rate'] = 0x3c, this['returnToZe' + 'roStopped'] = !0x1;
            }
            _0x1df06c(_0x23ff92, 'laya.ani.A' + 'nimationPl' + 'ayer', _0x15e869);
            var _0x112b4b = _0x23ff92['prototype'];
            return _0x21b72c['imps'](_0x112b4b, { 'laya.resource.IDestroy': !0x0 }), _0x112b4b['_onTemplet' + 'LoadedComp' + 'uteFullKey' + 'frameIndic' + 'es'] = function (_0x226347, _0x51903c, _0x359be6) {
                this['_templet'] === _0x359be6 && this['_cachePlay' + 'Rate'] === _0x226347 && this['_cacheFram' + 'eRate'] === _0x51903c && this['_computeFu' + 'llKeyframe' + 'Indices']();
            }, _0x112b4b['_computeFu' + 'llKeyframe' + 'Indices'] = function () {
            }, _0x112b4b['_onAnimati' + 'onTempletL' + 'oaded'] = function () {
                this['destroyed'] || this['_calculate' + 'PlayDurati' + 'on']();
            }, _0x112b4b['_calculate' + 'PlayDurati' + 'on'] = function () {
                if (0x0 !== this['state']) {
                    var _0x35abfd = this['_templet']['getAniDura' + 'tion'](this['_currentAn' + 'imationCli' + 'pIndex']);
                    0x0 === this['_playEnd'] && (this['_playEnd'] = _0x35abfd), this['_playEnd'] > _0x35abfd && (this['_playEnd'] = _0x35abfd), this['_playDurat' + 'ion'] = this['_playEnd'] - this['_playStart'];
                }
            }, _0x112b4b['_setPlayPa' + 'rams'] = function (_0x11073d, _0x3ffe0e) {
                this['_currentTi' + 'me'] = _0x11073d, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0x3ffe0e + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x3ffe0e;
            }, _0x112b4b['_setPlayPa' + 'ramsWhenSt' + 'op'] = function (_0x46e512, _0x442a42) {
                this['_currentTi' + 'me'] = _0x46e512, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](_0x46e512 / _0x442a42 + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x442a42, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1;
            }, _0x112b4b['_update'] = function (_0x205b6f) {
                if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && !this['_paused'] && this['_templet']) {
                    var _0x117403 = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'], _0x437159 = 0x0;
                    this['_startUpda' + 'teLoopCoun' + 't'] !== _0xe39151['loopCount'] && (_0x437159 = _0x205b6f * this['playbackRa' + 'te'], this['_elapsedPl' + 'aybackTime'] += _0x437159);
                    var _0x5b6020 = this['playDurati' + 'on'];
                    if (0x0 !== this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= this['_overallDu' + 'ration'] || 0x0 === this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= _0x5b6020)
                        return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x5b6020, _0x117403), void this['event']('stopped');
                    if (_0x437159 += this['_currentTi' + 'me'], _0x5b6020 > 0x0) {
                        if (_0x437159 >= _0x5b6020)
                            return this['_stopWhenC' + 'ircleFinis' + 'h'] ? (this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x5b6020, _0x117403), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event']('stopped')) : (_0x437159 %= _0x5b6020, this['_setPlayPa' + 'rams'](_0x437159, _0x117403), void this['event']('complete'));
                        this['_setPlayPa' + 'rams'](_0x437159, _0x117403);
                    } else {
                        if (this['_stopWhenC' + 'ircleFinis' + 'h'])
                            return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x5b6020, _0x117403), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event']('stopped');
                        this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['event']('complete');
                    }
                }
            }, _0x112b4b['_destroy'] = function () {
                this['offAll'](), this['_templet'] = null, this['_destroyed'] = !0x0;
            }, _0x112b4b['play'] = function (_0x26c510, _0x398027, _0x1d48e1, _0x3994f8, _0x191326) {
                if (void 0x0 === _0x26c510 && (_0x26c510 = 0x0), void 0x0 === _0x398027 && (_0x398027 = 0x1), void 0x0 === _0x1d48e1 && (_0x1d48e1 = 0x7fffffff), void 0x0 === _0x3994f8 && (_0x3994f8 = 0x0), void 0x0 === _0x191326 && (_0x191326 = 0x0), !this['_templet'])
                    throw new Error('AnimationP' + 'layer:temp' + 'let\x20must\x20n' + 'ot\x20be\x20null' + ',maybe\x20you' + '\x20need\x20to\x20s' + 'et\x20url.');
                if (_0x1d48e1 < 0x0 || _0x3994f8 < 0x0 || _0x191326 < 0x0)
                    throw new Error('AnimationP' + 'layer:over' + 'allDuratio' + 'n,playStar' + 't\x20and\x20play' + 'End\x20must\x20l' + 'arge\x20than\x20' + 'zero.');
                if (0x0 !== _0x191326 && _0x3994f8 > _0x191326)
                    throw new Error('AnimationP' + 'layer:star' + 't\x20must\x20les' + 's\x20than\x20end' + '.');
                this['_currentTi' + 'me'] = 0x0, this['_currentFr' + 'ameTime'] = 0x0, this['_elapsedPl' + 'aybackTime'] = 0x0, this['playbackRa' + 'te'] = _0x398027, this['_overallDu' + 'ration'] = _0x1d48e1, this['_playStart'] = _0x3994f8, this['_playEnd'] = _0x191326, this['_paused'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = _0x26c510, this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = _0xe39151['loopCount'], this['event']('played'), this['_calculate' + 'PlayDurati' + 'on'](), this['_update'](0x0);
            }, _0x112b4b['playByFram' + 'e'] = function (_0x3e47da, _0x48aedb, _0x4f1e79, _0x109081, _0x5d14b5, _0x16f067) {
                void 0x0 === _0x3e47da && (_0x3e47da = 0x0), void 0x0 === _0x48aedb && (_0x48aedb = 0x1), void 0x0 === _0x4f1e79 && (_0x4f1e79 = 0x7fffffff), void 0x0 === _0x109081 && (_0x109081 = 0x0), void 0x0 === _0x5d14b5 && (_0x5d14b5 = 0x0), void 0x0 === _0x16f067 && (_0x16f067 = 0x1e);
                var _0x2673f4 = 0x3e8 / _0x16f067;
                this['play'](_0x3e47da, _0x48aedb, _0x4f1e79, _0x109081 * _0x2673f4, _0x5d14b5 * _0x2673f4);
            }, _0x112b4b['stop'] = function (_0x2d68b5) {
                void 0x0 === _0x2d68b5 && (_0x2d68b5 = !0x0), _0x2d68b5 ? (this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['event']('stopped')) : this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x0;
            }, _0x112b4b['destroy'] = function () {
            }, _0x17c821(0x0, _0x112b4b, 'playEnd', function () {
                return this['_playEnd'];
            }), _0x17c821(0x0, _0x112b4b, 'templet', function () {
                return this['_templet'];
            }, function (_0x23819b) {
                0x0 !== this['state'] && this['stop'](!0x0), this['_templet'] !== _0x23819b && (this['_templet'] = _0x23819b, this['_computeFu' + 'llKeyframe' + 'Indices']());
            }), _0x17c821(0x0, _0x112b4b, 'playStart', function () {
                return this['_playStart'];
            }), _0x17c821(0x0, _0x112b4b, 'playDurati' + 'on', function () {
                return this['_playDurat' + 'ion'];
            }), _0x17c821(0x0, _0x112b4b, 'state', function () {
                return -0x1 === this['_currentAn' + 'imationCli' + 'pIndex'] ? 0x0 : this['_paused'] ? 0x1 : 0x2;
            }), _0x17c821(0x0, _0x112b4b, 'currentKey' + 'frameIndex', function () {
                return this['_currentKe' + 'yframeInde' + 'x'];
            }), _0x17c821(0x0, _0x112b4b, 'overallDur' + 'ation', function () {
                return this['_overallDu' + 'ration'];
            }), _0x17c821(0x0, _0x112b4b, 'currentFra' + 'meTime', function () {
                return this['_currentFr' + 'ameTime'];
            }), _0x17c821(0x0, _0x112b4b, 'currentAni' + 'mationClip' + 'Index', function () {
                return this['_currentAn' + 'imationCli' + 'pIndex'];
            }), _0x17c821(0x0, _0x112b4b, 'currentPla' + 'yTime', function () {
                return this['_currentTi' + 'me'] + this['_playStart'];
            }), _0x17c821(0x0, _0x112b4b, 'cachePlayR' + 'ate', function () {
                return this['_cachePlay' + 'Rate'];
            }, function (_0x5e1792) {
                this['_cachePlay' + 'Rate'] !== _0x5e1792 && (this['_cachePlay' + 'Rate'] = _0x5e1792, this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
            }), _0x17c821(0x0, _0x112b4b, 'cacheFrame' + 'Rate', function () {
                return this['_cacheFram' + 'eRate'];
            }, function (_0x140aea) {
                this['_cacheFram' + 'eRate'] !== _0x140aea && (this['_cacheFram' + 'eRate'] = _0x140aea, this['_cacheFram' + 'eRateInter' + 'val'] = 0x3e8 / this['_cacheFram' + 'eRate'], this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
            }), _0x17c821(0x0, _0x112b4b, 'currentTim' + 'e', null, function (_0x401a94) {
                if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && this['_templet']) {
                    if (_0x401a94 < this['_playStart'] || _0x401a94 > this['_playEnd'])
                        throw new Error('AnimationP' + 'layer:valu' + 'e\x20must\x20lar' + 'ge\x20than\x20pl' + 'ayStartTim' + 'e,small\x20th' + 'an\x20playEnd' + 'Time.');
                    this['_startUpda' + 'teLoopCoun' + 't'] = _0xe39151['loopCount'];
                    var _0x38d896 = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'];
                    this['_currentTi' + 'me'] = _0x401a94, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0x38d896), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x38d896;
                }
            }), _0x17c821(0x0, _0x112b4b, 'paused', function () {
                return this['_paused'];
            }, function (_0xa8f23a) {
                this['_paused'] = _0xa8f23a, _0xa8f23a && this['event']('paused');
            }), _0x17c821(0x0, _0x112b4b, 'cacheFrame' + 'RateInterv' + 'al', function () {
                return this['_cacheFram' + 'eRateInter' + 'val'];
            }), _0x17c821(0x0, _0x112b4b, 'destroyed', function () {
                return this['_destroyed'];
            }), _0x23ff92;
        }(), _0x2a138b = function (_0x15ea7a) {
            function _0x4b9ba3() {
                _0x4b9ba3['__super']['call'](this);
            }
            return _0x1df06c(_0x4b9ba3, 'laya.ani.G' + 'raphicsAni', _0x16fee2), _0x4b9ba3['prototype']['drawSkin'] = function (_0x302a69, _0x10ae12) {
                this['drawTriang' + 'les'](_0x302a69['texture'], 0x0, 0x0, _0x302a69['vertices'], _0x302a69['uvs'], _0x302a69['indexes'], _0x302a69['transform'] || _0x41fdcd['EMPTY'], _0x10ae12);
            }, _0x4b9ba3['create'] = function () {
                return _0x4b9ba3['_caches']['pop']() || new _0x4b9ba3();
            }, _0x4b9ba3['recycle'] = function (_0x1f31a3) {
                _0x1f31a3['clear'](), _0x4b9ba3['_caches']['push'](_0x1f31a3);
            }, _0x4b9ba3['_caches'] = [], _0x4b9ba3;
        }(), _0x372715 = function (_0x383d48) {
            function _0x20dd77() {
                this['transform'] = null, _0x20dd77['__super']['call'](this);
            }
            return _0x1df06c(_0x20dd77, 'laya.ani.b' + 'one.canvas' + 'mesh.SkinM' + 'eshForGrap' + 'hic', _0x554a59), _0x20dd77['prototype']['init2'] = function (_0x131b4b, _0x151ae5, _0x495db1, _0x51631d) {
                this['transform'] && (this['transform'] = null);
                var _0x53b94e = _0x151ae5 || [
                    0x0,
                    0x1,
                    0x3,
                    0x3,
                    0x1,
                    0x2
                ];
                this['texture'] = _0x131b4b, this['indexes'] = new Uint16Array(_0x53b94e), this['vertices'] = new Float32Array(_0x495db1), this['uvs'] = new Float32Array(_0x51631d);
            }, _0x20dd77;
        }(), _0x21cb65 = function (_0x237b98) {
            function _0x99b0c7() {
                this['_aniMap'] = {}, this['unfixedLas' + 'tAniIndex'] = -0x1, this['_fullFrame' + 's'] = null, this['_boneCurKe' + 'yFrm'] = [], _0x99b0c7['__super']['call'](this), this['_anis'] = new Array();
            }
            _0x1df06c(_0x99b0c7, 'laya.ani.A' + 'nimationTe' + 'mplet', _0x49315b);
            var _0x4d60f0 = _0x99b0c7['prototype'];
            return _0x4d60f0['parse'] = function (_0x734135) {
                var _0x4e899f = new _0x2a0ff4(_0x734135);
                this['_aniVersio' + 'n'] = _0x4e899f['readUTFStr' + 'ing'](), _0x40c413['parse'](this, _0x4e899f);
            }, _0x4d60f0['_calculate' + 'KeyFrame'] = function (_0x225242, _0x4e5674, _0x1ad7a2) {
                var _0x1837a9 = _0x225242['keyFrame'];
                _0x1837a9[_0x4e5674] = _0x1837a9[0x0];
                for (var _0x2deacd = 0x0; _0x2deacd < _0x4e5674; _0x2deacd++)
                    for (var _0x299cb5 = _0x1837a9[_0x2deacd], _0x27b13f = 0x0; _0x27b13f < _0x1ad7a2; _0x27b13f++)
                        _0x299cb5['dData'][_0x27b13f] = 0x0 === _0x299cb5['duration'] ? 0x0 : (_0x1837a9[_0x2deacd + 0x1]['data'][_0x27b13f] - _0x299cb5['data'][_0x27b13f]) / _0x299cb5['duration'], _0x299cb5['nextData'][_0x27b13f] = _0x1837a9[_0x2deacd + 0x1]['data'][_0x27b13f];
                _0x1837a9['length']--;
            }, _0x4d60f0['_onAsynLoa' + 'ded'] = function (_0x4b8a44, _0x4902fb) {
                var _0x4dc3b3 = new _0x2a0ff4(_0x4b8a44);
                switch (this['_aniVersio' + 'n'] = _0x4dc3b3['readUTFStr' + 'ing'](), this['_aniVersio' + 'n']) {
                case 'LAYAANIMAT' + 'ION:02':
                    _0x3337d7['parse'](this, _0x4dc3b3);
                    break;
                default:
                    _0x40c413['parse'](this, _0x4dc3b3);
                }
            }, _0x4d60f0['getAnimati' + 'onCount'] = function () {
                return this['_anis']['length'];
            }, _0x4d60f0['getAnimati' + 'on'] = function (_0x23a566) {
                return this['_anis'][_0x23a566];
            }, _0x4d60f0['getAniDura' + 'tion'] = function (_0x4c7562) {
                return this['_anis'][_0x4c7562]['playTime'];
            }, _0x4d60f0['getNodes'] = function (_0x2f8285) {
                return this['_anis'][_0x2f8285]['nodes'];
            }, _0x4d60f0['getNodeInd' + 'exWithName'] = function (_0x27cfb7, _0x4bb9d8) {
                return this['_anis'][_0x27cfb7]['bone3DMap'][_0x4bb9d8];
            }, _0x4d60f0['getNodeCou' + 'nt'] = function (_0x30350a) {
                return this['_anis'][_0x30350a]['nodes']['length'];
            }, _0x4d60f0['getTotalke' + 'yframesLen' + 'gth'] = function (_0x303617) {
                return this['_anis'][_0x303617]['totalKeyfr' + 'ameDatasLe' + 'ngth'];
            }, _0x4d60f0['getPublicE' + 'xtData'] = function () {
                return this['_publicExt' + 'Data'];
            }, _0x4d60f0['getAnimati' + 'onDataWith' + 'Cache'] = function (_0x21c004, _0x5367b9, _0x37daf5, _0x332ebd) {
                var _0x5f429e = _0x5367b9[_0x37daf5];
                if (_0x5f429e) {
                    var _0x1dc488 = _0x5f429e[_0x21c004];
                    return _0x1dc488 ? _0x1dc488[_0x332ebd] : null;
                }
                return null;
            }, _0x4d60f0['setAnimati' + 'onDataWith' + 'Cache'] = function (_0x42d3fd, _0x1671ae, _0x3250ff, _0x4f561c, _0x106111) {
                var _0x45f7d1 = _0x1671ae[_0x3250ff] || (_0x1671ae[_0x3250ff] = {});
                (_0x45f7d1[_0x42d3fd] || (_0x45f7d1[_0x42d3fd] = []))[_0x4f561c] = _0x106111;
            }, _0x4d60f0['getNodeKey' + 'Frame'] = function (_0x1397be, _0x35c662, _0x5ccaf6) {
                var _0x1bbb01 = this['_boneCurKe' + 'yFrm'][_0x35c662], _0x3b2c5c = _0x1397be['length'];
                (null == _0x1bbb01 || _0x1bbb01 >= _0x3b2c5c) && (_0x1bbb01 = this['_boneCurKe' + 'yFrm'][_0x35c662] = 0x0);
                var _0x2106d1 = _0x1397be[_0x1bbb01], _0x4606cc = _0x5ccaf6 - _0x2106d1['startTime'];
                if (0x0 == _0x4606cc || _0x4606cc > 0x0 && _0x2106d1['duration'] > _0x4606cc)
                    return _0x1bbb01;
                var _0x3c4fdb = 0x0;
                if (_0x4606cc > 0x0) {
                    for (_0x5ccaf6 += 0.01, _0x3c4fdb = _0x1bbb01 + 0x1; _0x3c4fdb < _0x3b2c5c; _0x3c4fdb++)
                        if ((_0x2106d1 = _0x1397be[_0x3c4fdb])['startTime'] <= _0x5ccaf6 && _0x2106d1['startTime'] + _0x2106d1['duration'] > _0x5ccaf6)
                            return this['_boneCurKe' + 'yFrm'][_0x35c662] = _0x3c4fdb, _0x3c4fdb;
                    return _0x3b2c5c - 0x1;
                }
                for (_0x3c4fdb = 0x0; _0x3c4fdb < _0x1bbb01; _0x3c4fdb++)
                    if ((_0x2106d1 = _0x1397be[_0x3c4fdb])['startTime'] <= _0x5ccaf6 && _0x2106d1['startTime'] + _0x2106d1['duration'] > _0x5ccaf6)
                        return this['_boneCurKe' + 'yFrm'][_0x35c662] = _0x3c4fdb, _0x3c4fdb;
                return _0x1bbb01;
            }, _0x4d60f0['getOrigina' + 'lData'] = function (_0x575267, _0x4c3e8c, _0x16e279, _0xfbd425, _0x29b707) {
                var _0x247db2 = this['_anis'][_0x575267]['nodes'], _0x593a06 = this['_boneCurKe' + 'yFrm'];
                _0x593a06['length'] < _0x247db2['length'] && (_0x593a06['length'] = _0x247db2['length']);
                for (var _0x5c9abc = 0x0, _0x45ae46 = 0x0, _0x2c96e2 = _0x247db2['length'], _0x295555 = 0x0; _0x45ae46 < _0x2c96e2; _0x45ae46++) {
                    var _0x49caa6, _0x3b4394 = _0x247db2[_0x45ae46], _0x208bc5 = _0x3b4394['keyFrame'];
                    _0x49caa6 = _0x208bc5[this['getNodeKey' + 'Frame'](_0x208bc5, _0x45ae46, _0x29b707)], _0x3b4394['dataOffset'] = _0x295555;
                    var _0x1eb00f = _0x29b707 - _0x49caa6['startTime'], _0x35f29b = _0x3b4394['lerpType'];
                    if (_0x35f29b)
                        switch (_0x35f29b) {
                        case 0x0:
                        case 0x1:
                            for (_0x5c9abc = 0x0; _0x5c9abc < _0x3b4394['keyframeWi' + 'dth'];)
                                _0x5c9abc += _0x3b4394['interpolat' + 'ionMethod'][_0x5c9abc](_0x3b4394, _0x5c9abc, _0x4c3e8c, _0x295555 + _0x5c9abc, _0x49caa6['data'], _0x1eb00f, _0x49caa6['dData'], _0x49caa6['duration'], _0x49caa6['nextData']);
                            break;
                        case 0x2:
                            var _0x400389 = _0x49caa6['interpolat' + 'ionData'], _0x19c7b0 = _0x400389['length'], _0x46b32a = 0x0;
                            for (_0x5c9abc = 0x0; _0x5c9abc < _0x19c7b0;) {
                                var _0x91c4a1 = _0x400389[_0x5c9abc];
                                switch (_0x91c4a1) {
                                case 0x6:
                                case 0x7:
                                    _0x5c9abc += _0x99b0c7['interpolat' + 'ion'][_0x91c4a1](_0x3b4394, _0x46b32a, _0x4c3e8c, _0x295555 + _0x46b32a, _0x49caa6['data'], _0x1eb00f, _0x49caa6['dData'], _0x49caa6['duration'], _0x49caa6['nextData'], _0x400389, _0x5c9abc + 0x1);
                                    break;
                                default:
                                    _0x5c9abc += _0x99b0c7['interpolat' + 'ion'][_0x91c4a1](_0x3b4394, _0x46b32a, _0x4c3e8c, _0x295555 + _0x46b32a, _0x49caa6['data'], _0x1eb00f, _0x49caa6['dData'], _0x49caa6['duration'], _0x49caa6['nextData']);
                                }
                                _0x46b32a++;
                            }
                        }
                    else {
                        for (_0x5c9abc = 0x0; _0x5c9abc < _0x3b4394['keyframeWi' + 'dth'];)
                            _0x5c9abc += _0x3b4394['interpolat' + 'ionMethod'][_0x5c9abc](_0x3b4394, _0x5c9abc, _0x4c3e8c, _0x295555 + _0x5c9abc, _0x49caa6['data'], _0x1eb00f, _0x49caa6['dData'], _0x49caa6['duration'], _0x49caa6['nextData']);
                    }
                    _0x295555 += _0x3b4394['keyframeWi' + 'dth'];
                }
            }, _0x4d60f0['getNodesCu' + 'rrentFrame' + 'Index'] = function (_0x4e7d70, _0x272a2c) {
                var _0x110557 = this['_anis'][_0x4e7d70]['nodes'];
                _0x4e7d70 !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x110557['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x110557['length']), this['unfixedLas' + 'tAniIndex'] = _0x4e7d70);
                for (var _0x387416 = 0x0, _0x254443 = _0x110557['length']; _0x387416 < _0x254443; _0x387416++) {
                    var _0x156094 = _0x110557[_0x387416];
                    for (_0x272a2c < this['unfixedCur' + 'rentTimes'][_0x387416] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x387416] = 0x0), this['unfixedCur' + 'rentTimes'][_0x387416] = _0x272a2c; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x387416] < _0x156094['keyFrame']['length'] && !(_0x156094['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x387416]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0x387416]);)
                        this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x387416]++;
                    this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x387416]--;
                }
                return this['unfixedCur' + 'rentFrameI' + 'ndexes'];
            }, _0x4d60f0['getOrigina' + 'lDataUnfix' + 'edRate'] = function (_0x5ca1cf, _0x427739, _0x2c85b1) {
                var _0x210e75 = this['_anis'][_0x5ca1cf]['nodes'];
                _0x5ca1cf !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x210e75['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x210e75['length']), this['unfixedKey' + 'frames'] = _0x4847b3(_0x210e75['length']), this['unfixedLas' + 'tAniIndex'] = _0x5ca1cf);
                for (var _0x43ad71 = 0x0, _0x910307 = 0x0, _0x21cf0f = _0x210e75['length'], _0x42a2fe = 0x0; _0x910307 < _0x21cf0f; _0x910307++) {
                    var _0x4d82af = _0x210e75[_0x910307];
                    for (_0x2c85b1 < this['unfixedCur' + 'rentTimes'][_0x910307] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x910307] = 0x0), this['unfixedCur' + 'rentTimes'][_0x910307] = _0x2c85b1; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x910307] < _0x4d82af['keyFrame']['length'] && !(_0x4d82af['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x910307]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0x910307]);)
                        this['unfixedKey' + 'frames'][_0x910307] = _0x4d82af['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x910307]], this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x910307]++;
                    var _0x3dd065 = this['unfixedKey' + 'frames'][_0x910307];
                    _0x4d82af['dataOffset'] = _0x42a2fe;
                    var _0x23cd5b = _0x2c85b1 - _0x3dd065['startTime'];
                    if (_0x4d82af['lerpType'])
                        switch (_0x4d82af['lerpType']) {
                        case 0x0:
                        case 0x1:
                            for (_0x43ad71 = 0x0; _0x43ad71 < _0x4d82af['keyframeWi' + 'dth'];)
                                _0x43ad71 += _0x4d82af['interpolat' + 'ionMethod'][_0x43ad71](_0x4d82af, _0x43ad71, _0x427739, _0x42a2fe + _0x43ad71, _0x3dd065['data'], _0x23cd5b, _0x3dd065['dData'], _0x3dd065['duration'], _0x3dd065['nextData']);
                            break;
                        case 0x2:
                            var _0x17b5af = _0x3dd065['interpolat' + 'ionData'], _0x41bd81 = _0x17b5af['length'], _0x20b6eb = 0x0;
                            for (_0x43ad71 = 0x0; _0x43ad71 < _0x41bd81;) {
                                var _0x306724 = _0x17b5af[_0x43ad71];
                                switch (_0x306724) {
                                case 0x6:
                                case 0x7:
                                    _0x43ad71 += _0x99b0c7['interpolat' + 'ion'][_0x306724](_0x4d82af, _0x20b6eb, _0x427739, _0x42a2fe + _0x20b6eb, _0x3dd065['data'], _0x23cd5b, _0x3dd065['dData'], _0x3dd065['duration'], _0x3dd065['nextData'], _0x17b5af, _0x43ad71 + 0x1);
                                    break;
                                default:
                                    _0x43ad71 += _0x99b0c7['interpolat' + 'ion'][_0x306724](_0x4d82af, _0x20b6eb, _0x427739, _0x42a2fe + _0x20b6eb, _0x3dd065['data'], _0x23cd5b, _0x3dd065['dData'], _0x3dd065['duration'], _0x3dd065['nextData']);
                                }
                                _0x20b6eb++;
                            }
                        }
                    else {
                        for (_0x43ad71 = 0x0; _0x43ad71 < _0x4d82af['keyframeWi' + 'dth'];)
                            _0x43ad71 += _0x4d82af['interpolat' + 'ionMethod'][_0x43ad71](_0x4d82af, _0x43ad71, _0x427739, _0x42a2fe + _0x43ad71, _0x3dd065['data'], _0x23cd5b, _0x3dd065['dData'], _0x3dd065['duration'], _0x3dd065['nextData']);
                    }
                    _0x42a2fe += _0x4d82af['keyframeWi' + 'dth'];
                }
            }, _0x99b0c7['_LinearInt' + 'erpolation' + '_0'] = function (_0x418df9, _0x242a1e, _0x3e082b, _0x460bb5, _0x2f1fb0, _0x21eb18, _0xda6c26, _0x534282, _0x3490ca, _0xddf529) {
                return _0x3e082b[_0x460bb5] = _0x2f1fb0[_0x242a1e] + _0x21eb18 * _0xda6c26[_0x242a1e], 0x1;
            }, _0x99b0c7['_Quaternio' + 'nInterpola' + 'tion_1'] = function (_0x52ded5, _0x264669, _0x3dc784, _0x2714aa, _0x3faa2f, _0x1c24d0, _0x2662a5, _0x46495d, _0x2d6296, _0x6c1715) {
                var _0x166f1d = 0x0 === _0x46495d ? 0x0 : _0x1c24d0 / _0x46495d;
                return _0x44a261['slerpQuate' + 'rnionArray'](_0x3faa2f, _0x264669, _0x2d6296, _0x264669, _0x166f1d, _0x3dc784, _0x2714aa), 0x4;
            }, _0x99b0c7['_AngleInte' + 'rpolation_' + '2'] = function (_0x3c6eff, _0x5f02aa, _0x1c48d4, _0x559165, _0xb37bb9, _0x17f616, _0x306624, _0x44c739, _0xd98ac1, _0x58082f) {
                return 0x0;
            }, _0x99b0c7['_RadiansIn' + 'terpolatio' + 'n_3'] = function (_0x5ae40c, _0x20f0e1, _0x2aab75, _0x133c35, _0x5b521a, _0x4dad60, _0x1c2432, _0x538414, _0x36aad6, _0x4f7062) {
                return 0x0;
            }, _0x99b0c7['_Matrix4x4' + 'Interpolat' + 'ion_4'] = function (_0x40e53c, _0x28b5b5, _0x557a6b, _0x5bb092, _0x516646, _0xf1d4cc, _0x8175fd, _0x2a5164, _0x1e9449, _0x468c64) {
                for (var _0x300e7f = 0x0; _0x300e7f < 0x10; _0x300e7f++, _0x28b5b5++)
                    _0x557a6b[_0x5bb092 + _0x300e7f] = _0x516646[_0x28b5b5] + _0xf1d4cc * _0x8175fd[_0x28b5b5];
                return 0x10;
            }, _0x99b0c7['_NoInterpo' + 'lation_5'] = function (_0x5cb595, _0x557028, _0x2f0057, _0x75bd6e, _0x174861, _0x492196, _0x38568d, _0x764265, _0x282e20, _0x5ca243) {
                return _0x2f0057[_0x75bd6e] = _0x174861[_0x557028], 0x1;
            }, _0x99b0c7['_BezierInt' + 'erpolation' + '_6'] = function (_0x44932f, _0x3d1e60, _0xd3c628, _0x15f062, _0x54fbbf, _0x12f33b, _0x5f2e81, _0x491ad6, _0x457b28, _0x3e09df, _0x30ef7b) {
                return void 0x0 === _0x30ef7b && (_0x30ef7b = 0x0), _0xd3c628[_0x15f062] = _0x54fbbf[_0x3d1e60] + (_0x457b28[_0x3d1e60] - _0x54fbbf[_0x3d1e60]) * _0x13721a['getBezierR' + 'ate'](_0x12f33b / _0x491ad6, _0x3e09df[_0x30ef7b], _0x3e09df[_0x30ef7b + 0x1], _0x3e09df[_0x30ef7b + 0x2], _0x3e09df[_0x30ef7b + 0x3]), 0x5;
            }, _0x99b0c7['_BezierInt' + 'erpolation' + '_7'] = function (_0x9c443, _0x196fc8, _0x202110, _0x45c74d, _0x1ad852, _0x343cdc, _0x35aba3, _0x2e7f73, _0x3ebf46, _0x254bac, _0x48d6cb) {
                return void 0x0 === _0x48d6cb && (_0x48d6cb = 0x0), _0x202110[_0x45c74d] = _0x254bac[_0x48d6cb + 0x4] + _0x254bac[_0x48d6cb + 0x5] * _0x13721a['getBezierR' + 'ate']((0.001 * _0x343cdc + _0x254bac[_0x48d6cb + 0x6]) / _0x254bac[_0x48d6cb + 0x7], _0x254bac[_0x48d6cb], _0x254bac[_0x48d6cb + 0x1], _0x254bac[_0x48d6cb + 0x2], _0x254bac[_0x48d6cb + 0x3]), 0x9;
            }, _0x99b0c7['interpolat' + 'ion'] = [
                _0x99b0c7['_LinearInt' + 'erpolation' + '_0'],
                _0x99b0c7['_Quaternio' + 'nInterpola' + 'tion_1'],
                _0x99b0c7['_AngleInte' + 'rpolation_' + '2'],
                _0x99b0c7['_RadiansIn' + 'terpolatio' + 'n_3'],
                _0x99b0c7['_Matrix4x4' + 'Interpolat' + 'ion_4'],
                _0x99b0c7['_NoInterpo' + 'lation_5'],
                _0x99b0c7['_BezierInt' + 'erpolation' + '_6'],
                _0x99b0c7['_BezierInt' + 'erpolation' + '_7']
            ], _0x99b0c7;
        }(), _0x143623 = (function (_0x11655a) {
            function _0x14c996(_0x1b98e8) {
                this['_start'] = 0x0, this['_Pos'] = 0x0, this['_data'] = null, this['_curIndex'] = 0x0, this['_preIndex'] = 0x0, this['_playIndex'] = 0x0, this['_playing'] = !0x1, this['_ended'] = !0x0, this['_count'] = 0x0, this['_ids'] = null, this['_loadedIma' + 'ge'] = {}, this['_idOfSprit' + 'e'] = null, this['_parentMov' + 'ieClip'] = null, this['_movieClip' + 'List'] = null, this['_labels'] = null, this['basePath'] = null, this['_atlasPath'] = null, this['_url'] = null, this['_isRoot'] = !0x1, this['_completeH' + 'andler'] = null, this['_endFrame'] = -0x1, this['interval'] = 0x1e, this['loop'] = !0x1, _0x14c996['__super']['call'](this), this['_ids'] = {}, this['_idOfSprit' + 'e'] = [], this['_reset'](), this['_playing'] = !0x1, this['_parentMov' + 'ieClip'] = _0x1b98e8, _0x1b98e8 ? (this['_isRoot'] = !0x1, this['_movieClip' + 'List'] = _0x1b98e8['_movieClip' + 'List'], this['_movieClip' + 'List']['push'](this)) : (this['_movieClip' + 'List'] = [this], this['_isRoot'] = !0x0, this['_setBitUp'](0x10));
            }
            _0x1df06c(_0x14c996, 'laya.ani.s' + 'wf.MovieCl' + 'ip', _0x11655a);
            var _0x14808c = _0x14c996['prototype'];
            _0x14808c['destroy'] = function (_0xbcf04) {
                void 0x0 === _0xbcf04 && (_0xbcf04 = !0x0), this['_clear'](), _0x11655a['prototype']['destroy']['call'](this, _0xbcf04);
            }, _0x14808c['_setDispla' + 'y'] = function (_0x8764f1) {
                _0x11655a['prototype']['_setDispla' + 'y']['call'](this, _0x8764f1), this['_isRoot'] && this['_$3__onDis' + 'play'](_0x8764f1);
            }, _0x14808c['_$3__onDis' + 'play'] = function (_0x443d29) {
                _0x443d29 ? this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0) : this['timer']['clear'](this, this['updates']);
            }, _0x14808c['updates'] = function () {
                if (!this['_parentMov' + 'ieClip']) {
                    var _0x406eb9, _0x4b5896 = 0x0;
                    for (_0x406eb9 = this['_movieClip' + 'List']['length'], _0x4b5896 = 0x0; _0x4b5896 < _0x406eb9; _0x4b5896++)
                        this['_movieClip' + 'List'][_0x4b5896] && this['_movieClip' + 'List'][_0x4b5896]['_update']();
                }
            }, _0x14808c['addLabel'] = function (_0x266418, _0x4e1710) {
                this['_labels'] || (this['_labels'] = {}), this['_labels'][_0x4e1710] = _0x266418;
            }, _0x14808c['removeLabe' + 'l'] = function (_0x3a6b14) {
                if (_0x3a6b14) {
                    if (!this['_labels']) {
                        for (var _0x41d539 in this['_labels'])
                            if (this['_labels'][_0x41d539] === _0x3a6b14) {
                                delete this['_labels'][_0x41d539];
                                break;
                            }
                    }
                } else
                    this['_labels'] = null;
            }, _0x14808c['_update'] = function () {
                if (this['_data'] && this['_playing']) {
                    if (this['_playIndex']++, this['_playIndex'] >= this['_count']) {
                        if (!this['loop'])
                            return this['_playIndex']--, void this['stop']();
                        this['_playIndex'] = 0x0;
                    }
                    if (this['_parseFram' + 'e'](this['_playIndex']), this['_labels'] && this['_labels'][this['_playIndex']] && this['event']('label', this['_labels'][this['_playIndex']]), -0x1 != this['_endFrame'] && this['_endFrame'] == this['_playIndex']) {
                        if (this['_endFrame'] = -0x1, null != this['_completeH' + 'andler']) {
                            var _0x2d3d3c = this['_completeH' + 'andler'];
                            this['_completeH' + 'andler'] = null, _0x2d3d3c['run']();
                        }
                        this['stop']();
                    }
                }
            }, _0x14808c['stop'] = function () {
                this['_playing'] = !0x1;
            }, _0x14808c['gotoAndSto' + 'p'] = function (_0xee00f6) {
                this['index'] = _0xee00f6, this['stop']();
            }, _0x14808c['_clear'] = function () {
                if (this['stop'](), this['_idOfSprit' + 'e']['length'] = 0x0, !this['_parentMov' + 'ieClip']) {
                    this['timer']['clear'](this, this['updates']);
                    var _0x478c9d, _0x2fabe8 = 0x0;
                    for (_0x478c9d = this['_movieClip' + 'List']['length'], _0x2fabe8 = 0x0; _0x2fabe8 < _0x478c9d; _0x2fabe8++)
                        this['_movieClip' + 'List'][_0x2fabe8] != this && this['_movieClip' + 'List'][_0x2fabe8]['_clear']();
                    this['_movieClip' + 'List']['length'] = 0x0;
                }
                var _0x1908e9;
                for (_0x1908e9 in (this['_atlasPath'] && _0x2aa6df['clearRes'](this['_atlasPath']), this['_loadedIma' + 'ge']))
                    this['_loadedIma' + 'ge'][_0x1908e9] && (_0x2aa6df['clearRes'](_0x1908e9), this['_loadedIma' + 'ge'][_0x1908e9] = !0x1);
                this['removeChil' + 'dren'](), this['graphics'] = null, this['_parentMov' + 'ieClip'] = null;
            }, _0x14808c['play'] = function (_0x29f99d, _0x41f46b) {
                void 0x0 === _0x29f99d && (_0x29f99d = 0x0), void 0x0 === _0x41f46b && (_0x41f46b = !0x0), this['loop'] = _0x41f46b, this['_playing'] = !0x0, this['_data'] && this['_displayFr' + 'ame'](_0x29f99d);
            }, _0x14808c['_displayFr' + 'ame'] = function (_0x1f37b9) {
                void 0x0 === _0x1f37b9 && (_0x1f37b9 = -0x1), -0x1 != _0x1f37b9 && (this['_curIndex'] > _0x1f37b9 && this['_reset'](), this['_parseFram' + 'e'](_0x1f37b9));
            }, _0x14808c['_reset'] = function (_0x3f80dd) {
                void 0x0 === _0x3f80dd && (_0x3f80dd = !0x0), _0x3f80dd && 0x1 != this['_curIndex'] && this['removeChil' + 'dren'](), this['_preIndex'] = this['_curIndex'] = -0x1, this['_Pos'] = this['_start'];
            }, _0x14808c['_parseFram' + 'e'] = function (_0x195445) {
                var _0x25700d, _0x1af3d3, _0x2eca1f, _0x437276 = 0x0, _0x3885f5 = 0x0, _0x467f31 = 0x0, _0xa6f5c8 = !0x1, _0x1dfbaa = this['_idOfSprit' + 'e'], _0x5661d9 = this['_data'];
                for (this['_ended'] && this['_reset'](), _0x5661d9['pos'] = this['_Pos'], this['_ended'] = !0x1, this['_playIndex'] = _0x195445, this['_curIndex'] > _0x195445 && _0x195445 < this['_preIndex'] && (this['_reset'](!0x0), _0x5661d9['pos'] = this['_Pos']); this['_curIndex'] <= _0x195445 && !this['_ended'];)
                    switch (_0x5661d9['getUint16']()) {
                    case 0xc:
                        if (_0x437276 = _0x5661d9['getUint16'](), _0x3885f5 = this['_ids'][_0x5661d9['getUint16']()], this['_Pos'] = _0x5661d9['pos'], _0x5661d9['pos'] = _0x3885f5, 0x0 == (_0x467f31 = _0x5661d9['getUint8']())) {
                            var _0x4044f8 = _0x5661d9['getUint16']();
                            if (!(_0x1af3d3 = _0x1dfbaa[_0x437276])) {
                                _0x1af3d3 = _0x1dfbaa[_0x437276] = new _0x4efbbe();
                                var _0x4f0175 = new _0x4efbbe();
                                _0x4f0175['loadImage'](this['basePath'] + _0x4044f8 + '.png'), this['_loadedIma' + 'ge'][this['basePath'] + _0x4044f8 + '.png'] = !0x0, _0x1af3d3['addChild'](_0x4f0175), _0x4f0175['size'](_0x5661d9['getFloat32'](), _0x5661d9['getFloat32']());
                                var _0x4be8a4 = _0x5661d9['_getMatrix']();
                                _0x4f0175['transform'] = _0x4be8a4;
                            }
                            _0x1af3d3['alpha'] = 0x1;
                        } else
                            0x1 == _0x467f31 && ((_0x25700d = _0x1dfbaa[_0x437276]) || (_0x1dfbaa[_0x437276] = _0x25700d = new _0x14c996(this), _0x25700d['interval'] = this['interval'], _0x25700d['_ids'] = this['_ids'], _0x25700d['basePath'] = this['basePath'], _0x25700d['_setData'](_0x5661d9, _0x3885f5), _0x25700d['_initState'](), _0x25700d['play'](0x0)), _0x25700d['alpha'] = 0x1);
                        _0x5661d9['pos'] = this['_Pos'];
                        break;
                    case 0x3:
                        var _0x1420dd = _0x1dfbaa[_0x5661d9['getUint16']()];
                        _0x1420dd && (this['addChild'](_0x1420dd), _0x1420dd['zOrder'] = _0x5661d9['getUint16'](), _0xa6f5c8 = !0x0);
                        break;
                    case 0x4:
                        (_0x1420dd = _0x1dfbaa[_0x5661d9['getUint16']()]) && _0x1420dd['removeSelf']();
                        break;
                    case 0x5:
                        _0x1dfbaa[_0x5661d9['getUint16']()][_0x14c996['_ValueList'][_0x5661d9['getUint16']()]] = _0x5661d9['getFloat32']();
                        break;
                    case 0x6:
                        _0x1dfbaa[_0x5661d9['getUint16']()]['visible'] = _0x5661d9['getUint8']() > 0x0;
                        break;
                    case 0x7:
                        var _0x799a15 = (_0x1af3d3 = _0x1dfbaa[_0x5661d9['getUint16']()])['transform'] || _0x41fdcd['create']();
                        _0x799a15['setTo'](_0x5661d9['getFloat32'](), _0x5661d9['getFloat32'](), _0x5661d9['getFloat32'](), _0x5661d9['getFloat32'](), _0x5661d9['getFloat32'](), _0x5661d9['getFloat32']()), _0x1af3d3['transform'] = _0x799a15;
                        break;
                    case 0x8:
                        _0x1dfbaa[_0x5661d9['getUint16']()]['setPos'](_0x5661d9['getFloat32'](), _0x5661d9['getFloat32']());
                        break;
                    case 0x9:
                        _0x1dfbaa[_0x5661d9['getUint16']()]['setSize'](_0x5661d9['getFloat32'](), _0x5661d9['getFloat32']());
                        break;
                    case 0xa:
                        _0x1dfbaa[_0x5661d9['getUint16']()]['alpha'] = _0x5661d9['getFloat32']();
                        break;
                    case 0xb:
                        _0x1dfbaa[_0x5661d9['getUint16']()]['setScale'](_0x5661d9['getFloat32'](), _0x5661d9['getFloat32']());
                        break;
                    case 0x62:
                        _0x2eca1f = _0x5661d9['getString'](), this['event'](_0x2eca1f), 'stop' == _0x2eca1f && this['stop']();
                        break;
                    case 0x63:
                        this['_curIndex'] = _0x5661d9['getUint16'](), _0xa6f5c8 && this['updateZOrd' + 'er']();
                        break;
                    case 0x64:
                        this['_count'] = this['_curIndex'] + 0x1, this['_ended'] = !0x0, this['_playing'] && (this['event']('enterframe'), this['event']('end'), this['event']('complete')), this['_reset'](!0x1);
                    }
                this['_playing'] && !this['_ended'] && this['event']('enterframe'), this['_Pos'] = _0x5661d9['pos'];
            }, _0x14808c['_setData'] = function (_0x54c3dd, _0xe6a1aa) {
                this['_data'] = _0x54c3dd, this['_start'] = _0xe6a1aa + 0x3;
            }, _0x14808c['load'] = function (_0x58293b, _0x3e59d8, _0x5211b5) {
                var _0x2bbf48;
                void 0x0 === _0x3e59d8 && (_0x3e59d8 = !0x1), this['_url'] = _0x58293b, _0x3e59d8 && (this['_atlasPath'] = _0x5211b5 || _0x58293b['split']('.swf')[0x0] + '.json'), this['stop'](), this['_clear'](), this['_movieClip' + 'List'] = [this], _0x2bbf48 = [{
                        'url': _0x58293b,
                        'type': 'arraybuffe' + 'r'
                    }], this['_atlasPath'] && _0x2bbf48['push']({
                    'url': this['_atlasPath'],
                    'type': 'atlas'
                }), _0x21b72c['loader']['load'](_0x2bbf48, _0x1def60['create'](this, this['_onLoaded']));
            }, _0x14808c['_onLoaded'] = function () {
                var _0x52a157;
                (_0x52a157 = _0x2aa6df['getRes'](this['_url'])) ? !this['_atlasPath'] || _0x2aa6df['getAtlas'](this['_atlasPath']) ? (this['basePath'] = this['_atlasPath'] ? _0x2aa6df['getAtlas'](this['_atlasPath'])['dir'] : this['_url']['split']('.swf')[0x0] + '/image/', this['_initData'](_0x52a157)) : this['event']('error', 'Atlas\x20not\x20' + 'find') : this['event']('error', 'file\x20not\x20f' + 'ind');
            }, _0x14808c['_initState'] = function () {
                this['_reset'](), this['_ended'] = !0x1;
                var _0x321d17 = this['_playing'];
                for (this['_playing'] = !0x1, this['_curIndex'] = 0x0; !this['_ended'];)
                    this['_parseFram' + 'e'](++this['_curIndex']);
                this['_playing'] = _0x321d17;
            }, _0x14808c['_initData'] = function (_0x5282b8) {
                this['_data'] = new _0x2a0ff4(_0x5282b8);
                var _0x2791d1 = 0x0, _0x46a037 = this['_data']['getUint16']();
                for (_0x2791d1 = 0x0; _0x2791d1 < _0x46a037; _0x2791d1++)
                    this['_ids'][this['_data']['getInt16']()] = this['_data']['getInt32']();
                this['interval'] = 0x3e8 / this['_data']['getUint16'](), this['_setData'](this['_data'], this['_ids'][0x7fff]), this['_initState'](), this['play'](0x0), this['event']('loaded'), this['_parentMov' + 'ieClip'] || this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0);
            }, _0x14808c['playTo'] = function (_0x4f5de2, _0x40faae, _0x44df4f) {
                this['_completeH' + 'andler'] = _0x44df4f, this['_endFrame'] = _0x40faae, this['play'](_0x4f5de2, !0x1);
            }, _0x17c821(0x0, _0x14808c, 'index', function () {
                return this['_playIndex'];
            }, function (_0x2bf7ba) {
                this['_playIndex'] = _0x2bf7ba, this['_data'] && this['_displayFr' + 'ame'](this['_playIndex']), this['_labels'] && this['_labels'][_0x2bf7ba] && this['event']('label', this['_labels'][_0x2bf7ba]);
            }), _0x17c821(0x0, _0x14808c, 'count', function () {
                return this['_count'];
            }), _0x17c821(0x0, _0x14808c, 'playing', function () {
                return this['_playing'];
            }), _0x17c821(0x0, _0x14808c, 'url', null, function (_0x1bd727) {
                this['load'](_0x1bd727);
            }), _0x14c996['_ValueList'] = [
                'x',
                'y',
                'width',
                'height',
                'scaleX',
                'scaleY',
                'rotation',
                'alpha'
            ];
        }(_0x4efbbe), function (_0x124b90) {
            function _0x1c45b7(_0x1c86e3, _0x402c2f) {
                this['_templet'] = null, this['_player'] = null, this['_curOrigin' + 'alData'] = null, this['_boneMatri' + 'xArray'] = [], this['_lastTime'] = 0x0, this['_currAniNa' + 'me'] = null, this['_currAniIn' + 'dex'] = -0x1, this['_pause'] = !0x0, this['_aniClipIn' + 'dex'] = -0x1, this['_clipIndex'] = -0x1, this['_skinIndex'] = 0x0, this['_skinName'] = 'default', this['_aniMode'] = 0x0, this['_graphicsC' + 'ache'] = null, this['_boneSlotD' + 'ic'] = null, this['_bindBoneB' + 'oneSlotDic'] = null, this['_boneSlotA' + 'rray'] = null, this['_index'] = -0x1, this['_total'] = -0x1, this['_indexCont' + 'rol'] = !0x1, this['_aniPath'] = null, this['_texturePa' + 'th'] = null, this['_complete'] = null, this['_loadAniMo' + 'de'] = 0x0, this['_yReverseM' + 'atrix'] = null, this['_ikArr'] = null, this['_tfArr'] = null, this['_pathDic'] = null, this['_rootBone'] = null, this['_boneList'] = null, this['_aniSectio' + 'nDic'] = null, this['_eventInde' + 'x'] = 0x0, this['_drawOrder' + 'Index'] = 0x0, this['_drawOrder'] = null, this['_lastAniCl' + 'ipIndex'] = -0x1, this['_lastUpdat' + 'eAniClipIn' + 'dex'] = -0x1, this['_playAudio'] = !0x0, this['_soundChan' + 'nelArr'] = [], _0x1c45b7['__super']['call'](this), void 0x0 === _0x402c2f && (_0x402c2f = 0x0), _0x1c86e3 && this['init'](_0x1c86e3, _0x402c2f);
            }
            _0x1df06c(_0x1c45b7, 'laya.ani.b' + 'one.Skelet' + 'on', _0x124b90);
            var _0x8beab7 = _0x1c45b7['prototype'];
            return _0x8beab7['init'] = function (_0x2d7499, _0x35ff69) {
                void 0x0 === _0x35ff69 && (_0x35ff69 = 0x0);
                var _0x4cd982, _0x342d6e, _0x25ceda, _0x547a0f = 0x0, _0x21fb1c = 0x0;
                if (0x1 == _0x35ff69) {
                    for (this['_graphicsC' + 'ache'] = [], _0x547a0f = 0x0, _0x21fb1c = _0x2d7499['getAnimati' + 'onCount'](); _0x547a0f < _0x21fb1c; _0x547a0f++)
                        this['_graphicsC' + 'ache']['push']([]);
                }
                if (this['_yReverseM' + 'atrix'] = _0x2d7499['yReverseMa' + 'trix'], this['_aniMode'] = _0x35ff69, this['_templet'] = _0x2d7499, this['_templet']['_addRefere' + 'nce'](0x1), this['_player'] = new _0x48bed6(), this['_player']['cacheFrame' + 'Rate'] = _0x2d7499['rate'], this['_player']['templet'] = _0x2d7499, this['_player']['play'](), this['_parseSrcB' + 'oneMatrix'](), this['_boneList'] = _0x2d7499['mBoneArr'], this['_rootBone'] = _0x2d7499['mRootBone'], this['_aniSectio' + 'nDic'] = _0x2d7499['aniSection' + 'Dic'], _0x2d7499['ikArr']['length'] > 0x0) {
                    for (this['_ikArr'] = [], _0x547a0f = 0x0, _0x21fb1c = _0x2d7499['ikArr']['length']; _0x547a0f < _0x21fb1c; _0x547a0f++)
                        this['_ikArr']['push'](new _0xb9f29b(_0x2d7499['ikArr'][_0x547a0f], this['_boneList']));
                }
                if (_0x2d7499['pathArr']['length'] > 0x0) {
                    for (null == this['_pathDic'] && (this['_pathDic'] = {}), _0x547a0f = 0x0, _0x21fb1c = _0x2d7499['pathArr']['length']; _0x547a0f < _0x21fb1c; _0x547a0f++)
                        _0x4cd982 = _0x2d7499['pathArr'][_0x547a0f], _0x342d6e = new _0x41b091(_0x4cd982, this['_boneList']), (_0x25ceda = this['_boneSlotD' + 'ic'][_0x4cd982['name']]) && ((_0x342d6e = new _0x41b091(_0x4cd982, this['_boneList']))['target'] = _0x25ceda), this['_pathDic'][_0x4cd982['name']] = _0x342d6e;
                }
                if (_0x2d7499['tfArr']['length'] > 0x0) {
                    for (this['_tfArr'] = [], _0x547a0f = 0x0, _0x21fb1c = _0x2d7499['tfArr']['length']; _0x547a0f < _0x21fb1c; _0x547a0f++)
                        this['_tfArr']['push'](new _0x1c46e5(_0x2d7499['tfArr'][_0x547a0f], this['_boneList']));
                }
                if (_0x2d7499['skinDataAr' + 'ray']['length'] > 0x0) {
                    var _0x1ff1eb = this['_templet']['skinDataAr' + 'ray'][this['_skinIndex']];
                    this['_skinName'] = _0x1ff1eb['name'];
                }
                this['_player']['on']('played', this, this['_onPlay']), this['_player']['on']('stopped', this, this['_onStop']), this['_player']['on']('paused', this, this['_onPause']);
            }, _0x8beab7['load'] = function (_0x2aa4d5, _0x2415d4, _0x4c1dad) {
                void 0x0 === _0x4c1dad && (_0x4c1dad = 0x0), this['_aniPath'] = _0x2aa4d5, this['_complete'] = _0x2415d4, this['_loadAniMo' + 'de'] = _0x4c1dad, _0x21b72c['loader']['load']([{
                        'url': _0x2aa4d5,
                        'type': 'arraybuffe' + 'r'
                    }], _0x1def60['create'](this, this['_onLoaded']));
            }, _0x8beab7['_onLoaded'] = function () {
                var _0x3d1459, _0x59dbbe = _0x2aa6df['getRes'](this['_aniPath']);
                null != _0x59dbbe && (null == _0xf1b5e7['TEMPLET_DI' + 'CTIONARY'] && (_0xf1b5e7['TEMPLET_DI' + 'CTIONARY'] = {}), (_0x3d1459 = _0xf1b5e7['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']]) ? _0x3d1459['isParseFai' + 'l'] ? this['_parseFail']() : _0x3d1459['isParserCo' + 'mplete'] ? this['_parseComp' + 'lete']() : (_0x3d1459['on']('complete', this, this['_parseComp' + 'lete']), _0x3d1459['on']('error', this, this['_parseFail'])) : ((_0x3d1459 = new _0xf1b5e7())['_setCreate' + 'URL'](this['_aniPath']), _0xf1b5e7['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']] = _0x3d1459, _0x3d1459['on']('complete', this, this['_parseComp' + 'lete']), _0x3d1459['on']('error', this, this['_parseFail']), _0x3d1459['isParserCo' + 'mplete'] = !0x1, _0x3d1459['parseData'](null, _0x59dbbe)));
            }, _0x8beab7['_parseComp' + 'lete'] = function () {
                var _0x4cbba6 = _0xf1b5e7['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']];
                _0x4cbba6 && (this['init'](_0x4cbba6, this['_loadAniMo' + 'de']), this['play'](0x0, !0x0)), this['_complete'] && this['_complete']['runWith'](this);
            }, _0x8beab7['_parseFail'] = function () {
                console['log']('[Error]:' + this['_aniPath'] + '解析失败');
            }, _0x8beab7['_onPlay'] = function () {
                this['event']('played');
            }, _0x8beab7['_onStop'] = function () {
                var _0x18336c, _0x4027cc = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
                if (_0x4027cc && this['_eventInde' + 'x'] < _0x4027cc['length']) {
                    for (; this['_eventInde' + 'x'] < _0x4027cc['length']; this['_eventInde' + 'x']++)
                        (_0x18336c = _0x4027cc[this['_eventInde' + 'x']])['time'] >= this['_player']['playStart'] && _0x18336c['time'] <= this['_player']['playEnd'] && this['event']('label', _0x18336c);
                }
                this['_drawOrder'] = null, this['event']('stopped');
            }, _0x8beab7['_onPause'] = function () {
                this['event']('paused');
            }, _0x8beab7['_parseSrcB' + 'oneMatrix'] = function () {
                var _0x258e33 = 0x0, _0xe19e8e = 0x0;
                for (_0xe19e8e = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x258e33 = 0x0; _0x258e33 < _0xe19e8e; _0x258e33++)
                    this['_boneMatri' + 'xArray']['push'](new _0x41fdcd());
                if (0x0 == this['_aniMode'])
                    this['_boneSlotD' + 'ic'] = this['_templet']['boneSlotDi' + 'c'], this['_bindBoneB' + 'oneSlotDic'] = this['_templet']['bindBoneBo' + 'neSlotDic'], this['_boneSlotA' + 'rray'] = this['_templet']['boneSlotAr' + 'ray'];
                else {
                    null == this['_boneSlotD' + 'ic'] && (this['_boneSlotD' + 'ic'] = {}), null == this['_bindBoneB' + 'oneSlotDic'] && (this['_bindBoneB' + 'oneSlotDic'] = {}), null == this['_boneSlotA' + 'rray'] && (this['_boneSlotA' + 'rray'] = []);
                    var _0x19cfd5, _0x388ec3, _0x5f145b = this['_templet']['boneSlotAr' + 'ray'];
                    for (_0x258e33 = 0x0, _0xe19e8e = _0x5f145b['length']; _0x258e33 < _0xe19e8e; _0x258e33++)
                        _0x19cfd5 = _0x5f145b[_0x258e33], null == (_0x388ec3 = this['_bindBoneB' + 'oneSlotDic'][_0x19cfd5['parent']]) && (this['_bindBoneB' + 'oneSlotDic'][_0x19cfd5['parent']] = _0x388ec3 = []), this['_boneSlotD' + 'ic'][_0x19cfd5['name']] = _0x19cfd5 = _0x19cfd5['copy'](), _0x388ec3['push'](_0x19cfd5), this['_boneSlotA' + 'rray']['push'](_0x19cfd5);
                }
            }, _0x8beab7['_emitMisse' + 'dEvents'] = function (_0x1bd367, _0x8a8001, _0x66993) {
                void 0x0 === _0x66993 && (_0x66993 = 0x0);
                var _0x15ccd5 = this['_templet']['eventAniAr' + 'r'][this['_player']['currentAni' + 'mationClip' + 'Index']];
                if (_0x15ccd5) {
                    var _0x232403, _0x12a8bc, _0x5c5014 = 0x0;
                    for (_0x232403 = _0x15ccd5['length'], _0x5c5014 = _0x66993; _0x5c5014 < _0x232403; _0x5c5014++)
                        (_0x12a8bc = _0x15ccd5[_0x5c5014])['time'] >= this['_player']['playStart'] && _0x12a8bc['time'] <= this['_player']['playEnd'] && this['event']('label', _0x12a8bc);
                }
            }, _0x8beab7['_update'] = function (_0x5a9231) {
                if (void 0x0 === _0x5a9231 && (_0x5a9231 = !0x0), !(this['_pause'] || _0x5a9231 && this['_indexCont' + 'rol'])) {
                    var _0x83c5cf = this['timer']['currTimer'], _0x46dcad = this['_player']['currentKey' + 'frameIndex'], _0x5d3822 = _0x83c5cf - this['_lastTime'];
                    if (_0x5a9231 ? this['_player']['_update'](_0x5d3822) : _0x46dcad = -0x1, this['_lastTime'] = _0x83c5cf, this['_player'] && (this['_index'] = this['_clipIndex'] = this['_player']['currentKey' + 'frameIndex'], !(this['_index'] < 0x0 || _0x5d3822 > 0x0 && this['_clipIndex'] == _0x46dcad && this['_lastUpdat' + 'eAniClipIn' + 'dex'] == this['_aniClipIn' + 'dex']))) {
                        this['_lastUpdat' + 'eAniClipIn' + 'dex'] = this['_aniClipIn' + 'dex'], _0x46dcad > this['_clipIndex'] && 0x0 != this['_eventInde' + 'x'] && (this['_emitMisse' + 'dEvents'](this['_player']['playStart'], this['_player']['playEnd'], this['_eventInde' + 'x']), this['_eventInde' + 'x'] = 0x0);
                        var _0x59ca61, _0x1679fa, _0x52c6ad = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
                        if (_0x52c6ad && this['_eventInde' + 'x'] < _0x52c6ad['length']) {
                            var _0x26f35e = _0x52c6ad[this['_eventInde' + 'x']];
                            _0x26f35e['time'] >= this['_player']['playStart'] && _0x26f35e['time'] <= this['_player']['playEnd'] ? this['_player']['currentPla' + 'yTime'] >= _0x26f35e['time'] && (this['event']('label', _0x26f35e), this['_eventInde' + 'x']++, this['_playAudio'] && _0x26f35e['audioValue'] && 'null' !== _0x26f35e['audioValue'] && (_0x59ca61 = _0x5ec870['playSound'](this['_player']['templet']['_path'] + _0x26f35e['audioValue'], 0x1, _0x1def60['create'](this, this['_onAniSoun' + 'dStoped'])), _0x5ec870['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x59ca61 && this['_soundChan' + 'nelArr']['push'](_0x59ca61))) : _0x26f35e['time'] < this['_player']['playStart'] && this['_playAudio'] && _0x26f35e['audioValue'] && 'null' !== _0x26f35e['audioValue'] && this['_player']['playEnd'] - this['_player']['currentPla' + 'yTime'] > 0.1 ? (this['_eventInde' + 'x']++, _0x59ca61 = _0x5ec870['playSound'](this['_player']['templet']['_path'] + _0x26f35e['audioValue'], 0x1, _0x1def60['create'](this, this['_onAniSoun' + 'dStoped']), null, (this['_player']['currentPla' + 'yTime'] - _0x26f35e['time']) / 0x3e8), _0x5ec870['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x59ca61 && this['_soundChan' + 'nelArr']['push'](_0x59ca61)) : this['_eventInde' + 'x']++;
                        }
                        0x0 == this['_aniMode'] ? (_0x1679fa = this['_templet']['getGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x1679fa && (this['graphics'] = _0x1679fa) : 0x1 == this['_aniMode'] ? (_0x1679fa = this['_getGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x1679fa && (this['graphics'] = _0x1679fa) : this['_createGra' + 'phics']();
                    }
                }
            }, _0x8beab7['_onAniSoun' + 'dStoped'] = function (_0x174d9e) {
                for (var _0x26c0ed, _0x34e740 = this['_soundChan' + 'nelArr']['length'], _0x55c5b6 = 0x0; _0x55c5b6 < _0x34e740; _0x55c5b6++)
                    ((_0x26c0ed = this['_soundChan' + 'nelArr'][_0x55c5b6])['isStopped'] || _0x174d9e) && (!_0x26c0ed['isStopped'] && _0x26c0ed['stop'](), this['_soundChan' + 'nelArr']['splice'](_0x55c5b6, 0x1), _0x34e740--, _0x55c5b6--);
            }, _0x8beab7['_createGra' + 'phics'] = function (_0x5225e0) {
                void 0x0 === _0x5225e0 && (_0x5225e0 = -0x1), -0x1 == _0x5225e0 && (_0x5225e0 = this['_clipIndex']);
                var _0x3120fc, _0x4e8476 = _0x5225e0 * this['_player']['cacheFrame' + 'RateInterv' + 'al'], _0x5f3fc0 = this['_templet']['drawOrderA' + 'niArr'][this['_aniClipIn' + 'dex']];
                if (_0x5f3fc0 && _0x5f3fc0['length'] > 0x0) {
                    for (this['_drawOrder' + 'Index'] = 0x0, _0x3120fc = _0x5f3fc0[this['_drawOrder' + 'Index']]; _0x4e8476 >= _0x3120fc['time'] && (this['_drawOrder'] = _0x3120fc['drawOrder'], this['_drawOrder' + 'Index']++, !(this['_drawOrder' + 'Index'] >= _0x5f3fc0['length']));)
                        _0x3120fc = _0x5f3fc0[this['_drawOrder' + 'Index']];
                }
                0x0 == this['_aniMode'] || 0x1 == this['_aniMode'] ? this['graphics'] = _0x2a138b['create']() : this['graphics'] instanceof laya['ani']['GraphicsAn' + 'i'] ? this['graphics']['clear']() : this['graphics'] = _0x2a138b['create']();
                var _0x2b3e3f = this['graphics'], _0x41a175 = this['_templet']['getNodes'](this['_aniClipIn' + 'dex']), _0x5483bb = 0x0 == this['_player']['state'];
                this['_templet']['getOrigina' + 'lData'](this['_aniClipIn' + 'dex'], this['_curOrigin' + 'alData'], null, _0x5225e0, _0x5483bb ? _0x4e8476 + this['_player']['cacheFrame' + 'RateInterv' + 'al'] : _0x4e8476);
                var _0xcdc383, _0x16a997, _0x2f3dbd, _0x553f0c, _0x204c0e = this['_aniSectio' + 'nDic'][this['_aniClipIn' + 'dex']], _0x4121f4 = 0x0, _0x17b8d6 = 0x0, _0x544924 = 0x0, _0x27f0af = 0x0, _0x3a239d = 0x0, _0x34ccba = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x33959c = this['_curOrigin' + 'alData'];
                for (_0x17b8d6 = 0x0, _0x3a239d = _0x204c0e[0x0]; _0x17b8d6 < _0x34ccba; _0x17b8d6++) {
                    var _0x303dca = (_0x553f0c = this['_boneList'][_0x17b8d6])['resultTran' + 'sform'];
                    _0x2f3dbd = this['_templet']['srcBoneMat' + 'rixArr'][_0x17b8d6], _0x303dca['scX'] = _0x2f3dbd['scX'] * _0x33959c[_0x4121f4++], _0x303dca['skX'] = _0x2f3dbd['skX'] + _0x33959c[_0x4121f4++], _0x303dca['skY'] = _0x2f3dbd['skY'] + _0x33959c[_0x4121f4++], _0x303dca['scY'] = _0x2f3dbd['scY'] * _0x33959c[_0x4121f4++], _0x303dca['x'] = _0x2f3dbd['x'] + _0x33959c[_0x4121f4++], _0x303dca['y'] = _0x2f3dbd['y'] + _0x33959c[_0x4121f4++], 0x8 === this['_templet']['tMatrixDat' + 'aLen'] && (_0x303dca['skewX'] = _0x2f3dbd['skewX'] + _0x33959c[_0x4121f4++], _0x303dca['skewY'] = _0x2f3dbd['skewY'] + _0x33959c[_0x4121f4++]);
                }
                var _0x2ba81e, _0xd341c2 = {}, _0x533eea = {};
                for (_0x3a239d += _0x204c0e[0x1]; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                    _0xd341c2[(_0x2ba81e = _0x41a175[_0x17b8d6])['name']] = _0x33959c[_0x4121f4++], _0x533eea[_0x2ba81e['name']] = _0x33959c[_0x4121f4++], _0x4121f4 += 0x4;
                var _0x17bbfd, _0x5b8e9d, _0x3f02cc = {}, _0x8c343d = {};
                for (_0x3a239d += _0x204c0e[0x2]; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                    _0x3f02cc[(_0x2ba81e = _0x41a175[_0x17b8d6])['name']] = _0x33959c[_0x4121f4++], _0x8c343d[_0x2ba81e['name']] = _0x33959c[_0x4121f4++], _0x4121f4 += 0x4;
                if (this['_pathDic'])
                    for (_0x3a239d += _0x204c0e[0x3]; _0x17b8d6 < _0x3a239d; _0x17b8d6++) {
                        if (_0x2ba81e = _0x41a175[_0x17b8d6], _0x17bbfd = this['_pathDic'][_0x2ba81e['name']])
                            switch (new _0x2a0ff4(_0x2ba81e['extenData'])['getByte']()) {
                            case 0x1:
                                _0x17bbfd['position'] = _0x33959c[_0x4121f4++];
                                break;
                            case 0x2:
                                _0x17bbfd['spacing'] = _0x33959c[_0x4121f4++];
                                break;
                            case 0x3:
                                _0x17bbfd['rotateMix'] = _0x33959c[_0x4121f4++], _0x17bbfd['translateM' + 'ix'] = _0x33959c[_0x4121f4++];
                            }
                    }
                if (this['_rootBone']['update'](this['_yReverseM' + 'atrix'] || _0x41fdcd['TEMP']['identity']()), this['_ikArr']) {
                    for (_0x17b8d6 = 0x0, _0x3a239d = this['_ikArr']['length']; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                        _0x5b8e9d = this['_ikArr'][_0x17b8d6], _0x3f02cc['hasOwnProp' + 'erty'](_0x5b8e9d['name']) && (_0x5b8e9d['bendDirect' + 'ion'] = _0x3f02cc[_0x5b8e9d['name']]), _0x8c343d['hasOwnProp' + 'erty'](_0x5b8e9d['name']) && (_0x5b8e9d['mix'] = _0x8c343d[_0x5b8e9d['name']]), _0x5b8e9d['apply']();
                }
                if (this['_pathDic']) {
                    for (var _0x4cb8c6 in this['_pathDic'])
                        (_0x17bbfd = this['_pathDic'][_0x4cb8c6])['apply'](this['_boneList'], _0x2b3e3f);
                }
                if (this['_tfArr']) {
                    for (_0x17b8d6 = 0x0, _0x27f0af = this['_tfArr']['length']; _0x17b8d6 < _0x27f0af; _0x17b8d6++)
                        this['_tfArr'][_0x17b8d6]['apply']();
                }
                for (_0x17b8d6 = 0x0, _0x27f0af = this['_boneList']['length']; _0x17b8d6 < _0x27f0af; _0x17b8d6++)
                    if (_0x553f0c = this['_boneList'][_0x17b8d6], _0x16a997 = this['_bindBoneB' + 'oneSlotDic'][_0x553f0c['name']], _0x553f0c['resultMatr' + 'ix']['copyTo'](this['_boneMatri' + 'xArray'][_0x17b8d6]), _0x16a997) {
                        for (_0x544924 = 0x0, _0x3a239d = _0x16a997['length']; _0x544924 < _0x3a239d; _0x544924++)
                            (_0xcdc383 = _0x16a997[_0x544924]) && _0xcdc383['setParentM' + 'atrix'](_0x553f0c['resultMatr' + 'ix']);
                    }
                var _0xb3d5bc, _0x219230, _0x25f0f6, _0x163988, _0x1985c6 = {}, _0x39edcb = this['_templet']['deformAniA' + 'rr'];
                if (_0x39edcb && _0x39edcb['length'] > 0x0) {
                    if (this['_lastAniCl' + 'ipIndex'] != this['_aniClipIn' + 'dex']) {
                        for (this['_lastAniCl' + 'ipIndex'] = this['_aniClipIn' + 'dex'], _0x17b8d6 = 0x0, _0x3a239d = this['_boneSlotA' + 'rray']['length']; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                            (_0xcdc383 = this['_boneSlotA' + 'rray'][_0x17b8d6])['deformData'] = null;
                    }
                    var _0x3672ad, _0x390447 = _0x39edcb[this['_aniClipIn' + 'dex']];
                    for (_0x3672ad in (_0xb3d5bc = _0x390447['default'], this['_setDeform'](_0xb3d5bc, _0x1985c6, this['_boneSlotA' + 'rray'], _0x4e8476), _0x390447))
                        'default' != _0x3672ad && _0x3672ad != this['_skinName'] && (_0xb3d5bc = _0x390447[_0x3672ad], this['_setDeform'](_0xb3d5bc, _0x1985c6, this['_boneSlotA' + 'rray'], _0x4e8476));
                    _0xb3d5bc = _0x390447[this['_skinName']], this['_setDeform'](_0xb3d5bc, _0x1985c6, this['_boneSlotA' + 'rray'], _0x4e8476);
                }
                if (this['_drawOrder']) {
                    for (_0x17b8d6 = 0x0, _0x3a239d = this['_drawOrder']['length']; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                        _0x219230 = _0xd341c2[(_0xcdc383 = this['_boneSlotA' + 'rray'][this['_drawOrder'][_0x17b8d6]])['name']], _0x25f0f6 = _0x533eea[_0xcdc383['name']], isNaN(_0x25f0f6), isNaN(_0x219230) || -0x2 == _0x219230 || (this['_templet']['attachment' + 'Names'] ? _0xcdc383['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x219230]) : _0xcdc383['showDispla' + 'yByIndex'](_0x219230)), _0x1985c6[this['_drawOrder'][_0x17b8d6]] ? (_0x163988 = _0x1985c6[this['_drawOrder'][_0x17b8d6]], _0xcdc383['currDispla' + 'yData'] && _0x163988[_0xcdc383['currDispla' + 'yData']['attachment' + 'Name']] ? _0xcdc383['deformData'] = _0x163988[_0xcdc383['currDispla' + 'yData']['attachment' + 'Name']] : _0xcdc383['deformData'] = null) : _0xcdc383['deformData'] = null, isNaN(_0x25f0f6) ? _0xcdc383['draw'](_0x2b3e3f, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0xcdc383['draw'](_0x2b3e3f, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x25f0f6), isNaN(_0x25f0f6);
                } else {
                    for (_0x17b8d6 = 0x0, _0x3a239d = this['_boneSlotA' + 'rray']['length']; _0x17b8d6 < _0x3a239d; _0x17b8d6++)
                        _0x219230 = _0xd341c2[(_0xcdc383 = this['_boneSlotA' + 'rray'][_0x17b8d6])['name']], _0x25f0f6 = _0x533eea[_0xcdc383['name']], isNaN(_0x25f0f6), isNaN(_0x219230) || -0x2 == _0x219230 || (this['_templet']['attachment' + 'Names'] ? _0xcdc383['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x219230]) : _0xcdc383['showDispla' + 'yByIndex'](_0x219230)), _0x1985c6[_0x17b8d6] ? (_0x163988 = _0x1985c6[_0x17b8d6], _0xcdc383['currDispla' + 'yData'] && _0x163988[_0xcdc383['currDispla' + 'yData']['attachment' + 'Name']] ? _0xcdc383['deformData'] = _0x163988[_0xcdc383['currDispla' + 'yData']['attachment' + 'Name']] : _0xcdc383['deformData'] = null) : _0xcdc383['deformData'] = null, isNaN(_0x25f0f6) ? _0xcdc383['draw'](_0x2b3e3f, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0xcdc383['draw'](_0x2b3e3f, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x25f0f6), isNaN(_0x25f0f6);
                }
                return 0x0 == this['_aniMode'] ? (this['_templet']['setGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], _0x5225e0, _0x2b3e3f), this['_checkIsAl' + 'lParsed'](this['_aniClipIn' + 'dex'])) : 0x1 == this['_aniMode'] && this['_setGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], _0x5225e0, _0x2b3e3f), _0x2b3e3f;
            }, _0x8beab7['_checkIsAl' + 'lParsed'] = function (_0x31f87d) {
                var _0x30d1b4, _0x274b9d = 0x0;
                for (_0x30d1b4 = Math['floor'](0.01 + this['_templet']['getAniDura' + 'tion'](_0x31f87d) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']), _0x274b9d = 0x0; _0x274b9d < _0x30d1b4; _0x274b9d++)
                    if (!this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x31f87d, _0x274b9d))
                        return;
                this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x31f87d, _0x30d1b4) ? this['_templet']['deleteAniD' + 'ata'](_0x31f87d) : this['_createGra' + 'phics'](_0x30d1b4);
            }, _0x8beab7['_setDeform'] = function (_0x1595c0, _0x47ada3, _0x4c5f91, _0x50e893) {
                if (_0x1595c0) {
                    var _0x233655, _0x28c921, _0x589d24, _0x4d4446 = 0x0, _0x4f0b23 = 0x0, _0x6edee0 = 0x0;
                    if (_0x1595c0) {
                        for (_0x4d4446 = 0x0, _0x4f0b23 = _0x1595c0['deformSlot' + 'DataList']['length']; _0x4d4446 < _0x4f0b23; _0x4d4446++)
                            for (_0x233655 = _0x1595c0['deformSlot' + 'DataList'][_0x4d4446], _0x6edee0 = 0x0; _0x6edee0 < _0x233655['deformSlot' + 'DisplayLis' + 't']['length']; _0x6edee0++)
                                _0x589d24 = _0x4c5f91[(_0x28c921 = _0x233655['deformSlot' + 'DisplayLis' + 't'][_0x6edee0])['slotIndex']], _0x28c921['apply'](_0x50e893, _0x589d24), _0x47ada3[_0x28c921['slotIndex']] || (_0x47ada3[_0x28c921['slotIndex']] = {}), _0x47ada3[_0x28c921['slotIndex']][_0x28c921['attachment']] = _0x28c921['deformData'];
                    }
                }
            }, _0x8beab7['getAnimNum'] = function () {
                return this['_templet']['getAnimati' + 'onCount']();
            }, _0x8beab7['getAniName' + 'ByIndex'] = function (_0x2b0203) {
                return this['_templet']['getAniName' + 'ByIndex'](_0x2b0203);
            }, _0x8beab7['getSlotByN' + 'ame'] = function (_0x5cdf8f) {
                return this['_boneSlotD' + 'ic'][_0x5cdf8f];
            }, _0x8beab7['showSkinBy' + 'Name'] = function (_0x489c5d, _0x59ef64) {
                void 0x0 === _0x59ef64 && (_0x59ef64 = !0x0), this['showSkinBy' + 'Index'](this['_templet']['getSkinInd' + 'exByName'](_0x489c5d), _0x59ef64);
            }, _0x8beab7['showSkinBy' + 'Index'] = function (_0x3e6aa9, _0x4e263d) {
                void 0x0 === _0x4e263d && (_0x4e263d = !0x0);
                for (var _0x8636d3 = 0x0; _0x8636d3 < this['_boneSlotA' + 'rray']['length']; _0x8636d3++)
                    this['_boneSlotA' + 'rray'][_0x8636d3]['showSlotDa' + 'ta'](null, _0x4e263d);
                if (this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], _0x3e6aa9, _0x4e263d)) {
                    var _0x1ca44e = this['_templet']['skinDataAr' + 'ray'][_0x3e6aa9];
                    this['_skinIndex'] = _0x3e6aa9, this['_skinName'] = _0x1ca44e['name'];
                }
                this['_clearCach' + 'e']();
            }, _0x8beab7['showSlotSk' + 'inByIndex'] = function (_0xda1d34, _0x1b841c) {
                if (0x0 != this['_aniMode']) {
                    var _0x2f189f = this['getSlotByN' + 'ame'](_0xda1d34);
                    _0x2f189f && _0x2f189f['showDispla' + 'yByIndex'](_0x1b841c), this['_clearCach' + 'e']();
                }
            }, _0x8beab7['showSlotSk' + 'inByName'] = function (_0x516fdb, _0x3203ae) {
                if (0x0 != this['_aniMode']) {
                    var _0x2ba027 = this['getSlotByN' + 'ame'](_0x516fdb);
                    _0x2ba027 && _0x2ba027['showDispla' + 'yByName'](_0x3203ae), this['_clearCach' + 'e']();
                }
            }, _0x8beab7['replaceSlo' + 'tSkinName'] = function (_0x402392, _0x13af9d, _0x125084) {
                if (0x0 != this['_aniMode']) {
                    var _0x353f45 = this['getSlotByN' + 'ame'](_0x402392);
                    _0x353f45 && _0x353f45['replaceDis' + 'playByName'](_0x13af9d, _0x125084), this['_clearCach' + 'e']();
                }
            }, _0x8beab7['replaceSlo' + 'tSkinByInd' + 'ex'] = function (_0x2b2bf1, _0x45e80c, _0x3f7e21) {
                if (0x0 != this['_aniMode']) {
                    var _0x36337d = this['getSlotByN' + 'ame'](_0x2b2bf1);
                    _0x36337d && _0x36337d['replaceDis' + 'playByInde' + 'x'](_0x45e80c, _0x3f7e21), this['_clearCach' + 'e']();
                }
            }, _0x8beab7['setSlotSki' + 'n'] = function (_0x17da01, _0x390c6a) {
                if (0x0 != this['_aniMode']) {
                    var _0x1b1668 = this['getSlotByN' + 'ame'](_0x17da01);
                    _0x1b1668 && _0x1b1668['replaceSki' + 'n'](_0x390c6a), this['_clearCach' + 'e']();
                }
            }, _0x8beab7['_clearCach' + 'e'] = function () {
                if (0x1 == this['_aniMode'])
                    for (var _0x4a85d3 = 0x0, _0x30183a = this['_graphicsC' + 'ache']['length']; _0x4a85d3 < _0x30183a; _0x4a85d3++) {
                        for (var _0x5995db = 0x0, _0xc8d887 = this['_graphicsC' + 'ache'][_0x4a85d3]['length']; _0x5995db < _0xc8d887; _0x5995db++) {
                            var _0x4c1086 = this['_graphicsC' + 'ache'][_0x4a85d3][_0x5995db];
                            _0x4c1086 && _0x4c1086 != this['graphics'] && _0x2a138b['recycle'](_0x4c1086);
                        }
                        this['_graphicsC' + 'ache'][_0x4a85d3]['length'] = 0x0;
                    }
            }, _0x8beab7['play'] = function (_0x40abe8, _0x10630f, _0xb457f3, _0x4ce8a7, _0x403a59, _0x46e50c, _0x149b4f) {
                void 0x0 === _0xb457f3 && (_0xb457f3 = !0x0), void 0x0 === _0x4ce8a7 && (_0x4ce8a7 = 0x0), void 0x0 === _0x403a59 && (_0x403a59 = 0x0), void 0x0 === _0x46e50c && (_0x46e50c = !0x0), void 0x0 === _0x149b4f && (_0x149b4f = !0x0), this['_playAudio'] = _0x149b4f, this['_indexCont' + 'rol'] = !0x1;
                var _0x30dadb = -0x1, _0x159f2c = NaN;
                if (_0x159f2c = _0x10630f ? 0x7fffffff : 0x0, 'string' == typeof _0x40abe8)
                    for (var _0x3c1de6 = 0x0, _0x24cfd3 = this['_templet']['getAnimati' + 'onCount'](); _0x3c1de6 < _0x24cfd3; _0x3c1de6++) {
                        var _0x253aa3 = this['_templet']['getAnimati' + 'on'](_0x3c1de6);
                        if (_0x253aa3 && _0x40abe8 == _0x253aa3['name']) {
                            _0x30dadb = _0x3c1de6;
                            break;
                        }
                    }
                else
                    _0x30dadb = _0x40abe8;
                _0x30dadb > -0x1 && _0x30dadb < this['getAnimNum']() && (this['_aniClipIn' + 'dex'] = _0x30dadb, (_0xb457f3 || this['_pause'] || this['_currAniIn' + 'dex'] != _0x30dadb) && (this['_currAniIn' + 'dex'] = _0x30dadb, this['_curOrigin' + 'alData'] = new Float32Array(this['_templet']['getTotalke' + 'yframesLen' + 'gth'](_0x30dadb)), this['_drawOrder'] = null, this['_eventInde' + 'x'] = 0x0, this['_player']['play'](_0x30dadb, this['_player']['playbackRa' + 'te'], _0x159f2c, _0x4ce8a7, _0x403a59), _0x46e50c && this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], this['_skinIndex']), this['_pause'] && (this['_pause'] = !0x1, this['_lastTime'] = _0x4ffdb6['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0)), this['_update']()));
            }, _0x8beab7['stop'] = function () {
                this['_pause'] || (this['_pause'] = !0x0, this['_player'] && this['_player']['stop'](!0x0), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0), this['timer']['clear'](this, this['_update']));
            }, _0x8beab7['playbackRa' + 'te'] = function (_0x389608) {
                this['_player'] && (this['_player']['playbackRa' + 'te'] = _0x389608);
            }, _0x8beab7['paused'] = function () {
                if (!this['_pause']) {
                    if (this['_pause'] = !0x0, this['_player'] && (this['_player']['paused'] = !0x0), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                        for (var _0xdb88ec, _0x20de1c = this['_soundChan' + 'nelArr']['length'], _0x4f9036 = 0x0; _0x4f9036 < _0x20de1c; _0x4f9036++)
                            (_0xdb88ec = this['_soundChan' + 'nelArr'][_0x4f9036])['isStopped'] || _0xdb88ec['pause']();
                    }
                    this['timer']['clear'](this, this['_update']);
                }
            }, _0x8beab7['resume'] = function () {
                if (this['_indexCont' + 'rol'] = !0x1, this['_pause']) {
                    if (this['_pause'] = !0x1, this['_player'] && (this['_player']['paused'] = !0x1), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                        for (var _0xce3501, _0x2ce538 = this['_soundChan' + 'nelArr']['length'], _0x2e7ec6 = 0x0; _0x2e7ec6 < _0x2ce538; _0x2e7ec6++)
                            (_0xce3501 = this['_soundChan' + 'nelArr'][_0x2e7ec6])['audioBuffe' + 'r'] && _0xce3501['resume']();
                    }
                    this['_lastTime'] = _0x4ffdb6['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0);
                }
            }, _0x8beab7['_getGrahic' + 'sDataWithC' + 'ache'] = function (_0x2b2413, _0x2dc7ff) {
                return this['_graphicsC' + 'ache'][_0x2b2413][_0x2dc7ff];
            }, _0x8beab7['_setGrahic' + 'sDataWithC' + 'ache'] = function (_0x2a42f6, _0x40e4f0, _0x9cceff) {
                this['_graphicsC' + 'ache'][_0x2a42f6][_0x40e4f0] = _0x9cceff;
            }, _0x8beab7['destroy'] = function (_0xf4c22b) {
                void 0x0 === _0xf4c22b && (_0xf4c22b = !0x0), _0x124b90['prototype']['destroy']['call'](this, _0xf4c22b), this['_templet']['_removeRef' + 'erence'](0x1), this['_templet'] = null, this['_player'] && this['_player']['offAll'](), this['_player'] = null, this['_curOrigin' + 'alData'] = null, this['_boneMatri' + 'xArray']['length'] = 0x0, this['_lastTime'] = 0x0, this['timer']['clear'](this, this['_update']), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0);
            }, _0x17c821(0x0, _0x8beab7, 'url', function () {
                return this['_aniPath'];
            }, function (_0x3fffb0) {
                this['load'](_0x3fffb0);
            }), _0x17c821(0x0, _0x8beab7, 'index', function () {
                return this['_index'];
            }, function (_0x12f653) {
                this['player'] && (this['_index'] = _0x12f653, this['_player']['currentTim' + 'e'] = 0x3e8 * this['_index'] / this['_player']['cacheFrame' + 'Rate'], this['_indexCont' + 'rol'] = !0x0, this['_update'](!0x1));
            }), _0x17c821(0x0, _0x8beab7, 'total', function () {
                return this['_templet'] && this['_player'] ? this['_total'] = Math['floor'](this['_templet']['getAniDura' + 'tion'](this['_player']['currentAni' + 'mationClip' + 'Index']) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']) : this['_total'] = -0x1, this['_total'];
            }), _0x17c821(0x0, _0x8beab7, 'templet', function () {
                return this['_templet'];
            }), _0x17c821(0x0, _0x8beab7, 'player', function () {
                return this['_player'];
            }), _0x1c45b7['useSimpleM' + 'eshInCanva' + 's'] = !0x1, _0x1c45b7;
        }(_0x4efbbe)), _0xf1b5e7 = function (_0x3c0452) {
            function _0x6ae2c9() {
                this['_mainTextu' + 're'] = null, this['_textureJs' + 'on'] = null, this['_graphicsC' + 'ache'] = [], this['srcBoneMat' + 'rixArr'] = [], this['ikArr'] = [], this['tfArr'] = [], this['pathArr'] = [], this['boneSlotDi' + 'c'] = {}, this['bindBoneBo' + 'neSlotDic'] = {}, this['boneSlotAr' + 'ray'] = [], this['skinDataAr' + 'ray'] = [], this['skinDic'] = {}, this['subTexture' + 'Dic'] = {}, this['isParseFai' + 'l'] = !0x1, this['yReverseMa' + 'trix'] = null, this['drawOrderA' + 'niArr'] = [], this['eventAniAr' + 'r'] = [], this['attachment' + 'Names'] = null, this['deformAniA' + 'rr'] = [], this['_isParseAu' + 'dio'] = !0x1, this['_isDestroy' + 'ed'] = !0x1, this['_rate'] = 0x1e, this['isParserCo' + 'mplete'] = !0x1, this['aniSection' + 'Dic'] = {}, this['_skBufferU' + 'rl'] = null, this['_textureDi' + 'c'] = {}, this['_loadList'] = null, this['_path'] = null, this['_relativeU' + 'rl'] = null, this['tMatrixDat' + 'aLen'] = 0x0, this['mRootBone'] = null, _0x6ae2c9['__super']['call'](this), this['skinSlotDi' + 'splayDataA' + 'rr'] = [], this['mBoneArr'] = [];
            }
            _0x1df06c(_0x6ae2c9, 'laya.ani.b' + 'one.Temple' + 't', _0x3c0452);
            var _0x3383f0 = _0x6ae2c9['prototype'];
            return _0x3383f0['loadAni'] = function (_0x586e58) {
                this['_skBufferU' + 'rl'] = _0x586e58, _0x21b72c['loader']['load'](_0x586e58, _0x1def60['create'](this, this['onComplete']), null, 'arraybuffe' + 'r');
            }, _0x3383f0['onComplete'] = function (_0x225e8f) {
                if (this['_isDestroy' + 'ed'])
                    this['destroy']();
                else {
                    var _0x1dcc2b = _0x2aa6df['getRes'](this['_skBufferU' + 'rl']);
                    _0x1dcc2b ? (this['_path'] = this['_skBufferU' + 'rl']['slice'](0x0, this['_skBufferU' + 'rl']['lastIndexO' + 'f']('/')) + '/', this['parseData'](null, _0x1dcc2b)) : this['event']('error', 'load\x20faile' + 'd:' + this['_skBufferU' + 'rl']);
                }
            }, _0x3383f0['parseData'] = function (_0xe28e71, _0x2525f1, _0x5120c3) {
                if (void 0x0 === _0x5120c3 && (_0x5120c3 = 0x1e), !this['_path']) {
                    var _0x180ebe = this['_relativeU' + 'rl'] || this['url'];
                    if (_0x180ebe) {
                        var _0x9b697f = _0x180ebe['lastIndexO' + 'f']('/');
                        this['_path'] = _0x9b697f > 0x0 ? _0x180ebe['slice'](0x0, _0x9b697f) + '/' : '';
                    }
                }
                this['_mainTextu' + 're'] = _0xe28e71, this['_rate'] = _0x5120c3, this['parse'](_0x2525f1);
            }, _0x3383f0['buildArmat' + 'ure'] = function (_0x260865) {
                return void 0x0 === _0x260865 && (_0x260865 = 0x0), new _0x143623(this, _0x260865);
            }, _0x3383f0['parse'] = function (_0x55adf7) {
                _0x3c0452['prototype']['parse']['call'](this, _0x55adf7), this['event']('loaded', this), this['_aniVersio' + 'n'] === _0x6ae2c9['LAYA_ANIMA' + 'TION_VISIO' + 'N'] ? this['_isParseAu' + 'dio'] = !0x0 : this['_aniVersio' + 'n'] != _0x6ae2c9['LAYA_ANIMA' + 'TION_160_V' + 'ISION'] && console['log']('[Error]\x20版本' + '不一致，请使用IDE' + '版本配套的重新导出' + this['_aniVersio' + 'n'] + '->' + _0x6ae2c9['LAYA_ANIMA' + 'TION_VISIO' + 'N']), this['_mainTextu' + 're'] ? this['_parsePubl' + 'icExtData']() : this['_parseText' + 'urePath']();
            }, _0x3383f0['_parseText' + 'urePath'] = function () {
                if (this['_isDestroy' + 'ed'])
                    this['destroy']();
                else {
                    var _0x944a39 = 0x0;
                    this['_loadList'] = [];
                    var _0x4c7bb3, _0x18afe6 = new _0x2a0ff4(this['getPublicE' + 'xtData']()), _0x4d4dbe = 0x0, _0x390edb = 0x0, _0x34e5f0 = 0x0, _0x4588a4 = _0x18afe6['getInt32'](), _0x49d731 = _0x18afe6['readUTFStr' + 'ing'](), _0x37d528 = _0x49d731['split']('\x0a');
                    for (_0x944a39 = 0x0; _0x944a39 < _0x4588a4; _0x944a39++)
                        _0x4c7bb3 = this['_path'] + _0x37d528[0x2 * _0x944a39], _0x49d731 = _0x37d528[0x2 * _0x944a39 + 0x1], _0x18afe6['getFloat32'](), _0x18afe6['getFloat32'](), _0x4d4dbe = _0x18afe6['getFloat32'](), _0x390edb = _0x18afe6['getFloat32'](), _0x34e5f0 = _0x18afe6['getFloat32'](), isNaN(_0x34e5f0) ? 0x0 : _0x34e5f0, _0x34e5f0 = _0x18afe6['getFloat32'](), isNaN(_0x34e5f0) ? 0x0 : _0x34e5f0, _0x34e5f0 = _0x18afe6['getFloat32'](), isNaN(_0x34e5f0) ? _0x4d4dbe : _0x34e5f0, _0x34e5f0 = _0x18afe6['getFloat32'](), isNaN(_0x34e5f0) ? _0x390edb : _0x34e5f0, -0x1 == this['_loadList']['indexOf'](_0x4c7bb3) && this['_loadList']['push'](_0x4c7bb3);
                    _0x21b72c['loader']['load'](this['_loadList'], _0x1def60['create'](this, this['_textureCo' + 'mplete']));
                }
            }, _0x3383f0['_textureCo' + 'mplete'] = function () {
                for (var _0xf8df1e, _0x33755a = 0x0, _0x524d3d = this['_loadList']['length']; _0x33755a < _0x524d3d; _0x33755a++)
                    _0xf8df1e = this['_loadList'][_0x33755a], this['_textureDi' + 'c'][_0xf8df1e] = _0x2aa6df['getRes'](_0xf8df1e);
                this['_parsePubl' + 'icExtData']();
            }, _0x3383f0['_parsePubl' + 'icExtData'] = function () {
                var _0x4ef1c7 = 0x0, _0xd62e46 = 0x0, _0x51368a = 0x0, _0x380c4a = 0x0, _0x4c58bd = 0x0;
                for (_0x4ef1c7 = 0x0, _0x4c58bd = this['getAnimati' + 'onCount'](); _0x4ef1c7 < _0x4c58bd; _0x4ef1c7++)
                    this['_graphicsC' + 'ache']['push']([]);
                var _0x18bc03;
                _0x18bc03 = 'Dragon' != this['_aniClassN' + 'ame'];
                var _0x36a593, _0x26cb8b, _0x4e336f = new _0x2a0ff4(this['getPublicE' + 'xtData']()), _0x2494fd = 0x0, _0x43bf67 = 0x0, _0x28e6c2 = 0x0, _0x2fff2f = 0x0, _0x329e95 = 0x0, _0x3a0f80 = 0x0, _0x161046 = 0x0, _0x93c4fa = 0x0, _0x407f87 = 0x0, _0x1b5b98 = _0x4e336f['getInt32'](), _0x2c8b9e = _0x4e336f['readUTFStr' + 'ing'](), _0x4ef8fa = _0x2c8b9e['split']('\x0a');
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x1b5b98; _0x4ef1c7++) {
                    if (_0x36a593 = this['_mainTextu' + 're'], _0x26cb8b = this['_path'] + _0x4ef8fa[0x2 * _0x4ef1c7], _0x2c8b9e = _0x4ef8fa[0x2 * _0x4ef1c7 + 0x1], null == this['_mainTextu' + 're'] && (_0x36a593 = this['_textureDi' + 'c'][_0x26cb8b]), !_0x36a593)
                        return this['event']('error', this), void (this['isParseFai' + 'l'] = !0x0);
                    _0x2494fd = _0x4e336f['getFloat32'](), _0x43bf67 = _0x4e336f['getFloat32'](), _0x28e6c2 = _0x4e336f['getFloat32'](), _0x2fff2f = _0x4e336f['getFloat32'](), _0x407f87 = _0x4e336f['getFloat32'](), _0x329e95 = isNaN(_0x407f87) ? 0x0 : _0x407f87, _0x407f87 = _0x4e336f['getFloat32'](), _0x3a0f80 = isNaN(_0x407f87) ? 0x0 : _0x407f87, _0x407f87 = _0x4e336f['getFloat32'](), _0x161046 = isNaN(_0x407f87) ? _0x28e6c2 : _0x407f87, _0x407f87 = _0x4e336f['getFloat32'](), _0x93c4fa = isNaN(_0x407f87) ? _0x2fff2f : _0x407f87, this['subTexture' + 'Dic'][_0x2c8b9e] = _0x5bdfad['create'](_0x36a593, _0x2494fd, _0x43bf67, _0x28e6c2, _0x2fff2f, -_0x329e95, -_0x3a0f80, _0x161046, _0x93c4fa);
                }
                this['_mainTextu' + 're'] = _0x36a593;
                var _0x24f098, _0x3a3271, _0x42e4fe, _0x362010, _0x2c5d0b, _0x4ea88d = _0x4e336f['getUint16']();
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x4ea88d; _0x4ef1c7++)
                    (_0x24f098 = [])['push'](_0x4e336f['getUint16']()), _0x24f098['push'](_0x4e336f['getUint16']()), _0x24f098['push'](_0x4e336f['getUint16']()), _0x24f098['push'](_0x4e336f['getUint16']()), this['aniSection' + 'Dic'][_0x4ef1c7] = _0x24f098;
                var _0x471890, _0x3e0e29 = _0x4e336f['getInt16'](), _0x2f6a86 = {};
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x3e0e29; _0x4ef1c7++)
                    _0x3a3271 = new _0x5874e2(), 0x0 == _0x4ef1c7 ? _0x471890 = _0x3a3271 : _0x3a3271['root'] = _0x471890, _0x3a3271['d'] = _0x18bc03 ? -0x1 : 0x1, _0x362010 = _0x4e336f['readUTFStr' + 'ing'](), _0x2c5d0b = _0x4e336f['readUTFStr' + 'ing'](), _0x3a3271['length'] = _0x4e336f['getFloat32'](), 0x1 == _0x4e336f['getByte']() && (_0x3a3271['inheritRot' + 'ation'] = !0x1), 0x1 == _0x4e336f['getByte']() && (_0x3a3271['inheritSca' + 'le'] = !0x1), _0x3a3271['name'] = _0x362010, _0x2c5d0b && ((_0x42e4fe = _0x2f6a86[_0x2c5d0b]) ? _0x42e4fe['addChild'](_0x3a3271) : this['mRootBone'] = _0x3a3271), _0x2f6a86[_0x362010] = _0x3a3271, this['mBoneArr']['push'](_0x3a3271);
                this['tMatrixDat' + 'aLen'] = _0x4e336f['getUint16']();
                var _0x4ef16a, _0x418219, _0x46d4b2 = _0x4e336f['getUint16'](), _0x37860d = Math['floor'](_0x46d4b2 / this['tMatrixDat' + 'aLen']), _0x109a41 = this['srcBoneMat' + 'rixArr'];
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x37860d; _0x4ef1c7++)
                    (_0x4ef16a = new _0x26082d())['scX'] = _0x4e336f['getFloat32'](), _0x4ef16a['skX'] = _0x4e336f['getFloat32'](), _0x4ef16a['skY'] = _0x4e336f['getFloat32'](), _0x4ef16a['scY'] = _0x4e336f['getFloat32'](), _0x4ef16a['x'] = _0x4e336f['getFloat32'](), _0x4ef16a['y'] = _0x4e336f['getFloat32'](), 0x8 === this['tMatrixDat' + 'aLen'] && (_0x4ef16a['skewX'] = _0x4e336f['getFloat32'](), _0x4ef16a['skewY'] = _0x4e336f['getFloat32']()), _0x109a41['push'](_0x4ef16a), (_0x3a3271 = this['mBoneArr'][_0x4ef1c7])['transform'] = _0x4ef16a;
                var _0x409ce2, _0x559ed2 = _0x4e336f['getUint16'](), _0x41a0f7 = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x559ed2; _0x4ef1c7++) {
                    for (_0x418219 = new _0x3fb2e7(), _0x41a0f7 = _0x4e336f['getUint16'](), _0xd62e46 = 0x0; _0xd62e46 < _0x41a0f7; _0xd62e46++)
                        _0x418219['boneNames']['push'](_0x4e336f['readUTFStr' + 'ing']()), _0x418219['boneIndexs']['push'](_0x4e336f['getInt16']());
                    _0x418219['name'] = _0x4e336f['readUTFStr' + 'ing'](), _0x418219['targetBone' + 'Name'] = _0x4e336f['readUTFStr' + 'ing'](), _0x418219['targetBone' + 'Index'] = _0x4e336f['getInt16'](), _0x418219['bendDirect' + 'ion'] = _0x4e336f['getFloat32'](), _0x418219['mix'] = _0x4e336f['getFloat32'](), _0x418219['isSpine'] = _0x18bc03, this['ikArr']['push'](_0x418219);
                }
                var _0x52a4f4, _0x33e85e = _0x4e336f['getUint16'](), _0x1508d3 = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x33e85e; _0x4ef1c7++) {
                    for (_0x409ce2 = new _0x2b74a9(), _0x1508d3 = _0x4e336f['getUint16'](), _0xd62e46 = 0x0; _0xd62e46 < _0x1508d3; _0xd62e46++)
                        _0x409ce2['boneIndexs']['push'](_0x4e336f['getInt16']());
                    _0x409ce2['name'] = _0x4e336f['getUTFStri' + 'ng'](), _0x409ce2['targetInde' + 'x'] = _0x4e336f['getInt16'](), _0x409ce2['rotateMix'] = _0x4e336f['getFloat32'](), _0x409ce2['translateM' + 'ix'] = _0x4e336f['getFloat32'](), _0x409ce2['scaleMix'] = _0x4e336f['getFloat32'](), _0x409ce2['shearMix'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetRota' + 'tion'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetX'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetY'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetScal' + 'eX'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetScal' + 'eY'] = _0x4e336f['getFloat32'](), _0x409ce2['offsetShea' + 'rY'] = _0x4e336f['getFloat32'](), this['tfArr']['push'](_0x409ce2);
                }
                var _0x7a53f7 = _0x4e336f['getUint16'](), _0x2cdbd1 = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x7a53f7; _0x4ef1c7++) {
                    for ((_0x52a4f4 = new _0x8036c7())['name'] = _0x4e336f['readUTFStr' + 'ing'](), _0x2cdbd1 = _0x4e336f['getUint16'](), _0xd62e46 = 0x0; _0xd62e46 < _0x2cdbd1; _0xd62e46++)
                        _0x52a4f4['bones']['push'](_0x4e336f['getInt16']());
                    _0x52a4f4['target'] = _0x4e336f['readUTFStr' + 'ing'](), _0x52a4f4['positionMo' + 'de'] = _0x4e336f['readUTFStr' + 'ing'](), _0x52a4f4['spacingMod' + 'e'] = _0x4e336f['readUTFStr' + 'ing'](), _0x52a4f4['rotateMode'] = _0x4e336f['readUTFStr' + 'ing'](), _0x52a4f4['offsetRota' + 'tion'] = _0x4e336f['getFloat32'](), _0x52a4f4['position'] = _0x4e336f['getFloat32'](), _0x52a4f4['spacing'] = _0x4e336f['getFloat32'](), _0x52a4f4['rotateMix'] = _0x4e336f['getFloat32'](), _0x52a4f4['translateM' + 'ix'] = _0x4e336f['getFloat32'](), this['pathArr']['push'](_0x52a4f4);
                }
                var _0x1eb4e6, _0x2ddd7a, _0x32215b, _0x3f2d47, _0x40455d, _0xe8b0e = 0x0, _0x321eff = 0x0, _0x422cfb = 0x0, _0x1d80a9 = NaN, _0x484294 = 0x0, _0x1c2a2 = _0x4e336f['getInt16']();
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x1c2a2; _0x4ef1c7++) {
                    var _0x1469d3 = _0x4e336f['getUint8'](), _0x588f83 = {};
                    this['deformAniA' + 'rr']['push'](_0x588f83);
                    for (var _0x4533a7 = 0x0; _0x4533a7 < _0x1469d3; _0x4533a7++)
                        for ((_0x1eb4e6 = new _0x1289c0())['skinName'] = _0x4e336f['getUTFStri' + 'ng'](), _0x588f83[_0x1eb4e6['skinName']] = _0x1eb4e6, _0xe8b0e = _0x4e336f['getInt16'](), _0xd62e46 = 0x0; _0xd62e46 < _0xe8b0e; _0xd62e46++)
                            for (_0x2ddd7a = new _0x422223(), _0x1eb4e6['deformSlot' + 'DataList']['push'](_0x2ddd7a), _0x321eff = _0x4e336f['getInt16'](), _0x51368a = 0x0; _0x51368a < _0x321eff; _0x51368a++)
                                for (_0x32215b = new _0x1aa0d0(), _0x2ddd7a['deformSlot' + 'DisplayLis' + 't']['push'](_0x32215b), _0x32215b['slotIndex'] = _0x4e336f['getInt16'](), _0x32215b['attachment'] = _0x4e336f['getUTFStri' + 'ng'](), _0x422cfb = _0x4e336f['getInt16'](), _0x380c4a = 0x0; _0x380c4a < _0x422cfb; _0x380c4a++)
                                    for (0x1 == _0x4e336f['getByte']() ? _0x32215b['tweenKeyLi' + 'st']['push'](!0x0) : _0x32215b['tweenKeyLi' + 'st']['push'](!0x1), _0x1d80a9 = _0x4e336f['getFloat32'](), _0x32215b['timeList']['push'](_0x1d80a9), _0x3f2d47 = [], _0x32215b['vectices']['push'](_0x3f2d47), _0x484294 = _0x4e336f['getInt16'](), _0x4c58bd = 0x0; _0x4c58bd < _0x484294; _0x4c58bd++)
                                        _0x3f2d47['push'](_0x4e336f['getFloat32']());
                }
                var _0x4e52fd, _0x18af3a, _0x2df8d9 = _0x4e336f['getInt16'](), _0x453eb2 = 0x0, _0xe779ef = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x2df8d9; _0x4ef1c7++) {
                    for (_0x453eb2 = _0x4e336f['getInt16'](), _0x40455d = [], _0xd62e46 = 0x0; _0xd62e46 < _0x453eb2; _0xd62e46++) {
                        for ((_0x4e52fd = new _0x880ee0())['time'] = _0x4e336f['getFloat32'](), _0xe779ef = _0x4e336f['getInt16'](), _0x51368a = 0x0; _0x51368a < _0xe779ef; _0x51368a++)
                            _0x4e52fd['drawOrder']['push'](_0x4e336f['getInt16']());
                        _0x40455d['push'](_0x4e52fd);
                    }
                    this['drawOrderA' + 'niArr']['push'](_0x40455d);
                }
                var _0x3f7520, _0x5ba5a6 = _0x4e336f['getInt16'](), _0x19271b = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x5ba5a6; _0x4ef1c7++) {
                    for (_0x19271b = _0x4e336f['getInt16'](), _0x18af3a = [], _0xd62e46 = 0x0; _0xd62e46 < _0x19271b; _0xd62e46++)
                        (_0x3f7520 = new _0x9cf4d2())['name'] = _0x4e336f['getUTFStri' + 'ng'](), this['_isParseAu' + 'dio'] && (_0x3f7520['audioValue'] = _0x4e336f['getUTFStri' + 'ng']()), _0x3f7520['intValue'] = _0x4e336f['getInt32'](), _0x3f7520['floatValue'] = _0x4e336f['getFloat32'](), _0x3f7520['stringValu' + 'e'] = _0x4e336f['getUTFStri' + 'ng'](), _0x3f7520['time'] = _0x4e336f['getFloat32'](), _0x18af3a['push'](_0x3f7520);
                    this['eventAniAr' + 'r']['push'](_0x18af3a);
                }
                var _0x5c0b7f = _0x4e336f['getInt16']();
                if (_0x5c0b7f > 0x0) {
                    for (this['attachment' + 'Names'] = [], _0x4ef1c7 = 0x0; _0x4ef1c7 < _0x5c0b7f; _0x4ef1c7++)
                        this['attachment' + 'Names']['push'](_0x4e336f['getUTFStri' + 'ng']());
                }
                var _0x36cb44, _0x316554, _0x17195a = _0x4e336f['getInt16']();
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x17195a; _0x4ef1c7++)
                    (_0x36cb44 = new _0x3a056e())['name'] = _0x4e336f['readUTFStr' + 'ing'](), _0x36cb44['parent'] = _0x4e336f['readUTFStr' + 'ing'](), _0x36cb44['attachment' + 'Name'] = _0x4e336f['readUTFStr' + 'ing'](), _0x36cb44['srcDisplay' + 'Index'] = _0x36cb44['displayInd' + 'ex'] = _0x4e336f['getInt16'](), _0x36cb44['templet'] = this, this['boneSlotDi' + 'c'][_0x36cb44['name']] = _0x36cb44, null == (_0x316554 = this['bindBoneBo' + 'neSlotDic'][_0x36cb44['parent']]) && (this['bindBoneBo' + 'neSlotDic'][_0x36cb44['parent']] = _0x316554 = []), _0x316554['push'](_0x36cb44), this['boneSlotAr' + 'ray']['push'](_0x36cb44);
                var _0x2d95e0, _0x19a209, _0x4a08be, _0x4e1634 = _0x4e336f['readUTFStr' + 'ing']()['split']('\x0a'), _0x147853 = 0x0, _0x319ade = _0x4e336f['getUint8'](), _0x2c0b54 = 0x0, _0x4a09bd = 0x0, _0x201405 = 0x0, _0x2ae861 = 0x0, _0x180d40 = 0x0, _0x26193a = 0x0, _0xb19a20 = 0x0;
                for (_0x4ef1c7 = 0x0; _0x4ef1c7 < _0x319ade; _0x4ef1c7++) {
                    for ((_0x2d95e0 = new _0x228e08())['name'] = _0x4e1634[_0x147853++], _0x2c0b54 = _0x4e336f['getUint8'](), _0xd62e46 = 0x0; _0xd62e46 < _0x2c0b54; _0xd62e46++) {
                        for ((_0x19a209 = new _0x5a4317())['name'] = _0x4e1634[_0x147853++], _0x36cb44 = this['boneSlotDi' + 'c'][_0x19a209['name']], _0x4a09bd = _0x4e336f['getUint8'](), _0x51368a = 0x0; _0x51368a < _0x4a09bd; _0x51368a++) {
                            if (_0x4a08be = new _0x2b77f3(), this['skinSlotDi' + 'splayDataA' + 'rr']['push'](_0x4a08be), _0x4a08be['name'] = _0x4e1634[_0x147853++], _0x4a08be['attachment' + 'Name'] = _0x4e1634[_0x147853++], _0x4a08be['transform'] = new _0x26082d(), _0x4a08be['transform']['scX'] = _0x4e336f['getFloat32'](), _0x4a08be['transform']['skX'] = _0x4e336f['getFloat32'](), _0x4a08be['transform']['skY'] = _0x4e336f['getFloat32'](), _0x4a08be['transform']['scY'] = _0x4e336f['getFloat32'](), _0x4a08be['transform']['x'] = _0x4e336f['getFloat32'](), _0x4a08be['transform']['y'] = _0x4e336f['getFloat32'](), _0x19a209['displayArr']['push'](_0x4a08be), _0x4a08be['width'] = _0x4e336f['getFloat32'](), _0x4a08be['height'] = _0x4e336f['getFloat32'](), _0x4a08be['type'] = _0x4e336f['getUint8'](), _0x4a08be['verLen'] = _0x4e336f['getUint16'](), (_0x3e0e29 = _0x4e336f['getUint16']()) > 0x0)
                                for (_0x4a08be['bones'] = [], _0x380c4a = 0x0; _0x380c4a < _0x3e0e29; _0x380c4a++) {
                                    var _0x4814b0 = _0x4e336f['getUint16']();
                                    _0x4a08be['bones']['push'](_0x4814b0);
                                }
                            if ((_0x201405 = _0x4e336f['getUint16']()) > 0x0) {
                                for (_0x4a08be['uvs'] = [], _0x380c4a = 0x0; _0x380c4a < _0x201405; _0x380c4a++)
                                    _0x4a08be['uvs']['push'](_0x4e336f['getFloat32']());
                            }
                            if ((_0x2ae861 = _0x4e336f['getUint16']()) > 0x0) {
                                for (_0x4a08be['weights'] = [], _0x380c4a = 0x0; _0x380c4a < _0x2ae861; _0x380c4a++)
                                    _0x4a08be['weights']['push'](_0x4e336f['getFloat32']());
                            }
                            if ((_0x180d40 = _0x4e336f['getUint16']()) > 0x0) {
                                for (_0x4a08be['triangles'] = [], _0x380c4a = 0x0; _0x380c4a < _0x180d40; _0x380c4a++)
                                    _0x4a08be['triangles']['push'](_0x4e336f['getUint16']());
                            }
                            if ((_0x26193a = _0x4e336f['getUint16']()) > 0x0) {
                                for (_0x4a08be['vertices'] = [], _0x380c4a = 0x0; _0x380c4a < _0x26193a; _0x380c4a++)
                                    _0x4a08be['vertices']['push'](_0x4e336f['getFloat32']());
                            }
                            if ((_0xb19a20 = _0x4e336f['getUint16']()) > 0x0) {
                                for (_0x4a08be['lengths'] = [], _0x380c4a = 0x0; _0x380c4a < _0xb19a20; _0x380c4a++)
                                    _0x4a08be['lengths']['push'](_0x4e336f['getFloat32']());
                            }
                        }
                        _0x2d95e0['slotArr']['push'](_0x19a209);
                    }
                    this['skinDic'][_0x2d95e0['name']] = _0x2d95e0, this['skinDataAr' + 'ray']['push'](_0x2d95e0);
                }
                0x1 == _0x4e336f['getUint8']() ? (this['yReverseMa' + 'trix'] = new _0x41fdcd(0x1, 0x0, 0x0, -0x1, 0x0, 0x0), _0x471890 && _0x471890['setTempMat' + 'rix'](this['yReverseMa' + 'trix'])) : _0x471890 && _0x471890['setTempMat' + 'rix'](new _0x41fdcd()), this['showSkinBy' + 'Index'](this['boneSlotDi' + 'c'], 0x0), this['isParserCo' + 'mplete'] = !0x0, this['event']('complete', this);
            }, _0x3383f0['getTexture'] = function (_0x30ea05) {
                var _0x4095b4 = this['subTexture' + 'Dic'][_0x30ea05];
                return _0x4095b4 || (_0x4095b4 = this['subTexture' + 'Dic'][_0x30ea05['substr'](0x0, _0x30ea05['length'] - 0x1)]), null == _0x4095b4 ? this['_mainTextu' + 're'] : _0x4095b4;
            }, _0x3383f0['showSkinBy' + 'Index'] = function (_0x5ea5c4, _0x50eed3, _0x2c7176) {
                if (void 0x0 === _0x2c7176 && (_0x2c7176 = !0x0), _0x50eed3 < 0x0 && _0x50eed3 >= this['skinDataAr' + 'ray']['length'])
                    return !0x1;
                var _0x3a6040, _0x591f1e, _0x46e6e4 = 0x0, _0x340474 = 0x0, _0x244d8f = this['skinDataAr' + 'ray'][_0x50eed3];
                if (_0x244d8f) {
                    for (_0x46e6e4 = 0x0, _0x340474 = _0x244d8f['slotArr']['length']; _0x46e6e4 < _0x340474; _0x46e6e4++)
                        (_0x591f1e = _0x244d8f['slotArr'][_0x46e6e4]) && (_0x3a6040 = _0x5ea5c4[_0x591f1e['name']]) && (_0x3a6040['showSlotDa' + 'ta'](_0x591f1e, _0x2c7176), _0x2c7176 && 'undefined' != _0x3a6040['attachment' + 'Name'] && 'null' != _0x3a6040['attachment' + 'Name'] ? _0x3a6040['showDispla' + 'yByName'](_0x3a6040['attachment' + 'Name']) : _0x3a6040['showDispla' + 'yByIndex'](_0x3a6040['displayInd' + 'ex']));
                    return !0x0;
                }
                return !0x1;
            }, _0x3383f0['getSkinInd' + 'exByName'] = function (_0x568f7e) {
                for (var _0x31c601 = 0x0, _0x2a78a1 = this['skinDataAr' + 'ray']['length']; _0x31c601 < _0x2a78a1; _0x31c601++)
                    if (this['skinDataAr' + 'ray'][_0x31c601]['name'] == _0x568f7e)
                        return _0x31c601;
                return -0x1;
            }, _0x3383f0['getGrahics' + 'DataWithCa' + 'che'] = function (_0x422b26, _0xc86533) {
                return this['_graphicsC' + 'ache'][_0x422b26] && this['_graphicsC' + 'ache'][_0x422b26][_0xc86533] ? this['_graphicsC' + 'ache'][_0x422b26][_0xc86533] : null;
            }, _0x3383f0['_setCreate' + 'URL'] = function (_0x536073) {
                this['_relativeU' + 'rl'] = _0x536073, laya['resource']['Resource']['prototype']['_setCreate' + 'URL']['call'](this, _0x536073);
            }, _0x3383f0['setGrahics' + 'DataWithCa' + 'che'] = function (_0x5f3fb7, _0x3c1a55, _0x135590) {
                this['_graphicsC' + 'ache'][_0x5f3fb7][_0x3c1a55] = _0x135590;
            }, _0x3383f0['deleteAniD' + 'ata'] = function (_0x35d3a6) {
                if (this['_anis'][_0x35d3a6]) {
                    var _0x255790 = this['_anis'][_0x35d3a6];
                    _0x255790['bone3DMap'] = null, _0x255790['nodes'] = null;
                }
            }, _0x3383f0['destroy'] = function () {
                var _0x3b9850, _0x11c724;
                for (_0x11c724 in (this['_isDestroy' + 'ed'] = !0x0, this['subTexture' + 'Dic']))
                    (_0x3b9850 = this['subTexture' + 'Dic'][_0x11c724]) && _0x3b9850['destroy']();
                for (_0x11c724 in this['_textureDi' + 'c'])
                    (_0x3b9850 = this['_textureDi' + 'c'][_0x11c724]) && _0x3b9850['destroy']();
                for (var _0x11e211 = 0x0, _0x469079 = this['skinSlotDi' + 'splayDataA' + 'rr']['length']; _0x11e211 < _0x469079; _0x11e211++)
                    this['skinSlotDi' + 'splayDataA' + 'rr'][_0x11e211]['destory']();
                this['skinSlotDi' + 'splayDataA' + 'rr']['length'] = 0x0, this['url'] && delete _0x6ae2c9['TEMPLET_DI' + 'CTIONARY'][this['url']], laya['resource']['Resource']['prototype']['destroy']['call'](this);
            }, _0x3383f0['getAniName' + 'ByIndex'] = function (_0x3ba7ac) {
                var _0x51c128 = this['getAnimati' + 'on'](_0x3ba7ac);
                return _0x51c128 ? _0x51c128['name'] : null;
            }, _0x17c821(0x0, _0x3383f0, 'rate', function () {
                return this['_rate'];
            }, function (_0x464d7f) {
                this['_rate'] = _0x464d7f;
            }), _0x6ae2c9['LAYA_ANIMA' + 'TION_160_V' + 'ISION'] = 'LAYAANIMAT' + 'ION:1.6.0', _0x6ae2c9['LAYA_ANIMA' + 'TION_VISIO' + 'N'] = 'LAYAANIMAT' + 'ION:1.7.0', _0x6ae2c9['TEMPLET_DI' + 'CTIONARY'] = null, _0x6ae2c9;
        }(_0x21cb65);
}(window, document, Laya);