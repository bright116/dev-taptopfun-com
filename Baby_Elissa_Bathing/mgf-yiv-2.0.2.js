var MGEvent = function () {
    function _0x395e5c(_0x49e7ba) {
        this['data'] = null, this['type'] = _0x49e7ba;
    }
    return _0x395e5c['prototype'], (_0x395e5c['LOAD_START'] = 'LOAD_START', _0x395e5c['LOAD_PROGR' + 'ESS'] = 'LOAD_PROGR' + 'ESS', _0x395e5c['LOAD_COMPL' + 'ETE'] = 'LOAD_COMPL' + 'ETE', _0x395e5c['LOAD_ERROR'] = 'LOAD_ERROR', _0x395e5c['START_GAME'] = 'START_GAME', _0x395e5c['PAUSE_GAME'] = 'PAUSE_GAME', _0x395e5c['WIN_GAME'] = 'WIN_GAME', _0x395e5c['LOSE_GAME'] = 'LOSE_GAME', _0x395e5c['ENTER_GAME'] = 'ENTER_GAME', _0x395e5c['ADDED_TO_S' + 'TAGE'] = 'ADDED_TO_S' + 'TAGE', _0x395e5c['FRAMEWORK_' + 'INFO_REQUE' + 'ST'] = 'FRAMEWORK_' + 'INFO_REQUE' + 'ST', _0x395e5c['FRAMEWORK_' + 'INFO_RESPO' + 'NSE'] = 'FRAMEWORK_' + 'INFO_RESPO' + 'NSE', _0x395e5c['CLICK_MORE'] = 'CLICK_MORE', _0x395e5c['CLICK_MINI' + 'LOGO'] = 'CLICK_MINI' + 'LOGO', _0x395e5c['OPEN_URL'] = 'OPEN_URL', _0x395e5c['OPEN_EMAIL'] = 'OPEN_EMAIL', _0x395e5c['SHARE'] = 'SHARE', _0x395e5c['CLICK_CRED' + 'ITS'] = 'CLICK_CRED' + 'ITS', _0x395e5c['SHOW_WIN'] = 'SHOW_WIN', _0x395e5c['SHOW_LOSE'] = 'SHOW_LOSE', _0x395e5c['SCREENSHOT'] = 'SCREENSHOT', _0x395e5c['DOWNLOAD_A' + 'PP'] = 'DOWNLOAD_A' + 'PP', _0x395e5c);
}();
MGEvent['prototype']['__class__'] = 'MGEvent';
var MGDelegate = function () {
    function _0x41b9a2() {
    }
    return _0x41b9a2['prototype'], (_0x41b9a2['getListene' + 'rIndex'] = function (_0x60707, _0x4d4386, _0x2a96a0) {
        if (!_0x41b9a2['_eventMap'][_0x60707])
            return -0x1;
        for (var _0x4bfa5e = 0x0; _0x4bfa5e < _0x41b9a2['_eventMap'][_0x60707]['length']; _0x4bfa5e++) {
            var _0x3b8740 = _0x41b9a2['_eventMap'][_0x60707][_0x4bfa5e];
            if (_0x3b8740[0x0] == _0x4d4386 && _0x3b8740[0x1] == _0x2a96a0)
                return _0x4bfa5e;
        }
        return -0x1;
    }, _0x41b9a2['addEventLi' + 'stener'] = function (_0x390a9f, _0x9b9b64, _0x4e2c85) {
        return _0x41b9a2['isApp'] ? void egret['ExternalIn' + 'terface']['addCallbac' + 'k'](_0x390a9f, _0x9b9b64) : (_0x41b9a2['_eventMap'][_0x390a9f] || (_0x41b9a2['_eventMap'][_0x390a9f] = []), void (-0x1 == _0x41b9a2['getListene' + 'rIndex'](_0x390a9f, _0x9b9b64, _0x4e2c85) && _0x41b9a2['_eventMap'][_0x390a9f]['push']([
            _0x9b9b64,
            _0x4e2c85
        ])));
    }, _0x41b9a2['removeEven' + 'tListener'] = function (_0x518d48, _0xbfd780, _0x5d10c3) {
        if (!_0x41b9a2['isApp'] && _0x41b9a2['_eventMap'][_0x518d48]) {
            var _0x13b97c = _0x41b9a2['getListene' + 'rIndex'](_0x518d48, _0xbfd780, _0x5d10c3);
            -0x1 == _0x13b97c && _0x41b9a2['_eventMap'][_0x518d48]['splice'](_0x13b97c, 0x1), 0x0 == _0x41b9a2['_eventMap'][_0x518d48]['length'] && delete _0x41b9a2['_eventMap'][_0x518d48];
        }
    }, _0x41b9a2['dispatcher' + 'Event'] = function (_0x3c8fa0) {
        if (_0x41b9a2['isApp'])
            return void egret['ExternalIn' + 'terface']['call'](_0x3c8fa0['type'], JSON['stringify'](_0x3c8fa0['data']));
        var _0xae4a35 = _0x3c8fa0['type'];
        if (_0x41b9a2['_eventMap'][_0xae4a35])
            for (var _0x52d458 = (_0x41b9a2['_eventMap'][_0xae4a35], 0x0); _0x52d458 < _0x41b9a2['_eventMap'][_0xae4a35]['length']; _0x52d458++) {
                var _0x290d47 = _0x41b9a2['_eventMap'][_0xae4a35][_0x52d458], _0x55a0dc = _0x290d47[0x0], _0x4688fc = _0x290d47[0x1];
                _0x55a0dc['call'](_0x4688fc, _0x3c8fa0);
            }
    }, _0x41b9a2['_eventMap'] = {}, _0x41b9a2['isApp'] = !0x1, _0x41b9a2);
}();
MGDelegate['prototype']['__class__'] = 'MGDelegate';
var $, MGFramework = function () {
        function _0x157dd8(_0x14fc68) {
            this['restartCou' + 'nt'] = 0x0, this['creditsUrl'] = '//miagame.' + 'com', this['style'] = '#_root{pos' + 'ition:fixe' + 'd;left:0;t' + 'op:0;width' + ':100%;heig' + 'ht:100%;z-' + 'index:1000' + '}#_bgImg{p' + 'osition:ab' + 'solute;lef' + 't:0;top:0;' + 'width:100%' + ';height:10' + '0%;opacity' + ':0}#_loadi' + 'ngRoot{pos' + 'ition:abso' + 'lute;left:' + '0;top:0;wi' + 'dth:100%;h' + 'eight:100%' + '}#_logoCon' + 'tainer{pos' + 'ition:abso' + 'lute;top:4' + '5%;left:50' + '%}#_logoIm' + 'g{position' + ':relative;' + 'opacity:0}' + '#_playCont' + 'ainer{posi' + 'tion:absol' + 'ute;top:75' + '%;left:50%' + ';opacity:0' + ';display:n' + 'one}#_prog' + 'ressContai' + 'ner{positi' + 'on:absolut' + 'e;width:70' + '%;height:2' + '0px;max-wi' + 'dth:300px;' + 'top:70%;le' + 'ft:50%;dis' + 'play:none}' + '#_progress' + 'Bg{positio' + 'n:relative' + ';border-co' + 'lor:#6ff;b' + 'order-styl' + 'e:solid;ba' + 'ckground-c' + 'olor:#0035' + '4f;width:1' + '00%;height' + ':100%;bord' + 'er-radius:' + '20px;paddi' + 'ng:2px;mar' + 'gin-left:-' + '50%;box-sh' + 'adow:0\x205px' + '\x2015px\x20#003' + '}#_progres' + 'sBar{backg' + 'round-colo' + 'r:#c3be30;' + 'background' + ':linear-gr' + 'adient(#a0' + 'ec9e,#c3be' + '30,#fc0,#b' + '89c0d,#736' + '20a);borde' + 'r-radius:1' + '0px;width:' + '10%;height' + ':100%;box-' + 'shadow:ins' + 'et-10px\x200\x20' + '10px\x20#003,' + 'inset\x2010px' + '\x200\x2010px\x20#0' + '03}#_miniL' + 'ogoContain' + 'er{positio' + 'n:absolute' + '}#_miniLog' + 'oImg{posit' + 'ion:relati' + 've;display' + ':none}.sca' + 'leImg1{tra' + 'nsform:sca' + 'le(0.95,0.' + '95);transi' + ('tion-durat' + 'ion:1s;tra' + 'nsition-ti' + 'ming-funct' + 'ion:linear' + '}.scaleImg' + '2{transfor' + 'm:scale(1,' + '1);transit' + 'ion-durati' + 'on:1s;tran' + 'sition-tim' + 'ing-functi' + 'on:linear}' + '.TL{top:0;' + 'left:0}.TM' + '{top:0;lef' + 't:50%}.TR{' + 'top:0;righ' + 't:0}.BL{bo' + 'ttom:0;lef' + 't:0}.BM{bo' + 'ttom:0;lef' + 't:50px}.BR' + '{bottom:0;' + 'right:50px' + '}.MM{top:5' + '0%;left:50' + '%}'), this['logoUrl'] = '//www.yiv.' + 'com/images' + '/forgame/l' + 'ogo.png', this['playUrl'] = '//www.yiv.' + 'com/images' + '/forgame/p' + 'lay.png', this['bgUrl'] = '//www.yiv.' + 'com/images' + '/forgame/b' + 'g.png', this['miniLogoUr' + 'l'] = '', _0x157dd8['instance'] = this, _0x14fc68 = 'localhost,' + '127.0.0.1,' + 'miagame.co' + 'm,' + _0x14fc68, _0x14fc68 = _0x14fc68['toLocaleLo' + 'werCase']();
            for (var _0x1b6f77 = window['location']['hostname'], _0x50a80b = _0x14fc68['split'](','), _0x49c45f = 0x0; _0x49c45f < _0x50a80b['length']; _0x49c45f++) {
                var _0x2207fe = _0x50a80b[_0x49c45f]['trim']();
                if (-0x1 != _0x1b6f77['search'](_0x2207fe + '$'))
                    return;
            }
        }
        var _0x1feb2a = _0x157dd8['prototype'];
        return _0x1feb2a['onClickMin' + 'iLogo'] = function (_0x4a8420) {
            _0x157dd8['ClickMiniL' + 'ogo']();
        }, _0x1feb2a['onScreensh' + 'otHandler'] = function (_0x1b03b6) {
            console['log']('submitToFa' + 'cebook(' + _0x157dd8['nameid'] + ',' + this['restartCou' + 'nt'] + ')');
            try {
                var _0x22eae0 = eval('submitToFacebook;');
                _0x22eae0 && _0x22eae0['call'](this, 'screenshoo' + 'tCanvas', _0x1b03b6['data']['msg'], _0x157dd8['nameid'], _0x1b03b6['data']['success'], _0x1b03b6['data']['faild']);
            } catch (_0x3a7017) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[submit' + 'ToFacebook' + '].');
            }
        }, _0x1feb2a['onShareHan' + 'dler'] = function (_0x299ad0) {
            var _0x20a504 = _0x299ad0['data']['platform'], _0x44252d = _0x299ad0['data']['msg'], _0xef86ed = _0x299ad0['data']['gamename'], _0x2c4be6 = _0x299ad0['data']['nameid'];
            try {
                var _0x3dd570 = eval('ShareToWebsites;');
                _0x3dd570 ? _0x3dd570['call'](this, _0x20a504, _0xef86ed, _0x2c4be6, _0x44252d) : console['log']('Can\x20not\x20fo' + 'und\x20share-' + 'function\x20[' + _0x20a504 + '].');
            } catch (_0x12a840) {
                console['warn']('Call\x20share' + '-function\x20' + '[' + _0x20a504 + ']\x20Error');
            }
        }, _0x1feb2a['onGameStar' + 'tHandler'] = function (_0x30a50b) {
            this['restartCou' + 'nt']++, console['log']('OnGameStar' + 't(' + _0x157dd8['nameid'] + ',' + this['restartCou' + 'nt'] + ')');
            try {
                var _0x447e48 = eval('OnGameStart;');
                _0x447e48 && _0x447e48['call'](this, _0x157dd8['nameid'], this['restartCou' + 'nt']);
            } catch (_0x3450dc) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[OnGame' + 'Start].');
            }
        }, _0x1feb2a['onGamePaus' + 'eHandler'] = function (_0x14c7ed) {
            console['log']('OnGamePaus' + 'e(' + _0x157dd8['nameid'] + ',' + this['restartCou' + 'nt'] + ')');
            try {
                var _0x2ab5cc = eval('OnGamePause;');
                _0x2ab5cc && _0x2ab5cc['call'](this, _0x157dd8['nameid'], this['restartCou' + 'nt']);
            } catch (_0x582627) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[OnGame' + 'Pause].');
            }
        }, _0x1feb2a['onFramewor' + 'kInfoReque' + 'st'] = function (_0x38bef5) {
            var _0x44ed68 = new MGEvent(MGEvent['FRAMEWORK_' + 'INFO_RESPO' + 'NSE']);
            _0x44ed68['data'] = {
                'debug': _0x157dd8['debug'],
                'gamename': _0x157dd8['gamename'],
                'nameid': _0x157dd8['nameid'],
                'miniLogoUrl': this['miniLogoUr' + 'l'],
                'showmsgs': _0x157dd8['showmsgs'],
                'sharemsgs': _0x157dd8['sharemsgs'],
                'language': _0x157dd8['language'],
                'HasScreenshot': _0x157dd8['HasScreens' + 'hot']
            }, MGDelegate['dispatcher' + 'Event'](_0x44ed68);
        }, _0x1feb2a['onClickMor' + 'eHandler'] = function (_0x336e60) {
            _0x157dd8['ClickMore']();
        }, _0x1feb2a['enterGame'] = function () {
            window['removeEven' + 'tListener']('resize', this['doResize']), $('#_root')[0x0]['onclick'] = null, $('#_root')['remove'](), MGDelegate['dispatcher' + 'Event'](new MGEvent(MGEvent['ENTER_GAME']));
        }, _0x1feb2a['showPlay'] = function () {
            $('#_logoCont' + 'ainer')['animate']({ 'top': '40%' }, 0x3e8, function () {
                _0x157dd8['instance']['zoomOut']('#_playImg');
            }), $('#_playCont' + 'ainer')[0x0]['style']['display'] = 'inline', $('#_playCont' + 'ainer')['animate']({
                'opacity': 0x1,
                'top': '75%'
            }, 0x3e8);
        }, _0x1feb2a['hidePlay'] = function () {
            $('#_playCont' + 'ainer')['animate']({
                'opacity': 0x0,
                'top': '70%'
            }, 0x3e8, function () {
                $('#_playCont' + 'ainer')[0x0] && ($('#_playCont' + 'ainer')[0x0]['style']['display'] = 'none');
            });
        }, _0x1feb2a['clickPlay'] = function () {
            $('#_playCont' + 'ainer')[0x0]['onclick'] = null, $('#_logoCont' + 'ainer')[0x0]['onclick'] = null, _0x157dd8['instance']['zoomOut']('#_logoImg'), _0x157dd8['instance']['hidePlay'](), $('#_logoCont' + 'ainer')[0x0]['onclick'] = null, setTimeout(function () {
                $('#_root')[0x0]['onclick'] = function () {
                    _0x157dd8['ClickLoadi' + 'ngSplash']();
                };
            }, 0x1e), setTimeout(function () {
                $('#_root')[0x0]['onclick'] = null, _0x157dd8['instance']['enterGame']();
            }, _0x157dd8['debug'] ? 0x32 : 0x1388);
        }, _0x1feb2a['zoomOut'] = function (_0x3720e2) {
            $(_0x3720e2)['hasClass']('scaleImg2') && $(_0x3720e2)['removeClas' + 's']('scaleImg2'), $(_0x3720e2)['addClass']('scaleImg1'), setTimeout(function () {
                _0x157dd8['instance']['zoomIn'](_0x3720e2);
            }, 0x3e8);
        }, _0x1feb2a['zoomIn'] = function (_0x1990f7) {
            $(_0x1990f7)['hasClass']('scaleImg1') && $(_0x1990f7)['removeClas' + 's']('scaleImg1'), $(_0x1990f7)['addClass']('scaleImg2'), setTimeout(function () {
                _0x157dd8['instance']['zoomOut'](_0x1990f7);
            }, 0x3e8);
        }, _0x1feb2a['onLoadProg' + 'ressHandle' + 'r'] = function (_0x50df63) {
            _0x157dd8['instance']['setProgres' + 's'](_0x50df63['data']['percent']);
        }, _0x1feb2a['setProgres' + 's'] = function (_0x205598) {
            _0x205598 = 0xa > _0x205598 ? 0xa : _0x205598 > 0x64 ? 0x64 : _0x205598, $('#_progress' + 'Bar')[0x0]['style']['width'] = _0x205598 + '%';
        }, _0x1feb2a['onLoadComp' + 'leteHandle' + 'r'] = function (_0x10638a) {
            $('#_progress' + 'Container')['animate']({ 'opacity': 0x0 }, 0x3e8, _0x157dd8['instance']['showPlay']);
        }, _0x1feb2a['onLoadErro' + 'rHandler'] = function (_0x41599d) {
        }, _0x1feb2a['onAddedToS' + 'tageHandle' + 'r'] = function (_0xbf23b1) {
        }, _0x1feb2a['onLoadStar' + 'tHandler'] = function (_0x4bc9f7) {
        }, _0x1feb2a['onShowWinH' + 'andler'] = function (_0x474400) {
            console['log']('OnGameLeve' + 'lWin(' + _0x157dd8['nameid'] + ')');
            try {
                var _0x26859d = eval('OnGameLevelWin;');
                _0x26859d && _0x26859d['call'](this, _0x157dd8['nameid']);
            } catch (_0x42dffe) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[OnGame' + 'LevelWin].');
            }
        }, _0x1feb2a['onShowLose' + 'Handler'] = function (_0x1a6e55) {
            console['log']('OnGameLeve' + 'lFail(' + _0x157dd8['nameid'] + ')');
            try {
                var _0x6c6d84 = eval('OnGameLevelFail;');
                _0x6c6d84 && _0x6c6d84['call'](this, _0x157dd8['nameid']);
            } catch (_0x40d9fd) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[OnGame' + 'LevelFail]' + '.');
            }
        }, _0x1feb2a['onOpenUrlH' + 'andler'] = function (_0x32a73c) {
            _0x157dd8['OpenWebsit' + 'e'](_0x32a73c['data']['url'], _0x32a73c['data']['target']);
        }, _0x1feb2a['onOpenEmai' + 'lHandler'] = function (_0x313170) {
            _0x157dd8['OpenWebsit' + 'e']('mailto:' + _0x313170['data']['email'], '_self');
        }, _0x1feb2a['onDownload' + 'AppHandler'] = function (_0x51438a) {
            _0x157dd8['SendAnaly'](_0x157dd8['nameid'], _0x157dd8['state'], _0x51438a['data']['platform']);
        }, _0x1feb2a['onClickCre' + 'ditsHandle' + 'r'] = function (_0x15c2fa) {
        }, _0x1feb2a['startup'] = function (_0x586bf3, _0x58d210, _0x89e2c7) {
            this['init'](_0x586bf3, _0x58d210, _0x89e2c7);
            var _0x393f4f = []['map'] && document['createElem' + 'ent']('canvas')['getContext'];
            if (_0x393f4f) {
                var _0x1f92f0 = !0x1;
                try {
                    eval('cc;'), _0x1f92f0 = !0x0;
                } catch (_0xd46cb2) {
                }
                _0x1f92f0 ? eval('cc;')['game']['run']() : _0x157dd8['debug'] ? (eval('egret_h5;')['preloadScr' + 'ipt'](eval('egret_file_list;'), 'libs/'), eval('egret_h5;')['preloadScr' + 'ipt'](eval('game_file_list;'), 'bin-debug/' + 'src/'), eval('egret_h5;')['startLoadi' + 'ng']()) : eval('egret_h5;')['startGame']();
            } else
                alert('Please\x20cha' + 'nge\x20your\x20b' + 'rowser\x20to\x20' + 'play\x20the\x20g' + 'ame.');
        }, _0x1feb2a['doResize'] = function (_0x4b4d59) {
            var _0x3d637e = $(window)['width'](), _0x2ea662 = $(window)['height'](), _0x59e3ac = !0x1, _0x270727 = 0x1;
            _0x3d637e > _0x2ea662 && (_0x59e3ac = !0x0), _0x270727 = _0x59e3ac ? _0x2ea662 / 0x1e0 : _0x3d637e / 0x1e0, _0x270727 > 0x1 && (_0x270727 = 0x1), $('#_loadingR' + 'oot')[0x0]['style']['zoom'] = _0x270727;
        }, _0x1feb2a['init'] = function (_0x254105, _0x378d00, _0x11edc9) {
            _0x157dd8['gamename'] = _0x254105, _0x157dd8['nameid'] = _0x378d00, _0x157dd8['debug'] = _0x11edc9 ? !0x0 : !0x1;
            var _0x5b6e30 = document['createElem' + 'ent']('style');
            document['body']['appendChil' + 'd'](_0x5b6e30), _0x5b6e30['innerHTML'] = this['style'];
            var _0x1902a7 = document['createElem' + 'ent']('div');
            _0x1902a7['id'] = '_root', _0x1902a7['innerHTML'] = '<div\x20id=\x22_' + 'loadingRoo' + 't\x22><img\x20id' + '=\x22_bgImg\x22/' + '><div\x20id=\x22' + '_logoConta' + 'iner\x22><img' + '\x20id=\x22_logo' + 'Img\x22/></di' + 'v><div\x20id=' + '\x22_progress' + 'Container\x22' + '><div\x20id=\x22' + '_progressB' + 'g\x22><div\x20id' + '=\x22_progres' + 'sBar\x22></di' + 'v></div></' + 'div><div\x20i' + 'd=\x22_playCo' + 'ntainer\x22><' + 'img\x20id=\x22_p' + 'layImg\x22/><' + '/div></div' + '>', document['body']['appendChil' + 'd'](_0x1902a7), $('#_logoImg')[0x0]['src'] = this['logoUrl'], $('#_playImg')[0x0]['src'] = this['playUrl'], $('#_bgImg')[0x0]['src'] = this['bgUrl'], this['miniLogoUr' + 'l'] = this['miniLogoUr' + 'l'], $('#_playCont' + 'ainer')[0x0]['onclick'] = function () {
                $('#_playCont' + 'ainer')['opacity'] < 0x1 || _0x157dd8['instance']['clickPlay']();
            }, $('#_logoCont' + 'ainer')[0x0]['onclick'] = function () {
                _0x157dd8['ClickLoadi' + 'ngLogo']();
            }, $('#_root\x20img')['each'](function (_0x310e24, _0x378a5a) {
                _0x378a5a['onload'] = function (_0x3f7e2a) {
                    var _0x32dfe6 = _0x3f7e2a['currentTar' + 'get'];
                    '_bgImg' != _0x32dfe6['id'] && (_0x32dfe6['style']['margin-lef' + 't'] = -_0x32dfe6['width'] / 0x2 + 'px', _0x32dfe6['style']['margin-top'] = -_0x32dfe6['height'] / 0x2 + 'px'), _0x32dfe6['style']['display'] = 'inline', '_logoImg' == _0x32dfe6['id'] && ($(_0x32dfe6)['animate']({ 'opacity': 0x1 }, 0x12c), $('#_progress' + 'Container')[0x0]['style']['display'] = 'inline'), '_bgImg' == _0x32dfe6['id'] && (_0x32dfe6['style']['opacity'] = 0x0, $(_0x32dfe6)['animate']({ 'opacity': 0x1 }, 0x1f4));
                };
            }), window['addEventLi' + 'stener']('resize', this['doResize']), this['doResize'](null), MGDelegate['addEventLi' + 'stener'](MGEvent['LOAD_START'], this['onLoadStar' + 'tHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['LOAD_PROGR' + 'ESS'], this['onLoadProg' + 'ressHandle' + 'r'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['LOAD_COMPL' + 'ETE'], this['onLoadComp' + 'leteHandle' + 'r'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['LOAD_ERROR'], this['onLoadErro' + 'rHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['START_GAME'], this['onGameStar' + 'tHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['PAUSE_GAME'], this['onGamePaus' + 'eHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['SHOW_WIN'], this['onShowWinH' + 'andler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['SHOW_LOSE'], this['onShowLose' + 'Handler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['ADDED_TO_S' + 'TAGE'], this['onAddedToS' + 'tageHandle' + 'r'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['FRAMEWORK_' + 'INFO_REQUE' + 'ST'], this['onFramewor' + 'kInfoReque' + 'st'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['CLICK_MORE'], this['onClickMor' + 'eHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['CLICK_MINI' + 'LOGO'], this['onClickMin' + 'iLogo'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['OPEN_URL'], this['onOpenUrlH' + 'andler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['OPEN_EMAIL'], this['onOpenEmai' + 'lHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['SHARE'], this['onShareHan' + 'dler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['DOWNLOAD_A' + 'PP'], this['onDownload' + 'AppHandler'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['CLICK_CRED' + 'ITS'], this['onClickCre' + 'ditsHandle' + 'r'], this), MGDelegate['addEventLi' + 'stener'](MGEvent['SCREENSHOT'], this['onScreensh' + 'otHandler'], this);
        }, _0x157dd8['SendAnaly'] = function (_0x59b015, _0x28a404, _0x1363b4) {
            console['log']('SendAnaly(' + _0x59b015 + ',' + _0x28a404 + ',' + _0x1363b4 + ')');
            try {
                var _0x141a79 = eval('CreateLinksInGame;');
                _0x141a79 && _0x141a79['call'](this, _0x59b015, _0x28a404, _0x1363b4);
            } catch (_0x26c66c) {
                console['log']('Can\x20not\x20fo' + 'und\x20functi' + 'on\x20[Create' + 'LinksInGam' + 'e].');
            }
        }, _0x157dd8['ClickLoadi' + 'ngLogo'] = function () {
            _0x157dd8['SendAnaly'](_0x157dd8['nameid'], 'loading', 'logo');
        }, _0x157dd8['ClickLoadi' + 'ngSplash'] = function () {
            _0x157dd8['SendAnaly'](_0x157dd8['nameid'], 'splash', 'logo');
        }, _0x157dd8['ClickMiniL' + 'ogo'] = function () {
            _0x157dd8['SendAnaly'](_0x157dd8['nameid'], _0x157dd8['state'], 'logo');
        }, _0x157dd8['ClickMore'] = function () {
            _0x157dd8['SendAnaly'](_0x157dd8['nameid'], _0x157dd8['state'], 'moregamesb' + 'tn');
        }, _0x157dd8['OpenWebsit' + 'e'] = function (_0x591c8a, _0x48d987) {
            arguments[0x0] || (_0x591c8a = '//miagame.' + 'com'), arguments[0x1] || (_0x48d987 = '_blank'), window['open'](_0x591c8a, '_blank');
        }, _0x157dd8['debug'] = !0x1, _0x157dd8['version'] = '2.0.5', _0x157dd8['sharemsgs'] = {}, _0x157dd8['showmsgs'] = {}, _0x157dd8['language'] = 'en-US', _0x157dd8['PREGAME'] = 'pregame', _0x157dd8['INGAME'] = 'ingame', _0x157dd8['state'] = _0x157dd8['PREGAME'], _0x157dd8['HasScreens' + 'hot'] = !0x0, _0x157dd8['nameid'] = '-1', _0x157dd8['gamename'] = '-1', _0x157dd8;
    }();
MGFramework['prototype']['__class__'] = 'MGFramewor' + 'k', MGFramework['instance'] = new MGFramework('');
var MGF = MGFramework;