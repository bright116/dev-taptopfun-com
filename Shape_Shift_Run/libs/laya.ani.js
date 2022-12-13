!function (_0x292c76, _0x445c15) {
    'use strict';
    class _0x3d48ab {
    }
    _0x3d48ab['Skeleton'] = null, _0x3d48ab['AnimationT' + 'emplet'] = null, _0x3d48ab['Templet'] = null;
    class _0x192cd7 {
    }
    class _0x2f8c6d {
    }
    class _0x116b9f {
    }
    class _0x3dce64 {
        static ['parse'](_0x58648e, _0x25fa78) {
            var _0x1e027c, _0x50a5a3, _0x42a74a, _0x1581a2, _0x55ea5d, _0x1ec0bc, _0x20c8ca, _0x339d81 = _0x25fa78['__getBuffe' + 'r'](), _0x204ff2 = _0x25fa78['readUTFStr' + 'ing']();
            _0x58648e['_aniClassN' + 'ame'] = _0x204ff2;
            var _0x114fb2, _0x2f22f8 = _0x25fa78['readUTFStr' + 'ing']()['split']('\x0a'), _0x5fcb2 = _0x25fa78['getUint8'](), _0x454771 = _0x25fa78['getUint32'](), _0x7572ad = _0x25fa78['getUint32']();
            _0x454771 > 0x0 && (_0x114fb2 = _0x339d81['slice'](_0x454771, _0x7572ad));
            var _0x5bb8a7 = new _0x445c15['Byte'](_0x114fb2);
            for (_0x7572ad > 0x0 && (_0x58648e['_publicExt' + 'Data'] = _0x339d81['slice'](_0x7572ad, _0x339d81['byteLength'])), _0x58648e['_useParent'] = !!_0x25fa78['getUint8'](), _0x58648e['_anis']['length'] = _0x5fcb2, _0x1e027c = 0x0; _0x1e027c < _0x5fcb2; _0x1e027c++) {
                var _0xa552a7 = _0x58648e['_anis'][_0x1e027c] = new _0x192cd7();
                _0xa552a7['nodes'] = [];
                var _0x4c3bcf = _0xa552a7['name'] = _0x2f22f8[_0x25fa78['getUint16']()];
                _0x58648e['_aniMap'][_0x4c3bcf] = _0x1e027c, _0xa552a7['bone3DMap'] = {}, _0xa552a7['playTime'] = _0x25fa78['getFloat32']();
                var _0x2b3368 = _0xa552a7['nodes']['length'] = _0x25fa78['getUint8']();
                for (_0xa552a7['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x50a5a3 = 0x0; _0x50a5a3 < _0x2b3368; _0x50a5a3++) {
                    var _0x1dde3d = _0xa552a7['nodes'][_0x50a5a3] = new _0x2f8c6d();
                    _0x1dde3d['childs'] = [];
                    var _0x354cfd = _0x25fa78['getInt16']();
                    _0x354cfd >= 0x0 && (_0x1dde3d['name'] = _0x2f22f8[_0x354cfd], _0xa552a7['bone3DMap'][_0x1dde3d['name']] = _0x50a5a3), _0x1dde3d['keyFrame'] = [], _0x1dde3d['parentInde' + 'x'] = _0x25fa78['getInt16'](), -0x1 == _0x1dde3d['parentInde' + 'x'] ? _0x1dde3d['parent'] = null : _0x1dde3d['parent'] = _0xa552a7['nodes'][_0x1dde3d['parentInde' + 'x']], _0x1dde3d['lerpType'] = _0x25fa78['getUint8']();
                    var _0x59750d = _0x25fa78['getUint32']();
                    _0x5bb8a7['pos'] = _0x59750d;
                    var _0x1fcd9d = _0x1dde3d['keyframeWi' + 'dth'] = _0x5bb8a7['getUint16']();
                    if (_0xa552a7['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x1fcd9d, 0x0 === _0x1dde3d['lerpType'] || 0x1 === _0x1dde3d['lerpType']) {
                        for (_0x1dde3d['interpolat' + 'ionMethod'] = [], _0x1dde3d['interpolat' + 'ionMethod']['length'] = _0x1fcd9d, _0x42a74a = 0x0; _0x42a74a < _0x1fcd9d; _0x42a74a++)
                            _0x1dde3d['interpolat' + 'ionMethod'][_0x42a74a] = _0x3d48ab['AnimationT' + 'emplet']['interpolat' + 'ion'][_0x5bb8a7['getUint8']()];
                    }
                    null != _0x1dde3d['parent'] && _0x1dde3d['parent']['childs']['push'](_0x1dde3d);
                    var _0x127ee6 = _0x25fa78['getUint16']();
                    _0x127ee6 > 0x0 && (_0x1dde3d['extenData'] = _0x339d81['slice'](_0x25fa78['pos'], _0x25fa78['pos'] + _0x127ee6), _0x25fa78['pos'] += _0x127ee6);
                    var _0x11a373 = _0x25fa78['getUint16']();
                    _0x1dde3d['keyFrame']['length'] = _0x11a373;
                    var _0x3fa737, _0x27319a = 0x0;
                    for (_0x42a74a = 0x0, _0x1581a2 = _0x11a373; _0x42a74a < _0x1581a2; _0x42a74a++) {
                        if ((_0x3fa737 = _0x1dde3d['keyFrame'][_0x42a74a] = new _0x116b9f())['duration'] = _0x25fa78['getFloat32'](), _0x3fa737['startTime'] = _0x27319a, 0x2 === _0x1dde3d['lerpType']) {
                            _0x3fa737['interpolat' + 'ionData'] = [];
                            var _0x55fdae, _0x727cca = _0x25fa78['getUint8']();
                            switch (_0x55fdae = _0x25fa78['getFloat32']()) {
                            case 0xfe:
                                for (_0x3fa737['interpolat' + 'ionData']['length'] = _0x1fcd9d, _0x20c8ca = 0x0; _0x20c8ca < _0x1fcd9d; _0x20c8ca++)
                                    _0x3fa737['interpolat' + 'ionData'][_0x20c8ca] = 0x0;
                                break;
                            case 0xff:
                                for (_0x3fa737['interpolat' + 'ionData']['length'] = _0x1fcd9d, _0x20c8ca = 0x0; _0x20c8ca < _0x1fcd9d; _0x20c8ca++)
                                    _0x3fa737['interpolat' + 'ionData'][_0x20c8ca] = 0x5;
                                break;
                            default:
                                for (_0x3fa737['interpolat' + 'ionData']['push'](_0x55fdae), _0x1ec0bc = 0x1; _0x1ec0bc < _0x727cca; _0x1ec0bc++)
                                    _0x3fa737['interpolat' + 'ionData']['push'](_0x25fa78['getFloat32']());
                            }
                        }
                        for (_0x3fa737['data'] = new Float32Array(_0x1fcd9d), _0x3fa737['dData'] = new Float32Array(_0x1fcd9d), _0x3fa737['nextData'] = new Float32Array(_0x1fcd9d), _0x55ea5d = 0x0; _0x55ea5d < _0x1fcd9d; _0x55ea5d++)
                            _0x3fa737['data'][_0x55ea5d] = _0x25fa78['getFloat32'](), _0x3fa737['data'][_0x55ea5d] > -1e-8 && _0x3fa737['data'][_0x55ea5d] < 1e-8 && (_0x3fa737['data'][_0x55ea5d] = 0x0);
                        _0x27319a += _0x3fa737['duration'];
                    }
                    _0x3fa737['startTime'] = _0xa552a7['playTime'], _0x1dde3d['playTime'] = _0xa552a7['playTime'], _0x58648e['_calculate' + 'KeyFrame'](_0x1dde3d, _0x11a373, _0x1fcd9d);
                }
            }
        }
    }
    class _0x4af130 {
        static ['READ_DATA']() {
            _0x4af130['_DATA']['offset'] = _0x4af130['_reader']['getUint32'](), _0x4af130['_DATA']['size'] = _0x4af130['_reader']['getUint32']();
        }
        static ['READ_BLOCK']() {
            for (var _0x850879 = _0x4af130['_BLOCK']['count'] = _0x4af130['_reader']['getUint16'](), _0x59c5fd = _0x4af130['_BLOCK']['blockStart' + 's'] = [], _0x2dde76 = _0x4af130['_BLOCK']['blockLengt' + 'hs'] = [], _0x1bb587 = 0x0; _0x1bb587 < _0x850879; _0x1bb587++)
                _0x59c5fd['push'](_0x4af130['_reader']['getUint32']()), _0x2dde76['push'](_0x4af130['_reader']['getUint32']());
        }
        static ['READ_STRIN' + 'GS']() {
            var _0x13d0bc = _0x4af130['_reader']['getUint32'](), _0x2707af = _0x4af130['_reader']['getUint16'](), _0x416109 = _0x4af130['_reader']['pos'];
            _0x4af130['_reader']['pos'] = _0x13d0bc + _0x4af130['_DATA']['offset'];
            for (var _0x10492a = 0x0; _0x10492a < _0x2707af; _0x10492a++)
                _0x4af130['_strings'][_0x10492a] = _0x4af130['_reader']['readUTFStr' + 'ing']();
            _0x4af130['_reader']['pos'] = _0x416109;
        }
        static ['parse'](_0x755096, _0x367aa3) {
            _0x4af130['_templet'] = _0x755096, _0x4af130['_reader'] = _0x367aa3, _0x367aa3['__getBuffe' + 'r'](), (_0x4af130['READ_DATA'](), _0x4af130['READ_BLOCK'](), _0x4af130['READ_STRIN' + 'GS']());
            for (var _0x5cd595 = 0x0, _0x2c423c = _0x4af130['_BLOCK']['count']; _0x5cd595 < _0x2c423c; _0x5cd595++) {
                var _0x1cb75f = _0x367aa3['getUint16'](), _0x623c1 = _0x4af130['_strings'][_0x1cb75f], _0x1a98a2 = _0x4af130['READ_' + _0x623c1];
                if (null == _0x1a98a2)
                    throw new Error('model\x20file' + '\x20err,no\x20th' + 'is\x20functio' + 'n:' + _0x1cb75f + '\x20' + _0x623c1);
                _0x1a98a2['call'](null);
            }
        }
        static ['READ_ANIMA' + 'TIONS']() {
            var _0x14c5ad, _0x35caab, _0x248c23, _0x3d0b19, _0x58c823 = _0x4af130['_reader'], _0x535f69 = _0x58c823['__getBuffe' + 'r'](), _0x361ca1 = _0x58c823['getUint16'](), _0x275559 = [];
            for (_0x275559['length'] = _0x361ca1, _0x14c5ad = 0x0; _0x14c5ad < _0x361ca1; _0x14c5ad++)
                _0x275559[_0x14c5ad] = _0x3d48ab['AnimationT' + 'emplet']['interpolat' + 'ion'][_0x58c823['getByte']()];
            var _0x4c4fd1 = _0x58c823['getUint8']();
            for (_0x4af130['_templet']['_anis']['length'] = _0x4c4fd1, _0x14c5ad = 0x0; _0x14c5ad < _0x4c4fd1; _0x14c5ad++) {
                var _0x1c784a = _0x4af130['_templet']['_anis'][_0x14c5ad] = new _0x192cd7();
                _0x1c784a['nodes'] = [];
                var _0x3a097c = _0x1c784a['name'] = _0x4af130['_strings'][_0x58c823['getUint16']()];
                _0x4af130['_templet']['_aniMap'][_0x3a097c] = _0x14c5ad, _0x1c784a['bone3DMap'] = {}, _0x1c784a['playTime'] = _0x58c823['getFloat32']();
                var _0x14efb7 = _0x1c784a['nodes']['length'] = _0x58c823['getInt16']();
                for (_0x1c784a['totalKeyfr' + 'ameDatasLe' + 'ngth'] = 0x0, _0x35caab = 0x0; _0x35caab < _0x14efb7; _0x35caab++) {
                    var _0x1482b1 = _0x1c784a['nodes'][_0x35caab] = new _0x2f8c6d();
                    _0x1482b1['keyframeWi' + 'dth'] = _0x361ca1, _0x1482b1['childs'] = [];
                    var _0x3b1aa0 = _0x58c823['getUint16']();
                    _0x3b1aa0 >= 0x0 && (_0x1482b1['name'] = _0x4af130['_strings'][_0x3b1aa0], _0x1c784a['bone3DMap'][_0x1482b1['name']] = _0x35caab), _0x1482b1['keyFrame'] = [], _0x1482b1['parentInde' + 'x'] = _0x58c823['getInt16'](), -0x1 == _0x1482b1['parentInde' + 'x'] ? _0x1482b1['parent'] = null : _0x1482b1['parent'] = _0x1c784a['nodes'][_0x1482b1['parentInde' + 'x']], _0x1c784a['totalKeyfr' + 'ameDatasLe' + 'ngth'] += _0x361ca1, _0x1482b1['interpolat' + 'ionMethod'] = _0x275559, null != _0x1482b1['parent'] && _0x1482b1['parent']['childs']['push'](_0x1482b1);
                    var _0x2a8b4b = _0x58c823['getUint16']();
                    _0x1482b1['keyFrame']['length'] = _0x2a8b4b;
                    var _0x3c1305 = null, _0x468cf4 = null;
                    for (_0x248c23 = 0x0, _0x3d0b19 = _0x2a8b4b; _0x248c23 < _0x3d0b19; _0x248c23++) {
                        (_0x3c1305 = _0x1482b1['keyFrame'][_0x248c23] = new _0x116b9f())['startTime'] = _0x58c823['getFloat32'](), _0x468cf4 && (_0x468cf4['duration'] = _0x3c1305['startTime'] - _0x468cf4['startTime']), _0x3c1305['dData'] = new Float32Array(_0x361ca1), _0x3c1305['nextData'] = new Float32Array(_0x361ca1);
                        var _0x5ca342 = _0x4af130['_DATA']['offset'], _0x5ec923 = _0x58c823['getUint32'](), _0x3353a8 = 0x4 * _0x361ca1, _0x329c53 = _0x535f69['slice'](_0x5ca342 + _0x5ec923, _0x5ca342 + _0x5ec923 + _0x3353a8);
                        _0x3c1305['data'] = new Float32Array(_0x329c53), _0x468cf4 = _0x3c1305;
                    }
                    _0x3c1305['duration'] = 0x0, _0x1482b1['playTime'] = _0x1c784a['playTime'], _0x4af130['_templet']['_calculate' + 'KeyFrame'](_0x1482b1, _0x2a8b4b, _0x361ca1);
                }
            }
        }
    }
    _0x4af130['_strings'] = [], _0x4af130['_BLOCK'] = { 'count': 0x0 }, _0x4af130['_DATA'] = {
        'offset': 0x0,
        'size': 0x0
    };
    class _0x33df8f {
        constructor() {
        }
    }
    _0x33df8f['stopped'] = 0x0, _0x33df8f['paused'] = 0x1, _0x33df8f['playing'] = 0x2;
    class _0x4490a1 extends _0x445c15['EventDispa' + 'tcher'] {
        constructor() {
            super(), this['isCache'] = !0x0, this['playbackRa' + 'te'] = 0x1, this['_destroyed'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['_currentKe' + 'yframeInde' + 'x'] = -0x1, this['_currentTi' + 'me'] = 0x0, this['_overallDu' + 'ration'] = Number['MAX_VALUE'], this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, this['_elapsedPl' + 'aybackTime'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = -0x1, this['_cachePlay' + 'Rate'] = 0x1, this['cacheFrame' + 'Rate'] = 0x3c, this['returnToZe' + 'roStopped'] = !0x1;
        }
        get ['templet']() {
            return this['_templet'];
        }
        set ['templet'](_0x1d3832) {
            this['state'] !== _0x33df8f['stopped'] && this['stop'](!0x0), this['_templet'] !== _0x1d3832 && (this['_templet'] = _0x1d3832, this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        get ['playStart']() {
            return this['_playStart'];
        }
        get ['playEnd']() {
            return this['_playEnd'];
        }
        get ['playDurati' + 'on']() {
            return this['_playDurat' + 'ion'];
        }
        get ['overallDur' + 'ation']() {
            return this['_overallDu' + 'ration'];
        }
        get ['currentAni' + 'mationClip' + 'Index']() {
            return this['_currentAn' + 'imationCli' + 'pIndex'];
        }
        get ['currentKey' + 'frameIndex']() {
            return this['_currentKe' + 'yframeInde' + 'x'];
        }
        get ['currentPla' + 'yTime']() {
            return this['_currentTi' + 'me'] + this['_playStart'];
        }
        get ['currentFra' + 'meTime']() {
            return this['_currentFr' + 'ameTime'];
        }
        get ['cachePlayR' + 'ate']() {
            return this['_cachePlay' + 'Rate'];
        }
        set ['cachePlayR' + 'ate'](_0x30ae72) {
            this['_cachePlay' + 'Rate'] !== _0x30ae72 && (this['_cachePlay' + 'Rate'] = _0x30ae72, this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        get ['cacheFrame' + 'Rate']() {
            return this['_cacheFram' + 'eRate'];
        }
        set ['cacheFrame' + 'Rate'](_0x3b70af) {
            this['_cacheFram' + 'eRate'] !== _0x3b70af && (this['_cacheFram' + 'eRate'] = _0x3b70af, this['_cacheFram' + 'eRateInter' + 'val'] = 0x3e8 / this['_cacheFram' + 'eRate'], this['_templet'] && this['_computeFu' + 'llKeyframe' + 'Indices']());
        }
        set ['currentTim' + 'e'](_0x4d558c) {
            if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && this['_templet']) {
                if (_0x4d558c < this['_playStart'] || _0x4d558c > this['_playEnd'])
                    throw new Error('AnimationP' + 'layer:valu' + 'e\x20must\x20lar' + 'ge\x20than\x20pl' + 'ayStartTim' + 'e,small\x20th' + 'an\x20playEnd' + 'Time.');
                this['_startUpda' + 'teLoopCoun' + 't'] = _0x445c15['Stat']['loopCount'];
                var _0x33fd72 = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'];
                this['_currentTi' + 'me'] = _0x4d558c, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0x33fd72), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x33fd72;
            }
        }
        get ['paused']() {
            return this['_paused'];
        }
        set ['paused'](_0xf91579) {
            this['_paused'] = _0xf91579, _0xf91579 && this['event'](_0x445c15['Event']['PAUSED']);
        }
        get ['cacheFrame' + 'RateInterv' + 'al']() {
            return this['_cacheFram' + 'eRateInter' + 'val'];
        }
        get ['state']() {
            return -0x1 === this['_currentAn' + 'imationCli' + 'pIndex'] ? _0x33df8f['stopped'] : this['_paused'] ? _0x33df8f['paused'] : _0x33df8f['playing'];
        }
        get ['destroyed']() {
            return this['_destroyed'];
        }
        ['_onTemplet' + 'LoadedComp' + 'uteFullKey' + 'frameIndic' + 'es'](_0x4513c5, _0x4d5335, _0x37c667) {
            this['_templet'] === _0x37c667 && this['_cachePlay' + 'Rate'] === _0x4513c5 && this['_cacheFram' + 'eRate'] === _0x4d5335 && this['_computeFu' + 'llKeyframe' + 'Indices']();
        }
        ['_computeFu' + 'llKeyframe' + 'Indices']() {
        }
        ['_onAnimati' + 'onTempletL' + 'oaded']() {
            this['destroyed'] || this['_calculate' + 'PlayDurati' + 'on']();
        }
        ['_calculate' + 'PlayDurati' + 'on']() {
            if (this['state'] !== _0x33df8f['stopped']) {
                var _0x1a281b = this['_templet']['getAniDura' + 'tion'](this['_currentAn' + 'imationCli' + 'pIndex']);
                0x0 === this['_playEnd'] && (this['_playEnd'] = _0x1a281b), this['_playEnd'] > _0x1a281b && (this['_playEnd'] = _0x1a281b), this['_playDurat' + 'ion'] = this['_playEnd'] - this['_playStart'];
            }
        }
        ['_setPlayPa' + 'rams'](_0x28cce9, _0xcbaf8d) {
            this['_currentTi' + 'me'] = _0x28cce9, this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](this['currentPla' + 'yTime'] / _0xcbaf8d + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0xcbaf8d;
        }
        ['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x42b9a1, _0x135377, _0x3409eb = -0x1) {
            this['_currentTi' + 'me'] = _0x42b9a1;
            var _0x217824 = _0x3409eb > 0x0 ? _0x3409eb : _0x42b9a1;
            this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](_0x217824 / _0x135377 + 0.01), this['_currentKe' + 'yframeInde' + 'x'] = Math['floor'](_0x42b9a1 / _0x135377 + 0.01), this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] * _0x135377, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1;
        }
        ['_update'](_0x38b8ca) {
            if (-0x1 !== this['_currentAn' + 'imationCli' + 'pIndex'] && !this['_paused'] && this['_templet']) {
                var _0x594673 = this['_cacheFram' + 'eRateInter' + 'val'] * this['_cachePlay' + 'Rate'], _0x19349f = 0x0;
                this['_startUpda' + 'teLoopCoun' + 't'] !== _0x445c15['Stat']['loopCount'] && (_0x19349f = _0x38b8ca * this['playbackRa' + 'te'], this['_elapsedPl' + 'aybackTime'] += _0x19349f);
                var _0x4bb716 = this['playDurati' + 'on'];
                if (_0x19349f += this['_currentTi' + 'me'], 0x0 !== this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= this['_overallDu' + 'ration'] || 0x0 === this['_overallDu' + 'ration'] && this['_elapsedPl' + 'aybackTime'] >= _0x4bb716 || 0x0 === this['_overallDu' + 'ration'] && _0x19349f >= this['playEnd'])
                    return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x4bb716, _0x594673, this['playEnd']), void this['event'](_0x445c15['Event']['STOPPED']);
                if (_0x4bb716 > 0x0) {
                    if (_0x19349f >= _0x4bb716)
                        return this['_stopWhenC' + 'ircleFinis' + 'h'] ? (this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x4bb716, _0x594673), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event'](_0x445c15['Event']['STOPPED'])) : (_0x19349f %= _0x4bb716, this['_setPlayPa' + 'rams'](_0x19349f, _0x594673), void this['event'](_0x445c15['Event']['COMPLETE']));
                    this['_setPlayPa' + 'rams'](_0x19349f, _0x594673);
                } else {
                    if (this['_stopWhenC' + 'ircleFinis' + 'h'])
                        return this['_setPlayPa' + 'ramsWhenSt' + 'op'](_0x4bb716, _0x594673), this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x1, void this['event'](_0x445c15['Event']['STOPPED']);
                    this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['event'](_0x445c15['Event']['COMPLETE']);
                }
            }
        }
        ['_destroy']() {
            this['offAll'](), this['_templet'] = null, this['_destroyed'] = !0x0;
        }
        ['play'](_0x232b04 = 0x0, _0x178db5 = 0x1, _0x3088ed = 0x7fffffff, _0x5d676b = 0x0, _0x19b0b6 = 0x0) {
            if (!this['_templet'])
                throw new Error('AnimationP' + 'layer:temp' + 'let\x20must\x20n' + 'ot\x20be\x20null' + ',maybe\x20you' + '\x20need\x20to\x20s' + 'et\x20url.');
            if (_0x3088ed < 0x0 || _0x5d676b < 0x0 || _0x19b0b6 < 0x0)
                throw new Error('AnimationP' + 'layer:over' + 'allDuratio' + 'n,playStar' + 't\x20and\x20play' + 'End\x20must\x20l' + 'arge\x20than\x20' + 'zero.');
            if (0x0 !== _0x19b0b6 && _0x5d676b > _0x19b0b6)
                throw new Error('AnimationP' + 'layer:star' + 't\x20must\x20les' + 's\x20than\x20end' + '.');
            this['_currentTi' + 'me'] = 0x0, this['_currentFr' + 'ameTime'] = 0x0, this['_elapsedPl' + 'aybackTime'] = 0x0, this['playbackRa' + 'te'] = _0x178db5, this['_overallDu' + 'ration'] = _0x3088ed, this['_playStart'] = _0x5d676b, this['_playEnd'] = _0x19b0b6, this['_paused'] = !0x1, this['_currentAn' + 'imationCli' + 'pIndex'] = _0x232b04, this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_startUpda' + 'teLoopCoun' + 't'] = _0x445c15['Stat']['loopCount'], this['event'](_0x445c15['Event']['PLAYED']), this['_calculate' + 'PlayDurati' + 'on'](), this['_update'](0x0);
        }
        ['playByFram' + 'e'](_0x31712e = 0x0, _0x46fabb = 0x1, _0x4857b2 = 0x7fffffff, _0x39b1c9 = 0x0, _0x4b6586 = 0x0, _0x148e5c = 0x1e) {
            var _0x2fff90 = 0x3e8 / _0x148e5c;
            this['play'](_0x31712e, _0x46fabb, _0x4857b2, _0x39b1c9 * _0x2fff90, _0x4b6586 * _0x2fff90);
        }
        ['stop'](_0x473847 = !0x0) {
            _0x473847 ? (this['_currentTi' + 'me'] = this['_currentFr' + 'ameTime'] = this['_currentKe' + 'yframeInde' + 'x'] = 0x0, this['_currentAn' + 'imationCli' + 'pIndex'] = -0x1, this['event'](_0x445c15['Event']['STOPPED'])) : this['_stopWhenC' + 'ircleFinis' + 'h'] = !0x0;
        }
        ['destroy']() {
        }
    }
    class _0xdbb915 {
        constructor() {
        }
        static ['getBezierR' + 'ate'](_0x5073df, _0x5483a5, _0x21182c, _0x5d37fd, _0x5dc4f5) {
            var _0x576ab2 = _0xdbb915['_getBezier' + 'ParamKey'](_0x5483a5, _0x21182c, _0x5d37fd, _0x5dc4f5), _0x2cbcca = 0x64 * _0x576ab2 + _0x5073df;
            if (_0xdbb915['_bezierRes' + 'ultCache'][_0x2cbcca])
                return _0xdbb915['_bezierRes' + 'ultCache'][_0x2cbcca];
            var _0x3def05, _0x1a6ee8, _0x51b985 = _0xdbb915['_getBezier' + 'Points'](_0x5483a5, _0x21182c, _0x5d37fd, _0x5dc4f5, _0x576ab2);
            for (_0x1a6ee8 = _0x51b985['length'], _0x3def05 = 0x0; _0x3def05 < _0x1a6ee8; _0x3def05 += 0x2)
                if (_0x5073df <= _0x51b985[_0x3def05])
                    return _0xdbb915['_bezierRes' + 'ultCache'][_0x2cbcca] = _0x51b985[_0x3def05 + 0x1], _0x51b985[_0x3def05 + 0x1];
            return _0xdbb915['_bezierRes' + 'ultCache'][_0x2cbcca] = 0x1, 0x1;
        }
        static ['_getBezier' + 'ParamKey'](_0x112e2e, _0x269a8f, _0x207c81, _0xe64152) {
            return 0x64 * (0x64 * (0x64 * (0x64 * _0x112e2e + _0x269a8f) + _0x207c81) + _0xe64152);
        }
        static ['_getBezier' + 'Points'](_0x4a796e, _0x337c06, _0x1c8f87, _0x21667b, _0x372a43) {
            return _0xdbb915['_bezierPoi' + 'ntsCache'][_0x372a43] ? _0xdbb915['_bezierPoi' + 'ntsCache'][_0x372a43] : (_0x4f3f34 = [
                0x0,
                0x0,
                _0x4a796e,
                _0x337c06,
                _0x1c8f87,
                _0x21667b,
                0x1,
                0x1
            ], _0x9624f2 = new _0x445c15['Bezier']()['getBezierP' + 'oints'](_0x4f3f34, 0x64, 0x3), _0xdbb915['_bezierPoi' + 'ntsCache'][_0x372a43] = _0x9624f2, _0x9624f2);
            var _0x4f3f34, _0x9624f2;
        }
    }
    _0xdbb915['_bezierRes' + 'ultCache'] = {}, _0xdbb915['_bezierPoi' + 'ntsCache'] = {};
    class _0x5b2b39 extends _0x445c15['Resource'] {
        constructor() {
            super(), this['_anis'] = [], this['_aniMap'] = {}, this['unfixedLas' + 'tAniIndex'] = -0x1, this['_fullFrame' + 's'] = null, this['_boneCurKe' + 'yFrm'] = [];
        }
        static ['_LinearInt' + 'erpolation' + '_0'](_0x34cfe7, _0x28825f, _0x5969d9, _0x1627e8, _0x517cb8, _0x3dccad, _0x56d48a, _0x36a4e9, _0x57f632, _0x1af5e6 = null) {
            return _0x5969d9[_0x1627e8] = _0x517cb8[_0x28825f] + _0x3dccad * _0x56d48a[_0x28825f], 0x1;
        }
        static ['_Quaternio' + 'nInterpola' + 'tion_1'](_0x3bf179, _0x13d039, _0xfa909f, _0x39e7cc, _0x29fcd4, _0x1e140a, _0x2f93de, _0x470b6b, _0x3b5d44, _0x147bfb = null) {
            var _0x2f06e5 = 0x0 === _0x470b6b ? 0x0 : _0x1e140a / _0x470b6b;
            return _0x445c15['MathUtil']['slerpQuate' + 'rnionArray'](_0x29fcd4, _0x13d039, _0x3b5d44, _0x13d039, _0x2f06e5, _0xfa909f, _0x39e7cc), 0x4;
        }
        static ['_AngleInte' + 'rpolation_' + '2'](_0x57c9e8, _0x2cc5b8, _0x400879, _0x9d591c, _0x510cca, _0x3dc4f7, _0x4cbe1c, _0x2b3360, _0x192133, _0x742a4f = null) {
            return 0x0;
        }
        static ['_RadiansIn' + 'terpolatio' + 'n_3'](_0xacc826, _0x2a47da, _0x16601d, _0x1cb1a2, _0x300477, _0x237ea9, _0x11ef7b, _0x4f8829, _0x4daa89, _0x208028 = null) {
            return 0x0;
        }
        static ['_Matrix4x4' + 'Interpolat' + 'ion_4'](_0x3c1755, _0x8337df, _0x4e90b0, _0x1de2e3, _0x59868e, _0x27630b, _0x7b6f7a, _0x273793, _0x5119d4, _0x5bf648 = null) {
            for (var _0x5f5832 = 0x0; _0x5f5832 < 0x10; _0x5f5832++, _0x8337df++)
                _0x4e90b0[_0x1de2e3 + _0x5f5832] = _0x59868e[_0x8337df] + _0x27630b * _0x7b6f7a[_0x8337df];
            return 0x10;
        }
        static ['_NoInterpo' + 'lation_5'](_0x58a360, _0x573f81, _0x4d70c7, _0x189e80, _0x2d06d2, _0x39641f, _0x2765fb, _0x57028d, _0x12ccb8, _0x289c35 = null) {
            return _0x4d70c7[_0x189e80] = _0x2d06d2[_0x573f81], 0x1;
        }
        static ['_BezierInt' + 'erpolation' + '_6'](_0x7b1cfb, _0x4eb214, _0x2ab17f, _0x42f349, _0x109157, _0x2312a6, _0x20e766, _0x135fef, _0x3bef53, _0x115ff9 = null, _0x2ef8f0 = 0x0) {
            return _0x2ab17f[_0x42f349] = _0x109157[_0x4eb214] + (_0x3bef53[_0x4eb214] - _0x109157[_0x4eb214]) * _0xdbb915['getBezierR' + 'ate'](_0x2312a6 / _0x135fef, _0x115ff9[_0x2ef8f0], _0x115ff9[_0x2ef8f0 + 0x1], _0x115ff9[_0x2ef8f0 + 0x2], _0x115ff9[_0x2ef8f0 + 0x3]), 0x5;
        }
        static ['_BezierInt' + 'erpolation' + '_7'](_0x165bec, _0x77047c, _0x2583f4, _0x299b51, _0x2431bc, _0x12e15d, _0x45382c, _0x236f8f, _0x208ddb, _0x24c048 = null, _0x3641ff = 0x0) {
            return _0x2583f4[_0x299b51] = _0x24c048[_0x3641ff + 0x4] + _0x24c048[_0x3641ff + 0x5] * _0xdbb915['getBezierR' + 'ate']((0.001 * _0x12e15d + _0x24c048[_0x3641ff + 0x6]) / _0x24c048[_0x3641ff + 0x7], _0x24c048[_0x3641ff], _0x24c048[_0x3641ff + 0x1], _0x24c048[_0x3641ff + 0x2], _0x24c048[_0x3641ff + 0x3]), 0x9;
        }
        ['parse'](_0x55e30f) {
            var _0x2091f1 = new _0x445c15['Byte'](_0x55e30f);
            this['_aniVersio' + 'n'] = _0x2091f1['readUTFStr' + 'ing'](), _0x3dce64['parse'](this, _0x2091f1);
        }
        ['_calculate' + 'KeyFrame'](_0x1a136b, _0x3d0fc5, _0x500491) {
            var _0x2075bc = _0x1a136b['keyFrame'];
            _0x2075bc[_0x3d0fc5] = _0x2075bc[0x0];
            for (var _0x2c57d2 = 0x0; _0x2c57d2 < _0x3d0fc5; _0x2c57d2++)
                for (var _0x4e6d3d = _0x2075bc[_0x2c57d2], _0x8d0597 = 0x0; _0x8d0597 < _0x500491; _0x8d0597++)
                    _0x4e6d3d['dData'][_0x8d0597] = 0x0 === _0x4e6d3d['duration'] ? 0x0 : (_0x2075bc[_0x2c57d2 + 0x1]['data'][_0x8d0597] - _0x4e6d3d['data'][_0x8d0597]) / _0x4e6d3d['duration'], _0x4e6d3d['nextData'][_0x8d0597] = _0x2075bc[_0x2c57d2 + 0x1]['data'][_0x8d0597];
            _0x2075bc['length']--;
        }
        ['_onAsynLoa' + 'ded'](_0x2f3729, _0x487236 = null) {
            var _0x1992a2 = new _0x445c15['Byte'](_0x2f3729);
            switch (this['_aniVersio' + 'n'] = _0x1992a2['readUTFStr' + 'ing'](), this['_aniVersio' + 'n']) {
            case 'LAYAANIMAT' + 'ION:02':
                _0x4af130['parse'](this, _0x1992a2);
                break;
            default:
                _0x3dce64['parse'](this, _0x1992a2);
            }
        }
        ['getAnimati' + 'onCount']() {
            return this['_anis']['length'];
        }
        ['getAnimati' + 'on'](_0x2134a7) {
            return this['_anis'][_0x2134a7];
        }
        ['getAniDura' + 'tion'](_0xf1b7c4) {
            return this['_anis'][_0xf1b7c4]['playTime'];
        }
        ['getNodes'](_0x58bddc) {
            return this['_anis'][_0x58bddc]['nodes'];
        }
        ['getNodeInd' + 'exWithName'](_0x2e6624, _0x38eb40) {
            return this['_anis'][_0x2e6624]['bone3DMap'][_0x38eb40];
        }
        ['getNodeCou' + 'nt'](_0x30e090) {
            return this['_anis'][_0x30e090]['nodes']['length'];
        }
        ['getTotalke' + 'yframesLen' + 'gth'](_0x36a33c) {
            return this['_anis'][_0x36a33c]['totalKeyfr' + 'ameDatasLe' + 'ngth'];
        }
        ['getPublicE' + 'xtData']() {
            return this['_publicExt' + 'Data'];
        }
        ['getAnimati' + 'onDataWith' + 'Cache'](_0x1e35c6, _0x3adfd3, _0x541555, _0x240c19) {
            var _0x3469b2 = _0x3adfd3[_0x541555];
            if (_0x3469b2) {
                var _0x1a7b10 = _0x3469b2[_0x1e35c6];
                return _0x1a7b10 ? _0x1a7b10[_0x240c19] : null;
            }
            return null;
        }
        ['setAnimati' + 'onDataWith' + 'Cache'](_0x5e3f20, _0x5341e8, _0x3efb79, _0x4d6a8c, _0x131750) {
            var _0x420be4 = _0x5341e8[_0x3efb79] || (_0x5341e8[_0x3efb79] = {});
            (_0x420be4[_0x5e3f20] || (_0x420be4[_0x5e3f20] = []))[_0x4d6a8c] = _0x131750;
        }
        ['getNodeKey' + 'Frame'](_0x592008, _0x24c65c, _0x42ef3d) {
            var _0xe7181b = this['_boneCurKe' + 'yFrm'][_0x24c65c], _0x35d176 = _0x592008['length'];
            (null == _0xe7181b || _0xe7181b >= _0x35d176) && (_0xe7181b = this['_boneCurKe' + 'yFrm'][_0x24c65c] = 0x0);
            var _0x130ad3 = _0x592008[_0xe7181b], _0x437a5b = _0x42ef3d - _0x130ad3['startTime'];
            if (0x0 == _0x437a5b || _0x437a5b > 0x0 && _0x130ad3['duration'] > _0x437a5b)
                return _0xe7181b;
            var _0x2f4d08 = 0x0;
            if (_0x437a5b > 0x0) {
                for (_0x42ef3d += 0.01, _0x2f4d08 = _0xe7181b + 0x1; _0x2f4d08 < _0x35d176; _0x2f4d08++)
                    if ((_0x130ad3 = _0x592008[_0x2f4d08])['startTime'] <= _0x42ef3d && _0x130ad3['startTime'] + _0x130ad3['duration'] > _0x42ef3d)
                        return this['_boneCurKe' + 'yFrm'][_0x24c65c] = _0x2f4d08, _0x2f4d08;
                return _0x35d176 - 0x1;
            }
            for (_0x2f4d08 = 0x0; _0x2f4d08 < _0xe7181b; _0x2f4d08++)
                if ((_0x130ad3 = _0x592008[_0x2f4d08])['startTime'] <= _0x42ef3d && _0x130ad3['startTime'] + _0x130ad3['duration'] > _0x42ef3d)
                    return this['_boneCurKe' + 'yFrm'][_0x24c65c] = _0x2f4d08, _0x2f4d08;
            return _0xe7181b;
        }
        ['getOrigina' + 'lData'](_0x1fe3eb, _0x3ffe5a, _0x3b2c97, _0x3a893c, _0x3a92b5) {
            var _0xa2194e = this['_anis'][_0x1fe3eb]['nodes'], _0x130963 = this['_boneCurKe' + 'yFrm'];
            _0x130963['length'] < _0xa2194e['length'] && (_0x130963['length'] = _0xa2194e['length']);
            for (var _0x2d6e39 = 0x0, _0x547b1c = 0x0, _0x2aabd7 = _0xa2194e['length'], _0x214870 = 0x0; _0x547b1c < _0x2aabd7; _0x547b1c++) {
                var _0x16f215, _0x45e765 = _0xa2194e[_0x547b1c], _0x64f444 = _0x45e765['keyFrame'];
                _0x16f215 = _0x64f444[this['getNodeKey' + 'Frame'](_0x64f444, _0x547b1c, _0x3a92b5)], _0x45e765['dataOffset'] = _0x214870;
                var _0x3bac04 = _0x3a92b5 - _0x16f215['startTime'], _0x134c7a = _0x45e765['lerpType'];
                if (_0x134c7a)
                    switch (_0x134c7a) {
                    case 0x0:
                    case 0x1:
                        for (_0x2d6e39 = 0x0; _0x2d6e39 < _0x45e765['keyframeWi' + 'dth'];)
                            _0x2d6e39 += _0x45e765['interpolat' + 'ionMethod'][_0x2d6e39](_0x45e765, _0x2d6e39, _0x3ffe5a, _0x214870 + _0x2d6e39, _0x16f215['data'], _0x3bac04, _0x16f215['dData'], _0x16f215['duration'], _0x16f215['nextData']);
                        break;
                    case 0x2:
                        var _0xa5d799 = _0x16f215['interpolat' + 'ionData'], _0x465e5c = _0xa5d799['length'], _0x408416 = 0x0;
                        for (_0x2d6e39 = 0x0; _0x2d6e39 < _0x465e5c;) {
                            var _0x30a47d = _0xa5d799[_0x2d6e39];
                            switch (_0x30a47d) {
                            case 0x6:
                            case 0x7:
                                _0x2d6e39 += _0x5b2b39['interpolat' + 'ion'][_0x30a47d](_0x45e765, _0x408416, _0x3ffe5a, _0x214870 + _0x408416, _0x16f215['data'], _0x3bac04, _0x16f215['dData'], _0x16f215['duration'], _0x16f215['nextData'], _0xa5d799, _0x2d6e39 + 0x1);
                                break;
                            default:
                                _0x2d6e39 += _0x5b2b39['interpolat' + 'ion'][_0x30a47d](_0x45e765, _0x408416, _0x3ffe5a, _0x214870 + _0x408416, _0x16f215['data'], _0x3bac04, _0x16f215['dData'], _0x16f215['duration'], _0x16f215['nextData']);
                            }
                            _0x408416++;
                        }
                    }
                else {
                    for (_0x2d6e39 = 0x0; _0x2d6e39 < _0x45e765['keyframeWi' + 'dth'];)
                        _0x2d6e39 += _0x45e765['interpolat' + 'ionMethod'][_0x2d6e39](_0x45e765, _0x2d6e39, _0x3ffe5a, _0x214870 + _0x2d6e39, _0x16f215['data'], _0x3bac04, _0x16f215['dData'], _0x16f215['duration'], _0x16f215['nextData']);
                }
                _0x214870 += _0x45e765['keyframeWi' + 'dth'];
            }
        }
        ['getNodesCu' + 'rrentFrame' + 'Index'](_0x530ae7, _0x1a6bff) {
            var _0x67967e = this['_anis'][_0x530ae7]['nodes'];
            _0x530ae7 !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x67967e['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x67967e['length']), this['unfixedLas' + 'tAniIndex'] = _0x530ae7);
            for (var _0x5f0f50 = 0x0, _0x47e6ce = _0x67967e['length']; _0x5f0f50 < _0x47e6ce; _0x5f0f50++) {
                var _0x8e3ceb = _0x67967e[_0x5f0f50];
                for (_0x1a6bff < this['unfixedCur' + 'rentTimes'][_0x5f0f50] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x5f0f50] = 0x0), this['unfixedCur' + 'rentTimes'][_0x5f0f50] = _0x1a6bff; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x5f0f50] < _0x8e3ceb['keyFrame']['length'] && !(_0x8e3ceb['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x5f0f50]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0x5f0f50]);)
                    this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x5f0f50]++;
                this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x5f0f50]--;
            }
            return this['unfixedCur' + 'rentFrameI' + 'ndexes'];
        }
        ['getOrigina' + 'lDataUnfix' + 'edRate'](_0x3b5344, _0x4a4ccf, _0x31d5c0) {
            var _0x51a819 = this['_anis'][_0x3b5344]['nodes'];
            _0x3b5344 !== this['unfixedLas' + 'tAniIndex'] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'] = new Uint32Array(_0x51a819['length']), this['unfixedCur' + 'rentTimes'] = new Float32Array(_0x51a819['length']), this['unfixedKey' + 'frames'] = [], this['unfixedLas' + 'tAniIndex'] = _0x3b5344);
            for (var _0x538930 = 0x0, _0x33d625 = 0x0, _0x512529 = _0x51a819['length'], _0x48c1a2 = 0x0; _0x33d625 < _0x512529; _0x33d625++) {
                var _0x29f774 = _0x51a819[_0x33d625];
                for (_0x31d5c0 < this['unfixedCur' + 'rentTimes'][_0x33d625] && (this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x33d625] = 0x0), this['unfixedCur' + 'rentTimes'][_0x33d625] = _0x31d5c0; this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x33d625] < _0x29f774['keyFrame']['length'] && !(_0x29f774['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x33d625]]['startTime'] > this['unfixedCur' + 'rentTimes'][_0x33d625]);)
                    this['unfixedKey' + 'frames'][_0x33d625] = _0x29f774['keyFrame'][this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x33d625]], this['unfixedCur' + 'rentFrameI' + 'ndexes'][_0x33d625]++;
                var _0x2c873d = this['unfixedKey' + 'frames'][_0x33d625];
                _0x29f774['dataOffset'] = _0x48c1a2;
                var _0x27c117 = _0x31d5c0 - _0x2c873d['startTime'];
                if (_0x29f774['lerpType'])
                    switch (_0x29f774['lerpType']) {
                    case 0x0:
                    case 0x1:
                        for (_0x538930 = 0x0; _0x538930 < _0x29f774['keyframeWi' + 'dth'];)
                            _0x538930 += _0x29f774['interpolat' + 'ionMethod'][_0x538930](_0x29f774, _0x538930, _0x4a4ccf, _0x48c1a2 + _0x538930, _0x2c873d['data'], _0x27c117, _0x2c873d['dData'], _0x2c873d['duration'], _0x2c873d['nextData']);
                        break;
                    case 0x2:
                        var _0x5f2192 = _0x2c873d['interpolat' + 'ionData'], _0x535004 = _0x5f2192['length'], _0x189fbe = 0x0;
                        for (_0x538930 = 0x0; _0x538930 < _0x535004;) {
                            var _0x3de8dc = _0x5f2192[_0x538930];
                            switch (_0x3de8dc) {
                            case 0x6:
                            case 0x7:
                                _0x538930 += _0x5b2b39['interpolat' + 'ion'][_0x3de8dc](_0x29f774, _0x189fbe, _0x4a4ccf, _0x48c1a2 + _0x189fbe, _0x2c873d['data'], _0x27c117, _0x2c873d['dData'], _0x2c873d['duration'], _0x2c873d['nextData'], _0x5f2192, _0x538930 + 0x1);
                                break;
                            default:
                                _0x538930 += _0x5b2b39['interpolat' + 'ion'][_0x3de8dc](_0x29f774, _0x189fbe, _0x4a4ccf, _0x48c1a2 + _0x189fbe, _0x2c873d['data'], _0x27c117, _0x2c873d['dData'], _0x2c873d['duration'], _0x2c873d['nextData']);
                            }
                            _0x189fbe++;
                        }
                    }
                else {
                    for (_0x538930 = 0x0; _0x538930 < _0x29f774['keyframeWi' + 'dth'];)
                        _0x538930 += _0x29f774['interpolat' + 'ionMethod'][_0x538930](_0x29f774, _0x538930, _0x4a4ccf, _0x48c1a2 + _0x538930, _0x2c873d['data'], _0x27c117, _0x2c873d['dData'], _0x2c873d['duration'], _0x2c873d['nextData']);
                }
                _0x48c1a2 += _0x29f774['keyframeWi' + 'dth'];
            }
        }
    }
    _0x5b2b39['interpolat' + 'ion'] = [
        _0x5b2b39['_LinearInt' + 'erpolation' + '_0'],
        _0x5b2b39['_Quaternio' + 'nInterpola' + 'tion_1'],
        _0x5b2b39['_AngleInte' + 'rpolation_' + '2'],
        _0x5b2b39['_RadiansIn' + 'terpolatio' + 'n_3'],
        _0x5b2b39['_Matrix4x4' + 'Interpolat' + 'ion_4'],
        _0x5b2b39['_NoInterpo' + 'lation_5'],
        _0x5b2b39['_BezierInt' + 'erpolation' + '_6'],
        _0x5b2b39['_BezierInt' + 'erpolation' + '_7']
    ], _0x3d48ab['AnimationT' + 'emplet'] = _0x5b2b39;
    class _0xda99c8 extends _0x445c15['Graphics'] {
        ['drawSkin'](_0x512e40, _0x2f4a48) {
            this['drawTriang' + 'les'](_0x512e40['texture'], 0x0, 0x0, _0x512e40['vertices'], _0x512e40['uvs'], _0x512e40['indexes'], _0x512e40['transform'] || _0x445c15['Matrix']['EMPTY'], _0x2f4a48);
        }
        static ['create']() {
            return _0xda99c8['_caches']['pop']() || new _0xda99c8();
        }
        static ['recycle'](_0x4aa447) {
            _0x4aa447['clear'](), _0xda99c8['_caches']['push'](_0x4aa447);
        }
    }
    _0xda99c8['_caches'] = [];
    class _0x15ffdd {
        constructor() {
            this['skX'] = 0x0, this['skY'] = 0x0, this['scX'] = 0x1, this['scY'] = 0x1, this['x'] = 0x0, this['y'] = 0x0, this['skewX'] = 0x0, this['skewY'] = 0x0;
        }
        ['initData'](_0x55b9b4) {
            null != _0x55b9b4['x'] && (this['x'] = _0x55b9b4['x']), null != _0x55b9b4['y'] && (this['y'] = _0x55b9b4['y']), null != _0x55b9b4['skX'] && (this['skX'] = _0x55b9b4['skX']), null != _0x55b9b4['skY'] && (this['skY'] = _0x55b9b4['skY']), null != _0x55b9b4['scX'] && (this['scX'] = _0x55b9b4['scX']), null != _0x55b9b4['scY'] && (this['scY'] = _0x55b9b4['scY']);
        }
        ['getMatrix']() {
            var _0x38b96f;
            return (_0x38b96f = this['mMatrix'] ? this['mMatrix'] : this['mMatrix'] = new _0x445c15['Matrix']())['identity'](), _0x38b96f['scale'](this['scX'], this['scY']), (this['skewX'] || this['skewY']) && this['skew'](_0x38b96f, this['skewX'] * Math['PI'] / 0xb4, this['skewY'] * Math['PI'] / 0xb4), _0x38b96f['rotate'](this['skX'] * Math['PI'] / 0xb4), _0x38b96f['translate'](this['x'], this['y']), _0x38b96f;
        }
        ['skew'](_0x70996f, _0x2ba93a, _0x3cb393) {
            var _0x17c6e9 = Math['sin'](_0x3cb393), _0xd7fbf3 = Math['cos'](_0x3cb393), _0x5c4c46 = Math['sin'](_0x2ba93a), _0x26a1c8 = Math['cos'](_0x2ba93a);
            return _0x70996f['setTo'](_0x70996f['a'] * _0x26a1c8 - _0x70996f['b'] * _0x17c6e9, _0x70996f['a'] * _0x5c4c46 + _0x70996f['b'] * _0xd7fbf3, _0x70996f['c'] * _0x26a1c8 - _0x70996f['d'] * _0x17c6e9, _0x70996f['c'] * _0x5c4c46 + _0x70996f['d'] * _0xd7fbf3, _0x70996f['tx'] * _0x26a1c8 - _0x70996f['ty'] * _0x17c6e9, _0x70996f['tx'] * _0x5c4c46 + _0x70996f['ty'] * _0xd7fbf3), _0x70996f;
        }
    }
    class _0x202559 {
        constructor() {
            this['length'] = 0xa, this['resultTran' + 'sform'] = new _0x15ffdd(), this['resultMatr' + 'ix'] = new _0x445c15['Matrix'](), this['inheritSca' + 'le'] = !0x0, this['inheritRot' + 'ation'] = !0x0, this['d'] = -0x1, this['_children'] = [];
        }
        ['setTempMat' + 'rix'](_0x1ccd97) {
            this['_tempMatri' + 'x'] = _0x1ccd97;
            var _0x408831, _0x249975 = 0x0;
            for (_0x249975 = 0x0, _0x408831 = this['_children']['length']; _0x249975 < _0x408831; _0x249975++)
                this['_children'][_0x249975]['setTempMat' + 'rix'](this['_tempMatri' + 'x']);
        }
        ['update'](_0x534cad = null) {
            var _0x42238b;
            if (this['rotation'] = this['transform']['skX'], _0x534cad)
                _0x42238b = this['resultTran' + 'sform']['getMatrix'](), _0x445c15['Matrix']['mul'](_0x42238b, _0x534cad, this['resultMatr' + 'ix']), this['resultRota' + 'tion'] = this['rotation'];
            else {
                if (this['resultRota' + 'tion'] = this['rotation'] + this['parentBone']['resultRota' + 'tion'], this['parentBone']) {
                    if (this['inheritRot' + 'ation'] && this['inheritSca' + 'le'])
                        _0x42238b = this['resultTran' + 'sform']['getMatrix'](), _0x445c15['Matrix']['mul'](_0x42238b, this['parentBone']['resultMatr' + 'ix'], this['resultMatr' + 'ix']);
                    else {
                        var _0x28ee4d, _0x29090e, _0x59fa12, _0x30c624 = this['parentBone'], _0x1c4e51 = this['parentBone']['resultMatr' + 'ix'];
                        _0x42238b = this['resultTran' + 'sform']['getMatrix']();
                        var _0x574c9a = _0x1c4e51['a'] * _0x42238b['tx'] + _0x1c4e51['c'] * _0x42238b['ty'] + _0x1c4e51['tx'], _0x379a45 = _0x1c4e51['b'] * _0x42238b['tx'] + _0x1c4e51['d'] * _0x42238b['ty'] + _0x1c4e51['ty'], _0x29b5cf = new _0x445c15['Matrix']();
                        this['inheritRot' + 'ation'] ? (_0x28ee4d = Math['atan2'](_0x30c624['resultMatr' + 'ix']['b'], _0x30c624['resultMatr' + 'ix']['a']), _0x29090e = Math['cos'](_0x28ee4d), _0x59fa12 = Math['sin'](_0x28ee4d), _0x29b5cf['setTo'](_0x29090e, _0x59fa12, -_0x59fa12, _0x29090e, 0x0, 0x0), _0x445c15['Matrix']['mul'](this['_tempMatri' + 'x'], _0x29b5cf, _0x445c15['Matrix']['TEMP']), _0x445c15['Matrix']['TEMP']['copyTo'](_0x29b5cf), _0x42238b = this['resultTran' + 'sform']['getMatrix'](), _0x445c15['Matrix']['mul'](_0x42238b, _0x29b5cf, this['resultMatr' + 'ix']), this['resultTran' + 'sform']['scX'] * this['resultTran' + 'sform']['scY'] < 0x0 && this['resultMatr' + 'ix']['rotate'](0.5 * Math['PI']), this['resultMatr' + 'ix']['tx'] = _0x574c9a, this['resultMatr' + 'ix']['ty'] = _0x379a45) : (this['inheritSca' + 'le'], _0x42238b = this['resultTran' + 'sform']['getMatrix'](), _0x445c15['Matrix']['TEMP']['identity'](), _0x445c15['Matrix']['TEMP']['d'] = this['d'], _0x445c15['Matrix']['mul'](_0x42238b, _0x445c15['Matrix']['TEMP'], this['resultMatr' + 'ix']), this['resultMatr' + 'ix']['tx'] = _0x574c9a, this['resultMatr' + 'ix']['ty'] = _0x379a45);
                    }
                } else
                    (_0x42238b = this['resultTran' + 'sform']['getMatrix']())['copyTo'](this['resultMatr' + 'ix']);
            }
            var _0x2d9aa4, _0x34bf59 = 0x0;
            for (_0x34bf59 = 0x0, _0x2d9aa4 = this['_children']['length']; _0x34bf59 < _0x2d9aa4; _0x34bf59++)
                this['_children'][_0x34bf59]['update']();
        }
        ['updateChil' + 'd']() {
            var _0x40f3df, _0x3a5598 = 0x0;
            for (_0x3a5598 = 0x0, _0x40f3df = this['_children']['length']; _0x3a5598 < _0x40f3df; _0x3a5598++)
                this['_children'][_0x3a5598]['update']();
        }
        ['setRotatio' + 'n'](_0x8fa46b) {
            this['_sprite'] && (this['_sprite']['rotation'] = 0xb4 * _0x8fa46b / Math['PI']);
        }
        ['updateDraw'](_0x5df593, _0x2fa7c1) {
            _0x202559['ShowBones'] && !_0x202559['ShowBones'][this['name']] || (this['_sprite'] ? (this['_sprite']['x'] = _0x5df593 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x2fa7c1 + this['resultMatr' + 'ix']['ty']) : (this['_sprite'] = new _0x445c15['Sprite'](), this['_sprite']['graphics']['drawCircle'](0x0, 0x0, 0x5, '#ff0000'), this['_sprite']['graphics']['drawLine'](0x0, 0x0, this['length'], 0x0, '#00ff00'), this['_sprite']['graphics']['fillText'](this['name'], 0x0, 0x0, '20px\x20Arial', '#00ff00', 'center'), _0x445c15['ILaya']['stage']['addChild'](this['_sprite']), this['_sprite']['x'] = _0x5df593 + this['resultMatr' + 'ix']['tx'], this['_sprite']['y'] = _0x2fa7c1 + this['resultMatr' + 'ix']['ty']));
            var _0x265411, _0x5c0f67 = 0x0;
            for (_0x5c0f67 = 0x0, _0x265411 = this['_children']['length']; _0x5c0f67 < _0x265411; _0x5c0f67++)
                this['_children'][_0x5c0f67]['updateDraw'](_0x5df593, _0x2fa7c1);
        }
        ['addChild'](_0x454862) {
            this['_children']['push'](_0x454862), _0x454862['parentBone'] = this;
        }
        ['findBone'](_0x389bf5) {
            if (this['name'] == _0x389bf5)
                return this;
            var _0x5e2391, _0x3c4d9b, _0x3c291e;
            for (_0x5e2391 = 0x0, _0x3c4d9b = this['_children']['length']; _0x5e2391 < _0x3c4d9b; _0x5e2391++)
                if (_0x3c291e = this['_children'][_0x5e2391]['findBone'](_0x389bf5))
                    return _0x3c291e;
            return null;
        }
        ['localToWor' + 'ld'](_0x50ae91) {
            var _0x4e47e1 = _0x50ae91[0x0], _0x22245c = _0x50ae91[0x1];
            _0x50ae91[0x0] = _0x4e47e1 * this['resultMatr' + 'ix']['a'] + _0x22245c * this['resultMatr' + 'ix']['c'] + this['resultMatr' + 'ix']['tx'], _0x50ae91[0x1] = _0x4e47e1 * this['resultMatr' + 'ix']['b'] + _0x22245c * this['resultMatr' + 'ix']['d'] + this['resultMatr' + 'ix']['ty'];
        }
    }
    _0x202559['ShowBones'] = {};
    class _0x6adb48 {
        constructor() {
        }
        static ['getRelativ' + 'eUV'](_0x1cd558, _0x2c51a9, _0x1c688e = null) {
            var _0x598b7f, _0x4372f1, _0x460ade = _0x1cd558[0x0], _0x4f6584 = _0x1cd558[0x2] - _0x1cd558[0x0], _0xf98711 = _0x1cd558[0x1], _0x209268 = _0x1cd558[0x5] - _0x1cd558[0x1];
            _0x1c688e || (_0x1c688e = []), _0x1c688e['length'] = _0x2c51a9['length'], _0x4372f1 = _0x1c688e['length'];
            var _0x2c79f0 = 0x1 / _0x4f6584, _0x27917b = 0x1 / _0x209268;
            for (_0x598b7f = 0x0; _0x598b7f < _0x4372f1; _0x598b7f += 0x2)
                _0x1c688e[_0x598b7f] = (_0x2c51a9[_0x598b7f] - _0x460ade) * _0x2c79f0, _0x1c688e[_0x598b7f + 0x1] = (_0x2c51a9[_0x598b7f + 0x1] - _0xf98711) * _0x27917b;
            return _0x1c688e;
        }
        static ['getAbsolut' + 'eUV'](_0x210950, _0x4dfa5a, _0x23879b = null) {
            if (0x0 == _0x210950[0x0] && 0x0 == _0x210950[0x1] && 0x1 == _0x210950[0x4] && 0x1 == _0x210950[0x5])
                return _0x23879b ? (_0x445c15['Utils']['copyArray'](_0x23879b, _0x4dfa5a), _0x23879b) : _0x4dfa5a;
            var _0x2fa8e2, _0x36c875, _0x3230a5 = _0x210950[0x0], _0x5f0afe = _0x210950[0x2] - _0x210950[0x0], _0x24c415 = _0x210950[0x1], _0x26486f = _0x210950[0x5] - _0x210950[0x1];
            for (_0x23879b || (_0x23879b = []), _0x23879b['length'] = _0x4dfa5a['length'], _0x36c875 = _0x23879b['length'], _0x2fa8e2 = 0x0; _0x2fa8e2 < _0x36c875; _0x2fa8e2 += 0x2)
                _0x23879b[_0x2fa8e2] = _0x4dfa5a[_0x2fa8e2] * _0x5f0afe + _0x3230a5, _0x23879b[_0x2fa8e2 + 0x1] = _0x4dfa5a[_0x2fa8e2 + 0x1] * _0x26486f + _0x24c415;
            return _0x23879b;
        }
    }
    class _0x36669e {
        constructor() {
            this['uvs'] = new Float32Array([
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
            ]), this['useUvTrans' + 'form'] = !0x1, this['canvasPadd' + 'ing'] = 0x1;
        }
        ['getBounds']() {
            return _0x445c15['Rectangle']['_getWrapRe' + 'c'](this['vertices']);
        }
    }
    class _0x539ad3 extends _0x36669e {
        constructor() {
            super();
        }
        ['init2'](_0x269441, _0x4ee5e7, _0x22f101, _0x408bb9) {
            this['transform'] && (this['transform'] = null);
            var _0x3db6de = _0x4ee5e7 || [
                0x0,
                0x1,
                0x3,
                0x3,
                0x1,
                0x2
            ];
            this['texture'] = _0x269441, this['indexes'] = new Uint16Array(_0x3db6de), this['vertices'] = new Float32Array(_0x22f101), this['uvs'] = new Float32Array(_0x408bb9);
        }
    }
    class _0x34f654 {
        constructor() {
            this['srcDisplay' + 'Index'] = -0x1, this['type'] = 'src', this['displayInd' + 'ex'] = -0x1, this['originalIn' + 'dex'] = -0x1, this['_replaceDi' + 'c'] = {};
        }
        ['showSlotDa' + 'ta'](_0x760620, _0x35458c = !0x0) {
            this['currSlotDa' + 'ta'] = _0x760620, _0x35458c && (this['displayInd' + 'ex'] = this['srcDisplay' + 'Index']), this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
        }
        ['showDispla' + 'yByName'](_0xd51366) {
            this['currSlotDa' + 'ta'] && this['showDispla' + 'yByIndex'](this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0xd51366));
        }
        ['replaceDis' + 'playByName'](_0x5c039f, _0x1676db) {
            var _0xf75261, _0x4d8bb8;
            this['currSlotDa' + 'ta'] && (_0xf75261 = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x5c039f), _0x4d8bb8 = this['currSlotDa' + 'ta']['getDisplay' + 'ByName'](_0x1676db), this['replaceDis' + 'playByInde' + 'x'](_0xf75261, _0x4d8bb8));
        }
        ['replaceDis' + 'playByInde' + 'x'](_0x132c76, _0xd38365) {
            this['currSlotDa' + 'ta'] && (this['_replaceDi' + 'c'][_0x132c76] = _0xd38365, this['originalIn' + 'dex'] == _0x132c76 && this['showDispla' + 'yByIndex'](_0x132c76));
        }
        ['showDispla' + 'yByIndex'](_0x118f54) {
            if (this['originalIn' + 'dex'] = _0x118f54, null != this['_replaceDi' + 'c'][_0x118f54] && (_0x118f54 = this['_replaceDi' + 'c'][_0x118f54]), this['currSlotDa' + 'ta'] && _0x118f54 > -0x1 && _0x118f54 < this['currSlotDa' + 'ta']['displayArr']['length']) {
                if (this['displayInd' + 'ex'] = _0x118f54, this['currDispla' + 'yData'] = this['currSlotDa' + 'ta']['displayArr'][_0x118f54], this['currDispla' + 'yData']) {
                    var _0x505deb = this['currDispla' + 'yData']['name'];
                    this['currTextur' + 'e'] = this['templet']['getTexture'](_0x505deb), this['currTextur' + 'e'] && 0x0 == this['currDispla' + 'yData']['type'] && this['currDispla' + 'yData']['uvs'] && (this['currTextur' + 'e'] = this['currDispla' + 'yData']['createText' + 'ure'](this['currTextur' + 'e']));
                }
            } else
                this['displayInd' + 'ex'] = -0x1, this['currDispla' + 'yData'] = null, this['currTextur' + 'e'] = null;
        }
        ['replaceSki' + 'n'](_0x3e6d57) {
            this['_diyTextur' + 'e'] = _0x3e6d57, this['_curDiyUV'] && (this['_curDiyUV']['length'] = 0x0), this['currDispla' + 'yData'] && this['_diyTextur' + 'e'] == this['currDispla' + 'yData']['texture'] && (this['_diyTextur' + 'e'] = null);
        }
        ['setParentM' + 'atrix'](_0x542a25) {
            this['_parentMat' + 'rix'] = _0x542a25;
        }
        static ['createSkin' + 'Mesh']() {
            return new _0x539ad3();
        }
        static ['isSameArr'](_0x15181d, _0x2db87f) {
            if (_0x15181d['length'] != _0x2db87f['length'])
                return !0x1;
            var _0x593052, _0x470bc6;
            for (_0x470bc6 = _0x15181d['length'], _0x593052 = 0x0; _0x593052 < _0x470bc6; _0x593052++)
                if (_0x15181d[_0x593052] != _0x2db87f[_0x593052])
                    return !0x1;
            return !0x0;
        }
        ['getSaveVer' + 'ticle'](_0x390fcf) {
            return _0x34f654['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cVerticle'] && _0x34f654['isSameArr'](_0x390fcf, this['_preGraphi' + 'cVerticle']) ? _0x390fcf = this['_preGraphi' + 'cVerticle'] : (_0x390fcf = _0x445c15['ILaya']['Utils']['copyArray']([], _0x390fcf), this['_preGraphi' + 'cVerticle'] = _0x390fcf), _0x390fcf;
        }
        static ['isSameMatr' + 'ix'](_0x32006f, _0xbb49dd) {
            return _0x32006f['a'] == _0xbb49dd['a'] && _0x32006f['b'] == _0xbb49dd['b'] && _0x32006f['c'] == _0xbb49dd['c'] && _0x32006f['d'] == _0xbb49dd['d'] && Math['abs'](_0x32006f['tx'] - _0xbb49dd['tx']) < 0.00001 && Math['abs'](_0x32006f['ty'] - _0xbb49dd['ty']) < 0.00001;
        }
        ['getSaveMat' + 'rix'](_0x1d16fa) {
            if (_0x34f654['useSameMat' + 'rixAndVert' + 'icle'] && this['_preGraphi' + 'cMatrix'] && _0x34f654['isSameMatr' + 'ix'](_0x1d16fa, this['_preGraphi' + 'cMatrix']))
                _0x1d16fa = this['_preGraphi' + 'cMatrix'];
            else {
                var _0x3e7fab = _0x1d16fa['clone']();
                _0x1d16fa = _0x3e7fab, this['_preGraphi' + 'cMatrix'] = _0x1d16fa;
            }
            return _0x1d16fa;
        }
        ['draw'](_0x273221, _0xb9e768, _0x3da4eb = !0x1, _0x425c32 = 0x1) {
            if ((null != this['_diyTextur' + 'e'] || null != this['currTextur' + 'e']) && null != this['currDispla' + 'yData'] || this['currDispla' + 'yData'] && 0x3 == this['currDispla' + 'yData']['type']) {
                var _0x5fe4f, _0x36f88f = this['currTextur' + 'e'];
                switch (this['_diyTextur' + 'e'] && (_0x36f88f = this['_diyTextur' + 'e']), this['currDispla' + 'yData']['type']) {
                case 0x0:
                    if (_0x273221) {
                        var _0x1c2e19 = this['getDisplay' + 'Matrix']();
                        if (this['_parentMat' + 'rix']) {
                            var _0x29992d = !0x1;
                            if (_0x1c2e19) {
                                var _0x1b394d;
                                if (_0x445c15['Matrix']['mul'](_0x1c2e19, this['_parentMat' + 'rix'], _0x445c15['Matrix']['TEMP']), _0x3da4eb ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x445c15['Matrix']()), _0x1b394d = this['_resultMat' + 'rix']) : _0x1b394d = _0x34f654['_tempResul' + 'tMatrix'], this['_diyTextur' + 'e'] && this['currDispla' + 'yData']['uvs']) {
                                    var _0x533cd1 = _0x34f654['_tempMatri' + 'x'];
                                    _0x533cd1['identity'](), this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x533cd1['d'] = -0x1), this['currDispla' + 'yData']['uvs'][0x0] > this['currDispla' + 'yData']['uvs'][0x4] && this['currDispla' + 'yData']['uvs'][0x1] > this['currDispla' + 'yData']['uvs'][0x5] && (_0x29992d = !0x0, _0x533cd1['rotate'](-Math['PI'] / 0x2)), _0x445c15['Matrix']['mul'](_0x533cd1, _0x445c15['Matrix']['TEMP'], _0x1b394d);
                                } else
                                    _0x445c15['Matrix']['TEMP']['copyTo'](_0x1b394d);
                                _0x3da4eb || (_0x1b394d = this['getSaveMat' + 'rix'](_0x1b394d)), _0x1b394d['_checkTran' + 'sform'](), _0x29992d ? _0x273221['drawTextur' + 'e'](_0x36f88f, -this['currDispla' + 'yData']['height'] / 0x2, -this['currDispla' + 'yData']['width'] / 0x2, this['currDispla' + 'yData']['height'], this['currDispla' + 'yData']['width'], _0x1b394d, _0x425c32) : _0x273221['drawTextur' + 'e'](_0x36f88f, -this['currDispla' + 'yData']['width'] / 0x2, -this['currDispla' + 'yData']['height'] / 0x2, this['currDispla' + 'yData']['width'], this['currDispla' + 'yData']['height'], _0x1b394d, _0x425c32);
                            }
                        }
                    }
                    break;
                case 0x1:
                    if (_0x3da4eb ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x34f654['createSkin' + 'Mesh']()), _0x5fe4f = this['_skinSprit' + 'e']) : _0x5fe4f = _0x34f654['createSkin' + 'Mesh'](), null == _0x5fe4f)
                        return;
                    var _0x3201f1;
                    if (null == this['currDispla' + 'yData']['bones']) {
                        var _0x593a4d, _0x1d8e00 = this['currDispla' + 'yData']['weights'];
                        this['deformData'] && (_0x1d8e00 = this['deformData']), this['_diyTextur' + 'e'] ? (this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x6adb48['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x6adb48['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x593a4d = this['_curDiyUV']) : _0x593a4d = this['currDispla' + 'yData']['uvs'], this['_mVerticle' + 'Arr'] = _0x1d8e00, this['currDispla' + 'yData']['triangles']['length'], (_0x3201f1 = this['currDispla' + 'yData']['triangles'], this['deformData'] && (_0x3da4eb || (this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']))), _0x5fe4f['init2'](_0x36f88f, _0x3201f1, this['_mVerticle' + 'Arr'], _0x593a4d));
                        var _0x30dec5, _0x55ab2b = this['getDisplay' + 'Matrix']();
                        if (this['_parentMat' + 'rix']) {
                            if (_0x55ab2b)
                                _0x445c15['Matrix']['mul'](_0x55ab2b, this['_parentMat' + 'rix'], _0x445c15['Matrix']['TEMP']), _0x3da4eb ? (null == this['_resultMat' + 'rix'] && (this['_resultMat' + 'rix'] = new _0x445c15['Matrix']()), _0x30dec5 = this['_resultMat' + 'rix']) : _0x30dec5 = _0x34f654['_tempResul' + 'tMatrix'], _0x445c15['Matrix']['TEMP']['copyTo'](_0x30dec5), _0x3da4eb || (_0x30dec5 = this['getSaveMat' + 'rix'](_0x30dec5)), _0x5fe4f['transform'] = _0x30dec5;
                        }
                    } else
                        this['skinMesh'](_0xb9e768, _0x5fe4f);
                    _0x273221['drawSkin'](_0x5fe4f, _0x425c32);
                    break;
                case 0x2:
                    if (_0x3da4eb ? (null == this['_skinSprit' + 'e'] && (this['_skinSprit' + 'e'] = _0x34f654['createSkin' + 'Mesh']()), _0x5fe4f = this['_skinSprit' + 'e']) : _0x5fe4f = _0x34f654['createSkin' + 'Mesh'](), null == _0x5fe4f)
                        return;
                    this['skinMesh'](_0xb9e768, _0x5fe4f), _0x273221['drawSkin'](_0x5fe4f, _0x425c32);
                }
            }
        }
        ['skinMesh'](_0xddd3c, _0x5ac899) {
            var _0x51c564, _0x3fa63c = this['currTextur' + 'e'], _0x30f384 = this['currDispla' + 'yData']['bones'];
            this['_diyTextur' + 'e'] ? (_0x3fa63c = this['_diyTextur' + 'e'], this['_curDiyUV'] || (this['_curDiyUV'] = []), 0x0 == this['_curDiyUV']['length'] && (this['_curDiyUV'] = _0x6adb48['getRelativ' + 'eUV'](this['currTextur' + 'e']['uv'], this['currDispla' + 'yData']['uvs'], this['_curDiyUV']), this['_curDiyUV'] = _0x6adb48['getAbsolut' + 'eUV'](this['_diyTextur' + 'e']['uv'], this['_curDiyUV'], this['_curDiyUV'])), _0x51c564 = this['_curDiyUV']) : _0x51c564 = this['currDispla' + 'yData']['uvs'];
            var _0x46a9c9, _0x21c933, _0x3168ba, _0x79137c, _0x39140e, _0x2b096b = this['currDispla' + 'yData']['weights'], _0xd18e61 = this['currDispla' + 'yData']['triangles'], _0x1bc6e6 = 0x0, _0x601fab = 0x0, _0x1f5181 = 0x0, _0x1219dc = 0x0, _0xbdc4d5 = 0x0, _0x5cc878 = 0x0, _0x5e06fc = 0x0;
            if (_0x34f654['_tempVerti' + 'cleArr']['length'] = 0x0, _0x39140e = _0x34f654['_tempVerti' + 'cleArr'], this['deformData'] && this['deformData']['length'] > 0x0) {
                var _0x534314 = 0x0;
                for (_0x5cc878 = 0x0, _0x5e06fc = _0x30f384['length']; _0x5cc878 < _0x5e06fc;) {
                    for (_0x1f5181 = _0x30f384[_0x5cc878++] + _0x5cc878, _0x1bc6e6 = 0x0, _0x601fab = 0x0; _0x5cc878 < _0x1f5181; _0x5cc878++)
                        _0x21c933 = _0xddd3c[_0x30f384[_0x5cc878]], _0x3168ba = _0x2b096b[_0x1219dc] + this['deformData'][_0x534314++], _0x79137c = _0x2b096b[_0x1219dc + 0x1] + this['deformData'][_0x534314++], _0xbdc4d5 = _0x2b096b[_0x1219dc + 0x2], _0x1bc6e6 += (_0x3168ba * _0x21c933['a'] + _0x79137c * _0x21c933['c'] + _0x21c933['tx']) * _0xbdc4d5, _0x601fab += (_0x3168ba * _0x21c933['b'] + _0x79137c * _0x21c933['d'] + _0x21c933['ty']) * _0xbdc4d5, _0x1219dc += 0x3;
                    _0x39140e['push'](_0x1bc6e6, _0x601fab);
                }
            } else
                for (_0x5cc878 = 0x0, _0x5e06fc = _0x30f384['length']; _0x5cc878 < _0x5e06fc;) {
                    for (_0x1f5181 = _0x30f384[_0x5cc878++] + _0x5cc878, _0x1bc6e6 = 0x0, _0x601fab = 0x0; _0x5cc878 < _0x1f5181; _0x5cc878++)
                        _0x21c933 = _0xddd3c[_0x30f384[_0x5cc878]], _0x3168ba = _0x2b096b[_0x1219dc], _0x79137c = _0x2b096b[_0x1219dc + 0x1], _0xbdc4d5 = _0x2b096b[_0x1219dc + 0x2], _0x1bc6e6 += (_0x3168ba * _0x21c933['a'] + _0x79137c * _0x21c933['c'] + _0x21c933['tx']) * _0xbdc4d5, _0x601fab += (_0x3168ba * _0x21c933['b'] + _0x79137c * _0x21c933['d'] + _0x21c933['ty']) * _0xbdc4d5, _0x1219dc += 0x3;
                    _0x39140e['push'](_0x1bc6e6, _0x601fab);
                }
            this['_mVerticle' + 'Arr'] = _0x39140e, _0x46a9c9 = _0xd18e61, this['_mVerticle' + 'Arr'] = this['getSaveVer' + 'ticle'](this['_mVerticle' + 'Arr']), _0x5ac899['init2'](_0x3fa63c, _0x46a9c9, this['_mVerticle' + 'Arr'], _0x51c564);
        }
        ['drawBonePo' + 'int'](_0x495b38) {
            _0x495b38 && this['_parentMat' + 'rix'] && _0x495b38['drawCircle'](this['_parentMat' + 'rix']['tx'], this['_parentMat' + 'rix']['ty'], 0x5, '#ff0000');
        }
        ['getDisplay' + 'Matrix']() {
            return this['currDispla' + 'yData'] ? this['currDispla' + 'yData']['transform']['getMatrix']() : null;
        }
        ['getMatrix']() {
            return this['_resultMat' + 'rix'];
        }
        ['copy']() {
            var _0x70add4 = new _0x34f654();
            return _0x70add4['type'] = 'copy', _0x70add4['name'] = this['name'], _0x70add4['attachment' + 'Name'] = this['attachment' + 'Name'], _0x70add4['srcDisplay' + 'Index'] = this['srcDisplay' + 'Index'], _0x70add4['parent'] = this['parent'], _0x70add4['displayInd' + 'ex'] = this['displayInd' + 'ex'], _0x70add4['templet'] = this['templet'], _0x70add4['currSlotDa' + 'ta'] = this['currSlotDa' + 'ta'], _0x70add4['currTextur' + 'e'] = this['currTextur' + 'e'], _0x70add4['currDispla' + 'yData'] = this['currDispla' + 'yData'], _0x70add4;
        }
    }
    _0x34f654['_tempMatri' + 'x'] = new _0x445c15['Matrix'](), _0x34f654['_tempResul' + 'tMatrix'] = new _0x445c15['Matrix'](), _0x34f654['useSameMat' + 'rixAndVert' + 'icle'] = !0x0, _0x34f654['_tempVerti' + 'cleArr'] = [];
    class _0x5b3010 {
        constructor() {
            this['deformSlot' + 'DataList'] = [];
        }
    }
    class _0x213fd0 {
        constructor() {
            this['deformSlot' + 'DisplayLis' + 't'] = [];
        }
    }
    class _0x35d187 {
        constructor() {
            this['slotIndex'] = -0x1, this['timeList'] = [], this['vectices'] = [], this['tweenKeyLi' + 'st'] = [], this['frameIndex'] = 0x0;
        }
        ['binarySear' + 'ch1'](_0x44cda2, _0x4ee630) {
            var _0x4d5872 = 0x0, _0x3b993b = _0x44cda2['length'] - 0x2;
            if (0x0 == _0x3b993b)
                return 0x1;
            for (var _0x675a30 = _0x3b993b >>> 0x1;;) {
                if (_0x44cda2[Math['floor'](_0x675a30 + 0x1)] <= _0x4ee630 ? _0x4d5872 = _0x675a30 + 0x1 : _0x3b993b = _0x675a30, _0x4d5872 == _0x3b993b)
                    return _0x4d5872 + 0x1;
                _0x675a30 = _0x4d5872 + _0x3b993b >>> 0x1;
            }
            return 0x0;
        }
        ['apply'](_0x372ce9, _0x5af1e8, _0x261015 = 0x1) {
            if (_0x372ce9 += 0.05, !(this['timeList']['length'] <= 0x0)) {
                var _0x431327 = 0x0;
                if (!(_0x372ce9 < this['timeList'][0x0])) {
                    var _0x11220f = this['vectices'][0x0]['length'], _0x3d5586 = [], _0x49d9e9 = this['binarySear' + 'ch1'](this['timeList'], _0x372ce9);
                    if (this['frameIndex'] = _0x49d9e9, _0x372ce9 >= this['timeList'][this['timeList']['length'] - 0x1]) {
                        var _0x3561a3 = this['vectices'][this['vectices']['length'] - 0x1];
                        if (_0x261015 < 0x1) {
                            for (_0x431327 = 0x0; _0x431327 < _0x11220f; _0x431327++)
                                _0x3d5586[_0x431327] += (_0x3561a3[_0x431327] - _0x3d5586[_0x431327]) * _0x261015;
                        } else {
                            for (_0x431327 = 0x0; _0x431327 < _0x11220f; _0x431327++)
                                _0x3d5586[_0x431327] = _0x3561a3[_0x431327];
                        }
                        this['deformData'] = _0x3d5586;
                    } else {
                        var _0x59caed, _0x34a912 = this['vectices'][this['frameIndex'] - 0x1], _0x3a2553 = this['vectices'][this['frameIndex']], _0xf5117c = this['timeList'][this['frameIndex'] - 0x1], _0x5b8ec1 = this['timeList'][this['frameIndex']];
                        for (_0x261015 = this['tweenKeyLi' + 'st'][_0x49d9e9 - 0x1] ? (_0x372ce9 - _0xf5117c) / (_0x5b8ec1 - _0xf5117c) : 0x0, _0x431327 = 0x0; _0x431327 < _0x11220f; _0x431327++)
                            _0x59caed = _0x34a912[_0x431327], _0x3d5586[_0x431327] = _0x59caed + (_0x3a2553[_0x431327] - _0x59caed) * _0x261015;
                        this['deformData'] = _0x3d5586;
                    }
                }
            }
        }
    }
    class _0x356be8 {
        constructor() {
            this['drawOrder'] = [];
        }
    }
    class _0x519594 {
        constructor() {
        }
    }
    class _0x2687cb {
        constructor(_0x35813f, _0x4ca1b9) {
            this['isSpine'] = !0x0, this['isDebug'] = !0x1, this['_targetBon' + 'e'] = _0x4ca1b9[_0x35813f['targetBone' + 'Index']], this['isSpine'] = _0x35813f['isSpine'], null == this['_bones'] && (this['_bones'] = []), this['_bones']['length'] = 0x0;
            for (var _0xfeb2fb = 0x0, _0x3243e8 = _0x35813f['boneIndexs']['length']; _0xfeb2fb < _0x3243e8; _0xfeb2fb++)
                this['_bones']['push'](_0x4ca1b9[_0x35813f['boneIndexs'][_0xfeb2fb]]);
            this['name'] = _0x35813f['name'], this['mix'] = _0x35813f['mix'], this['bendDirect' + 'ion'] = _0x35813f['bendDirect' + 'ion'];
        }
        ['apply']() {
            switch (this['_bones']['length']) {
            case 0x1:
                this['_applyIk1'](this['_bones'][0x0], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['mix']);
                break;
            case 0x2:
                this['isSpine'] ? this['_applyIk2'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']) : this['_applyIk3'](this['_bones'][0x0], this['_bones'][0x1], this['_targetBon' + 'e']['resultMatr' + 'ix']['tx'], this['_targetBon' + 'e']['resultMatr' + 'ix']['ty'], this['bendDirect' + 'ion'], this['mix']);
            }
        }
        ['_applyIk1'](_0x4c19b8, _0x43e915, _0x184008, _0x513c3c) {
            var _0x5c6a3e = _0x4c19b8['parentBone'], _0x40536a = 0x1 / (_0x5c6a3e['resultMatr' + 'ix']['a'] * _0x5c6a3e['resultMatr' + 'ix']['d'] - _0x5c6a3e['resultMatr' + 'ix']['b'] * _0x5c6a3e['resultMatr' + 'ix']['c']), _0x2e6c6f = _0x43e915 - _0x5c6a3e['resultMatr' + 'ix']['tx'], _0x575730 = _0x184008 - _0x5c6a3e['resultMatr' + 'ix']['ty'], _0xaf5abf = (_0x2e6c6f * _0x5c6a3e['resultMatr' + 'ix']['d'] - _0x575730 * _0x5c6a3e['resultMatr' + 'ix']['c']) * _0x40536a - _0x4c19b8['transform']['x'], _0x4e2ee0 = (_0x575730 * _0x5c6a3e['resultMatr' + 'ix']['a'] - _0x2e6c6f * _0x5c6a3e['resultMatr' + 'ix']['b']) * _0x40536a - _0x4c19b8['transform']['y'], _0x72b2d6 = Math['atan2'](_0x4e2ee0, _0xaf5abf) * _0x2687cb['radDeg'] - 0x0 - _0x4c19b8['transform']['skX'];
            _0x4c19b8['transform']['scX'] < 0x0 && (_0x72b2d6 += 0xb4), _0x72b2d6 > 0xb4 ? _0x72b2d6 -= 0x168 : _0x72b2d6 < -0xb4 && (_0x72b2d6 += 0x168), _0x4c19b8['transform']['skX'] = _0x4c19b8['transform']['skY'] = _0x4c19b8['transform']['skX'] + _0x72b2d6 * _0x513c3c, _0x4c19b8['update']();
        }
        ['updatePos'](_0x11b16a, _0x58ed52) {
            this['_sp'] && this['_sp']['pos'](_0x11b16a, _0x58ed52);
        }
        ['_applyIk2'](_0x1472a2, _0xac0f29, _0x3e0975, _0x5995c0, _0x36a763, _0x2b7ad5) {
            if (0x0 != _0x2b7ad5) {
                var _0x37ac1a, _0xc69010, _0x577912, _0x288d39 = _0x1472a2['resultTran' + 'sform']['x'], _0xcb303 = _0x1472a2['resultTran' + 'sform']['y'], _0xfae5cd = _0x1472a2['transform']['scX'], _0xecdae3 = _0x1472a2['transform']['scY'], _0x44521f = _0xac0f29['transform']['scX'];
                _0xfae5cd < 0x0 ? (_0xfae5cd = -_0xfae5cd, _0x37ac1a = 0xb4, _0x577912 = -0x1) : (_0x37ac1a = 0x0, _0x577912 = 0x1), _0xecdae3 < 0x0 && (_0xecdae3 = -_0xecdae3, _0x577912 = -_0x577912), _0x44521f < 0x0 ? (_0x44521f = -_0x44521f, _0xc69010 = 0xb4) : _0xc69010 = 0x0;
                var _0x1ff508, _0x30ec54, _0x1cf14d, _0x50e970 = _0xac0f29['resultTran' + 'sform']['x'], _0x3f3693 = _0x1472a2['resultMatr' + 'ix']['a'], _0x1dd33d = _0x1472a2['resultMatr' + 'ix']['c'], _0x4bfd13 = _0x1472a2['resultMatr' + 'ix']['b'], _0x1ddaa2 = _0x1472a2['resultMatr' + 'ix']['d'], _0x4b4333 = Math['abs'](_0xfae5cd - _0xecdae3) <= 0.0001;
                _0x4b4333 ? (_0x30ec54 = _0x3f3693 * _0x50e970 + _0x1dd33d * (_0x1ff508 = _0xac0f29['resultTran' + 'sform']['y']) + _0x1472a2['resultMatr' + 'ix']['tx'], _0x1cf14d = _0x4bfd13 * _0x50e970 + _0x1ddaa2 * _0x1ff508 + _0x1472a2['resultMatr' + 'ix']['ty']) : (_0x1ff508 = 0x0, _0x30ec54 = _0x3f3693 * _0x50e970 + _0x1472a2['resultMatr' + 'ix']['tx'], _0x1cf14d = _0x4bfd13 * _0x50e970 + _0x1472a2['resultMatr' + 'ix']['ty']), this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x445c15['Sprite'](), _0x445c15['ILaya']['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x3e0975, _0x5995c0, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x30ec54, _0x1cf14d, 0xf, '#ff00ff')), _0x1472a2['setRotatio' + 'n'](Math['atan2'](_0x1cf14d - _0x1472a2['resultMatr' + 'ix']['ty'], _0x30ec54 - _0x1472a2['resultMatr' + 'ix']['tx']));
                var _0x521113 = _0x1472a2['parentBone'];
                _0x3f3693 = _0x521113['resultMatr' + 'ix']['a'], _0x1dd33d = _0x521113['resultMatr' + 'ix']['c'], _0x4bfd13 = _0x521113['resultMatr' + 'ix']['b'];
                var _0x4d64e7, _0x3baa31, _0x395e36 = 0x1 / (_0x3f3693 * (_0x1ddaa2 = _0x521113['resultMatr' + 'ix']['d']) - _0x1dd33d * _0x4bfd13), _0x17c82c = _0x3e0975 - _0x521113['resultMatr' + 'ix']['tx'], _0x4b74aa = _0x5995c0 - _0x521113['resultMatr' + 'ix']['ty'], _0x2d4fe5 = (_0x17c82c * _0x1ddaa2 - _0x4b74aa * _0x1dd33d) * _0x395e36 - _0x288d39, _0x345221 = (_0x4b74aa * _0x3f3693 - _0x17c82c * _0x4bfd13) * _0x395e36 - _0xcb303, _0x559de8 = ((_0x17c82c = _0x30ec54 - _0x521113['resultMatr' + 'ix']['tx']) * _0x1ddaa2 - (_0x4b74aa = _0x1cf14d - _0x521113['resultMatr' + 'ix']['ty']) * _0x1dd33d) * _0x395e36 - _0x288d39, _0xa4a74 = (_0x4b74aa * _0x3f3693 - _0x17c82c * _0x4bfd13) * _0x395e36 - _0xcb303, _0x1bfa6c = Math['sqrt'](_0x559de8 * _0x559de8 + _0xa4a74 * _0xa4a74), _0x3be1d2 = _0xac0f29['length'] * _0x44521f;
                if (_0x4b4333) {
                    var _0xa9278e = (_0x2d4fe5 * _0x2d4fe5 + _0x345221 * _0x345221 - _0x1bfa6c * _0x1bfa6c - (_0x3be1d2 *= _0xfae5cd) * _0x3be1d2) / (0x2 * _0x1bfa6c * _0x3be1d2);
                    _0xa9278e < -0x1 ? _0xa9278e = -0x1 : _0xa9278e > 0x1 && (_0xa9278e = 0x1), _0x3baa31 = Math['acos'](_0xa9278e) * _0x36a763, _0x3f3693 = _0x1bfa6c + _0x3be1d2 * _0xa9278e, _0x1dd33d = _0x3be1d2 * Math['sin'](_0x3baa31), _0x4d64e7 = Math['atan2'](_0x345221 * _0x3f3693 - _0x2d4fe5 * _0x1dd33d, _0x2d4fe5 * _0x3f3693 + _0x345221 * _0x1dd33d);
                } else {
                    var _0x3f6bfa = (_0x3f3693 = _0xfae5cd * _0x3be1d2) * _0x3f3693, _0xe9a414 = (_0x1dd33d = _0xecdae3 * _0x3be1d2) * _0x1dd33d, _0x3785c1 = _0x2d4fe5 * _0x2d4fe5 + _0x345221 * _0x345221, _0x483eb2 = Math['atan2'](_0x345221, _0x2d4fe5), _0xec79ba = -0x2 * _0xe9a414 * _0x1bfa6c, _0x4b4424 = _0xe9a414 - _0x3f6bfa;
                    if ((_0x1ddaa2 = _0xec79ba * _0xec79ba - 0x4 * _0x4b4424 * (_0x4bfd13 = _0xe9a414 * _0x1bfa6c * _0x1bfa6c + _0x3f6bfa * _0x3785c1 - _0x3f6bfa * _0xe9a414)) > 0x0) {
                        var _0x393c0d = Math['sqrt'](_0x1ddaa2);
                        _0xec79ba < 0x0 && (_0x393c0d = -_0x393c0d);
                        var _0x40606b = (_0x393c0d = -(_0xec79ba + _0x393c0d) / 0x2) / _0x4b4424, _0x165644 = _0x4bfd13 / _0x393c0d, _0x4dc584 = Math['abs'](_0x40606b) < Math['abs'](_0x165644) ? _0x40606b : _0x165644;
                        _0x4dc584 * _0x4dc584 <= _0x3785c1 && (_0x4b74aa = Math['sqrt'](_0x3785c1 - _0x4dc584 * _0x4dc584) * _0x36a763, _0x4d64e7 = _0x483eb2 - Math['atan2'](_0x4b74aa, _0x4dc584), _0x3baa31 = Math['atan2'](_0x4b74aa / _0xecdae3, (_0x4dc584 - _0x1bfa6c) / _0xfae5cd));
                    }
                    var _0x1a8c8b = 0x0, _0x5aaa84 = Number['MAX_VALUE'], _0x1bd8c6 = 0x0, _0x252e96 = 0x0, _0x55a562 = 0x0, _0x232ba7 = 0x0, _0x2131ec = 0x0, _0x52066b = 0x0;
                    (_0x1ddaa2 = (_0x17c82c = _0x1bfa6c + _0x3f3693) * _0x17c82c) > _0x232ba7 && (_0x55a562 = 0x0, _0x232ba7 = _0x1ddaa2, _0x2131ec = _0x17c82c), (_0x1ddaa2 = (_0x17c82c = _0x1bfa6c - _0x3f3693) * _0x17c82c) < _0x5aaa84 && (_0x1a8c8b = Math['PI'], _0x5aaa84 = _0x1ddaa2, _0x1bd8c6 = _0x17c82c);
                    var _0x4efe66 = Math['acos'](-_0x3f3693 * _0x1bfa6c / (_0x3f6bfa - _0xe9a414));
                    (_0x1ddaa2 = (_0x17c82c = _0x3f3693 * Math['cos'](_0x4efe66) + _0x1bfa6c) * _0x17c82c + (_0x4b74aa = _0x1dd33d * Math['sin'](_0x4efe66)) * _0x4b74aa) < _0x5aaa84 && (_0x1a8c8b = _0x4efe66, _0x5aaa84 = _0x1ddaa2, _0x1bd8c6 = _0x17c82c, _0x252e96 = _0x4b74aa), _0x1ddaa2 > _0x232ba7 && (_0x55a562 = _0x4efe66, _0x232ba7 = _0x1ddaa2, _0x2131ec = _0x17c82c, _0x52066b = _0x4b74aa), _0x3785c1 <= (_0x5aaa84 + _0x232ba7) / 0x2 ? (_0x4d64e7 = _0x483eb2 - Math['atan2'](_0x252e96 * _0x36a763, _0x1bd8c6), _0x3baa31 = _0x1a8c8b * _0x36a763) : (_0x4d64e7 = _0x483eb2 - Math['atan2'](_0x52066b * _0x36a763, _0x2131ec), _0x3baa31 = _0x55a562 * _0x36a763);
                }
                var _0x3bb189 = Math['atan2'](_0x1ff508, _0x50e970) * _0x577912, _0x29c79d = _0x1472a2['resultTran' + 'sform']['skX'];
                (_0x4d64e7 = (_0x4d64e7 - _0x3bb189) * _0x2687cb['radDeg'] + _0x37ac1a - _0x29c79d) > 0xb4 ? _0x4d64e7 -= 0x168 : _0x4d64e7 < -0xb4 && (_0x4d64e7 += 0x168), _0x1472a2['resultTran' + 'sform']['x'] = _0x288d39, _0x1472a2['resultTran' + 'sform']['y'] = _0xcb303, _0x1472a2['resultTran' + 'sform']['skX'] = _0x1472a2['resultTran' + 'sform']['skY'] = _0x29c79d + _0x4d64e7 * _0x2b7ad5, _0x29c79d = _0xac0f29['resultTran' + 'sform']['skX'], _0x29c79d %= 0x168, (_0x3baa31 = ((_0x3baa31 + _0x3bb189) * _0x2687cb['radDeg'] - 0x0) * _0x577912 + _0xc69010 - _0x29c79d) > 0xb4 ? _0x3baa31 -= 0x168 : _0x3baa31 < -0xb4 && (_0x3baa31 += 0x168), _0xac0f29['resultTran' + 'sform']['x'] = _0x50e970, _0xac0f29['resultTran' + 'sform']['y'] = _0x1ff508, _0xac0f29['resultTran' + 'sform']['skX'] = _0xac0f29['resultTran' + 'sform']['skY'] = _0xac0f29['resultTran' + 'sform']['skY'] + _0x3baa31 * _0x2b7ad5, _0x1472a2['update']();
            }
        }
        ['_applyIk3'](_0x4a24c8, _0x28c098, _0x9988c7, _0x2f3766, _0x3ab630, _0x352bca) {
            if (0x0 == _0x352bca)
                return;
            var _0x4c81cc, _0x7a2e71;
            const _0x3bd7f0 = _0x28c098['resultMatr' + 'ix']['a'] * _0x28c098['length'], _0x46c2e0 = _0x28c098['resultMatr' + 'ix']['b'] * _0x28c098['length'], _0x18d817 = _0x3bd7f0 * _0x3bd7f0 + _0x46c2e0 * _0x46c2e0, _0x4f5d1e = Math['sqrt'](_0x18d817);
            var _0x43c782 = _0x4a24c8['resultMatr' + 'ix']['tx'], _0x366c14 = _0x4a24c8['resultMatr' + 'ix']['ty'], _0x13c7af = _0x28c098['resultMatr' + 'ix']['tx'], _0x2330c1 = _0x28c098['resultMatr' + 'ix']['ty'], _0x253b37 = _0x13c7af - _0x43c782, _0x37d144 = _0x2330c1 - _0x366c14;
            const _0x4b9b57 = _0x253b37 * _0x253b37 + _0x37d144 * _0x37d144, _0x5bb444 = Math['sqrt'](_0x4b9b57), _0x532b4f = (_0x253b37 = _0x9988c7 - _0x4a24c8['resultMatr' + 'ix']['tx']) * _0x253b37 + (_0x37d144 = _0x2f3766 - _0x4a24c8['resultMatr' + 'ix']['ty']) * _0x37d144, _0x291cfe = Math['sqrt'](_0x532b4f);
            if (_0x4f5d1e + _0x5bb444 <= _0x291cfe || _0x291cfe + _0x4f5d1e <= _0x5bb444 || _0x291cfe + _0x5bb444 <= _0x4f5d1e) {
                var _0x15d5a1;
                _0x13c7af = _0x43c782 + (_0x15d5a1 = _0x4f5d1e + _0x5bb444 <= _0x291cfe ? 0x1 : -0x1) * (_0x9988c7 - _0x43c782) * _0x5bb444 / _0x291cfe, _0x2330c1 = _0x366c14 + _0x15d5a1 * (_0x2f3766 - _0x366c14) * _0x5bb444 / _0x291cfe;
            } else {
                const _0x2ffdb3 = (_0x4b9b57 - _0x18d817 + _0x532b4f) / (0x2 * _0x532b4f), _0x57d112 = Math['sqrt'](_0x4b9b57 - _0x2ffdb3 * _0x2ffdb3 * _0x532b4f) / _0x291cfe, _0x43288d = _0x43c782 + _0x253b37 * _0x2ffdb3, _0x430ba4 = _0x366c14 + _0x37d144 * _0x2ffdb3, _0x8ce4d4 = -_0x37d144 * _0x57d112, _0x522175 = _0x253b37 * _0x57d112;
                _0x3ab630 > 0x0 ? (_0x13c7af = _0x43288d - _0x8ce4d4, _0x2330c1 = _0x430ba4 - _0x522175) : (_0x13c7af = _0x43288d + _0x8ce4d4, _0x2330c1 = _0x430ba4 + _0x522175);
            }
            var _0x3a044b, _0x43f16b, _0x558f88, _0x2e7eb7;
            _0x4c81cc = _0x13c7af, _0x7a2e71 = _0x2330c1, this['isDebug'] && (this['_sp'] || (this['_sp'] = new _0x445c15['Sprite'](), _0x445c15['ILaya']['stage']['addChild'](this['_sp'])), this['_sp']['graphics']['clear'](), this['_sp']['graphics']['drawCircle'](_0x43c782, _0x366c14, 0xf, '#ff00ff'), this['_sp']['graphics']['drawCircle'](_0x9988c7, _0x2f3766, 0xf, '#ffff00'), this['_sp']['graphics']['drawCircle'](_0x4c81cc, _0x7a2e71, 0xf, '#ff00ff')), _0x3a044b = Math['atan2'](_0x7a2e71 - _0x4a24c8['resultMatr' + 'ix']['ty'], _0x4c81cc - _0x4a24c8['resultMatr' + 'ix']['tx']), _0x4a24c8['setRotatio' + 'n'](_0x3a044b), (_0x43f16b = _0x2687cb['_tempMatri' + 'x'])['identity'](), _0x43f16b['rotate'](_0x3a044b), _0x43f16b['scale'](_0x4a24c8['resultMatr' + 'ix']['getScaleX'](), _0x4a24c8['resultMatr' + 'ix']['getScaleY']()), _0x43f16b['translate'](_0x4a24c8['resultMatr' + 'ix']['tx'], _0x4a24c8['resultMatr' + 'ix']['ty']), _0x43f16b['copyTo'](_0x4a24c8['resultMatr' + 'ix']), _0x4a24c8['updateChil' + 'd'](), _0x558f88 = Math['atan2'](_0x2f3766 - _0x7a2e71, _0x9988c7 - _0x4c81cc), _0x28c098['setRotatio' + 'n'](_0x558f88), (_0x2e7eb7 = _0x2687cb['_tempMatri' + 'x'])['identity'](), _0x2e7eb7['rotate'](_0x558f88), _0x2e7eb7['scale'](_0x28c098['resultMatr' + 'ix']['getScaleX'](), _0x28c098['resultMatr' + 'ix']['getScaleY']()), _0x2e7eb7['translate'](_0x4c81cc, _0x7a2e71), _0x43f16b['copyTo'](_0x28c098['resultMatr' + 'ix']), _0x28c098['updateChil' + 'd']();
        }
    }
    _0x2687cb['radDeg'] = 0xb4 / Math['PI'], _0x2687cb['degRad'] = Math['PI'] / 0xb4, _0x2687cb['_tempMatri' + 'x'] = new _0x445c15['Matrix']();
    class _0x4215bf {
        constructor() {
            this['boneNames'] = [], this['bendDirect' + 'ion'] = 0x1, this['mix'] = 0x1, this['isSpine'] = !0x0, this['targetBone' + 'Index'] = -0x1, this['boneIndexs'] = [];
        }
    }
    class _0xd46819 {
        constructor(_0x7c849f, _0x437353) {
            this['_debugKey'] = !0x1, this['_segments'] = [], this['_curves'] = [], this['data'] = _0x7c849f, this['position'] = _0x7c849f['position'], this['spacing'] = _0x7c849f['spacing'], this['rotateMix'] = _0x7c849f['rotateMix'], this['translateM' + 'ix'] = _0x7c849f['translateM' + 'ix'], this['bones'] = [];
            for (var _0x2141fc = this['data']['bones'], _0x372093 = 0x0, _0x4a279d = _0x2141fc['length']; _0x372093 < _0x4a279d; _0x372093++)
                this['bones']['push'](_0x437353[_0x2141fc[_0x372093]]);
        }
        ['apply'](_0x1fd9e7, _0x169abc) {
            if (this['target']) {
                var _0x156533 = this['translateM' + 'ix'], _0x5b5216 = this['translateM' + 'ix'], _0x289f5b = _0x5b5216 > 0x0, _0x3832e2 = this['data']['spacingMod' + 'e'], _0x5c5016 = 'length' == _0x3832e2, _0x22451e = this['data']['rotateMode'], _0x1af48a = 'tangent' == _0x22451e, _0x4781cf = 'chainScale' == _0x22451e, _0x34b322 = [], _0x3a0407 = this['bones']['length'], _0x2d3565 = _0x1af48a ? _0x3a0407 : _0x3a0407 + 0x1, _0x3f2bc8 = [];
                this['_spaces'] = _0x3f2bc8, _0x3f2bc8[0x0] = this['position'];
                var _0x141a95 = this['spacing'];
                if (_0x4781cf || _0x5c5016)
                    for (var _0x9a5eae = 0x0, _0x43f038 = _0x2d3565 - 0x1; _0x9a5eae < _0x43f038;) {
                        var _0x2f4461 = this['bones'][_0x9a5eae], _0x9746e9 = _0x2f4461['length'], _0x439d87 = _0x9746e9 * _0x2f4461['resultMatr' + 'ix']['a'], _0x37edf7 = _0x9746e9 * _0x2f4461['resultMatr' + 'ix']['b'];
                        _0x9746e9 = Math['sqrt'](_0x439d87 * _0x439d87 + _0x37edf7 * _0x37edf7), _0x4781cf && (_0x34b322[_0x9a5eae] = _0x9746e9), _0x3f2bc8[++_0x9a5eae] = _0x5c5016 ? Math['max'](0x0, _0x9746e9 + _0x141a95) : _0x141a95;
                    }
                else {
                    for (_0x9a5eae = 0x1; _0x9a5eae < _0x2d3565; _0x9a5eae++)
                        _0x3f2bc8[_0x9a5eae] = _0x141a95;
                }
                var _0x562cd6 = this['computeWor' + 'ldPosition' + 's'](this['target'], _0x1fd9e7, _0x169abc, _0x2d3565, _0x1af48a, 'percent' == this['data']['positionMo' + 'de'], 'percent' == _0x3832e2);
                if (this['_debugKey']) {
                    for (_0x9a5eae = 0x0; _0x9a5eae < _0x562cd6['length']; _0x9a5eae++)
                        _0x169abc['drawCircle'](_0x562cd6[_0x9a5eae++], _0x562cd6[_0x9a5eae++], 0x5, '#00ff00');
                    var _0x25aee5 = [];
                    for (_0x9a5eae = 0x0; _0x9a5eae < _0x562cd6['length']; _0x9a5eae++)
                        _0x25aee5['push'](_0x562cd6[_0x9a5eae++], _0x562cd6[_0x9a5eae++]);
                    _0x169abc['drawLines'](0x0, 0x0, _0x25aee5, '#ff0000');
                }
                var _0x48812c, _0x4ab203 = _0x562cd6[0x0], _0x45042a = _0x562cd6[0x1], _0x367484 = this['data']['offsetRota' + 'tion'], _0x437852 = 'chain' == _0x22451e && 0x0 == _0x367484;
                for (_0x9a5eae = 0x0, _0x48812c = 0x3; _0x9a5eae < _0x3a0407; _0x9a5eae++, _0x48812c += 0x3) {
                    (_0x2f4461 = this['bones'][_0x9a5eae])['resultMatr' + 'ix']['tx'] += (_0x4ab203 - _0x2f4461['resultMatr' + 'ix']['tx']) * _0x156533, _0x2f4461['resultMatr' + 'ix']['ty'] += (_0x45042a - _0x2f4461['resultMatr' + 'ix']['ty']) * _0x156533;
                    var _0x658b0f = (_0x439d87 = _0x562cd6[_0x48812c]) - _0x4ab203, _0x536e98 = (_0x37edf7 = _0x562cd6[_0x48812c + 0x1]) - _0x45042a;
                    if (_0x4781cf && 0x0 != (_0x9746e9 = _0x34b322[_0x9a5eae])) {
                        var _0x27be13 = (Math['sqrt'](_0x658b0f * _0x658b0f + _0x536e98 * _0x536e98) / _0x9746e9 - 0x1) * _0x5b5216 + 0x1;
                        _0x2f4461['resultMatr' + 'ix']['a'] *= _0x27be13, _0x2f4461['resultMatr' + 'ix']['c'] *= _0x27be13;
                    }
                    if (_0x4ab203 = _0x439d87, _0x45042a = _0x37edf7, _0x289f5b) {
                        var _0x12d2b0, _0x41939c, _0x3a2bb3, _0x3a0845 = _0x2f4461['resultMatr' + 'ix']['a'], _0x3ec1e9 = _0x2f4461['resultMatr' + 'ix']['c'], _0x497f32 = _0x2f4461['resultMatr' + 'ix']['b'], _0x4ea312 = _0x2f4461['resultMatr' + 'ix']['d'];
                        _0x12d2b0 = _0x1af48a ? _0x562cd6[_0x48812c - 0x1] : 0x0 == _0x3f2bc8[_0x9a5eae + 0x1] ? _0x562cd6[_0x48812c + 0x2] : Math['atan2'](_0x536e98, _0x658b0f), _0x12d2b0 -= Math['atan2'](_0x497f32, _0x3a0845) - _0x367484 / 0xb4 * Math['PI'], _0x437852 && (_0x41939c = Math['cos'](_0x12d2b0), _0x3a2bb3 = Math['sin'](_0x12d2b0), _0x4ab203 += ((_0x9746e9 = _0x2f4461['length']) * (_0x41939c * _0x3a0845 - _0x3a2bb3 * _0x497f32) - _0x658b0f) * _0x5b5216, _0x45042a += (_0x9746e9 * (_0x3a2bb3 * _0x3a0845 + _0x41939c * _0x497f32) - _0x536e98) * _0x5b5216), _0x12d2b0 > Math['PI'] ? _0x12d2b0 -= 0x2 * Math['PI'] : _0x12d2b0 < -Math['PI'] && (_0x12d2b0 += 0x2 * Math['PI']), _0x12d2b0 *= _0x5b5216, _0x41939c = Math['cos'](_0x12d2b0), _0x3a2bb3 = Math['sin'](_0x12d2b0), _0x2f4461['resultMatr' + 'ix']['a'] = _0x41939c * _0x3a0845 - _0x3a2bb3 * _0x497f32, _0x2f4461['resultMatr' + 'ix']['c'] = _0x41939c * _0x3ec1e9 - _0x3a2bb3 * _0x4ea312, _0x2f4461['resultMatr' + 'ix']['b'] = _0x3a2bb3 * _0x3a0845 + _0x41939c * _0x497f32, _0x2f4461['resultMatr' + 'ix']['d'] = _0x3a2bb3 * _0x3ec1e9 + _0x41939c * _0x4ea312;
                    }
                }
            }
        }
        ['computeWor' + 'ldVertices' + '2'](_0x22db6b, _0x5da406, _0x1951e0, _0x38d7dc, _0x12522b, _0x296284) {
            var _0x4a017f, _0x388352, _0x4e7143, _0x4e96cb = _0x22db6b['currDispla' + 'yData']['bones'], _0x4022ee = _0x22db6b['currDispla' + 'yData']['weights'], _0x2fbba0 = _0x22db6b['currDispla' + 'yData']['triangles'], _0x2887b2 = 0x0, _0x488903 = 0x0, _0x4a4352 = 0x0, _0x4cab39 = 0x0, _0x1dfd0a = 0x0, _0x78e4fd = 0x0, _0x2f2217 = 0x0, _0x4f397b = 0x0, _0x216a2b = 0x0, _0x186051 = 0x0;
            if (null != _0x4e96cb) {
                for (_0x2887b2 = 0x0; _0x2887b2 < _0x1951e0; _0x2887b2 += 0x2)
                    _0x488903 += (_0x4cab39 = _0x4e96cb[_0x488903]) + 0x1, _0x4a4352 += _0x4cab39;
                var _0x2e77c4 = _0x5da406;
                for (_0x1dfd0a = _0x296284, _0x78e4fd = 0x3 * _0x4a4352; _0x1dfd0a < _0x38d7dc; _0x1dfd0a += 0x2) {
                    for (_0x2f2217 = 0x0, _0x4f397b = 0x0, _0x4cab39 = _0x4e96cb[_0x488903++], _0x4cab39 += _0x488903; _0x488903 < _0x4cab39; _0x488903++, _0x78e4fd += 0x3) {
                        _0x4a017f = _0x2e77c4[_0x4e96cb[_0x488903]]['resultMatr' + 'ix'], _0x216a2b = _0x4022ee[_0x78e4fd], _0x186051 = _0x4022ee[_0x78e4fd + 0x1];
                        var _0x446ec7 = _0x4022ee[_0x78e4fd + 0x2];
                        _0x2f2217 += (_0x216a2b * _0x4a017f['a'] + _0x186051 * _0x4a017f['c'] + _0x4a017f['tx']) * _0x446ec7, _0x4f397b += (_0x216a2b * _0x4a017f['b'] + _0x186051 * _0x4a017f['d'] + _0x4a017f['ty']) * _0x446ec7;
                    }
                    _0x12522b[_0x1dfd0a] = _0x2f2217, _0x12522b[_0x1dfd0a + 0x1] = _0x4f397b;
                }
            } else {
                var _0x550f4d, _0x767809;
                if (_0x2fbba0 || (_0x2fbba0 = _0x4022ee), _0x22db6b['deformData'] && (_0x2fbba0 = _0x22db6b['deformData']), _0x550f4d = _0x22db6b['parent'], _0x5da406) {
                    for (_0x4e7143 = _0x5da406['length'], _0x2887b2 = 0x0; _0x2887b2 < _0x4e7143; _0x2887b2++)
                        if (_0x5da406[_0x2887b2]['name'] == _0x550f4d) {
                            _0x388352 = _0x5da406[_0x2887b2];
                            break;
                        }
                }
                _0x388352 && (_0x767809 = _0x388352['resultMatr' + 'ix']), _0x767809 || (_0x767809 = _0xd46819['_tempMt']);
                var _0x2be92a = _0x767809['tx'], _0x4507a6 = _0x767809['ty'], _0x40aa61 = _0x767809['a'], _0xa1ea1c = _0x767809['b'], _0x25e080 = _0x767809['c'], _0xaf2778 = _0x767809['d'];
                for (_0x388352 && (_0xaf2778 *= _0x388352['d']), _0x488903 = _0x1951e0, _0x1dfd0a = _0x296284; _0x1dfd0a < _0x38d7dc; _0x488903 += 0x2, _0x1dfd0a += 0x2)
                    _0x216a2b = _0x2fbba0[_0x488903], _0x186051 = _0x2fbba0[_0x488903 + 0x1], _0x12522b[_0x1dfd0a] = _0x216a2b * _0x40aa61 + _0x186051 * _0xa1ea1c + _0x2be92a, _0x12522b[_0x1dfd0a + 0x1] = -(_0x216a2b * _0x25e080 + _0x186051 * _0xaf2778 + _0x4507a6);
            }
        }
        ['computeWor' + 'ldPosition' + 's'](_0x3ef4f4, _0x1de1b0, _0x3ed1d7, _0x28d744, _0x1e365f, _0x37249d, _0x4205c2) {
            _0x3ef4f4['currDispla' + 'yData']['bones'], _0x3ef4f4['currDispla' + 'yData']['weights'], _0x3ef4f4['currDispla' + 'yData']['triangles'];
            var _0x2bcb93, _0x107208, _0x45d13e, _0xef9a73, _0x2f325c, _0x1e65c1, _0x4f1767, _0x3a4bdf, _0x25ee50 = [], _0x45591b = 0x0, _0x5a6e93 = _0x3ef4f4['currDispla' + 'yData']['verLen'], _0x571318 = this['position'], _0x148e35 = this['_spaces'], _0x58dfda = [], _0x5f428e = _0x5a6e93 / 0x6, _0x25327e = -0x1;
            if (_0x5f428e--, _0x5a6e93 -= 0x4, this['computeWor' + 'ldVertices' + '2'](_0x3ef4f4, _0x1de1b0, 0x2, _0x5a6e93, _0x25ee50, 0x0), this['_debugKey']) {
                for (_0x45591b = 0x0; _0x45591b < _0x25ee50['length'];)
                    _0x3ed1d7['drawCircle'](_0x25ee50[_0x45591b++], _0x25ee50[_0x45591b++], 0xa, '#ff0000');
            }
            _0x2bcb93 = _0x25ee50, this['_curves']['length'] = _0x5f428e;
            var _0x2f3f82 = this['_curves'];
            _0x107208 = 0x0;
            var _0x3b2820, _0x2f63b1, _0x56f477, _0x1d8773, _0x17c098, _0x5d4ffe, _0x4829fe, _0x2c0ba4, _0x3bb4fd, _0x1599d9 = _0x2bcb93[0x0], _0x4e8cf2 = _0x2bcb93[0x1], _0x45652f = 0x0, _0x4c34a2 = 0x0, _0x2ce6e8 = 0x0, _0x8f62fa = 0x0, _0x23b42d = 0x0, _0xf38d83 = 0x0;
            for (_0x45591b = 0x0, _0x3bb4fd = 0x2; _0x45591b < _0x5f428e; _0x45591b++, _0x3bb4fd += 0x6)
                _0x17c098 = 0x2 * (_0x3b2820 = 0.1875 * (_0x1599d9 - 0x2 * (_0x45652f = _0x2bcb93[_0x3bb4fd]) + (_0x2ce6e8 = _0x2bcb93[_0x3bb4fd + 0x2]))) + (_0x56f477 = 0.09375 * (0x3 * (_0x45652f - _0x2ce6e8) - _0x1599d9 + (_0x23b42d = _0x2bcb93[_0x3bb4fd + 0x4]))), _0x5d4ffe = 0x2 * (_0x2f63b1 = 0.1875 * (_0x4e8cf2 - 0x2 * (_0x4c34a2 = _0x2bcb93[_0x3bb4fd + 0x1]) + (_0x8f62fa = _0x2bcb93[_0x3bb4fd + 0x3]))) + (_0x1d8773 = 0.09375 * (0x3 * (_0x4c34a2 - _0x8f62fa) - _0x4e8cf2 + (_0xf38d83 = _0x2bcb93[_0x3bb4fd + 0x5]))), _0x4829fe = 0.75 * (_0x45652f - _0x1599d9) + _0x3b2820 + 0.16666667 * _0x56f477, _0x2c0ba4 = 0.75 * (_0x4c34a2 - _0x4e8cf2) + _0x2f63b1 + 0.16666667 * _0x1d8773, _0x107208 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x4829fe += _0x17c098, _0x2c0ba4 += _0x5d4ffe, _0x17c098 += _0x56f477, _0x5d4ffe += _0x1d8773, _0x107208 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x4829fe += _0x17c098, _0x2c0ba4 += _0x5d4ffe, _0x107208 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x4829fe += _0x17c098 + _0x56f477, _0x2c0ba4 += _0x5d4ffe + _0x1d8773, _0x107208 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x2f3f82[_0x45591b] = _0x107208, _0x1599d9 = _0x23b42d, _0x4e8cf2 = _0xf38d83;
            if (_0x37249d && (_0x571318 *= _0x107208), _0x4205c2) {
                for (_0x45591b = 0x0; _0x45591b < _0x28d744; _0x45591b++)
                    _0x148e35[_0x45591b] *= _0x107208;
            }
            var _0x55aedb, _0x263500 = this['_segments'], _0x646fe1 = 0x0;
            for (_0x45591b = 0x0, _0x45d13e = 0x0, _0xef9a73 = 0x0, _0x55aedb = 0x0; _0x45591b < _0x28d744; _0x45591b++, _0x45d13e += 0x3)
                if ((_0x2f325c = _0x571318 += _0x1e65c1 = _0x148e35[_0x45591b]) < 0x0)
                    this['addBeforeP' + 'osition'](_0x2f325c, _0x2bcb93, 0x0, _0x58dfda, _0x45d13e);
                else {
                    if (_0x2f325c > _0x107208)
                        this['addAfterPo' + 'sition'](_0x2f325c - _0x107208, _0x2bcb93, _0x5a6e93 - 0x4, _0x58dfda, _0x45d13e);
                    else {
                        for (;; _0xef9a73++)
                            if (!(_0x2f325c > (_0x3a4bdf = _0x2f3f82[_0xef9a73]))) {
                                0x0 == _0xef9a73 ? _0x2f325c /= _0x3a4bdf : _0x2f325c = (_0x2f325c - (_0x4f1767 = _0x2f3f82[_0xef9a73 - 0x1])) / (_0x3a4bdf - _0x4f1767);
                                break;
                            }
                        if (_0xef9a73 != _0x25327e) {
                            _0x25327e = _0xef9a73;
                            var _0x8ef8fa = 0x6 * _0xef9a73;
                            for (_0x17c098 = 0x2 * (_0x3b2820 = 0.03 * ((_0x1599d9 = _0x2bcb93[_0x8ef8fa]) - 0x2 * (_0x45652f = _0x2bcb93[_0x8ef8fa + 0x2]) + (_0x2ce6e8 = _0x2bcb93[_0x8ef8fa + 0x4]))) + (_0x56f477 = 0.006 * (0x3 * (_0x45652f - _0x2ce6e8) - _0x1599d9 + (_0x23b42d = _0x2bcb93[_0x8ef8fa + 0x6]))), _0x5d4ffe = 0x2 * (_0x2f63b1 = 0.03 * ((_0x4e8cf2 = _0x2bcb93[_0x8ef8fa + 0x1]) - 0x2 * (_0x4c34a2 = _0x2bcb93[_0x8ef8fa + 0x3]) + (_0x8f62fa = _0x2bcb93[_0x8ef8fa + 0x5]))) + (_0x1d8773 = 0.006 * (0x3 * (_0x4c34a2 - _0x8f62fa) - _0x4e8cf2 + (_0xf38d83 = _0x2bcb93[_0x8ef8fa + 0x7]))), _0x4829fe = 0.3 * (_0x45652f - _0x1599d9) + _0x3b2820 + 0.16666667 * _0x56f477, _0x2c0ba4 = 0.3 * (_0x4c34a2 - _0x4e8cf2) + _0x2f63b1 + 0.16666667 * _0x1d8773, _0x646fe1 = Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x263500[0x0] = _0x646fe1, _0x8ef8fa = 0x1; _0x8ef8fa < 0x8; _0x8ef8fa++)
                                _0x4829fe += _0x17c098, _0x2c0ba4 += _0x5d4ffe, _0x17c098 += _0x56f477, _0x5d4ffe += _0x1d8773, _0x646fe1 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x263500[_0x8ef8fa] = _0x646fe1;
                            _0x4829fe += _0x17c098, _0x2c0ba4 += _0x5d4ffe, _0x646fe1 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x263500[0x8] = _0x646fe1, _0x4829fe += _0x17c098 + _0x56f477, _0x2c0ba4 += _0x5d4ffe + _0x1d8773, _0x646fe1 += Math['sqrt'](_0x4829fe * _0x4829fe + _0x2c0ba4 * _0x2c0ba4), _0x263500[0x9] = _0x646fe1, _0x55aedb = 0x0;
                        }
                        for (_0x2f325c *= _0x646fe1;; _0x55aedb++)
                            if (!(_0x2f325c > (_0x3a4bdf = _0x263500[_0x55aedb]))) {
                                0x0 == _0x55aedb ? _0x2f325c /= _0x3a4bdf : _0x2f325c = _0x55aedb + (_0x2f325c - (_0x4f1767 = _0x263500[_0x55aedb - 0x1])) / (_0x3a4bdf - _0x4f1767);
                                break;
                            }
                        this['addCurvePo' + 'sition'](0.1 * _0x2f325c, _0x1599d9, _0x4e8cf2, _0x45652f, _0x4c34a2, _0x2ce6e8, _0x8f62fa, _0x23b42d, _0xf38d83, _0x58dfda, _0x45d13e, _0x1e365f || _0x45591b > 0x0 && 0x0 == _0x1e65c1);
                    }
                }
            return _0x58dfda;
        }
        ['addBeforeP' + 'osition'](_0x86e920, _0x3cb484, _0x405dd6, _0x1bafd8, _0x54dadf) {
            var _0x4739a7 = _0x3cb484[_0x405dd6], _0x59792e = _0x3cb484[_0x405dd6 + 0x1], _0x13d7d9 = _0x3cb484[_0x405dd6 + 0x2] - _0x4739a7, _0x16f536 = _0x3cb484[_0x405dd6 + 0x3] - _0x59792e, _0x150624 = Math['atan2'](_0x16f536, _0x13d7d9);
            _0x1bafd8[_0x54dadf] = _0x4739a7 + _0x86e920 * Math['cos'](_0x150624), _0x1bafd8[_0x54dadf + 0x1] = _0x59792e + _0x86e920 * Math['sin'](_0x150624), _0x1bafd8[_0x54dadf + 0x2] = _0x150624;
        }
        ['addAfterPo' + 'sition'](_0x553a7c, _0x2d3add, _0x45c663, _0x2a15e4, _0x180879) {
            var _0x26f47a = _0x2d3add[_0x45c663 + 0x2], _0x27d4b4 = _0x2d3add[_0x45c663 + 0x3], _0x552a13 = _0x26f47a - _0x2d3add[_0x45c663], _0xfa3a12 = _0x27d4b4 - _0x2d3add[_0x45c663 + 0x1], _0x43a8d8 = Math['atan2'](_0xfa3a12, _0x552a13);
            _0x2a15e4[_0x180879] = _0x26f47a + _0x553a7c * Math['cos'](_0x43a8d8), _0x2a15e4[_0x180879 + 0x1] = _0x27d4b4 + _0x553a7c * Math['sin'](_0x43a8d8), _0x2a15e4[_0x180879 + 0x2] = _0x43a8d8;
        }
        ['addCurvePo' + 'sition'](_0x2950ec, _0x4ac7bd, _0xa1effd, _0x1d99ea, _0xfd19fb, _0xded97c, _0x5e4d68, _0x14968b, _0x3399f5, _0x4df959, _0x27add0, _0x21cb03) {
            0x0 == _0x2950ec && (_0x2950ec = 0.0001);
            var _0x52416a = _0x2950ec * _0x2950ec, _0x50a272 = _0x52416a * _0x2950ec, _0x3a0d48 = 0x1 - _0x2950ec, _0x1c5a91 = _0x3a0d48 * _0x3a0d48, _0x494db3 = _0x1c5a91 * _0x3a0d48, _0x27b202 = _0x3a0d48 * _0x2950ec, _0x63adfc = 0x3 * _0x27b202, _0x465794 = _0x3a0d48 * _0x63adfc, _0x937714 = _0x63adfc * _0x2950ec, _0xa2bd12 = _0x4ac7bd * _0x494db3 + _0x1d99ea * _0x465794 + _0xded97c * _0x937714 + _0x14968b * _0x50a272, _0x188826 = _0xa1effd * _0x494db3 + _0xfd19fb * _0x465794 + _0x5e4d68 * _0x937714 + _0x3399f5 * _0x50a272;
            _0x4df959[_0x27add0] = _0xa2bd12, _0x4df959[_0x27add0 + 0x1] = _0x188826, _0x4df959[_0x27add0 + 0x2] = _0x21cb03 ? Math['atan2'](_0x188826 - (_0xa1effd * _0x1c5a91 + _0xfd19fb * _0x27b202 * 0x2 + _0x5e4d68 * _0x52416a), _0xa2bd12 - (_0x4ac7bd * _0x1c5a91 + _0x1d99ea * _0x27b202 * 0x2 + _0xded97c * _0x52416a)) : 0x0;
        }
    }
    _0xd46819['BEFORE'] = -0x2, _0xd46819['AFTER'] = -0x3, _0xd46819['_tempMt'] = new _0x445c15['Matrix']();
    class _0xf449dd {
        constructor() {
            this['bones'] = [];
        }
    }
    class _0x2222e1 {
        constructor(_0x46236d, _0x269690) {
            var _0x54eb80, _0x3d082e;
            for (this['_temp'] = [], this['_data'] = _0x46236d, null == this['_bones'] && (this['_bones'] = []), this['target'] = _0x269690[_0x46236d['targetInde' + 'x']], _0x54eb80 = 0x0, _0x3d082e = _0x46236d['boneIndexs']['length']; _0x54eb80 < _0x3d082e; _0x54eb80++)
                this['_bones']['push'](_0x269690[_0x46236d['boneIndexs'][_0x54eb80]]);
            this['rotateMix'] = _0x46236d['rotateMix'], this['translateM' + 'ix'] = _0x46236d['translateM' + 'ix'], this['scaleMix'] = _0x46236d['scaleMix'], this['shearMix'] = _0x46236d['shearMix'];
        }
        ['apply']() {
            for (var _0x446c75, _0x2f4b93 = this['target']['resultMatr' + 'ix']['a'], _0x4bef5a = this['target']['resultMatr' + 'ix']['b'], _0x1c6200 = this['target']['resultMatr' + 'ix']['c'], _0x3faf92 = this['target']['resultMatr' + 'ix']['d'], _0x592d0f = 0x0, _0x109bfb = this['_bones']['length']; _0x592d0f < _0x109bfb; _0x592d0f++) {
                if (_0x446c75 = this['_bones'][_0x592d0f], this['rotateMix'] > 0x0) {
                    var _0x59ef9b = _0x446c75['resultMatr' + 'ix']['a'], _0x26ced2 = _0x446c75['resultMatr' + 'ix']['b'], _0x14d437 = _0x446c75['resultMatr' + 'ix']['c'], _0x55d948 = _0x446c75['resultMatr' + 'ix']['d'], _0x18aa43 = Math['atan2'](_0x1c6200, _0x2f4b93) - Math['atan2'](_0x14d437, _0x59ef9b) + this['_data']['offsetRota' + 'tion'] * Math['PI'] / 0xb4;
                    _0x18aa43 > Math['PI'] ? _0x18aa43 -= 0x2 * Math['PI'] : _0x18aa43 < -Math['PI'] && (_0x18aa43 += 0x2 * Math['PI']), _0x18aa43 *= this['rotateMix'];
                    var _0x1b6349 = Math['cos'](_0x18aa43), _0x5179b4 = Math['sin'](_0x18aa43);
                    _0x446c75['resultMatr' + 'ix']['a'] = _0x1b6349 * _0x59ef9b - _0x5179b4 * _0x14d437, _0x446c75['resultMatr' + 'ix']['b'] = _0x1b6349 * _0x26ced2 - _0x5179b4 * _0x55d948, _0x446c75['resultMatr' + 'ix']['c'] = _0x5179b4 * _0x59ef9b + _0x1b6349 * _0x14d437, _0x446c75['resultMatr' + 'ix']['d'] = _0x5179b4 * _0x26ced2 + _0x1b6349 * _0x55d948;
                }
                if (this['translateM' + 'ix'] && (this['_temp'][0x0] = this['_data']['offsetX'], this['_temp'][0x1] = this['_data']['offsetY'], this['target']['localToWor' + 'ld'](this['_temp']), _0x446c75['resultMatr' + 'ix']['tx'] += (this['_temp'][0x0] - _0x446c75['resultMatr' + 'ix']['tx']) * this['translateM' + 'ix'], _0x446c75['resultMatr' + 'ix']['ty'] += (this['_temp'][0x1] - _0x446c75['resultMatr' + 'ix']['ty']) * this['translateM' + 'ix'], _0x446c75['updateChil' + 'd']()), this['scaleMix'] > 0x0) {
                    var _0x1512a1 = Math['sqrt'](_0x446c75['resultMatr' + 'ix']['a'] * _0x446c75['resultMatr' + 'ix']['a'] + _0x446c75['resultMatr' + 'ix']['c'] * _0x446c75['resultMatr' + 'ix']['c']), _0x522998 = Math['sqrt'](_0x2f4b93 * _0x2f4b93 + _0x1c6200 * _0x1c6200), _0x2076f3 = _0x1512a1 > 0.00001 ? (_0x1512a1 + (_0x522998 - _0x1512a1 + this['_data']['offsetScal' + 'eX']) * this['scaleMix']) / _0x1512a1 : 0x0;
                    _0x446c75['resultMatr' + 'ix']['a'] *= _0x2076f3, _0x446c75['resultMatr' + 'ix']['c'] *= _0x2076f3, _0x1512a1 = Math['sqrt'](_0x446c75['resultMatr' + 'ix']['b'] * _0x446c75['resultMatr' + 'ix']['b'] + _0x446c75['resultMatr' + 'ix']['d'] * _0x446c75['resultMatr' + 'ix']['d']), _0x522998 = Math['sqrt'](_0x4bef5a * _0x4bef5a + _0x3faf92 * _0x3faf92), _0x2076f3 = _0x1512a1 > 0.00001 ? (_0x1512a1 + (_0x522998 - _0x1512a1 + this['_data']['offsetScal' + 'eY']) * this['scaleMix']) / _0x1512a1 : 0x0, _0x446c75['resultMatr' + 'ix']['b'] *= _0x2076f3, _0x446c75['resultMatr' + 'ix']['d'] *= _0x2076f3;
                }
                if (this['shearMix'] > 0x0) {
                    _0x26ced2 = _0x446c75['resultMatr' + 'ix']['b'], _0x55d948 = _0x446c75['resultMatr' + 'ix']['d'];
                    var _0x324a3c = Math['atan2'](_0x55d948, _0x26ced2);
                    (_0x18aa43 = Math['atan2'](_0x3faf92, _0x4bef5a) - Math['atan2'](_0x1c6200, _0x2f4b93) - (_0x324a3c - Math['atan2'](_0x446c75['resultMatr' + 'ix']['c'], _0x446c75['resultMatr' + 'ix']['a']))) > Math['PI'] ? _0x18aa43 -= 0x2 * Math['PI'] : _0x18aa43 < -Math['PI'] && (_0x18aa43 += 0x2 * Math['PI']), _0x18aa43 = _0x324a3c + (_0x18aa43 + this['_data']['offsetShea' + 'rY'] * Math['PI'] / 0xb4) * this['shearMix'], _0x2076f3 = Math['sqrt'](_0x26ced2 * _0x26ced2 + _0x55d948 * _0x55d948), _0x446c75['resultMatr' + 'ix']['b'] = Math['cos'](_0x18aa43) * _0x2076f3, _0x446c75['resultMatr' + 'ix']['d'] = Math['sin'](_0x18aa43) * _0x2076f3;
                }
            }
        }
    }
    class _0x26d5cc extends _0x445c15['Sprite'] {
        constructor(_0x3e8d11 = null, _0xfb97c7 = 0x0) {
            super(), this['_boneMatri' + 'xArray'] = [], this['_lastTime'] = 0x0, this['_currAniIn' + 'dex'] = -0x1, this['_pause'] = !0x0, this['_aniClipIn' + 'dex'] = -0x1, this['_clipIndex'] = -0x1, this['_skinIndex'] = 0x0, this['_skinName'] = 'default', this['_aniMode'] = 0x0, this['_index'] = -0x1, this['_total'] = -0x1, this['_indexCont' + 'rol'] = !0x1, this['_eventInde' + 'x'] = 0x0, this['_drawOrder' + 'Index'] = 0x0, this['_drawOrder'] = null, this['_lastAniCl' + 'ipIndex'] = -0x1, this['_lastUpdat' + 'eAniClipIn' + 'dex'] = -0x1, this['_playAudio'] = !0x0, this['_soundChan' + 'nelArr'] = [], _0x3e8d11 && this['init'](_0x3e8d11, _0xfb97c7);
        }
        ['init'](_0x326d4f, _0x34d05f = 0x0) {
            var _0x18fe6a, _0x22c847, _0x50e6b9, _0x3a5f91, _0xe6cece = 0x0;
            if (0x1 == _0x34d05f) {
                for (this['_graphicsC' + 'ache'] = [], _0xe6cece = 0x0, _0x18fe6a = _0x326d4f['getAnimati' + 'onCount'](); _0xe6cece < _0x18fe6a; _0xe6cece++)
                    this['_graphicsC' + 'ache']['push']([]);
            }
            if (this['_yReverseM' + 'atrix'] = _0x326d4f['yReverseMa' + 'trix'], this['_aniMode'] = _0x34d05f, this['_templet'] = _0x326d4f, this['_templet']['_addRefere' + 'nce'](0x1), this['_player'] = new _0x4490a1(), this['_player']['cacheFrame' + 'Rate'] = _0x326d4f['rate'], this['_player']['templet'] = _0x326d4f, this['_player']['play'](), this['_parseSrcB' + 'oneMatrix'](), this['_boneList'] = _0x326d4f['mBoneArr'], this['_rootBone'] = _0x326d4f['mRootBone'], this['_aniSectio' + 'nDic'] = _0x326d4f['aniSection' + 'Dic'], _0x326d4f['ikArr']['length'] > 0x0) {
                for (this['_ikArr'] = [], _0xe6cece = 0x0, _0x18fe6a = _0x326d4f['ikArr']['length']; _0xe6cece < _0x18fe6a; _0xe6cece++)
                    this['_ikArr']['push'](new _0x2687cb(_0x326d4f['ikArr'][_0xe6cece], this['_boneList']));
            }
            if (_0x326d4f['pathArr']['length'] > 0x0) {
                for (null == this['_pathDic'] && (this['_pathDic'] = {}), _0xe6cece = 0x0, _0x18fe6a = _0x326d4f['pathArr']['length']; _0xe6cece < _0x18fe6a; _0xe6cece++)
                    _0x22c847 = _0x326d4f['pathArr'][_0xe6cece], _0x50e6b9 = new _0xd46819(_0x22c847, this['_boneList']), (_0x3a5f91 = this['_boneSlotD' + 'ic'][_0x22c847['name']]) && ((_0x50e6b9 = new _0xd46819(_0x22c847, this['_boneList']))['target'] = _0x3a5f91), this['_pathDic'][_0x22c847['name']] = _0x50e6b9;
            }
            if (_0x326d4f['tfArr']['length'] > 0x0) {
                for (this['_tfArr'] = [], _0xe6cece = 0x0, _0x18fe6a = _0x326d4f['tfArr']['length']; _0xe6cece < _0x18fe6a; _0xe6cece++)
                    this['_tfArr']['push'](new _0x2222e1(_0x326d4f['tfArr'][_0xe6cece], this['_boneList']));
            }
            if (_0x326d4f['skinDataAr' + 'ray']['length'] > 0x0) {
                var _0x458aea = this['_templet']['skinDataAr' + 'ray'][this['_skinIndex']];
                this['_skinName'] = _0x458aea['name'];
            }
            this['_player']['on'](_0x445c15['Event']['PLAYED'], this, this['_onPlay']), this['_player']['on'](_0x445c15['Event']['STOPPED'], this, this['_onStop']), this['_player']['on'](_0x445c15['Event']['PAUSED'], this, this['_onPause']);
        }
        get ['url']() {
            return this['_aniPath'];
        }
        set ['url'](_0x7cf9d4) {
            this['load'](_0x7cf9d4);
        }
        ['load'](_0x5f1c87, _0x33d597 = null, _0xff5142 = 0x0) {
            this['_aniPath'] = _0x5f1c87, this['_complete'] = _0x33d597, this['_loadAniMo' + 'de'] = _0xff5142, _0x445c15['ILaya']['loader']['load']([{
                    'url': _0x5f1c87,
                    'type': _0x445c15['ILaya']['Loader']['BUFFER']
                }], _0x445c15['Handler']['create'](this, this['_onLoaded']));
        }
        ['_onLoaded']() {
            var _0x3356d8, _0x5b1445 = _0x445c15['ILaya']['Loader']['getRes'](this['_aniPath']);
            null != _0x5b1445 && (null == _0x3d48ab['Templet']['TEMPLET_DI' + 'CTIONARY'] && (_0x3d48ab['Templet']['TEMPLET_DI' + 'CTIONARY'] = {}), (_0x3356d8 = _0x3d48ab['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']]) ? _0x3356d8['isParseFai' + 'l'] ? this['_parseFail']() : _0x3356d8['isParserCo' + 'mplete'] ? this['_parseComp' + 'lete']() : (_0x3356d8['on'](_0x445c15['Event']['COMPLETE'], this, this['_parseComp' + 'lete']), _0x3356d8['on'](_0x445c15['Event']['ERROR'], this, this['_parseFail'])) : ((_0x3356d8 = new _0x3d48ab['Templet']())['_setCreate' + 'URL'](this['_aniPath']), _0x3d48ab['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']] = _0x3356d8, _0x3356d8['on'](_0x445c15['Event']['COMPLETE'], this, this['_parseComp' + 'lete']), _0x3356d8['on'](_0x445c15['Event']['ERROR'], this, this['_parseFail']), _0x3356d8['isParserCo' + 'mplete'] = !0x1, _0x3356d8['parseData'](null, _0x5b1445)));
        }
        ['_parseComp' + 'lete']() {
            var _0x1243e7 = _0x3d48ab['Templet']['TEMPLET_DI' + 'CTIONARY'][this['_aniPath']];
            _0x1243e7 && (this['init'](_0x1243e7, this['_loadAniMo' + 'de']), this['play'](0x0, !0x0)), this['_complete'] && this['_complete']['runWith'](this);
        }
        ['_parseFail']() {
            console['log']('[Error]:' + this['_aniPath'] + '解析失败');
        }
        ['_onPlay']() {
            this['event'](_0x445c15['Event']['PLAYED']);
        }
        ['_onStop']() {
            var _0x5c2a5b, _0x48fbec = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
            if (_0x48fbec && this['_eventInde' + 'x'] < _0x48fbec['length']) {
                for (; this['_eventInde' + 'x'] < _0x48fbec['length']; this['_eventInde' + 'x']++)
                    (_0x5c2a5b = _0x48fbec[this['_eventInde' + 'x']])['time'] >= this['_player']['playStart'] && _0x5c2a5b['time'] <= this['_player']['playEnd'] && this['event'](_0x445c15['Event']['LABEL'], _0x5c2a5b);
            }
            this['_drawOrder'] = null, this['event'](_0x445c15['Event']['STOPPED']);
        }
        ['_onPause']() {
            this['event'](_0x445c15['Event']['PAUSED']);
        }
        ['_parseSrcB' + 'oneMatrix']() {
            var _0x4906b6 = 0x0, _0x296f9a = 0x0;
            for (_0x296f9a = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x4906b6 = 0x0; _0x4906b6 < _0x296f9a; _0x4906b6++)
                this['_boneMatri' + 'xArray']['push'](new _0x445c15['Matrix']());
            if (0x0 == this['_aniMode'])
                this['_boneSlotD' + 'ic'] = this['_templet']['boneSlotDi' + 'c'], this['_bindBoneB' + 'oneSlotDic'] = this['_templet']['bindBoneBo' + 'neSlotDic'], this['_boneSlotA' + 'rray'] = this['_templet']['boneSlotAr' + 'ray'];
            else {
                null == this['_boneSlotD' + 'ic'] && (this['_boneSlotD' + 'ic'] = {}), null == this['_bindBoneB' + 'oneSlotDic'] && (this['_bindBoneB' + 'oneSlotDic'] = {}), null == this['_boneSlotA' + 'rray'] && (this['_boneSlotA' + 'rray'] = []);
                var _0x38a106, _0x346fb7, _0x4b6a09 = this['_templet']['boneSlotAr' + 'ray'];
                for (_0x4906b6 = 0x0, _0x296f9a = _0x4b6a09['length']; _0x4906b6 < _0x296f9a; _0x4906b6++)
                    _0x38a106 = _0x4b6a09[_0x4906b6], null == (_0x346fb7 = this['_bindBoneB' + 'oneSlotDic'][_0x38a106['parent']]) && (this['_bindBoneB' + 'oneSlotDic'][_0x38a106['parent']] = _0x346fb7 = []), this['_boneSlotD' + 'ic'][_0x38a106['name']] = _0x38a106 = _0x38a106['copy'](), _0x346fb7['push'](_0x38a106), this['_boneSlotA' + 'rray']['push'](_0x38a106);
            }
        }
        ['_emitMisse' + 'dEvents'](_0x1464fc, _0x31de3e, _0x4c1542 = 0x0) {
            var _0x455152 = this['_templet']['eventAniAr' + 'r'][this['_player']['currentAni' + 'mationClip' + 'Index']];
            if (_0x455152) {
                var _0x2ae395, _0x5b742b, _0x2b1d5b = 0x0;
                for (_0x2ae395 = _0x455152['length'], _0x2b1d5b = _0x4c1542; _0x2b1d5b < _0x2ae395; _0x2b1d5b++)
                    (_0x5b742b = _0x455152[_0x2b1d5b])['time'] >= this['_player']['playStart'] && _0x5b742b['time'] <= this['_player']['playEnd'] && this['event'](_0x445c15['Event']['LABEL'], _0x5b742b);
            }
        }
        ['_update'](_0x53e49f = !0x0) {
            if (!(this['_pause'] || _0x53e49f && this['_indexCont' + 'rol'])) {
                var _0x202baf = this['timer']['currTimer'], _0x3e81be = this['_player']['currentKey' + 'frameIndex'], _0x125876 = _0x202baf - this['_lastTime'];
                if (_0x53e49f ? this['_player']['_update'](_0x125876) : _0x3e81be = -0x1, this['_lastTime'] = _0x202baf, this['_player'] && (this['_index'] = this['_clipIndex'] = this['_player']['currentKey' + 'frameIndex'], !(this['_index'] < 0x0 || _0x125876 > 0x0 && this['_clipIndex'] == _0x3e81be && this['_lastUpdat' + 'eAniClipIn' + 'dex'] == this['_aniClipIn' + 'dex']))) {
                    this['_lastUpdat' + 'eAniClipIn' + 'dex'] = this['_aniClipIn' + 'dex'], _0x3e81be > this['_clipIndex'] && 0x0 != this['_eventInde' + 'x'] && (this['_emitMisse' + 'dEvents'](this['_player']['playStart'], this['_player']['playEnd'], this['_eventInde' + 'x']), this['_eventInde' + 'x'] = 0x0);
                    var _0x1d3ef0, _0x30b654, _0x5a196d = this['_templet']['eventAniAr' + 'r'][this['_aniClipIn' + 'dex']];
                    if (_0x5a196d && this['_eventInde' + 'x'] < _0x5a196d['length']) {
                        var _0x1bc198 = _0x5a196d[this['_eventInde' + 'x']];
                        _0x1bc198['time'] >= this['_player']['playStart'] && _0x1bc198['time'] <= this['_player']['playEnd'] ? this['_player']['currentPla' + 'yTime'] >= _0x1bc198['time'] && (this['event'](_0x445c15['Event']['LABEL'], _0x1bc198), this['_eventInde' + 'x']++, this['_playAudio'] && _0x1bc198['audioValue'] && 'null' !== _0x1bc198['audioValue'] && 'undefined' !== _0x1bc198['audioValue'] && (_0x1d3ef0 = _0x445c15['SoundManag' + 'er']['playSound'](this['_player']['templet']['_path'] + _0x1bc198['audioValue'], 0x1, _0x445c15['Handler']['create'](this, this['_onAniSoun' + 'dStoped'])), _0x445c15['SoundManag' + 'er']['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x1d3ef0 && this['_soundChan' + 'nelArr']['push'](_0x1d3ef0))) : _0x1bc198['time'] < this['_player']['playStart'] && this['_playAudio'] && _0x1bc198['audioValue'] && 'null' !== _0x1bc198['audioValue'] && 'undefined' !== _0x1bc198['audioValue'] ? (this['_eventInde' + 'x']++, _0x1d3ef0 = _0x445c15['SoundManag' + 'er']['playSound'](this['_player']['templet']['_path'] + _0x1bc198['audioValue'], 0x1, _0x445c15['Handler']['create'](this, this['_onAniSoun' + 'dStoped']), null, (this['_player']['currentPla' + 'yTime'] - _0x1bc198['time']) / 0x3e8), _0x445c15['SoundManag' + 'er']['playbackRa' + 'te'] = this['_player']['playbackRa' + 'te'], _0x1d3ef0 && this['_soundChan' + 'nelArr']['push'](_0x1d3ef0)) : this['_eventInde' + 'x']++;
                    }
                    0x0 == this['_aniMode'] ? (_0x30b654 = this['_templet']['getGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x30b654 && (this['graphics'] = _0x30b654) : 0x1 == this['_aniMode'] ? (_0x30b654 = this['_getGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], this['_clipIndex']) || this['_createGra' + 'phics']()) && this['graphics'] != _0x30b654 && (this['graphics'] = _0x30b654) : this['_createGra' + 'phics']();
                }
            }
        }
        ['_onAniSoun' + 'dStoped'](_0x4c693e) {
            for (var _0x3c7044, _0x25aaf7 = this['_soundChan' + 'nelArr']['length'], _0x5a6ac8 = 0x0; _0x5a6ac8 < _0x25aaf7; _0x5a6ac8++)
                ((_0x3c7044 = this['_soundChan' + 'nelArr'][_0x5a6ac8])['isStopped'] || _0x4c693e) && (!_0x3c7044['isStopped'] && _0x3c7044['stop'](), this['_soundChan' + 'nelArr']['splice'](_0x5a6ac8, 0x1), _0x25aaf7--, _0x5a6ac8--);
        }
        ['_createGra' + 'phics'](_0x199436 = -0x1) {
            -0x1 == _0x199436 && (_0x199436 = this['_clipIndex']);
            var _0x76acd8, _0x3398af = _0x199436 * this['_player']['cacheFrame' + 'RateInterv' + 'al'], _0x2598d7 = this['_templet']['drawOrderA' + 'niArr'][this['_aniClipIn' + 'dex']];
            if (_0x2598d7 && _0x2598d7['length'] > 0x0) {
                for (this['_drawOrder' + 'Index'] = 0x0, _0x76acd8 = _0x2598d7[this['_drawOrder' + 'Index']]; _0x3398af >= _0x76acd8['time'] && (this['_drawOrder'] = _0x76acd8['drawOrder'], this['_drawOrder' + 'Index']++, !(this['_drawOrder' + 'Index'] >= _0x2598d7['length']));)
                    _0x76acd8 = _0x2598d7[this['_drawOrder' + 'Index']];
            }
            0x0 == this['_aniMode'] || 0x1 == this['_aniMode'] ? this['graphics'] = _0xda99c8['create']() : this['graphics'] instanceof _0xda99c8 ? this['graphics']['clear']() : this['graphics'] = _0xda99c8['create']();
            var _0x27808c = this['graphics'], _0x5a1021 = this['_templet']['getNodes'](this['_aniClipIn' + 'dex']), _0x1f29a3 = 0x0 == this['_player']['state'];
            this['_templet']['getOrigina' + 'lData'](this['_aniClipIn' + 'dex'], this['_curOrigin' + 'alData'], null, _0x199436, _0x1f29a3 ? _0x3398af + this['_player']['cacheFrame' + 'RateInterv' + 'al'] : _0x3398af);
            var _0x1e7693, _0x150d29, _0x3a72d4, _0x37eec6, _0x1b738d = this['_aniSectio' + 'nDic'][this['_aniClipIn' + 'dex']], _0x4bbbbf = 0x0, _0xbe845 = 0x0, _0x466369 = 0x0, _0x494b60 = 0x0, _0x3a4e9e = 0x0, _0x46a916 = this['_templet']['srcBoneMat' + 'rixArr']['length'], _0x3f849d = this['_curOrigin' + 'alData'];
            for (_0xbe845 = 0x0, _0x3a4e9e = _0x1b738d[0x0]; _0xbe845 < _0x46a916; _0xbe845++) {
                var _0x47865e = (_0x37eec6 = this['_boneList'][_0xbe845])['resultTran' + 'sform'];
                _0x3a72d4 = this['_templet']['srcBoneMat' + 'rixArr'][_0xbe845], _0x47865e['scX'] = _0x3a72d4['scX'] * _0x3f849d[_0x4bbbbf++], _0x47865e['skX'] = _0x3a72d4['skX'] + _0x3f849d[_0x4bbbbf++], _0x47865e['skY'] = _0x3a72d4['skY'] + _0x3f849d[_0x4bbbbf++], _0x47865e['scY'] = _0x3a72d4['scY'] * _0x3f849d[_0x4bbbbf++], _0x47865e['x'] = _0x3a72d4['x'] + _0x3f849d[_0x4bbbbf++], _0x47865e['y'] = _0x3a72d4['y'] + _0x3f849d[_0x4bbbbf++], 0x8 === this['_templet']['tMatrixDat' + 'aLen'] && (_0x47865e['skewX'] = _0x3a72d4['skewX'] + _0x3f849d[_0x4bbbbf++], _0x47865e['skewY'] = _0x3a72d4['skewY'] + _0x3f849d[_0x4bbbbf++]);
            }
            var _0x28d6c1, _0x466e53 = {}, _0x1bf9cd = {};
            for (_0x3a4e9e += _0x1b738d[0x1]; _0xbe845 < _0x3a4e9e; _0xbe845++)
                _0x466e53[(_0x28d6c1 = _0x5a1021[_0xbe845])['name']] = _0x3f849d[_0x4bbbbf++], _0x1bf9cd[_0x28d6c1['name']] = _0x3f849d[_0x4bbbbf++], _0x4bbbbf += 0x4;
            var _0x3d4bc7, _0x57b0ec, _0x41d71c = {}, _0x3d436d = {};
            for (_0x3a4e9e += _0x1b738d[0x2]; _0xbe845 < _0x3a4e9e; _0xbe845++)
                _0x41d71c[(_0x28d6c1 = _0x5a1021[_0xbe845])['name']] = _0x3f849d[_0x4bbbbf++], _0x3d436d[_0x28d6c1['name']] = _0x3f849d[_0x4bbbbf++], _0x4bbbbf += 0x4;
            if (this['_pathDic'])
                for (_0x3a4e9e += _0x1b738d[0x3]; _0xbe845 < _0x3a4e9e; _0xbe845++) {
                    if (_0x28d6c1 = _0x5a1021[_0xbe845], _0x3d4bc7 = this['_pathDic'][_0x28d6c1['name']])
                        switch (new _0x445c15['Byte'](_0x28d6c1['extenData'])['getByte']()) {
                        case 0x1:
                            _0x3d4bc7['position'] = _0x3f849d[_0x4bbbbf++];
                            break;
                        case 0x2:
                            _0x3d4bc7['spacing'] = _0x3f849d[_0x4bbbbf++];
                            break;
                        case 0x3:
                            _0x3d4bc7['rotateMix'] = _0x3f849d[_0x4bbbbf++], _0x3d4bc7['translateM' + 'ix'] = _0x3f849d[_0x4bbbbf++];
                        }
                }
            if (this['_rootBone']['update'](this['_yReverseM' + 'atrix'] || _0x445c15['Matrix']['TEMP']['identity']()), this['_ikArr']) {
                for (_0xbe845 = 0x0, _0x3a4e9e = this['_ikArr']['length']; _0xbe845 < _0x3a4e9e; _0xbe845++)
                    (_0x57b0ec = this['_ikArr'][_0xbe845])['name'] in _0x41d71c && (_0x57b0ec['bendDirect' + 'ion'] = _0x41d71c[_0x57b0ec['name']]), _0x57b0ec['name'] in _0x3d436d && (_0x57b0ec['mix'] = _0x3d436d[_0x57b0ec['name']]), _0x57b0ec['apply']();
            }
            if (this['_pathDic']) {
                for (var _0x587a6f in this['_pathDic'])
                    (_0x3d4bc7 = this['_pathDic'][_0x587a6f])['apply'](this['_boneList'], _0x27808c);
            }
            if (this['_tfArr']) {
                for (_0xbe845 = 0x0, _0x494b60 = this['_tfArr']['length']; _0xbe845 < _0x494b60; _0xbe845++)
                    this['_tfArr'][_0xbe845]['apply']();
            }
            for (_0xbe845 = 0x0, _0x494b60 = this['_boneList']['length']; _0xbe845 < _0x494b60; _0xbe845++)
                if (_0x37eec6 = this['_boneList'][_0xbe845], _0x150d29 = this['_bindBoneB' + 'oneSlotDic'][_0x37eec6['name']], _0x37eec6['resultMatr' + 'ix']['copyTo'](this['_boneMatri' + 'xArray'][_0xbe845]), _0x150d29) {
                    for (_0x466369 = 0x0, _0x3a4e9e = _0x150d29['length']; _0x466369 < _0x3a4e9e; _0x466369++)
                        (_0x1e7693 = _0x150d29[_0x466369]) && _0x1e7693['setParentM' + 'atrix'](_0x37eec6['resultMatr' + 'ix']);
                }
            var _0x59808d, _0x5a6c99, _0x656024, _0x683bc8, _0x265832 = {}, _0x536f57 = this['_templet']['deformAniA' + 'rr'];
            if (_0x536f57 && _0x536f57['length'] > 0x0) {
                if (this['_lastAniCl' + 'ipIndex'] != this['_aniClipIn' + 'dex']) {
                    for (this['_lastAniCl' + 'ipIndex'] = this['_aniClipIn' + 'dex'], _0xbe845 = 0x0, _0x3a4e9e = this['_boneSlotA' + 'rray']['length']; _0xbe845 < _0x3a4e9e; _0xbe845++)
                        (_0x1e7693 = this['_boneSlotA' + 'rray'][_0xbe845])['deformData'] = null;
                }
                var _0x3a05a3, _0x1461af = _0x536f57[this['_aniClipIn' + 'dex']];
                for (_0x3a05a3 in (_0x59808d = _0x1461af['default'], this['_setDeform'](_0x59808d, _0x265832, this['_boneSlotA' + 'rray'], _0x3398af), _0x1461af))
                    'default' != _0x3a05a3 && _0x3a05a3 != this['_skinName'] && (_0x59808d = _0x1461af[_0x3a05a3], this['_setDeform'](_0x59808d, _0x265832, this['_boneSlotA' + 'rray'], _0x3398af));
                _0x59808d = _0x1461af[this['_skinName']], this['_setDeform'](_0x59808d, _0x265832, this['_boneSlotA' + 'rray'], _0x3398af);
            }
            if (this['_drawOrder']) {
                for (_0xbe845 = 0x0, _0x3a4e9e = this['_drawOrder']['length']; _0xbe845 < _0x3a4e9e; _0xbe845++)
                    _0x5a6c99 = _0x466e53[(_0x1e7693 = this['_boneSlotA' + 'rray'][this['_drawOrder'][_0xbe845]])['name']], _0x656024 = _0x1bf9cd[_0x1e7693['name']], isNaN(_0x5a6c99) || -0x2 == _0x5a6c99 || (this['_templet']['attachment' + 'Names'] ? _0x1e7693['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x5a6c99]) : _0x1e7693['showDispla' + 'yByIndex'](_0x5a6c99)), _0x265832[this['_drawOrder'][_0xbe845]] ? (_0x683bc8 = _0x265832[this['_drawOrder'][_0xbe845]], _0x1e7693['currDispla' + 'yData'] && _0x683bc8[_0x1e7693['currDispla' + 'yData']['attachment' + 'Name']] ? _0x1e7693['deformData'] = _0x683bc8[_0x1e7693['currDispla' + 'yData']['attachment' + 'Name']] : _0x1e7693['deformData'] = null) : _0x1e7693['deformData'] = null, isNaN(_0x656024) ? _0x1e7693['draw'](_0x27808c, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0x1e7693['draw'](_0x27808c, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x656024);
            } else {
                for (_0xbe845 = 0x0, _0x3a4e9e = this['_boneSlotA' + 'rray']['length']; _0xbe845 < _0x3a4e9e; _0xbe845++)
                    _0x5a6c99 = _0x466e53[(_0x1e7693 = this['_boneSlotA' + 'rray'][_0xbe845])['name']], _0x656024 = _0x1bf9cd[_0x1e7693['name']], isNaN(_0x5a6c99) || -0x2 == _0x5a6c99 || (this['_templet']['attachment' + 'Names'] ? _0x1e7693['showDispla' + 'yByName'](this['_templet']['attachment' + 'Names'][_0x5a6c99]) : _0x1e7693['showDispla' + 'yByIndex'](_0x5a6c99)), _0x265832[_0xbe845] ? (_0x683bc8 = _0x265832[_0xbe845], _0x1e7693['currDispla' + 'yData'] && _0x683bc8[_0x1e7693['currDispla' + 'yData']['attachment' + 'Name']] ? _0x1e7693['deformData'] = _0x683bc8[_0x1e7693['currDispla' + 'yData']['attachment' + 'Name']] : _0x1e7693['deformData'] = null) : _0x1e7693['deformData'] = null, isNaN(_0x656024) ? _0x1e7693['draw'](_0x27808c, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode']) : _0x1e7693['draw'](_0x27808c, this['_boneMatri' + 'xArray'], 0x2 == this['_aniMode'], _0x656024);
            }
            return 0x0 == this['_aniMode'] ? (this['_templet']['setGrahics' + 'DataWithCa' + 'che'](this['_aniClipIn' + 'dex'], _0x199436, _0x27808c), this['_checkIsAl' + 'lParsed'](this['_aniClipIn' + 'dex'])) : 0x1 == this['_aniMode'] && this['_setGrahic' + 'sDataWithC' + 'ache'](this['_aniClipIn' + 'dex'], _0x199436, _0x27808c), _0x27808c;
        }
        ['_checkIsAl' + 'lParsed'](_0x427e11) {
            var _0x424bf4, _0x27e1e0;
            for (_0x27e1e0 = Math['floor'](0.01 + this['_templet']['getAniDura' + 'tion'](_0x427e11) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']), _0x424bf4 = 0x0; _0x424bf4 < _0x27e1e0; _0x424bf4++)
                if (!this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x427e11, _0x424bf4))
                    return;
            this['_templet']['getGrahics' + 'DataWithCa' + 'che'](_0x427e11, _0x27e1e0) ? this['_templet']['deleteAniD' + 'ata'](_0x427e11) : this['_createGra' + 'phics'](_0x27e1e0);
        }
        ['_setDeform'](_0x2d94b2, _0x4c1682, _0x4c07e0, _0x567290) {
            var _0x7178b3, _0x5d22da, _0x3993fe, _0x1212ce, _0xd4418a, _0x1e0de4;
            if (_0x2d94b2 && _0x2d94b2) {
                for (_0x1212ce = 0x0, _0xd4418a = _0x2d94b2['deformSlot' + 'DataList']['length']; _0x1212ce < _0xd4418a; _0x1212ce++)
                    for (_0x7178b3 = _0x2d94b2['deformSlot' + 'DataList'][_0x1212ce], _0x1e0de4 = 0x0; _0x1e0de4 < _0x7178b3['deformSlot' + 'DisplayLis' + 't']['length']; _0x1e0de4++)
                        _0x3993fe = _0x4c07e0[(_0x5d22da = _0x7178b3['deformSlot' + 'DisplayLis' + 't'][_0x1e0de4])['slotIndex']], _0x5d22da['apply'](_0x567290, _0x3993fe), _0x4c1682[_0x5d22da['slotIndex']] || (_0x4c1682[_0x5d22da['slotIndex']] = {}), _0x4c1682[_0x5d22da['slotIndex']][_0x5d22da['attachment']] = _0x5d22da['deformData'];
            }
        }
        ['getAnimNum']() {
            return this['_templet']['getAnimati' + 'onCount']();
        }
        ['getAniName' + 'ByIndex'](_0x3092da) {
            return this['_templet']['getAniName' + 'ByIndex'](_0x3092da);
        }
        ['getSlotByN' + 'ame'](_0x1e02f2) {
            return this['_boneSlotD' + 'ic'][_0x1e02f2];
        }
        ['showSkinBy' + 'Name'](_0x451f2e, _0x37fa25 = !0x0) {
            this['showSkinBy' + 'Index'](this['_templet']['getSkinInd' + 'exByName'](_0x451f2e), _0x37fa25);
        }
        ['showSkinBy' + 'Index'](_0x874168, _0x52ab48 = !0x0) {
            for (var _0x26c4bd = 0x0; _0x26c4bd < this['_boneSlotA' + 'rray']['length']; _0x26c4bd++)
                this['_boneSlotA' + 'rray'][_0x26c4bd]['showSlotDa' + 'ta'](null, _0x52ab48);
            if (this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], _0x874168, _0x52ab48)) {
                var _0x5000e4 = this['_templet']['skinDataAr' + 'ray'][_0x874168];
                this['_skinIndex'] = _0x874168, this['_skinName'] = _0x5000e4['name'];
            }
            this['_clearCach' + 'e']();
        }
        ['showSlotSk' + 'inByIndex'](_0x47cb41, _0x190e15) {
            if (0x0 != this['_aniMode']) {
                var _0x67f2ab = this['getSlotByN' + 'ame'](_0x47cb41);
                _0x67f2ab && _0x67f2ab['showDispla' + 'yByIndex'](_0x190e15), this['_clearCach' + 'e']();
            }
        }
        ['showSlotSk' + 'inByName'](_0x568e5e, _0x234008) {
            if (0x0 != this['_aniMode']) {
                var _0x4e5d46 = this['getSlotByN' + 'ame'](_0x568e5e);
                _0x4e5d46 && _0x4e5d46['showDispla' + 'yByName'](_0x234008), this['_clearCach' + 'e']();
            }
        }
        ['replaceSlo' + 'tSkinName'](_0x87bbd1, _0x147422, _0x46a85c) {
            if (0x0 != this['_aniMode']) {
                var _0x1ecb2b = this['getSlotByN' + 'ame'](_0x87bbd1);
                _0x1ecb2b && _0x1ecb2b['replaceDis' + 'playByName'](_0x147422, _0x46a85c), this['_clearCach' + 'e']();
            }
        }
        ['replaceSlo' + 'tSkinByInd' + 'ex'](_0x179447, _0x1aaa47, _0x157759) {
            if (0x0 != this['_aniMode']) {
                var _0x3abc63 = this['getSlotByN' + 'ame'](_0x179447);
                _0x3abc63 && _0x3abc63['replaceDis' + 'playByInde' + 'x'](_0x1aaa47, _0x157759), this['_clearCach' + 'e']();
            }
        }
        ['setSlotSki' + 'n'](_0x54cb52, _0x3a67a7) {
            if (0x0 != this['_aniMode']) {
                var _0x263721 = this['getSlotByN' + 'ame'](_0x54cb52);
                _0x263721 && _0x263721['replaceSki' + 'n'](_0x3a67a7), this['_clearCach' + 'e']();
            }
        }
        ['_clearCach' + 'e']() {
            if (0x1 == this['_aniMode'])
                for (var _0x464791 = 0x0, _0x2cac1e = this['_graphicsC' + 'ache']['length']; _0x464791 < _0x2cac1e; _0x464791++) {
                    for (var _0x3a588f = 0x0, _0x318c1f = this['_graphicsC' + 'ache'][_0x464791]['length']; _0x3a588f < _0x318c1f; _0x3a588f++) {
                        var _0x29f512 = this['_graphicsC' + 'ache'][_0x464791][_0x3a588f];
                        _0x29f512 && _0x29f512 != this['graphics'] && _0xda99c8['recycle'](_0x29f512);
                    }
                    this['_graphicsC' + 'ache'][_0x464791]['length'] = 0x0;
                }
        }
        ['play'](_0x2f1cb5, _0x2698cd, _0x430bbd = !0x0, _0xf7f541 = 0x0, _0x5c6382 = 0x0, _0x5c852d = !0x0, _0x2b98e4 = !0x0) {
            this['_playAudio'] = _0x2b98e4, this['_indexCont' + 'rol'] = !0x1;
            var _0x4da05d, _0x5bd797 = -0x1;
            if (_0x4da05d = _0x2698cd ? 0x7fffffff : 0x0, 'string' == typeof _0x2f1cb5)
                for (var _0x3586c9 = 0x0, _0x45b068 = this['_templet']['getAnimati' + 'onCount'](); _0x3586c9 < _0x45b068; _0x3586c9++) {
                    var _0x8b8c = this['_templet']['getAnimati' + 'on'](_0x3586c9);
                    if (_0x8b8c && _0x2f1cb5 == _0x8b8c['name']) {
                        _0x5bd797 = _0x3586c9;
                        break;
                    }
                }
            else
                _0x5bd797 = _0x2f1cb5;
            _0x5bd797 > -0x1 && _0x5bd797 < this['getAnimNum']() && (this['_aniClipIn' + 'dex'] = _0x5bd797, (_0x430bbd || this['_pause'] || this['_currAniIn' + 'dex'] != _0x5bd797) && (this['_currAniIn' + 'dex'] = _0x5bd797, this['_curOrigin' + 'alData'] = new Float32Array(this['_templet']['getTotalke' + 'yframesLen' + 'gth'](_0x5bd797)), this['_drawOrder'] = null, this['_eventInde' + 'x'] = 0x0, this['_player']['play'](_0x5bd797, this['_player']['playbackRa' + 'te'], _0x4da05d, _0xf7f541, _0x5c6382), _0x5c852d && this['_templet']['showSkinBy' + 'Index'](this['_boneSlotD' + 'ic'], this['_skinIndex']), this['_pause'] && (this['_pause'] = !0x1, this['_lastTime'] = _0x445c15['ILaya']['Browser']['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0)), this['_update']()));
        }
        ['stop']() {
            this['_pause'] || (this['_pause'] = !0x0, this['_player'] && this['_player']['stop'](!0x0), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0), this['timer']['clear'](this, this['_update']));
        }
        ['playbackRa' + 'te'](_0x2fa480) {
            this['_player'] && (this['_player']['playbackRa' + 'te'] = _0x2fa480);
        }
        ['paused']() {
            if (!this['_pause']) {
                if (this['_pause'] = !0x0, this['_player'] && (this['_player']['paused'] = !0x0), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                    for (var _0x139336, _0x178020 = this['_soundChan' + 'nelArr']['length'], _0x545aa8 = 0x0; _0x545aa8 < _0x178020; _0x545aa8++)
                        (_0x139336 = this['_soundChan' + 'nelArr'][_0x545aa8])['isStopped'] || _0x139336['pause']();
                }
                this['timer']['clear'](this, this['_update']);
            }
        }
        ['resume']() {
            if (this['_indexCont' + 'rol'] = !0x1, this['_pause']) {
                if (this['_pause'] = !0x1, this['_player'] && (this['_player']['paused'] = !0x1), this['_soundChan' + 'nelArr']['length'] > 0x0) {
                    for (var _0x5366ca, _0x3d715f = this['_soundChan' + 'nelArr']['length'], _0x1de99b = 0x0; _0x1de99b < _0x3d715f; _0x1de99b++)
                        (_0x5366ca = this['_soundChan' + 'nelArr'][_0x1de99b])['audioBuffe' + 'r'] && _0x5366ca['resume']();
                }
                this['_lastTime'] = _0x445c15['ILaya']['Browser']['now'](), this['timer']['frameLoop'](0x1, this, this['_update'], null, !0x0);
            }
        }
        ['_getGrahic' + 'sDataWithC' + 'ache'](_0x3147dc, _0x851861) {
            return this['_graphicsC' + 'ache'][_0x3147dc][_0x851861];
        }
        ['_setGrahic' + 'sDataWithC' + 'ache'](_0x279794, _0x41bbea, _0x313c20) {
            this['_graphicsC' + 'ache'][_0x279794][_0x41bbea] = _0x313c20;
        }
        ['destroy'](_0x5c678b = !0x0) {
            super['destroy'](_0x5c678b), this['_templet']['_removeRef' + 'erence'](0x1), this['_templet'] = null, this['_player'] && this['_player']['offAll'](), this['_player'] = null, this['_curOrigin' + 'alData'] = null, this['_boneMatri' + 'xArray']['length'] = 0x0, this['_lastTime'] = 0x0, this['timer']['clear'](this, this['_update']), this['_soundChan' + 'nelArr']['length'] > 0x0 && this['_onAniSoun' + 'dStoped'](!0x0);
        }
        get ['index']() {
            return this['_index'];
        }
        set ['index'](_0x2f5d73) {
            this['player'] && (this['_index'] = _0x2f5d73, this['_player']['currentTim' + 'e'] = 0x3e8 * this['_index'] / this['_player']['cacheFrame' + 'Rate'], this['_indexCont' + 'rol'] = !0x0, this['_update'](!0x1));
        }
        get ['total']() {
            return this['_templet'] && this['_player'] ? this['_total'] = Math['floor'](this['_templet']['getAniDura' + 'tion'](this['_player']['currentAni' + 'mationClip' + 'Index']) / 0x3e8 * this['_player']['cacheFrame' + 'Rate']) : this['_total'] = -0x1, this['_total'];
        }
        get ['player']() {
            return this['_player'];
        }
        get ['templet']() {
            return this['_templet'];
        }
    }
    _0x26d5cc['useSimpleM' + 'eshInCanva' + 's'] = !0x1, _0x3d48ab['Skeleton'] = _0x26d5cc, _0x445c15['ILaya']['regClass'](_0x26d5cc), _0x445c15['ClassUtils']['regClass']('laya.ani.b' + 'one.Skelet' + 'on', _0x26d5cc), _0x445c15['ClassUtils']['regClass']('Laya.Skele' + 'ton', _0x26d5cc);
    class _0x279aee {
        constructor() {
            this['slotArr'] = [];
        }
    }
    class _0x143764 {
        ['createText' + 'ure'](_0x228586) {
            return this['texture'] ? this['texture'] : (this['texture'] = new _0x445c15['Texture'](_0x228586['bitmap'], this['uvs']), this['uvs'][0x0] > this['uvs'][0x4] && this['uvs'][0x1] > this['uvs'][0x5] ? (this['texture']['width'] = _0x228586['height'], this['texture']['height'] = _0x228586['width'], this['texture']['offsetX'] = -_0x228586['offsetX'], this['texture']['offsetY'] = -_0x228586['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x228586['sourceHeig' + 'ht'], this['texture']['sourceHeig' + 'ht'] = _0x228586['sourceWidt' + 'h']) : (this['texture']['width'] = _0x228586['width'], this['texture']['height'] = _0x228586['height'], this['texture']['offsetX'] = -_0x228586['offsetX'], this['texture']['offsetY'] = -_0x228586['offsetY'], this['texture']['sourceWidt' + 'h'] = _0x228586['sourceWidt' + 'h'], this['texture']['sourceHeig' + 'ht'] = _0x228586['sourceHeig' + 'ht']), this['texture']);
        }
        ['destory']() {
            this['texture'] && this['texture']['destroy']();
        }
    }
    class _0x3b19a5 {
        constructor() {
            this['displayArr'] = [];
        }
        ['getDisplay' + 'ByName'](_0x3b5154) {
            for (var _0x4817e4 = 0x0, _0x141cfa = this['displayArr']['length']; _0x4817e4 < _0x141cfa; _0x4817e4++)
                if (this['displayArr'][_0x4817e4]['attachment' + 'Name'] == _0x3b5154)
                    return _0x4817e4;
            return -0x1;
        }
    }
    class _0x3e690e {
        constructor() {
            this['boneIndexs'] = [];
        }
    }
    class _0x4b0eb7 extends _0x5b2b39 {
        constructor() {
            super(...arguments), this['_graphicsC' + 'ache'] = [], this['srcBoneMat' + 'rixArr'] = [], this['ikArr'] = [], this['tfArr'] = [], this['pathArr'] = [], this['boneSlotDi' + 'c'] = {}, this['bindBoneBo' + 'neSlotDic'] = {}, this['boneSlotAr' + 'ray'] = [], this['skinDataAr' + 'ray'] = [], this['skinDic'] = {}, this['subTexture' + 'Dic'] = {}, this['isParseFai' + 'l'] = !0x1, this['drawOrderA' + 'niArr'] = [], this['eventAniAr' + 'r'] = [], this['attachment' + 'Names'] = null, this['deformAniA' + 'rr'] = [], this['skinSlotDi' + 'splayDataA' + 'rr'] = [], this['_isParseAu' + 'dio'] = !0x1, this['_isDestroy' + 'ed'] = !0x1, this['_rate'] = 0x1e, this['isParserCo' + 'mplete'] = !0x1, this['aniSection' + 'Dic'] = {}, this['_textureDi' + 'c'] = {}, this['mBoneArr'] = [];
        }
        ['loadAni'](_0x20b71f) {
            this['_skBufferU' + 'rl'] = _0x20b71f, _0x445c15['ILaya']['loader']['load'](_0x20b71f, _0x445c15['Handler']['create'](this, this['onComplete']), null, _0x445c15['ILaya']['Loader']['BUFFER']);
        }
        ['onComplete'](_0x51fcd8 = null) {
            if (this['_isDestroy' + 'ed'])
                this['destroy']();
            else {
                var _0xa7e37f = _0x445c15['ILaya']['Loader']['getRes'](this['_skBufferU' + 'rl']);
                _0xa7e37f ? (this['_path'] = this['_skBufferU' + 'rl']['slice'](0x0, this['_skBufferU' + 'rl']['lastIndexO' + 'f']('/')) + '/', this['parseData'](null, _0xa7e37f)) : this['event'](_0x445c15['Event']['ERROR'], 'load\x20faile' + 'd:' + this['_skBufferU' + 'rl']);
            }
        }
        ['parseData'](_0x32b7ee, _0xb4fc25, _0x1d62fd = 0x1e) {
            if (!this['_path']) {
                var _0x2652ef = this['_relativeU' + 'rl'] || this['url'];
                if (_0x2652ef) {
                    var _0x591d14 = _0x2652ef['lastIndexO' + 'f']('/');
                    this['_path'] = _0x591d14 > 0x0 ? _0x2652ef['slice'](0x0, _0x591d14) + '/' : '';
                }
            }
            this['_mainTextu' + 're'] = _0x32b7ee, this['_rate'] = _0x1d62fd, this['parse'](_0xb4fc25);
        }
        ['buildArmat' + 'ure'](_0x19b251 = 0x0) {
            return new _0x26d5cc(this, _0x19b251);
        }
        ['parse'](_0x13024b) {
            super['parse'](_0x13024b), this['event'](_0x445c15['Event']['LOADED'], this), this['_aniVersio' + 'n'] === _0x4b0eb7['LAYA_ANIMA' + 'TION_VISIO' + 'N'] ? this['_isParseAu' + 'dio'] = !0x0 : this['_aniVersio' + 'n'] != _0x4b0eb7['LAYA_ANIMA' + 'TION_160_V' + 'ISION'] && console['log']('[Error]\x20版本' + '不一致，请使用IDE' + '版本配套的重新导出' + this['_aniVersio' + 'n'] + '->' + _0x4b0eb7['LAYA_ANIMA' + 'TION_VISIO' + 'N']), this['_mainTextu' + 're'] ? this['_parsePubl' + 'icExtData']() : this['_parseText' + 'urePath']();
        }
        ['_parseText' + 'urePath']() {
            if (this['_isDestroy' + 'ed'])
                this['destroy']();
            else {
                var _0x452745 = 0x0;
                this['_loadList'] = [];
                var _0x9bfec1, _0x54b612 = new _0x445c15['Byte'](this['getPublicE' + 'xtData']()), _0x4f2cbb = _0x54b612['getInt32'](), _0x4a94d3 = _0x54b612['readUTFStr' + 'ing'](), _0x1a934f = _0x4a94d3['split']('\x0a');
                for (_0x452745 = 0x0; _0x452745 < _0x4f2cbb; _0x452745++)
                    _0x9bfec1 = this['_path'] + _0x1a934f[0x2 * _0x452745], _0x4a94d3 = _0x1a934f[0x2 * _0x452745 + 0x1], _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), _0x54b612['getFloat32'](), -0x1 == this['_loadList']['indexOf'](_0x9bfec1) && this['_loadList']['push'](_0x9bfec1);
                _0x445c15['ILaya']['loader']['load'](this['_loadList'], _0x445c15['Handler']['create'](this, this['_textureCo' + 'mplete']));
            }
        }
        ['_textureCo' + 'mplete']() {
            for (var _0x413595, _0xeb6a4f = 0x0, _0x21207a = this['_loadList']['length']; _0xeb6a4f < _0x21207a; _0xeb6a4f++)
                _0x413595 = this['_loadList'][_0xeb6a4f], this['_textureDi' + 'c'][_0x413595] = _0x445c15['ILaya']['Loader']['getRes'](_0x413595);
            this['_parsePubl' + 'icExtData']();
        }
        ['_parsePubl' + 'icExtData']() {
            var _0x528b55, _0x3d3f92 = 0x0, _0xd3fa59 = 0x0, _0x196b41 = 0x0, _0x2f23b7 = 0x0, _0x3d022e = 0x0;
            for (_0x3d3f92 = 0x0, _0x3d022e = this['getAnimati' + 'onCount'](); _0x3d3f92 < _0x3d022e; _0x3d3f92++)
                this['_graphicsC' + 'ache']['push']([]);
            _0x528b55 = 'Dragon' != this['_aniClassN' + 'ame'];
            var _0x4180f0, _0x1bcdc1, _0x18e6c4 = new _0x445c15['Byte'](this['getPublicE' + 'xtData']()), _0xcbf41d = 0x0, _0x2d2c42 = 0x0, _0x34cd54 = 0x0, _0x2c6fb5 = 0x0, _0x28a315 = 0x0, _0x17db63 = 0x0, _0x45673a = 0x0, _0x210a89 = 0x0, _0x257261 = 0x0, _0x12a363 = _0x18e6c4['getInt32'](), _0x4a0fa5 = _0x18e6c4['readUTFStr' + 'ing'](), _0x9087e1 = _0x4a0fa5['split']('\x0a');
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x12a363; _0x3d3f92++) {
                if (_0x4180f0 = this['_mainTextu' + 're'], _0x1bcdc1 = this['_path'] + _0x9087e1[0x2 * _0x3d3f92], _0x4a0fa5 = _0x9087e1[0x2 * _0x3d3f92 + 0x1], null == this['_mainTextu' + 're'] && (_0x4180f0 = this['_textureDi' + 'c'][_0x1bcdc1]), !_0x4180f0)
                    return this['event'](_0x445c15['Event']['ERROR'], this), void (this['isParseFai' + 'l'] = !0x0);
                _0xcbf41d = _0x18e6c4['getFloat32'](), _0x2d2c42 = _0x18e6c4['getFloat32'](), _0x34cd54 = _0x18e6c4['getFloat32'](), _0x2c6fb5 = _0x18e6c4['getFloat32'](), _0x257261 = _0x18e6c4['getFloat32'](), _0x28a315 = isNaN(_0x257261) ? 0x0 : _0x257261, _0x257261 = _0x18e6c4['getFloat32'](), _0x17db63 = isNaN(_0x257261) ? 0x0 : _0x257261, _0x257261 = _0x18e6c4['getFloat32'](), _0x45673a = isNaN(_0x257261) ? _0x34cd54 : _0x257261, _0x257261 = _0x18e6c4['getFloat32'](), _0x210a89 = isNaN(_0x257261) ? _0x2c6fb5 : _0x257261, this['subTexture' + 'Dic'][_0x4a0fa5] = _0x445c15['Texture']['create'](_0x4180f0, _0xcbf41d, _0x2d2c42, _0x34cd54, _0x2c6fb5, -_0x28a315, -_0x17db63, _0x45673a, _0x210a89);
            }
            this['_mainTextu' + 're'] = _0x4180f0;
            var _0x17b559, _0x18a9b8, _0x5943c1, _0x5e329e, _0x52298d, _0x591113 = _0x18e6c4['getUint16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x591113; _0x3d3f92++)
                (_0x17b559 = [])['push'](_0x18e6c4['getUint16']()), _0x17b559['push'](_0x18e6c4['getUint16']()), _0x17b559['push'](_0x18e6c4['getUint16']()), _0x17b559['push'](_0x18e6c4['getUint16']()), this['aniSection' + 'Dic'][_0x3d3f92] = _0x17b559;
            var _0x3f71fa, _0x4ae514 = _0x18e6c4['getInt16'](), _0x330d91 = {};
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x4ae514; _0x3d3f92++)
                _0x18a9b8 = new _0x202559(), 0x0 == _0x3d3f92 ? _0x3f71fa = _0x18a9b8 : _0x18a9b8['root'] = _0x3f71fa, _0x18a9b8['d'] = _0x528b55 ? -0x1 : 0x1, _0x5e329e = _0x18e6c4['readUTFStr' + 'ing'](), _0x52298d = _0x18e6c4['readUTFStr' + 'ing'](), _0x18a9b8['length'] = _0x18e6c4['getFloat32'](), 0x1 == _0x18e6c4['getByte']() && (_0x18a9b8['inheritRot' + 'ation'] = !0x1), 0x1 == _0x18e6c4['getByte']() && (_0x18a9b8['inheritSca' + 'le'] = !0x1), _0x18a9b8['name'] = _0x5e329e, _0x52298d && ((_0x5943c1 = _0x330d91[_0x52298d]) ? _0x5943c1['addChild'](_0x18a9b8) : this['mRootBone'] = _0x18a9b8), _0x330d91[_0x5e329e] = _0x18a9b8, this['mBoneArr']['push'](_0x18a9b8);
            this['tMatrixDat' + 'aLen'] = _0x18e6c4['getUint16']();
            var _0x3c675a, _0x51b17c, _0x51008a = _0x18e6c4['getUint16'](), _0x287f2b = Math['floor'](_0x51008a / this['tMatrixDat' + 'aLen']), _0x5783a0 = this['srcBoneMat' + 'rixArr'];
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x287f2b; _0x3d3f92++)
                (_0x3c675a = new _0x15ffdd())['scX'] = _0x18e6c4['getFloat32'](), _0x3c675a['skX'] = _0x18e6c4['getFloat32'](), _0x3c675a['skY'] = _0x18e6c4['getFloat32'](), _0x3c675a['scY'] = _0x18e6c4['getFloat32'](), _0x3c675a['x'] = _0x18e6c4['getFloat32'](), _0x3c675a['y'] = _0x18e6c4['getFloat32'](), 0x8 === this['tMatrixDat' + 'aLen'] && (_0x3c675a['skewX'] = _0x18e6c4['getFloat32'](), _0x3c675a['skewY'] = _0x18e6c4['getFloat32']()), _0x5783a0['push'](_0x3c675a), (_0x18a9b8 = this['mBoneArr'][_0x3d3f92])['transform'] = _0x3c675a;
            var _0x548d15, _0xc16d48, _0x507f00 = _0x18e6c4['getUint16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x507f00; _0x3d3f92++) {
                for (_0x51b17c = new _0x4215bf(), _0x548d15 = _0x18e6c4['getUint16'](), _0xd3fa59 = 0x0; _0xd3fa59 < _0x548d15; _0xd3fa59++)
                    _0x51b17c['boneNames']['push'](_0x18e6c4['readUTFStr' + 'ing']()), _0x51b17c['boneIndexs']['push'](_0x18e6c4['getInt16']());
                _0x51b17c['name'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x51b17c['targetBone' + 'Name'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x51b17c['targetBone' + 'Index'] = _0x18e6c4['getInt16'](), _0x51b17c['bendDirect' + 'ion'] = _0x18e6c4['getFloat32'](), _0x51b17c['mix'] = _0x18e6c4['getFloat32'](), _0x51b17c['isSpine'] = _0x528b55, this['ikArr']['push'](_0x51b17c);
            }
            var _0x1473e1, _0x7a5bea, _0x551b8f = _0x18e6c4['getUint16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x551b8f; _0x3d3f92++) {
                for (_0xc16d48 = new _0x3e690e(), _0x1473e1 = _0x18e6c4['getUint16'](), _0xd3fa59 = 0x0; _0xd3fa59 < _0x1473e1; _0xd3fa59++)
                    _0xc16d48['boneIndexs']['push'](_0x18e6c4['getInt16']());
                _0xc16d48['name'] = _0x18e6c4['getUTFStri' + 'ng'](), _0xc16d48['targetInde' + 'x'] = _0x18e6c4['getInt16'](), _0xc16d48['rotateMix'] = _0x18e6c4['getFloat32'](), _0xc16d48['translateM' + 'ix'] = _0x18e6c4['getFloat32'](), _0xc16d48['scaleMix'] = _0x18e6c4['getFloat32'](), _0xc16d48['shearMix'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetRota' + 'tion'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetX'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetY'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetScal' + 'eX'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetScal' + 'eY'] = _0x18e6c4['getFloat32'](), _0xc16d48['offsetShea' + 'rY'] = _0x18e6c4['getFloat32'](), this['tfArr']['push'](_0xc16d48);
            }
            var _0x229127, _0xbea22a, _0x3006ef, _0x3b16d9, _0x4d6199, _0x3187e2, _0x557d68, _0x29da53, _0x1f8560, _0x7f2290, _0x520e4f = _0x18e6c4['getUint16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x520e4f; _0x3d3f92++) {
                for ((_0x7a5bea = new _0xf449dd())['name'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x229127 = _0x18e6c4['getUint16'](), _0xd3fa59 = 0x0; _0xd3fa59 < _0x229127; _0xd3fa59++)
                    _0x7a5bea['bones']['push'](_0x18e6c4['getInt16']());
                _0x7a5bea['target'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x7a5bea['positionMo' + 'de'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x7a5bea['spacingMod' + 'e'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x7a5bea['rotateMode'] = _0x18e6c4['readUTFStr' + 'ing'](), _0x7a5bea['offsetRota' + 'tion'] = _0x18e6c4['getFloat32'](), _0x7a5bea['position'] = _0x18e6c4['getFloat32'](), _0x7a5bea['spacing'] = _0x18e6c4['getFloat32'](), _0x7a5bea['rotateMix'] = _0x18e6c4['getFloat32'](), _0x7a5bea['translateM' + 'ix'] = _0x18e6c4['getFloat32'](), this['pathArr']['push'](_0x7a5bea);
            }
            var _0x45a3f3, _0x28b107 = _0x18e6c4['getInt16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x28b107; _0x3d3f92++) {
                var _0x337136 = _0x18e6c4['getUint8'](), _0x37e229 = {};
                this['deformAniA' + 'rr']['push'](_0x37e229);
                for (var _0x46df95 = 0x0; _0x46df95 < _0x337136; _0x46df95++)
                    for ((_0x557d68 = new _0x5b3010())['skinName'] = _0x18e6c4['getUTFStri' + 'ng'](), _0x37e229[_0x557d68['skinName']] = _0x557d68, _0xbea22a = _0x18e6c4['getInt16'](), _0xd3fa59 = 0x0; _0xd3fa59 < _0xbea22a; _0xd3fa59++)
                        for (_0x29da53 = new _0x213fd0(), _0x557d68['deformSlot' + 'DataList']['push'](_0x29da53), _0x3006ef = _0x18e6c4['getInt16'](), _0x196b41 = 0x0; _0x196b41 < _0x3006ef; _0x196b41++)
                            for (_0x1f8560 = new _0x35d187(), _0x29da53['deformSlot' + 'DisplayLis' + 't']['push'](_0x1f8560), _0x1f8560['slotIndex'] = _0x18e6c4['getInt16'](), _0x1f8560['attachment'] = _0x18e6c4['getUTFStri' + 'ng'](), _0x3b16d9 = _0x18e6c4['getInt16'](), _0x2f23b7 = 0x0; _0x2f23b7 < _0x3b16d9; _0x2f23b7++)
                                for (0x1 == _0x18e6c4['getByte']() ? _0x1f8560['tweenKeyLi' + 'st']['push'](!0x0) : _0x1f8560['tweenKeyLi' + 'st']['push'](!0x1), _0x4d6199 = _0x18e6c4['getFloat32'](), _0x1f8560['timeList']['push'](_0x4d6199), _0x7f2290 = [], _0x1f8560['vectices']['push'](_0x7f2290), _0x3187e2 = _0x18e6c4['getInt16'](), _0x3d022e = 0x0; _0x3d022e < _0x3187e2; _0x3d022e++)
                                    _0x7f2290['push'](_0x18e6c4['getFloat32']());
            }
            var _0x3b3f7a, _0x346b17, _0x423f5f, _0x54daa0, _0x58c392 = _0x18e6c4['getInt16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x58c392; _0x3d3f92++) {
                for (_0x3b3f7a = _0x18e6c4['getInt16'](), _0x45a3f3 = [], _0xd3fa59 = 0x0; _0xd3fa59 < _0x3b3f7a; _0xd3fa59++) {
                    for ((_0x346b17 = new _0x356be8())['time'] = _0x18e6c4['getFloat32'](), _0x423f5f = _0x18e6c4['getInt16'](), _0x196b41 = 0x0; _0x196b41 < _0x423f5f; _0x196b41++)
                        _0x346b17['drawOrder']['push'](_0x18e6c4['getInt16']());
                    _0x45a3f3['push'](_0x346b17);
                }
                this['drawOrderA' + 'niArr']['push'](_0x45a3f3);
            }
            var _0xd3609d, _0x56bbb3, _0x44c733 = _0x18e6c4['getInt16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x44c733; _0x3d3f92++) {
                for (_0xd3609d = _0x18e6c4['getInt16'](), _0x54daa0 = [], _0xd3fa59 = 0x0; _0xd3fa59 < _0xd3609d; _0xd3fa59++)
                    (_0x56bbb3 = new _0x519594())['name'] = _0x18e6c4['getUTFStri' + 'ng'](), this['_isParseAu' + 'dio'] && (_0x56bbb3['audioValue'] = _0x18e6c4['getUTFStri' + 'ng']()), _0x56bbb3['intValue'] = _0x18e6c4['getInt32'](), _0x56bbb3['floatValue'] = _0x18e6c4['getFloat32'](), _0x56bbb3['stringValu' + 'e'] = _0x18e6c4['getUTFStri' + 'ng'](), _0x56bbb3['time'] = _0x18e6c4['getFloat32'](), _0x54daa0['push'](_0x56bbb3);
                this['eventAniAr' + 'r']['push'](_0x54daa0);
            }
            var _0x4b8d7a = _0x18e6c4['getInt16']();
            if (_0x4b8d7a > 0x0) {
                for (this['attachment' + 'Names'] = [], _0x3d3f92 = 0x0; _0x3d3f92 < _0x4b8d7a; _0x3d3f92++)
                    this['attachment' + 'Names']['push'](_0x18e6c4['getUTFStri' + 'ng']());
            }
            var _0xb13cd0, _0x24a4a8, _0x11d85c = _0x18e6c4['getInt16']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x11d85c; _0x3d3f92++)
                (_0xb13cd0 = new _0x34f654())['name'] = _0x18e6c4['readUTFStr' + 'ing'](), _0xb13cd0['parent'] = _0x18e6c4['readUTFStr' + 'ing'](), _0xb13cd0['attachment' + 'Name'] = _0x18e6c4['readUTFStr' + 'ing'](), _0xb13cd0['srcDisplay' + 'Index'] = _0xb13cd0['displayInd' + 'ex'] = _0x18e6c4['getInt16'](), _0xb13cd0['templet'] = this, this['boneSlotDi' + 'c'][_0xb13cd0['name']] = _0xb13cd0, null == (_0x24a4a8 = this['bindBoneBo' + 'neSlotDic'][_0xb13cd0['parent']]) && (this['bindBoneBo' + 'neSlotDic'][_0xb13cd0['parent']] = _0x24a4a8 = []), _0x24a4a8['push'](_0xb13cd0), this['boneSlotAr' + 'ray']['push'](_0xb13cd0);
            var _0x17268f, _0x4c02cf, _0x159c5c, _0x4e1b5f, _0x1bfe2c, _0x3941a5, _0x5cf704, _0x4b0cb7, _0x25d69a, _0x20b503, _0x1977bf = _0x18e6c4['readUTFStr' + 'ing']()['split']('\x0a'), _0x16839c = 0x0, _0x33734c = _0x18e6c4['getUint8']();
            for (_0x3d3f92 = 0x0; _0x3d3f92 < _0x33734c; _0x3d3f92++) {
                for ((_0x17268f = new _0x279aee())['name'] = _0x1977bf[_0x16839c++], _0x4e1b5f = _0x18e6c4['getUint8'](), _0xd3fa59 = 0x0; _0xd3fa59 < _0x4e1b5f; _0xd3fa59++) {
                    for ((_0x4c02cf = new _0x3b19a5())['name'] = _0x1977bf[_0x16839c++], _0xb13cd0 = this['boneSlotDi' + 'c'][_0x4c02cf['name']], _0x1bfe2c = _0x18e6c4['getUint8'](), _0x196b41 = 0x0; _0x196b41 < _0x1bfe2c; _0x196b41++) {
                        if (_0x159c5c = new _0x143764(), this['skinSlotDi' + 'splayDataA' + 'rr']['push'](_0x159c5c), _0x159c5c['name'] = _0x1977bf[_0x16839c++], _0x159c5c['attachment' + 'Name'] = _0x1977bf[_0x16839c++], _0x159c5c['transform'] = new _0x15ffdd(), _0x159c5c['transform']['scX'] = _0x18e6c4['getFloat32'](), _0x159c5c['transform']['skX'] = _0x18e6c4['getFloat32'](), _0x159c5c['transform']['skY'] = _0x18e6c4['getFloat32'](), _0x159c5c['transform']['scY'] = _0x18e6c4['getFloat32'](), _0x159c5c['transform']['x'] = _0x18e6c4['getFloat32'](), _0x159c5c['transform']['y'] = _0x18e6c4['getFloat32'](), _0x4c02cf['displayArr']['push'](_0x159c5c), _0x159c5c['width'] = _0x18e6c4['getFloat32'](), _0x159c5c['height'] = _0x18e6c4['getFloat32'](), _0x159c5c['type'] = _0x18e6c4['getUint8'](), _0x159c5c['verLen'] = _0x18e6c4['getUint16'](), (_0x4ae514 = _0x18e6c4['getUint16']()) > 0x0)
                            for (_0x159c5c['bones'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x4ae514; _0x2f23b7++) {
                                var _0x29d7be = _0x18e6c4['getUint16']();
                                _0x159c5c['bones']['push'](_0x29d7be);
                            }
                        if ((_0x3941a5 = _0x18e6c4['getUint16']()) > 0x0) {
                            for (_0x159c5c['uvs'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x3941a5; _0x2f23b7++)
                                _0x159c5c['uvs']['push'](_0x18e6c4['getFloat32']());
                        }
                        if ((_0x5cf704 = _0x18e6c4['getUint16']()) > 0x0) {
                            for (_0x159c5c['weights'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x5cf704; _0x2f23b7++)
                                _0x159c5c['weights']['push'](_0x18e6c4['getFloat32']());
                        }
                        if ((_0x4b0cb7 = _0x18e6c4['getUint16']()) > 0x0) {
                            for (_0x159c5c['triangles'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x4b0cb7; _0x2f23b7++)
                                _0x159c5c['triangles']['push'](_0x18e6c4['getUint16']());
                        }
                        if ((_0x25d69a = _0x18e6c4['getUint16']()) > 0x0) {
                            for (_0x159c5c['vertices'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x25d69a; _0x2f23b7++)
                                _0x159c5c['vertices']['push'](_0x18e6c4['getFloat32']());
                        }
                        if ((_0x20b503 = _0x18e6c4['getUint16']()) > 0x0) {
                            for (_0x159c5c['lengths'] = [], _0x2f23b7 = 0x0; _0x2f23b7 < _0x20b503; _0x2f23b7++)
                                _0x159c5c['lengths']['push'](_0x18e6c4['getFloat32']());
                        }
                    }
                    _0x17268f['slotArr']['push'](_0x4c02cf);
                }
                this['skinDic'][_0x17268f['name']] = _0x17268f, this['skinDataAr' + 'ray']['push'](_0x17268f);
            }
            0x1 == _0x18e6c4['getUint8']() ? (this['yReverseMa' + 'trix'] = new _0x445c15['Matrix'](0x1, 0x0, 0x0, -0x1, 0x0, 0x0), _0x3f71fa && _0x3f71fa['setTempMat' + 'rix'](this['yReverseMa' + 'trix'])) : _0x3f71fa && _0x3f71fa['setTempMat' + 'rix'](new _0x445c15['Matrix']()), this['showSkinBy' + 'Index'](this['boneSlotDi' + 'c'], 0x0), this['isParserCo' + 'mplete'] = !0x0, this['event'](_0x445c15['Event']['COMPLETE'], this);
        }
        ['getTexture'](_0xc629e1) {
            var _0x294608 = this['subTexture' + 'Dic'][_0xc629e1];
            return _0x294608 || (_0x294608 = this['subTexture' + 'Dic'][_0xc629e1['substr'](0x0, _0xc629e1['length'] - 0x1)]), null == _0x294608 ? this['_mainTextu' + 're'] : _0x294608;
        }
        ['showSkinBy' + 'Index'](_0x4277b7, _0x232d98, _0x5eba9c = !0x0) {
            if (_0x232d98 < 0x0 && _0x232d98 >= this['skinDataAr' + 'ray']['length'])
                return !0x1;
            var _0x17d368, _0x22f33e, _0x23abeb, _0x14ac42, _0x1d34fd = this['skinDataAr' + 'ray'][_0x232d98];
            if (_0x1d34fd) {
                for (_0x17d368 = 0x0, _0x22f33e = _0x1d34fd['slotArr']['length']; _0x17d368 < _0x22f33e; _0x17d368++)
                    (_0x14ac42 = _0x1d34fd['slotArr'][_0x17d368]) && (_0x23abeb = _0x4277b7[_0x14ac42['name']]) && (_0x23abeb['showSlotDa' + 'ta'](_0x14ac42, _0x5eba9c), _0x5eba9c && 'undefined' != _0x23abeb['attachment' + 'Name'] && 'null' != _0x23abeb['attachment' + 'Name'] ? _0x23abeb['showDispla' + 'yByName'](_0x23abeb['attachment' + 'Name']) : _0x23abeb['showDispla' + 'yByIndex'](_0x23abeb['displayInd' + 'ex']));
                return !0x0;
            }
            return !0x1;
        }
        ['getSkinInd' + 'exByName'](_0x3521c9) {
            for (var _0x401868 = 0x0, _0x51344c = this['skinDataAr' + 'ray']['length']; _0x401868 < _0x51344c; _0x401868++)
                if (this['skinDataAr' + 'ray'][_0x401868]['name'] == _0x3521c9)
                    return _0x401868;
            return -0x1;
        }
        ['getGrahics' + 'DataWithCa' + 'che'](_0xa492b9, _0x407fbd) {
            return this['_graphicsC' + 'ache'][_0xa492b9] && this['_graphicsC' + 'ache'][_0xa492b9][_0x407fbd] ? this['_graphicsC' + 'ache'][_0xa492b9][_0x407fbd] : null;
        }
        ['_setCreate' + 'URL'](_0x982a77) {
            this['_skBufferU' + 'rl'] = this['_relativeU' + 'rl'] = _0x982a77, super['_setCreate' + 'URL'](_0x982a77);
        }
        ['setGrahics' + 'DataWithCa' + 'che'](_0x2c1853, _0x176a66, _0x238231) {
            this['_graphicsC' + 'ache'][_0x2c1853][_0x176a66] = _0x238231;
        }
        ['deleteAniD' + 'ata'](_0x27c31a) {
            if (this['_anis'][_0x27c31a]) {
                var _0x49cdbd = this['_anis'][_0x27c31a];
                _0x49cdbd['bone3DMap'] = null, _0x49cdbd['nodes'] = null;
            }
        }
        ['destroy']() {
            var _0x520220;
            for (_0x520220 in (this['_isDestroy' + 'ed'] = !0x0, this['subTexture' + 'Dic']))
                _0x520220 && this['subTexture' + 'Dic'][_0x520220]['destroy']();
            for (_0x520220 in this['_textureDi' + 'c'])
                _0x520220 && this['_textureDi' + 'c'][_0x520220] && this['_textureDi' + 'c'][_0x520220]['destroy'] && this['_textureDi' + 'c'][_0x520220]['destroy']();
            for (var _0x4fd260 = 0x0, _0x59d760 = this['skinSlotDi' + 'splayDataA' + 'rr']['length']; _0x4fd260 < _0x59d760; _0x4fd260++)
                this['skinSlotDi' + 'splayDataA' + 'rr'][_0x4fd260]['destory']();
            this['skinSlotDi' + 'splayDataA' + 'rr']['length'] = 0x0, this['_relativeU' + 'rl'] && delete _0x4b0eb7['TEMPLET_DI' + 'CTIONARY'][this['_relativeU' + 'rl']], super['destroy'](), _0x445c15['ILaya']['loader']['clearRes'](this['_skBufferU' + 'rl']);
        }
        ['getAniName' + 'ByIndex'](_0x291cf0) {
            var _0x15f0d2 = this['getAnimati' + 'on'](_0x291cf0);
            return _0x15f0d2 ? _0x15f0d2['name'] : null;
        }
        get ['rate']() {
            return this['_rate'];
        }
        set ['rate'](_0x16fb51) {
            this['_rate'] = _0x16fb51;
        }
    }
    _0x4b0eb7['LAYA_ANIMA' + 'TION_160_V' + 'ISION'] = 'LAYAANIMAT' + 'ION:1.6.0', _0x4b0eb7['LAYA_ANIMA' + 'TION_VISIO' + 'N'] = 'LAYAANIMAT' + 'ION:1.7.0', _0x3d48ab['Templet'] = _0x4b0eb7;
    class _0x4e712f extends _0x445c15['Sprite'] {
        constructor(_0x17cf72 = null) {
            super(), this['_start'] = 0x0, this['_Pos'] = 0x0, this['_ended'] = !0x0, this['_loadedIma' + 'ge'] = {}, this['_endFrame'] = -0x1, this['interval'] = 0x1e, this['_ids'] = {}, this['_idOfSprit' + 'e'] = [], this['_reset'](), this['_playing'] = !0x1, this['_parentMov' + 'ieClip'] = _0x17cf72, _0x17cf72 ? (this['_isRoot'] = !0x1, this['_movieClip' + 'List'] = _0x17cf72['_movieClip' + 'List'], this['_movieClip' + 'List']['push'](this)) : (this['_movieClip' + 'List'] = [this], this['_isRoot'] = !0x0, this['_setBitUp'](_0x445c15['Const']['DISPLAY']));
        }
        ['destroy'](_0x45f8bb = !0x0) {
            this['_clear'](), super['destroy'](_0x45f8bb);
        }
        ['_setDispla' + 'y'](_0x4e08f8) {
            super['_setDispla' + 'y'](_0x4e08f8), this['_isRoot'] && this['_onDisplay'](_0x4e08f8);
        }
        ['_onDisplay'](_0x13f3d7) {
            _0x13f3d7 ? this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0) : this['timer']['clear'](this, this['updates']);
        }
        ['updates']() {
            var _0x3ae597, _0x1a8daf;
            if (!this['_parentMov' + 'ieClip']) {
                for (_0x1a8daf = this['_movieClip' + 'List']['length'], _0x3ae597 = 0x0; _0x3ae597 < _0x1a8daf; _0x3ae597++)
                    this['_movieClip' + 'List'][_0x3ae597] && this['_movieClip' + 'List'][_0x3ae597]['_update']();
            }
        }
        get ['index']() {
            return this['_playIndex'];
        }
        set ['index'](_0x2ba49f) {
            this['_playIndex'] = _0x2ba49f, this['_data'] && this['_displayFr' + 'ame'](this['_playIndex']), this['_labels'] && this['_labels'][_0x2ba49f] && this['event'](_0x445c15['Event']['LABEL'], this['_labels'][_0x2ba49f]);
        }
        ['addLabel'](_0x287cb0, _0x14c84e) {
            this['_labels'] || (this['_labels'] = {}), this['_labels'][_0x14c84e] = _0x287cb0;
        }
        ['removeLabe' + 'l'](_0x26adb8) {
            if (_0x26adb8) {
                if (!this['_labels']) {
                    for (var _0x24b79b in this['_labels'])
                        if (this['_labels'][_0x24b79b] === _0x26adb8) {
                            delete this['_labels'][_0x24b79b];
                            break;
                        }
                }
            } else
                this['_labels'] = null;
        }
        get ['count']() {
            return this['_count'];
        }
        get ['playing']() {
            return this['_playing'];
        }
        ['_update']() {
            if (this['_data'] && this['_playing']) {
                if (this['_playIndex']++, this['_playIndex'] >= this['_count']) {
                    if (!this['loop'])
                        return this['_playIndex']--, void this['stop']();
                    this['_playIndex'] = 0x0;
                }
                if (this['_parseFram' + 'e'](this['_playIndex']), this['_labels'] && this['_labels'][this['_playIndex']] && this['event'](_0x445c15['Event']['LABEL'], this['_labels'][this['_playIndex']]), -0x1 != this['_endFrame'] && this['_endFrame'] == this['_playIndex']) {
                    if (this['_endFrame'] = -0x1, null != this['_completeH' + 'andler']) {
                        var _0x5423e0 = this['_completeH' + 'andler'];
                        this['_completeH' + 'andler'] = null, _0x5423e0['run']();
                    }
                    this['stop']();
                }
            }
        }
        ['stop']() {
            this['_playing'] = !0x1;
        }
        ['gotoAndSto' + 'p'](_0x410e70) {
            this['index'] = _0x410e70, this['stop']();
        }
        ['_clear']() {
            if (this['stop'](), this['_idOfSprit' + 'e']['length'] = 0x0, !this['_parentMov' + 'ieClip']) {
                var _0x19496f, _0x20762f;
                for (this['timer']['clear'](this, this['updates']), _0x20762f = this['_movieClip' + 'List']['length'], _0x19496f = 0x0; _0x19496f < _0x20762f; _0x19496f++)
                    this['_movieClip' + 'List'][_0x19496f] != this && this['_movieClip' + 'List'][_0x19496f]['_clear']();
                this['_movieClip' + 'List']['length'] = 0x0;
            }
            var _0x49bf43;
            for (_0x49bf43 in (this['_atlasPath'] && _0x445c15['ILaya']['Loader']['clearRes'](this['_atlasPath']), this['_loadedIma' + 'ge']))
                this['_loadedIma' + 'ge'][_0x49bf43] && (_0x445c15['ILaya']['Loader']['clearRes'](_0x49bf43), this['_loadedIma' + 'ge'][_0x49bf43] = !0x1);
            this['removeChil' + 'dren'](), this['graphics'] = null, this['_parentMov' + 'ieClip'] = null;
        }
        ['play'](_0x1458a1 = 0x0, _0xa6559e = !0x0) {
            this['loop'] = _0xa6559e, this['_playing'] = !0x0, this['_data'] && this['_displayFr' + 'ame'](_0x1458a1);
        }
        ['_displayFr' + 'ame'](_0x407746 = -0x1) {
            -0x1 != _0x407746 && (this['_curIndex'] > _0x407746 && this['_reset'](), this['_parseFram' + 'e'](_0x407746));
        }
        ['_reset'](_0x43aa13 = !0x0) {
            _0x43aa13 && 0x1 != this['_curIndex'] && this['removeChil' + 'dren'](), this['_preIndex'] = this['_curIndex'] = -0x1, this['_Pos'] = this['_start'];
        }
        ['_parseFram' + 'e'](_0x2530f2) {
            var _0x310a59, _0x3abd05, _0x21c825, _0x36d4d8, _0x981a8f, _0x42c375, _0x135531 = !0x1, _0x2d0d82 = this['_idOfSprit' + 'e'], _0x220102 = this['_data'];
            for (this['_ended'] && this['_reset'](), _0x220102['pos'] = this['_Pos'], this['_ended'] = !0x1, this['_playIndex'] = _0x2530f2, this['_curIndex'] > _0x2530f2 && _0x2530f2 < this['_preIndex'] && (this['_reset'](!0x0), _0x220102['pos'] = this['_Pos']); this['_curIndex'] <= _0x2530f2 && !this['_ended'];)
                switch (_0x220102['getUint16']()) {
                case 0xc:
                    if (_0x21c825 = _0x220102['getUint16'](), _0x36d4d8 = this['_ids'][_0x220102['getUint16']()], this['_Pos'] = _0x220102['pos'], _0x220102['pos'] = _0x36d4d8, 0x0 == (_0x981a8f = _0x220102['getUint8']())) {
                        var _0x3e26f1 = _0x220102['getUint16']();
                        if (!(_0x3abd05 = _0x2d0d82[_0x21c825])) {
                            _0x3abd05 = _0x2d0d82[_0x21c825] = new _0x445c15['Sprite']();
                            var _0xa58969 = new _0x445c15['Sprite']();
                            _0xa58969['loadImage'](this['basePath'] + _0x3e26f1 + '.png'), this['_loadedIma' + 'ge'][this['basePath'] + _0x3e26f1 + '.png'] = !0x0, _0x3abd05['addChild'](_0xa58969), _0xa58969['size'](_0x220102['getFloat32'](), _0x220102['getFloat32']());
                            var _0x2996f6 = _0x220102['_getMatrix']();
                            _0xa58969['transform'] = _0x2996f6;
                        }
                        _0x3abd05['alpha'] = 0x1;
                    } else
                        0x1 == _0x981a8f && ((_0x310a59 = _0x2d0d82[_0x21c825]) || (_0x2d0d82[_0x21c825] = _0x310a59 = new _0x4e712f(this), _0x310a59['interval'] = this['interval'], _0x310a59['_ids'] = this['_ids'], _0x310a59['basePath'] = this['basePath'], _0x310a59['_setData'](_0x220102, _0x36d4d8), _0x310a59['_initState'](), _0x310a59['play'](0x0)), _0x310a59['alpha'] = 0x1);
                    _0x220102['pos'] = this['_Pos'];
                    break;
                case 0x3:
                    var _0x38d99c = _0x2d0d82[_0x220102['getUint16']()];
                    _0x38d99c && (this['addChild'](_0x38d99c), _0x38d99c['zOrder'] = _0x220102['getUint16'](), _0x135531 = !0x0);
                    break;
                case 0x4:
                    (_0x38d99c = _0x2d0d82[_0x220102['getUint16']()]) && _0x38d99c['removeSelf']();
                    break;
                case 0x5:
                    _0x2d0d82[_0x220102['getUint16']()][_0x4e712f['_ValueList'][_0x220102['getUint16']()]] = _0x220102['getFloat32']();
                    break;
                case 0x6:
                    _0x2d0d82[_0x220102['getUint16']()]['visible'] = _0x220102['getUint8']() > 0x0;
                    break;
                case 0x7:
                    var _0x26a522 = (_0x3abd05 = _0x2d0d82[_0x220102['getUint16']()])['transform'] || _0x445c15['Matrix']['create']();
                    _0x26a522['setTo'](_0x220102['getFloat32'](), _0x220102['getFloat32'](), _0x220102['getFloat32'](), _0x220102['getFloat32'](), _0x220102['getFloat32'](), _0x220102['getFloat32']()), _0x3abd05['transform'] = _0x26a522;
                    break;
                case 0x8:
                    _0x2d0d82[_0x220102['getUint16']()]['setPos'](_0x220102['getFloat32'](), _0x220102['getFloat32']());
                    break;
                case 0x9:
                    _0x2d0d82[_0x220102['getUint16']()]['setSize'](_0x220102['getFloat32'](), _0x220102['getFloat32']());
                    break;
                case 0xa:
                    _0x2d0d82[_0x220102['getUint16']()]['alpha'] = _0x220102['getFloat32']();
                    break;
                case 0xb:
                    _0x2d0d82[_0x220102['getUint16']()]['setScale'](_0x220102['getFloat32'](), _0x220102['getFloat32']());
                    break;
                case 0x62:
                    _0x42c375 = _0x220102['getString'](), this['event'](_0x42c375), 'stop' == _0x42c375 && this['stop']();
                    break;
                case 0x63:
                    this['_curIndex'] = _0x220102['getUint16'](), _0x135531 && this['updateZOrd' + 'er']();
                    break;
                case 0x64:
                    this['_count'] = this['_curIndex'] + 0x1, this['_ended'] = !0x0, this['_playing'] && (this['event'](_0x445c15['Event']['FRAME']), this['event'](_0x445c15['Event']['END']), this['event'](_0x445c15['Event']['COMPLETE'])), this['_reset'](!0x1);
                }
            this['_playing'] && !this['_ended'] && this['event'](_0x445c15['Event']['FRAME']), this['_Pos'] = _0x220102['pos'];
        }
        ['_setData'](_0x4dac1d, _0x5854a2) {
            this['_data'] = _0x4dac1d, this['_start'] = _0x5854a2 + 0x3;
        }
        set ['url'](_0x10cb5b) {
            this['load'](_0x10cb5b);
        }
        ['load'](_0x4bca4c, _0x7851c0 = !0x1, _0x460604 = null) {
            var _0x476255;
            this['_url'] = _0x4bca4c, _0x7851c0 && (this['_atlasPath'] = _0x460604 || _0x4bca4c['split']('.swf')[0x0] + '.json'), this['stop'](), this['_clear'](), this['_movieClip' + 'List'] = [this], _0x476255 = [{
                    'url': _0x4bca4c,
                    'type': _0x445c15['ILaya']['Loader']['BUFFER']
                }], this['_atlasPath'] && _0x476255['push']({
                'url': this['_atlasPath'],
                'type': _0x445c15['ILaya']['Loader']['ATLAS']
            }), _0x445c15['ILaya']['loader']['load'](_0x476255, _0x445c15['Handler']['create'](this, this['_onLoaded']));
        }
        ['_onLoaded']() {
            var _0x67a9ff;
            (_0x67a9ff = _0x445c15['ILaya']['Loader']['getRes'](this['_url'])) ? !this['_atlasPath'] || _0x445c15['ILaya']['Loader']['getAtlas'](this['_atlasPath']) ? (this['basePath'] = this['_atlasPath'] ? _0x445c15['ILaya']['Loader']['getAtlas'](this['_atlasPath'])['dir'] : this['_url']['split']('.swf')[0x0] + '/image/', this['_initData'](_0x67a9ff)) : this['event'](_0x445c15['Event']['ERROR'], 'Atlas\x20not\x20' + 'find') : this['event'](_0x445c15['Event']['ERROR'], 'file\x20not\x20f' + 'ind');
        }
        ['_initState']() {
            this['_reset'](), this['_ended'] = !0x1;
            var _0x3fccb8 = this['_playing'];
            for (this['_playing'] = !0x1, this['_curIndex'] = 0x0; !this['_ended'];)
                this['_parseFram' + 'e'](++this['_curIndex']);
            this['_playing'] = _0x3fccb8;
        }
        ['_initData'](_0x5f0f9d) {
            this['_data'] = new _0x445c15['Byte'](_0x5f0f9d);
            var _0xb70872, _0x1ae997 = this['_data']['getUint16']();
            for (_0xb70872 = 0x0; _0xb70872 < _0x1ae997; _0xb70872++)
                this['_ids'][this['_data']['getInt16']()] = this['_data']['getInt32']();
            this['interval'] = 0x3e8 / this['_data']['getUint16'](), this['_setData'](this['_data'], this['_ids'][0x7fff]), this['_initState'](), this['play'](0x0), this['event'](_0x445c15['Event']['LOADED']), this['_parentMov' + 'ieClip'] || this['timer']['loop'](this['interval'], this, this['updates'], null, !0x0);
        }
        ['playTo'](_0x488a47, _0x2b4416, _0x2ec38d = null) {
            this['_completeH' + 'andler'] = _0x2ec38d, this['_endFrame'] = _0x2b4416, this['play'](_0x488a47, !0x1);
        }
    }
    _0x4e712f['_ValueList'] = [
        'x',
        'y',
        'width',
        'height',
        'scaleX',
        'scaleY',
        'rotation',
        'alpha'
    ], _0x292c76['AnimationC' + 'ontent'] = _0x192cd7, _0x292c76['AnimationN' + 'odeContent'] = _0x2f8c6d, _0x292c76['AnimationP' + 'arser01'] = _0x3dce64, _0x292c76['AnimationP' + 'arser02'] = _0x4af130, _0x292c76['AnimationP' + 'layer'] = _0x4490a1, _0x292c76['AnimationS' + 'tate'] = _0x33df8f, _0x292c76['AnimationT' + 'emplet'] = _0x5b2b39, _0x292c76['BezierLerp'] = _0xdbb915, _0x292c76['Bone'] = _0x202559, _0x292c76['BoneSlot'] = _0x34f654, _0x292c76['DeformAniD' + 'ata'] = _0x5b3010, _0x292c76['DeformSlot' + 'Data'] = _0x213fd0, _0x292c76['DeformSlot' + 'DisplayDat' + 'a'] = _0x35d187, _0x292c76['DrawOrderD' + 'ata'] = _0x356be8, _0x292c76['EventData'] = _0x519594, _0x292c76['GraphicsAn' + 'i'] = _0xda99c8, _0x292c76['IAniLib'] = _0x3d48ab, _0x292c76['IkConstrai' + 'nt'] = _0x2687cb, _0x292c76['IkConstrai' + 'ntData'] = _0x4215bf, _0x292c76['KeyFramesC' + 'ontent'] = _0x116b9f, _0x292c76['MeshData'] = _0x36669e, _0x292c76['MovieClip'] = _0x4e712f, _0x292c76['PathConstr' + 'aint'] = _0xd46819, _0x292c76['PathConstr' + 'aintData'] = _0xf449dd, _0x292c76['Skeleton'] = _0x26d5cc, _0x292c76['SkinData'] = _0x279aee, _0x292c76['SkinMeshFo' + 'rGraphic'] = _0x539ad3, _0x292c76['SkinSlotDi' + 'splayData'] = _0x143764, _0x292c76['SlotData'] = _0x3b19a5, _0x292c76['Templet'] = _0x4b0eb7, _0x292c76['TfConstrai' + 'nt'] = _0x2222e1, _0x292c76['TfConstrai' + 'ntData'] = _0x3e690e, _0x292c76['Transform'] = _0x15ffdd, _0x292c76['UVTools'] = _0x6adb48;
}(window['Laya'] = window['Laya'] || {}, Laya);