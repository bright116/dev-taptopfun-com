function ShareToFacebook(_0x18c818, _0x46a172) {
    var _0x21cd65 = '' + _0x18c818, _0x50e84e = '';
    window['open'](_0x50e84e);
}
function ShareToWebsites(_0x5bac7e, _0x149534, _0x59e18d, _0x23d831) {
    switch (_0x5bac7e) {
    case 'facebook':
        ShareToFacebook(_0x59e18d, _0x23d831);
        break;
    case 'twitter':
        ShareToTwitter(_0x59e18d, _0x23d831);
        break;
    }
}
function ShareToTwitter(_0x34f62c, _0x5ef873) {
    var _0x1d51c0 = '' + _0x34f62c, _0x3a633f = '';
    window['open'](_0x3a633f);
}
function CreateLinksInGame(_0x5f028, _0x5220a3, _0x691fd0) {
    GameTag = typeof GameTag !== 'undefined' ? GameTag : 'home';
    var _0x55fcc2 = document['referrer'], _0x564224 = '';
    typeof _0x55fcc2 === 'undefined' || _0x55fcc2 == '' || _0x55fcc2 == 'undefined' ? _0x55fcc2 = '' : _0x55fcc2 = _0x55fcc2['split']('/')[0x2], (_0x691fd0['substring'](0x0, 0x4) == 'app_' || _0x691fd0 == 'gg' || _0x691fd0 == 'ios') && (_0x564224 = _0x564224 + ('app.php?ty' + 'pe=') + _0x691fd0 + '&nameid=' + _0x5f028), _0x564224['indexOf']('?') > -0x1 ? _0x564224 = _0x564224 + '&' : _0x564224 = _0x564224 + '?', _0x564224 = _0x564224 + ('utm_source' + '=') + _0x55fcc2 + ('&utm_mediu' + 'm=') + _0x5220a3 + '-' + _0x691fd0 + ('&utm_campa' + 'ign=game-') + _0x5f028, window['open'](_0x564224);
}
function OnGameStart(_0x2b882c, _0x321358) {
    console.log("请求插屏广告");

    // 展示插屏广告
    HUHU_showInterstitialAd();

    // 继续游戏
    complete && complete()
    return;
    // console['log']('call\x20OnGam' + 'eStart\x20yiv' + '.com,\x20name' + 'id:\x20' + _0x2b882c + ',\x20Times:\x20' + _0x321358);
}
function OnGamePause(_0x3ddb8b, _0xf55fae) {
    console.log("请求插屏广告");

    // 展示插屏广告
    HUHU_showInterstitialAd();

    // 继续游戏
    complete && complete()
    return;
    // console['log']('call\x20OnGam' + 'ePause\x20yiv' + '.com,\x20name' + 'id:\x20' + _0x3ddb8b + ',\x20Times:\x20' + _0xf55fae);
}
function OnGameLevelWin(_0x4f8872, _0x31a2fa) {
    console.log("请求插屏广告");

    // 展示插屏广告
    HUHU_showInterstitialAd();

    // 继续游戏
    complete && complete()
    return;
    // console['log']('call\x20OnGam' + 'eLevelWin\x20' + 'yiv.com,\x20n' + 'ameid:\x20' + _0x4f8872);
}
function OnGameLevelFail(_0x557efd) {
    console.log("请求插屏广告");

    // 展示插屏广告
    HUHU_showInterstitialAd();

    // 继续游戏
    complete && complete()
    return;
    // console['log']('call\x20OnGam' + 'eLevelFail' + '\x20yiv.com,\x20' + 'nameid:\x20' + _0x557efd);
}
function GetLanguageInGame(_0xc62e4d) {
    return GamesLanguage['en'][_0xc62e4d];
}
var d = new String(window['location']['host']);
$(document)['ready'](function () {
    if (typeof FB != 'undefined') {
    } else
        $['getScript']('https://co' + 'nnect.face' + 'book.com/e' + 'n_US/sdk.j' + 's', function () {
        });
});
function CreateToolTipDiv(_0x2f3b0c, _0x5d948b, _0xed758e) {
    $('#ToolTipDi' + 'vInGame')['remove'](), $('body')['append']('<div\x20id=\x27T' + 'oolTipDivI' + 'nGame\x27\x20sty' + 'le=\x27backgr' + 'ound:#f7d5' + 'fc;width:1' + '00%;height' + ':100%;posi' + 'tion:absol' + 'ute;top:0;' + 'left:0;fil' + 'ter:alpha(' + 'opacity=90' + ');-moz-opa' + 'city:\x200.90' + ';opacity:\x20' + '0.90;z-ind' + 'ex:\x20999;te' + 'xt-align:c' + 'enter;\x27\x20on' + 'click=\x27$(t' + 'his).remov' + 'e();\x27><div' + '\x20style=\x27ba' + 'ckground:\x20' + '#FFFFAA;co' + 'lor:#000;\x20' + 'border:\x201p' + 'x\x20solid\x20#F' + 'F3334;bord' + 'er-radius:' + '\x205px\x205px;\x20' + '-moz-borde' + 'r-radius:\x20' + '5px;\x20-webk' + 'it-border-' + 'radius:\x205p' + 'x;\x20box-sha' + 'dow:\x205px\x205' + 'px\x205px\x20rgb' + 'a(0,\x200,\x200,' + '\x200.1);\x20-we' + 'bkit-box-s' + 'hadow:\x205px' + '\x205px\x20rgba(' + '0,\x200,\x200,\x200' + '.1);\x20-moz-' + 'box-shadow' + ':\x205px\x205px\x20' + 'rgba(0,\x200,' + '\x200,\x200.1);f' + 'ont-family' + ':\x20Calibri,' + '\x20Tahoma,\x20G' + 'eneva,\x20san' + 's-serif;\x20z' + '-index:\x2010' + '00;\x20margin' + ':auto\x20auto' + ';padding-t' + 'op:20px;\x20w' + 'idth:\x20' + _0x2f3b0c + 'px;height:' + _0x5d948b + ('px;text-al' + 'ign:center' + ';position:' + '\x20relative;' + 'top:\x2050%;-' + 'webkit-tra' + 'nsform:\x20tr' + 'anslateY(-' + '50%);-ms-t' + 'ransform:\x20' + 'translateY' + '(-50%);tra' + 'nsform:\x20tr' + 'anslateY(-' + '50%);font-' + 'size:16px;' + 'line-heigh' + 't:16px;\x27>') + _0xed758e + ('<div\x20style' + '=\x27position' + ':absolute;' + 'top:-12px;' + 'right:-12p' + 'x;\x27><img\x20s' + 'rc=\x27/image' + 's/blue/del' + '.png\x27></di' + 'v></div></' + 'div>'));
}
function submitToFacebook(_0x399df9, _0x808c66, _0x918885, _0x28b424, _0x2e5d6d) {
    _0x808c66 = 'Play\x20The\x20G' + 'ame:\x20https' + '://www.yiv' + '.com/' + _0x918885, $['ajaxSetup']({ 'cache': !0x0 }), typeof FB != 'undefined' ? FBOperation(_0x399df9, _0x808c66, _0x28b424, _0x2e5d6d) : $['getScript']('https://co' + 'nnect.face' + 'book.com/e' + 'n_US/sdk.j' + 's', function () {
        FBOperation(_0x399df9, _0x808c66, _0x28b424, _0x2e5d6d);
    }), CreateToolTipDiv(0xc8, 0x3c, 'Sharing\x20to' + '\x20Facebook.' + '..\x20Be\x20Pati' + 'ent\x20Please');
}
function FBOperation(_0x50a1cc, _0x3c5a7d, _0x5c3f68, _0x12e9e0) {
    FB['init']({
        'appId': '8367001363' + '95273',
        'version': 'v2.0',
        'cookie': !0x0,
        'xfbml': !0x0,
        'frictionlessRequests': !0x0,
        'oauth': !0x0
    }), FB['login'](function (_0x1268f3) {
        _0x1268f3['authRespon' + 'se'] ? (window['authToken'] = _0x1268f3['authRespon' + 'se']['accessToke' + 'n'], PostImageToFacebook(window['authToken'], _0x50a1cc, _0x3c5a7d, _0x5c3f68, _0x12e9e0)) : (_0x12e9e0(), CreateToolTipDiv(0xdc, 0x28, 'Shared\x20Fai' + 'led,\x20Pleas' + 'e\x20Try\x20Agai' + 'n.'));
    }, { 'scope': 'publish_ac' + 'tions' });
}
function PostImageToFacebook(_0x480176, _0x10b85d, _0x3380c3, _0x1a04a5, _0x2089ea) {
    (_0x3380c3 == '' || typeof _0x3380c3 == 'undefined') && (_0x3380c3 = '');
    var _0x1e948c = document['getElement' + 'ById'](_0x10b85d), _0x329c5c = _0x1e948c['toDataURL']('image/png');
    try {
        blob = dataURItoBlob(_0x329c5c);
    } catch (_0x5a7902) {
    }
    var _0x284073 = new FormData();
    _0x284073['append']('access_tok' + 'en', _0x480176), _0x284073['append']('source', blob), _0x284073['append']('message', _0x3380c3);
    try {
        $['ajax']({
            'url': 'https://gr' + 'aph.facebo' + 'ok.com/v2.' + '0/me/photo' + 's?access_t' + 'oken=' + _0x480176,
            'type': 'POST',
            'data': _0x284073,
            'processData': !0x1,
            'contentType': !0x1,
            'cache': !0x1,
            'success': function (_0x4cd8de) {
                _0x1a04a5(), CreateToolTipDiv(0xdc, 0x28, 'Shared\x20Suc' + 'cessfully,' + '\x20thank\x20you' + '!');
            },
            'error': function (_0x581069, _0x31cc5e, _0x5d6f0e) {
                _0x2089ea(), CreateToolTipDiv(0xdc, 0x28, 'Shared\x20Fai' + 'led,\x20Pleas' + 'e\x20Try\x20Agai' + 'n.');
            },
            'complete': function () {
            }
        });
    } catch (_0x62c839) {
    }
}
function dataURItoBlob(_0x5b17f4) {
    var _0x39da94 = atob(_0x5b17f4['split'](',')[0x1]), _0x1a3130 = new ArrayBuffer(_0x39da94['length']), _0x1633ec = new Uint8Array(_0x1a3130);
    for (var _0x30c125 = 0x0; _0x30c125 < _0x39da94['length']; _0x30c125++) {
        _0x1633ec[_0x30c125] = _0x39da94['charCodeAt'](_0x30c125);
    }
    return new Blob([_0x1a3130], { 'type': 'image/png' });
}