window.screenOrientation = "sensor_landscape",

    window["allTweens"] = [];

window["canTouchMove"] =  function(){
    if( window["allTweens"].length == 0)return true;
    Promise.all(window["allTweens"]).then(() => {
        window["allTweens"].length = 0;
    })
    if( window["allTweens"].length == 0) true;
    return false;
};
loadLib("libs/laya.core.js"),
    loadLib("libs/laya.ui.js"),
    loadLib("libs/laya.d3.js"),
    loadLib("libs/laya.physics3D.js"),
    window.OIMO = loadLib("libs/oimo.min.js"),
    loadLib("js/bundle.js");