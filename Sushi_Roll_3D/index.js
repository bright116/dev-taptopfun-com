window.screenOrientation = "sensor_landscape",
    loadLib("libs/min/laya.core.min.js"),
    loadLib("libs/min/laya.ui.min.js"),
    loadLib("libs/min/laya.d3.min.js"),
    loadLib("utils/jiujiu_sdk_conf.js"),
    loadLib("utils/jiujiu_pull_sdk.js"),
    null != window.wx && loadLib("utils/jiujiu_sdk.js"),
    loadLib("js/bundle.js");