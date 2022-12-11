let style = '#our_logo{display:block;z-index:9999999;position:absolute}#our_logo.size_140{width:140px;height:18px}#our_logo.size_120{width:120px;height:18px}';
let vse = {
    "size_140": '<div id="our_logo" class="size_140"><a target="_blank" href="https://vseigru.net/" title="Все Игры - Онлайн"><img src="/dasha1/111.png" width="140" height="18" style="cursor: pointer;" title="" alt="Все Игры - Онлайн"></a></div>',
    "size_120": '<div id="our_logo" class="size_120"><a target="_blank" href="https://vseigru.net/" title="Все Игры - Онлайн"><img src="/dasha1/111.png" width="120" height="18" style="cursor: pointer;" title="" alt="Все Игры - Онлайн"></a></div>'
}
let gm = {
    "size_140": '<div id="our_logo" class="size_140"><a target="_blank" href="https://gameis.net/" title="Games Online - Play For Free"><img src="/dasha1/1112.png" width="140" height="18" style="cursor: pointer;" title="" alt="Games Online - Play For Free"></a></div>',
    "size_120": '<div id="our_logo" class="size_120"><a target="_blank" href="https://gameis.net/" title="Games Online - Play For Free"><img src="/dasha1/1112.png" width="120" height="18" style="cursor: pointer;" title="" alt="Games Online - Play For Free"></a></div>'
}
let css = (e, styles) => {
    for (const property in styles)
        e.style[property] = styles[property];
}
let alertLogo = (size = '140', position) => {
    const sheet = document.createElement('style');
    sheet.innerHTML = style;
    document.body.appendChild(sheet);
    const wrapperLogo = document.createElement('div');
    let lang = (navigator.language || navigator.userLanguage).slice(0, 2);
    let currentLogo = '';
    document.referrer.includes(atob("Z2FtZWlzLm5ldA==")) && (lang = 'gm');
    document.referrer.includes(atob("dnNlaWdydS5uZXQ=")) && (lang = 'vse');
    ((lang === 'en' || lang === 'gm') && lang !== 'vse') ? currentLogo = gm['size_' + size]: currentLogo = vse['size_' + size];
    wrapperLogo.innerHTML = currentLogo;
    document.body.appendChild(wrapperLogo);
    typeof position != 'undefined' && (css(document.getElementById('our_logo'), position));
}